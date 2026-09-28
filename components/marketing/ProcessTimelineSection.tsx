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
  ChevronDown
} from "lucide-react";

export const ProcessTimelineSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      stepNumber: "01",
      title: "Requirement Analysis",
      subtitle: "Application study & technical review",
      icon: FileText,
      description: "Our application engineering team analyzes your operational duty cycle, required tolerances, chemical compatibility, and environmental stresses before drafting the manufacturing proposal.",
      deliverables: ["Technical Feasibility Check", "Preliminary 2D / 3D Layout", "Material Grade Recommendation", "Target Budget Estimation"]
    },
    {
      stepNumber: "02",
      title: "Design & CAD Engineering",
      subtitle: "Finite element analysis & 3D models",
      icon: Compass,
      description: "Using high-end 3D CAD modeling and finite element analysis (FEA), we stress-test structural members, optimize wall thickness for polymer and metal parts, and ensure zero interference in assemblies.",
      deliverables: ["Approved General Arrangement Drawing", "Bill of Materials (BOM)", "Tooling & Die Design", "Stress & Load Simulation"]
    },
    {
      stepNumber: "03",
      title: "Material Sourcing & Metallography",
      subtitle: "Certified raw materials with heat numbers",
      icon: Layers,
      description: "All forgings, plates, virgin polymer resins, and silicon electrical steels are procured directly from certified primary mills. Spectro chemical analysis and ultrasonic testing verify structural integrity.",
      deliverables: ["EN 10204 Type 3.1 Mill Test Certificates", "Spectro Chemical Composition Reports", "Mechanical Tensile & Hardness Test", "Raw Material Heat Traceability Tag"]
    },
    {
      stepNumber: "04",
      title: "Precision Production & Machining",
      subtitle: "CNC milling, laser cutting & welding",
      icon: Wrench,
      description: "Manufacturing on automated 5-axis CNC machining centers, automated robotic seam welders, and high-tonnage hydraulic presses according to calibrated standard operating procedures (SOP).",
      deliverables: ["Job Card Route Sheet Signoffs", "First Piece Sample Validation", "In-Process Inspection Logs", "Vibration Stress Relieving Reports"]
    },
    {
      stepNumber: "05",
      title: "Quality Assurance & Hydro Testing",
      subtitle: "Multi-stage QA inspection protocols",
      icon: CheckCircle,
      description: "Components undergo rigorous quality checks on Zeiss Coordinate Measuring Machines (CMM), hydrostatic pressure testing benches, dynamic rotor balancing, and dielectric electrical tests.",
      deliverables: ["Final Quality Inspection Report (QIR)", "Hydrostatic Test Chart (1.5x working pressure)", "Dynamic Balancing Certificate (ISO 1940)", "Dimension Verification Sheet"]
    },
    {
      stepNumber: "06",
      title: "Surface Finish & Packing",
      subtitle: "Shot blasting, epoxy paint & seaworthy crating",
      icon: Box,
      description: "Surface preparation via automated shot blasting (SA 2.5) followed by multi-coat polyurethane paint or hot-dip galvanizing. Moisture barrier VCI foil and heat-treated wooden crates prevent transport transit damage.",
      deliverables: ["Coating Thickness (DFT) Test Certificate", "Seaworthy ISPM-15 Heat-Treated Crating", "Waterproof VCI Anti-Rust Wrapping", "Consignment Barcode Labeling"]
    },
    {
      stepNumber: "07",
      title: "Dispatch & Freight Logistics",
      subtitle: "Trackable transport carriers & container stuffing",
      icon: Truck,
      description: "Seamless handover to verified logistics partners with GPS tracked vehicles, crane loading, and complete dispatch documentation including e-Way bills and export shipping bills.",
      deliverables: ["Consignment Tracking Number (LR)", "E-Way Bill & Tax Invoice", "Container Packing List", "Cargo Transit Insurance"]
    },
    {
      stepNumber: "08",
      title: "After-Sales & Warranty Support",
      subtitle: "Installation guidance & spares supply",
      icon: Headphones,
      description: "Our dedicated service team assists with on-site commissioning, machine demo calibration, annual maintenance contracts (AMC), and guaranteed availability of OEM replacement parts.",
      deliverables: ["12-Month Manufacturer Warranty", "Digital Maintenance Log on Portal", "Guaranteed Spares Dispatch within 48h", "Factory Engineer Support Hotline"]
    }
  ];

  return (
    <section className="py-20 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#d4560a]">
            Quality & Operations Standard
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight mt-1">
            End-to-End Manufacturing Workflow
          </h2>
          <p className="text-sm text-stone-600 mt-2">
            Click any step to inspect technical inspection deliverables and factory quality milestones.
          </p>
        </div>

        {/* Step Selector Horizontal Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8">
          {steps.map((st, idx) => {
            const Icon = st.icon;
            const isSelected = activeStep === idx;
            return (
              <button
                key={st.title}
                onClick={() => setActiveStep(idx)}
                className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all border shrink-0 ${
                  isSelected
                    ? "bg-stone-900 text-white border-stone-900 shadow-md"
                    : "bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100"
                }`}
              >
                <span className={`text-[10px] font-mono ${isSelected ? "text-amber-400" : "text-stone-400"}`}>
                  {st.stepNumber}
                </span>
                <Icon className={`w-3.5 h-3.5 ${isSelected ? "text-[#d4560a]" : "text-stone-500"}`} />
                <span>{st.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Step Detailed Expanded Panel */}
        <div className="bg-stone-50 rounded-2xl border border-stone-200 p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-orange-100 text-[#d4560a] flex items-center justify-center font-bold text-base">
                {steps[activeStep].stepNumber}
              </span>
              <div>
                <h3 className="text-xl font-bold text-stone-900">
                  {steps[activeStep].title}
                </h3>
                <span className="text-xs text-[#d4560a] font-semibold">
                  {steps[activeStep].subtitle}
                </span>
              </div>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed pt-2">
              {steps[activeStep].description}
            </p>

            <div className="pt-2 flex items-center gap-4 text-xs text-stone-500">
              <span>Standard Execution: <strong>Strict SOP Controlled</strong></span>
              <span>•</span>
              <span>Operator Level: <strong>Certified Engineers</strong></span>
            </div>
          </div>

          {/* Right Column: Deliverables Box */}
          <div className="lg:col-span-5 bg-white rounded-xl p-5 border border-stone-200 shadow-sm space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-stone-400 block border-b border-stone-100 pb-2">
              Verified Deliverables & Documents
            </span>
            <ul className="space-y-2.5">
              {steps[activeStep].deliverables.map((del) => (
                <li key={del} className="flex items-center gap-2.5 text-xs text-stone-800">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="font-medium">{del}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
