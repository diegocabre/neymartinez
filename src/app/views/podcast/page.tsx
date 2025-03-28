import Image from "next/image";

export default function PodcastPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Desafía tu Oratoria
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        Estamos en construcción de la page podcast. ¡Pronto estaremos listos para ti!
      </p>
      <div className="relative w-80 h-80">
        <Image
          src="/assets/img/Ney0023.png"
          alt="Página en construcción"
          layout="fill"
          objectFit="cover"
          priority={true}
        />
      </div>
    </div>
  );
}
