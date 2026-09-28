"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams, notFound } from "next/navigation";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { useDemoState } from "@/lib/services/demo-state-context";
import { ChevronRight, ArrowRight, ShieldCheck, Cpu } from "lucide-react";
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
            <Link href="/categories" className="hover:text-[#e7a45c] transition-colors">
              Component Families
            </Link>
            <ChevronRight size={13} className="text-[#7e8989]" />
            <span className="text-[#f5f0e7] font-semibold">{category.name}</span>
          </div>

          {/* Header Card */}
          <div className="bg-[#171c1e] border border-white/10 p-8 sm:p-10 mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xl relative overflow-hidden">
            <div className="space-y-3 max-w-3xl">
              <span className="eyebrow text-[#e7a45c] block">
                Sector: {category.industryName}
              </span>
              <h1 className="text-3xl sm:text-5xl font-display tracking-tight text-[#f5f0e7]">
                {category.name} <em className="text-[#e7a45c]">Catalogue.</em>
              </h1>
              <p className="text-xs sm:text-sm text-[#aeb5b2] leading-relaxed max-w-2xl">
                {category.description}
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <Link
                href="/request-quote"
                className="px-6 py-3 bg-[#e46e2e] hover:bg-[#bb5b2c] text-[#f5f0e7] text-xs font-semibold tracking-wider uppercase transition-all shadow-md inline-flex items-center gap-2"
              >
                <span>Request Custom RFQ</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryProducts.map((p) => (
              <div
                key={p.id}
                className="bg-[#171c1e] border border-white/10 hover:border-[#e7a45c]/50 overflow-hidden flex flex-col justify-between transition-all group shadow-xl"
              >
                <div>
                  <div className="relative h-52 w-full bg-[#20272b] border-b border-white/10 overflow-hidden">
                    <Image
                      src={p.images[0]}
                      alt={p.name}
                      fill
                      unoptimized={p.images[0].endsWith(".svg")}
                      className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    />
                    <span className="absolute top-3 left-3 bg-[#20272b]/90 backdrop-blur-md px-2.5 py-1 text-[#e7a45c] font-mono text-[10px] font-bold border border-[#e7a45c]/30">
                      {p.sku}
                    </span>
                    <span className="absolute bottom-3 right-3 bg-[#20272b]/90 text-[#aeb5b2] text-[10px] font-mono px-2 py-0.5 border border-white/10">
                      {p.materials[0]}
                    </span>
                  </div>

                  <div className="p-5 space-y-3">
                    <Link href={`/products/${p.slug}`}>
                      <h3 className="font-semibold text-base text-[#f5f0e7] group-hover:text-[#e7a45c] transition-colors line-clamp-2">
                        {p.name}
                      </h3>
                    </Link>
                    <p className="text-xs text-[#aeb5b2] line-clamp-2 leading-relaxed">
                      {p.shortDescription}
                    </p>

                    <div className="grid grid-cols-2 gap-2 text-[11px] font-mono text-[#aeb5b2] pt-2 border-t border-white/5">
                      <div>
                        <span className="text-[#7e8989] block text-[10px]">MOQ:</span>
                        <strong className="text-[#f5f0e7]">{p.moq}</strong>
                      </div>
                      <div>
                        <span className="text-[#7e8989] block text-[10px]">LEAD TIME:</span>
                        <strong className="text-[#f5f0e7]">{p.leadTime}</strong>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-3 border-t border-white/10 flex items-center justify-between bg-black/10">
                  <span className="text-xs font-mono font-bold text-[#e7a45c]">
                    {p.price ? formatCurrency(p.price) : p.priceMode}
                  </span>
                  <Link
                    href={`/products/${p.slug}`}
                    className="text-xs text-[#f5f0e7] font-semibold hover:text-[#e7a45c] transition-colors flex items-center gap-1.5"
                  >
                    <span>Inspect Specs</span>
                    <ArrowRight size={13} className="text-[#e7a45c]" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {categoryProducts.length === 0 && (
            <div className="text-center py-20 bg-[#171c1e] border border-white/10 p-8">
              <p className="text-[#aeb5b2] text-sm mb-4">No components found for this family currently.</p>
              <Link
                href="/products"
                className="px-5 py-2.5 bg-[#e46e2e] hover:bg-[#bb5b2c] text-[#f5f0e7] text-xs font-semibold uppercase tracking-wider"
              >
                Browse All Components
              </Link>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
