"use client";

import React from "react";
import {
  Factory,
  BookOpen,
  Search,
  MessageSquare,
  FileText,
  FileCheck,
  UserCheck,
  Truck,
  Repeat
} from "lucide-react";

export const GrowthStrip: React.FC = () => {
  const steps = [
    { label: "Offline Factory", icon: Factory, desc: "Traditional phone & visit dependency" },
    { label: "Online Catalogue", icon: BookOpen, desc: "Structured product specs & CAD files" },
    { label: "Discovery", icon: Search, desc: "Found on Google, WhatsApp & portals" },
    { label: "Enquiry", icon: MessageSquare, desc: "Omnichannel inbound lead tracking" },
    { label: "Structured RFQ", icon: FileText, desc: "Direct dimensions & volume capture" },
    { label: "Instant Quote", icon: FileCheck, desc: "Fast approval & line item pricing" },
    { label: "Customer Account", icon: UserCheck, desc: "Dedicated self-service buyer portal" },
    { label: "Order & Tracking", icon: Truck, desc: "Transparent production status" },
    { label: "Repeat Orders", icon: Repeat, desc: "High retention & LTV growth" }
  ];

  return (
    <section className="py-12 bg-white border-b border-stone-200 overflow-x-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#d4560a]">
            The Digital Growth Transformation
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight mt-1">
            How a traditional workshop evolves into a digital manufacturing enterprise
          </h2>
        </div>

        {/* Interactive Steps Strip */}
        <div className="flex items-center justify-between min-w-[900px] gap-2 py-4">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isFirst = idx === 0;
            const isLast = idx === steps.length - 1;

            return (
              <React.Fragment key={step.label}>
                <div className="flex flex-col items-center text-center flex-1 group">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-200 mb-2 border shadow-xs ${
                      isFirst
                        ? "bg-stone-100 text-stone-600 border-stone-300"
                        : isLast
                        ? "bg-emerald-50 text-emerald-700 border-emerald-300 group-hover:scale-105"
                        : "bg-orange-50/70 text-[#d4560a] border-orange-200 group-hover:bg-[#d4560a] group-hover:text-white group-hover:scale-105"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-stone-900 leading-tight">
                    {step.label}
                  </span>
                  <span className="text-[10px] text-stone-500 mt-1 max-w-[100px] leading-snug line-clamp-2">
                    {step.desc}
                  </span>
                </div>

                {idx < steps.length - 1 && (
                  <div className="h-0.5 w-6 bg-stone-200 shrink-0 self-center -mt-6" />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
};
