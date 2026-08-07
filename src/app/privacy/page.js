"use client";

import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/sections/Footer";
import NoiseOverlay from "@/components/ui/NoiseOverlay";
import CustomCursor from "@/components/ui/CustomCursor";

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>
          <p className="text-zinc-500 text-xs mb-8">Last Updated: August 7, 2026</p>

          <div className="space-y-8 text-zinc-300 text-sm md:text-base leading-relaxed">
            <section className="space-y-3">
              <h2 className="text-lg md:text-xl font-bold text-white tracking-tight">1. Information We Collect</h2>
              <p>
                We collect information you provide directly to us, such as when you fill out our contact form or send us an email. This information may include your name, email address, company name, project details, and any other information you choose to provide.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg md:text-xl font-bold text-white tracking-tight">2. How We Use Your Information</h2>
              <p>
                We use the information we collect to communicate with you, process your project inquiries, deliver our design and engineering services, and optimize your experience on our website.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg md:text-xl font-bold text-white tracking-tight">3. Data Sharing and Service Providers</h2>
              <p>
                We do not sell, trade, or rent your personal information to third parties. We may use trusted third-party service providers (like Formspree for forms processing) to help us operate our business and website, subject to strict confidentiality terms.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg md:text-xl font-bold text-white tracking-tight">4. Cookies and Analytics</h2>
              <p>
                Our website may use basic cookies or analytics tags to analyze traffic patterns, personalize content, and improve site loading performance. You can choose to disable cookies in your browser settings if you prefer.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg md:text-xl font-bold text-white tracking-tight">5. Contact Us</h2>
              <p>
                If you have any questions or concerns about this Privacy Policy, please contact us at:{" "}
                <a href="mailto:thecraftlance@gmail.com" className="text-orange-500 hover:underline">
                  thecraftlance@gmail.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
