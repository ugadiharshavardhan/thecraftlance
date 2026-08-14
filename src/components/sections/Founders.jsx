"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const FOUNDERS = [
  {
    id: 1,
    name: "Ugadi Harsha Vardhan",
    role: "Co-Founder & Technical Director",
    bio: "Architects high-performance interactive web experiences, 3D models, and software systems with obsessive attention to detail.",
    img: "https://res.cloudinary.com/aamg9pin/image/upload/v1786718038/ugadi_2_bnjnux.png",
    linkedin: "https://www.linkedin.com/in/ugadiharshavardhan/",
  },
  {
    id: 2,
    name: "Thota Videsh",
    role: "Co-Founder & Strategy Lead",
    bio: "Drives brand positioning, product strategy, and client relationships, ensuring digital solutions deliver measurable business growth.",
    img: "https://media.licdn.com/dms/image/v2/D4E03AQFgzO2Dhg2eQg/profile-displayphoto-shrink_800_800/B4EZd5iKF1HgAg-/0/1750090687739?e=1788393600&v=beta&t=0n5Tp_ep6fgMbN_UuJgon3eapUw8Sc4w30I2eMSjIQA",
    linkedin: "https://www.linkedin.com/in/videsh-thota/",
  },
];

function LinkedInIcon({ className = "" }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function FadeUp({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Founders() {
  return (
    <section
      id="founders"
      className="relative bg-black py-28 md:py-40 px-6 border-t border-white/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-14 md:mb-20 max-w-3xl">
          <FadeUp>
            <div className="flex items-center gap-2 mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
              <span className="text-[10px] text-orange-500 tracking-[0.35em] uppercase font-mono font-semibold">
                Founders & Leadership
              </span>
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-tight tracking-tight mb-4">
              The People Behind the Work
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-2xl">
              The Craft Lance is founder-led. We stay directly involved in strategy, creative direction, and technical execution on every project we build.
            </p>
          </FadeUp>
        </div>

        {/* Founders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {FOUNDERS.map((founder, i) => (
            <FadeUp key={founder.id} delay={0.2 + i * 0.15}>
              <div className="group relative bg-zinc-950/60 border border-white/10 rounded-[32px] overflow-hidden p-6 sm:p-8 flex flex-col justify-between h-full transition-all duration-500 hover:border-white/25 hover:shadow-[0_20px_60px_rgba(255,255,255,0.05)]">
                {/* Header Info with Compact Avatar */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  {/* Compact Profile Image */}
                  <div className="relative w-28 h-28 sm:w-36 sm:h-36 shrink-0 rounded-2xl overflow-hidden bg-zinc-900 border border-white/10 shadow-lg">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={founder.img}
                      alt={`${founder.name} - ${founder.role}`}
                      className="w-full h-full object-cover object-center grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity duration-500" />
                  </div>

                  {/* LinkedIn Button */}
                  {founder.linkedin && (
                    <a
                      href={founder.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${founder.name}'s LinkedIn profile`}
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-zinc-900/80 text-zinc-300 backdrop-blur-md transition-all duration-300 hover:border-white hover:bg-white hover:text-black active:scale-95"
                    >
                      <LinkedInIcon />
                    </a>
                  )}
                </div>

                {/* Name & Role */}
                <div className="mb-4">
                  <span className="font-mono text-xs text-orange-400 font-semibold tracking-wider block mb-1.5">
                    {founder.role}
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-medium text-white tracking-tight">
                    {founder.name}
                  </h3>
                </div>

                {/* Bio */}
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  {founder.bio}
                </p>

                {/* Card Footer */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-zinc-500 font-mono mt-auto">
                  <span>Direct Engagement</span>
                  <span className="text-zinc-400 font-medium">Founder-Led</span>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
