// app/api/sendEmail/route.js
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { name, email, phone, subject, message } = await req.json();

    // Create the transporter for sending emails using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD,
      },
    });

    // Define the email options
    const mailOptions = {
      from: process.env.GMAIL_USER, // Your Gmail address
      to: process.env.GMAIL_USER, // Your Gmail address (to receive the email)
      subject: subject || 'New message from contact form',
      text: `
        Name: ${name}\n
        Email: ${email}\n
        Phone: ${phone || 'N/A'}\n
        Message: ${message}
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ error: 'Failed to send email' }), { status: 500 });
  }
}
