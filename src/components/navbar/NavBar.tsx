// src/components/NavBar/NavBar.tsx
"use client";

import { useScrollDetection } from "@/hooks/useScrollDetection";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "../logo/Logo";
import { HamburgerButton } from "./HamburgerButton";
import { MobileMenu } from "./MobileMenu";
import { NavLinks } from "./NavLinks";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isScrolled = useScrollDetection(50);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    closeMenu();
  }, [pathname]);

  // CLASES DE LA BARRA EXTERNA (AQUÍ SE APLICA LA LÍNEA DINÁMICA)
  const navbarClasses = `
        sticky top-0 z-50 transition-all duration-300 
        ${
          isScrolled
            ? // CUANDO HAY SCROLL: Fondo semitransparente, sombra Y el borde rojo de 2px.
              "bg-amarillo/90 backdrop-blur-sm shadow-lg border-b-2 border-rojo"
            : // SIN SCROLL: Fondo opaco Y un borde invisible (color del fondo, 1px).
              "bg-amarillo border-b border-amarillo"
        }
    `;

  // CLASES DEL CONTENEDOR INTERNO (SIMPLIFICADO, SIN BORDES)
  const innerContainerClasses = `
        flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 relative 
        transition-all duration-300 
    `;

  return (
    // El borde se aplica a este <div> para que quede sobre la sombra.
    <div className={navbarClasses}>
      <div className={innerContainerClasses}>
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center justify-start"
        >
          <Link
            href="/views/home"
            onClick={closeMenu}
            aria-label="Ir a la página de inicio"
          >
            <Logo />
          </Link>
        </motion.div>

        {/* Botón hamburguesa */}
        <HamburgerButton isOpen={isOpen} toggleMenu={toggleMenu} />

        {/* Menú en pantallas grandes */}
        <nav
          className="hidden sm:flex items-center space-x-6"
          aria-label="Navegación principal"
        >
          <NavLinks pathname={pathname} closeMenu={closeMenu} />
        </nav>

        {/* Menú desplegable en móviles */}
        <AnimatePresence>
          {isOpen && <MobileMenu pathname={pathname} closeMenu={closeMenu} />}
        </AnimatePresence>
      </div>
    </div>
  );
};
