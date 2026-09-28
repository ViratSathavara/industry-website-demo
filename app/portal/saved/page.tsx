"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { PortalLayout } from "@/components/portal/PortalLayout";
import { useDemoState } from "@/lib/services/demo-state-context";
import { Heart, Scale, Trash2, ArrowRight, FileText } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

export default function PortalSavedPage() {
  const { products, savedProductIds, toggleSaveProduct } = useDemoState();

  const savedProducts = products.filter((p) => savedProductIds.includes(p.id));

  return (
    <PortalLayout>
      <div className="space-y-6 max-w-7xl mx-auto">
        <div>
          <h2 className="text-xl font-extrabold text-stone-900 tracking-tight">
            Saved Technical Components
          </h2>
          <p className="text-xs text-stone-500">
            Components shortlisted for technical evaluation or upcoming purchase requisitions
          </p>
        </div>

        {savedProducts.length === 0 ? (
          <div className="bg-white rounded-2xl border border-stone-200 p-12 text-center text-xs text-stone-400">
            <Heart className="w-8 h-8 mx-auto mb-2 text-stone-300" />
            <h3 className="font-bold text-stone-700 text-sm">No saved products yet</h3>
            <p className="mt-1 mb-4">Click the heart icon on any product page to save it to your workspace.</p>
            <Link
              href="/products"
              className="px-4 py-2 bg-stone-900 text-white rounded-lg font-bold"
            >
              Explore Products
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {savedProducts.map((p) => (
              <div
                key={p.id}
                className="bg-white rounded-xl border border-stone-200 p-4 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="relative h-44 w-full rounded-lg overflow-hidden mb-3 bg-stone-100">
                    <Image src={p.images[0]} alt={p.name} fill className="object-cover" />
                    <button
                      onClick={() => toggleSaveProduct(p.id)}
                      className="absolute top-2 right-2 p-1.5 rounded-full bg-white/90 text-rose-600 hover:bg-white shadow-xs"
                      title="Remove from saved"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <span className="text-[10px] text-stone-400 uppercase font-bold tracking-wider">
                    {p.industryName}
                  </span>
                  <Link href={`/products/${p.slug}`}>
                    <h3 className="font-bold text-xs text-stone-900 line-clamp-2 hover:text-[#d4560a]">
                      {p.name}
                    </h3>
                  </Link>
                  <p className="text-[11px] text-stone-500 line-clamp-2 mt-1">{p.shortDescription}</p>
                </div>

                <div className="pt-3 border-t border-stone-100 mt-3 flex items-center justify-between">
                  <span className="text-xs font-bold text-stone-900">
                    {p.price ? formatCurrency(p.price) : p.priceMode}
                  </span>
                  <Link
                    href={`/request-quote?productId=${p.id}`}
                    className="px-3 py-1.5 bg-[#d4560a] text-white rounded-lg text-xs font-semibold flex items-center gap-1"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>Quote</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </PortalLayout>
  );
}
