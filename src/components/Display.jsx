import React from "react";

const Display = ({ result, input }) => {
  return (
    <div className="text-right mb-4 w-full max-w-sm p-6 rounded-2xl bg-bg-light/10 dark:bg-bg-dark/60 text-text-light dark:text-text-dark/20 shadow-inset-light dark:shadow-inset-dark  hover:scale-[1.03] active:scale-[0.98] backdrop-blur-lg border border-white/20 dark:border-slate-700/40">
      <p className="text-lg">{input || "0"}</p>
      <p className="text-3xl font-semibold">{result}</p>
    </div>
  );
};

export default Display;
