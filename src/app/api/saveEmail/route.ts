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
        const pdfMetasPath = path.join(process.cwd(), "public/static/doc/Rutaallogro.pdf");

        // 🔹 Verificar que los archivos existan
        if (!fs.existsSync(pdfOratoriaPath) || !fs.existsSync(pdfMetasPath)) {
            return NextResponse.json({ message: "Uno de los archivos PDF no existe." }, { status: 500 });
        }

        // 🔹 Mensaje de correo formateado como en la imagen
        const emailContent = `
            <div style="font-family: Arial, sans-serif; color: #333; padding: 20px; line-height: 1.6;">
                <h1 style="color: #000;">¡<strong>Gracias por registrarte!</strong></h1>
                <p>
                    Soy <strong>Ney Martínez</strong> y te acompaño a trazar tu <strong><em>Ruta al Logro</em></strong>,
                    un camino para alcanzar tus <strong>metas</strong> pasando desde la claridad a la acción, desarrollando habilidades y métodos para crear
                    <strong>hábitos</strong> de forma sostenible, acorde con tu ritmo de vida que te aseguren hacer cada día eso que te acerca a tu
                    <strong><em>propósito</em></strong>.
                </p>
                <p>
                    Y si tu <em><strong>propósito</strong></em> está alineado con <strong>comunicar</strong>, compartir tu historia, tus mensajes, dejar un legado y darte a conocer,
                    tengo todas las herramientas para trabajar la habilidad de comunicar, porque <em><strong>todos tenemos algo para decir</strong></em>.
                </p>

                <h2 style="margin-top: 20px;">Acá tienes:</h2>
                <p>
    Tu E-Book <strong>&quot;Ruta al Logro&quot;</strong> con el cual podrás crear tu plan de metas trazando una ruta de hábitos y acciones que te permitan alcanzarlas
    + Tu E-Book <strong>&quot;Desafíos para tu Oratoria&quot;</strong>, una guía práctica para desarrollar tu habilidad de <em>hablar con autenticidad</em>.
</p>


                <p><strong>¡Espero que sean de muchísima utilidad!</strong></p>
            </div>
        `;

        // 🔹 Lógica para adjuntar los PDF y mensajes personalizados
        let mailOptions;

        switch (source) {
            case "comienza-aqui":
                mailOptions = {
                    from: process.env.EMAIL_USER,
                    to: email,
                    subject: "🎁 Tu E-Book: Ruta al logro 🎯 + Regalo Especial 🎤",
                    html: emailContent,
                    attachments: [
                        {
                            filename: "Rutaallogro.pdf",
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
                    subject: "🎁 Tu E-Book: Desafío Oratoria 🎤 + Regalo Especial 🎯",
                    html: emailContent,
                    attachments: [
                        {
                            filename: "DesafioOratoria.pdf",
                            path: pdfOratoriaPath,
                            contentType: "application/pdf"
                        },
                        {
                            filename: "Rutaallogro.pdf",
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
                    html: emailContent,
                    attachments: [
                        {
                            filename: "DesafioOratoria.pdf",
                            path: pdfOratoriaPath,
                            contentType: "application/pdf"
                        },
                        {
                            filename: "Rutaallogro.pdf",
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
