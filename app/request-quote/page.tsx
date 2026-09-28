"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { useDemoState } from "@/lib/services/demo-state-context";
import {
  FileText,
  Package,
  Layers,
  Calendar,
  Building,
  Upload,
  CheckCircle2,
  ChevronRight,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  ShieldCheck,
  Clock
} from "lucide-react";
import confetti from "canvas-confetti";

function RequestQuoteContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const preselectedProductId = searchParams.get("productId");

  const { products, selectedIndustry, submitRFQ } = useDemoState();

  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [createdRfq, setCreatedRfq] = useState<any>(null);

  // Form State
  const [selectedProductId, setSelectedProductId] = useState<string>(
    preselectedProductId || products[0]?.id || "prod-eng-001"
  );
  const [quantity, setQuantity] = useState<number>(100);
  const [unit, setUnit] = useState<string>("Pieces");
  const [material, setMaterial] = useState<string>("Stainless Steel 316L");
  const [dimensions, setDimensions] = useState<string>("Standard catalog or as per attached drawing");
  const [tolerance, setTolerance] = useState<string>("Precision (±0.05 mm)");
  const [targetDate, setTargetDate] = useState<string>("2026-10-25");
  const [deliveryLocation, setDeliveryLocation] = useState<string>("Mehsana, Gujarat");
  const [application, setApplication] = useState<string>("Refinery Expansion Project");
  const [budget, setBudget] = useState<number>(450000);
  const [notes, setNotes] = useState<string>("Require EN 10204 3.1 MTC inspection certificate with consignment.");
  const [mockFileName, setMockFileName] = useState<string>("cad-drawing-rev-c.dwg");

  // Company Details
  const [companyName, setCompanyName] = useState<string>("Shree Shakti Engineering Works");
  const [contactPerson, setContactPerson] = useState<string>("Rajeshbhai Patel");
  const [designation, setDesignation] = useState<string>("Managing Director");
  const [phone, setPhone] = useState<string>("+91 98250 44120");
  const [email, setEmail] = useState<string>("rajesh@shreeshaktieng.com");
  const [gstNumber, setGstNumber] = useState<string>("24AAACS1234F1Z8");
  const [billingAddress, setBillingAddress] = useState<string>("Plot 42, GIDC Phase II, Mehsana, Gujarat");

  useEffect(() => {
    if (preselectedProductId) {
      setSelectedProductId(preselectedProductId);
    }
  }, [preselectedProductId]);

  const selectedProduct = products.find((p) => p.id === selectedProductId) || products[0];

  const handleNext = () => {
    if (currentStep < 6) setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const newRFQ = submitRFQ({
        companyName,
        contactPerson,
        designation,
        phone,
        email,
        industry: selectedIndustry.name,
        items: [
          {
            productId: selectedProduct.id,
            productName: selectedProduct.name,
            quantity: Number(quantity),
            unit,
            customSpecs: `Material: ${material} | Dimensions: ${dimensions} | Tolerance: ${tolerance}`
          }
        ],
        deliveryLocation,
        targetDate,
        application,
        budget: Number(budget),
        notes,
        attachedFile: mockFileName,
        assignedTo: "Vikram Mehta (Sales Manager)"
      });

      try {
        confetti({
          particleCount: 70,
          spread: 80,
          origin: { y: 0.6 }
        });
      } catch {}

      setCreatedRfq(newRFQ);
      setIsSubmitting(false);
    }, 700);
  };

  const stepsList = [
    { num: 1, title: "Product" },
    { num: 2, title: "Specifications" },
    { num: 3, title: "Delivery" },
    { num: 4, title: "Company" },
    { num: 5, title: "Files" },
    { num: 6, title: "Review" }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#fafaf8]">
      <Navbar />

      <main className="flex-1 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-1.5 text-xs text-stone-500 mb-6">
            <Link href="/" className="hover:text-stone-900">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-stone-900 font-semibold">Request a Quote (RFQ)</span>
          </div>

          {/* Heading */}
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#d4560a]">
              Direct Factory Sourcing
            </span>
            <h1 className="text-3xl font-extrabold text-stone-900 tracking-tight mt-1">
              Multi-Step RFQ Builder
            </h1>
            <p className="text-xs sm:text-sm text-stone-600 mt-1">
              Configure technical tolerances, material grades, and delivery milestones.
            </p>
          </div>

          {/* If Submitted successfully: Confirmation Timeline View */}
          {createdRfq ? (
            <div className="bg-white rounded-2xl border border-stone-200 p-8 shadow-lg text-center space-y-6 animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs uppercase font-bold text-stone-400 tracking-wider">
                  Request for Quotation Submitted
                </span>
                <h2 className="text-2xl font-bold text-stone-900 mt-1">
                  RFQ Reference: <span className="text-[#d4560a] font-mono">{createdRfq.rfqNumber}</span>
                </h2>
                <p className="text-xs text-stone-500 mt-1">
                  Submitted on {createdRfq.createdAt} for {createdRfq.companyName}
                </p>
              </div>

              {/* Status Timeline */}
              <div className="max-w-md mx-auto bg-stone-50 p-4 rounded-xl border border-stone-200 text-left text-xs space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px] font-bold">
                    ✓
                  </div>
                  <div>
                    <strong className="text-stone-900 block">RFQ Logged in Factory CRM</strong>
                    <span className="text-stone-500 text-[11px]">Requirement details captured</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-amber-500 text-white flex items-center justify-center text-[10px] font-bold">
                    2
                  </div>
                  <div>
                    <strong className="text-stone-900 block">Application Engineer Review</strong>
                    <span className="text-stone-500 text-[11px]">
                      Assigned to Vikram Mehta (Expected response in 4 hours)
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 opacity-60">
                  <div className="w-6 h-6 rounded-full bg-stone-300 text-stone-700 flex items-center justify-center text-[10px] font-bold">
                    3
                  </div>
                  <div>
                    <strong className="text-stone-900 block">Formal Quotation Issued</strong>
                    <span className="text-stone-500 text-[11px]">
                      Review line items & accept digitally in Customer Portal
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
                <Link
                  href="/portal/rfqs"
                  className="px-6 py-3 rounded-xl bg-[#d4560a] text-white text-xs font-bold hover:bg-[#b84605] shadow-md transition-colors"
                >
                  View in Customer Portal
                </Link>

                <button
                  onClick={() => {
                    setCreatedRfq(null);
                    setCurrentStep(1);
                  }}
                  className="px-6 py-3 rounded-xl border border-stone-300 text-stone-700 text-xs font-bold hover:bg-stone-50 transition-colors"
                >
                  Create Another RFQ
                </button>
              </div>
            </div>
          ) : (
            /* Multi-step Container */
            <div className="bg-white rounded-2xl border border-stone-200 shadow-md overflow-hidden">
              {/* Stepper Navigation */}
              <div className="border-b border-stone-200 bg-stone-50 px-4 py-3 sm:px-6">
                <div className="flex items-center justify-between">
                  {stepsList.map((st) => (
                    <div
                      key={st.num}
                      className="flex items-center gap-1.5 cursor-pointer"
                      onClick={() => setCurrentStep(st.num)}
                    >
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                          currentStep === st.num
                            ? "bg-[#d4560a] text-white"
                            : currentStep > st.num
                            ? "bg-emerald-600 text-white"
                            : "bg-stone-200 text-stone-600"
                        }`}
                      >
                        {currentStep > st.num ? "✓" : st.num}
                      </div>
                      <span
                        className={`text-xs font-medium hidden sm:inline ${
                          currentStep === st.num ? "text-stone-900 font-bold" : "text-stone-500"
                        }`}
                      >
                        {st.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step Forms */}
              <div className="p-6 sm:p-8">
                {/* STEP 1: Product Selection */}
                {currentStep === 1 && (
                  <div className="space-y-4">
                    <h3 className="text-base font-bold text-stone-900">
                      Step 1: Select Component or Machine
                    </h3>
                    <p className="text-xs text-stone-500">
                      Choose from our catalogue or enter a custom requirement for {selectedIndustry.name}:
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-80 overflow-y-auto pr-1">
                      {products.map((p) => {
                        const isChosen = p.id === selectedProductId;
                        return (
                          <div
                            key={p.id}
                            onClick={() => setSelectedProductId(p.id)}
                            className={`p-3 rounded-xl border cursor-pointer transition-all flex items-start gap-3 ${
                              isChosen
                                ? "border-[#d4560a] bg-orange-50/60 ring-2 ring-[#d4560a]/20"
                                : "border-stone-200 hover:border-stone-300 hover:bg-stone-50"
                            }`}
                          >
                            <div className="relative w-14 h-14 rounded-lg overflow-hidden shrink-0 bg-stone-100">
                              <Image src={p.images[0]} alt={p.name} fill className="object-cover" />
                            </div>
                            <div className="flex-1">
                              <span className="text-[10px] font-mono text-stone-400">{p.sku}</span>
                              <h4 className="font-bold text-xs text-stone-900 line-clamp-1">
                                {p.name}
                              </h4>
                              <span className="text-[11px] text-stone-500 block">
                                MOQ: {p.moq}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* STEP 2: Technical Specifications */}
                {currentStep === 2 && (
                  <div className="space-y-4 text-xs">
                    <h3 className="text-base font-bold text-stone-900">
                      Step 2: Technical Specifications & Dimensions
                    </h3>
                    <p className="text-xs text-stone-500">
                      Specify material grade, tolerances, and surface treatments:
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-stone-700 font-semibold mb-1">
                          Material Grade
                        </label>
                        <select
                          value={material}
                          onChange={(e) => setMaterial(e.target.value)}
                          className="w-full bg-stone-50 border border-stone-300 rounded-lg p-2.5 text-stone-800 focus:outline-none focus:border-[#d4560a]"
                        >
                          <option value="Stainless Steel 316L">Stainless Steel 316 / 316L</option>
                          <option value="Stainless Steel 304">Stainless Steel 304</option>
                          <option value="Mild Steel IS 2062">Mild Steel (IS 2062 Grade E250)</option>
                          <option value="Alloy Steel SAE 4140">Alloy Steel SAE 4140 / EN19</option>
                          <option value="Boron Steel Heat Treated">High Carbon Boron Steel (50 HRC)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-stone-700 font-semibold mb-1">
                          Tolerance Requirement
                        </label>
                        <select
                          value={tolerance}
                          onChange={(e) => setTolerance(e.target.value)}
                          className="w-full bg-stone-50 border border-stone-300 rounded-lg p-2.5 text-stone-800 focus:outline-none focus:border-[#d4560a]"
                        >
                          <option value="Precision (±0.05 mm)">Precision (±0.05 mm)</option>
                          <option value="High-Precision (±0.01 mm)">High-Precision (±0.01 mm)</option>
                          <option value="Standard Commercial (±0.5 mm)">Standard Commercial (±0.5 mm)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-stone-700 font-semibold mb-1">
                        Overall Dimensions / Scope Description
                      </label>
                      <input
                        type="text"
                        value={dimensions}
                        onChange={(e) => setDimensions(e.target.value)}
                        className="w-full bg-stone-50 border border-stone-300 rounded-lg p-2.5 text-stone-800 focus:outline-none focus:border-[#d4560a]"
                      />
                    </div>
                  </div>
                )}

                {/* STEP 3: Quantity & Delivery */}
                {currentStep === 3 && (
                  <div className="space-y-4 text-xs">
                    <h3 className="text-base font-bold text-stone-900">
                      Step 3: Quantity & Delivery Schedule
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-stone-700 font-semibold mb-1">
                          Target Quantity *
                        </label>
                        <input
                          type="number"
                          value={quantity}
                          onChange={(e) => setQuantity(Number(e.target.value))}
                          className="w-full bg-stone-50 border border-stone-300 rounded-lg p-2.5 text-stone-800 focus:outline-none focus:border-[#d4560a]"
                        />
                      </div>
                      <div>
                        <label className="block text-stone-700 font-semibold mb-1">Unit of Measure</label>
                        <select
                          value={unit}
                          onChange={(e) => setUnit(e.target.value)}
                          className="w-full bg-stone-50 border border-stone-300 rounded-lg p-2.5 text-stone-800 focus:outline-none focus:border-[#d4560a]"
                        >
                          <option value="Pieces">Pieces</option>
                          <option value="Sets">Sets</option>
                          <option value="Metric Tons">Metric Tons</option>
                          <option value="Meters">Meters</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-stone-700 font-semibold mb-1">
                          Required Delivery Date
                        </label>
                        <input
                          type="date"
                          value={targetDate}
                          onChange={(e) => setTargetDate(e.target.value)}
                          className="w-full bg-stone-50 border border-stone-300 rounded-lg p-2.5 text-stone-800 focus:outline-none focus:border-[#d4560a]"
                        />
                      </div>
                      <div>
                        <label className="block text-stone-700 font-semibold mb-1">
                          Delivery City & State
                        </label>
                        <input
                          type="text"
                          value={deliveryLocation}
                          onChange={(e) => setDeliveryLocation(e.target.value)}
                          className="w-full bg-stone-50 border border-stone-300 rounded-lg p-2.5 text-stone-800 focus:outline-none focus:border-[#d4560a]"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 4: Company Details */}
                {currentStep === 4 && (
                  <div className="space-y-4 text-xs">
                    <h3 className="text-base font-bold text-stone-900">
                      Step 4: Buyer & Company Information
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-stone-700 font-semibold mb-1">
                          Company Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={companyName}
                          onChange={(e) => setCompanyName(e.target.value)}
                          className="w-full bg-stone-50 border border-stone-300 rounded-lg p-2.5 text-stone-800 focus:outline-none focus:border-[#d4560a]"
                        />
                      </div>
                      <div>
                        <label className="block text-stone-700 font-semibold mb-1">
                          GST / Tax ID Number
                        </label>
                        <input
                          type="text"
                          value={gstNumber}
                          onChange={(e) => setGstNumber(e.target.value)}
                          className="w-full bg-stone-50 border border-stone-300 rounded-lg p-2.5 text-stone-800 focus:outline-none focus:border-[#d4560a]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-stone-700 font-semibold mb-1">
                          Contact Person *
                        </label>
                        <input
                          type="text"
                          required
                          value={contactPerson}
                          onChange={(e) => setContactPerson(e.target.value)}
                          className="w-full bg-stone-50 border border-stone-300 rounded-lg p-2.5 text-stone-800 focus:outline-none focus:border-[#d4560a]"
                        />
                      </div>
                      <div>
                        <label className="block text-stone-700 font-semibold mb-1">
                          Mobile / WhatsApp *
                        </label>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full bg-stone-50 border border-stone-300 rounded-lg p-2.5 text-stone-800 focus:outline-none focus:border-[#d4560a]"
                        />
                      </div>
                      <div>
                        <label className="block text-stone-700 font-semibold mb-1">
                          Official Work Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full bg-stone-50 border border-stone-300 rounded-lg p-2.5 text-stone-800 focus:outline-none focus:border-[#d4560a]"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 5: Attachments & Notes */}
                {currentStep === 5 && (
                  <div className="space-y-4 text-xs">
                    <h3 className="text-base font-bold text-stone-900">
                      Step 5: CAD Drawings & Technical Notes
                    </h3>

                    <div className="border-2 border-dashed border-stone-300 rounded-xl p-6 text-center bg-stone-50 hover:bg-stone-100 transition-colors">
                      <Upload className="w-8 h-8 text-[#d4560a] mx-auto mb-2" />
                      <h4 className="font-bold text-stone-900 text-xs">Attach 2D/3D Drawings or RFQ PDF</h4>
                      <p className="text-[11px] text-stone-500 mt-1">
                        Accepts DWG, DXF, STEP, IGES, and PDF (Demo Simulated Upload)
                      </p>
                      <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-stone-300 rounded-lg font-mono text-[11px] text-stone-700">
                        <span>Simulated File: {mockFileName}</span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-stone-700 font-semibold mb-1">
                        Special Instructions / Quality Test Requirements
                      </label>
                      <textarea
                        rows={3}
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        className="w-full bg-stone-50 border border-stone-300 rounded-lg p-2.5 text-stone-800 focus:outline-none focus:border-[#d4560a]"
                      />
                    </div>
                  </div>
                )}

                {/* STEP 6: Review & Submit */}
                {currentStep === 6 && (
                  <div className="space-y-4 text-xs">
                    <h3 className="text-base font-bold text-stone-900">
                      Step 6: Review Summary & Submit RFQ
                    </h3>

                    <div className="bg-stone-50 rounded-xl p-4 border border-stone-200 space-y-3">
                      <div className="flex justify-between items-center pb-2 border-b border-stone-200">
                        <span className="font-semibold text-stone-500">Target Product:</span>
                        <strong className="text-stone-900 text-right">{selectedProduct.name}</strong>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b border-stone-200">
                        <span className="font-semibold text-stone-500">Quantity:</span>
                        <strong className="text-stone-900">{quantity} {unit}</strong>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b border-stone-200">
                        <span className="font-semibold text-stone-500">Material & Tolerance:</span>
                        <strong className="text-stone-900">{material} ({tolerance})</strong>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b border-stone-200">
                        <span className="font-semibold text-stone-500">Delivery Destination:</span>
                        <strong className="text-stone-900">{deliveryLocation}</strong>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b border-stone-200">
                        <span className="font-semibold text-stone-500">Buyer Company:</span>
                        <strong className="text-stone-900">{companyName} ({contactPerson})</strong>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-stone-500">Contact:</span>
                        <strong className="text-stone-900">{phone} | {email}</strong>
                      </div>
                    </div>

                    <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-200 text-emerald-800 flex items-center gap-2">
                      <ShieldCheck className="w-5 h-5 shrink-0" />
                      <span>
                        Submitting generates a live RFQ record visible immediately in your Customer Portal and the Admin CRM.
                      </span>
                    </div>
                  </div>
                )}

                {/* Footer Navigation Buttons */}
                <div className="pt-6 border-t border-stone-200 mt-6 flex items-center justify-between">
                  {currentStep > 1 ? (
                    <button
                      type="button"
                      onClick={handleBack}
                      className="px-4 py-2 rounded-lg border border-stone-300 text-stone-700 hover:bg-stone-50 text-xs font-semibold flex items-center gap-1.5"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Back</span>
                    </button>
                  ) : (
                    <div />
                  )}

                  {currentStep < 6 ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="px-5 py-2.5 rounded-lg bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold flex items-center gap-1.5"
                    >
                      <span>Continue</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <button
                      type="button"
                      disabled={isSubmitting}
                      onClick={handleSubmit}
                      className="px-6 py-2.5 rounded-lg bg-[#d4560a] hover:bg-[#b84605] text-white text-xs font-bold shadow-md flex items-center gap-2"
                    >
                      {isSubmitting ? (
                        <span>Submitting RFQ...</span>
                      ) : (
                        <>
                          <CheckCircle2 className="w-4 h-4" />
                          <span>Submit Official RFQ</span>
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default function RequestQuotePage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#fafaf8] flex items-center justify-center text-xs font-mono text-neutral-400">
          Loading Custom RFQ Builder...
        </div>
      }
    >
      <RequestQuoteContent />
    </Suspense>
  );
}
