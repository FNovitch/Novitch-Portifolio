/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#09090b",
        panel: "#121214",
        panelSoft: "#18181b",
        line: "rgba(244,244,245,0.1)",
        cream: "#f4f4f5",
        muted: "#a1a1aa",
        accent: "#94a3b8",
        accentSoft: "#cbd5e1",
      },
      fontFamily: {
        display: ["Fraunces", "Georgia", "serif"],
        body: ["Plus Jakarta Sans", "Inter", "sans-serif"],
      },
      boxShadow: {
        glow: "0 28px 90px rgba(148, 163, 184, 0.12)",
      },
      backgroundImage: {
        grid:
          "linear-gradient(rgba(244,244,245,0.032) 1px, transparent 1px), linear-gradient(90deg, rgba(244,244,245,0.032) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
