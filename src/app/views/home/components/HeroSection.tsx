"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

const fadeInFromBottom: Variants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const routeItems = [
  { emphasis: "Trazando", detail: "el camino, continúa" },
  { emphasis: "Midiendo", detail: "tus avances y termina" },
  { emphasis: "Logrando", detail: "resultados" },
];

export default function HeroSection() {
  return (
    <motion.section
      variants={fadeInFromBottom}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="flex flex-col lg:flex-row items-center justify-between min-h-screen bg-amarillo px-6 lg:px-20 py-10 relative"
    >
      {/* Contenedor de IMÁGENES: El secreto está en el tamaño del contenedor y el apilamiento (Z-index) */}
      <div className="relative flex justify-center w-full lg:w-1/2 mb-6 lg:mb-0 z-10 p-4">
        {" "}
        {/* IMAGEN PRINCIPAL (Ney Martínez) - AL FRENTE */}
        <Image
          src="/assets/img/portada2.png"
          alt="Ney Martínez, experta en Ruta al Logro"
          width={600}
          height={600}
          quality={100}
          className="relative object-contain max-w-[90%] sm:max-w-[70%] md:max-w-[60%] lg:max-w-full z-10"
          priority
        />
      </div>

      {/* Contenido de Texto (Se mantiene el estilo oscuro como en las referencias) */}
      <div className="relative w-full lg:w-1/2 text-center lg:text-left space-y-4 z-10 lg:pl-10 ">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-rojo">
          RUTA AL LOGRO
        </h1>

        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800">
          De la claridad a la acción
        </h2>

        <p className="text-lg md:text-xl font-medium text-gray-700 mt-6">
          El logro de tus metas empieza:
        </p>

        <ul className="space-y-2 text-left mt-4">
          {routeItems.map((item, index) => (
            <li
              key={index}
              className="flex items-center text-lg md:text-xl text-gray-800"
            >
              <strong className="mr-2 font-bold">{item.emphasis}</strong>
              <span>{item.detail}</span>
            </li>
          ))}
        </ul>

        <p className="mt-6 text-lg md:text-xl font-bold text-gray-800">
          Descubre cómo puedo ayudarte a alcanzar tus metas y comunicar con
          autenticidad
        </p>
      </div>
    </motion.section>
  );
}
