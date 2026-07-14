"use client";

const SERVICES = [
  {
    num: "01",
    title: "Social Media Management",
    items: [
      "Content Creation",
      "Daily Posting",
      "Engagement",
      "Growth Strategies",
      "Analytics & Reports",
    ],
  },
  {
    num: "02",
    title: "Content Creation",
    items: [
      "Graphic Design",
      "Reels & Videos",
      "Motion Graphics",
      "Branding Content",
      "Creative Campaigns",
    ],
  },
  {
    num: "03",
    title: "Branding & Creative",
    items: [
      "Logo & Identity",
      "Brand Strategy",
      "Packaging Design",
      "Print & Stationery",
      "Brand Guidelines",
    ],
  },
  {
    num: "04",
    title: "Website Development",
    items: [
      "Business Websites",
      "E-commerce Stores",
      "UI/UX Design",
      "SEO Friendly",
      "Maintenance & Support",
    ],
  },
  {
    num: "05",
    title: "Digital Marketing",
    items: [
      "Meta & Google Ads",
      "Campaign Management",
      "Lead Generation",
      "Retargeting Ads",
      "Performance Tracking",
    ],
  },
  {
    num: "06",
    title: "SEO Services",
    items: [
      "On-Page & Off-Page SEO",
      "Keyword Research",
      "Link Building",
      "Technical SEO",
      "Ranking Improvement",
    ],
  },
  {
    num: "07",
    title: "E-commerce Solutions",
    items: [
      "Store Setup",
      "Product Management",
      "Payment Gateway",
      "E-commerce SEO",
      "Order & Inventory",
    ],
  },
  {
    num: "08",
    title: "Automation & AI Solutions",
    items: [
      "Chatbot Integration",
      "CRM Automation",
      "Email Automation",
      "Workflow Automation",
      "AI Content Generation",
    ],
  },
  {
    num: "09",
    title: "Mobile App Development",
    items: [
      "Android & iOS Apps",
      "Cross-Platform Apps",
      "UI/UX Design",
      "App Development",
      "Maintenance & Support",
    ],
  },
];

const INDUSTRIES = [
  "Cafes & Restaurants",
  "Clothing Brands",
  "Gyms & Fitness",
  "Healthcare",
  "Ecommerce",
  "Real Estate",
  "Salons & Spas",
  "Education",
  "Startups",
  "& More",
];

const WHY_US = [
  "Creative & Strategic Approach",
  "Quality & Timely Delivery",
  "Transparent Communication",
  "Result-Driven Solutions",
  "Dedicated Support Team",
];

export default function Services() {
  return (
    <section id="services" className="relative z-0 bg-white border-t border-[#EFECEA]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-16 md:pt-20 pb-8 md:pb-10">
        <span className="text-[10px] text-[#999] tracking-[0.35em] uppercase mb-3 block">
          What We Do
        </span>
        <h2 className="font-display text-4xl md:text-5xl font-medium text-[#111] leading-[1.05] max-w-2xl tracking-tight">
          Services built for impact.
        </h2>
      </div>

      {/* Compact sticky stack — no ScrollStack pin/transform glitches */}
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        <div className="relative">
          {SERVICES.map((svc, i) => (
            <div
              key={svc.num}
              className="sticky mb-4"
              style={{
                top: `calc(5.5rem + ${i * 10}px)`,
                zIndex: i + 1,
              }}
            >
              <article className="rounded-[28px] md:rounded-[36px] bg-[#F5F2ED] border border-[#111]/[0.06] px-6 py-6 md:px-9 md:py-8">
                <div className="flex items-center justify-between mb-4 md:mb-5">
                  <span className="text-xs font-mono tracking-widest text-[#111]">
                    {svc.num}
                  </span>
                  <span className="text-sm text-[#888]">Service</span>
                </div>

                <h3 className="font-display text-2xl md:text-3xl font-medium mb-4 tracking-tight text-[#111]">
                  {svc.title}
                </h3>

                <ul className="space-y-2.5">
                  {svc.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-[#555] flex items-start gap-2.5"
                    >
                      <span className="mt-2 w-1 h-1 rounded-full bg-[#111] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          ))}
        </div>
        {/* Small release so last sticky card clears cleanly */}
        <div className="h-16 md:h-24" aria-hidden />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-16 md:pb-20 pt-2">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6">
          <div className="lg:col-span-7 rounded-[28px] bg-[#F5F2ED] p-7 md:p-9">
            <p className="text-[10px] tracking-[0.28em] uppercase text-[#999] mb-2">
              Industries
            </p>
            <h3 className="font-display text-2xl md:text-3xl font-medium text-[#111] mb-5 tracking-tight">
              Industries we work with
            </h3>
            <div className="flex flex-wrap gap-2">
              {INDUSTRIES.map((item) => (
                <span
                  key={item}
                  className="text-xs md:text-sm border border-[#D6D2CC] bg-white/70 text-[#333] px-3.5 py-1.5 rounded-full"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 rounded-[28px] bg-[#111] text-[#F5F2ED] p-7 md:p-9">
            <p className="text-[10px] tracking-[0.28em] uppercase text-white/40 mb-2">
              Why us
            </p>
            <h3 className="font-display text-2xl md:text-3xl font-medium mb-5 tracking-tight">
              Why choose us?
            </h3>
            <ul className="space-y-3">
              {WHY_US.map((item) => (
                <li key={item} className="text-sm md:text-base text-white/80 flex gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
