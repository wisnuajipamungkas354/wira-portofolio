// app/api/contact/route.ts
export async function POST(req: Request) {
  try {
    const { name, email, message } = (await req.json()) as {
      name: string;
      email: string;
      message: string;
    };

    // For now, just log the contact form submission
    console.log('Contact form submission:', { name, email, message });

    // Return success response
    return Response.json({
      ok: true,
      message: 'Thank you for your message! I will get back to you soon.',
    });
  } catch (e: any) {
    return new Response(
      JSON.stringify({ ok: false, error: e?.message ?? 'Unknown error' }),
      { status: 400 }
    );
  }
}
