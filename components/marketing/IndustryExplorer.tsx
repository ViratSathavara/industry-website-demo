"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Gauge, Layers3, ScanLine, Factory, ArrowUpRight, X, ShieldCheck } from "lucide-react";

export const IndustryExplorer: React.FC = () => {
  const [activeIndustryIdx, setActiveIndustryIdx] = useState<number | null>(null);

  const industries = [
    {
      id: "aerospace",
      name: "Aerospace & Defense",
      standard: "AS9100D Rev D Certified",
      metrics: "±0.005 mm · Ti-6Al-4V · Inconel 718",
      description: "Flight-critical closed turbine impellers, multi-axis blisks, and high-altitude hydraulic actuator sleeves.",
      icon: Gauge,
      link: "/products?category=impellers"
    },
    {
      id: "automotive",
      name: "Automotive & Electric Mobility",
      standard: "IATF 16949:2016 Certified",
      metrics: "DIN 5480 · EN353 · Ra 0.2 µm",
      description: "High-speed transmission splined shafts, EV motor rotor shafts, and precision steering knuckles.",
      icon: Layers3,
      link: "/products?category=shafts"
    },
    {
      id: "hydraulics",
      name: "Heavy Hydraulics & Fluid Power",
      standard: "420 Bar Proof Tested",
      metrics: "GGG40 · 6,000 PSI · Gun Drilled",
      description: "Custom 4-port hydraulic manifold blocks, valve bodies, and subsea fluid distribution systems.",
      icon: ScanLine,
      link: "/products?category=manifolds"
    },
    {
      id: "petrochemical",
      name: "Oil & Gas / Petrochemical Flanges",
      standard: "ASME B16.5 & Section VIII",
      metrics: "SS 316L · Class 1500 · Dual Grade",
      description: "Heavy duty weldneck flanges, blind flanges, and forged pressure vessel nozzles with 100% UT inspection.",
      icon: Factory,
      link: "/products?category=pressure-flanges"
    }
  ];

  return (
    <section id="industries" className="bg-[#20272b] px-5 py-24 text-[#f5f0e7] md:px-10 md:py-32 lg:px-14">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <span className="eyebrow text-[#e7a45c]">Where capability meets demand / 03</span>
            <h2 className="mt-5 max-w-2xl font-display text-[clamp(3rem,6vw,6.2rem)] leading-[.9] tracking-[-.04em]">
              Built for the industries that keep <em className="text-[#e7a45c]">India moving.</em>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-6 text-[#aeb5b2]">
            Explore audited manufacturing capabilities, international tolerances, and material certifications across critical engineering sectors.
          </p>
        </div>

        <div className="mt-14 grid border-t border-white/15 md:grid-cols-4">
          {industries.map((ind, index) => {
            const Icon = ind.icon;
            const isSelected = activeIndustryIdx === index;

            return (
              <button
                type="button"
                key={ind.id}
                onClick={() => setActiveIndustryIdx(isSelected ? null : index)}
                className={`group border-b border-white/15 p-5 text-left transition-colors hover:bg-[#293337] md:border-r md:p-7 ${
                  isSelected ? "bg-[#293337]" : ""
                }`}
              >
                <div className="mb-14 flex items-center justify-between">
                  <Icon
                    size={21}
                    strokeWidth={1.2}
                    className={isSelected ? "text-[#e7a45c]" : "text-[#aeb5b2]"}
                  />
                  <span className="font-mono text-[10px] text-[#7e8989]">0{index + 1}</span>
                </div>
                <h3 className="text-base font-semibold text-[#f5f0e7]">{ind.name}</h3>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-[.12em] text-[#e7a45c]">
                  {ind.standard}
                </p>
                <p className="mt-1 font-mono text-[10px] text-[#899492]">{ind.metrics}</p>
                <p className="mt-3 text-xs leading-5 text-[#aeb5b2]">{ind.description}</p>
                <div className="mt-6 flex items-center gap-1.5 text-xs font-mono text-[#e7a45c] group-hover:underline">
                  <span>View specifications</span>
                  <ArrowUpRight size={14} />
                </div>
              </button>
            );
          })}
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-b border-white/15 pb-5 text-xs text-[#aeb5b2]">
          <span className="font-mono">
            {activeIndustryIdx !== null
              ? `Filtered view: ${industries[activeIndustryIdx].name}`
              : "All 4 critical engineering sectors indexed"}
          </span>
          <div className="flex items-center gap-4">
            {activeIndustryIdx !== null && (
              <button
                type="button"
                onClick={() => setActiveIndustryIdx(null)}
                className="flex items-center gap-1.5 uppercase font-mono tracking-[.1em] text-[#e7a45c] hover:underline"
              >
                Reset view <X size={13} />
              </button>
            )}
            <Link
              href="/products"
              className="flex items-center gap-1.5 uppercase font-mono tracking-[.1em] text-[#e7a45c] hover:underline"
            >
              Browse Complete Parts Catalog <ArrowUpRight size={13} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
