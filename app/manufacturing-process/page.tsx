"use client";

import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { ProcessTimelineSection } from "@/components/marketing/ProcessTimelineSection";
import { CapabilitiesSection } from "@/components/marketing/CapabilitiesSection";
import { ChevronRight, Cpu } from "lucide-react";

export default function ManufacturingProcessPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#20272b] text-[#f5f0e7]">
      <Navbar />

      <main className="flex-1 pt-28 pb-16 relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-14 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-[#aeb5b2] font-mono mb-8">
            <Link href="/" className="hover:text-[#e7a45c] transition-colors">
              Home
            </Link>
            <ChevronRight size={13} className="text-[#7e8989]" />
            <span className="text-[#f5f0e7] font-semibold">
              Manufacturing Process & Capabilities
            </span>
          </div>

          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#e7a45c]/30 text-[#e7a45c] text-xs font-mono mb-4 bg-white/5">
              <Cpu size={14} />
              <span className="uppercase tracking-[.14em]">Tier-1 Manufacturing Protocols</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display tracking-tight text-[#f5f0e7]">
              Precision Plant Operations & <em className="text-[#e7a45c]">Quality Infrastructure.</em>
            </h1>
            <p className="text-sm sm:text-base text-[#aeb5b2] mt-4 leading-relaxed">
              From raw forging optical spectrometry to 5-axis DMG Mori CNC milling, Zeiss CMM 3D scanning, and 420 Bar hydrostatic certification — explore our audited factory quality steps.
            </p>
          </div>

          <ProcessTimelineSection />
          <div className="mt-12">
            <CapabilitiesSection />
          </div>

          {/* Plant Inspection Callout */}
          <div className="mt-16 bg-[#171c1e] p-8 border border-white/15 text-[#f5f0e7] flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
            <div className="space-y-2">
              <span className="eyebrow text-[#e7a45c] block">
                Audits & Witness Testing
              </span>
              <h3 className="text-2xl font-display text-[#f5f0e7]">
                Want to inspect our machinery or audit our plant?
              </h3>
              <p className="text-xs text-[#aeb5b2] max-w-xl">
                We facilitate third-party witness testing (TUV, Bureau Veritas, SGS, Lloyd&apos;s Register) and provide escorted customer plant tours in Sanand, Ahmedabad.
              </p>
            </div>
            <Link
              href="/request-quote"
              className="px-6 py-3.5 bg-[#e46e2e] hover:bg-[#f38b43] text-[#fff5e9] text-xs font-semibold uppercase tracking-[.12em] transition-all shrink-0 font-mono"
            >
              Schedule Factory Visit →
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
