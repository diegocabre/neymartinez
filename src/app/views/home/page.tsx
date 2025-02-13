"use client";  // Necesario para usar Framer Motion

import Image from "next/image";
import Link from "next/link";
import { IoArrowRedoOutline } from "react-icons/io5";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <>
      {/* Sección Principal */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-col lg:flex-row items-center justify-between min-h-screen bg-amarillo px-6 lg:px-20 py-10"
      >
        <div className="flex justify-center w-full lg:w-1/2 mb-6 lg:mb-0">
          <Image
            src="/assets/img/formulario.jpg"
            alt="Portada de Ney Martínez"
            width={800}
            height={800}
            className="rounded-full object-cover shadow-lg max-w-[90%] sm:max-w-[70%] md:max-w-[60%] lg:max-w-full"
            priority
          />
        </div>
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
          <h1 className="italic text-2xl md:text-4xl lg:text-5xl font-bold text-rojo">
            Ruta al logro:
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-rojo">
            de la claridad a la acción
          </h2>
          <h4 className="text-lg md:text-xl font-medium text-rojo">
            El logro de tus metas empieza:
          </h4>
          <ul className="space-y-3 text-left">
            {["Trazando el camino, continúa", "Midiendo tus avances y termina", "Logrando resultados"].map((text, index) => (
              <li key={index} className="flex items-center text-lg md:text-xl text-rojo">
                <strong className="mr-2">{text.split(" ")[0]}</strong>
                <span>{text.split(" ").slice(1).join(" ")}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-lg md:text-xl font-bold text-rojo px-6 py-3">
            Descubre cómo puedo ayudarte a alcanzar tus metas
          </p>
        </div>
      </motion.section>

      {/* Sección Quién Soy */}
      <motion.section
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-col lg:flex-row items-center justify-between min-h-screen bg-verdes px-6 lg:px-20 text-letras py-10"
      >
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
          <h2 className="text-2xl md:text-3xl italic font-light text-amarillo">Hola soy</h2>
          <h1 className="text-4xl md:text-6xl text-amarillo italic">NEY MARTÍNEZ</h1>
          <div className="bg-amarillo text-verdes rounded-lg p-6 shadow-lg">
            <p className="text-lg md:text-xl">
              Estoy aquí para acompañarte a trazar tu ruta al logro y hacer que las cosas sucedan.
              <br /><br />
              Hablarte de mí es fácil si te digo que soy como un Paquete Microsoft Office.
            </p>
          </div>
          <div className="flex flex-row items-center md:items-start mt-4">
            <Image
              src="/assets/img/flechan.png"
              alt="Flecha"
              width={60}
              height={60}
              className="w-14 h-14"
              priority
            />
            <Link
              href="https://link.chtbl.com/Oratoria_VIP"
              className="flex items-center justify-center bg-rojo text-amarillo font-semibold px-6 py-2 rounded-md shadow-lg hover:bg-amarillo hover:text-verdes transition w-full max-w-xs mt-2"
              passHref
            >
              Seguir Leyendo <span className="ml-2"><IoArrowRedoOutline /></span>
            </Link>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <Image
            src="/assets/img/Neyrojo1.jpg"
            alt="Foto de Ney Martínez"
            width={400}
            height={400}
            className="rounded-xl object-cover max-w-[90%] h-auto shadow-lg mt-10"
            priority
          />
        </div>
      </motion.section>

      {/* Sección Ruta */}
      <motion.section
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row items-center min-h-screen gap-10 bg-letras lg:px-20"
      >
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-end gap-10">
          <Image
            src="/assets/img/ruta.png"
            alt="Ruta al logro"
            width={400}
            height={400}
            className="rounded-xl object-cover max-w-[90%] h-auto shadow-lg mt-10"
            priority
          />
          <div className="flex flex-row items-center">
            <Image src="/assets/img/flechan.png" alt="Flecha" width={60} height={60} className="w-14 h-14" priority />
            <Link
              href="/views/comienza-aqui"
              className="flex items-center justify-center bg-rojo text-amarillo font-semibold px-6 py-2 rounded-md shadow-lg hover:bg-amarillo hover:text-verdes transition w-full max-w-xs"
              passHref
            >
              Quiero Comenzar <span className="ml-2"><IoArrowRedoOutline /></span>
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-2 mr-5">
          <Image
            src="/assets/img/ney2.jpg"
            alt="Ney Martínez"
            width={400}
            height={400}
            className="rounded-xl object-cover max-w-[90%] h-auto shadow-lg"
            priority
          />
        </div>
      </motion.section>

      {/* seccion del podcast */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row items-center md:items-center justify-center md:justify-between min-h-screen bg-amarillo px-6 lg:px-20 py-10"
      >

        {/* Imagen al lado izquierdo en md+ */}
        <div className="w-full md:w-[60%] lg:w-[50%] flex flex-col items-center md:items-start">
          <Image
            src="/assets/img/Ney006.png"
            alt="ney podcast"
            width={500} // Aumenta el tamaño para md+
            height={500}
            className="rounded-xl object-cover max-w-[90%] h-auto shadow-lg mt-10 mb-10"
            priority
          />
        </div>

        {/* Texto y botón al lado derecho */}
        <div className="w-full md:w-[40%] lg:w-[50%] flex flex-col items-center md:items-start">
          <article className="text-center md:text-left">
            <p className="text-lg text-verdes">
              Un Podcast creado para compartir herramientas, ejercicios y prácticas que te permiten desarrollar y mejorar tus habilidades de oratoria.
            </p>
            <p className="text-lg text-verdes">
              Enfocado en crear mensajes VIP, que aportan VALOR para tu audiencia, los INSPIRAN a pasar a la acción y tienen PROPÓSITO.
            </p>
            <br />
            <p className="text-lg text-verdes">
              {'Todos tenemos algo para decir y hablar en público es "Para todo público".'}
            </p>
          </article>

          {/* Botón alineado correctamente debajo del texto */}
          <div className="flex flex-row items-center md:items-start mt-4">
            <Image
              src="/assets/img/flechan.png"
              alt="Flecha"
              width={60}
              height={60}
              className="w-14 h-14"
              priority
            />
            <Link
              href="https://link.chtbl.com/Oratoria_VIP"
              className="flex items-center justify-center bg-rojo text-amarillo font-semibold px-6 py-2 rounded-md shadow-lg hover:bg-amarillo hover:text-verdes transition w-full max-w-xs mt-2"
              passHref
            >
              Escuchar <span className="ml-2"><IoArrowRedoOutline /></span>
            </Link>
          </div>
        </div>
      </motion.section>
    </>
  );
}