"use client";

import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { ProcessTimelineSection } from "@/components/marketing/ProcessTimelineSection";
import { CapabilitiesSection } from "@/components/marketing/CapabilitiesSection";
import { ChevronRight, Wrench, ShieldCheck, Cpu, ArrowRight } from "lucide-react";

export default function ManufacturingProcessPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fafaf8]">
      <Navbar />

      <main className="flex-1 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1.5 text-xs text-stone-500 mb-6">
            <Link href="/" className="hover:text-stone-900">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-stone-900 font-semibold">Manufacturing Process & Capabilities</span>
          </div>

          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#d4560a]">
              Engineering Excellence
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight mt-1">
              Precision Plant Operations & Quality Infrastructure
            </h1>
            <p className="text-sm text-stone-600 mt-2 leading-relaxed">
              From raw forging metallography to 5-axis CNC machining, robotic seam welding, and pressure hydrostatic certification — explore our verified factory quality steps.
            </p>
          </div>

          <ProcessTimelineSection />
          <CapabilitiesSection />

          {/* Plant Inspection Callout */}
          <div className="mt-16 bg-stone-900 rounded-2xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Audits & Witness Testing
              </span>
              <h3 className="text-xl font-bold">Want to inspect our machinery or audit our plant?</h3>
              <p className="text-xs text-stone-300 max-w-xl">
                We facilitate third-party witness testing (TUV, Bureau Veritas, SGS) and provide customer plant tours.
              </p>
            </div>
            <Link
              href="/book-demo"
              className="px-6 py-3 rounded-xl bg-[#d4560a] hover:bg-[#b84605] text-white text-xs font-bold shadow-md transition-all shrink-0"
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
