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
        obsidian: {
          950: "#040406",
          900: "#08090C",
          800: "#0E1016",
          700: "#161923",
          600: "#1F2433",
        },
        gold: {
          50: "#FBF8EB",
          100: "#F5ECCD",
          200: "#EAD69A",
          300: "#DFBD64",
          400: "#D4AF37",
          500: "#C59B27",
          600: "#A37B1B",
          700: "#7F5D15",
          800: "#5D4311",
          900: "#3E2C0C",
        },
        amber: {
          400: "#FBBF24",
          500: "#F59E0B",
          600: "#D97706",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-space)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #F5ECCD 0%, #D4AF37 50%, #F59E0B 100%)",
        "surface-glow": "radial-gradient(circle at 50% 0%, rgba(212, 175, 55, 0.14), transparent 70%)",
      },
      boxShadow: {
        "gold-sm": "0 0 18px -4px rgba(212, 175, 55, 0.28)",
        "gold-md": "0 0 32px -6px rgba(212, 175, 55, 0.35)",
        "glass": "0 8px 32px 0 rgba(0, 0, 0, 0.55)",
      },
    },
  },
  plugins: [],
};

export default config;
