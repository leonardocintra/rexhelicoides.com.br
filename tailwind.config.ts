import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        luqinha: "#14213b",
      },
      fontFamily: {
        leagueSpartan: ["League Spartan"],
        bebasNeue: ["Bebas Neue"],
        blackOpsOne: ["Black Ops One"],
      },
    },
  },
  plugins: [],
};
export default config;
