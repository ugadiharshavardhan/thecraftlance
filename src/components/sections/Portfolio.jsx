"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import OptionWheel from "@/components/ui/OptionWheel";

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
    link: "hospital-app-black-mu.vercel.app",
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
      className={`relative h-full w-full overflow-hidden rounded-[1.5rem] border border-white/10 transition-all duration-500 ${
        active 
          ? "shadow-[0_30px_100px_rgba(255,255,255,0.15)] ring-1 ring-white/30" 
          : "shadow-[0_12px_40px_rgba(0,0,0,0.8)] filter brightness-[0.4]"
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
      
      {/* Link indicator on hover */}
      <div className="absolute top-4 right-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-black/60 text-zinc-50 backdrop-blur-sm">
          <ArrowUpRightIcon />
        </span>
      </div>
    </div>
  );
}

// Separate component for the 3D card wrapper to strictly follow React hook rules
function CarouselCard({ project, index, smoothProgress, dimensions, angleStep, active, onClick }) {
  const theta = useTransform(smoothProgress, (p) => (index - p) * angleStep);
  
  const x = useTransform(theta, (t) => dimensions.radius * Math.sin(t));
  const z = useTransform(theta, (t) => dimensions.radius * Math.cos(t) - dimensions.radius);
  const rotateY = useTransform(theta, (t) => (t * 180) / Math.PI);
  const opacity = useTransform(theta, (t) => {
    const cos = Math.cos(t);
    if (cos < -0.3) return 0;
    return (cos + 0.3) / 1.3;
  });
  const scale = useTransform(theta, (t) => {
    const cos = Math.cos(t);
    return 0.75 + 0.25 * ((cos + 1) / 2);
  });
  const zIndex = useTransform(theta, (t) => Math.round((Math.cos(t) + 1) * 100));

  return (
    <motion.div
      className="group absolute cursor-pointer"
      style={{
        width: `${dimensions.cardW}px`,
        height: `${dimensions.cardH}px`,
        transformStyle: "preserve-3d",
        backfaceVisibility: "hidden",
        x,
        z,
        rotateY,
        opacity,
        scale,
        zIndex,
      }}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.3 },
      }}
      onClick={onClick}
    >
      <ProjectCard project={project} active={active} />
    </motion.div>
  );
}

export default function Portfolio() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const scrollTriggerInstance = useRef(null);
  
  // MotionValues for smooth scroll mapping without triggering React re-renders on scroll
  const scrollProgress = useMotionValue(0);
  const smoothProgress = useSpring(scrollProgress, {
    stiffness: 80,
    damping: 25,
    mass: 0.5,
  });

  const [currentProject, setCurrentProject] = useState(0);

  const scrollToProject = (index) => {
    if (!scrollTriggerInstance.current) return;
    const st = scrollTriggerInstance.current;
    const start = st.start;
    const end = st.end;
    const total = end - start;
    const targetScroll = start + (index / (COUNT - 1)) * total;

    if (st.scroll) {
      st.scroll(targetScroll);
    } else if (window.__lenis) {
      window.__lenis.scrollTo(targetScroll, { duration: 1.2 });
    } else {
      window.scrollTo({ top: targetScroll, behavior: "smooth" });
    }
  };

  useEffect(() => {
    // Sync the active index state with the spring
    const unsubscribe = smoothProgress.on("change", (latest) => {
      const idx = Math.round(latest);
      let normalizedIdx = idx % COUNT;
      if (normalizedIdx < 0) normalizedIdx += COUNT;
      setCurrentProject((prev) => (prev !== normalizedIdx ? normalizedIdx : prev));
    });

    return () => unsubscribe();
  }, [smoothProgress]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    if (!section) return;

    const totalScrollHeight = COUNT * 150;

    const ctx = gsap.context(() => {
      scrollTriggerInstance.current = ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: `+=${totalScrollHeight}%`,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          // Map scroll progress to 0 -> COUNT - 1 directly on the MotionValue
          const currentVal = self.progress * (COUNT - 1);
          scrollProgress.set(currentVal);
        },
      });
    }, section);

    const refresh = () => ScrollTrigger.refresh();
    const onLenisScroll = () => ScrollTrigger.update();
    let boundLenis = null;
    let onLenisReady = null;

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

    function bindLenis(lenis) {
      if (!lenis || boundLenis) return;
      boundLenis = lenis;
      lenis.on("scroll", onLenisScroll);
      requestAnimationFrame(refresh);
    }

    window.addEventListener("load", refresh);
    const t = setTimeout(refresh, 200);

    return () => {
      clearTimeout(t);
      window.removeEventListener("load", refresh);
      if (onLenisReady) window.removeEventListener("lenis:ready", onLenisReady);
      if (boundLenis) boundLenis.off("scroll", onLenisScroll);
      ctx.revert();
    };
  }, [scrollProgress]);

  // Compute 3D variables dynamically
  const [dimensions, setDimensions] = useState({ radius: 450, cardW: 280, cardH: 380 });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setDimensions({ radius: 240, cardW: 180, cardH: 260 });
      } else if (window.innerWidth < 1024) {
        setDimensions({ radius: 360, cardW: 240, cardH: 340 });
      } else {
        setDimensions({ radius: 480, cardW: 280, cardH: 380 });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="work"
      ref={sectionRef}
      className="relative h-svh w-full overflow-hidden bg-black text-zinc-50"
    >
      {/* White Grid Lines Background - Solid with rows & columns */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          backgroundPosition: "center center",
        }}
      />
      {/* Radial vignette fade for grid lines */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 bg-transparent"
        style={{
          background: "radial-gradient(circle at center, transparent 20%, black 90%)"
        }}
      />

      {/* Header Info - Left Aligned and Renamed to "Our Work" */}
      <div className="absolute top-12 left-6 md:left-14 z-30 pointer-events-none">
        <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-orange-500">
          Selected Projects
        </span>
        <h2 className="mt-2 font-display text-4xl font-semibold tracking-tight text-white md:text-5xl">
          Our Work
        </h2>
      </div>

      {/* 3D Stage Container */}
      <div
        ref={containerRef}
        className="relative z-10 flex h-full w-full items-center justify-center overflow-hidden"
        style={{ perspective: "1500px" }}
      >
        <div
          className="relative flex items-center justify-center"
          style={{
            transformStyle: "preserve-3d",
            width: `${dimensions.cardW}px`,
            height: `${dimensions.cardH}px`,
          }}
        >
          {PROJECTS.map((project, index) => {
            const angleStep = (2 * Math.PI) / COUNT;

            return (
              <CarouselCard
                key={project.id}
                project={project}
                index={index}
                smoothProgress={smoothProgress}
                dimensions={dimensions}
                angleStep={angleStep}
                active={currentProject === index}
                onClick={() => {
                  if (project.link) {
                    window.open(project.link, "_blank", "noopener,noreferrer");
                  }
                }}
              />
            );
          })}
        </div>
      </div>

      {/* Option Wheel on the left side of the screen */}
      <div className="absolute left-6 md:left-14 top-1/2 -translate-y-1/2 w-80 md:w-96 h-[320px] md:h-[450px] z-30 flex items-center justify-start pointer-events-auto select-none">
        <OptionWheel
          items={PROJECTS.map((p) => p.name)}
          selected={currentProject}
          textColor="#666666"
          activeColor="#ffffff"
          side="left"
          fontSize={2.25}
          spacing={1.6}
          curve={1}
          tilt={8}
          blur={1.5}
          fade={0.35}
          smoothing={300}
          inset={20}
          loop={false}
          draggable
          onChange={(index) => {
            scrollToProject(index);
          }}
        />
      </div>

      {/* Footer Info displaying current project tag & description (Title removed as it is shown on the OptionWheel) */}
      <div className="absolute bottom-16 inset-x-0 z-30 text-center pointer-events-none">
        <motion.div
          key={currentProject}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col items-center gap-1 px-4"
        >
          <span className="font-mono text-xs tracking-[0.25em] text-orange-500 font-semibold uppercase">
            {PROJECTS[currentProject]?.tag}
          </span>
          <p className="max-w-xl text-sm text-zinc-400 mt-1 truncate whitespace-nowrap overflow-hidden">
            {PROJECTS[currentProject]?.description}
          </p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-1 pointer-events-none">
        <motion.span
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="text-white/40"
        >
          <ChevronDownIcon />
        </motion.span>
      </div>
    </section>
  );
}
