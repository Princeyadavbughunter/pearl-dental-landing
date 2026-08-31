import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Lifted from pearldentalchennai.in — warm cream page, burnt-orange
        // brand, dark-slate for the hero and footer bands.
        brand: {
          DEFAULT: "#C45B00",
          light: "#F07820",
          amber: "#FFAA33",
          soft: "#FFF1E6",
        },
        cream: "#FFFBF7",
        dark: "#1A100A",
        body: "#5C4A3A",
        // The clinic's logo artwork is gold — kept for marks on dark bands.
        gold: "#D9B65A",
      },
      borderRadius: {
        sm: "8px",
        md: "16px",
        lg: "24px",
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "Plus Jakarta Sans", "system-ui", "sans-serif"],
        display: ["var(--font-outfit)", "Outfit", "system-ui", "sans-serif"],
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.35s ease-out forwards",
        marquee: "marquee 32s linear infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
