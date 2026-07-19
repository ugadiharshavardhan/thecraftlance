"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const STEPS = [
  {
    num: "1",
    title: "Kickoff Call & Project Discovery",
    desc: "We start by understanding your business, goals, and audience. This helps us plan the entire project with clear objectives and measurable results.",
    img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500&q=80",
  },
  {
    num: "2",
    title: "Research and UX Strategy",
    desc: "We analyze user behavior, competitors, and industry trends. This allows us to define an effective structure and feature set for your website.",
    img: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=500&q=80",
  },
  {
    num: "3",
    title: "Wireframing & Prototyping",
    desc: "Our team creates wireframes and interactive prototypes to ensure a seamless user experience (UX).",
    img: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=500&q=80",
  },
  {
    num: "4",
    title: "UI Design and Visual Identity",
    desc: "We create polished user interfaces that reflect your brand identity. Our designs follow UX best practices for usability and engagement.",
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&q=80",
  },
  {
    num: "5",
    title: "Website Development",
    desc: "Our developers build your website using clean, optimized code. We ensure it works perfectly across devices and delivers fast load times.",
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&q=80",
  },
  {
    num: "6",
    title: "Testing and Quality Assurance",
    desc: "We conduct thorough testing across browsers and devices. Our team checks for bugs, performance issues, and ensures top-quality user experience.",
    img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&q=80",
  },
  {
    num: "7",
    title: "Launch, Optimization, and Support",
    desc: "We launch your website, monitor performance, and provide ongoing support. This ensures your site stays fast, secure, and fully optimized.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80",
  },
];

const STEP_Y_POSITIONS = [180, 460, 740, 1020, 1300, 1580, 1860];

export default function Process() {
  const containerRef = useRef(null);
  const pathRef = useRef(null);
  const cursorRef = useRef(null);
  const [activeStep, setActiveStep] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const path = pathRef.current;
      const cursor = cursorRef.current;
      const container = containerRef.current;
      if (!path || !cursor || !container) return;

      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate progress of the scroll container relative to viewport center
      const start = rect.top - windowHeight / 3;
      const total = rect.height - windowHeight / 2;
      const progress = Math.max(0, Math.min(1, -start / total));

      const pathLength = path.getTotalLength();
      const point = path.getPointAtLength(progress * pathLength);

      // Tangent angle calculation
      const delta = 1;
      const p1 = path.getPointAtLength(Math.max(0, progress * pathLength - delta));
      const p2 = path.getPointAtLength(Math.min(pathLength, progress * pathLength + delta));
      const angle = Math.atan2(p2.y - p1.y, p2.x - p1.x) * (180 / Math.PI);

      // Move and rotate the lime green cursor arrow
      cursor.style.transform = "";
      cursor.setAttribute("transform", `translate(${point.x}, ${point.y}) rotate(${angle})`);

      // Identify which step is active based on closest step-number element to the cursor's client Y position
      const stepNumbers = container.querySelectorAll(".step-number");
      const cursorRect = cursor.getBoundingClientRect();
      const cursorY = cursorRect.top + cursorRect.height / 2;

      let closestStepIndex = 0;
      let minDistance = Infinity;

      stepNumbers.forEach((el, index) => {
        const numRect = el.getBoundingClientRect();
        const numY = numRect.top + numRect.height / 2;
        const distance = Math.abs(numY - cursorY);
        if (distance < minDistance) {
          minDistance = distance;
          closestStepIndex = index;
        }
      });

      setActiveStep(closestStepIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial call
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={containerRef}
      id="process"
      className="relative z-10 bg-black pt-32 pb-64 md:pt-44 md:pb-96 px-6 md:px-14 overflow-hidden text-white"
    >
      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="mb-28 text-center max-w-4xl mx-auto">
          <span className="text-[10px] text-orange-500 font-semibold tracking-[0.35em] uppercase mb-4 block">
            How We Work
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium leading-tight text-white mb-6">
            Our Process Is the Most Convenient for Our Partners!
          </h2>
          <p className="text-zinc-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            We streamline UI/UX design and web development with a structured, hassle-free approach. From research to launch, we ensure a smooth journey and high-quality digital products for our clients.
          </p>
        </div>

        {/* 3D Scroll Path Canvas / SVG */}
        <div className="absolute inset-0 z-0 pointer-events-none w-full h-full">
          <svg
            className="w-full h-full"
            viewBox="0 0 1000 2000"
            preserveAspectRatio="none"
          >
            {/* The Connecting Path Line */}
            <path
              ref={pathRef}
              d="M 200,180 C 0,180 1000,460 800,460 C 600,460 0,740 200,740 C 400,740 1000,1020 800,1020 C 600,1020 0,1300 200,1300 C 400,1300 1000,1580 800,1580 C 600,1580 0,1860 200,1860"
              fill="none"
              stroke="rgba(255,255,255,0.12)"
              strokeWidth="2"
              strokeDasharray="8 8"
            />
            {/* Lime Green cursor arrow moving along the path */}
            <g ref={cursorRef}>
              <path
                d="M -6,-10 L 14,0 L -6,10 L -2,0 Z"
                fill="#84cc16"
                stroke="#ffffff"
                strokeWidth="1.5"
              />
            </g>
          </svg>
        </div>

        {/* Staggered steps cards list */}
        <div className="relative z-10 space-y-36">
          {STEPS.map((step, index) => {
            const isEven = index % 2 !== 0;
            const isActive = activeStep === index;

            return (
              <div
                key={step.num}
                className={`flex w-full ${isEven ? "justify-end" : "justify-start"}`}
              >
                <div className="w-full md:w-[48%] flex gap-6 md:gap-8 items-start relative">
                  {/* Step Large Background Number */}
                  <span className="step-number font-display text-8xl md:text-9xl font-bold text-zinc-900 leading-none select-none transition-colors duration-500">
                    {step.num}
                  </span>

                  {/* Step Details */}
                  <div className="flex-1 relative">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-md">
                      {step.desc}
                    </p>

                    {/* Image revealed when cursor is active on this step */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8, y: 15 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.8, y: 15 }}
                          transition={{ duration: 0.4, ease: "easeOut" }}
                          className="absolute top-full left-0 mt-6 w-56 h-40 md:w-64 md:h-48 overflow-hidden rounded-2xl border border-white/20 shadow-[0_20px_50px_rgba(132,204,22,0.15)] z-20 pointer-events-none"
                        >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={step.img}
                            alt={step.title}
                            className="w-full h-full object-cover"
                            draggable={false}
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
