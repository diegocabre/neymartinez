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
        verdes: "#57bc90",
        rojo: "#e62b1e",
        amarillo: "#f7ef6a",
        fondo: "#015249",
        azul: "#77c9d4",
        letras: "#e5d8f6",
      },
      backgroundImage: {
        "gradient-custom": "linear-gradient(135deg, #015249 50%, #000000 100%)",
        "gradient-custom2":
          "linear-gradient(135deg, #e5d8f6 50%, #000000 100%)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
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
  plugins: [],
};

export default config;
