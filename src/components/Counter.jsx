import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Counter = ({ endValue }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < endValue) {
          return prevCount + Math.ceil((endValue - prevCount) / 10); // Incrementa en incrementos
        } else {
          clearInterval(interval);
          return endValue;
        }
      });
    }, 50); // Velocidad de la animación

    return () => clearInterval(interval);
  }, [endValue]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {count}
    </motion.span>
  );
};

export default Counter;
