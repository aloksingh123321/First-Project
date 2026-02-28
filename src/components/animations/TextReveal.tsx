"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface TextRevealProps {
    text: string;
    className?: string;
    as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
    delay?: number;
    highlightWords?: string[];
}

export default function TextReveal({
    text,
    className = "",
    as: Tag = "h2",
    delay = 0,
    highlightWords = [],
}: TextRevealProps) {
    const ref = useRef<HTMLElement | null>(null);
    const isInView = useInView(ref as React.RefObject<Element>, {
        once: true,
        margin: "-10%",
    });

    const words = text.split(" ");

    return (
        <Tag
            ref={ref as React.RefObject<HTMLHeadingElement>}
            className={`overflow-visible ${className}`}
            style={{ overflow: "visible" }}
            aria-label={text}
        >
            {words.map((word, i) => {
                const isHighlighted = highlightWords.includes(word);
                return (
                    <span
                        key={i}
                        className="inline-block overflow-hidden mr-[0.3em] last:mr-0"
                    >
                        <motion.span
                            className={`inline-block ${isHighlighted ? "text-gradient" : ""}`}
                            initial={{ y: "110%", opacity: 0, rotate: 2 }}
                            animate={
                                isInView
                                    ? { y: "0%", opacity: 1, rotate: 0 }
                                    : { y: "110%", opacity: 0, rotate: 2 }
                            }
                            transition={{
                                duration: 0.7,
                                delay: delay + i * 0.07,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                        >
                            {word}
                        </motion.span>
                    </span>
                );
            })}
        </Tag>
    );
}
