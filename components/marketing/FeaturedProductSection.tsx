"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ShieldCheck, CheckCircle2, FileText, Download, Cpu, Droplets } from "lucide-react";

export const FeaturedProductSection: React.FC = () => {
  return (
    <section className="bg-[#171c1e] text-[#f5f0e7] px-5 py-24 md:px-10 md:py-32 lg:px-14 border-t border-b border-white/10 relative overflow-hidden">
      {/* Background Subtle Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#e46e2e]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-[1440px] relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-8 mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="h-px w-8 bg-[#e7a45c]" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#e7a45c]">
                Editorial Showcase / 05
              </span>
            </div>
            <h2 className="font-display text-[clamp(2.6rem,5vw,5rem)] leading-[.92] tracking-[-.04em] text-[#f5f0e7]">
              Engineered for <em className="text-[#e7a45c]">extreme hydraulic duty.</em>
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-[#aeb5b2] leading-relaxed font-sans">
            A comprehensive look at our flagship V6 Submersible Water Motor and dynamically balanced bronze impeller assembly, engineered to sustain 25,000 N axial downthrust in deep-well agricultural and industrial installations.
          </p>
        </div>

        {/* Editorial 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Visual Asset & Floating Callouts */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] w-full overflow-hidden border border-white/15 bg-[#20272b] shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80"
                alt="V6 Submersible Water Pump Motor Assembly"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#171c1e] via-transparent to-transparent opacity-70" />

              <span className="absolute top-4 left-4 font-mono text-xs font-bold text-[#e7a45c] bg-[#20272b]/90 px-3 py-1 border border-[#e7a45c]/30">
                FLAGSHIP: WTR-MTR-V6-15HP
              </span>

              <div className="absolute bottom-4 left-4 right-4 bg-[#20272b]/90 backdrop-blur-md p-3 border border-white/15 rounded flex items-center justify-between font-mono text-xs">
                <div className="flex items-center gap-2">
                  <Droplets size={16} className="text-[#e7a45c]" />
                  <span>IP68 Submersion Rated · Up to 300m Depth</span>
                </div>
                <span className="text-[#e7a45c] font-bold">100% Tested</span>
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Technical Breakdown */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-mono font-bold uppercase text-[#e7a45c] tracking-wider">
                Precision Submersible Drive Architecture
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-heading text-[#f5f0e7] mt-1">
                V6 Rewindable Water-Cooled Motor with Mitchell Carbon Thrust Pads
              </h3>
              <p className="text-xs sm:text-sm text-[#aeb5b2] mt-3 leading-relaxed">
                Fabricated with a seamless AISI 304 drawn stainless steel outer cylinder, high-permeability CRNO electrical steel laminations, and 100% EC grade electrolytic copper winding wire insulated with dual-layer bi-axially oriented polypropylene.
              </p>
            </div>

            {/* Technical Specifications Grid */}
            <div className="grid grid-cols-2 gap-3 p-4 bg-[#20272b] border border-white/10 font-mono text-xs">
              <div className="space-y-1">
                <div className="text-[#7e8989] text-[10px] uppercase">Power Envelope</div>
                <div className="text-[#f5f0e7] font-bold">7.5 HP to 50 HP (3-Phase)</div>
              </div>
              <div className="space-y-1">
                <div className="text-[#7e8989] text-[10px] uppercase">Axial Downthrust Capacity</div>
                <div className="text-[#e7a45c] font-bold">25,000 N (Mitchell Pad)</div>
              </div>
              <div className="space-y-1">
                <div className="text-[#7e8989] text-[10px] uppercase">Operating Speed</div>
                <div className="text-[#f5f0e7] font-bold">2,880 RPM (50 Hz / 415V)</div>
              </div>
              <div className="space-y-1">
                <div className="text-[#7e8989] text-[10px] uppercase">Shaft Journal Runout</div>
                <div className="text-[#e7a45c] font-bold">&lt; 0.003 mm TIR Ground</div>
              </div>
            </div>

            {/* Application Badges */}
            <div>
              <div className="text-xs font-mono text-[#7e8989] mb-2 uppercase">Recommended Engineering Applications:</div>
              <div className="flex flex-wrap gap-2 text-xs font-mono">
                {[
                  "Deep-Well Borewell Irrigation",
                  "Municipal Water Boosting",
                  "Mine Dewatering",
                  "Solar Pumping Skids",
                  "Industrial Raw Water Intake"
                ].map((app) => (
                  <span
                    key={app}
                    className="px-2.5 py-1 bg-white/5 border border-white/10 text-[#d8d7d0] rounded text-[11px]"
                  >
                    {app}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
              <Link
                href="/request-quote?productId=prod-water-001"
                className="inline-flex items-center gap-2 bg-[#e46e2e] hover:bg-[#f38b43] text-white px-5 py-3 text-xs font-bold uppercase tracking-wider transition-colors shadow-md"
              >
                <span>Request Custom Quote</span>
                <ArrowUpRight size={14} />
              </Link>

              <Link
                href="/request-sample?productId=prod-water-001"
                className="inline-flex items-center gap-2 border border-white/20 hover:border-[#e7a45c] text-[#f5f0e7] px-5 py-3 text-xs font-bold uppercase tracking-wider transition-colors"
              >
                <span>Request Sample Part</span>
              </Link>

              <Link
                href="/products/v6-submersible-water-pump-motor-assembly"
                className="text-xs font-mono text-[#e7a45c] hover:underline flex items-center gap-1 font-bold ml-auto"
              >
                <span>Full Technical Spec Sheet</span>
                <ArrowUpRight size={12} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
