"use client";

import React, { useState, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { useDemoState } from "@/lib/services/demo-state-context";
import {
  Upload,
  CheckCircle2,
  ChevronRight,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  Cpu
} from "lucide-react";
import confetti from "canvas-confetti";

function RequestQuoteContent() {
  const searchParams = useSearchParams();
  const preselectedProductId = searchParams.get("productId");

  const { products, submitRFQ } = useDemoState();

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
  const [dimensions, setDimensions] = useState<string>(
    "Standard catalog or as per attached drawing"
  );
  const [tolerance, setTolerance] = useState<string>("Precision (±0.05 mm)");
  const [targetDate, setTargetDate] = useState<string>("2026-10-25");
  const [deliveryLocation, setDeliveryLocation] = useState<string>("Pune, Maharashtra");
  const [notes, setNotes] = useState<string>(
    "Require EN 10204 3.1 MTC inspection certificate with consignment."
  );
  const [mockFileName] = useState<string>("cad-drawing-rev-c.dwg");

  // Company Details
  const [companyName, setCompanyName] = useState<string>("Rao Precision Works");
  const [gstNumber, setGstNumber] = useState<string>("27AABCP1234F1Z5");
  const [contactPerson, setContactPerson] = useState<string>("Anita Rao");
  const [phone, setPhone] = useState<string>("+91 98250 44120");
  const [email, setEmail] = useState<string>("anita@factory.in");

  const selectedProduct =
    products.find((p) => p.id === selectedProductId) || products[0];

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
      const newRfq = submitRFQ({
        customerId: "cust-direct",
        companyName,
        contactPerson,
        email,
        phone,
        industry: "Precision Manufacturing",
        deliveryLocation,
        targetDate,
        notes,
        attachedFile: mockFileName,
        assignedTo: "Technical Sales Team",
        items: [
          {
            productId: selectedProduct.id,
            productName: selectedProduct.name,
            quantity,
            unit,
            customSpecs: `${material} (${tolerance})`
          }
        ]
      });

      setCreatedRfq(newRfq);
      setIsSubmitting(false);

      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.6 }
        });
      } catch {
        // Confetti fallback
      }
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
    <div className="min-h-screen flex flex-col bg-[#20272b] text-[#f5f0e7]">
      <Navbar />

      <main className="flex-1 pt-28 pb-20 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-5 md:px-8 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-[#aeb5b2] font-mono mb-8">
            <Link href="/" className="hover:text-[#e7a45c] transition-colors">
              Home
            </Link>
            <ChevronRight size={13} className="text-[#7e8989]" />
            <span className="text-[#f5f0e7] font-semibold">Request a Quote (RFQ)</span>
          </div>

          {/* Heading */}
          <div className="text-center max-w-xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#e7a45c]/30 text-[#e7a45c] text-xs font-mono mb-4 bg-white/5">
              <Cpu size={14} />
              <span className="uppercase tracking-[.14em]">Direct Factory Estimation</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-display tracking-tight text-[#f5f0e7]">
              Precision RFQ <em className="text-[#e7a45c]">Configurator.</em>
            </h1>
            <p className="text-xs sm:text-sm text-[#aeb5b2] mt-3">
              Configure engineering tolerances, material alloys, and volume delivery schedules.
            </p>
          </div>

          {/* If Submitted successfully: Confirmation Timeline View */}
          {createdRfq ? (
            <div className="bg-[#171c1e] border border-white/10 p-8 shadow-2xl text-center space-y-6 animate-in zoom-in-95 duration-200">
              <div className="size-16 border border-[#e7a45c] text-[#e7a45c] flex items-center justify-center mx-auto bg-[#20272b]">
                <CheckCircle2 size={32} />
              </div>

              <div>
                <span className="text-xs uppercase font-mono font-bold text-[#899492] tracking-wider">
                  Request for Quotation Successfully Dispatched
                </span>
                <h2 className="text-2xl font-display text-[#f5f0e7] mt-1">
                  RFQ Reference: <span className="text-[#e7a45c] font-mono">{createdRfq.rfqNumber}</span>
                </h2>
                <p className="text-xs text-[#aeb5b2] mt-1 font-mono">
                  Submitted for {createdRfq.companyName}
                </p>
              </div>

              {/* Status Timeline */}
              <div className="max-w-md mx-auto bg-[#20272b] p-5 border border-white/10 text-left text-xs space-y-4 font-mono">
                <div className="flex items-center gap-3">
                  <div className="size-6 bg-[#e7a45c] text-[#20272b] flex items-center justify-center text-[10px] font-bold">
                    ✓
                  </div>
                  <div>
                    <strong className="text-[#f5f0e7] block">RFQ Logged with Plant Engineering</strong>
                    <span className="text-[#899492] text-[11px]">Requirement parameters verified</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="size-6 bg-[#e46e2e] text-[#fff5e9] flex items-center justify-center text-[10px] font-bold">
                    2
                  </div>
                  <div>
                    <strong className="text-[#f5f0e7] block">CAM Toolpath & Material Feasibility</strong>
                    <span className="text-[#899492] text-[11px]">
                      Assigned to Engineering Lead (Expected response in 4 hours)
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 opacity-60">
                  <div className="size-6 bg-white/10 text-[#aeb5b2] flex items-center justify-center text-[10px] font-bold">
                    3
                  </div>
                  <div>
                    <strong className="text-[#f5f0e7] block">Formal Commercial Estimation</strong>
                    <span className="text-[#899492] text-[11px]">
                      Official line-item quotation dispatched via encrypted email
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
                <Link
                  href="/products"
                  className="px-6 py-3.5 bg-[#e46e2e] hover:bg-[#f38b43] text-[#fff5e9] text-xs font-bold uppercase tracking-[.1em] transition-all font-mono"
                >
                  Return to Component Catalog
                </Link>

                <button
                  onClick={() => {
                    setCreatedRfq(null);
                    setCurrentStep(1);
                  }}
                  className="px-6 py-3.5 border border-white/10 text-[#f5f0e7] text-xs font-semibold hover:bg-white/5 transition-all font-mono"
                >
                  Configure Another RFQ
                </button>
              </div>
            </div>
          ) : (
            /* Multi-step Container */
            <div className="bg-[#171c1e] border border-white/10 shadow-2xl overflow-hidden">
              {/* Stepper Navigation */}
              <div className="border-b border-white/10 bg-[#121618] px-4 py-3.5 sm:px-6">
                <div className="flex items-center justify-between">
                  {stepsList.map((st) => (
                    <div
                      key={st.num}
                      className="flex items-center gap-2 cursor-pointer font-mono"
                      onClick={() => setCurrentStep(st.num)}
                    >
                      <div
                        className={`size-6 flex items-center justify-center text-xs font-bold transition-all ${
                          currentStep === st.num
                            ? "bg-[#e7a45c] text-[#20272b]"
                            : currentStep > st.num
                            ? "bg-[#e46e2e] text-[#fff5e9]"
                            : "bg-white/5 text-[#7e8989]"
                        }`}
                      >
                        {currentStep > st.num ? "✓" : st.num}
                      </div>
                      <span
                        className={`text-xs font-medium hidden sm:inline ${
                          currentStep === st.num ? "text-[#f5f0e7] font-bold" : "text-[#7e8989]"
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
                    <h3 className="text-base font-bold text-[#f5f0e7]">
                      Step 1: Select Component Family
                    </h3>
                    <p className="text-xs text-[#aeb5b2]">
                      Choose from our standard manufactured lines or select a base component to customize:
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-80 overflow-y-auto pr-1">
                      {products.map((p) => {
                        const isChosen = p.id === selectedProductId;
                        return (
                          <div
                            key={p.id}
                            onClick={() => setSelectedProductId(p.id)}
                            className={`p-3.5 border cursor-pointer transition-all flex items-start gap-3.5 ${
                              isChosen
                                ? "border-[#e7a45c] bg-[#293337]"
                                : "border-white/10 hover:border-white/20 bg-[#20272b]"
                            }`}
                          >
                            <div className="relative size-14 shrink-0 bg-[#171c1e] overflow-hidden">
                              <Image
                                src={p.images[0]}
                                alt={p.name}
                                fill
                                unoptimized={p.images[0].endsWith(".svg")}
                                className="object-cover"
                              />
                            </div>
                            <div className="flex-1">
                              <span className="text-[10px] font-mono text-[#e7a45c]">{p.sku}</span>
                              <h4 className="font-semibold text-xs text-[#f5f0e7] line-clamp-1">
                                {p.name}
                              </h4>
                              <span className="text-[11px] text-[#899492] block font-mono">
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
                    <h3 className="text-base font-bold text-[#f5f0e7]">
                      Step 2: Technical Specifications & Dimensions
                    </h3>
                    <p className="text-xs text-[#aeb5b2]">
                      Specify raw alloy grade, machine tolerances, and surface finish:
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[#d2d1c9] font-semibold mb-1.5 font-mono">
                          Material Grade
                        </label>
                        <select
                          value={material}
                          onChange={(e) => setMaterial(e.target.value)}
                          className="w-full bg-[#20272b] border border-white/15 p-2.5 text-[#f5f0e7] focus:outline-none focus:border-[#e7a45c]"
                        >
                          <option value="Stainless Steel 316L" className="bg-[#20272b] text-[#f5f0e7]">Stainless Steel 316 / 316L</option>
                          <option value="Stainless Steel 304" className="bg-[#20272b] text-[#f5f0e7]">Stainless Steel 304</option>
                          <option value="Mild Steel IS 2062" className="bg-[#20272b] text-[#f5f0e7]">Mild Steel (IS 2062 Grade E250)</option>
                          <option value="Alloy Steel SAE 4140" className="bg-[#20272b] text-[#f5f0e7]">Alloy Steel SAE 4140 / EN19</option>
                          <option value="Titanium Grade 5" className="bg-[#20272b] text-[#f5f0e7]">Titanium Grade 5 (Ti-6Al-4V)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[#d2d1c9] font-semibold mb-1.5 font-mono">
                          Tolerance Standard
                        </label>
                        <select
                          value={tolerance}
                          onChange={(e) => setTolerance(e.target.value)}
                          className="w-full bg-[#20272b] border border-white/15 p-2.5 text-[#f5f0e7] focus:outline-none focus:border-[#e7a45c]"
                        >
                          <option value="Precision (±0.05 mm)" className="bg-[#20272b] text-[#f5f0e7]">Precision (±0.05 mm)</option>
                          <option value="Ultra-Precision (±0.005 mm)" className="bg-[#20272b] text-[#f5f0e7]">Ultra-Precision (±0.005 mm / 5 Microns)</option>
                          <option value="High-Precision (±0.01 mm)" className="bg-[#20272b] text-[#f5f0e7]">High-Precision (±0.01 mm)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[#d2d1c9] font-semibold mb-1.5 font-mono">
                        Overall Dimensions / Scope Description
                      </label>
                      <input
                        type="text"
                        value={dimensions}
                        onChange={(e) => setDimensions(e.target.value)}
                        className="w-full bg-[#20272b] border border-white/15 p-2.5 text-[#f5f0e7] focus:outline-none focus:border-[#e7a45c]"
                      />
                    </div>
                  </div>
                )}

                {/* STEP 3: Quantity & Delivery */}
                {currentStep === 3 && (
                  <div className="space-y-4 text-xs">
                    <h3 className="text-base font-bold text-[#f5f0e7]">
                      Step 3: Quantity & Delivery Schedule
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[#d2d1c9] font-semibold mb-1.5 font-mono">
                          Target Quantity *
                        </label>
                        <input
                          type="number"
                          value={quantity}
                          onChange={(e) => setQuantity(Number(e.target.value))}
                          className="w-full bg-[#20272b] border border-white/15 p-2.5 text-[#f5f0e7] focus:outline-none focus:border-[#e7a45c] font-mono"
                        />
                      </div>
                      <div>
                        <label className="block text-[#d2d1c9] font-semibold mb-1.5 font-mono">
                          Unit of Measure
                        </label>
                        <select
                          value={unit}
                          onChange={(e) => setUnit(e.target.value)}
                          className="w-full bg-[#20272b] border border-white/15 p-2.5 text-[#f5f0e7] focus:outline-none focus:border-[#e7a45c]"
                        >
                          <option value="Pieces" className="bg-[#20272b] text-[#f5f0e7]">Pieces</option>
                          <option value="Sets" className="bg-[#20272b] text-[#f5f0e7]">Sets</option>
                          <option value="Metric Tons" className="bg-[#20272b] text-[#f5f0e7]">Metric Tons</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[#d2d1c9] font-semibold mb-1.5 font-mono">
                          Required Delivery Date
                        </label>
                        <input
                          type="date"
                          value={targetDate}
                          onChange={(e) => setTargetDate(e.target.value)}
                          className="w-full bg-[#20272b] border border-white/15 p-2.5 text-[#f5f0e7] focus:outline-none focus:border-[#e7a45c] font-mono"
                        />
                      </div>
                      <div>
                        <label className="block text-[#d2d1c9] font-semibold mb-1.5 font-mono">
                          Delivery City & State
                        </label>
                        <input
                          type="text"
                          value={deliveryLocation}
                          onChange={(e) => setDeliveryLocation(e.target.value)}
                          className="w-full bg-[#20272b] border border-white/15 p-2.5 text-[#f5f0e7] focus:outline-none focus:border-[#e7a45c]"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 4: Company Details */}
                {currentStep === 4 && (
                  <div className="space-y-4 text-xs">
                    <h3 className="text-base font-bold text-[#f5f0e7]">
                      Step 4: Buyer & Company Information
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[#d2d1c9] font-semibold mb-1.5 font-mono">
                          Company Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={companyName}
                          onChange={(e) => setCompanyName(e.target.value)}
                          className="w-full bg-[#20272b] border border-white/15 p-2.5 text-[#f5f0e7] focus:outline-none focus:border-[#e7a45c]"
                        />
                      </div>
                      <div>
                        <label className="block text-[#d2d1c9] font-semibold mb-1.5 font-mono">
                          GST / Tax ID Number
                        </label>
                        <input
                          type="text"
                          value={gstNumber}
                          onChange={(e) => setGstNumber(e.target.value)}
                          className="w-full bg-[#20272b] border border-white/15 p-2.5 text-[#f5f0e7] focus:outline-none focus:border-[#e7a45c] font-mono"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-[#d2d1c9] font-semibold mb-1.5 font-mono">
                          Contact Person *
                        </label>
                        <input
                          type="text"
                          required
                          value={contactPerson}
                          onChange={(e) => setContactPerson(e.target.value)}
                          className="w-full bg-[#20272b] border border-white/15 p-2.5 text-[#f5f0e7] focus:outline-none focus:border-[#e7a45c]"
                        />
                      </div>
                      <div>
                        <label className="block text-[#d2d1c9] font-semibold mb-1.5 font-mono">
                          Mobile / WhatsApp *
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
                  </div>
                )}

                {/* STEP 5: Attachments & Notes */}
                {currentStep === 5 && (
                  <div className="space-y-4 text-xs">
                    <h3 className="text-base font-bold text-[#f5f0e7]">
                      Step 5: CAD Drawings & Technical Notes
                    </h3>

                    <div className="border border-dashed border-white/20 p-6 text-center bg-[#20272b] hover:border-[#e7a45c]/50 transition-colors">
                      <Upload size={28} className="text-[#e7a45c] mx-auto mb-2" />
                      <h4 className="font-semibold text-[#f5f0e7] text-xs">
                        Attach 2D/3D Drawings or RFQ Specification Sheet
                      </h4>
                      <p className="text-[11px] text-[#899492] mt-1">
                        Accepts DWG, DXF, STEP, IGES, and PDF
                      </p>
                      <div className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 font-mono text-[11px] text-[#e7a45c]">
                        <span>Attached: {mockFileName}</span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[#d2d1c9] font-semibold mb-1.5 font-mono">
                        Special Instructions / Quality Test Requirements
                      </label>
                      <textarea
                        rows={3}
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        className="w-full bg-[#20272b] border border-white/15 p-2.5 text-[#f5f0e7] focus:outline-none focus:border-[#e7a45c]"
                      />
                    </div>
                  </div>
                )}

                {/* STEP 6: Review & Submit */}
                {currentStep === 6 && (
                  <div className="space-y-4 text-xs">
                    <h3 className="text-base font-bold text-[#f5f0e7]">
                      Step 6: Review Summary & Submit RFQ
                    </h3>

                    <div className="bg-[#20272b] p-4 border border-white/10 space-y-3 font-mono">
                      <div className="flex justify-between items-center pb-2 border-b border-white/5">
                        <span className="text-[#899492]">Target Product:</span>
                        <strong className="text-[#f5f0e7] text-right">{selectedProduct.name}</strong>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b border-white/5">
                        <span className="text-[#899492]">Quantity:</span>
                        <strong className="text-[#e7a45c]">
                          {quantity} {unit}
                        </strong>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b border-white/5">
                        <span className="text-[#899492]">Material & Tolerance:</span>
                        <strong className="text-[#e7a45c]">
                          {material} ({tolerance})
                        </strong>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b border-white/5">
                        <span className="text-[#899492]">Delivery Destination:</span>
                        <strong className="text-[#f5f0e7]">{deliveryLocation}</strong>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b border-white/5">
                        <span className="text-[#899492]">Buyer Company:</span>
                        <strong className="text-[#f5f0e7]">
                          {companyName} ({contactPerson})
                        </strong>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-[#899492]">Contact:</span>
                        <strong className="text-[#d2d1c9]">
                          {phone} | {email}
                        </strong>
                      </div>
                    </div>

                    <div className="p-3.5 bg-[#20272b] border border-white/10 text-[#d2d1c9] flex items-center gap-2.5 font-mono">
                      <ShieldCheck size={20} className="shrink-0 text-[#e7a45c]" />
                      <span>
                        Submitting routes your technical drawings directly to our plant application engineers for rapid quotation.
                      </span>
                    </div>
                  </div>
                )}

                {/* Footer Navigation Buttons */}
                <div className="pt-6 border-t border-white/10 mt-6 flex items-center justify-between">
                  {currentStep > 1 ? (
                    <button
                      type="button"
                      onClick={handleBack}
                      className="px-4 py-2.5 border border-white/15 text-[#d2d1c9] hover:bg-white/5 hover:text-[#f5f0e7] text-xs font-semibold flex items-center gap-1.5 transition-colors font-mono"
                    >
                      <ArrowLeft size={14} />
                      <span>Back</span>
                    </button>
                  ) : (
                    <div />
                  )}

                  {currentStep < 6 ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-[#f5f0e7] text-xs font-bold flex items-center gap-1.5 transition-all font-mono border border-white/10"
                    >
                      <span>Continue</span>
                      <ArrowRight size={14} />
                    </button>
                  ) : (
                    <button
                      type="button"
                      disabled={isSubmitting}
                      onClick={handleSubmit}
                      className="px-6 py-2.5 bg-[#e46e2e] hover:bg-[#f38b43] text-[#fff5e9] text-xs font-bold uppercase tracking-[.1em] shadow-lg flex items-center gap-2 font-mono transition-all"
                    >
                      {isSubmitting ? (
                        <span>Validating Tolerances & Submitting...</span>
                      ) : (
                        <>
                          <CheckCircle2 size={16} />
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
        <div className="min-h-screen bg-[#20272b] flex items-center justify-center text-xs font-mono text-[#e7a45c]">
          Loading Custom RFQ Builder...
        </div>
      }
    >
      <RequestQuoteContent />
    </Suspense>
  );
}
