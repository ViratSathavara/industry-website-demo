"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { useDemoState } from "@/lib/services/demo-state-context";
import { Customer } from "@/lib/types";
import {
  Building,
  Search,
  Filter,
  Eye,
  Plus,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  FileText,
  FileCheck,
  ShoppingBag,
  ExternalLink,
  User,
  ShieldCheck,
  X,
  Sparkles,
  CheckCircle2
} from "lucide-react";
import { formatCurrency, formatDate } from "@/lib/utils";

export default function AdminCustomersPage() {
  const router = useRouter();
  const { customers, rfqs, quotes, orders, industries } = useDemoState();

  const [search, setSearch] = useState("");
  const [industryFilter, setIndustryFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  const filteredCustomers = customers.filter((cust) => {
    const matchesSearch =
      cust.companyName.toLowerCase().includes(search.toLowerCase()) ||
      cust.contactPerson.toLowerCase().includes(search.toLowerCase()) ||
      cust.gstNumber.toLowerCase().includes(search.toLowerCase()) ||
      cust.city.toLowerCase().includes(search.toLowerCase()) ||
      cust.state.toLowerCase().includes(search.toLowerCase());

    const matchesIndustry =
      industryFilter === "all" ||
      cust.industry.toLowerCase() === industryFilter.toLowerCase();

    const matchesStatus =
      statusFilter === "all" ||
      cust.status.toLowerCase() === statusFilter.toLowerCase();

    return matchesSearch && matchesIndustry && matchesStatus;
  });

  const totalLTV = customers.reduce((acc, c) => acc + c.ltv, 0);

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold text-neutral-900 tracking-tight font-heading">
                Customer 360° Account Master
              </h1>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-primary/10 text-primary">
                {filteredCustomers.length} Accounts
              </span>
            </div>
            <p className="text-sm text-neutral-500 mt-1">
              Tier-1 OEMs, EPC contractors, PSU buyers, and registered industrial distributors across India.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                setToastMsg("ERP Sync Triggered: 20 customer accounts reconciled with SAP S/4HANA / Tally Prime.");
                setTimeout(() => setToastMsg(null), 3500);
              }}
              className="px-4 py-2 text-xs font-semibold rounded-lg border border-neutral-300 hover:bg-neutral-100 text-neutral-700 transition-colors flex items-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              Sync Accounts (ERP)
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
            <div className="text-xs font-medium text-neutral-500 uppercase tracking-wider">Total Accounts</div>
            <div className="text-2xl font-bold text-neutral-900 mt-1">{customers.length}</div>
            <div className="text-xs text-neutral-400 mt-0.5">Verified GSTIN Entities</div>
          </div>
          <div className="p-4 rounded-xl bg-emerald-50/50 border border-emerald-200 shadow-sm">
            <div className="text-xs font-semibold text-emerald-700 uppercase tracking-wider">Combined LTV</div>
            <div className="text-2xl font-bold text-emerald-900 mt-1">{formatCurrency(totalLTV)}</div>
            <div className="text-xs text-emerald-600 mt-0.5">Cumulative contract volume</div>
          </div>
          <div className="p-4 rounded-xl bg-blue-50/50 border border-blue-200 shadow-sm">
            <div className="text-xs font-semibold text-blue-700 uppercase tracking-wider">Active Tier-1 Buyers</div>
            <div className="text-2xl font-bold text-blue-900 mt-1">
              {customers.filter((c) => c.status === "Active").length}
            </div>
            <div className="text-xs text-blue-600 mt-0.5">Recurring repeat purchase</div>
          </div>
          <div className="p-4 rounded-xl bg-amber-50/50 border border-amber-200 shadow-sm">
            <div className="text-xs font-semibold text-amber-700 uppercase tracking-wider">Avg Account Value</div>
            <div className="text-2xl font-bold text-amber-900 mt-1">
              {formatCurrency(Math.round(totalLTV / (customers.length || 1)))}
            </div>
            <div className="text-xs text-amber-600 mt-0.5">Annualized wallet share</div>
          </div>
        </div>

        {/* Controls */}
        <div className="bg-white p-4 rounded-xl border border-neutral-200 shadow-sm flex flex-col md:flex-row gap-3 items-center justify-between">
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search company, contact, GSTIN or city..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-sm rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto">
            <select
              value={industryFilter}
              onChange={(e) => setIndustryFilter(e.target.value)}
              className="px-3 py-1.5 text-xs font-semibold rounded-lg border border-neutral-300 bg-white focus:outline-none"
            >
              <option value="all">All Industries</option>
              {industries.map((ind) => (
                <option key={ind.id} value={ind.name}>
                  {ind.name}
                </option>
              ))}
            </select>

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-3 py-1.5 text-xs font-semibold rounded-lg border border-neutral-300 bg-white focus:outline-none"
            >
              <option value="all">All Statuses</option>
              <option value="Active">Active</option>
              <option value="Prospect">Prospect</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
        </div>

        {/* Customers Table */}
        <div className="bg-white rounded-xl border border-neutral-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-neutral-600">
              <thead className="bg-neutral-50 text-neutral-500 font-medium text-xs border-b border-neutral-200">
                <tr>
                  <th className="py-3 px-4">Company & Location</th>
                  <th className="py-3 px-4">Key Contact Person</th>
                  <th className="py-3 px-4">GSTIN & Industry</th>
                  <th className="py-3 px-4">Account Owner</th>
                  <th className="py-3 px-4 text-right">Lifetime Value (LTV)</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100">
                {filteredCustomers.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="text-center py-12 text-neutral-400">
                      <Building className="w-8 h-8 mx-auto mb-2 text-neutral-300" />
                      No customer accounts found matching criteria.
                    </td>
                  </tr>
                ) : (
                  filteredCustomers.map((cust) => (
                    <tr
                      key={cust.id}
                      className="hover:bg-neutral-50/80 transition-colors group cursor-pointer"
                      onClick={() => setSelectedCustomer(cust)}
                    >
                      <td className="py-3.5 px-4">
                        <div className="font-semibold text-neutral-900 flex items-center gap-1.5">
                          {cust.companyName}
                        </div>
                        <div className="text-xs text-neutral-500 flex items-center gap-1 mt-0.5">
                          <MapPin className="w-3 h-3 text-neutral-400" />
                          <span>{cust.city}, {cust.state}</span>
                        </div>
                      </td>

                      <td className="py-3.5 px-4">
                        <div className="font-medium text-neutral-900">{cust.contactPerson}</div>
                        <div className="text-xs text-neutral-500 mt-0.5">{cust.designation}</div>
                      </td>

                      <td className="py-3.5 px-4">
                        <div className="font-mono text-xs text-neutral-700 font-medium">
                          {cust.gstNumber}
                        </div>
                        <span className="inline-block mt-0.5 text-[11px] px-2 py-0.2 rounded bg-neutral-100 text-neutral-600">
                          {cust.industry}
                        </span>
                      </td>

                      <td className="py-3.5 px-4 text-xs text-neutral-600">
                        {cust.accountOwner}
                      </td>

                      <td className="py-3.5 px-4 text-right font-mono font-bold text-neutral-900 text-xs">
                        {formatCurrency(cust.ltv)}
                      </td>

                      <td className="py-3.5 px-4" onClick={(e) => e.stopPropagation()}>
                        <span
                          className={`px-2 py-0.5 text-xs font-semibold rounded-full ${
                            cust.status === "Active"
                              ? "bg-emerald-100 text-emerald-800"
                              : cust.status === "Prospect"
                              ? "bg-amber-100 text-amber-800"
                              : "bg-neutral-100 text-neutral-600"
                          }`}
                        >
                          {cust.status}
                        </span>
                      </td>

                      <td className="py-3.5 px-4 text-right" onClick={(e) => e.stopPropagation()}>
                        <div className="flex items-center justify-end gap-1.5">
                          <button
                            onClick={() => setSelectedCustomer(cust)}
                            title="360 Account Profile"
                            className="p-1.5 text-neutral-500 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => {
                              router.push(`/admin/quotes?customer=${encodeURIComponent(cust.companyName)}`);
                            }}
                            title="Create Quotation"
                            className="p-1.5 text-neutral-500 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                          >
                            <FileCheck className="w-4 h-4" />
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

        {/* Customer 360 Detail Drawer */}
        {selectedCustomer && (
          <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-end animate-fade-in">
            <div className="bg-white w-full max-w-2xl h-full shadow-2xl flex flex-col justify-between animate-slide-left overflow-y-auto">
              <div>
                {/* Header */}
                <div className="p-6 border-b border-neutral-200 flex items-center justify-between bg-neutral-50">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold bg-neutral-200 text-neutral-800 px-2 py-0.5 rounded">
                        GST: {selectedCustomer.gstNumber}
                      </span>
                      <span
                        className={`px-2 py-0.5 text-xs font-semibold rounded-full ${
                          selectedCustomer.status === "Active"
                            ? "bg-emerald-100 text-emerald-800"
                            : "bg-amber-100 text-amber-800"
                        }`}
                      >
                        {selectedCustomer.status}
                      </span>
                    </div>
                    <h2 className="text-xl font-bold text-neutral-900 mt-1 font-heading">
                      {selectedCustomer.companyName}
                    </h2>
                  </div>
                  <button
                    onClick={() => setSelectedCustomer(null)}
                    className="p-2 text-neutral-400 hover:text-neutral-700 hover:bg-neutral-200 rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Body Content */}
                <div className="p-6 space-y-6">
                  {/* Account Summary Strip */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl border border-neutral-200 bg-neutral-50/50 space-y-1">
                      <div className="text-xs text-neutral-500">Lifetime Procurement Value</div>
                      <div className="text-xl font-bold text-neutral-900 font-mono">
                        {formatCurrency(selectedCustomer.ltv)}
                      </div>
                      <div className="text-xs text-neutral-400">Account Owner: {selectedCustomer.accountOwner}</div>
                    </div>

                    <div className="p-4 rounded-xl border border-neutral-200 bg-neutral-50/50 space-y-1">
                      <div className="text-xs text-neutral-500">Industry & Sector</div>
                      <div className="text-sm font-bold text-neutral-900">{selectedCustomer.industry}</div>
                      <div className="text-xs text-neutral-400">Since {formatDate(selectedCustomer.createdAt)}</div>
                    </div>
                  </div>

                  {/* Primary Contact Details */}
                  <div className="space-y-3">
                    <h3 className="text-xs font-bold text-neutral-500 uppercase tracking-wider">
                      Primary Contact Executive
                    </h3>
                    <div className="p-4 rounded-xl border border-neutral-200 bg-white space-y-2.5 text-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-neutral-500">Name & Title:</span>
                        <span className="font-semibold text-neutral-900">
                          {selectedCustomer.contactPerson} ({selectedCustomer.designation})
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-neutral-500">Direct Phone:</span>
                        <span className="font-mono font-medium text-neutral-900">{selectedCustomer.phone}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-neutral-500">Corporate Email:</span>
                        <span className="font-medium text-neutral-900">{selectedCustomer.email}</span>
                      </div>
                    </div>
                  </div>

                  {/* Registered Addresses */}
                  <div className="space-y-3">
                    <h3 className="text-xs font-bold text-neutral-500 uppercase tracking-wider">
                      Plant & Shipping Locations
                    </h3>
                    <div className="p-4 rounded-xl border border-neutral-200 bg-white space-y-2 text-xs">
                      <div>
                        <span className="text-neutral-400 uppercase font-semibold text-[10px]">
                          Billing / Registered Office:
                        </span>
                        <p className="text-neutral-800 font-medium mt-0.5">
                          {selectedCustomer.billingAddress}, {selectedCustomer.city}, {selectedCustomer.state}
                        </p>
                      </div>
                      <div className="pt-2 border-t border-neutral-100">
                        <span className="text-neutral-400 uppercase font-semibold text-[10px]">
                          Authorized Delivery Warehouses:
                        </span>
                        <ul className="list-disc pl-4 text-neutral-700 mt-1 space-y-1">
                          {selectedCustomer.shippingAddresses.map((addr, idx) => (
                            <li key={idx}>{addr}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Activity & Pipeline Footprint */}
                  <div className="space-y-3">
                    <h3 className="text-xs font-bold text-neutral-500 uppercase tracking-wider">
                      Digital Factory Footprint
                    </h3>
                    <div className="grid grid-cols-3 gap-3 text-center">
                      <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-200">
                        <div className="text-lg font-bold text-neutral-900">
                          {rfqs.filter((r) => r.companyName === selectedCustomer.companyName).length}
                        </div>
                        <div className="text-[11px] text-neutral-500 mt-0.5">Total RFQs</div>
                      </div>
                      <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-200">
                        <div className="text-lg font-bold text-neutral-900">
                          {quotes.filter((q) => q.companyName === selectedCustomer.companyName).length}
                        </div>
                        <div className="text-[11px] text-neutral-500 mt-0.5">Quotes Sent</div>
                      </div>
                      <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-200">
                        <div className="text-lg font-bold text-neutral-900">
                          {orders.filter((o) => o.companyName === selectedCustomer.companyName).length}
                        </div>
                        <div className="text-[11px] text-neutral-500 mt-0.5">Orders Produced</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Drawer Footer Actions */}
              <div className="p-6 border-t border-neutral-200 bg-neutral-50 flex items-center gap-3">
                <button
                  onClick={() => setSelectedCustomer(null)}
                  className="px-4 py-2.5 rounded-lg border border-neutral-300 text-neutral-700 text-sm font-semibold hover:bg-neutral-100"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    router.push(
                      `/admin/quotes?customer=${encodeURIComponent(selectedCustomer.companyName)}`
                    );
                  }}
                  className="flex-1 py-2.5 px-4 bg-primary hover:bg-primary-hover text-white rounded-lg text-sm font-semibold flex items-center justify-center gap-2 shadow-sm transition-colors"
                >
                  <Sparkles className="w-4 h-4" />
                  Generate Custom Quotation
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}
