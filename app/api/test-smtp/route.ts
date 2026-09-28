import { NextRequest, NextResponse } from "next/server";
import { verifySmtpConnection, sendInquiryEmail, SmtpConfig, getSmtpConfig } from "@/lib/services/smtp-service";

export async function GET() {
  const cfg = getSmtpConfig();
  const isConfigured = Boolean(cfg.user && cfg.pass);

  return NextResponse.json({
    configured: isConfigured,
    host: cfg.host,
    port: cfg.port,
    secure: cfg.secure,
    user: cfg.user,
    from: cfg.from,
    to: cfg.to,
    passMasked: cfg.pass ? "••••••••••••••••" : ""
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => ({}));
    const { customConfig, sendSampleMail = true } = body;

    // 1. Verify credentials handshake
    const verifyResult = await verifySmtpConnection(customConfig as SmtpConfig);

    if (!verifyResult.success) {
      return NextResponse.json({
        success: false,
        step: "verification",
        message: verifyResult.message
      });
    }

    // 2. Optionally send a sample test email
    if (sendSampleMail) {
      const sampleSend = await sendInquiryEmail({
        enquiryNumber: `TEST-${Date.now().toString().slice(-4)}`,
        customerName: "Diagnostic Test User",
        company: "Test Automation Systems Ltd.",
        phone: "+91 98250 00000",
        email: customConfig?.to || process.env.SMTP_TO || "test@industria-demo.com",
        productInterest: "Diagnostic SMTP Integration Check",
        urgency: "Normal",
        message: "This is a test notification email generated from the INDUSTRIA Platform Settings test suite.",
        source: "Admin Diagnostic Test"
      });

      return NextResponse.json({
        success: true,
        step: "complete",
        message: `SMTP connection verified and test email dispatched: ${sampleSend.message}`
      });
    }

    return NextResponse.json({
      success: true,
      step: "verification",
      message: verifyResult.message
    });
  } catch (err: any) {
    return NextResponse.json(
      {
        success: false,
        message: err?.message || "Internal error testing SMTP connection."
      },
      { status: 500 }
    );
  }
}
