"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { IoArrowRedoOutline } from "react-icons/io5";

const fadeInFromBottom: Variants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function PodcastSection() {
  return (
    <motion.section
      variants={fadeInFromBottom}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="flex flex-col md:flex-row items-center md:items-center justify-center md:justify-between min-h-screen bg-verdes px-6 lg:px-20 py-10"
    >
      {/* Imagen */}
      <div className="w-full md:w-[60%] lg:w-[50%] flex flex-col items-center md:items-start">
        <Image
          src="/assets/img/Ney006.png"
          alt="ney podcast"
          width={500}
          height={500}
          className="rounded-xl object-cover max-w-[90%] h-auto shadow-lg mt-10 mb-10"
        />
      </div>

      {/* Texto y botón */}
      <div className="w-full md:w-[40%] lg:w-[50%] flex flex-col items-center md:items-start">
        <article className="text-center md:text-left space-y-4">
          <p className="text-lg text-amarillo">
            Un Podcast creado para compartir herramientas, ejercicios y
            prácticas que te permiten desarrollar y mejorar tus habilidades de
            oratoria.
          </p>
          <p className="text-lg text-amarillo">
            Enfocado en crear mensajes VIP, que aportan VALOR para tu audiencia,
            los INSPIRAN a pasar a la acción y tienen PROPÓSITO.
          </p>
          <p className="text-lg text-amarillo">
            {
              'Todos tenemos algo para decir y hablar en público es "Para todo público".'
            }
          </p>
        </article>

        {/* Botón */}
        <div className="flex flex-row items-center md:items-start mt-4">
          <Image
            src="/assets/img/flechan.png"
            alt="Flecha"
            width={60}
            height={60}
            className="w-14 h-14"
          />
          <Link
            href="https://podfollow.com/1625944692"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-rojo text-amarillo font-semibold px-6 py-2 rounded-md shadow-lg hover:bg-amarillo hover:text-verdes transition w-full max-w-xs mt-2"
            passHref
          >
            Escuchar{" "}
            <span className="ml-2">
              <IoArrowRedoOutline />
            </span>
          </Link>
        </div>
      </div>
    </motion.section>
  );
}
