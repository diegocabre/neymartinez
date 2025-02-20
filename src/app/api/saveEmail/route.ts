import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import nodemailer from "nodemailer";
import path from "path";
import fs from "fs";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { email, source } = body;

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

        // 🔹 Lógica para adjuntar los PDF y mensajes personalizados
        let mailOptions;

        switch (source) {
            case "comienza-aqui":
                mailOptions = {
                    from: process.env.EMAIL_USER,
                    to: email,
                    subject: "🎁 Tu E-Book: Metas, Hábitos y Resultados 📘 + Regalo Especial 🎀",
                    text: `¡Gracias por registrarte! 🎉\n\nAquí tienes tu ebook solicitado:\n📎 Metas, Hábitos y Resultados.\n\n🎁 Como regalo especial, también te enviamos el ebook "Desafío Oratoria". ¡Esperamos que lo disfrutes!`,
                    attachments: [
                        {
                            filename: "MetasHabitosResultados.pdf",
                            path: pdfMetasPath,
                            contentType: "application/pdf"
                        },
                        {
                            filename: "DesafioOratoria.pdf",
                            path: pdfOratoriaPath,
                            contentType: "application/pdf"
                        }
                    ]
                };
                break;

            case "lab-oratoria":
                mailOptions = {
                    from: process.env.EMAIL_USER,
                    to: email,
                    subject: "🎁 Tu E-Book: Desafío Oratoria 🎤 + Regalo Especial 🎀",
                    text: `¡Gracias por registrarte! 🎉\n\nAquí tienes tu ebook solicitado:\n📎 Desafío Oratoria.\n\n🎁 Como regalo especial, también te enviamos el ebook "Metas, Hábitos y Resultados". ¡Esperamos que lo disfrutes!`,
                    attachments: [
                        {
                            filename: "DesafioOratoria.pdf",
                            path: pdfOratoriaPath,
                            contentType: "application/pdf"
                        },
                        {
                            filename: "MetasHabitosResultados.pdf",
                            path: pdfMetasPath,
                            contentType: "application/pdf"
                        }
                    ]
                };
                break;

            default:
                // ✅ Si no hay `source`, enviamos ambos como recurso por defecto
                mailOptions = {
                    from: process.env.EMAIL_USER,
                    to: email,
                    subject: "🎁 Tu E-Books Gratuitos 📘",
                    text: `¡Gracias por registrarte! 🎉\n\nAquí te enviamos dos ebooks gratuitos para tu crecimiento:\n📎 Metas, Hábitos y Resultados.\n📎 Desafío Oratoria.\n\n¡Esperamos que te sean de gran ayuda!`,
                    attachments: [
                        {
                            filename: "DesafioOratoria.pdf",
                            path: pdfOratoriaPath,
                            contentType: "application/pdf"
                        },
                        {
                            filename: "MetasHabitosResultados.pdf",
                            path: pdfMetasPath,
                            contentType: "application/pdf"
                        }
                    ]
                };
                break;
        }

        // ✅ Enviar el email con los PDF adjuntos
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: `Email enviado con éxito desde la página: ${source || "predeterminada"}` }, { status: 200 });

    } catch (error) {
        console.error("Error enviando el email:", error);
        return NextResponse.json({ message: "Error interno del servidor" }, { status: 500 });
    }
}
