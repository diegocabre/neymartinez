import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";  // ✅ Usa la instancia global
import nodemailer from "nodemailer";
import path from "path";
import fs from "fs";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { email } = body;

        if (!email || !email.includes("@")) {
            return NextResponse.json({ message: "Email inválido" }, { status: 400 });
        }

        // ✅ Guardar en la base de datos
        await prisma.email.create({
            data: { email },
        });

        // ✅ Configuración de Nodemailer
        const transporter = nodemailer.createTransport({
            host: "server319.web-hosting.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // ✅ Obtener URLs de los archivos PDF en lugar de leer desde el servidor
        const pdf1Url = `${process.env.NEXT_PUBLIC_SITE_URL}/static/doc/DesafioOratoria.pdf`;
        const pdf2Url = `${process.env.NEXT_PUBLIC_SITE_URL}/static/doc/MetasHabitosResultados.pdf`;

        // ✅ Configurar el Email con links en lugar de adjuntar archivos
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: "Tu E-Book Ruta al Logro 📘",
            text: `Gracias por registrarte. Aquí tienes los documentos en PDF adjuntos.\n\n📎 Desafío Oratoria: ${pdf1Url}\n📎 Metas, Hábitos y Resultados: ${pdf2Url}`,
        };

        // ✅ Enviar el email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: "Gracias por tu registro. Revisa tu correo." }, { status: 200 });
    } catch (error) {
        console.error("Error enviando el email:", error);
        return NextResponse.json({ message: "Error interno del servidor" }, { status: 500 });
    }
}
