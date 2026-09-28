"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  Play,
  Layers,
  FileText,
  Clock,
  Zap,
  ShoppingBag,
  BarChart3,
  TrendingUp,
  Cpu,
  ShieldCheck,
  Building,
  ExternalLink,
  Presentation
} from "lucide-react";

export default function DemoPresentationPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: "intro",
      tag: "THE MASTER VISION",
      title: "Transforming Traditional Manufacturing into a Digital Factory Engine",
      subtitle:
        "The complete operating system for Indian precision manufacturers, Tier-1 suppliers, and custom engineering exporters.",
      stats: [
        { label: "Quote Turnaround", value: "72h → 2.4h", desc: "96% speed increase" },
        { label: "Lead Capture", value: "+300%", desc: "Inbound CAD & WhatsApp" },
        { label: "Buyer Retention", value: "74%", desc: "Through self-serve portal" }
      ],
      points: [
        "Unifies Website Catalog, Omnichannel Inquiries, CPQ Quotations, and Customer Portal into one cohesive platform.",
        "Demonstrates complete contract precision manufacturing capability from CAD drawing upload to live CMM metrology inspection.",
        "Zero backend required for live pitches: runs with instantaneous local persistence and interactive state transitions."
      ],
      ctaText: "Explore the Friction",
      ctaLink: "#next"
    },
    {
      id: "problem",
      tag: "THE OFFLINE FRICTION",
      title: "Why Traditional Manufacturing Loses 40% of Inbound Deals",
      subtitle:
        "Industrial buyers expect rapid CAD evaluations and instant pricing. Legacy factories are trapped in manual email & paper workflows.",
      stats: [
        { label: "RFQ Delay", value: "3 to 5 Days", desc: "Manual engineering estimation" },
        { label: "Lost Leads", value: "42%", desc: "Buried in WhatsApp and inbox" },
        { label: "Order Status", value: "Daily Calls", desc: "Frustrated procurement officers" }
      ],
      points: [
        "Offline Static Catalogs: Buyers cannot find technical specs, tolerances, or 3D models online.",
        "Disconnected Sales & Shopfloor: Quotations are built on outdated Excel sheets, causing price discrepancies.",
        "Zero Customer Transparency: Buyers constantly call dispatch managers to ask: 'Where is my batch?'"
      ],
      ctaText: "See the Solution Architecture",
      ctaLink: "#next"
    },
    {
      id: "solution",
      tag: "THE INDUSTRIA ARCHITECTURE",
      title: "A Single Master Platform Covering Every Touchpoint",
      subtitle:
        "From public discovery to ERP shopfloor execution, every milestone is connected in real-time.",
      stats: [
        { label: "Tolerances", value: "±0.005 mm", desc: "Zeiss CMM Certified" },
        { label: "Machining Centers", value: "140+ CNCs", desc: "5-Axis, VMC, Turning" },
        { label: "Enterprise Portals", value: "Customer & Admin", desc: "Role-based SaaS UI" }
      ],
      points: [
        "Public High-Performance Storefront: Precision engineering components with interactive 3D/CAD downloads and instant quote engine.",
        "Self-Service Customer Portal: Buyers track custom RFQs, review GST quotations, accept proposals, and track production.",
        "Admin SaaS Command Center: CPQ quotation builder, omnichannel CRM, MES operations pipeline, and BI analytics."
      ],
      ctaText: "Interactive Customer Portal Walkthrough",
      ctaLink: "/portal/dashboard"
    },
    {
      id: "workflow",
      tag: "THE 6-STEP DIGITAL WORKFLOW",
      title: "The Zero-Friction Procurement Journey",
      subtitle:
        "Walk a prospective factory owner through this exact sequence to close the enterprise contract.",
      steps: [
        { num: "01", title: "Product & CAD Discovery", desc: "Buyer filters by alloy & tolerance, inspects specifications, and requests custom quotation." },
        { num: "02", title: "Smart RFQ Builder", desc: "Buyer inputs delivery date, custom tolerances, and uploads 2D/3D engineering drawing." },
        { num: "03", title: "Sales CPQ Generation", desc: "Sales head opens RFQ in Admin, adds freight, calculates GST, and dispatches quote in 2 minutes." },
        { num: "04", title: "One-Click Buyer Acceptance", desc: "Buyer reviews proposal in Portal, clicks 'Accept Quote', and order is automatically booked." },
        { num: "05", title: "Shopfloor MES Progression", desc: "Plant operators step order through Machining, CMM Quality, and Dispatched with tracking." },
        { num: "06", title: "Executive Dashboard", desc: "Owner sees realtime EBITDA, inquiry funnels, and repeat buyer lifetime value." }
      ],
      ctaText: "Try the Sales Talk-Track",
      ctaLink: "/demo/script"
    }
  ];

  const slide = slides[currentSlide];

  return (
    <div className="min-h-screen bg-neutral-950 text-white flex flex-col justify-between selection:bg-primary selection:text-white">
      {/* Top Bar */}
      <header className="px-6 py-4 border-b border-neutral-800/80 flex items-center justify-between backdrop-blur-md sticky top-0 z-50 bg-neutral-950/80">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center font-bold font-mono text-white text-base">
            IN
          </div>
          <div>
            <div className="font-bold text-sm tracking-tight font-heading flex items-center gap-2">
              <span>INDUSTRIA</span>
              <span className="text-[10px] px-2 py-0.2 rounded-full bg-primary/20 text-primary font-mono">
                SALES PITCH MODE
              </span>
            </div>
            <div className="text-[11px] text-neutral-400">
              Interactive Digital Factory Executive Showcase
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/demo/script"
            className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 transition-colors flex items-center gap-1.5"
          >
            <Presentation className="w-3.5 h-3.5 text-primary" />
            <span>Sales Script</span>
          </Link>
          <Link
            href="/audit"
            className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-primary hover:bg-primary-hover text-white transition-colors flex items-center gap-1.5 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Factory Audit Tool</span>
          </Link>
          <Link
            href="/"
            className="px-3 py-1.5 text-xs font-semibold rounded-lg border border-neutral-700 hover:bg-neutral-800 text-neutral-300 transition-colors"
          >
            Exit to Storefront
          </Link>
        </div>
      </header>

      {/* Main Slide Stage */}
      <main className="flex-1 max-w-6xl mx-auto w-full px-6 py-12 flex flex-col justify-center">
        <div className="space-y-8 animate-fade-in">
          {/* Slide Tag */}
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-mono font-bold tracking-wider">
              {slide.tag}
            </span>
            <span className="text-xs text-neutral-500 font-mono">
              SLIDE {currentSlide + 1} OF {slides.length}
            </span>
          </div>

          {/* Heading */}
          <div className="space-y-4 max-w-4xl">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight font-heading leading-tight">
              {slide.title}
            </h1>
            <p className="text-base md:text-xl text-neutral-400 leading-relaxed font-normal">
              {slide.subtitle}
            </p>
          </div>

          {/* Stats Bar if present */}
          {slide.stats && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
              {slide.stats.map((st, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-neutral-900/80 border border-neutral-800 backdrop-blur-xs"
                >
                  <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                    {st.label}
                  </div>
                  <div className="text-3xl font-bold text-white mt-1 font-mono text-primary">
                    {st.value}
                  </div>
                  <div className="text-xs text-neutral-400 mt-0.5">{st.desc}</div>
                </div>
              ))}
            </div>
          )}

          {/* Bullet Points if present */}
          {slide.points && (
            <div className="space-y-3 pt-2 max-w-3xl">
              {slide.points.map((pt, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <p className="text-sm md:text-base text-neutral-300 leading-normal">
                    {pt}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Workflow Steps if present */}
          {slide.steps && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              {slide.steps.map((st, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 space-y-1.5"
                >
                  <div className="font-mono text-xs font-bold text-primary">{st.num}</div>
                  <div className="font-bold text-sm text-white">{st.title}</div>
                  <p className="text-xs text-neutral-400">{st.desc}</p>
                </div>
              ))}
            </div>
          )}

          {/* Jump Actions Strip */}
          <div className="pt-6 flex flex-wrap items-center gap-4">
            {slide.ctaLink.startsWith("/") ? (
              <Link
                href={slide.ctaLink}
                className="px-6 py-3 rounded-xl bg-primary hover:bg-primary-hover text-white font-semibold text-sm flex items-center gap-2 shadow-lg transition-all"
              >
                <span>{slide.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            ) : (
              <button
                onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
                className="px-6 py-3 rounded-xl bg-primary hover:bg-primary-hover text-white font-semibold text-sm flex items-center gap-2 shadow-lg transition-all"
              >
                <span>{slide.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}

            <Link
              href="/admin/dashboard"
              className="px-5 py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-200 font-semibold text-sm border border-neutral-800 flex items-center gap-2 transition-all"
            >
              <span>Jump to Admin Command Center</span>
              <ExternalLink className="w-4 h-4" />
            </Link>

            <Link
              href="/portal/dashboard"
              className="px-5 py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-200 font-semibold text-sm border border-neutral-800 flex items-center gap-2 transition-all"
            >
              <span>Jump to Customer Portal</span>
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </main>

      {/* Slide Navigation Footer */}
      <footer className="px-6 py-4 border-t border-neutral-800/80 flex items-center justify-between backdrop-blur-md bg-neutral-950/80">
        <div className="flex items-center gap-2">
          {slides.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all ${
                currentSlide === idx ? "w-8 bg-primary" : "w-2 bg-neutral-700 hover:bg-neutral-500"
              }`}
            />
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setCurrentSlide((prev) => Math.max(0, prev - 1))}
            disabled={currentSlide === 0}
            className="p-2 rounded-lg border border-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-900 disabled:opacity-30 disabled:pointer-events-none transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => setCurrentSlide((prev) => Math.min(slides.length - 1, prev + 1))}
            disabled={currentSlide === slides.length - 1}
            className="p-2 rounded-lg border border-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-900 disabled:opacity-30 disabled:pointer-events-none transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </footer>
    </div>
  );
}
