/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        claude: {
          bg: "var(--claude-bg)",
          surface: "var(--claude-surface)",
          "surface-alt": "var(--claude-surface-alt)",
          accent: "var(--claude-accent)",
          "accent-hover": "var(--claude-accent-hover)",
          "accent-light": "var(--claude-accent-light)",
          dark: "var(--claude-dark)",
          "dark-surface": "var(--claude-dark-surface)",
          text: "var(--claude-text)",
          "text-secondary": "var(--claude-text-secondary)",
          "text-muted": "var(--claude-text-muted)",
          border: "var(--claude-border)",
          "border-hover": "var(--claude-border-hover)",
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
        "soft-dark": "0 1px 3px 0 rgb(0 0 0 / 0.2), 0 1px 2px -1px rgb(0 0 0 / 0.2)",
        "card-dark": "0 4px 6px -1px rgb(0 0 0 / 0.3), 0 2px 4px -2px rgb(0 0 0 / 0.3)",
        "elevated-dark": "0 10px 25px -5px rgb(0 0 0 / 0.4), 0 8px 10px -6px rgb(0 0 0 / 0.3)",
      },
    },
  },
  plugins: [],
};
