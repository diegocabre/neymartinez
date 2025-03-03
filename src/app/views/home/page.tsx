"use client";  // Necesario para usar Framer Motion

import Image from "next/image";
import Link from "next/link";
import { IoArrowRedoOutline } from "react-icons/io5";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-col lg:flex-row items-center justify-between min-h-screen bg-amarillo px-6 lg:px-20 py-10 relative bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/img/ruta.jpg')" }}
      >
        {/* Fondo semi-transparente para mejor visibilidad del contenido */}
        <div className="absolute inset-0 bg-black/60 z-0"></div>

        {/* Contenedor principal con relative para estar sobre el fondo */}
        <div className="relative flex justify-center w-full lg:w-1/2 mb-6 lg:mb-0 z-10">
          <Image
            src="/assets/img/portada.png"
            alt="Portada de Ney Martínez"
            width={800}
            height={800}
            className="rounded-full object-cover shadow-lg max-w-[90%] sm:max-w-[70%] md:max-w-[60%] lg:max-w-full"
            priority
          />
        </div>

        <div className="relative w-full lg:w-1/2 text-center lg:text-left space-y-6 z-10">
          <h1 className="italic text-2xl md:text-4xl lg:text-5xl font-bold text-amarillo">
            Ruta al logro:
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-amarillo">
            de la claridad a la acción
          </h2>
          <h4 className="text-lg md:text-xl font-medium text-amarillo">
            El logro de tus metas empieza:
          </h4>
          <ul className="space-y-3 text-left">
            {["Trazando el camino, continúa", "Midiendo tus avances y termina", "Logrando resultados"].map((text, index) => (
              <li key={index} className="flex items-center text-lg md:text-xl text-amarillo">
                <strong className="mr-2">{text.split(" ")[0]}</strong>
                <span>{text.split(" ").slice(1).join(" ")}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-lg md:text-xl font-bold text-amarillo px-6 py-3">
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
          <div className="bg-verdes text-amarillo p-6 ">
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
              href="/views/about"
              className="flex items-center justify-center bg-rojo text-amarillo font-semibold px-6 py-2 rounded-md shadow-lg hover:bg-amarillo hover:text-verdes transition w-full max-w-xs mt-2"
              passHref
            >
              Seguir Leyendo <span className="ml-2"><IoArrowRedoOutline /></span>
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
            priority
          />
        </div>
      </motion.section>


      <motion.section
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-col lg:flex-row items-center min-h-screen gap-10 bg-amarillo lg:px-20 py-10"
      >
        {/* Contenedor Imagen - Arriba en `md` y `sm`, al lado en `lg` */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-end gap-6">
          <Image
            src="/assets/img/ruta.png"
            alt="Ruta al logro"
            width={600}
            height={600}
            className="rounded-xl object-cover w-[90%] md:w-[80%] lg:w-[85%] h-auto mt-5 md:mt-0"
            priority
          />

          {/* Flecha y Botón */}
          <div className="flex flex-row items-center">
            <Image
              src="/assets/img/flechan.png"
              alt="Flecha"
              width={60}
              height={60}
              className="w-14 h-14"
              priority
            />
            <Link
              href="/views/comienza-aqui"
              className="flex items-center justify-center bg-rojo text-amarillo font-semibold px-6 py-2 rounded-md shadow-lg hover:bg-amarillo hover:text-verdes transition w-full max-w-xs"
              passHref
            >
              Quiero Comenzar <span className="ml-2"><IoArrowRedoOutline /></span>
            </Link>
          </div>
        </div>

        {/* Cuadros de Información */}
        <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 text-center">
          {[
            { title: "1. Visión", text: "Tu visión describe cómo te ves en un futuro, guía tus acciones y te aporta un propósito a largo plazo." },
            { title: "2. Propósito", text: "¿Para qué estás en la vida? ¿Para qué haces lo que haces?" },
            { title: "3. Metas", text: "Eso que quieres lograr y te da claridad para avanzar." },
            { title: "4. Hábitos & Acciones", text: "Lo que tienes que hacer cada día para lograr las metas." },
            { title: "5. Medición", text: "La forma de medir tus avances." }
          ].map((item, index) => (
            <div key={index} className="bg-white p-4 border border-gray-300 rounded-md shadow-md">
              <h2 className="text-lg font-semibold text-rojo">{item.title}</h2>
              <p className="text-verdes text-sm md:text-base">{item.text}</p>
            </div>
          ))}
        </div>
      </motion.section>


      {/* <motion.section
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-col lg:flex-row items-center min-h-screen gap-10 bg-amarillo px-6 lg:px-20 py-10"
      >
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            src="/assets/img/ruta.png"
            alt="Ruta al logro"
            width={900}
            height={600}
            className="object-cover w-[90%] md:w-[80%] lg:w-[85%] h-auto"
            priority
          />
        </div>
        <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 text-center">
          {[
            { title: "1. Visión", text: "Tu visión describe cómo te ves en un futuro, guía tus acciones y te aporta un propósito a largo plazo." },
            { title: "2. Propósito", text: "¿Para qué estás en la vida? ¿Para qué haces lo que haces?" },
            { title: "3. Metas", text: "Eso que quieres lograr y te da claridad para avanzar." },
            { title: "4. Hábitos & Acciones", text: "Lo que tienes que hacer cada día para lograr las metas." },
            { title: "5. Medición", text: "La forma de medir tus avances." }
          ].map((item, index) => (
            <div key={index} className="bg-white p-4 border border-gray-300 rounded-md shadow-md">
              <h2 className="text-lg font-semibold text-rojo">{item.title}</h2>
              <p className="text-verdes text-sm md:text-base">{item.text}</p>
            </div>
          ))}
        </div>
      </motion.section> */}


      {/* seccion del podcast */}
      < motion.section
        initial={{ opacity: 0, y: 50 }
        }
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row items-center md:items-center justify-center md:justify-between min-h-screen bg-verdes px-6 lg:px-20 py-10"
      >

        {/* Imagen al lado izquierdo en md+ */}
        < div className="w-full md:w-[60%] lg:w-[50%] flex flex-col items-center md:items-start" >
          <Image
            src="/assets/img/Ney006.png"
            alt="ney podcast"
            width={500} // Aumenta el tamaño para md+
            height={500}
            className="rounded-xl object-cover max-w-[90%] h-auto shadow-lg mt-10 mb-10"
            priority
          />
        </div >

        {/* Texto y botón al lado derecho */}
        < div className="w-full md:w-[40%] lg:w-[50%] flex flex-col items-center md:items-start" >
          <article className="text-center md:text-left">
            <p className="text-lg text-amarillo">
              Un Podcast creado para compartir herramientas, ejercicios y prácticas que te permiten desarrollar y mejorar tus habilidades de oratoria.
            </p>
            <p className="text-lg text-amarillo">
              Enfocado en crear mensajes VIP, que aportan VALOR para tu audiencia, los INSPIRAN a pasar a la acción y tienen PROPÓSITO.
            </p>
            <br />
            <p className="text-lg text-amarillo">
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
        </div >
      </motion.section >
    </>
  );
}