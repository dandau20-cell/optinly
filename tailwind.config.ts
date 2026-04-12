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
        sage: {
          50: "#f0f7f2",
          100: "#d4e8d9",
          500: "#2D6A4F",
          600: "#245A42",
          700: "#1B4A35",
        },
        amber: {
          300: "#F4A261",
          400: "#E8914F",
        },
        background: "#FAFAF8",
        surface: "#FFFFFF",
        foreground: "#1A1A18",
        muted: "#6B7280",
        border: "#E5E7EB",
      },
      fontFamily: {
        display: ["var(--font-dm-serif-display)"],
        body: ["var(--font-dm-sans)"],
      },
    },
  },
  plugins: [],
};
export default config;
