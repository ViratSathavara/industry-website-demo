import nodemailer from "nodemailer";

export interface SmtpConfig {
  host: string;
  port: number;
  secure: boolean;
  user: string;
  pass: string;
  from: string;
  to: string;
}

export function getSmtpConfig(): SmtpConfig {
  const host = process.env.SMTP_HOST || "smtp.gmail.com";
  const port = parseInt(process.env.SMTP_PORT || "587", 10);
  const secure = process.env.SMTP_SECURE === "true" || port === 465;
  const user = process.env.SMTP_USER || "";
  const pass = process.env.SMTP_PASS || "";
  const rawFrom = process.env.SMTP_FROM?.trim();
  const from = (rawFrom && rawFrom.length > 0)
    ? rawFrom
    : `"INDUSTRIA Motor Parts" <${user || "viratmsathavara2510@gmail.com"}>`;
  const to = process.env.SMTP_TO || user || "viratmsathavara2510@gmail.com";

  return { host, port, secure, user, pass, from, to };
}

export function createTransporter(config?: SmtpConfig) {
  const cfg = config || getSmtpConfig();
  if (!cfg.user || !cfg.pass) {
    return null;
  }

  // Automatic optimization for Gmail SMTP service
  if (cfg.host && cfg.host.toLowerCase().includes("gmail")) {
    return nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: cfg.user,
        pass: cfg.pass
      },
      tls: {
        rejectUnauthorized: false
      }
    });
  }

  if (!cfg.host) {
    return null;
  }

  return nodemailer.createTransport({
    host: cfg.host,
    port: cfg.port,
    secure: cfg.secure,
    auth: {
      user: cfg.user,
      pass: cfg.pass
    },
    tls: {
      rejectUnauthorized: false
    }
  });
}

export async function verifySmtpConnection(customConfig?: SmtpConfig): Promise<{ success: boolean; message: string }> {
  const cfg = customConfig || getSmtpConfig();

  if (!cfg.host || !cfg.user || !cfg.pass) {
    return {
      success: false,
      message: "Missing SMTP configuration. Please set SMTP_HOST, SMTP_PORT, SMTP_USER, and SMTP_PASS."
    };
  }

  try {
    const transporter = createTransporter(cfg);
    if (!transporter) {
      return { success: false, message: "Unable to initialize SMTP transporter." };
    }
    await transporter.verify();
    return { success: true, message: `SMTP connection established successfully with ${cfg.host}:${cfg.port}.` };
  } catch (error: any) {
    return {
      success: false,
      message: error?.message || "Failed to connect to SMTP server."
    };
  }
}

export async function sendInquiryEmail(data: {
  enquiryNumber: string;
  customerName: string;
  company: string;
  phone: string;
  email: string;
  productInterest: string;
  urgency: string;
  message: string;
  source: string;
  location?: string;
}): Promise<{ success: boolean; mocked?: boolean; messageId?: string; message: string }> {
  const cfg = getSmtpConfig();
  const transporter = createTransporter(cfg);

  // If SMTP is not yet configured, log to server console and simulate success
  if (!transporter) {
    console.log("ℹ️ [SMTP SIMULATION] New inquiry received (credentials not configured in .env.local):", {
      ref: data.enquiryNumber,
      from: `${data.customerName} (${data.company})`,
      email: data.email,
      interest: data.productInterest
    });

    return {
      success: true,
      mocked: true,
      message: "Inquiry captured! (SMTP credentials not yet configured in .env.local, simulated email notification logged)."
    };
  }

  try {
    // 1. Notification to Factory Admin / Sales Engineering Team
    const adminMail = await transporter.sendMail({
      from: cfg.from,
      to: cfg.to,
      replyTo: data.email,
      subject: `🚨 [NEW INQUIRY ${data.enquiryNumber}] ${data.company} — ${data.productInterest}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
          <div style="background: #20272b; color: #f5f0e7; padding: 20px 24px;">
            <span style="font-size: 11px; letter-spacing: 2px; color: #e7a45c; text-transform: uppercase; font-family: monospace;">INDUSTRIA PRECISION MANUFACTURING</span>
            <h2 style="margin: 6px 0 0 0; font-size: 20px; color: #ffffff;">New Commercial Technical Inquiry</h2>
          </div>
          <div style="padding: 24px; background: #ffffff;">
            <table style="width: 100%; border-collapse: collapse; font-size: 13px;">
              <tr style="border-bottom: 1px solid #f0f0f0;">
                <td style="padding: 8px 0; color: #777; width: 140px;">Inquiry Reference:</td>
                <td style="padding: 8px 0; font-weight: bold; font-family: monospace; color: #e46e2e;">${data.enquiryNumber}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f0f0f0;">
                <td style="padding: 8px 0; color: #777;">Client Name:</td>
                <td style="padding: 8px 0; font-weight: bold; color: #222;">${data.customerName}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f0f0f0;">
                <td style="padding: 8px 0; color: #777;">Company:</td>
                <td style="padding: 8px 0; font-weight: bold; color: #222;">${data.company}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f0f0f0;">
                <td style="padding: 8px 0; color: #777;">Contact Phone:</td>
                <td style="padding: 8px 0; color: #222;"><a href="tel:${data.phone}" style="color: #e46e2e; text-decoration: none;">${data.phone}</a></td>
              </tr>
              <tr style="border-bottom: 1px solid #f0f0f0;">
                <td style="padding: 8px 0; color: #777;">Email Address:</td>
                <td style="padding: 8px 0; color: #222;"><a href="mailto:${data.email}" style="color: #e46e2e; text-decoration: none;">${data.email}</a></td>
              </tr>
              <tr style="border-bottom: 1px solid #f0f0f0;">
                <td style="padding: 8px 0; color: #777;">Product Interest:</td>
                <td style="padding: 8px 0; font-weight: bold; color: #222;">${data.productInterest}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f0f0f0;">
                <td style="padding: 8px 0; color: #777;">Urgency / Priority:</td>
                <td style="padding: 8px 0; color: ${data.urgency === "Urgent" ? "#d32f2f" : "#2e7d32"}; font-weight: bold;">${data.urgency}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f0f0f0;">
                <td style="padding: 8px 0; color: #777;">Inbound Source:</td>
                <td style="padding: 8px 0; color: #555;">${data.source}</td>
              </tr>
            </table>

            <div style="margin-top: 20px; padding: 14px; background: #fafaf8; border-left: 4px solid #e46e2e;">
              <span style="font-size: 11px; text-transform: uppercase; color: #777; font-weight: bold;">Technical Specifications & Notes:</span>
              <p style="margin: 6px 0 0 0; font-size: 13px; color: #333; line-height: 1.5;">${data.message}</p>
            </div>

            <div style="margin-top: 24px; text-align: center;">
              <a href="https://industria-demo.com/admin/enquiries" style="display: inline-block; background: #e46e2e; color: #ffffff; text-decoration: none; padding: 10px 24px; font-size: 13px; font-weight: bold; border-radius: 4px;">Open in CRM Command Center</a>
            </div>
          </div>
          <div style="background: #f5f5f5; padding: 12px 24px; font-size: 11px; color: #888; text-align: center;">
            Sanand GIDC Plant, Gujarat, India • Telemetry Dispatch System
          </div>
        </div>
      `
    });

    // 2. Auto-responder to the Customer (Confirmation & Reference)
    if (data.email) {
      try {
        await transporter.sendMail({
          from: cfg.from,
          to: data.email,
          subject: `Inquiry Acknowledged: ${data.enquiryNumber} — INDUSTRIA Precision Manufacturing`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
              <div style="background: #20272b; color: #f5f0e7; padding: 20px 24px;">
                <span style="font-size: 11px; letter-spacing: 2px; color: #e7a45c; text-transform: uppercase; font-family: monospace;">INDUSTRIA PRECISION MANUFACTURING</span>
                <h2 style="margin: 6px 0 0 0; font-size: 20px; color: #ffffff;">Inquiry Received & Logged</h2>
              </div>
              <div style="padding: 24px; background: #ffffff;">
                <p style="font-size: 14px; color: #333; line-height: 1.5;">
                  Dear <strong>${data.customerName}</strong>,
                </p>
                <p style="font-size: 13px; color: #555; line-height: 1.6;">
                  Thank you for submitting your manufacturing inquiry regarding <strong>${data.productInterest}</strong>. Your inquiry has been registered under ticket number <strong style="color: #e46e2e; font-family: monospace;">${data.enquiryNumber}</strong> and assigned to our Sanand GIDC engineering team.
                </p>
                <div style="padding: 14px; background: #fdf8f4; border: 1px solid #fed7aa; border-radius: 6px; margin: 18px 0; font-size: 12px;">
                  <strong style="color: #9a3412;">What happens next:</strong>
                  <ul style="margin: 6px 0 0 0; padding-left: 20px; color: #7c2d12;">
                    <li>Our application engineer reviews your technical drawings and tolerance limits.</li>
                    <li>A formal GST quotation and lead time estimate will be prepared within 2.4 hours.</li>
                    <li>Direct engineering desk: +91 (079) 4890 2200 / rfq@industria-demo.com</li>
                  </ul>
                </div>
                <p style="font-size: 12px; color: #888;">
                  Best regards,<br />
                  <strong>Sales Engineering Division</strong><br />
                  INDUSTRIA Precision Manufacturing Pvt. Ltd.
                </p>
              </div>
            </div>
          `
        });
      } catch (autoErr) {
        console.warn("Auto-responder send warning:", autoErr);
      }
    }

    return {
      success: true,
      messageId: adminMail.messageId,
      message: `Inquiry successfully sent to ${cfg.to} and confirmed to ${data.email}.`
    };
  } catch (err: any) {
    console.error("SMTP send error:", err);
    return {
      success: false,
      message: err?.message || "Failed to dispatch email via SMTP server."
    };
  }
}

export async function sendBookingEmail(data: {
  bookingNumber: string;
  type: string;
  customerName: string;
  company: string;
  phone: string;
  email: string;
  date: string;
  timeSlot: string;
  location: string;
  assignedRep?: string;
  notes?: string;
}): Promise<{ success: boolean; mocked?: boolean; messageId?: string; message: string }> {
  const cfg = getSmtpConfig();
  const transporter = createTransporter(cfg);

  if (!transporter) {
    console.log("ℹ️ [SMTP SIMULATION] New booking appointment received:", {
      ref: data.bookingNumber,
      type: data.type,
      client: `${data.customerName} (${data.company})`,
      date: data.date,
      time: data.timeSlot
    });

    return {
      success: true,
      mocked: true,
      message: "Booking scheduled! (SMTP credentials not configured, simulated notification logged)."
    };
  }

  try {
    // 1. Notification to Plant Manager / Host
    const adminMail = await transporter.sendMail({
      from: cfg.from,
      to: cfg.to,
      replyTo: data.email,
      subject: `📅 [PLANT BOOKING ${data.bookingNumber}] ${data.type} — ${data.company} on ${data.date}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
          <div style="background: #20272b; color: #f5f0e7; padding: 20px 24px;">
            <span style="font-size: 11px; letter-spacing: 2px; color: #e7a45c; text-transform: uppercase; font-family: monospace;">INDUSTRIA PLANT VISIT & DEMO</span>
            <h2 style="margin: 6px 0 0 0; font-size: 20px; color: #ffffff;">New Factory Appointment Booked</h2>
          </div>
          <div style="padding: 24px; background: #ffffff;">
            <table style="width: 100%; border-collapse: collapse; font-size: 13px;">
              <tr style="border-bottom: 1px solid #f0f0f0;">
                <td style="padding: 8px 0; color: #777; width: 140px;">Booking Ref:</td>
                <td style="padding: 8px 0; font-weight: bold; font-family: monospace; color: #e46e2e;">${data.bookingNumber}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f0f0f0;">
                <td style="padding: 8px 0; color: #777;">Visit Type:</td>
                <td style="padding: 8px 0; font-weight: bold; color: #222;">${data.type}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f0f0f0;">
                <td style="padding: 8px 0; color: #777;">Client Name:</td>
                <td style="padding: 8px 0; font-weight: bold; color: #222;">${data.customerName}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f0f0f0;">
                <td style="padding: 8px 0; color: #777;">Company:</td>
                <td style="padding: 8px 0; font-weight: bold; color: #222;">${data.company}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f0f0f0;">
                <td style="padding: 8px 0; color: #777;">Date & Time Slot:</td>
                <td style="padding: 8px 0; font-weight: bold; color: #2e7d32;">${data.date} (${data.timeSlot})</td>
              </tr>
              <tr style="border-bottom: 1px solid #f0f0f0;">
                <td style="padding: 8px 0; color: #777;">Location:</td>
                <td style="padding: 8px 0; color: #222;">${data.location}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f0f0f0;">
                <td style="padding: 8px 0; color: #777;">Phone:</td>
                <td style="padding: 8px 0; color: #222;"><a href="tel:${data.phone}" style="color: #e46e2e;">${data.phone}</a></td>
              </tr>
              <tr style="border-bottom: 1px solid #f0f0f0;">
                <td style="padding: 8px 0; color: #777;">Email:</td>
                <td style="padding: 8px 0; color: #222;"><a href="mailto:${data.email}" style="color: #e46e2e;">${data.email}</a></td>
              </tr>
              ${data.assignedRep ? `
              <tr style="border-bottom: 1px solid #f0f0f0;">
                <td style="padding: 8px 0; color: #777;">Assigned Host:</td>
                <td style="padding: 8px 0; color: #222; font-weight: bold;">${data.assignedRep}</td>
              </tr>` : ""}
            </table>

            ${data.notes ? `
            <div style="margin-top: 18px; padding: 12px; background: #fafaf8; border-left: 4px solid #e7a45c;">
              <span style="font-size: 11px; text-transform: uppercase; color: #777; font-weight: bold;">Visit Objectives / Agenda:</span>
              <p style="margin: 4px 0 0 0; font-size: 13px; color: #333;">${data.notes}</p>
            </div>` : ""}

            <div style="margin-top: 24px; text-align: center;">
              <a href="https://industria-demo.com/admin/appointments" style="display: inline-block; background: #20272b; color: #f5f0e7; text-decoration: none; padding: 10px 24px; font-size: 13px; font-weight: bold; border-radius: 4px;">View Calendar in Admin</a>
            </div>
          </div>
        </div>
      `
    });

    // 2. Confirmation to Customer
    if (data.email) {
      try {
        await transporter.sendMail({
          from: cfg.from,
          to: data.email,
          subject: `Confirmed: ${data.type} on ${data.date} — Ref: ${data.bookingNumber}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
              <div style="background: #20272b; color: #f5f0e7; padding: 20px 24px;">
                <span style="font-size: 11px; letter-spacing: 2px; color: #e7a45c; text-transform: uppercase; font-family: monospace;">INDUSTRIA PLANT VISIT CONFIRMATION</span>
                <h2 style="margin: 6px 0 0 0; font-size: 20px; color: #ffffff;">Your Appointment Is Confirmed</h2>
              </div>
              <div style="padding: 24px; background: #ffffff;">
                <p style="font-size: 14px; color: #333;">Dear <strong>${data.customerName}</strong>,</p>
                <p style="font-size: 13px; color: #555; line-height: 1.6;">
                  We look forward to welcoming you to our precision manufacturing facility for your <strong>${data.type}</strong>.
                </p>
                <div style="background: #fafaf8; border: 1px solid #e5e5e5; border-radius: 6px; padding: 16px; margin: 18px 0; font-size: 13px;">
                  <div>📅 <strong>Date:</strong> ${data.date}</div>
                  <div style="margin-top: 6px;">⏰ <strong>Time:</strong> ${data.timeSlot}</div>
                  <div style="margin-top: 6px;">📍 <strong>Venue:</strong> ${data.location}</div>
                  <div style="margin-top: 6px;">🔖 <strong>Booking Reference:</strong> <span style="font-family: monospace; font-weight: bold; color: #e46e2e;">${data.bookingNumber}</span></div>
                </div>
                <p style="font-size: 12px; color: #888;">
                  Security notice: Please bring photo identification (Aadhaar / Voter ID / Company ID) for entrance clearance at Sanand GIDC security gate.
                </p>
              </div>
            </div>
          `
        });
      } catch (clientErr) {
        console.warn("Client booking confirmation send error:", clientErr);
      }
    }

    return {
      success: true,
      messageId: adminMail.messageId,
      message: `Booking confirmation dispatched via SMTP.`
    };
  } catch (err: any) {
    console.error("SMTP booking email error:", err);
    return {
      success: false,
      message: err?.message || "Failed to dispatch booking email."
    };
  }
}
