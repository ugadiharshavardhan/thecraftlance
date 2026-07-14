"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SmoothScroll({ children }) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    window.__lenis = lenis;
    window.dispatchEvent(new CustomEvent("lenis:ready", { detail: lenis }));

    lenis.on("scroll", ScrollTrigger.update);

    // Drive Lenis from GSAP ticker so pin/scrub stay in sync
    const ticker = (time) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(ticker);
    gsap.ticker.lagSmoothing(0);

    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      gsap.ticker.remove(ticker);
      lenis.off("scroll", ScrollTrigger.update);
      if (window.__lenis === lenis) {
        delete window.__lenis;
      }
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
