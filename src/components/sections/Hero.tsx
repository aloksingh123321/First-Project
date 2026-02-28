"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Button from "@/components/ui/Button";
import ScrambleText from "@/components/ui/ScrambleText";
import HeroParticles from "@/components/ui/HeroParticles";
import { MARQUEE_ITEMS } from "@/lib/constants";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const headlineWords = "Where Your Brand Gets the Spotlight".split(" ");

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center bg-surface-dark overflow-hidden"
    >
      {/* ═══ Netflix-Style Photo Mosaic Background (Ken Burns + Parallax) ═══ */}
      <motion.div
        className="absolute inset-0 z-0 hidden md:block hero-bg-img"
        style={{
          backgroundImage: "url('/assets/hero-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          y: bgY,
        }}
      />
      <motion.div
        className="absolute inset-0 z-0 md:hidden hero-bg-img"
        style={{
          backgroundImage: "url('/assets/hero-bg-mobile.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* ═══ Animated Mesh Gradient Blobs ═══ */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div
          className="mesh-blob absolute"
          style={{
            top: "50%", left: "40%",
            width: "700px", height: "700px",
            background: "radial-gradient(ellipse at center, rgba(130,84,244,0.13) 0%, rgba(101,53,232,0.06) 45%, transparent 70%)",
            borderRadius: "60% 40% 55% 45% / 50% 60% 40% 50%",
          }}
        />
        <div
          className="mesh-blob absolute"
          style={{
            top: "30%", left: "65%",
            width: "450px", height: "450px",
            background: "radial-gradient(ellipse at center, rgba(157,117,247,0.08) 0%, transparent 65%)",
            borderRadius: "40% 60% 45% 55% / 60% 40% 60% 40%",
            animationDelay: "-6s",
            animationDuration: "24s",
          }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-surface-dark/95 via-surface-dark/65 to-surface-dark z-[1]" />
      <div className="absolute inset-0 grain-overlay z-[2]" />

      {/* ═══ Ambient Floating Particles ═══ */}
      <HeroParticles />

      {/* ═══ Content ═══ */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center pt-24 pb-32">

        {/* Badge — ScrambleText on mount and hover */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-wider uppercase text-primary-light border border-primary/20 rounded-full bg-primary/5">
            <ScrambleText
              text="Social Media Agency"
              delay={300}
              duration={900}
              triggerOnHover
            />
          </span>
        </motion.div>

        {/* Headline — word-mask reveal + subtle breathing animation */}
        <div className="text-breathe">
          <h1
            className="font-display font-bold text-text-primary mb-6 leading-[1.25] pb-[0.2em]"
            style={{ overflow: "visible" }}
            aria-label="Where Your Brand Gets the Spotlight"
          >
            {headlineWords.map((word, i) => (
              <span
                key={i}
                className="inline-block overflow-hidden mr-[0.3em] last:mr-0"
                style={{ verticalAlign: "bottom" }}
              >
                <motion.span
                  className={`inline-block ${word === "Spotlight" ? "text-gradient" : ""}`}
                  initial={{ y: "110%", opacity: 0, rotate: 2 }}
                  animate={{ y: "0%", opacity: 1, rotate: 0 }}
                  transition={{
                    duration: 0.75,
                    delay: 0.2 + i * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>
        </div>

        {/* Subheadline */}
        <motion.p
          className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          Helping businesses grow online through content creation, social media
          management, and performance-driven marketing.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          <Button href="/contact" size="lg">Get a Free Quote</Button>
          <Button href="/portfolio" variant="ghost" size="lg">See Our Work</Button>
        </motion.div>
      </div>

      {/* ═══ Marquee — with hover preview cards ═══ */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        <div className="glass-marquee py-4">
          <div className="marquee-container">
            <div className="marquee-content">
              {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map(
                (item, i) => (
                  <span key={i} className="marquee-item-wrap shrink-0">
                    <span className="text-sm text-text-muted/60 font-medium">{item}</span>
                    <span className="text-primary/50 text-lg">✦</span>
                    {/* Hover preview card */}
                    <span className="marquee-preview">{item}</span>
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
