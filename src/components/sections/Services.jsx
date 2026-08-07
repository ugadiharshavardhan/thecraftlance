"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const SERVICES = [
  {
    num: "01",
    title: "Social Media Management",
    subtitle: "Engagement & Growth",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6RIkJsdtl6C5FS3imXIamU4NGBQBcBCDAYDOA1AW_yWKUslEoQXEkcC5Z&s=10",
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
    img: "https://cdn.searchenginejournal.com/wp-content/uploads/2021/07/featured-images-60ec0df4948ae-sej-1280x720.png",
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
    title: "App Development",
    subtitle: "iOS & Android",
    img: "https://cdn.prakashinfotech.com/wp-content/uploads/2024/06/mobile-app-development-img.jpg",
    items: [
      "Native iOS & Android Apps",
      "Cross-Platform Flutter/React Native",
      "App Store & Play Store Publishing",
      "Push Notification Systems",
      "Offline-First Database Design",
    ],
  },
  {
    num: "04",
    title: "Website Development",
    subtitle: "Interactive Engineering",
    img: "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2023/10/Website-Development.jpg",
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
    img: "https://img.magnific.com/free-photo/digital-marketing-with-icons-business-people_53876-94833.jpg",
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
    img: "https://www.intellibright.com/wp-content/uploads/2025/04/Search-Engine-Optimization.jpg",
    items: [
      "On-Page & Off-Page SEO",
      "Targeted Keyword Strategy",
      "Link Building Campaigns",
      "Technical Site Audits",
      "Google Ranking Growth",
    ],
  },
  {
    num: "07",
    title: "AI Agents & Automations",
    subtitle: "Intelligent Workflows",
    img: "https://assets.new.siemens.com/siemens/assets/api/uuid:403d8f70-6597-4fcc-a169-e97ef77666aa/Agents.png",
    items: [
      "Autonomous Agent Workflows",
      "LLM Integrations & Fine-Tuning",
      "Retrieval-Augmented Generation (RAG)",
      "Workflow Automation Pipelines",
      "Custom AI Assistant Chatbots",
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

function ServiceCard({ svc, index }) {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFocused(entry.isIntersecting);
      },
      {
        root: null,
        // Active when card is centered in view
        rootMargin: "-25% 0px -35% 0px",
        threshold: 0.15,
      }
    );

    observer.observe(el);
    return () => observer.unobserve(el);
  }, []);

  const isActive = isFocused || isHovered;

  const whiteTransition = isActive
    ? { repeat: Infinity, ease: "linear", duration: 22 }
    : { duration: 0 };

  const redTransition = isActive
    ? { repeat: Infinity, ease: "linear", duration: 17 }
    : { duration: 0 };

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="sticky top-[10vh] overflow-hidden rounded-[32px] md:rounded-[40px] bg-black text-white shadow-2xl border border-white/10"
      style={{
        height: "65vh",
        zIndex: index + 1,
        marginBottom: "4vh",
      }}
    >
      {/* Card Background Portrait Image representing the Service */}
      <div className="absolute inset-0 z-0 bg-zinc-950">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={svc.img}
          alt={svc.title}
          className="w-full h-full object-cover object-center filter brightness-[0.45] contrast-[1.05]"
          draggable={false}
        />
        {/* Vignette overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-transparent mix-blend-multiply" />
      </div>

      {/* Foreground Wavy Infinite Scrolling Title & Cursive text */}
      <div className="absolute inset-x-0 top-1/4 z-10 pointer-events-none select-none overflow-visible">
        {/* White blocky scrolling text path */}
        <svg viewBox="0 0 1000 200" className="w-full overflow-visible h-28 md:h-38">
          <path id={`curve-white-${index}`} d="M 0,100 C 250,30 750,170 1000,100" fill="none" stroke="none" />
          <text className="font-display font-extrabold text-[4.5rem] md:text-[6.5rem] fill-white uppercase tracking-tight opacity-90">
            <motion.textPath
              href={`#curve-white-${index}`}
              startOffset="0%"
              animate={isActive ? { startOffset: ["0%", "-50%"] } : { startOffset: "0%" }}
              transition={whiteTransition}
            >
              {svc.title} • {svc.title} •
            </motion.textPath>
          </text>
        </svg>

        {/* Overlapping red/orange script scrolling text path in reverse */}
        <div className="relative -mt-14 md:-mt-20">
          <svg viewBox="0 0 1000 200" className="w-full overflow-visible h-28 md:h-38">
            <path id={`curve-red-${index}`} d="M 0,120 C 250,50 750,190 1000,120" fill="none" stroke="none" />
            <text className="font-serif italic font-medium text-[3.2rem] md:text-[4.5rem] fill-orange-500 opacity-95">
              <motion.textPath
                href={`#curve-red-${index}`}
                startOffset="-50%"
                animate={isActive ? { startOffset: ["-50%", "0%"] } : { startOffset: "-50%" }}
                transition={redTransition}
              >
                {svc.subtitle} • {svc.subtitle} •
              </motion.textPath>
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
          <h4 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-2">
            {svc.title}
          </h4>
        </div>

        {/* Glassmorphism bullet points wrapper */}
        <div className="bg-black/60 backdrop-blur-md rounded-2xl p-4 md:p-5 border border-white/10 max-w-sm">
          <ul className="grid grid-cols-1 gap-1.5">
            {svc.items.slice(0, 3).map((item) => (
              <li key={item} className="text-sm md:text-base text-zinc-300 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative z-0 bg-black pt-24 md:pt-36 pb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-10 flex flex-col md:flex-row gap-8 md:gap-16 relative">
        {/* Sticky Vertical Title on the left */}
        <div className="md:w-36 lg:w-44 shrink-0 flex flex-col items-center md:items-start pt-4 md:sticky md:top-[12vh] h-fit select-none">
          <span className="text-[10px] text-orange-500 tracking-[0.35em] uppercase font-bold mb-4 block text-center md:text-left w-full">
            What We Do
          </span>
          <div className="flex flex-row md:flex-col items-center justify-center md:justify-start gap-2.5 md:gap-4 font-display text-[1.4rem] md:text-[2.2rem] lg:text-[2.8rem] font-black text-white leading-none uppercase opacity-20 w-full pt-1 md:pt-4">
            {"SERVICES".split("").map((char, index) => (
              <span key={index} className="transition-all duration-300 hover:opacity-100 hover:text-orange-500 scale-x-[1.8] inline-block origin-center md:origin-left">
                {char}
              </span>
            ))}
          </div>
        </div>

        {/* Styled Service Cards stack */}
        <div className="flex-1 max-w-5xl pt-16 md:pt-28">
          <div className="relative space-y-12">
            {SERVICES.map((svc, i) => (
              <ServiceCard key={svc.num} svc={svc} index={i} />
            ))}
          </div>
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
