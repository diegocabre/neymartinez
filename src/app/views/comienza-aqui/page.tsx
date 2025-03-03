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
          className="object-contain shadow-lg w-full max-w-lg md:max-w-2xl lg:max-w-4xl h-auto"
          priority
        />
      </div>

      {/* Cards en formato de grid responsivo */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-8">
        <Card
          src="/assets/img/ebook.png"
          cardTitle="E-book Ruta al Logro"
          cardBody="Descarga el E-book Ruta al Logro, ingresa tu correo para recibirlo."
          btnText="Descargar E-book"
          isEmailMode={true}
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
