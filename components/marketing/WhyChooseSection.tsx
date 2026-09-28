"use client";

import React from "react";
import Link from "next/link";
import { Search, Zap, Clock, ShieldCheck, FolderGit2, ArrowRight } from "lucide-react";
import { useDemoState } from "@/lib/services/demo-state-context";

export const WhyChooseSection: React.FC = () => {
  const { t } = useDemoState();

  const outcomes = [
    { num: "01", title: t.why01Title, description: t.why01Desc, icon: Search },
    { num: "02", title: t.why02Title, description: t.why02Desc, icon: Zap },
    { num: "03", title: t.why03Title, description: t.why03Desc, icon: Clock },
    { num: "04", title: t.why04Title, description: t.why04Desc, icon: ShieldCheck },
    { num: "05", title: t.why05Title, description: t.why05Desc, icon: FolderGit2 },
  ];

  return (
    <section className="bg-[#f5f0e7] text-[#20272b] px-5 py-24 md:px-10 md:py-32 lg:px-14 border-b border-[#d0c8bd]">
      <div className="mx-auto max-w-[1440px]">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#d0c8bd] pb-8 mb-14 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="h-px w-8 bg-[#bb5b2c]" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#bb5b2c]">
                {t.whyLabel}
              </span>
            </div>
            <h2 className="font-display text-[clamp(2.6rem,5vw,5rem)] leading-[.92] tracking-[-.04em] text-[#20272b]">
              {t.whyTitle} <em className="text-[#bb5b2c]">{t.whyTitleEm}</em>
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#687173] leading-relaxed">
            {t.whySubtitle}
          </p>
        </div>

        {/* 5 Outcomes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {outcomes.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.num}
                className={`p-8 bg-[#eee8dd] border border-[#cfc5b5] flex flex-col justify-between space-y-6 hover:border-[#bb5b2c] transition-all group ${
                  index === 4 ? "md:col-span-2 lg:col-span-2" : ""
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-[#bb5b2c] bg-white/60 px-2.5 py-1 border border-[#cfc5b5]">
                    {item.num}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-white/80 border border-[#cfc5b5] flex items-center justify-center text-[#bb5b2c] group-hover:scale-110 transition-transform">
                    <Icon size={18} />
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold font-heading text-[#20272b] group-hover:text-[#bb5b2c] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#687173] mt-2 leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Strip */}
        <div className="mt-12 p-6 bg-[#20272b] text-[#f5f0e7] flex flex-col sm:flex-row items-center justify-between gap-4 border border-white/10 shadow-xl">
          <div className="flex items-center gap-3">
            <span className="size-2 rounded-full bg-[#e7a45c] animate-ping" />
            <span className="text-xs sm:text-sm font-mono text-[#d8d7d0]">
              {t.whyCTALink}
            </span>
          </div>
          <Link
            href="/demo"
            className="inline-flex items-center gap-2 bg-[#e46e2e] hover:bg-[#f38b43] text-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider font-mono transition-colors shrink-0"
          >
            <span>{t.whyCTA}</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
};
