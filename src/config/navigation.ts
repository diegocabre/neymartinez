// src/config/navigation.ts

export interface NavLinkItem {
  href: string;
  label: string;
  external?: boolean;
}

export const NAV_LINKS: NavLinkItem[] = [
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
