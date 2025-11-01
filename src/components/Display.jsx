import React from "react";

const Display = ({ result, input }) => {
  return (
    <div className="text-right mb-4 w-full max-w-sm p-6 rounded-2xl bg-bg-light/10 dark:bg-bg-dark/60 text-text-light dark:text-text-dark/20 ">
      <div className="text-lg">{input || "0"}</div>
      <p className="text-4xl font-semibold">{result}</p>
    </div>
  );
};

export default Display;
