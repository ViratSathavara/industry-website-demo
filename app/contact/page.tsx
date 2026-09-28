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
  MessageSquare,
  Send,
  CheckCircle2,
  ChevronRight,
  Building
} from "lucide-react";
import confetti from "canvas-confetti";

export default function ContactPage() {
  const { submitEnquiry } = useDemoState();

  const [name, setName] = useState("Rajeshbhai Patel");
  const [company, setCompany] = useState("Shree Shakti Engineering Works");
  const [phone, setPhone] = useState("+91 98250 44120");
  const [email, setEmail] = useState("rajesh@shreeshaktieng.com");
  const [subject, setSubject] = useState("General Technical Inquiry");
  const [message, setMessage] = useState("Interested in scheduling an engineering visit to discuss annual supply contract.");

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
      assignee: "Vikram Mehta (Sales Manager)",
      location: "Gujarat"
    });

    try {
      confetti({ particleCount: 40, spread: 60 });
    } catch {}

    setSubmittedRef(created.enquiryNumber);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fafaf8]">
      <Navbar />

      <main className="flex-1 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1.5 text-xs text-stone-500 mb-6">
            <Link href="/" className="hover:text-stone-900">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-stone-900 font-semibold">Contact & Plant Location</span>
          </div>

          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#d4560a]">
              Factory Sales & Engineering Desk
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight mt-1">
              Connect Directly with Our Plant Team
            </h1>
            <p className="text-sm text-stone-600 mt-2 leading-relaxed">
              Reach our application engineers, schedule a machine demonstration, or request an immediate callback for urgent production requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Contact Information & Map Placeholder */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs space-y-5 text-xs">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-orange-50 text-[#d4560a] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-900 text-sm">Main Manufacturing Works</h3>
                    <p className="text-stone-600 mt-1 leading-relaxed">
                      Plot 42-45, GIDC Industrial Estate Phase II, Highway Corridor, Mehsana - 384002, Gujarat, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-orange-50 text-[#d4560a] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-900 text-sm">Sales & Technical Desk</h3>
                    <p className="text-stone-600 mt-0.5">+91 (079) 4890 2200 (Board)</p>
                    <p className="text-stone-600">+91 98250 44120 / +91 94260 88214 (Sales)</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-orange-50 text-[#d4560a] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-900 text-sm">Email Inquiries</h3>
                    <p className="text-stone-600 mt-0.5">rfq@industria-demo.com</p>
                    <p className="text-stone-600">sales@industria-demo.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-orange-50 text-[#d4560a] flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-900 text-sm">Working Hours</h3>
                    <p className="text-stone-600 mt-0.5">Monday – Saturday: 9:00 AM – 6:30 PM IST</p>
                    <p className="text-stone-400 text-[11px]">Sunday: Emergency Breakdown Spares Dispatch Only</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder Graphic */}
              <div className="bg-stone-900 text-stone-300 p-6 rounded-2xl border border-stone-800 relative overflow-hidden text-center space-y-3">
                <MapPin className="w-8 h-8 text-[#d4560a] mx-auto animate-bounce" />
                <h4 className="font-bold text-white text-sm">Strategically Located in North Gujarat Hub</h4>
                <p className="text-stone-400 text-xs leading-relaxed max-w-sm mx-auto">
                  Within 4 hours of Mundra Port, Hazira Port, Ahmedabad International Airport, and Dholera SIR industrial zone.
                </p>
                <div className="pt-2">
                  <span className="text-[11px] bg-stone-800 text-amber-400 px-3 py-1 rounded-full border border-stone-700">
                    GPS: 23.5880° N, 72.3693° E
                  </span>
                </div>
              </div>
            </div>

            {/* Direct Inquiry & Callback Form */}
            <div className="lg:col-span-7 bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs">
              {submittedRef ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-stone-900">Inquiry Received</h3>
                  <p className="text-xs text-stone-500">
                    Reference ID: <strong className="text-[#d4560a] font-mono">{submittedRef}</strong>
                  </p>
                  <p className="text-xs text-stone-600 max-w-md mx-auto">
                    Your inquiry has been logged in our CRM and assigned to Sales Desk. We will call you back shortly.
                  </p>
                  <button
                    onClick={() => setSubmittedRef(null)}
                    className="px-5 py-2.5 bg-stone-900 text-white rounded-lg text-xs font-semibold hover:bg-stone-800"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <h3 className="font-bold text-base text-stone-900 pb-2 border-b border-stone-100">
                    Send Direct Message / Request Callback
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-stone-700 font-semibold mb-1">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-stone-50 border border-stone-300 rounded-lg p-2.5 text-stone-800 focus:outline-none focus:border-[#d4560a]"
                      />
                    </div>
                    <div>
                      <label className="block text-stone-700 font-semibold mb-1">Company Name *</label>
                      <input
                        type="text"
                        required
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="w-full bg-stone-50 border border-stone-300 rounded-lg p-2.5 text-stone-800 focus:outline-none focus:border-[#d4560a]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-stone-700 font-semibold mb-1">Phone / WhatsApp *</label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-stone-50 border border-stone-300 rounded-lg p-2.5 text-stone-800 focus:outline-none focus:border-[#d4560a]"
                      />
                    </div>
                    <div>
                      <label className="block text-stone-700 font-semibold mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-stone-50 border border-stone-300 rounded-lg p-2.5 text-stone-800 focus:outline-none focus:border-[#d4560a]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-stone-700 font-semibold mb-1">Inquiry Subject *</label>
                    <input
                      type="text"
                      required
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full bg-stone-50 border border-stone-300 rounded-lg p-2.5 text-stone-800 focus:outline-none focus:border-[#d4560a]"
                    />
                  </div>

                  <div>
                    <label className="block text-stone-700 font-semibold mb-1">Message / Project Requirement *</label>
                    <textarea
                      rows={4}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-stone-50 border border-stone-300 rounded-lg p-2.5 text-stone-800 focus:outline-none focus:border-[#d4560a]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-[#d4560a] hover:bg-[#b84605] text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Inquiry to Sales Desk</span>
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
