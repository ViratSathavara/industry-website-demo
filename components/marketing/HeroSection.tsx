"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, ShieldCheck, Cpu, CheckCircle2, TrendingUp, Bell } from "lucide-react";
import { useDemoState } from "@/lib/services/demo-state-context";

export const HeroSection: React.FC = () => {
  const { t } = useDemoState();
  const [activeComponentIdx, setActiveComponentIdx] = useState(0);

  const heroComponents = [
    {
      name: "V6 Submersible Water Motor Stator & Rotor Assembly",
      sku: "WTR-MTR-V6-15HP",
      material: "SS304 Shell + 100% EC Grade Copper",
      tolerance: "Bearing Journal Runout < 0.003 mm",
      speed: "2,880 RPM (50 Hz 415V AC)",
      thrust: "Mitchell Carbon Thrust Bearing (25 kN)",
      qa: "100% High-Voltage & Submersion Tested",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
      slug: "v6-submersible-water-pump-motor-assembly"
    },
    {
      name: "Precision Bronze Water Pump Impeller",
      sku: "WTR-IMP-BRZ180",
      material: "Gunmetal Bronze LTB-2 / Forged Brass",
      tolerance: "ISO 1940 Grade G1.0 Dynamic Balance",
      speed: "3,000 RPM Rated Operating Speed",
      thrust: "Hydraulic Backward-Curved Shrouded Vanes",
      qa: "Cavitation & Optical Roughness Inspection",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
      slug: "gunmetal-bronze-water-pump-impeller"
    },
    {
      name: "Cast Iron Monoblock Volute Casing",
      sku: "WTR-CSG-VOL200",
      material: "High-Grade Cast Iron FG 260",
      tolerance: "16 Bar Sustained Hydrostatic Test",
      speed: "Precision CNC Face-Turned Spigot",
      thrust: "Anti-Corrosion Drinking Water Coating",
      qa: "100% Pressure Decay & Wall Thickness CMM",
      image: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80",
      slug: "cast-iron-monoblock-pump-volute-casing"
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
          src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1800&q=80"
          alt="Precision Water Motor & Pump Manufacturing Plant"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-25"
        />
      </div>

      {/* Gradients and 90x90px Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(23,28,30,.98)_0%,rgba(23,28,30,.85)_50%,rgba(23,28,30,.40)_100%)]" />
      <div className="absolute inset-0 opacity-15 [background-image:linear-gradient(rgba(255,255,255,.14)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.14)_1px,transparent_1px)] [background-size:90px_90px]" />

      {/* Hero Content */}
      <div className="relative mx-auto flex min-h-[780px] max-w-[1440px] flex-col justify-end px-5 pb-16 pt-36 md:min-h-[860px] md:px-10 md:pb-24 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          {/* Left Column: Vision & Actions */}
          <div className="lg:col-span-7 max-w-3xl">
            <div className="mb-6 flex flex-wrap items-center gap-3 text-[#e7a45c]">
              <span className="h-px w-10 bg-[#e7a45c]" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#e7a45c]">
                {t.heroTag}
              </span>
              <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 border border-[#e7a45c]/30 text-[10px] font-mono text-[#e7a45c] bg-white/5">
                <ShieldCheck size={12} />
                ISI / BIS & ISO 9001:2015
              </span>
            </div>

            <h1 className="font-display text-[clamp(2.8rem,6vw,6.5rem)] leading-[.92] tracking-[-.04em] text-balance">
              {t.heroHeadline} <em className="text-[#e7a45c]">{t.heroHeadlineEm}</em>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-[#d2d1c9] md:text-lg">
              {t.heroSubheadline}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/products"
                className="group inline-flex items-center justify-center gap-3 bg-[#e46e2e] px-6 py-3.5 text-sm font-semibold text-[#fff5e9] transition-all hover:bg-[#f38b43] shadow-lg"
              >
                {t.exploreFactory}{" "}
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/request-quote"
                className="inline-flex items-center justify-center gap-3 border border-white/30 px-6 py-3.5 text-sm font-semibold text-[#f4efe5] transition-colors hover:border-[#e7a45c] hover:text-[#e7a45c]"
              >
                {t.viewCatalog} <ArrowUpRight size={16} />
              </Link>
            </div>

            {/* Quick Metrics Bar */}
            <div className="mt-10 grid grid-cols-3 gap-4 pt-6 border-t border-white/10 font-mono text-xs text-[#aeb5b2]">
              <div>
                <div className="text-xl font-bold text-[#f4efe5]">{t.heroStat1Value}</div>
                <div className="text-[11px] text-[#7e8989] mt-0.5">{t.heroStat1Label}</div>
              </div>
              <div>
                <div className="text-xl font-bold text-[#e7a45c]">{t.heroStat2Value}</div>
                <div className="text-[11px] text-[#7e8989] mt-0.5">{t.heroStat2Label}</div>
              </div>
              <div>
                <div className="text-xl font-bold text-[#f4efe5]">{t.heroStat3Value}</div>
                <div className="text-[11px] text-[#7e8989] mt-0.5">{t.heroStat3Label}</div>
              </div>
            </div>
          </div>

          {/* Right Column: Live Interactive CAD Component Card */}
          <div className="lg:col-span-5 hidden lg:block space-y-4">
            {/* Live Floating Enquiry Toast Card */}
            <div className="bg-[#171c1e]/90 border border-white/15 p-3 rounded shadow-xl flex items-center gap-3 backdrop-blur-md animate-fade-in font-mono text-xs">
              <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                <Bell size={14} />
              </div>
              <div className="flex-1 truncate">
                <div className="text-[#f4efe5] font-semibold flex items-center gap-1.5">
                  <span>New RFQ Received</span>
                  <span className="size-1.5 rounded-full bg-emerald-400 animate-ping" />
                </div>
                <div className="text-[11px] text-[#7e8989] truncate">
                  Aarav Agri Equipment Ltd. • 250 pcs V6 Submersible Stator Assemblies
                </div>
              </div>
              <span className="text-[10px] text-[#e7a45c] bg-white/5 px-2 py-0.5 border border-white/10 shrink-0">
                Just Now
              </span>
            </div>

            {/* Component Blueprint Card */}
            <div className="border border-white/20 bg-[#20272b]/95 p-5 backdrop-blur-md space-y-4 shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-3 text-[10px] uppercase font-mono tracking-[.1em] text-[#aeb5b2]">
                <span className="flex items-center gap-1.5">
                  <Cpu size={12} className="text-[#e7a45c]" />
                  Water Motor Engineering Blueprint
                </span>
                <span className="text-[#e7a45c] flex items-center gap-1">
                  <span className="size-1.5 rounded-full bg-[#e7a45c] animate-pulse" />
                  Live Spec
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
                    0{i + 1} {c.sku.split("-")[1]}
                  </button>
                ))}
              </div>

              {/* Real Photo Preview */}
              <div className="relative h-48 w-full bg-[#171c1e] border border-white/10 overflow-hidden group">
                <Image
                  src={current.image}
                  alt={current.name}
                  fill
                  sizes="400px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#171c1e] via-transparent to-transparent opacity-80" />
                <span className="absolute bottom-2 left-3 font-mono text-[11px] font-bold text-[#e7a45c] bg-[#20272b]/90 px-2 py-0.5 border border-[#e7a45c]/30">
                  {current.sku}
                </span>
              </div>

              {/* Spec Details Table */}
              <div className="space-y-1.5 font-mono text-[11px]">
                <div className="font-semibold text-sm text-[#f4efe5] truncate font-sans">
                  {current.name}
                </div>
                <div className="flex justify-between text-[#d2d1c9] border-b border-white/5 pb-1">
                  <span className="text-[#7e8989]">Material:</span>
                  <span className="font-medium text-[#f4efe5]">{current.material}</span>
                </div>
                <div className="flex justify-between text-[#d2d1c9] border-b border-white/5 pb-1">
                  <span className="text-[#7e8989]">Tolerance:</span>
                  <span className="font-medium text-[#e7a45c]">{current.tolerance}</span>
                </div>
                <div className="flex justify-between text-[#d2d1c9]">
                  <span className="text-[#7e8989]">Inspection:</span>
                  <span className="font-medium text-[#f4efe5] truncate max-w-[200px]">{current.qa}</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href={`/products/${current.slug}`}
                  className="flex items-center justify-center gap-1.5 py-2 w-full bg-white/10 hover:bg-[#e46e2e] text-xs font-mono font-bold uppercase transition-colors text-white border border-white/10"
                >
                  <span>View Part Specifications</span>
                  <ArrowUpRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
