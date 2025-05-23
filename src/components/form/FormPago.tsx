"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  IoCardOutline,
  IoEarthOutline,
  IoPersonCircleOutline,
} from "react-icons/io5";

export const FormPago = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
  });

  const [statusMessage, setStatusMessage] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatusMessage("Formulario enviado exitosamente");
        // Limpiar el formulario
        setFormData({
          nombre: "",
          apellido: "",
          email: "",
          telefono: "",
        });
      } else {
        setStatusMessage("Hubo un error al enviar el formulario");
      }
    } catch (error) {
      console.error("Error enviando el formulario:", error);
      setStatusMessage("Hubo un problema al enviar el formulario");
    }
  };

  return (
    <>
      <h2 className="flex justify-center text-5xl font-bold text-letras text-center animate-pulse">
        EMPEZAMOS EL 4 DE NOVIEMBRE 2024
      </h2>
      <section className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between">
        {/* Sección de Formulario */}
        <div className="w-full lg:w-3/5 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-lg text-center lg:text-left">
            <h2 className="text-2xl text-letras font-medium sm:text-3xl lg:text-4xl">
              ¿Cómo es la modalidad?
            </h2>
            {/* Lista con viñetas personalizadas */}
            <ul className="mt-6 text-amarillo text-xl sm:text-2xl lg:text-3xl list-none">
              <li className="mb-4 relative pl-10 before:content-['✔️'] before:absolute before:left-0 before:text-amarillo">
                Prácticas virtuales primer y segundo lunes de cada mes a las 20
                hrs Arg
              </li>
              <li className="mb-4 relative pl-10 before:content-['✔️'] before:absolute before:left-0 before:text-amarillo">
                Experimentos de comunicación
              </li>
              <li className="mb-4 relative pl-10 before:content-['✔️'] before:absolute before:left-0 before:text-amarillo">
                Ejercicios de exposición
              </li>
              <li className="mb-4 relative pl-10 before:content-['✔️'] before:absolute before:left-0 before:text-amarillo">
                Preparación de una charla de 5 minutos
              </li>
            </ul>

            <p className="mt-6 text-amarillo text-xl sm:text-2xl lg:text-3xl">
              Pago único – membresía de 3 meses
            </p>

            {/* Icono y precio con bandera */}
            <div className="flex items-center justify-center lg:justify-start mt-6 text-amarillo text-xl sm:text-2xl lg:text-3xl">
              <IoEarthOutline
                className="h-6 w-6 text-letras"
                aria-label="Icono de la tierra"
              />
              <span className="mx-2">USD $20</span>
              <Image
                src="/assets/img/argentina-flag.png"
                alt="Bandera de Argentina"
                width={24}
                height={24}
              />
              <span className="ml-2">15000 ARS</span>
            </div>

            <p className="mt-6 text-letras text-center text-sm sm:text-base lg:text-lg lg:text-left">
              Quieres ser parte de LAB_Oratoria, Completa el formulario para
              recibir enlaces de pago
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-8 max-w-md space-y-4 text-letras bg-azul shadow-2xl rounded-lg p-6 lg:p-8"
          >
            <div className="relative mb-5">
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleInputChange}
                className="w-full rounded-lg border-letras text-fondo p-4 text-sm shadow-sm"
                placeholder="Introduce tu nombre"
                aria-label="Nombre"
                required
              />
              <span className="absolute inset-y-0 right-0 grid place-content-center px-4">
                <IoPersonCircleOutline
                  className="h-5 w-5 text-fondo"
                  aria-hidden="true"
                />
              </span>
            </div>

            <div className="relative mb-5">
              <input
                type="text"
                name="apellido"
                value={formData.apellido}
                onChange={handleInputChange}
                className="w-full rounded-lg border-letras text-fondo p-4 text-sm shadow-sm"
                placeholder="Introduce tu apellido"
                aria-label="Apellido"
                required
              />
              <span className="absolute inset-y-0 right-0 grid place-content-center px-4">
                <IoPersonCircleOutline
                  className="h-5 w-5 text-fondo"
                  aria-hidden="true"
                />
              </span>
            </div>

            <div className="relative mb-5">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full rounded-lg border-letras text-fondo p-4 text-sm shadow-sm"
                placeholder="Introduce tu correo electrónico"
                aria-label="Correo electrónico"
                required
              />
              <span className="absolute inset-y-0 right-0 grid place-content-center px-4">
                <IoCardOutline
                  className="h-5 w-5 text-fondo"
                  aria-hidden="true"
                />
              </span>
            </div>

            {/* Botón de Enviar */}
            <button
              type="submit"
              className="block w-full rounded-lg bg-fondo px-5 py-3 text-sm font-medium text-letras shadow hover:bg-green-700 hover:text-white focus:outline-none focus:ring active:bg-green-500"
            >
              Enviar
            </button>
          </form>

          {/* Mostrar mensaje de estado después del envío */}
          {statusMessage && (
            <p className="mt-4 text-center text-letras text-lg">
              {statusMessage}
            </p>
          )}
        </div>

        {/* Sección de Imagen */}
        <div className="relative w-full h-64 sm:h-96 lg:h-auto lg:w-1/2">
          <Image
            alt="Una imagen de contacto para la sección de oratoria"
            src="/assets/img/IMG_0741.jpg"
            className="inset-0 h-full w-full object-cover object-center rounded"
            width={1000}
            height={1000}
            priority
          />
        </div>
      </section>
    </>
  );
};
