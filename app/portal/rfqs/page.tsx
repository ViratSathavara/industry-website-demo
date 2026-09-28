"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PortalLayout } from "@/components/portal/PortalLayout";
import { useDemoState } from "@/lib/services/demo-state-context";
import { StatusBadge } from "@/components/ui/StatusBadge";
import {
  FileText,
  Search,
  Filter,
  Plus,
  ArrowRight,
  Eye,
  X,
  Clock,
  ShieldCheck
} from "lucide-react";
import { RFQ } from "@/lib/types";

export default function PortalRfqsPage() {
  const { rfqs } = useDemoState();
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedRfq, setSelectedRfq] = useState<RFQ | null>(null);

  const filteredRfqs = rfqs.filter((r) => {
    const matchesStatus = statusFilter === "all" || r.status === statusFilter;
    const matchesSearch =
      r.rfqNumber.toLowerCase().includes(search.toLowerCase()) ||
      r.items[0]?.productName.toLowerCase().includes(search.toLowerCase()) ||
      r.companyName.toLowerCase().includes(search.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  return (
    <PortalLayout>
      <div className="space-y-6 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-extrabold text-stone-900 tracking-tight">
              My Requests for Quotation (RFQs)
            </h2>
            <p className="text-xs text-stone-500">
              Track the status of your technical inquiries submitted to the factory sales team
            </p>
          </div>

          <Link
            href="/request-quote"
            className="px-4 py-2 bg-[#d4560a] hover:bg-[#b84605] text-white text-xs font-bold rounded-lg shadow-xs flex items-center gap-1.5 shrink-0"
          >
            <Plus className="w-4 h-4" />
            <span>Create New RFQ</span>
          </Link>
        </div>

        {/* Filter Controls */}
        <div className="bg-white p-4 rounded-xl border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-xs">
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-2.5" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search RFQ number, product name..."
              className="w-full bg-stone-50 pl-9 pr-4 py-1.5 border border-stone-300 rounded-lg text-xs text-stone-900 focus:outline-none focus:border-[#d4560a]"
            />
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <span className="text-xs text-stone-500 font-medium shrink-0">Status:</span>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="bg-stone-50 border border-stone-300 rounded-lg px-2.5 py-1.5 text-xs text-stone-700 focus:outline-none"
            >
              <option value="all">All Statuses ({rfqs.length})</option>
              <option value="Submitted">Submitted</option>
              <option value="Reviewing">Reviewing</option>
              <option value="Quoted">Quoted</option>
              <option value="Won">Won</option>
            </select>
          </div>
        </div>

        {/* RFQs Table */}
        <div className="bg-white rounded-2xl border border-stone-200 overflow-x-auto shadow-xs">
          <table className="w-full text-xs text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="border-b border-stone-200 bg-stone-50 text-stone-500 uppercase text-[10px] tracking-wider font-bold">
                <th className="p-4">RFQ Ref</th>
                <th className="p-4">Date Logged</th>
                <th className="p-4">Target Product</th>
                <th className="p-4">Quantity</th>
                <th className="p-4">Assigned Engineer</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              {filteredRfqs.map((rfq) => (
                <tr key={rfq.id} className="hover:bg-stone-50/70 transition-colors">
                  <td className="p-4 font-mono font-bold text-stone-900">{rfq.rfqNumber}</td>
                  <td className="p-4 text-stone-500">{rfq.createdAt}</td>
                  <td className="p-4">
                    <strong className="text-stone-900 block">{rfq.items[0]?.productName}</strong>
                    <span className="text-[11px] text-stone-500 line-clamp-1">
                      {rfq.items[0]?.customSpecs}
                    </span>
                  </td>
                  <td className="p-4 font-semibold text-stone-800">
                    {rfq.items[0]?.quantity} {rfq.items[0]?.unit}
                  </td>
                  <td className="p-4 text-stone-600">{rfq.assignedTo}</td>
                  <td className="p-4">
                    <StatusBadge status={rfq.status} />
                  </td>
                  <td className="p-4 text-right">
                    <button
                      onClick={() => setSelectedRfq(rfq)}
                      className="px-3 py-1.5 bg-stone-100 hover:bg-stone-200 text-stone-700 font-semibold rounded-lg text-xs flex items-center gap-1 ml-auto"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Details</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredRfqs.length === 0 && (
            <div className="text-center py-12 text-stone-400 text-xs">
              No RFQs found matching your filters.
            </div>
          )}
        </div>

        {/* RFQ Detail Modal */}
        {selectedRfq && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 border border-stone-200 text-xs space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-stone-100">
                <div>
                  <span className="text-[10px] text-stone-400 uppercase font-bold">RFQ Specifications</span>
                  <h3 className="font-bold text-base text-stone-900">{selectedRfq.rfqNumber}</h3>
                </div>
                <button
                  onClick={() => setSelectedRfq(null)}
                  className="p-1 rounded-md text-stone-400 hover:text-stone-600"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-2 bg-stone-50 p-4 rounded-xl border border-stone-200">
                <div className="flex justify-between">
                  <span className="text-stone-500">Status:</span>
                  <StatusBadge status={selectedRfq.status} />
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Assigned Engineer:</span>
                  <strong className="text-stone-900">{selectedRfq.assignedTo}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Target Delivery Date:</span>
                  <strong className="text-stone-900">{selectedRfq.targetDate}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Delivery Location:</span>
                  <strong className="text-stone-900">{selectedRfq.deliveryLocation}</strong>
                </div>
              </div>

              <div className="space-y-1">
                <span className="font-bold text-stone-800">Requested Items & Scope:</span>
                <div className="p-3 rounded-lg border border-stone-200 space-y-1">
                  <div className="font-semibold text-stone-900">{selectedRfq.items[0]?.productName}</div>
                  <div className="text-stone-500">Quantity: {selectedRfq.items[0]?.quantity} {selectedRfq.items[0]?.unit}</div>
                  <div className="text-[11px] text-stone-600">{selectedRfq.items[0]?.customSpecs}</div>
                </div>
              </div>

              {selectedRfq.notes && (
                <div>
                  <span className="font-bold text-stone-800 block mb-0.5">Special Instructions:</span>
                  <p className="text-stone-600 p-2.5 bg-stone-50 rounded-lg border border-stone-100">
                    {selectedRfq.notes}
                  </p>
                </div>
              )}

              <div className="pt-2 flex justify-end gap-2">
                <Link
                  href="/portal/quotes"
                  className="px-4 py-2 bg-[#d4560a] hover:bg-[#b84605] text-white font-bold rounded-lg"
                >
                  Check Quotation →
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </PortalLayout>
  );
}
