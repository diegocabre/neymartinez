// src/views/ComienzaAquiPage.tsx (o su ubicación)

import { Card } from "@/components/card/Card";
import Image from "next/image";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

export default function ComienzaAquiPage() {
  return (
    // Contenedor principal
    <div className="flex flex-col items-center justify-center min-h-screen px-4 md:px-10 lg:px-20 bg-fondo">
      {/* Sección de Imagen Principal */}
      <div className="w-full flex justify-center mt-6 md:mt-10">
        <Image
          src="/assets/img/RUTA2025.png"
          alt="Comienza Aquí - Ruta 2025" // Alt text más descriptivo
          width={1200}
          height={800}
          className="object-contain w-full max-w-lg md:max-w-2xl lg:max-w-4xl h-auto"
          priority
        />
      </div>

      {/* Sección 1: Mensaje principal, Problemas y Solución */}
      <section className="flex flex-col items-center justify-center mt-6 md:mt-10 py-8 px-6 md:px-12 lg:px-16 rounded-lg shadow-md max-w-4xl">
        {/* Título Principal de la Página (H1) - Promovido para SEO/Semántica */}
        {/* Usamos text-amarillo para el título, como en los mensajes de cierre */}
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-amarillo">
          Tienes Sueños, objetivos, metas, pero...
        </h1>

        {/* Lista de Problemas (Mejorando la alineación y color de la lista) */}
        <ul className="mt-4 space-y-2 text-lg md:text-xl lg:text-2xl max-w-3xl text-letras">
          {[
            "No tienes claro cómo avanzar para alcanzarlos",
            "Te cuesta priorizar",
            "Procrastinas tus acciones",
            "No defines fechas para hacer lo que tienes que hacer",
            "No sabes cómo medir avances",
          ].map((item, index) => (
            <li key={index} className="flex items-start gap-2">
              <IoArrowForwardCircleOutline className="text-rojo mt-1 text-2xl flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>

        {/* Mensaje de cierre 1 (Usamos <p> para párrafos) */}
        <p className="mt-6 text-2xl md:text-3xl lg:text-4xl font-bold text-center text-amarillo">
          Y terminas cada año repitiendo la misma
          <span className="italic"> &quot;lista de intenciones&quot; </span>a la
          que llamas{" "}
          <span className="font-extrabold">&quot;mis metas del año&quot;</span>
          ...
        </p>

        {/* Mensaje de cierre 2 (Solución) */}
        <p className="mt-6 text-2xl md:text-3xl lg:text-4xl font-bold text-center text-amarillo">
          Quizás solo te falta trazar la <span className="text-rojo">RUTA</span>{" "}
          para
          <span className="text-rojo"> LOGRARLAS</span>
        </p>
      </section>

      {/* Cards de Ofertas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-12 mb-20 w-full max-w-5xl">
        <Card
          src="/assets/img/ebook.png"
          cardTitle="E-book Ruta al Logro"
          cardBody="Descarga el E-book Ruta al Logro, ingresa tu correo para recibirlo."
          btnText="Mi E-Book"
          href="https://www.oratoriavip.com/ebook-metas"
          source="comienza-aqui"
        />
        <Card
          src="/assets/img/meta.png"
          alt="Mentoría"
          cardTitle="Mentoría personalizada"
          cardBody="Quiero la mentoría para trazar mi ruta al Logro."
          btnText="Ir a WhatsApp"
          href="https://walink.co/d79ff0"
        />
        <Card
          src="/assets/img/grupo.png"
          alt="Grupo Meta en Acción"
          cardTitle="Grupo Meta en Acción"
          cardBody="Únete al grupo y comparte tu progreso."
          btnText="Únete al Grupo"
          href="https://walink.co/d79ff0"
        />
      </div>
    </div>
  );
}
