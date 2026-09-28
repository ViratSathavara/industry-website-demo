"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PortalLayout } from "@/components/portal/PortalLayout";
import { useDemoState } from "@/lib/services/demo-state-context";
import { StatusBadge } from "@/components/ui/StatusBadge";
import {
  ShoppingBag,
  Clock,
  Truck,
  CheckCircle2,
  FileText,
  MapPin,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import { formatCurrency } from "@/lib/utils";

export default function PortalOrdersPage() {
  const { orders } = useDemoState();
  const [expandedOrderId, setExpandedOrderId] = useState<string | null>(orders[0]?.id || null);

  return (
    <PortalLayout>
      <div className="space-y-6 max-w-7xl mx-auto">
        <div>
          <h2 className="text-xl font-extrabold text-stone-900 tracking-tight">
            Active Orders & Production Tracking
          </h2>
          <p className="text-xs text-stone-500">
            Real-time status of your confirmed manufacturing orders, quality milestones, and carrier dispatch
          </p>
        </div>

        {/* Orders List */}
        <div className="space-y-6">
          {orders.map((ord) => {
            const isExpanded = expandedOrderId === ord.id;

            return (
              <div
                key={ord.id}
                className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs"
              >
                {/* Order Summary Header */}
                <div
                  onClick={() => setExpandedOrderId(isExpanded ? null : ord.id)}
                  className="p-6 cursor-pointer hover:bg-stone-50/50 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4"
                >
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-bold text-base text-stone-900 font-mono">
                        {ord.orderNumber}
                      </h3>
                      <StatusBadge status={ord.status} />
                      <span className="text-[11px] text-stone-400">
                        Placed on {ord.orderDate}
                      </span>
                    </div>

                    <p className="text-xs font-semibold text-stone-800">
                      {ord.items[0]?.productName} (Qty: {ord.items[0]?.qty})
                    </p>

                    <div className="text-[11px] text-stone-500 flex items-center gap-1.5">
                      <span className="font-medium text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                        Stage: {ord.productionStage}
                      </span>
                      {ord.trackingNumber && (
                        <span className="text-stone-400 font-mono">
                          • Tracking: {ord.trackingNumber}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-6 justify-between md:justify-end">
                    <div className="text-left md:text-right">
                      <span className="text-[10px] text-stone-400 uppercase font-bold block">
                        Order Value
                      </span>
                      <strong className="text-lg font-extrabold text-stone-900">
                        {formatCurrency(ord.totalAmount)}
                      </strong>
                      <span className="text-[11px] text-emerald-700 font-semibold block">
                        Payment: {ord.paymentStatus}
                      </span>
                    </div>

                    <button className="p-2 rounded-lg bg-stone-100 text-stone-600 hover:bg-stone-200">
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Expanded Detailed Timeline */}
                {isExpanded && (
                  <div className="p-6 bg-stone-50/70 border-t border-stone-200 space-y-6 animate-in fade-in duration-150">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-4 border-b border-stone-200 text-xs">
                      <div>
                        <span className="font-bold text-stone-500 uppercase text-[10px] block mb-1">
                          Delivery Destination
                        </span>
                        <p className="text-stone-800 leading-relaxed">{ord.shippingAddress}</p>
                      </div>
                      <div>
                        <span className="font-bold text-stone-500 uppercase text-[10px] block mb-1">
                          Estimated Delivery Date
                        </span>
                        <strong className="text-stone-900 text-sm flex items-center gap-1">
                          <Clock className="w-4 h-4 text-[#d4560a]" />
                          {ord.estimatedDelivery}
                        </strong>
                      </div>
                    </div>

                    {/* Timeline Tracker */}
                    <div>
                      <h4 className="font-bold text-xs uppercase tracking-wider text-stone-500 mb-4">
                        Manufacturing & Dispatch Milestones
                      </h4>

                      <div className="space-y-4">
                        {ord.timeline.map((step, idx) => (
                          <div key={step.title} className="flex items-start gap-4 text-xs">
                            <div className="flex flex-col items-center">
                              <div
                                className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs ${
                                  step.completed
                                    ? "bg-emerald-600 text-white shadow-sm"
                                    : step.active
                                    ? "bg-amber-500 text-white ring-4 ring-amber-100"
                                    : "bg-stone-200 text-stone-600"
                                }`}
                              >
                                {step.completed ? "✓" : idx + 1}
                              </div>
                              {idx < ord.timeline.length - 1 && (
                                <div
                                  className={`w-0.5 h-8 ${
                                    step.completed ? "bg-emerald-600" : "bg-stone-300"
                                  }`}
                                />
                              )}
                            </div>

                            <div className="pb-3">
                              <div className="flex items-center gap-3">
                                <strong className="text-stone-900 text-sm">{step.title}</strong>
                                <span className="text-[11px] text-stone-400 font-mono">
                                  {step.date}
                                </span>
                              </div>
                              <p className="text-xs text-stone-600 mt-1 max-w-xl">
                                {step.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </PortalLayout>
  );
}
