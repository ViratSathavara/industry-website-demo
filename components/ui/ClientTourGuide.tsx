"use client";

import React, { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import {
  Sparkles,
  ChevronRight,
  ChevronLeft,
  X,
  CheckCircle2,
  HelpCircle,
  Eye,
  FileCheck,
  Truck,
  RotateCcw,
  BookOpen
} from "lucide-react";
import Link from "next/link";
import { useDemoState } from "@/lib/services/demo-state-context";

interface TourStep {
  step: number;
  title: string;
  route: string;
  badge: string;
  whatToShow: string;
  whatToSay: string;
  clientBenefit: string;
}

const TOUR_STEPS: TourStep[] = [
  {
    step: 1,
    title: "1. Buyer Discovers & Requests Quote",
    route: "/products",
    badge: "BUYER VIEW",
    whatToShow: "Open any product (like CNC Hub or Forged Flange). Point out the CAD 3D preview and the 'Request Custom Quote' button.",
    whatToSay: "\"Your buyers don't want to call or wait for emails. They see your full technical capabilities, download 3D models, and submit their drawing in 60 seconds.\"",
    clientBenefit: "Captures 3x more inquiries from serious OEM and export buyers."
  },
  {
    step: 2,
    title: "2. Factory Builds Quote in 60 Seconds",
    route: "/admin/quotes",
    badge: "FACTORY SALES VIEW",
    whatToShow: "Click 'Build New Quotation'. Show how line items, 18% GST, and freight charges are calculated automatically.",
    whatToSay: "\"Instead of spending 3 to 4 days doing calculations on Excel, your sales engineer generates and dispatches a formal GST quotation in 2 minutes.\"",
    clientBenefit: "Turns a 72-hour quote delay into a 2-hour deal-closing speed."
  },
  {
    step: 3,
    title: "3. Buyer Accepts & Tracks Live Order",
    route: "/portal/orders",
    badge: "CUSTOMER PORTAL VIEW",
    whatToShow: "Show the live manufacturing milestones (Machining → Metrology QC → Ready → Dispatched with courier tracking docket).",
    whatToSay: "\"Your customer logs into their branded portal and sees their order status in real time. They never have to call your factory to ask 'Where is my batch?' again.\"",
    clientBenefit: "Saves 15 hours of phone calls every week and locks in repeat OEM buyers."
  }
];

export const ClientTourGuide: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { resetDemoData } = useDemoState();

  const [isOpen, setIsOpen] = useState(false);
  const [currentStepIdx, setCurrentStepIdx] = useState(0);

  const step = TOUR_STEPS[currentStepIdx];

  const handleGoToStep = (idx: number) => {
    setCurrentStepIdx(idx);
    router.push(TOUR_STEPS[idx].route);
  };

  const handleNext = () => {
    const nextIdx = (currentStepIdx + 1) % TOUR_STEPS.length;
    handleGoToStep(nextIdx);
  };

  const handlePrev = () => {
    const prevIdx = (currentStepIdx - 1 + TOUR_STEPS.length) % TOUR_STEPS.length;
    handleGoToStep(prevIdx);
  };

  return (
    <>
      {/* Floating Tour Button when closed */}
      {!isOpen && (
        <div className="fixed bottom-5 right-5 z-50 animate-bounce-subtle">
          <button
            onClick={() => setIsOpen(true)}
            className="px-4 py-2.5 rounded-full bg-neutral-900 text-white shadow-2xl hover:bg-primary border border-neutral-700 hover:border-primary text-xs font-bold flex items-center gap-2 transition-all transform hover:scale-105"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>How to Explain to Client (3 Min Tour)</span>
          </button>
        </div>
      )}

      {/* Floating Tour Guide Overlay Panel */}
      {isOpen && (
        <div className="fixed bottom-5 right-5 z-50 w-full max-w-md bg-white rounded-2xl shadow-2xl border-2 border-primary/30 overflow-hidden animate-slide-up text-neutral-900">
          {/* Header */}
          <div className="p-3.5 bg-neutral-900 text-white flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-primary flex items-center justify-center font-bold text-xs">
                {step.step}
              </span>
              <div>
                <span className="text-[10px] font-mono text-amber-400 font-bold block uppercase tracking-wider">
                  Client Pitch Assistant ({currentStepIdx + 1}/3)
                </span>
                <span className="font-bold text-xs truncate max-w-xs block">
                  {step.title}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <Link
                href="/overview"
                title="Full 1-Page Client Pitch Guide"
                className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
              >
                <BookOpen className="w-4 h-4" />
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Stepper Progress Bar */}
          <div className="grid grid-cols-3 gap-1 p-2 bg-neutral-100 border-b border-neutral-200">
            {TOUR_STEPS.map((s, idx) => (
              <button
                key={s.step}
                onClick={() => handleGoToStep(idx)}
                className={`py-1.5 px-2 rounded text-[11px] font-bold text-left transition-all ${
                  currentStepIdx === idx
                    ? "bg-primary text-white shadow-xs"
                    : "bg-white text-neutral-600 hover:bg-neutral-200"
                }`}
              >
                <div className="truncate">Step {s.step}</div>
              </button>
            ))}
          </div>

          {/* Step Guidance Content */}
          <div className="p-4 space-y-3 text-xs">
            {/* What to show */}
            <div className="p-2.5 rounded-xl bg-neutral-50 border border-neutral-200 space-y-1">
              <span className="font-bold text-neutral-500 uppercase text-[10px] tracking-wider block">
                👀 What to Show on Screen:
              </span>
              <p className="text-neutral-800 font-medium">{step.whatToShow}</p>
            </div>

            {/* Exactly what to say */}
            <div className="p-2.5 rounded-xl bg-amber-50/70 border border-amber-200 space-y-1">
              <span className="font-bold text-amber-800 uppercase text-[10px] tracking-wider block">
                🗣️ Exactly What to Say:
              </span>
              <p className="text-amber-950 italic font-serif leading-relaxed text-[11px]">
                {step.whatToSay}
              </p>
            </div>

            {/* Bottom Benefit */}
            <div className="flex items-center justify-between text-[11px] pt-1 border-t border-neutral-100">
              <span className="text-neutral-500">Business Value:</span>
              <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                {step.clientBenefit}
              </span>
            </div>
          </div>

          {/* Controller Navigation Footer */}
          <div className="p-3 bg-neutral-50 border-t border-neutral-200 flex items-center justify-between">
            <button
              onClick={handlePrev}
              className="px-3 py-1.5 rounded-lg border border-neutral-300 text-neutral-700 font-semibold text-xs hover:bg-neutral-200 flex items-center gap-1"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>Back</span>
            </button>

            <Link
              href={step.route}
              className="text-xs font-bold text-primary hover:underline"
            >
              Go to Page ↗
            </Link>

            <button
              onClick={handleNext}
              className="px-4 py-1.5 rounded-lg bg-primary hover:bg-primary-hover text-white font-semibold text-xs flex items-center gap-1 shadow-sm"
            >
              <span>{currentStepIdx === 2 ? "Start Over" : "Next Step"}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
