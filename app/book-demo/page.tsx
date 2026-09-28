"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { useDemoState } from "@/lib/services/demo-state-context";
import {
  Calendar,
  Clock,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  MapPin,
  Cpu
} from "lucide-react";
import confetti from "canvas-confetti";
import { Appointment } from "@/lib/types";

export default function BookDemoPage() {
  const { bookAppointment } = useDemoState();

  const [bookingType, setBookingType] = useState<Appointment["type"]>("Factory Visit");
  const [selectedDate, setSelectedDate] = useState<string>("2026-10-06");
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>("10:30 AM - 12:30 PM");
  const [customerName, setCustomerName] = useState<string>("Anita Rao");
  const [company, setCompany] = useState<string>("Rao Precision Works");
  const [phone, setPhone] = useState<string>("+91 98250 44120");
  const [email, setEmail] = useState<string>("anita@factory.in");
  const [notes, setNotes] = useState<string>(
    "Would like to inspect DMG Mori 5-axis machining center and Zeiss 3D CMM inspection setup."
  );

  const [confirmedApt, setConfirmedApt] = useState<Appointment | null>(null);

  const bookingTypes: { type: Appointment["type"]; desc: string }[] = [
    {
      type: "Factory Visit",
      desc: "Escorted tour of our 140+ CNC center park, cleanrooms, and metrology lab"
    },
    {
      type: "Machine Demo",
      desc: "Live multi-axis cutting demonstration on your alloy raw materials"
    },
    {
      type: "Technical Consultation",
      desc: "Detailed engineering discussion with chief manufacturing architect"
    },
    {
      type: "Site Visit",
      desc: "Application engineers visit your facility for physical envelope assessment"
    },
    {
      type: "Service Visit",
      desc: "Maintenance alignment and batch repeatability audits"
    }
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
      location: "Sanand GIDC Plant, Gujarat, India",
      assignedRep: "Vikram Mehta (Plant Lead)",
      notes
    });

    try {
      confetti({ particleCount: 50, spread: 60 });
    } catch {}

    setConfirmedApt(created);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#20272b] text-[#f5f0e7]">
      <Navbar />

      <main className="flex-1 pt-28 pb-20 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-5 md:px-8 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-[#aeb5b2] font-mono mb-8">
            <Link href="/" className="hover:text-[#e7a45c] transition-colors">
              Home
            </Link>
            <ChevronRight size={13} className="text-[#7e8989]" />
            <span className="text-[#f5f0e7] font-semibold">Plant Audit & Machine Demo</span>
          </div>

          <div className="text-center max-w-xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#e7a45c]/30 text-[#e7a45c] text-xs font-mono mb-4 bg-white/5">
              <Cpu size={14} />
              <span className="uppercase tracking-[.14em]">Escorted Plant Evaluation</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-display tracking-tight text-[#f5f0e7]">
              Schedule Factory Audit or <em className="text-[#e7a45c]">Machine Demo.</em>
            </h1>
            <p className="text-xs sm:text-sm text-[#aeb5b2] mt-3">
              Inspect our DMG Mori 5-axis centers, witness live Zeiss 3D CMM inspection, or review metallurgical test procedures in person.
            </p>
          </div>

          <div className="bg-[#171c1e] border border-white/10 p-6 sm:p-8 shadow-2xl">
            {confirmedApt ? (
              <div className="text-center py-10 space-y-5 animate-in zoom-in-95 duration-200">
                <div className="size-16 border border-[#e7a45c] text-[#e7a45c] flex items-center justify-center mx-auto bg-[#20272b]">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-2xl font-display text-[#f5f0e7]">
                  Appointment Booking Confirmed
                </h3>
                <p className="text-xs text-[#aeb5b2] font-mono">
                  Booking Reference: <strong className="text-[#e7a45c]">{confirmedApt.bookingNumber}</strong>
                </p>

                <div className="max-w-md mx-auto bg-[#20272b] p-5 border border-white/10 text-left text-xs font-mono text-[#d2d1c9] space-y-2">
                  <div className="flex justify-between">
                    <span className="text-[#7e8989]">Visit Type:</span>
                    <strong className="text-[#f5f0e7]">{confirmedApt.type}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#7e8989]">Date & Time:</span>
                    <strong className="text-[#e7a45c]">
                      {confirmedApt.date} ({confirmedApt.timeSlot})
                    </strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#7e8989]">Attendee:</span>
                    <span className="text-[#f5f0e7]">
                      {confirmedApt.customerName} ({confirmedApt.company})
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#7e8989]">Plant Location:</span>
                    <span className="text-[#f5f0e7] truncate max-w-[200px]">
                      {confirmedApt.location}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-[#899492] max-w-sm mx-auto">
                  A plant security pass and visitor orientation checklist has been dispatched to your email address.
                </p>

                <div className="pt-2">
                  <button
                    onClick={() => setConfirmedApt(null)}
                    className="px-6 py-3 bg-[#e7a45c] hover:bg-[#f4b875] text-[#20272b] text-xs font-mono font-bold transition-all"
                  >
                    Schedule Another Appointment
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 text-xs">
                {/* Booking Types */}
                <div>
                  <label className="block text-[#d2d1c9] font-semibold mb-2.5 font-mono">
                    Select Appointment Type *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {bookingTypes.map((bt) => {
                      const isSelected = bookingType === bt.type;
                      return (
                        <div
                          key={bt.type}
                          onClick={() => setBookingType(bt.type)}
                          className={`p-3.5 border cursor-pointer transition-all ${
                            isSelected
                              ? "border-[#e7a45c] bg-[#293337]"
                              : "border-white/10 hover:border-white/20 bg-[#20272b]"
                          }`}
                        >
                          <strong className="text-xs text-[#f5f0e7] block font-mono">
                            {bt.type}
                          </strong>
                          <p className="text-[11px] text-[#899492] mt-1 leading-relaxed">
                            {bt.desc}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Date & Time */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#d2d1c9] font-semibold mb-1.5 font-mono">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      required
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full bg-[#20272b] border border-white/15 p-2.5 text-[#f5f0e7] focus:outline-none focus:border-[#e7a45c] font-mono"
                    />
                  </div>
                  <div>
                    <label className="block text-[#d2d1c9] font-semibold mb-1.5 font-mono">
                      Time Slot *
                    </label>
                    <select
                      value={selectedTimeSlot}
                      onChange={(e) => setSelectedTimeSlot(e.target.value)}
                      className="w-full bg-[#20272b] border border-white/15 p-2.5 text-[#f5f0e7] focus:outline-none focus:border-[#e7a45c] font-mono"
                    >
                      {timeSlots.map((ts) => (
                        <option key={ts} value={ts} className="bg-[#20272b] text-[#f5f0e7]">
                          {ts}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Company Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#d2d1c9] font-semibold mb-1.5 font-mono">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full bg-[#20272b] border border-white/15 p-2.5 text-[#f5f0e7] focus:outline-none focus:border-[#e7a45c]"
                    />
                  </div>
                  <div>
                    <label className="block text-[#d2d1c9] font-semibold mb-1.5 font-mono">
                      Company / Organization *
                    </label>
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
                    <label className="block text-[#d2d1c9] font-semibold mb-1.5 font-mono">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-[#20272b] border border-white/15 p-2.5 text-[#f5f0e7] focus:outline-none focus:border-[#e7a45c] font-mono"
                    />
                  </div>
                  <div>
                    <label className="block text-[#d2d1c9] font-semibold mb-1.5 font-mono">
                      Official Work Email *
                    </label>
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
                  <label className="block text-[#d2d1c9] font-semibold mb-1.5 font-mono">
                    Areas of Interest / Machinery to Inspect
                  </label>
                  <textarea
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full bg-[#20272b] border border-white/15 p-2.5 text-[#f5f0e7] focus:outline-none focus:border-[#e7a45c]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#e46e2e] hover:bg-[#f38b43] text-[#fff5e9] text-xs font-bold uppercase tracking-[.12em] font-mono transition-all flex items-center justify-center gap-2"
                >
                  <Calendar size={15} />
                  <span>Confirm Plant Audit / Demonstration Appointment</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
