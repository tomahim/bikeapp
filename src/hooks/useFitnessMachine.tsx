import { useCallback, useRef, useState } from "react";

export interface IndoorBikeData {
  // Speed
  instantaneousSpeedPresent: boolean;
  instantaneousSpeed: number; // km/h
  averageSpeedPresent: boolean;
  averageSpeed: number; // km/h

  // Cadence
  instantaneousCadencePresent: boolean;
  instantaneousCadence: number; // rpm
  averageCadencePresent: boolean;
  averageCadence: number; // rpm

  // Power
  instantaneousPowerPresent: boolean;
  instantaneousPower: number; // watts
  averagePowerPresent: boolean;
  averagePower: number; // watts

  // Distance
  nativeTotalDistancePresent: boolean;
  nativeTotalDistance: number; // meters

  // Resistance
  nativeResistanceLevelPresent: boolean;
  nativeResistanceLevel: number; // unitless

  // Energy
  expendedEnergyPresent: boolean;
  totalEnergy: number; // kJ
  energyPerHour: number; // kJ/h
  energyPerMinute: number; // kJ/min

  // Heart Rate
  heartRatePresent: boolean;
  heartRate: number; // bpm

  // MET
  metabolicEquivalentPresent: boolean;
  metabolicEquivalent: number; // METs

  // Time
  nativeElapsedTimePresent: boolean;
  nativeElapsedTime: number; // seconds
}

export const defaultData: IndoorBikeData = {
  instantaneousSpeedPresent: false,
  instantaneousSpeed: 0,
  averageSpeedPresent: false,
  averageSpeed: 0,
  instantaneousCadencePresent: false,
  instantaneousCadence: 0,
  averageCadencePresent: false,
  averageCadence: 0,
  instantaneousPowerPresent: false,
  instantaneousPower: 0,
  averagePowerPresent: false,
  averagePower: 0,
  nativeTotalDistancePresent: false,
  nativeTotalDistance: 0,
  nativeResistanceLevelPresent: false,
  nativeResistanceLevel: 0,
  expendedEnergyPresent: false,
  totalEnergy: 0,
  energyPerHour: 0,
  energyPerMinute: 0,
  heartRatePresent: false,
  heartRate: 0,
  metabolicEquivalentPresent: false,
  metabolicEquivalent: 0,
  nativeElapsedTimePresent: false,
  nativeElapsedTime: 0,
};

export const useFitnessMachine = () => {
  const [data, setData] = useState<IndoorBikeData>(defaultData);
  // @ts-ignore
  const charRef = useRef<BluetoothRemoteGATTCharacteristic | null>(null);

  const parseIndoorBikeData = (dv: DataView): IndoorBikeData => {
    const result = { ...defaultData };
    const flags = dv.getUint16(0, true);

    const moreDataPresent = flags & 0x0001;
    const averageSpeedPresent = flags & 0x0002;
    const instantaneousCadencePresent = flags & 0x0004;
    const averageCadencePresent = flags & 0x0008;
    const nativeTotalDistancePresent = flags & 0x0010;
    const nativeResistanceLevelPresent = flags & 0x0020;
    const instantaneousPowerPresent = flags & 0x0040;
    const averagePowerPresent = flags & 0x0080;
    const expendedEnergyPresent = flags & 0x0100;
    const heartRatePresent = flags & 0x0200;
    const metabolicEquivalentPresent = flags & 0x0400;
    const nativeElapsedTimePresent = flags & 0x0800;
    const remainingTimePresent = flags & 0x1000;

    let index = 2;

    // Instantaneous Speed (only if moreDataPresent === 0)
    if (!moreDataPresent) {
      result.instantaneousSpeedPresent = true;
      result.instantaneousSpeed = dv.getUint16(index, true) / 100;
      index += 2;
    }

    if (averageSpeedPresent) {
      result.averageSpeedPresent = true;
      result.averageSpeed = dv.getUint16(index, true) / 100;
      index += 2;
    }

    if (instantaneousCadencePresent) {
      result.instantaneousCadencePresent = true;
      result.instantaneousCadence = dv.getUint16(index, true) / 2;
      index += 2;
    }

    if (averageCadencePresent) {
      result.averageCadencePresent = true;
      result.averageCadence = dv.getUint16(index, true) / 2;
      index += 2;
    }

    if (nativeTotalDistancePresent) {
      result.nativeTotalDistancePresent = true;
      result.nativeTotalDistance =
        dv.getUint8(index) +
        (dv.getUint8(index + 1) << 8) +
        (dv.getUint8(index + 2) << 16);
      index += 3;
    }

    if (nativeResistanceLevelPresent) {
      result.nativeResistanceLevelPresent = true;
      result.nativeResistanceLevel = dv.getInt16(index, true);
      index += 2;
    }

    if (instantaneousPowerPresent) {
      result.instantaneousPowerPresent = true;
      result.instantaneousPower = dv.getInt16(index, true);
      index += 2;
    }

    if (averagePowerPresent) {
      result.averagePowerPresent = true;
      result.averagePower = dv.getInt16(index, true);
      index += 2;
    }

    if (expendedEnergyPresent) {
      result.expendedEnergyPresent = true;
      result.totalEnergy = dv.getUint16(index, true);
      index += 2;
      result.energyPerHour = dv.getUint16(index, true);
      index += 2;
      result.energyPerMinute = dv.getUint8(index);
      index += 1;
    }

    if (heartRatePresent) {
      result.heartRatePresent = true;
      result.heartRate = dv.getUint8(index);
      index += 1;
    }

    if (metabolicEquivalentPresent) {
      result.metabolicEquivalentPresent = true;
      result.metabolicEquivalent = dv.getUint8(index) / 10;
      index += 1;
    }

    if (nativeElapsedTimePresent) {
      result.nativeElapsedTimePresent = true;
      result.nativeElapsedTime = dv.getUint16(index, true);
      index += 2;
    }

    if (remainingTimePresent) {
      index += 2; // skip
    }

    return result;
  };

  const onDataChange = useCallback((event: Event) => {
    // @ts-ignore
    const char = event.target as BluetoothRemoteGATTCharacteristic;
    if (char.value) {
      setData(parseIndoorBikeData(char.value));
    }
  }, []);

  const connect = useCallback(async () => {
    try {
      // @ts-ignore
      const device = await navigator.bluetooth.requestDevice({
        filters: [{ services: ["fitness_machine"] }],
      });

      const server = await device.gatt!.connect();
      const service = await server.getPrimaryService("fitness_machine");
      const char = await service.getCharacteristic("indoor_bike_data");

      charRef.current = char;
      await char.startNotifications();
      char.addEventListener("characteristicvaluechanged", onDataChange);

      setData(defaultData); // reset
    } catch (err) {
      console.error("Failed to connect to fitness machine:", err);
      setData(defaultData);
      throw err;
    }
  }, [onDataChange]);

  const disconnect = useCallback(() => {
    const char = charRef.current;
    if (char) {
      char.removeEventListener("characteristicvaluechanged", onDataChange);
      char.stopNotifications().catch(() => {});
      charRef.current = null;
    }
    setData(defaultData);
  }, [onDataChange]);

  return { data, connect, disconnect };
};
