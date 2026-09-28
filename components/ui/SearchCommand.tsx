"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useDemoState } from "@/lib/services/demo-state-context";
import { Search, X, Package, Layers, Building2, FileText, ArrowRight, CornerDownLeft } from "lucide-react";

interface SearchCommandProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchCommand: React.FC<SearchCommandProps> = ({ isOpen, onClose }) => {
  const router = useRouter();
  const { products, industries, categories, setSelectedIndustryId } = useDemoState();
  const [query, setQuery] = useState("");

  // Listen to keyboard shortcut Ctrl+K / Cmd+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const normalized = query.toLowerCase().trim();

  const filteredProducts = products.filter(
    (p) =>
      p.name.toLowerCase().includes(normalized) ||
      p.sku.toLowerCase().includes(normalized) ||
      p.shortDescription.toLowerCase().includes(normalized) ||
      p.industryName.toLowerCase().includes(normalized)
  ).slice(0, 5);

  const filteredIndustries = industries.filter(
    (i) =>
      i.name.toLowerCase().includes(normalized) ||
      i.sampleProductType.toLowerCase().includes(normalized)
  ).slice(0, 4);

  const filteredCategories = categories.filter(
    (c) =>
      c.name.toLowerCase().includes(normalized) ||
      c.description.toLowerCase().includes(normalized)
  ).slice(0, 4);

  const handleSelect = (url: string) => {
    onClose();
    router.push(url);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-start justify-center pt-20 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full border border-stone-200 overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-150">
        <div className="p-3 border-b border-stone-200 flex items-center gap-3 bg-stone-50">
          <Search className="w-5 h-5 text-stone-400 shrink-0 ml-1" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products, SKUs, industries, technical specifications..."
            className="flex-1 bg-transparent text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none"
          />
          {query && (
            <button onClick={() => setQuery("")} className="text-stone-400 hover:text-stone-600">
              <X className="w-4 h-4" />
            </button>
          )}
          <kbd className="hidden sm:inline px-1.5 py-0.5 text-[10px] font-medium text-stone-500 bg-stone-200 rounded border border-stone-300">
            ESC
          </kbd>
        </div>

        <div className="max-h-[60vh] overflow-y-auto p-3 space-y-4">
          {/* Quick links when empty */}
          {!query && (
            <div>
              <span className="text-[11px] font-semibold text-stone-400 uppercase tracking-wider px-2">
                Quick Navigation
              </span>
              <div className="mt-1 space-y-1">
                <button
                  onClick={() => handleSelect("/products")}
                  className="w-full flex items-center justify-between p-2 rounded-lg text-xs text-stone-700 hover:bg-stone-100 text-left"
                >
                  <span className="flex items-center gap-2">
                    <Package className="w-4 h-4 text-[#d4560a]" />
                    Browse All Products Catalogue
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-stone-400" />
                </button>
                <button
                  onClick={() => handleSelect("/request-quote")}
                  className="w-full flex items-center justify-between p-2 rounded-lg text-xs text-stone-700 hover:bg-stone-100 text-left"
                >
                  <span className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-emerald-600" />
                    Multi-Step RFQ / Request a Quote
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-stone-400" />
                </button>
                <button
                  onClick={() => handleSelect("/manufacturing-process")}
                  className="w-full flex items-center justify-between p-2 rounded-lg text-xs text-stone-700 hover:bg-stone-100 text-left"
                >
                  <span className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-blue-600" />
                    Factory Machinery & 8-Stage SOPs
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-stone-400" />
                </button>
                <button
                  onClick={() => handleSelect("/portal/dashboard")}
                  className="w-full flex items-center justify-between p-2 rounded-lg text-xs text-stone-700 hover:bg-stone-100 text-left"
                >
                  <span className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-purple-600" />
                    Customer Portal (RFQs, Quotes & Orders)
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-stone-400" />
                </button>
              </div>
            </div>
          )}

          {/* Products match */}
          {filteredProducts.length > 0 && (
            <div>
              <span className="text-[11px] font-semibold text-stone-400 uppercase tracking-wider px-2">
                Products ({filteredProducts.length})
              </span>
              <div className="mt-1 space-y-1">
                {filteredProducts.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => handleSelect(`/products/${p.slug}`)}
                    className="w-full flex items-center justify-between p-2 rounded-lg text-xs text-stone-800 hover:bg-orange-50/60 hover:text-stone-900 text-left group"
                  >
                    <div>
                      <div className="font-medium text-stone-900 group-hover:text-[#d4560a]">
                        {p.name}
                      </div>
                      <div className="text-[11px] text-stone-500">
                        {p.sku} • {p.industryName} • MOQ: {p.moq}
                      </div>
                    </div>
                    <CornerDownLeft className="w-3.5 h-3.5 text-stone-300 group-hover:text-[#d4560a]" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Industries match */}
          {filteredIndustries.length > 0 && (
            <div>
              <span className="text-[11px] font-semibold text-stone-400 uppercase tracking-wider px-2">
                Industries ({filteredIndustries.length})
              </span>
              <div className="mt-1 space-y-1">
                {filteredIndustries.map((ind) => (
                  <button
                    key={ind.id}
                    onClick={() => {
                      setSelectedIndustryId(ind.id);
                      handleSelect(`/industries/${ind.slug}`);
                    }}
                    className="w-full flex items-center justify-between p-2 rounded-lg text-xs text-stone-800 hover:bg-stone-100 text-left"
                  >
                    <div>
                      <div className="font-medium text-stone-900">{ind.name}</div>
                      <div className="text-[11px] text-stone-500">{ind.sampleProductType}</div>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-stone-100 text-stone-600">
                      Switch & View
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Categories match */}
          {filteredCategories.length > 0 && (
            <div>
              <span className="text-[11px] font-semibold text-stone-400 uppercase tracking-wider px-2">
                Categories ({filteredCategories.length})
              </span>
              <div className="mt-1 space-y-1">
                {filteredCategories.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => handleSelect(`/categories/${c.slug}`)}
                    className="w-full flex items-center justify-between p-2 rounded-lg text-xs text-stone-800 hover:bg-stone-100 text-left"
                  >
                    <div>
                      <div className="font-medium text-stone-900">{c.name}</div>
                      <div className="text-[11px] text-stone-500">
                        {c.industryName} • {c.productCount} products
                      </div>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-stone-400" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {query &&
            filteredProducts.length === 0 &&
            filteredIndustries.length === 0 &&
            filteredCategories.length === 0 && (
              <div className="text-center py-8 text-stone-400 text-xs">
                No matching products, industries, or categories found for &quot;{query}&quot;.
              </div>
            )}
        </div>

        <div className="p-2.5 bg-stone-50 border-t border-stone-200 flex items-center justify-between text-[11px] text-stone-400 px-4">
          <span>Navigate with arrow keys</span>
          <span>Press ESC to close</span>
        </div>
      </div>
    </div>
  );
};
