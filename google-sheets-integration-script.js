/**
 * =========================================================================
 * INDUSTRIA PLATFORM — GOOGLE SHEETS LIVE SYNC APPS SCRIPT
 * =========================================================================
 *
 * HOW TO SET UP IN 2 MINUTES:
 * 1. Open Google Sheets (https://sheets.new)
 * 2. Rename your spreadsheet: "INDUSTRIA Inquiries & Bookings"
 * 3. In the top menu, click: Extensions > Apps Script
 * 4. Delete any code in the editor, and paste THIS ENTIRE FILE.
 * 5. Click "Save" (Disk icon or Ctrl+S).
 * 6. Click the blue "Deploy" button (top right) > "New deployment"
 * 7. Click the gear icon next to "Select type" > choose "Web app"
 * 8. Set settings:
 *    - Description: "Industria Webhook v1"
 *    - Execute as: "Me (your-email@gmail.com)"
 *    - Who has access: "Anyone" (Required so your website can post entries)
 * 9. Click "Deploy". Grant permissions if prompted.
 * 10. Copy the "Web app URL" (starts with https://script.google.com/macros/s/...)
 * 11. Paste this URL into your project's `.env.local`:
 *     GOOGLE_SHEET_WEBHOOK_URL="https://script.google.com/macros/s/..."
 *     Or configure it directly inside your Admin Settings (/admin/settings)
 * =========================================================================
 */

function doPost(e) {
  try {
    var rawData = e.postData.contents;
    var data = JSON.parse(rawData);
    var ss = SpreadsheetApp.getActiveSpreadsheet();

    // 1. Diagnostic Ping Test
    if (data.action === "ping") {
      return ContentService.createTextOutput(
        JSON.stringify({ status: "success", message: "INDUSTRIA Google Sheet Webhook is online and operational." })
      ).setMimeType(ContentService.MimeType.JSON);
    }

    // 2. Booking / Appointment Row
    if (data.action === "booking" || data.sheetName === "Bookings") {
      var sheet = getOrCreateSheet(ss, "Bookings", [
        "Timestamp",
        "Booking Ref",
        "Visit Type",
        "Customer Name",
        "Company",
        "Phone",
        "Email",
        "Visit Date",
        "Time Slot",
        "Venue / Plant",
        "Assigned Host",
        "Notes / Agenda"
      ]);

      sheet.appendRow([
        data.timestamp || new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
        data.bookingNumber || data.referenceNumber || "",
        data.type || "Factory Visit",
        data.customerName || "",
        data.company || "",
        data.phone || "",
        data.email || "",
        data.date || "",
        data.timeSlot || "",
        data.location || "Sanand GIDC Plant",
        data.assignedRep || "Vikram Mehta (Plant Lead)",
        data.notes || ""
      ]);

      return ContentService.createTextOutput(
        JSON.stringify({ status: "success", message: "Booking appended to sheet." })
      ).setMimeType(ContentService.MimeType.JSON);
    }

    // 3. Technical Inquiries / RFQ Row
    var inqSheet = getOrCreateSheet(ss, "Inquiries", [
      "Timestamp",
      "Inquiry Ref",
      "Customer Name",
      "Company",
      "Phone",
      "Email",
      "Product Interest",
      "Urgency",
      "Source",
      "Location",
      "Technical Message"
    ]);

    inqSheet.appendRow([
      data.timestamp || new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
      data.referenceNumber || data.enquiryNumber || "",
      data.customerName || "",
      data.company || "",
      data.phone || "",
      data.email || "",
      data.productInterest || "",
      data.urgency || "Normal",
      data.source || "Website Direct",
      data.location || "Sanand GIDC",
      data.message || ""
    ]);

    return ContentService.createTextOutput(
      JSON.stringify({ status: "success", message: "Inquiry appended to sheet." })
    ).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({ status: "error", message: error.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function getOrCreateSheet(ss, sheetName, headers) {
  var sheet = ss.getSheetByName(sheetName);
  if (!sheet) {
    sheet = ss.insertSheet(sheetName);
    // Format header row
    sheet.appendRow(headers);
    var headerRange = sheet.getRange(1, 1, 1, headers.length);
    headerRange.setFontWeight("bold");
    headerRange.setBackground("#20272b");
    headerRange.setFontColor("#f5f0e7");
    sheet.setFrozenRows(1);

    // Auto-fit columns
    for (var col = 1; col <= headers.length; col++) {
      sheet.setColumnWidth(col, 160);
    }
  }
  return sheet;
}

function doGet(e) {
  return ContentService.createTextOutput(
    JSON.stringify({ status: "online", service: "INDUSTRIA Google Sheets Telemetry Sync" })
  ).setMimeType(ContentService.MimeType.JSON);
}
