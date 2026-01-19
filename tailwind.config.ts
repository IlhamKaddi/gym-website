import { Playfair } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ["var(--font-orbitron)", "sans-serif"],
        gravitas: ["var(--font-gravitas)", "serif"],
        Playfair:["var(--font-playfair)","serif"]
      },
    },
  },
  plugins: [],
};

export default config;
