import { Resend } from 'resend';
import { NextResponse } from 'next/server';

// Inicializa Resend con tu clave API desde las variables de entorno
// Asegúrate de que RESEND_API_KEY esté definido en tu archivo .env.local
const resend = new Resend(process.env.RESEND_API_KEY);

// Define la función para manejar solicitudes POST
export async function POST(request: Request) {
  try {
    // Parsea el cuerpo de la solicitud para obtener los datos del formulario
    const { nombreCompleto, correoElectronico, telefono, mensajeCorto, tipoProyecto } = await request.json();

    // Usa Resend para enviar el correo
    const { data, error } = await resend.emails.send({
      // Reemplaza 'onboarding@resend.dev' con un email verificado en Resend si usas el plan gratuito
      // Si usas tu propio dominio verificado, puedes usar un email como info@tudominio.com
      from: 'CoderLabs Web <onboarding@resend.dev>',
      to: ['coderlabs.mx@gmail.com'], // ¡CAMBIA ESTO por tu email!
      subject: `Correo de Contacto - ${tipoProyecto}`, // Asunto del correo
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${nombreCompleto}</p>
        <p><strong>Correo:</strong> ${correoElectronico}</p>
        <p><strong>Teléfono:</strong> ${telefono}</p>
        <p><strong>Tipo de Proyecto:</strong> ${tipoProyecto}</p>
        <p><strong>Mensaje:</strong> ${mensajeCorto}</p>
      `, // Contenido del correo en HTML
    });

    // Si hay un error en el envío
    if (error) {
      console.error('Error al enviar correo con Resend:', error);
      return NextResponse.json({ error }, { status: 500 });
    }

    // Si el envío es exitoso
    console.log('Correo enviado con éxito:', data);
    return NextResponse.json({ data }, { status: 200 });

  } catch (error) {
    // Si ocurre un error general durante el procesamiento
    console.error('Error en la ruta /api/contact:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}

// Puedes añadir otras funciones (GET, PUT, DELETE) si las necesitas, pero para el formulario de contacto, POST es suficiente.
// export async function GET(request: Request) {}