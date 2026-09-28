"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FileText,
  Compass,
  Layers,
  Cpu,
  ShieldCheck,
  Package,
  Truck,
  Headphones,
  ChevronRight,
  ArrowUpRight
} from "lucide-react";

export const ManufacturingProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      step: "01",
      title: "Requirement & Feasibility",
      icon: FileText,
      subtitle: "Application & Flow Review",
      description: "Analysis of customer motor specifications, bore diameter, head vs discharge curve requirements, operating fluid characteristics, and target batch volume.",
      deliverable: "Technical Feasibility Sheet & CAD Envelope Approval"
    },
    {
      step: "02",
      title: "CAM Engineering & Tooling",
      icon: Compass,
      subtitle: "3D Toolpath Optimization",
      description: "CAD model importing into Mastercam/Hypermill. Toolpath generation for multi-axis CNC lathe turning, live tooling grooving, and progressive stamping die design.",
      deliverable: "Simulation Verification & G-Code Toolpath Release"
    },
    {
      step: "03",
      title: "Certified Raw Material",
      icon: Layers,
      subtitle: "Spectro & Chemical Traceability",
      description: "Sourcing certified ASTM/DIN raw materials: SS410 bar stock, Grade LTB-2 bronze ingots, CRNO Grade M400-50A electrical steel, and FG 260 pig iron.",
      deliverable: "EN 10204 Type 3.1 Mill Test Certificates"
    },
    {
      step: "04",
      title: "Precision CNC Machining",
      icon: Cpu,
      subtitle: "Multi-Axis Machining & Grinding",
      description: "High-speed CNC lathe turning, shaft cylindrical grinding between centers (< 0.003mm runout), automated laser lamination notching, and line-boring.",
      deliverable: "First Article Inspection Report (FAIR)"
    },
    {
      step: "05",
      title: "Quality & Metrology Inspection",
      icon: ShieldCheck,
      subtitle: "Zeiss 3D CMM & Balancing",
      description: "100% two-plane dynamic balancing to ISO 1940 Grade G1.0 at 3,000 RPM, 16-25 Bar hydrostatic pressure testing, and surface roughness profilometry (Ra 0.2µm).",
      deliverable: "Serialized Zeiss CMM & Dynamic Balancing Log"
    },
    {
      step: "06",
      title: "VCI Anti-Corrosion Packing",
      icon: Package,
      subtitle: "Moisture & Shock Protection",
      description: "Ultrasonic parts cleaning, application of water-displacing rust preventative oil, VCI moisture-barrier wrapping, and export-grade fumigated wooden palletization.",
      deliverable: "Barcode Scanning & Batch Dispatch Labeling"
    },
    {
      step: "07",
      title: "Logistics & Dispatch",
      icon: Truck,
      subtitle: "On-Time Plant Delivery",
      description: "Door-to-door freight dispatch via dedicated industrial transport with live GPS tracking, GST e-way bills, and digital commercial invoice delivery.",
      deliverable: "Real-Time Portal Consignment Tracking"
    },
    {
      step: "08",
      title: "After-Sales & Technical Support",
      icon: Headphones,
      subtitle: "Continuous OEM Field Service",
      description: "Lifetime drawing version control, fast-turnaround spare parts supply (impellers, seals, carbon pads), and on-site engineering consultations.",
      deliverable: "Dedicated Application Engineering Hotline"
    }
  ];

  const current = steps[activeStep];
  const Icon = current.icon;

  return (
    <section className="bg-[#171c1e] text-[#f5f0e7] px-5 py-24 md:px-10 md:py-32 lg:px-14 border-b border-white/10">
      <div className="mx-auto max-w-[1440px]">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-8 mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="h-px w-8 bg-[#e7a45c]" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#e7a45c]">
                Manufacturing Lifecycle / 07
              </span>
            </div>
            <h2 className="font-display text-[clamp(2.6rem,5vw,5rem)] leading-[.92] tracking-[-.04em] text-[#f5f0e7]">
              End-to-end <em className="text-[#e7a45c]">precision workflow.</em>
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-[#aeb5b2] leading-relaxed font-sans">
            From CAD drawing review to final dispatch, every industrial water motor component moves through an integrated quality and engineering pipeline.
          </p>
        </div>

        {/* Horizontal Steps Navigator */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 mb-8">
          {steps.map((s, idx) => (
            <button
              key={s.step}
              onClick={() => setActiveStep(idx)}
              className={`p-3 border text-left transition-all font-mono ${
                activeStep === idx
                  ? "border-[#e7a45c] bg-[#e7a45c]/10 text-[#e7a45c]"
                  : "border-white/10 bg-[#20272b] text-[#7e8989] hover:border-white/20 hover:text-[#d8d7d0]"
              }`}
            >
              <div className="text-[10px] text-[#e7a45c] font-bold">Step {s.step}</div>
              <div className="text-xs font-semibold truncate mt-1 text-[#f5f0e7] font-sans">
                {s.title.split(" ")[0]}
              </div>
            </button>
          ))}
        </div>

        {/* Active Step Showcase Card */}
        <div className="bg-[#20272b] border border-white/15 p-6 sm:p-10 shadow-2xl rounded-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded bg-[#e7a45c]/10 border border-[#e7a45c]/30 flex items-center justify-center text-[#e7a45c]">
                  <Icon size={22} />
                </div>
                <div>
                  <span className="font-mono text-xs font-bold text-[#e7a45c] uppercase tracking-wider">
                    Stage {current.step} — {current.subtitle}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold font-heading text-[#f5f0e7] mt-0.5">
                    {current.title}
                  </h3>
                </div>
              </div>

              <p className="text-sm sm:text-base text-[#d2d1c9] leading-relaxed pt-2">
                {current.description}
              </p>

              <div className="p-4 bg-[#171c1e] border border-white/10 rounded flex items-center justify-between font-mono text-xs">
                <span className="text-[#7e8989]">Stage Output:</span>
                <span className="text-[#e7a45c] font-bold truncate max-w-md">{current.deliverable}</span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-center space-y-3 p-6 bg-[#171c1e] border border-white/10 text-xs font-mono">
              <div className="text-[#e7a45c] font-bold uppercase tracking-wider">Inspection & QC Standards:</div>
              <ul className="space-y-2 text-[#aeb5b2]">
                <li className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-[#e7a45c]" />
                  <span>Calibrated Zeiss 3D CMM Metrology</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-[#e7a45c]" />
                  <span>Dynamic Balancing to ISO 1940 Grade G1.0</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-[#e7a45c]" />
                  <span>100% Hydrostatic Pressure Proof Test</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-[#e7a45c]" />
                  <span>EN 10204 Type 3.1 Traceability</span>
                </li>
              </ul>

              <div className="pt-3">
                <Link
                  href="/manufacturing-process"
                  className="flex items-center justify-between text-[#e7a45c] hover:underline font-bold"
                >
                  <span>Explore Full Process Facility</span>
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
