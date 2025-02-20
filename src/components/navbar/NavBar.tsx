"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    // Detectar si la página está scrolleada
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled
                ? "bg-amarillo/90 backdrop-blur-md shadow-md"
                : "bg-amarillo"
                }`}
        >
            <div className="flex items-center justify-between max-w-7xl mx-auto p-4 sm:px-6 lg:px-8">
                {/* Logo */}
                <div className="flex items-center">
                    <Image
                        src="/assets/img/logo.png"
                        alt="Logo de Ney Martínez"
                        width={isScrolled ? 150 : 200} // Logo más pequeño al scrollear
                        height={isScrolled ? 150 : 200}
                        className="transition-all duration-300"
                    />
                </div>

                {/* Botón hamburguesa en pantallas pequeñas */}
                <button
                    className="sm:hidden text-3xl"
                    onClick={toggleMenu}
                >
                    ☰
                </button>

                {/* Menú */}
                <div
                    className={`sm:flex items-center ${isOpen ? "flex" : "hidden"
                        } sm:space-x-8`}
                >
                    <ul className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
                        <li>
                            <Link href="/views/home">
                                <span
                                    className={`btn btn-ghost ${pathname === "/views/home"
                                        ? "bg-verdes text-amarillo"
                                        : "text-rojo"
                                        } hover:bg-verdes hover:text-amarillo transition-colors text-sm md:text-base lg:text-lg`}
                                    onClick={closeMenu} // Cierra el menú al hacer clic
                                >
                                    Home
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/views/comienza-aqui">
                                <span
                                    className={`btn btn-ghost ${pathname === "/views/comienza-aqui"
                                        ? "bg-verdes text-amarillo"
                                        : "text-rojo"
                                        } hover:bg-verdes hover:text-amarillo transition-colors text-sm md:text-base lg:text-lg`}
                                    onClick={closeMenu}
                                >
                                    Comienza aquí
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="https://link.chtbl.com/Oratoria_VIP"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span
                                    className={`btn btn-ghost ${pathname === "/views/podcast"
                                        ? "bg-verdes text-amarillo"
                                        : "text-rojo"
                                        } hover:bg-verdes hover:text-amarillo transition-colors text-sm md:text-base lg:text-lg`}
                                    onClick={closeMenu}
                                >
                                    Podcast
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/views/about">
                                <span
                                    className={`btn btn-ghost ${pathname === "/views/about"
                                        ? "bg-verdes text-amarillo"
                                        : "text-rojo"
                                        } hover:bg-verdes hover:text-amarillo transition-colors text-sm md:text-base lg:text-lg`}
                                    onClick={closeMenu}
                                >
                                    Sobre Ney
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/views/lab-oratoria">
                                <span
                                    className={`btn btn-ghost ${pathname === "/views/lab-oratoria"
                                        ? "bg-verdes text-amarillo"
                                        : "text-rojo"
                                        } hover:bg-verdes hover:text-amarillo transition-colors text-sm md:text-base lg:text-lg`}
                                    onClick={closeMenu}
                                >
                                    Lab Oratoria
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
