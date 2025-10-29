import { useCallback, useRef, useState } from "react";

const parseHeartRate = (dv: DataView): number => {
  const flags = dv.getUint8(0);
  const rate16Bits = flags & 0x1;
  let heartRate = 0;
  let index = 1;

  heartRate = rate16Bits ? dv.getUint16(index, true) : dv.getUint8(index);
  index += rate16Bits ? 2 : 1;

  return heartRate;
};

/**
 * Custom hook that returns **only** the parsed heart rate data.
 * Inspiration taken from: https://webbluetoothcg.github.io/web-bluetooth/
 */
export const useHeartRate = () => {
  const [heartRate, setHeartRate] = useState<number | null>(null);
  // @ts-ignore
  const characteristicRef = useRef<BluetoothRemoteGATTCharacteristic | null>(
    null
  );

  // Event handler for heart rate notifications
  const onHeartRateChanged = useCallback((event: Event) => {
    // @ts-ignore
    const char = event.target as BluetoothRemoteGATTCharacteristic;
    if (char.value) {
      setHeartRate(parseHeartRate(char.value));
    }
  }, []);

  // Connect – **must be called from a user gesture**
  const connect = useCallback(async () => {
    try {
      // @ts-ignore
      const device = await navigator.bluetooth.requestDevice({
        acceptAllDevices: false,
        filters: [{ services: ["heart_rate"] }],
      });

      const server = await device.gatt!.connect();
      const service = await server.getPrimaryService("heart_rate");
      const char = await service.getCharacteristic("heart_rate_measurement");

      characteristicRef.current = char;

      await char.startNotifications();
      char.addEventListener("characteristicvaluechanged", onHeartRateChanged);
    } catch (err: unknown) {
      console.error("Bluetooth connection failed:", err);
      setHeartRate(null);
      throw err;
    }
  }, [onHeartRateChanged]);

  // Disconnect & cleanup
  const disconnect = useCallback(() => {
    if (characteristicRef.current) {
      characteristicRef.current.removeEventListener(
        "characteristicvaluechanged",
        onHeartRateChanged
      );
      characteristicRef.current.stopNotifications().catch(() => {});
      characteristicRef.current = null;
    }
    setHeartRate(null);
  }, [onHeartRateChanged]);

  return {
    heartRate, // Only the parsed heart rate object
    connect, // Must be called from a click/tap
    disconnect,
  };
};
