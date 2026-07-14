"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const PROJECTS = [
  {
    id: 1,
    name: "AudioSphere",
    tag: "Hardware UI",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80",
  },
  {
    id: 2,
    name: "Nimbus",
    tag: "SaaS Platform",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=80",
  },
  {
    id: 3,
    name: "Vertex",
    tag: "Brand Identity",
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1600&q=80",
  },
  {
    id: 4,
    name: "Pulse",
    tag: "Mobile App",
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1600&q=80",
  },
  {
    id: 5,
    name: "Oracle",
    tag: "AI Dashboard",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80",
  },
  {
    id: 6,
    name: "Harbor",
    tag: "E-commerce",
    img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&q=80",
  },
];

const COUNT = PROJECTS.length;
const EXPANSION_DURATION = 1;
const SCROLL_DURATION = COUNT * 0.8;
const SPRING = { type: "spring", stiffness: 300, damping: 30 };

function getRelativeDiff(index, currentIndex) {
  let diff = index - currentIndex;
  if (diff > COUNT / 2) diff -= COUNT;
  if (diff < -COUNT / 2) diff += COUNT;
  return diff;
}

function getStackPose(diff) {
  if (diff === 0) {
    return { y: 0, scale: 1, opacity: 1, zIndex: 5, rotateX: 0 };
  }
  if (diff === -1) {
    return { y: -80, scale: 0.85, opacity: 0.7, zIndex: 4, rotateX: 8 };
  }
  if (diff === -2) {
    return { y: -150, scale: 0.75, opacity: 0.4, zIndex: 3, rotateX: 15 };
  }
  if (diff === 1) {
    return { y: 80, scale: 0.85, opacity: 0.7, zIndex: 4, rotateX: -8 };
  }
  if (diff === 2) {
    return { y: 150, scale: 0.75, opacity: 0.4, zIndex: 3, rotateX: -15 };
  }
  return { y: diff < 0 ? -220 : 220, scale: 0.6, opacity: 0, zIndex: 1, rotateX: 0 };
}

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

function ChevronDownIcon({ className = "" }) {
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
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

function ProjectCard({ project, active }) {
  return (
    <div
      className={`relative h-full w-full overflow-hidden rounded-[2rem] ${
        active ? "shadow-[0_30px_80px_rgba(0,0,0,0.55)]" : "shadow-[0_12px_40px_rgba(0,0,0,0.35)]"
      }`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={project.img}
        alt={project.name}
        className="absolute inset-0 h-full w-full object-cover"
        draggable={false}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 md:p-8">
        <div>
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.22em] text-orange-500">
            {project.tag}
          </p>
          <h3 className="font-display text-3xl font-medium tracking-tight text-zinc-50 md:text-5xl">
            {project.name}
          </h3>
        </div>
        <span className="mb-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-zinc-50 backdrop-blur-md">
          <ArrowUpRightIcon />
        </span>
      </div>
    </div>
  );
}

function VerticalStack({ currentIndex }) {
  const visible = useMemo(() => {
    return PROJECTS.map((project, index) => {
      const diff = getRelativeDiff(index, currentIndex);
      return { project, index, diff, pose: getStackPose(diff) };
    }).filter(({ diff }) => Math.abs(diff) <= 2);
  }, [currentIndex]);

  return (
    <div
      className="relative flex h-full w-full items-center justify-center"
      style={{ perspective: "1200px", transformStyle: "preserve-3d" }}
    >
      <div className="relative h-[60vh] w-[85vw] md:w-[60vw]">
        {visible.map(({ project, index, diff, pose }) => (
          <motion.div
            key={project.id}
            className="absolute inset-0"
            style={{ zIndex: pose.zIndex, transformStyle: "preserve-3d" }}
            initial={false}
            animate={{
              y: pose.y,
              scale: pose.scale,
              opacity: pose.opacity,
              rotateX: pose.rotateX,
            }}
            transition={SPRING}
          >
            <ProjectCard project={project} active={diff === 0} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function Portfolio() {
  const sectionRef = useRef(null);
  const productsRef = useRef(null);
  const builtRef = useRef(null);
  const bgRef = useRef(null);
  const boxRef = useRef(null);
  const overlayRef = useRef(null);
  const uiRef = useRef(null);
  const currentRef = useRef(0);
  const [currentProject, setCurrentProject] = useState(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    if (!section) return;

    const proxy = { index: 0 };
    const totalPin = (EXPANSION_DURATION + SCROLL_DURATION) * 100;

    const ctx = gsap.context(() => {
      gsap.set(boxRef.current, {
        width: "60vw",
        height: "60vh",
        borderRadius: "2rem",
        xPercent: -50,
        yPercent: -50,
      });
      gsap.set(overlayRef.current, { opacity: 0 });
      gsap.set(uiRef.current, { opacity: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: `+=${totalPin}%`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      // Phase A — expand
      tl.to(
        productsRef.current,
        { xPercent: -150, opacity: 0, duration: EXPANSION_DURATION, ease: "none" },
        0
      )
        .to(
          builtRef.current,
          { xPercent: 150, opacity: 0, duration: EXPANSION_DURATION, ease: "none" },
          0
        )
        .to(
          bgRef.current,
          { opacity: 0, duration: EXPANSION_DURATION, ease: "none" },
          0
        )
        .to(
          boxRef.current,
          {
            width: "100vw",
            height: "100vh",
            borderRadius: "0px",
            duration: EXPANSION_DURATION,
            ease: "none",
          },
          0
        )
        .to(
          overlayRef.current,
          { opacity: 1, duration: EXPANSION_DURATION, ease: "none" },
          0
        )
        .to(
          uiRef.current,
          { opacity: 1, duration: EXPANSION_DURATION * 0.6, ease: "none" },
          EXPANSION_DURATION * 0.4
        );

      // Phase B — card stack driven by scroll
      tl.to(
        proxy,
        {
          index: COUNT - 1,
          duration: SCROLL_DURATION,
          ease: "none",
          onUpdate: () => {
            const next = Math.round(proxy.index);
            if (next !== currentRef.current) {
              currentRef.current = next;
              setCurrentProject(next);
            }
          },
        },
        EXPANSION_DURATION
      );
    }, section);

    const refresh = () => ScrollTrigger.refresh();
    const onLenisScroll = () => ScrollTrigger.update();
    let boundLenis = null;
    let onLenisReady = null;

    const bindLenis = (lenis) => {
      if (!lenis || boundLenis) return;
      boundLenis = lenis;
      lenis.on("scroll", onLenisScroll);
      requestAnimationFrame(refresh);
    };

    if (window.__lenis) {
      bindLenis(window.__lenis);
    } else {
      onLenisReady = (e) => {
        bindLenis(e.detail);
        if (onLenisReady) {
          window.removeEventListener("lenis:ready", onLenisReady);
          onLenisReady = null;
        }
      };
      window.addEventListener("lenis:ready", onLenisReady);
    }

    window.addEventListener("load", refresh);
    const t = window.setTimeout(refresh, 200);

    return () => {
      window.clearTimeout(t);
      window.removeEventListener("load", refresh);
      if (onLenisReady) window.removeEventListener("lenis:ready", onLenisReady);
      if (boundLenis) boundLenis.off("scroll", onLenisScroll);
      ctx.revert();
    };
  }, []);

  const counter = String(currentProject + 1).padStart(2, "0");

  return (
    <section
      id="work"
      ref={sectionRef}
      className="relative h-svh w-full overflow-hidden bg-neutral-950 text-zinc-50"
    >
      {/* Collapsed-state atmosphere */}
      <div ref={bgRef} className="pointer-events-none absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1800&q=80)",
          }}
        />
        <div className="absolute inset-0 bg-neutral-950/50" />
      </div>

      {/* Split title */}
      <div className="pointer-events-none absolute inset-0 z-30 flex items-center justify-between px-4 sm:px-8 md:px-14">
        <h2
          ref={productsRef}
          className="font-display text-[clamp(2.4rem,10vw,7rem)] font-medium leading-none tracking-tight text-zinc-50 mix-blend-difference"
        >
          Products
        </h2>
        <h2
          ref={builtRef}
          className="font-display text-[clamp(2.4rem,10vw,7rem)] font-medium leading-none tracking-tight text-zinc-50 mix-blend-difference"
        >
          Built
        </h2>
      </div>

      {/* Expanding card stage */}
      <div
        ref={boxRef}
        className="absolute left-1/2 top-1/2 z-20 overflow-hidden bg-neutral-950"
        style={{ width: "60vw", height: "60vh", borderRadius: "2rem" }}
      >
        <div
          ref={overlayRef}
          className="pointer-events-none absolute inset-0 z-10 bg-neutral-950/80 backdrop-blur-md"
        />
        <div className="relative z-20 h-full w-full">
          <VerticalStack currentIndex={currentProject} />
        </div>
      </div>

      {/* Navigation UI */}
      <div
        ref={uiRef}
        className="pointer-events-none absolute inset-0 z-40 opacity-0"
      >
        {/* Counter */}
        <div className="absolute left-6 top-1/2 hidden -translate-y-1/2 md:block">
          <div className="flex flex-col items-center gap-3">
            <span className="font-mono text-sm tracking-[0.2em] text-zinc-50">
              {counter}
            </span>
            <span className="h-12 w-px bg-white/30" />
            <span className="font-mono text-sm tracking-[0.2em] text-white/40">
              {String(COUNT).padStart(2, "0")}
            </span>
          </div>
        </div>

        {/* Progress dots */}
        <div className="absolute right-5 top-1/2 flex -translate-y-1/2 flex-col items-center gap-2 sm:right-8">
          {PROJECTS.map((project, index) => {
            const active = index === currentProject;
            return (
              <motion.span
                key={project.id}
                className="w-1.5 rounded-full bg-zinc-50"
                animate={{
                  height: active ? 32 : 8,
                  opacity: active ? 1 : 0.35,
                }}
                transition={SPRING}
              />
            );
          })}
        </div>

        {/* Keep scrolling */}
        <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.28em] text-white/55">
            Keep scrolling
          </span>
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            className="text-white/70"
          >
            <ChevronDownIcon />
          </motion.span>
        </div>
      </div>
    </section>
  );
}
