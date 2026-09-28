"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams, notFound } from "next/navigation";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { useDemoState } from "@/lib/services/demo-state-context";
import {
  ShieldCheck,
  Clock,
  Package,
  FileText,
  FileDown,
  ChevronRight,
  CheckCircle2,
  Heart,
  Scale,
  Cpu,
  Phone
} from "lucide-react";
import { formatCurrency } from "@/lib/utils";

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const {
    products,
    savedProductIds,
    comparisonProductIds,
    toggleSaveProduct,
    addToComparison,
    removeFromComparison
  } = useDemoState();

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [downloadModal, setDownloadModal] = useState<string | null>(null);

  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const isComparing = comparisonProductIds.includes(product.id);
  const isSaved = savedProductIds.includes(product.id);

  // Related products from same industry
  const relatedProducts = products
    .filter((p) => p.industryId === product.industryId && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col bg-[#20272b] text-[#f5f0e7]">
      <Navbar />

      <main className="flex-1 pt-28 pb-20 relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-14 relative z-10">
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
            <span className="text-[#f5f0e7] font-semibold truncate max-w-xs">{product.name}</span>
          </div>

          {/* Top Section: Gallery & Quick Specifications */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 bg-[#171c1e] p-6 sm:p-8 border border-white/10 mb-12 shadow-2xl">
            {/* Left 6 Columns: Image Gallery */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative h-80 sm:h-96 w-full overflow-hidden bg-[#20272b] border border-white/10 shadow-inner">
                <Image
                  src={product.images[activeImageIndex] || product.images[0]}
                  alt={product.name}
                  fill
                  priority
                  unoptimized={(product.images[activeImageIndex] || product.images[0]).endsWith(".svg")}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute top-3 left-3 bg-[#20272b]/90 backdrop-blur-md px-3 py-1 text-[#e7a45c] font-mono text-xs font-bold border border-[#e7a45c]/30">
                  {product.sku}
                </div>
                <div className="absolute top-3 right-3">
                  <span className="bg-[#20272b]/90 text-[#f5f0e7] font-bold text-xs px-3 py-1 border border-white/20 font-mono">
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
                      className={`relative w-20 h-20 overflow-hidden border-2 transition-all ${
                        activeImageIndex === idx
                          ? "border-[#e7a45c]"
                          : "border-white/10 opacity-60 hover:opacity-100"
                      }`}
                    >
                      <Image src={img} alt="Thumbnail" fill className="object-cover" />
                    </button>
                  ))}
                </div>
              )}

              {/* Technical Drawing Placeholder Card */}
              <div className="p-4 bg-[#20272b] border border-white/10 flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-3">
                  <Cpu size={18} className="text-[#e7a45c]" />
                  <div>
                    <span className="font-bold text-[#f5f0e7] block">
                      CAD / Technical Drawing Package
                    </span>
                    <span className="text-[#899492] text-[11px]">
                      3D STEP Model & 2D Inspection Layout
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setDownloadModal("2D/3D CAD Drawing Package (STEP & PDF)")}
                  className="px-3.5 py-2 bg-white/10 hover:bg-white/20 border border-white/10 text-[#f5f0e7] font-semibold text-xs flex items-center gap-1.5 transition-all"
                >
                  <FileDown size={14} className="text-[#e7a45c]" />
                  <span>Preview CAD</span>
                </button>
              </div>
            </div>

            {/* Right 6 Columns: Product Summary & Sourcing Actions */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase font-mono font-bold text-[#e7a45c] tracking-wider">
                    {product.categoryName} • Precision Cell
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => toggleSaveProduct(product.id)}
                      className={`p-2.5 border text-xs flex items-center gap-1 transition-all ${
                        isSaved
                          ? "bg-rose-950/80 border-rose-800 text-rose-400"
                          : "border-white/10 text-[#899492] hover:text-[#f5f0e7]"
                      }`}
                    >
                      <Heart size={15} className={isSaved ? "fill-rose-500" : ""} />
                    </button>
                    <button
                      onClick={() => {
                        if (isComparing) removeFromComparison(product.id);
                        else addToComparison(product.id);
                      }}
                      className={`p-2.5 border text-xs flex items-center gap-1 transition-all font-mono ${
                        isComparing
                          ? "bg-[#293337] border-[#e7a45c] text-[#e7a45c]"
                          : "border-white/10 text-[#899492] hover:text-[#f5f0e7]"
                      }`}
                    >
                      <Scale size={15} />
                      <span>{isComparing ? "In Compare" : "Compare"}</span>
                    </button>
                  </div>
                </div>

                <h1 className="text-3xl sm:text-4xl font-display text-[#f5f0e7] leading-tight">
                  {product.name}
                </h1>

                <p className="text-xs sm:text-sm text-[#aeb5b2] leading-relaxed">
                  {product.fullDescription}
                </p>

                {/* Price Display */}
                {product.price ? (
                  <div className="pt-2">
                    <span className="text-xs text-[#7e8989] block font-mono">
                      Standard Indicative Price:
                    </span>
                    <div className="text-2xl sm:text-3xl font-bold text-[#e7a45c] font-mono tracking-tight">
                      {formatCurrency(product.price)}
                      <span className="text-xs font-normal text-[#899492] ml-2">
                        per {product.unit} (Ex-Works Factory)
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="pt-2">
                    <span className="text-xs font-mono font-semibold text-[#e7a45c] bg-[#20272b] px-3.5 py-1.5 border border-[#e7a45c]/30 inline-block">
                      Tiered contract pricing quoted per batch quantity and raw alloy grade
                    </span>
                  </div>
                )}

                {/* Commercial Specs Pills */}
                <div className="grid grid-cols-2 gap-3 pt-3 text-xs font-mono">
                  <div className="p-3.5 bg-[#20272b] border border-white/5">
                    <span className="text-[#7e8989] block text-[10px] uppercase font-bold">
                      Minimum Batch Quantity
                    </span>
                    <strong className="text-[#f5f0e7] text-sm">{product.moq}</strong>
                  </div>
                  <div className="p-3.5 bg-[#20272b] border border-white/5">
                    <span className="text-[#7e8989] block text-[10px] uppercase font-bold">
                      Machining & Dispatch Lead Time
                    </span>
                    <strong className="text-[#e7a45c] text-sm flex items-center gap-1.5 mt-0.5">
                      <Clock size={14} />
                      {product.leadTime}
                    </strong>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-4 border-t border-white/10">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href={`/request-quote?productId=${product.id}`}
                    className="flex-1 py-3.5 px-4 bg-[#e46e2e] hover:bg-[#f38b43] text-[#fff5e9] font-bold text-xs uppercase tracking-[.1em] shadow-lg transition-all text-center flex items-center justify-center gap-2"
                  >
                    <FileText size={15} />
                    <span>Request Precision Quotation (RFQ)</span>
                  </Link>

                  <Link
                    href={`/request-sample?productId=${product.id}`}
                    className="flex-1 py-3.5 px-4 bg-white/10 hover:bg-white/20 text-[#f5f0e7] font-semibold text-xs border border-white/10 transition-all text-center flex items-center justify-center gap-2"
                  >
                    <Package size={15} className="text-[#e7a45c]" />
                    <span>Request Sample Piece</span>
                  </Link>
                </div>

                <div className="flex gap-3 text-xs font-mono">
                  <Link
                    href="/contact"
                    className="flex-1 py-2 text-center border border-white/10 text-[#aeb5b2] hover:bg-white/5 hover:text-[#f5f0e7] font-medium transition-colors"
                  >
                    Contact Application Engineer
                  </Link>
                  <Link
                    href="/book-demo"
                    className="flex-1 py-2 text-center border border-white/10 text-[#aeb5b2] hover:bg-white/5 hover:text-[#f5f0e7] font-medium transition-colors"
                  >
                    Schedule Plant Audit
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Specifications Table */}
          <div className="bg-[#171c1e] border border-white/10 p-6 sm:p-8 mb-12 shadow-2xl">
            <h2 className="text-lg font-bold text-[#f5f0e7] mb-6 pb-3 border-b border-white/10 flex items-center gap-2 font-mono">
              <ShieldCheck size={20} className="text-[#e7a45c]" />
              <span>Dimensional & Material Specifications</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-3.5 text-xs font-mono">
              {Object.entries(product.specs).map(([key, val]) => (
                <div
                  key={key}
                  className="flex justify-between items-center py-2.5 border-b border-white/5 text-[#d2d1c9]"
                >
                  <span className="text-[#7e8989]">{key}:</span>
                  <span className="font-bold text-[#f5f0e7]">{val}</span>
                </div>
              ))}
              <div className="flex justify-between items-center py-2.5 border-b border-white/5 text-[#d2d1c9]">
                <span className="text-[#7e8989]">Custom Drawing Tolerance:</span>
                <span className="font-bold text-[#e7a45c]">
                  {product.customizationAvailable
                    ? "Full 3D CAD Machining Available"
                    : "Standard Drawing Only"}
                </span>
              </div>
            </div>
          </div>

          {/* Key Features & Applications */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Features */}
            <div className="bg-[#171c1e] border border-white/10 p-6 shadow-xl space-y-4">
              <h3 className="text-base font-bold text-[#f5f0e7] font-mono flex items-center gap-2">
                <span className="size-2 bg-[#e7a45c]" />
                <span>Machining & Metallurgical Highlights</span>
              </h3>
              <ul className="space-y-3 text-xs text-[#aeb5b2]">
                {product.features.map((feat) => (
                  <li
                    key={feat}
                    className="flex items-start gap-3 bg-white/[0.02] p-2.5 border border-white/5"
                  >
                    <CheckCircle2 size={16} className="text-[#e7a45c] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Applications */}
            <div className="bg-[#171c1e] border border-white/10 p-6 shadow-xl space-y-4">
              <h3 className="text-base font-bold text-[#f5f0e7] font-mono flex items-center gap-2">
                <span className="size-2 bg-[#bb5b2c]" />
                <span>Primary Engineering Applications</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs font-mono">
                {product.applications.map((app) => (
                  <div
                    key={app}
                    className="p-3 bg-[#20272b] border border-white/5 text-[#d2d1c9] font-medium"
                  >
                    {app}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Downloadable Documents */}
          <div className="bg-[#171c1e] border border-white/10 p-6 sm:p-8 mb-12 shadow-2xl">
            <h3 className="text-base font-bold text-[#f5f0e7] mb-6 flex items-center gap-2 font-mono">
              <FileDown size={18} className="text-[#e7a45c]" />
              <span>Inspection Certifications & CAD Drawings</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {product.downloads.map((d) => (
                <div
                  key={d.title}
                  className="p-4 border border-white/10 bg-[#20272b] flex items-center justify-between"
                >
                  <div className="space-y-1">
                    <span className="font-bold text-xs text-[#f5f0e7] block">{d.title}</span>
                    <span className="text-[11px] text-[#7e8989] font-mono">
                      {d.type} • {d.size}
                    </span>
                  </div>

                  <button
                    onClick={() => setDownloadModal(d.title)}
                    className="px-3.5 py-2 bg-white/10 border border-white/10 text-xs font-mono font-semibold text-[#d2d1c9] hover:bg-white/20 flex items-center gap-1.5 transition-all"
                  >
                    <FileDown size={14} className="text-[#e7a45c]" />
                    <span>Download</span>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div>
              <h3 className="text-xl font-display text-[#f5f0e7] mb-6">
                Complementary Precision Components
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {relatedProducts.map((rel) => (
                  <Link
                    key={rel.id}
                    href={`/products/${rel.slug}`}
                    className="bg-[#171c1e] border border-white/10 p-5 hover:border-[#e7a45c]/50 transition-all group flex flex-col justify-between"
                  >
                    <div>
                      <div className="relative h-44 w-full overflow-hidden mb-3 bg-[#20272b]">
                        <Image
                          src={rel.images[0]}
                          alt={rel.name}
                          fill
                          unoptimized={rel.images[0].endsWith(".svg")}
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <h4 className="font-semibold text-sm text-[#f5f0e7] group-hover:text-[#e7a45c] line-clamp-1 transition-colors">
                        {rel.name}
                      </h4>
                      <p className="text-[11px] text-[#899492] mt-1 line-clamp-2">
                        {rel.shortDescription}
                      </p>
                    </div>
                    <div className="pt-3 border-t border-white/5 mt-3 flex justify-between text-xs font-mono font-bold text-[#e7a45c]">
                      <span>{rel.priceMode}</span>
                      <span className="group-hover:translate-x-1 transition-transform">
                        Inspect Specs →
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Sticky Mobile Action Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#20272b]/95 backdrop-blur-md border-t border-white/10 p-3 flex items-center gap-2 shadow-2xl">
        <Link
          href={`/request-quote?productId=${product.id}`}
          className="flex-1 py-3 bg-[#e46e2e] text-[#fff5e9] text-xs font-bold uppercase tracking-[.1em] text-center font-mono"
        >
          Request Quote
        </Link>
        <Link
          href="/contact"
          className="p-3 border border-white/15 bg-white/5 text-[#f5f0e7] text-xs font-bold flex items-center justify-center"
        >
          <Phone size={16} />
        </Link>
      </div>

      {/* Mock Document Download Modal */}
      {downloadModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#171c1e] max-w-md w-full p-6 border border-white/15 text-center">
            <div className="size-12 border border-[#e7a45c] text-[#e7a45c] flex items-center justify-center mx-auto mb-3 bg-[#20272b]">
              <FileDown size={22} />
            </div>
            <h3 className="font-display text-2xl text-[#f5f0e7] mb-1">
              Document Download Ready
            </h3>
            <p className="text-xs text-[#aeb5b2] mb-4 font-mono">{downloadModal}</p>
            <div className="bg-[#20272b] p-3.5 border border-white/10 text-[11px] text-[#aeb5b2] text-left mb-5 space-y-1.5 font-mono">
              <div className="flex justify-between">
                <span>Document ID:</span>
                <span className="text-[#f5f0e7]">DOC-2026-00481</span>
              </div>
              <div className="flex justify-between">
                <span>Standard:</span>
                <span className="text-[#e7a45c]">EN 10204 3.1 / ASME B16.5</span>
              </div>
              <div className="flex justify-between">
                <span>Verification:</span>
                <span className="text-[#e7a45c]">Zeiss CMM Certified 3D Layout</span>
              </div>
            </div>
            <button
              onClick={() => setDownloadModal(null)}
              className="w-full py-3 bg-[#e7a45c] hover:bg-[#f4b875] text-[#20272b] text-xs font-mono font-bold transition-all"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
