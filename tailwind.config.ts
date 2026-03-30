import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        float: "float 8s ease-in-out infinite",
        "pulse-soft": "pulse-soft 4s ease-in-out infinite",
      },
      backgroundImage: {
        hero: "radial-gradient(circle at top, rgba(255, 132, 0, 0.18), transparent 34%), linear-gradient(135deg, rgba(6, 16, 34, 1) 0%, rgba(11, 29, 52, 1) 45%, rgba(9, 13, 22, 1) 100%)",
        mesh: "linear-gradient(135deg, rgba(252, 244, 232, 0.96), rgba(255, 255, 255, 0.88))",
      },
      colors: {
        ember: "#f97316",
        ink: "#07111f",
        steel: "#1b2a41",
        sand: "#f6efe4",
        mist: "#d8e1ea",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
      },
      boxShadow: {
        glow: "0 24px 60px rgba(7, 17, 31, 0.18)",
        panel: "0 20px 50px rgba(7, 17, 31, 0.12)",
      },
    },
  },
  plugins: [],
};
export default config;
