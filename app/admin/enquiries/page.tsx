"use client";

import React, { useState } from "react";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { useDemoState } from "@/lib/services/demo-state-context";
import { Enquiry } from "@/lib/types";
import {
  Inbox,
  Search,
  Filter,
  Phone,
  Mail,
  MessageSquare,
  Clock,
  CheckCircle2,
  AlertCircle,
  Building,
  User,
  MapPin,
  Send,
  Eye,
  ArrowRight,
  Sparkles,
  X,
  Share2
} from "lucide-react";
import { formatDate } from "@/lib/utils";

export default function AdminEnquiriesPage() {
  const { enquiries } = useDemoState();
  const [search, setSearch] = useState("");
  const [sourceFilter, setSourceFilter] = useState("all");
  const [stageFilter, setStageFilter] = useState("all");
  const [selectedEnquiry, setSelectedEnquiry] = useState<Enquiry | null>(null);
  const [replyModalOpen, setReplyModalOpen] = useState(false);
  const [replyMessage, setReplyMessage] = useState("");
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  // Local state copy for inline status updates
  const [localEnquiries, setLocalEnquiries] = useState<Enquiry[]>(enquiries);

  const sources = [
    "all",
    "Website",
    "WhatsApp",
    "RFQ",
    "Product",
    "Callback",
    "Sample",
    "Marketplace"
  ];

  const stages = ["all", "New", "Contacted", "Qualified", "Closed"];

  const filteredEnquiries = localEnquiries.filter((enq) => {
    const matchesSearch =
      enq.customerName.toLowerCase().includes(search.toLowerCase()) ||
      enq.company.toLowerCase().includes(search.toLowerCase()) ||
      enq.productInterest.toLowerCase().includes(search.toLowerCase()) ||
      enq.enquiryNumber.toLowerCase().includes(search.toLowerCase()) ||
      enq.phone.includes(search);

    const matchesSource =
      sourceFilter === "all" ||
      enq.source.toLowerCase() === sourceFilter.toLowerCase();

    const matchesStage =
      stageFilter === "all" ||
      enq.stage.toLowerCase() === stageFilter.toLowerCase();

    return matchesSearch && matchesSource && matchesStage;
  });

  const handleStageChange = (id: string, newStage: Enquiry["stage"]) => {
    setLocalEnquiries((prev) =>
      prev.map((e) => (e.id === id ? { ...e, stage: newStage } : e))
    );
    if (selectedEnquiry && selectedEnquiry.id === id) {
      setSelectedEnquiry((prev) => (prev ? { ...prev, stage: newStage } : null));
    }
    setToastMsg(`Status updated to "${newStage}" for enquiry.`);
    setTimeout(() => setToastMsg(null), 3500);
  };

  const handleSendWhatsAppReply = () => {
    if (!replyMessage.trim() || !selectedEnquiry) return;
    setToastMsg(`WhatsApp dispatch simulation sent to ${selectedEnquiry.phone}`);
    setReplyModalOpen(false);
    setReplyMessage("");
    handleStageChange(selectedEnquiry.id, "Contacted");
  };

  const counts = {
    total: localEnquiries.length,
    new: localEnquiries.filter((e) => e.stage === "New").length,
    qualified: localEnquiries.filter((e) => e.stage === "Qualified").length,
    whatsapp: localEnquiries.filter((e) => e.source === "WhatsApp").length
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold text-neutral-900 tracking-tight font-heading">
                Omnichannel Inquiries Inbox
              </h1>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-primary/10 text-primary">
                {filteredEnquiries.length} Inquiries
              </span>
            </div>
            <p className="text-sm text-neutral-500 mt-1">
              Unified real-time feed from Website RFQs, WhatsApp Business, Catalog callbacks, and IndiaMART leads.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                setToastMsg("Syncing inbound webhooks from WhatsApp Cloud & Form endpoints...");
                setTimeout(() => setToastMsg("Synced: All channels up to date (0s delay)"), 1500);
                setTimeout(() => setToastMsg(null), 4000);
              }}
              className="px-4 py-2 text-xs font-semibold rounded-lg border border-neutral-300 hover:bg-neutral-100 text-neutral-700 transition-colors flex items-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              Sync Channels
            </button>
          </div>
        </div>

        {/* Toast Notification */}
        {toastMsg && (
          <div className="p-3 bg-emerald-50 border border-emerald-300 text-emerald-900 rounded-lg text-sm flex items-center gap-2 animate-fade-in">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>{toastMsg}</span>
          </div>
        )}

        {/* Quick Stat Strips */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-white border border-neutral-200 shadow-sm">
            <div className="text-xs font-medium text-neutral-500 uppercase tracking-wider">Total Enquiries</div>
            <div className="text-2xl font-bold text-neutral-900 mt-1">{counts.total}</div>
            <div className="text-xs text-neutral-400 mt-0.5">Across all digital channels</div>
          </div>
          <div className="p-4 rounded-xl bg-amber-50/50 border border-amber-200 shadow-sm">
            <div className="text-xs font-semibold text-amber-700 uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
              Awaiting First Response
            </div>
            <div className="text-2xl font-bold text-amber-900 mt-1">{counts.new}</div>
            <div className="text-xs text-amber-600 mt-0.5">SLA Target: &lt; 30 mins</div>
          </div>
          <div className="p-4 rounded-xl bg-emerald-50/50 border border-emerald-200 shadow-sm">
            <div className="text-xs font-semibold text-emerald-700 uppercase tracking-wider">Qualified for RFQ</div>
            <div className="text-2xl font-bold text-emerald-900 mt-1">{counts.qualified}</div>
            <div className="text-xs text-emerald-600 mt-0.5">High commercial readiness</div>
          </div>
          <div className="p-4 rounded-xl bg-green-50/50 border border-green-200 shadow-sm">
            <div className="text-xs font-semibold text-green-700 uppercase tracking-wider">WhatsApp Leads</div>
            <div className="text-2xl font-bold text-green-900 mt-1">{counts.whatsapp}</div>
            <div className="text-xs text-green-600 mt-0.5">Instant 2-way verified</div>
          </div>
        </div>

        {/* Controls: Search, Source, Stage */}
        <div className="bg-white p-4 rounded-xl border border-neutral-200 shadow-sm space-y-4">
          <div className="flex flex-col md:flex-row gap-3 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by company, name, phone, item or #ENQ..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-sm rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Stage Selector */}
            <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
              {stages.map((st) => (
                <button
                  key={st}
                  onClick={() => setStageFilter(st)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg capitalize whitespace-nowrap transition-colors ${
                    stageFilter === st
                      ? "bg-neutral-900 text-white shadow-sm"
                      : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                  }`}
                >
                  {st === "all" ? "All Stages" : st}
                </button>
              ))}
            </div>
          </div>

          {/* Source Filter Tabs */}
          <div className="flex items-center gap-2 pt-2 border-t border-neutral-100 overflow-x-auto">
            <span className="text-xs font-medium text-neutral-400 shrink-0 flex items-center gap-1">
              <Filter className="w-3 h-3" /> Channel:
            </span>
            {sources.map((src) => (
              <button
                key={src}
                onClick={() => setSourceFilter(src)}
                className={`px-2.5 py-1 text-xs rounded-md font-medium transition-colors whitespace-nowrap ${
                  sourceFilter === src
                    ? "bg-primary text-white"
                    : "text-neutral-600 hover:bg-neutral-100"
                }`}
              >
                {src === "all" ? "All Channels" : src}
              </button>
            ))}
          </div>
        </div>

        {/* Enquiries Table / List */}
        <div className="bg-white rounded-xl border border-neutral-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-neutral-600">
              <thead className="bg-neutral-50 text-neutral-500 font-medium text-xs border-b border-neutral-200">
                <tr>
                  <th className="py-3 px-4">Enquiry & Date</th>
                  <th className="py-3 px-4">Customer & Company</th>
                  <th className="py-3 px-4">Channel & Priority</th>
                  <th className="py-3 px-4">Product Interest</th>
                  <th className="py-3 px-4">Assignee</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100">
                {filteredEnquiries.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="text-center py-12 text-neutral-400">
                      <Inbox className="w-8 h-8 mx-auto mb-2 text-neutral-300" />
                      No enquiries found matching current filters.
                    </td>
                  </tr>
                ) : (
                  filteredEnquiries.map((enq) => {
                    const isUrgent = enq.urgency === "Urgent";
                    const isHigh = enq.urgency === "High";

                    return (
                      <tr
                        key={enq.id}
                        className="hover:bg-neutral-50/80 transition-colors group cursor-pointer"
                        onClick={() => setSelectedEnquiry(enq)}
                      >
                        <td className="py-3.5 px-4 font-mono text-xs">
                          <div className="font-bold text-neutral-900">{enq.enquiryNumber}</div>
                          <div className="text-neutral-400 text-[11px] mt-0.5">{formatDate(enq.createdAt)}</div>
                        </td>

                        <td className="py-3.5 px-4">
                          <div className="font-semibold text-neutral-900 flex items-center gap-1.5">
                            {enq.company}
                          </div>
                          <div className="text-xs text-neutral-500 flex items-center gap-2 mt-0.5">
                            <span>{enq.customerName}</span>
                            <span>•</span>
                            <span className="font-mono text-[11px]">{enq.phone}</span>
                          </div>
                        </td>

                        <td className="py-3.5 px-4">
                          <div className="flex items-center gap-1.5">
                            <span
                              className={`px-2 py-0.5 text-[11px] font-semibold rounded ${
                                enq.source === "WhatsApp"
                                  ? "bg-green-100 text-green-800"
                                  : enq.source === "RFQ"
                                  ? "bg-blue-100 text-blue-800"
                                  : "bg-neutral-100 text-neutral-700"
                              }`}
                            >
                              {enq.source}
                            </span>
                            {isUrgent && (
                              <span className="px-1.5 py-0.5 text-[10px] font-bold bg-rose-100 text-rose-800 rounded">
                                Urgent
                              </span>
                            )}
                            {isHigh && (
                              <span className="px-1.5 py-0.5 text-[10px] font-bold bg-amber-100 text-amber-800 rounded">
                                High
                              </span>
                            )}
                          </div>
                          <div className="text-[11px] text-neutral-400 mt-0.5 flex items-center gap-1">
                            <MapPin className="w-3 h-3" /> {enq.location}
                          </div>
                        </td>

                        <td className="py-3.5 px-4 max-w-xs">
                          <div className="font-medium text-neutral-900 truncate">
                            {enq.productInterest}
                          </div>
                          <div className="text-xs text-neutral-500 truncate mt-0.5 italic">
                            &quot;{enq.message}&quot;
                          </div>
                        </td>

                        <td className="py-3.5 px-4 text-xs text-neutral-600">
                          <div className="flex items-center gap-1.5">
                            <div className="w-5 h-5 rounded-full bg-neutral-200 text-neutral-700 flex items-center justify-center text-[10px] font-bold">
                              {enq.assignee.charAt(0)}
                            </div>
                            <span className="truncate">{enq.assignee}</span>
                          </div>
                        </td>

                        <td className="py-3.5 px-4" onClick={(e) => e.stopPropagation()}>
                          <select
                            value={enq.stage}
                            onChange={(e) =>
                              handleStageChange(enq.id, e.target.value as Enquiry["stage"])
                            }
                            className={`text-xs font-semibold px-2 py-1 rounded-md border focus:outline-none ${
                              enq.stage === "New"
                                ? "bg-amber-50 text-amber-800 border-amber-200"
                                : enq.stage === "Contacted"
                                ? "bg-blue-50 text-blue-800 border-blue-200"
                                : enq.stage === "Qualified"
                                ? "bg-emerald-50 text-emerald-800 border-emerald-200"
                                : "bg-neutral-100 text-neutral-700 border-neutral-200"
                            }`}
                          >
                            <option value="New">New</option>
                            <option value="Contacted">Contacted</option>
                            <option value="Qualified">Qualified</option>
                            <option value="Closed">Closed</option>
                          </select>
                        </td>

                        <td className="py-3.5 px-4 text-right" onClick={(e) => e.stopPropagation()}>
                          <div className="flex items-center justify-end gap-1.5">
                            <button
                              onClick={() => {
                                setSelectedEnquiry(enq);
                                setReplyModalOpen(true);
                                setReplyMessage(
                                  `Dear ${enq.customerName}, regarding your inquiry about ${enq.productInterest} for ${enq.company}, our engineering lead is reviewing your requirements. Could we discuss technical specs at your convenience?`
                                );
                              }}
                              title="Quick WhatsApp Reply"
                              className="p-1.5 text-neutral-500 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                            >
                              <MessageSquare className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => setSelectedEnquiry(enq)}
                              title="View Full Details"
                              className="p-1.5 text-neutral-500 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors"
                            >
                              <Eye className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Selected Enquiry Drawer / Modal */}
        {selectedEnquiry && (
          <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-end animate-fade-in">
            <div className="bg-white w-full max-w-xl h-full shadow-2xl flex flex-col justify-between animate-slide-left overflow-y-auto">
              <div>
                {/* Drawer Header */}
                <div className="p-6 border-b border-neutral-200 flex items-center justify-between bg-neutral-50">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-sm font-bold text-primary">
                        {selectedEnquiry.enquiryNumber}
                      </span>
                      <span
                        className={`px-2 py-0.5 text-xs font-semibold rounded ${
                          selectedEnquiry.source === "WhatsApp"
                            ? "bg-green-100 text-green-800"
                            : "bg-neutral-200 text-neutral-800"
                        }`}
                      >
                        {selectedEnquiry.source}
                      </span>
                    </div>
                    <h2 className="text-xl font-bold text-neutral-900 mt-1 font-heading">
                      {selectedEnquiry.company}
                    </h2>
                  </div>
                  <button
                    onClick={() => setSelectedEnquiry(null)}
                    className="p-2 text-neutral-400 hover:text-neutral-700 hover:bg-neutral-200 rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Drawer Body */}
                <div className="p-6 space-y-6">
                  {/* Status & Urgency */}
                  <div className="flex items-center justify-between p-3.5 bg-neutral-50 rounded-xl border border-neutral-200">
                    <div>
                      <div className="text-xs text-neutral-500">Pipeline Stage</div>
                      <select
                        value={selectedEnquiry.stage}
                        onChange={(e) =>
                          handleStageChange(
                            selectedEnquiry.id,
                            e.target.value as Enquiry["stage"]
                          )
                        }
                        className="font-bold text-sm bg-transparent border-none focus:outline-none cursor-pointer mt-0.5 text-neutral-900"
                      >
                        <option value="New">New Enquiry</option>
                        <option value="Contacted">Contacted / Follow Up</option>
                        <option value="Qualified">Qualified for RFQ</option>
                        <option value="Closed">Closed / Converted</option>
                      </select>
                    </div>

                    <div className="text-right">
                      <div className="text-xs text-neutral-500">Urgency Level</div>
                      <span
                        className={`inline-block px-2.5 py-0.5 rounded text-xs font-bold mt-0.5 ${
                          selectedEnquiry.urgency === "Urgent"
                            ? "bg-rose-100 text-rose-800"
                            : selectedEnquiry.urgency === "High"
                            ? "bg-amber-100 text-amber-800"
                            : "bg-neutral-100 text-neutral-700"
                        }`}
                      >
                        {selectedEnquiry.urgency}
                      </span>
                    </div>
                  </div>

                  {/* Contact Info Card */}
                  <div className="space-y-3">
                    <h3 className="text-xs font-bold text-neutral-500 uppercase tracking-wider">
                      Contact Information
                    </h3>
                    <div className="p-4 rounded-xl border border-neutral-200 bg-white space-y-2.5">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-neutral-500 flex items-center gap-1.5">
                          <User className="w-4 h-4 text-neutral-400" /> Contact Name:
                        </span>
                        <span className="font-semibold text-neutral-900">
                          {selectedEnquiry.customerName}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-neutral-500 flex items-center gap-1.5">
                          <Phone className="w-4 h-4 text-neutral-400" /> Phone:
                        </span>
                        <span className="font-mono font-medium text-neutral-900">
                          {selectedEnquiry.phone}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-neutral-500 flex items-center gap-1.5">
                          <Mail className="w-4 h-4 text-neutral-400" /> Email:
                        </span>
                        <span className="font-medium text-neutral-900">
                          {selectedEnquiry.email}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-neutral-500 flex items-center gap-1.5">
                          <MapPin className="w-4 h-4 text-neutral-400" /> Plant / Location:
                        </span>
                        <span className="font-medium text-neutral-900">
                          {selectedEnquiry.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Requirements & Message */}
                  <div className="space-y-3">
                    <h3 className="text-xs font-bold text-neutral-500 uppercase tracking-wider">
                      Technical Requirement
                    </h3>
                    <div className="p-4 rounded-xl border border-neutral-200 bg-neutral-50/50 space-y-3">
                      <div>
                        <div className="text-xs text-neutral-500">Interested Product / Sector</div>
                        <div className="text-base font-bold text-neutral-900 mt-0.5">
                          {selectedEnquiry.productInterest}
                        </div>
                      </div>
                      <div>
                        <div className="text-xs text-neutral-500">Buyer Query / Specification Note</div>
                        <div className="text-sm text-neutral-800 bg-white p-3 rounded-lg border border-neutral-200 mt-1 whitespace-pre-wrap">
                          {selectedEnquiry.message}
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-xs text-neutral-500 pt-1">
                        <span>Assigned Engineer: <strong>{selectedEnquiry.assignee}</strong></span>
                        <span>Logged: {formatDate(selectedEnquiry.createdAt)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Drawer Footer Actions */}
              <div className="p-6 border-t border-neutral-200 bg-neutral-50 space-y-2">
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      setReplyModalOpen(true);
                      setReplyMessage(
                        `Hello ${selectedEnquiry.customerName}, thank you for reaching out from ${selectedEnquiry.company}. Our engineering team has reviewed your note for ${selectedEnquiry.productInterest}. What is your target production batch size?`
                      );
                    }}
                    className="flex-1 py-2.5 px-4 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm font-semibold flex items-center justify-center gap-2 shadow-sm transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    WhatsApp Quick Reply
                  </button>
                  <button
                    onClick={() => {
                      handleStageChange(selectedEnquiry.id, "Qualified");
                      setToastMsg(`Enquiry ${selectedEnquiry.enquiryNumber} converted to Qualified RFQ pipeline.`);
                      setTimeout(() => setToastMsg(null), 3000);
                    }}
                    className="flex-1 py-2.5 px-4 bg-primary hover:bg-primary-hover text-white rounded-lg text-sm font-semibold flex items-center justify-center gap-2 shadow-sm transition-colors"
                  >
                    <Sparkles className="w-4 h-4" />
                    Convert to RFQ
                  </button>
                </div>
                <button
                  onClick={() => setSelectedEnquiry(null)}
                  className="w-full py-2 text-xs text-neutral-500 hover:text-neutral-700"
                >
                  Close Panel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* WhatsApp Reply Modal */}
        {replyModalOpen && selectedEnquiry && (
          <div className="fixed inset-0 z-60 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in">
            <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl space-y-4">
              <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-green-100 text-green-700 flex items-center justify-center">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-neutral-900 text-sm">
                      WhatsApp Dispatch Simulator
                    </h3>
                    <p className="text-xs text-neutral-500">
                      To: {selectedEnquiry.customerName} ({selectedEnquiry.phone})
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setReplyModalOpen(false)}
                  className="text-neutral-400 hover:text-neutral-600"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">
                  Message Content (Template or Custom)
                </label>
                <textarea
                  rows={4}
                  value={replyMessage}
                  onChange={(e) => setReplyMessage(e.target.value)}
                  className="w-full text-sm p-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-600"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  onClick={() => setReplyModalOpen(false)}
                  className="px-4 py-2 text-xs font-semibold rounded-lg border border-neutral-300 text-neutral-700 hover:bg-neutral-50"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSendWhatsAppReply}
                  className="px-4 py-2 text-xs font-semibold rounded-lg bg-green-600 text-white hover:bg-green-700 flex items-center gap-1.5 shadow-sm"
                >
                  <Send className="w-3.5 h-3.5" />
                  Send via WhatsApp Cloud API
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}
