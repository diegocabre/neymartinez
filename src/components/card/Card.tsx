"use client";

import { useState } from "react";
import Image from "next/image";
//import Link from "next/link";
import { IoCheckmarkCircle, IoCloseCircle } from "react-icons/io5";

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
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
    const [isSuccess, setIsSuccess] = useState(true);

    const handleSubmit = async () => {
        if (!email || !email.includes("@")) {
            showModalMessage("❌ Por favor, ingresa un email válido.", false);
            return;
        }

        try {
            const response = await fetch("/api/saveEmail", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, source }),
            });

            if (response.ok) {
                showModalMessage("✅ ¡Tu ebook está en camino! 📩", true);
                setEmail("");
            } else {
                showModalMessage("⚠️ El correo ya está registrado.", false);
            }
        } catch (error) {
            console.error("Error al guardar el email:", error);
            showModalMessage("🚫 Hubo un problema al enviar el correo.", false);
        }
    };

    const showModalMessage = (message: string, success: boolean) => {
        setModalMessage(message);
        setIsSuccess(success);
        setShowModal(true);
    };

    return (
        <div className="relative h-full">
            {/* Tarjeta principal */}
            <div className="flex flex-col lg:flex-row bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-3xl mx-auto p-4 h-full min-h-[300px]">
                {/* Imagen */}
                {src && (
                    <figure className="w-full lg:w-1/3 h-full flex justify-center items-center">
                        <Image
                            src={src}
                            alt={alt || "Imagen"}
                            width={300}
                            height={300}
                            className="w-full h-auto object-cover rounded-md"
                            priority
                        />
                    </figure>
                )}

                {/* Contenido de la Tarjeta */}
                <div className="flex flex-col justify-between w-full lg:w-2/3 p-4 h-full">
                    <h2 className="text-lg lg:text-xl font-semibold text-gray-800">{cardTitle}</h2>
                    <p className="text-sm lg:text-base text-gray-600 flex-grow">{cardBody}</p>

                    {/* Input de Email si está en modo email */}
                    {isEmailMode && (
                        <div className="mt-4">
                            <input
                                type="email"
                                placeholder="Ingresa tu email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="input input-bordered w-full p-2 text-sm rounded-md border-gray-300 mb-2"
                            />
                            <button
                                onClick={handleSubmit}
                                className="w-full bg-blue-600 text-white font-bold px-4 py-2 rounded-md hover:bg-blue-700 transition"
                            >
                                {btnText}
                            </button>
                        </div>
                    )}

                    {/* Botón si no está en modo email */}
                    {!isEmailMode && href && (
                        <button
                            onClick={() => window.open(href, "_blank")}
                            className="w-full lg:w-auto bg-rojo text-white font-bold px-4 py-2 rounded-md hover:bg-verdes transition mt-4"
                        >
                            {btnText}
                        </button>
                    )}
                </div>
            </div>

            {/* Modal de Notificación */}
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white rounded-lg p-6 max-w-sm w-full text-center shadow-lg">
                        {isSuccess ? (
                            <IoCheckmarkCircle size={40} className="text-green-500 mx-auto mb-3" />
                        ) : (
                            <IoCloseCircle size={40} className="text-red-500 mx-auto mb-3" />
                        )}
                        <p className="text-lg font-semibold text-gray-800">{modalMessage}</p>
                        <button
                            onClick={() => setShowModal(false)}
                            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                        >
                            Cerrar
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};
