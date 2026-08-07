"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import Preloader from "@/components/ui/Preloader";
import CustomCursor from "@/components/ui/CustomCursor";
import NoiseOverlay from "@/components/ui/NoiseOverlay";
import SmoothScroll from "@/components/ui/SmoothScroll";
import Navbar from "@/components/ui/Navbar";
import Ribbons from "@/components/ui/Ribbons";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Portfolio from "@/components/sections/Portfolio";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function ClientWrapper() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!ready) return;

    const sections = document.querySelectorAll("section[id]");
    const observerOptions = {
      root: null,
      rootMargin: "-45% 0px -45% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          const newHash = id === "home" ? "" : `#${id}`;
          if (window.location.hash !== newHash) {
            window.history.replaceState(null, null, window.location.pathname + newHash);
          }
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [ready]);

  return (
    <>
      {/* Always-present layer — grain + custom cursor */}
      <NoiseOverlay />
      <CustomCursor />

      {/* Fullscreen Ribbons cursor effect */}
      <div className="fixed inset-0 pointer-events-none z-[9999]" style={{ mixBlendMode: 'difference' }}>
        <Ribbons
          baseThickness={8}
          colors={['#ffffff']}
          speedMultiplier={0.38}
          maxAge={400}
          enableFade={false}
          enableShaderEffect={true}
        />
      </div>

      {/* Preloader — sweeps away then triggers ready */}
      <Preloader onComplete={() => setReady(true)} />

      {/* Page content fades in after preloader exits */}
      {ready && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <SmoothScroll>
            <Navbar />
            <main>
              <Hero />
              <About />
              <Portfolio />
              <Services />
              <Process />
              <Testimonials />
            </main>
            <Footer />
          </SmoothScroll>
        </motion.div>
      )}
    </>
  );
}
