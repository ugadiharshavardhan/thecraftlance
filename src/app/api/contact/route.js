import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { name, email, mobile, project_type, message } = await req.json();

    if (!name || !email || !mobile || !message) {
      return NextResponse.json(
        { error: 'Name, email, mobile, and message are required' },
        { status: 400 }
      );
    }

    if (!/^\d{10}$/.test(mobile)) {
      return NextResponse.json(
        { error: 'Mobile number must be exactly 10 digits' },
        { status: 400 }
      );
    }

    const protocol = req.headers.get('x-forwarded-proto') || 'http';
    const host = req.headers.get('host') || 'localhost:3000';
    const baseUrl = `${protocol}://${host}`;
    const logoUrl = `${baseUrl}/logo.png`;

    // Configure nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 1. Email to the site owner (Notification)
    const mailToOwner = {
      from: process.env.EMAIL_USER,
      to: 'thecraftlance@gmail.com', // The agency's email
      subject: `New Project Inquiry from ${name} - ${project_type}`,
      text: `
You have received a new message from your website contact form:

Name: ${name}
Email: ${email}
Mobile: ${mobile || 'N/A'}
Project Type: ${project_type}

Message:
${message}
      `,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
          <div style="text-align: center; margin-bottom: 20px; padding-bottom: 20px; border-bottom: 1px solid #eee;">
            <img src="${logoUrl}" alt="The Craft Lance Logo" style="max-height: 50px; width: auto;" />
          </div>
          <h3>New Project Inquiry</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Mobile:</strong> ${mobile || 'N/A'}</p>
          <p><strong>Project Type:</strong> ${project_type}</p>
          <p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>
        </div>
      `,
    };

    // 2. Email to the user (Auto-responder)
    const mailToUser = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: `Thank you for reaching out to The Craft Lance!`,
      text: `
Hi ${name},

Thank you for reaching out! We have received your inquiry regarding "${project_type}" and will get back to you within 24 hours.

Here is a copy of your message:
${message}

Best regards,
The Craft Lance Team
      `,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
          <div style="text-align: center; margin-bottom: 20px; padding-bottom: 20px; border-bottom: 1px solid #eee;">
            <img src="${logoUrl}" alt="The Craft Lance Logo" style="max-height: 50px; width: auto;" />
          </div>
          <h2>Thank you for reaching out!</h2>
          <p>Hi ${name},</p>
          <p>We have received your inquiry regarding <strong>${project_type}</strong> and will get back to you within 24 hours.</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          <p><strong>Your message:</strong></p>
          <p style="background: #f9f9f9; padding: 15px; border-radius: 5px;">${message.replace(/\n/g, '<br/>')}</p>
          <br/>
          <p>Best regards,<br/><strong>The Craft Lance Team</strong></p>
        </div>
      `,
    };

    // Send emails
    await transporter.sendMail(mailToOwner);
    await transporter.sendMail(mailToUser);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}
