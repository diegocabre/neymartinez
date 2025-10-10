import { motion } from "framer-motion";
import { NavLinks } from "./NavLinks";

// src/components/NavBar/MobileMenu.tsx
interface MobileMenuProps {
  pathname: string;
  closeMenu: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  pathname,
  closeMenu,
}) => (
  <motion.nav
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.2 }}
    className="absolute top-full left-0 right-0 bg-amarillo shadow-lg flex flex-col items-stretch py-4 px-4 sm:hidden"
    aria-label="Navegación móvil"
  >
    {/* Aquí se asegura que los enlaces ocupen todo el ancho con items-stretch */}
    <NavLinks pathname={pathname} closeMenu={closeMenu} />
  </motion.nav>
);
