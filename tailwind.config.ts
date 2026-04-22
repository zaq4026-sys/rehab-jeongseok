import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#FAFAF7",
        white: "#FFFFFF",
        charcoal: "#1A1A1A",
        muted: "#5A5A5A",
        brand: {
          DEFAULT: "#1C9A99",
          dark: "#166E6D",
          light: "#E8F4F4",
        },
        line: "#E8E8E5",
      },
      fontFamily: {
        sans: ["var(--font-pretendard)", "system-ui", "sans-serif"],
        serif: ["var(--font-noto-serif-kr)", "serif"],
        en: ["var(--font-inter)", "sans-serif"],
      },
      spacing: {
        section: "120px",
        "section-lg": "160px",
      },
      borderRadius: {
        none: "0px",
        sm: "2px",
        md: "4px",
      },
      boxShadow: {
        soft: "0 24px 80px rgba(26, 26, 26, 0.06)",
      },
      transitionTimingFunction: {
        calm: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
