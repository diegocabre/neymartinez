"use client";

import { useState } from "react";
import Image from "next/image";
import { IoCheckmarkCircle, IoCloseCircle } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

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
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative h-full"
        >
            {/* Tarjeta principal */}
            <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex flex-col sm:flex-row bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-3xl mx-auto p-4 h-full min-h-[300px]"
            >
                {/* Imagen - Se hace más pequeña en sm */}
                {src && (
                    <motion.figure
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="w-full sm:w-1/4 lg:w-1/3 h-auto flex justify-center items-center"
                    >
                        <Image
                            src={src}
                            alt={alt || "Imagen"}
                            width={300}
                            height={300}
                            className="w-24 sm:w-full h-auto object-cover rounded-md"
                            priority
                        />
                    </motion.figure>
                )}

                {/* Contenido de la Tarjeta */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-col justify-between w-full sm:w-3/4 lg:w-2/3 p-4 h-full"
                >
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-lg lg:text-xl font-semibold text-gray-800"
                    >
                        {cardTitle}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-sm lg:text-base text-gray-600 flex-grow"
                    >
                        {cardBody}
                    </motion.p>

                    {/* Input de Email si está en modo email */}
                    {isEmailMode && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="mt-4"
                        >
                            <motion.input
                                whileFocus={{ scale: 1.02 }}
                                type="email"
                                placeholder="Ingresa tu email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="input input-bordered w-full p-2 text-sm rounded-md border-gray-300 mb-2"
                            />
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={handleSubmit}
                                className="w-full bg-amarillo text-rojo font-bold px-4 py-2 rounded-md shadow-lg border border-verdes hover:bg-rojo hover:text-amarillo transition"
                            >
                                {btnText}
                            </motion.button>
                        </motion.div>
                    )}

                    {/* Botón si no está en modo email */}
                    {!isEmailMode && href && (
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => window.open(href, "_blank")}
                            className="w-full bg-amarillo text-rojo font-bold px-4 py-2 rounded-md shadow-lg border border-verdes hover:bg-rojo hover:text-amarillo transition"
                        >
                            {btnText}
                        </motion.button>
                    )}
                </motion.div>
            </motion.div>

            {/* Modal de Notificación */}
            <AnimatePresence>
                {showModal && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: "spring", damping: 20 }}
                            className="bg-white rounded-lg p-6 max-w-sm w-full text-center shadow-lg"
                        >
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.2, type: "spring" }}
                            >
                                {isSuccess ? (
                                    <IoCheckmarkCircle size={40} className="text-green-500 mx-auto mb-3" />
                                ) : (
                                    <IoCloseCircle size={40} className="text-red-500 mx-auto mb-3" />
                                )}
                            </motion.div>
                            <motion.p
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="text-lg font-semibold text-gray-800"
                            >
                                {modalMessage}
                            </motion.p>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setShowModal(false)}
                                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                            >
                                Cerrar
                            </motion.button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

