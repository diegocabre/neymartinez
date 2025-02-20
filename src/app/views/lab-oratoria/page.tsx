import { Card } from "@/components/card/Card";
import Head from "next/head";
import Image from "next/image";


export const metadata = {
  title: "LAB-Oratoria | Ney Martínez",
  description:
    "Laboratorio de Oratoria de Ney Martínez, donde puedes mejorar tus habilidades de comunicación y oratoria.",
};

export default function LandingPage() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta
          name="keywords"
          content="Oratoria, Laboratorio de Oratoria, Comunicación, Habilidades de hablar en público, Ney Martínez"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Ney Martínez" />

        {/* Open Graph para redes sociales */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.neymartinez.com/views/lab-oratoria"
        />
        <meta
          property="og:image"
          content="https://www.neymartinez.com/assets/img/oratoria3.jpg"
        />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta
          name="twitter:image"
          content="https://www.neymartinez.com/assets/img/oratoria3.jpg"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://www.neymartinez.com/views/lab-oratoria"
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "LAB-Oratoria",
            "url": "https://www.neymartinez.com",
            "logo": "https://www.neymartinez.com/assets/img/oratoria3.jpg",
            "description": "${metadata.description}"
          }
          `}
        </script>
      </Head>

      {/* Contenido principal */}
      <main className="min-h-screen overflow-hidden bg-amarillo">
        <section className="items-center mb-10 lg:mb-40 px-5 lg:px-20 animate__animated animate__fadeInDown animate__delay-1s">
          {/* Cards en formato de grid responsivo */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-8">
            <Card
              cardTitle="E-book Lab Oratoria"
              cardBody="Descarga el E-book Lab Oratoria, ingresa tu correo para recibirlo."
              btnText="Descargar E-book"
              isEmailMode={true}
              source="lab-oratoria"
            />
            <Card
              src="/assets/img/ney1.jpg"
              alt="Mentoría"
              cardTitle="Mentoría personalizada"
              cardBody="Quiero la mentoría para trazar mi ruta al Logro."
              btnText="Ir a WhatsApp"
              href="https://walink.co/82c115"
              isEmailMode={false}
            />
            <Card
              src="/assets/img/oratoria3.jpg"
              alt="Quiero Ingresar a Lab_Oratoria"
              cardTitle="Quiero Ingresar a Lab_Oratoria"
              cardBody="Únete al grupo y comparte tu progreso."
              btnText="Únete al Grupo"
              href="https://walink.co/911fb3"
              isEmailMode={false}
            />
          </div>

          <section className="flex flex-col pt-10 mb-10 lg:mb-40 px-5 lg:px-20 animate__animated animate__fadeInDown animate__delay-1s">
            {/*         <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-letras mb-8 text-center">
          EL LABORATORIO DE ORATORIA
        </h2> */}

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-verdes mb-6">
              Un espacio de confianza para:
            </h3>

            <ul className="list-disc list-inside text-xl sm:text-2xl lg:text-3xl font-medium text-rojo space-y-4 mb-6">
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
          {/* Imagen grande y centrada */}
          <div className="w-full flex justify-center mt-6 md:mt-10">
            <Image
              src="/assets/img/LAB2025.png"
              alt="Lab Oratoria"
              width={1200}
              height={800}
              className="object-contain shadow-lg w-full max-w-lg md:max-w-2xl lg:max-w-4xl h-auto"
              priority
            />
          </div>

        </section>

      </main>
    </>
  );
}



