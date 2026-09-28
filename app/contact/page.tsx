"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { useDemoState } from "@/lib/services/demo-state-context";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
  ChevronRight,
  Send,
  Cpu
} from "lucide-react";
import confetti from "canvas-confetti";

export default function ContactPage() {
  const { submitEnquiry } = useDemoState();

  const [name, setName] = useState("Anita Rao");
  const [company, setCompany] = useState("Rao Precision Works");
  const [phone, setPhone] = useState("+91 98250 44120");
  const [email, setEmail] = useState("anita@factory.in");
  const [subject, setSubject] = useState("General Technical Inquiry");
  const [message, setMessage] = useState(
    "Interested in scheduling an engineering visit to discuss annual supply contract."
  );

  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const created = submitEnquiry({
      customerName: name,
      company,
      phone,
      email,
      productInterest: subject,
      source: "Callback",
      urgency: "Normal",
      message,
      assignee: "Technical Sales Team",
      location: "Pune / India"
    });

    try {
      confetti({ particleCount: 40, spread: 60 });
    } catch {}

    setSubmittedRef(created.enquiryNumber);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#20272b] text-[#f5f0e7]">
      <Navbar />

      <main className="flex-1 pt-28 pb-20 relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-14 relative z-10">
          <div className="flex items-center gap-2 text-xs text-[#aeb5b2] font-mono mb-8">
            <Link href="/" className="hover:text-[#e7a45c] transition-colors">
              Home
            </Link>
            <ChevronRight size={13} className="text-[#7e8989]" />
            <span className="text-[#f5f0e7] font-semibold">Contact & Plant Location</span>
          </div>

          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#e7a45c]/30 text-[#e7a45c] text-xs font-mono mb-4 bg-white/5">
              <Cpu size={14} />
              <span className="uppercase tracking-[.14em]">Factory Sales & Engineering Desk</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display tracking-tight text-[#f5f0e7]">
              Connect Directly with <em className="text-[#e7a45c]">Our Plant Team.</em>
            </h1>
            <p className="text-sm sm:text-base text-[#aeb5b2] mt-3 leading-relaxed">
              Reach our application engineers, schedule a machine demonstration, or request an immediate callback for urgent production requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Contact Information & Map Placeholder */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[#171c1e] p-6 border border-white/10 space-y-5 text-xs">
                <div className="flex items-start gap-3">
                  <div className="size-8 border border-white/15 text-[#e7a45c] flex items-center justify-center shrink-0 bg-[#20272b]">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-[#f5f0e7]">Main Manufacturing Works</h3>
                    <p className="text-[#aeb5b2] mt-1 leading-relaxed">
                      Plot 42-45, Industrial Hub Phase II, Highway Corridor, Pune - 411018, Maharashtra, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="size-8 border border-white/15 text-[#e7a45c] flex items-center justify-center shrink-0 bg-[#20272b]">
                    <Phone size={16} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-[#f5f0e7]">Sales & Technical Desk</h3>
                    <p className="text-[#aeb5b2] mt-0.5">+91 20 4821 7400 (Direct Board)</p>
                    <p className="text-[#aeb5b2]">+91 98250 44120 / +91 94260 88214 (Sales)</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="size-8 border border-white/15 text-[#e7a45c] flex items-center justify-center shrink-0 bg-[#20272b]">
                    <Mail size={16} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-[#f5f0e7]">Email Inquiries</h3>
                    <p className="text-[#aeb5b2] mt-0.5">hello@industria.example</p>
                    <p className="text-[#aeb5b2]">sales@industria.example</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="size-8 border border-white/15 text-[#e7a45c] flex items-center justify-center shrink-0 bg-[#20272b]">
                    <Clock size={16} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-[#f5f0e7]">Working Hours</h3>
                    <p className="text-[#aeb5b2] mt-0.5">Monday – Saturday: 9:00 AM – 6:30 PM IST</p>
                    <p className="text-[#7e8989] text-[11px]">Sunday: Emergency Breakdown Spares Dispatch Only</p>
                  </div>
                </div>
              </div>

              {/* Map Coordinates Graphic */}
              <div className="bg-[#121618] text-[#aeb5b2] p-6 border border-white/10 text-center space-y-3">
                <MapPin size={24} className="text-[#e7a45c] mx-auto animate-bounce" />
                <h4 className="font-display text-xl text-[#f5f0e7]">Strategically Located in Industrial Hub</h4>
                <p className="text-[#899492] text-xs leading-relaxed max-w-sm mx-auto">
                  Within easy freight access of major seaports, air cargo terminals, and Tier-1 automotive and defense clusters.
                </p>
                <div className="pt-2">
                  <span className="text-[11px] font-mono bg-[#20272b] text-[#e7a45c] px-3 py-1 border border-[#e7a45c]/30">
                    GPS: 18.5204° N, 73.8567° E / Pune
                  </span>
                </div>
              </div>
            </div>

            {/* Direct Inquiry & Callback Form */}
            <div className="lg:col-span-7 bg-[#171c1e] border border-white/10 p-6 sm:p-8 shadow-2xl">
              {submittedRef ? (
                <div className="text-center py-10 space-y-4">
                  <div className="size-16 border border-[#e7a45c] text-[#e7a45c] flex items-center justify-center mx-auto bg-[#20272b]">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-2xl font-display text-[#f5f0e7]">Inquiry Received</h3>
                  <p className="text-xs text-[#aeb5b2]">
                    Reference ID: <strong className="text-[#e7a45c] font-mono">{submittedRef}</strong>
                  </p>
                  <p className="text-xs text-[#899492] max-w-md mx-auto">
                    Your inquiry has been logged in our system and assigned to the Technical Sales Desk. We will call you back shortly.
                  </p>
                  <button
                    onClick={() => setSubmittedRef(null)}
                    className="px-6 py-3 bg-[#e7a45c] hover:bg-[#f4b875] text-[#20272b] text-xs font-mono font-bold transition-all"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div className="mb-4 pb-3 border-b border-white/10 flex items-center justify-between">
                    <div>
                      <p className="eyebrow text-[#e7a45c]">Direct Message / Callback</p>
                      <p className="text-xs text-[#899492] mt-1">Submit your requirements to our application engineers</p>
                    </div>
                    <Send size={18} className="text-[#e7a45c]" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[#d2d1c9] font-semibold mb-1 font-mono">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-[#20272b] border border-white/15 p-2.5 text-[#f5f0e7] focus:outline-none focus:border-[#e7a45c]"
                      />
                    </div>
                    <div>
                      <label className="block text-[#d2d1c9] font-semibold mb-1 font-mono">Company Name *</label>
                      <input
                        type="text"
                        required
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="w-full bg-[#20272b] border border-white/15 p-2.5 text-[#f5f0e7] focus:outline-none focus:border-[#e7a45c]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[#d2d1c9] font-semibold mb-1 font-mono">Phone / WhatsApp *</label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-[#20272b] border border-white/15 p-2.5 text-[#f5f0e7] focus:outline-none focus:border-[#e7a45c] font-mono"
                      />
                    </div>
                    <div>
                      <label className="block text-[#d2d1c9] font-semibold mb-1 font-mono">Work Email *</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-[#20272b] border border-white/15 p-2.5 text-[#f5f0e7] focus:outline-none focus:border-[#e7a45c]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#d2d1c9] font-semibold mb-1 font-mono">Subject / Component Interest *</label>
                    <input
                      type="text"
                      required
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full bg-[#20272b] border border-white/15 p-2.5 text-[#f5f0e7] focus:outline-none focus:border-[#e7a45c]"
                    />
                  </div>

                  <div>
                    <label className="block text-[#d2d1c9] font-semibold mb-1 font-mono">Message / Technical Requirement *</label>
                    <textarea
                      rows={4}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-[#20272b] border border-white/15 p-2.5 text-[#f5f0e7] focus:outline-none focus:border-[#e7a45c]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#e46e2e] hover:bg-[#f38b43] text-[#fff5e9] text-xs font-bold uppercase tracking-[.12em] font-mono transition-all"
                  >
                    Submit Message to Plant Desk →
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
