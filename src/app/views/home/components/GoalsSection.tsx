"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { IoArrowRedoOutline } from "react-icons/io5";

const slideInFromRight: Variants = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const goalsItems = [
  {
    title: "1. Visión",
    text: "Tu visión describe cómo te ves en un futuro, guía tus acciones y te aporta un propósito a largo plazo.",
  },
  {
    title: "2. Propósito",
    text: "¿Para qué estás en la vida? ¿Para qué haces lo que haces?",
  },
  {
    title: "3. Metas",
    text: "Eso que quieres lograr y te da claridad para avanzar.",
  },
  {
    title: "4. Hábitos & Acciones",
    text: "Lo que tienes que hacer cada día para lograr las metas.",
  },
  { title: "5. Medición", text: "La forma de medir tus avances." },
];

export default function GoalsSection() {
  return (
    <motion.section
      variants={slideInFromRight}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="flex flex-col md:flex-col lg:flex-row items-center min-h-screen gap-10 bg-amarillo lg:px-20 py-10"
    >
      {/* Contenedor Imagen y Botón */}
      <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-end gap-6">
        <Image
          src="/assets/img/ruta.png"
          alt="Ruta al logro"
          width={600}
          height={600}
          className="rounded-xl object-cover w-[90%] md:w-[80%] lg:w-[85%] h-auto mt-5 md:mt-0"
        />

        {/* Flecha y Botón */}
        <div className="flex flex-row items-center">
          <Image
            src="/assets/img/flechan.png"
            alt="Flecha"
            width={60}
            height={60}
            className="w-14 h-14"
          />
          <Link
            href="/views/comienza-aqui"
            className="flex items-center justify-center bg-rojo text-amarillo font-semibold px-6 py-2 rounded-md shadow-lg hover:bg-amarillo hover:text-verdes transition w-full max-w-xs"
            passHref
          >
            Quiero Comenzar{" "}
            <span className="ml-2">
              <IoArrowRedoOutline />
            </span>
          </Link>
        </div>
      </div>

      {/* Cuadros de Información */}
      <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 text-center">
        {goalsItems.map((item, index) => (
          <div
            key={index}
            className="bg-white p-4 border border-gray-300 rounded-md shadow-md"
          >
            <h2 className="text-lg font-semibold text-rojo">{item.title}</h2>
            <p className="text-verdes text-sm md:text-base">{item.text}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
