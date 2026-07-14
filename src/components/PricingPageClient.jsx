"use client";

import SmoothScroll from "@/components/ui/SmoothScroll";
import Navbar from "@/components/ui/Navbar";
import CustomCursor from "@/components/ui/CustomCursor";
import NoiseOverlay from "@/components/ui/NoiseOverlay";
import Pricing from "@/components/sections/Pricing";
import Footer from "@/components/sections/Footer";

export default function PricingPageClient() {
  return (
    <>
      <NoiseOverlay />
      <CustomCursor />
      <SmoothScroll>
        <Navbar />
        <main>
          <Pricing />
        </main>
        <Footer />
      </SmoothScroll>
    </>
  );
}
