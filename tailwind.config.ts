import type { Config } from "tailwindcss";

const config: Config = {
  // 1. Simplificación de rutas de contenido (más limpio y legible)
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Mantenemos TUS nombres y TUS valores hexadecimales:
        verdes: "#33453C",
        rojo: "#FE6020",
        amarillo: "#ECE8DF",
        fondo: "#0F2613",
        letras: "#CCAC8E",
      },
      backgroundImage: {
        "gradient-dark-primary":
          "linear-gradient(135deg, #0F2613 50%, #33453C 100%)",
        "gradient-light-primary":
          "linear-gradient(135deg, #ECE8DF 35%, #33453C 100%)",
        "gradient-primary-solid":
          "linear-gradient(135deg, #33453C 50%, #33453C 100%)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        heading: ["var(--font-poppins)", "sans-serif"],
        // Mantenemos fuentes locales
        magent: ["Magent", "sans-serif"],
        hagia: ["Hagia Sugnatur", "cursive"],
      },
    },
  },

  plugins: [],
};

export default config;
