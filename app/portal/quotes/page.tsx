"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PortalLayout } from "@/components/portal/PortalLayout";
import { useDemoState } from "@/lib/services/demo-state-context";
import { StatusBadge } from "@/components/ui/StatusBadge";
import {
  FileCheck,
  CheckCircle2,
  FileDown,
  RotateCcw,
  XCircle,
  Eye,
  ShieldCheck,
  X,
  Truck
} from "lucide-react";
import { formatCurrency } from "@/lib/utils";
import confetti from "canvas-confetti";
import { Quote } from "@/lib/types";

export default function PortalQuotesPage() {
  const { quotes, updateQuoteStatus } = useDemoState();
  const [selectedQuote, setSelectedQuote] = useState<Quote | null>(null);
  const [successToast, setSuccessToast] = useState<string | null>(null);

  const handleAccept = (quote: Quote) => {
    updateQuoteStatus(quote.id, "Accepted");
    try {
      confetti({ particleCount: 80, spread: 90, origin: { y: 0.6 } });
    } catch {}

    setSuccessToast(
      `Quotation ${quote.quoteNumber} accepted! A confirmed manufacturing order has been scheduled automatically.`
    );
    setTimeout(() => setSuccessToast(null), 5000);
    setSelectedQuote(null);
  };

  const handleRequestChanges = (quote: Quote) => {
    updateQuoteStatus(quote.id, "Changes Requested");
    setSuccessToast(`Revision requested for ${quote.quoteNumber}. Sales engineer will review.`);
    setTimeout(() => setSuccessToast(null), 4000);
    setSelectedQuote(null);
  };

  return (
    <PortalLayout>
      <div className="space-y-6 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-extrabold text-stone-900 tracking-tight">
              Factory Quotations
            </h2>
            <p className="text-xs text-stone-500">
              Review official commercial terms, tax breakdowns, and approve quotations online
            </p>
          </div>
        </div>

        {/* Success Alert Banner */}
        {successToast && (
          <div className="p-4 bg-emerald-50 border border-emerald-300 text-emerald-800 rounded-xl text-xs flex items-center justify-between shadow-sm animate-in fade-in duration-200">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <span className="font-semibold">{successToast}</span>
            </div>
            <Link
              href="/portal/orders"
              className="text-emerald-900 underline font-bold shrink-0 ml-2"
            >
              View Order Progress →
            </Link>
          </div>
        )}

        {/* Quotes Cards Grid */}
        <div className="space-y-4">
          {quotes.map((q) => {
            const isPending = q.status === "Sent" || q.status === "Draft";

            return (
              <div
                key={q.id}
                className="bg-white rounded-2xl border border-stone-200 p-6 shadow-xs flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 hover:border-stone-300 transition-colors"
              >
                <div className="space-y-2 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-bold text-base text-stone-900 font-mono">
                      {q.quoteNumber}
                    </h3>
                    <StatusBadge status={q.status} />
                    {q.rfqNumber && (
                      <span className="text-[11px] text-stone-400 font-mono">
                        Ref: {q.rfqNumber}
                      </span>
                    )}
                  </div>

                  <p className="text-xs font-semibold text-stone-800">
                    {q.items[0]?.productName} (Qty: {q.items[0]?.qty} units)
                  </p>

                  <div className="text-[11px] text-stone-500 flex flex-wrap gap-x-4 gap-y-1">
                    <span>Issued: {q.issueDate}</span>
                    <span>Valid until: {q.expiryDate}</span>
                    <span>Lead time: {q.leadTime}</span>
                    <span>Delivery: {q.deliveryTerms}</span>
                  </div>
                </div>

                {/* Pricing Breakdown & Buttons */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 shrink-0 w-full lg:w-auto justify-between lg:justify-end border-t lg:border-t-0 pt-4 lg:pt-0 border-stone-100">
                  <div className="text-left sm:text-right">
                    <span className="text-[10px] text-stone-400 uppercase font-bold block">
                      Total Payable (Incl. 18% GST)
                    </span>
                    <div className="text-xl font-extrabold text-stone-900 tracking-tight">
                      {formatCurrency(q.grandTotal)}
                    </div>
                    <span className="text-[10px] text-stone-500">
                      Subtotal: {formatCurrency(q.subtotal)}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <button
                      onClick={() => setSelectedQuote(q)}
                      className="px-3 py-2 bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-semibold rounded-lg flex items-center gap-1.5"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Inspect Breakdown</span>
                    </button>

                    {isPending && (
                      <button
                        onClick={() => handleAccept(q)}
                        className="px-4 py-2 bg-[#d4560a] hover:bg-[#b84605] text-white text-xs font-bold rounded-lg shadow-sm flex items-center gap-1.5 cursor-pointer"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Accept Quote</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Quote Breakdown Modal */}
        {selectedQuote && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-6 sm:p-8 border border-stone-200 text-xs space-y-5 max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between pb-3 border-b border-stone-200">
                <div>
                  <span className="text-[10px] uppercase font-bold text-stone-400">
                    Official Quotation Document
                  </span>
                  <h3 className="font-bold text-lg text-stone-900 font-mono">
                    {selectedQuote.quoteNumber}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedQuote(null)}
                  className="p-1 rounded-md text-stone-400 hover:text-stone-700"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Vendor & Buyer details */}
              <div className="grid grid-cols-2 gap-4 bg-stone-50 p-4 rounded-xl border border-stone-200 text-[11px]">
                <div>
                  <strong className="text-stone-900 block mb-1">Manufacturer:</strong>
                  <div>INDUSTRIA Engineering Works</div>
                  <div>GIDC Industrial Estate, Gujarat</div>
                  <div>GSTIN: 24AAACI9988K1Z5</div>
                </div>
                <div>
                  <strong className="text-stone-900 block mb-1">Customer / Buyer:</strong>
                  <div>{selectedQuote.companyName}</div>
                  <div>Attn: {selectedQuote.contactPerson}</div>
                  <div>{selectedQuote.email}</div>
                </div>
              </div>

              {/* Line items table */}
              <div className="border border-stone-200 rounded-xl overflow-hidden">
                <table className="w-full text-xs text-left">
                  <thead className="bg-stone-100 text-stone-600 font-bold uppercase text-[10px]">
                    <tr>
                      <th className="p-3">Item Description</th>
                      <th className="p-3 text-center">Qty</th>
                      <th className="p-3 text-right">Unit Rate</th>
                      <th className="p-3 text-right">Amount</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200">
                    {selectedQuote.items.map((it) => (
                      <tr key={it.id}>
                        <td className="p-3">
                          <strong className="text-stone-900 block">{it.productName}</strong>
                          <span className="text-[11px] text-stone-500">{it.description}</span>
                        </td>
                        <td className="p-3 text-center font-semibold">{it.qty}</td>
                        <td className="p-3 text-right">{formatCurrency(it.unitPrice)}</td>
                        <td className="p-3 text-right font-bold text-stone-900">
                          {formatCurrency(it.unitPrice * it.qty)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Financial Calculation */}
              <div className="bg-stone-50 p-4 rounded-xl border border-stone-200 space-y-1.5 text-xs max-w-xs ml-auto">
                <div className="flex justify-between text-stone-600">
                  <span>Subtotal:</span>
                  <span>{formatCurrency(selectedQuote.subtotal)}</span>
                </div>
                <div className="flex justify-between text-stone-600">
                  <span>Discount:</span>
                  <span className="text-emerald-700">
                    - {formatCurrency(selectedQuote.discountTotal)}
                  </span>
                </div>
                <div className="flex justify-between text-stone-600">
                  <span>GST / Tax:</span>
                  <span>{formatCurrency(selectedQuote.taxTotal)}</span>
                </div>
                <div className="flex justify-between text-stone-600">
                  <span>Freight & Logistics:</span>
                  <span>{formatCurrency(selectedQuote.shippingFee)}</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-stone-200 text-sm font-extrabold text-stone-900">
                  <span>Grand Total:</span>
                  <span>{formatCurrency(selectedQuote.grandTotal)}</span>
                </div>
              </div>

              {/* Commercial Terms */}
              <div className="bg-stone-50 p-3 rounded-lg border border-stone-200 text-[11px] text-stone-600 space-y-1">
                <div><strong>Payment Terms:</strong> {selectedQuote.paymentTerms}</div>
                <div><strong>Delivery Schedule:</strong> {selectedQuote.deliveryTerms} ({selectedQuote.leadTime})</div>
                <div><strong>Price Validity:</strong> Until {selectedQuote.expiryDate}</div>
              </div>

              {/* Action Buttons inside modal */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <button
                  onClick={() => alert("Downloading demo PDF quotation...")}
                  className="px-3.5 py-2 border border-stone-300 rounded-lg text-stone-700 font-semibold flex items-center gap-1.5"
                >
                  <FileDown className="w-3.5 h-3.5 text-[#d4560a]" />
                  <span>Download Quote PDF</span>
                </button>

                <div className="flex gap-2">
                  <button
                    onClick={() => handleRequestChanges(selectedQuote)}
                    className="px-3.5 py-2 border border-stone-300 hover:bg-stone-100 rounded-lg text-stone-700 font-semibold"
                  >
                    Request Modification
                  </button>
                  <button
                    onClick={() => handleAccept(selectedQuote)}
                    className="px-5 py-2 bg-[#d4560a] hover:bg-[#b84605] text-white font-bold rounded-lg shadow-sm flex items-center gap-1.5"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Accept Quotation</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </PortalLayout>
  );
}
