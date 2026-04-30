"use client";

const LINKS = {
  Work: ["Portfolio", "Case Studies", "Process"],
  Services: ["Web Development", "UI/UX Design", "Branding", "AI Tools"],
  Company: ["About", "Careers", "Contact"],
};

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 px-6 py-16 md:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="text-white font-bold text-sm tracking-[0.2em] uppercase mb-4">
              GroWhale
            </div>
            <p className="text-zinc-600 text-sm leading-relaxed max-w-[200px]">
              We craft digital experiences that grow businesses. Premium.
              Intentional. Unforgettable.
            </p>
          </div>

          {/* Link groups */}
          {Object.entries(LINKS).map(([group, items]) => (
            <div key={group}>
              <div className="text-[10px] text-zinc-700 tracking-[0.25em] uppercase mb-5">
                {group}
              </div>
              <ul className="flex flex-col gap-3">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-zinc-500 text-sm hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-zinc-900 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-zinc-700 text-xs">
            © 2024 GroWhale. All rights reserved.
          </span>
          <span className="text-zinc-800 text-xs tracking-wide">
            Made with intention.
          </span>
        </div>
      </div>
    </footer>
  );
}
