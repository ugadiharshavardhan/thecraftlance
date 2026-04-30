"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const SERVICES = [
  {
    num: "01",
    title: "Web Development",
    desc: "High-performance websites and web apps built for speed, scale, and seamless user experiences.",
    tags: ["Next.js", "React", "Node.js", "APIs"],
  },
  {
    num: "02",
    title: "UI / UX Design",
    desc: "Interface design that balances beauty with function — intuitive, delightful, and conversion-optimised.",
    tags: ["Figma", "Prototyping", "Design Systems", "Research"],
  },
  {
    num: "03",
    title: "Brand Identity",
    desc: "Cohesive visual identities that tell your story with clarity, confidence, and lasting memorability.",
    tags: ["Logo", "Typography", "Colour", "Guidelines"],
  },
  {
    num: "04",
    title: "AI Solutions",
    desc: "Integrate intelligent automation and AI-powered tools that give your business an unfair advantage.",
    tags: ["LLMs", "Automation", "Chatbots", "ML Pipelines"],
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

export default function Services() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="services" className="bg-zinc-950 py-32 md:py-44 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20">
          <FadeUp>
            <span className="text-[10px] text-zinc-600 tracking-[0.35em] uppercase mb-4 block">
              What We Do
            </span>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight max-w-2xl">
              Services built for impact.
            </h2>
          </FadeUp>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-900">
          {SERVICES.map((svc, i) => (
            <FadeUp key={i} delay={i * 0.08}>
              <div
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className="relative bg-zinc-950 p-10 md:p-12 overflow-hidden cursor-default"
              >
                {/* Hover fill */}
                <motion.div
                  className="absolute inset-0 bg-zinc-900"
                  animate={{ opacity: hovered === i ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />

                <div className="relative z-10">
                  {/* Number + arrow row */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-xs font-mono text-zinc-800 tracking-widest">
                      {svc.num}
                    </span>
                    <motion.span
                      animate={{
                        x: hovered === i ? 0 : -6,
                        opacity: hovered === i ? 1 : 0,
                      }}
                      transition={{ duration: 0.2 }}
                      className="text-zinc-400 text-sm"
                    >
                      →
                    </motion.span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    {svc.title}
                  </h3>

                  <p className="text-zinc-500 text-sm md:text-base leading-relaxed mb-8">
                    {svc.desc}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {svc.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] text-zinc-700 border border-zinc-800 px-3 py-1 tracking-wide"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom line reveal */}
                <motion.div
                  className="absolute bottom-0 left-0 h-px bg-white"
                  animate={{ width: hovered === i ? "100%" : "0%" }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                />
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
