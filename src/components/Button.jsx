import React from "react";
import { motion } from "framer-motion";

const Button = ({ name, handle }) => {
  const isOperator = ["/", "*", "-", "+", "="].includes(name);
  const isFunction = ["C", "+/-", "%"].includes(name);
  return (
    <motion.button
      onClick={() => handle(name)}
      whileTap={{ scale: 0.97 }}
      className={` relative h-14 overflow-hidden flex justify-center items-center rounded-2xl font-medium transition-all duration-200 ease-out active:translate-y-px shadow-soft-light dark:shadow-soft-dark hover:shadow-lg hover:brightness-110   ${
        isOperator
          ? "bg-accent/70 text-white"
          : isFunction
          ? "bg-slate-300/30 dark:bg-slate-600/40 text-black dark:text-white"
          : "bg-slate-100/40 dark:bg-slate-700/50 text-black dark:text-white"
      }
  `}
      whileHover={{
        scale: 1.05,
      }}
    >
      {name}
      <motion.div
        className="absolute -top-full -left-full w-[300%] h-[300%]
                   bg-linear-to-r from-transparent via-white/60 to-transparent 
                   rotate-45"
        initial={{ x: "-150%", y: "-150%" }}
        whileHover={{
          x: "150%",
          y: "150%",
          transition: {
            duration: 1.6,
            ease: "easeInOut",
          },
        }}
      ></motion.div>
    </motion.button>
  );
};

export default Button;
