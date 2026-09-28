"use client";

import React from "react";
import Link from "next/link";
import { PortalLayout } from "@/components/portal/PortalLayout";
import { useDemoState } from "@/lib/services/demo-state-context";
import { StatusBadge } from "@/components/ui/StatusBadge";
import {
  FileText,
  FileCheck,
  ShoppingBag,
  Calendar,
  MessageSquare,
  ArrowRight,
  TrendingUp,
  Clock,
  Download,
  AlertCircle
} from "lucide-react";
import { formatCurrency } from "@/lib/utils";

export default function PortalDashboardPage() {
  const { currentCustomer, rfqs, quotes, orders, appointments, messages, documents } = useDemoState();

  // Filter items relevant to current customer (or all in demo mode)
  const customerRfqs = rfqs.slice(0, 3);
  const pendingQuotes = quotes.filter((q) => q.status === "Sent" || q.status === "Draft");
  const activeOrders = orders.filter((o) => o.status === "Production" || o.status === "Confirmed");
  const upcomingApts = appointments.filter((a) => a.status === "Confirmed" || a.status === "Requested");

  return (
    <PortalLayout>
      <div className="space-y-8 max-w-7xl mx-auto">
        {/* Welcome Header */}
        <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs uppercase font-bold text-[#d4560a] tracking-wider">
              Procurement Workspace
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900 tracking-tight">
              Welcome back, {currentCustomer.contactPerson}!
            </h2>
            <p className="text-xs text-stone-500">
              Account: <strong>{currentCustomer.companyName}</strong> • GST: {currentCustomer.gstNumber}
            </p>
          </div>

          <div className="flex gap-2">
            <Link
              href="/request-quote"
              className="px-4 py-2 bg-[#d4560a] hover:bg-[#b84605] text-white text-xs font-bold rounded-lg shadow-xs flex items-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Create New RFQ</span>
            </Link>
            <Link
              href="/book-demo"
              className="px-4 py-2 border border-stone-300 hover:bg-stone-50 text-stone-700 text-xs font-bold rounded-lg flex items-center gap-1.5"
            >
              <Calendar className="w-3.5 h-3.5 text-emerald-600" />
              <span>Book Plant Visit</span>
            </Link>
          </div>
        </div>

        {/* 4 KPI Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-xs space-y-2">
            <div className="flex items-center justify-between text-stone-500">
              <span className="text-xs font-semibold">Active RFQs</span>
              <FileText className="w-4 h-4 text-[#d4560a]" />
            </div>
            <div className="text-2xl font-extrabold text-stone-900">{rfqs.length}</div>
            <div className="text-[11px] text-stone-400">Under engineering review</div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-xs space-y-2">
            <div className="flex items-center justify-between text-stone-500">
              <span className="text-xs font-semibold">Pending Quotes</span>
              <FileCheck className="w-4 h-4 text-amber-500" />
            </div>
            <div className="text-2xl font-extrabold text-stone-900">{pendingQuotes.length}</div>
            <div className="text-[11px] text-amber-600 font-medium">Awaiting your approval</div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-xs space-y-2">
            <div className="flex items-center justify-between text-stone-500">
              <span className="text-xs font-semibold">Orders in Production</span>
              <ShoppingBag className="w-4 h-4 text-emerald-600" />
            </div>
            <div className="text-2xl font-extrabold text-stone-900">{activeOrders.length}</div>
            <div className="text-[11px] text-emerald-600 font-medium">Live timeline active</div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-xs space-y-2">
            <div className="flex items-center justify-between text-stone-500">
              <span className="text-xs font-semibold">Upcoming Visits</span>
              <Calendar className="w-4 h-4 text-blue-600" />
            </div>
            <div className="text-2xl font-extrabold text-stone-900">{upcomingApts.length}</div>
            <div className="text-[11px] text-stone-400">Scheduled appointments</div>
          </div>
        </div>

        {/* 2 Column Main Grids */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Active Quotations & Orders Timeline */}
          <div className="lg:col-span-8 space-y-8">
            {/* Quotations to Review */}
            <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-xs">
              <div className="flex items-center justify-between pb-3 border-b border-stone-100 mb-4">
                <div>
                  <h3 className="font-bold text-base text-stone-900">
                    Quotations Requiring Attention
                  </h3>
                  <p className="text-xs text-stone-500">
                    Review pricing line items, payment terms, and accept online
                  </p>
                </div>
                <Link href="/portal/quotes" className="text-xs text-[#d4560a] font-bold hover:underline">
                  View All Quotes →
                </Link>
              </div>

              <div className="space-y-3">
                {quotes.map((q) => (
                  <div
                    key={q.id}
                    className="p-4 rounded-xl border border-stone-200 bg-stone-50 hover:bg-white transition-colors flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <strong className="text-stone-900 text-sm">{q.quoteNumber}</strong>
                        <StatusBadge status={q.status} />
                      </div>
                      <p className="text-xs text-stone-600">
                        {q.items[0]?.productName} (Qty: {q.items[0]?.qty})
                      </p>
                      <div className="text-[11px] text-stone-400">
                        Expires: {q.expiryDate} • Payment: {q.paymentTerms}
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <div className="text-base font-extrabold text-stone-900">
                        {formatCurrency(q.grandTotal)}
                      </div>
                      <Link
                        href="/portal/quotes"
                        className="text-xs text-[#d4560a] font-bold hover:underline inline-block mt-1"
                      >
                        Inspect & Accept →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Active Production Order Progress */}
            {activeOrders.length > 0 && (
              <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-xs">
                <div className="flex items-center justify-between pb-3 border-b border-stone-100 mb-4">
                  <div>
                    <h3 className="font-bold text-base text-stone-900">
                      Live Production Status: {activeOrders[0].orderNumber}
                    </h3>
                    <p className="text-xs text-stone-500">
                      Current Stage: <strong>{activeOrders[0].productionStage}</strong>
                    </p>
                  </div>
                  <Link href="/portal/orders" className="text-xs text-[#d4560a] font-bold hover:underline">
                    Order Details →
                  </Link>
                </div>

                {/* Timeline Progress Tracker */}
                <div className="space-y-3 pt-2">
                  {activeOrders[0].timeline.map((step, idx) => (
                    <div key={step.title} className="flex items-start gap-3 text-xs">
                      <div className="flex flex-col items-center">
                        <div
                          className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-[10px] ${
                            step.completed
                              ? "bg-emerald-600 text-white"
                              : step.active
                              ? "bg-amber-500 text-white animate-pulse"
                              : "bg-stone-200 text-stone-600"
                          }`}
                        >
                          {step.completed ? "✓" : idx + 1}
                        </div>
                        {idx < activeOrders[0].timeline.length - 1 && (
                          <div className={`w-0.5 h-6 ${step.completed ? "bg-emerald-600" : "bg-stone-200"}`} />
                        )}
                      </div>

                      <div className="pb-2">
                        <div className="flex items-center gap-2">
                          <strong className="text-stone-900">{step.title}</strong>
                          <span className="text-[10px] text-stone-400 font-mono">{step.date}</span>
                        </div>
                        <p className="text-[11px] text-stone-500 mt-0.5">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Quick RFQ summary, appointments & documents */}
          <div className="lg:col-span-4 space-y-6">
            {/* Recent RFQs */}
            <div className="bg-white rounded-2xl border border-stone-200 p-5 shadow-xs">
              <div className="flex items-center justify-between pb-2 border-b border-stone-100 mb-3">
                <h4 className="font-bold text-xs uppercase tracking-wider text-stone-900">
                  Recent RFQs
                </h4>
                <Link href="/portal/rfqs" className="text-[11px] text-[#d4560a] font-semibold hover:underline">
                  View All
                </Link>
              </div>

              <div className="space-y-2.5">
                {customerRfqs.map((rfq) => (
                  <div key={rfq.id} className="p-2.5 rounded-lg bg-stone-50 border border-stone-200 text-xs">
                    <div className="flex items-center justify-between mb-1">
                      <strong className="text-stone-900">{rfq.rfqNumber}</strong>
                      <StatusBadge status={rfq.status} />
                    </div>
                    <div className="text-[11px] text-stone-600 line-clamp-1">
                      {rfq.items[0]?.productName}
                    </div>
                    <div className="text-[10px] text-stone-400 mt-1">
                      Target Delivery: {rfq.targetDate}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Appointments */}
            <div className="bg-white rounded-2xl border border-stone-200 p-5 shadow-xs">
              <div className="flex items-center justify-between pb-2 border-b border-stone-100 mb-3">
                <h4 className="font-bold text-xs uppercase tracking-wider text-stone-900">
                  Upcoming Factory Appointments
                </h4>
                <Link href="/portal/appointments" className="text-[11px] text-[#d4560a] font-semibold hover:underline">
                  All
                </Link>
              </div>

              {upcomingApts.length > 0 ? (
                <div className="space-y-2">
                  {upcomingApts.slice(0, 2).map((apt) => (
                    <div key={apt.id} className="p-2.5 rounded-lg bg-orange-50/50 border border-orange-200 text-xs">
                      <div className="font-bold text-stone-900">{apt.type}</div>
                      <div className="text-[11px] text-stone-600 mt-0.5">
                        {apt.date} • {apt.timeSlot}
                      </div>
                      <div className="text-[10px] text-stone-500 mt-1">
                        Host: {apt.assignedRep}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-stone-400 py-2">No upcoming appointments scheduled.</p>
              )}
            </div>

            {/* Direct Factory Chat */}
            <div className="bg-stone-900 text-white rounded-2xl p-5 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-amber-400">
                <MessageSquare className="w-4 h-4" />
                <h4 className="font-bold text-xs uppercase tracking-wider text-white">
                  Direct Factory Engineering Desk
                </h4>
              </div>
              <p className="text-xs text-stone-300 leading-relaxed">
                Connect with our application engineer regarding drawing tolerances or delivery dispatch.
              </p>
              <Link
                href="/portal/messages"
                className="inline-block w-full py-2 bg-stone-800 hover:bg-stone-700 text-center rounded-lg text-xs font-semibold border border-stone-700 transition-colors"
              >
                Open Message Thread →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PortalLayout>
  );
}
