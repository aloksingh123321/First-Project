"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ImageIcon } from "lucide-react";
import FadeInView from "@/components/animations/FadeInView";
import StaggerChildren, {
  StaggerItem,
} from "@/components/animations/StaggerChildren";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import DragReel from "@/components/ui/DragReel";
import { PORTFOLIO_ITEMS } from "@/lib/constants";

// 3D Tilt Portfolio Card
function TiltCard({ item }: { item: (typeof PORTFOLIO_ITEMS)[0] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), {
    stiffness: 200,
    damping: 25,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), {
    stiffness: 200,
    damping: 25,
  });

  // Glow follows mouse
  const glowX = useTransform(x, [-0.5, 0.5], ["0%", "100%"]);
  const glowY = useTransform(y, [-0.5, 0.5], ["0%", "100%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(nx);
    y.set(ny);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={ref}
      className="portfolio-card group relative overflow-hidden rounded-2xl glass-card cursor-pointer"
      data-cursor="portfolio"
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      whileHover={{
        borderColor: "rgba(130,84,244,0.35)",
        boxShadow:
          "0 25px 50px rgba(0,0,0,0.45), 0 0 50px rgba(130,84,244,0.14)",
      }}
      transition={{ duration: 0.3 }}
    >
      {/* Mouse-tracking glow border */}
      {isHovered && (
        <motion.div
          className="absolute inset-0 z-10 pointer-events-none rounded-2xl"
          style={{
            background: "transparent",
            boxShadow: "inset 0 0 0 1px rgba(130,84,244,0.5)",
          }}
        />
      )}

      {/* Image / placeholder */}
      <div className="aspect-[4/5] bg-gradient-to-br from-primary/10 via-surface-card to-surface-dark flex items-center justify-center relative overflow-hidden">
        <ImageIcon className="text-primary-light opacity-20 w-10 h-10" />

        {/* Shimmer on hover */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          style={{
            background: `radial-gradient(circle at ${glowX} ${glowY}, rgba(130,84,244,0.15) 0%, transparent 60%)`,
          }}
        />
      </div>

      {/* Hover overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-surface-dark/95 via-transparent to-transparent flex flex-col justify-end p-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.25 }}
      >
        <span className="inline-block px-3 py-1 mb-2 text-xs font-medium bg-primary/20 text-primary-light rounded-full w-fit border border-primary/30">
          {item.category}
        </span>
        <h3 className="text-text-primary font-display font-bold text-sm">
          {item.title}
        </h3>
      </motion.div>
    </motion.div>
  );
}

export default function PortfolioGrid() {
  const previewItems = PORTFOLIO_ITEMS.slice(0, 6);

  return (
    <section className="py-20 md:py-28 bg-surface relative overflow-hidden">
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-primary rounded-full blur-[150px] opacity-[0.04] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Our Work"
          subtitle="A glimpse into our recent projects."
        />

        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {previewItems.map((item) => (
            <StaggerItem key={item.id}>
              <TiltCard item={item} />
            </StaggerItem>
          ))}
        </StaggerChildren>

        {/* ═══ Horizontal Drag Reel ═══ */}
        <FadeInView delay={0.2}>
          <DragReel />
        </FadeInView>

        <FadeInView delay={0.3} className="text-center mt-10">
          <Button href="/portfolio" variant="outline">
            View All Projects
          </Button>
        </FadeInView>
      </div>
    </section>
  );
}
