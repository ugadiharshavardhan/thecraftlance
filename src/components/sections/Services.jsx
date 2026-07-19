"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

const SERVICES = [
  {
    num: "01",
    title: "Social Media Management",
    subtitle: "Engagement & Growth",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1200&q=80",
    items: [
      "Content Creation",
      "Daily Posting & Scheduling",
      "Community Engagement",
      "Growth Strategies",
      "Analytics & Performance Reports",
    ],
  },
  {
    num: "02",
    title: "Content Creation",
    subtitle: "Visual Storytelling",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80",
    items: [
      "Graphic Design",
      "Reels & Short-Form Video",
      "Motion Graphics",
      "Branding Assets",
      "Creative Campaign Assets",
    ],
  },
  {
    num: "03",
    title: "Branding & Creative",
    subtitle: "Identity & overhaul",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1200&q=80",
    items: [
      "Logo & Identity System",
      "Brand Positioning & Strategy",
      "Packaging & Label Design",
      "Print & Merch Design",
      "Brand Style Guidelines",
    ],
  },
  {
    num: "04",
    title: "Website Development",
    subtitle: "Interactive Engineering",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=1200&q=80",
    items: [
      "Custom Business Websites",
      "E-commerce Frontends",
      "UI/UX Design Prototypes",
      "SEO-Optimized Speed",
      "Continuous Maintenance",
    ],
  },
  {
    num: "05",
    title: "Digital Marketing",
    subtitle: "Meta & Google Ads",
    img: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=1200&q=80",
    items: [
      "Paid Search & Social Ads",
      "Campaign Setup & Management",
      "Targeted Lead Generation",
      "Retargeting Campaigns",
      "Performance Optimization",
    ],
  },
  {
    num: "06",
    title: "SEO Optimization",
    subtitle: "Search Authority",
    img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=1200&q=80",
    items: [
      "On-Page & Off-Page SEO",
      "Targeted Keyword Strategy",
      "Link Building Campaigns",
      "Technical Site Audits",
      "Google Ranking Growth",
    ],
  },
];

const INDUSTRIES = [
  "Cafes & Restaurants",
  "Clothing Brands",
  "Gyms & Fitness",
  "Healthcare",
  "Ecommerce",
  "Real Estate",
  "Salons & Spas",
  "Education",
  "Startups",
  "& More",
];

const WHY_US = [
  "Creative & Strategic Approach",
  "Quality & Timely Delivery",
  "Transparent Communication",
  "Result-Driven Solutions",
  "Dedicated Support Team",
];

export default function Services() {
  return (
    <section id="services" className="relative z-0 bg-black pt-12 pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-16">
        <span className="text-[10px] text-orange-500 tracking-[0.35em] uppercase mb-3 block">
          What We Do
        </span>
        <h2 className="font-display text-4xl md:text-5xl font-medium text-white leading-[1.05] max-w-2xl tracking-tight">
          Services built for impact.
        </h2>
      </div>

      {/* Styled Service Cards stack */}
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <div className="relative space-y-12">
          {SERVICES.map((svc, i) => (
            <div
              key={svc.num}
              className="sticky top-[10vh] overflow-hidden rounded-[32px] md:rounded-[40px] bg-black text-white shadow-2xl border border-white/10"
              style={{
                height: "65vh",
                zIndex: i + 1,
                marginBottom: "4vh",
              }}
            >
              {/* Card Background Portrait Image representing the Service */}
              <div className="absolute inset-0 z-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={svc.img}
                  alt={svc.title}
                  className="w-full h-full object-cover object-center filter brightness-[0.45] contrast-[1.1]"
                  draggable={false}
                />
                {/* Dual red-tinted overlay representing the 2nd image's warm aura */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-red-950/50 mix-blend-multiply" />
              </div>

              {/* Foreground Wavy Infinite Scrolling Title & Cursive text */}
              <div className="absolute inset-x-0 top-1/4 z-10 pointer-events-none select-none overflow-visible">
                {/* White blocky scrolling text path */}
                <svg viewBox="0 0 1000 200" className="w-full overflow-visible h-32 md:h-44">
                  <path id={`curve-white-${i}`} d="M 0,100 C 250,30 750,170 1000,100" fill="none" stroke="none" />
                  <text className="font-display font-extrabold text-[5.5rem] md:text-[8rem] fill-white uppercase tracking-tight opacity-90">
                    <textPath href={`#curve-white-${i}`} startOffset="0%">
                      {svc.title} • {svc.title} •
                      <animate attributeName="startOffset" from="0%" to="-50%" dur="22s" repeatCount="indefinite" />
                    </textPath>
                  </text>
                </svg>

                {/* Overlapping red/orange script scrolling text path in reverse */}
                <div className="relative -mt-16 md:-mt-24">
                  <svg viewBox="0 0 1000 200" className="w-full overflow-visible h-32 md:h-44">
                    <path id={`curve-red-${i}`} d="M 0,120 C 250,50 750,190 1000,120" fill="none" stroke="none" />
                    <text className="font-serif italic font-medium text-[4.5rem] md:text-[6rem] fill-orange-500 opacity-95">
                      <textPath href={`#curve-red-${i}`} startOffset="0%">
                        {svc.subtitle} • {svc.subtitle} •
                        <animate attributeName="startOffset" from="-50%" to="0%" dur="17s" repeatCount="indefinite" />
                      </textPath>
                    </text>
                  </svg>
                </div>
              </div>

              {/* Content Box containing metadata and list of details */}
              <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-10 md:right-10 z-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                  <span className="font-mono text-xs text-orange-500 uppercase tracking-widest block mb-1">
                    Service {svc.num}
                  </span>
                  <h4 className="font-display text-xl md:text-2xl font-bold tracking-tight text-white mb-2">
                    {svc.title}
                  </h4>
                </div>

                {/* Glassmorphism bullet points wrapper */}
                <div className="bg-black/60 backdrop-blur-md rounded-2xl p-4 md:p-5 border border-white/10 max-w-sm">
                  <ul className="grid grid-cols-1 gap-1.5">
                    {svc.items.slice(0, 3).map((item) => (
                      <li key={item} className="text-xs text-zinc-300 flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-orange-500 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Industries and Why Us Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-16 md:pb-20 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6">
          <div className="lg:col-span-7 rounded-[28px] bg-zinc-900/60 border border-white/10 p-7 md:p-9">
            <p className="text-[10px] tracking-[0.28em] uppercase text-zinc-500 mb-2">
              Industries
            </p>
            <h3 className="font-display text-2xl md:text-3xl font-medium text-white mb-5 tracking-tight">
              Industries we work with
            </h3>
            <div className="flex flex-wrap gap-2">
              {INDUSTRIES.map((item) => (
                <span
                  key={item}
                  className="text-xs md:text-sm border border-zinc-800 bg-zinc-800/40 text-zinc-300 px-3.5 py-1.5 rounded-full"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 rounded-[28px] bg-zinc-900/90 border border-white/10 text-white p-7 md:p-9">
            <p className="text-[10px] tracking-[0.28em] uppercase text-white/40 mb-2">
              Why us
            </p>
            <h3 className="font-display text-2xl md:text-3xl font-medium mb-5 tracking-tight text-white">
              Why choose us?
            </h3>
            <ul className="space-y-3">
              {WHY_US.map((item) => (
                <li key={item} className="text-sm md:text-base text-white/80 flex gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
