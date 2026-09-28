import { NextRequest, NextResponse } from "next/server";
import { testGoogleSheetConnection, appendInquiryToSheet } from "@/lib/services/google-sheet-service";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => ({}));
    const { webhookUrl, sendSampleRow = true } = body;

    const pingResult = await testGoogleSheetConnection(webhookUrl);

    if (!pingResult.success) {
      return NextResponse.json({
        success: false,
        message: pingResult.message
      });
    }

    if (sendSampleRow) {
      const appendResult = await appendInquiryToSheet({
        enquiryNumber: `TEST-${Date.now().toString().slice(-4)}`,
        customerName: "Diagnostic Sheet Tester",
        company: "Google Sheet Sync Verification Ltd.",
        phone: "+91 98250 11111",
        email: "sheet-test@industria-demo.com",
        productInterest: "5-Axis Impeller Test Row",
        urgency: "Normal",
        message: "Diagnostic sample row written to verify Google Sheets integration.",
        source: "Admin Diagnostic Ping"
      });

      return NextResponse.json({
        success: appendResult.success,
        message: `Sheet connection verified and test row appended: ${appendResult.message}`
      });
    }

    return NextResponse.json({
      success: true,
      message: pingResult.message
    });
  } catch (err: any) {
    return NextResponse.json(
      {
        success: false,
        message: err?.message || "Internal error testing Google Sheet integration."
      },
      { status: 500 }
    );
  }
}
