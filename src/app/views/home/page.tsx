import Image from "next/image";
import Link from "next/link";
import { IoArrowRedoOutline } from "react-icons/io5";

export const metadata = {
  title: "Ney Martinez",
  description: "Ney Martinez",
};

export default function HomePage() {
  return (
    <>
      {/* Sección principal */}
      <section className="flex flex-col lg:flex-row items-center justify-between min-h-screen bg-amarillo px-6 lg:px-20">
        {/* Imagen */}
        <div className="flex justify-center mr-10 lg:justify-end w-full lg:w-1/2 mb-6 lg:mb-0">
          <Image
            src="/assets/img/formulario.jpg"
            alt="Portada de Ney Martínez"
            width={800}
            height={800}
            className="rounded-full object-cover shadow-lg ml-10 max-w-[90%] h-auto sm:max-w-[70%] md:max-w-[60%] lg:max-w-full"
            priority
          />
        </div>

        {/* Contenido */}
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-rojo">
            <span className="italic text-4xl md:text-6xl lg:text-7xl">
              Ruta al logro:
            </span>
            <br />
            de la claridad a la acción
          </h1>

          <h4 className="text-lg md:text-xl font-medium text-rojo">
            El logro de tus metas empieza:
          </h4>

          <ul className="space-y-3">
            {[
              "Trazando el camino, continúa",
              "Midiendo tus avances y termina",
              "Logrando resultados",
            ].map((text, index) => (
              <li key={index} className="text-lg md:text-xl text-rojo">
                <strong>{text.split(" ")[0]}</strong> {text.split(" ").slice(1).join(" ")}
              </li>
            ))}
          </ul>

          <p className="mt-6 text-lg md:text-xl font-bold text-rojo px-6 py-3">
            Descubre cómo puedo ayudarte a alcanzar tus metas
          </p>
        </div>
      </section>

      <section className="flex flex-col lg:flex-row items-center justify-between min-h-screen bg-verdes px-6 lg:px-20 text-letras">
        {/* Contenido */}
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
          <h2 className="text-2xl md:text-3xl italic font-light text-amarillo">Hola soy</h2>
          <h1 className="text-4xl md:text-6xl  text-amarillo italic">NEY MARTÍNEZ</h1>
          <div className="bg-amarillo text-verdes rounded-lg p-6 shadow-md">
            <p className="text-lg md:text-xl">
              Estoy aquí para acompañarte a trazar tu ruta al logro y hacer que las cosas
              sucedan.
              <br />
              <br />
              Hablarte de mí es fácil si te digo que soy como un Paquete Microsoft Office.
            </p>
          </div>
          {/* Botón */}
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 text-center">
            <div className="text-3xl text-amarillo">
              <Image
                src="/assets/img/flechan.png"
                alt="Flecha"
                width={100}
                height={100}
              />
            </div>
            <Link
              href="/views/about"
              className="flex items-center bg-white text-verde-oscuro font-semibold px-6 py-2 rounded-md shadow-lg hover:bg-amarillo hover:text-verde-oscuro transition"
              passHref
            >
              Seguir leyendo <span className="ml-2"><IoArrowRedoOutline /></span>
            </Link>
          </div>

        </div>

        {/* Imagen */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <Image
            src="/assets/img/Neyrojo.jpg" // Cambia esta ruta según corresponda
            alt="Foto de Ney Martínez"
            width={400}
            height={400}
            className="rounded-full shadow-lg"
            priority
          />
        </div>
      </section>
    </>
  );
}
