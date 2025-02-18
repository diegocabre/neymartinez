import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import nodemailer from "nodemailer";
import path from "path";
import fs from "fs";

const prisma = new PrismaClient();

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { email } = body;

        if (!email || !email.includes("@")) {
            return NextResponse.json({ message: "Email inválido" }, { status: 400 });
        }

        // Guardar en la base de datos
        const newEmail = await prisma.email.create({
            data: { email },
        });

        // **Configuración de Nodemailer**
        const transporter = nodemailer.createTransport({
            host: "server319.web-hosting.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL_USER, // Usa variables de entorno
                pass: process.env.EMAIL_PASS,
            },
        });

        // **Obtener rutas de los archivos PDF**
        const pdf1Path = path.join(process.cwd(), "public/assets/doc/DesafioOratoria.pdf");
        const pdf2Path = path.join(process.cwd(), "public/assets/doc/MetasHabitosResultados.pdf");

        // **Leer archivos**
        const pdf1 = fs.readFileSync(pdf1Path);
        const pdf2 = fs.readFileSync(pdf2Path);

        // **Configurar el Email**
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: "Tu E-Book Ruta al Logro 📘",
            text: "Gracias por registrarte. Aquí tienes los documentos en PDF adjuntos.",
            attachments: [
                {
                    filename: "DesafioOratoria.pdf",
                    content: pdf1,
                    encoding: "base64",
                },
                {
                    filename: "MetasHabitosResultados.pdf",
                    content: pdf2,
                    encoding: "base64",
                },
            ],
        };

        // **Enviar el email**
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: "Gracias por tu registro" }, { status: 200 });
    } catch (error) {
        console.error("Error enviando el email:", error);
        return NextResponse.json({ message: "Error interno del servidor" }, { status: 500 });
    }
}

