"use client";

import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/sections/Footer";
import NoiseOverlay from "@/components/ui/NoiseOverlay";
import CustomCursor from "@/components/ui/CustomCursor";
import Contact from "@/components/sections/Contact";

export default function ContactPage() {
  return (
    <>
      <NoiseOverlay />
      <CustomCursor />
      <Navbar />
      <main className="bg-black pt-16">
        <Contact />
      </main>
      <Footer />
    </>
  );
}
