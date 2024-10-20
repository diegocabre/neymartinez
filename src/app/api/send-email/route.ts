import nodemailer from "nodemailer";
import path from "path";

interface RequestBody {
  nombre: string;
  apellido: string;
  email: string;
}

export async function POST(req: Request): Promise<Response> {
  try {
    const { nombre, apellido, email }: RequestBody = await req.json();

    // Ruta de la imagen
    const imagePath = path.join(
      process.cwd(),
      "public/assets/img/IMG_0753.jpg"
    );

    // Crear el transportador de Nodemailer
    const transporter = nodemailer.createTransport({
      host: "server319.web-hosting.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Enviar el primer correo al administrador
    await transporter.sendMail({
      from: '"Academia Oratoria VIP" <academiaoratoriavip@neymartinez.com>',
      to: "academiaoratoriavip@neymartinez.com",
      subject: "Nuevo Inscrito",
      html: `
        <h1>Nuevo Inscrito</h1>
        <p>Nombre: ${nombre}</p>
        <p>Apellido: ${apellido}</p>
        <p>Email: ${email}</p>
      `,
    });

    // Enviar el segundo correo al usuario registrado
    await transporter.sendMail({
      from: '"Academia Oratoria VIP" <academiaoratoriavip@neymartinez.com>',
      to: email,
      subject: "Gracias por registrarte",
      html: `
      <div style="background-color: #f5f5f5; border-radius: 10px; padding: 20px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); max-width: 600px; margin: 0 auto;">
        <h1 style="font-size: 24px; text-align: center;">Gracias por registrarte</h1>
        <p style="font-size: 18px;">Gracias ${nombre} ${apellido},</p>
        <p style="font-size: 18px;">Por confiar en este espacio y dar el primer paso para desarrollar tu manera de comunicar con una ORATORIA VIP.</p>
        <p style="font-size: 18px;">Que agrega Valor, Inspiración y Propósito.</p>
        
        <h3 style="font-size: 18px;">Enlaces para realizar el pago:</h3>
        <ul style="list-style: none; padding: 0;">
          <li>
            <a href="https://paypal.me/Contupropiavoz?locale.x=es_XC" style="font-size: 18px; text-decoration: none;">
              🌍 Pagar con PayPal
            </a>
          </li>
          <li>
            <a href="https://mpago.la/1na5zpM" style="font-size: 18px; text-decoration: none;">
              🇦🇷 Pagar con MercadoPago
            </a>
          </li>
        </ul>

        <p style="font-size: 18px;">Una vez realizado el pago, envía el soporte a este enlace:</p>
        <a href="https://wa.me/5491140983793?text=Hola%2C%20te%20adjunto%20comprobante%20de%20pago" style="font-size: 18px; color: #007bff; text-decoration: none;">WhatsApp</a>

        <img src="cid:unique@image.cid" alt="Imagen" style="max-width: 100%; height: auto; margin-top: 20px;"/>
        <p style="font-size: 18px; text-align: center;">Gracias por elegir nuestra academia.</p>
      </div>
      `,
      attachments: [
        {
          filename: "IMG_0753.jpg",
          path: imagePath, // Ruta de la imagen
          cid: "unique@image.cid", // Identificador único para la imagen
        },
      ],
    });

    // Responder con éxito
    return new Response(
      JSON.stringify({ message: "Correos enviados exitosamente" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error al enviar correos:", error);
    return new Response(
      JSON.stringify({ error: "Error enviando los correos" }),
      { status: 500 }
    );
  }
}
