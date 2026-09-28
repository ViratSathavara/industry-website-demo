"use client";

import React, { useState } from "react";
import { useDemoState } from "@/lib/services/demo-state-context";
import { Sparkles, RotateCcw, ChevronRight, Building, CheckCircle2, ShieldCheck } from "lucide-react";
import Link from "next/link";

export const DemoModeBanner: React.FC = () => {
  const { resetDemoData } = useDemoState();
  const [resetConfirm, setResetConfirm] = useState(false);

  return (
    <>
      <div className="bg-stone-950 text-stone-300 text-xs py-2 px-4 border-b border-stone-800 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 font-bold text-white text-[11px]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>INDUSTRIA PRECISION MANUFACTURING</span>
          </div>
          <span className="hidden md:inline text-stone-500">|</span>
          <span className="hidden md:inline text-stone-400 text-[11px]">
            CNC Turning, 5-Axis Milling & Forgings • GIDC Naroda, Ahmedabad
          </span>
          <span className="hidden lg:inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[10px] font-semibold border border-emerald-500/20">
            <ShieldCheck className="w-3 h-3" />
            ISO 9001:2015 & IATF 16949
          </span>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/overview"
            className="flex items-center gap-1 text-amber-400 hover:text-amber-300 font-bold bg-amber-500/10 px-2.5 py-1 rounded-lg border border-amber-500/30 text-[11px] transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>How to Explain to Client (3 Min)</span>
          </Link>

          <Link
            href="/portal/dashboard"
            className="hidden sm:inline-flex items-center gap-1 text-stone-300 hover:text-white font-medium text-[11px]"
          >
            <span>Customer Portal</span>
          </Link>

          <Link
            href="/admin/dashboard"
            className="hidden sm:inline-flex items-center gap-1 text-stone-300 hover:text-white font-medium text-[11px]"
          >
            <span>Factory Admin</span>
          </Link>

          <button
            onClick={() => setResetConfirm(true)}
            title="Reset demo data to initial defaults"
            className="text-stone-400 hover:text-rose-400 transition-colors flex items-center gap-1 text-[11px]"
          >
            <RotateCcw className="w-3 h-3" />
            <span className="hidden xl:inline">Reset Demo</span>
          </button>
        </div>
      </div>

      {/* Reset Confirmation Modal */}
      {resetConfirm && (
        <div className="fixed inset-0 z-60 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white text-stone-900 rounded-2xl max-w-sm w-full p-6 shadow-2xl border border-stone-200 space-y-4">
            <h3 className="font-bold text-base text-stone-900">
              Reset Demo to Factory State?
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              This will restore all sample precision components, RFQs, quotations, and active work orders to default.
            </p>
            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                onClick={() => setResetConfirm(false)}
                className="px-3.5 py-1.5 rounded-lg text-xs font-semibold text-stone-600 hover:bg-stone-100"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  resetDemoData();
                  setResetConfirm(false);
                }}
                className="px-4 py-1.5 rounded-lg text-xs font-semibold bg-rose-600 hover:bg-rose-700 text-white"
              >
                Reset Data
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
