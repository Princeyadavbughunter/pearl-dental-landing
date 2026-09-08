import type { Config } from "tailwindcss";

/**
 * Palette sampled directly from the supplied brand artwork (logo.jpg) and the
 * clinic's own reception photograph:
 *   #006C78  deep teal    — the "DENTAL" wordmark and the hands in the mark
 *   #00A0AC  mid teal     — the connecting rule
 *   #00A8B4  bright teal  — the "PEARL" wordmark and the tooth
 *   #183C48  petrol       — the fluted reception panelling in hero.png
 */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          50: "#F2FAFB",
          100: "#E2F4F6",
          200: "#BFE7EC",
          300: "#8AD4DD",
          400: "#3FBCC8",
          500: "#00A8B4", // logo — "PEARL"
          600: "#008E9C",
          700: "#006C78", // logo — "DENTAL". AA on white; the interactive teal.
          800: "#0B4A54",
          900: "#123039", // derived from the clinic's petrol panelling
        },
        ink: {
          DEFAULT: "#0E1A1D",
          soft: "#3D4F53",
          mute: "#63777C",
          faint: "#93A3A7",
        },
        paper: {
          DEFAULT: "#FFFFFF",
          soft: "#F7FAFA",
          warm: "#FAF9F6",
        },
        line: {
          DEFAULT: "#E3EAEB",
          soft: "#EFF3F4",
          teal: "#CDE6E9",
        },
        whatsapp: "#25D366",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
        display: ["var(--font-newsreader)", "Georgia", "serif"],
      },
      borderRadius: {
        xs: "3px",
        sm: "6px",
        md: "10px",
        lg: "16px",
      },
      boxShadow: {
        // Cool, shallow and used sparingly — the layout carries the hierarchy.
        xs: "0 1px 2px rgba(14,26,29,0.05)",
        sm: "0 2px 6px rgba(14,26,29,0.06)",
        md: "0 8px 24px -10px rgba(14,26,29,0.14)",
        lg: "0 24px 60px -28px rgba(14,26,29,0.28)",
      },
      maxWidth: {
        shell: "1160px",
        prose: "68ch",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.3s cubic-bezier(0.2,0.7,0.3,1) forwards",
      },
    },
  },
  plugins: [],
} satisfies Config;
