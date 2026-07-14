"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const STATS = [
  { value: "50+", label: "Projects Delivered" },
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
      className="relative bg-[#FAFAF8] py-32 md:py-44 px-6 border-t border-[#EFECEA]"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-28 items-center">
        <div>
          <FadeUp>
            <span className="text-[10px] text-[#999] tracking-[0.35em] uppercase mb-6 block">
              Our Philosophy
            </span>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h2 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] font-medium text-[#111] leading-[1.1] mb-8">
              We believe in the power of{" "}
              <span className="text-[#888]">digital storytelling.</span>
            </h2>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p className="text-[#666] text-base leading-relaxed mb-5">
              Every pixel has a purpose. Every interaction tells a story. We
              don&apos;t just design and develop — we architect digital experiences
              that resonate, convert, and endure.
            </p>
            <p className="text-[#666] text-base leading-relaxed">
              We partner with visionary founders and forward-thinking brands to
              translate bold ideas into unforgettable digital realities.
            </p>
          </FadeUp>
        </div>

        <div className="flex flex-col gap-12">
          <FadeUp delay={0.15}>
            <div className="relative aspect-[4/3] bg-[#F5F2ED] border border-[#E5E2DC] overflow-hidden rounded-[28px]">
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
                  className="w-52 h-52 border border-[#D6D2CC] rounded-full"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                  className="absolute w-32 h-32 border border-[#C8C3BB]/60 rounded-full"
                />
                <motion.div
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute w-3 h-3 rounded-full bg-[#111]"
                />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                  className="absolute w-52 h-52"
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#111]" />
                </motion.div>
              </div>
            </div>
          </FadeUp>

          <div className="grid grid-cols-3 gap-4">
            {STATS.map((s, i) => (
              <FadeUp key={i} delay={0.25 + i * 0.08}>
                <div className="border-t border-[#E5E2DC] pt-4">
                  <div className="text-3xl font-bold text-[#111] mb-1">{s.value}</div>
                  <div className="text-[10px] text-[#888] tracking-wide leading-snug">
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
