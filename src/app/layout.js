import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata = {
  title: "GroWhale — Premium Digital Agency",
  description:
    "We don't build websites. We craft digital experiences that grow businesses.",
  keywords:
    "digital agency, web development, UI/UX design, branding, AI solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body className="bg-black text-white overflow-x-hidden">{children}</body>
    </html>
  );
}
