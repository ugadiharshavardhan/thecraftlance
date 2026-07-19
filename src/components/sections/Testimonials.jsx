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
  {
    quote:
      "Their structured process made a highly complex project feel simple and stress-free. The launch was flawless and our users love the UI.",
    author: "Alex Mercer",
    role: "CTO, Skynet AI",
    initials: "AM",
  },
  {
    quote:
      "Highly professional team that delivers outstanding results. They streamlined our brand positioning and built a site that scales perfectly.",
    author: "Elena Rostova",
    role: "Product Director, Aura Living",
    initials: "ER",
  },
  {
    quote:
      "The Craft Lance is our go-to partner for creative designs and high-performance frontends. Their dedication to quality is unmatched.",
    author: "David Vance",
    role: "Operations Head, Horizon Media",
    initials: "DV",
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
    <section id="testimonials" className="bg-black py-32 md:py-44 px-6 border-t border-white/10 overflow-hidden">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-marquee {
          display: flex;
          width: max-content;
          animation: marquee 40s linear infinite;
        }
        .animate-scroll-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        <div className="mb-16 px-4 md:px-0">
          <FadeUp>
            <span className="text-[10px] text-orange-500 tracking-[0.35em] uppercase mb-4 block">
              What They Say
            </span>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="font-display text-4xl md:text-6xl font-medium text-white leading-tight max-w-xl">
              Trusted by ambitious brands.
            </h2>
          </FadeUp>
        </div>

        {/* Infinite Scroll Wrapper */}
        <div 
          className="w-full overflow-hidden py-4 relative"
          style={{
            maskImage: "linear-gradient(to right, transparent, white 8%, white 92%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, white 8%, white 92%, transparent)"
          }}
        >
          <div className="animate-scroll-marquee gap-6 flex">
            {/* First Set of Cards */}
            {TESTIMONIALS.map((t, i) => (
              <div 
                key={`orig-${i}`} 
                className="w-[350px] md:w-[420px] shrink-0 bg-zinc-950/40 border border-white/10 rounded-[28px] p-8 flex flex-col justify-between transition-colors duration-300 hover:border-orange-500/30"
              >
                <div>
                  <div className="font-display text-5xl text-zinc-800 leading-none mb-6 select-none">
                    "
                  </div>
                  <p className="text-zinc-300 text-sm md:text-base leading-relaxed mb-10">
                    {t.quote}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center shrink-0">
                    <span className="text-[10px] font-bold text-zinc-300">
                      {t.initials}
                    </span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">{t.author}</div>
                    <div className="text-xs text-zinc-500 mt-0.5">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
            {/* Second Set of Cards (loop) */}
            {TESTIMONIALS.map((t, i) => (
              <div 
                key={`dup-${i}`} 
                className="w-[350px] md:w-[420px] shrink-0 bg-zinc-950/40 border border-white/10 rounded-[28px] p-8 flex flex-col justify-between transition-colors duration-300 hover:border-orange-500/30"
              >
                <div>
                  <div className="font-display text-5xl text-zinc-800 leading-none mb-6 select-none">
                    "
                  </div>
                  <p className="text-zinc-300 text-sm md:text-base leading-relaxed mb-10">
                    {t.quote}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center shrink-0">
                    <span className="text-[10px] font-bold text-zinc-300">
                      {t.initials}
                    </span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">{t.author}</div>
                    <div className="text-xs text-zinc-500 mt-0.5">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
