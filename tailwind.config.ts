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
        verdes: "#33453C",
        rojo: "#FE6020",
        amarillo: "#ECE8DF",
        fondo: "#0F2613",
        letras: "#CCAC8E",
      },
      backgroundImage: {
        "gradient-custom": "linear-gradient(135deg, #0F2613 50%, #33453C 100%)",
        "gradient-custom2":
          "linear-gradient(135deg, #ECE8DF 35%, #33453C 100%)",
        "gradient-custom3":
          "linear-gradient(135deg, #33453C 50%, #33453C 100%)",
      },
      fontFamily: {
        magent: ["Magent", "sans-serif"],
        hagia: ["Hagia Sugnatur", "cursive"],
      },
      keyframes: {
        moveCircle: {
          "0%": { opacity: "0.3", transform: "translateX(100px)" },
          "100%": { opacity: "0.8", transform: "translateX(0)" },
        },
      },
      animation: {
        moveCircle: "moveCircle 1.5s ease-out forwards",
      },
    },
  },
  plugins: [
    require("daisyui"),
  ],
};

export default config;
