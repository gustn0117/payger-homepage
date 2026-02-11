/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5CA8D2",
        "primary-light": "#7BC4E8",
        "primary-dark": "#4A9BC7",
        "primary-deeper": "#3d8ab0",
        accent: "#06d6a0",
        dark: "#ffffff",
        "dark-card": "#ffffff",
        "dark-border": "#e2e8f0",
        "surface-blue": "#eef5fa",
        "text-main": "#1e293b",
        "text-muted": "#64748b",
      },
      fontFamily: {
        sans: ["'Noto Sans KR'", "sans-serif"],
        display: ["'Syne'", "sans-serif"],
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(40px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.9)", opacity: "0.5" },
          "50%": { transform: "scale(1.15)", opacity: "0" },
          "100%": { transform: "scale(0.9)", opacity: "0" },
        },
        shimmer: {
          "0%": { left: "-100%" },
          "50%": { left: "100%" },
          "100%": { left: "100%" },
        },
      },
      animation: {
        fadeUp: "fadeUp 1s ease forwards",
        fadeIn: "fadeIn 1s ease forwards",
        float: "float 8s ease-in-out infinite",
        "pulse-ring": "pulse-ring 2s ease-in-out infinite",
        shimmer: "shimmer 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
