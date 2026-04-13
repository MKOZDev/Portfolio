import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message, budget } = await req.json();

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Brak danych" }), {
        status: 400,
      });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Formularz" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_TO,
      subject: `Nowa wiadomość od ${name}`,
      html: `
        <h2>Nowa wiadomość</h2>
        <p><b>Imię:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Budżet:</b> ${budget}</p>
        <p><b>Wiadomość:</b><br/>${message}</p>
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Błąd serwera" }), {
      status: 500,
    });
  }
}
