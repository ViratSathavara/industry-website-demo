"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FileText, Compass, Layers, Cpu, ShieldCheck,
  Package, Truck, Headphones, ArrowUpRight
} from "lucide-react";
import { useDemoState } from "@/lib/services/demo-state-context";

export const ManufacturingProcessSection: React.FC = () => {
  const { t } = useDemoState();
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { step: "01", icon: FileText, title: t.procStep01Title, subtitle: t.procStep01Sub, description: t.procStep01Desc, deliverable: t.procStep01Del },
    { step: "02", icon: Compass, title: t.procStep02Title, subtitle: t.procStep02Sub, description: t.procStep02Desc, deliverable: t.procStep02Del },
    { step: "03", icon: Layers,  title: t.procStep03Title, subtitle: t.procStep03Sub, description: t.procStep03Desc, deliverable: t.procStep03Del },
    { step: "04", icon: Cpu,     title: t.procStep04Title, subtitle: t.procStep04Sub, description: t.procStep04Desc, deliverable: t.procStep04Del },
    { step: "05", icon: ShieldCheck, title: t.procStep05Title, subtitle: t.procStep05Sub, description: t.procStep05Desc, deliverable: t.procStep05Del },
    { step: "06", icon: Package, title: t.procStep06Title, subtitle: t.procStep06Sub, description: t.procStep06Desc, deliverable: t.procStep06Del },
    { step: "07", icon: Truck,   title: t.procStep07Title, subtitle: t.procStep07Sub, description: t.procStep07Desc, deliverable: t.procStep07Del },
    { step: "08", icon: Headphones, title: t.procStep08Title, subtitle: t.procStep08Sub, description: t.procStep08Desc, deliverable: t.procStep08Del },
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
                {t.processLabel}
              </span>
            </div>
            <h2 className="font-display text-[clamp(2.6rem,5vw,5rem)] leading-[.92] tracking-[-.04em] text-[#f5f0e7]">
              {t.processTitle} <em className="text-[#e7a45c]">{t.processHeadlineEm}</em>
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-[#aeb5b2] leading-relaxed font-sans">
            {t.processSubtitle}
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
              <div className="text-[10px] text-[#e7a45c] font-bold">{t.processStepLabel} {s.step}</div>
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
                    {t.processStageLabel} {current.step} — {current.subtitle}
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
                <span className="text-[#7e8989]">{t.processOutputLabel}</span>
                <span className="text-[#e7a45c] font-bold truncate max-w-md">{current.deliverable}</span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-center space-y-3 p-6 bg-[#171c1e] border border-white/10 text-xs font-mono">
              <div className="text-[#e7a45c] font-bold uppercase tracking-wider">{t.processQCLabel}</div>
              <ul className="space-y-2 text-[#aeb5b2]">
                {[t.processQC1, t.processQC2, t.processQC3, t.processQC4].map((qc) => (
                  <li key={qc} className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-[#e7a45c]" />
                    <span>{qc}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-3">
                <Link
                  href="/manufacturing-process"
                  className="flex items-center justify-between text-[#e7a45c] hover:underline font-bold"
                >
                  <span>{t.processExploreLink}</span>
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
