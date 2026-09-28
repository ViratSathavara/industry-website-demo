"use client";

import React from "react";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Clock,
  Layers,
  FileCheck,
  Truck,
  Users,
  Building,
  ExternalLink,
  Presentation,
  ShieldCheck,
  ChevronRight,
  PhoneCall,
  FileSpreadsheet
} from "lucide-react";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";

export default function OverviewPage() {
  return (
    <div className="min-h-screen bg-[#fafaf8] text-neutral-900 selection:bg-primary selection:text-white">
      <Navbar />

      <main className="max-w-5xl mx-auto px-6 py-12 space-y-12">
        {/* Header Hero */}
        <div className="text-center space-y-3 max-w-3xl mx-auto pt-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>EXECUTIVE CLIENT CHEAT-SHEET</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight font-heading text-neutral-900 leading-tight">
            How to Explain INDUSTRIA to Any Client in 3 Simple Minutes
          </h1>
          <p className="text-base text-neutral-600 leading-relaxed">
            Forget 43 routes and technical software jargon. Industrial factory owners only care about <strong>3 daily headaches</strong>. Here is the entire platform boiled down to 3 simple screens.
          </p>
        </div>

        {/* The 3 Core Stories (The Pitch Pillars) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-2xl border-2 border-neutral-200 shadow-sm hover:border-primary/50 transition-all flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-orange-100 text-primary font-bold flex items-center justify-center font-mono text-base">
                01
              </div>
              <span className="text-[11px] font-bold text-primary uppercase tracking-wider block">
                STEP 1: INBOUND DISCOVERY
              </span>
              <h2 className="text-lg font-bold text-neutral-900 font-heading">
                The Digital Showroom & 60s RFQ
              </h2>

              <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-900 space-y-1">
                <span className="font-bold flex items-center gap-1 text-[11px] text-rose-700">
                  <XCircle className="w-3.5 h-3.5" /> The Client's Current Pain:
                </span>
                <p>
                  Their website is an outdated 2012 brochure. Inquiries get lost in personal WhatsApp chats or take days to capture.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 space-y-1">
                <span className="font-bold flex items-center gap-1 text-[11px] text-emerald-700">
                  <CheckCircle2 className="w-3.5 h-3.5" /> How Industria Solves It:
                </span>
                <p>
                  Buyers inspect 3D CAD models, see tolerance specs, and upload engineering drawings in a 60-second wizard.
                </p>
              </div>
            </div>

            <Link
              href="/products"
              className="w-full py-2.5 px-4 rounded-xl bg-neutral-900 hover:bg-primary text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors shadow-sm"
            >
              <span>Show Them Step 1 (/products)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-2xl border-2 border-neutral-200 shadow-sm hover:border-primary/50 transition-all flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 font-bold flex items-center justify-center font-mono text-base">
                02
              </div>
              <span className="text-[11px] font-bold text-blue-700 uppercase tracking-wider block">
                STEP 2: RAPID QUOTING
              </span>
              <h2 className="text-lg font-bold text-neutral-900 font-heading">
                The 2-Minute CPQ Quotation Maker
              </h2>

              <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-900 space-y-1">
                <span className="font-bold flex items-center gap-1 text-[11px] text-rose-700">
                  <XCircle className="w-3.5 h-3.5" /> The Client's Current Pain:
                </span>
                <p>
                  Sales engineers take 3 to 4 days doing calculations on manual Excel sheets. By then, the buyer purchased elsewhere.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 space-y-1">
                <span className="font-bold flex items-center gap-1 text-[11px] text-emerald-700">
                  <CheckCircle2 className="w-3.5 h-3.5" /> How Industria Solves It:
                </span>
                <p>
                  Sales heads pick items, the engine calculates 18% GST and freight, and dispatches a formal PDF quote in 2 minutes.
                </p>
              </div>
            </div>

            <Link
              href="/admin/quotes"
              className="w-full py-2.5 px-4 rounded-xl bg-neutral-900 hover:bg-primary text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors shadow-sm"
            >
              <span>Show Them Step 2 (/admin/quotes)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-2xl border-2 border-neutral-200 shadow-sm hover:border-primary/50 transition-all flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center font-mono text-base">
                03
              </div>
              <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider block">
                STEP 3: TRANSPARENT OPERATIONS
              </span>
              <h2 className="text-lg font-bold text-neutral-900 font-heading">
                The Live Shopfloor Order Tracker
              </h2>

              <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-900 space-y-1">
                <span className="font-bold flex items-center gap-1 text-[11px] text-rose-700">
                  <XCircle className="w-3.5 h-3.5" /> The Client's Current Pain:
                </span>
                <p>
                  Buyers call the plant owner and supervisor 10 times a week: "Where is my batch? Has it been dispatched?"
                </p>
              </div>

              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 space-y-1">
                <span className="font-bold flex items-center gap-1 text-[11px] text-emerald-700">
                  <CheckCircle2 className="w-3.5 h-3.5" /> How Industria Solves It:
                </span>
                <p>
                  Buyers log into their portal and see live progress (Machining → QC → Dispatched with courier tracking docket).
                </p>
              </div>
            </div>

            <Link
              href="/portal/orders"
              className="w-full py-2.5 px-4 rounded-xl bg-neutral-900 hover:bg-primary text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors shadow-sm"
            >
              <span>Show Them Step 3 (/portal/orders)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Side-by-Side Comparison Matrix */}
        <div className="bg-white rounded-2xl border border-neutral-200 shadow-sm overflow-hidden space-y-4 p-6">
          <div>
            <h3 className="text-xl font-bold font-heading text-neutral-900">
              The Reality Check: Before vs. After INDUSTRIA
            </h3>
            <p className="text-xs text-neutral-500 mt-0.5">
              Show this table directly to the factory owner to demonstrate immediate business impact.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-neutral-100 text-neutral-700 font-bold border-b border-neutral-200">
                <tr>
                  <th className="py-3 px-4">Daily Workflow Area</th>
                  <th className="py-3 px-4 text-rose-700 bg-rose-50/50">Traditional Factory (Status Quo)</th>
                  <th className="py-3 px-4 text-emerald-800 bg-emerald-50/50">With INDUSTRIA Platform</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                <tr>
                  <td className="py-3 px-4 font-semibold text-neutral-900">Quotation Speed</td>
                  <td className="py-3 px-4 text-rose-700 bg-rose-50/20">3 to 5 business days (manual Excel)</td>
                  <td className="py-3 px-4 text-emerald-800 bg-emerald-50/20 font-bold">2.4 Hours (pre-calculated CPQ engine)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-neutral-900">Customer Status Calls</td>
                  <td className="py-3 px-4 text-rose-700 bg-rose-50/20">10-15 phone calls daily per plant</td>
                  <td className="py-3 px-4 text-emerald-800 bg-emerald-50/20 font-bold">Zero calls (self-serve live portal tracking)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-neutral-900">CAD & Drawing Submissions</td>
                  <td className="py-3 px-4 text-rose-700 bg-rose-50/20">Scattered across emails & WhatsApp</td>
                  <td className="py-3 px-4 text-emerald-800 bg-emerald-50/20 font-bold">Centralized engineering vault with 3D preview</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-neutral-900">Buyer Retention</td>
                  <td className="py-3 px-4 text-rose-700 bg-rose-50/20">Low loyalty; buyers shop around each batch</td>
                  <td className="py-3 px-4 text-emerald-800 bg-emerald-50/20 font-bold">74% repeat orders locked into custom portal</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-neutral-900">Owner Visibility</td>
                  <td className="py-3 px-4 text-rose-700 bg-rose-50/20">Only hears bad news or asks accountant</td>
                  <td className="py-3 px-4 text-emerald-800 bg-emerald-50/20 font-bold">Executive dashboard with real-time EBITDA & pipeline</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 30-Second Verbatim Pitch Script */}
        <div className="p-6 rounded-2xl bg-neutral-900 text-white space-y-3 shadow-lg">
          <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>The 30-Second Sales Script (Say This Word-for-Word)</span>
          </div>
          <p className="text-base text-neutral-200 italic font-serif leading-relaxed border-l-4 border-l-primary pl-4">
            &quot;Sir, right now when an engineering buyer requests a quote from your factory, it takes your team 3 to 4 days on Excel to reply. In that time, the buyer already bought from someone faster. Industria gives your factory a modern digital catalog with 3D models, lets your sales team create a professional GST quote in 2 minutes, and gives your customers a portal to track their order live so they stop calling your mobile all day. Let me show you how it works in 3 clicks.&quot;
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Link
            href="/demo"
            className="px-6 py-3 rounded-xl bg-primary hover:bg-primary-hover text-white font-bold text-sm shadow-lg flex items-center gap-2 transition-all"
          >
            <span>Open Cinematic Sales Pitch Slides</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/demo/script"
            className="px-6 py-3 rounded-xl border border-neutral-300 hover:bg-neutral-100 text-neutral-700 font-bold text-sm flex items-center gap-2 transition-all"
          >
            <span>View Full 10-Minute Talk Track</span>
            <ExternalLink className="w-4 h-4" />
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
