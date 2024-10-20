import nodemailer from "nodemailer";
import { NextApiRequest, NextApiResponse } from "next"; // Importa los tipos

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Crear el transportador de Nodemailer
    const transporter = nodemailer.createTransport({
      host: "server319.web-hosting.com", // El servidor SMTP de Namecheap
      port: 465, // Puerto SMTP seguro
      secure: true, // Usar SSL/TLS
      auth: {
        user: process.env.EMAIL_USER, // Usuario de tu correo (debe estar configurado en Vercel)
        pass: process.env.EMAIL_PASS, // Contraseña de tu correo (debe estar configurado en Vercel)
      },
      connectionTimeout: 10000, // Tiempo de espera de conexión en milisegundos
    });

    // Probar la conexión al servidor SMTP
    await transporter.verify(function (error) {
      if (error) {
        console.log("Error de conexión:", error);
        res.status(500).json({ message: "No se pudo conectar al servidor SMTP", error });
      } else {
        console.log("Conexión exitosa al servidor SMTP");
        res.status(200).json({ message: "Conexión exitosa al servidor SMTP" });
      }
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Error al intentar conectar al servidor SMTP" });
  }
}
