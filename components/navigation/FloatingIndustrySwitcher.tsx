"use client";

import React, { useState } from "react";
import { useDemoState } from "@/lib/services/demo-state-context";
import { Layers, ChevronUp, Check, Sparkles } from "lucide-react";

export const FloatingIndustrySwitcher: React.FC = () => {
  const { selectedIndustry, setSelectedIndustryId, industries } = useDemoState();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-40">
      {/* Popover Menu */}
      {isOpen && (
        <div className="mb-2 w-72 bg-white rounded-xl shadow-2xl border border-stone-200 p-3 animate-in slide-in-from-bottom-5 duration-200">
          <div className="flex items-center justify-between pb-2 border-b border-stone-100 mb-2">
            <div className="flex items-center gap-1.5 text-xs font-bold text-stone-900">
              <Sparkles className="w-3.5 h-3.5 text-[#d4560a]" />
              <span>Live Industry Switcher</span>
            </div>
            <span className="text-[10px] text-stone-400 font-mono">18 Verticals</span>
          </div>

          <div className="max-h-60 overflow-y-auto space-y-1 pr-1">
            {industries.map((ind) => {
              const isSelected = ind.id === selectedIndustry.id;
              return (
                <button
                  key={ind.id}
                  onClick={() => {
                    setSelectedIndustryId(ind.id);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-2.5 py-2 rounded-lg text-xs text-left transition-colors ${
                    isSelected
                      ? "bg-orange-50 text-[#d4560a] font-semibold border border-orange-200"
                      : "text-stone-700 hover:bg-stone-50"
                  }`}
                >
                  <span className="truncate">{ind.name}</span>
                  {isSelected && <Check className="w-3.5 h-3.5 shrink-0 ml-1 text-[#d4560a]" />}
                </button>
              );
            })}
          </div>

          <div className="mt-2 pt-2 border-t border-stone-100 text-[10px] text-stone-400 text-center">
            Instantly re-skins product listings, hero visuals & RFQ fields
          </div>
        </div>
      )}

      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-stone-900 text-white hover:bg-stone-800 shadow-xl border border-stone-700 transition-all text-xs font-semibold group"
      >
        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <Layers className="w-3.5 h-3.5 text-amber-400 group-hover:rotate-45 transition-transform" />
        <span className="max-w-[130px] truncate">{selectedIndustry.name}</span>
        <ChevronUp className={`w-3.5 h-3.5 text-stone-400 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
    </div>
  );
};
