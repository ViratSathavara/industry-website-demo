"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { useDemoState } from "@/lib/services/demo-state-context";
import {
  Layers,
  ArrowRight,
  Search,
  ChevronRight,
  Cpu
} from "lucide-react";

export default function CategoriesPage() {
  const { categories, products } = useDemoState();
  const [search, setSearch] = useState("");

  const filteredCategories = categories.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.industryName.toLowerCase().includes(search.toLowerCase()) ||
    c.description.toLowerCase().includes(search.toLowerCase())
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
            <span className="text-[#f5f0e7] font-semibold">Component Families</span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 border-b border-white/10 mb-10 gap-4">
            <div>
              <span className="eyebrow text-[#e7a45c]">Component Classification</span>
              <h1 className="text-4xl sm:text-5xl font-display tracking-tight text-[#f5f0e7] mt-2">
                Precision Component <em className="text-[#e7a45c]">Families.</em>
              </h1>
              <p className="text-xs sm:text-sm text-[#aeb5b2] mt-2 max-w-xl">
                Browse our manufacturing catalogue categorized across 5-axis CNC machining, high-pressure ASME flanges, drivetrain splines, and hydraulic manifolds.
              </p>
            </div>

            <div className="relative w-full sm:w-72">
              <Search size={14} className="text-[#7e8989] absolute left-3 top-3" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search component families..."
                className="w-full bg-[#171c1e] pl-9 pr-4 py-2 border border-white/15 text-xs text-[#f5f0e7] placeholder:text-[#7e8989] focus:outline-none focus:border-[#e7a45c]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCategories.map((c) => {
              const count = products.filter((p) => p.categoryId === c.id).length;

              return (
                <Link
                  key={c.id}
                  href={`/categories/${c.slug}`}
                  className="bg-[#171c1e] border border-white/10 hover:border-[#e7a45c]/50 p-6 flex flex-col justify-between transition-all group shadow-xl"
                >
                  <div className="space-y-4">
                    <div className="relative h-44 w-full overflow-hidden bg-[#20272b] border border-white/10">
                      <Image
                        src={c.image}
                        alt={c.name}
                        fill
                        unoptimized={c.image.endsWith(".svg")}
                        className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                      />
                      <span className="absolute top-3 left-3 bg-[#20272b]/90 backdrop-blur-md px-2.5 py-1 text-[#e7a45c] font-mono text-[10px] font-bold border border-[#e7a45c]/30">
                        {count} Components
                      </span>
                    </div>

                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-[.12em] text-[#e7a45c] font-bold block">
                        {c.industryName}
                      </span>
                      <h3 className="text-lg font-semibold text-[#f5f0e7] group-hover:text-[#e7a45c] transition-colors mt-1">
                        {c.name}
                      </h3>
                      <p className="text-xs text-[#aeb5b2] mt-2 leading-relaxed line-clamp-2">
                        {c.description}
                      </p>
                    </div>

                    {c.subcategories && c.subcategories.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {c.subcategories.slice(0, 3).map((sub) => (
                          <span
                            key={sub}
                            className="text-[10px] font-mono bg-[#20272b] text-[#d2d1c9] px-2 py-0.5 border border-white/10"
                          >
                            {sub}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="pt-4 border-t border-white/10 mt-4 flex items-center justify-between font-mono text-xs text-[#e7a45c]">
                    <span>Inspect Line Items</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
