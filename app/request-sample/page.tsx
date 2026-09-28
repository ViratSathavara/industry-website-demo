"use client";

import React, { useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { useDemoState } from "@/lib/services/demo-state-context";
import {
  Package,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  Send,
  Building
} from "lucide-react";
import confetti from "canvas-confetti";

function RequestSampleContent() {
  const searchParams = useSearchParams();
  const preselectedProductId = searchParams.get("productId");

  const { products, selectedIndustry, submitSampleRequest } = useDemoState();

  const [productId, setProductId] = useState<string>(
    preselectedProductId || products[0]?.id || "prod-eng-001"
  );
  const [quantity, setQuantity] = useState<number>(2);
  const [purpose, setPurpose] = useState<string>("Lab Chemical Analysis & Dimension Verification");
  const [company, setCompany] = useState<string>("Shree Shakti Engineering Works");
  const [contactName, setContactName] = useState<string>("Rajeshbhai Patel");
  const [phone, setPhone] = useState<string>("+91 98250 44120");
  const [email, setEmail] = useState<string>("rajesh@shreeshaktieng.com");
  const [shippingAddress, setShippingAddress] = useState<string>(
    "Plot 42, GIDC Phase II, Mehsana, Gujarat - 384002"
  );
  const [message, setMessage] = useState<string>(
    "Sample required for internal engineering fitment validation before issuing purchase order."
  );

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [sampleRef, setSampleRef] = useState<string>("");

  const selectedProduct = products.find((p) => p.id === productId) || products[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const created = submitSampleRequest({
      productId: selectedProduct.id,
      productName: selectedProduct.name,
      quantity: Number(quantity),
      purpose,
      company,
      contactName,
      phone,
      email,
      shippingAddress,
      message
    });

    try {
      confetti({ particleCount: 40, spread: 60 });
    } catch {}

    setSampleRef(created.requestNumber);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fafaf8]">
      <Navbar />

      <main className="flex-1 py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1.5 text-xs text-stone-500 mb-6">
            <Link href="/" className="hover:text-stone-900">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/products" className="hover:text-stone-900">Products</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-stone-900 font-semibold">Request Product Sample</span>
          </div>

          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
              Evaluation & Trial Lots
            </span>
            <h1 className="text-3xl font-extrabold text-stone-900 tracking-tight mt-2">
              Request Technical Product Sample
            </h1>
            <p className="text-xs sm:text-sm text-stone-600 mt-1">
              Verify material hardness, chemical assay, dimensional fit, and surface finish before volume order commitment.
            </p>
          </div>

          {isSubmitted ? (
            <div className="bg-white rounded-2xl border border-stone-200 p-8 text-center space-y-4 shadow-md">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold text-stone-900">Sample Request Logged!</h2>
              <p className="text-xs text-stone-500">
                Sample Reference: <strong className="text-[#d4560a] font-mono text-sm">{sampleRef}</strong>
              </p>
              <div className="bg-stone-50 p-4 rounded-xl border border-stone-200 text-xs text-left max-w-md mx-auto space-y-2">
                <div><strong>Product:</strong> {selectedProduct.name}</div>
                <div><strong>Sample Quantity:</strong> {quantity} units</div>
                <div><strong>Dispatch Destination:</strong> {shippingAddress}</div>
                <div><strong>Status:</strong> Under Technical Review by Plant Manager</div>
              </div>
              <div className="pt-2 flex justify-center gap-3">
                <Link
                  href="/portal/dashboard"
                  className="px-5 py-2.5 rounded-lg bg-[#d4560a] text-white text-xs font-bold hover:bg-[#b84605]"
                >
                  View in Customer Portal
                </Link>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-5 py-2.5 rounded-lg border border-stone-300 text-stone-700 text-xs font-bold hover:bg-stone-50"
                >
                  Request Another
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-4 shadow-sm text-xs">
              <div>
                <label className="block text-stone-700 font-semibold mb-1">Select Product for Sample *</label>
                <select
                  value={productId}
                  onChange={(e) => setProductId(e.target.value)}
                  className="w-full bg-stone-50 border border-stone-300 rounded-lg p-2.5 text-stone-800 focus:outline-none focus:border-[#d4560a]"
                >
                  {products.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.name} ({p.sku})
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-stone-700 font-semibold mb-1">Sample Quantity *</label>
                  <input
                    type="number"
                    min="1"
                    max="10"
                    required
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="w-full bg-stone-50 border border-stone-300 rounded-lg p-2.5 text-stone-800 focus:outline-none focus:border-[#d4560a]"
                  />
                </div>
                <div>
                  <label className="block text-stone-700 font-semibold mb-1">Evaluation Purpose *</label>
                  <select
                    value={purpose}
                    onChange={(e) => setPurpose(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-300 rounded-lg p-2.5 text-stone-800 focus:outline-none focus:border-[#d4560a]"
                  >
                    <option value="Lab Chemical Analysis & Dimension Verification">Lab Chemical Analysis & Dimension Verification</option>
                    <option value="Field Trial Fitment on Machinery">Field Trial Fitment on Machinery</option>
                    <option value="Drop Impact & Packaging Stress Testing">Drop Impact & Packaging Stress Testing</option>
                    <option value="Customer Presentation & Sourcing Board Approval">Customer Presentation & Sourcing Board Approval</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-stone-700 font-semibold mb-1">Company Name *</label>
                  <input
                    type="text"
                    required
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-300 rounded-lg p-2.5 text-stone-800 focus:outline-none focus:border-[#d4560a]"
                  />
                </div>
                <div>
                  <label className="block text-stone-700 font-semibold mb-1">Contact Person Name *</label>
                  <input
                    type="text"
                    required
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-300 rounded-lg p-2.5 text-stone-800 focus:outline-none focus:border-[#d4560a]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-stone-700 font-semibold mb-1">Mobile / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-300 rounded-lg p-2.5 text-stone-800 focus:outline-none focus:border-[#d4560a]"
                  />
                </div>
                <div>
                  <label className="block text-stone-700 font-semibold mb-1">Official Work Email *</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-300 rounded-lg p-2.5 text-stone-800 focus:outline-none focus:border-[#d4560a]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-stone-700 font-semibold mb-1">Complete Courier Shipping Address *</label>
                <textarea
                  rows={2}
                  required
                  value={shippingAddress}
                  onChange={(e) => setShippingAddress(e.target.value)}
                  className="w-full bg-stone-50 border border-stone-300 rounded-lg p-2.5 text-stone-800 focus:outline-none focus:border-[#d4560a]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#d4560a] hover:bg-[#b84605] text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Submit Product Sample Request</span>
              </button>
            </form>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default function RequestSamplePage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#fafaf8] flex items-center justify-center text-xs font-mono text-neutral-400">
          Loading Sample Request...
        </div>
      }
    >
      <RequestSampleContent />
    </Suspense>
  );
}
