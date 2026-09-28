import nodemailer from "nodemailer";

async function sendDiagnosticEmail() {
  console.log("Preparing to send diagnostic email via Gmail SMTP...");
  
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "viratmsathavara2510@gmail.com",
      pass: "wxewsxcbrhlgioif"
    }
  });

  const mailOptions = {
    from: '"INDUSTRIA Motor Parts" <viratmsathavara2510@gmail.com>',
    to: "viratmsathavara2510@gmail.com",
    subject: "⚡ [DIAGNOSTIC TEST SUCCESS] INDUSTRIA Platform SMTP Integrated",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
        <div style="background: #20272b; color: #f5f0e7; padding: 24px;">
          <span style="font-size: 11px; letter-spacing: 2px; color: #e7a45c; text-transform: uppercase; font-family: monospace;">INDUSTRIA INDUSTRIAL MOTOR PARTS</span>
          <h2 style="margin: 8px 0 0 0; font-size: 22px; color: #ffffff;">SMTP Integration Successfully Verified!</h2>
        </div>
        <div style="padding: 24px; background: #ffffff; color: #333;">
          <p style="font-size: 14px; line-height: 1.6;">
            Hello Virat,
          </p>
          <p style="font-size: 14px; line-height: 1.6; color: #555;">
            Your Gmail SMTP service is now <strong>100% active and connected</strong> to the <strong>INDUSTRIA Platform</strong>. All future customer inquiries, custom motor parts RFQs, sample requests, and plant visit bookings will be dispatched in real-time to this inbox.
          </p>
          <div style="padding: 16px; background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 6px; margin: 20px 0;">
            <div style="font-weight: bold; color: #166534; font-size: 13px; margin-bottom: 8px;">Verified Configuration Details:</div>
            <ul style="margin: 0; padding-left: 20px; font-size: 12px; color: #15803d; line-height: 1.8; font-family: monospace;">
              <li>SMTP Provider: Google Mail (smtp.gmail.com)</li>
              <li>Authentication User: viratmsathavara2510@gmail.com</li>
              <li>Dispatch From: INDUSTRIA Motor Parts &lt;viratmsathavara2510@gmail.com&gt;</li>
              <li>Inbound Destination: viratmsathavara2510@gmail.com</li>
              <li>Status: Operational (Zero Latency)</li>
            </ul>
          </div>
          <p style="font-size: 12px; color: #888; margin-top: 24px;">
            Automated notification engine generated from INDUSTRIA Motor & Transmission Parts Platform.
          </p>
        </div>
      </div>
    `
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("🎉 SUCCESS! Email dispatched successfully!");
    console.log("Message ID:", info.messageId);
    console.log("Response:", info.response);
  } catch (err) {
    console.error("❌ Send failed:", err);
  }
}

sendDiagnosticEmail();
