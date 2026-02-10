/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3b82f6",
        "primary-light": "#60a5fa",
        accent: "#06d6a0",
        dark: "#0a0a0f",
        "dark-card": "#12121a",
        "dark-border": "#1e1e2e",
        "text-main": "#e8e8ec",
        "text-muted": "#8888a0",
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
      },
      animation: {
        fadeUp: "fadeUp 1s ease forwards",
        fadeIn: "fadeIn 1s ease forwards",
        float: "float 8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
