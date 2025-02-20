
import Image from "next/image";
import { IoMicOutline } from "react-icons/io5";

export default function NamePage() {
    return (
        <>
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
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-letras">
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
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-letras mb-6">
                        Si sabes:
                    </h2>
                    <ul className="text-xl sm:text-2xl lg:text-3xl font-medium text-amarillo mb-6">
                        <li>Montar Bicicleta</li>
                        <li>Nadar</li>
                        <li>Conducir</li>
                        <li>Bailar</li>
                    </ul>
                    <h3 className="text-xl text-letras lg:text-2xl font-semibold">
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
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-amarillo mt-6 lg:mt-0 block md:block lg:hidden text-center">
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
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-amarillo mt-6 lg:mt-0 hidden md:hidden sm:hidden lg:block">
                        ¡Practicando!
                    </h2>
                    <p className="mt-6 text-xl sm:text-2xl lg:text-3xl font-medium text-letras text-center lg:text-left">
                        La oratoria se aprende igual, practicando. <br />
                        <br />
                        Solo necesitas un espacio confiable para atreverte, un laboratorio
                        para experimentar!!
                    </p>
                </div>
            </section>

            {/* Sexta Sección */}
            <section className="flex flex-col items-center pt-10 mb-10 lg:mb-40 px-5 lg:px-20 animate__animated animate__fadeInDown animate__delay-1s">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-letras mb-10 text-center">
                    Más de una vez hablé y me quedé con:
                </h2>

                <div className="flex flex-col lg:flex-row items-center justify-between w-full">
                    <div className="flex flex-col lg:w-1/2 items-start text-left lg:mr-10">
                        <ul className="list-disc list-inside text-xl sm:text-2xl lg:text-3xl font-medium text-amarillo mb-6">
                            <li>Lo que no pude decir</li>
                            <li>Lo que no debí decir</li>
                            <li>Lo que no dije</li>
                            <li>Lo que dije de modo incorrecto</li>
                        </ul>

                        <h3 className="text-xl sm:text-2xl font-semibold text-letras">
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
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-letras mb-10 text-center">
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
                        <ul className="list-disc list-inside text-xl sm:text-2xl lg:text-3xl font-medium text-amarillo mb-6 space-y-4">
                            <li>Te asustas más de lo que deberías</li>
                            <li>Criticas tu forma de hablar</li>
                            <li>Evades cualquier oportunidad de exposición</li>
                        </ul>
                        <h3 className="text-xl sm:text-2xl font-semibold text-letras">
                            Entonces LAB_Oratoria es para ti
                        </h3>
                    </div>
                </div>
            </section>

            {/* Octava Sección */}
            <section className="flex flex-col items-center pt-10 mb-10 lg:mb-40 px-5 lg:px-20 animate__animated animate__fadeInDown animate__delay-1s">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-letras mb-10 text-center">
                    Tienes redes sociales y una marca personal:
                </h2>

                <div className="flex flex-col lg:flex-row items-center w-full lg:space-x-10">
                    <div className="lg:w-1/2 mb-10 lg:mb-0">
                        <ul className="list-disc list-inside text-xl sm:text-2xl lg:text-3xl font-medium text-amarillo mb-6 space-y-4">
                            <li>No te atreves a grabar un video y publicarlo</li>
                            <li>Te cuesta subir historias expresándote</li>
                        </ul>
                        <h3 className="text-xl sm:text-2xl font-semibold text-letras">
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

            {/* Novena Sección */}
            <section className="flex flex-col pt-10 mb-10 lg:mb-40 px-5 lg:px-20 animate__animated animate__fadeInDown animate__delay-1s">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-letras mb-8 text-center">
                    EL LABORATORIO DE ORATORIA
                </h2>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-letras mb-6">
                    Un espacio de confianza para:
                </h3>

                <ul className="list-disc list-inside text-xl sm:text-2xl lg:text-3xl font-medium text-amarillo space-y-4 mb-6">
                    <li>Prepararte</li>
                    <li>Exponerte</li>
                    <li>Aprender</li>
                    <li>Practicar, practicar y practicar</li>
                </ul>

                <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-letras text-center">
                    Para desarrollar tu propia manera de comunicar con naturalidad y
                    autenticidad
                </p>
            </section>
        </>
    );
}