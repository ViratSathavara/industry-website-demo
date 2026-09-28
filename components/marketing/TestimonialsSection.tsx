"use client";

import React from "react";
import { UserCheck, Building2, Wrench, ShieldCheck, Quote } from "lucide-react";

export const TestimonialsSection: React.FC = () => {
  const personas = [
    {
      role: "Head of Drivetrain Sourcing",
      context: "Tier-1 Commercial Vehicle OEM Buyer",
      location: "Pune Industrial Hub",
      quote:
        "Earlier we waited 4 days just to get a drawing revision or CMM certificate. With INDUSTRIA's digital platform, our engineering team downloads 3D STEP models and receives instant automated tolerance quotes in minutes.",
      impact: "Reduced RFQ turnaround from 4 days to 2 hours"
    },
    {
      role: "VP of Strategic Procurement",
      context: "Aerospace & High-Pressure Systems OEM",
      location: "Bengaluru & Mumbai",
      quote:
        "Our 5-axis hydraulic valve blocks require strict 5-micron dimensional tolerance and 100% Zeiss CMM inspection. INDUSTRIA delivers consistent zero-defect batches with full EN 10204 3.1 chemical reports directly downloadable in the portal.",
      impact: "Zero dimensional rejection across 12,000+ precision parts"
    },
    {
      role: "Managing Director",
      context: "Precision Machine Shop & Foundry Partner",
      location: "GIDC Ahmedabad",
      quote:
        "For decades Indian machine shops relied on phone calls and paper job cards. With this digital platform, our sales team tracks CAD drawings, generates official quotes in 2 clicks, and clients track shop floor spindle progress live.",
      impact: "3.2x faster deal closing & 100% order traceability"
    }
  ];

  return (
    <section className="py-20 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-[10px] font-bold uppercase tracking-wider mb-2">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>OEM Buyer Journeys & Impact</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
            Why Industrial Buyers & Plant Heads Choose Digital
          </h2>
          <p className="text-xs sm:text-sm text-stone-500 mt-2">
            Measurable operational outcomes modeled after precision engineering contracts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {personas.map((p) => (
            <div
              key={p.role}
              className="bg-stone-50/80 rounded-2xl p-6 border border-stone-200 flex flex-col justify-between hover:border-stone-300 transition-colors"
            >
              <div className="space-y-4">
                <Quote className="w-7 h-7 text-[#d4560a]/40" />
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed italic">
                  &quot;{p.quote}&quot;
                </p>
              </div>

              <div className="pt-6 border-t border-stone-200 mt-6 space-y-2">
                <div>
                  <h4 className="font-bold text-xs text-stone-900">{p.role}</h4>
                  <div className="text-[11px] text-stone-500">{p.context}</div>
                  <div className="text-[10px] text-stone-400">{p.location}</div>
                </div>

                <div className="p-2 rounded bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-semibold">
                  ✓ {p.impact}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
