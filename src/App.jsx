import React, { useState } from "react";
import Calculator from "./components/Calculator.jsx";
import BackgroundImage from "./assets/images/BackgroundPattern.jsx";
import { log } from "mathjs";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  let darkModeToggle = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div
      className={`${
        darkMode ? "dark" : ""
      } relative min-h-screen flex items-center justify-center bg-transparent text-gray-900 dark:text-gray-100`}
    >
      <BackgroundImage />

      <div className="relative z-10 w-full max-w-sm">
        <Calculator toggle={darkModeToggle} />
      </div>
    </div>
  );
};

export default App;
