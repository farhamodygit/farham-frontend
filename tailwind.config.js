/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#10B981",
        "primary-dark": "#059669",
        background: "#FFFFFF",
        section: "#F8FAFC",
        "text-main": "#0F172A",
        "text-secondary": "#64748B",
        border: "#E2E8F0",
      },
      boxShadow: {
        glow: "0 20px 50px rgba(16, 185, 129, 0.15)",
      },
    },
  },
  plugins: [],
}