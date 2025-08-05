import { useEffect, useRef, useState } from 'react';

export default function Timer() {
  const [count, setCount] = useState(0);
  const intervalRef = useRef<number | null>(null); // Secret pocket - does not cause re-renders

  console.log("🔁 Rendered | Current count:", count);

  useEffect(() => {
    console.log("🚀 useEffect ran on mount");

    intervalRef.current = window.setInterval(() => {
      console.log("⏱️ Interval running...");
      setCount((c) => {
        console.log("➕ Updating count from", c, "to", c + 1);
        return c + 1;
      });
    }, 1000);

    return () => {
      console.log("🧹 Cleaning up interval on unmount");
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        console.log("🛑 Interval cleared in cleanup");
      }
    };
  }, []); // Empty array = run once when component mounts

  return (
    <div>
      <p>Timer: {count}</p>
      <button
        onClick={() => {
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
            console.log("🛑 Manually stopped the interval");
          }
        }}
      >
        Stop
      </button>
    </div>
  );
}
