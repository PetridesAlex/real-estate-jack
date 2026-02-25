/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#1f2937",
        accent: "#b08a57",
        secondary: "#1f5a4a",
        muted: "#6b7280",
        page: "#f4f1ea"
      },
      fontFamily: {
        body: ["var(--font-body)"],
        display: ["var(--font-display)"]
      },
      boxShadow: {
        card: "0 12px 30px rgba(17, 24, 39, 0.10)"
      }
    }
  },
  plugins: []
};
