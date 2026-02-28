"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface CountUpProps {
    end: number;
    suffix?: string;
    prefix?: string;
    duration?: number;
    className?: string;
}

export default function CountUp({
    end,
    suffix = "",
    prefix = "",
    duration = 2000,
    className = "",
}: CountUpProps) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref as React.RefObject<Element>, { once: true, margin: "-5%" });
    const startedRef = useRef(false);

    useEffect(() => {
        if (!isInView || startedRef.current) return;
        startedRef.current = true;

        const startTime = performance.now();
        const step = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1);
            // Ease out cubic
            const ease = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(ease * end));
            if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    }, [isInView, end, duration]);

    return (
        <span ref={ref} className={className}>
            {prefix}{count}{suffix}
        </span>
    );
}
