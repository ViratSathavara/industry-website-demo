"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Clock,
  MessageSquare,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Sparkles,
  Presentation,
  Shield,
  HelpCircle,
  ExternalLink,
  ChevronRight,
  TrendingUp,
  FileText
} from "lucide-react";

export default function DemoScriptPage() {
  const [activeMinute, setActiveMinute] = useState(0);

  const scriptTimeline = [
    {
      minute: "Min 0:00 - 1:30",
      stage: "The Hook & The Reality Check",
      objective: "Disrupt the factory owner's comfort zone by quantifying their invisible lost revenue.",
      script:
        "\"Shri Patel-ji, before I show you any software, let me ask you a question: Last month, how many high-margin engineering inquiries came to your website, were forwarded into a WhatsApp group, and took 4 days for your estimation team to price? In precision manufacturing today, European and Indian Tier-1 buyers don't wait 4 days. If they don't get CAD evaluation within 4 hours, they send that RFQ to your competitor in Pune or Vietnam. Today, I'm going to show you how Industria turns your factory into a 2.4-hour digital quote engine.\"",
      action: "Keep the homepage hero visible. Point to the '72h to 2.4h' quote turnaround counter.",
      reaction: "The owner will nod and usually complain about their sales engineers taking too long."
    },
    {
      minute: "Min 1:30 - 3:30",
      stage: "Industry Switching & CAD Storefront",
      objective: "Demonstrate domain mastery without generic ecommerce fluff.",
      script:
        "\"Notice how our platform isn't a generic shopping cart. Watch this: with one click on our Top Industry Switcher, I switch from Automotive CNC to Aerospace Titanium, then to Oil & Gas Forged Valves. Notice how the technical specs change dynamically: tolerance standards shift from DIN ISO 2768 to AS9100D, and heat treatment certifications match ASTM A182. Your buyers can inspect 3D STEP models, check chemical composition, and request precision samples right here.\"",
      action: "Click the floating Industry Switcher. Select 'Aerospace & Defense', open a product page, and click 'Inspect 3D CAD Preview'.",
      reaction: "Owner is impressed that it looks like a real specialized engineering catalog, not Amazon."
    },
    {
      minute: "Min 3:30 - 5:30",
      stage: "Smart RFQ to 2.4-Hour CPQ Quote",
      objective: "Prove that digital inquiries eliminate manual estimation bottlenecks.",
      script:
        "\"Now let's act as an engineering buyer. We click 'Request Custom RFQ'. The buyer inputs target delivery, custom tolerances (±0.005mm), and uploads their 2D manufacturing drawing. Now, watch me switch instantaneously to your Sales Head view in the Admin Command Center. The RFQ is already logged, categorized, and tagged. I click 'Build Quote' — line items, 18% GST, freight charges, and payment terms are pre-calculated in 60 seconds. I click 'Publish & Send'. Done.\"",
      action: "Open /request-quote in one tab, submit a test item, then open /admin/quotes, click 'Build New Quotation', and hit Send.",
      reaction: "Owner will ask: 'Does this integrate with my existing price list or ERP?'"
    },
    {
      minute: "Min 5:30 - 7:30",
      stage: "Customer Portal & 1-Click Acceptance",
      objective: "Showcase the self-service procurement experience that locks in Tier-1 buyers.",
      script:
        "\"Now put yourself in your client's shoes. Tata Motors or L&T procurement officers don't want to dig through endless email chains. They log into their branded Customer Portal. Right on their dashboard, Quote #QUO-2026-081 is ready. They inspect the itemized GST breakdown, download the formal stamped PDF, and click 'Accept Quote'. Watch what happens: confetti triggers, and this quote instantly transforms into an active Work Order in your shopfloor operations pipeline!\"",
      action: "Navigate to /portal/quotes, click 'Accept Quote & Issue PO', show order confirmation.",
      reaction: "Eyes widen when they see the automated order generation with zero re-typing."
    },
    {
      minute: "Min 7:30 - 9:00",
      stage: "Shopfloor Operations & Zero Status Calls",
      objective: "Eliminate the daily phone calls between buyers and dispatch managers.",
      script:
        "\"Here is where you save 15 hours of phone calls every week. In your Admin Operations panel, your plant manager simply clicks 'Advance Stage' as the batch moves from CNC Machining to CMM Quality Inspection to Logistics Dispatch. Back in the Customer Portal, the buyer sees the green checkmark move in real-time with their transporter docket number. They never have to call your factory asking 'Where is my shipment?' again.\"",
      action: "Go to /admin/orders, click 'Advance to Quality', switch to /portal/orders to show the updated step.",
      reaction: "Owner immediately calculates how much headache this saves their plant supervisor."
    },
    {
      minute: "Min 9:00 - 10:00",
      stage: "The Executive Close & ROI Formula",
      objective: "Present the owner with the business case and close the pilot workshop.",
      script:
        "\"Finally, as Managing Director, you open the Owner Executive View. You don't look at petty tables; you see your blended gross margin, your top 5 revenue verticals, and your inquiry-to-order funnel. If Industria helps you capture just ONE additional recurring OEM contract worth ₹40 Lakhs per year, the entire platform has paid for itself ten times over. Let's schedule a 2-hour digital scoping session with your engineering team this Thursday.\"",
      action: "Open /admin/dashboard?view=owner, point to the natural-language executive summary and EBITDA chart.",
      reaction: "Owner agrees to the implementation workshop."
    }
  ];

  const objections = [
    {
      objection: "\"We already use Tally Prime or SAP for invoicing.\"",
      response:
        "Industria is NOT replacing your ERP or accounting software. Tally and SAP are internal back-office ledgers. Industria is the front-office digital engine that faces your buyers, captures inquiries, generates CAD proposals, and pushes clean, approved purchase orders directly into your Tally/SAP via ODBC/API.",
      icon: Shield
    },
    {
      objection: "\"Our buyers are traditional and won't use a web portal.\"",
      response:
        "That's why Industria includes full WhatsApp Cloud API integration. When you generate a quote or advance an order, the buyer receives an interactive WhatsApp message with a direct 1-click link. They don't need to remember passwords or download an app — it meets them where they already operate.",
      icon: MessageSquare
    },
    {
      objection: "\"Our technical CAD drawings are confidential.\"",
      response:
        "Industria enforces role-based access control (RBAC), end-to-end encryption in AWS S3 Mumbai, dynamic digital watermarking on PDF/CAD previews, and mandatory digital NDA acknowledgements before any drawing download.",
      icon: Shield
    },
    {
      objection: "\"Implementation will take 6 months and disrupt our plant.\"",
      response:
        "Because our architecture is pre-configured with 18 industrial vertical blueprints, taxonomies, and standard quotation workflows, full rollout takes only 14 days. We don't touch your machine code; we connect your commercial workflows.",
      icon: Clock
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-900 text-white selection:bg-primary selection:text-white">
      {/* Top Header */}
      <header className="px-6 py-4 border-b border-neutral-800 flex items-center justify-between sticky top-0 z-50 bg-neutral-900/90 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <Link
            href="/demo"
            className="w-8 h-8 rounded-lg bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center text-neutral-300 transition-colors"
          >
            ←
          </Link>
          <div>
            <h1 className="font-bold text-sm tracking-tight font-heading flex items-center gap-2">
              <span>SALES PRESENTATION TALK-TRACK</span>
              <span className="text-[10px] px-2 py-0.2 rounded-full bg-primary/20 text-primary font-mono">
                10-MINUTE PITCH
              </span>
            </h1>
            <p className="text-[11px] text-neutral-400">
              Battle-tested script for agency founders & enterprise sales reps pitching factory owners
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/demo"
            className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 transition-colors"
          >
            Launch Pitch Slides
          </Link>
          <Link
            href="/audit"
            className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-primary hover:bg-primary-hover text-white transition-colors"
          >
            Interactive Audit
          </Link>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-10 space-y-12">
        {/* Intro Banner */}
        <div className="p-6 rounded-2xl bg-neutral-800/80 border border-neutral-700/60 space-y-2">
          <span className="text-xs uppercase tracking-wider text-primary font-bold">
            Executive Summary
          </span>
          <h2 className="text-2xl font-bold font-heading">
            How to Pitch Industria in 10 Minutes & Close the Deal
          </h2>
          <p className="text-sm text-neutral-300 leading-relaxed max-w-4xl">
            Industrial factory owners (MSME directors, Tier-1 promoters) do not care about frontend tech stacks. They care about <strong>two things only:</strong> winning higher-margin export contracts and stopping their sales team from leaking qualified inquiries. Follow this exact minute-by-minute flow.
          </p>
        </div>

        {/* Script Timeline Stepper */}
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
            <h3 className="text-lg font-bold font-heading flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              <span>Minute-by-Minute Live Demo Flow</span>
            </h3>
            <span className="text-xs text-neutral-400">
              Click a step to reveal exact verbiage and software actions
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-2">
            {scriptTimeline.map((step, idx) => (
              <button
                key={idx}
                onClick={() => setActiveMinute(idx)}
                className={`p-3 rounded-xl text-left border transition-all ${
                  activeMinute === idx
                    ? "bg-primary text-white border-primary shadow-lg"
                    : "bg-neutral-800/70 hover:bg-neutral-800 text-neutral-400 border-neutral-700/60"
                }`}
              >
                <div className="text-[10px] font-mono font-bold">{step.minute}</div>
                <div className="text-xs font-bold mt-1 text-white leading-tight truncate">
                  {step.stage}
                </div>
              </button>
            ))}
          </div>

          {/* Active Minute Detail Card */}
          <div className="p-6 rounded-2xl bg-neutral-800 border border-neutral-700 space-y-6 animate-fade-in">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-neutral-700 pb-4">
              <div>
                <span className="text-xs font-mono font-bold text-primary">
                  {scriptTimeline[activeMinute].minute}
                </span>
                <h3 className="text-xl font-bold text-white mt-0.5 font-heading">
                  {scriptTimeline[activeMinute].stage}
                </h3>
              </div>
              <div className="text-xs text-neutral-300 bg-neutral-900/60 px-3 py-1.5 rounded-lg border border-neutral-700/60">
                <strong>Objective:</strong> {scriptTimeline[activeMinute].objective}
              </div>
            </div>

            {/* Script Box */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-primary uppercase tracking-wider">
                Verbatim Sales Pitch Script (Speak Word-for-Word):
              </span>
              <div className="p-4 rounded-xl bg-neutral-900/90 border border-neutral-700/80 text-sm text-neutral-100 font-sans leading-relaxed italic border-l-4 border-l-primary">
                {scriptTimeline[activeMinute].script}
              </div>
            </div>

            {/* Practical Action & Anticipated Reaction */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-neutral-900/50 border border-neutral-700/60 space-y-1">
                <span className="font-bold text-emerald-400 uppercase tracking-wider text-[10px]">
                  Physical Action on Screen:
                </span>
                <p className="text-neutral-300">{scriptTimeline[activeMinute].action}</p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-900/50 border border-neutral-700/60 space-y-1">
                <span className="font-bold text-amber-400 uppercase tracking-wider text-[10px]">
                  Anticipated Client Reaction:
                </span>
                <p className="text-neutral-300">{scriptTimeline[activeMinute].reaction}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Objection Handling Matrix */}
        <div className="space-y-4">
          <div className="border-b border-neutral-800 pb-3">
            <h3 className="text-lg font-bold font-heading flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-primary" />
              <span>Hardcore Objection Handling Matrix</span>
            </h3>
            <p className="text-xs text-neutral-400 mt-0.5">
              The four objections every manufacturing promoter will throw at you, and the exact kill-shot responses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {objections.map((obj, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-neutral-800/80 border border-neutral-700/80 space-y-3"
              >
                <div className="flex items-center gap-2 text-rose-400 font-bold text-sm">
                  <AlertTriangle className="w-4 h-4 shrink-0" />
                  <span>{obj.objection}</span>
                </div>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  {obj.response}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Financial ROI Calculator Strip */}
        <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-mono font-bold text-primary uppercase">
                Contract Sizing
              </span>
              <h3 className="text-lg font-bold font-heading mt-0.5">
                The MSME Business Case & Payback Formula
              </h3>
            </div>
            <span className="text-xs font-mono text-emerald-400 bg-emerald-950/80 border border-emerald-800 px-2.5 py-1 rounded-full">
              Payback: Under 30 Days
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 space-y-1">
              <div className="text-neutral-400">Saved Engineering Hours</div>
              <div className="text-xl font-bold font-mono text-white">40h / month</div>
              <div className="text-[11px] text-neutral-500">Auto-BOM & CAD extraction</div>
            </div>
            <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 space-y-1">
              <div className="text-neutral-400">Recovered Inbound Deals</div>
              <div className="text-xl font-bold font-mono text-white">2 to 4 Deals / mo</div>
              <div className="text-[11px] text-neutral-500">Prevented competitor leakage</div>
            </div>
            <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 space-y-1">
              <div className="text-neutral-400">Additional Annual Revenue</div>
              <div className="text-xl font-bold font-mono text-primary font-bold">₹25L - ₹80L</div>
              <div className="text-[11px] text-neutral-500">From high-velocity turnaround</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
