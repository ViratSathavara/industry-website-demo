"use client";

import React from "react";
import { Quote } from "lucide-react";
import { useDemoState } from "@/lib/services/demo-state-context";

export const TestimonialsTrustSection: React.FC = () => {
  const { t } = useDemoState();

  const testimonials = [
    { role: t.t1Role, context: t.t1Context, companyType: t.t1Company, quote: t.t1Quote, impact: t.t1Impact },
    { role: t.t2Role, context: t.t2Context, companyType: t.t2Company, quote: t.t2Quote, impact: t.t2Impact },
    { role: t.t3Role, context: t.t3Context, companyType: t.t3Company, quote: t.t3Quote, impact: t.t3Impact },
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
                {t.testimonialsLabel}
              </span>
            </div>
            <h2 className="font-display text-[clamp(2.6rem,5vw,5rem)] leading-[.92] tracking-[-.04em] text-[#20272b]">
              {t.testimonialsTitle} <em className="text-[#bb5b2c]">{t.testimonialsTitleEm}</em>
            </h2>
          </div>
          <div className="max-w-md">
            <span className="inline-block px-3 py-1 bg-white border border-[#cfc5b5] text-[11px] font-mono text-[#bb5b2c] font-bold mb-2">
              {t.testimonialsDemoBadge}
            </span>
            <p className="text-xs sm:text-sm text-[#687173] leading-relaxed">
              {t.testimonialsSubtitle}
            </p>
          </div>
        </div>

        {/* 3 Personas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="p-8 bg-[#eee8dd] border border-[#cfc5b5] flex flex-col justify-between space-y-6 hover:border-[#bb5b2c] transition-colors relative"
            >
              <div className="space-y-4">
                <Quote size={28} className="text-[#bb5b2c]/40" />
                <p className="text-sm text-[#20272b] leading-relaxed italic">
                  &quot;{item.quote}&quot;
                </p>
              </div>

              <div className="pt-4 border-t border-[#cfc5b5] space-y-2">
                <div className="flex items-center justify-between">
                  <div className="font-bold text-sm text-[#20272b] font-heading">{item.role}</div>
                  <span className="text-[10px] font-mono font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                    {item.impact}
                  </span>
                </div>
                <div className="text-[11px] font-mono text-[#bb5b2c] font-semibold">{item.context}</div>
                <div className="text-[11px] text-[#687173] font-mono">{item.companyType}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
