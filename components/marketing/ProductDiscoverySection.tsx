"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useDemoState } from "@/lib/services/demo-state-context";
import {
  Search,
  Filter,
  FileText,
  Eye,
  Scale,
  Check,
  CheckCircle2,
  Clock,
  ArrowRight,
  ShieldCheck
} from "lucide-react";
import { formatCurrency } from "@/lib/utils";

export const ProductDiscoverySection: React.FC = () => {
  const {
    products,
    categories,
    comparisonProductIds,
    addToComparison,
    removeFromComparison
  } = useDemoState();

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [priceModeFilter, setPriceModeFilter] = useState<string>("all");

  const filteredProducts = products.filter((p) => {
    const matchesCategory =
      selectedCategory === "all" || p.categoryId === selectedCategory;
    const matchesMode =
      priceModeFilter === "all" || p.priceMode === priceModeFilter;
    const matchesQuery =
      searchQuery === "" ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.sku.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesMode && matchesQuery;
  });

  const currentCategories = categories.slice(0, 6);

  return (
    <section className="py-20 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#d4560a]">
              Factory Product Catalogue
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight mt-1">
              Precision CNC Machined & Engineered Components
            </h2>
            <p className="text-sm text-stone-600 mt-2 max-w-xl">
              5-Axis milled impellers, splined drivetrain shafts, ASME pressure flanges, and hydraulic blocks built to ±0.005mm tolerances.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {comparisonProductIds.length > 0 && (
              <Link
                href="/compare"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-orange-50 border border-orange-200 text-[#d4560a] text-xs font-bold"
              >
                <Scale className="w-4 h-4" />
                <span>Compare ({comparisonProductIds.length}/3)</span>
              </Link>
            )}
            <Link
              href="/products"
              className="inline-flex items-center gap-1 text-xs font-bold text-[#d4560a] hover:underline"
            >
              <span>View Full Catalogue ({products.length})</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Filter & Search Bar Controls */}
        <div className="bg-stone-50 p-4 rounded-xl border border-stone-200 mb-8 space-y-3">
          <div className="flex flex-col sm:flex-row gap-3 items-center">
            {/* Search Input */}
            <div className="relative flex-1 w-full">
              <Search className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search precision components, material grades (e.g. Ti-6Al-4V, SS316L, 7075-T6)..."
                className="w-full bg-white pl-9 pr-4 py-2 border border-stone-300 rounded-lg text-xs text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-1 focus:ring-[#d4560a] focus:border-[#d4560a]"
              />
            </div>

            {/* Price Mode Selector */}
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <span className="text-xs text-stone-500 font-medium shrink-0">Mode:</span>
              <select
                value={priceModeFilter}
                onChange={(e) => setPriceModeFilter(e.target.value)}
                className="bg-white border border-stone-300 rounded-lg px-2.5 py-2 text-xs text-stone-700 focus:outline-none"
              >
                <option value="all">All Sourcing Modes</option>
                <option value="Request Quote">Request Quote (Custom CAD / OEM)</option>
                <option value="Buy Now">Standard Off-the-Shelf</option>
              </select>
            </div>
          </div>

          {/* Category Filter Pills */}
          {currentCategories.length > 0 && (
            <div className="flex items-center gap-2 overflow-x-auto pt-1">
              <button
                onClick={() => setSelectedCategory("all")}
                className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
                  selectedCategory === "all"
                    ? "bg-stone-900 text-white"
                    : "bg-white text-stone-600 border border-stone-200 hover:bg-stone-100"
                }`}
              >
                All Components ({products.length})
              </button>
              {currentCategories.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setSelectedCategory(c.id)}
                  className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
                    selectedCategory === c.id
                      ? "bg-[#d4560a] text-white"
                      : "bg-white text-stone-600 border border-stone-200 hover:bg-stone-100"
                  }`}
                >
                  {c.name}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => {
            const isComparing = comparisonProductIds.includes(product.id);

            return (
              <div
                key={product.id}
                className="bg-white rounded-xl border border-stone-200 overflow-hidden flex flex-col justify-between hover:shadow-lg transition-all duration-200 group"
              >
                <div>
                  {/* Product Image Header */}
                  <div className="relative h-52 w-full bg-stone-100 overflow-hidden">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
                      <span className="bg-stone-900/85 backdrop-blur-md text-white text-[10px] font-mono px-2 py-0.5 rounded font-semibold">
                        {product.sku}
                      </span>
                    </div>

                    <div className="absolute top-2.5 right-2.5">
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-full shadow-xs ${
                          product.priceMode === "Buy Now"
                            ? "bg-emerald-600 text-white"
                            : "bg-[#d4560a] text-white"
                        }`}
                      >
                        {product.priceMode}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] text-amber-600 font-semibold uppercase tracking-wider">
                        {product.categoryName}
                      </span>
                      <span className="text-[10px] text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded font-semibold border border-emerald-200 flex items-center gap-0.5">
                        <ShieldCheck className="w-2.5 h-2.5" />
                        CMM Verified
                      </span>
                    </div>

                    <Link href={`/products/${product.slug}`}>
                      <h3 className="font-bold text-sm text-stone-900 group-hover:text-[#d4560a] transition-colors line-clamp-2 mt-0.5 leading-snug">
                        {product.name}
                      </h3>
                    </Link>

                    <p className="text-xs text-stone-500 line-clamp-2 leading-relaxed">
                      {product.shortDescription}
                    </p>

                    {/* Quick Specs Snippet */}
                    <div className="bg-stone-50 p-2.5 rounded-lg border border-stone-100 space-y-1 text-[11px]">
                      {Object.entries(product.specs).slice(0, 2).map(([key, val]) => (
                        <div key={key} className="flex justify-between text-stone-600">
                          <span className="text-stone-400">{key}:</span>
                          <span className="font-medium text-stone-800 truncate max-w-[170px] text-right">
                            {val}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* MOQ & Lead Time */}
                    <div className="flex items-center justify-between text-xs text-stone-500 pt-1">
                      <div className="flex items-center gap-1">
                        <span className="text-stone-400">MOQ:</span>
                        <strong className="text-stone-800">{product.moq}</strong>
                      </div>
                      <div className="flex items-center gap-1 text-[11px]">
                        <Clock className="w-3.5 h-3.5 text-stone-400" />
                        <span>{product.leadTime}</span>
                      </div>
                    </div>

                    {product.price && (
                      <div className="text-base font-extrabold text-stone-900 pt-1">
                        {formatCurrency(product.price)}
                        <span className="text-xs font-normal text-stone-500 ml-1">
                          / {product.unit}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="p-4 pt-0 border-t border-stone-100 mt-2 flex items-center justify-between gap-2">
                  <button
                    onClick={() => {
                      if (isComparing) removeFromComparison(product.id);
                      else addToComparison(product.id);
                    }}
                    className={`p-2 rounded-lg border text-xs flex items-center gap-1 transition-colors ${
                      isComparing
                        ? "bg-orange-50 border-[#d4560a] text-[#d4560a]"
                        : "border-stone-200 text-stone-600 hover:bg-stone-50"
                    }`}
                  >
                    <Scale className="w-3.5 h-3.5" />
                    <span className="text-[11px]">{isComparing ? "Added" : "Compare"}</span>
                  </button>

                  <div className="flex items-center gap-1.5 flex-1 justify-end">
                    <Link
                      href={`/products/${product.slug}`}
                      className="px-3 py-1.5 rounded-lg border border-stone-200 text-stone-700 hover:bg-stone-50 text-xs font-medium"
                    >
                      Specs & CAD
                    </Link>
                    <Link
                      href={`/request-quote?productId=${product.id}`}
                      className="px-3 py-1.5 rounded-lg bg-[#d4560a] hover:bg-[#b84605] text-white text-xs font-semibold flex items-center gap-1 shadow-xs transition-colors"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>RFQ</span>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16 bg-stone-50 rounded-xl border border-stone-200 p-8 space-y-3">
            <h3 className="font-bold text-stone-800 text-sm">
              No components matching your query.
            </h3>
            <p className="text-xs text-stone-500">
              Clear your search or submit your custom drawing via our 6-step RFQ builder.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
                setPriceModeFilter("all");
              }}
              className="px-4 py-2 bg-stone-900 text-white rounded-lg text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
