"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { useDemoState } from "@/lib/services/demo-state-context";
import {
  Search,
  Filter,
  Scale,
  Clock,
  ArrowRight,
  FileText,
  ChevronRight,
  RotateCcw,
  Check,
  ShieldCheck,
  Cpu,
  Layers
} from "lucide-react";
import { formatCurrency } from "@/lib/utils";

export default function ProductsCataloguePage() {
  const {
    products,
    categories,
    comparisonProductIds,
    addToComparison,
    removeFromComparison
  } = useDemoState();

  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [materialFilter, setMaterialFilter] = useState<string>("all");
  const [toleranceFilter, setToleranceFilter] = useState<string>("all");
  const [priceModeFilter, setPriceModeFilter] = useState<string>("all");
  const [sortBy, setSortBy] = useState<"relevance" | "newest" | "views">("relevance");

  const materials = [
    "Stainless Steel 316L",
    "Titanium Grade 5 (Ti-6Al-4V)",
    "Inconel 718",
    "Alloy Steel EN353",
    "42CrMo4 / AISI 4140",
    "Aerospace Aluminum 7075-T6",
    "Ductile Iron GGG40",
    "Phosphor Bronze PB2"
  ];

  const filteredProducts = products
    .filter((p) => {
      const matchesCategory = categoryFilter === "all" || p.categoryId === categoryFilter;
      const matchesMode = priceModeFilter === "all" || p.priceMode === priceModeFilter;
      
      const matchesMaterial =
        materialFilter === "all" ||
        (p.materials && p.materials.some((m) => m.toLowerCase().includes(materialFilter.toLowerCase()))) ||
        (p.specs && Object.values(p.specs).some((v) => v.toLowerCase().includes(materialFilter.toLowerCase())));

      const matchesTolerance =
        toleranceFilter === "all" ||
        (p.specs && Object.values(p.specs).some((v) => v.toLowerCase().includes(toleranceFilter.toLowerCase())));

      const matchesQuery =
        searchQuery === "" ||
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.sku.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (p.materials && p.materials.some((m) => m.toLowerCase().includes(searchQuery.toLowerCase())));

      return matchesCategory && matchesMode && matchesMaterial && matchesTolerance && matchesQuery;
    })
    .sort((a, b) => {
      if (sortBy === "views") return (b.viewsCount || 0) - (a.viewsCount || 0);
      return 0;
    });

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
            <span className="text-stone-900 font-semibold">Precision CNC Components</span>
          </div>

          {/* Page Heading */}
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 border-b border-stone-200 mb-8 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-xs font-bold uppercase tracking-widest text-[#d4560a]">
                  INDUSTRIA Precision Manufacturing
                </span>
                <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 text-[10px] font-bold border border-emerald-200">
                  ISO 9001 & IATF 16949 Certified
                </span>
              </div>
              <h1 className="text-3xl font-extrabold text-stone-900 tracking-tight">
                High-Tolerance Engineered Components
              </h1>
              <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-2xl">
                Browse precision 5-axis CNC milled impellers, splined drivetrain shafts, ASME flanges, hydraulic manifolds, and heavy welded gantry bases manufactured to ±0.005mm tolerances.
              </p>
            </div>

            <div className="flex items-center gap-3">
              {comparisonProductIds.length > 0 && (
                <Link
                  href="/compare"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#d4560a] text-white text-xs font-bold shadow-sm"
                >
                  <Scale className="w-4 h-4" />
                  <span>Compare ({comparisonProductIds.length}/3)</span>
                </Link>
              )}

              <Link
                href="/request-quote"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold shadow-sm transition-colors"
              >
                <FileText className="w-4 h-4 text-amber-400" />
                <span>Upload Custom CAD Drawing</span>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Filter Sidebar */}
            <aside className="lg:col-span-3 bg-white p-5 rounded-xl border border-stone-200 space-y-6 shadow-xs sticky top-24">
              <div className="flex items-center justify-between pb-3 border-b border-stone-100">
                <div className="flex items-center gap-1.5 font-bold text-xs uppercase tracking-wider text-stone-900">
                  <Filter className="w-4 h-4 text-[#d4560a]" />
                  <span>Filter Toolroom</span>
                </div>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setCategoryFilter("all");
                    setMaterialFilter("all");
                    setToleranceFilter("all");
                    setPriceModeFilter("all");
                  }}
                  className="text-[11px] text-stone-400 hover:text-stone-700 flex items-center gap-1"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset All</span>
                </button>
              </div>

              {/* Component Category */}
              <div>
                <label className="block text-xs font-bold text-stone-800 mb-2">
                  Component Category
                </label>
                <div className="space-y-1.5">
                  <button
                    onClick={() => setCategoryFilter("all")}
                    className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-medium flex items-center justify-between transition-colors ${
                      categoryFilter === "all"
                        ? "bg-stone-900 text-white font-semibold"
                        : "text-stone-600 hover:bg-stone-50"
                    }`}
                  >
                    <span>All Precision Components</span>
                    <span className="text-[10px] opacity-75">{products.length}</span>
                  </button>

                  {categories.slice(0, 6).map((cat) => {
                    const count = products.filter((p) => p.categoryId === cat.id).length;
                    return (
                      <button
                        key={cat.id}
                        onClick={() => setCategoryFilter(cat.id)}
                        className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-medium flex items-center justify-between transition-colors ${
                          categoryFilter === cat.id
                            ? "bg-[#d4560a] text-white font-semibold"
                            : "text-stone-600 hover:bg-stone-50"
                        }`}
                      >
                        <span className="truncate pr-2">{cat.name}</span>
                        {count > 0 && <span className="text-[10px] opacity-75">{count}</span>}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Material Grade */}
              <div>
                <label className="block text-xs font-bold text-stone-800 mb-1.5">
                  Raw Material Grade
                </label>
                <select
                  value={materialFilter}
                  onChange={(e) => setMaterialFilter(e.target.value)}
                  className="w-full bg-stone-50 border border-stone-300 rounded-lg p-2 text-xs text-stone-800 focus:outline-none focus:border-[#d4560a]"
                >
                  <option value="all">All Material Grades</option>
                  {materials.map((m) => (
                    <option key={m} value={m}>
                      {m}
                    </option>
                  ))}
                </select>
              </div>

              {/* Machining Tolerance */}
              <div>
                <label className="block text-xs font-bold text-stone-800 mb-1.5">
                  Tolerance Standard
                </label>
                <select
                  value={toleranceFilter}
                  onChange={(e) => setToleranceFilter(e.target.value)}
                  className="w-full bg-stone-50 border border-stone-300 rounded-lg p-2 text-xs text-stone-800 focus:outline-none focus:border-[#d4560a]"
                >
                  <option value="all">All Tolerances</option>
                  <option value="0.005">Ultra-Precision (±0.005 mm / 5 Microns)</option>
                  <option value="0.01">High-Precision (±0.01 mm)</option>
                  <option value="0.05">Standard CNC (±0.05 mm)</option>
                </select>
              </div>

              {/* Commercial Mode */}
              <div>
                <label className="block text-xs font-bold text-stone-800 mb-1.5">
                  Commercial Sourcing Mode
                </label>
                <select
                  value={priceModeFilter}
                  onChange={(e) => setPriceModeFilter(e.target.value)}
                  className="w-full bg-stone-50 border border-stone-300 rounded-lg p-2 text-xs text-stone-800 focus:outline-none focus:border-[#d4560a]"
                >
                  <option value="all">All Sourcing Modes</option>
                  <option value="Request Quote">Request Quote (Custom CAD / OEM)</option>
                  <option value="Buy Now">Standard Off-the-Shelf</option>
                </select>
              </div>

              {/* Direct CAD Upload CTA Box */}
              <div className="p-3.5 rounded-xl bg-orange-50 border border-orange-200 text-xs text-stone-700 leading-snug space-y-2">
                <div className="font-bold text-stone-900 flex items-center gap-1.5">
                  <Cpu className="w-4 h-4 text-[#d4560a]" />
                  <span>Custom CAD Machining</span>
                </div>
                <p className="text-[11px] text-stone-600">
                  Have a proprietary drawing (.STEP, .DWG, .PDF)? Submit directly to CAM toolpath feasibility for an instant estimate.
                </p>
                <Link
                  href="/request-quote"
                  className="block text-center py-1.5 px-3 bg-[#d4560a] hover:bg-[#b84605] text-white text-[11px] font-bold rounded-lg transition-colors"
                >
                  Launch 6-Step RFQ
                </Link>
              </div>
            </aside>

            {/* Right Product Grid */}
            <div className="lg:col-span-9 space-y-6">
              {/* Search bar & Sort Controls */}
              <div className="bg-white p-3.5 rounded-xl border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-xs">
                <div className="relative flex-1 w-full">
                  <Search className="w-4 h-4 text-stone-400 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by component name, SKU, material grade (e.g. Ti-6Al-4V, SS316L, EN353)..."
                    className="w-full bg-stone-50 pl-9 pr-4 py-1.5 border border-stone-300 rounded-lg text-xs text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-[#d4560a]"
                  />
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-xs text-stone-500 font-medium">Sort:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                    className="bg-stone-50 border border-stone-300 rounded-lg px-2.5 py-1.5 text-xs text-stone-700 focus:outline-none"
                  >
                    <option value="relevance">Most Relevant</option>
                    <option value="views">Most Viewed</option>
                  </select>
                </div>
              </div>

              {/* Active Filter Indicators */}
              {(categoryFilter !== "all" || materialFilter !== "all" || toleranceFilter !== "all" || searchQuery !== "") && (
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <span className="text-stone-500 font-medium">Active filters:</span>
                  {categoryFilter !== "all" && (
                    <span className="px-2 py-0.5 rounded bg-stone-200 text-stone-800 font-semibold flex items-center gap-1">
                      Category: {categories.find((c) => c.id === categoryFilter)?.name}
                      <button onClick={() => setCategoryFilter("all")} className="hover:text-rose-600">×</button>
                    </span>
                  )}
                  {materialFilter !== "all" && (
                    <span className="px-2 py-0.5 rounded bg-stone-200 text-stone-800 font-semibold flex items-center gap-1">
                      Material: {materialFilter}
                      <button onClick={() => setMaterialFilter("all")} className="hover:text-rose-600">×</button>
                    </span>
                  )}
                  {toleranceFilter !== "all" && (
                    <span className="px-2 py-0.5 rounded bg-stone-200 text-stone-800 font-semibold flex items-center gap-1">
                      Tolerance: ±{toleranceFilter}mm
                      <button onClick={() => setToleranceFilter("all")} className="hover:text-rose-600">×</button>
                    </span>
                  )}
                  {searchQuery !== "" && (
                    <span className="px-2 py-0.5 rounded bg-stone-200 text-stone-800 font-semibold flex items-center gap-1">
                      &quot;{searchQuery}&quot;
                      <button onClick={() => setSearchQuery("")} className="hover:text-rose-600">×</button>
                    </span>
                  )}
                  <button
                    onClick={() => {
                      setCategoryFilter("all");
                      setMaterialFilter("all");
                      setToleranceFilter("all");
                      setSearchQuery("");
                    }}
                    className="text-[#d4560a] hover:underline font-bold text-xs ml-2"
                  >
                    Clear All
                  </button>
                </div>
              )}

              {/* Product Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((p) => {
                  const isComparing = comparisonProductIds.includes(p.id);

                  return (
                    <div
                      key={p.id}
                      className="bg-white rounded-xl border border-stone-200 overflow-hidden flex flex-col justify-between hover:shadow-lg transition-all group"
                    >
                      <div>
                        {/* Thumbnail */}
                        <div className="relative h-48 w-full bg-stone-100 overflow-hidden">
                          <Image
                            src={p.images[0]}
                            alt={p.name}
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <span className="absolute top-2 left-2 bg-stone-900/80 backdrop-blur-md text-white text-[10px] font-mono px-2 py-0.5 rounded font-bold">
                            {p.sku}
                          </span>
                          <span className="absolute top-2 right-2 text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#d4560a] text-white">
                            {p.priceMode}
                          </span>
                        </div>

                        {/* Info */}
                        <div className="p-4 space-y-2.5">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] uppercase font-bold text-amber-600 tracking-wider">
                              {p.categoryName}
                            </span>
                            <span className="text-[10px] text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded font-semibold border border-emerald-200 flex items-center gap-0.5">
                              <ShieldCheck className="w-2.5 h-2.5" />
                              CMM Verified
                            </span>
                          </div>

                          <Link href={`/products/${p.slug}`}>
                            <h3 className="font-bold text-sm text-stone-900 group-hover:text-[#d4560a] transition-colors line-clamp-2 leading-snug">
                              {p.name}
                            </h3>
                          </Link>
                          <p className="text-xs text-stone-500 line-clamp-2">{p.shortDescription}</p>

                          <div className="bg-stone-50 p-2.5 rounded-lg text-[11px] border border-stone-100 space-y-1">
                            {Object.entries(p.specs).slice(0, 2).map(([k, v]) => (
                              <div key={k} className="flex justify-between text-stone-600">
                                <span className="text-stone-400">{k}:</span>
                                <span className="font-medium text-stone-800 truncate max-w-[150px]">
                                  {v}
                                </span>
                              </div>
                            ))}
                          </div>

                          <div className="flex items-center justify-between text-xs text-stone-500 pt-1">
                            <span>MOQ: <strong>{p.moq}</strong></span>
                            <span className="flex items-center gap-1 text-[11px]">
                              <Clock className="w-3 h-3 text-stone-400" />
                              {p.leadTime}
                            </span>
                          </div>

                          {p.price && (
                            <div className="text-base font-extrabold text-stone-900 pt-1">
                              {formatCurrency(p.price)}
                              <span className="text-xs font-normal text-stone-500 ml-1">
                                / {p.unit}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Footer Actions */}
                      <div className="p-4 pt-0 border-t border-stone-100 mt-2 flex items-center justify-between gap-2">
                        <button
                          onClick={() => {
                            if (isComparing) removeFromComparison(p.id);
                            else addToComparison(p.id);
                          }}
                          className={`p-2 rounded-lg border text-xs flex items-center gap-1 ${
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
                            href={`/products/${p.slug}`}
                            className="px-3 py-1.5 rounded-lg border border-stone-200 text-stone-700 hover:bg-stone-50 text-xs font-medium"
                          >
                            Specs & CAD
                          </Link>
                          <Link
                            href={`/request-quote?productId=${p.id}`}
                            className="px-3 py-1.5 rounded-lg bg-[#d4560a] hover:bg-[#b84605] text-white text-xs font-semibold flex items-center gap-1 shadow-xs"
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
                <div className="text-center py-16 bg-white rounded-xl border border-stone-200 p-8 space-y-3">
                  <h3 className="font-bold text-stone-800 text-sm">
                    No components found matching your selected criteria.
                  </h3>
                  <p className="text-xs text-stone-500 max-w-sm mx-auto">
                    Try adjusting your material or category filter, or submit your custom 2D/3D drawing directly for an immediate toolpath quote.
                  </p>
                  <div className="flex items-center justify-center gap-3 pt-2">
                    <button
                      onClick={() => {
                        setSearchQuery("");
                        setCategoryFilter("all");
                        setMaterialFilter("all");
                        setToleranceFilter("all");
                        setPriceModeFilter("all");
                      }}
                      className="px-4 py-2 bg-stone-900 text-white rounded-lg text-xs font-semibold"
                    >
                      Reset All Filters
                    </button>
                    <Link
                      href="/request-quote"
                      className="px-4 py-2 bg-[#d4560a] text-white rounded-lg text-xs font-semibold"
                    >
                      Custom CAD RFQ
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
