"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import {
  Factory,
  ShieldCheck,
  Award,
  Users,
  TrendingUp,
  ChevronRight,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fafaf8]">
      <Navbar />

      <main className="flex-1 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1.5 text-xs text-stone-500 mb-6">
            <Link href="/" className="hover:text-stone-900">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-stone-900 font-semibold">About Industria</span>
          </div>

          {/* Hero */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#d4560a]">
                Industrial Manufacturing Heritage
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-stone-900 tracking-tight leading-tight">
                Pioneering Precision Engineering & Digital Transparency
              </h1>
              <p className="text-sm sm:text-base text-stone-600 leading-relaxed pt-2">
                Founded in Gujarat&apos;s vibrant manufacturing corridor, INDUSTRIA represents the gold standard in contract precision manufacturing. We combine three decades of 5-axis CNC machining, high-pressure forging, and ASME pressure component engineering with a modern 24/7 digital interface.
              </p>
              <div className="pt-4 flex flex-wrap gap-4 text-xs font-semibold text-stone-800">
                <span className="flex items-center gap-1.5 bg-stone-100 px-3 py-1.5 rounded-lg">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> 140+ CNC & Turning Centers
                </span>
                <span className="flex items-center gap-1.5 bg-stone-100 px-3 py-1.5 rounded-lg">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> ISO 9001:2015 Certified
                </span>
                <span className="flex items-center gap-1.5 bg-stone-100 px-3 py-1.5 rounded-lg">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> IATF 16949 & AS9100D Certified
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 relative h-80 sm:h-96 rounded-2xl overflow-hidden shadow-xl border border-stone-200 bg-stone-900">
              <Image
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80"
                alt="Factory Floor"
                fill
                priority
                className="object-cover opacity-85"
              />
            </div>
          </div>

          {/* Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-xs space-y-2">
              <div className="w-10 h-10 rounded-lg bg-orange-50 text-[#d4560a] flex items-center justify-center">
                <Factory className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-stone-900">Modern Plant Infrastructure</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Featuring 5-axis CNC machining, high-capacity hydraulic presses, automated sub-arc welding, and temperature-controlled inspection cleanrooms.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-xs space-y-2">
              <div className="w-10 h-10 rounded-lg bg-orange-50 text-[#d4560a] flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-stone-900">Zero-Compromise Quality</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                100% heat number traceability, spectro chemical analysis, CMM dimensional certification, and hydrostatic burst testing for demanding environments.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-xs space-y-2">
              <div className="w-10 h-10 rounded-lg bg-orange-50 text-[#d4560a] flex items-center justify-center">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-stone-900">Digital Customer Workflow</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
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
