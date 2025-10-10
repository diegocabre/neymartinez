// hooks/useScrollDetection.ts (se asumiría que está en su propio archivo)
import { useEffect, useState } from "react";

/**
 * Hook para detectar si la ventana ha sido scrolleada más allá de un umbral.
 * @param threshold El número de píxeles para considerar que se ha "scrolleado". Por defecto 50.
 * @returns boolean
 */
export const useScrollDetection = (threshold: number = 50) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Se usa requestAnimationFrame para optimizar el rendimiento de la lectura de scroll
      // y evitar el "thrashing" del layout.
      let ticking = false;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > threshold);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return isScrolled;
};
