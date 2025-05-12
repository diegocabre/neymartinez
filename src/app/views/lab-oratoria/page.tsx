import { Card } from "@/components/card/Card";
import Head from "next/head";
import Image from "next/image";
import { IoMicOutline } from "react-icons/io5";


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

          {/* Imagen grande y centrada */}
          <div className="w-full flex justify-center mt-6 md:mt-10">
            <Image
              src="/assets/img/LAB2025.png"
              alt="Lab Oratoria"
              width={1200}
              height={800}
              className="object-contain w-full max-w-lg md:max-w-2xl lg:max-w-4xl h-auto"
              priority
            />
          </div>
          {/* Primera Sección */}
          <section className="flex pt-10 mb-10 ml-5">
            <div className="flex items-center justify-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-verdes animate__animated animate__fadeInDown animate__delay-1s">
                Oratoria <br /> <span className="text-rojo">VIP</span>
              </h1>
            </div>
          </section>

          {/* Segunda Sección */}
          <section className="flex flex-col pt-10 mb-10 lg:mb-40 px-5 lg:px-20 animate__animated animate__fadeInDown animate__delay-1s">
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
                  className="animate__animated animate__fadeInDown rounded-lg"
                  src="/assets/img/oratoria3.jpg"
                  alt="Una persona presentando en público"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </section>

          {/* Tercera Sección */}
          <section className="flex flex-col pt-10 mb-10 lg:mb-40 px-5 lg:px-20 animate__animated animate__fadeInDown animate__delay-1s">
            <div className="flex flex-col items-center justify-center mb-10">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-verdes">
                El <span className="text-rojo">Laboratorio</span> para
                experimentar y desarrollar tu{" "}
                <span className="text-rojo">Oratoria</span>
              </h2>
            </div>

            {/* Contenedor de Imágenes */}
            <div className="flex flex-col sm:flex-row sm:space-x-4 items-center justify-center">
              <div className="flex items-center justify-center mb-4 sm:mb-0">
                <Image
                  className="rounded-lg"
                  src="/assets/img/oratoria1.jpg"
                  alt="Sesión de práctica de oratoria"
                  width={400}
                  height={400}
                />
              </div>
              <div className="flex items-center justify-center mb-4 sm:mb-0">
                <Image
                  className="rounded-lg"
                  src="/assets/img/oratoria2.jpg"
                  alt="Exposición en público"
                  width={500}
                  height={500}
                />
              </div>
              <div className="flex items-center justify-center">
                <Image
                  className="rounded-lg"
                  src="/assets/img/oratoria.png"
                  alt="Participante en una conferencia"
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:w-1/2 mt-10 lg:mt-0">
              <Image
                className="rounded-lg"
                src="/assets/img/bicicleta.jpg"
                alt="Montar bicicleta"
                width={500}
                height={500}
              />
              <Image
                className="rounded-lg"
                src="/assets/img/nadar.jpg"
                alt="Nadar en una piscina"
                width={500}
                height={500}
              />
              <Image
                className="rounded-lg"
                src="/assets/img/conducir.jpg"
                alt="Conducir un vehículo"
                width={500}
                height={500}
              />
              <Image
                className="rounded-lg"
                src="/assets/img/bailar.jpg"
                alt="Bailar en una fiesta"
                width={500}
                height={500}
              />
            </div>
          </section>

          {/* Quinta Sección */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-rojo mt-6 lg:mt-0 block md:block lg:hidden text-center">
            ¡Practicando!
          </h2>

          <section className="flex flex-col lg:flex-row items-center justify-center pt-10 mb-10 lg:mb-40 px-5 lg:px-20 animate__animated animate__fadeInDown animate__delay-1s">
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
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-rojo mt-6 lg:mt-0 hidden md:hidden sm:hidden lg:block">
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

          {/* Sexta Sección */}
          <section className="flex flex-col items-center pt-10 mb-10 lg:mb-40 px-5 lg:px-20 animate__animated animate__fadeInDown animate__delay-1s">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-verdes mb-10 text-center">
              Más de una vez hablé y me quedé con:
            </h2>

            <div className="flex flex-col lg:flex-row items-center justify-between w-full">
              <div className="flex flex-col lg:w-1/2 items-start text-left lg:mr-10">
                <ul className="list-disc list-inside text-xl sm:text-2xl lg:text-3xl font-medium text-rojo mb-6">
                  <li>Lo que no pude decir</li>
                  <li>Lo que no debí decir</li>
                  <li>Lo que no dije</li>
                  <li>Lo que dije de modo incorrecto</li>
                </ul>

                <h3 className="text-xl sm:text-2xl font-semibold text-verdes">
                  Si te ha pasado, entonces LAB_Oratoria es para ti
                </h3>
              </div>

              <div className="flex justify-center lg:w-1/2 mt-10 lg:mt-0">
                <Image
                  className="rounded-lg object-cover"
                  src="/assets/img/conferencia.jpg"
                  alt="Conferencia de oratoria"
                  width={600}
                  height={600}
                />
              </div>
            </div>
          </section>

          {/* Séptima Sección */}
          <section className="flex flex-col items-center pt-10 mb-10 lg:mb-40 px-5 lg:px-20 animate__animated animate__fadeInDown animate__delay-1s">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-verdes mb-10 text-center">
              Si cuando tienes una presentación:
            </h2>

            <div className="flex flex-col items-center lg:space-x-10 lg:flex-row">
              <div className="flex justify-center mb-10 lg:mb-0 lg:w-1/2">
                <Image
                  className="rounded-lg object-cover"
                  src="/assets/img/grabando.jpg"
                  alt="Oradora grabando un discurso"
                  width={700}
                  height={700}
                />
              </div>

              <div className="lg:w-1/2">
                <ul className="list-disc list-inside text-xl sm:text-2xl lg:text-3xl font-medium text-rojo mb-6 space-y-4">
                  <li>Te asustas más de lo que deberías</li>
                  <li>Criticas tu forma de hablar</li>
                  <li>Evades cualquier oportunidad de exposición</li>
                </ul>
                <h3 className="text-xl sm:text-2xl font-semibold text-verdes">
                  Entonces LAB_Oratoria es para ti
                </h3>
              </div>
            </div>
          </section>

          {/* Octava Sección */}
          <section className="flex flex-col items-center pt-10 mb-10 lg:mb-40 px-5 lg:px-20 animate__animated animate__fadeInDown animate__delay-1s">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-verdes mb-10 text-center">
              Tienes redes sociales y una marca personal:
            </h2>

            <div className="flex flex-col lg:flex-row items-center w-full lg:space-x-10">
              <div className="lg:w-1/2 mb-10 lg:mb-0">
                <ul className="list-disc list-inside text-xl sm:text-2xl lg:text-3xl font-medium text-rojo mb-6 space-y-4">
                  <li>No te atreves a grabar un video y publicarlo</li>
                  <li>Te cuesta subir historias expresándote</li>
                </ul>
                <h3 className="text-xl sm:text-2xl font-semibold text-verdes">
                  Entonces LAB_Oratoria es para ti
                </h3>
              </div>

              <div className="lg:w-1/2 flex justify-center">
                <Image
                  className="rounded-lg object-cover"
                  src="/assets/img/conferencia.jpg"
                  alt="Conferencia de oratoria"
                  width={700}
                  height={700}
                />
              </div>
            </div>
          </section>

          {/* novena seccion */}

          <section className="flex flex-col pt-10 mb-10 lg:mb-40 px-5 lg:px-20 animate__animated animate__fadeInDown animate__delay-1s">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-verdes mb-8 text-center">
              EL LABORATORIO DE ORATORIA
            </h2>

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
          {/* Cards en formato de grid responsivo */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-8">
            <Card
              src="/assets/img/ebook.png"
              cardTitle="E-book Lab Oratoria"
              cardBody="Descarga el E-book Lab Oratoria, ingresa tu correo para recibirlo."
              btnText="Quiero mi E-Book"
              href="https://www.oratoriavip.com/ebook"
              isEmailMode={false}
              source="lab-oratoria"
            />
            <Card
              src="/assets/img/meta.png"
              alt="Mentoría"
              cardTitle="Mentoría personalizada"
              cardBody="Quiero la mentoría para trazar mi ruta al Logro."
              btnText="Ir a WhatsApp"
              href="https://walink.co/82c115"
              isEmailMode={false}
            />
            <Card
              src="/assets/img/equipo.png"
              alt="Quiero Ingresar a Lab_Oratoria"
              cardTitle="Quiero Ingresar a Lab_Oratoria"
              cardBody="Únete al grupo y comparte tu progreso."
              btnText="Únete al Grupo"
              href="https://walink.co/911fb3"
              isEmailMode={false}
            />
          </div>
        </section>

      </main>
    </>
  );
}



