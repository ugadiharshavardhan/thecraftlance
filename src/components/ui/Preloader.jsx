"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import StrokeText from "@/components/ui/StrokeText";

export default function Preloader({ onComplete }) {
  const [done, setDone] = useState(false);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[99999] bg-black flex flex-col justify-center items-center p-6 select-none"
        >
          <div className="w-full max-w-6xl px-6 flex flex-col items-center">
            {/* Glowing Wavy StrokeText wordmark */}
            <div className="w-full">
              <StrokeText
                text="THE CRAFT LANCE"
                strokeColor="#ffffff"
                fillColor="#ffffff"
                strokeWidth={1.5}
                drawDuration={1.8}
                fillDelay={0.25}
                stagger={0.06}
                ease="power2.out"
                trigger="mount"
                fillMode="wipe"
                fontSize={120}
                fontWeight={900}
                letterSpacing={-1.5}
                onAnimationComplete={() => {
                  // After text is fully drawn and filled, trigger page slide out
                  setTimeout(() => {
                    setDone(true);
                    setTimeout(() => onComplete?.(), 1000);
                  }, 650);
                }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
