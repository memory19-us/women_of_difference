import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message, phone, service } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Get email configuration from environment variables
    const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
    const smtpPort = parseInt(process.env.SMTP_PORT || '587');
    const smtpUser = process.env.SMTP_USER;
    const smtpPassword = process.env.SMTP_PASSWORD;
    const recipientEmail = process.env.CONTACT_EMAIL || 'info@womenofdifferencegroup.com';

    // Validate SMTP credentials are set
    if (!smtpUser || !smtpPassword) {
      console.error('SMTP credentials not configured');
      return NextResponse.json(
        { error: 'Email service not configured. Please contact the administrator.' },
        { status: 500 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465, // true for 465, false for other ports
      auth: {
        user: smtpUser,
        pass: smtpPassword,
      },
    });

    // Determine the subject line
    let emailSubject = subject || 'Contact Form Submission';
    if (subject === 'coaching') emailSubject = 'Coaching Inquiry';
    else if (subject === 'cleaning') emailSubject = 'Cleaning Services Inquiry';
    else if (subject === 'events') emailSubject = 'Events & Workshops Inquiry';
    else if (subject === 'ministries') emailSubject = 'Ministries / Donation Inquiry';
    else if (subject === 'other') emailSubject = 'General Inquiry';
    
    // Use service field if available (from common contact form)
    if (service) {
      if (service === 'coaching') emailSubject = 'Mindset Transformation Coaching Inquiry';
      else if (service === 'cleaning') emailSubject = 'Cleaning Services Inquiry';
      else if (service === 'events') emailSubject = 'Events & Empowerment Inquiry';
      else if (service === 'multiple') emailSubject = 'Multiple Services Inquiry';
    }

    // Format the email body
    let emailBody = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <h2 style="color: #3FA3A3;">New Contact Form Submission</h2>
        
        <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
          ${service ? `<p><strong>Service:</strong> ${service}</p>` : ''}
          ${subject ? `<p><strong>Subject:</strong> ${emailSubject}</p>` : ''}
        </div>
        
        <div style="margin: 20px 0;">
          <h3 style="color: #3FA3A3;">Message:</h3>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
        
        <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">
        <p style="color: #666; font-size: 12px;">
          This email was sent from the contact form on the Women of Difference website.
        </p>
      </div>
    `;

    // Send email
    const info = await transporter.sendMail({
      from: `"${name}" <${smtpUser}>`,
      replyTo: email,
      to: recipientEmail,
      subject: emailSubject,
      html: emailBody,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
${phone ? `Phone: ${phone}\n` : ''}${service ? `Service: ${service}\n` : ''}${subject ? `Subject: ${emailSubject}\n` : ''}

Message:
${message}
      `.trim(),
    });

    return NextResponse.json(
      { message: 'Email sent successfully', messageId: info.messageId },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}
