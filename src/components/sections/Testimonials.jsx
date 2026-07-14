"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const TESTIMONIALS = [
  {
    quote:
      "The Craft Lance didn't just build our platform — they transformed how we think about our digital presence. The result exceeded every expectation.",
    author: "Sarah Chen",
    role: "CEO, Luminary Tech",
    initials: "SC",
  },
  {
    quote:
      "Working with The Craft Lance felt like having a world-class in-house team. They understood our vision before we could fully articulate it.",
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
    <section className="bg-[#FAFAF8] py-32 md:py-44 px-6 border-t border-[#EFECEA]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <FadeUp>
            <span className="text-[10px] text-[#999] tracking-[0.35em] uppercase mb-4 block">
              What They Say
            </span>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="font-display text-4xl md:text-6xl font-medium text-[#111] leading-tight max-w-xl">
              Trusted by ambitious brands.
            </h2>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <div className="h-full bg-white border border-[#E5E2DC] rounded-[28px] p-8 md:p-10">
                <div className="font-display text-5xl text-[#E5E2DC] leading-none mb-6 select-none">
                  "
                </div>
                <p className="text-[#555] text-sm md:text-base leading-relaxed mb-10">
                  {t.quote}
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#F5F2ED] border border-[#E5E2DC] flex items-center justify-center shrink-0">
                    <span className="text-[10px] font-bold text-[#666]">
                      {t.initials}
                    </span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#111]">{t.author}</div>
                    <div className="text-xs text-[#888] mt-0.5">{t.role}</div>
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
