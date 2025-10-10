// src/views/lab-oratoria/LandingPage.tsx

import { Card } from "@/components/card/Card";
import Testimonio from "@/components/testimonio/Testimonio";
import Image from "next/image";
import { IoMicOutline } from "react-icons/io5";

// --- 1. Metadatos de Next.js App Router (Mejor Práctica) ---
// NOTA: Se eliminan las etiquetas <Head> y se dejan solo los metadatos de Next.js
export const metadata = {
  title: "LAB-Oratoria | Ney Martínez",
  description:
    "Laboratorio de Oratoria de Ney Martínez, donde puedes mejorar tus habilidades de comunicación y oratoria.",
  keywords: [
    "Oratoria",
    "Laboratorio de Oratoria",
    "Comunicación",
    "Habilidades de hablar en público",
    "Ney Martínez",
  ],
  authors: [{ name: "Ney Martínez" }],
  openGraph: {
    title: "LAB-Oratoria | Ney Martínez",
    description:
      "Laboratorio de Oratoria de Ney Martínez, donde puedes mejorar tus habilidades de comunicación y oratoria.",
    url: "https://www.neymartinez.com/views/lab-oratoria",
    images: "https://www.neymartinez.com/assets/img/oratoria3.jpg",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LAB-Oratoria | Ney Martínez",
    description:
      "Laboratorio de Oratoria de Ney Martínez, donde puedes mejorar tus habilidades de comunicación y oratoria.",
    images: "https://www.neymartinez.com/assets/img/oratoria3.jpg",
  },
  // La canonical URL y el favicon se configuran en el layout raíz, pero se pueden especificar aquí si es necesario
  // Para canonical, puedes usar un hook o configurar dinámicamente si fuera el caso, pero no se hace vía <link> en el componente.
};

export default function LandingPage() {
  // NOTA: El componente <Head> de next/head se ha eliminado, ya que la metadata
  // se maneja a través de la constante exportada arriba.

  // Clase de animación reutilizable
  // En Next.js, 'animate__animated' se suele importar como un Client Component o en el layout.
  const animationClass =
    "animate__animated animate__fadeInDown animate__delay-1s";

  return (
    // 'overflow-hidden' puede ser problemático si el contenido es largo
    <main className="min-h-screen bg-amarillo">
      <section
        className={`items-center mb-10 lg:mb-40 px-5 lg:px-20 ${animationClass}`}
      >
        {/* Imagen principal: LAB2025.png */}
        <div className="w-full flex justify-center mt-6 md:mt-10">
          <Image
            src="/assets/img/LAB2025.png"
            alt="Lab Oratoria"
            width={1200}
            height={800}
            className="object-contain w-full max-w-lg md:max-w-2xl lg:max-w-4xl h-auto"
            priority // Correcto uso de priority para LCP
          />
        </div>

        {/* Primera Sección: Título Oratoria VIP */}
        <section className="flex pt-10 mb-10 ml-5">
          <div className="flex items-center justify-center">
            {/* H1 ajustado para ser el único de la página, mejorando SEO. */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-verdes">
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
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-verdes flex items-center">
                LAB_Orator
                <span className="text-rojo -ml-1 -mr-1 inline-flex">
                  <IoMicOutline />
                </span>
                a
              </h2>
            </div>
            <div className="flex items-center justify-center mt-6 lg:mt-0 lg:ml-10">
              <Image
                // Animación extraña de AnimateCSS dentro del Client Component (mejor mover a un contenedor)
                className="rounded-lg"
                src="/assets/img/oratoria3.jpg"
                alt="Una persona presentando en público"
                width={500}
                height={500}
              />
            </div>
          </div>
        </section>

        {/* Tercera Sección: El Laboratorio */}
        <section
          className={`flex flex-col pt-10 mb-10 lg:mb-40 px-5 lg:px-20 ${animationClass}`}
        >
          <div className="flex flex-col items-center justify-center mb-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-verdes text-center">
              El <span className="text-rojo">Laboratorio</span> para
              experimentar y desarrollar tu{" "}
              <span className="text-rojo">Oratoria</span>
            </h2>
          </div>

          {/* Contenedor de Imágenes */}
          <div className="flex flex-col sm:flex-row sm:space-x-4 items-center justify-center">
            {/* Imágenes en un grid simple sin márgenes redundantes */}
            {[
              {
                src: "/assets/img/oratoria1.jpg",
                alt: "Sesión de práctica de oratoria",
              },
              {
                src: "/assets/img/oratoria2.jpg",
                alt: "Exposición en público",
              },
              {
                src: "/assets/img/oratoria.png",
                alt: "Participante en una conferencia",
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
                  width={index === 1 ? 500 : 400} // Manteniendo tamaños originales
                  height={index === 1 ? 500 : 400}
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
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-verdes mb-6">
              Si sabes:
            </h2>
            <ul className="text-xl sm:text-2xl lg:text-3xl font-medium text-rojo mb-6">
              <li>Montar Bicicleta</li>
              <li>Nadar</li>
              <li>Conducir</li>
              <li>Bailar</li>
            </ul>
            <h3 className="text-xl text-verdes lg:text-2xl font-semibold">
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
                className="rounded-lg object-cover"
                src={img.src}
                alt={img.alt}
                width={500}
                height={500}
              />
            ))}
          </div>
        </section>

        {/* Quinta Sección: ¡Practicando! */}
        {/* H2 visible solo en móvil (md/sm/hidden) */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-rojo mt-6 lg:mt-0 lg:hidden text-center">
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
            {/* H2 visible solo en desktop (lg:block) */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-rojo mt-6 lg:mt-0 hidden lg:block">
              ¡Practicando!
            </h2>
            <p className="mt-6 text-xl sm:text-2xl lg:text-3xl font-medium text-verdes text-center lg:text-left">
              La oratoria se aprende igual, practicando. <br />
              <br />
              Solo necesitas un espacio confiable para atreverte, un laboratorio
              para experimentar!!
            </p>
          </div>
        </section>

        {/* Sexta, Séptima y Octava Sección: Patrones de Problemas (Usando Listas) */}
        {[
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
            reverse: true, // Cambia el orden en desktop
          },
          {
            title: "Tienes redes sociales y una marca personal:",
            problems: [
              "No te atreves a grabar un video y publicarlo",
              "Te cuesta subir historias expresándote",
            ],
            imageSrc: "/assets/img/conferencia.jpg",
            imageAlt: "Conferencia de oratoria",
          },
        ].map((section, index) => (
          <section
            key={index}
            className={`flex flex-col pt-10 mb-10 lg:mb-40 px-5 lg:px-20 ${animationClass}`}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-verdes mb-10 text-center">
              {section.title}
            </h2>

            <div
              // Controla el orden de la imagen y el texto en desktop
              className={`flex flex-col items-center w-full lg:space-x-10 ${
                section.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
              }`}
            >
              <div className="lg:w-1/2 mb-10 lg:mb-0">
                <ul className="list-disc list-inside text-xl sm:text-2xl lg:text-3xl font-medium text-rojo mb-6 space-y-4">
                  {section.problems.map((problem, i) => (
                    <li key={i}>{problem}</li>
                  ))}
                </ul>
                <h3 className="text-xl sm:text-2xl font-semibold text-verdes">
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
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-verdes mb-8 text-center">
            EL LABORATORIO DE ORATORIA
          </h2>

          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-verdes mb-6 text-center">
            Un espacio de confianza para:
          </h3>

          <ul className="list-disc list-inside text-xl sm:text-2xl lg:text-3xl font-medium text-rojo space-y-4 mb-6 text-center mx-auto">
            <li>Prepararte</li>
            <li>Exponerte</li>
            <li>Aprender</li>
            <li>Practicar, practicar y practicar</li>
          </ul>

          <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-verdes text-center">
            Para desarrollar tu propia manera de comunicar con naturalidad y
            autenticidad
          </p>
        </section>
        <Testimonio />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-8 mb-20">
          <Card
            src="/assets/img/ebook.png"
            cardTitle="E-book Lab Oratoria"
            cardBody="Descarga el E-book Lab Oratoria, ingresa tu correo para recibirlo."
            btnText="Quiero mi E-Book"
            href="https://www.oratoriavip.com/ebook"
            // isEmailMode={false} (Mejor si es default en Card)
            source="lab-oratoria"
          />
          <Card
            src="/assets/img/meta.png"
            alt="Mentoría"
            cardTitle="Mentoría personalizada"
            cardBody="Quiero la mentoría para trazar mi ruta al Logro."
            btnText="Ir a WhatsApp"
            href="https://walink.co/82c115"
            // isEmailMode={false}
          />
          <Card
            src="/assets/img/equipo.png"
            alt="Quiero Ingresar a Lab_Oratoria"
            cardTitle="Quiero Ingresar a Lab_Oratoria"
            cardBody="Únete al grupo y comparte tu progreso."
            btnText="Únete al Grupo"
            href="https://walink.co/911fb3"
            // isEmailMode={false}
          />
        </div>
      </section>
    </main>
  );
}
