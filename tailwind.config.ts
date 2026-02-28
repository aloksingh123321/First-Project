import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#8254f4",
          light: "#9d75f7",
          dark: "#6535e8",
          glow: "rgba(130, 84, 244, 0.12)",
        },
        surface: {
          DEFAULT: "#0a0a0c",
          dark: "#060608",
          card: "#111116",
          elevated: "#18181f",
        },
        text: {
          primary: "#eae8f0",
          muted: "#8a8698",
        },
        silver: {
          DEFAULT: "#6b6778",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-syne)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 4px 30px rgba(130, 84, 244, 0.15)",
        "glow-lg": "0 8px 50px rgba(130, 84, 244, 0.25)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
