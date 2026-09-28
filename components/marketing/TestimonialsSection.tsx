"use client";

import React from "react";
import { ShieldCheck, Quote, Star } from "lucide-react";

export const TestimonialsSection: React.FC = () => {
  const personas = [
    {
      role: "Head of Drivetrain Sourcing",
      context: "Tier-1 Commercial Vehicle OEM",
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
      context: "Heavy Machinery & Turbine Partner",
      location: "GIDC Ahmedabad",
      quote:
        "For decades Indian machine shops relied on phone calls and paper job cards. With this digital platform, our sales team tracks CAD drawings, generates official quotes in 2 clicks, and clients track shop floor spindle progress live.",
      impact: "3.2x faster deal closing & 100% order traceability"
    }
  ];

  return (
    <section className="py-24 bg-[#090d16] border-b border-white/10 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/80 text-cyan-400 text-xs font-mono mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>OEM BUYER VALIDATION & CONTRACTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Trusted by Procurement & Plant Leaders
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            Measurable engineering outcomes delivered across automotive, aerospace, and high-pressure fluid power contracts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {personas.map((p) => (
            <div
              key={p.role}
              className="bg-[#0e1422] rounded-2xl p-6 sm:p-7 border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between shadow-xl group hover:-translate-y-1"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Quote className="w-8 h-8 text-amber-500/30 group-hover:text-amber-500/60 transition-colors" />
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-400" />
                    ))}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                  &quot;{p.quote}&quot;
                </p>
              </div>

              <div className="pt-6 border-t border-white/5 mt-6 space-y-3">
                <div>
                  <h4 className="font-bold text-xs text-white">{p.role}</h4>
                  <div className="text-[11px] text-cyan-400 font-mono">{p.context}</div>
                  <div className="text-[10px] text-slate-500 font-mono">{p.location}</div>
                </div>

                <div className="p-2.5 rounded-xl bg-emerald-950/50 border border-emerald-800/60 text-emerald-300 text-[11px] font-mono flex items-center gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>{p.impact}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
