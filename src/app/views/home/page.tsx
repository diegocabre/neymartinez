import Image from "next/image";
//import fondo from "/public/assets/img/fondo2.jpg";

export const metadata = {
  title: "Neydemar Martinez",
  description: "Neydemar Martinez",
};

export default function HomePage() {
  return (
    <div className="bg-gradient-custom overflow-hidden relative flex flex-col md:flex-row w-full min-h-screen">
      {/*     <div className="absolute inset-0">
        <Image
          src={fondo} // Usar la imagen de fondo
          alt="Fondo"
          layout="fill" // Ajustar la imagen al contenedor
          objectFit="cover" // Mantener la relación de aspecto
          className="opacity-50" // Aplicar opacidad a la imagen de fondo
        />
      </div> */}

      {/* Contenedor de la imagen */}
      <div className="flex-shrink-0 w-full md:w-1/2 h-64 md:h-auto md:min-h-screen relative z-10 flex items-center justify-center">
        <Image
          className="animate__animated animate__fadeInDown animate__delay-2s"
          src="/assets/img/portada.png" // Usar la imagen estática
          alt="Portada"
          width={800} // Ajuste explícito de ancho
          height={600} // Ajuste explícito de altura
          objectFit="contain" // Mantener la relación de aspecto
        />
      </div>

      {/* Contenedor de texto */}
      <div className="flex flex-col items-center justify-center w-full md:w-1/2 h-auto min-h-screen z-10 px-4 md:px-10">
        <div className="text-justify">
          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold animate__animated animate__fadeInDown animate__delay-2s">
            Te acompaño a diseñar un plan VIP <br /> Ser, Vivir y Hablar con
          </h2>
          <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold animate__animated animate__fadeInDown animate__delay-2s">
            <span className="text-rojo text-bold lg:text-6xl">V</span>
            <span>alor</span>
            <br />
            <span className="text-rojo text-bold lg:text-6xl">I</span>
            <span>nspiración</span>
            <br />
            <span className="text-rojo text-bold lg:text-6xl">P</span>
            <span>ropósito</span>
          </h2>
        </div>
      </div>
    </div>
  );
}
