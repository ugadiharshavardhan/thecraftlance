"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const TESTIMONIALS = [
  {
    quote:
      "GroWhale didn't just build our platform — they transformed how we think about our digital presence. The result exceeded every expectation.",
    author: "Sarah Chen",
    role: "CEO, Luminary Tech",
    initials: "SC",
  },
  {
    quote:
      "Working with GroWhale felt like having a world-class in-house team. They understood our vision before we could fully articulate it.",
    author: "Marcus Reeves",
    role: "Founder, Vertex Capital",
    initials: "MR",
  },
  {
    quote:
      "The attention to detail is extraordinary. Every interaction feels intentional. Our conversion rate doubled in three months.",
    author: "Priya Nair",
    role: "CMO, Pulse Health",
    initials: "PN",
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

export default function Testimonials() {
  return (
    <section className="bg-black py-32 md:py-44 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <FadeUp>
            <span className="text-[10px] text-zinc-600 tracking-[0.35em] uppercase mb-4 block">
              What They Say
            </span>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight max-w-xl">
              Trusted by ambitious brands.
            </h2>
          </FadeUp>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-zinc-900">
          {TESTIMONIALS.map((t, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <div className="bg-black p-8 md:p-10 group hover:bg-zinc-950 transition-colors duration-400">
                {/* Decorative quote */}
                <div className="text-5xl text-zinc-800 leading-none mb-6 select-none font-serif">
                  "
                </div>

                <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-10">
                  {t.quote}
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0">
                    <span className="text-[10px] font-bold text-zinc-500">
                      {t.initials}
                    </span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">{t.author}</div>
                    <div className="text-xs text-zinc-600 mt-0.5">{t.role}</div>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
