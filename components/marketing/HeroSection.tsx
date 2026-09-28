"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  FileText,
  ShieldCheck,
  TrendingUp,
  Sparkles,
  Building,
  CheckCircle2,
  Clock,
  Layers,
  ArrowUpRight,
  Cpu,
  Package
} from "lucide-react";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-10 pb-20 border-b border-stone-200/80 bg-gradient-to-b from-stone-50 via-[#fafaf8] to-[#fafaf8]">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-industrial-grid opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Industry Focus Badge */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-900 text-stone-100 text-xs font-medium shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-amber-400 font-bold uppercase tracking-wider text-[10px]">
              TIER-1 PRECISION MANUFACTURING
            </span>
          </div>
          <span className="text-xs text-stone-600 font-medium">
            ±0.005mm Tolerance • 140+ CNC & VMC Centers • ISO 9001:2015 & IATF 16949 Certified
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-stone-900 leading-[1.12] font-heading">
              High-Precision CNC Machining &{" "}
              <span className="text-[#d4560a]">
                Engineered Forgings.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-stone-600 font-normal leading-relaxed max-w-2xl">
              We engineer custom CNC turned parts, 5-axis milled components, and high-pressure forged flanges for Automotive and Aerospace OEMs. Upload your 2D/3D CAD drawing to receive a formal quotation in under 2 hours.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/request-quote"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#d4560a] text-white font-semibold text-sm hover:bg-[#b84605] shadow-md hover:shadow-lg transition-all group"
              >
                <FileText className="w-4 h-4" />
                <span>Request Custom Drawing RFQ</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-stone-800 font-semibold text-sm border border-stone-300 hover:bg-stone-50 hover:border-stone-400 shadow-sm transition-all"
              >
                <Package className="w-4 h-4 text-stone-500" />
                <span>Browse Precision Components</span>
              </Link>

              <Link
                href="/overview"
                className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl text-stone-700 hover:text-stone-900 text-xs font-semibold hover:bg-stone-200/50 transition-colors"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>How to Explain to Client (3 Min)</span>
              </Link>
            </div>

            {/* Trust Metrics Pill Strip */}
            <div className="pt-6 border-t border-stone-200/80 grid grid-cols-3 gap-4">
              <div>
                <div className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight font-mono text-primary">
                  ±0.005 mm
                </div>
                <div className="text-[11px] text-stone-500 font-medium">CMM Precision Tolerance</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight font-mono">
                  140+ CNCs
                </div>
                <div className="text-[11px] text-stone-500 font-medium">5-Axis Milling & Turning</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight font-mono text-emerald-700">
                  2.4 Hours
                </div>
                <div className="text-[11px] text-stone-500 font-medium">Average Quote Turnaround</div>
              </div>
            </div>
          </div>

          {/* Right Column: High Precision Visual Hero Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Toolroom Photo Card */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-stone-200 bg-white">
                <div className="relative h-72 w-full bg-stone-900">
                  <Image
                    src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80"
                    alt="5-Axis CNC Precision Machining Center"
                    fill
                    priority
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent" />

                  {/* Corner Badge */}
                  <div className="absolute top-3 left-3 bg-stone-900/90 backdrop-blur-md px-3 py-1 rounded-full text-white text-[11px] font-semibold border border-stone-700 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>Unit-1: Mazak 5-Axis VMC Active</span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest font-bold">
                      AEROSPACE & AUTOMOTIVE GRADE
                    </span>
                    <h3 className="text-lg font-bold font-heading mt-0.5">
                      Titanium & Alloy Steel CNC Machining
                    </h3>
                  </div>
                </div>

                {/* Sub Features Strip */}
                <div className="p-4 bg-stone-50 border-t border-stone-100 grid grid-cols-2 gap-3 text-xs">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="text-stone-700 font-medium">3D STEP & IGES Support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="text-stone-700 font-medium">EN 10204 3.1 MTC Included</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="text-stone-700 font-medium">Zeiss CMM Inspection</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="text-stone-700 font-medium">Live Order Tracking Portal</span>
                  </div>
                </div>
              </div>

              {/* Floating Quick Action Card */}
              <div className="mt-4 p-3.5 rounded-xl bg-white border border-stone-200 shadow-md flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-stone-900">Have a drawing ready?</div>
                  <div className="text-[11px] text-stone-500">Upload PDF / DWG / STEP for estimation</div>
                </div>
                <Link
                  href="/request-quote"
                  className="px-3.5 py-1.5 rounded-lg bg-stone-900 hover:bg-[#d4560a] text-white text-xs font-semibold transition-colors flex items-center gap-1 shadow-xs"
                >
                  <span>Upload Drawing</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
