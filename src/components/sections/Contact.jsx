"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [projectType, setProjectType] = useState("Website Development");

  return (
    <section id="contact-section" className="relative z-10 bg-black text-white py-28 px-6 md:px-14 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        
        {/* Left Column Info */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <span className="text-[10px] text-orange-500 tracking-[0.35em] uppercase mb-4 block font-semibold">
              Contact Us
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6.5xl font-medium tracking-tight leading-[1.05] mb-6 text-white">
              Let&apos;s build something legendary.
            </h2>
            <p className="text-zinc-400 text-sm md:text-base max-w-sm mb-8 leading-relaxed">
              Have a project in mind or want to work with us? Drop us a message, and we&apos;ll get back to you within 24 hours.
            </p>
          </div>

          <div className="space-y-4 border-t border-white/10 pt-6">
            <div>
              <p className="text-[9px] uppercase tracking-[0.2em] text-zinc-500 mb-1">Email Us</p>
              <a href="mailto:thecraftlance@gmail.com" className="text-sm md:text-base font-medium text-white hover:text-orange-500 transition-colors">
                thecraftlance@gmail.com
              </a>
            </div>
            <div>
              <p className="text-[9px] uppercase tracking-[0.2em] text-zinc-500 mb-1">Socials</p>
              <a href="https://www.instagram.com/thecraftlance/" target="_blank" rel="noopener noreferrer" className="text-sm md:text-base font-medium text-white hover:text-orange-500 transition-colors">
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Right Column Form */}
        <div className="lg:col-span-7 rounded-3xl bg-zinc-900/40 border border-white/10 p-6 md:p-10">
          <form action="https://formspree.io/f/xaewnpgz" method="POST" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-[10px] uppercase tracking-wider text-zinc-400">Your Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  placeholder="John Doe"
                  className="w-full bg-zinc-950/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-orange-500 transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-[10px] uppercase tracking-wider text-zinc-400">Email Address</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="john@example.com"
                  className="w-full bg-zinc-950/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-orange-500 transition-colors"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase tracking-wider text-zinc-400">What are you looking to build?</label>
              <div className="flex flex-wrap gap-2 pt-1">
                {["Website Development", "App Development", "AI & Automation", "Digital Marketing", "Other"].map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setProjectType(type)}
                    className={`text-xs px-4 py-2.5 rounded-full border transition-all duration-300 cursor-pointer ${
                      projectType === type
                        ? "bg-orange-500 border-orange-500 text-black font-semibold"
                        : "bg-zinc-950/40 border-white/10 text-zinc-400 hover:border-white/30 hover:text-white"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
              {/* Hidden input to pass selected project type in form submission */}
              <input type="hidden" name="project_type" value={projectType} />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-[10px] uppercase tracking-wider text-zinc-400">Project Details</label>
              <textarea
                name="message"
                id="message"
                required
                rows={4}
                placeholder="Tell us about your project, goals, and timeline..."
                className="w-full bg-zinc-950/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-orange-500 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-white hover:bg-orange-500 text-black font-semibold text-sm py-4 rounded-xl transition-colors duration-300 cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
