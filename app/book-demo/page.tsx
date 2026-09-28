"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { useDemoState } from "@/lib/services/demo-state-context";
import {
  Calendar,
  Clock,
  Building,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  User,
  MapPin,
  Sparkles
} from "lucide-react";
import confetti from "canvas-confetti";
import { Appointment } from "@/lib/types";

export default function BookDemoPage() {
  const { bookAppointment, selectedIndustry } = useDemoState();

  const [bookingType, setBookingType] = useState<Appointment["type"]>("Factory Visit");
  const [selectedDate, setSelectedDate] = useState<string>("2026-10-06");
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>("10:30 AM - 12:30 PM");
  const [customerName, setCustomerName] = useState<string>("Rajeshbhai Patel");
  const [company, setCompany] = useState<string>("Shree Shakti Engineering Works");
  const [phone, setPhone] = useState<string>("+91 98250 44120");
  const [email, setEmail] = useState<string>("rajesh@shreeshaktieng.com");
  const [notes, setNotes] = useState<string>("Would like to inspect CNC 5-axis machining center and automated welding setup.");

  const [confirmedApt, setConfirmedApt] = useState<Appointment | null>(null);

  const bookingTypes: { type: Appointment["type"]; desc: string }[] = [
    { type: "Factory Visit", desc: "Tour our manufacturing plant, CNC shop, and quality testing lab" },
    { type: "Machine Demo", desc: "Live operational demonstration of machinery with your material samples" },
    { type: "Technical Consultation", desc: "Detailed engineering discussion with our chief design architect" },
    { type: "Site Visit", desc: "Our field engineers visit your plant to take physical measurements" },
    { type: "Service Visit", desc: "Maintenance inspection and operational tuning of installed units" }
  ];

  const timeSlots = [
    "09:30 AM - 11:30 AM",
    "11:30 AM - 01:30 PM",
    "02:30 PM - 04:30 PM",
    "04:30 PM - 06:30 PM"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const created = bookAppointment({
      type: bookingType,
      customerName,
      company,
      phone,
      email,
      date: selectedDate,
      timeSlot: selectedTimeSlot,
      assignedRep: "Vikram Mehta (Plant Operations Head)",
      location: "Main Manufacturing Facility, Unit 1, Mehsana Works",
      notes
    });

    try {
      confetti({ particleCount: 50, spread: 70 });
    } catch {}

    setConfirmedApt(created);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fafaf8]">
      <Navbar />

      <main className="flex-1 py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1.5 text-xs text-stone-500 mb-6">
            <Link href="/" className="hover:text-stone-900">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-stone-900 font-semibold">Book Technical Consultation</span>
          </div>

          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#d4560a]">
              Factory Plant Access
            </span>
            <h1 className="text-3xl font-extrabold text-stone-900 tracking-tight mt-1">
              Book Factory Visit or Machine Demo
            </h1>
            <p className="text-xs sm:text-sm text-stone-600 mt-1">
              Experience our CNC machinery, laser beds, and quality testing benches in person.
            </p>
          </div>

          {confirmedApt ? (
            /* Confirmation Card */
            <div className="bg-white rounded-2xl border border-stone-200 p-8 text-center space-y-5 shadow-lg">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div>
                <span className="text-xs uppercase font-bold text-stone-400">Appointment Confirmed</span>
                <h2 className="text-2xl font-bold text-stone-900 mt-1">
                  Booking ID: <strong className="text-[#d4560a] font-mono">{confirmedApt.bookingNumber}</strong>
                </h2>
              </div>

              <div className="bg-stone-50 rounded-xl p-5 border border-stone-200 text-left text-xs space-y-3 max-w-md mx-auto">
                <div className="flex justify-between border-b border-stone-200 pb-2">
                  <span className="text-stone-500">Appointment Type:</span>
                  <strong className="text-stone-900">{confirmedApt.type}</strong>
                </div>
                <div className="flex justify-between border-b border-stone-200 pb-2">
                  <span className="text-stone-500">Date & Slot:</span>
                  <strong className="text-stone-900">{confirmedApt.date} ({confirmedApt.timeSlot})</strong>
                </div>
                <div className="flex justify-between border-b border-stone-200 pb-2">
                  <span className="text-stone-500">Assigned Host:</span>
                  <strong className="text-stone-900">{confirmedApt.assignedRep}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Location:</span>
                  <span className="text-stone-800 text-right font-medium">{confirmedApt.location}</span>
                </div>
              </div>

              <div className="pt-2 flex justify-center gap-3">
                <Link
                  href="/portal/appointments"
                  className="px-5 py-2.5 rounded-lg bg-[#d4560a] text-white text-xs font-bold hover:bg-[#b84605]"
                >
                  View in Customer Portal
                </Link>
                <button
                  onClick={() => setConfirmedApt(null)}
                  className="px-5 py-2.5 rounded-lg border border-stone-300 text-stone-700 text-xs font-bold hover:bg-stone-50"
                >
                  Book Another Visit
                </button>
              </div>
            </div>
          ) : (
            /* Booking Form */
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-6 shadow-sm text-xs">
              {/* 1. Booking Type */}
              <div>
                <label className="block text-stone-800 font-bold mb-2">1. Select Appointment Type *</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {bookingTypes.map((bt) => (
                    <div
                      key={bt.type}
                      onClick={() => setBookingType(bt.type)}
                      className={`p-3 rounded-xl border cursor-pointer transition-all ${
                        bookingType === bt.type
                          ? "border-[#d4560a] bg-orange-50/70 ring-1 ring-[#d4560a]"
                          : "border-stone-200 hover:bg-stone-50"
                      }`}
                    >
                      <strong className="text-stone-900 block font-bold">{bt.type}</strong>
                      <span className="text-[11px] text-stone-500 leading-snug">{bt.desc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 2. Date & Time Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-stone-800 font-bold mb-1.5">2. Choose Preferred Date *</label>
                  <input
                    type="date"
                    required
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-300 rounded-lg p-2.5 text-stone-800 focus:outline-none focus:border-[#d4560a]"
                  />
                </div>
                <div>
                  <label className="block text-stone-800 font-bold mb-1.5">Available Time Slot *</label>
                  <select
                    value={selectedTimeSlot}
                    onChange={(e) => setSelectedTimeSlot(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-300 rounded-lg p-2.5 text-stone-800 focus:outline-none focus:border-[#d4560a]"
                  >
                    {timeSlots.map((ts) => (
                      <option key={ts} value={ts}>{ts}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* 3. Company & Contact Details */}
              <div className="space-y-4 pt-2 border-t border-stone-100">
                <label className="block text-stone-800 font-bold">3. Your Contact Details</label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-stone-600 mb-1 font-medium">Company Name *</label>
                    <input
                      type="text"
                      required
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full bg-stone-50 border border-stone-300 rounded-lg p-2.5 text-stone-800 focus:outline-none focus:border-[#d4560a]"
                    />
                  </div>
                  <div>
                    <label className="block text-stone-600 mb-1 font-medium">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full bg-stone-50 border border-stone-300 rounded-lg p-2.5 text-stone-800 focus:outline-none focus:border-[#d4560a]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-stone-600 mb-1 font-medium">Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-stone-50 border border-stone-300 rounded-lg p-2.5 text-stone-800 focus:outline-none focus:border-[#d4560a]"
                    />
                  </div>
                  <div>
                    <label className="block text-stone-600 mb-1 font-medium">Email *</label>
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
                  <label className="block text-stone-600 mb-1 font-medium">Discussion Topics & Specific Machinery of Interest</label>
                  <textarea
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-300 rounded-lg p-2.5 text-stone-800 focus:outline-none focus:border-[#d4560a]"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#d4560a] hover:bg-[#b84605] text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Confirm Appointment Booking</span>
              </button>
            </form>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
