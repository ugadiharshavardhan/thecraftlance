"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const LINES = [
  { words: ["We", "don't", "build"], muted: false },
  { words: ["websites."], muted: false },
  { words: ["We", "craft"], muted: true },
  { words: ["experiences."], muted: true },
];

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);

  let wordIdx = 0;

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Breathing radial background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(ellipse 80% 70% at 50% 45%, #151515 0%, #000000 72%)",
            "radial-gradient(ellipse 70% 60% at 50% 45%, #0e0e0e 0%, #000000 72%)",
            "radial-gradient(ellipse 80% 70% at 50% 45%, #151515 0%, #000000 72%)",
          ],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 text-center px-6 max-w-7xl mx-auto pt-24"
      >
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[10px] tracking-[0.4em] uppercase text-zinc-600 mb-10"
        >
          Digital Agency — Est. 2024
        </motion.p>

        {/* Headline — word-by-word reveal */}
        <div className="mb-8 space-y-1">
          {LINES.map((line, li) => (
            <div
              key={li}
              className="overflow-hidden flex flex-wrap justify-center gap-x-5"
            >
              {line.words.map((word) => {
                const idx = wordIdx++;
                return (
                  <motion.span
                    key={`${li}-${word}`}
                    initial={{ y: "115%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    transition={{
                      duration: 1,
                      delay: 0.45 + idx * 0.07,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className={`inline-block font-bold leading-none tracking-tight select-none
                      text-[clamp(2.8rem,7.5vw,7.5rem)]
                      ${line.muted ? "text-zinc-700" : "text-white"}`}
                  >
                    {word}
                  </motion.span>
                );
              })}
            </div>
          ))}
        </div>

        {/* Sub-copy */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.3 }}
          className="text-sm md:text-base text-zinc-500 mb-12 max-w-md mx-auto leading-relaxed"
        >
          Premium digital solutions for brands that refuse to be ordinary.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <a
            href="#contact"
            className="px-8 py-4 bg-white text-black text-xs font-bold tracking-[0.12em] uppercase hover:bg-zinc-100 transition-colors"
          >
            Start Your Project
          </a>
          <a
            href="#work"
            className="text-xs text-zinc-500 hover:text-white transition-colors tracking-widest uppercase pb-px border-b border-zinc-800 hover:border-zinc-500"
          >
            View Our Work →
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[9px] text-zinc-700 tracking-[0.45em] uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ scaleY: [1, 0.4, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-14 bg-gradient-to-b from-zinc-600 to-transparent origin-top"
        />
      </motion.div>
    </section>
  );
}
