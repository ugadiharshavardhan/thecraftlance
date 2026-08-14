"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const STATS = [
  { value: "4", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "5×", label: "Average ROI" },
];

function FadeUp({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
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

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-black py-32 md:py-44 px-6 border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-x-28 md:gap-y-12 items-center">
        <div className="order-2 md:order-1 md:row-span-2">
          <FadeUp>
            <span className="text-[10px] text-orange-500 tracking-[0.35em] uppercase mb-6 block">
              Our Philosophy
            </span>
          </FadeUp>
 
          <FadeUp delay={0.1}>
            <h2 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] font-medium text-white leading-[1.1] mb-8">
              We believe in the power of{" "}
              <span className="text-zinc-500">digital storytelling.</span>
            </h2>
          </FadeUp>
 
          <FadeUp delay={0.2}>
            <p className="text-zinc-400 text-base leading-relaxed mb-5">
              Every pixel has a purpose. Every interaction tells a story. We
              don&apos;t just design and develop — we architect digital experiences
              that resonate, convert, and endure.
            </p>
            <p className="text-zinc-400 text-base leading-relaxed mb-6">
              We partner with visionary founders and forward-thinking brands to
              translate bold ideas into unforgettable digital realities.
            </p>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/80 border border-white/10 text-xs font-mono text-zinc-300">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
              <span>Founded & Led by U. Harsha Vardhan & Co-Founder</span>
            </div>
          </FadeUp>
        </div>
 
        <div className="order-1 md:order-2 flex items-center justify-center">
          <FadeUp delay={0.2} className="w-full">
            <div className="relative w-full max-w-md mx-auto aspect-[16/9] md:aspect-square flex items-center justify-center">
              <img 
                src="/thecraftlancelogo.png" 
                alt="The Craft Lance" 
                className="w-full h-auto object-contain opacity-90 drop-shadow-2xl"
              />
            </div>
          </FadeUp>
        </div>

        <div className="order-3 md:order-3 md:col-start-2">
          <div className="grid grid-cols-3 gap-4">
            {STATS.map((s, i) => (
              <FadeUp key={i} delay={0.25 + i * 0.08}>
                <div className="border-t border-white/10 pt-4">
                  <div className="text-3xl font-bold text-white mb-1">{s.value}</div>
                  <div className="text-[10px] text-zinc-400 tracking-wide leading-snug">
                    {s.label}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
