import { useHeartRate } from "./hooks/useHeartRate";

function HeartRateMonitor() {
  const { heartRate, connect, disconnect } = useHeartRate();

  return (
    <span>
      <button onClick={connect}>Connect to HR Monitor</button>
      <button onClick={disconnect} disabled={!heartRate}>
        Disconnect
      </button>

      {heartRate && <span>{heartRate} BPM</span>}
    </span>
  );
}

export default HeartRateMonitor;
