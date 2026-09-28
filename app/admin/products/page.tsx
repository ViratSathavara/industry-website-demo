"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { useDemoState } from "@/lib/services/demo-state-context";
import { Product } from "@/lib/types";
import {
  Package,
  Search,
  Filter,
  Plus,
  Eye,
  Edit,
  ExternalLink,
  CheckCircle2,
  X,
  Layers,
  Sparkles
} from "lucide-react";
import { formatCurrency } from "@/lib/utils";

export default function AdminProductsPage() {
  const { products, categories, industries, addProduct } = useDemoState();

  const [search, setSearch] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  // New Product Form State
  const [newName, setNewName] = useState("");
  const [newSku, setNewSku] = useState("");
  const [newIndustry, setNewIndustry] = useState(industries[0]?.name || "Automotive & Auto-Components");
  const [newCategory, setNewCategory] = useState(categories[0]?.name || "CNC Machined Components");
  const [newPriceMode, setNewPriceMode] = useState<Product["priceMode"]>("Request Quote");
  const [newLeadTime, setNewLeadTime] = useState("2-3 Weeks Ex-Factory");
  const [newDescription, setNewDescription] = useState("");
  const [newPrice, setNewPrice] = useState<number>(4500);

  // Local state for product list
  const [localProducts, setLocalProducts] = useState<Product[]>(products);

  const filteredProducts = localProducts.filter((p) => {
    const matchesSearch =
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.sku.toLowerCase().includes(search.toLowerCase()) ||
      p.shortDescription.toLowerCase().includes(search.toLowerCase());

    const matchesIndustry =
      selectedIndustry === "all" ||
      p.industryName.toLowerCase() === selectedIndustry.toLowerCase();

    const matchesCategory =
      selectedCategory === "all" ||
      p.categoryName.toLowerCase() === selectedCategory.toLowerCase();

    const matchesStatus =
      statusFilter === "all" || p.status.toLowerCase() === statusFilter.toLowerCase();

    return matchesSearch && matchesIndustry && matchesCategory && matchesStatus;
  });

  const handleToggleProductStatus = (id: string) => {
    setLocalProducts((prev) =>
      prev.map((prod) => {
        if (prod.id !== id) return prod;
        const newStatus = prod.status === "Active" ? "Draft" : "Active";
        setToastMsg(`Product status changed to "${newStatus}" for ${prod.name}`);
        setTimeout(() => setToastMsg(null), 3000);
        return { ...prod, status: newStatus };
      })
    );
  };

  const handleCreateProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim() || !newSku.trim()) return;

    const slug = newName.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    const matchedInd = industries.find((i) => i.name === newIndustry) || industries[0];
    const matchedCat = categories.find((c) => c.name === newCategory) || categories[0];

    const created: Product = {
      id: `prod-${Date.now()}`,
      slug,
      name: newName,
      sku: newSku,
      productCode: newSku,
      industryId: matchedInd?.id || "ind-auto",
      industryName: newIndustry,
      categoryId: matchedCat?.id || "cat-cnc",
      categoryName: newCategory,
      shortDescription: newDescription || "High precision industrial manufacturing component built to international engineering tolerances.",
      fullDescription: newDescription || "High precision industrial manufacturing component built to international engineering tolerances.",
      images: [
        "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
      ],
      priceMode: newPriceMode,
      price: newPrice,
      unit: "Pieces",
      moq: "25 Pieces",
      leadTime: newLeadTime,
      customizationAvailable: true,
      specs: {
        "Material Grade": "Stainless Steel 316L / En24",
        "Tolerance Standard": "±0.005 mm (DIN ISO 2768-m)",
        "Surface Finish": "Ra 0.4 µm Ra Finish"
      },
      applications: ["OEM Sub-Assembly", "Heavy Plant"],
      features: ["CNC Turned", "Ultrasonically Cleaned", "Heat Treated"],
      materials: ["SS 316L", "Alloy Steel", "Aluminum 7075"],
      downloads: [
        { title: "Technical Drawing (2D/3D)", type: "PDF", size: "2.4 MB", filename: `${newSku}-specs.pdf` }
      ],
      faqs: [
        { question: "What is standard batch MOQ?", answer: "Standard MOQ starts from 25 pieces for pilot runs." }
      ],
      status: "Active"
    };

    addProduct(created);
    setLocalProducts([created, ...localProducts]);
    setIsAddModalOpen(false);
    setToastMsg(`Product "${created.name}" created and published to catalog!`);
    setTimeout(() => setToastMsg(null), 4000);

    // Reset Form
    setNewName("");
    setNewSku("");
    setNewDescription("");
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold text-neutral-900 tracking-tight font-heading">
                Industrial Catalog Master
              </h1>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-primary/10 text-primary">
                {filteredProducts.length} Active SKUs
              </span>
            </div>
            <p className="text-sm text-neutral-500 mt-1">
              Engineering component specifications, CAD drawings, batch MOQs, and multi-tier pricing.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsAddModalOpen(true)}
              className="px-4 py-2 text-xs font-semibold rounded-lg bg-primary hover:bg-primary-hover text-white transition-colors flex items-center gap-2 shadow-sm"
            >
              <Plus className="w-3.5 h-3.5" />
              Add New Product SKU
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

        {/* Stats Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-white border border-neutral-200 shadow-sm">
            <div className="text-xs font-medium text-neutral-500 uppercase tracking-wider">Total Catalog SKUs</div>
            <div className="text-2xl font-bold text-neutral-900 mt-1">{localProducts.length}</div>
            <div className="text-xs text-neutral-400 mt-0.5">Across 18 industrial verticals</div>
          </div>
          <div className="p-4 rounded-xl bg-emerald-50/50 border border-emerald-200 shadow-sm">
            <div className="text-xs font-semibold text-emerald-700 uppercase tracking-wider">Live on Storefront</div>
            <div className="text-2xl font-bold text-emerald-900 mt-1">
              {localProducts.filter((p) => p.status === "Active").length}
            </div>
            <div className="text-xs text-emerald-600 mt-0.5">Publicly searchable</div>
          </div>
          <div className="p-4 rounded-xl bg-blue-50/50 border border-blue-200 shadow-sm">
            <div className="text-xs font-semibold text-blue-700 uppercase tracking-wider">Customizable SKUs</div>
            <div className="text-2xl font-bold text-blue-900 mt-1">
              {localProducts.filter((p) => p.customizationAvailable).length}
            </div>
            <div className="text-xs text-blue-600 mt-0.5">Custom drawing support</div>
          </div>
          <div className="p-4 rounded-xl bg-amber-50/50 border border-amber-200 shadow-sm">
            <div className="text-xs font-semibold text-amber-700 uppercase tracking-wider">Active Categories</div>
            <div className="text-2xl font-bold text-amber-900 mt-1">{categories.length}</div>
            <div className="text-xs text-amber-600 mt-0.5">Component groupings</div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white p-4 rounded-xl border border-neutral-200 shadow-sm flex flex-col md:flex-row gap-3 items-center justify-between">
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by product name, SKU or keywords..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-sm rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto">
            <select
              value={selectedIndustry}
              onChange={(e) => setSelectedIndustry(e.target.value)}
              className="px-3 py-1.5 text-xs font-semibold rounded-lg border border-neutral-300 bg-white focus:outline-none"
            >
              <option value="all">All Industries</option>
              {industries.map((ind) => (
                <option key={ind.id} value={ind.name}>
                  {ind.name}
                </option>
              ))}
            </select>

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-3 py-1.5 text-xs font-semibold rounded-lg border border-neutral-300 bg-white focus:outline-none"
            >
              <option value="all">All Statuses</option>
              <option value="Active">Active</option>
              <option value="Draft">Draft</option>
            </select>
          </div>
        </div>

        {/* Products Table */}
        <div className="bg-white rounded-xl border border-neutral-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-neutral-600">
              <thead className="bg-neutral-50 text-neutral-500 font-medium text-xs border-b border-neutral-200">
                <tr>
                  <th className="py-3 px-4">Product & SKU</th>
                  <th className="py-3 px-4">Category & Sector</th>
                  <th className="py-3 px-4">Pricing Model</th>
                  <th className="py-3 px-4">Lead Time & MOQ</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100">
                {filteredProducts.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="text-center py-12 text-neutral-400">
                      <Package className="w-8 h-8 mx-auto mb-2 text-neutral-300" />
                      No products found.
                    </td>
                  </tr>
                ) : (
                  filteredProducts.map((prod) => (
                    <tr key={prod.id} className="hover:bg-neutral-50/80 transition-colors">
                      <td className="py-3.5 px-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg overflow-hidden bg-neutral-100 shrink-0 relative border border-neutral-200">
                            <Image
                              src={prod.images[0] || "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=400&q=80"}
                              alt={prod.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <div className="font-semibold text-neutral-900">{prod.name}</div>
                            <div className="font-mono text-[11px] text-neutral-400 mt-0.5">
                              {prod.sku}
                            </div>
                          </div>
                        </div>
                      </td>

                      <td className="py-3.5 px-4">
                        <div className="font-medium text-neutral-800 text-xs">{prod.categoryName}</div>
                        <div className="text-[11px] text-neutral-400 mt-0.5">{prod.industryName}</div>
                      </td>

                      <td className="py-3.5 px-4 text-xs font-semibold text-neutral-900">
                        {prod.priceMode === "Request Quote" ? (
                          <span className="text-neutral-600 bg-neutral-100 px-2 py-0.5 rounded">
                            Custom RFQ Only
                          </span>
                        ) : (
                          <span>
                            {formatCurrency(prod.price || 0)} <span className="text-neutral-400 font-normal">/ {prod.unit}</span>
                          </span>
                        )}
                      </td>

                      <td className="py-3.5 px-4 text-xs text-neutral-600">
                        <div>{prod.leadTime}</div>
                        <div className="text-[11px] text-neutral-400 mt-0.5">
                          MOQ: {prod.moq}
                        </div>
                      </td>

                      <td className="py-3.5 px-4">
                        <button
                          onClick={() => handleToggleProductStatus(prod.id)}
                          className="flex items-center gap-1.5 focus:outline-none"
                        >
                          {prod.status === "Active" ? (
                            <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                              Active
                            </span>
                          ) : (
                            <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-neutral-200 text-neutral-700">
                              Draft
                            </span>
                          )}
                        </button>
                      </td>

                      <td className="py-3.5 px-4 text-right">
                        <div className="flex items-center justify-end gap-1.5">
                          <Link
                            href={`/products/${prod.slug}`}
                            target="_blank"
                            title="View on Live Storefront"
                            className="p-1.5 text-neutral-500 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Add Product Modal */}
        {isAddModalOpen && (
          <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in overflow-y-auto">
            <div className="bg-white rounded-2xl max-w-xl w-full p-6 shadow-2xl space-y-4 my-8 border border-neutral-200">
              <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                    <Package className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-neutral-900 text-base font-heading">
                      Register New Product SKU
                    </h3>
                    <p className="text-xs text-neutral-500">
                      Instantly publish to technical catalog with CAD & quote support
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsAddModalOpen(false)}
                  className="text-neutral-400 hover:text-neutral-600"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleCreateProduct} className="space-y-4 text-xs">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-semibold text-neutral-700 mb-1">
                      Product Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Forged Flange Class 300"
                      value={newName}
                      onChange={(e) => setNewName(e.target.value)}
                      className="w-full p-2.5 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-neutral-700 mb-1">
                      SKU Code *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. FLG-300-SS316"
                      value={newSku}
                      onChange={(e) => setNewSku(e.target.value)}
                      className="w-full p-2.5 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary/20 font-mono"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-semibold text-neutral-700 mb-1">
                      Target Industry Sector
                    </label>
                    <select
                      value={newIndustry}
                      onChange={(e) => setNewIndustry(e.target.value)}
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
                      Product Category
                    </label>
                    <select
                      value={newCategory}
                      onChange={(e) => setNewCategory(e.target.value)}
                      className="w-full p-2.5 rounded-lg border border-neutral-300 bg-white"
                    >
                      {categories.map((c) => (
                        <option key={c.id} value={c.name}>
                          {c.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="block font-semibold text-neutral-700 mb-1">
                      Pricing Mode
                    </label>
                    <select
                      value={newPriceMode}
                      onChange={(e) => setNewPriceMode(e.target.value as Product["priceMode"])}
                      className="w-full p-2 rounded-lg border border-neutral-300 bg-white"
                    >
                      <option value="Request Quote">Custom RFQ Only</option>
                      <option value="Starting from">Starting At Price</option>
                      <option value="Buy Now">Buy Now / Fixed</option>
                      <option value="Sample Available">Sample Available</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-semibold text-neutral-700 mb-1">
                      Estimated Rate (₹)
                    </label>
                    <input
                      type="number"
                      value={newPrice}
                      onChange={(e) => setNewPrice(Number(e.target.value))}
                      className="w-full p-2 rounded-lg border border-neutral-300 font-mono"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-neutral-700 mb-1">
                      Production Lead Time
                    </label>
                    <input
                      type="text"
                      value={newLeadTime}
                      onChange={(e) => setNewLeadTime(e.target.value)}
                      className="w-full p-2 rounded-lg border border-neutral-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-neutral-700 mb-1">
                    Engineering Specs & Technical Summary
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Enter material composition, tolerances, heat treatment specs, and finish..."
                    value={newDescription}
                    onChange={(e) => setNewDescription(e.target.value)}
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
                    Register & Publish SKU
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
