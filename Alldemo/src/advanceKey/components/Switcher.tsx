import { useState } from "react";

const Switcher = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => setIsDark(!isDark);

  const themeStyles = isDark
    ? "bg-black text-white"
    : "bg-slate-300 text-black";

  return (
    <div>
      <span className={`${themeStyles} p-5 rounded m-2`}>
        {isDark ? "Dark" : "Light"}
      </span>

      <br />

      <input
        type="text"
        className="border-4 rounded"
        key={isDark ? "dark" : "light"}
      />

      <button className="ml-2 border px-4 rounded" onClick={toggleTheme}>Switch</button>
    </div>
  );
};

export default Switcher;
