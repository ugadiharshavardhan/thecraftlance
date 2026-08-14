"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

const PROJECTS = [
  {
    id: 1,
    name: "The OH !",
    tag: "Cloud Kitchen",
    description: "Premium online cloud kitchen ordering platform with gourmet menu options.",
    img: "https://theoh.in/theoh!.jpg",
    link: "https://theoh.in/",
  },
  {
    id: 2,
    name: "Rotomaker",
    tag: "VFX Company",
    description: "Global visual effects studio specializing in high-precision rotoscoping, paint, and prep work.",
    img: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1600&q=80",
    link: "https://rotomaker-rho.vercel.app/",
  },
  {
    id: 3,
    name: "Portfolio",
    tag: "Developer Portfolio",
    description: "Interactive personal portfolio showcasing modern web engineering, 3D graphics, and responsive design.",
    img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=1600&q=80",
    link: "https://harshavardhanportfolio-beige.vercel.app/",
  },
  {
    id: 4,
    name: "Call Agent",
    tag: "AI Voice Automation",
    description: "Intelligent automated voice calling system and customer service workflow agent.",
    img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1600&q=80",
    link: "https://voice-call-automation.vercel.app/",
  },
  {
    id: 5,
    name: "Hostipal Dashboard",
    tag: "AI Dashboard",
    description: "Advanced prediction engine and market intelligence platform.",
    img: "https://user-images.githubusercontent.com/97469459/233842844-10f7d76d-c2d5-46bb-a413-1875b5771230.jpg",
    link: "https://hospital-app-black-mu.vercel.app",
  }
];

const COUNT = PROJECTS.length;

function ArrowUpRightIcon({ className = "" }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M7 17L17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

function ChevronLeftIcon({ className = "" }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

function ChevronRightIcon({ className = "" }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

function getProjectLink(project) {
  if (!project?.link) return null;
  if (/^https?:\/\//i.test(project.link)) return project.link;
  return `https://${project.link}`;
}

export default function Portfolio() {
  const containerRef = useRef(null);
  const [currentProject, setCurrentProject] = useState(0);

  const isMouseDown = useRef(false);
  const startX = useRef(0);
  const scrollLeftPos = useRef(0);

  const handleScroll = () => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const cards = container.querySelectorAll(".project-card");
    if (!cards.length) return;

    const style = window.getComputedStyle(container);
    const paddingLeft = parseFloat(style.paddingLeft) || 24;

    let closestIndex = 0;
    let minDistance = Infinity;

    cards.forEach((card, idx) => {
      const targetLeft = card.offsetLeft - paddingLeft;
      const distance = Math.abs(container.scrollLeft - targetLeft);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = idx;
      }
    });

    setCurrentProject(closestIndex);
  };

  const scrollToProject = (index) => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const cards = container.querySelectorAll(".project-card");
    if (cards[index]) {
      const card = cards[index];
      const style = window.getComputedStyle(container);
      const paddingLeft = parseFloat(style.paddingLeft) || 24;
      const targetLeft = card.offsetLeft - paddingLeft;

      container.scrollTo({
        left: targetLeft,
        behavior: "smooth",
      });
      setCurrentProject(index);
    }
  };

  const handleMouseDown = (e) => {
    if (!containerRef.current) return;
    isMouseDown.current = true;
    startX.current = e.pageX - containerRef.current.offsetLeft;
    scrollLeftPos.current = containerRef.current.scrollLeft;
  };

  const handleMouseLeaveOrUp = () => {
    isMouseDown.current = false;
  };

  const handleMouseMove = (e) => {
    if (!isMouseDown.current || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    containerRef.current.scrollLeft = scrollLeftPos.current - walk;
  };

  return (
    <section
      id="work"
      className="relative w-full py-16 sm:py-24 md:py-28 bg-black text-zinc-50 select-none overflow-hidden"
    >
      {/* Grid Lines Background */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          backgroundPosition: "center center",
        }}
      />
      {/* Subtle Ambient Radial Glow */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.03) 0%, transparent 70%)"
        }}
      />

      {/* Main Content Layout Container */}
      <div className="relative z-10 flex flex-col justify-between w-full">
        {/* Header Bar */}
        <div className="flex items-end justify-between px-6 md:px-16 lg:px-24 mb-8 sm:mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400 font-mono">
                Selected Projects
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              Our Work
            </h2>
          </div>

          {/* Navigation Controls & Counter */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-1.5 font-mono text-sm tracking-widest text-zinc-400 bg-zinc-900/80 px-4 py-2 rounded-full border border-white/10 backdrop-blur-md">
              <span className="text-white font-bold">
                {String(currentProject + 1).padStart(2, "0")}
              </span>
              <span className="text-zinc-600">/</span>
              <span>{String(COUNT).padStart(2, "0")}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => scrollToProject(Math.max(0, currentProject - 1))}
                disabled={currentProject === 0}
                aria-label="Previous project"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-zinc-900/80 text-white backdrop-blur-md transition-all duration-300 hover:border-white hover:bg-white/10 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-white/15 disabled:hover:bg-zinc-900/80"
              >
                <ChevronLeftIcon />
              </button>
              <button
                onClick={() => scrollToProject(Math.min(COUNT - 1, currentProject + 1))}
                disabled={currentProject === COUNT - 1}
                aria-label="Next project"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-zinc-900/80 text-white backdrop-blur-md transition-all duration-300 hover:border-white hover:bg-white/10 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-white/15 disabled:hover:bg-zinc-900/80"
              >
                <ChevronRightIcon />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Scroll Track Container */}
        <div
          ref={containerRef}
          onScroll={handleScroll}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeaveOrUp}
          onMouseUp={handleMouseLeaveOrUp}
          onMouseMove={handleMouseMove}
          className="relative w-full overflow-x-auto scroll-smooth scroll-pl-6 md:scroll-pl-16 lg:scroll-pl-24 px-6 md:px-16 lg:px-24 scrollbar-none snap-x snap-mandatory py-4 cursor-grab active:cursor-grabbing"
        >
          <div className="flex items-center gap-6 sm:gap-8 md:gap-10 w-max pr-6 md:pr-16 lg:pr-24">
            {PROJECTS.map((project, index) => {
              const link = getProjectLink(project);

              return (
                <div
                  key={project.id}
                  className="project-card snap-start group relative flex flex-col justify-between w-[85vw] sm:w-[460px] md:w-[540px] lg:w-[600px] shrink-0 h-[480px] sm:h-[520px] rounded-[2rem] border border-white/10 bg-zinc-950/80 backdrop-blur-xl overflow-hidden shadow-2xl p-6 sm:p-8 lg:p-10 transition-all duration-500 hover:border-white/30 hover:shadow-[0_20px_60px_rgba(255,255,255,0.06)]"
                >
                  {/* Image Background & Overlay */}
                  <div className="absolute inset-0 z-0 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={project.img}
                      alt={project.name}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      draggable={false}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/40 transition-opacity duration-500 group-hover:opacity-90" />
                  </div>

                  {/* Card Top Row */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="font-mono text-xs tracking-widest text-zinc-300 font-semibold bg-white/10 border border-white/15 px-3 py-1.5 rounded-full backdrop-blur-md">
                      {project.tag}
                    </span>
                    <span className="font-mono text-xs text-zinc-400 tracking-widest font-semibold bg-black/60 border border-white/10 px-3 py-1.5 rounded-full backdrop-blur-md">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Card Bottom Row */}
                  <div className="relative z-10 mt-auto pt-6">
                    <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight transition-colors duration-300">
                      {project.name}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-zinc-300 line-clamp-3 leading-relaxed max-w-lg">
                      {project.description}
                    </p>

                    <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                      <a
                        href={link || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View live project ${project.name}`}
                        className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-white transition-colors"
                      >
                        <span>Explore Project</span>
                        <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition-all duration-300 group-hover:border-white group-hover:bg-white group-hover:text-black group-hover:translate-x-1 group-hover:-translate-y-0.5">
                          <ArrowUpRightIcon />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}


