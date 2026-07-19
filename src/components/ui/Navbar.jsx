"use client";

import { usePathname } from "next/navigation";
import PillNav from "@/components/ui/PillNav";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#work" },
  { label: "Services", href: "/#services" },
  { label: "Pricing", href: "/pricing" },
];

export default function Navbar() {
  const pathname = usePathname();
  // Only highlight Pricing — never show the Home active dot
  const activeHref = pathname === "/pricing" ? "/pricing" : undefined;

  return (
    <PillNav
      logo="/logo.svg"
      logoAlt="The Craft Lance"
      items={NAV_ITEMS}
      activeHref={activeHref}
      baseColor="#0B0B0B"
      pillColor="#ffffff"
      hoveredPillTextColor="#ffffff"
      pillTextColor="#0B0B0B"
      ease="power3.easeOut"
      initialLoadAnimation
    />
  );
}
