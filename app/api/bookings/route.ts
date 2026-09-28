import { NextRequest, NextResponse } from "next/server";
import { sendBookingEmail } from "@/lib/services/smtp-service";
import { appendBookingToSheet } from "@/lib/services/google-sheet-service";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      bookingNumber = `APT-${Date.now().toString().slice(-6)}`,
      type = "Factory Visit",
      customerName = "Prospective Buyer",
      company = "Engineering Enterprise",
      phone = "",
      email = "",
      date = new Date().toISOString().substring(0, 10),
      timeSlot = "10:00 AM - 12:00 PM",
      location = "Sanand GIDC Plant, Gujarat, India",
      assignedRep = "Vikram Mehta (Plant Lead)",
      notes = ""
    } = body;

    // 1. Dispatch SMTP Calendar Email
    const emailResult = await sendBookingEmail({
      bookingNumber,
      type,
      customerName,
      company,
      phone,
      email,
      date,
      timeSlot,
      location,
      assignedRep,
      notes
    });

    // 2. Append booking row to Google Sheets
    const sheetResult = await appendBookingToSheet({
      bookingNumber,
      type,
      customerName,
      company,
      phone,
      email,
      date,
      timeSlot,
      location,
      assignedRep,
      notes
    });

    return NextResponse.json({
      success: true,
      bookingNumber,
      email: emailResult,
      sheet: sheetResult
    });
  } catch (error: any) {
    console.error("API /api/bookings error:", error);
    return NextResponse.json(
      {
        success: false,
        error: error?.message || "Failed to process appointment booking."
      },
      { status: 500 }
    );
  }
}
