"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Cpu, ArrowRight, ShieldCheck, CheckCircle2, Wrench, Layers, Factory } from "lucide-react";

export const IndustryExplorer: React.FC = () => {
  const capabilities = [
    {
      id: "5-axis-cnc",
      title: "5-Axis CNC Milling & Turning",
      subtitle: "High-Tolerance Machining",
      description: "DMG MORI & Mazak machining centers delivering tight ±0.005mm tolerances on complex geometries, turbine impellers, and transmission casings.",
      specs: ["±0.005 mm Tolerance", "Up to 12,000 RPM Spindles", "Titanium & En24 Capabilities"],
      image: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "forging-cells",
      title: "High-Pressure Precision Forgings",
      subtitle: "Closed-Die Drop Forging",
      description: "Forged high-pressure flanges, heavy valve bodies, and drivetrain shafts built with grain alignment for extreme mechanical durability.",
      specs: ["ANSI Class 150 - 2500", "SS 316L & Alloy Steel", "Normalized & Quenched"],
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "cmm-metrology",
      title: "Zeiss 3D CMM Metrology Lab",
      subtitle: "100% Quality Assurance",
      description: "Temperature-controlled inspection room equipped with Zeiss Coordinate Measuring Machines (CMM) and optical profile projectors.",
      specs: ["EN 10204 3.1 Traceability", "Ra 0.2µm Surface Finish", "PPAP Level 3 Available"],
      image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "sub-assemblies",
      title: "Precision Sub-Assembly & Wash",
      subtitle: "Ready for OEM Lines",
      description: "Cleanroom ultrasonic component cleaning, press-fit pin and bearing assembly, pressure hydrostatic testing, and export packaging.",
      specs: ["Hydrostatic up to 400 Bar", "Ultrasonically Cleaned", "VCI Anti-Corrosion Wrap"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="py-20 bg-[#fafaf8] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#d4560a]">
              Factory Infrastructure & Toolroom
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight mt-1 font-heading">
              Specialized Precision Machining Capabilities
            </h2>
            <p className="text-sm text-stone-600 mt-2 max-w-2xl leading-relaxed">
              Equipped with over 140 Japanese and German CNC, VMC, and turning centers dedicated to Tier-1 automotive and aerospace contract manufacturing.
            </p>
          </div>

          <Link
            href="/manufacturing-process"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#d4560a] hover:text-[#b84605] shrink-0"
          >
            <span>Inspect 8-Stage Process</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 4 Core Capability Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((cap) => (
            <div
              key={cap.id}
              className="bg-white rounded-2xl border border-stone-200 overflow-hidden flex flex-col justify-between hover:shadow-xl hover:border-primary/40 transition-all duration-300 group"
            >
              <div>
                {/* Thumbnail Image */}
                <div className="relative h-44 w-full bg-stone-900 overflow-hidden">
                  <Image
                    src={cap.image}
                    alt={cap.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent" />
                  <span className="absolute bottom-2.5 left-3 text-[10px] font-mono text-amber-400 font-bold uppercase tracking-wider">
                    {cap.subtitle}
                  </span>
                </div>

                <div className="p-5 space-y-3">
                  <h3 className="font-bold text-base text-stone-900 leading-snug group-hover:text-primary transition-colors font-heading">
                    {cap.title}
                  </h3>

                  <p className="text-xs text-stone-600 leading-relaxed">
                    {cap.description}
                  </p>

                  <div className="pt-2 border-t border-stone-100 space-y-1.5">
                    {cap.specs.map((sp, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-[11px] text-stone-700 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{sp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0">
                <Link
                  href="/request-quote"
                  className="w-full py-2 px-3 rounded-xl bg-stone-50 hover:bg-primary hover:text-white border border-stone-200 hover:border-primary text-stone-800 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>Request RFQ for this Cell</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Sectors Served Bar */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-stone-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#d4560a] font-bold">
              MAJOR OEM SECTORS SERVED
            </span>
            <h4 className="text-sm font-bold text-stone-900 mt-0.5">
              Approved Supplier to Tier-1 Automotive, Aerospace, and Valve Manufacturers
            </h4>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="px-3 py-1 rounded-lg bg-stone-100 text-stone-800 font-medium">
              Automotive Powertrain
            </span>
            <span className="px-3 py-1 rounded-lg bg-stone-100 text-stone-800 font-medium">
              Aerospace Airframes
            </span>
            <span className="px-3 py-1 rounded-lg bg-stone-100 text-stone-800 font-medium">
              High-Pressure Valves
            </span>
            <span className="px-3 py-1 rounded-lg bg-stone-100 text-stone-800 font-medium">
              Heavy Hydraulics
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
