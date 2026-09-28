"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { useDemoState } from "@/lib/services/demo-state-context";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { RFQ } from "@/lib/types";
import {
  FileText,
  Search,
  Filter,
  Eye,
  Plus,
  ArrowRight,
  Download,
  Building,
  Calendar,
  DollarSign,
  MapPin,
  Clock,
  User,
  X,
  FileCode,
  CheckCircle2,
  Sparkles
} from "lucide-react";
import { formatDate, formatCurrency } from "@/lib/utils";

export default function AdminRFQsPage() {
  const router = useRouter();
  const { rfqs } = useDemoState();
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedRFQ, setSelectedRFQ] = useState<RFQ | null>(null);
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  const [localRFQs, setLocalRFQs] = useState<RFQ[]>(rfqs);

  const statuses: RFQ["status"][] = [
    "Submitted",
    "Reviewing",
    "Need Information",
    "Quoted",
    "Won",
    "Closed"
  ];

  const filteredRFQs = localRFQs.filter((rfq) => {
    const matchesSearch =
      rfq.rfqNumber.toLowerCase().includes(search.toLowerCase()) ||
      rfq.companyName.toLowerCase().includes(search.toLowerCase()) ||
      rfq.contactPerson.toLowerCase().includes(search.toLowerCase()) ||
      rfq.industry.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "all" ||
      rfq.status.toLowerCase() === statusFilter.toLowerCase();

    return matchesSearch && matchesStatus;
  });

  const handleStatusUpdate = (id: string, newStatus: RFQ["status"]) => {
    setLocalRFQs((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status: newStatus } : r))
    );
    if (selectedRFQ && selectedRFQ.id === id) {
      setSelectedRFQ((prev) => (prev ? { ...prev, status: newStatus } : null));
    }
    setToastMsg(`RFQ status updated to "${newStatus}".`);
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
                RFQs & Engineering Specs
              </h1>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-primary/10 text-primary">
                {filteredRFQs.length} Submissions
              </span>
            </div>
            <p className="text-sm text-neutral-500 mt-1">
              Industrial custom component specifications, 2D/3D CAD drawing submissions, and estimation workflows.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/admin/quotes"
              className="px-4 py-2 text-xs font-semibold rounded-lg bg-primary hover:bg-primary-hover text-white transition-colors flex items-center gap-2 shadow-sm"
            >
              <Plus className="w-3.5 h-3.5" />
              Build New Quotation
            </Link>
          </div>
        </div>

        {/* Toast */}
        {toastMsg && (
          <div className="p-3 bg-emerald-50 border border-emerald-300 text-emerald-900 rounded-lg text-sm flex items-center gap-2 animate-fade-in">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>{toastMsg}</span>
          </div>
        )}

        {/* KPI Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-white border border-neutral-200 shadow-sm">
            <div className="text-xs font-medium text-neutral-500 uppercase tracking-wider">Total Active RFQs</div>
            <div className="text-2xl font-bold text-neutral-900 mt-1">{localRFQs.length}</div>
            <div className="text-xs text-neutral-400 mt-0.5">Across 18 industries</div>
          </div>
          <div className="p-4 rounded-xl bg-amber-50/50 border border-amber-200 shadow-sm">
            <div className="text-xs font-semibold text-amber-700 uppercase tracking-wider">Under Engineering Review</div>
            <div className="text-2xl font-bold text-amber-900 mt-1">
              {localRFQs.filter((r) => r.status === "Reviewing" || r.status === "Submitted").length}
            </div>
            <div className="text-xs text-amber-600 mt-0.5">Tolerance & CAD estimation</div>
          </div>
          <div className="p-4 rounded-xl bg-blue-50/50 border border-blue-200 shadow-sm">
            <div className="text-xs font-semibold text-blue-700 uppercase tracking-wider">Quotations Released</div>
            <div className="text-2xl font-bold text-blue-900 mt-1">
              {localRFQs.filter((r) => r.status === "Quoted").length}
            </div>
            <div className="text-xs text-blue-600 mt-0.5">Awaiting customer acceptance</div>
          </div>
          <div className="p-4 rounded-xl bg-emerald-50/50 border border-emerald-200 shadow-sm">
            <div className="text-xs font-semibold text-emerald-700 uppercase tracking-wider">Won / Converted</div>
            <div className="text-2xl font-bold text-emerald-900 mt-1">
              {localRFQs.filter((r) => r.status === "Won").length}
            </div>
            <div className="text-xs text-emerald-600 mt-0.5">Orders in production</div>
          </div>
        </div>

        {/* Search & Status Filters */}
        <div className="bg-white p-4 rounded-xl border border-neutral-200 shadow-sm flex flex-col md:flex-row gap-3 items-center justify-between">
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by RFQ #, company, contact or industry..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-sm rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
            <button
              onClick={() => setStatusFilter("all")}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg capitalize whitespace-nowrap transition-colors ${
                statusFilter === "all"
                  ? "bg-neutral-900 text-white shadow-sm"
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
              }`}
            >
              All Statuses
            </button>
            {statuses.map((st) => (
              <button
                key={st}
                onClick={() => setStatusFilter(st)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-colors ${
                  statusFilter === st
                    ? "bg-neutral-900 text-white shadow-sm"
                    : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                }`}
              >
                {st}
              </button>
            ))}
          </div>
        </div>

        {/* RFQs Table */}
        <div className="bg-white rounded-xl border border-neutral-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-neutral-600">
              <thead className="bg-neutral-50 text-neutral-500 font-medium text-xs border-b border-neutral-200">
                <tr>
                  <th className="py-3 px-4">RFQ Number & Date</th>
                  <th className="py-3 px-4">Company & Buyer</th>
                  <th className="py-3 px-4">Industry & Scope</th>
                  <th className="py-3 px-4">Budget / Est.</th>
                  <th className="py-3 px-4">Assigned To</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100">
                {filteredRFQs.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="text-center py-12 text-neutral-400">
                      <FileText className="w-8 h-8 mx-auto mb-2 text-neutral-300" />
                      No RFQs matching current criteria.
                    </td>
                  </tr>
                ) : (
                  filteredRFQs.map((rfq) => (
                    <tr
                      key={rfq.id}
                      className="hover:bg-neutral-50/80 transition-colors group cursor-pointer"
                      onClick={() => setSelectedRFQ(rfq)}
                    >
                      <td className="py-3.5 px-4 font-mono text-xs">
                        <div className="font-bold text-neutral-900 flex items-center gap-1.5">
                          {rfq.rfqNumber}
                          {rfq.attachedFile && (
                            <span title="CAD Drawing Attached" className="p-0.5 rounded bg-blue-50 text-blue-600">
                              <FileCode className="w-3 h-3" />
                            </span>
                          )}
                        </div>
                        <div className="text-neutral-400 text-[11px] mt-0.5">{formatDate(rfq.createdAt)}</div>
                      </td>

                      <td className="py-3.5 px-4">
                        <div className="font-semibold text-neutral-900">{rfq.companyName}</div>
                        <div className="text-xs text-neutral-500 mt-0.5 flex items-center gap-1">
                          <span>{rfq.contactPerson}</span>
                          <span>•</span>
                          <span>{rfq.phone}</span>
                        </div>
                      </td>

                      <td className="py-3.5 px-4">
                        <span className="px-2 py-0.5 text-xs font-semibold rounded bg-neutral-100 text-neutral-800">
                          {rfq.industry}
                        </span>
                        <div className="text-xs text-neutral-500 mt-1 truncate max-w-xs">
                          {rfq.items.length} item(s): {rfq.items.map((i) => `${i.productName} (${i.quantity} ${i.unit})`).join(", ")}
                        </div>
                      </td>

                      <td className="py-3.5 px-4 font-mono text-xs font-semibold text-neutral-900">
                        {rfq.budget ? formatCurrency(rfq.budget) : "Quote Requested"}
                      </td>

                      <td className="py-3.5 px-4 text-xs text-neutral-600">
                        {rfq.assignedTo}
                      </td>

                      <td className="py-3.5 px-4" onClick={(e) => e.stopPropagation()}>
                        <StatusBadge status={rfq.status} />
                      </td>

                      <td className="py-3.5 px-4 text-right" onClick={(e) => e.stopPropagation()}>
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => setSelectedRFQ(rfq)}
                            title="Inspect RFQ Details"
                            className="p-1.5 text-neutral-500 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => {
                              router.push(`/admin/quotes?rfqId=${rfq.id}&customer=${encodeURIComponent(rfq.companyName)}`);
                            }}
                            title="Generate Quotation"
                            className="px-2.5 py-1 text-xs font-semibold bg-primary/10 text-primary hover:bg-primary hover:text-white rounded-lg transition-colors flex items-center gap-1"
                          >
                            <span>Quote</span>
                            <ArrowRight className="w-3 h-3" />
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

        {/* Selected RFQ Detail Drawer */}
        {selectedRFQ && (
          <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-end animate-fade-in">
            <div className="bg-white w-full max-w-2xl h-full shadow-2xl flex flex-col justify-between animate-slide-left overflow-y-auto">
              <div>
                {/* Header */}
                <div className="p-6 border-b border-neutral-200 flex items-center justify-between bg-neutral-50">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-sm font-bold text-primary">
                        {selectedRFQ.rfqNumber}
                      </span>
                      <StatusBadge status={selectedRFQ.status} />
                    </div>
                    <h2 className="text-xl font-bold text-neutral-900 mt-1 font-heading">
                      {selectedRFQ.companyName}
                    </h2>
                  </div>
                  <button
                    onClick={() => setSelectedRFQ(null)}
                    className="p-2 text-neutral-400 hover:text-neutral-700 hover:bg-neutral-200 rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Content */}
                <div className="p-6 space-y-6">
                  {/* Status Picker Strip */}
                  <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200 flex items-center justify-between">
                    <div>
                      <div className="text-xs text-neutral-500">Update Engineering Status</div>
                      <select
                        value={selectedRFQ.status}
                        onChange={(e) =>
                          handleStatusUpdate(selectedRFQ.id, e.target.value as RFQ["status"])
                        }
                        className="mt-1 text-sm font-bold text-neutral-900 bg-white border border-neutral-300 rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-2 focus:ring-primary/20"
                      >
                        <option value="Submitted">Submitted</option>
                        <option value="Reviewing">Reviewing (Engineering)</option>
                        <option value="Need Information">Need Information</option>
                        <option value="Quoted">Quoted (Sent to Buyer)</option>
                        <option value="Won">Won (Order Approved)</option>
                        <option value="Closed">Closed</option>
                      </select>
                    </div>

                    <div className="text-right">
                      <div className="text-xs text-neutral-500">Target Delivery Date</div>
                      <div className="text-sm font-semibold text-neutral-900 mt-1 flex items-center gap-1 justify-end">
                        <Calendar className="w-4 h-4 text-neutral-400" />
                        {selectedRFQ.targetDate ? formatDate(selectedRFQ.targetDate) : "Standard Lead Time"}
                      </div>
                    </div>
                  </div>

                  {/* Requested Items Table */}
                  <div className="space-y-2">
                    <h3 className="text-xs font-bold text-neutral-500 uppercase tracking-wider">
                      Bill of Custom Components
                    </h3>
                    <div className="border border-neutral-200 rounded-xl overflow-hidden bg-white">
                      <table className="w-full text-left text-xs">
                        <thead className="bg-neutral-50 text-neutral-500 font-semibold border-b border-neutral-200">
                          <tr>
                            <th className="py-2.5 px-3">Item Name</th>
                            <th className="py-2.5 px-3">Quantity</th>
                            <th className="py-2.5 px-3">Custom Specs / Grade</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-100">
                          {selectedRFQ.items.map((item, idx) => (
                            <tr key={idx} className="hover:bg-neutral-50">
                              <td className="py-2.5 px-3 font-semibold text-neutral-900">
                                {item.productName}
                              </td>
                              <td className="py-2.5 px-3 font-mono">
                                {item.quantity} {item.unit}
                              </td>
                              <td className="py-2.5 px-3 text-neutral-600">
                                {item.customSpecs || "Standard industrial tolerance DIN ISO 2768-m"}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Engineering & Delivery Details */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl border border-neutral-200 bg-white space-y-2">
                      <div className="text-xs text-neutral-400 uppercase tracking-wider font-semibold">
                        Delivery Logistics
                      </div>
                      <div className="text-sm font-medium text-neutral-900 flex items-start gap-1.5">
                        <MapPin className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
                        <span>{selectedRFQ.deliveryLocation || "Ex-Works Factory Warehouse"}</span>
                      </div>
                      <div className="text-xs text-neutral-500 pt-2 border-t border-neutral-100">
                        Estimated Budget: <strong className="text-neutral-900">{selectedRFQ.budget ? formatCurrency(selectedRFQ.budget) : "Open for engineering quote"}</strong>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl border border-neutral-200 bg-white space-y-2">
                      <div className="text-xs text-neutral-400 uppercase tracking-wider font-semibold">
                        Drawing & CAD Attachment
                      </div>
                      {selectedRFQ.attachedFile ? (
                        <div className="p-2.5 bg-neutral-50 rounded-lg border border-neutral-200 flex items-center justify-between">
                          <div className="flex items-center gap-2 truncate">
                            <FileCode className="w-4 h-4 text-primary shrink-0" />
                            <span className="text-xs font-mono font-medium text-neutral-800 truncate">
                              {selectedRFQ.attachedFile}
                            </span>
                          </div>
                          <button
                            onClick={() => {
                              setToastMsg(`Simulated download of CAD drawing: ${selectedRFQ.attachedFile}`);
                              setTimeout(() => setToastMsg(null), 3000);
                            }}
                            className="p-1 hover:bg-neutral-200 rounded text-neutral-600 transition-colors"
                          >
                            <Download className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ) : (
                        <p className="text-xs text-neutral-400 italic">No CAD drawing file attached.</p>
                      )}
                    </div>
                  </div>

                  {/* Notes / Special Instructions */}
                  {selectedRFQ.notes && (
                    <div className="p-4 rounded-xl border border-neutral-200 bg-neutral-50/50 space-y-1">
                      <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                        Customer Engineering Notes
                      </div>
                      <p className="text-xs text-neutral-700 whitespace-pre-wrap">
                        {selectedRFQ.notes}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Drawer Footer Actions */}
              <div className="p-6 border-t border-neutral-200 bg-neutral-50 flex items-center gap-3">
                <button
                  onClick={() => setSelectedRFQ(null)}
                  className="px-4 py-2.5 rounded-lg border border-neutral-300 text-neutral-700 text-sm font-semibold hover:bg-neutral-100 transition-colors"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    router.push(
                      `/admin/quotes?rfqId=${selectedRFQ.id}&customer=${encodeURIComponent(selectedRFQ.companyName)}`
                    );
                  }}
                  className="flex-1 py-2.5 px-4 bg-primary hover:bg-primary-hover text-white rounded-lg text-sm font-semibold flex items-center justify-center gap-2 shadow-sm transition-colors"
                >
                  <Sparkles className="w-4 h-4" />
                  Generate Formal Quotation from RFQ
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}
