import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, service, eventDate, city, message } = body || {};

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Transporter (SMTP)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: String(process.env.SMTP_SECURE || 'false') === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      }
    });

    const to = process.env.TO_EMAIL || 'you@highqualitydecor.com';
    const from = process.env.FROM_EMAIL || 'website@highqualitydecor.com';

    const html = `
      <h2>New Quote Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || '-'}</p>
      <p><strong>Service:</strong> ${service || '-'}</p>
      <p><strong>Event Date:</strong> ${eventDate || '-'}</p>
      <p><strong>City/State:</strong> ${city || '-'}</p>
      <p><strong>Message:</strong><br/>${(message || '').replace(/\n/g,'<br/>')}</p>
    `;

    await transporter.sendMail({
      to, from,
      subject: `New Quote Request — ${name}`,
      html
    });

    return NextResponse.json({ ok: true });
  } catch (err:any) {
    console.error(err);
    return NextResponse.json({ error: 'Email sending failed. Check SMTP settings.' }, { status: 500 });
  }
}
