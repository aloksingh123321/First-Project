"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/lib/constants";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Sliding indicator: update on hover or active link
  const updateIndicator = (el: HTMLAnchorElement | null) => {
    if (!el || !navRef.current) return;
    const navRect = navRef.current.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();
    setIndicatorStyle({
      left: elRect.left - navRect.left,
      width: elRect.width,
    });
  };

  useEffect(() => {
    // Set indicator to active link on mount / route change
    const activeIdx = NAV_LINKS.findIndex((l) => l.href === pathname);
    if (activeIdx >= 0) {
      updateIndicator(linkRefs.current[activeIdx]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "glass-nav" : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image
              src="/assets/logo2.png"
              alt="Media Maestro Co"
              width={160}
              height={28}
              priority
              className="brightness-110"
            />
          </Link>

          {/* Desktop Nav */}
          <div
            ref={navRef}
            className="hidden md:flex items-center gap-1 relative"
            onMouseLeave={() => {
              // Reset to active link on mouse leave
              const activeIdx = NAV_LINKS.findIndex((l) => l.href === pathname);
              if (activeIdx >= 0) updateIndicator(linkRefs.current[activeIdx]);
            }}
          >
            {/* Sliding background indicator */}
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 h-8 rounded-full bg-white/[0.06] pointer-events-none"
              animate={{ left: indicatorStyle.left, width: indicatorStyle.width }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />

            {NAV_LINKS.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                ref={(el) => { linkRefs.current[i] = el; }}
                onMouseEnter={() => updateIndicator(linkRefs.current[i])}
                className={`nav-link-draw glass-capsule text-sm transition-all duration-300 relative z-10 ${pathname === link.href
                    ? "text-text-primary"
                    : "text-text-muted hover:text-text-primary"
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <Button
              href="/contact"
              size="sm"
              className="ml-4"
              style={{ boxShadow: "0 0 12px rgba(130, 84, 244, 0.5)" }}
            >
              Get A Quote
            </Button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-text-primary p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="md:hidden overflow-hidden glass-nav"
          >
            <div className="px-6 py-8 flex flex-col gap-1">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="glass-capsule nav-link-draw text-text-muted hover:text-text-primary transition-all py-3 text-lg block"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <Button href="/contact" fullWidth className="mt-4">
                Get A Quote
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
