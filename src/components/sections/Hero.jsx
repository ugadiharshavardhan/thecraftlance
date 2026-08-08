"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ScrollExpand from "@/components/ui/ScrollExpand";

const TRUSTED = ["Rotomaker", "The OH!"];

export default function Hero() {
  return (
    <section id="home" className="relative w-full bg-black">
      <ScrollExpand
        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80"
        title={<>THE CRAFT<br className="md:hidden" /> LANCE</>}
        scrollHint="SCROLL TO EXPLORE"
        useWindowScroll
        startWidth={48}
        startHeight={65}
        startRadius={24}
        endRadius={0}
        mediaZoom={1.25}
        scrollDistance={1.0}
        overlayScrim={0.65}
      >
        <div className="relative z-10 flex flex-col justify-center w-full max-w-7xl mx-auto px-6 md:px-10 pt-16 pb-12 text-left">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-4 mb-5"
            >
              <a href="https://www.instagram.com/thecraftlance/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white hover:opacity-55 transition-opacity">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="text-white hover:opacity-55 transition-opacity">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.98 3.5C4.98 4.881 3.87 6 2.5 6S.02 4.881.02 3.5C.02 2.12 1.13 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8.5h4.56V23H.22V8.5zM8.34 8.5h4.37v1.98h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.47 3.04 5.47 7V23h-4.56v-6.7c0-1.6-.03-3.65-2.23-3.65-2.23 0-2.57 1.74-2.57 3.54V23H8.34V8.5z" />
                </svg>
              </a>
              <a href="#" aria-label="Website" className="text-white hover:opacity-55 transition-opacity">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
                </svg>
              </a>
            </motion.div>

            <div className="h1-placeholder font-bold text-white uppercase tracking-normal leading-[0.92] text-[clamp(2.6rem,7.5vw,5.75rem)] mb-6 opacity-0 pointer-events-none select-none">
              THE CRAFT
              <br className="md:hidden" />
              LANCE
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-xl md:text-2xl font-medium text-white mb-4"
            >
              The creative digital studio.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="text-zinc-300 text-sm md:text-base leading-relaxed max-w-md mb-8"
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
              <Link
                href="/contact"
                className="group relative inline-flex justify-center items-center gap-2 px-7 py-3.5 text-sm font-bold tracking-wide transition-all duration-300 rounded-full bg-gradient-to-r from-white to-zinc-200 text-black shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_25px_rgba(255,255,255,0.25)] hover:scale-105"
              >
                <span>Start a project</span>
                <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
              <a
                href="#work"
                className="text-sm text-zinc-400 hover:text-white transition-colors"
              >
                View projects
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="mt-16 md:mt-20 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10 border-t border-white/10 pt-8 w-full"
          >
            <p className="text-xs text-zinc-400 shrink-0 whitespace-nowrap">
              Trusted by great companies
            </p>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
              {TRUSTED.map((name) => (
                <span
                  key={name}
                  className="text-sm md:text-base font-semibold text-white tracking-tight opacity-80"
                >
                  {name}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </ScrollExpand>
    </section>
  );
}
