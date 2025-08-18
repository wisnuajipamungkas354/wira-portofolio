// app/api/contact/route.ts
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message, services } = (await req.json()) as {
      name: string;
      email: string;
      message: string;
      services?: string[];
    };

    const html = `
      <h2>New Contact</h2>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Services:</b> ${(services ?? []).join(", ")}</p>
      <p><b>Message:</b><br/>${(message ?? "").replace(/\n/g, "<br/>")}</p>
    `;

    // ⬇️ Resend returns { data, error }
    const { data, error } = await resend.emails.send({
      from: "Contact <contact@your-domain.com>",
      to: process.env.CONTACT_TO!, // Gmail tujuan
      subject: `New inquiry from ${name}`,
      replyTo: email, // ✅ camelCase
      html,
    });

    if (error) {
      // error is a ResendError with .message
      return new Response(JSON.stringify({ ok: false, error: error.message }), {
        status: 400,
      });
    }

    // data?.id is the message id
    return Response.json({ ok: true, id: data?.id });
  } catch (e: any) {
    return new Response(
      JSON.stringify({ ok: false, error: e?.message ?? "Unknown error" }),
      { status: 400 }
    );
  }
}
