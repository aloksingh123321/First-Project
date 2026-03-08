import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import Script from "next/script";
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
  metadataBase: new URL("https://mediamaestroco.com"),
  title: "Media Maestro Co | Social Media Agency",
  description:
    "Media Maestro Co helps brands grow online through content creation, social media management, paid ads, and professional shoots.",
  keywords: [
    "Media Maestro Co",
    "media maestro",
    "social media agency",
    "content creation",
    "digital marketing",
    "social media management",
    "paid ads",
    "professional shooting",
  ],
  icons: {
    icon: "/favicon1.png",
  },
  verification: {
    google: "tOM-8LUrEwczCeW2O5r69suXrlfjHNnmNwUXvS3JRVo",
  },
  openGraph: {
    title: "Media Maestro Co | Social Media Agency",
    description: "Where Your Brand Gets the Spotlight",
    url: "https://mediamaestroco.com",
    siteName: "Media Maestro Co",
    images: [{ url: "/og-image.png", width: 1912, height: 970 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Media Maestro Co | Social Media Agency",
    description: "Where Your Brand Gets the Spotlight",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://mediamaestroco.com",
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
      <head>
        {/* Google Analytics (GA4) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XL016F8NEK"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XL016F8NEK');
          `}
        </Script>
      </head>
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
