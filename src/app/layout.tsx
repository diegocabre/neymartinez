import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import { Open_Sans } from "next/font/google";
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
    <html lang="es">
      <body className={/* openSansFont.className + " " +  */poppinsFont.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
