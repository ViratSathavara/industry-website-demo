"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useDemoState } from "@/lib/services/demo-state-context";
import {
  Send,
  CheckCircle2,
  FileUp,
  Clock,
  ShieldAlert,
  ArrowRight,
  Sparkles,
  Phone,
  Building
} from "lucide-react";
import confetti from "canvas-confetti";

export const LeadCaptureFormSection: React.FC = () => {
  const { selectedIndustry, submitEnquiry } = useDemoState();

  const [formData, setFormData] = useState({
    name: "Rajeshbhai Patel",
    company: "Shree Shakti Engineering Works",
    phone: "+91 98250 44120",
    email: "rajesh@shreeshaktieng.com",
    requirement: selectedIndustry.sampleProductType,
    quantity: "50",
    location: "Mehsana, Gujarat",
    urgency: "High" as const,
    source: "Website" as const,
    message: "Kindly quote best commercial price with delivery lead time."
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedReference, setSubmittedReference] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const created = submitEnquiry({
        customerName: formData.name,
        company: formData.company,
        phone: formData.phone,
        email: formData.email,
        productInterest: `${formData.requirement} (Qty: ${formData.quantity})`,
        source: formData.source,
        urgency: formData.urgency,
        message: formData.message,
        assignee: "Vikram Mehta (Sales Head)",
        location: formData.location
      });

      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.7 }
        });
      } catch {}

      setSubmittedReference(created.enquiryNumber);
      setIsSubmitting(false);
    }, 600);
  };

  return (
    <section className="py-20 bg-stone-900 text-stone-100 border-b border-stone-800 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#d4560a]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Callout and Next Steps */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#d4560a]">
              Direct Digital Enquiry
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Have a requirement? Send it once. Let sales take it from there.
            </h2>
            <p className="text-stone-400 text-sm leading-relaxed">
              Skip repeated telephone explanations and lost WhatsApp messages. Our structured enquiry system connects your technical requirement directly to the responsible plant sales manager.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-stone-800/60 border border-stone-700/60">
                <Clock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-xs text-white">4-Hour Estimated Response</h4>
                  <p className="text-[11px] text-stone-400">
                    Our technical engineers review drawings and reply with preliminary budget within half a working day.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-stone-800/60 border border-stone-700/60">
                <Sparkles className="w-5 h-5 text-[#d4560a] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-xs text-white">Automatic Portal Account Creation</h4>
                  <p className="text-[11px] text-stone-400">
                    Track formal quotations, download CAD files, and confirm orders directly inside your buyer dashboard.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2 text-xs text-stone-500">
              Need formal multi-line RFQ with drawings?{" "}
              <Link href="/request-quote" className="text-[#d4560a] font-semibold hover:underline">
                Open Full RFQ Builder →
              </Link>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="bg-stone-800/90 backdrop-blur-md rounded-2xl border border-stone-700 p-6 sm:p-8 shadow-2xl">
              {submittedReference ? (
                /* Submission Success Card */
                <div className="text-center py-8 space-y-4 animate-in zoom-in-95 duration-200">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      Enquiry Logged Successfully!
                    </h3>
                    <p className="text-xs text-stone-400 mt-1">
                      Reference Number:{" "}
                      <strong className="text-amber-400 font-mono text-sm">
                        {submittedReference}
                      </strong>
                    </p>
                  </div>
                  <p className="text-xs text-stone-300 max-w-md mx-auto leading-relaxed bg-stone-900/60 p-3 rounded-lg border border-stone-700">
                    Your requirement for <strong>{formData.requirement}</strong> has been assigned to Sales Engineer <strong>Vikram Mehta</strong>. An automated notification has also been dispatched to the CRM.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                    <Link
                      href="/portal/dashboard"
                      className="px-5 py-2.5 rounded-lg bg-[#d4560a] text-white text-xs font-semibold hover:bg-[#b84605] transition-colors"
                    >
                      View in Customer Portal
                    </Link>
                    <button
                      onClick={() => setSubmittedReference(null)}
                      className="px-5 py-2.5 rounded-lg bg-stone-700 text-stone-200 text-xs font-semibold hover:bg-stone-600 transition-colors"
                    >
                      Submit Another Requirement
                    </button>
                  </div>
                </div>
              ) : (
                /* Form Inputs */
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-stone-700">
                    <h3 className="font-bold text-sm text-white">Quick Requirement Form</h3>
                    <span className="text-[11px] text-amber-400 font-mono">
                      Current: {selectedIndustry.name}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div>
                      <label className="block text-stone-300 mb-1 font-medium">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-stone-900 border border-stone-700 rounded-lg px-3 py-2 text-stone-100 placeholder:text-stone-500 focus:outline-none focus:border-[#d4560a]"
                      />
                    </div>
                    <div>
                      <label className="block text-stone-300 mb-1 font-medium">Company Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full bg-stone-900 border border-stone-700 rounded-lg px-3 py-2 text-stone-100 placeholder:text-stone-500 focus:outline-none focus:border-[#d4560a]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div>
                      <label className="block text-stone-300 mb-1 font-medium">Phone / WhatsApp *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-stone-900 border border-stone-700 rounded-lg px-3 py-2 text-stone-100 placeholder:text-stone-500 focus:outline-none focus:border-[#d4560a]"
                      />
                    </div>
                    <div>
                      <label className="block text-stone-300 mb-1 font-medium">Work Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-stone-900 border border-stone-700 rounded-lg px-3 py-2 text-stone-100 placeholder:text-stone-500 focus:outline-none focus:border-[#d4560a]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                    <div className="sm:col-span-2">
                      <label className="block text-stone-300 mb-1 font-medium">
                        Product / Technical Requirement *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.requirement}
                        onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                        className="w-full bg-stone-900 border border-stone-700 rounded-lg px-3 py-2 text-stone-100 placeholder:text-stone-500 focus:outline-none focus:border-[#d4560a]"
                      />
                    </div>
                    <div>
                      <label className="block text-stone-300 mb-1 font-medium">Target Qty *</label>
                      <input
                        type="text"
                        required
                        value={formData.quantity}
                        onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                        placeholder="e.g. 100 pcs"
                        className="w-full bg-stone-900 border border-stone-700 rounded-lg px-3 py-2 text-stone-100 placeholder:text-stone-500 focus:outline-none focus:border-[#d4560a]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div>
                      <label className="block text-stone-300 mb-1 font-medium">Delivery City / State *</label>
                      <input
                        type="text"
                        required
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full bg-stone-900 border border-stone-700 rounded-lg px-3 py-2 text-stone-100 placeholder:text-stone-500 focus:outline-none focus:border-[#d4560a]"
                      />
                    </div>
                    <div>
                      <label className="block text-stone-300 mb-1 font-medium">Urgency</label>
                      <select
                        value={formData.urgency}
                        onChange={(e) => setFormData({ ...formData, urgency: e.target.value as any })}
                        className="w-full bg-stone-900 border border-stone-700 rounded-lg px-3 py-2 text-stone-100 focus:outline-none focus:border-[#d4560a]"
                      >
                        <option value="Normal">Normal (Quote within 24h)</option>
                        <option value="High">High (Quote within 4h)</option>
                        <option value="Urgent">Urgent (Production Line Breakdown)</option>
                      </select>
                    </div>
                  </div>

                  <div className="text-xs">
                    <label className="block text-stone-300 mb-1 font-medium">
                      Additional Notes or Drawing Attachment Placeholder
                    </label>
                    <textarea
                      rows={2}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-stone-900 border border-stone-700 rounded-lg p-2.5 text-stone-100 placeholder:text-stone-500 focus:outline-none focus:border-[#d4560a]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 rounded-xl bg-[#d4560a] hover:bg-[#b84605] text-white font-bold text-xs shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Registering Enquiry & Generating Lead...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Requirement to Factory Sales</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
