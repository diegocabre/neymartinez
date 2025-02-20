import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import nodemailer from "nodemailer";
import path from "path";
import fs from "fs";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { email, source } = body;  // 🔹 `source` es opcional

        if (!email || !email.includes("@")) {
            return NextResponse.json({ message: "Email inválido" }, { status: 400 });
        }

        // ✅ Guardar el email en la base de datos
        await prisma.email.create({
            data: { email },
        });

        // ✅ Configurar transporte de Nodemailer
        const transporter = nodemailer.createTransport({
            host: "server319.web-hosting.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // ✅ Rutas de los archivos PDF en el servidor
        const pdfOratoriaPath = path.join(process.cwd(), "public/static/doc/DesafioOratoria.pdf");
        const pdfMetasPath = path.join(process.cwd(), "public/static/doc/MetasHabitosResultados.pdf");

        // 🔹 Verificar que los archivos existan
        if (!fs.existsSync(pdfOratoriaPath) || !fs.existsSync(pdfMetasPath)) {
            return NextResponse.json({ message: "Uno de los archivos PDF no existe." }, { status: 500 });
        }

        // 🔹 Lógica para adjuntar el PDF según `source`
        let mailOptions;

        switch (source) {
            case "comienza-aqui":
                mailOptions = {
                    from: process.env.EMAIL_USER,
                    to: email,
                    subject: "Tu E-Book: Metas, Hábitos y Resultados 📘",
                    text: "Gracias por registrarte. Aquí tienes el ebook solicitado.",
                    attachments: [
                        {
                            filename: "MetasHabitosResultados.pdf",
                            path: pdfMetasPath,
                            contentType: "application/pdf"
                        }
                    ]
                };
                break;

            case "lab-oratoria":
                mailOptions = {
                    from: process.env.EMAIL_USER,
                    to: email,
                    subject: "Tu E-Book: Desafío Oratoria 🎤",
                    text: "Gracias por registrarte. Aquí tienes el ebook solicitado.",
                    attachments: [
                        {
                            filename: "DesafioOratoria.pdf",
                            path: pdfOratoriaPath,
                            contentType: "application/pdf"
                        }
                    ]
                };
                break;

            default:
                // ✅ Si no hay `source`, enviamos el PDF de Desafío Oratoria por defecto
                mailOptions = {
                    from: process.env.EMAIL_USER,
                    to: email,
                    subject: "Tu E-Book: Recurso Digital 📘",
                    text: "Gracias por registrarte. Aquí tienes un recurso gratuito para ti.",
                    attachments: [
                        {
                            filename: "DesafioOratoria.pdf",
                            path: pdfOratoriaPath,
                            contentType: "application/pdf"
                        }
                    ]
                };
                break;
        }

        // ✅ Enviar el email con el PDF adjunto
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: `Email enviado con éxito desde la página: ${source || "predeterminada"}` }, { status: 200 });

    } catch (error) {
        console.error("Error enviando el email:", error);
        return NextResponse.json({ message: "Error interno del servidor" }, { status: 500 });
    }
}
