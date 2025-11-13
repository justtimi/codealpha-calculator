import React, { useEffect, useState } from "react";
import Calculator from "./components/Calculator.jsx";
import BackgroundImage from "./assets/images/BackgroundPattern.jsx";

const App = () => {
  const [theme, setTheme] = useState(false);
  let darkModeToggle = () => {
    setTheme(!theme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) setTheme(savedTheme === "dark");
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme ? "dark" : "light");
  }, [theme]);

  return (
    <div
      className={`${
        theme ? "dark" : ""
      } relative min-h-screen flex items-center justify-center bg-transparent text-gray-900 dark:text-gray-100`}
    >
      <BackgroundImage />

      <div className="relative z-10 w-full max-w-sm">
        <Calculator toggle={darkModeToggle} state={theme} />
      </div>
    </div>
  );
};

export default App;
