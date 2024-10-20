"use client";
import "animate.css";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export const Header = () => {
  const [isLabOratoria, setIsLabOratoria] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState(false);

  // Verifica el estado de isLabOratoria en localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedState = localStorage.getItem("isLabOratoria");
      setIsLabOratoria(savedState === "true");
    }
  }, []);

  // Guarda el estado de isLabOratoria en localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("isLabOratoria", JSON.stringify(isLabOratoria));
    }
  }, [isLabOratoria]);

  const handleLabOratoriaClick = () => {
    setIsLabOratoria(true);
  };

  const handleLogoClick = () => {
    setIsLabOratoria(false);
  };

  return (
    <nav
      className={`w-full border-b-2 ${
        isLabOratoria
          ? "bg-gradient-custom2 text-letras border-letras"
          : "bg-gradient-custom text-letras border-letras"
      }`}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/">
                <Image
                  onClick={handleLogoClick}
                  className="rounded p-3 animate__animated animate__fadeInDown animate__delay-1s"
                  src={
                    isLabOratoria
                      ? "/assets/img/logo1.png" // Logo de LAB_oratoria
                      : "/assets/img/logo.png" // Logo original
                  }
                  alt="Oratoria"
                  width={120} // Ancho fijo para ambos logos
                  height={120} // Alto fijo para ambos logos
                />
              </Link>
            </div>
          </div>

          {/* Menú en pantallas md o más grandes */}
          <div className="hidden md:flex items-center space-x-4">
            {/*             <Link
              href="/views/about"
              onClick={handleLogoClick}
              className={`hover:bg-gray-700 hover:text-letras px-3 py-2 rounded-md text-lg font-medium ${
                isLabOratoria ? "text-letras" : "text-letras"
              } md:text-sm`} // Reducir fuente en pantallas md
            >
              Sobre Ney
            </Link> */}
            <Link
              href="https://link.chtbl.com/Oratoria_VIP"
              onClick={handleLogoClick}
              className={`hover:bg-gray-700 hover:text-letras px-3 py-2 rounded-md text-lg font-medium ${
                isLabOratoria ? "text-letras" : "text-letras"
              } md:text-sm`} // Reducir fuente en pantallas md
              target="_blank"
            >
              Podcast
            </Link>
            {/*             <Link
              href="/views/desafia-oratoria"
              onClick={handleLogoClick}
              className={`hover:bg-gray-700 hover:text-letras px-3 py-2 rounded-md text-lg font-medium ${
                isLabOratoria ? "text-letras" : "text-letras"
              } md:text-sm`} // Reducir fuente en pantallas md
            >
              Desafia tu Oratoria
            </Link> */}
            <Link
              href="/views/lab-oratoria"
              onClick={handleLabOratoriaClick}
              className={`hover:bg-gray-700 hover:text-letras px-3 py-2 rounded-md text-lg font-medium ${
                isLabOratoria ? "text-letras" : "text-letras"
              } md:text-sm`} // Reducir fuente en pantallas md
            >
              LAB_oratoria
            </Link>
          </div>

          {/* Botón de menú hamburguesa en pantallas pequeñas */}
          <div className="block md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Menú desplegable para pantallas pequeñas */}
        {isOpen && (
          <div className="md:hidden bg-gray-900">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                href="/views/about"
                onClick={handleLogoClick}
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Sobre Ney
              </Link>
              <Link
                href="https://link.chtbl.com/Oratoria_VIP"
                onClick={handleLogoClick}
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Podcast
              </Link>
              <Link
                href="/views/desafia-oratoria"
                onClick={handleLogoClick}
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Desafia tu Oratoria
              </Link>
              <Link
                href="/views/lab-oratoria"
                onClick={handleLabOratoriaClick}
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                LAB_oratoria
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
