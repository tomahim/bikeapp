import logo from "./assets/logo.jpg";
import "./App.scss";
import { useEffect, useRef, useState } from "react";
import { useHeartRate } from "./hooks/useHeartRate";
import { useFitnessMachine } from "./hooks/useFitnessMachine";
import useDemoFitnessMachine from "./hooks/useDemoFitnessMachine";
import useSecondCounter from "./hooks/useSecondCounter";

function roundDecimals(num: number) {
  return Math.round(num * 100) / 100;
}

function useDistance(timer: number, instantaneousSpeed: number) {
  const [distance, setDistance] = useState(0);

  const speedRef = useRef(instantaneousSpeed);
  useEffect(() => {
    speedRef.current = instantaneousSpeed; // always up-to-date
  }, [instantaneousSpeed]);

  useEffect(() => {
    const increment = speedRef.current / 3600;
    setDistance((d) => d + increment);
  }, [timer]);

  return { distance: roundDecimals(distance) };
}

function App() {
  const {
    heartRate,
    connect: connectHR,
    disconnect: disconnectHR,
  } = useHeartRate();
  const { data: dataFitnessMachine, connect, disconnect } = useFitnessMachine();
  const { data: dataDemo } = useDemoFitnessMachine();
  const { counter } = useSecondCounter();

  // TODO: make a toggle between demo and real fitnessMachine
  const isDemo = true;
  const data = isDemo ? dataDemo : dataFitnessMachine;
  const { instantaneousPower, instantaneousCadence, instantaneousSpeed } = data;

  const { distance } = useDistance(counter, instantaneousSpeed);

  return (
    <>
      <div className="logo">
        <img alt="logo" src={logo} />
      </div>

      <div>
        <button onClick={connect}>Connect home trainer</button>
        <button onClick={disconnect} disabled={!heartRate}>
          Disconnect
        </button>
      </div>

      <div>
        <button onClick={connectHR}>Connect to HR Monitor</button>
        <button onClick={disconnectHR} disabled={!heartRate}>
          Disconnect
        </button>
      </div>

      <div className="time-counter">{counter}s</div>

      <div className="gauges">
        <b>{instantaneousSpeed ? instantaneousSpeed : "Ø"}</b> km/h -{" "}
        <b>{instantaneousPower ? instantaneousPower : "Ø"} w</b> -{" "}
        <b>{instantaneousCadence ? instantaneousCadence : "Ø"} RPM</b>
        {heartRate && (
          <>
            {" "}
            - <b>{heartRate}</b> BPM
          </>
        )}
        - {distance} m
      </div>
    </>
  );
}

export default App;
