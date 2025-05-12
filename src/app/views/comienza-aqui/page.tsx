import { Card } from "@/components/card/Card";
import Image from "next/image";

export default function ComienzaAquiPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 md:px-10 lg:px-20 bg-fondo">

      {/* Imagen grande y centrada */}
      <div className="w-full flex justify-center mt-6 md:mt-10">
        <Image
          src="/assets/img/RUTA2025.png"
          alt="Comienza Aquí"
          width={1200}
          height={800}
          className="object-contain w-full max-w-lg md:max-w-2xl lg:max-w-4xl h-auto"
          priority
        />
      </div>

      {/* Section 1: Mensaje principal */}
      <div className="flex flex-col items-center justify-center mt-6 md:mt-10 text-amarillo py-8 px-6 md:px-12 lg:px-16 rounded-lg shadow-md max-w-4xl">

        {/* Título */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center">
          Tienes Sueños, objetivos, metas, pero...
        </h2>

        {/* Lista con iconos de flechas */}
        <ul className="mt-4 space-y-2 text-lg md:text-xl lg:text-2xl max-w-3xl">
          <li className="flex items-center gap-2">
            <span className="text-red-500">➤</span> No tienes claro cómo avanzar para alcanzarlos
          </li>
          <li className="flex items-center gap-2">
            <span className="text-red-500">➤</span> Te cuesta priorizar
          </li>
          <li className="flex items-center gap-2">
            <span className="text-red-500">➤</span> Procrastinas tus acciones
          </li>
          <li className="flex items-center gap-2">
            <span className="text-red-500">➤</span> No defines fechas para hacer lo que tienes que hacer
          </li>
          <li className="flex items-center gap-2">
            <span className="text-red-500">➤</span> No sabes cómo medir avances
          </li>
        </ul>

        {/* Segunda parte del mensaje */}
        <h2 className="mt-6 text-2xl md:text-3xl lg:text-4xl font-bold text-center">
          Y terminas cada año repitiendo la misma
          <span className="italic text-amarillo"> &quot;lista de intenciones&quot; </span>
          a la que llamas <span className="font-extrabold">&quot;mis metas del año&quot;</span>...
        </h2>

        {/* Última frase motivacional */}
        <h2 className="mt-6 text-2xl md:text-3xl lg:text-4xl font-bold text-center">
          Quizás solo te falta trazar la <span className="text-amarillo">RUTA</span> para
          <span className="text-amarillo"> LOGRARLAS</span>
        </h2>
      </div>

      {/* Cards en formato de grid responsivo */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-8">
        <Card
          src="/assets/img/ebook.png"
          cardTitle="E-book Ruta al Logro"
          cardBody="Descarga el E-book Ruta al Logro, ingresa tu correo para recibirlo."
          btnText="Quiero mi E-Book"
          href="https://www.oratoriavip.com/ebook-metas"
          isEmailMode={false}
          source="comienza-aqui"
        />
        <Card
          src="/assets/img/meta.png"
          alt="Mentoría"
          cardTitle="Mentoría personalizada"
          cardBody="Quiero la mentoría para trazar mi ruta al Logro."
          btnText="Ir a WhatsApp"
          href="https://walink.co/d79ff0"
          isEmailMode={false}
        />
        <Card
          src="/assets/img/grupo.png"
          alt="Grupo Meta en Acción"
          cardTitle="Grupo Meta en Acción"
          cardBody="Únete al grupo y comparte tu progreso."
          btnText="Únete al Grupo"
          href="https://walink.co/d79ff0"
          isEmailMode={false}
        />
      </div>
    </div>
  );
}
