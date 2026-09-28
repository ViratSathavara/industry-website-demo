"use client";

import React from "react";
import { Quote, UserCheck, ShieldCheck } from "lucide-react";

export const TestimonialsTrustSection: React.FC = () => {
  const testimonials = [
    {
      role: "Procurement Manager",
      context: "Sample OEM Buyer Journey",
      companyType: "Submersible Pump Manufacturing Plant (Rajkot)",
      quote: "Before this digital catalogue, getting technical drawings and batch tolerance certificates took 3 to 4 days of phone calls. Now our engineers can verify rotor shaft runout and CAD models directly and raise an RFQ in 5 minutes.",
      impact: "70% Faster RFQ Sourcing Cycle"
    },
    {
      role: "Dealer & Distribution Head",
      context: "Illustrative Dealer Network Workflow",
      companyType: "Regional Agricultural Machinery Supply Network (Mehsana)",
      quote: "Our retail dealers can check real-time availability of bronze impellers and rewindable stators, track dispatch status, and download ISI test certificates straight from the customer portal without constantly chasing sales managers.",
      impact: "Zero Dispatch Communication Delays"
    },
    {
      role: "Factory Managing Director",
      context: "Demo Factory Owner Persona",
      companyType: "Precision Motor Components Manufacturing (Sanand GIDC)",
      quote: "Having all our inquiries, CAD drawings, quotations, and CNC production stages connected into one digital system gave us complete transparency over where our business enquiries were coming from.",
      impact: "100% Pipeline Visibility"
    }
  ];

  return (
    <section className="bg-[#f5f0e7] text-[#20272b] px-5 py-24 md:px-10 md:py-32 lg:px-14 border-b border-[#d0c8bd]">
      <div className="mx-auto max-w-[1440px]">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#d0c8bd] pb-8 mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="h-px w-8 bg-[#bb5b2c]" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#bb5b2c]">
                Illustrative Journeys / 10
              </span>
            </div>
            <h2 className="font-display text-[clamp(2.6rem,5vw,5rem)] leading-[.92] tracking-[-.04em] text-[#20272b]">
              Demonstrating the <em className="text-[#bb5b2c]">human impact.</em>
            </h2>
          </div>
          <div className="max-w-md">
            <span className="inline-block px-3 py-1 bg-white border border-[#cfc5b5] text-[11px] font-mono text-[#bb5b2c] font-bold mb-2">
              DEMO DATA — Anonymous Illustrative Personas
            </span>
            <p className="text-xs sm:text-sm text-[#687173] leading-relaxed">
              How a digital factory platform transforms day-to-day operations for procurement buyers, distribution partners, and manufacturing executives.
            </p>
          </div>
        </div>

        {/* 3 Personas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="p-8 bg-[#eee8dd] border border-[#cfc5b5] flex flex-col justify-between space-y-6 hover:border-[#bb5b2c] transition-colors relative"
            >
              <div className="space-y-4">
                <Quote size={28} className="text-[#bb5b2c]/40" />
                <p className="text-sm text-[#20272b] leading-relaxed italic">
                  &quot;{t.quote}&quot;
                </p>
              </div>

              <div className="pt-4 border-t border-[#cfc5b5] space-y-2">
                <div className="flex items-center justify-between">
                  <div className="font-bold text-sm text-[#20272b] font-heading">{t.role}</div>
                  <span className="text-[10px] font-mono font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                    {t.impact}
                  </span>
                </div>
                <div className="text-[11px] font-mono text-[#bb5b2c] font-semibold">{t.context}</div>
                <div className="text-[11px] text-[#687173] font-mono">{t.companyType}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
