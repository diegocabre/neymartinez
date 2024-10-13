import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import { Header } from "../components/";

const poppinsFont = Poppins({
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
      <body className={poppinsFont.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
