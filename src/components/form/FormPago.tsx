"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  IoCardOutline,
  IoIdCardOutline,
  IoPersonCircleOutline,
} from "react-icons/io5";

export const FormPago = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
  });

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
        alert("Formulario enviado exitosamente");
        // Limpiar formulario si es necesario
      } else {
        alert("Hubo un error al enviar el formulario");
      }
    } catch (error) {
      console.error("Error enviando el formulario:", error);
    }
  };

  return (
    <div>
      <section className="relative flex flex-col lg:flex-row lg:h-screen lg:items-center pt-10 lg:pt-20">
        {/* Sección de Formulario */}
        <div className="w-full lg:w-1/2 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-lg text-center lg:text-left">
            <h2 className="text-2xl text-amarillo font-medium sm:text-3xl lg:text-4xl">
              ¿Cómo es la modalidad?
              <br />
              <br />
              Prácticas virtuales primer y segundo lunes de cada mes,
              <br />
              <br />
              Experimentos de comunicación,
              <br />
              <br />
              Un pago de{" "}
              <span
                className="font-medium text-green-500"
                style={{ textShadow: "3px 3px 10px white" }}
              >
                20$
              </span>{" "}
              por acceso durante{" "}
              <span
                className="font-medium text-green-500"
                style={{ textShadow: "3px 3px 10px white" }}
              >
                6 meses
              </span>
            </h2>
            <p className="mt-6 text-letras text-sm sm:text-base lg:text-lg">
              Llena el formulario y obtendrás los links de pago.
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
                required
              />
              <span className="absolute inset-y-0 right-0 grid place-content-center px-4">
                <IoPersonCircleOutline className="h-5 w-5 text-fondo" />
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
                required
              />
              <span className="absolute inset-y-0 right-0 grid place-content-center px-4">
                <IoPersonCircleOutline className="h-5 w-5 text-fondo" />
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
                required
              />
              <span className="absolute inset-y-0 right-0 grid place-content-center px-4">
                <IoCardOutline className="h-5 w-5 text-fondo" />
              </span>
            </div>

            <div className="relative mb-5">
              <input
                type="tel"
                name="telefono"
                value={formData.telefono}
                onChange={handleInputChange}
                className="w-full rounded-lg border-gray-200 text-fondo p-4 text-sm shadow-sm"
                placeholder="Introduce tu teléfono con prefijo +52"
                required
              />
              <span className="absolute inset-y-0 right-0 grid place-content-center px-4">
                <IoIdCardOutline className="h-5 w-5 text-fondo" />
              </span>
            </div>

            <button
              type="submit"
              className="block w-full rounded-lg bg-fondo px-5 py-3 text-sm font-medium text-letras shadow hover:bg-green-700 hover:text-white focus:outline-none focus:ring active:bg-green-500"
            >
              Enviar
            </button>
          </form>
        </div>

        {/* Sección de Imagen */}
        <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
          <Image
            alt="Imagen de contacto"
            src="/assets/img/IMG_0741.jpg"
            className="absolute inset-0 h-full w-full object-cover object-center"
            width={1000}
            height={1000}
            priority
          />
        </div>
      </section>
    </div>
  );
};
