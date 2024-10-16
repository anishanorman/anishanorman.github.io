import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg": "#211b39",
        "container": "#1D1734",
        "container-primary": "#251F3E",
        "container-secondary": "#393254",
        "container-tertiary": "#4B4463",
        accent: "#00C6AE",
      },
      keyframes: {
        float: {
          "0%": { transform: "translateY(50vh)"},
          "100%": { transform: "translateY(0)"},
        },
      },
      animation: {
        float: "float 3s",
      },
    },
  },
  plugins: [],
}
export default config
