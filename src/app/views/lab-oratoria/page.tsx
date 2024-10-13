import "animate.css";
import Image from "next/image";
import oratoria from "/public/assets/img/oratoria3.jpg";
import oratoria1 from "/public/assets/img/oratoria1.jpg";
import oratoria2 from "/public/assets/img/oratoria2.jpg";
import oratoria3 from "/public/assets/img/oratoria.jpg";
import conferencia from "/public/assets/img/conferencia.jpg";
import oradora from "/public/assets/img/oradora.jpg";
import { IoMicOutline } from "react-icons/io5";
import { FormPago } from "@/components";

export const metadata = {
  title: "LAB-Oratoria",
  description: "Laboratorio de Oratoria",
};

export default function LandingPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-gray-950">
      {/* Primera Sección */}
      <section className="flex pt-10 mb-10 ml-5">
        <div className="flex items-center justify-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-letras animate__animated animate__fadeInDown animate__delay-1s">
            Oratoria <br /> <span className="text-rojo">VIP</span>
          </h1>
        </div>
      </section>

      {/* Segunda Sección */}
      <section className="flex flex-col pt-10 mb-10 lg:mb-40 px-5 lg:px-20 animate__animated animate__fadeInDown animate__delay-1s">
        <div className="flex flex-col lg:flex-row items-center justify-center mb-10">
          <div className="flex items-center justify-center space-x-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-letras flex items-center">
              LAB Orator
              <span className="text-rojo ml-2 inline-flex">
                <IoMicOutline />
              </span>
              a
            </h2>
          </div>
          <div className="flex items-center justify-center mt-6 lg:mt-0 lg:ml-10">
            <Image
              className="animate__animated animate__fadeInDown rounded-lg"
              src={oratoria}
              alt="Oratoria"
              width={500}
              height={500}
            />
          </div>
        </div>
      </section>
      {/* Tercera Sección */}
      <section className="flex flex-col pt-10 mb-10 lg:mb-40 px-5 lg:px-20 animate__animated animate__fadeInDown animate__delay-1s">
        <div className="flex flex-col items-center justify-center mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-letras">
            El <span className="text-rojo">Laboratorio</span> para experimentar
            y desarrollar tu <span className="text-rojo">Oratoria</span>
          </h2>
        </div>

        {/* Contenedor de Imágenes */}
        <div className="flex flex-col sm:flex-row sm:space-x-4 items-center justify-center">
          <div className="flex items-center justify-center mb-4 sm:mb-0">
            <Image
              className="rounded-lg"
              src={oratoria1}
              alt="Oratoria 1"
              width={400}
              height={400}
            />
          </div>
          <div className="flex items-center justify-center mb-4 sm:mb-0">
            <Image
              className="rounded-lg"
              src={oratoria2}
              alt="Oratoria 2"
              width={500}
              height={500}
            />
          </div>
          <div className="flex items-center justify-center">
            <Image
              className="rounded-lg"
              src={oratoria3}
              alt="Oratoria 3"
              width={400}
              height={400}
            />
          </div>
        </div>
      </section>

      {/* Cuarta Sección */}
      <section className="flex flex-col lg:flex-row items-center pt-10 mb-10 lg:mb-40 px-5 lg:px-20 animate__animated animate__fadeInDown animate__delay-1s">
        {/* Texto y Lista */}
        <div className="flex flex-col lg:w-1/2 items-start text-left lg:mr-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-letras mb-5">
            Hablaste y te quedaste con:
          </h2>
          <ul className="text-2xl sm:text-3xl lg:text-4xl font-bold text-amarillo list-disc list-inside">
            <li>Lo que no pude decir.</li>
            <li>Lo que debí decir.</li>
            <li>Lo que no dije.</li>
            <li>Lo que dije de modo incorrecto.</li>
          </ul>
        </div>

        {/* Imagen */}
        <div className="flex justify-center lg:w-1/2 mt-10 lg:mt-0">
          <Image
            className="rounded-lg"
            src={conferencia}
            alt="Conferencia"
            width={500}
            height={500}
          />
        </div>
      </section>

      {/* Quinta Sección */}
      <section className="flex flex-col pt-10 mb-10 lg:mb-40 px-5 lg:px-20 animate__animated animate__fadeInDown animate__delay-1s">
        <div className="flex flex-col items-center">
          <Image
            className="rounded-lg"
            src={oradora}
            alt="Oradora"
            width={500}
            height={500}
          />
          <h2 className="mt-10 text-3xl sm:text-4xl lg:text-5xl font-bold text-letras">
            Tienes una presentación:
          </h2>
          <ul className="text-2xl sm:text-3xl lg:text-4xl font-bold text-amarillo list-disc list-inside">
            <li>Te asustas.</li>
            <li>Te bloqueas y te quedas en blanco.</li>
            <li>No te gusta tu forma de hablar.</li>
            <li>Evades cualquier oportunidad de exposición.</li>
          </ul>
        </div>
      </section>

      {/* Sexta Sección */}
      <section className="flex flex-col items-center pt-10 mb-10 lg:mb-40 px-5 lg:px-20 animate__animated animate__fadeInDown animate__delay-1s">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-letras text-center">
          Una charla memorable e inspiradora no siempre ocurre en un escenario,
          sucede en una reunión, presentación, en casa, en grupos, en redes
          sociales.
        </h3>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-amarillo mt-5 text-center">
          y requiere preparación
        </h2>
      </section>
      <section>
        <FormPago />
      </section>
    </main>
  );
}
