import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import SmoothScroll from "@/components/layout/SmoothScroll";
import ScrollProgress from "@/components/ui/ScrollProgress";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Media Maestro Co | Social Media Agency",
  description:
    "Media Maestro Co helps brands grow online through content creation, social media management, paid ads, and professional shoots.",
  keywords: [
    "social media agency",
    "content creation",
    "digital marketing",
    "media maestro",
    "social media management",
    "paid ads",
    "professional shooting",
  ],
  icons: {
    icon: "/favicon1.png",
  },
  openGraph: {
    title: "Media Maestro Co | Social Media Agency",
    description: "Where Your Brand Gets the Spotlight",
    url: "https://mediamaestroco.com",
    siteName: "Media Maestro Co",
    images: [{ url: "/og-image.svg", width: 1200, height: 630 }],
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable}`}>
      <body className="font-sans antialiased">
        {/* 2px reading progress bar at top */}
        <ScrollProgress />

        {/* Lenis smooth inertia scroll */}
        <SmoothScroll>
          <Navbar />
          <main className="page-transition">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
