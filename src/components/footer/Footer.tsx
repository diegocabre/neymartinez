import Link from "next/link";
import { IoLogoInstagram, IoLogoLinkedin } from "react-icons/io5";

export const Footer = () => {
  return (
    <footer className="bg-gradient-custom text-white py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        {/* Información del sitio */}
        <div className="text-center md:text-left">
          <h4 className="text-2xl font-bold">Oratoria VIP</h4>
          <p className="text-sm text-gray-400 mt-2">
            &copy; {new Date().getFullYear()} Todos los derechos reservados.
          </p>
        </div>

        {/* Enlaces a redes sociales */}
        <div className="flex items-center justify-center space-x-6">
          <Link href="https://www.instagram.com/neydemartinez/" target="_blank">
            <IoLogoInstagram className="text-3xl hover:text-yellow-500 transition-colors duration-300" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/neymartinez-oratoriavip/"
            target="_blank"
          >
            <IoLogoLinkedin className="text-3xl hover:text-yellow-500 transition-colors duration-300" />
          </Link>
        </div>
      </div>
    </footer>
  );
};
