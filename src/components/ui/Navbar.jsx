"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 inset-x-0 z-[9990] transition-all duration-500 ${
        scrolled
          ? "py-4 bg-black/70 backdrop-blur-md border-b border-white/5"
          : "py-7"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="text-white font-bold text-sm tracking-[0.2em] uppercase"
        >
          GroWhale
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-xs text-zinc-500 hover:text-white transition-colors tracking-widest uppercase"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex px-5 py-2.5 bg-white text-black text-xs font-semibold tracking-wide hover:bg-zinc-200 transition-colors"
        >
          Start a Project
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="md:hidden flex flex-col gap-[5px] p-2"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`block w-6 h-px bg-white origin-center transition-all duration-300 ${
                open
                  ? i === 0
                    ? "rotate-45 translate-y-[9px]"
                    : i === 1
                    ? "opacity-0 scale-x-0"
                    : "-rotate-45 -translate-y-[3px]"
                  : ""
              }`}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden bg-black border-t border-zinc-900"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-2xl font-light text-zinc-300 hover:text-white transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 text-sm px-5 py-3.5 bg-white text-black font-semibold text-center"
              >
                Start a Project
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
