"use client";

import React from "react";
import Link from "next/link";
import { ShieldCheck, Award, CheckCircle2, FileCheck, Layers, ArrowUpRight } from "lucide-react";
import { useDemoState } from "@/lib/services/demo-state-context";

export const CertificationsSection: React.FC = () => {
  const { t } = useDemoState();

  const certs = [
    { title: t.cert1Title, category: t.cert1Cat, description: t.cert1Desc, badge: t.cert1Badge, icon: ShieldCheck },
    { title: t.cert2Title, category: t.cert2Cat, description: t.cert2Desc, badge: t.cert2Badge, icon: Award },
    { title: t.cert3Title, category: t.cert3Cat, description: t.cert3Desc, badge: t.cert3Badge, icon: Layers },
    { title: t.cert4Title, category: t.cert4Cat, description: t.cert4Desc, badge: t.cert4Badge, icon: FileCheck },
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
                {t.certsLabel}
              </span>
            </div>
            <h2 className="font-display text-[clamp(2.6rem,5vw,5rem)] leading-[.92] tracking-[-.04em] text-[#20272b]">
              {t.certsTitle} <em className="text-[#bb5b2c]">{t.certsTitleEm}</em>
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-[#687173] leading-relaxed">
            {t.certsSubtitle}
          </p>
        </div>

        {/* Cert Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certs.map((c) => {
            const Icon = c.icon;
            return (
              <div
                key={c.title}
                className="p-6 bg-[#eee8dd] border border-[#cfc5b5] flex flex-col justify-between space-y-4 hover:border-[#bb5b2c] transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono font-bold text-[#bb5b2c] bg-white px-2 py-0.5 border border-[#cfc5b5]">
                      {c.badge}
                    </span>
                    <Icon size={20} className="text-[#bb5b2c]" />
                  </div>
                  <div className="text-[11px] font-mono text-[#687173] uppercase tracking-wider">
                    {c.category}
                  </div>
                  <h3 className="text-base font-bold text-[#20272b] mt-1 font-heading">
                    {c.title}
                  </h3>
                  <p className="text-xs text-[#687173] mt-2 leading-relaxed">
                    {c.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#cfc5b5] text-[11px] font-mono text-[#bb5b2c] flex items-center justify-between">
                  <span>{t.certsInspReady}</span>
                  <CheckCircle2 size={13} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Quality Lab Link */}
        <div className="mt-8 text-center">
          <Link
            href="/certifications"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#bb5b2c] hover:underline"
          >
            <span>{t.certsViewLink}</span>
            <ArrowUpRight size={13} />
          </Link>
        </div>
      </div>
    </section>
  );
};
