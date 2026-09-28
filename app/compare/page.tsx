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
  ArrowRight,
  FileText,
  Clock,
  Layers,
  ChevronRight,
  CheckCircle2
} from "lucide-react";
import { formatCurrency } from "@/lib/utils";

export default function ProductComparePage() {
  const { products, comparisonProductIds, removeFromComparison, clearComparison } = useDemoState();

  const comparedProducts = products.filter((p) => comparisonProductIds.includes(p.id));

  // Collect all unique spec keys across compared products
  const allSpecKeys = Array.from(
    new Set(comparedProducts.flatMap((p) => Object.keys(p.specs)))
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#fafaf8]">
      <Navbar />

      <main className="flex-1 py-12">
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
            <span className="text-stone-900 font-semibold">Side-by-Side Comparison</span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 border-b border-stone-200 mb-8 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#d4560a]">
                Decision Support Tool
              </span>
              <h1 className="text-3xl font-extrabold text-stone-900 tracking-tight mt-1">
                Product Specification Comparison
              </h1>
              <p className="text-xs sm:text-sm text-stone-600 mt-1">
                Compare up to 3 industrial components side-by-side across dimensions, tolerances, materials, and lead times.
              </p>
            </div>

            {comparedProducts.length > 0 && (
              <button
                onClick={clearComparison}
                className="px-3.5 py-1.5 rounded-lg border border-stone-300 text-stone-700 hover:bg-stone-100 text-xs font-semibold shrink-0"
              >
                Clear All ({comparedProducts.length})
              </button>
            )}
          </div>

          {comparedProducts.length === 0 ? (
            /* Empty State */
            <div className="text-center py-20 bg-white rounded-2xl border border-stone-200 p-8 max-w-lg mx-auto shadow-xs">
              <div className="w-14 h-14 rounded-full bg-orange-50 text-[#d4560a] flex items-center justify-center mx-auto mb-4">
                <Scale className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-stone-900 mb-2">No Products in Comparison</h3>
              <p className="text-xs text-stone-500 mb-6 leading-relaxed">
                Add products from the catalogue or product detail pages using the &quot;Compare&quot; button to view technical specs side-by-side.
              </p>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#d4560a] text-white text-xs font-bold shadow-md hover:bg-[#b84605] transition-colors"
              >
                <span>Browse Products Catalogue</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ) : (
            /* Comparison Matrix Table */
            <div className="bg-white rounded-2xl border border-stone-200 overflow-x-auto shadow-xs">
              <table className="w-full text-xs text-left border-collapse min-w-[700px]">
                <thead>
                  <tr className="border-b border-stone-200 bg-stone-50">
                    <th className="p-4 w-1/4 font-bold text-stone-500 uppercase tracking-wider text-[11px]">
                      Product Details
                    </th>
                    {comparedProducts.map((p) => (
                      <th key={p.id} className="p-4 w-1/4 align-top">
                        <div className="relative">
                          <button
                            onClick={() => removeFromComparison(p.id)}
                            className="absolute top-0 right-0 p-1 rounded-md text-stone-400 hover:text-rose-600 hover:bg-rose-50"
                            title="Remove from comparison"
                          >
                            <X className="w-4 h-4" />
                          </button>
                          <div className="relative h-32 w-full rounded-lg overflow-hidden bg-stone-100 mb-2 border border-stone-200">
                            <Image src={p.images[0]} alt={p.name} fill className="object-cover" />
                          </div>
                          <span className="text-[10px] font-mono text-stone-400 block">{p.sku}</span>
                          <Link
                            href={`/products/${p.slug}`}
                            className="font-bold text-stone-900 text-xs hover:text-[#d4560a] line-clamp-2 mt-0.5"
                          >
                            {p.name}
                          </Link>
                          <div className="mt-2 flex items-center justify-between">
                            <span className="font-bold text-stone-900">
                              {p.price ? formatCurrency(p.price) : p.priceMode}
                            </span>
                            <Link
                              href={`/request-quote?productId=${p.id}`}
                              className="px-2.5 py-1 bg-[#d4560a] text-white rounded text-[11px] font-semibold"
                            >
                              Quote
                            </Link>
                          </div>
                        </div>
                      </th>
                    ))}
                    {comparedProducts.length < 3 && (
                      <th className="p-4 w-1/4 align-middle text-center bg-stone-50/50">
                        <Link
                          href="/products"
                          className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-stone-300 rounded-xl hover:border-stone-400 transition-colors text-stone-500 hover:text-stone-800"
                        >
                          <Plus className="w-6 h-6 mb-1 text-[#d4560a]" />
                          <span className="font-semibold text-xs">Add Product</span>
                          <span className="text-[10px] text-stone-400">Up to 3 products</span>
                        </Link>
                      </th>
                    )}
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  {/* Category & Industry */}
                  <tr>
                    <td className="p-3.5 font-bold text-stone-500 bg-stone-50/50">Sector / Category</td>
                    {comparedProducts.map((p) => (
                      <td key={p.id} className="p-3.5 font-medium text-stone-800">
                        {p.industryName} ({p.categoryName})
                      </td>
                    ))}
                    {comparedProducts.length < 3 && <td className="bg-stone-50/30" />}
                  </tr>

                  {/* MOQ */}
                  <tr>
                    <td className="p-3.5 font-bold text-stone-500 bg-stone-50/50">Minimum Order (MOQ)</td>
                    {comparedProducts.map((p) => (
                      <td key={p.id} className="p-3.5 font-bold text-stone-900">
                        {p.moq}
                      </td>
                    ))}
                    {comparedProducts.length < 3 && <td className="bg-stone-50/30" />}
                  </tr>

                  {/* Lead Time */}
                  <tr>
                    <td className="p-3.5 font-bold text-stone-500 bg-stone-50/50">Production Lead Time</td>
                    {comparedProducts.map((p) => (
                      <td key={p.id} className="p-3.5 text-stone-800 font-medium">
                        {p.leadTime}
                      </td>
                    ))}
                    {comparedProducts.length < 3 && <td className="bg-stone-50/30" />}
                  </tr>

                  {/* Dynamic Technical Specs */}
                  {allSpecKeys.map((key) => (
                    <tr key={key}>
                      <td className="p-3.5 font-bold text-stone-500 bg-stone-50/50">{key}</td>
                      {comparedProducts.map((p) => (
                        <td key={p.id} className="p-3.5 text-stone-800">
                          {p.specs[key] || "—"}
                        </td>
                      ))}
                      {comparedProducts.length < 3 && <td className="bg-stone-50/30" />}
                    </tr>
                  ))}

                  {/* Customization */}
                  <tr>
                    <td className="p-3.5 font-bold text-stone-500 bg-stone-50/50">Customization</td>
                    {comparedProducts.map((p) => (
                      <td key={p.id} className="p-3.5 text-emerald-700 font-semibold">
                        {p.customizationAvailable ? "✓ Custom Drawings Accepted" : "Standard Catalog Only"}
                      </td>
                    ))}
                    {comparedProducts.length < 3 && <td className="bg-stone-50/30" />}
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
