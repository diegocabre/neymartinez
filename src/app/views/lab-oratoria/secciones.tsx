// src/components/sections/LabOratoriaContent.tsx (Nombre sugerido)

import Image from "next/image";
import { IoMicOutline } from "react-icons/io5";

// Datos para las secciones de problemas (Sexta, Séptima y Octava)
const problemSections = [
  {
    title: "Más de una vez hablé y me quedé con:",
    problems: [
      "Lo que no pude decir",
      "Lo que no debí decir",
      "Lo que no dije",
      "Lo que dije de modo incorrecto",
    ],
    imageSrc: "/assets/img/conferencia.jpg",
    imageAlt: "Conferencia de oratoria",
    reverseLayout: false,
  },
  {
    title: "Si cuando tienes una presentación:",
    problems: [
      "Te asustas más de lo que deberías",
      "Criticas tu forma de hablar",
      "Evades cualquier oportunidad de exposición",
    ],
    imageSrc: "/assets/img/grabando.jpg",
    imageAlt: "Oradora grabando un discurso",
    reverseLayout: true, // Invierte el orden de la imagen y el texto en desktop
  },
  {
    title: "Tienes redes sociales y una marca personal:",
    problems: [
      "No te atreves a grabar un video y publicarlo",
      "Te cuesta subir historias expresándote",
    ],
    imageSrc: "/assets/img/conferencia.jpg",
    imageAlt: "Conferencia de oratoria",
    reverseLayout: false,
  },
];

export default function NamePage() {
  const animationClass =
    "animate__animated animate__fadeInDown animate__delay-1s";

  return (
    <>
      {/* Primera Sección: Título Oratoria VIP (Único H1) */}
      <section className={`flex pt-10 mb-10 ml-5 ${animationClass}`}>
        <div className="flex items-center justify-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-letras">
            Oratoria <br /> <span className="text-rojo">VIP</span>
          </h1>
        </div>
      </section>

      {/* Segunda Sección: LAB_Orator con Imagen */}
      <section
        className={`flex flex-col pt-10 mb-10 lg:mb-40 px-5 lg:px-20 ${animationClass}`}
      >
        <div className="flex flex-col lg:flex-row items-center justify-center mb-10">
          <div className="flex items-center justify-center space-x-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-letras flex items-center">
              LAB_Orator
              <span className="text-rojo -ml-1 -mr-1 inline-flex">
                <IoMicOutline />
              </span>
              a
            </h2>
          </div>
          <div className="flex items-center justify-center mt-6 lg:mt-0 lg:ml-10">
            <Image
              className="rounded-lg" // Eliminamos la animación repetitiva de la imagen
              src="/assets/img/oratoria3.jpg"
              alt="Una persona presentando en público"
              width={500}
              height={500}
            />
          </div>
        </div>
      </section>

      {/* Tercera Sección: El Laboratorio (3 Imágenes) */}
      <section
        className={`flex flex-col pt-10 mb-10 lg:mb-40 px-5 lg:px-20 ${animationClass}`}
      >
        <div className="flex flex-col items-center justify-center mb-10 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-letras">
            El <span className="text-rojo">Laboratorio</span> para experimentar
            y desarrollar tu <span className="text-rojo">Oratoria</span>
          </h2>
        </div>

        {/* Contenedor de Imágenes */}
        <div className="flex flex-col sm:flex-row sm:space-x-4 items-center justify-center">
          {/* Usamos un mapeo simple para las imágenes */}
          {[
            {
              src: "/assets/img/oratoria1.jpg",
              alt: "Sesión de práctica de oratoria",
              w: 400,
              h: 400,
            },
            {
              src: "/assets/img/oratoria2.jpg",
              alt: "Exposición en público",
              w: 500,
              h: 500,
            },
            {
              src: "/assets/img/oratoria.png",
              alt: "Participante en una conferencia",
              w: 400,
              h: 400,
            },
          ].map((img, index) => (
            <div
              key={index}
              className="flex items-center justify-center mb-4 sm:mb-0"
            >
              <Image
                className="rounded-lg"
                src={img.src}
                alt={img.alt}
                width={img.w}
                height={img.h}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Cuarta Sección: Si sabes... (Aprendizaje por Práctica) */}
      <section
        className={`flex flex-col lg:flex-row items-center pt-10 mb-10 lg:mb-40 px-5 lg:px-20 ${animationClass}`}
      >
        {/* Texto y Lista */}
        <div className="flex flex-col lg:w-1/2 items-start text-left lg:mr-10">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-letras mb-6">
            Si sabes:
          </h2>
          <ul className="text-xl sm:text-2xl lg:text-3xl font-medium text-amarillo mb-6">
            <li>Montar Bicicleta</li>
            <li>Nadar</li>
            <li>Conducir</li>
            <li>Bailar</li>
          </ul>
          <h3 className="text-xl text-letras lg:text-2xl font-semibold">
            ¿Cómo lo aprendiste?
          </h3>
        </div>

        {/* 4 Imágenes distribuidas 2x2 */}
        <div className="grid grid-cols-2 gap-6 lg:w-1/2 mt-10 lg:mt-0">
          {[
            { src: "/assets/img/bicicleta.jpg", alt: "Montar bicicleta" },
            { src: "/assets/img/nadar.jpg", alt: "Nadar en una piscina" },
            { src: "/assets/img/conducir.jpg", alt: "Conducir un vehículo" },
            { src: "/assets/img/bailar.jpg", alt: "Bailar en una fiesta" },
          ].map((img, index) => (
            <Image
              key={index}
              className="rounded-lg"
              src={img.src}
              alt={img.alt}
              width={500}
              height={500}
            />
          ))}
        </div>
      </section>

      {/* Quinta Sección: ¡Practicando! (Mensaje principal) */}
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-amarillo mt-6 lg:mt-0 lg:hidden text-center">
        ¡Practicando!
      </h2>

      <section
        className={`flex flex-col lg:flex-row items-center justify-center pt-10 mb-10 lg:mb-40 px-5 lg:px-20 ${animationClass}`}
      >
        <div className="flex justify-center lg:w-1/2 lg:mr-10 mb-10 lg:mb-0">
          <Image
            className="rounded-lg"
            src="/assets/img/Ney008.jpg"
            alt="Oradora en acción"
            width={700}
            height={700}
          />
        </div>

        <div className="flex flex-col items-center lg:items-start lg:w-1/2">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-amarillo mt-6 lg:mt-0 hidden lg:block">
            ¡Practicando!
          </h2>
          <p className="mt-6 text-xl sm:text-2xl lg:text-3xl font-medium text-letras text-center lg:text-left">
            La oratoria se aprende igual, practicando. <br />
            <br />
            Solo necesitas un espacio confiable para atreverte, un laboratorio
            para experimentar!!
          </p>
        </div>
      </section>

      {/* Sexta, Séptima y Octava Sección: REFACTORIZADAS con Mapeo */}
      {problemSections.map((section, index) => (
        <section
          key={index}
          className={`flex flex-col pt-10 mb-10 lg:mb-40 px-5 lg:px-20 ${animationClass}`}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-letras mb-10 text-center">
            {section.title}
          </h2>

          <div
            className={`flex flex-col items-center w-full lg:space-x-10 ${
              section.reverseLayout ? "lg:flex-row-reverse" : "lg:flex-row"
            }`}
          >
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <ul className="list-disc list-inside text-xl sm:text-2xl lg:text-3xl font-medium text-amarillo mb-6 space-y-4">
                {section.problems.map((problem, i) => (
                  <li key={i}>{problem}</li>
                ))}
              </ul>
              <h3 className="text-xl sm:text-2xl font-semibold text-letras">
                Entonces LAB_Oratoria es para ti
              </h3>
            </div>

            <div className="lg:w-1/2 flex justify-center">
              <Image
                className="rounded-lg object-cover"
                src={section.imageSrc}
                alt={section.imageAlt}
                width={700}
                height={700}
              />
            </div>
          </div>
        </section>
      ))}

      {/* Novena Sección: Llamada a la Acción Final */}
      <section
        className={`flex flex-col pt-10 mb-10 lg:mb-40 px-5 lg:px-20 ${animationClass}`}
      >
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-letras mb-8 text-center">
          EL LABORATORIO DE ORATORIA
        </h2>

        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-letras mb-6 text-center">
          Un espacio de confianza para:
        </h3>

        {/* Centramos la lista para que no quede desplazada en pantallas grandes */}
        <ul className="list-disc list-inside text-xl sm:text-2xl lg:text-3xl font-medium text-amarillo space-y-4 mb-6 text-center mx-auto max-w-lg">
          <li>Prepararte</li>
          <li>Exponerte</li>
          <li>Aprender</li>
          <li>Practicar, practicar y practicar</li>
        </ul>

        <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-letras text-center">
          Para desarrollar tu propia manera de comunicar con **naturalidad y
          autenticidad**
        </p>
      </section>
    </>
  );
}
