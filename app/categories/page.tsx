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
  Package,
  Search,
  ChevronRight
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
    <div className="min-h-screen flex flex-col bg-[#fafaf8]">
      <Navbar />

      <main className="flex-1 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-1.5 text-xs text-stone-500 mb-6">
            <Link href="/" className="hover:text-stone-900">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-stone-900 font-semibold">Product Categories</span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 border-b border-stone-200 mb-8 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#d4560a]">
                Product Classification
              </span>
              <h1 className="text-3xl font-extrabold text-stone-900 tracking-tight mt-1">
                Industrial Product Categories
              </h1>
              <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-xl">
                Browse our comprehensive catalogue categorized across 30+ precision engineering, machinery, and material groups.
              </p>
            </div>

            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search categories..."
                className="w-full bg-white pl-9 pr-4 py-2 border border-stone-300 rounded-lg text-xs text-stone-900 focus:outline-none focus:border-[#d4560a]"
              />
            </div>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCategories.map((cat) => {
              const categoryProductCount = products.filter(
                (p) => p.categoryId === cat.id
              ).length || cat.productCount;

              return (
                <div
                  key={cat.id}
                  className="bg-white rounded-xl border border-stone-200 overflow-hidden flex flex-col justify-between hover:shadow-lg transition-all group"
                >
                  <div>
                    <div className="relative h-44 w-full bg-stone-100 overflow-hidden">
                      <Image
                        src={cat.image}
                        alt={cat.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3 text-white">
                        <span className="text-[10px] uppercase font-mono text-amber-300 block">
                          {cat.industryName}
                        </span>
                        <h2 className="font-bold text-base leading-tight drop-shadow-sm">
                          {cat.name}
                        </h2>
                      </div>
                    </div>

                    <div className="p-4 space-y-3">
                      <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                        {cat.description}
                      </p>

                      <div className="space-y-1">
                        <span className="text-[10px] font-bold uppercase text-stone-400">
                          Sub-Classifications:
                        </span>
                        <div className="flex flex-wrap gap-1">
                          {cat.subcategories.map((sub) => (
                            <span
                              key={sub}
                              className="text-[11px] bg-stone-100 text-stone-700 px-2 py-0.5 rounded"
                            >
                              {sub}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                    <span className="text-stone-500 font-medium">
                      <strong>{categoryProductCount}</strong> Products listed
                    </span>

                    <Link
                      href={`/categories/${cat.slug}`}
                      className="text-[#d4560a] font-bold hover:underline flex items-center gap-1"
                    >
                      <span>Explore Category</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
