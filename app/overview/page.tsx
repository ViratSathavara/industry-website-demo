"use client";

import React from "react";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  XCircle,
  ExternalLink
} from "lucide-react";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";

export default function OverviewPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#20272b] text-[#f5f0e7]">
      <Navbar />

      <main className="flex-1 pt-28 pb-20 relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-14 relative z-10 space-y-12">
          {/* Header Hero */}
          <div className="text-center space-y-3 max-w-3xl mx-auto pt-6">
            <span className="eyebrow text-[#e7a45c]">
              Executive Client Cheat-Sheet
            </span>
            <h1 className="text-4xl sm:text-6xl font-display tracking-tight text-[#f5f0e7] leading-tight">
              How to Explain INDUSTRIA to Any Client in <em className="text-[#e7a45c]">3 Simple Minutes.</em>
            </h1>
            <p className="text-xs sm:text-sm text-[#aeb5b2] leading-relaxed">
              Industrial factory owners focus on <strong>3 daily operational headaches</strong>: delayed quotes, lost inquiries, and endless customer status calls. Here is the entire system boiled down to 3 simple screens.
            </p>
          </div>

          {/* The 3 Core Stories (The Pitch Pillars) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-[#171c1e] p-6 sm:p-8 border border-white/10 shadow-xl hover:border-[#e7a45c]/50 transition-all flex flex-col justify-between space-y-5">
              <div className="space-y-4">
                <div className="w-10 h-10 bg-[#20272b] border border-[#e7a45c]/40 text-[#e7a45c] font-bold flex items-center justify-center font-mono text-base">
                  01
                </div>
                <span className="text-[10px] font-mono font-bold text-[#e7a45c] uppercase tracking-[.15em] block">
                  STEP 1: INBOUND DISCOVERY
                </span>
                <h2 className="text-xl font-display text-[#f5f0e7]">
                  The Digital Showroom & 60s RFQ
                </h2>

                <div className="p-3.5 bg-rose-950/30 border border-rose-800/40 text-xs text-rose-200 space-y-1">
                  <span className="font-bold flex items-center gap-1.5 text-[11px] text-rose-400">
                    <XCircle size={14} /> The Client's Current Pain:
                  </span>
                  <p className="leading-relaxed">
                    Their website is an outdated brochure. Inquiries get lost in personal WhatsApp chats or take days to capture.
                  </p>
                </div>

                <div className="p-3.5 bg-emerald-950/30 border border-emerald-800/40 text-xs text-emerald-200 space-y-1">
                  <span className="font-bold flex items-center gap-1.5 text-[11px] text-emerald-400">
                    <CheckCircle2 size={14} /> How Industria Solves It:
                  </span>
                  <p className="leading-relaxed">
                    Buyers inspect 3D CAD models, see tolerance specs, and upload engineering drawings in a 60-second wizard.
                  </p>
                </div>
              </div>

              <Link
                href="/products"
                className="w-full py-3 px-4 bg-[#e46e2e] hover:bg-[#bb5b2c] text-[#f5f0e7] text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-md"
              >
                <span>Inspect Step 1 (/products)</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            {/* Card 2 */}
            <div className="bg-[#171c1e] p-6 sm:p-8 border border-white/10 shadow-xl hover:border-[#e7a45c]/50 transition-all flex flex-col justify-between space-y-5">
              <div className="space-y-4">
                <div className="w-10 h-10 bg-[#20272b] border border-[#e7a45c]/40 text-[#e7a45c] font-bold flex items-center justify-center font-mono text-base">
                  02
                </div>
                <span className="text-[10px] font-mono font-bold text-[#e7a45c] uppercase tracking-[.15em] block">
                  STEP 2: RAPID QUOTING
                </span>
                <h2 className="text-xl font-display text-[#f5f0e7]">
                  The 2-Minute CPQ Quotation Maker
                </h2>

                <div className="p-3.5 bg-rose-950/30 border border-rose-800/40 text-xs text-rose-200 space-y-1">
                  <span className="font-bold flex items-center gap-1.5 text-[11px] text-rose-400">
                    <XCircle size={14} /> The Client's Current Pain:
                  </span>
                  <p className="leading-relaxed">
                    Sales engineers take 3 to 4 days doing calculations on manual Excel sheets. By then, the buyer purchased elsewhere.
                  </p>
                </div>

                <div className="p-3.5 bg-emerald-950/30 border border-emerald-800/40 text-xs text-emerald-200 space-y-1">
                  <span className="font-bold flex items-center gap-1.5 text-[11px] text-emerald-400">
                    <CheckCircle2 size={14} /> How Industria Solves It:
                  </span>
                  <p className="leading-relaxed">
                    Sales heads pick items, the engine calculates 18% GST and freight, and dispatches a formal PDF quote in 2 minutes.
                  </p>
                </div>
              </div>

              <Link
                href="/admin/quotes"
                className="w-full py-3 px-4 bg-[#20272b] hover:bg-white/10 text-[#f5f0e7] border border-white/20 text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-md"
              >
                <span>Inspect Step 2 (/admin/quotes)</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            {/* Card 3 */}
            <div className="bg-[#171c1e] p-6 sm:p-8 border border-white/10 shadow-xl hover:border-[#e7a45c]/50 transition-all flex flex-col justify-between space-y-5">
              <div className="space-y-4">
                <div className="w-10 h-10 bg-[#20272b] border border-[#e7a45c]/40 text-[#e7a45c] font-bold flex items-center justify-center font-mono text-base">
                  03
                </div>
                <span className="text-[10px] font-mono font-bold text-[#e7a45c] uppercase tracking-[.15em] block">
                  STEP 3: TRANSPARENT OPERATIONS
                </span>
                <h2 className="text-xl font-display text-[#f5f0e7]">
                  The Live Shopfloor Order Tracker
                </h2>

                <div className="p-3.5 bg-rose-950/30 border border-rose-800/40 text-xs text-rose-200 space-y-1">
                  <span className="font-bold flex items-center gap-1.5 text-[11px] text-rose-400">
                    <XCircle size={14} /> The Client's Current Pain:
                  </span>
                  <p className="leading-relaxed">
                    Buyers call the plant owner and supervisor 10 times a week: "Where is my batch? Has it been dispatched?"
                  </p>
                </div>

                <div className="p-3.5 bg-emerald-950/30 border border-emerald-800/40 text-xs text-emerald-200 space-y-1">
                  <span className="font-bold flex items-center gap-1.5 text-[11px] text-emerald-400">
                    <CheckCircle2 size={14} /> How Industria Solves It:
                  </span>
                  <p className="leading-relaxed">
                    Buyers log into their portal and see live progress (Machining → QC → Dispatched with courier tracking docket).
                  </p>
                </div>
              </div>

              <Link
                href="/portal/orders"
                className="w-full py-3 px-4 bg-[#20272b] hover:bg-white/10 text-[#f5f0e7] border border-white/20 text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-md"
              >
                <span>Inspect Step 3 (/portal/orders)</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Side-by-Side Comparison Matrix */}
          <div className="bg-[#171c1e] border border-white/10 shadow-xl overflow-hidden space-y-4 p-6 sm:p-8">
            <div>
              <span className="eyebrow text-[#e7a45c]">Direct Impact Analysis</span>
              <h3 className="text-2xl font-display text-[#f5f0e7] mt-1">
                The Reality Check: Before vs. After <em className="text-[#e7a45c]">INDUSTRIA</em>
              </h3>
              <p className="text-xs text-[#aeb5b2] mt-1">
                Show this table directly to the factory owner to demonstrate immediate commercial transformation.
              </p>
            </div>

            <div className="overflow-x-auto pt-2">
              <table className="w-full text-left text-xs font-mono">
                <thead className="bg-[#20272b] text-[#f5f0e7] border-b border-white/10 font-bold uppercase tracking-wider text-[11px]">
                  <tr>
                    <th className="py-3 px-4">Daily Workflow Area</th>
                    <th className="py-3 px-4 text-rose-400 bg-rose-950/20">Traditional Factory (Status Quo)</th>
                    <th className="py-3 px-4 text-emerald-400 bg-emerald-950/20">With INDUSTRIA Platform</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  <tr>
                    <td className="py-3.5 px-4 font-semibold text-[#f5f0e7]">Quotation Speed</td>
                    <td className="py-3.5 px-4 text-rose-300 bg-rose-950/10">3 to 5 business days (manual Excel)</td>
                    <td className="py-3.5 px-4 text-emerald-300 bg-emerald-950/10 font-bold">2.4 Hours (pre-calculated CPQ engine)</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-semibold text-[#f5f0e7]">Customer Status Calls</td>
                    <td className="py-3.5 px-4 text-rose-300 bg-rose-950/10">10-15 phone calls daily per plant</td>
                    <td className="py-3.5 px-4 text-emerald-300 bg-emerald-950/10 font-bold">Zero calls (self-serve live portal tracking)</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-semibold text-[#f5f0e7]">CAD & Drawing Submissions</td>
                    <td className="py-3.5 px-4 text-rose-300 bg-rose-950/10">Scattered across emails & WhatsApp</td>
                    <td className="py-3.5 px-4 text-emerald-300 bg-emerald-950/10 font-bold">Centralized engineering vault with 3D preview</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-semibold text-[#f5f0e7]">Buyer Retention</td>
                    <td className="py-3.5 px-4 text-rose-300 bg-rose-950/10">Low loyalty; buyers shop around each batch</td>
                    <td className="py-3.5 px-4 text-emerald-300 bg-emerald-950/10 font-bold">74% repeat orders locked into custom portal</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-semibold text-[#f5f0e7]">Owner Visibility</td>
                    <td className="py-3.5 px-4 text-rose-300 bg-rose-950/10">Only hears bad news or asks accountant</td>
                    <td className="py-3.5 px-4 text-emerald-300 bg-emerald-950/10 font-bold">Executive dashboard with real-time EBITDA & pipeline</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 30-Second Verbatim Pitch Script */}
          <div className="p-8 bg-[#171c1e] border border-white/10 space-y-4 shadow-xl">
            <div className="flex items-center gap-2 text-[#e7a45c] font-mono font-bold text-xs uppercase tracking-[.15em]">
              <Sparkles size={14} />
              <span>The 30-Second Sales Script (Say This Word-for-Word)</span>
            </div>
            <p className="text-lg sm:text-xl text-[#f5f0e7] italic font-display leading-relaxed border-l-2 border-l-[#e7a45c] pl-6">
              &quot;Sir, right now when an engineering buyer requests a quote from your factory, it takes your team 3 to 4 days on Excel to reply. In that time, the buyer already bought from someone faster. Industria gives your factory a modern digital catalog with 3D models, lets your sales team create a professional GST quote in 2 minutes, and gives your customers a portal to track their order live so they stop calling your mobile all day. Let me show you how it works in 3 clicks.&quot;
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              href="/demo"
              className="px-8 py-3.5 bg-[#e46e2e] hover:bg-[#bb5b2c] text-[#f5f0e7] font-semibold text-xs uppercase tracking-wider shadow-xl flex items-center gap-2 transition-all"
            >
              <span>Open Cinematic Sales Pitch Slides</span>
              <ArrowRight size={14} />
            </Link>
            <Link
              href="/demo/script"
              className="px-8 py-3.5 bg-[#171c1e] hover:bg-white/10 text-[#f5f0e7] border border-white/20 font-semibold text-xs uppercase tracking-wider flex items-center gap-2 transition-all"
            >
              <span>View Full 10-Minute Talk Track</span>
              <ExternalLink size={14} />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
