"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams, notFound } from "next/navigation";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { useDemoState } from "@/lib/services/demo-state-context";
import {
  FileText,
  FileDown,
  Scale,
  Heart,
  CheckCircle2,
  Clock,
  ShieldCheck,
  ChevronRight,
  MessageSquare,
  Phone,
  Package,
  Layers,
  ArrowRight,
  HelpCircle
} from "lucide-react";
import { formatCurrency } from "@/lib/utils";

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const {
    products,
    comparisonProductIds,
    addToComparison,
    removeFromComparison,
    savedProductIds,
    toggleSaveProduct
  } = useDemoState();

  const product = products.find((p) => p.slug === slug);

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [downloadModal, setDownloadModal] = useState<string | null>(null);

  if (!product) {
    return notFound();
  }

  const isComparing = comparisonProductIds.includes(product.id);
  const isSaved = savedProductIds.includes(product.id);

  // Related products from same industry
  const relatedProducts = products
    .filter((p) => p.industryId === product.industryId && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col bg-[#fafaf8]">
      <Navbar />

      <main className="flex-1 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-1.5 text-xs text-stone-500 mb-6">
            <Link href="/" className="hover:text-stone-900">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/products" className="hover:text-stone-900">
              Products
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href={`/industries/${product.industryId}`} className="hover:text-stone-900">
              {product.industryName}
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-stone-900 font-semibold truncate max-w-xs">{product.name}</span>
          </div>

          {/* Top Section: Gallery & Quick Specifications */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 mb-12 shadow-xs">
            {/* Left 6 Columns: Image Gallery */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative h-80 sm:h-96 w-full rounded-xl overflow-hidden bg-stone-900 border border-stone-200 shadow-inner">
                <Image
                  src={product.images[activeImageIndex] || product.images[0]}
                  alt={product.name}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute top-3 left-3 bg-stone-900/85 backdrop-blur-md px-2.5 py-1 rounded text-white font-mono text-xs font-bold">
                  {product.sku}
                </div>
                <div className="absolute top-3 right-3">
                  <span className="bg-[#d4560a] text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                    {product.priceMode}
                  </span>
                </div>
              </div>

              {/* Thumbnails */}
              {product.images.length > 1 && (
                <div className="flex items-center gap-3">
                  {product.images.map((img, idx) => (
                    <button
                      key={img}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                        activeImageIndex === idx
                          ? "border-[#d4560a] ring-2 ring-[#d4560a]/20"
                          : "border-stone-200 opacity-70 hover:opacity-100"
                      }`}
                    >
                      <Image src={img} alt="Thumbnail" fill className="object-cover" />
                    </button>
                  ))}
                </div>
              )}

              {/* Technical Drawing Placeholder Card */}
              <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2.5">
                  <FileText className="w-5 h-5 text-[#d4560a]" />
                  <div>
                    <span className="font-bold text-stone-900 block">CAD / Technical Drawing</span>
                    <span className="text-stone-500 text-[11px]">2D Dimension & Tolerances Layout</span>
                  </div>
                </div>
                <button
                  onClick={() => setDownloadModal("2D/3D CAD Drawing Package")}
                  className="px-3 py-1.5 rounded bg-white hover:bg-stone-100 border border-stone-200 text-stone-700 font-semibold text-xs flex items-center gap-1"
                >
                  <FileDown className="w-3.5 h-3.5 text-[#d4560a]" />
                  <span>Preview CAD</span>
                </button>
              </div>
            </div>

            {/* Right 6 Columns: Product Summary & Purchase Options */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase font-bold text-[#d4560a] tracking-wider">
                    {product.categoryName} • {product.industryName}
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => toggleSaveProduct(product.id)}
                      className={`p-2 rounded-lg border text-xs flex items-center gap-1 ${
                        isSaved ? "bg-rose-50 border-rose-200 text-rose-600" : "border-stone-200 text-stone-500"
                      }`}
                    >
                      <Heart className={`w-4 h-4 ${isSaved ? "fill-rose-500" : ""}`} />
                    </button>
                    <button
                      onClick={() => {
                        if (isComparing) removeFromComparison(product.id);
                        else addToComparison(product.id);
                      }}
                      className={`p-2 rounded-lg border text-xs flex items-center gap-1 ${
                        isComparing ? "bg-orange-50 border-[#d4560a] text-[#d4560a]" : "border-stone-200 text-stone-500"
                      }`}
                    >
                      <Scale className="w-4 h-4" />
                      <span>{isComparing ? "In Compare" : "Compare"}</span>
                    </button>
                  </div>
                </div>

                <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-900 leading-tight">
                  {product.name}
                </h1>

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {product.fullDescription}
                </p>

                {/* Price Display if available */}
                {product.price ? (
                  <div className="pt-2">
                    <span className="text-xs text-stone-400 block font-medium">Standard B2B Price:</span>
                    <div className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
                      {formatCurrency(product.price)}
                      <span className="text-xs font-normal text-stone-500 ml-1.5">
                        per {product.unit} (Ex-Factory)
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="pt-2">
                    <span className="text-xs font-semibold text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-200 inline-block">
                      Price upon RFQ submission based on quantity and custom tolerance
                    </span>
                  </div>
                )}

                {/* Commercial Specs Pills */}
                <div className="grid grid-cols-2 gap-3 pt-3 text-xs">
                  <div className="p-3 rounded-lg bg-stone-50 border border-stone-200">
                    <span className="text-stone-400 block text-[10px] uppercase font-bold">
                      Minimum Order Quantity
                    </span>
                    <strong className="text-stone-800 text-sm">{product.moq}</strong>
                  </div>
                  <div className="p-3 rounded-lg bg-stone-50 border border-stone-200">
                    <span className="text-stone-400 block text-[10px] uppercase font-bold">
                      Standard Lead Time
                    </span>
                    <strong className="text-stone-800 text-sm flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#d4560a]" />
                      {product.leadTime}
                    </strong>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-4 border-t border-stone-100">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href={`/request-quote?productId=${product.id}`}
                    className="flex-1 py-3 px-4 rounded-xl bg-[#d4560a] hover:bg-[#b84605] text-white font-bold text-xs shadow-md transition-all text-center flex items-center justify-center gap-2"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Request Official Quotation</span>
                  </Link>

                  <Link
                    href={`/request-sample?productId=${product.id}`}
                    className="flex-1 py-3 px-4 rounded-xl bg-white hover:bg-stone-50 text-stone-800 font-bold text-xs border border-stone-300 transition-all text-center flex items-center justify-center gap-2"
                  >
                    <Package className="w-4 h-4 text-emerald-600" />
                    <span>Request Product Sample</span>
                  </Link>
                </div>

                <div className="flex gap-3 text-xs">
                  <Link
                    href="/contact"
                    className="flex-1 py-2 text-center border border-stone-200 rounded-lg text-stone-700 hover:bg-stone-50 font-medium"
                  >
                    Contact Sales Desk
                  </Link>
                  <Link
                    href="/book-demo"
                    className="flex-1 py-2 text-center border border-stone-200 rounded-lg text-stone-700 hover:bg-stone-50 font-medium"
                  >
                    Book Machine Demo
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Specifications Table */}
          <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 mb-12 shadow-xs">
            <h2 className="text-lg font-bold text-stone-900 mb-4 pb-2 border-b border-stone-100 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#d4560a]" />
              <span>Full Technical Specifications</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-xs">
              {Object.entries(product.specs).map(([key, val]) => (
                <div
                  key={key}
                  className="flex justify-between items-center py-2.5 border-b border-stone-100 text-stone-700"
                >
                  <span className="font-semibold text-stone-500">{key}</span>
                  <span className="font-bold text-stone-900">{val}</span>
                </div>
              ))}
              <div className="flex justify-between items-center py-2.5 border-b border-stone-100 text-stone-700">
                <span className="font-semibold text-stone-500">Customization</span>
                <span className="font-bold text-emerald-700">
                  {product.customizationAvailable ? "Available upon drawing review" : "Standard Catalog Only"}
                </span>
              </div>
            </div>
          </div>

          {/* Key Features & Applications */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Features */}
            <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-xs">
              <h3 className="text-base font-bold text-stone-900 mb-4">Engineering Features</h3>
              <ul className="space-y-2.5 text-xs text-stone-700">
                {product.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Applications */}
            <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-xs">
              <h3 className="text-base font-bold text-stone-900 mb-4">Typical Applications</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {product.applications.map((app) => (
                  <div key={app} className="p-2.5 rounded-lg bg-stone-50 border border-stone-200 text-stone-800 font-medium">
                    {app}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Downloadable Documents */}
          <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 mb-12 shadow-xs">
            <h3 className="text-base font-bold text-stone-900 mb-4 flex items-center gap-2">
              <FileDown className="w-5 h-5 text-[#d4560a]" />
              <span>Downloads, Datasheets & Compliance Reports</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {product.downloads.map((d) => (
                <div
                  key={d.title}
                  className="p-4 rounded-xl border border-stone-200 bg-stone-50 flex items-center justify-between"
                >
                  <div className="space-y-0.5">
                    <span className="font-bold text-xs text-stone-900 block">{d.title}</span>
                    <span className="text-[11px] text-stone-500 font-mono">
                      {d.type} • {d.size}
                    </span>
                  </div>

                  <button
                    onClick={() => setDownloadModal(d.title)}
                    className="px-3 py-1.5 rounded-lg bg-white border border-stone-300 text-xs font-semibold text-stone-700 hover:bg-stone-100 flex items-center gap-1.5 shadow-xs"
                  >
                    <FileDown className="w-3.5 h-3.5 text-[#d4560a]" />
                    <span>Download</span>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* FAQs */}
          {product.faqs.length > 0 && (
            <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 mb-12 shadow-xs">
              <h3 className="text-base font-bold text-stone-900 mb-4 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-amber-500" />
                <span>Buyer FAQs</span>
              </h3>

              <div className="space-y-3">
                {product.faqs.map((faq) => (
                  <div key={faq.question} className="p-4 rounded-xl bg-stone-50 border border-stone-200 text-xs">
                    <h4 className="font-bold text-stone-900 mb-1">{faq.question}</h4>
                    <p className="text-stone-600 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div>
              <h3 className="text-lg font-bold text-stone-900 mb-4">
                Related {product.industryName} Components
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {relatedProducts.map((rel) => (
                  <Link
                    key={rel.id}
                    href={`/products/${rel.slug}`}
                    className="bg-white rounded-xl border border-stone-200 p-4 hover:shadow-md transition-shadow group flex flex-col justify-between"
                  >
                    <div>
                      <div className="relative h-40 w-full rounded-lg overflow-hidden mb-3 bg-stone-100">
                        <Image src={rel.images[0]} alt={rel.name} fill className="object-cover" />
                      </div>
                      <h4 className="font-bold text-xs text-stone-900 group-hover:text-[#d4560a] line-clamp-1">
                        {rel.name}
                      </h4>
                      <p className="text-[11px] text-stone-500 mt-1 line-clamp-2">{rel.shortDescription}</p>
                    </div>
                    <div className="pt-2 border-t border-stone-100 mt-2 flex justify-between text-xs font-semibold text-[#d4560a]">
                      <span>{rel.priceMode}</span>
                      <span>View Specs →</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Sticky Mobile Action Bar (Section 10) */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-stone-200 p-3 flex items-center gap-2 shadow-lg">
        <Link
          href={`/request-quote?productId=${product.id}`}
          className="flex-1 py-2.5 bg-[#d4560a] text-white text-xs font-bold rounded-lg text-center shadow-xs"
        >
          Request Quote
        </Link>
        <Link
          href="/contact"
          className="px-3.5 py-2.5 border border-stone-300 rounded-lg text-stone-700 text-xs font-bold flex items-center justify-center"
        >
          <Phone className="w-4 h-4" />
        </Link>
      </div>

      {/* Mock Document Download Modal */}
      {downloadModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 border border-stone-200 text-center">
            <div className="w-12 h-12 rounded-full bg-orange-50 text-[#d4560a] flex items-center justify-center mx-auto mb-3">
              <FileDown className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-stone-900 text-base mb-1">Demo Document Preview</h3>
            <p className="text-xs text-stone-600 mb-4">
              Downloaded file: <strong>{downloadModal}</strong>
            </p>
            <div className="bg-stone-50 p-3 rounded-lg border border-stone-200 text-[11px] text-stone-500 text-left mb-5 space-y-1 font-mono">
              <div>Document ID: DOC-2026-00481</div>
              <div>Standard: ASME B16.5 / DIN EN 10204</div>
              <div>Security: Certified Watermarked Demo PDF</div>
            </div>
            <button
              onClick={() => setDownloadModal(null)}
              className="w-full py-2.5 bg-stone-900 hover:bg-stone-800 text-white rounded-lg text-xs font-bold"
            >
              Done Previewing
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
