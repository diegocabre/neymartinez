import Link from "next/link";
import { IoLogoInstagram, IoLogoLinkedin } from "react-icons/io5";

export const Footer = () => {
  return (
    <footer className="bg-gradient-custom2 text-letras py-10 border-t-2 border-letras">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        {/* Información del sitio */}
        <div className="text-center md:text-left">
          <h4 className="text-2xl font-bold">Oratoria VIP</h4>
          <p className="text-sm text-verdes mt-2">
            &copy; {new Date().getFullYear()} Todos los derechos reservados.
          </p>
        </div>

        {/* Enlaces a redes sociales */}
        <div className="flex items-center justify-center space-x-6">
          <Link
            href="https://www.instagram.com/neydemartinez/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoInstagram
              className="text-3xl hover:text-yellow-500 transition-colors duration-300"
              aria-label="Instagram de Ney Martínez"
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/neymartinez-oratoriavip/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoLinkedin
              className="text-3xl hover:text-yellow-500 transition-colors duration-300"
              aria-label="LinkedIn de Ney Martínez"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};
