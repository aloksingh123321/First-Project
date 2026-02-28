"use client";

// Animated SVG diagonal thread grid — subtle circuit-board / creative sketchpad.
// Slow stroke-dashoffset animation gives it an architectural, hand-drawn feeling.
// Pure SVG + CSS, zero dependencies.

export default function AnimatedGrid({ className = "" }: { className?: string }) {
    const SIZE = 48;  // grid cell size
    const COLS = 30;
    const ROWS = 20;
    const W = SIZE * COLS;
    const H = SIZE * ROWS;

    return (
        <div
            aria-hidden="true"
            className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
        >
            <svg
                width="100%"
                height="100%"
                viewBox={`0 0 ${W} ${H}`}
                preserveAspectRatio="xMidYMid slice"
                xmlns="http://www.w3.org/2000/svg"
                className="animated-grid-svg"
            >
                <defs>
                    <pattern
                        id="thread-grid"
                        width={SIZE}
                        height={SIZE}
                        patternUnits="userSpaceOnUse"
                    >
                        {/* Vertical line */}
                        <line x1={SIZE / 2} y1="0" x2={SIZE / 2} y2={SIZE}
                            stroke="rgba(130,84,244,0.08)" strokeWidth="0.5" />
                        {/* Horizontal line */}
                        <line x1="0" y1={SIZE / 2} x2={SIZE} y2={SIZE / 2}
                            stroke="rgba(130,84,244,0.08)" strokeWidth="0.5" />
                        {/* Diagonal accent at intersections */}
                        <line x1="0" y1={SIZE} x2={SIZE} y2="0"
                            stroke="rgba(130,84,244,0.04)" strokeWidth="0.5"
                            strokeDasharray="4 8"
                            className="grid-diag-line"
                        />
                    </pattern>
                    {/* radial fade mask — invisible at edges */}
                    <radialGradient id="grid-fade" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="white" stopOpacity="1" />
                        <stop offset="70%" stopColor="white" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="white" stopOpacity="0" />
                    </radialGradient>
                    <mask id="grid-mask">
                        <rect width={W} height={H} fill="url(#grid-fade)" />
                    </mask>
                </defs>

                <rect
                    width={W}
                    height={H}
                    fill="url(#thread-grid)"
                    mask="url(#grid-mask)"
                />
            </svg>
        </div>
    );
}
