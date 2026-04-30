"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import Preloader from "@/components/ui/Preloader";
import CustomCursor from "@/components/ui/CustomCursor";
import NoiseOverlay from "@/components/ui/NoiseOverlay";
import SmoothScroll from "@/components/ui/SmoothScroll";
import Navbar from "@/components/ui/Navbar";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Portfolio from "@/components/sections/Portfolio";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

export default function ClientWrapper() {
  const [ready, setReady] = useState(false);

  return (
    <>
      {/* Always-present layer — grain + cursor */}
      <NoiseOverlay />
      <CustomCursor />

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
              <Services />
              <Process />
              <Portfolio />
              <Testimonials />
              <CTA />
            </main>
            <Footer />
          </SmoothScroll>
        </motion.div>
      )}
    </>
  );
}
