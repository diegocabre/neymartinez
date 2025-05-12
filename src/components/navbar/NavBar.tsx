"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "../logo/Logo";
import { motion, AnimatePresence } from "framer-motion";

export const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    // Detectar si la página está scrolleada
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Cerrar menú cuando se cambia de página
    useEffect(() => {
        closeMenu();
    }, [pathname]);

    return (
        <motion.div 
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
            className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-amarillo/90 backdrop-blur-md shadow-lg" : "bg-amarillo"}`}
        >
            <div className="flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 relative">
                {/* Logo */}
                <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center justify-start"
                >
                    <Logo />
                </motion.div>

                {/* Botón hamburguesa */}
                <motion.button 
                    whileTap={{ scale: 0.95 }}
                    className="sm:hidden text-3xl" 
                    onClick={toggleMenu}
                >
                    ☰
                </motion.button>

                {/* Menú en pantallas grandes */}
                <div className="hidden sm:flex items-center space-x-6">
                    <NavLinks pathname={pathname} closeMenu={closeMenu} />
                </div>

                {/* Menú desplegable en móviles */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div 
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 right-0 bg-amarillo shadow-md flex flex-col items-start sm:items-center space-y-2 py-4 px-4"
                        >
                            <NavLinks pathname={pathname} closeMenu={closeMenu} />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
};

const NavLinks = ({ pathname, closeMenu }: { pathname: string; closeMenu: () => void }) => {
    return (
        <ul className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
            {[
                { href: "/views/home", label: "Home" },
                { href: "/views/comienza-aqui", label: "Comienza aquí" },
                { href: "https://link.chtbl.com/Oratoria_VIP", label: "Podcast", external: true },
                { href: "/views/about", label: "Sobre Ney" },
                { href: "/views/lab-oratoria", label: "Lab Oratoria" }
            ].map(({ href, label, external }, index) => (
                <motion.li 
                    key={href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                >
                    <Link href={href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                        <motion.span
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`px-4 py-2 rounded-md transition-colors text-sm md:text-base lg:text-lg ${
                                pathname === href ? "bg-verdes text-amarillo" : "bg-rojo text-amarillo"
                            } hover:bg-verdes hover:text-amarillo`}
                            onClick={closeMenu}
                        >
                            {label}
                        </motion.span>
                    </Link>
                </motion.li>
            ))}
        </ul>
    );
};
