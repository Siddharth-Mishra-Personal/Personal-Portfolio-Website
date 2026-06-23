import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend"; // ✅ Fixed: Moved to the very top

// Initialize Resend outside the request handler
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    // Send the email using Resend's default sandbox domain
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "sidmishra2004@gmail.com",
      subject: `Portfolio contact from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("API Route Error:", err);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}