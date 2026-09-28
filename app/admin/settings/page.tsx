"use client";

import React, { useState, useEffect } from "react";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { useDemoState } from "@/lib/services/demo-state-context";
import {
  Sliders,
  Building,
  CheckCircle2,
  AlertCircle,
  Save,
  RefreshCw,
  Sparkles,
  Database,
  Mail,
  FileSpreadsheet,
  DollarSign,
  Copy,
  Check,
  Send,
  Eye,
  EyeOff,
  ExternalLink,
  HelpCircle
} from "lucide-react";

export default function AdminSettingsPage() {
  const { resetDemoData } = useDemoState();
  const [toastMsg, setToastMsg] = useState<{ type: "success" | "error"; text: string } | null>(null);

  // Corporate Details
  const [companyName, setCompanyName] = useState("INDUSTRIA Precision Manufacturing Pvt. Ltd.");
  const [gstNumber, setGstNumber] = useState("24AAACI1234F1Z8");
  const [panNumber, setPanNumber] = useState("AAACI1234F");
  const [iecCode, setIecCode] = useState("0812938472");
  const [registeredOffice, setRegisteredOffice] = useState("Plot No. 42-45, Phase II, GIDC Sanand, Ahmedabad, Gujarat - 382170");

  // Commercial Settings
  const [defaultGSTRate, setDefaultGSTRate] = useState(18);
  const [defaultValidityDays, setDefaultValidityDays] = useState(30);

  // ERP Integrations Toggles
  const [sapSync, setSapSync] = useState(true);
  const [tallySync, setTallySync] = useState(true);
  const [mesSync, setMesSync] = useState(true);
  const [dynamicsSync, setDynamicsSync] = useState(false);

  // SMTP Settings
  const [smtpHost, setSmtpHost] = useState("");
  const [smtpPort, setSmtpPort] = useState(587);
  const [smtpSecure, setSmtpSecure] = useState(false);
  const [smtpUser, setSmtpUser] = useState("");
  const [smtpPass, setSmtpPass] = useState("");
  const [smtpFrom, setSmtpFrom] = useState("");
  const [smtpTo, setSmtpTo] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [smtpTesting, setSmtpTesting] = useState(false);
  const [smtpTestResult, setSmtpTestResult] = useState<{ success: boolean; message: string } | null>(null);

  // Google Sheets Settings
  const [googleSheetWebhookUrl, setGoogleSheetWebhookUrl] = useState("");
  const [sheetTesting, setSheetTesting] = useState(false);
  const [sheetTestResult, setSheetTestResult] = useState<{ success: boolean; message: string } | null>(null);
  const [copiedScript, setCopiedScript] = useState(false);
  const [showGuide, setShowGuide] = useState(false);

  // Load from server and localStorage on mount
  useEffect(() => {
    // 1. Fetch server-configured SMTP status
    fetch("/api/test-smtp")
      .then((res) => res.json())
      .then((data) => {
        if (data.configured) {
          setSmtpHost(data.host || "smtp.gmail.com");
          setSmtpPort(data.port || 587);
          setSmtpSecure(!!data.secure);
          setSmtpUser(data.user || "viratmsathavara2510@gmail.com");
          setSmtpFrom(data.from || "INDUSTRIA Motor Parts <viratmsathavara2510@gmail.com>");
          setSmtpTo(data.to || "viratmsathavara2510@gmail.com");
          setSmtpPass("wxewsxcbrhlgioif");
        }
      })
      .catch(() => {});

    // 2. Load from localStorage if custom overrides exist
    try {
      const savedSmtp = localStorage.getItem("industria_smtp_settings");
      if (savedSmtp) {
        const parsed = JSON.parse(savedSmtp);
        if (parsed.host) setSmtpHost(parsed.host);
        if (parsed.port) setSmtpPort(parsed.port);
        if (parsed.secure !== undefined) setSmtpSecure(!!parsed.secure);
        if (parsed.user) setSmtpUser(parsed.user);
        if (parsed.pass) setSmtpPass(parsed.pass);
        if (parsed.from) setSmtpFrom(parsed.from);
        if (parsed.to) setSmtpTo(parsed.to);
      } else {
        // Defaults to verified Gmail credentials
        setSmtpHost("smtp.gmail.com");
        setSmtpPort(587);
        setSmtpSecure(false);
        setSmtpUser("viratmsathavara2510@gmail.com");
        setSmtpPass("wxewsxcbrhlgioif");
        setSmtpFrom("INDUSTRIA Motor Parts <viratmsathavara2510@gmail.com>");
        setSmtpTo("viratmsathavara2510@gmail.com");
      }

      const savedSheet = localStorage.getItem("industria_sheet_settings");
      if (savedSheet) {
        const parsed = JSON.parse(savedSheet);
        setGoogleSheetWebhookUrl(parsed.webhookUrl || "");
      }
    } catch {}
  }, []);

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();

    // Persist SMTP and Sheet settings in local storage
    try {
      localStorage.setItem(
        "industria_smtp_settings",
        JSON.stringify({
          host: smtpHost,
          port: smtpPort,
          secure: smtpSecure,
          user: smtpUser,
          pass: smtpPass,
          from: smtpFrom,
          to: smtpTo
        })
      );

      localStorage.setItem(
        "industria_sheet_settings",
        JSON.stringify({
          webhookUrl: googleSheetWebhookUrl
        })
      );
    } catch {}

    setToastMsg({
      type: "success",
      text: "Factory parameters, SMTP configuration, and Google Sheet endpoint saved successfully!"
    });
    setTimeout(() => setToastMsg(null), 4000);
  };

  const handleTestSmtp = async () => {
    setSmtpTesting(true);
    setSmtpTestResult(null);

    try {
      const res = await fetch("/api/test-smtp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customConfig: {
            host: smtpHost,
            port: Number(smtpPort),
            secure: smtpSecure,
            user: smtpUser,
            pass: smtpPass,
            from: smtpFrom || `"INDUSTRIA Manufacturing" <${smtpUser}>`,
            to: smtpTo || smtpUser
          },
          sendSampleMail: true
        })
      });

      const data = await res.json();
      setSmtpTestResult({
        success: data.success,
        message: data.message || (data.success ? "SMTP connection verified!" : "Failed to connect to SMTP server.")
      });
    } catch (err: any) {
      setSmtpTestResult({
        success: false,
        message: err?.message || "Failed to contact diagnostic test endpoint."
      });
    } finally {
      setSmtpTesting(false);
    }
  };

  const handleTestSheet = async () => {
    setSheetTesting(true);
    setSheetTestResult(null);

    try {
      const res = await fetch("/api/test-sheet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          webhookUrl: googleSheetWebhookUrl,
          sendSampleRow: true
        })
      });

      const data = await res.json();
      setSheetTestResult({
        success: data.success,
        message: data.message || (data.success ? "Google Sheet webhook ping succeeded!" : "Failed to ping Google Sheet.")
      });
    } catch (err: any) {
      setSheetTestResult({
        success: false,
        message: err?.message || "Failed to contact Google Sheet endpoint."
      });
    } finally {
      setSheetTesting(false);
    }
  };

  const copyAppsScript = () => {
    const scriptCode = `function doPost(e) {
  try {
    var rawData = e.postData.contents;
    var data = JSON.parse(rawData);
    var ss = SpreadsheetApp.getActiveSpreadsheet();

    if (data.action === "ping") {
      return ContentService.createTextOutput(JSON.stringify({ status: "success", message: "INDUSTRIA Sheet Webhook Online" })).setMimeType(ContentService.MimeType.JSON);
    }

    if (data.action === "booking" || data.sheetName === "Bookings") {
      var sheet = getOrCreateSheet(ss, "Bookings", ["Timestamp", "Booking Ref", "Visit Type", "Customer Name", "Company", "Phone", "Email", "Visit Date", "Time Slot", "Venue / Plant", "Assigned Host", "Notes / Agenda"]);
      sheet.appendRow([data.timestamp || new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }), data.bookingNumber || data.referenceNumber || "", data.type || "Factory Visit", data.customerName || "", data.company || "", data.phone || "", data.email || "", data.date || "", data.timeSlot || "", data.location || "Sanand GIDC Plant", data.assignedRep || "Vikram Mehta (Plant Lead)", data.notes || ""]);
      return ContentService.createTextOutput(JSON.stringify({ status: "success", message: "Booking appended" })).setMimeType(ContentService.MimeType.JSON);
    }

    var inqSheet = getOrCreateSheet(ss, "Inquiries", ["Timestamp", "Inquiry Ref", "Customer Name", "Company", "Phone", "Email", "Product Interest", "Urgency", "Source", "Location", "Technical Message"]);
    inqSheet.appendRow([data.timestamp || new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }), data.referenceNumber || data.enquiryNumber || "", data.customerName || "", data.company || "", data.phone || "", data.email || "", data.productInterest || "", data.urgency || "Normal", data.source || "Website Direct", data.location || "Sanand GIDC", data.message || ""]);
    return ContentService.createTextOutput(JSON.stringify({ status: "success", message: "Inquiry appended" })).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: error.toString() })).setMimeType(ContentService.MimeType.JSON);
  }
}

function getOrCreateSheet(ss, sheetName, headers) {
  var sheet = ss.getSheetByName(sheetName);
  if (!sheet) {
    sheet = ss.insertSheet(sheetName);
    sheet.appendRow(headers);
    var range = sheet.getRange(1, 1, 1, headers.length);
    range.setFontWeight("bold").setBackground("#20272b").setFontColor("#f5f0e7");
    sheet.setFrozenRows(1);
    for (var i = 1; i <= headers.length; i++) { sheet.setColumnWidth(i, 160); }
  }
  return sheet;
}`;

    navigator.clipboard.writeText(scriptCode);
    setCopiedScript(true);
    setTimeout(() => setCopiedScript(false), 3000);
  };

  return (
    <AdminLayout>
      <div className="space-y-8 max-w-5xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold text-[#20272b] tracking-tight font-mono uppercase">
                Factory & Integration Master Settings
              </h1>
              <span className="px-2.5 py-0.5 rounded text-xs font-mono font-bold bg-[#e46e2e]/10 text-[#e46e2e] border border-[#e46e2e]/20">
                Live Integrations Active
              </span>
            </div>
            <p className="text-xs text-[#7e8989] mt-1 font-mono">
              Configure SMTP email notifications, Google Sheets automated telemetry, ERP sync, and taxation parameters.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                if (window.confirm("Reset all demo data back to default specifications?")) {
                  resetDemoData();
                  setToastMsg({ type: "success", text: "Demo data successfully reset to factory defaults." });
                  setTimeout(() => setToastMsg(null), 3000);
                }
              }}
              className="px-3.5 py-2 text-xs font-mono font-semibold rounded border border-[#d5cfc5] hover:bg-rose-50 hover:text-rose-700 text-[#20272b] transition-colors flex items-center gap-1.5"
            >
              <RefreshCw size={13} />
              Reset Demo State
            </button>
          </div>
        </div>

        {/* Toast */}
        {toastMsg && (
          <div
            className={`p-3.5 border text-xs font-mono flex items-center gap-2.5 rounded shadow-sm ${
              toastMsg.type === "success"
                ? "bg-emerald-50 border-emerald-300 text-emerald-900"
                : "bg-rose-50 border-rose-300 text-rose-900"
            }`}
          >
            <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
            <span>{toastMsg.text}</span>
          </div>
        )}

        <form onSubmit={handleSaveSettings} className="space-y-8">
          {/* ============================================================== */}
          {/* SECTION 1: SMTP EMAIL INTEGRATION */}
          {/* ============================================================== */}
          <div className="bg-white p-6 sm:p-8 border border-[#e5dfd5] shadow-xs space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#e5dfd5] gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#20272b] text-[#e7a45c] flex items-center justify-center font-bold">
                  <Mail size={20} />
                </div>
                <div>
                  <h2 className="text-base font-bold text-[#20272b] font-mono uppercase">
                    SMTP Email Notification Engine
                  </h2>
                  <p className="text-xs text-[#7e8989] font-mono">
                    Dispatches instant email alerts to your engineering desk and confirmation receipts to prospective buyers.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  disabled={smtpTesting}
                  onClick={handleTestSmtp}
                  className="px-4 py-2 bg-[#20272b] hover:bg-black text-[#e7a45c] text-xs font-mono font-semibold uppercase flex items-center gap-2 transition-all disabled:opacity-50"
                >
                  <Send size={13} />
                  <span>{smtpTesting ? "Testing Handshake..." : "Verify & Send Test Email"}</span>
                </button>
              </div>
            </div>

            {/* Test Status Banner */}
            {smtpTestResult && (
              <div
                className={`p-4 border text-xs font-mono flex items-start gap-2.5 rounded ${
                  smtpTestResult.success
                    ? "bg-emerald-50 border-emerald-300 text-emerald-950"
                    : "bg-rose-50 border-rose-300 text-rose-950"
                }`}
              >
                {smtpTestResult.success ? (
                  <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle size={16} className="text-rose-600 shrink-0 mt-0.5" />
                )}
                <div>
                  <strong className="block font-bold">
                    {smtpTestResult.success ? "SMTP Test Passed" : "SMTP Connection Failed"}
                  </strong>
                  <span className="leading-relaxed">{smtpTestResult.message}</span>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
              <div className="md:col-span-2">
                <label className="block font-bold text-[#20272b] mb-1">
                  SMTP Server Host
                </label>
                <input
                  type="text"
                  placeholder="e.g. smtp.gmail.com or smtp.office365.com"
                  value={smtpHost}
                  onChange={(e) => setSmtpHost(e.target.value)}
                  className="w-full p-2.5 border border-[#d5cfc5] bg-[#faf6ee] text-[#20272b] placeholder:text-[#aeb5b2] focus:outline-none focus:border-[#e46e2e]"
                />
              </div>

              <div>
                <label className="block font-bold text-[#20272b] mb-1">
                  Port & Encryption
                </label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    placeholder="587"
                    value={smtpPort}
                    onChange={(e) => setSmtpPort(Number(e.target.value))}
                    className="w-24 p-2.5 border border-[#d5cfc5] bg-[#faf6ee] text-[#20272b] focus:outline-none focus:border-[#e46e2e]"
                  />
                  <button
                    type="button"
                    onClick={() => setSmtpSecure(!smtpSecure)}
                    className={`flex-1 px-3 py-2 text-[11px] font-bold border transition-colors ${
                      smtpSecure
                        ? "bg-[#20272b] text-[#e7a45c] border-[#20272b]"
                        : "bg-[#faf6ee] text-[#7e8989] border-[#d5cfc5]"
                    }`}
                  >
                    {smtpSecure ? "SSL (465)" : "TLS (587)"}
                  </button>
                </div>
              </div>

              <div>
                <label className="block font-bold text-[#20272b] mb-1">
                  SMTP Username / Email
                </label>
                <input
                  type="email"
                  placeholder="your-email@company.com"
                  value={smtpUser}
                  onChange={(e) => setSmtpUser(e.target.value)}
                  className="w-full p-2.5 border border-[#d5cfc5] bg-[#faf6ee] text-[#20272b] focus:outline-none focus:border-[#e46e2e]"
                />
              </div>

              <div>
                <label className="block font-bold text-[#20272b] mb-1">
                  SMTP Password / App Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••••••••••"
                    value={smtpPass}
                    onChange={(e) => setSmtpPass(e.target.value)}
                    className="w-full p-2.5 pr-10 border border-[#d5cfc5] bg-[#faf6ee] text-[#20272b] focus:outline-none focus:border-[#e46e2e]"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-[#7e8989] hover:text-[#20272b]"
                  >
                    {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                  </button>
                </div>
              </div>

              <div>
                <label className="block font-bold text-[#20272b] mb-1">
                  Alert Recipient (Sales Desk)
                </label>
                <input
                  type="email"
                  placeholder="sales@industria-demo.com"
                  value={smtpTo}
                  onChange={(e) => setSmtpTo(e.target.value)}
                  className="w-full p-2.5 border border-[#d5cfc5] bg-[#faf6ee] text-[#20272b] focus:outline-none focus:border-[#e46e2e]"
                />
              </div>

              <div className="md:col-span-3">
                <label className="block font-bold text-[#20272b] mb-1">
                  Sender Display Header (From)
                </label>
                <input
                  type="text"
                  placeholder='"INDUSTRIA Precision Manufacturing" <inquiries@industria-demo.com>'
                  value={smtpFrom}
                  onChange={(e) => setSmtpFrom(e.target.value)}
                  className="w-full p-2.5 border border-[#d5cfc5] bg-[#faf6ee] text-[#20272b] focus:outline-none focus:border-[#e46e2e]"
                />
                <span className="text-[11px] text-[#7e8989] mt-1 block">
                  Tip: For Gmail accounts, generate a 16-character App Password at myaccount.google.com/apppasswords.
                </span>
              </div>
            </div>
          </div>

          {/* ============================================================== */}
          {/* SECTION 2: GOOGLE SHEETS REAL-TIME SYNC */}
          {/* ============================================================== */}
          <div className="bg-white p-6 sm:p-8 border border-[#e5dfd5] shadow-xs space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#e5dfd5] gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-900 text-emerald-300 flex items-center justify-center font-bold">
                  <FileSpreadsheet size={20} />
                </div>
                <div>
                  <h2 className="text-base font-bold text-[#20272b] font-mono uppercase">
                    Google Sheets Live Sync Engine
                  </h2>
                  <p className="text-xs text-[#7e8989] font-mono">
                    Automatically appends incoming inquiries, RFQs, and booking appointments into dedicated Google Sheet tabs in real time.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  disabled={sheetTesting}
                  onClick={handleTestSheet}
                  className="px-4 py-2 bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-mono font-semibold uppercase flex items-center gap-2 transition-all disabled:opacity-50"
                >
                  <Send size={13} />
                  <span>{sheetTesting ? "Testing Webhook..." : "Test Sheet & Append Row"}</span>
                </button>
              </div>
            </div>

            {/* Sheet Test Result Banner */}
            {sheetTestResult && (
              <div
                className={`p-4 border text-xs font-mono flex items-start gap-2.5 rounded ${
                  sheetTestResult.success
                    ? "bg-emerald-50 border-emerald-300 text-emerald-950"
                    : "bg-rose-50 border-rose-300 text-rose-950"
                }`}
              >
                {sheetTestResult.success ? (
                  <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle size={16} className="text-rose-600 shrink-0 mt-0.5" />
                )}
                <div>
                  <strong className="block font-bold">
                    {sheetTestResult.success ? "Google Sheet Sync Operational" : "Sync Test Error"}
                  </strong>
                  <span className="leading-relaxed">{sheetTestResult.message}</span>
                </div>
              </div>
            )}

            <div className="space-y-4 text-xs font-mono">
              <div>
                <label className="block font-bold text-[#20272b] mb-1">
                  Google Apps Script Webhook Endpoint URL
                </label>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="url"
                    placeholder="https://script.google.com/macros/s/AKfycbxYOUR_DEPLOYMENT_ID/exec"
                    value={googleSheetWebhookUrl}
                    onChange={(e) => setGoogleSheetWebhookUrl(e.target.value)}
                    className="flex-1 p-2.5 border border-[#d5cfc5] bg-[#faf6ee] text-[#20272b] placeholder:text-[#aeb5b2] focus:outline-none focus:border-emerald-600"
                  />
                  <button
                    type="button"
                    onClick={copyAppsScript}
                    className="px-4 py-2.5 bg-[#20272b] hover:bg-black text-[#f5f0e7] font-semibold text-xs flex items-center justify-center gap-2 transition-colors shrink-0"
                  >
                    {copiedScript ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                    <span>{copiedScript ? "Script Copied!" : "Copy Apps Script"}</span>
                  </button>
                </div>
              </div>

              {/* 3-Step Setup Quick Card */}
              <div className="p-4 bg-[#faf6ee] border border-[#e5dfd5] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-[#20272b] uppercase text-[11px] flex items-center gap-1.5">
                    <HelpCircle size={14} className="text-[#e46e2e]" />
                    <span>How to set up your Google Sheet in 2 minutes:</span>
                  </span>
                  <button
                    type="button"
                    onClick={() => setShowGuide(!showGuide)}
                    className="text-[#e46e2e] hover:underline font-bold text-[11px]"
                  >
                    {showGuide ? "Hide Steps" : "View Setup Steps"}
                  </button>
                </div>

                {showGuide && (
                  <ol className="list-decimal list-inside space-y-1.5 text-[#555] pt-2 text-[11px] leading-relaxed">
                    <li>Create a new spreadsheet at <strong>sheets.new</strong>.</li>
                    <li>Click <strong>Extensions &gt; Apps Script</strong> in the top menu.</li>
                    <li>Paste the copied script code (or copy from <code>google-sheets-integration-script.js</code>).</li>
                    <li>Click <strong>Deploy &gt; New deployment</strong> &gt; Select type: <strong>Web app</strong>.</li>
                    <li>Set <em>Execute as:</em> <strong>Me</strong> and <em>Who has access:</em> <strong>Anyone</strong>.</li>
                    <li>Click <strong>Deploy</strong> and paste the Web app URL in the box above!</li>
                  </ol>
                )}
              </div>
            </div>
          </div>

          {/* ============================================================== */}
          {/* SECTION 3: CORPORATE ENTITY DETAILS */}
          {/* ============================================================== */}
          <div className="bg-white p-6 sm:p-8 border border-[#e5dfd5] shadow-xs space-y-4">
            <div className="flex items-center gap-3 border-b border-[#e5dfd5] pb-4">
              <Building size={20} className="text-[#e46e2e]" />
              <h2 className="text-base font-bold text-[#20272b] font-mono uppercase">
                Legal Entity & Corporate Credentials
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
              <div>
                <label className="block font-bold text-[#20272b] mb-1">
                  Registered Manufacturing Company Name
                </label>
                <input
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="w-full p-2.5 border border-[#d5cfc5] bg-[#faf6ee] text-[#20272b]"
                />
              </div>

              <div>
                <label className="block font-bold text-[#20272b] mb-1">
                  GST Identification Number (GSTIN)
                </label>
                <input
                  type="text"
                  value={gstNumber}
                  onChange={(e) => setGstNumber(e.target.value)}
                  className="w-full p-2.5 border border-[#d5cfc5] bg-[#faf6ee] text-[#20272b]"
                />
              </div>

              <div>
                <label className="block font-bold text-[#20272b] mb-1">
                  PAN Number
                </label>
                <input
                  type="text"
                  value={panNumber}
                  onChange={(e) => setPanNumber(e.target.value)}
                  className="w-full p-2.5 border border-[#d5cfc5] bg-[#faf6ee] text-[#20272b]"
                />
              </div>

              <div>
                <label className="block font-bold text-[#20272b] mb-1">
                  Import Export Code (IEC)
                </label>
                <input
                  type="text"
                  value={iecCode}
                  onChange={(e) => setIecCode(e.target.value)}
                  className="w-full p-2.5 border border-[#d5cfc5] bg-[#faf6ee] text-[#20272b]"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block font-bold text-[#20272b] mb-1">
                  Registered Plant & Corporate Headquarters Address
                </label>
                <input
                  type="text"
                  value={registeredOffice}
                  onChange={(e) => setRegisteredOffice(e.target.value)}
                  className="w-full p-2.5 border border-[#d5cfc5] bg-[#faf6ee] text-[#20272b]"
                />
              </div>
            </div>
          </div>

          {/* ============================================================== */}
          {/* SECTION 4: ERP & MES CONNECTORS */}
          {/* ============================================================== */}
          <div className="bg-white p-6 sm:p-8 border border-[#e5dfd5] shadow-xs space-y-4">
            <div className="flex items-center gap-3 border-b border-[#e5dfd5] pb-4">
              <Database size={20} className="text-[#e46e2e]" />
              <h2 className="text-base font-bold text-[#20272b] font-mono uppercase">
                ERP & Shopfloor MES Integration Connectors
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono">
              <div className="p-4 border border-[#e5dfd5] bg-[#faf6ee] flex items-center justify-between">
                <div>
                  <div className="font-bold text-[#20272b] text-xs">SAP S/4HANA Connector</div>
                  <div className="text-[11px] text-[#7e8989] mt-0.5">Automated Material Ledger & PO sync</div>
                  <span className="inline-block mt-1 text-[10px] font-bold text-emerald-800 bg-emerald-100 border border-emerald-300 px-2 py-0.5">
                    Connected (RFC Gateway 3300)
                  </span>
                </div>
                <input
                  type="checkbox"
                  checked={sapSync}
                  onChange={(e) => setSapSync(e.target.checked)}
                  className="w-4 h-4 accent-[#e46e2e]"
                />
              </div>

              <div className="p-4 border border-[#e5dfd5] bg-[#faf6ee] flex items-center justify-between">
                <div>
                  <div className="font-bold text-[#20272b] text-xs">Tally Prime Server API</div>
                  <div className="text-[11px] text-[#7e8989] mt-0.5">Real-time GST Invoicing & Ledger</div>
                  <span className="inline-block mt-1 text-[10px] font-bold text-emerald-800 bg-emerald-100 border border-emerald-300 px-2 py-0.5">
                    Connected (ODBC XML Bridge)
                  </span>
                </div>
                <input
                  type="checkbox"
                  checked={tallySync}
                  onChange={(e) => setTallySync(e.target.checked)}
                  className="w-4 h-4 accent-[#e46e2e]"
                />
              </div>

              <div className="p-4 border border-[#e5dfd5] bg-[#faf6ee] flex items-center justify-between">
                <div>
                  <div className="font-bold text-[#20272b] text-xs">Siemens Opcenter MES</div>
                  <div className="text-[11px] text-[#7e8989] mt-0.5">Live CNC cycle times & QA inspection</div>
                  <span className="inline-block mt-1 text-[10px] font-bold text-emerald-800 bg-emerald-100 border border-emerald-300 px-2 py-0.5">
                    Connected (OPC-UA Server)
                  </span>
                </div>
                <input
                  type="checkbox"
                  checked={mesSync}
                  onChange={(e) => setMesSync(e.target.checked)}
                  className="w-4 h-4 accent-[#e46e2e]"
                />
              </div>

              <div className="p-4 border border-[#e5dfd5] bg-[#faf6ee] flex items-center justify-between">
                <div>
                  <div className="font-bold text-[#20272b] text-xs">Microsoft Dynamics 365</div>
                  <div className="text-[11px] text-[#7e8989] mt-0.5">Supply Chain Management entity</div>
                  <span className="inline-block mt-1 text-[10px] font-bold text-[#7e8989] bg-[#ede8df] px-2 py-0.5">
                    Standby
                  </span>
                </div>
                <input
                  type="checkbox"
                  checked={dynamicsSync}
                  onChange={(e) => setDynamicsSync(e.target.checked)}
                  className="w-4 h-4 accent-[#e46e2e]"
                />
              </div>
            </div>
          </div>

          {/* ============================================================== */}
          {/* SECTION 5: COMMERCIAL TAXATION RULES */}
          {/* ============================================================== */}
          <div className="bg-white p-6 sm:p-8 border border-[#e5dfd5] shadow-xs space-y-4">
            <div className="flex items-center gap-3 border-b border-[#e5dfd5] pb-4">
              <DollarSign size={20} className="text-[#e46e2e]" />
              <h2 className="text-base font-bold text-[#20272b] font-mono uppercase">
                Commercial CPQ & Taxation Rules
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
              <div>
                <label className="block font-bold text-[#20272b] mb-1">
                  Default GST Percentage (%)
                </label>
                <input
                  type="number"
                  value={defaultGSTRate}
                  onChange={(e) => setDefaultGSTRate(Number(e.target.value))}
                  className="w-full p-2.5 border border-[#d5cfc5] bg-[#faf6ee] text-[#20272b]"
                />
              </div>

              <div>
                <label className="block font-bold text-[#20272b] mb-1">
                  Quotation Validity (Days)
                </label>
                <input
                  type="number"
                  value={defaultValidityDays}
                  onChange={(e) => setDefaultValidityDays(Number(e.target.value))}
                  className="w-full p-2.5 border border-[#d5cfc5] bg-[#faf6ee] text-[#20272b]"
                />
              </div>
            </div>
          </div>

          {/* Form Actions */}
          <div className="flex justify-end gap-3 pt-2">
            <button
              type="submit"
              className="px-8 py-3.5 bg-[#e46e2e] hover:bg-[#bb5b2c] text-[#f5f0e7] text-xs font-mono font-bold uppercase tracking-wider shadow-md flex items-center gap-2 transition-all"
            >
              <Save size={15} />
              <span>Save Integration & Master Parameters</span>
            </button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
}
