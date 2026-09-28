export interface GoogleSheetConfig {
  webhookUrl: string;
}

export function getGoogleSheetConfig(): GoogleSheetConfig {
  return {
    webhookUrl: process.env.GOOGLE_SHEET_WEBHOOK_URL || ""
  };
}

export async function testGoogleSheetConnection(
  customUrl?: string
): Promise<{ success: boolean; message: string }> {
  const url = customUrl || getGoogleSheetConfig().webhookUrl;

  if (!url) {
    return {
      success: false,
      message: "Missing Google Sheet Webhook URL. Please set GOOGLE_SHEET_WEBHOOK_URL in .env.local."
    };
  }

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        action: "ping",
        test: true,
        timestamp: new Date().toISOString(),
        message: "Diagnostic ping test from INDUSTRIA platform"
      })
    });

    if (res.ok) {
      return {
        success: true,
        message: `Successfully connected to Google Sheet endpoint (${res.status} OK).`
      };
    } else {
      return {
        success: false,
        message: `Google Sheet endpoint responded with status ${res.status} ${res.statusText}.`
      };
    }
  } catch (error: any) {
    return {
      success: false,
      message: error?.message || "Failed to reach Google Sheet Webhook URL."
    };
  }
}

export async function appendInquiryToSheet(data: {
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
  createdAt?: string;
}): Promise<{ success: boolean; mocked?: boolean; message: string }> {
  const { webhookUrl } = getGoogleSheetConfig();

  const payload = {
    action: "inquiry",
    sheetName: "Inquiries",
    timestamp: data.createdAt || new Date().toISOString().replace("T", " ").substring(0, 19),
    referenceNumber: data.enquiryNumber,
    customerName: data.customerName,
    company: data.company,
    phone: data.phone,
    email: data.email,
    productInterest: data.productInterest,
    urgency: data.urgency,
    source: data.source,
    location: data.location || "Sanand GIDC",
    message: data.message
  };

  if (!webhookUrl) {
    console.log("📊 [GOOGLE SHEET SIMULATION] Appending inquiry row (webhook URL not set in .env.local):", payload);
    return {
      success: true,
      mocked: true,
      message: "Inquiry logged locally. (Provide GOOGLE_SHEET_WEBHOOK_URL in .env.local to push to real Google Sheet)."
    };
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error(`Google Sheet Webhook returned status ${response.status}`);
    }

    return {
      success: true,
      message: `Inquiry ${data.enquiryNumber} appended to Google Sheet successfully.`
    };
  } catch (err: any) {
    console.error("Google Sheet inquiry append error:", err);
    return {
      success: false,
      message: err?.message || "Failed to append row to Google Sheet."
    };
  }
}

export async function appendBookingToSheet(data: {
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
}): Promise<{ success: boolean; mocked?: boolean; message: string }> {
  const { webhookUrl } = getGoogleSheetConfig();

  const payload = {
    action: "booking",
    sheetName: "Bookings",
    timestamp: new Date().toISOString().replace("T", " ").substring(0, 19),
    bookingNumber: data.bookingNumber,
    type: data.type,
    customerName: data.customerName,
    company: data.company,
    phone: data.phone,
    email: data.email,
    date: data.date,
    timeSlot: data.timeSlot,
    location: data.location,
    assignedRep: data.assignedRep || "Unassigned",
    notes: data.notes || ""
  };

  if (!webhookUrl) {
    console.log("📊 [GOOGLE SHEET SIMULATION] Appending booking appointment row (webhook URL not set in .env.local):", payload);
    return {
      success: true,
      mocked: true,
      message: "Booking logged locally. (Provide GOOGLE_SHEET_WEBHOOK_URL in .env.local to push to real Google Sheet)."
    };
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error(`Google Sheet Webhook returned status ${response.status}`);
    }

    return {
      success: true,
      message: `Booking ${data.bookingNumber} appended to Google Sheet successfully.`
    };
  } catch (err: any) {
    console.error("Google Sheet booking append error:", err);
    return {
      success: false,
      message: err?.message || "Failed to append booking row to Google Sheet."
    };
  }
}
