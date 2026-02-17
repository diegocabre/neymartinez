import type { Metadata } from "next";
// Asegúrate de usar alias de ruta si lo configuras
import { Footer, NavBar } from "@/components";
import { Open_Sans, Poppins } from "next/font/google";
import "./globals.css";

// 1. Solo importar la fuente principal que se usará en el body
const openSansFont = Open_Sans({
  weight: ["400", "600", "800"],
  subsets: ["latin"],
  // 2. Definir una variable CSS para la fuente principal
  variable: "--font-sans",
});

// 3. (Opcional) Exportar la fuente secundaria como variable para Tailwind
const poppinsFont = Poppins({
  weight: ["400", "600", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Neydemar Martinez - Oratoria",
  description:
    "Descubre cómo puedo ayudarte a alcanzar tus metas y comunicar con autenticidad.",
  metadataBase: new URL("https://neymartinez.com"),
  keywords: [
    "Oratoria",
    "Neydemar Martinez",
    "Comunicación",
    "Liderazgo",
    "Coaching",
    "Podcast",
  ],
  authors: [{ name: "Neydemar Martinez" }],
  openGraph: {
    title: "Neydemar Martinez - Oratoria",
    description:
      "Descubre cómo puedo ayudarte a alcanzar tus metas y comunicar con autenticidad.",
    url: "https://neymartinez.com",
    siteName: "Neydemar Martinez",
    images: [
      {
        url: "/assets/img/portada2.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neydemar Martinez - Oratoria",
    description:
      "Descubre cómo puedo ayudarte a alcanzar tus metas y comunicar con autenticidad.",
    images: ["/assets/img/portada2.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // 4. Simplificar clases en <html>, añadir variables de fuente
    <html
      lang="es"
      className={`${openSansFont.variable} ${poppinsFont.variable}`}
    >
      {/* 5. Aplicar solo la clase de la fuente principal y eliminar clases conflictivas/redundantes */}
      <body
        className={`${openSansFont.className} h-full min-h-screen flex flex-col`}
      >
        <NavBar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
