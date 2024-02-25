import { Love_Light } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'container-primary': '#302B46',
        'container-secondary': '#3E3855',
        'container-tertiary': '#4B4463',
        'accent': '#00C6AE',
      }
    }
  },
  plugins: [],
};
export default config;
