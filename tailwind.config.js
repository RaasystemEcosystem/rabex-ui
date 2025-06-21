/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // needed for Vite
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        yellow: {
          400: "#facc15",
          500: "#eab308",
        },
        gray: {
          800: "#1f2937",
          900: "#111827",
        },
        background: "#121212",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
