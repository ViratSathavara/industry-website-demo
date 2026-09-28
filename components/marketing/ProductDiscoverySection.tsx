"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, SlidersHorizontal, ChevronDown, ArrowUpRight } from "lucide-react";
import { useDemoState } from "@/lib/services/demo-state-context";

export const ProductDiscoverySection: React.FC = () => {
  const { products } = useDemoState();
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All parts");

  const categories = [
    "All parts",
    "High-Pressure Flanges & Forgings",
    "5-Axis CNC Milling",
    "Precision Turning & Drivetrain",
    "Hydraulic Manifolds & Blocks",
    "Aerospace Actuation & Bushings"
  ];

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const query = search.toLowerCase();
      const matchesSearch =
        product.name.toLowerCase().includes(query) ||
        product.sku.toLowerCase().includes(query) ||
        product.shortDescription.toLowerCase().includes(query) ||
        (product.materials && product.materials.some((m) => m.toLowerCase().includes(query))) ||
        (product.specs && Object.values(product.specs).some((v) => v.toLowerCase().includes(query)));

      const matchesCat =
        selectedCategory === "All parts" || product.categoryName === selectedCategory;

      return matchesSearch && matchesCat;
    });
  }, [products, search, selectedCategory]);

  return (
    <section id="parts" className="bg-[#f5f0e7] px-5 py-24 md:px-10 md:py-32 lg:px-14">
      <div className="mx-auto max-w-[1440px]">
        {/* Header */}
        <div className="flex flex-col justify-between gap-8 border-b border-[#d0c8bd] pb-8 md:flex-row md:items-end">
          <div>
            <span className="eyebrow text-[#bb5b2c]">Parts index / 04</span>
            <h2 className="mt-5 font-display text-[clamp(3rem,6vw,6.1rem)] leading-[.9] tracking-[-.04em] text-[#20272b]">
              Start with the <em className="text-[#bb5b2c]">part.</em>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-[#687173]">
            Production-verified 5-axis milled components, drivetrain splines, ASME flanges, and hydraulic blocks calibrated to ±0.005mm limits.
          </p>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="mt-7 flex flex-col gap-3 md:flex-row">
          <label className="relative flex flex-1 items-center border border-[#cfc5b5] bg-[#eee8dd]">
            <Search size={17} className="ml-4 text-[#8b9290]" />
            <input
              aria-label="Search parts"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by part name, SKU, alloy (e.g. Ti-6Al-4V, SS316L, EN353), or tolerance..."
              className="w-full bg-transparent px-3 py-3.5 text-sm outline-none placeholder:text-[#8b9290]"
            />
          </label>
          <div className="relative flex items-center border border-[#cfc5b5] bg-[#eee8dd] md:w-72">
            <SlidersHorizontal size={15} className="ml-4 text-[#8b9290]" />
            <select
              aria-label="Filter part category"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full appearance-none bg-transparent px-3 py-3.5 text-xs outline-none cursor-pointer pr-8 font-mono"
            >
              {categories.map((c) => (
                <option key={c} value={c} className="bg-[#f5f0e7] text-[#20272b]">
                  {c}
                </option>
              ))}
            </select>
            <ChevronDown size={14} className="pointer-events-none absolute right-3 text-[#8b9290]" />
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="mt-9 grid gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((p) => {
            const specSummary = Object.entries(p.specs || {})[0];
            const specText = specSummary ? `${specSummary[0]}: ${specSummary[1]}` : p.moq;

            return (
              <article key={p.id} className="group">
                <div className="relative aspect-[1.35] overflow-hidden bg-[#20272b] border border-[#d0c8bd]">
                  <Image
                    src={p.images[0]}
                    alt={p.name}
                    fill
                    unoptimized={p.images[0].endsWith(".svg")}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover p-3 grayscale-[.25] transition-transform duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  />
                  <span className="absolute left-3 top-3 bg-[#f5f0e7] px-2 py-1 font-mono text-[9px] uppercase tracking-[.1em] text-[#bb5b2c] font-bold">
                    {p.sku}
                  </span>
                  <Link
                    href={`/request-quote?productId=${p.id}`}
                    aria-label={`Request quote for ${p.name}`}
                    className="absolute bottom-3 right-3 grid size-9 place-items-center bg-[#e46e2e] text-white opacity-0 transition-opacity group-hover:opacity-100 shadow-lg"
                  >
                    <ArrowUpRight size={17} />
                  </Link>
                </div>

                <div className="flex items-start justify-between border-b border-[#d0c8bd] py-4">
                  <div className="pr-3">
                    <p className="font-mono text-[10px] uppercase tracking-[.13em] text-[#bb5b2c]">
                      {p.categoryName}
                    </p>
                    <h3 className="mt-1.5 text-[15px] font-semibold text-[#20272b]">
                      <Link
                        href={`/products/${p.slug}`}
                        className="hover:text-[#e46e2e] transition-colors"
                      >
                        {p.name}
                      </Link>
                    </h3>
                    <p className="mt-1 text-xs text-[#687173] line-clamp-1">{p.shortDescription}</p>
                  </div>
                  <span className="mt-1 text-right font-mono text-[9px] leading-4 text-[#7d8584] shrink-0 max-w-[130px] truncate">
                    {specText}
                  </span>
                </div>
              </article>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="border-b border-[#d0c8bd] py-16 text-center text-sm text-[#687173]">
            No components match your search. Try &quot;titanium&quot;, &quot;flange&quot;, &quot;impeller&quot;, or &quot;manifold&quot;.
          </div>
        )}

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-[.12em] text-[#858b89]">
          <span>
            Showing {filteredProducts.length} of {products.length} precision component lines
          </span>
          <Link
            href="/products"
            className="flex items-center gap-1.5 text-[#bb5b2c] hover:underline font-bold"
          >
            Open Complete Technical Component Catalog <ArrowUpRight size={12} />
          </Link>
        </div>
      </div>
    </section>
  );
};
