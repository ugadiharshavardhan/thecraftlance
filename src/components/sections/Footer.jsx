"use client";

const RESOURCES = [
  { label: "Projects", href: "/#work" },
  { label: "Process", href: "/#process" },
  { label: "Contact", href: "/contact" },
];

const COMPANY = [
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
];

const CONNECT = [
  { label: "Instagram", href: "https://www.instagram.com/thecraftlance/" },
  { label: "LinkedIn", href: "" },
  { label: "thecraftlance@gmail.com", href: "mailto:thecraftlance@gmail.com" },
];

function Dot() {
  return (
    <span className="inline-block w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#F5F2ED] align-middle ml-1 mb-0.5" />
  );
}

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-white h-svh min-h-svh max-h-svh px-3 sm:px-4 md:px-5 py-3 md:py-4 flex"
    >
      <div className="bg-[#141414] text-[#F5F2ED] rounded-[24px] md:rounded-[32px] px-5 md:px-10 lg:px-12 py-8 md:py-10 h-full w-full overflow-hidden flex flex-col justify-between min-h-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 shrink-0">
          <div className="lg:col-span-5">
            <h2 className="font-display text-[clamp(1.75rem,3.8vw,3rem)] font-medium leading-[1.15] tracking-tight max-w-md mb-5">
              Let&apos;s Turn Your Idea Into Reality
              <Dot />
            </h2>
            <a
              href="mailto:thecraftlance@gmail.com"
              className="inline-flex items-center gap-2 text-sm text-[#F5F2ED]/80 hover:text-white transition-colors"
            >
              Get started
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="lg:col-span-7 grid grid-cols-3 gap-4 md:gap-6">
            {[
              ["Company", COMPANY],
              ["Resources", RESOURCES],
              ["Connect", CONNECT],
            ].map(([title, items]) => (
              <div key={title}>
                <p className="text-[9px] tracking-[0.28em] uppercase text-[#F5F2ED]/35 mb-3">
                  {title}
                </p>
                <ul className="space-y-2">
                  {items.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        className="text-xs md:text-sm text-[#F5F2ED]/75 hover:text-white transition-colors break-all"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 mt-auto pt-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 shrink-0">
          <p className="text-[11px] text-[#F5F2ED]/35">
            © 2026 The Craft Lance. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="/privacy"
              className="text-[11px] text-[#F5F2ED]/35 hover:text-[#F5F2ED]/70 transition-colors"
            >
              Privacy
            </a>
            <a
              href="/terms"
              className="text-[11px] text-[#F5F2ED]/35 hover:text-[#F5F2ED]/70 transition-colors"
            >
              Terms
            </a>
          </div>
        </div>

        <div className="pt-6 md:pt-8 overflow-hidden shrink-0">
          <p className="font-display font-medium text-[#F5F2ED] leading-[0.88] tracking-[-0.03em] text-[clamp(2.25rem,11vw,7.5rem)] whitespace-nowrap">
            THE CRAFT LANCE
            <Dot />
          </p>
        </div>
      </div>
    </footer>
  );
}
