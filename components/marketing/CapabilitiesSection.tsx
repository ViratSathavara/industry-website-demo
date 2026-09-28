"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CircleCheck, ScanLine, ArrowUpRight } from "lucide-react";

export const CapabilitiesSection: React.FC = () => {
  const proofItems = [
    [
      "01",
      "Process visibility",
      "From raw forging optical spectrometry to DMG Mori 5-axis machining, TEM thermal deburring, and ultrasonic wash."
    ],
    [
      "02",
      "Capability language",
      "Shop-floor expertise translated into buyer-ready DIN 5480, ASME B16.5, and ISO 1940 specifications."
    ],
    [
      "03",
      "RFQ intelligence",
      "Direct intake for STEP/IGES CAD files, geometric tolerances, raw material alloys, and batch call-off schedules."
    ]
  ];

  return (
    <section id="proof" className="bg-[#ddd9d0] px-5 py-24 md:px-10 md:py-32 lg:px-14">
      <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-24">
        {/* Left Column: Proof Narrative */}
        <div>
          <span className="eyebrow text-[#bb5b2c]">The proof layer / 05</span>
          <h2 className="mt-5 max-w-lg font-display text-[clamp(3rem,6vw,6rem)] leading-[.9] tracking-[-.04em] text-[#20272b]">
            Specific beats <em className="text-[#bb5b2c]">persuasive.</em>
          </h2>
          <p className="mt-7 max-w-md text-[15px] leading-7 text-[#5f6768]">
            No inflated claims. Let a buyer see the floor, understand the process, and inspect verified Zeiss CMM metrology records — before the first call.
          </p>

          <div className="mt-12 space-y-5">
            {proofItems.map(([number, title, copy]) => (
              <div key={number} className="flex gap-4 border-t border-[#c2bbb0] pt-4">
                <span className="font-mono text-[10px] text-[#bb5b2c] font-bold">{number}</span>
                <div>
                  <h3 className="text-sm font-semibold text-[#20272b]">{title}</h3>
                  <p className="mt-1 text-xs leading-5 text-[#697173]">{copy}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/manufacturing-process"
              className="inline-flex items-center gap-2 border-b border-[#bb5b2c] pb-2 text-xs font-mono font-bold uppercase tracking-[.1em] text-[#bb5b2c]"
            >
              Inspect Machinery & 5-Axis Machine Park <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>

        {/* Right Column: Visual Capability Feature */}
        <div className="relative min-h-[460px] overflow-hidden bg-[#20272b]">
          <Image
            src="/industrial-detail.jpg"
            alt="Zeiss 3D CMM inspection table with precision-machined turbine components"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover opacity-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#20272b] via-transparent to-[#20272b]/20" />

          {/* Top Floating Badge */}
          <div className="absolute left-5 top-5 border border-white/25 bg-[#20272b]/80 p-4 backdrop-blur-sm">
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[.12em] text-[#e7a45c]">
              <CircleCheck size={13} /> Zeiss CMM Inspected
            </div>
            <p className="mt-3 max-w-[190px] text-xs leading-5 text-[#d9d8d0]">
              Sub-micron calibration and EN 10204 Type 3.1 mill test certificates with every batch.
            </p>
          </div>

          {/* Bottom Card Banner */}
          <div className="absolute bottom-0 left-0 right-0 p-5 md:p-7">
            <div className="flex items-end justify-between">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[.13em] text-[#e7a45c]">
                  Quality Protocol / IATF-AS9100D
                </p>
                <p className="mt-2 font-display text-3xl text-[#f5f0e7]">
                  Precision that reads clearly.
                </p>
              </div>
              <ScanLine className="text-[#e7a45c]" size={32} strokeWidth={1} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
