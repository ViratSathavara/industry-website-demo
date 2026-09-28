"use client";

import React, { useState } from "react";
import Link from "next/link";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { useDemoState } from "@/lib/services/demo-state-context";
import { Category } from "@/lib/types";
import {
  Layers,
  Search,
  Plus,
  Eye,
  ArrowRight,
  ExternalLink,
  Building,
  CheckCircle2,
  X,
  Package
} from "lucide-react";

export default function AdminCategoriesPage() {
  const { categories, industries, products } = useDemoState();

  const [search, setSearch] = useState("");
  const [industryFilter, setIndustryFilter] = useState("all");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  // New Category State
  const [newCatName, setNewCatName] = useState("");
  const [newCatIndustry, setNewCatIndustry] = useState(industries[0]?.name || "Automotive & Auto-Components");
  const [newCatDescription, setNewCatDescription] = useState("");

  const [localCategories, setLocalCategories] = useState<Category[]>(categories);

  const filteredCategories = localCategories.filter((cat) => {
    const matchesSearch =
      cat.name.toLowerCase().includes(search.toLowerCase()) ||
      cat.description.toLowerCase().includes(search.toLowerCase());

    const matchesIndustry =
      industryFilter === "all" ||
      cat.industryName.toLowerCase() === industryFilter.toLowerCase();

    return matchesSearch && matchesIndustry;
  });

  const handleCreateCategory = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCatName.trim()) return;

    const slug = newCatName.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    const matchedInd = industries.find((i) => i.name === newCatIndustry) || industries[0];

    const created: Category = {
      id: `cat-${Date.now()}`,
      slug,
      name: newCatName,
      industryId: matchedInd?.id || "ind-auto",
      industryName: newCatIndustry,
      description: newCatDescription || "High precision manufacturing classification.",
      productCount: 0,
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
      subcategories: ["Custom Precision Work", "Standard Parts"]
    };

    setLocalCategories([created, ...localCategories]);
    setIsAddModalOpen(false);
    setToastMsg(`Category "${created.name}" created under ${created.industryName}!`);
    setTimeout(() => setToastMsg(null), 3500);

    setNewCatName("");
    setNewCatDescription("");
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold text-neutral-900 tracking-tight font-heading">
                Category Hierarchy & Taxonomy
              </h1>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-primary/10 text-primary">
                {filteredCategories.length} Categories
              </span>
            </div>
            <p className="text-sm text-neutral-500 mt-1">
              Organized manufacturing taxonomy mapped to 18 industrial verticals and engineering capabilities.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsAddModalOpen(true)}
              className="px-4 py-2 text-xs font-semibold rounded-lg bg-primary hover:bg-primary-hover text-white transition-colors flex items-center gap-2 shadow-sm"
            >
              <Plus className="w-3.5 h-3.5" />
              Add Component Category
            </button>
          </div>
        </div>

        {/* Toast */}
        {toastMsg && (
          <div className="p-3 bg-emerald-50 border border-emerald-300 text-emerald-900 rounded-lg text-sm flex items-center gap-2 animate-fade-in">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>{toastMsg}</span>
          </div>
        )}

        {/* Filters */}
        <div className="bg-white p-4 rounded-xl border border-neutral-200 shadow-sm flex flex-col md:flex-row gap-3 items-center justify-between">
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search category or subcategory..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-sm rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            />
          </div>

          <div className="flex items-center gap-2">
            <select
              value={industryFilter}
              onChange={(e) => setIndustryFilter(e.target.value)}
              className="px-3 py-1.5 text-xs font-semibold rounded-lg border border-neutral-300 bg-white focus:outline-none"
            >
              <option value="all">All Industries</option>
              {industries.map((ind) => (
                <option key={ind.id} value={ind.name}>
                  {ind.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredCategories.map((cat) => {
            const countInProducts = products.filter(
              (p) => p.categoryId === cat.id || p.categoryName === cat.name
            ).length;

            return (
              <div
                key={cat.id}
                className="bg-white p-5 rounded-xl border border-neutral-200 shadow-sm hover:border-primary/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-0.5 text-[11px] font-semibold rounded bg-neutral-100 text-neutral-700">
                      {cat.industryName}
                    </span>
                    <span className="text-xs font-mono font-semibold text-primary">
                      {countInProducts || cat.productCount || 4} SKUs
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-neutral-900 mt-2 font-heading">
                    {cat.name}
                  </h3>

                  <p className="text-xs text-neutral-500 mt-1 line-clamp-2">
                    {cat.description}
                  </p>

                  {cat.subcategories && cat.subcategories.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-1">
                      {cat.subcategories.slice(0, 3).map((sub, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded text-[10px] bg-neutral-50 border border-neutral-200 text-neutral-600"
                        >
                          {sub}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="pt-4 mt-4 border-t border-neutral-100 flex items-center justify-between text-xs">
                  <Link
                    href={`/categories/${cat.slug}`}
                    target="_blank"
                    className="text-neutral-500 hover:text-primary flex items-center gap-1 font-medium transition-colors"
                  >
                    <span>Storefront View</span>
                    <ExternalLink className="w-3 h-3" />
                  </Link>

                  <Link
                    href={`/admin/products`}
                    className="text-primary hover:text-primary-hover font-semibold flex items-center gap-1"
                  >
                    <span>Manage SKUs</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Add Modal */}
        {isAddModalOpen && (
          <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in">
            <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-4 border border-neutral-200">
              <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                    <Layers className="w-4 h-4" />
                  </div>
                  <h3 className="font-bold text-neutral-900 text-base font-heading">
                    Add Category
                  </h3>
                </div>
                <button
                  onClick={() => setIsAddModalOpen(false)}
                  className="text-neutral-400 hover:text-neutral-600"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleCreateCategory} className="space-y-4 text-xs">
                <div>
                  <label className="block font-semibold text-neutral-700 mb-1">
                    Category Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Hydraulic Actuators & Valves"
                    value={newCatName}
                    onChange={(e) => setNewCatName(e.target.value)}
                    className="w-full p-2.5 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-neutral-700 mb-1">
                    Industry Vertical
                  </label>
                  <select
                    value={newCatIndustry}
                    onChange={(e) => setNewCatIndustry(e.target.value)}
                    className="w-full p-2.5 rounded-lg border border-neutral-300 bg-white"
                  >
                    {industries.map((ind) => (
                      <option key={ind.id} value={ind.name}>
                        {ind.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-neutral-700 mb-1">
                    Description
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Summary of components and engineering standards in this category..."
                    value={newCatDescription}
                    onChange={(e) => setNewCatDescription(e.target.value)}
                    className="w-full p-2.5 rounded-lg border border-neutral-300 focus:outline-none"
                  />
                </div>

                <div className="flex justify-end gap-2 pt-2 border-t border-neutral-200">
                  <button
                    type="button"
                    onClick={() => setIsAddModalOpen(false)}
                    className="px-4 py-2 font-semibold rounded-lg border border-neutral-300 text-neutral-700 hover:bg-neutral-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 font-semibold rounded-lg bg-primary hover:bg-primary-hover text-white shadow-sm flex items-center gap-1.5"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    Save Category
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}
