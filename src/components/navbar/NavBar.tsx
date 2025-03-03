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
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-amarillo/90 backdrop-blur-md shadow-md" : "bg-amarillo"
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
                <button className="sm:hidden text-3xl" onClick={toggleMenu}>
                    ☰
                </button>

                {/* Menú */}
                <div className={`sm:flex items-center ${isOpen ? "flex" : "hidden"} sm:space-x-8`}>
                    <ul className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
                        {[
                            { href: "/views/home", label: "Home" },
                            { href: "/views/comienza-aqui", label: "Comienza aquí" },
                            { href: "https://link.chtbl.com/Oratoria_VIP", label: "Podcast", external: true },
                            { href: "/views/about", label: "Sobre Ney" },
                            { href: "/views/lab-oratoria", label: "Lab Oratoria" }
                        ].map(({ href, label, external }) => (
                            <li key={href}>
                                <Link href={href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                                    <span
                                        className={`btn btn-ghost ${pathname === href ? "bg-verdes text-amarillo" : "bg-rojo text-amarillo"
                                            } hover:bg-verdes hover:text-amarillo transition-colors text-sm md:text-base lg:text-lg`}
                                        onClick={closeMenu}
                                    >
                                        {label}
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};
