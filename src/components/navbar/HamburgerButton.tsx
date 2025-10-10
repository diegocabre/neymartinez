import { motion } from "framer-motion";

// src/components/NavBar/HamburgerButton.tsx
interface HamburgerButtonProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

export const HamburgerButton: React.FC<HamburgerButtonProps> = ({
  isOpen,
  toggleMenu,
}) => (
  <motion.button
    whileTap={{ scale: 0.95 }}
    className="sm:hidden text-3xl p-2 rounded-md hover:bg-rojo/10 transition-colors" // Añadir hover/padding
    onClick={toggleMenu}
    aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
    aria-expanded={isOpen}
    // Si el menú tiene un ID, se puede usar aria-controls
  >
    {/* Usar un icono SVG real o una librería (como Heroicons) es mejor, 
            pero manteniendo el original para el ejemplo: */}
    {isOpen ? "✕" : "☰"}
  </motion.button>
);
