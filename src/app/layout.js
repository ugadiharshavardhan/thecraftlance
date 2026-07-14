import { Plus_Jakarta_Sans, Fraunces } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata = {
  title: "The Craft Lance — Premium Digital Agency",
  description:
    "We design, engineer, and launch web services that transform innovative ideas into scalable products.",
  keywords:
    "digital agency, web development, UI/UX design, branding, AI solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${jakarta.variable} ${fraunces.variable}`}>
      <body className="bg-white text-[#111] overflow-x-hidden">{children}</body>
    </html>
  );
}
