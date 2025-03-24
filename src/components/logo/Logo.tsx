import Image from "next/image";

export const Logo = () => {
    return (
        <div className="flex-shrink-0">
            <Image
                src="/assets/img/logo.png"
                alt="Logo de Ney Martínez"
                width={300}
                height={180}
                quality={100}
                priority
                sizes="(max-width: 640px) 150px, 
                       (max-width: 768px) 180px, 
                       (max-width: 1024px) 200px, 
                       (max-width: 1280px) 300px, 
                       400px"
                className="w-[150px] sm:w-[180px] md:w-[200px] lg:w-[300px] xl:w-[400px] h-auto"
            />
        </div>
    );
};


