import { useEffect, useState } from "react";

export function MyComponent() {
  const [count, setCount] = useState(0);

  // Mount
  useEffect(() => {
    console.log("✅ Mounted");
  }, []);

  // Update only on count change
  useEffect(() => {
    console.log("🔁 Count changed:", count);
  }, [count]);

  // Every render
  useEffect(() => {
    console.log("⚠️ Every render");
  });

  // Cleanup on Unmount
  useEffect(() => {
    return () => {
      console.log("❌ Component unmounted");
    };
  }, []);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(c => c + 1)}>Increase</button>
    </div>
  );
}
