import React, { useState } from "react";
import { evaluate, parse } from "mathjs";
import { BlockMath } from "react-katex";
import { motion, AnimatePresence } from "framer-motion";
import Display from "./Display.jsx";
import Button from "./Button.jsx";

const Calculator = ({ toggle, state }) => {
  const [isScientific, setIsScientific] = useState(false);
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const basicButtons = [
    ["C", "+/-", "%", "/"],
    ["7", "8", "9", "*"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["0", ".", "="],
  ];
  const scientificButtons = [
    ["sin", "cos", "tan", "sqr"],
    ["log", "ln", "pi", "e"],
    ["^", "(", ")", "DEL"],
    ["C", "2", "3", "+"],
    ["0", ".", "="],
  ];

  let handleInput = (value) => {
    if (value === "=") {
      try {
        const output = evaluate(input);
        setResult(output);
      } catch {
        setResult("Error");
      }
    } else if (value === "C") {
      setInput("");
      setResult("");
    } else if (value === "DEL") {
      setInput((prev) => prev.slice(0, -1));
    } else if (value === "+/-") {
      setInput((prev) => (prev.startsWith("-") ? prev.slice(1) : "-" + prev));
    } else {
      const formatted =
        {
          sqr: "sqrt(",
          pi: "pi",
          e: "e",
        }[value] || value;
      setInput((prev) => prev + formatted);
    }
  };

  let latex;
  try {
    const node = parse(input);
    latex = node.toTex();
  } catch {
    latex = input;
  }

  return (
    <div className="flex flex-col items-center justify-center rounded-[28px] p-6 bg-surface-light/20 dark:bg-surface-dark/300 backdrop-blur-xl border border-white/20 dark:border-slate-800/40 shadow-soft-light dark:shadow-soft-dark transition-colors duration-300">
      <button className="absolute top-0 left-0" onClick={toggle}>Toggle {state ? "Light": "Dark"} Mode</button>
      <Display input={<BlockMath math={latex} />} result={result} />

      <button onClick={() => setIsScientific(!isScientific)}>
        {isScientific ? "Switch to Basic" : "Switch to Scientific"}
      </button>

      <AnimatePresence mode="wait">
        <motion.div
          key={isScientific ? "sci" : "basic"}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: "0.3" }}
          className="grid grid-cols-4 max-w-sm w-full  gap-3 mt-3 "
        >
          {isScientific
            ? scientificButtons
                .slice(0, 4)
                .map((row, i) =>
                  row.map((btn) => (
                    <Button
                      key={`${i}-${btn}`}
                      name={btn}
                      handle={handleInput}
                    />
                  ))
                )
            : basicButtons
                .slice(0, 4)
                .map((row, i) =>
                  row.map((btn) => (
                    <Button
                      key={`${i}-${btn}`}
                      name={btn}
                      handle={handleInput}
                    />
                  ))
                )}
          <button
            onClick={() => handleInput("0")}
            className="col-span-2 h-14 flex justify-center items-center rounded-2xl font-medium transition-all duration-200 ease-out active:translate-y-px shadow-soft-light dark:shadow-soft-dark hover:shadow-lg hover:brightness-110 bg-slate-100 dark:bg-slate-700 text-black dark:text-white "
          >
            0
          </button>
          <Button name="." handle={handleInput} />
          <Button name="=" handle={handleInput} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Calculator;
