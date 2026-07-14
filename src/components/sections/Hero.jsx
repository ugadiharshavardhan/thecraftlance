"use client";

import { motion } from "framer-motion";

const TRUSTED = ["Rotomaker", "The OH!"];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col bg-white overflow-hidden"
    >
      <div className="relative z-10 flex-1 flex flex-col justify-center w-full max-w-7xl mx-auto px-6 md:px-10 pt-28 md:pt-32 pb-16">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-4 mb-5"
          >
            <a href="#" aria-label="X" className="text-[#111] hover:opacity-55 transition-opacity">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.727-8.849L1.254 2.25H8.08l4.263 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
              </svg>
            </a>
            <a href="#" aria-label="Instagram" className="text-[#111] hover:opacity-55 transition-opacity">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="text-[#111] hover:opacity-55 transition-opacity">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4.98 3.5C4.98 4.881 3.87 6 2.5 6S.02 4.881.02 3.5C.02 2.12 1.13 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8.5h4.56V23H.22V8.5zM8.34 8.5h4.37v1.98h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.47 3.04 5.47 7V23h-4.56v-6.7c0-1.6-.03-3.65-2.23-3.65-2.23 0-2.57 1.74-2.57 3.54V23H8.34V8.5z" />
              </svg>
            </a>
            <a href="#" aria-label="Website" className="text-[#111] hover:opacity-55 transition-opacity">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="12" cy="12" r="9" />
                <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
              </svg>
            </a>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-bold text-[#111] uppercase tracking-[-0.04em] leading-[0.92] text-[clamp(2.6rem,7.5vw,5.75rem)] mb-6"
          >
            The Craft
            <br />
            Lance
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl md:text-2xl font-medium text-[#111] mb-4"
          >
            The creative digital studio.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="text-[#444] text-sm md:text-base leading-relaxed max-w-md mb-8"
          >
            Boost your brand&apos;s reach with The Craft Lance. Elevate market
            presence and drive growth with design, engineering, and strategic
            digital craft.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#111] text-white text-sm font-medium hover:bg-[#2a2a2a] transition-colors"
            >
              Start a project
              <span aria-hidden="true">→</span>
            </a>
            <a
              href="#work"
              className="text-sm text-[#666] hover:text-[#111] transition-colors"
            >
              View projects
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 md:mt-20 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10 border-t border-black/5 pt-8"
        >
          <p className="text-xs text-[#999] shrink-0 whitespace-nowrap">
            Trusted by great companies
          </p>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            {TRUSTED.map((name) => (
              <span
                key={name}
                className="text-sm md:text-base font-semibold text-[#111] tracking-tight opacity-80"
              >
                {name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
