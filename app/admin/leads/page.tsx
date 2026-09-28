"use client";

import React, { useState } from "react";
import Link from "next/link";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { useDemoState } from "@/lib/services/demo-state-context";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Lead } from "@/lib/types";
import {
  Users,
  Search,
  Filter,
  Phone,
  Mail,
  Plus,
  ArrowRight,
  Eye,
  MessageSquare,
  FileCheck,
  Calendar,
  X,
  Clock,
  Sparkles
} from "lucide-react";
import { formatCurrency } from "@/lib/utils";

export default function AdminLeadsPage() {
  const { leads } = useDemoState();
  const [search, setSearch] = useState("");
  const [selectedStage, setSelectedStage] = useState("all");
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  const stages: Lead["stage"][] = [
    "New",
    "Contacted",
    "Qualified",
    "Requirement Collected",
    "Quote in Progress",
    "Quote Sent",
    "Negotiation",
    "Won"
  ];

  const filteredLeads = leads.filter((l) => {
    const matchesStage = selectedStage === "all" || l.stage === selectedStage;
    const matchesSearch =
      l.name.toLowerCase().includes(search.toLowerCase()) ||
      l.company.toLowerCase().includes(search.toLowerCase()) ||
      l.requirement.toLowerCase().includes(search.toLowerCase());
    return matchesStage && matchesSearch;
  });

  const triggerMockAction = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 3500);
  };

  return (
    <AdminLayout>
      <div className="space-y-6 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-extrabold text-stone-900 tracking-tight">
              Lead Management & Deal Pipeline
            </h2>
            <p className="text-xs text-stone-500">
              Track inbound buyer requirements across stages from new inquiry to won manufacturing contracts
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => triggerMockAction("New lead manually added to CRM.")}
              className="px-4 py-2 bg-[#d4560a] hover:bg-[#b84605] text-white text-xs font-bold rounded-lg shadow-xs flex items-center gap-1.5"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Lead</span>
            </button>
          </div>
        </div>

        {toastMsg && (
          <div className="p-3 bg-emerald-50 border border-emerald-300 text-emerald-800 rounded-xl text-xs font-semibold animate-in fade-in duration-150">
            ✓ {toastMsg}
          </div>
        )}

        {/* Search & Stage Filter Bar */}
        <div className="bg-white p-4 rounded-xl border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-xs">
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-2.5" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search leads by buyer name, company, or requirement..."
              className="w-full bg-stone-50 pl-9 pr-4 py-1.5 border border-stone-300 rounded-lg text-xs text-stone-900 focus:outline-none focus:border-[#d4560a]"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto">
            <button
              onClick={() => setSelectedStage("all")}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                selectedStage === "all"
                  ? "bg-stone-900 text-white"
                  : "bg-stone-100 text-stone-600 hover:bg-stone-200"
              }`}
            >
              All Stages ({leads.length})
            </button>
            {stages.slice(0, 5).map((st) => (
              <button
                key={st}
                onClick={() => setSelectedStage(st)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                  selectedStage === st
                    ? "bg-[#d4560a] text-white"
                    : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                }`}
              >
                {st}
              </button>
            ))}
          </div>
        </div>

        {/* Leads Table */}
        <div className="bg-white rounded-2xl border border-stone-200 overflow-x-auto shadow-xs">
          <table className="w-full text-xs text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="border-b border-stone-200 bg-stone-50 text-stone-500 uppercase text-[10px] tracking-wider font-bold">
                <th className="p-4">Customer & Company</th>
                <th className="p-4">Sector Requirement</th>
                <th className="p-4">Source</th>
                <th className="p-4">Est. Deal Value</th>
                <th className="p-4">Account Owner</th>
                <th className="p-4">Stage</th>
                <th className="p-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              {filteredLeads.map((ld) => (
                <tr key={ld.id} className="hover:bg-stone-50/70 transition-colors">
                  <td className="p-4">
                    <strong className="text-stone-900 block">{ld.name}</strong>
                    <span className="text-[11px] text-stone-500">{ld.company}</span>
                    <span className="text-[10px] text-stone-400 block">{ld.location}</span>
                  </td>
                  <td className="p-4 max-w-xs">
                    <span className="font-semibold text-stone-800 line-clamp-1">
                      {ld.requirement}
                    </span>
                    <span className="text-[10px] text-stone-400 font-mono">
                      Priority: {ld.priority}
                    </span>
                  </td>
                  <td className="p-4">
                    <span className="px-2 py-0.5 rounded bg-stone-100 text-stone-700 text-[10px] font-bold">
                      {ld.source}
                    </span>
                  </td>
                  <td className="p-4 font-bold text-stone-900">
                    {formatCurrency(ld.estimatedValue)}
                  </td>
                  <td className="p-4 text-stone-600">{ld.owner}</td>
                  <td className="p-4">
                    <StatusBadge status={ld.stage} />
                  </td>
                  <td className="p-4 text-right">
                    <button
                      onClick={() => setSelectedLead(ld)}
                      className="px-3 py-1.5 bg-stone-100 hover:bg-stone-200 text-stone-700 font-semibold rounded-lg text-xs ml-auto"
                    >
                      Manage
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Lead Detail & Actions Modal (Section 19) */}
        {selectedLead && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 border border-stone-200 text-xs space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-stone-100">
                <div>
                  <span className="text-[10px] font-bold text-stone-400 uppercase">
                    CRM Lead Details
                  </span>
                  <h3 className="font-bold text-base text-stone-900">{selectedLead.name}</h3>
                  <span className="text-stone-500 text-[11px]">{selectedLead.company}</span>
                </div>
                <button
                  onClick={() => setSelectedLead(null)}
                  className="p-1 rounded text-stone-400 hover:text-stone-700"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200 space-y-2">
                <div className="flex justify-between">
                  <span className="text-stone-500">Pipeline Stage:</span>
                  <StatusBadge status={selectedLead.stage} />
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Estimated Deal Value:</span>
                  <strong className="text-stone-900">{formatCurrency(selectedLead.estimatedValue)}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Inbound Lead Channel:</span>
                  <strong className="text-stone-900">{selectedLead.source}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Contact Number:</span>
                  <span className="font-mono text-stone-900">{selectedLead.phone}</span>
                </div>
              </div>

              <div className="space-y-1">
                <span className="font-bold text-stone-700">Requirement Scope:</span>
                <p className="p-2.5 rounded-lg border border-stone-200 bg-white text-stone-800">
                  {selectedLead.requirement}
                </p>
              </div>

              {/* CRM Actions */}
              <div className="space-y-2 pt-2 border-t border-stone-100">
                <span className="font-bold text-stone-700 block text-[11px] uppercase">
                  Quick Actions:
                </span>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => triggerMockAction(`Mock WhatsApp message sent to ${selectedLead.name}`)}
                    className="p-2 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 font-semibold flex items-center justify-center gap-1.5"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Send WhatsApp</span>
                  </button>
                  <Link
                    href={`/admin/quotes?customer=${encodeURIComponent(selectedLead.company)}`}
                    className="p-2 rounded-lg bg-[#d4560a] text-white font-semibold flex items-center justify-center gap-1.5"
                  >
                    <FileCheck className="w-3.5 h-3.5" />
                    <span>Draft Quotation</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}
