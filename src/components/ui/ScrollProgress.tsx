"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-[2px] z-[9998] origin-left"
            style={{
                scaleX,
                background: "linear-gradient(90deg, #8254f4, #9d75f7, #8254f4)",
                backgroundSize: "200% 100%",
            }}
        />
    );
}
