"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

function FadeUp({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 44 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.95, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function CTA() {
  return (
    <section
      id="contact"
      className="relative bg-white py-36 md:py-52 px-6 overflow-hidden"
    >
      {/* Subtle grain on white */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <FadeUp>
          <span className="text-[10px] text-zinc-400 tracking-[0.4em] uppercase mb-10 block">
            Let's Build Together
          </span>
        </FadeUp>

        <FadeUp delay={0.1}>
          <h2
            className="font-bold text-black leading-none mb-3"
            style={{ fontSize: "clamp(2.8rem, 8vw, 8rem)" }}
          >
            Let's build something
          </h2>
        </FadeUp>

        <FadeUp delay={0.18}>
          <h2
            className="font-bold text-zinc-300 leading-none mb-14"
            style={{ fontSize: "clamp(2.8rem, 8vw, 8rem)" }}
          >
            unforgettable.
          </h2>
        </FadeUp>

        <FadeUp delay={0.28}>
          <p className="text-zinc-500 text-base md:text-lg leading-relaxed mb-12 max-w-lg mx-auto">
            Your vision. Our expertise. Together, we'll create something the
            world hasn't seen before.
          </p>
        </FadeUp>

        <FadeUp delay={0.36}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <a
              href="mailto:hello@growhale.com"
              className="px-10 py-4 bg-black text-white text-xs font-bold tracking-[0.15em] uppercase hover:bg-zinc-800 transition-colors"
            >
              Start Your Project
            </a>
            <a
              href="mailto:hello@growhale.com"
              className="text-sm text-zinc-400 hover:text-black transition-colors tracking-wide"
            >
              hello@growhale.com
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
