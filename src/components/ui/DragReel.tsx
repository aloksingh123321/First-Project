"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { PORTFOLIO_ITEMS } from "@/lib/constants";
import { ImageIcon } from "lucide-react";

// Horizontal momentum drag reel — physics-based, rubber-band edges.
// Users can fling the reel left/right like an agency portfolio strip.
// Used by Huge, Work & Co, Superlist for premium portfolio UX.

export default function DragReel() {
    const constraintsRef = useRef<HTMLDivElement>(null);

    // Show all items (or repeat for visual density)
    const reelItems = [...PORTFOLIO_ITEMS, ...PORTFOLIO_ITEMS];

    return (
        <div className="mt-16 overflow-hidden cursor-grab active:cursor-grabbing select-none">
            <div ref={constraintsRef} className="overflow-hidden">
                <motion.div
                    drag="x"
                    dragConstraints={constraintsRef}
                    dragElastic={0.12}
                    dragMomentum={true}
                    className="flex gap-5 w-max pb-4"
                    style={{ willChange: "transform" }}
                    whileTap={{ cursor: "grabbing" }}
                >
                    {reelItems.map((item, i) => (
                        <ReelCard key={i} item={item} index={i} />
                    ))}
                </motion.div>
            </div>

            {/* Drag hint */}
            <p className="text-xs text-text-muted/40 text-center mt-3 tracking-widest uppercase font-medium select-none">
                ← drag to explore →
            </p>
        </div>
    );
}

function ReelCard({
    item,
    index,
}: {
    item: (typeof PORTFOLIO_ITEMS)[0];
    index: number;
}) {
    return (
        <motion.div
            className="relative shrink-0 w-[280px] h-[200px] rounded-xl overflow-hidden glass-card group"
            whileHover={{ scale: 1.03, borderColor: "rgba(130,84,244,0.4)" }}
            transition={{ type: "spring", stiffness: 280, damping: 22 }}
        >
            {/* Placeholder visual — gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-surface-card to-surface-dark flex items-center justify-center">
                <ImageIcon className="text-primary-light opacity-15 w-8 h-8" />
            </div>

            {/* Hover overlay info */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-t from-surface-dark/90 via-transparent to-transparent flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
                <span className="text-[10px] font-semibold text-primary-light uppercase tracking-widest mb-1 bg-primary/20 border border-primary/30 rounded-full px-2 py-0.5 w-fit">
                    {item.category}
                </span>
                <h3 className="text-text-primary text-sm font-display font-bold leading-tight">
                    {item.title}
                </h3>
            </motion.div>

            {/* Subtle index number watermark */}
            <span className="absolute top-3 right-4 text-[10px] font-mono text-primary/20 font-bold select-none">
                {String((index % PORTFOLIO_ITEMS.length) + 1).padStart(2, "0")}
            </span>
        </motion.div>
    );
}
