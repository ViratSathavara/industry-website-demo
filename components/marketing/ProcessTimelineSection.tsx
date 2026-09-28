"use client";

import React, { useState } from "react";
import {
  FileText,
  Compass,
  Layers,
  Wrench,
  CheckCircle,
  Box,
  Truck,
  Headphones,
  CheckCircle2,
  Workflow
} from "lucide-react";

export const ProcessTimelineSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      stepNumber: "01",
      title: "Requirement Analysis",
      subtitle: "Application study & CAD feasibility",
      icon: FileText,
      description:
        "Our application engineering team analyzes operational duty cycles, required tolerances, chemical compatibility, and environmental stresses before drafting the manufacturing proposal.",
      deliverables: [
        "Technical Feasibility Check",
        "Preliminary 2D / 3D Layout",
        "Material Grade Recommendation",
        "Target Budget Estimation"
      ]
    },
    {
      stepNumber: "02",
      title: "Design & CAD Engineering",
      subtitle: "Finite element analysis & 3D models",
      icon: Compass,
      description:
        "Using 3D CAD modeling and finite element analysis (FEA), we stress-test structural members, optimize wall thickness for alloy parts, and ensure zero interference in complex assemblies.",
      deliverables: [
        "Approved General Arrangement Drawing",
        "Bill of Materials (BOM)",
        "Tooling & Die Design",
        "Stress & Load Simulation"
      ]
    },
    {
      stepNumber: "03",
      title: "Material Sourcing & Metallography",
      subtitle: "Certified raw materials with heat numbers",
      icon: Layers,
      description:
        "All forgings, round bars, and plates are procured directly from certified primary mills. Spectro chemical analysis and ultrasonic testing verify structural integrity before machining starts.",
      deliverables: [
        "EN 10204 Type 3.1 Mill Test Certificates",
        "Spectro Chemical Composition Reports",
        "Mechanical Tensile & Hardness Test",
        "Raw Material Heat Traceability Tag"
      ]
    },
    {
      stepNumber: "04",
      title: "Precision 5-Axis CNC Machining",
      subtitle: "High-speed milling, turning & grinding",
      icon: Wrench,
      description:
        "Manufacturing on multi-axis DMG Mori and Mazak CNC machining centers according to calibrated standard operating procedures (SOP) with in-process probe validation.",
      deliverables: [
        "Job Card Route Sheet Signoffs",
        "First Piece Sample Validation",
        "In-Process Inspection Logs",
        "Vibration Stress Relieving Reports"
      ]
    },
    {
      stepNumber: "05",
      title: "Quality Assurance & Metrology",
      subtitle: "Zeiss CMM 3D scanning & proof tests",
      icon: CheckCircle,
      description:
        "Components undergo quality checks on temperature-controlled Zeiss Coordinate Measuring Machines (CMM), hydrostatic pressure testing benches, and dynamic rotor balancing.",
      deliverables: [
        "Final Quality Inspection Report (QIR)",
        "Zeiss 3D CMM Geometric Runout Chart",
        "Hydrostatic Pressure Test Certificate",
        "Material Traceability Dossier"
      ]
    },
    {
      stepNumber: "06",
      title: "Surface Treatment & Finishing",
      subtitle: "Passivation, anodizing & coatings",
      icon: Box,
      description:
        "Controlled surface enhancements including chemical blackening, hard chrome plating, hard anodizing Type III, manganese phosphating, and electro-polishing for corrosion resistance.",
      deliverables: [
        "Coating Thickness Inspection (Elcometer)",
        "Salt Spray Corrosion Test (ASTM B117)",
        "Surface Roughness Profile Chart (Ra/Rz)",
        "Adhesion Cross-Hatch Test Report"
      ]
    },
    {
      stepNumber: "07",
      title: "Protective Packaging & Export Dispatch",
      subtitle: "VCI corrosion prevention & crating",
      icon: Truck,
      description:
        "Components are cleaned in automated ultrasonic wash stations, coated with volatile corrosion inhibitor (VCI) oil, and vacuum sealed inside ISPM 15 heat-treated seaworthy wooden crates.",
      deliverables: [
        "Barcoded Shipping Label & Packing Slip",
        "Customs Export Clearance Documents",
        "GPS Freight Consignment Tracking",
        "Moisture Indicator Seal Confirmation"
      ]
    },
    {
      stepNumber: "08",
      title: "Lifecycle Support & Re-orders",
      subtitle: "Installation guidance & spares inventory",
      icon: Headphones,
      description:
        "Our engineering service team assists with assembly alignment, technical field support, and guaranteed batch-to-batch repeatability for annual production call-offs.",
      deliverables: [
        "12-Month Performance Guarantee",
        "Digital Inspection Archive on Portal",
        "Guaranteed Spares Dispatch within 48h",
        "Senior Application Engineer Hotline"
      ]
    }
  ];

  return (
    <section className="py-24 bg-[#20272b] text-[#f5f0e7] border-b border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-[#e7a45c]/30 text-[#e7a45c] text-xs font-mono mb-4 bg-white/5">
            <Workflow size={14} />
            <span className="uppercase tracking-[.14em]">IATF 16949 & AS9100D Certified Workflow</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display tracking-tight text-[#f5f0e7]">
            End-to-End Precision <em className="text-[#e7a45c]">Manufacturing Pipeline.</em>
          </h2>
          <p className="text-sm text-[#aeb5b2] mt-3">
            Select any production milestone to inspect quality verification deliverables and standard operating protocols.
          </p>
        </div>

        {/* Step Selector 8-Step Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5 mb-8">
          {steps.map((st, idx) => {
            const Icon = st.icon;
            const isSelected = activeStep === idx;
            return (
              <button
                key={st.title}
                onClick={() => setActiveStep(idx)}
                className={`flex flex-col items-start p-3 text-left transition-all border ${
                  isSelected
                    ? "bg-[#293337] text-[#f5f0e7] border-[#e7a45c] shadow-lg"
                    : "bg-[#171c1e] text-[#899492] border-white/10 hover:border-white/25 hover:text-[#f5f0e7]"
                }`}
              >
                <div className="flex items-center justify-between w-full mb-1.5 font-mono">
                  <span
                    className={`text-[11px] ${
                      isSelected ? "text-[#e7a45c] font-bold" : "text-[#7e8989]"
                    }`}
                  >
                    {st.stepNumber}
                  </span>
                  <Icon
                    size={14}
                    className={isSelected ? "text-[#e7a45c]" : "text-[#7e8989]"}
                  />
                </div>
                <span className="text-[11px] font-medium leading-tight line-clamp-2">
                  {st.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Step Detailed Expanded Panel */}
        <div className="bg-[#171c1e] border border-white/15 p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-2xl">
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-3.5">
              <span className="size-12 border border-[#e7a45c] text-[#e7a45c] flex items-center justify-center font-mono font-bold text-lg bg-[#20272b]">
                {steps[activeStep].stepNumber}
              </span>
              <div>
                <h3 className="text-xl sm:text-2xl font-display text-[#f5f0e7]">
                  {steps[activeStep].title}
                </h3>
                <span className="text-xs text-[#e7a45c] font-mono uppercase tracking-[.1em]">
                  {steps[activeStep].subtitle}
                </span>
              </div>
            </div>

            <p className="text-sm text-[#aeb5b2] leading-relaxed">
              {steps[activeStep].description}
            </p>
          </div>

          <div className="lg:col-span-5 bg-[#20272b] p-5 border border-white/10 space-y-3">
            <span className="eyebrow text-[#e7a45c] block mb-2">
              Verified Deliverables & Records
            </span>
            <div className="space-y-2.5">
              {steps[activeStep].deliverables.map((d, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs text-[#d2d1c9]">
                  <CheckCircle2 size={14} className="text-[#e7a45c] shrink-0 mt-0.5" />
                  <span>{d}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
