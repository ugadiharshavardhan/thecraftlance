"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [projectType, setProjectType] = useState("Website Development");
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMsg("");

    const formData = new FormData(e.target);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      mobile: formData.get("mobile"),
      project_type: formData.get("project_type"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setShowModal(true);
        e.target.reset();
        setProjectType("Website Development");
      } else {
        const resData = await response.json();
        setErrorMsg(resData.error || "Something went wrong.");
      }
    } catch (error) {
      setErrorMsg("Failed to send message. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

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

          <div className="flex flex-wrap items-center gap-4 border-t border-white/10 pt-8">
            <a 
              href="tel:+916305003695"
              className="flex items-center gap-2 text-zinc-400 hover:text-orange-500 transition-colors py-2 pl-3 pr-4 bg-zinc-900/40 rounded-full border border-white/10 hover:border-orange-500/50 text-sm font-medium"
              aria-label="Call Us"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              +91 63050 03695
            </a>
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=thecraftlance@gmail.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-orange-500 transition-colors p-2 bg-zinc-900/40 rounded-full border border-white/10 hover:border-orange-500/50"
              aria-label="Email Us"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
            </a>
            <a 
              href="https://www.instagram.com/thecraftlance/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-orange-500 transition-colors p-2 bg-zinc-900/40 rounded-full border border-white/10 hover:border-orange-500/50"
              aria-label="Instagram"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a 
              href="https://www.linkedin.com/in/the-craft-lance-050694429/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-orange-500 transition-colors p-2 bg-zinc-900/40 rounded-full border border-white/10 hover:border-orange-500/50"
              aria-label="LinkedIn"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right Column Form */}
        <div className="lg:col-span-7 rounded-3xl bg-zinc-900/40 border border-white/10 p-6 md:p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
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
                  pattern="[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}"
                  title="Please enter a valid email address with an @ symbol"
                  placeholder="john@example.com"
                  className="w-full bg-zinc-950/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-orange-500 transition-colors"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="mobile" className="text-[10px] uppercase tracking-wider text-zinc-400">Mobile Number</label>
              <input
                type="tel"
                name="mobile"
                id="mobile"
                required
                pattern="[0-9]{10}"
                maxLength="10"
                minLength="10"
                title="Please enter exactly 10 digits"
                placeholder="9876543210"
                className="w-full bg-zinc-950/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-orange-500 transition-colors"
              />
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

            {errorMsg && (
              <p className="text-red-500 text-sm mt-2">{errorMsg}</p>
            )}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-white hover:bg-orange-500 text-black font-semibold text-sm py-4 rounded-xl transition-colors duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </div>

      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-zinc-900 border border-white/10 p-8 md:p-10 rounded-3xl max-w-md w-full text-center shadow-2xl z-10"
            >
              <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-display font-medium text-white mb-3">Thank You!</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-8">
                Your message has been successfully sent. We will get back to you within 24 hours. A confirmation email has been sent to your inbox.
              </p>
              <button
                onClick={() => setShowModal(false)}
                className="w-full bg-white text-black font-semibold text-sm py-3.5 rounded-xl hover:bg-orange-500 transition-colors duration-300"
              >
                Close
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
