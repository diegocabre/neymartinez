import Image from "next/image";

export const Logo = () => {
    return (
        <div className="flex-shrink-0">
            <Image
                src="/assets/img/logo.png"
                alt="Logo de Ney Martínez"
                width={180}  // Tamaño base 
                height={60}   // Ajuste de altura
                priority
                className="transition-all duration-300 w-[150px] sm:w-[180px] md:w-[200px] lg:w-[220px] xl:w-[240px] h-auto"
            />
        </div>
    );
};

