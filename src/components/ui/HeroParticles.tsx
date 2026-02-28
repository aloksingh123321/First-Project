"use client";

// Floating ambient particles — pure CSS, no canvas, no library.
// Subtle brand-purple dots drifting like dust in a shaft of light.

const PARTICLES = [
    { size: 3, x: 12, y: 25, dur: 18, delay: 0, opacity: 0.18 },
    { size: 2, x: 78, y: 15, dur: 22, delay: -4, opacity: 0.12 },
    { size: 4, x: 55, y: 70, dur: 26, delay: -8, opacity: 0.15 },
    { size: 2, x: 30, y: 55, dur: 20, delay: -2, opacity: 0.10 },
    { size: 3, x: 88, y: 40, dur: 24, delay: -6, opacity: 0.14 },
    { size: 2, x: 20, y: 80, dur: 30, delay: -10, opacity: 0.09 },
    { size: 3, x: 65, y: 30, dur: 19, delay: -14, opacity: 0.13 },
    { size: 2, x: 42, y: 10, dur: 28, delay: -3, opacity: 0.11 },
    { size: 4, x: 72, y: 85, dur: 23, delay: -7, opacity: 0.16 },
    { size: 2, x: 5, y: 60, dur: 21, delay: -11, opacity: 0.10 },
];

export default function HeroParticles() {
    return (
        <div
            aria-hidden="true"
            className="absolute inset-0 z-[3] pointer-events-none overflow-hidden"
        >
            {PARTICLES.map((p, i) => (
                <span
                    key={i}
                    className="hero-particle"
                    style={{
                        width: p.size,
                        height: p.size,
                        left: `${p.x}%`,
                        top: `${p.y}%`,
                        opacity: p.opacity,
                        animationDuration: `${p.dur}s`,
                        animationDelay: `${p.delay}s`,
                    }}
                />
            ))}
        </div>
    );
}
