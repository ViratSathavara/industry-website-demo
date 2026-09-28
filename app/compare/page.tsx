"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { useDemoState } from "@/lib/services/demo-state-context";
import {
  Scale,
  X,
  Plus,
  FileText,
  Clock,
  ChevronRight,
  ShieldCheck
} from "lucide-react";
import { formatCurrency } from "@/lib/utils";

export default function ProductComparePage() {
  const { products, comparisonProductIds, removeFromComparison, clearComparison } = useDemoState();

  const comparedProducts = products.filter((p) => comparisonProductIds.includes(p.id));

  // Collect all unique spec keys across compared products
  const allSpecKeys = Array.from(
    new Set(comparedProducts.flatMap((p) => Object.keys(p.specs || {})))
  );

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
            <span className="text-[#f5f0e7] font-semibold">Side-by-Side Comparison</span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 border-b border-white/10 mb-10 gap-4">
            <div>
              <span className="eyebrow text-[#e7a45c]">Decision Support Tool</span>
              <h1 className="text-4xl sm:text-5xl font-display tracking-tight text-[#f5f0e7] mt-2">
                Component Specification <em className="text-[#e7a45c]">Comparison.</em>
              </h1>
              <p className="text-xs sm:text-sm text-[#aeb5b2] mt-2">
                Compare up to 3 industrial components side-by-side across dimensions, tolerances, materials, and lead times.
              </p>
            </div>

            {comparedProducts.length > 0 && (
              <button
                onClick={clearComparison}
                className="text-xs font-mono text-[#e7a45c] hover:underline flex items-center gap-1 self-start sm:self-auto"
              >
                Clear all comparisons ({comparedProducts.length})
              </button>
            )}
          </div>

          {comparedProducts.length === 0 ? (
            <div className="text-center py-20 bg-[#171c1e] border border-white/10 p-8 space-y-4">
              <div className="size-16 border border-[#e7a45c] text-[#e7a45c] flex items-center justify-center mx-auto bg-[#20272b]">
                <Scale size={28} />
              </div>
              <h3 className="text-2xl font-display text-[#f5f0e7]">
                No Components in Comparison Tray
              </h3>
              <p className="text-xs text-[#aeb5b2] max-w-sm mx-auto leading-relaxed">
                Browse our precision catalog and click &quot;Compare&quot; on any product card to inspect technical tolerances side-by-side.
              </p>
              <div className="pt-4">
                <Link
                  href="/products"
                  className="px-6 py-3.5 bg-[#e46e2e] hover:bg-[#f38b43] text-[#fff5e9] text-xs font-bold uppercase tracking-[.1em] transition-all font-mono inline-block"
                >
                  Browse Precision Catalog
                </Link>
              </div>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <div className="min-w-[800px] border border-white/10 bg-[#171c1e] shadow-2xl">
                {/* Header Row: Products Info */}
                <div className="grid grid-cols-4 border-b border-white/10 divide-x divide-white/10 bg-[#20272b]">
                  <div className="p-5 flex flex-col justify-end">
                    <span className="font-mono text-xs text-[#e7a45c] uppercase tracking-wider block">
                      Component Spec Key
                    </span>
                    <span className="text-[11px] text-[#7e8989] font-mono mt-1">
                      {comparedProducts.length} of 3 active
                    </span>
                  </div>

                  {comparedProducts.map((p) => (
                    <div key={p.id} className="p-5 relative flex flex-col justify-between space-y-3">
                      <button
                        onClick={() => removeFromComparison(p.id)}
                        className="absolute top-3 right-3 text-[#7e8989] hover:text-[#e46e2e] p-1 transition-colors"
                        title="Remove from comparison"
                      >
                        <X size={15} />
                      </button>

                      <div className="relative h-32 w-full overflow-hidden bg-[#171c1e] border border-white/10">
                        <Image
                          src={p.images[0]}
                          alt={p.name}
                          fill
                          unoptimized={p.images[0].endsWith(".svg")}
                          className="object-cover"
                        />
                      </div>

                      <div>
                        <span className="text-[10px] font-mono font-bold text-[#e7a45c] uppercase">
                          {p.sku}
                        </span>
                        <Link href={`/products/${p.slug}`}>
                          <h4 className="font-semibold text-xs text-[#f5f0e7] hover:text-[#e7a45c] line-clamp-2 transition-colors mt-0.5">
                            {p.name}
                          </h4>
                        </Link>
                      </div>

                      <div className="pt-2">
                        <Link
                          href={`/request-quote?productId=${p.id}`}
                          className="w-full py-2 bg-[#e46e2e] hover:bg-[#f38b43] text-[#fff5e9] text-[11px] font-bold uppercase tracking-[.08em] flex items-center justify-center gap-1.5 transition-colors font-mono"
                        >
                          <FileText size={12} />
                          <span>Request Quote</span>
                        </Link>
                      </div>
                    </div>
                  ))}

                  {/* Empty Slot if less than 3 */}
                  {Array.from({ length: 3 - comparedProducts.length }).map((_, i) => (
                    <div
                      key={i}
                      className="p-8 flex flex-col items-center justify-center text-center text-[#7e8989] space-y-2 border-dashed"
                    >
                      <Plus size={24} className="opacity-40" />
                      <span className="text-xs font-mono">Empty slot</span>
                      <Link
                        href="/products"
                        className="text-[11px] text-[#e7a45c] hover:underline font-mono"
                      >
                        Add component
                      </Link>
                    </div>
                  ))}
                </div>

                {/* Base Rows: Price & MOQ */}
                <div className="grid grid-cols-4 border-b border-white/10 divide-x divide-white/10 text-xs font-mono">
                  <div className="p-4 bg-[#20272b] text-[#899492] font-semibold">Pricing Model</div>
                  {comparedProducts.map((p) => (
                    <div key={p.id} className="p-4 text-[#f5f0e7]">
                      {p.price ? (
                        <span className="font-bold text-[#e7a45c]">
                          {formatCurrency(p.price)} / {p.unit}
                        </span>
                      ) : (
                        <span className="text-[#aeb5b2]">Custom CAD Quote</span>
                      )}
                    </div>
                  ))}
                  {Array.from({ length: 3 - comparedProducts.length }).map((_, i) => (
                    <div key={i} className="p-4 bg-[#121618]" />
                  ))}
                </div>

                <div className="grid grid-cols-4 border-b border-white/10 divide-x divide-white/10 text-xs font-mono">
                  <div className="p-4 bg-[#20272b] text-[#899492] font-semibold">Minimum Order Quantity</div>
                  {comparedProducts.map((p) => (
                    <div key={p.id} className="p-4 text-[#f5f0e7] font-bold">
                      {p.moq}
                    </div>
                  ))}
                  {Array.from({ length: 3 - comparedProducts.length }).map((_, i) => (
                    <div key={i} className="p-4 bg-[#121618]" />
                  ))}
                </div>

                <div className="grid grid-cols-4 border-b border-white/10 divide-x divide-white/10 text-xs font-mono">
                  <div className="p-4 bg-[#20272b] text-[#899492] font-semibold">Production Lead Time</div>
                  {comparedProducts.map((p) => (
                    <div key={p.id} className="p-4 text-[#e7a45c] flex items-center gap-1.5">
                      <Clock size={12} />
                      <span>{p.leadTime}</span>
                    </div>
                  ))}
                  {Array.from({ length: 3 - comparedProducts.length }).map((_, i) => (
                    <div key={i} className="p-4 bg-[#121618]" />
                  ))}
                </div>

                {/* Dynamic Spec Rows */}
                {allSpecKeys.map((key) => (
                  <div
                    key={key}
                    className="grid grid-cols-4 border-b border-white/5 divide-x divide-white/10 text-xs font-mono hover:bg-white/[0.02] transition-colors"
                  >
                    <div className="p-4 bg-[#20272b] text-[#899492] font-semibold">{key}</div>
                    {comparedProducts.map((p) => (
                      <div key={p.id} className="p-4 text-[#d2d1c9]">
                        {p.specs?.[key] || <span className="text-[#7e8989]">—</span>}
                      </div>
                    ))}
                    {Array.from({ length: 3 - comparedProducts.length }).map((_, i) => (
                      <div key={i} className="p-4 bg-[#121618]" />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
