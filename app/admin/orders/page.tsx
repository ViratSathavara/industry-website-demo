"use client";

import React, { useState } from "react";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { useDemoState } from "@/lib/services/demo-state-context";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Order } from "@/lib/types";
import {
  ShoppingBag,
  Search,
  Filter,
  Eye,
  ArrowRight,
  Truck,
  CheckCircle2,
  Clock,
  Building,
  Calendar,
  X,
  Sparkles,
  ChevronRight,
  PackageCheck,
  ShieldCheck,
  MapPin,
  ExternalLink
} from "lucide-react";
import { formatCurrency, formatDate } from "@/lib/utils";

const STAGES: Array<{ status: Order["status"]; stageLabel: string }> = [
  { status: "Confirmed", stageLabel: "Order Confirmed & Work Order Generated" },
  { status: "Production", stageLabel: "Machining & Manufacturing in Progress" },
  { status: "Quality", stageLabel: "CMM Metrology & Quality Inspection" },
  { status: "Ready", stageLabel: "Ready for Dispatch & Packed" },
  { status: "Dispatched", stageLabel: "Dispatched via Logistics Carrier" },
  { status: "Delivered", stageLabel: "Delivered & Accepted at Plant" }
];

export default function AdminOrdersPage() {
  const { orders, updateOrderStatus } = useDemoState();

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  const filteredOrders = orders.filter((o) => {
    const matchesSearch =
      o.orderNumber.toLowerCase().includes(search.toLowerCase()) ||
      o.companyName.toLowerCase().includes(search.toLowerCase()) ||
      o.contactPerson.toLowerCase().includes(search.toLowerCase()) ||
      (o.trackingNumber && o.trackingNumber.toLowerCase().includes(search.toLowerCase()));

    const matchesStatus =
      statusFilter === "all" || o.status.toLowerCase() === statusFilter.toLowerCase();

    return matchesSearch && matchesStatus;
  });

  const getNextStage = (currentStatus: Order["status"]) => {
    const currentIndex = STAGES.findIndex((s) => s.status === currentStatus);
    if (currentIndex >= 0 && currentIndex < STAGES.length - 1) {
      return STAGES[currentIndex + 1];
    }
    return null;
  };

  const handleAdvanceStage = (order: Order) => {
    const next = getNextStage(order.status);
    if (!next) return;

    updateOrderStatus(order.id, next.status, next.stageLabel);
    if (selectedOrder && selectedOrder.id === order.id) {
      setSelectedOrder({
        ...selectedOrder,
        status: next.status,
        productionStage: next.stageLabel
      });
    }

    setToastMsg(
      `Order ${order.orderNumber} advanced to: "${next.status}" (${next.stageLabel})`
    );
    setTimeout(() => setToastMsg(null), 4000);
  };

  const totalValue = orders.reduce((acc, o) => acc + o.totalAmount, 0);

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold text-neutral-900 tracking-tight font-heading">
                Factory Operations & Order Pipeline
              </h1>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-primary/10 text-primary">
                {filteredOrders.length} Work Orders
              </span>
            </div>
            <p className="text-sm text-neutral-500 mt-1">
              Shopfloor execution tracking from CNC production and metrology inspection to logistics dispatch.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                setToastMsg("ERP Work Orders synchronized with Siemens MES shopfloor terminals.");
                setTimeout(() => setToastMsg(null), 3000);
              }}
              className="px-4 py-2 text-xs font-semibold rounded-lg border border-neutral-300 hover:bg-neutral-100 text-neutral-700 transition-colors flex items-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              Sync MES Terminals
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

        {/* KPI Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-white border border-neutral-200 shadow-sm">
            <div className="text-xs font-medium text-neutral-500 uppercase tracking-wider">Active Work Orders</div>
            <div className="text-2xl font-bold text-neutral-900 mt-1">{orders.length}</div>
            <div className="text-xs text-neutral-400 mt-0.5">Total shopfloor orders</div>
          </div>
          <div className="p-4 rounded-xl bg-blue-50/50 border border-blue-200 shadow-sm">
            <div className="text-xs font-semibold text-blue-700 uppercase tracking-wider">Active Order Value</div>
            <div className="text-2xl font-bold text-blue-900 mt-1">{formatCurrency(totalValue)}</div>
            <div className="text-xs text-blue-600 mt-0.5">Work-in-progress pipeline</div>
          </div>
          <div className="p-4 rounded-xl bg-amber-50/50 border border-amber-200 shadow-sm">
            <div className="text-xs font-semibold text-amber-700 uppercase tracking-wider">In Production / QC</div>
            <div className="text-2xl font-bold text-amber-900 mt-1">
              {orders.filter((o) => o.status === "Production" || o.status === "Quality").length}
            </div>
            <div className="text-xs text-amber-600 mt-0.5">On active machines</div>
          </div>
          <div className="p-4 rounded-xl bg-emerald-50/50 border border-emerald-200 shadow-sm">
            <div className="text-xs font-semibold text-emerald-700 uppercase tracking-wider">Dispatched / Delivered</div>
            <div className="text-2xl font-bold text-emerald-900 mt-1">
              {orders.filter((o) => o.status === "Dispatched" || o.status === "Delivered").length}
            </div>
            <div className="text-xs text-emerald-600 mt-0.5">Transit & fulfilled</div>
          </div>
        </div>

        {/* Controls */}
        <div className="bg-white p-4 rounded-xl border border-neutral-200 shadow-sm flex flex-col md:flex-row gap-3 items-center justify-between">
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by Order #, company, tracking docket..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-sm rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
            {["all", "Confirmed", "Production", "Quality", "Ready", "Dispatched", "Delivered"].map((st) => (
              <button
                key={st}
                onClick={() => setStatusFilter(st)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg capitalize whitespace-nowrap transition-colors ${
                  statusFilter === st
                    ? "bg-neutral-900 text-white shadow-sm"
                    : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                }`}
              >
                {st === "all" ? "All Orders" : st}
              </button>
            ))}
          </div>
        </div>

        {/* Orders Table */}
        <div className="bg-white rounded-xl border border-neutral-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-neutral-600">
              <thead className="bg-neutral-50 text-neutral-500 font-medium text-xs border-b border-neutral-200">
                <tr>
                  <th className="py-3 px-4">Order ID & Date</th>
                  <th className="py-3 px-4">Customer Entity</th>
                  <th className="py-3 px-4">Production Stage</th>
                  <th className="py-3 px-4">Total Value</th>
                  <th className="py-3 px-4">Target Delivery</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4 text-right">Advance Stage</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100">
                {filteredOrders.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="text-center py-12 text-neutral-400">
                      <ShoppingBag className="w-8 h-8 mx-auto mb-2 text-neutral-300" />
                      No orders found matching criteria.
                    </td>
                  </tr>
                ) : (
                  filteredOrders.map((ord) => {
                    const nextStage = getNextStage(ord.status);

                    return (
                      <tr
                        key={ord.id}
                        className="hover:bg-neutral-50/80 transition-colors group cursor-pointer"
                        onClick={() => setSelectedOrder(ord)}
                      >
                        <td className="py-3.5 px-4 font-mono text-xs">
                          <div className="font-bold text-neutral-900">{ord.orderNumber}</div>
                          <div className="text-neutral-400 text-[11px] mt-0.5">{formatDate(ord.orderDate)}</div>
                        </td>

                        <td className="py-3.5 px-4">
                          <div className="font-semibold text-neutral-900">{ord.companyName}</div>
                          <div className="text-xs text-neutral-500 mt-0.5">{ord.contactPerson}</div>
                        </td>

                        <td className="py-3.5 px-4 max-w-xs">
                          <div className="text-xs font-medium text-neutral-800 truncate">
                            {ord.productionStage || "Work Order Active"}
                          </div>
                          {ord.trackingNumber && (
                            <div className="text-[11px] text-primary font-mono mt-0.5 flex items-center gap-1">
                              <Truck className="w-3 h-3" />
                              <span>{ord.trackingNumber}</span>
                            </div>
                          )}
                        </td>

                        <td className="py-3.5 px-4 font-mono text-xs font-bold text-neutral-900">
                          {formatCurrency(ord.totalAmount)}
                          <div className="text-[10px] text-neutral-400 font-normal">
                            {ord.paymentStatus}
                          </div>
                        </td>

                        <td className="py-3.5 px-4 text-xs text-neutral-600">
                          {formatDate(ord.estimatedDelivery)}
                        </td>

                        <td className="py-3.5 px-4" onClick={(e) => e.stopPropagation()}>
                          <StatusBadge status={ord.status} />
                        </td>

                        <td className="py-3.5 px-4 text-right" onClick={(e) => e.stopPropagation()}>
                          <div className="flex items-center justify-end gap-1.5">
                            {nextStage ? (
                              <button
                                onClick={() => handleAdvanceStage(ord)}
                                title={`Advance to: ${nextStage.status}`}
                                className="px-3 py-1.5 text-xs font-semibold bg-neutral-900 text-white hover:bg-primary rounded-lg transition-colors flex items-center gap-1 shadow-sm"
                              >
                                <span>Advance to {nextStage.status}</span>
                                <ChevronRight className="w-3 h-3" />
                              </button>
                            ) : (
                              <span className="px-2.5 py-1 text-xs font-medium text-emerald-700 bg-emerald-50 rounded-lg flex items-center gap-1">
                                <CheckCircle2 className="w-3 h-3" />
                                Completed
                              </span>
                            )}
                            <button
                              onClick={() => setSelectedOrder(ord)}
                              title="Inspect Details"
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

        {/* Order Detail Drawer */}
        {selectedOrder && (
          <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-end animate-fade-in">
            <div className="bg-white w-full max-w-2xl h-full shadow-2xl flex flex-col justify-between animate-slide-left overflow-y-auto">
              <div>
                {/* Header */}
                <div className="p-6 border-b border-neutral-200 flex items-center justify-between bg-neutral-50">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-sm font-bold text-primary">
                        {selectedOrder.orderNumber}
                      </span>
                      <StatusBadge status={selectedOrder.status} />
                    </div>
                    <h2 className="text-xl font-bold text-neutral-900 mt-1 font-heading">
                      {selectedOrder.companyName}
                    </h2>
                  </div>
                  <button
                    onClick={() => setSelectedOrder(null)}
                    className="p-2 text-neutral-400 hover:text-neutral-700 hover:bg-neutral-200 rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Content */}
                <div className="p-6 space-y-6">
                  {/* Advance Stage Action Strip */}
                  <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200 flex items-center justify-between">
                    <div>
                      <div className="text-xs text-neutral-500">Current Production Milestone</div>
                      <div className="text-sm font-bold text-neutral-900 mt-0.5">
                        {selectedOrder.productionStage || selectedOrder.status}
                      </div>
                    </div>

                    {getNextStage(selectedOrder.status) && (
                      <button
                        onClick={() => handleAdvanceStage(selectedOrder)}
                        className="px-4 py-2 bg-primary hover:bg-primary-hover text-white text-xs font-semibold rounded-lg flex items-center gap-1.5 shadow-sm transition-colors"
                      >
                        <span>Step to {getNextStage(selectedOrder.status)?.status}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>

                  {/* Manufacturing Progression Stepper */}
                  <div className="space-y-3">
                    <h3 className="text-xs font-bold text-neutral-500 uppercase tracking-wider">
                      Shopfloor Production Milestones
                    </h3>
                    <div className="p-4 rounded-xl border border-neutral-200 bg-white space-y-3">
                      {STAGES.map((stg, idx) => {
                        const isDone = STAGES.findIndex((s) => s.status === selectedOrder.status) >= idx;
                        const isCurrent = selectedOrder.status === stg.status;

                        return (
                          <div key={stg.status} className="flex items-start gap-3">
                            <div className="mt-0.5">
                              {isDone ? (
                                <div className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center">
                                  <CheckCircle2 className="w-3.5 h-3.5" />
                                </div>
                              ) : (
                                <div className="w-5 h-5 rounded-full border-2 border-neutral-300 bg-white" />
                              )}
                            </div>
                            <div className="flex-1">
                              <div
                                className={`text-xs font-semibold ${
                                  isCurrent
                                    ? "text-primary font-bold"
                                    : isDone
                                    ? "text-neutral-900"
                                    : "text-neutral-400"
                                }`}
                              >
                                {stg.status} — {stg.stageLabel}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Items Ordered Table */}
                  <div className="space-y-2">
                    <h3 className="text-xs font-bold text-neutral-500 uppercase tracking-wider">
                      Bill of Fabricated Items
                    </h3>
                    <div className="border border-neutral-200 rounded-xl overflow-hidden bg-white">
                      <table className="w-full text-left text-xs">
                        <thead className="bg-neutral-50 text-neutral-500 font-semibold border-b border-neutral-200">
                          <tr>
                            <th className="py-2.5 px-3">Item Name</th>
                            <th className="py-2.5 px-3 text-center">Quantity</th>
                            <th className="py-2.5 px-3 text-right">Unit Rate</th>
                            <th className="py-2.5 px-3 text-right">Total</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-100">
                          {selectedOrder.items.map((it, idx) => (
                            <tr key={idx} className="hover:bg-neutral-50">
                              <td className="py-2.5 px-3 font-semibold text-neutral-900">
                                {it.productName}
                              </td>
                              <td className="py-2.5 px-3 text-center font-mono">
                                {it.qty}
                              </td>
                              <td className="py-2.5 px-3 text-right font-mono">
                                {formatCurrency(it.unitPrice)}
                              </td>
                              <td className="py-2.5 px-3 text-right font-mono font-bold text-neutral-900">
                                {formatCurrency(it.total)}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Delivery & Logistics */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl border border-neutral-200 bg-neutral-50/50 space-y-1.5 text-xs">
                      <div className="font-semibold text-neutral-700 uppercase tracking-wider text-[10px]">
                        Shipping & Plant Destination
                      </div>
                      <div className="text-neutral-800 font-medium">{selectedOrder.shippingAddress}</div>
                      <div className="text-neutral-500 pt-1">
                        Contact: {selectedOrder.contactPerson} ({selectedOrder.phone})
                      </div>
                    </div>

                    <div className="p-4 rounded-xl border border-neutral-200 bg-neutral-50/50 space-y-1.5 text-xs">
                      <div className="font-semibold text-neutral-700 uppercase tracking-wider text-[10px]">
                        Logistics Carrier
                      </div>
                      <div>Transporter: <strong>GATI-KWE Surface Logistics</strong></div>
                      <div>
                        Tracking Docket:{" "}
                        <strong className="font-mono text-primary">
                          {selectedOrder.trackingNumber || "Assigned upon dispatch"}
                        </strong>
                      </div>
                      <div>Estimated Plant Arrival: <strong>{formatDate(selectedOrder.estimatedDelivery)}</strong></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Drawer Footer Actions */}
              <div className="p-6 border-t border-neutral-200 bg-neutral-50 flex items-center justify-between">
                <button
                  onClick={() => setSelectedOrder(null)}
                  className="px-4 py-2.5 rounded-lg border border-neutral-300 text-neutral-700 text-sm font-semibold hover:bg-neutral-100"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    setToastMsg(`Simulated automated WhatsApp SMS update sent to buyer at ${selectedOrder.phone}`);
                    setTimeout(() => setToastMsg(null), 3500);
                  }}
                  className="px-4 py-2.5 rounded-lg bg-green-600 hover:bg-green-700 text-white text-sm font-semibold flex items-center gap-1.5 shadow-sm"
                >
                  <Truck className="w-4 h-4" />
                  Notify Client via WhatsApp
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}
