/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        claude: {
          bg: "#FAF9F7",
          surface: "#FFFFFF",
          "surface-alt": "#F5F3EF",
          accent: "#D97757",
          "accent-hover": "#C4654A",
          "accent-light": "#D97757/10",
          dark: "#1C1917",
          "dark-surface": "#292524",
          text: "#1C1917",
          "text-secondary": "#78716C",
          "text-muted": "#A8A29E",
          border: "#E7E5E4",
          "border-hover": "#D6D3D1",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        display: [
          "Inter",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
      },
      boxShadow: {
        soft: "0 1px 3px 0 rgb(0 0 0 / 0.04), 0 1px 2px -1px rgb(0 0 0 / 0.04)",
        card: "0 4px 6px -1px rgb(0 0 0 / 0.05), 0 2px 4px -2px rgb(0 0 0 / 0.05)",
        elevated: "0 10px 25px -5px rgb(0 0 0 / 0.06), 0 8px 10px -6px rgb(0 0 0 / 0.04)",
        glow: "0 0 40px -10px rgb(217 119 87 / 0.15)",
      },
    },
  },
  plugins: [],
};
