"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
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
    <div className="min-h-screen bg-[#20272b] text-[#f5f0e7] flex flex-col justify-between selection:bg-[#e46e2e] selection:text-white">
      {/* Top Bar */}
      <header className="px-6 py-4 border-b border-white/10 flex items-center justify-between backdrop-blur-md sticky top-0 z-50 bg-[#171c1e]/90">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#e46e2e] flex items-center justify-center font-bold font-mono text-[#f5f0e7] text-sm">
            IN
          </div>
          <div>
            <div className="font-semibold text-sm tracking-tight flex items-center gap-2">
              <span className="font-display text-base">INDUSTRIA</span>
              <span className="text-[10px] px-2 py-0.2 bg-[#20272b] text-[#e7a45c] font-mono border border-[#e7a45c]/30 font-bold">
                SALES PITCH MODE
              </span>
            </div>
            <div className="text-[11px] font-mono text-[#7e8989]">
              Interactive Digital Factory Executive Showcase
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/demo/script"
            className="px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider bg-[#20272b] hover:bg-white/10 text-[#f5f0e7] border border-white/10 transition-colors flex items-center gap-1.5"
          >
            <Presentation size={13} className="text-[#e7a45c]" />
            <span>Sales Script</span>
          </Link>
          <Link
            href="/audit"
            className="px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider bg-[#e46e2e] hover:bg-[#bb5b2c] text-[#f5f0e7] transition-colors flex items-center gap-1.5 shadow-sm"
          >
            <Sparkles size={13} />
            <span>Factory Audit Tool</span>
          </Link>
          <Link
            href="/"
            className="px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider border border-white/20 hover:bg-white/5 text-[#aeb5b2] transition-colors"
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
            <span className="px-3 py-1 bg-[#171c1e] text-[#e7a45c] text-xs font-mono font-bold tracking-wider border border-[#e7a45c]/30">
              {slide.tag}
            </span>
            <span className="text-xs text-[#7e8989] font-mono">
              SLIDE 0{currentSlide + 1} OF 0{slides.length}
            </span>
          </div>

          {/* Heading */}
          <div className="space-y-3 max-w-4xl">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-display tracking-tight text-[#f5f0e7] leading-tight">
              {slide.title}
            </h1>
            <p className="text-sm sm:text-base text-[#aeb5b2] leading-relaxed font-normal">
              {slide.subtitle}
            </p>
          </div>

          {/* Stats Bar if present */}
          {slide.stats && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
              {slide.stats.map((st, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-[#171c1e] border border-white/10 shadow-xl"
                >
                  <div className="text-xs font-mono uppercase tracking-wider text-[#7e8989]">
                    {st.label}
                  </div>
                  <div className="text-3xl font-bold font-mono text-[#e7a45c] mt-2">
                    {st.value}
                  </div>
                  <div className="text-xs text-[#aeb5b2] mt-1">{st.desc}</div>
                </div>
              ))}
            </div>
          )}

          {/* Bullet Points if present */}
          {slide.points && (
            <div className="space-y-3 pt-2 max-w-3xl">
              {slide.points.map((pt, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-[#e7a45c]/20 text-[#e7a45c] flex items-center justify-center shrink-0 mt-0.5 border border-[#e7a45c]/40">
                    <CheckCircle2 size={13} />
                  </div>
                  <p className="text-xs sm:text-sm text-[#aeb5b2] leading-relaxed">
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
                  className="p-5 bg-[#171c1e] border border-white/10 space-y-2 shadow-xl"
                >
                  <div className="font-mono text-xs font-bold text-[#e7a45c]">{st.num}</div>
                  <div className="font-semibold text-sm text-[#f5f0e7]">{st.title}</div>
                  <p className="text-xs text-[#aeb5b2] leading-relaxed">{st.desc}</p>
                </div>
              ))}
            </div>
          )}

          {/* Jump Actions Strip */}
          <div className="pt-6 flex flex-wrap items-center gap-4">
            {slide.ctaLink.startsWith("/") ? (
              <Link
                href={slide.ctaLink}
                className="px-6 py-3 bg-[#e46e2e] hover:bg-[#bb5b2c] text-[#f5f0e7] font-semibold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg transition-all"
              >
                <span>{slide.ctaText}</span>
                <ArrowRight size={14} />
              </Link>
            ) : (
              <button
                onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
                className="px-6 py-3 bg-[#e46e2e] hover:bg-[#bb5b2c] text-[#f5f0e7] font-semibold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg transition-all"
              >
                <span>{slide.ctaText}</span>
                <ArrowRight size={14} />
              </button>
            )}

            <Link
              href="/admin/dashboard"
              className="px-6 py-3 bg-[#171c1e] hover:bg-white/10 text-[#f5f0e7] font-semibold text-xs uppercase tracking-wider border border-white/20 flex items-center gap-2 transition-all"
            >
              <span>Explore Admin CRM Command</span>
              <ArrowRight size={14} className="text-[#e7a45c]" />
            </Link>
          </div>
        </div>
      </main>

      {/* Slide Navigation Footer */}
      <footer className="px-6 py-4 border-t border-white/10 flex items-center justify-between bg-[#171c1e]/90">
        <div className="flex items-center gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 transition-all ${
                currentSlide === idx ? "w-8 bg-[#e7a45c]" : "w-2 bg-white/20 hover:bg-white/40"
              }`}
              title={`Slide ${idx + 1}`}
            />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setCurrentSlide((prev) => (prev > 0 ? prev - 1 : slides.length - 1))}
            className="p-2 border border-white/10 hover:bg-white/5 text-[#aeb5b2] hover:text-[#f5f0e7] transition-colors"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
            className="p-2 border border-white/10 hover:bg-white/5 text-[#aeb5b2] hover:text-[#f5f0e7] transition-colors"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </footer>
    </div>
  );
}
