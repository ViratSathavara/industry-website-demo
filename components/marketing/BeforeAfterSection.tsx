"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle2, XCircle } from "lucide-react";

export const BeforeAfterSection: React.FC = () => {
  return (
    <section id="why" className="bg-[#f5f0e7] px-5 py-24 md:px-10 md:py-32 lg:px-14">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-14 lg:grid-cols-[.72fr_1.28fr] lg:gap-24">
          <div>
            <span className="eyebrow text-[#bb5b2c]">The shift / 02</span>
            <h2 className="mt-5 max-w-md font-display text-[clamp(3rem,6vw,6.2rem)] leading-[.9] tracking-[-.04em] text-[#20272b]">
              The machine is <em className="text-[#bb5b2c]">excellent.</em>
              <br />
              The market should know.
            </h2>
            <p className="mt-7 max-w-sm text-[15px] leading-7 text-[#5f6768]">
              India’s precision CNC machine shops operate with world-class DMG Mori and Mazak 5-axis centers, but rely on offline phone calls and WhatsApp threads. INDUSTRIA turns that invisible confidence into a clear, searchable, 24/7 procurement experience.
            </p>

            <div className="mt-8 space-y-3 font-mono text-xs">
              <div className="flex items-start gap-2.5 text-[#895232]">
                <XCircle size={15} className="shrink-0 mt-0.5 text-[#bb5b2c]" />
                <span>Before: 7-10 day quotation delay & untracked drawings</span>
              </div>
              <div className="flex items-start gap-2.5 text-[#20272b]">
                <CheckCircle2 size={15} className="shrink-0 mt-0.5 text-[#e46e2e]" />
                <span>After: 2-Hour automated CAM estimate & live CMM logs</span>
              </div>
            </div>

            <Link
              href="/request-quote"
              className="mt-8 inline-flex items-center gap-2 border-b border-[#bb5b2c] pb-2 text-sm font-semibold text-[#bb5b2c] transition-opacity hover:opacity-80"
            >
              See what a digital front door looks like <ArrowRight size={15} />
            </Link>
          </div>

          <div className="relative min-h-[460px]">
            {/* Top Left Image Card */}
            <div className="absolute left-0 top-0 h-[68%] w-[82%] overflow-hidden bg-[#20272b]">
              <Image
                src="/industrial-process.jpg"
                alt="5-Axis CNC machining cell and fabrication line"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#20272b]/70 to-transparent" />
              <div className="absolute bottom-5 left-5 font-mono text-[10px] uppercase tracking-[.14em] text-[#ddd8cb]">
                Before / Offline machine shop & WhatsApp drawings
              </div>
            </div>

            {/* Bottom Right Overlapping Stat Card */}
            <div className="absolute bottom-0 right-0 w-[72%] border border-[#d0c7b8] bg-[#e8e1d5] p-5 shadow-[10px_10px_0_#bb5b2c] md:p-7">
              <div className="flex items-center justify-between border-b border-[#cfc4b4] pb-4 font-mono text-[10px] uppercase tracking-[.1em] text-[#697174]">
                <span>After / Found by Tier-1 OEM Procurement</span>
                <Sparkles size={14} className="text-[#bb5b2c]" />
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div>
                  <p className="font-display text-4xl text-[#bb5b2c]">3.4×</p>
                  <p className="mt-1 text-xs text-[#687173]">qualified RFQ discovery</p>
                </div>
                <div>
                  <p className="font-display text-4xl text-[#20272b]">−18h</p>
                  <p className="mt-1 text-xs text-[#687173]">saved per quoting cycle</p>
                </div>
              </div>
              <div className="mt-6 border-t border-[#cfc4b4] pt-4 grid grid-cols-2 gap-2 font-mono text-[10px] uppercase text-[#687173]">
                <span>✓ Direct STEP/IGES CAD</span>
                <span>✓ Zeiss CMM Traceability</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
