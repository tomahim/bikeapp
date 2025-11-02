import { useEffect, useRef, useCallback } from "react";
import mapboxgl from "mapbox-gl";
import * as turf from "@turf/turf";

// ──────────────────────────────────────────────────────────────────────
// Constants
// ──────────────────────────────────────────────────────────────────────
const DEGREES_TO_RADIANS = Math.PI / 180;
const METERS_PER_DEGREE_LNG = 70000;
const METERS_PER_DEGREE_LAT = 110000;

// ──────────────────────────────────────────────────────────────────────
// Types
// ──────────────────────────────────────────────────────────────────────
interface Point2D {
  lng: number;
  lat: number;
}

interface UseJourneyAnimationParams {
  containerRef: React.RefObject<HTMLDivElement>;
  gpxContent: string;
  animationSpeed?: number; // km/h
  mapboxToken: string;
  startColor?: string; // color at the **beginning** of the journey
  endColor?: string; // color **at the dot**
  aheadColor?: string; // color of the **future** path
}

interface UseJourneyAnimationReturn {
  map: mapboxgl.Map | null;
  startAnimation: () => void;
  stopAnimation: () => void;
}

// ──────────────────────────────────────────────────────────────────────
// Hook
// ──────────────────────────────────────────────────────────────────────
const useJourneyAnimation = ({
  containerRef,
  gpxContent,
  animationSpeed = 50,
  mapboxToken,
  startColor = "#34c759", // green – behind (start)
  endColor = "#1a73e8", // blue  – at the dot
  aheadColor = "#e0e0e0", // light-gray – ahead
}: UseJourneyAnimationParams): UseJourneyAnimationReturn => {
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const animationRef = useRef<number | null>(null);
  const prevCenterRef = useRef<Point2D>({ lng: 0, lat: 0 });
  const prevBearingRef = useRef<number>(0);
  const fullPathRef = useRef<turf.Feature<turf.LineString> | null>(null);
  const totalDistanceRef = useRef<number>(0);

  // ────── GPX → coordinates ──────
  const parseGPX = useCallback((gpx: string): number[][] => {
    const parser = new DOMParser();
    const xml = parser.parseFromString(gpx, "text/xml");
    const pts = xml.getElementsByTagName("trkpt");
    const out: number[][] = [];
    for (let i = 0; i < pts.length; i++) {
      const lat = parseFloat(pts[i].getAttribute("lat") ?? "");
      const lng = parseFloat(pts[i].getAttribute("lon") ?? "");
      if (!isNaN(lat) && !isNaN(lng)) out.push([lng, lat]);
    }
    return out;
  }, []);

  // ────── Camera offset (pitch) ──────
  const computeCameraCenter = useCallback(
    (
      pitch: number,
      bearing: number,
      target: Point2D,
      altitude: number
    ): Point2D => {
      const bRad = bearing * DEGREES_TO_RADIANS;
      const pRad = pitch * DEGREES_TO_RADIANS;
      const offset = altitude / Math.tan(pRad);
      const sin = Math.sin(-bRad);
      const cos = Math.cos(-bRad);
      const lngDiff = (offset * sin) / METERS_PER_DEGREE_LNG;
      const latDiff = (offset * cos) / METERS_PER_DEGREE_LAT;
      return { lng: target.lng + lngDiff, lat: target.lat - latDiff };
    },
    []
  );

  // ────── Lerp ──────
  const lerp = useCallback(
    (a: number, b: number, t: number) => (1 - t) * a + t * b,
    []
  );

  // ────── Map init ──────
  useEffect(() => {
    if (!containerRef.current || !gpxContent || mapRef.current || !mapboxToken)
      return;

    mapboxgl.accessToken = mapboxToken;
    const map = new mapboxgl.Map({
      container: containerRef.current,
      style: "mapbox://styles/mapbox/satellite-v9",
      zoom: 10,
      center: [0, 0],
    });
    mapRef.current = map;

    map.on("load", () => {
      // ---- terrain -------------------------------------------------
      map.addSource("mapbox-dem", {
        type: "raster-dem",
        url: "mapbox://mapbox.mapbox-terrain-dem-v1",
        tileSize: 512,
      });
      map.setTerrain({ source: "mapbox-dem", exaggeration: 1.5 });

      // ---- parse GPX ------------------------------------------------
      const coords = parseGPX(gpxContent);
      if (coords.length < 2) return;

      const fullPath = turf.lineString(coords);
      fullPathRef.current = fullPath;
      totalDistanceRef.current = turf.length(fullPath, { units: "kilometers" });

      // ---- full route (ahead) ---------------------------------------
      map.addSource("route-ahead", {
        type: "geojson",
        lineMetrics: true,
        data: fullPath,
      });
      map.addLayer({
        id: "route-ahead",
        type: "line",
        source: "route-ahead",
        paint: {
          "line-width": 6,
          "line-color": aheadColor,
        },
      });

      // ---- progressed route (behind) --------------------------------
      map.addSource("route-behind", {
        type: "geojson",
        lineMetrics: true,
        data: turf.lineString([coords[0], coords[0]]), // start with zero length
      });
      map.addLayer({
        id: "route-behind",
        type: "line",
        source: "route-behind",
        paint: {
          "line-width": 6,
          "line-gradient": [
            "interpolate",
            ["linear"],
            ["line-progress"],
            0,
            startColor,
            1,
            endColor,
          ],
        },
      });

      // ---- blue dot -------------------------------------------------
      map.addSource("dot", {
        type: "geojson",
        data: turf.point(coords[0]),
      });
      map.addLayer({
        id: "dot",
        type: "circle",
        source: "dot",
        paint: {
          "circle-radius": 10,
          "circle-color": endColor,
          "circle-stroke-width": 3,
          "circle-stroke-color": "#fff",
        },
      });

      // ---- fit bounds ------------------------------------------------
      const bbox = turf.bbox(fullPath) as [number, number, number, number];
      map.fitBounds(bbox, { padding: 80 });

      // ---- initial bearing -------------------------------------------
      const p1 = turf.point(coords[0]);
      const p2 = turf.point(coords[1]);
      prevBearingRef.current = turf.bearing(p1, p2);
    });

    return () => {
      mapRef.current?.remove();
      mapRef.current = null;
    };
  }, [
    containerRef,
    gpxContent,
    mapboxToken,
    parseGPX,
    startColor,
    endColor,
    aheadColor,
  ]);

  // ────── Animation ──────
  const startAnimation = useCallback(() => {
    if (!mapRef.current || !fullPathRef.current) return;

    const map = mapRef.current;
    const path = fullPathRef.current;
    const total = totalDistanceRef.current;
    const durationMs = (total / animationSpeed) * 3600 * 1000;

    const start = Date.now();

    const PITCH = 60;
    const ALTITUDE = 400;
    const ZOOM = 14.5;
    const SMOOTH = 0.1;
    const EPS = 0.05; // km

    const animate = () => {
      const elapsed = Date.now() - start;
      const phase = Math.min(elapsed / durationMs, 1);

      // ---- current point ------------------------------------------------
      const curDist = total * phase;
      const curPoint = turf.along(path, curDist, { units: "kilometers" });

      // ---- update behind layer (gradient) -------------------------------
      const behindLine = turf.lineSlice(
        turf.point(path.geometry.coordinates[0]),
        curPoint,
        path
      );
      (map.getSource("route-behind") as mapboxgl.GeoJSONSource).setData(
        behindLine
      );

      // ---- update dot ---------------------------------------------------
      (map.getSource("dot") as mapboxgl.GeoJSONSource).setData(curPoint);

      if (phase >= 1) return; // animation finished

      // ---- bearing ------------------------------------------------------
      let bearing: number;
      if (phase < 0.001) {
        bearing = prevBearingRef.current;
      } else {
        const prevD = Math.max(0, curDist - EPS);
        const nextD = Math.min(total, curDist + EPS);
        const prevPt = turf.along(path, prevD, { units: "kilometers" });
        const nextPt = turf.along(path, nextD, { units: "kilometers" });
        bearing = turf.bearing(prevPt, nextPt);
      }
      bearing = lerp(prevBearingRef.current, bearing, SMOOTH);
      prevBearingRef.current = bearing;

      // ---- camera -------------------------------------------------------
      const rawCenter = computeCameraCenter(
        PITCH,
        bearing,
        {
          lng: curPoint.geometry.coordinates[0],
          lat: curPoint.geometry.coordinates[1],
        },
        ALTITUDE
      );
      const center = {
        lng: lerp(prevCenterRef.current.lng, rawCenter.lng, SMOOTH),
        lat: lerp(prevCenterRef.current.lat, rawCenter.lat, SMOOTH),
      };
      prevCenterRef.current = center;

      map.easeTo({
        center: [center.lng, center.lat] as [number, number],
        zoom: ZOOM,
        pitch: PITCH,
        bearing,
        duration: 0,
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();
  }, [animationSpeed, lerp, computeCameraCenter]);

  const stopAnimation = useCallback(() => {
    if (animationRef.current) cancelAnimationFrame(animationRef.current);
    animationRef.current = null;
  }, []);

  useEffect(() => stopAnimation, [stopAnimation]);

  return { map: mapRef.current, startAnimation, stopAnimation };
};

export default useJourneyAnimation;
