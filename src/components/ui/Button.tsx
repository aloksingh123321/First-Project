"use client";

import { useRef, useState, useCallback } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import Link from "next/link";
import { type ReactNode, type CSSProperties } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  className?: string;
  fullWidth?: boolean;
  onClick?: () => void;
  style?: CSSProperties;
}

const baseStyles =
  "inline-flex items-center justify-center font-medium transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface relative overflow-hidden ripple-btn";

const variants = {
  primary:
    "bg-primary text-white rounded-full hover:bg-primary-dark hover:shadow-glow active:scale-[0.98]",
  ghost:
    "bg-transparent text-text-primary border border-white/10 rounded-full hover:bg-white/[0.08] hover:border-white/15 hover:backdrop-blur-xl hover:text-primary active:scale-[0.98]",
  outline:
    "bg-transparent text-primary border-2 border-primary rounded-full hover:bg-primary hover:text-white active:scale-[0.98]",
};

const sizes = {
  sm: "px-5 py-2 text-sm",
  md: "px-7 py-3 text-base",
  lg: "px-9 py-4 text-lg",
};

// Shared ripple logic
function createRipple(e: React.MouseEvent<HTMLElement>, el: HTMLElement) {
  const rect = el.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height) * 1.5;
  const x = e.clientX - rect.left - size / 2;
  const y = e.clientY - rect.top - size / 2;
  const ripple = document.createElement("span");
  ripple.classList.add("ripple-wave");
  ripple.style.cssText = `width:${size}px;height:${size}px;left:${x}px;top:${y}px;`;
  el.appendChild(ripple);
  ripple.addEventListener("animationend", () => ripple.remove());
}

function MagneticButton({
  children, className, style, disabled, type, onClick,
}: {
  children: ReactNode; className: string; style?: CSSProperties;
  disabled?: boolean; type?: "button" | "submit"; onClick?: () => void;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 15 });
  const springY = useSpring(y, { stiffness: 200, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * 0.35);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.35);
  };

  const handleMouseLeave = () => { x.set(0); y.set(0); setIsHovered(false); };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (ref.current) createRipple(e, ref.current);
    onClick?.();
  };

  return (
    <motion.button
      ref={ref} type={type} className={className}
      style={{ ...style, x: springX, y: springY }}
      disabled={disabled}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      animate={{ scale: isHovered ? 1.04 : 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.button>
  );
}

function MagneticLink({
  children, className, href, style,
}: {
  children: ReactNode; className: string; href: string; style?: CSSProperties;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 15 });
  const springY = useSpring(y, { stiffness: 200, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * 0.35);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.35);
  };

  const handleMouseLeave = () => { x.set(0); y.set(0); setIsHovered(false); };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (ref.current) createRipple(e, ref.current);
  };

  return (
    <motion.a
      ref={ref} href={href} className={className}
      style={{ ...style, x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      animate={{ scale: isHovered ? 1.04 : 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.a>
  );
}

export default function Button({
  children, variant = "primary", size = "md", href, type = "button",
  disabled = false, className = "", fullWidth = false, onClick, style,
}: ButtonProps) {
  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${fullWidth ? "w-full" : ""
    } ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`;

  if (href) {
    return <MagneticLink href={href} className={classes} style={style}>{children}</MagneticLink>;
  }
  return (
    <MagneticButton type={type} className={classes} disabled={disabled} onClick={onClick} style={style}>
      {children}
    </MagneticButton>
  );
}
