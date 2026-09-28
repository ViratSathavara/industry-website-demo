"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { useDemoState } from "@/lib/services/demo-state-context";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Quote, QuoteLineItem } from "@/lib/types";
import {
  FileCheck,
  Search,
  Plus,
  Trash2,
  Eye,
  Download,
  Calendar,
  Building,
  CheckCircle2,
  Clock,
  Sparkles,
  X,
  Send,
  DollarSign,
  Printer
} from "lucide-react";
import { formatCurrency, formatDate } from "@/lib/utils";
import confetti from "canvas-confetti";

function AdminQuotesContent() {
  const searchParams = useSearchParams();
  const rfqParam = searchParams.get("rfqId");
  const customerParam = searchParams.get("customer");

  const {
    quotes,
    createQuote,
    updateQuoteStatus,
    customers,
    products,
    rfqs
  } = useDemoState();

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedQuote, setSelectedQuote] = useState<Quote | null>(null);
  const [isBuilderOpen, setIsBuilderOpen] = useState(false);
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  // Builder Form State
  const [builderCustomer, setBuilderCustomer] = useState(
    customerParam || (customers[0]?.companyName ?? "")
  );
  const [builderRfqId, setBuilderRfqId] = useState(rfParamOrDefault(rfqParam));
  const [builderLeadTime, setBuilderLeadTime] = useState("3-4 Weeks Ex-Factory");
  const [builderPaymentTerms, setBuilderPaymentTerms] = useState("50% Advance, 50% against Dispatch");
  const [builderDeliveryTerms, setBuilderDeliveryTerms] = useState("Ex-Works Ahmedabad");
  const [builderNotes, setBuilderNotes] = useState("Price valid for 30 days. Material test certificates will be provided with shipment.");
  const [builderDiscountPercent, setBuilderDiscountPercent] = useState<number>(5);
  const [builderShipping, setBuilderShipping] = useState<number>(12500);

  const [lineItems, setLineItems] = useState<
    Array<{
      productId: string;
      productName: string;
      sku: string;
      description: string;
      qty: number;
      unitPrice: number;
    }>
  >([
    {
      productId: products[0]?.id || "p1",
      productName: products[0]?.name || "High Precision CNC Component",
      sku: products[0]?.sku || "IND-CNC-400",
      description: "Custom CNC machined alloy components with tolerance ±0.005mm",
      qty: 100,
      unitPrice: 2850
    }
  ]);

  function rfParamOrDefault(rf: string | null) {
    if (rf) return rf;
    return "";
  }

  // Auto-open builder if directed from an RFQ
  useEffect(() => {
    if (rfqParam || customerParam) {
      setIsBuilderOpen(true);
      if (rfqParam) {
        const found = rfqs.find((r) => r.id === rfqParam);
        if (found) {
          setBuilderCustomer(found.companyName);
          setBuilderRfqId(found.id);
          if (found.items && found.items.length > 0) {
            setLineItems(
              found.items.map((it, idx) => ({
                productId: it.productId || `custom-${idx}`,
                productName: it.productName,
                sku: `SPEC-${idx + 101}`,
                description: it.customSpecs || "Precision industrial fabrication",
                qty: it.quantity || 50,
                unitPrice: 1950
              }))
            );
          }
        }
      }
    }
  }, [rfqParam, customerParam, rfqs]);

  // Math Calculations for Builder
  const rawSubtotal = lineItems.reduce((acc, it) => acc + it.qty * it.unitPrice, 0);
  const discountAmount = Math.round((rawSubtotal * builderDiscountPercent) / 100);
  const taxableSubtotal = rawSubtotal - discountAmount;
  const gstTax = Math.round(taxableSubtotal * 0.18); // 18% GST standard
  const grandTotal = taxableSubtotal + gstTax + Number(builderShipping || 0);

  const handleAddLineItem = () => {
    const nextProd = products[lineItems.length % products.length];
    setLineItems([
      ...lineItems,
      {
        productId: nextProd?.id || `p-${Date.now()}`,
        productName: nextProd?.name || "Industrial Component",
        sku: nextProd?.sku || "SKU-AUTO",
        description: "Industrial grade compliance & ISO specification",
        qty: 50,
        unitPrice: 3200
      }
    ]);
  };

  const handleRemoveLineItem = (index: number) => {
    if (lineItems.length === 1) return;
    setLineItems(lineItems.filter((_, idx) => idx !== index));
  };

  const handleItemChange = (index: number, field: string, val: string | number) => {
    setLineItems((prev) =>
      prev.map((item, idx) => {
        if (idx !== index) return item;
        if (field === "productId") {
          const matched = products.find((p) => p.id === val);
          return {
            ...item,
            productId: String(val),
            productName: matched?.name || item.productName,
            sku: matched?.sku || item.sku
          };
        }
        return { ...item, [field]: val };
      })
    );
  };

  const handleCreateAndSendQuote = () => {
    const custObj = customers.find((c) => c.companyName === builderCustomer) || customers[0];

    const formattedItems: QuoteLineItem[] = lineItems.map((it, idx) => ({
      id: `qli-${Date.now()}-${idx}`,
      productId: it.productId,
      productName: it.productName,
      sku: it.sku,
      description: it.description,
      qty: Number(it.qty),
      unitPrice: Number(it.unitPrice),
      discount: 0,
      taxPercent: 18,
      total: Number(it.qty) * Number(it.unitPrice)
    }));

    const expiry = new Date();
    expiry.setDate(expiry.getDate() + 30);

    const newQuote = createQuote({
      rfqId: builderRfqId || undefined,
      rfqNumber: builderRfqId ? rfqs.find((r) => r.id === builderRfqId)?.rfqNumber : undefined,
      customerId: custObj.id,
      companyName: custObj.companyName,
      contactPerson: custObj.contactPerson,
      email: custObj.email,
      phone: custObj.phone,
      issueDate: new Date().toISOString(),
      expiryDate: expiry.toISOString(),
      items: formattedItems,
      subtotal: rawSubtotal,
      discountTotal: discountAmount,
      taxTotal: gstTax,
      shippingFee: Number(builderShipping),
      grandTotal: grandTotal,
      leadTime: builderLeadTime,
      paymentTerms: builderPaymentTerms,
      deliveryTerms: builderDeliveryTerms,
      notes: builderNotes,
      status: "Sent"
    });

    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.6 }
    });

    setIsBuilderOpen(false);
    setSelectedQuote(newQuote);
    setToastMsg(`Formal Quotation ${newQuote.quoteNumber} created and dispatched to ${custObj.companyName}!`);
    setTimeout(() => setToastMsg(null), 4000);
  };

  const filteredQuotes = quotes.filter((q) => {
    const matchesSearch =
      q.quoteNumber.toLowerCase().includes(search.toLowerCase()) ||
      q.companyName.toLowerCase().includes(search.toLowerCase()) ||
      (q.rfqNumber && q.rfqNumber.toLowerCase().includes(search.toLowerCase())) ||
      q.contactPerson.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "all" || q.status.toLowerCase() === statusFilter.toLowerCase();

    return matchesSearch && matchesStatus;
  });

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold text-neutral-900 tracking-tight font-heading">
                Quotation Builder & Dispatches
              </h1>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-primary/10 text-primary">
                {filteredQuotes.length} Quotes
              </span>
            </div>
            <p className="text-sm text-neutral-500 mt-1">
              Industrial price estimates, GST itemization, commercial terms, and multi-tier quotation lifecycle.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsBuilderOpen(true)}
              className="px-4 py-2 text-xs font-semibold rounded-lg bg-primary hover:bg-primary-hover text-white transition-colors flex items-center gap-2 shadow-sm"
            >
              <Plus className="w-3.5 h-3.5" />
              Build New Quotation
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
            <div className="text-xs font-medium text-neutral-500 uppercase tracking-wider">Total Quotes Out</div>
            <div className="text-2xl font-bold text-neutral-900 mt-1">{quotes.length}</div>
            <div className="text-xs text-neutral-400 mt-0.5">Commercial proposals</div>
          </div>
          <div className="p-4 rounded-xl bg-blue-50/50 border border-blue-200 shadow-sm">
            <div className="text-xs font-semibold text-blue-700 uppercase tracking-wider">Active Pipeline Value</div>
            <div className="text-2xl font-bold text-blue-900 mt-1">
              {formatCurrency(
                quotes
                  .filter((q) => q.status === "Sent" || q.status === "Draft")
                  .reduce((acc, q) => acc + q.grandTotal, 0)
              )}
            </div>
            <div className="text-xs text-blue-600 mt-0.5">Pending client PO</div>
          </div>
          <div className="p-4 rounded-xl bg-emerald-50/50 border border-emerald-200 shadow-sm">
            <div className="text-xs font-semibold text-emerald-700 uppercase tracking-wider">Quotes Accepted</div>
            <div className="text-2xl font-bold text-emerald-900 mt-1">
              {quotes.filter((q) => q.status === "Accepted").length}
            </div>
            <div className="text-xs text-emerald-600 mt-0.5">Converted into active factory orders</div>
          </div>
          <div className="p-4 rounded-xl bg-amber-50/50 border border-amber-200 shadow-sm">
            <div className="text-xs font-semibold text-amber-700 uppercase tracking-wider">Win Ratio</div>
            <div className="text-2xl font-bold text-amber-900 mt-1">
              {Math.round((quotes.filter((q) => q.status === "Accepted").length / (quotes.length || 1)) * 100)}%
            </div>
            <div className="text-xs text-amber-600 mt-0.5">Benchmark: &gt; 40%</div>
          </div>
        </div>

        {/* Filter & Search */}
        <div className="bg-white p-4 rounded-xl border border-neutral-200 shadow-sm flex flex-col md:flex-row gap-3 items-center justify-between">
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by Quote #, company, RFQ ref..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-sm rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
            {["all", "Draft", "Sent", "Accepted", "Expired"].map((st) => (
              <button
                key={st}
                onClick={() => setStatusFilter(st)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg capitalize whitespace-nowrap transition-colors ${
                  statusFilter === st
                    ? "bg-neutral-900 text-white shadow-sm"
                    : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                }`}
              >
                {st === "all" ? "All Statuses" : st}
              </button>
            ))}
          </div>
        </div>

        {/* Quotes Table */}
        <div className="bg-white rounded-xl border border-neutral-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-neutral-600">
              <thead className="bg-neutral-50 text-neutral-500 font-medium text-xs border-b border-neutral-200">
                <tr>
                  <th className="py-3 px-4">Quote Number & Date</th>
                  <th className="py-3 px-4">Client / Company</th>
                  <th className="py-3 px-4">RFQ Ref</th>
                  <th className="py-3 px-4">Grand Total</th>
                  <th className="py-3 px-4">Payment & Lead Time</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100">
                {filteredQuotes.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="text-center py-12 text-neutral-400">
                      <FileCheck className="w-8 h-8 mx-auto mb-2 text-neutral-300" />
                      No quotations found.
                    </td>
                  </tr>
                ) : (
                  filteredQuotes.map((quote) => (
                    <tr
                      key={quote.id}
                      className="hover:bg-neutral-50/80 transition-colors group cursor-pointer"
                      onClick={() => setSelectedQuote(quote)}
                    >
                      <td className="py-3.5 px-4 font-mono text-xs">
                        <div className="font-bold text-neutral-900">{quote.quoteNumber}</div>
                        <div className="text-neutral-400 text-[11px] mt-0.5">{formatDate(quote.issueDate)}</div>
                      </td>

                      <td className="py-3.5 px-4">
                        <div className="font-semibold text-neutral-900">{quote.companyName}</div>
                        <div className="text-xs text-neutral-500 mt-0.5">{quote.contactPerson}</div>
                      </td>

                      <td className="py-3.5 px-4 font-mono text-xs text-neutral-600">
                        {quote.rfqNumber ? (
                          <span className="bg-neutral-100 px-2 py-0.5 rounded text-neutral-800">
                            {quote.rfqNumber}
                          </span>
                        ) : (
                          <span className="text-neutral-400 italic">Direct Quote</span>
                        )}
                      </td>

                      <td className="py-3.5 px-4 font-mono text-xs font-bold text-neutral-900">
                        {formatCurrency(quote.grandTotal)}
                        <div className="text-[11px] text-neutral-400 font-normal">
                          incl. 18% GST
                        </div>
                      </td>

                      <td className="py-3.5 px-4 text-xs text-neutral-600">
                        <div className="truncate max-w-xs">{quote.leadTime}</div>
                        <div className="text-[11px] text-neutral-400 truncate max-w-xs">{quote.paymentTerms}</div>
                      </td>

                      <td className="py-3.5 px-4" onClick={(e) => e.stopPropagation()}>
                        <StatusBadge status={quote.status} />
                      </td>

                      <td className="py-3.5 px-4 text-right" onClick={(e) => e.stopPropagation()}>
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => setSelectedQuote(quote)}
                            title="Inspect Details"
                            className="p-1.5 text-neutral-500 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => {
                              setToastMsg(`Simulated PDF download for ${quote.quoteNumber}`);
                              setTimeout(() => setToastMsg(null), 3000);
                            }}
                            title="Export PDF"
                            className="p-1.5 text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 rounded-lg transition-colors"
                          >
                            <Download className="w-4 h-4" />
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

        {/* Interactive Quotation Builder Modal */}
        {isBuilderOpen && (
          <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in overflow-y-auto">
            <div className="bg-white rounded-2xl max-w-4xl w-full my-8 shadow-2xl overflow-hidden border border-neutral-200">
              {/* Modal Header */}
              <div className="p-6 bg-neutral-900 text-white flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 bg-primary text-white text-[10px] font-bold rounded uppercase tracking-wider">
                      Industrial CPQ Engine
                    </span>
                    <span className="text-xs text-neutral-400 font-mono">GST COMPLIANT</span>
                  </div>
                  <h2 className="text-xl font-bold mt-1 font-heading">
                    Create Formal Commercial Quotation
                  </h2>
                </div>
                <button
                  onClick={() => setIsBuilderOpen(false)}
                  className="p-2 text-neutral-400 hover:text-white rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Form */}
              <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
                {/* Customer & Reference Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-neutral-50 rounded-xl border border-neutral-200">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">
                      Customer / Client Entity
                    </label>
                    <select
                      value={builderCustomer}
                      onChange={(e) => setBuilderCustomer(e.target.value)}
                      className="w-full text-xs font-semibold p-2.5 rounded-lg border border-neutral-300 bg-white focus:outline-none focus:ring-2 focus:ring-primary/20"
                    >
                      {customers.map((c) => (
                        <option key={c.id} value={c.companyName}>
                          {c.companyName} ({c.city})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">
                      Link Existing RFQ (Optional)
                    </label>
                    <select
                      value={builderRfqId}
                      onChange={(e) => setBuilderRfqId(e.target.value)}
                      className="w-full text-xs p-2.5 rounded-lg border border-neutral-300 bg-white focus:outline-none focus:ring-2 focus:ring-primary/20"
                    >
                      <option value="">Direct Quotation (No RFQ)</option>
                      {rfqs.map((r) => (
                        <option key={r.id} value={r.id}>
                          {r.rfqNumber} - {r.companyName}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">
                      Target Production Lead Time
                    </label>
                    <input
                      type="text"
                      value={builderLeadTime}
                      onChange={(e) => setBuilderLeadTime(e.target.value)}
                      className="w-full text-xs p-2.5 rounded-lg border border-neutral-300 bg-white focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                </div>

                {/* Line Items Table */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs font-bold text-neutral-700 uppercase tracking-wider">
                      Itemized Bill of Materials & Pricing
                    </h3>
                    <button
                      onClick={handleAddLineItem}
                      className="px-3 py-1.5 text-xs font-semibold bg-primary/10 text-primary hover:bg-primary hover:text-white rounded-lg transition-colors flex items-center gap-1.5"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      Add Line Item
                    </button>
                  </div>

                  <div className="border border-neutral-200 rounded-xl overflow-hidden bg-white">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-neutral-100 text-neutral-600 font-semibold border-b border-neutral-200">
                        <tr>
                          <th className="py-2.5 px-3">Product / Specification</th>
                          <th className="py-2.5 px-3 w-24">Qty</th>
                          <th className="py-2.5 px-3 w-32">Unit Rate (₹)</th>
                          <th className="py-2.5 px-3 w-32 text-right">Line Total (₹)</th>
                          <th className="py-2.5 px-2 w-10"></th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-neutral-100">
                        {lineItems.map((item, idx) => (
                          <tr key={idx} className="hover:bg-neutral-50">
                            <td className="py-2.5 px-3 space-y-1">
                              <select
                                value={item.productId}
                                onChange={(e) => handleItemChange(idx, "productId", e.target.value)}
                                className="w-full font-semibold text-neutral-900 border border-neutral-200 rounded px-2 py-1 text-xs focus:outline-none"
                              >
                                {products.map((p) => (
                                  <option key={p.id} value={p.id}>
                                    {p.name} ({p.sku})
                                  </option>
                                ))}
                              </select>
                              <input
                                type="text"
                                placeholder="Custom technical note or grade..."
                                value={item.description}
                                onChange={(e) => handleItemChange(idx, "description", e.target.value)}
                                className="w-full text-[11px] text-neutral-500 border border-neutral-200 rounded px-2 py-0.5 focus:outline-none"
                              />
                            </td>
                            <td className="py-2.5 px-3">
                              <input
                                type="number"
                                min={1}
                                value={item.qty}
                                onChange={(e) => handleItemChange(idx, "qty", Number(e.target.value))}
                                className="w-full font-mono text-xs border border-neutral-200 rounded px-2 py-1 text-center focus:outline-none"
                              />
                            </td>
                            <td className="py-2.5 px-3">
                              <input
                                type="number"
                                min={1}
                                value={item.unitPrice}
                                onChange={(e) => handleItemChange(idx, "unitPrice", Number(e.target.value))}
                                className="w-full font-mono text-xs border border-neutral-200 rounded px-2 py-1 text-right focus:outline-none"
                              />
                            </td>
                            <td className="py-2.5 px-3 font-mono font-bold text-neutral-900 text-right">
                              {formatCurrency(item.qty * item.unitPrice)}
                            </td>
                            <td className="py-2.5 px-2 text-center">
                              {lineItems.length > 1 && (
                                <button
                                  onClick={() => handleRemoveLineItem(idx)}
                                  className="text-neutral-400 hover:text-rose-600 transition-colors"
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
                                </button>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Terms & Financial Summary */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  <div className="space-y-3">
                    <h3 className="text-xs font-bold text-neutral-700 uppercase tracking-wider">
                      Commercial & Delivery Terms
                    </h3>
                    <div className="space-y-2 text-xs">
                      <div>
                        <label className="block text-neutral-500 font-medium mb-0.5">Payment Terms</label>
                        <input
                          type="text"
                          value={builderPaymentTerms}
                          onChange={(e) => setBuilderPaymentTerms(e.target.value)}
                          className="w-full p-2 rounded-lg border border-neutral-300"
                        />
                      </div>
                      <div>
                        <label className="block text-neutral-500 font-medium mb-0.5">Delivery Basis</label>
                        <input
                          type="text"
                          value={builderDeliveryTerms}
                          onChange={(e) => setBuilderDeliveryTerms(e.target.value)}
                          className="w-full p-2 rounded-lg border border-neutral-300"
                        />
                      </div>
                      <div>
                        <label className="block text-neutral-500 font-medium mb-0.5">Quotation Notes</label>
                        <textarea
                          rows={2}
                          value={builderNotes}
                          onChange={(e) => setBuilderNotes(e.target.value)}
                          className="w-full p-2 rounded-lg border border-neutral-300"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Math Breakdown Box */}
                  <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 space-y-2.5 text-xs">
                    <div className="flex justify-between text-neutral-600">
                      <span>Subtotal (Base Price):</span>
                      <span className="font-mono font-semibold">{formatCurrency(rawSubtotal)}</span>
                    </div>

                    <div className="flex justify-between items-center text-neutral-600">
                      <span>Volume Discount (%):</span>
                      <div className="flex items-center gap-2">
                        <input
                          type="number"
                          min={0}
                          max={30}
                          value={builderDiscountPercent}
                          onChange={(e) => setBuilderDiscountPercent(Number(e.target.value))}
                          className="w-16 font-mono text-xs border border-neutral-300 rounded px-1.5 py-0.5 text-right"
                        />
                        <span className="font-mono text-rose-600">-{formatCurrency(discountAmount)}</span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center text-neutral-600">
                      <span>Freight & Packaging (₹):</span>
                      <input
                        type="number"
                        min={0}
                        value={builderShipping}
                        onChange={(e) => setBuilderShipping(Number(e.target.value))}
                        className="w-24 font-mono text-xs border border-neutral-300 rounded px-1.5 py-0.5 text-right"
                      />
                    </div>

                    <div className="flex justify-between text-neutral-600">
                      <span>GST @ 18% (CGST + SGST):</span>
                      <span className="font-mono font-semibold">{formatCurrency(gstTax)}</span>
                    </div>

                    <div className="border-t border-neutral-300 pt-2 flex justify-between items-center text-sm font-bold text-neutral-900">
                      <span>Grand Total:</span>
                      <span className="font-mono text-base text-primary">
                        {formatCurrency(grandTotal)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-6 border-t border-neutral-200 bg-neutral-50 flex items-center justify-between">
                <button
                  onClick={() => setIsBuilderOpen(false)}
                  className="px-4 py-2 text-xs font-semibold rounded-lg border border-neutral-300 text-neutral-700 hover:bg-neutral-100"
                >
                  Cancel
                </button>
                <button
                  onClick={handleCreateAndSendQuote}
                  className="px-6 py-2.5 text-xs font-semibold rounded-lg bg-primary hover:bg-primary-hover text-white flex items-center gap-2 shadow-sm transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                  Publish & Send Formal Quote
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Selected Quote Detail Drawer */}
        {selectedQuote && (
          <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-end animate-fade-in">
            <div className="bg-white w-full max-w-2xl h-full shadow-2xl flex flex-col justify-between animate-slide-left overflow-y-auto">
              <div>
                {/* Header */}
                <div className="p-6 border-b border-neutral-200 flex items-center justify-between bg-neutral-50">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-sm font-bold text-primary">
                        {selectedQuote.quoteNumber}
                      </span>
                      <StatusBadge status={selectedQuote.status} />
                    </div>
                    <h2 className="text-xl font-bold text-neutral-900 mt-1 font-heading">
                      {selectedQuote.companyName}
                    </h2>
                  </div>
                  <button
                    onClick={() => setSelectedQuote(null)}
                    className="p-2 text-neutral-400 hover:text-neutral-700 hover:bg-neutral-200 rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Content */}
                <div className="p-6 space-y-6">
                  {/* Status update selector */}
                  <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200 flex items-center justify-between">
                    <div>
                      <div className="text-xs text-neutral-500">Commercial Pipeline Status</div>
                      <select
                        value={selectedQuote.status}
                        onChange={(e) => {
                          updateQuoteStatus(selectedQuote.id, e.target.value as Quote["status"]);
                          setSelectedQuote({ ...selectedQuote, status: e.target.value as Quote["status"] });
                          setToastMsg(`Quote status changed to ${e.target.value}`);
                          setTimeout(() => setToastMsg(null), 3000);
                        }}
                        className="mt-1 text-sm font-bold text-neutral-900 bg-white border border-neutral-300 rounded-lg px-2.5 py-1.5 focus:outline-none"
                      >
                        <option value="Draft">Draft</option>
                        <option value="Sent">Sent (Live to Client)</option>
                        <option value="Accepted">Accepted (Generates Order)</option>
                        <option value="Expired">Expired</option>
                        <option value="Declined">Declined</option>
                      </select>
                    </div>

                    <div className="text-right">
                      <div className="text-xs text-neutral-500">Validity Expiry</div>
                      <div className="text-sm font-semibold text-neutral-900 mt-1 flex items-center gap-1 justify-end">
                        <Calendar className="w-4 h-4 text-neutral-400" />
                        {formatDate(selectedQuote.expiryDate)}
                      </div>
                    </div>
                  </div>

                  {/* Items */}
                  <div className="space-y-2">
                    <h3 className="text-xs font-bold text-neutral-500 uppercase tracking-wider">
                      Quote Items Breakdown
                    </h3>
                    <div className="border border-neutral-200 rounded-xl overflow-hidden bg-white">
                      <table className="w-full text-left text-xs">
                        <thead className="bg-neutral-50 text-neutral-600 font-semibold border-b border-neutral-200">
                          <tr>
                            <th className="py-2.5 px-3">Item</th>
                            <th className="py-2.5 px-3 text-center">Qty</th>
                            <th className="py-2.5 px-3 text-right">Unit Price</th>
                            <th className="py-2.5 px-3 text-right">Total</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-100">
                          {selectedQuote.items.map((it) => (
                            <tr key={it.id}>
                              <td className="py-2.5 px-3">
                                <div className="font-semibold text-neutral-900">{it.productName}</div>
                                <div className="text-neutral-400 text-[11px]">{it.description}</div>
                              </td>
                              <td className="py-2.5 px-3 text-center font-mono">{it.qty}</td>
                              <td className="py-2.5 px-3 text-right font-mono">{formatCurrency(it.unitPrice)}</td>
                              <td className="py-2.5 px-3 text-right font-mono font-semibold text-neutral-900">
                                {formatCurrency(it.total)}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Summary & Terms */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl border border-neutral-200 bg-neutral-50/50 space-y-2 text-xs">
                      <div className="font-semibold text-neutral-700">Commercial Conditions</div>
                      <div><strong>Lead Time:</strong> {selectedQuote.leadTime}</div>
                      <div><strong>Payment:</strong> {selectedQuote.paymentTerms}</div>
                      <div><strong>Delivery:</strong> {selectedQuote.deliveryTerms}</div>
                      {selectedQuote.notes && (
                        <div className="pt-2 text-neutral-500 border-t border-neutral-200">
                          {selectedQuote.notes}
                        </div>
                      )}
                    </div>

                    <div className="p-4 rounded-xl border border-neutral-200 bg-white space-y-1.5 text-xs">
                      <div className="flex justify-between text-neutral-500">
                        <span>Subtotal:</span>
                        <span className="font-mono">{formatCurrency(selectedQuote.subtotal)}</span>
                      </div>
                      {selectedQuote.discountTotal > 0 && (
                        <div className="flex justify-between text-rose-600">
                          <span>Discount:</span>
                          <span className="font-mono">-{formatCurrency(selectedQuote.discountTotal)}</span>
                        </div>
                      )}
                      <div className="flex justify-between text-neutral-500">
                        <span>GST @ 18%:</span>
                        <span className="font-mono">{formatCurrency(selectedQuote.taxTotal)}</span>
                      </div>
                      <div className="flex justify-between text-neutral-500">
                        <span>Freight:</span>
                        <span className="font-mono">{formatCurrency(selectedQuote.shippingFee)}</span>
                      </div>
                      <div className="border-t border-neutral-200 pt-2 flex justify-between font-bold text-sm text-neutral-900">
                        <span>Grand Total:</span>
                        <span className="font-mono text-primary text-base">
                          {formatCurrency(selectedQuote.grandTotal)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Drawer Footer Actions */}
              <div className="p-6 border-t border-neutral-200 bg-neutral-50 flex items-center justify-between">
                <button
                  onClick={() => setSelectedQuote(null)}
                  className="px-4 py-2.5 rounded-lg border border-neutral-300 text-neutral-700 text-sm font-semibold hover:bg-neutral-100"
                >
                  Close
                </button>
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      setToastMsg(`Simulated formal PDF print for ${selectedQuote.quoteNumber}`);
                      setTimeout(() => setToastMsg(null), 3000);
                    }}
                    className="px-4 py-2.5 rounded-lg border border-neutral-300 text-neutral-700 text-sm font-semibold hover:bg-neutral-100 flex items-center gap-1.5"
                  >
                    <Printer className="w-4 h-4" />
                    Print PDF
                  </button>
                  {selectedQuote.status !== "Accepted" && (
                    <button
                      onClick={() => {
                        updateQuoteStatus(selectedQuote.id, "Accepted");
                        setSelectedQuote({ ...selectedQuote, status: "Accepted" });
                        confetti({ particleCount: 50 });
                        setToastMsg(`Quote accepted! Factory order generated automatically in Operations pipeline.`);
                        setTimeout(() => setToastMsg(null), 4000);
                      }}
                      className="px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold flex items-center gap-1.5 shadow-sm"
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      Accept & Convert to Order
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}

export default function AdminQuotesPage() {
  return (
    <Suspense fallback={<div className="p-8 text-neutral-400">Loading Quotes...</div>}>
      <AdminQuotesContent />
    </Suspense>
  );
}
