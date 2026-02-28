"use client";

import { useEffect, useRef, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%";

interface ScrambleTextProps {
    text: string;
    className?: string;
    /** Delay before scramble starts in ms */
    delay?: number;
    /** Duration of scramble animation in ms */
    duration?: number;
    /** If true, re-scrambles on hover */
    triggerOnHover?: boolean;
}

export default function ScrambleText({
    text,
    className = "",
    delay = 0,
    duration = 800,
    triggerOnHover = false,
}: ScrambleTextProps) {
    const [displayed, setDisplayed] = useState(text);
    const frameRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const startRef = useRef<number | null>(null);

    const scramble = () => {
        if (frameRef.current) clearTimeout(frameRef.current);
        const start = performance.now();
        startRef.current = start;

        const animate = () => {
            const now = performance.now();
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);

            // Reveal letters from left to right as progress increases
            const revealedCount = Math.floor(progress * text.length);
            const scrambled = text
                .split("")
                .map((char, i) => {
                    if (char === " ") return " ";
                    if (i < revealedCount) return char;
                    return CHARS[Math.floor(Math.random() * CHARS.length)];
                })
                .join("");

            setDisplayed(scrambled);

            if (progress < 1) {
                frameRef.current = setTimeout(animate, 30);
            } else {
                setDisplayed(text);
            }
        };

        frameRef.current = setTimeout(animate, delay);
    };

    useEffect(() => {
        // Initial scramble on mount
        scramble();
        return () => {
            if (frameRef.current) clearTimeout(frameRef.current);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <span
            className={`font-mono tracking-wide ${className}`}
            onMouseEnter={triggerOnHover ? scramble : undefined}
            aria-label={text}
        >
            {displayed}
        </span>
    );
}
