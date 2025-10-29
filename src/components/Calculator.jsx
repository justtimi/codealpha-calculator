import React, { useState } from "react";
import { evaluate } from "mathjs";
import Display from "./Display.jsx";
import Button from "./Button.jsx";

const Calculator = ({ toggle }) => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const buttons = [
    ["C", "+/-", "%", "/"],
    ["7", "8", "9", "*"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["0", ".", "="],
  ];

  let handleInput = (value) => {
    if (value === "=") {
      try {
        setResult(evaluate(input));
      } catch {
        setResult("Error");
      }
    } else if (value === "C") {
      setInput("");
      setResult("");
    } else {
      setInput((prev) => prev + value);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center rounded-[28px] p-6 bg-surface-light/20 dark:bg-surface-dark/300 backdrop-blur-xl border border-white/20 dark:border-slate-800/40 shadow-soft-light dark:shadow-soft-dark transition-colors duration-300">
      <Display input={input} result={result} />

      <div className="grid grid-cols-4 max-w-sm w-full  gap-3 mt-3 ">
        {buttons
          .slice(0, 4)
          .map((row, i) =>
            row.map((btn) => (
              <Button key={`${i}-${btn}`} name={btn} handle={handleInput} />
            ))
          )}{" "}
        <button
          onClick={() => handleInput("0")}
          className="col-span-2 h-14 flex justify-center items-center rounded-2xl font-medium transition-all duration-200 ease-out active:translate-y-px shadow-soft-light dark:shadow-soft-dark hover:shadow-lg hover:brightness-110 bg-slate-100 dark:bg-slate-700 text-black dark:text-white "
        >
          0
        </button>
        <Button name="." handle={handleInput} />
        <Button name="=" handle={handleInput} />
      </div>
    </div>
  );
};

export default Calculator;
