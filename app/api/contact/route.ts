import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    // ── Option A: Resend (recommended) ──────────────────────────────────
    // 1. npm install resend
    // 2. Set RESEND_API_KEY in your Vercel environment variables
    // 3. Uncomment the block below:
    //
    import { Resend } from "resend";
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: "portfolio@yourdomain.com",
      to: "sidmishra2004@gmail.com",
      subject: `Portfolio contact from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    });

    // ── Option B: Formspree ──────────────────────────────────────────────
    // Replace your form action with https://formspree.io/f/YOUR_ID
    // No API route needed at all.

    // ── Placeholder response (remove once you wire up a provider) ────────
    console.log("Contact form submission:", { name, email, message });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
