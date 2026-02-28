"use client";

import { useRef, useCallback } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";

// Theatrical ambient spotlight — a large radial glow that follows the mouse.
// Invisible at rest. Emerges as you move across the section.
// Used by high-end agency studio sites worldwide.

export default function AmbientSpotlight({
    className = "",
}: {
    className?: string;
}) {
    const containerRef = useRef<HTMLDivElement>(null);

    const rawX = useMotionValue(50);
    const rawY = useMotionValue(50);

    // Spring lag makes movement weighty, not instant
    const springX = useSpring(rawX, { stiffness: 55, damping: 22 });
    const springY = useSpring(rawY, { stiffness: 55, damping: 22 });

    // Live reactive template string for the radial-gradient background
    const bgGlow = useMotionTemplate`radial-gradient(600px circle at ${springX}% ${springY}%, rgba(130,84,244,0.09) 0%, rgba(130,84,244,0.04) 40%, transparent 70%)`;
    const bgGlow2 = useMotionTemplate`radial-gradient(180px circle at ${springX}% ${springY}%, rgba(157,117,247,0.07) 0%, transparent 65%)`;

    const handleMouseMove = useCallback(
        (e: React.MouseEvent<HTMLDivElement>) => {
            if (!containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            rawX.set(((e.clientX - rect.left) / rect.width) * 100);
            rawY.set(((e.clientY - rect.top) / rect.height) * 100);
        },
        [rawX, rawY]
    );

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className={`absolute inset-0 overflow-hidden ${className}`}
            aria-hidden="true"
        >
            {/* Main large glow */}
            <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{ background: bgGlow }}
            />
            {/* Sharper inner glow for punch */}
            <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{ background: bgGlow2 }}
            />
        </div>
    );
}
