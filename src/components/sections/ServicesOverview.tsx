"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import { SERVICES } from "@/lib/constants";

// 3D Stack Entry Reveal — cards emerge from a stacked deck
const stackVariants = {
  hidden: (i: number) => ({
    opacity: 0,
    y: 60 + i * 10,
    scale: 0.88 - i * 0.04,
    rotateX: 12,
    filter: "blur(4px)",
    transformOrigin: "bottom center",
  }),
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    filter: "blur(0px)",
    transformOrigin: "bottom center",
    transition: {
      duration: 0.7,
      delay: i * 0.12,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

export default function ServicesOverview() {
  const gridRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(gridRef, { once: true, margin: "-8% 0px" });

  return (
    <section className="py-20 md:py-28 bg-surface relative overflow-hidden" style={{ perspective: "1200px" }}>
      <div className="absolute top-0 left-1/3 w-[300px] h-[300px] bg-primary rounded-full blur-[150px] opacity-[0.04] pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Our Services"
          subtitle="From content creation to performance-driven ads, we help brands grow, engage, and convert."
          sectionNumber="01"
        />

        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          style={{ transformStyle: "preserve-3d" }}
        >
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.id}
              custom={i}
              variants={stackVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              style={{ transformStyle: "preserve-3d" }}
            >
              <ServiceCard
                icon={service.icon}
                title={service.title}
                shortDescription={service.shortDescription}
                fullDescription={service.fullDescription}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
