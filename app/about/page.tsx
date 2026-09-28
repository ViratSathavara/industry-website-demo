"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import {
  Factory,
  ShieldCheck,
  TrendingUp,
  ChevronRight,
  CheckCircle2,
  Cpu
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#20272b] text-[#f5f0e7]">
      <Navbar />

      <main className="flex-1 pt-28 pb-20 relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-14 relative z-10">
          <div className="flex items-center gap-2 text-xs text-[#aeb5b2] font-mono mb-8">
            <Link href="/" className="hover:text-[#e7a45c] transition-colors">
              Home
            </Link>
            <ChevronRight size={13} className="text-[#7e8989]" />
            <span className="text-[#f5f0e7] font-semibold">About Industria</span>
          </div>

          {/* Hero */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#e7a45c]/30 text-[#e7a45c] text-xs font-mono mb-2 bg-white/5">
                <Cpu size={14} />
                <span className="uppercase tracking-[.14em]">Industrial Manufacturing Heritage</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display tracking-tight text-[#f5f0e7] leading-tight">
                Pioneering Precision Engineering & <em className="text-[#e7a45c]">Digital Transparency.</em>
              </h1>
              <p className="text-sm sm:text-base text-[#aeb5b2] leading-relaxed pt-2">
                Founded in India&apos;s vibrant manufacturing corridor, INDUSTRIA represents the gold standard in contract precision manufacturing. We combine three decades of 5-axis CNC machining, high-pressure forging, and ASME pressure component engineering with a modern 24/7 digital interface.
              </p>
              <div className="pt-4 flex flex-wrap gap-4 text-xs font-mono text-[#d2d1c9]">
                <span className="flex items-center gap-2 bg-[#171c1e] px-3.5 py-2 border border-white/10">
                  <CheckCircle2 size={15} className="text-[#e7a45c]" /> 140+ CNC & Turning Centers
                </span>
                <span className="flex items-center gap-2 bg-[#171c1e] px-3.5 py-2 border border-white/10">
                  <CheckCircle2 size={15} className="text-[#e7a45c]" /> ISO 9001:2015 Certified
                </span>
                <span className="flex items-center gap-2 bg-[#171c1e] px-3.5 py-2 border border-white/10">
                  <CheckCircle2 size={15} className="text-[#e7a45c]" /> IATF 16949 & AS9100D Certified
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 relative h-80 sm:h-96 overflow-hidden border border-white/15 bg-[#171c1e]">
              <Image
                src="/industrial-hero.jpg"
                alt="Factory Floor"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#20272b] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 font-mono text-[10px] uppercase tracking-[.14em] text-[#ddd8cb]">
                Shop Floor / 5-Axis Milling Cells
              </div>
            </div>
          </div>

          {/* Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-[#171c1e] p-6 border border-white/10 space-y-3">
              <div className="size-11 border border-white/15 text-[#e7a45c] flex items-center justify-center bg-[#20272b]">
                <Factory size={20} />
              </div>
              <h3 className="font-display text-xl text-[#f5f0e7]">Modern Plant Infrastructure</h3>
              <p className="text-xs text-[#aeb5b2] leading-relaxed">
                Featuring 5-axis CNC machining, high-capacity hydraulic presses, automated sub-arc welding, and temperature-controlled inspection cleanrooms.
              </p>
            </div>

            <div className="bg-[#171c1e] p-6 border border-white/10 space-y-3">
              <div className="size-11 border border-white/15 text-[#e7a45c] flex items-center justify-center bg-[#20272b]">
                <ShieldCheck size={20} />
              </div>
              <h3 className="font-display text-xl text-[#f5f0e7]">Zero-Compromise Quality</h3>
              <p className="text-xs text-[#aeb5b2] leading-relaxed">
                100% heat number traceability, spectro chemical analysis, CMM dimensional certification, and hydrostatic burst testing for demanding environments.
              </p>
            </div>

            <div className="bg-[#171c1e] p-6 border border-white/10 space-y-3">
              <div className="size-11 border border-white/15 text-[#e7a45c] flex items-center justify-center bg-[#20272b]">
                <TrendingUp size={20} />
              </div>
              <h3 className="font-display text-xl text-[#f5f0e7]">Digital Customer Workflow</h3>
              <p className="text-xs text-[#aeb5b2] leading-relaxed">
                Dedicated buyer portals giving our procurement clients live production visibility, instant quotation approvals, and downloadable compliance records.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
