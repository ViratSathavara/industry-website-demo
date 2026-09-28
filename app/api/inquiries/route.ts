import { NextRequest, NextResponse } from "next/server";
import { sendInquiryEmail } from "@/lib/services/smtp-service";
import { appendInquiryToSheet } from "@/lib/services/google-sheet-service";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      enquiryNumber = `ENQ-${Date.now().toString().slice(-6)}`,
      customerName = "Valued Customer",
      company = "General Engineering",
      phone = "",
      email = "",
      productInterest = "Precision Machining Components",
      urgency = "Normal",
      message = "",
      source = "Website",
      location = "Sanand GIDC"
    } = body;

    // 1. Dispatch SMTP Email
    const emailResult = await sendInquiryEmail({
      enquiryNumber,
      customerName,
      company,
      phone,
      email,
      productInterest,
      urgency,
      message,
      source,
      location
    });

    // 2. Append row to Google Sheets
    const sheetResult = await appendInquiryToSheet({
      enquiryNumber,
      customerName,
      company,
      phone,
      email,
      productInterest,
      urgency,
      message,
      source,
      location
    });

    return NextResponse.json({
      success: true,
      enquiryNumber,
      email: emailResult,
      sheet: sheetResult
    });
  } catch (error: any) {
    console.error("API /api/inquiries error:", error);
    return NextResponse.json(
      {
        success: false,
        error: error?.message || "Failed to process inquiry submission."
      },
      { status: 500 }
    );
  }
}
