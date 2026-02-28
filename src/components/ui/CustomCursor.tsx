"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHoveringPortfolio, setIsHoveringPortfolio] = useState(false);
  const [isHoveringButton, setIsHoveringButton] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);

  // Inner dot — snappy
  const dotX = useSpring(rawX, { stiffness: 800, damping: 40 });
  const dotY = useSpring(rawY, { stiffness: 800, damping: 40 });

  // Outer ring — sluggish/trail
  const ringX = useSpring(rawX, { stiffness: 120, damping: 22 });
  const ringY = useSpring(rawY, { stiffness: 120, damping: 22 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const checkHover = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      const isPortfolio =
        !!el.closest("[data-cursor='portfolio']") ||
        !!el.closest(".portfolio-card");
      const isBtn =
        !!el.closest("button") ||
        !!el.closest("a") ||
        !!el.closest("[data-cursor='button']");
      setIsHoveringPortfolio(isPortfolio);
      setIsHoveringButton(isBtn && !isPortfolio);
    };

    const hide = () => setIsVisible(false);

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mousemove", checkHover, { passive: true });
    window.addEventListener("mouseleave", hide);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousemove", checkHover);
      window.removeEventListener("mouseleave", hide);
    };
  }, [rawX, rawY, isVisible]);

  return (
    <>
      {/* Outer ring */}
      <motion.div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:flex items-center justify-center"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isHoveringPortfolio ? 3.2 : isHoveringButton ? 0.6 : 1,
        }}
        transition={{ scale: { type: "spring", stiffness: 200, damping: 20 } }}
      >
        <div
          className="w-10 h-10 rounded-full border border-primary/60 flex items-center justify-center"
          style={{
            backdropFilter: isHoveringPortfolio ? "invert(1)" : "none",
            background: isHoveringPortfolio
              ? "rgba(130, 84, 244, 0.15)"
              : "transparent",
          }}
        >
          {isHoveringPortfolio && (
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="text-[5px] font-bold text-primary-light tracking-widest uppercase whitespace-nowrap"
            >
              View ✦
            </motion.span>
          )}
        </div>
      </motion.div>

      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isHoveringPortfolio ? 0 : isHoveringButton ? 1.5 : 1,
          backgroundColor: isHoveringButton ? "#8254f4" : "#8254f4",
        }}
      >
        <div
          className="w-2 h-2 rounded-full"
          style={{ background: "#8254f4" }}
        />
      </motion.div>
    </>
  );
}
