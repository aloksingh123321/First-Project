"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import FadeInView from "@/components/animations/FadeInView";
import TextReveal from "@/components/animations/TextReveal";

import { TrendingUp } from "lucide-react";

const CLIENT_INDUSTRIES = [
  "Hospitality",
  "Fashion",
  "Fitness",
  "F&B",
  "Real Estate",
  "E-commerce",
  "Retail",
];

export default function WhyUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax: orb moves at 40% of scroll speed
  const orbY = useTransform(scrollYProgress, [0, 1], ["-30%", "30%"]);
  const orbX = useTransform(scrollYProgress, [0, 1], ["0%", "5%"]);
  // Secondary orb opposite direction
  const orb2Y = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-28 bg-surface-dark grain-overlay relative overflow-hidden"
    >
      {/* ═══ Parallax Orbs ═══ */}
      <motion.div
        className="absolute top-1/2 right-0 w-[450px] h-[450px] rounded-full pointer-events-none"
        style={{
          y: orbY,
          x: orbX,
          background:
            "radial-gradient(circle, rgba(130,84,244,0.07) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{
          y: orb2Y,
          background:
            "radial-gradient(circle, rgba(157,117,247,0.05) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text side */}
          <div>
            <FadeInView>
              <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase text-primary-light border border-primary/20 rounded-full bg-primary/5 mb-6">
                Why Choose Us
              </span>
            </FadeInView>

            {/* Cinematic Text Reveal for heading */}
            <div className="mb-6">
              <TextReveal
                text="We Don't Just Post Content. We Build Brands."
                as="h2"
                delay={0.1}
                highlightWords={["Build", "Brands."]}
              />
            </div>

            <FadeInView delay={0.2}>
              <p className="text-silver/70 mb-6 leading-relaxed">
                At Media Maestro Co, we go beyond generic marketing. We craft
                strategies tailored to your brand&apos;s unique voice and goals,
                ensuring every piece of content drives real engagement and growth.
              </p>
            </FadeInView>
            <FadeInView delay={0.3}>
              <p className="text-silver/70 leading-relaxed">
                Founded in March 2025, we&apos;ve quickly built a reputation for
                delivering results that matter — more followers, more leads, more
                customers.
              </p>
            </FadeInView>



            {/* ═══ Client Industry Logo Strip ═══ */}
            <FadeInView delay={0.6}>
              <div className="mt-8">
                <p className="text-text-muted/50 text-xs uppercase tracking-[0.15em] mb-3">Industries We&apos;ve Worked With</p>
                <div className="logo-strip">
                  {CLIENT_INDUSTRIES.map((name) => (
                    <span key={name} className="logo-pill">{name}</span>
                  ))}
                </div>
              </div>
            </FadeInView>
          </div>

          {/* Visual side */}
          <FadeInView direction="right" delay={0.2}>
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-primary/20 via-surface-card to-surface-card overflow-hidden border border-silver/10">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <TrendingUp className="w-8 h-8 text-primary-light opacity-60" />
                    </div>
                    <p className="text-silver/40 text-sm">Brand Growth</p>
                  </div>
                </div>
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-primary rounded-2xl opacity-10 blur-md" />
            </div>
          </FadeInView>
        </div>
      </div>
    </section>
  );
}
