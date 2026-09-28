"use client";

import React from "react";
import Link from "next/link";
import { PortalLayout } from "@/components/portal/PortalLayout";
import { useDemoState } from "@/lib/services/demo-state-context";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Calendar, Plus, MapPin, Clock, User, Phone, CheckCircle2 } from "lucide-react";

export default function PortalAppointmentsPage() {
  const { appointments } = useDemoState();

  return (
    <PortalLayout>
      <div className="space-y-6 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-extrabold text-stone-900 tracking-tight">
              Factory Appointments & Demos
            </h2>
            <p className="text-xs text-stone-500">
              Scheduled factory tours, machine demonstrations, and technical design consultations
            </p>
          </div>

          <Link
            href="/book-demo"
            className="px-4 py-2 bg-[#d4560a] hover:bg-[#b84605] text-white text-xs font-bold rounded-lg shadow-xs flex items-center gap-1.5 shrink-0"
          >
            <Plus className="w-4 h-4" />
            <span>Schedule New Visit</span>
          </Link>
        </div>

        {/* Appointments Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {appointments.map((apt) => (
            <div
              key={apt.id}
              className="bg-white rounded-2xl border border-stone-200 p-6 shadow-xs flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-stone-400">
                    {apt.bookingNumber}
                  </span>
                  <StatusBadge status={apt.status} />
                </div>

                <h3 className="font-bold text-base text-stone-900">{apt.type}</h3>

                <div className="space-y-1.5 text-xs text-stone-600 bg-stone-50 p-3.5 rounded-xl border border-stone-200">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#d4560a] shrink-0" />
                    <strong>{apt.date} ({apt.timeSlot})</strong>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-stone-400 shrink-0" />
                    <span>Host Engineer: {apt.assignedRep}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                    <span>{apt.location}</span>
                  </div>
                </div>

                {apt.notes && (
                  <p className="text-[11px] text-stone-500 italic">
                    Agenda: {apt.notes}
                  </p>
                )}
              </div>

              <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                <span className="text-emerald-700 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Confirmed with Plant Security
                </span>
                <Link href="/contact" className="text-[#d4560a] font-semibold hover:underline">
                  Reschedule / Directions →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PortalLayout>
  );
}
