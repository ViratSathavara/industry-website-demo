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
  Cpu
} from "lucide-react";
import confetti from "canvas-confetti";

function RequestSampleContent() {
  const searchParams = useSearchParams();
  const preselectedProductId = searchParams.get("productId");

  const { products, submitSampleRequest } = useDemoState();

  const [productId, setProductId] = useState<string>(
    preselectedProductId || products[0]?.id || "prod-eng-001"
  );
  const [quantity, setQuantity] = useState<number>(2);
  const [purpose, setPurpose] = useState<string>(
    "Lab Chemical Analysis & Dimension Verification"
  );
  const [company, setCompany] = useState<string>("Rao Precision Works");
  const [contactName, setContactName] = useState<string>("Anita Rao");
  const [phone, setPhone] = useState<string>("+91 98250 44120");
  const [email, setEmail] = useState<string>("anita@factory.in");
  const [shippingAddress, setShippingAddress] = useState<string>(
    "Plot 42, Industrial Zone, Pune, Maharashtra - 411018"
  );
  const [message, setMessage] = useState<string>(
    "Sample required for internal engineering fitment validation before issuing annual purchase order."
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
    <div className="min-h-screen flex flex-col bg-[#20272b] text-[#f5f0e7]">
      <Navbar />

      <main className="flex-1 pt-28 pb-20 relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-5 md:px-8 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-[#aeb5b2] font-mono mb-8">
            <Link href="/" className="hover:text-[#e7a45c] transition-colors">
              Home
            </Link>
            <ChevronRight size={13} className="text-[#7e8989]" />
            <Link href="/products" className="hover:text-[#e7a45c] transition-colors">
              Components
            </Link>
            <ChevronRight size={13} className="text-[#7e8989]" />
            <span className="text-[#f5f0e7] font-semibold">Request Engineering Sample</span>
          </div>

          <div className="text-center max-w-xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#e7a45c]/30 text-[#e7a45c] text-xs font-mono mb-4 bg-white/5">
              <Cpu size={14} />
              <span className="uppercase tracking-[.14em]">Pre-Production Prototype Validation</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-display tracking-tight text-[#f5f0e7]">
              Request Precision <em className="text-[#e7a45c]">Sample Piece.</em>
            </h1>
            <p className="text-xs sm:text-sm text-[#aeb5b2] mt-3">
              Request sample machining lots or proof components for laboratory chemical verification and CMM dimensional fitment.
            </p>
          </div>

          <div className="bg-[#171c1e] border border-white/10 p-6 sm:p-8 shadow-2xl">
            {isSubmitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="size-16 border border-[#e7a45c] text-[#e7a45c] flex items-center justify-center mx-auto bg-[#20272b]">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-2xl font-display text-[#f5f0e7]">
                  Sample Request Dispatched
                </h3>
                <p className="text-xs text-[#aeb5b2] font-mono">
                  Sample Tracking ID: <strong className="text-[#e7a45c]">{sampleRef}</strong>
                </p>
                <div className="bg-[#20272b] p-4 border border-white/10 max-w-md mx-auto text-left text-xs font-mono text-[#d2d1c9] space-y-1.5">
                  <div className="flex justify-between">
                    <span className="text-[#7e8989]">Component:</span>
                    <span className="text-[#f5f0e7] truncate max-w-[200px]">{selectedProduct.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#7e8989]">Quantity:</span>
                    <span className="text-[#e7a45c]">{quantity} pcs</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#7e8989]">Inspection Cert:</span>
                    <span className="text-[#f5f0e7]">EN 10204 3.1 & Zeiss CMM Included</span>
                  </div>
                </div>
                <p className="text-xs text-[#899492] max-w-md mx-auto">
                  Our application engineer will verify the technical drawings and coordinate courier dispatch within 48 business hours.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-3 bg-[#e7a45c] hover:bg-[#f4b875] text-[#20272b] text-xs font-mono font-bold transition-all"
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block text-[#d2d1c9] font-semibold mb-1.5 font-mono">
                    Select Target Component *
                  </label>
                  <select
                    value={productId}
                    onChange={(e) => setProductId(e.target.value)}
                    className="w-full bg-[#20272b] border border-white/15 p-2.5 text-[#f5f0e7] focus:outline-none focus:border-[#e7a45c]"
                  >
                    {products.map((p) => (
                      <option key={p.id} value={p.id} className="bg-[#20272b] text-[#f5f0e7]">
                        {p.name} ({p.sku})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#d2d1c9] font-semibold mb-1.5 font-mono">
                      Sample Quantity (Pieces) *
                    </label>
                    <input
                      type="number"
                      required
                      min={1}
                      max={10}
                      value={quantity}
                      onChange={(e) => setQuantity(Number(e.target.value))}
                      className="w-full bg-[#20272b] border border-white/15 p-2.5 text-[#f5f0e7] focus:outline-none focus:border-[#e7a45c] font-mono"
                    />
                  </div>
                  <div>
                    <label className="block text-[#d2d1c9] font-semibold mb-1.5 font-mono">
                      Validation Purpose *
                    </label>
                    <select
                      value={purpose}
                      onChange={(e) => setPurpose(e.target.value)}
                      className="w-full bg-[#20272b] border border-white/15 p-2.5 text-[#f5f0e7] focus:outline-none focus:border-[#e7a45c]"
                    >
                      <option value="Lab Chemical Analysis & Dimension Verification">
                        Lab Chemical Analysis & CMM Verification
                      </option>
                      <option value="Mechanical Assembly Fitment Test">
                        Mechanical Assembly Fitment Test
                      </option>
                      <option value="Destructive Pressure Proof Testing">
                        Destructive Pressure Proof Testing
                      </option>
                      <option value="Customer OEM Approval Board">Customer OEM Approval Board</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#d2d1c9] font-semibold mb-1.5 font-mono">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full bg-[#20272b] border border-white/15 p-2.5 text-[#f5f0e7] focus:outline-none focus:border-[#e7a45c]"
                    />
                  </div>
                  <div>
                    <label className="block text-[#d2d1c9] font-semibold mb-1.5 font-mono">
                      Contact Person *
                    </label>
                    <input
                      type="text"
                      required
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      className="w-full bg-[#20272b] border border-white/15 p-2.5 text-[#f5f0e7] focus:outline-none focus:border-[#e7a45c]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#d2d1c9] font-semibold mb-1.5 font-mono">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-[#20272b] border border-white/15 p-2.5 text-[#f5f0e7] focus:outline-none focus:border-[#e7a45c] font-mono"
                    />
                  </div>
                  <div>
                    <label className="block text-[#d2d1c9] font-semibold mb-1.5 font-mono">
                      Official Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-[#20272b] border border-white/15 p-2.5 text-[#f5f0e7] focus:outline-none focus:border-[#e7a45c]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#d2d1c9] font-semibold mb-1.5 font-mono">
                    Sample Shipping Address *
                  </label>
                  <input
                    type="text"
                    required
                    value={shippingAddress}
                    onChange={(e) => setShippingAddress(e.target.value)}
                    className="w-full bg-[#20272b] border border-white/15 p-2.5 text-[#f5f0e7] focus:outline-none focus:border-[#e7a45c]"
                  />
                </div>

                <div>
                  <label className="block text-[#d2d1c9] font-semibold mb-1.5 font-mono">
                    Fitment Specifications & Notes
                  </label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-[#20272b] border border-white/15 p-2.5 text-[#f5f0e7] focus:outline-none focus:border-[#e7a45c]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#e46e2e] hover:bg-[#f38b43] text-[#fff5e9] text-xs font-bold uppercase tracking-[.12em] font-mono transition-all flex items-center justify-center gap-2"
                  >
                    <Send size={15} />
                    <span>Submit Sample Request to Plant Desk</span>
                  </button>
                </div>
              </form>
            )}
          </div>
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
        <div className="min-h-screen bg-[#20272b] flex items-center justify-center text-xs font-mono text-[#e7a45c]">
          Loading Sample Request Form...
        </div>
      }
    >
      <RequestSampleContent />
    </Suspense>
  );
}
