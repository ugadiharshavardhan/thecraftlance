"use client";

import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/sections/Footer";
import NoiseOverlay from "@/components/ui/NoiseOverlay";
import CustomCursor from "@/components/ui/CustomCursor";

export default function TermsPage() {
  return (
    <>
      <NoiseOverlay />
      <CustomCursor />
      <Navbar />
      <main className="bg-black text-white min-h-screen pt-32 pb-20 px-6 md:px-14">
        <div className="max-w-3xl mx-auto">
          <span className="text-[10px] text-orange-500 tracking-[0.35em] uppercase mb-4 block font-semibold">
            Legal
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-medium tracking-tight mb-8">
            Terms of Service
          </h1>
          <p className="text-zinc-500 text-xs mb-8">Last Updated: August 7, 2026</p>

          <div className="space-y-8 text-zinc-300 text-sm md:text-base leading-relaxed">
            <section className="space-y-3">
              <h2 className="text-lg md:text-xl font-bold text-white tracking-tight">1. Acceptance of Terms</h2>
              <p>
                By accessing or using our website, you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, please do not use our site or our services.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg md:text-xl font-bold text-white tracking-tight">2. Scope of Services</h2>
              <p>
                The Craft Lance provides design, software development, social media management, SEO, and automation consulting services. All projects, deliverables, timelines, and payment structures are governed by individual client agreements and statements of work.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg md:text-xl font-bold text-white tracking-tight">3. Intellectual Property</h2>
              <p>
                All materials on this website, including design elements, texts, code samples, logos, graphics, and images, are the property of The Craft Lance and are protected by applicable intellectual property laws. You may not copy or redistribute any content without our prior written consent.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg md:text-xl font-bold text-white tracking-tight">4. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, The Craft Lance shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from your use of this website, information contained within it, or our services.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg md:text-xl font-bold text-white tracking-tight">5. Amendments</h2>
              <p>
                We reserve the right to modify these Terms of Service at any time. Changes will be posted to this page, and your continued use of our website constitutes acceptance of the modified terms.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
