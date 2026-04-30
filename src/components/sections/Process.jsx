"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const STEPS = [
  {
    num: "01",
    phase: "Discover",
    desc: "We immerse ourselves in your brand, audience, and market. Deep research, sharp strategy.",
  },
  {
    num: "02",
    phase: "Design",
    desc: "Translating strategy into stunning visuals. Every detail crafted with intention and precision.",
  },
  {
    num: "03",
    phase: "Develop",
    desc: "Clean, performant code built for the future — scalable, fast, and remarkably reliable.",
  },
  {
    num: "04",
    phase: "Launch",
    desc: "We deploy, measure, and optimise. Your launch is just the beginning of the story.",
  },
];

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

export default function Process() {
  return (
    <section id="process" className="bg-black py-32 md:py-44 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20 md:flex md:items-end md:justify-between gap-10">
          <div>
            <FadeUp>
              <span className="text-[10px] text-zinc-600 tracking-[0.35em] uppercase mb-4 block">
                How We Work
              </span>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight max-w-xl">
                A proven process,{" "}
                <span className="text-zinc-700">extraordinary results.</span>
              </h2>
            </FadeUp>
          </div>
          <FadeUp delay={0.2} className="mt-6 md:mt-0 shrink-0">
            <p className="text-zinc-600 text-sm max-w-[220px] leading-relaxed">
              Every great product starts with clarity and ends with conviction.
            </p>
          </FadeUp>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-zinc-900">
          {STEPS.map((step, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <div className="group bg-black p-8 md:p-10">
                <span className="text-[10px] font-mono text-zinc-800 tracking-widest mb-8 block">
                  {step.num}
                </span>

                {/* Animated line */}
                <div className="w-8 h-px bg-zinc-800 mb-8 group-hover:w-full group-hover:bg-zinc-600 transition-all duration-700 ease-out" />

                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                  {step.phase}
                </h3>
                <p className="text-zinc-600 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
