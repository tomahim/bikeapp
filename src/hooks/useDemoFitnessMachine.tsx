import { useEffect, useRef, useState } from "react";
import { defaultData, type IndoorBikeData } from "./useFitnessMachine";
function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

function useDemoFitnessMachine() {
  const [data, setData] = useState<IndoorBikeData>(defaultData);
  const speeds = [10, 20, 30];

  const timeoutRef = useRef(null);

  // Function to schedule the next random increment
  const scheduleNext = () => {
    // @ts-ignore
    timeoutRef.current = setTimeout(() => {
      setData((prev) => ({
        ...prev,
        instantaneousSpeed: speeds[getRandomInt(3)],
      }));
      scheduleNext(); // Schedule the next one
    }, [1000, 2000, 3000][getRandomInt(3)]);
  };

  useEffect(() => {
    scheduleNext(); // Start the chain

    // Cleanup on unmount
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return { data };
}

export default useDemoFitnessMachine;
