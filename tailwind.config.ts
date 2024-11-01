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
        "container-1": "#251F3E",
        "container-2": "#393254",
        "container-3": "#4B4463",
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
