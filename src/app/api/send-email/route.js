import nodemailer from "nodemailer";
import path from "path";

export async function POST(req) {
  try {
    const { nombre, apellido, email, cedula } = await req.json();

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
        user: "academiaoratoriavip@neymartinez.com",
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
        <p>Cédula: ${cedula}</p>
      `,
    });

    // Enviar el segundo correo al usuario registrado
    await transporter.sendMail({
      from: '"Academia Oratoria VIP" <academiaoratoriavip@neymartinez.com>',
      to: email,
      subject: "Gracias por registrarte",
      html: `
      <div style="background-color: #f5f5f5; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); padding: 20px;">
        <h1 style="font-size: 24px;">Gracias por registrarte</h1>
        <p style="font-size: 18px;">Hola ${nombre} ${apellido},</p>
        <p>Aquí tienes los enlaces para realizar el pago:</p>
        <ul style="font-size: 18px; list-style: none; padding: 0;">
          <li><a href="https://paypal.me/Contupropiavoz?locale.x=es_XC">Pagar con PayPal</a></li>
          <li><a href="https://mpago.la/1na5zpM">Pagar con MercadoPago</a></li>
        </ul>
        <img src="cid:unique@image.cid" alt="imagen" style="max-width: 40%; height: auto;">
        <p style="font-size: 18px;">Gracias por elegir nuestra academia.</p>
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
    console.error("Error al enviar correos:", error.message); // Mensaje de error
    return new Response(
      JSON.stringify({ error: "Error enviando los correos" }),
      { status: 500 }
    );
  }
}
