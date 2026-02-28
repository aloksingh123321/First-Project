"use client";

import { useEffect, useRef } from "react";

// 6-dot spring cursor tail — AWWWARDS-level effect.
// Each trailing dot follows the mouse with increasing delay,
// creating a luminous snake-like tail. Touch devices get nothing.

const TRAIL_COUNT = 6;

export default function CursorTrail() {
    const dotsRef = useRef<HTMLDivElement[]>([]);
    const positions = useRef<{ x: number; y: number }[]>(
        Array.from({ length: TRAIL_COUNT }, () => ({ x: -100, y: -100 }))
    );
    const mouse = useRef({ x: -100, y: -100 });
    const rafId = useRef<number>(0);

    useEffect(() => {
        // Only on pointer-fine (mouse) devices — no touch
        if (!window.matchMedia("(pointer: fine)").matches) return;

        const onMove = (e: MouseEvent) => {
            mouse.current = { x: e.clientX, y: e.clientY };
        };
        window.addEventListener("mousemove", onMove, { passive: true });

        const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

        const animate = () => {
            // First dot chases mouse tightly, each subsequent dot chases the prev
            for (let i = 0; i < TRAIL_COUNT; i++) {
                const target = i === 0 ? mouse.current : positions.current[i - 1];
                // Speed decreases for farther dots → tail effect
                const speed = 0.28 - i * 0.03;
                positions.current[i].x = lerp(positions.current[i].x, target.x, speed);
                positions.current[i].y = lerp(positions.current[i].y, target.y, speed);

                const el = dotsRef.current[i];
                if (el) {
                    el.style.transform = `translate(${positions.current[i].x}px, ${positions.current[i].y}px)`;
                }
            }
            rafId.current = requestAnimationFrame(animate);
        };

        rafId.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener("mousemove", onMove);
            cancelAnimationFrame(rafId.current);
        };
    }, []);

    return (
        <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[9998] hidden md:block">
            {Array.from({ length: TRAIL_COUNT }).map((_, i) => {
                // Each dot: smaller + more transparent the farther it is
                const size = Math.max(3, 8 - i);
                const opacity = 0.55 - i * 0.07;
                return (
                    <div
                        key={i}
                        ref={(el) => { if (el) dotsRef.current[i] = el; }}
                        style={{
                            position: "fixed",
                            top: 0,
                            left: 0,
                            width: size,
                            height: size,
                            borderRadius: "50%",
                            background: "#8254f4",
                            opacity,
                            willChange: "transform",
                            // Offset so center of dot is at cursor, not top-left
                            marginLeft: -size / 2,
                            marginTop: -size / 2,
                            mixBlendMode: "screen",
                        }}
                    />
                );
            })}
        </div>
    );
}
