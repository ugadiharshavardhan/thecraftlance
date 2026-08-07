"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const PLANS = [
  {
    bestFor: "PERSONAL / SMALL BUSINESS",
    name: "Basic",
    blurb: "Everything needed to establish a credible online presence.",
    price: "₹20,000+",
    priceNote: "Onwards",
    features: [
      "Up to 5 pages",
      "Mobile responsive design",
      "Basic SEO setup",
      "Contact form integration",
      "Google Maps integration",
      "WhatsApp chat button",
      "1 month free support",
    ],
  },
  {
    bestFor: "GROWING BUSINESSES & AGENCIES",
    name: "Business",
    blurb: "A conversion-focused business website with stronger structure.",
    price: "₹40,000+",
    priceNote: "Onwards",
    featured: true,
    features: [
      "Up to 12 pages",
      "Custom UI/UX design",
      "On-page SEO optimization",
      "Blog/CMS integration",
      "Lead capture forms",
      "Analytics setup",
      "3 months free support",
    ],
  },
  {
    bestFor: "PRODUCT BUSINESSES & RETAILERS",
    name: "E-commerce",
    blurb: "A high-conversion online store setup focused on sales, scale.",
    price: "₹50K–₹1L+",
    priceNote: "Onwards",
    features: [
      "Product catalog & collections",
      "Payment gateway integration",
      "Inventory & order management",
      "Cart recovery flow",
      "SEO-ready product pages",
      "Analytics + tracking events",
      "6 months support option",
    ],
  },
  {
    bestFor: "STARTUPS & SAAS FOUNDERS",
    name: "Custom SaaS",
    blurb: "End-to-end custom product engineering for scalable SaaS.",
    price: "₹2,00,000+",
    priceNote: "Onwards",
    features: [
      "Full custom development",
      "AI/automation integrations",
      "User auth and role management",
      "Subscription billing flows",
      "Admin dashboard and analytics",
      "API development & docs",
      "12 months support option",
    ],
  },
];

function FadeUp({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.85, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Pricing() {
  return (
    <section className="bg-white pt-28 md:pt-36 pb-20 md:pb-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14 md:mb-20 max-w-2xl">
          <FadeUp>
            <span className="text-[10px] text-[#999] tracking-[0.35em] uppercase mb-4 block">
              Pricing
            </span>
          </FadeUp>
          <FadeUp delay={0.06}>
            <h1 className="font-display text-4xl md:text-6xl font-medium text-[#111] leading-tight tracking-tight mb-4">
              Clear scopes. No surprises.
            </h1>
          </FadeUp>
          <FadeUp delay={0.12}>
            <p className="text-[#666] text-base md:text-lg leading-relaxed max-w-xl">
              Pick the package that matches your stage — from a solid first
              site to a full custom SaaS build.
            </p>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {PLANS.map((plan, i) => (
            <FadeUp key={plan.name} delay={i * 0.08}>
              <article
                className={`h-full flex flex-col rounded-[28px] p-7 md:p-9 ${
                  plan.featured
                    ? "bg-[#111] text-white"
                    : "bg-[#F5F2ED] text-[#111]"
                }`}
              >
                <p
                  className={`text-[10px] tracking-[0.22em] uppercase mb-4 ${
                    plan.featured ? "text-white/45" : "text-[#888]"
                  }`}
                >
                  Best for: {plan.bestFor}
                </p>

                <h2 className="font-display text-3xl md:text-4xl font-medium mb-3 tracking-tight">
                  {plan.name}
                </h2>

                <p
                  className={`text-sm leading-relaxed mb-8 max-w-md ${
                    plan.featured ? "text-white/60" : "text-[#666]"
                  }`}
                >
                  {plan.blurb}
                </p>

                <div className="mb-8">
                  <p className="font-display text-4xl md:text-5xl font-medium leading-none">
                    {plan.price}
                  </p>
                  <p
                    className={`text-xs mt-2 tracking-wide uppercase ${
                      plan.featured ? "text-white/40" : "text-[#999]"
                    }`}
                  >
                    {plan.priceNote}
                  </p>
                </div>

                <ul className="space-y-3 mb-10 flex-1">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className={`text-sm flex gap-3 ${
                        plan.featured ? "text-white/75" : "text-[#555]"
                      }`}
                    >
                      <span
                        className={`shrink-0 mt-2 w-1 h-1 rounded-full ${
                          plan.featured ? "bg-white" : "bg-[#111]"
                        }`}
                      />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href={`mailto:thecraftlance@gmail.com?subject=${encodeURIComponent(
                    `Inquiry about ${plan.name} plan`
                  )}`}
                  className={`inline-flex justify-center px-5 py-3 text-xs font-semibold tracking-wide uppercase transition-colors rounded-full ${
                    plan.featured
                      ? "bg-white text-black hover:bg-zinc-200"
                      : "bg-[#111] text-white hover:bg-[#2a2a2a]"
                  }`}
                >
                  Get started
                </a>
              </article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
