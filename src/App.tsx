import logo from "./assets/logo.jpg";
import "./App.scss";
import { useState } from "react";
import { useHeartRate } from "./hooks/useHeartRate";
import { useFitnessMachine } from "./hooks/useFitnessMachine";

function App() {
  const {
    heartRate,
    connect: connectHR,
    disconnect: disconnectHR,
  } = useHeartRate();
  const { data, connect, disconnect } = useFitnessMachine();
  const { instantaneousPower, instantaneousCadence, instantaneousSpeed } = data;
  // @ts-ignore
  const [logs, setLogs] = useState(["test log 1", "test log 2"]);

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
      </div>
      <div className="logs">
        <h2>Logs</h2>
        {logs.map((log) => (
          <div className="log">{log}</div>
        ))}
      </div>
    </>
  );
}

export default App;
