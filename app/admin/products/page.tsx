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
  Plus,
  Edit2,
  Trash2,
  ExternalLink,
  CheckCircle2,
  AlertTriangle,
  X,
  Image as ImageIcon,
  Cpu,
  Layers,
  Sparkles,
  RotateCcw
} from "lucide-react";
import { formatCurrency } from "@/lib/utils";

// Real industrial photography presets for quick selection
const REAL_IMAGE_PRESETS = [
  {
    label: "Rotor Shaft (Ground Steel)",
    url: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1000&q=80"
  },
  {
    label: "Stator Core & Laminations",
    url: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80"
  },
  {
    label: "Cast Iron End Shield Flange",
    url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80"
  },
  {
    label: "Extruded Aluminum Finned Casing",
    url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80"
  },
  {
    label: "Carburized Servo Pinion Gear",
    url: "https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=1000&q=80"
  },
  {
    label: "Commutator & Slip Ring Assembly",
    url: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1000&q=80"
  },
  {
    label: "Die-Cast Terminal Box / Enclosure",
    url: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1000&q=80"
  }
];

export default function AdminProductsPage() {
  const { products, categories, industries, addProduct, updateProduct, deleteProduct, resetDemoData } = useDemoState();

  const [search, setSearch] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  // Modal States
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [deletingProduct, setDeletingProduct] = useState<Product | null>(null);

  // New Product Form State
  const [newName, setNewName] = useState("");
  const [newSku, setNewSku] = useState("");
  const [newIndustry, setNewIndustry] = useState(industries[0]?.name || "Industrial Motor Parts & Power Transmission");
  const [newCategory, setNewCategory] = useState(categories[0]?.name || "Electric Motor Rotors & Ground Shafts");
  const [newPriceMode, setNewPriceMode] = useState<Product["priceMode"]>("Request Quote");
  const [newPrice, setNewPrice] = useState<number>(4500);
  const [newUnit, setNewUnit] = useState("Piece");
  const [newMoq, setNewMoq] = useState("20 Pieces");
  const [newLeadTime, setNewLeadTime] = useState("10 - 15 Days Ex-Factory");
  const [newImageUrl, setNewImageUrl] = useState(REAL_IMAGE_PRESETS[0].url);
  const [newDescription, setNewDescription] = useState("");
  const [newMaterial, setNewMaterial] = useState("Forged 42CrMo4 / CRGO M400-50A");
  const [newTolerance, setNewTolerance] = useState("±0.005 mm (DIN ISO 2768-m)");

  // Filter products
  const filteredProducts = products.filter((p) => {
    const matchesSearch =
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.sku.toLowerCase().includes(search.toLowerCase()) ||
      p.shortDescription.toLowerCase().includes(search.toLowerCase()) ||
      p.categoryName.toLowerCase().includes(search.toLowerCase());

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

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 3500);
  };

  // Quick toggle status
  const handleToggleProductStatus = (prod: Product) => {
    const newStatus = prod.status === "Active" ? "Draft" : "Active";
    updateProduct({ ...prod, status: newStatus });
    showToast(`Status updated to "${newStatus}" for ${prod.name}`);
  };

  // Create Product Submit
  const handleCreateProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim() || !newSku.trim()) return;

    const slug = newName.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    const matchedInd = industries.find((i) => i.name === newIndustry) || industries[0];
    const matchedCat = categories.find((c) => c.name === newCategory) || categories[0];

    const created: Product = {
      id: `prod-mtr-${Date.now()}`,
      slug,
      name: newName.trim(),
      sku: newSku.trim().toUpperCase(),
      productCode: newSku.trim().toUpperCase(),
      industryId: matchedInd?.id || "industrial-motor-parts",
      industryName: newIndustry,
      categoryId: matchedCat?.id || "motor-rotors-shafts",
      categoryName: newCategory,
      shortDescription: newDescription || "High-precision industrial motor and transmission component manufactured to DIN ISO tolerances.",
      fullDescription: newDescription || "Manufactured from certified raw materials on multi-axis CNC machines with 100% CMM dimensional verification.",
      images: [newImageUrl.trim() || REAL_IMAGE_PRESETS[0].url],
      priceMode: newPriceMode,
      price: newPrice,
      unit: newUnit,
      moq: newMoq,
      leadTime: newLeadTime,
      customizationAvailable: true,
      specs: {
        "Material Specification": newMaterial,
        "Machining Tolerance": newTolerance,
        "Inspection Standard": "100% Zeiss 3D CMM & Dynamic Balancing Report"
      },
      applications: ["Industrial Electric Motors", "EV Traction Drives", "Power Transmission"],
      features: [
        "Precision machined to sub-micron concentricity",
        "Heat treated and induction hardened bearing journals",
        "Full material test report and balance cert included"
      ],
      materials: [newMaterial, "Alloy Steel EN24", "Silicon Steel CRGO"],
      downloads: [
        { title: "Technical Drawing & 2D Geometry (PDF)", type: "PDF", size: "1.8 MB", filename: `${newSku}-specs.pdf` }
      ],
      faqs: [
        { question: "What is standard production batch MOQ?", answer: "Pilot batch runs start from 20 pieces." }
      ],
      status: "Active",
      viewsCount: 1,
      enquiriesCount: 0
    };

    addProduct(created);
    setIsAddModalOpen(false);
    showToast(`Product "${created.name}" published to catalog!`);

    // Reset Form
    setNewName("");
    setNewSku("");
    setNewDescription("");
  };

  // Edit Product Submit
  const handleUpdateProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingProduct) return;

    updateProduct(editingProduct);
    showToast(`Updated product "${editingProduct.name}" successfully!`);
    setEditingProduct(null);
  };

  // Delete Product Action
  const handleConfirmDelete = () => {
    if (!deletingProduct) return;
    deleteProduct(deletingProduct.id);
    showToast(`Deleted "${deletingProduct.name}" from catalog.`);
    setDeletingProduct(null);
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold text-neutral-900 tracking-tight font-heading">
                Industrial Motor Parts Catalog Master
              </h1>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-primary/10 text-primary">
                {filteredProducts.length} SKUs Listed
              </span>
            </div>
            <p className="text-sm text-neutral-500 mt-1">
              Complete CRUD management for electric motor parts, rotor shafts, stator cores, end shields, and ground gears.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                if (confirm("Reset all products back to default Industrial Motor Parts catalog?")) {
                  resetDemoData();
                  showToast("Catalog reset to default industrial motor components!");
                }
              }}
              title="Reset products to default factory catalog"
              className="px-3 py-2 text-xs font-semibold rounded-lg border border-neutral-300 bg-white hover:bg-neutral-50 text-neutral-700 transition-colors flex items-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5 text-neutral-500" />
              Reset Defaults
            </button>

            <button
              onClick={() => setIsAddModalOpen(true)}
              className="px-4 py-2 text-xs font-semibold rounded-lg bg-primary hover:bg-primary-hover text-white transition-colors flex items-center gap-2 shadow-sm"
            >
              <Plus className="w-3.5 h-3.5" />
              Add Motor Part SKU
            </button>
          </div>
        </div>

        {/* Toast */}
        {toastMsg && (
          <div className="p-3 bg-emerald-50 border border-emerald-300 text-emerald-900 rounded-lg text-sm flex items-center gap-2 animate-fade-in shadow-sm">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span className="font-medium">{toastMsg}</span>
          </div>
        )}

        {/* Stats Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-white border border-neutral-200 shadow-sm">
            <div className="text-xs font-medium text-neutral-500 uppercase tracking-wider">Total Motor SKUs</div>
            <div className="text-2xl font-bold text-neutral-900 mt-1">{products.length}</div>
            <div className="text-xs text-neutral-400 mt-0.5">Persisted in storage</div>
          </div>
          <div className="p-4 rounded-xl bg-emerald-50/50 border border-emerald-200 shadow-sm">
            <div className="text-xs font-semibold text-emerald-700 uppercase tracking-wider">Live on Storefront</div>
            <div className="text-2xl font-bold text-emerald-900 mt-1">
              {products.filter((p) => p.status === "Active").length}
            </div>
            <div className="text-xs text-emerald-600 mt-0.5">Publicly searchable</div>
          </div>
          <div className="p-4 rounded-xl bg-blue-50/50 border border-blue-200 shadow-sm">
            <div className="text-xs font-semibold text-blue-700 uppercase tracking-wider">Motor Components</div>
            <div className="text-2xl font-bold text-blue-900 mt-1">
              {products.filter((p) => p.categoryId.startsWith("motor-")).length}
            </div>
            <div className="text-xs text-blue-600 mt-0.5">Rotors, stators & casings</div>
          </div>
          <div className="p-4 rounded-xl bg-amber-50/50 border border-amber-200 shadow-sm">
            <div className="text-xs font-semibold text-amber-700 uppercase tracking-wider">Component Categories</div>
            <div className="text-2xl font-bold text-amber-900 mt-1">{categories.length}</div>
            <div className="text-xs text-amber-600 mt-0.5">Active engineering groups</div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white p-4 rounded-xl border border-neutral-200 shadow-sm flex flex-col md:flex-row gap-3 items-center justify-between">
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by part name, SKU, or specs..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-sm rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-1.5 text-xs font-semibold rounded-lg border border-neutral-300 bg-white focus:outline-none"
            >
              <option value="all">All Categories</option>
              {categories.map((c) => (
                <option key={c.id} value={c.name}>
                  {c.name}
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
                  <th className="py-3 px-4">Product & Real Image</th>
                  <th className="py-3 px-4">Category & Sub-Type</th>
                  <th className="py-3 px-4">Price Model</th>
                  <th className="py-3 px-4">Lead Time & MOQ</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4 text-right">Actions (CRUD)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100">
                {filteredProducts.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="text-center py-12 text-neutral-400">
                      <Package className="w-8 h-8 mx-auto mb-2 text-neutral-300" />
                      No motor products found matching your search.
                    </td>
                  </tr>
                ) : (
                  filteredProducts.map((prod) => (
                    <tr key={prod.id} className="hover:bg-neutral-50/80 transition-colors">
                      {/* Product Name & Image */}
                      <td className="py-3.5 px-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-lg overflow-hidden bg-neutral-100 shrink-0 relative border border-neutral-200 shadow-xs">
                            <Image
                              src={prod.images[0] || REAL_IMAGE_PRESETS[0].url}
                              alt={prod.name}
                              fill
                              sizes="48px"
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <div className="font-semibold text-neutral-900 text-sm leading-tight hover:text-primary transition-colors">
                              {prod.name}
                            </div>
                            <div className="flex items-center gap-2 mt-1">
                              <span className="font-mono text-[11px] font-bold text-neutral-500 bg-neutral-100 px-1.5 py-0.5 rounded">
                                {prod.sku}
                              </span>
                              {prod.specs?.["Operating Speed Rating"] && (
                                <span className="text-[10px] text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded font-medium">
                                  {prod.specs["Operating Speed Rating"]}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </td>

                      {/* Category */}
                      <td className="py-3.5 px-4">
                        <div className="font-medium text-neutral-800 text-xs">{prod.categoryName}</div>
                        <div className="text-[11px] text-neutral-400 mt-0.5">{prod.industryName}</div>
                      </td>

                      {/* Price Model */}
                      <td className="py-3.5 px-4 text-xs font-semibold text-neutral-900">
                        {prod.priceMode === "Request Quote" ? (
                          <span className="text-primary bg-primary/10 px-2 py-0.5 rounded font-medium">
                            Request Quote
                          </span>
                        ) : (
                          <span>
                            {formatCurrency(prod.price || 0)} <span className="text-neutral-400 font-normal">/ {prod.unit}</span>
                          </span>
                        )}
                      </td>

                      {/* Lead Time & MOQ */}
                      <td className="py-3.5 px-4 text-xs text-neutral-600">
                        <div className="font-medium text-neutral-800">{prod.leadTime}</div>
                        <div className="text-[11px] text-neutral-400 mt-0.5">
                          MOQ: {prod.moq}
                        </div>
                      </td>

                      {/* Status Toggle */}
                      <td className="py-3.5 px-4">
                        <button
                          onClick={() => handleToggleProductStatus(prod)}
                          title="Click to toggle Active / Draft"
                          className="flex items-center gap-1.5 focus:outline-none"
                        >
                          {prod.status === "Active" ? (
                            <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 flex items-center gap-1.5 hover:bg-emerald-200 transition-colors">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                              Active
                            </span>
                          ) : (
                            <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-neutral-200 text-neutral-700 hover:bg-neutral-300 transition-colors">
                              Draft
                            </span>
                          )}
                        </button>
                      </td>

                      {/* Actions */}
                      <td className="py-3.5 px-4 text-right">
                        <div className="flex items-center justify-end gap-1.5">
                          {/* Live view */}
                          <Link
                            href={`/products/${prod.slug}`}
                            target="_blank"
                            title="View on Live Storefront"
                            className="p-1.5 text-neutral-500 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </Link>

                          {/* Edit button */}
                          <button
                            onClick={() => setEditingProduct({ ...prod })}
                            title="Edit Product Details"
                            className="p-1.5 text-neutral-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                          >
                            <Edit2 className="w-4 h-4" />
                          </button>

                          {/* Delete button */}
                          <button
                            onClick={() => setDeletingProduct(prod)}
                            title="Delete Product"
                            className="p-1.5 text-neutral-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* ADD PRODUCT MODAL */}
        {/* ========================================================================= */}
        {isAddModalOpen && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in overflow-y-auto">
            <div className="bg-white rounded-2xl max-w-2xl w-full p-6 shadow-2xl space-y-4 my-8 border border-neutral-200">
              <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                    <Plus className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-neutral-900 text-base font-heading">
                      Add New Industrial Motor Part
                    </h3>
                    <p className="text-xs text-neutral-500">
                      Publish a new SKU with technical specifications and real photography
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
                {/* Name & SKU */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-semibold text-neutral-700 mb-1">
                      Part / Component Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. EV High-Speed Rotor Shaft Assembly"
                      value={newName}
                      onChange={(e) => setNewName(e.target.value)}
                      className="w-full p-2.5 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary/20 text-neutral-900"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-neutral-700 mb-1">
                      SKU / Drawing Code *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. MTR-SFT-EV24K"
                      value={newSku}
                      onChange={(e) => setNewSku(e.target.value)}
                      className="w-full p-2.5 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary/20 font-mono text-neutral-900"
                    />
                  </div>
                </div>

                {/* Industry & Category */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-semibold text-neutral-700 mb-1">
                      Industrial Sector
                    </label>
                    <select
                      value={newIndustry}
                      onChange={(e) => setNewIndustry(e.target.value)}
                      className="w-full p-2.5 rounded-lg border border-neutral-300 bg-white text-neutral-900"
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
                      Component Category
                    </label>
                    <select
                      value={newCategory}
                      onChange={(e) => setNewCategory(e.target.value)}
                      className="w-full p-2.5 rounded-lg border border-neutral-300 bg-white text-neutral-900"
                    >
                      {categories.map((c) => (
                        <option key={c.id} value={c.name}>
                          {c.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Real Image Selection with Presets */}
                <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-200 space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="block font-semibold text-neutral-800">
                      Real Industrial Image URL *
                    </label>
                    <span className="text-[11px] text-neutral-400">High-resolution motor photography</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 rounded-lg overflow-hidden relative shrink-0 border border-neutral-300 bg-neutral-200">
                      <Image
                        src={newImageUrl || REAL_IMAGE_PRESETS[0].url}
                        alt="Preview"
                        fill
                        sizes="56px"
                        className="object-cover"
                      />
                    </div>
                    <input
                      type="url"
                      required
                      placeholder="https://images.unsplash.com/..."
                      value={newImageUrl}
                      onChange={(e) => setNewImageUrl(e.target.value)}
                      className="flex-1 p-2 rounded-lg border border-neutral-300 bg-white font-mono text-[11px] text-neutral-800"
                    />
                  </div>

                  <div className="pt-1">
                    <div className="text-[11px] font-semibold text-neutral-500 mb-1.5">
                      Or select real motor photography preset:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {REAL_IMAGE_PRESETS.map((preset, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setNewImageUrl(preset.url)}
                          className={`px-2 py-1 rounded text-[10px] font-medium border transition-colors ${
                            newImageUrl === preset.url
                              ? "bg-primary text-white border-primary"
                              : "bg-white text-neutral-700 border-neutral-200 hover:bg-neutral-100"
                          }`}
                        >
                          {preset.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Pricing, MOQ, Lead Time */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <div>
                    <label className="block font-semibold text-neutral-700 mb-1">
                      Pricing Mode
                    </label>
                    <select
                      value={newPriceMode}
                      onChange={(e) => setNewPriceMode(e.target.value as Product["priceMode"])}
                      className="w-full p-2 rounded-lg border border-neutral-300 bg-white text-neutral-900"
                    >
                      <option value="Request Quote">Request Quote (RFQ)</option>
                      <option value="Starting from">Starting from</option>
                      <option value="Buy Now">Buy Now / Fixed</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-semibold text-neutral-700 mb-1">
                      Rate / Price (₹)
                    </label>
                    <input
                      type="number"
                      value={newPrice}
                      onChange={(e) => setNewPrice(Number(e.target.value))}
                      className="w-full p-2 rounded-lg border border-neutral-300 font-mono text-neutral-900"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-neutral-700 mb-1">
                      Unit
                    </label>
                    <input
                      type="text"
                      value={newUnit}
                      onChange={(e) => setNewUnit(e.target.value)}
                      className="w-full p-2 rounded-lg border border-neutral-300 text-neutral-900"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-neutral-700 mb-1">
                      Production MOQ
                    </label>
                    <input
                      type="text"
                      value={newMoq}
                      onChange={(e) => setNewMoq(e.target.value)}
                      className="w-full p-2 rounded-lg border border-neutral-300 text-neutral-900"
                    />
                  </div>
                </div>

                {/* Specs */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div>
                    <label className="block font-semibold text-neutral-700 mb-1">
                      Lead Time
                    </label>
                    <input
                      type="text"
                      value={newLeadTime}
                      onChange={(e) => setNewLeadTime(e.target.value)}
                      className="w-full p-2 rounded-lg border border-neutral-300 text-neutral-900"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-neutral-700 mb-1">
                      Material Specification
                    </label>
                    <input
                      type="text"
                      value={newMaterial}
                      onChange={(e) => setNewMaterial(e.target.value)}
                      className="w-full p-2 rounded-lg border border-neutral-300 text-neutral-900"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-neutral-700 mb-1">
                      Tolerance Standard
                    </label>
                    <input
                      type="text"
                      value={newTolerance}
                      onChange={(e) => setNewTolerance(e.target.value)}
                      className="w-full p-2 rounded-lg border border-neutral-300 text-neutral-900"
                    />
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label className="block font-semibold text-neutral-700 mb-1">
                    Technical Specifications & Description
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Enter precision grinding tolerances, balancing standards, material grades, and electrical ratings..."
                    value={newDescription}
                    onChange={(e) => setNewDescription(e.target.value)}
                    className="w-full p-2.5 rounded-lg border border-neutral-300 focus:outline-none text-neutral-900"
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
                    Publish SKU to Catalog
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* EDIT PRODUCT MODAL */}
        {/* ========================================================================= */}
        {editingProduct && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in overflow-y-auto">
            <div className="bg-white rounded-2xl max-w-2xl w-full p-6 shadow-2xl space-y-4 my-8 border border-neutral-200">
              <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center">
                    <Edit2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-neutral-900 text-base font-heading">
                      Edit Motor Part: {editingProduct.sku}
                    </h3>
                    <p className="text-xs text-neutral-500">
                      Update component specifications, real images, pricing, and live status
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setEditingProduct(null)}
                  className="text-neutral-400 hover:text-neutral-600"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleUpdateProduct} className="space-y-4 text-xs">
                {/* Name & SKU */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-semibold text-neutral-700 mb-1">
                      Part / Component Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={editingProduct.name}
                      onChange={(e) => setEditingProduct({ ...editingProduct, name: e.target.value })}
                      className="w-full p-2.5 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary/20 text-neutral-900"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-neutral-700 mb-1">
                      SKU Code *
                    </label>
                    <input
                      type="text"
                      required
                      value={editingProduct.sku}
                      onChange={(e) => setEditingProduct({ ...editingProduct, sku: e.target.value })}
                      className="w-full p-2.5 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary/20 font-mono text-neutral-900"
                    />
                  </div>
                </div>

                {/* Category & Status */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div>
                    <label className="block font-semibold text-neutral-700 mb-1">
                      Category
                    </label>
                    <select
                      value={editingProduct.categoryName}
                      onChange={(e) => {
                        const matched = categories.find((c) => c.name === e.target.value);
                        setEditingProduct({
                          ...editingProduct,
                          categoryName: e.target.value,
                          categoryId: matched?.id || editingProduct.categoryId
                        });
                      }}
                      className="w-full p-2.5 rounded-lg border border-neutral-300 bg-white text-neutral-900"
                    >
                      {categories.map((c) => (
                        <option key={c.id} value={c.name}>
                          {c.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block font-semibold text-neutral-700 mb-1">
                      Storefront Status
                    </label>
                    <select
                      value={editingProduct.status}
                      onChange={(e) => setEditingProduct({ ...editingProduct, status: e.target.value as Product["status"] })}
                      className="w-full p-2.5 rounded-lg border border-neutral-300 bg-white text-neutral-900"
                    >
                      <option value="Active">Active (Live on website)</option>
                      <option value="Draft">Draft (Hidden)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-semibold text-neutral-700 mb-1">
                      Pricing Mode
                    </label>
                    <select
                      value={editingProduct.priceMode}
                      onChange={(e) => setEditingProduct({ ...editingProduct, priceMode: e.target.value as Product["priceMode"] })}
                      className="w-full p-2.5 rounded-lg border border-neutral-300 bg-white text-neutral-900"
                    >
                      <option value="Request Quote">Request Quote (RFQ)</option>
                      <option value="Starting from">Starting from</option>
                      <option value="Buy Now">Buy Now / Fixed</option>
                    </select>
                  </div>
                </div>

                {/* Real Image URL & Live Preview */}
                <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-200 space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="block font-semibold text-neutral-800">
                      Real Industrial Image URL
                    </label>
                    <span className="text-[11px] text-neutral-400">Live preview below</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 rounded-lg overflow-hidden relative shrink-0 border border-neutral-300 bg-neutral-200 shadow-xs">
                      <Image
                        src={editingProduct.images[0] || REAL_IMAGE_PRESETS[0].url}
                        alt={editingProduct.name}
                        fill
                        sizes="56px"
                        className="object-cover"
                      />
                    </div>
                    <input
                      type="url"
                      value={editingProduct.images[0] || ""}
                      onChange={(e) => setEditingProduct({ ...editingProduct, images: [e.target.value] })}
                      className="flex-1 p-2 rounded-lg border border-neutral-300 bg-white font-mono text-[11px] text-neutral-800"
                    />
                  </div>

                  <div className="pt-1">
                    <div className="text-[11px] font-semibold text-neutral-500 mb-1.5">
                      Switch to stock real motor photography:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {REAL_IMAGE_PRESETS.map((preset, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setEditingProduct({ ...editingProduct, images: [preset.url] })}
                          className={`px-2 py-1 rounded text-[10px] font-medium border transition-colors ${
                            editingProduct.images[0] === preset.url
                              ? "bg-primary text-white border-primary"
                              : "bg-white text-neutral-700 border-neutral-200 hover:bg-neutral-100"
                          }`}
                        >
                          {preset.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Price, Unit, MOQ, Lead Time */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <div>
                    <label className="block font-semibold text-neutral-700 mb-1">
                      Rate / Price (₹)
                    </label>
                    <input
                      type="number"
                      value={editingProduct.price || 0}
                      onChange={(e) => setEditingProduct({ ...editingProduct, price: Number(e.target.value) })}
                      className="w-full p-2 rounded-lg border border-neutral-300 font-mono text-neutral-900"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-neutral-700 mb-1">
                      Unit
                    </label>
                    <input
                      type="text"
                      value={editingProduct.unit}
                      onChange={(e) => setEditingProduct({ ...editingProduct, unit: e.target.value })}
                      className="w-full p-2 rounded-lg border border-neutral-300 text-neutral-900"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-neutral-700 mb-1">
                      MOQ
                    </label>
                    <input
                      type="text"
                      value={editingProduct.moq}
                      onChange={(e) => setEditingProduct({ ...editingProduct, moq: e.target.value })}
                      className="w-full p-2 rounded-lg border border-neutral-300 text-neutral-900"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-neutral-700 mb-1">
                      Lead Time
                    </label>
                    <input
                      type="text"
                      value={editingProduct.leadTime}
                      onChange={(e) => setEditingProduct({ ...editingProduct, leadTime: e.target.value })}
                      className="w-full p-2 rounded-lg border border-neutral-300 text-neutral-900"
                    />
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label className="block font-semibold text-neutral-700 mb-1">
                    Technical Summary
                  </label>
                  <textarea
                    rows={3}
                    value={editingProduct.shortDescription}
                    onChange={(e) => setEditingProduct({
                      ...editingProduct,
                      shortDescription: e.target.value,
                      fullDescription: e.target.value
                    })}
                    className="w-full p-2.5 rounded-lg border border-neutral-300 focus:outline-none text-neutral-900"
                  />
                </div>

                <div className="flex justify-end gap-2 pt-2 border-t border-neutral-200">
                  <button
                    type="button"
                    onClick={() => setEditingProduct(null)}
                    className="px-4 py-2 font-semibold rounded-lg border border-neutral-300 text-neutral-700 hover:bg-neutral-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 text-white shadow-sm flex items-center gap-1.5"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Save & Update SKU
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* DELETE CONFIRMATION MODAL */}
        {/* ========================================================================= */}
        {deletingProduct && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in">
            <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-4 border border-neutral-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-neutral-900 text-base font-heading">
                    Delete Product SKU?
                  </h3>
                  <p className="text-xs text-neutral-500">
                    Are you sure you want to remove this product from the catalog?
                  </p>
                </div>
              </div>

              <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-200 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg overflow-hidden relative shrink-0 border border-neutral-300 bg-neutral-200">
                  <Image
                    src={deletingProduct.images[0] || REAL_IMAGE_PRESETS[0].url}
                    alt={deletingProduct.name}
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                </div>
                <div className="text-xs">
                  <div className="font-semibold text-neutral-900">{deletingProduct.name}</div>
                  <div className="font-mono text-neutral-400">{deletingProduct.sku}</div>
                </div>
              </div>

              <p className="text-xs text-neutral-500">
                This action will permanently delete the SKU from local storage and remove it from the live catalog.
              </p>

              <div className="flex justify-end gap-2 pt-2 border-t border-neutral-200">
                <button
                  type="button"
                  onClick={() => setDeletingProduct(null)}
                  className="px-4 py-2 font-semibold rounded-lg border border-neutral-300 text-neutral-700 hover:bg-neutral-50 text-xs"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleConfirmDelete}
                  className="px-5 py-2 font-semibold rounded-lg bg-red-600 hover:bg-red-700 text-white shadow-sm flex items-center gap-1.5 text-xs"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  Yes, Delete Product
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}
