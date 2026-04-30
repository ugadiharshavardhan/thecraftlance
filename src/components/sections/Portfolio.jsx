"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const PROJECTS = [
  {
    name: "Nimbus",
    category: "SaaS Platform",
    year: "2024",
    desc: "A cloud-based project management platform with real-time collaboration.",
    letter: "N",
    shade: "#0f0f0f",
  },
  {
    name: "Vertex",
    category: "Brand Identity",
    year: "2024",
    desc: "Complete visual identity system for a next-gen fintech startup.",
    letter: "V",
    shade: "#111111",
  },
  {
    name: "Pulse",
    category: "Mobile App",
    year: "2025",
    desc: "Health tracking mobile app with AI-powered insights and personalised coaching.",
    letter: "P",
    shade: "#0d0d0d",
  },
  {
    name: "Oracle",
    category: "AI Dashboard",
    year: "2025",
    desc: "Intelligent analytics dashboard with predictive business intelligence.",
    letter: "O",
    shade: "#121212",
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

function Card({ p, delay }) {
  return (
    <FadeUp delay={delay}>
      <div className="group cursor-pointer">
        {/* Thumbnail */}
        <div
          className="relative overflow-hidden aspect-[16/10] mb-5"
          style={{ backgroundColor: p.shade }}
        >
          {/* Grid texture */}
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
              backgroundSize: "44px 44px",
            }}
          />

          {/* Big letter watermark */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
            <span className="text-[10rem] font-black text-white opacity-[0.04] leading-none">
              {p.letter}
            </span>
          </div>

          {/* Hover overlay */}
          <motion.div
            initial={{ opacity: 0, y: "8px" }}
            whileHover={{ opacity: 1, y: "0px" }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 bg-black/75 flex flex-col justify-end p-6"
          >
            <p className="text-zinc-400 text-sm mb-3 leading-relaxed">{p.desc}</p>
            <span className="text-white text-xs font-semibold tracking-wide uppercase">
              View Project →
            </span>
          </motion.div>
        </div>

        {/* Meta */}
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-base font-bold text-white group-hover:text-zinc-300 transition-colors">
              {p.name}
            </h3>
            <p className="text-zinc-600 text-xs mt-0.5 tracking-wide">{p.category}</p>
          </div>
          <span className="text-zinc-800 text-[10px] font-mono mt-0.5">{p.year}</span>
        </div>
      </div>
    </FadeUp>
  );
}

export default function Portfolio() {
  return (
    <section id="work" className="bg-zinc-950 py-32 md:py-44 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <FadeUp>
              <span className="text-[10px] text-zinc-600 tracking-[0.35em] uppercase mb-4 block">
                Our Work
              </span>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Selected projects.
              </h2>
            </FadeUp>
          </div>
          <FadeUp delay={0.2}>
            <a
              href="#contact"
              className="text-xs text-zinc-600 hover:text-white transition-colors border-b border-zinc-800 hover:border-zinc-500 pb-0.5 tracking-widest uppercase"
            >
              Start yours →
            </a>
          </FadeUp>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
          {PROJECTS.map((p, i) => (
            <Card key={i} p={p} delay={i * 0.09} />
          ))}
        </div>
      </div>
    </section>
  );
}
