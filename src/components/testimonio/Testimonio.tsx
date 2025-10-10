"use client";
import { motion } from "framer-motion";
import Image from "next/image"; // Importar Image de Next.js
import React from "react";

// --- Datos de los Testimonios con photoUrl ---

const labOratoriaTestimonials = [
  {
    name: "Sofía Lacoste",
    quote:
      "Laboratoria me ayudó a desarrollar herramientas para el día a día y preparar discursos importantes en mi trabajo. Identifiqué puntos flojos que desconocía y los pulí para mejorar mis presentaciones. Trabajar en la oratoria nos acerca a lograr nuestros objetivos.",
    photoUrl: "/assets/img/testimonio/sofia_lacoste.jpeg", // REEMPLAZA ESTA RUTA
  },
  {
    name: "Juan Alarcón",
    quote:
      "Participar en el curso de oratoria fue una experiencia enriquecedora. Es dinámico, práctico y te da claves exactas para hablar con claridad, confianza y elocuencia. Ahora puedo enfrentar una audiencia con verdadero impacto... ¡y sin morir en el intento!",
    photoUrl: "/assets/img/testimonio/juan_alarcon.jpeg", // REEMPLAZA ESTA RUTA
  },
  {
    name: "Lali Varela",
    quote:
      "LABORATORIA es un espacio experimental que brinda recursos para transmitir lo que tenemos para decir y nos desafía a revelar el orador que ya somos. Ney Martínez, con su experiencia, nos acompaña a atravesar miedos y descubrir nuestra identidad al hablar en público. Este entrenamiento es el gran impulso para que ningún mensaje con valor quede sin compartir.",
    photoUrl: "/assets/img/testimonio/lali_varela.jpeg", // REEMPLAZA ESTA RUTA
  },
];

const mentorshipTestimonials = [
  {
    name: "Yanina Benitez",
    quote:
      "La mentoría con Ney me dio herramientas valiosas para focalizar, ordenar ideas, expresar lo que tenía en mente y confiar más en mí y en mi proceso. Me voy con el corazón más liviano y muchas ganas de seguir creciendo. ¡Gracias, Ney!",
    photoUrl: "/assets/img/testimonio/yanina_benitez.jpeg", // REEMPLAZA ESTA RUTA
  },
  {
    name: "Lisandro Depetris",
    quote:
      "¡Excelente mentoría! El gran valor es que es 100% personalizada y adaptada a cada necesidad. Me dio mucha seguridad y pude aplicar los conocimientos de inmediato en mis presentaciones laborales. Gracias, Ney. Completamente sobresaliente.",
    photoUrl: "/assets/img/testimonio/lisandro_depetris.jpeg", // REEMPLAZA ESTA RUTA
  },
];

// --- Subcomponente de Tarjeta de Testimonio ---

interface TestimonialCardProps {
  name: string;
  quote: string;
  bgColor: string;
  photoUrl: string; // Nueva propiedad para la URL de la foto
}

// Simple animación de aparición para las tarjetas
const cardVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  quote,
  bgColor,
  photoUrl, // Desestructuramos la nueva propiedad
}) => (
  <motion.div
    className={`relative p-8 pt-12 rounded-lg shadow-lg ${bgColor} text-gray-700 h-full flex flex-col items-center text-center`}
    variants={cardVariants}
  >
    {/* Contenedor de la Foto (Círculo Amarillo) */}
    <div className="absolute top-[-30px] w-16 h-16 bg-amarillo rounded-full shadow-md overflow-hidden border-4 border-amarillo">
      {/* Componente Image de Next.js para la foto */}
      <Image
        src={photoUrl}
        alt={`Foto de ${name}`}
        width={64} // 16 * 4 = 64px, coincidiendo con el w-16 h-16
        height={64}
        className="object-cover w-full h-full"
      />
    </div>

    <p className="mt-4 text-base md:text-lg italic flex-grow">{`"${quote}"`}</p>

    <p className="mt-4 text-lg font-bold text-verdes uppercase">{name}</p>
  </motion.div>
);

// --- Componente Principal ---

const Testimonio = () => {
  return (
    <div className="flex flex-col w-full bg-white">
      {/* 1. SECCIÓN LAB-ORATORIA */}
      <section className="px-6 py-12 md:px-12 lg:px-20 bg-white">
        {/* Título de la sección 1 */}
        <h2 className="text-xl md:text-2xl font-bold text-verdes mb-8">
          Testimonios:
          <br />
          Esto dicen quienes participaron en{" "}
          <span className="text-rojo">LAB-ORATORIA</span>
        </h2>

        {/* Contenedor de las tarjetas de Lab-Oratoria */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {labOratoriaTestimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              quote={testimonial.quote}
              bgColor="bg-neutral-100"
              photoUrl={testimonial.photoUrl} // Pasamos la URL de la foto
            />
          ))}
        </div>
      </section>

      {/* Separador y título de la sección de Mentoría */}
      <div className="flex flex-col items-center justify-center py-8">
        <h2 className="text-xl md:text-2xl font-bold text-verdes mb-8">
          Esto dicen quienes han realizado{" "}
          <span className="text-rojo">mentorías personalizadas</span>
        </h2>
        {/* Flecha hacia abajo */}
        <div className="w-0 h-0 border-l-8 border-r-8 border-t-16 border-l-transparent border-r-transparent border-t-rojo mb-12"></div>
      </div>

      {/* 2. SECCIÓN MENTORÍA PERSONALIZADA */}
      <section className="px-6 py-12 md:px-12 lg:px-20 bg-gray-800">
        {/* Contenedor de las tarjetas de Mentoría */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {mentorshipTestimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              quote={testimonial.quote}
              bgColor="bg-white"
              photoUrl={testimonial.photoUrl} // Pasamos la URL de la foto
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Testimonio;
