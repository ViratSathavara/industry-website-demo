"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams, notFound } from "next/navigation";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { useDemoState } from "@/lib/services/demo-state-context";
import { ChevronRight, ArrowRight, FileText, Clock, Layers } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

export default function CategoryDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const { categories, products } = useDemoState();

  const category = categories.find((c) => c.slug === slug);

  if (!category) {
    return notFound();
  }

  const categoryProducts = products.filter((p) => p.categoryId === category.id);

  return (
    <div className="min-h-screen flex flex-col bg-[#fafaf8]">
      <Navbar />

      <main className="flex-1 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1.5 text-xs text-stone-500 mb-6">
            <Link href="/" className="hover:text-stone-900">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/categories" className="hover:text-stone-900">Categories</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-stone-900 font-semibold">{category.name}</span>
          </div>

          <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 mb-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
            <div className="space-y-2">
              <span className="text-xs uppercase font-bold text-[#d4560a]">
                Sector: {category.industryName}
              </span>
              <h1 className="text-3xl font-extrabold text-stone-900 tracking-tight">
                {category.name}
              </h1>
              <p className="text-xs sm:text-sm text-stone-600 max-w-2xl leading-relaxed">
                {category.description}
              </p>
            </div>

            <Link
              href="/request-quote"
              className="px-5 py-2.5 bg-[#d4560a] hover:bg-[#b84605] text-white text-xs font-bold rounded-lg shadow-sm shrink-0"
            >
              Request Custom RFQ
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryProducts.map((p) => (
              <div
                key={p.id}
                className="bg-white rounded-xl border border-stone-200 overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow group"
              >
                <div>
                  <div className="relative h-48 w-full bg-stone-100">
                    <Image src={p.images[0]} alt={p.name} fill className="object-cover" />
                    <span className="absolute top-2 left-2 bg-stone-900/80 text-white text-[10px] font-mono px-2 py-0.5 rounded font-bold">
                      {p.sku}
                    </span>
                  </div>
                  <div className="p-4 space-y-2">
                    <Link href={`/products/${p.slug}`}>
                      <h3 className="font-bold text-sm text-stone-900 group-hover:text-[#d4560a] line-clamp-2">
                        {p.name}
                      </h3>
                    </Link>
                    <p className="text-xs text-stone-500 line-clamp-2">{p.shortDescription}</p>
                    <div className="flex justify-between text-xs text-stone-500 pt-1">
                      <span>MOQ: <strong>{p.moq}</strong></span>
                      <span>Lead: <strong>{p.leadTime}</strong></span>
                    </div>
                  </div>
                </div>

                <div className="p-4 pt-2 border-t border-stone-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#d4560a]">
                    {p.price ? formatCurrency(p.price) : p.priceMode}
                  </span>
                  <Link
                    href={`/products/${p.slug}`}
                    className="text-xs text-stone-700 font-semibold hover:underline flex items-center gap-1"
                  >
                    <span>View Specs</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
