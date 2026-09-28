"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, ShieldCheck, Cpu } from "lucide-react";

export const HeroSection: React.FC = () => {
  const [activeComponentIdx, setActiveComponentIdx] = useState(0);

  const heroComponents = [
    {
      name: "5-Axis Gas Turbine Closed Impeller",
      sku: "PRC-5AX-IMP718",
      material: "Titanium Grade 5 (Ti-6Al-4V)",
      tolerance: "±0.005 mm (5 Microns)",
      spindle: "18,000 RPM Continuous",
      surface: "Ra 0.4 µm Superfinished",
      qa: "100% Zeiss 3D CMM & ISO 1940 Balancing",
      image: "/images/components/impeller-5axis.svg",
      slug: "5-axis-cnc-machined-turbine-impeller"
    },
    {
      name: "Precision Induction Spline Shaft",
      sku: "PRC-TRN-SPL400",
      material: "Alloy Steel EN353 (58-62 HRC)",
      tolerance: "Journal Runout < 0.004 mm",
      spindle: "CNC Turning & Cylindrical Grinding",
      surface: "Ra 0.2 µm Bearing Seats",
      qa: "DIN 5480 Involute Profile & PPAP L3",
      image: "/images/components/spline-shaft.svg",
      slug: "precision-induction-hardened-spline-shaft"
    },
    {
      name: "Custom 4-Port Hydraulic Manifold",
      sku: "PRC-HYD-MNF400",
      material: "Ductile Iron GGG40 / 6061-T6 Al",
      tolerance: "420 Bar (6,000 PSI) Proof Tested",
      spindle: "Deep Hole Gun Drilling & TEM Deburring",
      surface: "Zero Cross-Port Leakage",
      qa: "ISO 4406 Cleanliness & Hydrostatic Cert",
      image: "/images/components/manifold-block.svg",
      slug: "high-pressure-hydraulic-manifold-block"
    }
  ];

  const current = heroComponents[activeComponentIdx];

  return (
    <section
      id="top"
      className="relative min-h-[780px] overflow-hidden bg-[#20272b] text-[#f4efe5] md:min-h-[860px]"
    >
      {/* Background Image */}
      <div className="absolute inset-0 size-full">
        <Image
          src="/industrial-hero.jpg"
          alt="CNC machining centre in a modern Indian factory"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-45"
        />
      </div>

      {/* Gradients and 90x90px Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(23,28,30,.98)_0%,rgba(23,28,30,.80)_48%,rgba(23,28,30,.25)_100%)]" />
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.14)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.14)_1px,transparent_1px)] [background-size:90px_90px]" />

      {/* Hero Content */}
      <div className="relative mx-auto flex min-h-[780px] max-w-[1440px] flex-col justify-end px-5 pb-16 pt-32 md:min-h-[860px] md:px-10 md:pb-24 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          {/* Left Column: Vision & Actions */}
          <div className="lg:col-span-8 max-w-3xl">
            <div className="reveal mb-6 flex flex-wrap items-center gap-3 text-[#e7a45c]">
              <span className="h-px w-10 bg-[#e7a45c]" />
              <span className="eyebrow">5-Axis CNC Machining & Micron Metrology · 01 / 05</span>
              <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 border border-[#e7a45c]/30 text-[10px] font-mono text-[#e7a45c] bg-white/5">
                <ShieldCheck size={12} />
                IATF 16949 & AS9100D
              </span>
            </div>

            <h1 className="reveal reveal-1 font-display text-[clamp(3.2rem,7vw,7.6rem)] leading-[.88] tracking-[-.045em] text-balance">
              High-Tolerance CNC Machining & <em className="text-[#e7a45c]">Critical Assemblies.</em>
            </h1>

            <p className="reveal reveal-2 mt-7 max-w-2xl text-base leading-7 text-[#d2d1c9] md:text-lg">
              Operating 140+ DMG Mori & Mazak multi-axis machining centers with Zeiss 3D CMM metrology certified to IATF 16949 and AS9100D. Delivering flight-critical blisks, drivetrain splines, and 420 Bar manifold blocks.
            </p>

            <div className="reveal reveal-3 mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#parts"
                className="group inline-flex items-center justify-center gap-3 bg-[#e46e2e] px-5 py-3.5 text-sm font-semibold text-[#fff5e9] transition-all hover:bg-[#f38b43]"
              >
                Explore Precision Components{" "}
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
              <Link
                href="/request-quote"
                className="inline-flex items-center justify-center gap-3 border border-white/30 px-5 py-3.5 text-sm font-semibold text-[#f4efe5] transition-colors hover:border-[#e7a45c] hover:text-[#e7a45c]"
              >
                Instant CAD Feasibility RFQ <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>

          {/* Right Column: Live Interactive CAD Component Card */}
          <div className="lg:col-span-4 hidden lg:block">
            <div className="border border-white/20 bg-[#20272b]/85 p-5 backdrop-blur-md space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3 text-[10px] uppercase font-mono tracking-[.1em] text-[#aeb5b2]">
                <span>Component Blueprints</span>
                <span className="text-[#e7a45c] flex items-center gap-1">
                  <span className="size-1.5 rounded-full bg-[#e7a45c] animate-pulse" />
                  Live CAD
                </span>
              </div>

              {/* Component Tabs */}
              <div className="grid grid-cols-3 gap-1.5 font-mono text-[10px]">
                {heroComponents.map((c, i) => (
                  <button
                    key={c.sku}
                    onClick={() => setActiveComponentIdx(i)}
                    className={`py-1.5 px-1 border transition-all text-center truncate ${
                      activeComponentIdx === i
                        ? "border-[#e7a45c] bg-[#e7a45c]/10 text-[#e7a45c] font-bold"
                        : "border-white/10 text-[#899492] hover:border-white/20 hover:text-[#f4efe5]"
                    }`}
                  >
                    0{i + 1} {c.sku.split("-")[2]}
                  </button>
                ))}
              </div>

              {/* Vector Blueprint Preview */}
              <div className="relative h-44 w-full bg-[#171c1e] border border-white/10 overflow-hidden flex items-center justify-center p-3">
                <Image
                  src={current.image}
                  alt={current.name}
                  fill
                  unoptimized
                  className="object-contain p-2"
                />
                <span className="absolute bottom-2 left-2 font-mono text-[9px] text-[#e7a45c] bg-[#20272b]/90 px-1.5 py-0.5 border border-[#e7a45c]/30">
                  {current.sku}
                </span>
              </div>

              {/* Quick Specs */}
              <div className="space-y-1.5 font-mono text-[11px]">
                <div className="flex justify-between text-[#d2d1c9]">
                  <span className="text-[#7e8989]">Material:</span>
                  <span className="text-[#f4efe5] truncate max-w-[170px]">{current.material}</span>
                </div>
                <div className="flex justify-between text-[#d2d1c9]">
                  <span className="text-[#7e8989]">Tolerance:</span>
                  <span className="text-[#e7a45c] font-bold">{current.tolerance}</span>
                </div>
                <div className="flex justify-between text-[#d2d1c9]">
                  <span className="text-[#7e8989]">Finish:</span>
                  <span className="text-[#f4efe5]">{current.surface}</span>
                </div>
              </div>

              <Link
                href={`/products/${current.slug}`}
                className="block text-center py-2.5 bg-[#e46e2e] hover:bg-[#f38b43] text-[#fff5e9] text-[11px] font-mono font-semibold uppercase tracking-[.1em] transition-colors"
              >
                Inspect 3D CAD Specs →
              </Link>
            </div>
          </div>
        </div>

        {/* Telemetry Strip */}
        <div className="mt-14 flex flex-wrap items-end justify-between gap-8 border-t border-white/20 pt-5 text-[11px] text-[#b7b6ae]">
          <div className="flex items-center gap-3">
            <span className="size-2 bg-[#e7a45c]" />
            <span className="font-mono uppercase tracking-[.13em]">
              142 / 144 CNC Centers Online · 98.6% OEE · IATF 16949 & AS9100D Certified
            </span>
          </div>
          <div className="font-mono uppercase tracking-[.13em] text-[#b7b6ae]">
            22.98° N · 72.38° E / Sanand GIDC, Gujarat, India
          </div>
        </div>
      </div>

      {/* Floating Live Signal Card (Mobile & Tablet) */}
      <div className="absolute bottom-20 right-5 hidden w-[260px] border border-white/20 bg-[#20272b]/85 p-4 backdrop-blur-md xl:block xl:right-14">
        <div className="mb-4 flex items-center justify-between text-[10px] uppercase tracking-[.13em] text-[#c3c1b7]">
          <span>Fleet Telemetry</span>
          <span className="flex items-center gap-1.5 text-[#e7a45c]">
            <span className="size-1.5 animate-pulse rounded-full bg-[#e7a45c]" /> online
          </span>
        </div>
        <p className="font-display text-3xl leading-none text-[#f5eee3]">
          140+ <span className="text-lg italic text-[#e7a45c]">CNC Centers</span>
        </p>
        <div className="mt-4 grid grid-cols-3 gap-2 border-t border-white/15 pt-3 font-mono text-[9px] uppercase tracking-[.08em] text-[#9eaaa9]">
          <span>±0.005 mm</span>
          <span>Ra 0.2 µm</span>
          <span>420 Bar</span>
        </div>
      </div>
    </section>
  );
};
