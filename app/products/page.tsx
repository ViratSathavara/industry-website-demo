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
  FileText,
  ChevronRight,
  RotateCcw,
  ShieldCheck,
  Cpu
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
        (p.materials &&
          p.materials.some((m) => m.toLowerCase().includes(materialFilter.toLowerCase())));

      const matchesTolerance =
        toleranceFilter === "all" ||
        (p.specs &&
          Object.values(p.specs).some((val) =>
            val.toLowerCase().includes(toleranceFilter.toLowerCase())
          ));

      const matchesQuery =
        searchQuery === "" ||
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.sku.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (p.materials &&
          p.materials.some((m) => m.toLowerCase().includes(searchQuery.toLowerCase())));

      return (
        matchesCategory && matchesMode && matchesMaterial && matchesTolerance && matchesQuery
      );
    })
    .sort((a, b) => {
      if (sortBy === "views") return (b.viewsCount || 0) - (a.viewsCount || 0);
      return 0;
    });

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
            <span className="text-[#f5f0e7] font-semibold">Precision CNC Components</span>
          </div>

          {/* Page Heading */}
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-white/10 mb-10 gap-6">
            <div>
              <div className="flex items-center gap-2.5 mb-2">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#e7a45c]">
                  TIER-1 MANUFACTURING SPECIFICATIONS
                </span>
                <span className="px-2.5 py-0.5 rounded bg-white/5 text-[#e7a45c] text-[10px] font-mono font-bold border border-[#e7a45c]/30">
                  IATF 16949 & AS9100D
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-display tracking-tight text-[#f5f0e7]">
                High-Tolerance <em className="text-[#e7a45c]">Engineered Components.</em>
              </h1>
              <p className="text-xs sm:text-sm text-[#aeb5b2] mt-3 max-w-2xl leading-relaxed">
                Explore production-verified 5-axis CNC milled impellers, splined drivetrain shafts, ASME flanges, hydraulic manifolds, and heavy welded structures calibrated to ±0.005mm limits.
              </p>
            </div>

            <div className="flex items-center gap-3">
              {comparisonProductIds.length > 0 && (
                <Link
                  href="/compare"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#e7a45c] hover:bg-[#f4b875] text-[#20272b] text-xs font-bold transition-all font-mono"
                >
                  <Scale size={14} />
                  <span>Compare ({comparisonProductIds.length}/3)</span>
                </Link>
              )}

              <Link
                href="/request-quote"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#e46e2e] hover:bg-[#f38b43] text-[#fff5e9] text-xs font-bold uppercase tracking-[.1em] transition-all"
              >
                <FileText size={14} />
                <span>Upload Custom CAD</span>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Filter Sidebar */}
            <aside className="lg:col-span-3 bg-[#171c1e] p-5 border border-white/10 space-y-6 shadow-2xl sticky top-28">
              <div className="flex items-center justify-between pb-3.5 border-b border-white/10">
                <div className="flex items-center gap-2 font-mono font-bold text-xs uppercase tracking-wider text-[#f5f0e7]">
                  <Filter size={14} className="text-[#e7a45c]" />
                  <span>Machining Filters</span>
                </div>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setCategoryFilter("all");
                    setMaterialFilter("all");
                    setToleranceFilter("all");
                    setPriceModeFilter("all");
                  }}
                  className="text-[11px] text-[#899492] hover:text-[#e7a45c] flex items-center gap-1 transition-colors font-mono"
                >
                  <RotateCcw size={12} />
                  <span>Reset</span>
                </button>
              </div>

              {/* Component Category */}
              <div>
                <label className="block text-xs font-bold font-mono text-[#d2d1c9] mb-2.5">
                  Component Family
                </label>
                <div className="space-y-1.5">
                  <button
                    onClick={() => setCategoryFilter("all")}
                    className={`w-full text-left px-3 py-2 text-xs font-medium flex items-center justify-between transition-colors ${
                      categoryFilter === "all"
                        ? "bg-[#293337] text-[#e7a45c] font-bold border border-[#e7a45c]/40"
                        : "text-[#899492] hover:bg-white/5 hover:text-[#f5f0e7]"
                    }`}
                  >
                    <span>All Precision Components</span>
                    <span className="text-[10px] font-mono opacity-75">{products.length}</span>
                  </button>

                  {categories.slice(0, 6).map((cat) => {
                    const count = products.filter((p) => p.categoryId === cat.id).length;
                    const isSelected = categoryFilter === cat.id;
                    return (
                      <button
                        key={cat.id}
                        onClick={() => setCategoryFilter(cat.id)}
                        className={`w-full text-left px-3 py-2 text-xs font-medium flex items-center justify-between transition-colors ${
                          isSelected
                            ? "bg-[#293337] text-[#e7a45c] font-bold border border-[#e7a45c]/40"
                            : "text-[#899492] hover:bg-white/5 hover:text-[#f5f0e7]"
                        }`}
                      >
                        <span className="truncate pr-2">{cat.name}</span>
                        {count > 0 && <span className="text-[10px] font-mono opacity-75">{count}</span>}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Material Grade */}
              <div>
                <label className="block text-xs font-bold font-mono text-[#d2d1c9] mb-2">
                  Raw Material Grade
                </label>
                <select
                  value={materialFilter}
                  onChange={(e) => setMaterialFilter(e.target.value)}
                  className="w-full bg-[#20272b] border border-white/15 p-2.5 text-xs text-[#f5f0e7] focus:outline-none focus:border-[#e7a45c]"
                >
                  <option value="all">All Material Grades</option>
                  {materials.map((m) => (
                    <option key={m} value={m} className="bg-[#20272b] text-[#f5f0e7]">
                      {m}
                    </option>
                  ))}
                </select>
              </div>

              {/* Machining Tolerance */}
              <div>
                <label className="block text-xs font-bold font-mono text-[#d2d1c9] mb-2">
                  Tolerance Standard
                </label>
                <select
                  value={toleranceFilter}
                  onChange={(e) => setToleranceFilter(e.target.value)}
                  className="w-full bg-[#20272b] border border-white/15 p-2.5 text-xs text-[#f5f0e7] focus:outline-none focus:border-[#e7a45c]"
                >
                  <option value="all">All Tolerances</option>
                  <option value="0.005" className="bg-[#20272b] text-[#f5f0e7]">
                    Ultra-Precision (±0.005 mm / 5 Microns)
                  </option>
                  <option value="0.01" className="bg-[#20272b] text-[#f5f0e7]">
                    High-Precision (±0.01 mm)
                  </option>
                  <option value="0.05" className="bg-[#20272b] text-[#f5f0e7]">
                    Standard CNC (±0.05 mm)
                  </option>
                </select>
              </div>

              {/* Commercial Mode */}
              <div>
                <label className="block text-xs font-bold font-mono text-[#d2d1c9] mb-2">
                  Contract Sourcing Mode
                </label>
                <select
                  value={priceModeFilter}
                  onChange={(e) => setPriceModeFilter(e.target.value)}
                  className="w-full bg-[#20272b] border border-white/15 p-2.5 text-xs text-[#f5f0e7] focus:outline-none focus:border-[#e7a45c]"
                >
                  <option value="all">All Sourcing Modes</option>
                  <option value="Request Quote" className="bg-[#20272b] text-[#f5f0e7]">
                    Custom CAD / OEM Contract
                  </option>
                  <option value="Buy Now" className="bg-[#20272b] text-[#f5f0e7]">
                    Standard Off-the-Shelf
                  </option>
                </select>
              </div>

              {/* Direct CAD Upload CTA Box */}
              <div className="p-4 bg-[#20272b] border border-white/10 text-xs text-[#d2d1c9] leading-snug space-y-2.5">
                <div className="font-bold text-[#f5f0e7] flex items-center gap-2 font-mono">
                  <Cpu size={14} className="text-[#e7a45c]" />
                  <span>Custom CAD Tooling</span>
                </div>
                <p className="text-[11px] text-[#899492]">
                  Have a proprietary drawing (.STEP, .IGES, .DWG, .PDF)? Submit directly to CAM toolpath feasibility for rapid quoting.
                </p>
                <Link
                  href="/request-quote"
                  className="block text-center py-2 px-3 bg-white/10 hover:bg-[#e46e2e] hover:text-[#fff5e9] text-[#f5f0e7] text-[11px] font-mono font-bold transition-colors border border-white/10"
                >
                  Launch 6-Step RFQ →
                </Link>
              </div>
            </aside>

            {/* Right Product Grid */}
            <div className="lg:col-span-9 space-y-6">
              {/* Search bar & Sort Controls */}
              <div className="bg-[#171c1e] p-4 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
                <div className="relative flex-1 w-full">
                  <Search size={14} className="text-[#7e8989] absolute left-3.5 top-3" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by component name, SKU, material grade (e.g. Ti-6Al-4V, SS316L, EN353)..."
                    className="w-full bg-[#20272b] pl-10 pr-4 py-2 border border-white/10 text-xs text-[#f5f0e7] placeholder:text-[#7e8989] focus:outline-none focus:border-[#e7a45c] transition-colors"
                  />
                </div>

                <div className="flex items-center gap-2 shrink-0 font-mono">
                  <span className="text-xs text-[#899492]">Sort:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                    className="bg-[#20272b] border border-white/10 px-3 py-2 text-xs text-[#d2d1c9] focus:outline-none focus:border-[#e7a45c]"
                  >
                    <option value="relevance">Most Relevant</option>
                    <option value="views">Most Viewed</option>
                  </select>
                </div>
              </div>

              {/* Active Filter Indicators */}
              {(categoryFilter !== "all" ||
                materialFilter !== "all" ||
                toleranceFilter !== "all" ||
                searchQuery !== "") && (
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                  <span className="text-[#899492]">Active filters:</span>
                  {categoryFilter !== "all" && (
                    <span className="px-2.5 py-1 bg-[#20272b] text-[#e7a45c] border border-[#e7a45c]/30 flex items-center gap-1.5">
                      Category: {categories.find((c) => c.id === categoryFilter)?.name}
                      <button onClick={() => setCategoryFilter("all")} className="hover:text-white">
                        ×
                      </button>
                    </span>
                  )}
                  {materialFilter !== "all" && (
                    <span className="px-2.5 py-1 bg-[#20272b] text-[#e7a45c] border border-[#e7a45c]/30 flex items-center gap-1.5">
                      Material: {materialFilter}
                      <button onClick={() => setMaterialFilter("all")} className="hover:text-white">
                        ×
                      </button>
                    </span>
                  )}
                  {toleranceFilter !== "all" && (
                    <span className="px-2.5 py-1 bg-[#20272b] text-[#e7a45c] border border-[#e7a45c]/30 flex items-center gap-1.5">
                      Tolerance: ±{toleranceFilter}mm
                      <button onClick={() => setToleranceFilter("all")} className="hover:text-white">
                        ×
                      </button>
                    </span>
                  )}
                  {searchQuery !== "" && (
                    <span className="px-2.5 py-1 bg-white/10 text-white border border-white/10 flex items-center gap-1.5">
                      &quot;{searchQuery}&quot;
                      <button onClick={() => setSearchQuery("")} className="hover:text-[#e46e2e]">
                        ×
                      </button>
                    </span>
                  )}
                  <button
                    onClick={() => {
                      setCategoryFilter("all");
                      setMaterialFilter("all");
                      setToleranceFilter("all");
                      setSearchQuery("");
                    }}
                    className="text-[#e7a45c] hover:underline font-bold text-xs ml-2"
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
                      className="bg-[#171c1e] border border-white/10 hover:border-[#e7a45c]/50 overflow-hidden flex flex-col justify-between transition-all group"
                    >
                      <div>
                        {/* Thumbnail */}
                        <div className="relative h-48 w-full bg-[#20272b] overflow-hidden">
                          <Image
                            src={p.images[0] || "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1000&q=80"}
                            alt={p.name}
                            fill
                            unoptimized={Boolean(p.images[0]?.endsWith(".svg"))}
                            sizes="(max-width: 768px) 100vw, 33vw"
                            className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#171c1e] via-transparent to-transparent opacity-80" />
                          <span className="absolute top-3 left-3 bg-[#20272b]/90 backdrop-blur-md text-[#e7a45c] text-[10px] font-mono px-2.5 py-1 font-bold border border-[#e7a45c]/30">
                            {p.sku}
                          </span>
                          <span className="absolute top-3 right-3 text-[10px] font-mono font-bold px-2.5 py-1 bg-[#20272b]/90 text-[#f5f0e7] border border-white/20">
                            {p.priceMode}
                          </span>
                        </div>

                        {/* Info */}
                        <div className="p-5 space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] uppercase font-mono font-bold text-[#e7a45c] tracking-wider">
                              {p.categoryName}
                            </span>
                            <span className="text-[10px] text-[#e7a45c] bg-[#20272b] px-2 py-0.5 font-mono border border-[#e7a45c]/30 flex items-center gap-1">
                              <ShieldCheck size={12} className="text-[#e7a45c]" />
                              CMM Verified
                            </span>
                          </div>

                          <Link href={`/products/${p.slug}`}>
                            <h3 className="font-semibold text-base text-[#f5f0e7] group-hover:text-[#e7a45c] transition-colors line-clamp-2 leading-snug">
                              {p.name}
                            </h3>
                          </Link>
                          <p className="text-xs text-[#aeb5b2] line-clamp-2">{p.shortDescription}</p>

                          <div className="bg-[#20272b] p-3 text-[11px] border border-white/5 space-y-1 font-mono">
                            {Object.entries(p.specs)
                              .slice(0, 2)
                              .map(([k, v]) => (
                                <div key={k} className="flex justify-between text-[#d2d1c9]">
                                  <span className="text-[#7e8989]">{k}:</span>
                                  <span className="font-medium text-[#f5f0e7] truncate max-w-[150px]">
                                    {v}
                                  </span>
                                </div>
                              ))}
                          </div>

                          <div className="flex items-center justify-between text-xs text-[#899492] pt-1 font-mono">
                            <span>
                              MOQ: <strong className="text-[#f5f0e7]">{p.moq}</strong>
                            </span>
                            <span className="flex items-center gap-1 text-[11px]">
                              <Clock size={12} className="text-[#7e8989]" />
                              {p.leadTime}
                            </span>
                          </div>

                          {p.price && (
                            <div className="text-base font-bold text-[#e7a45c] font-mono pt-1">
                              {formatCurrency(p.price)}
                              <span className="text-xs font-normal text-[#899492] ml-1">
                                / {p.unit}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Footer Actions */}
                      <div className="p-5 pt-0 border-t border-white/5 mt-3 flex items-center justify-between gap-2">
                        <button
                          onClick={() => {
                            if (isComparing) removeFromComparison(p.id);
                            else addToComparison(p.id);
                          }}
                          className={`p-2.5 border text-xs flex items-center gap-1.5 transition-all font-mono ${
                            isComparing
                              ? "bg-[#293337] border-[#e7a45c] text-[#e7a45c]"
                              : "border-white/10 text-[#899492] hover:bg-white/5 hover:text-[#f5f0e7]"
                          }`}
                        >
                          <Scale size={13} />
                          <span className="text-[11px]">{isComparing ? "Added" : "Compare"}</span>
                        </button>

                        <div className="flex items-center gap-2 flex-1 justify-end">
                          <Link
                            href={`/products/${p.slug}`}
                            className="px-3.5 py-2 border border-white/10 text-[#d2d1c9] hover:bg-white/5 hover:text-white text-xs font-medium transition-colors"
                          >
                            CAD Specs
                          </Link>
                          <Link
                            href={`/request-quote?productId=${p.id}`}
                            className="px-4 py-2 bg-[#e46e2e] hover:bg-[#f38b43] text-[#fff5e9] text-xs font-bold flex items-center gap-1.5 transition-all"
                          >
                            <FileText size={13} />
                            <span>RFQ</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {filteredProducts.length === 0 && (
                <div className="text-center py-16 bg-[#171c1e] border border-white/10 p-8 space-y-4">
                  <h3 className="font-display text-xl text-[#f5f0e7]">
                    No components found matching your selected criteria.
                  </h3>
                  <p className="text-xs text-[#aeb5b2] max-w-sm mx-auto leading-relaxed">
                    Try adjusting your material or category filter, or submit your custom 2D/3D drawing directly for an immediate CAM toolpath quote.
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
                      className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-[#f5f0e7] text-xs font-mono font-semibold transition-all border border-white/10"
                    >
                      Reset All Filters
                    </button>
                    <Link
                      href="/request-quote"
                      className="px-5 py-2.5 bg-[#e46e2e] hover:bg-[#f38b43] text-[#fff5e9] text-xs font-bold transition-all"
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
