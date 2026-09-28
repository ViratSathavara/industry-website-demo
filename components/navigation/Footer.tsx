"use client";

import React from "react";
import Link from "next/link";
import { Factory, ArrowDown, ShieldCheck } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#20272b] px-5 py-12 text-[#f5f0e7] md:px-10 lg:px-14 border-t border-white/10">
      <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-8 md:flex-row md:items-end">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid size-8 place-items-center border border-[#e7a45c] text-[#e7a45c]">
              <Factory size={16} strokeWidth={1.5} />
            </span>
            <span className="font-mono text-[12px] tracking-[.22em] text-[#f5f0e7]">
              INDUSTRIA
            </span>
          </div>
          <p className="mt-4 max-w-sm text-xs leading-5 text-[#9fa8a6]">
            Operating 140+ CNC & 5-axis milling centers with Zeiss 3D CMM metrology certified to IATF 16949 and AS9100D.
          </p>

          {/* Quick link directory */}
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[11px] font-mono uppercase tracking-[.1em] text-[#7e8989]">
            <Link href="/products" className="hover:text-[#e7a45c] transition-colors">
              Parts Catalog
            </Link>
            <Link href="/manufacturing-process" className="hover:text-[#e7a45c] transition-colors">
              Machinery & Cells
            </Link>
            <Link href="/certifications" className="hover:text-[#e7a45c] transition-colors">
              Quality Metrology
            </Link>
            <Link href="/about" className="hover:text-[#e7a45c] transition-colors">
              Plant Infrastructure
            </Link>
            <Link href="/contact" className="hover:text-[#e7a45c] transition-colors">
              Plant Visit
            </Link>
            <Link href="/request-quote" className="hover:text-[#e7a45c] transition-colors">
              Instant CAD RFQ
            </Link>
          </div>
        </div>

        <div className="text-left md:text-right">
          <div className="inline-flex items-center gap-2 mb-2 font-mono text-[10px] text-[#e7a45c]">
            <ShieldCheck size={13} />
            <span>IATF 16949 & AS9100D Certified</span>
          </div>
          <p className="font-mono text-[10px] uppercase tracking-[.13em] text-[#e7a45c]">
            Demo Signal / 2024–25
          </p>
          <p className="mt-1 text-xs text-[#9fa8a6]">
            Sanand GIDC Phase II · Ahmedabad · Gujarat, India
          </p>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-[1440px] justify-between border-t border-white/10 pt-5 font-mono text-[9px] uppercase tracking-[.13em] text-[#7e8989]">
        <span>© INDUSTRIA Precision Manufacturing · All rights reserved</span>
        <a href="#top" className="flex items-center gap-2 hover:text-[#e7a45c] transition-colors">
          Back to top <ArrowDown size={12} className="rotate-180" />
        </a>
      </div>
    </footer>
  );
};
