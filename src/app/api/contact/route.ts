export const runtime = "edge";

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { firstName, email, company, roleToHire, message } = body;

    // Basic validation
    if (
      !firstName ||
      !email ||
      !company ||
      !roleToHire ||
      !message ||
      !/^[\w.%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/.test(email)
    ) {
      return NextResponse.json(
        { error: "Invalid input", message: "Please check your details." },
        { status: 400 }
      );
    }

    // Construct admin mail HTML
    const htmlBody = `
    <div style="font-family: Arial, sans-serif; color: #333; padding: 20px; max-width: 600px; border: 1px solid #ddd; border-radius: 8px;">
      <h2 style="color: #2D89EF; text-align: center;">New Contact Form Submission - Hunting Skaud</h2>
      <table style="width:100%; border-collapse: collapse; margin-top: 20px;">
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Name:</strong></td>
          <td style="padding: 10px; border-bottom: 1px solid #ddd;">${firstName}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Email:</strong></td>
          <td style="padding: 10px; border-bottom: 1px solid #ddd;">${email}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Company:</strong></td>
          <td style="padding: 10px; border-bottom: 1px solid #ddd;">${company}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Role to Hire:</strong></td>
          <td style="padding: 10px; border-bottom: 1px solid #ddd;">${roleToHire}</td>
        </tr>
        <tr>
          <td style="padding: 10px;"><strong>Message:</strong></td>
          <td style="padding: 10px;">${message}</td>
        </tr>
      </table>
      <p style="margin-top: 20px; text-align: center;">
        Submitted via <a href="https://huntingdkaud.com" style="color: #2D89EF; text-decoration: none;">Hunting Skaud</a>
      </p>
    </div>
    `;

    const AUTH_KEY = process.env.ZOHO_API_KEY; 

    if (!AUTH_KEY) {
      throw new Error("Missing ZeptoMail API Key in environment variables");
    }

    // Prepare ZeptoMail payload for admin
    const payload = {
      from: { address: "noreply@huntingskaud.com" },
      to: [{ email_address: { address: "info@huntingskaud.com", name: "Hunting SkaudTeam" } }],
      subject: "New Contact Form Submission - Hunting Skaud",
      htmlbody: htmlBody,
    };

    // Send email to admin
    const adminResponse = await fetch("https://api.zeptomail.in/v1.1/email", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: AUTH_KEY,
      },
      body: JSON.stringify(payload),
    });

    const adminData = await adminResponse.json();
    if (!adminResponse.ok) {
      throw new Error(adminData.message || "Failed to send admin email");
    }

    // Confirmation email HTML to user
    const userHtmlBody = `
    <div style="font-family: Arial, sans-serif; color: #333; padding: 20px; max-width: 600px; border: 1px solid #ddd; border-radius: 8px;">
      <h2 style="color: #2D89EF; text-align: center;">Thank You for Contacting Hunting Skaud!</h2>
      <p style="text-align: center;">Dear ${firstName},</p>
      <p>We appreciate you reaching out to us. Our team will review your message and get back to you as soon as possible.</p>
      <h3 style="border-bottom: 2px solid #ddd; padding-bottom: 10px;">Here's a copy of your submission:</h3>
      <table style="width:100%; border-collapse: collapse; margin-top: 20px;">
        <tr><td style="padding: 10px;"><strong>Name:</strong></td><td style="padding: 10px;">${firstName}</td></tr>
        <tr><td style="padding: 10px;"><strong>Email:</strong></td><td style="padding: 10px;">${email}</td></tr>
        <tr><td style="padding: 10px;"><strong>Company:</strong></td><td style="padding: 10px;">${company}</td></tr>
        <tr><td style="padding: 10px;"><strong>Role to Hire:</strong></td><td style="padding: 10px;">${roleToHire}</td></tr>
        <tr><td style="padding: 10px;"><strong>Message:</strong></td><td style="padding: 10px;">${message}</td></tr>
      </table>
      <p style="margin-top: 20px; text-align: center;">
        Best Regards,<br/><strong>Hunting Skaud Team</strong><br/>
        <a href="https://huntingskaud.com" style="color: #2D89EF; text-decoration: none;">Hunting Skaud</a>
      </p>
    </div>
    `;

    // Send confirmation email to user
    const userPayload = {
      from: { address: "noreply@huntingskaud.com" },
      to: [{ email_address: { address: email, name: firstName } }],
      subject: "Thank You for Contacting Hunting Skaud!",
      htmlbody: userHtmlBody,
    };

    await fetch("https://api.zeptomail.in/v1.1/email", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: AUTH_KEY,
      },
      body: JSON.stringify(userPayload),
    });

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ error: "Failed to send email", message }, { status: 500 });
  }
}
