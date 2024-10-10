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
        "container-primary": "#251F3E",
        "container-secondary": "#393254",
        "container-tertiary": "#4B4463",
        accent: "#00C6AE",
      },
      minWidth: {
        'carousel': '130%'
      },
      keyframes: {
        float: {
          "0%": { transform: "translateY(50vh)"},
          "100%": { transform: "translateY(0)"},
        },
        carousel: {
          "0%": {transform: "translateX(0)"},
          "100%": {transform: "translateX(-50%)"}
        }
      },
      animation: {
        float: "float 3s",
        carousel: "carousel 30s linear infinite"
      },
      scale: {
        '200': '2'
      }
    },
  },
  plugins: [],
}
export default config
