"use client";

import React from "react";
import Link from "next/link";
import { useDemoState } from "@/lib/services/demo-state-context";
import {
  Wrench,
  ShieldCheck,
  Cpu,
  Layers,
  Award,
  Globe2,
  FileCheck2,
  Truck,
  ArrowRight
} from "lucide-react";

export const CapabilitiesSection: React.FC = () => {
  const { selectedIndustry } = useDemoState();

  const capabilities = [
    {
      title: "Advanced CNC & Machining",
      desc: "5-Axis CNC milling, horizontal turning centers, and automated sub-arc welding stations with micron repeatability.",
      icon: Cpu,
      metric: "±0.01 mm",
      label: "Tolerance Standard"
    },
    {
      title: "Raw Material Metallography",
      desc: "Chemical spectrometry, ultrasonic non-destructive testing (NDT), and hardness testing for every heat lot.",
      icon: Layers,
      metric: "100%",
      label: "Heat Traceability"
    },
    {
      title: "Rigorous QA & Hydro Testing",
      desc: "Computerized hydrostatic test rigs, dynamic balancing benches, and CMM dimensional verifications.",
      icon: ShieldCheck,
      metric: "1.5x",
      label: "Pressure Proof Test"
    },
    {
      title: "Nationwide Logistics",
      desc: "Direct dispatches across Gujarat, Maharashtra, Rajasthan, North & South industrial clusters and Mundra port export CFS.",
      icon: Truck,
      metric: "48 - 72h",
      label: "Standard Dispatch"
    }
  ];

  const certifications = [
    { name: "ISO 9001:2015", desc: "Quality Management System Certified Manufacturing" },
    { name: "IATF 16949:2016", desc: "Automotive Quality Management (PPAP Level 3 Certified Supplier)" },
    { name: "AS9100D Aerospace", desc: "Precision Machining Standard for Flight Critical Components" },
    { name: "EN 10204 Type 3.1 / 3.2", desc: "Material Chemical & Mechanical Mill Test Documentation" },
    { name: "ASME B16.5 & Sec VIII", desc: "High-Pressure Flange & Pressure Vessel Component Compliance" }
  ];

  return (
    <section className="py-20 bg-[#fafaf8] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#d4560a]">
              Factory Plant & Infrastructure
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight mt-1">
              Production Capabilities & Quality Infrastructure
            </h2>
            <p className="text-sm text-stone-600 mt-2 max-w-xl">
              Equipped with precision machinery and certified inspection protocols to deliver repeatable engineering components on time.
            </p>
          </div>

          <Link
            href="/certifications"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#d4560a] hover:underline"
          >
            <span>View All Quality Standards</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 4 Capability Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {capabilities.map((c) => {
            const Icon = c.icon;
            return (
              <div
                key={c.title}
                className="bg-white rounded-xl p-5 border border-stone-200 hover:border-stone-300 shadow-xs flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-orange-50 text-[#d4560a] flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-sm text-stone-900">{c.title}</h3>
                  <p className="text-xs text-stone-500 leading-relaxed">{c.desc}</p>
                </div>

                <div className="pt-4 border-t border-stone-100 mt-4">
                  <div className="text-lg font-bold text-stone-900">{c.metric}</div>
                  <div className="text-[10px] text-stone-400 uppercase tracking-wider font-semibold">
                    {c.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Certifications Strip */}
        <div className="bg-stone-900 rounded-2xl p-6 sm:p-8 text-white">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-stone-800 mb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Compliance & Standards
              </span>
              <h3 className="text-lg font-bold text-white mt-0.5">
                Certified Testing & Standards (Sample Demonstrations)
              </h3>
            </div>
            <span className="text-[11px] text-stone-400 bg-stone-800 px-3 py-1 rounded-full border border-stone-700">
              Demo Test Reports Available for Download
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="p-3.5 rounded-xl bg-stone-800/80 border border-stone-700/80 space-y-1"
              >
                <div className="flex items-center gap-1.5 text-xs font-bold text-white">
                  <Award className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{cert.name}</span>
                </div>
                <p className="text-[11px] text-stone-400 leading-snug">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
