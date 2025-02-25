import type { Metadata } from "next";
import "./globals.css";
import { Poppins, Open_Sans } from "next/font/google";
import { Footer, NavBar } from "../components/";

const poppinsFont = Poppins({
  weight: ["400", "600", "800"],
  subsets: ["latin"],
});

const openSansFont = Open_Sans({
  weight: ["400", "600", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Neydemar Martinez - Oratoria",
  description: "Oratoria",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full w-full overflow-x-hidden">
      <body className={`${openSansFont.className} ${poppinsFont.className} h-full min-h-screen flex flex-col overflow-x-hidden`}>
        <NavBar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
