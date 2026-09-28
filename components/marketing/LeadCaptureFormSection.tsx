"use client";

import React, { useState, FormEvent } from "react";
import { Mail, Phone, MapPin, Check, ArrowRight, ArrowUpRight, Send } from "lucide-react";
import { useDemoState } from "@/lib/services/demo-state-context";

export const LeadCaptureFormSection: React.FC = () => {
  const { submitEnquiry, t } = useDemoState();
  const [submitted, setSubmitted] = useState(false);
  const [refCode, setRefCode] = useState("RFQ-2026-00481");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [name, setName] = useState("Anita Rao");
  const [email, setEmail] = useState("anita@factory.in");
  const [phone, setPhone] = useState("+91 98250 44120");
  const [company, setCompany] = useState("Rao Precision Works");
  const [capability, setCapability] = useState("V6 Submersible Motor Parts & Bronze Impellers");
  const [message, setMessage] = useState(
    "Need quotation for 250 pcs V6 motor stator assemblies. Please provide EN 10204 3.1 MTC certification."
  );

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const created = submitEnquiry({
      customerName: name,
      company,
      phone,
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
    setIsSubmitting(false);
  };

  return (
    <section id="enquiry" className="bg-[#e46e2e] px-5 py-24 text-[#20272b] md:px-10 md:py-32 lg:px-14">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
          {/* Left Column */}
          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#20272b]/60">
              {t.formSubtitle}
            </span>
            <h2 className="mt-5 max-w-xl font-display text-[clamp(3rem,6vw,6.5rem)] leading-[.86] tracking-[-.045em]">
              {t.formTitle}
            </h2>
            <p className="mt-7 max-w-sm text-[15px] leading-7 text-[#20272b]/75">
              {t.formSubtitle}
            </p>
            <div className="mt-10 space-y-4 border-t border-[#20272b]/20 pt-5 text-sm font-mono">
              <div className="flex items-center gap-3">
                <Mail size={15} />
                <a href="mailto:sales@industriamotorparts.in" className="hover:underline">
                  sales@industriamotorparts.in
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={15} />
                <a href="tel:+919876543210" className="hover:underline">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={15} className="mt-0.5 shrink-0" />
                <span>Sanand GIDC Phase II · Ahmedabad · Gujarat, India</span>
              </div>
            </div>
          </div>

          {/* Right Column: Form Card */}
          <div className="bg-[#20272b] p-6 text-[#f5f0e7] md:p-9 shadow-2xl">
            {submitted ? (
              <div className="flex min-h-[390px] flex-col justify-center">
                <div className="grid size-12 place-items-center border border-[#e7a45c] text-[#e7a45c]">
                  <Check size={24} />
                </div>
                <p className="mt-7 text-[11px] font-mono uppercase tracking-widest text-[#e7a45c]">
                  {t.formSuccessTitle}
                </p>
                <h3 className="mt-4 font-display text-4xl sm:text-5xl leading-none">
                  {t.formSuccessMsg}
                </h3>
                <p className="mt-5 max-w-md text-sm leading-6 text-[#aeb5b2]">
                  {t.formRefCode}:{" "}
                  <span className="font-mono text-[#f5f0e7] font-bold">{refCode}</span>
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-8 inline-flex items-center gap-2 border-b border-[#e7a45c] pb-2 text-sm text-[#e7a45c] hover:opacity-80"
                >
                  {t.formSubmit} <ArrowRight size={15} />
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-8 flex items-center justify-between border-b border-white/15 pb-5">
                  <div>
                    <p className="text-[11px] font-mono uppercase tracking-widest text-[#e7a45c]">
                      {t.formTitle}
                    </p>
                    <p className="mt-1.5 text-sm text-[#aeb5b2]">{t.formSubtitle}</p>
                  </div>
                  <Send size={20} className="text-[#e7a45c] shrink-0" />
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-xs text-[#aeb5b2] font-mono">
                      {t.formName} *
                    </span>
                    <input
                      required
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full border-b border-white/25 bg-transparent px-0 py-2 text-sm outline-none transition-colors focus:border-[#e7a45c] placeholder:text-white/20"
                      placeholder="Anita Rao"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-xs text-[#aeb5b2] font-mono">
                      {t.formEmail} *
                    </span>
                    <input
                      required
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full border-b border-white/25 bg-transparent px-0 py-2 text-sm outline-none transition-colors focus:border-[#e7a45c] placeholder:text-white/20"
                      placeholder="anita@factory.in"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-xs text-[#aeb5b2] font-mono">
                      {t.formPhone}
                    </span>
                    <input
                      name="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full border-b border-white/25 bg-transparent px-0 py-2 text-sm outline-none transition-colors focus:border-[#e7a45c] placeholder:text-white/20"
                      placeholder="+91 98765 43210"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-xs text-[#aeb5b2] font-mono">
                      {t.formCompany} *
                    </span>
                    <input
                      required
                      name="company"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full border-b border-white/25 bg-transparent px-0 py-2 text-sm outline-none transition-colors focus:border-[#e7a45c] placeholder:text-white/20"
                      placeholder="Rao Precision Works"
                    />
                  </label>
                  <label className="block md:col-span-2">
                    <span className="mb-2 block text-xs text-[#aeb5b2] font-mono">
                      {t.formProductInterest} *
                    </span>
                    <input
                      required
                      name="capability"
                      value={capability}
                      onChange={(e) => setCapability(e.target.value)}
                      className="w-full border-b border-white/25 bg-transparent px-0 py-2 text-sm outline-none transition-colors focus:border-[#e7a45c] placeholder:text-white/20"
                      placeholder="V6 Motor Parts, Bronze Impeller, SS410 Shaft…"
                    />
                  </label>
                </div>

                <label className="mt-6 block">
                  <span className="mb-2 block text-xs text-[#aeb5b2] font-mono">
                    {t.formMessage}
                  </span>
                  <textarea
                    required
                    name="message"
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full resize-none border-b border-white/25 bg-transparent px-0 py-2 text-sm outline-none transition-colors focus:border-[#e7a45c] placeholder:text-white/20"
                    placeholder="Quantity, material grade, tolerance, delivery date…"
                  />
                </label>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-8 inline-flex items-center gap-3 bg-[#e7a45c] px-6 py-3.5 text-sm font-bold text-[#20272b] transition-colors hover:bg-[#f4b875] disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? t.formSubmitting : t.formSubmit}
                  <ArrowUpRight size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
