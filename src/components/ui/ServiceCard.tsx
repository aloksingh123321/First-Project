"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { type LucideIcon, ChevronDown } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  shortDescription: string;
  fullDescription: string;
}

export default function ServiceCard({
  icon: Icon,
  title,
  shortDescription,
  fullDescription,
}: ServiceCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="glass-card rounded-2xl p-6 cursor-pointer select-none"
      onClick={() => setIsOpen(!isOpen)}
      whileHover={{
        borderColor: "rgba(130,84,244,0.3)",
        boxShadow: "0 8px 30px rgba(130,84,244,0.1), 0 4px 24px rgba(0,0,0,0.2)",
      }}
      animate={{
        borderColor: isOpen
          ? "rgba(130,84,244,0.4)"
          : "rgba(255,255,255,0.06)",
      }}
      transition={{ duration: 0.3 }}
    >
      {/* Icon + Title row */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-4">
          {/* Icon with heartbeat glow pulse at rest */}
          <motion.div
            className="icon-pulse flex-shrink-0 w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center"
            animate={{
              background: isOpen ? "rgba(130,84,244,0.2)" : "rgba(130,84,244,0.1)",
            }}
          >
            <Icon className="w-5 h-5 text-primary-light" />
          </motion.div>
          <div>
            <h3 className="font-display font-bold text-text-primary text-base leading-tight mb-1">
              {title}
            </h3>
            <p className="text-text-muted text-sm leading-relaxed">
              {shortDescription}
            </p>
          </div>
        </div>

        {/* Chevron toggle */}
        <motion.div
          className="flex-shrink-0 mt-1 text-primary-light"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </div>

      {/* Expandable description */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="details"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="mt-4 pt-4 border-t border-white/[0.06]">
              <p className="text-text-muted text-sm leading-relaxed">
                {fullDescription}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
