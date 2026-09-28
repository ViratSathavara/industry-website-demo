"use client";

import React from "react";
import {
  PhoneCall,
  Clock,
  HelpCircle,
  FileQuestion,
  MessageCircleWarning,
  Search,
  BookOpen,
  Send,
  Zap,
  CheckCircle2,
  TrendingUp,
  ArrowRight,
  XCircle
} from "lucide-react";

export const BeforeAfterSection: React.FC = () => {
  const beforeSteps = [
    { title: "Offline Discovery", desc: "Customer sees factory board or phone number from a colleague", icon: PhoneCall },
    { title: "Manual Phone Enquiry", desc: "Calls during office hours only; salesperson might be busy or away", icon: Clock },
    { title: "Scattered Catalogues", desc: "Sends outdated PDF or mobile photos over personal WhatsApp", icon: HelpCircle },
    { title: "Slow Quotation Process", desc: "Manual Excel costing calculations taking 3 to 5 business days", icon: FileQuestion },
    { title: "No Visibility", desc: "Buyer calls repeatedly asking 'Where is my order?' during production", icon: MessageCircleWarning }
  ];

  const afterSteps = [
    { title: "Instant Digital Search", desc: "Buyer finds products on Google, QR codes, or direct link 24/7", icon: Search },
    { title: "Live Technical Specs", desc: "Exact dimensions, tolerances, CAD drawings & test reports online", icon: BookOpen },
    { title: "Structured Online RFQ", desc: "Submits exact quantity, material grade & custom specs in 2 minutes", icon: Send },
    { title: "Automated Quotation", desc: "Sales team generates branded quote with digital acceptance link", icon: Zap },
    { title: "Customer Portal & Tracking", desc: "Buyer logs in to track live production stage, invoices & dispatch", icon: CheckCircle2 }
  ];

  return (
    <section className="py-20 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#d4560a]">
            The Business Impact
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight mt-1">
            Before vs. After Digital Transformation
          </h2>
          <p className="text-sm text-stone-600 mt-2 leading-relaxed">
            See the contrast between traditional offline friction and the modern digital manufacturing experience that closes deals faster and retains customers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* The Old Way (Offline) */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-stone-100 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center">
                    <XCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-900 text-base">The Traditional Workshop</h3>
                    <span className="text-[11px] text-stone-500">Offline, slow & phone-dependent</span>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-rose-100 text-rose-800 text-[11px] font-bold">
                  HIGH FRICTION
                </span>
              </div>

              <div className="space-y-4">
                {beforeSteps.map((step, idx) => {
                  const Icon = step.icon;
                  return (
                    <div key={step.title} className="flex items-start gap-3.5 p-3 rounded-xl bg-stone-50/70 border border-stone-100">
                      <div className="w-7 h-7 rounded-lg bg-stone-200 text-stone-600 flex items-center justify-center shrink-0 mt-0.5">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-bold text-xs text-stone-800">
                          {idx + 1}. {step.title}
                        </div>
                        <div className="text-[11px] text-stone-500 mt-0.5 leading-snug">
                          {step.desc}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-8 p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-800 flex items-center gap-2">
              <span className="font-bold">Result:</span>
              <span>Deals take 2-3 weeks to quote. High buyer drop-off. Zero customer data retained.</span>
            </div>
          </div>

          {/* The New Way (Digital Factory) */}
          <div className="bg-stone-900 text-white rounded-2xl p-6 sm:p-8 border border-stone-800 shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#d4560a]/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between pb-4 border-b border-stone-800 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#d4560a] text-white flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base">The Digital Factory Experience</h3>
                    <span className="text-[11px] text-stone-400">Streamlined, trackable & automated</span>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800 text-[11px] font-bold">
                  HIGH CONVERSION
                </span>
              </div>

              <div className="space-y-4 relative z-10">
                {afterSteps.map((step, idx) => {
                  const Icon = step.icon;
                  return (
                    <div key={step.title} className="flex items-start gap-3.5 p-3 rounded-xl bg-stone-800/80 border border-stone-700/80 hover:border-stone-600 transition-colors">
                      <div className="w-7 h-7 rounded-lg bg-[#d4560a]/20 text-[#d4560a] flex items-center justify-center shrink-0 mt-0.5">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-bold text-xs text-white">
                          {idx + 1}. {step.title}
                        </div>
                        <div className="text-[11px] text-stone-400 mt-0.5 leading-snug">
                          {step.desc}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-8 p-3 rounded-xl bg-emerald-950/80 border border-emerald-800/60 text-xs text-emerald-300 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>
                <strong>Result:</strong> 40% faster quotation turnaround. Higher repeat orders. Complete pipeline analytics.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
