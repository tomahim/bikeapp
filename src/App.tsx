import logo from "./assets/logo.jpg";
import "./App.scss";
import { useState } from "react";
import HeartRateMonitor from "./HeartRateMonitor";

function App() {
  // @ts-ignore
  const [speed, setSpeed] = useState(10.5);
  // @ts-ignore
  const [power, setPower] = useState(150);
  // @ts-ignore
  const [logs, setLogs] = useState(["test log 1", "test log 2"]);

  return (
    <>
      <div className="logo">
        <img alt="logo" src={logo} />
      </div>
      <div className="gauges">
        <b>{speed}</b> km/h - <b>{power}w</b> - <HeartRateMonitor />
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
