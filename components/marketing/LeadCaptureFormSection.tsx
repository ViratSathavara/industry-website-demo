"use client";

import React, { useState, FormEvent } from "react";
import { Mail, Phone, MapPin, Check, ArrowRight, ArrowUpRight, Send } from "lucide-react";
import { useDemoState } from "@/lib/services/demo-state-context";

export const LeadCaptureFormSection: React.FC = () => {
  const { submitEnquiry } = useDemoState();
  const [submitted, setSubmitted] = useState(false);
  const [refCode, setRefCode] = useState("RFQ-2026-00481");

  const [name, setName] = useState("Anita Rao");
  const [email, setEmail] = useState("anita@factory.in");
  const [company, setCompany] = useState("Rao Precision Works");
  const [capability, setCapability] = useState("5-Axis Turbine Impellers & Splined Drive Shafts");
  const [message, setMessage] = useState(
    "Need quotation for batch of 250 pieces in Titanium Ti-6Al-4V with EN 10204 3.1 MTC inspection certification."
  );

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const created = submitEnquiry({
      customerName: name,
      company,
      phone: "+91 98250 44120",
      email,
      productInterest: capability,
      source: "Website",
      urgency: "High",
      message,
      assignee: "Plant Engineering Lead",
      location: "Sanand GIDC, Gujarat"
    });

    setRefCode(created.enquiryNumber);
    setSubmitted(true);
  };

  return (
    <section id="enquiry" className="bg-[#e46e2e] px-5 py-24 text-[#20272b] md:px-10 md:py-32 lg:px-14">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
          {/* Left Column: Direct Plant Contact Details */}
          <div>
            <span className="eyebrow text-[#20272b]/70">Start a useful conversation / 06</span>
            <h2 className="mt-5 max-w-xl font-display text-[clamp(3.4rem,7vw,7.3rem)] leading-[.86] tracking-[-.045em]">
              Make the next enquiry <em>count.</em>
            </h2>
            <p className="mt-7 max-w-sm text-[15px] leading-7 text-[#20272b]/80">
              Tell us what you make, the required alloy grade and tolerances, or where the current supplier handoff breaks. Our application engineering team will return a sharp CAM feasibility estimate within 2-4 hours.
            </p>
            <div className="mt-12 space-y-4 border-t border-[#20272b]/20 pt-5 text-sm font-mono">
              <div className="flex items-center gap-3">
                <Mail size={16} /> rfq@industria-demo.com
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} /> +91 (079) 4890 2200 / +91 98250 44120
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={16} /> Sanand GIDC Phase II · Ahmedabad · Gujarat, India
              </div>
            </div>
          </div>

          {/* Right Column: Brief Intake Card */}
          <div className="bg-[#20272b] p-6 text-[#f5f0e7] md:p-9 shadow-2xl">
            {submitted ? (
              <div className="flex min-h-[390px] flex-col justify-center">
                <div className="grid size-12 place-items-center border border-[#e7a45c] text-[#e7a45c]">
                  <Check size={24} />
                </div>
                <p className="eyebrow mt-7 text-[#e7a45c]">Enquiry logged in CRM</p>
                <h3 className="mt-4 font-display text-4xl sm:text-5xl leading-none">
                  A useful next step is on its way.
                </h3>
                <p className="mt-5 max-w-md text-sm leading-6 text-[#aeb5b2]">
                  Your engineering reference is <span className="font-mono text-[#f5f0e7] font-bold">{refCode}</span>. A member of the INDUSTRIA technical team will review the brief, verify CAM toolpath feasibility, and reply with an official line-item quotation within 4 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-8 inline-flex items-center gap-2 border-b border-[#e7a45c] pb-2 text-sm text-[#e7a45c] hover:opacity-80"
                >
                  Send another engineering brief <ArrowRight size={15} />
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-8 flex items-center justify-between border-b border-white/15 pb-5">
                  <div>
                    <p className="eyebrow text-[#e7a45c]">Direct Engineering Intake</p>
                    <p className="mt-2 text-sm text-[#aeb5b2]">
                      Submit 2D/3D drawing specifications for CAM feasibility
                    </p>
                  </div>
                  <Send size={20} className="text-[#e7a45c]" />
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-xs text-[#aeb5b2] font-mono">Your name *</span>
                    <input
                      required
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full border-b border-white/25 bg-transparent px-0 py-2 text-sm outline-none transition-colors focus:border-[#e7a45c]"
                      placeholder="Anita Rao"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-xs text-[#aeb5b2] font-mono">Official work email *</span>
                    <input
                      required
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full border-b border-white/25 bg-transparent px-0 py-2 text-sm outline-none transition-colors focus:border-[#e7a45c]"
                      placeholder="anita@factory.in"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-xs text-[#aeb5b2] font-mono">Company / factory *</span>
                    <input
                      required
                      name="company"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full border-b border-white/25 bg-transparent px-0 py-2 text-sm outline-none transition-colors focus:border-[#e7a45c]"
                      placeholder="Rao Precision Works"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-xs text-[#aeb5b2] font-mono">Component to machine / SKU *</span>
                    <input
                      required
                      name="capability"
                      value={capability}
                      onChange={(e) => setCapability(e.target.value)}
                      className="w-full border-b border-white/25 bg-transparent px-0 py-2 text-sm outline-none transition-colors focus:border-[#e7a45c]"
                      placeholder="5-Axis Impeller, Splined Shaft, Flange..."
                    />
                  </label>
                </div>

                <label className="mt-7 block">
                  <span className="mb-2 block text-xs text-[#aeb5b2] font-mono">Technical details & volume tiers</span>
                  <textarea
                    required
                    name="message"
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full resize-none border-b border-white/25 bg-transparent px-0 py-2 text-sm outline-none transition-colors focus:border-[#e7a45c]"
                    placeholder="Tolerance requirements, material alloy (e.g. Ti-6Al-4V, SS316L), target delivery date..."
                  />
                </label>

                <button
                  type="submit"
                  className="mt-8 inline-flex items-center gap-3 bg-[#e7a45c] px-5 py-3.5 text-sm font-semibold text-[#20272b] transition-colors hover:bg-[#f4b875]"
                >
                  Send the engineering brief <ArrowUpRight size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
