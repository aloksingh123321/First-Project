"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { GALLERY_ITEMS } from "@/lib/constants";

// Horizontal momentum drag reel — physics-based, rubber-band edges.
// Users can fling the reel left/right like an agency portfolio strip.

export default function DragReel() {
    const constraintsRef = useRef<HTMLDivElement>(null);

    // Repeat for visual density
    const reelItems = [...GALLERY_ITEMS, ...GALLERY_ITEMS];

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
    item: (typeof GALLERY_ITEMS)[0];
    index: number;
}) {
    return (
        <motion.div
            className="relative shrink-0 w-[280px] h-[200px] rounded-xl overflow-hidden glass-card group"
            whileHover={{ scale: 1.03, borderColor: "rgba(130,84,244,0.4)" }}
            transition={{ type: "spring", stiffness: 280, damping: 22 }}
        >
            {/* Media */}
            {item.type === "video" ? (
                <video
                    src={item.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                />
            ) : (
                <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="280px"
                />
            )}

            {/* Hover overlay info */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-t from-surface-dark/90 via-transparent to-transparent flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
                <h3 className="text-text-primary text-sm font-display font-bold leading-tight">
                    {item.title}
                </h3>
            </motion.div>

            {/* Subtle index number watermark */}
            <span className="absolute top-3 right-4 text-[10px] font-mono text-primary/20 font-bold select-none">
                {String((index % GALLERY_ITEMS.length) + 1).padStart(2, "0")}
            </span>
        </motion.div>
    );
}
