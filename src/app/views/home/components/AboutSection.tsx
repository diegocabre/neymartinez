"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { IoArrowRedoOutline } from "react-icons/io5";

const slideInFromLeft: Variants = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

export default function AboutSection() {
  return (
    <motion.section
      variants={slideInFromLeft}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="flex flex-col lg:flex-row items-center justify-between min-h-screen bg-verdes px-6 lg:px-20 text-letras py-10"
    >
      <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
        <h2 className="text-2xl md:text-3xl italic font-light text-amarillo">
          Hola soy
        </h2>
        <h1 className="text-4xl md:text-6xl text-amarillo italic">
          NEY MARTÍNEZ
        </h1>
        <div className="bg-verdes text-amarillo p-6 ">
          <p className="text-lg md:text-xl">
            Estoy aquí para acompañarte a trazar tu ruta al logro y hacer que
            las cosas sucedan.
            <br />
            <br />
            Hablarte de mí es fácil si te digo que soy como un Paquete Microsoft
            Office.
          </p>
        </div>
        <div className="flex flex-row items-center md:items-start mt-4">
          <Image
            src="/assets/img/flechan.png"
            alt="Flecha"
            width={60}
            height={60}
            className="w-14 h-14"
          />
          <Link
            href="/views/about"
            className="flex items-center justify-center bg-rojo text-amarillo font-semibold px-6 py-2 rounded-md shadow-lg hover:bg-amarillo hover:text-verdes transition w-full max-w-xs mt-2"
            passHref
          >
            Seguir Leyendo{" "}
            <span className="ml-2">
              <IoArrowRedoOutline />
            </span>
          </Link>
        </div>
      </div>

      {/* Imagen más grande en `md` y `lg` */}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
        <Image
          src="/assets/img/Ney0011.jpg"
          alt="Foto de Ney Martínez"
          width={500}
          height={500}
          className="rounded-xl object-cover w-[90%] md:w-[75%] lg:w-[85%] h-auto shadow-lg mt-10"
        />
      </div>
    </motion.section>
  );
}
