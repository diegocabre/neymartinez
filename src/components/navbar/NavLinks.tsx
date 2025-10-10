import { motion } from "framer-motion";
import Link from "next/link";
import React from "react"; // Siempre se recomienda importar React

// 1. Definición de tipos
interface NavLinkItem {
  href: string;
  label: string;
  external?: boolean;
}

// 2. Lista de enlaces (Ahora definida aquí)
const NAV_LINKS: NavLinkItem[] = [
  { href: "/views/home", label: "Home" },
  { href: "/views/comienza-aqui", label: "Comienza aquí" },
  {
    href: "https://link.chtbl.com/Oratoria_VIP",
    label: "Podcast",
    external: true,
  },
  { href: "/views/about", label: "Sobre Ney" },
  { href: "/views/lab-oratoria", label: "Lab Oratoria" },
];

// src/components/NavBar/NavLinks.tsx
interface NavLinksProps {
  pathname: string;
  closeMenu: () => void;
}

export const NavLinks: React.FC<NavLinksProps> = ({ pathname, closeMenu }) => {
  return (
    <ul className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
      {NAV_LINKS.map(({ href, label, external }, index) => (
        <motion.li
          key={href}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 }}
        >
          <Link
            href={href}
            {...(external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            onClick={closeMenu}
          >
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-md transition-colors font-medium text-sm md:text-base ${
                pathname === href
                  ? "bg-rojo text-amarillo shadow-inner"
                  : "text-rojo hover:bg-rojo/10"
              } `}
            >
              {label}
            </motion.span>
          </Link>
        </motion.li>
      ))}
    </ul>
  );
};
