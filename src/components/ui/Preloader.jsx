"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader({ onComplete }) {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const totalMs = 2400;
    const tickMs = 16;
    const steps = totalMs / tickMs;
    let current = 0;

    const timer = setInterval(() => {
      current++;
      const t = current / steps;
      const eased = 1 - Math.pow(1 - t, 3);
      setCount(Math.min(Math.round(eased * 100), 100));

      if (current >= steps) {
        clearInterval(timer);
        setTimeout(() => {
          setDone(true);
          setTimeout(() => onComplete?.(), 900);
        }, 300);
      }
    }, tickMs);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[99999] bg-black flex items-end justify-between p-10 md:p-16 select-none"
        >
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col gap-1"
          >
            <span className="text-[10px] text-zinc-600 tracking-[0.3em] uppercase">
              Loading
            </span>
            <span className="text-sm font-bold text-white tracking-widest">
              THE CRAFT LANCE
            </span>
          </motion.div>

          <span className="text-[8rem] md:text-[12rem] font-bold text-white leading-none tabular-nums">
            {count}
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
