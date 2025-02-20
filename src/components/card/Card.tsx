"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Transition } from "@headlessui/react";

interface Props {
    src?: string;
    alt?: string;
    cardTitle: string;
    cardBody: string;
    btnText: string;
    href?: string;
    isEmailMode?: boolean;
    source?: string;
}

export const Card = ({ src, alt, cardTitle, cardBody, btnText, href, isEmailMode, source }: Props) => {
    const [email, setEmail] = useState("");
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState("");

    const handleSubmit = async () => {
        if (!email || !email.includes("@")) {
            setToastMessage("❌ Por favor, ingresa un email válido.");
            setShowToast(true);
            return;
        }

        try {
            const response = await fetch("/api/saveEmail", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, source }),
            });

            if (response.ok) {
                setToastMessage("✅ ¡Tu ebook está en camino! 📩");
                setEmail("");
            } else {
                setToastMessage("⚠️ El correo ya está registrado.");
            }
        } catch (error) {
            console.error("Error al guardar el email:", error);
            setToastMessage("🚫 Hubo un problema al enviar el correo.");
        } finally {
            setShowToast(true);
            setTimeout(() => setShowToast(false), 5000); // Ocultar notificación tras 5 segundos
        }
    };

    return (
        <div className="relative">
            {/* 🔹 Tarjeta principal */}
            <div className="flex flex-col lg:flex-row bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-3xl mx-auto p-4">
                {/* 📸 Imagen o Input de Email */}
                <figure className="w-full lg:w-1/3 flex justify-center items-center">
                    {isEmailMode ? (
                        <input
                            type="email"
                            placeholder="Ingresa tu email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="input input-bordered w-full p-2 text-sm rounded-md border-gray-300"
                        />
                    ) : (
                        src && (
                            href ? (
                                <Link href={href} target="_blank" passHref>
                                    <Image src={src} alt={alt || ""} width={300} height={300} className="w-full h-auto object-cover rounded-md" priority />
                                </Link>
                            ) : (
                                <Image src={src} alt={alt || ""} width={300} height={300} className="w-full h-auto object-cover rounded-md" priority />
                            )
                        )
                    )}
                </figure>

                {/* 📝 Contenido de la Tarjeta */}
                <div className="flex flex-col justify-between w-full lg:w-2/3 p-4">
                    <h2 className="text-lg lg:text-xl font-semibold text-gray-800">{cardTitle}</h2>
                    <p className="text-sm lg:text-base text-gray-600">{cardBody}</p>

                    <div className="mt-4 flex justify-end">
                        {isEmailMode ? (
                            <button
                                onClick={handleSubmit}
                                className="w-full lg:w-auto bg-blue-600 text-white font-bold px-4 py-2 rounded-md hover:bg-blue-700 transition"
                            >
                                {btnText}
                            </button>
                        ) : (
                            <button
                                onClick={() => window.open(href, "_blank")}
                                className="w-full lg:w-auto bg-red-600 text-white font-bold px-4 py-2 rounded-md hover:bg-red-700 transition"
                            >
                                {btnText}
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {/* 🌟 Toast de Notificación */}
            <Transition
                show={showToast}
                enter="transition-opacity duration-500"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-500"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="fixed bottom-5 right-5 bg-green-500 text-white text-sm px-4 py-2 rounded-lg shadow-lg">
                    {toastMessage}
                </div>
            </Transition>
        </div>
    );
};
