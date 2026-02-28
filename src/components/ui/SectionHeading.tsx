"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import FadeInView from "@/components/animations/FadeInView";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  sectionNumber?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
  className = "",
  sectionNumber,
}: SectionHeadingProps) {
  const lineRef = useRef<SVGSVGElement>(null);
  const isInView = useInView(lineRef, { once: true, margin: "-10% 0px" });

  return (
    <FadeInView
      className={`mb-12 md:mb-16 relative ${centered ? "text-center" : ""} ${className}`}
    >
      {/* Oversized editorial section number */}
      {sectionNumber && (
        <div
          className={`section-number absolute select-none pointer-events-none -top-8 ${centered ? "left-1/2 -translate-x-1/2" : "-left-4"
            }`}
          aria-hidden="true"
        >
          {sectionNumber}
        </div>
      )}

      <h2 className="font-display font-bold mb-4 text-text-primary relative z-10">
        {title}
      </h2>

      {subtitle && (
        <p
          className={`text-lg max-w-2xl ${centered ? "mx-auto" : ""} text-text-muted`}
        >
          {subtitle}
        </p>
      )}

      {/* ═══ SVG Brush-Stroke Underline Draw ═══ */}
      <div className={`flex items-center justify-${centered ? "center" : "start"} mt-5`}>
        <svg
          ref={lineRef}
          width="180"
          height="14"
          viewBox="0 0 180 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          style={{ overflow: "visible" }}
        >
          {/* Main brush stroke path */}
          <motion.path
            d="M2 9 C30 4, 60 12, 90 7 C120 2, 150 11, 178 6"
            stroke="url(#stroke-gradient)"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={
              isInView
                ? { pathLength: 1, opacity: 1 }
                : { pathLength: 0, opacity: 0 }
            }
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          />
          {/* Secondary thin underline for depth */}
          <motion.path
            d="M2 12 C40 10, 80 13, 120 11 C145 10, 165 12, 178 11"
            stroke="rgba(130,84,244,0.25)"
            strokeWidth="1"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={
              isInView
                ? { pathLength: 1, opacity: 1 }
                : { pathLength: 0, opacity: 0 }
            }
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
          />
          <defs>
            <linearGradient id="stroke-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#6535e8" stopOpacity="0.9" />
              <stop offset="60%" stopColor="#8254f4" stopOpacity="1" />
              <stop offset="100%" stopColor="#9d75f7" stopOpacity="0.7" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </FadeInView>
  );
}
