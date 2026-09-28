"use client";

import React, { useState } from "react";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { useDemoState } from "@/lib/services/demo-state-context";
import { Appointment } from "@/lib/types";
import {
  Calendar,
  Search,
  Filter,
  Eye,
  CheckCircle2,
  Clock,
  MapPin,
  User,
  Plus,
  X,
  Sparkles,
  Phone,
  Mail,
  Building
} from "lucide-react";
import { formatDate } from "@/lib/utils";

export default function AdminAppointmentsPage() {
  const { appointments } = useDemoState();

  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedApt, setSelectedApt] = useState<Appointment | null>(null);
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  const [localApts, setLocalApts] = useState<Appointment[]>(appointments);

  const types = [
    "all",
    "Factory Visit",
    "Machine Demo",
    "Technical Consultation",
    "Site Visit"
  ];

  const statuses: Appointment["status"][] = [
    "Requested",
    "Confirmed",
    "Rescheduled",
    "Completed",
    "Cancelled"
  ];

  const filteredApts = localApts.filter((apt) => {
    const matchesSearch =
      apt.customerName.toLowerCase().includes(search.toLowerCase()) ||
      apt.company.toLowerCase().includes(search.toLowerCase()) ||
      apt.bookingNumber.toLowerCase().includes(search.toLowerCase());

    const matchesType =
      typeFilter === "all" || apt.type.toLowerCase() === typeFilter.toLowerCase();

    const matchesStatus =
      statusFilter === "all" ||
      apt.status.toLowerCase() === statusFilter.toLowerCase();

    return matchesSearch && matchesType && matchesStatus;
  });

  const handleUpdateStatus = (id: string, newStatus: Appointment["status"]) => {
    setLocalApts((prev) =>
      prev.map((a) => (a.id === id ? { ...a, status: newStatus } : a))
    );
    if (selectedApt && selectedApt.id === id) {
      setSelectedApt((prev) => (prev ? { ...prev, status: newStatus } : null));
    }
    setToastMsg(`Appointment status set to "${newStatus}"`);
    setTimeout(() => setToastMsg(null), 3000);
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold text-neutral-900 tracking-tight font-heading">
                Plant Visits & Technical Consultations
              </h1>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-primary/10 text-primary">
                {filteredApts.length} Bookings
              </span>
            </div>
            <p className="text-sm text-neutral-500 mt-1">
              On-site factory walkthroughs, virtual CNC spindle demos, and engineering reviews.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                setToastMsg("Calendar synced with Microsoft Outlook / Google Calendar.");
                setTimeout(() => setToastMsg(null), 3000);
              }}
              className="px-4 py-2 text-xs font-semibold rounded-lg border border-neutral-300 hover:bg-neutral-100 text-neutral-700 transition-colors flex items-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              Sync Calendar
            </button>
          </div>
        </div>

        {/* Toast */}
        {toastMsg && (
          <div className="p-3 bg-emerald-50 border border-emerald-300 text-emerald-900 rounded-lg text-sm flex items-center gap-2 animate-fade-in">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>{toastMsg}</span>
          </div>
        )}

        {/* Stats Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-white border border-neutral-200 shadow-sm">
            <div className="text-xs font-medium text-neutral-500 uppercase tracking-wider">Total Bookings</div>
            <div className="text-2xl font-bold text-neutral-900 mt-1">{localApts.length}</div>
            <div className="text-xs text-neutral-400 mt-0.5">Visits and online demos</div>
          </div>
          <div className="p-4 rounded-xl bg-emerald-50/50 border border-emerald-200 shadow-sm">
            <div className="text-xs font-semibold text-emerald-700 uppercase tracking-wider">Confirmed Upcoming</div>
            <div className="text-2xl font-bold text-emerald-900 mt-1">
              {localApts.filter((a) => a.status === "Confirmed").length}
            </div>
            <div className="text-xs text-emerald-600 mt-0.5">Host engineers assigned</div>
          </div>
          <div className="p-4 rounded-xl bg-amber-50/50 border border-amber-200 shadow-sm">
            <div className="text-xs font-semibold text-amber-700 uppercase tracking-wider">Pending Confirmation</div>
            <div className="text-2xl font-bold text-amber-900 mt-1">
              {localApts.filter((a) => a.status === "Requested").length}
            </div>
            <div className="text-xs text-amber-600 mt-0.5">Slot availability check</div>
          </div>
          <div className="p-4 rounded-xl bg-blue-50/50 border border-blue-200 shadow-sm">
            <div className="text-xs font-semibold text-blue-700 uppercase tracking-wider">Completed Tours</div>
            <div className="text-2xl font-bold text-blue-900 mt-1">
              {localApts.filter((a) => a.status === "Completed").length}
            </div>
            <div className="text-xs text-blue-600 mt-0.5">Audits & walkthroughs</div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white p-4 rounded-xl border border-neutral-200 shadow-sm flex flex-col md:flex-row gap-3 items-center justify-between">
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by visitor, company, booking #..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-sm rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto">
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="px-3 py-1.5 text-xs font-semibold rounded-lg border border-neutral-300 bg-white focus:outline-none"
            >
              <option value="all">All Visit Types</option>
              {types.filter((t) => t !== "all").map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-3 py-1.5 text-xs font-semibold rounded-lg border border-neutral-300 bg-white focus:outline-none"
            >
              <option value="all">All Statuses</option>
              {statuses.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Appointments Table */}
        <div className="bg-white rounded-xl border border-neutral-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-neutral-600">
              <thead className="bg-neutral-50 text-neutral-500 font-medium text-xs border-b border-neutral-200">
                <tr>
                  <th className="py-3 px-4">Booking # & Type</th>
                  <th className="py-3 px-4">Visitor & Company</th>
                  <th className="py-3 px-4">Scheduled Date & Slot</th>
                  <th className="py-3 px-4">Plant Location</th>
                  <th className="py-3 px-4">Host Engineer</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100">
                {filteredApts.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="text-center py-12 text-neutral-400">
                      <Calendar className="w-8 h-8 mx-auto mb-2 text-neutral-300" />
                      No bookings matching current criteria.
                    </td>
                  </tr>
                ) : (
                  filteredApts.map((apt) => (
                    <tr
                      key={apt.id}
                      className="hover:bg-neutral-50/80 transition-colors group cursor-pointer"
                      onClick={() => setSelectedApt(apt)}
                    >
                      <td className="py-3.5 px-4 font-mono text-xs">
                        <div className="font-bold text-neutral-900">{apt.bookingNumber}</div>
                        <div className="text-[11px] text-primary font-semibold mt-0.5">{apt.type}</div>
                      </td>

                      <td className="py-3.5 px-4">
                        <div className="font-semibold text-neutral-900">{apt.company}</div>
                        <div className="text-xs text-neutral-500 mt-0.5">{apt.customerName} ({apt.phone})</div>
                      </td>

                      <td className="py-3.5 px-4 text-xs font-semibold text-neutral-900">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-neutral-400" />
                          <span>{formatDate(apt.date)}</span>
                        </div>
                        <div className="text-[11px] text-neutral-500 font-normal mt-0.5 flex items-center gap-1">
                          <Clock className="w-3 h-3 text-neutral-400" />
                          <span>{apt.timeSlot}</span>
                        </div>
                      </td>

                      <td className="py-3.5 px-4 text-xs text-neutral-600">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                          <span className="truncate max-w-xs">{apt.location}</span>
                        </div>
                      </td>

                      <td className="py-3.5 px-4 text-xs text-neutral-700">
                        {apt.assignedRep}
                      </td>

                      <td className="py-3.5 px-4" onClick={(e) => e.stopPropagation()}>
                        <span
                          className={`px-2 py-0.5 rounded text-xs font-semibold ${
                            apt.status === "Confirmed"
                              ? "bg-emerald-100 text-emerald-800"
                              : apt.status === "Requested"
                              ? "bg-amber-100 text-amber-800"
                              : apt.status === "Completed"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-neutral-100 text-neutral-700"
                          }`}
                        >
                          {apt.status}
                        </span>
                      </td>

                      <td className="py-3.5 px-4 text-right" onClick={(e) => e.stopPropagation()}>
                        <div className="flex items-center justify-end gap-1.5">
                          {apt.status === "Requested" && (
                            <button
                              onClick={() => handleUpdateStatus(apt.id, "Confirmed")}
                              className="px-2.5 py-1 text-xs font-semibold bg-emerald-600 text-white rounded hover:bg-emerald-700 shadow-sm"
                            >
                              Confirm
                            </button>
                          )}
                          <button
                            onClick={() => setSelectedApt(apt)}
                            title="Inspect Details"
                            className="p-1.5 text-neutral-500 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Selected Appointment Detail Drawer */}
        {selectedApt && (
          <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-end animate-fade-in">
            <div className="bg-white w-full max-w-md h-full shadow-2xl flex flex-col justify-between animate-slide-left overflow-y-auto">
              <div>
                {/* Header */}
                <div className="p-6 border-b border-neutral-200 flex items-center justify-between bg-neutral-50">
                  <div>
                    <span className="font-mono text-xs font-bold text-primary">
                      {selectedApt.bookingNumber}
                    </span>
                    <h2 className="text-xl font-bold text-neutral-900 mt-1 font-heading">
                      {selectedApt.company}
                    </h2>
                  </div>
                  <button
                    onClick={() => setSelectedApt(null)}
                    className="p-2 text-neutral-400 hover:text-neutral-700 hover:bg-neutral-200 rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Content */}
                <div className="p-6 space-y-5 text-sm">
                  {/* Status Toggle */}
                  <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200">
                    <div className="text-xs text-neutral-500">Visit Status</div>
                    <select
                      value={selectedApt.status}
                      onChange={(e) =>
                        handleUpdateStatus(selectedApt.id, e.target.value as Appointment["status"])
                      }
                      className="mt-1 w-full text-sm font-bold bg-white border border-neutral-300 rounded-lg p-2"
                    >
                      <option value="Requested">Requested</option>
                      <option value="Confirmed">Confirmed</option>
                      <option value="Rescheduled">Rescheduled</option>
                      <option value="Completed">Completed</option>
                      <option value="Cancelled">Cancelled</option>
                    </select>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xs font-bold text-neutral-500 uppercase tracking-wider">
                      Appointment Overview
                    </h3>
                    <div className="p-4 rounded-xl border border-neutral-200 space-y-2 text-xs">
                      <div><strong>Type:</strong> {selectedApt.type}</div>
                      <div><strong>Date:</strong> {formatDate(selectedApt.date)}</div>
                      <div><strong>Time Window:</strong> {selectedApt.timeSlot}</div>
                      <div><strong>Location:</strong> {selectedApt.location}</div>
                      <div><strong>Host Engineer:</strong> {selectedApt.assignedRep}</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xs font-bold text-neutral-500 uppercase tracking-wider">
                      Visitor Contact
                    </h3>
                    <div className="p-4 rounded-xl border border-neutral-200 space-y-2 text-xs">
                      <div><strong>Contact:</strong> {selectedApt.customerName}</div>
                      <div><strong>Company:</strong> {selectedApt.company}</div>
                      <div><strong>Phone:</strong> {selectedApt.phone}</div>
                      <div><strong>Email:</strong> {selectedApt.email}</div>
                    </div>
                  </div>

                  {selectedApt.notes && (
                    <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 text-xs">
                      <div className="font-semibold text-neutral-700 mb-1">Agenda & Notes:</div>
                      <p className="text-neutral-600">{selectedApt.notes}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-neutral-200 bg-neutral-50">
                <button
                  onClick={() => setSelectedApt(null)}
                  className="w-full py-2.5 rounded-lg border border-neutral-300 text-neutral-700 text-sm font-semibold hover:bg-neutral-100"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}
