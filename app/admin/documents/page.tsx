"use client";

import React, { useState } from "react";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { useDemoState } from "@/lib/services/demo-state-context";
import { DocumentItem } from "@/lib/types";
import {
  FolderOpen,
  Search,
  Filter,
  Download,
  Plus,
  FileText,
  FileCheck,
  ShieldCheck,
  Eye,
  CheckCircle2,
  X,
  Sparkles,
  HardDrive
} from "lucide-react";
import { formatDate } from "@/lib/utils";

export default function AdminDocumentsPage() {
  const { documents, customers } = useDemoState();

  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  // New Document form
  const [newTitle, setNewTitle] = useState("");
  const [newCategory, setNewCategory] = useState<DocumentItem["category"]>("Quality Reports");
  const [newRelated, setNewRelated] = useState(customers[0]?.companyName || "General Industrial");
  const [isPublic, setIsPublic] = useState(false);

  const [localDocs, setLocalDocs] = useState<DocumentItem[]>(documents);

  const categories: Array<DocumentItem["category"] | "all"> = [
    "all",
    "Certificates",
    "Quality Reports",
    "Technical Drawings",
    "Product Datasheets",
    "Invoices",
    "Purchase Orders",
    "Catalogues"
  ];

  const filteredDocs = localDocs.filter((doc) => {
    const matchesSearch =
      doc.title.toLowerCase().includes(search.toLowerCase()) ||
      doc.relatedTo.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      categoryFilter === "all" || doc.category === categoryFilter;

    return matchesSearch && matchesCategory;
  });

  const handleUploadDoc = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const created: DocumentItem = {
      id: `doc-${Date.now()}`,
      title: newTitle,
      category: newCategory,
      fileUrl: `/docs/${newTitle.toLowerCase().replace(/[^a-z0-9]+/g, "-")}.pdf`,
      fileSize: "2.8 MB",
      relatedTo: newRelated,
      uploadDate: new Date().toISOString(),
      isPublic
    };

    setLocalDocs([created, ...localDocs]);
    setIsUploadOpen(false);
    setToastMsg(`Document "${created.title}" stored in factory vault.`);
    setTimeout(() => setToastMsg(null), 3500);

    setNewTitle("");
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold text-neutral-900 tracking-tight font-heading">
                Document Vault & Compliance Center
              </h1>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-primary/10 text-primary">
                {filteredDocs.length} Documents
              </span>
            </div>
            <p className="text-sm text-neutral-500 mt-1">
              Material Test Certificates (MTC 3.1/3.2), CMM Metrology Reports, ISO compliance, and commercial records.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsUploadOpen(true)}
              className="px-4 py-2 text-xs font-semibold rounded-lg bg-primary hover:bg-primary-hover text-white transition-colors flex items-center gap-2 shadow-sm"
            >
              <Plus className="w-3.5 h-3.5" />
              Upload Document to Vault
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
            <div className="text-xs font-medium text-neutral-500 uppercase tracking-wider">Total Vault Records</div>
            <div className="text-2xl font-bold text-neutral-900 mt-1">{localDocs.length}</div>
            <div className="text-xs text-neutral-400 mt-0.5">Encrypted cloud storage</div>
          </div>
          <div className="p-4 rounded-xl bg-blue-50/50 border border-blue-200 shadow-sm">
            <div className="text-xs font-semibold text-blue-700 uppercase tracking-wider">Quality & MTCs</div>
            <div className="text-2xl font-bold text-blue-900 mt-1">
              {localDocs.filter((d) => d.category === "Quality Reports" || d.category === "Certificates").length}
            </div>
            <div className="text-xs text-blue-600 mt-0.5">Heat traceability verified</div>
          </div>
          <div className="p-4 rounded-xl bg-emerald-50/50 border border-emerald-200 shadow-sm">
            <div className="text-xs font-semibold text-emerald-700 uppercase tracking-wider">Public Datasheets</div>
            <div className="text-2xl font-bold text-emerald-900 mt-1">
              {localDocs.filter((d) => d.isPublic).length}
            </div>
            <div className="text-xs text-emerald-600 mt-0.5">Accessible by buyers</div>
          </div>
          <div className="p-4 rounded-xl bg-amber-50/50 border border-amber-200 shadow-sm">
            <div className="text-xs font-semibold text-amber-700 uppercase tracking-wider">Vault Storage</div>
            <div className="text-2xl font-bold text-amber-900 mt-1">84.2 MB</div>
            <div className="text-xs text-amber-600 mt-0.5">AWS S3 Mumbai Region</div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white p-4 rounded-xl border border-neutral-200 shadow-sm flex flex-col md:flex-row gap-3 items-center justify-between">
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by title, entity or keyword..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-sm rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoryFilter(cat)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg capitalize whitespace-nowrap transition-colors ${
                  categoryFilter === cat
                    ? "bg-neutral-900 text-white shadow-sm"
                    : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                }`}
              >
                {cat === "all" ? "All Documents" : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Documents Table */}
        <div className="bg-white rounded-xl border border-neutral-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-neutral-600">
              <thead className="bg-neutral-50 text-neutral-500 font-medium text-xs border-b border-neutral-200">
                <tr>
                  <th className="py-3 px-4">Document Title</th>
                  <th className="py-3 px-4">Category</th>
                  <th className="py-3 px-4">Associated Entity</th>
                  <th className="py-3 px-4">File Size</th>
                  <th className="py-3 px-4">Upload Date</th>
                  <th className="py-3 px-4">Access</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100">
                {filteredDocs.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="text-center py-12 text-neutral-400">
                      <FolderOpen className="w-8 h-8 mx-auto mb-2 text-neutral-300" />
                      No documents found matching criteria.
                    </td>
                  </tr>
                ) : (
                  filteredDocs.map((doc) => (
                    <tr key={doc.id} className="hover:bg-neutral-50/80 transition-colors">
                      <td className="py-3.5 px-4">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-neutral-100 text-neutral-700 flex items-center justify-center shrink-0">
                            <FileText className="w-4 h-4 text-primary" />
                          </div>
                          <span className="font-semibold text-neutral-900 text-xs">
                            {doc.title}
                          </span>
                        </div>
                      </td>

                      <td className="py-3.5 px-4">
                        <span className="px-2 py-0.5 text-xs font-semibold rounded bg-neutral-100 text-neutral-800">
                          {doc.category}
                        </span>
                      </td>

                      <td className="py-3.5 px-4 text-xs text-neutral-700">
                        {doc.relatedTo}
                      </td>

                      <td className="py-3.5 px-4 font-mono text-xs text-neutral-500">
                        {doc.fileSize}
                      </td>

                      <td className="py-3.5 px-4 text-xs text-neutral-500">
                        {formatDate(doc.uploadDate)}
                      </td>

                      <td className="py-3.5 px-4">
                        {doc.isPublic ? (
                          <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                            Public
                          </span>
                        ) : (
                          <span className="text-[11px] font-semibold text-neutral-600 bg-neutral-100 px-2 py-0.5 rounded">
                            Restricted
                          </span>
                        )}
                      </td>

                      <td className="py-3.5 px-4 text-right">
                        <button
                          onClick={() => {
                            setToastMsg(`Simulated download of ${doc.title} (${doc.fileSize})`);
                            setTimeout(() => setToastMsg(null), 3000);
                          }}
                          className="px-2.5 py-1 text-xs font-semibold text-neutral-700 hover:text-primary hover:bg-neutral-100 rounded-lg transition-colors flex items-center gap-1.5 ml-auto"
                        >
                          <Download className="w-3.5 h-3.5" />
                          <span>Download</span>
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Upload Modal */}
        {isUploadOpen && (
          <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in">
            <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-4 border border-neutral-200">
              <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                    <FolderOpen className="w-4 h-4" />
                  </div>
                  <h3 className="font-bold text-neutral-900 text-base font-heading">
                    Upload Document to Vault
                  </h3>
                </div>
                <button
                  onClick={() => setIsUploadOpen(false)}
                  className="text-neutral-400 hover:text-neutral-600"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleUploadDoc} className="space-y-4 text-xs">
                <div>
                  <label className="block font-semibold text-neutral-700 mb-1">
                    Document Title *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. CMM Inspection Certificate - Batch 412"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    className="w-full p-2.5 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-neutral-700 mb-1">
                    Document Category
                  </label>
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value as DocumentItem["category"])}
                    className="w-full p-2.5 rounded-lg border border-neutral-300 bg-white"
                  >
                    {categories.filter((c) => c !== "all").map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-neutral-700 mb-1">
                    Associated Customer or Unit
                  </label>
                  <input
                    type="text"
                    value={newRelated}
                    onChange={(e) => setNewRelated(e.target.value)}
                    className="w-full p-2.5 rounded-lg border border-neutral-300"
                  />
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <input
                    type="checkbox"
                    id="isPublicCheck"
                    checked={isPublic}
                    onChange={(e) => setIsPublic(e.target.checked)}
                    className="rounded text-primary focus:ring-primary"
                  />
                  <label htmlFor="isPublicCheck" className="text-neutral-700 cursor-pointer">
                    Publish to Public Customer Portal
                  </label>
                </div>

                <div className="flex justify-end gap-2 pt-3 border-t border-neutral-200">
                  <button
                    type="button"
                    onClick={() => setIsUploadOpen(false)}
                    className="px-4 py-2 font-semibold rounded-lg border border-neutral-300 text-neutral-700 hover:bg-neutral-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 font-semibold rounded-lg bg-primary hover:bg-primary-hover text-white shadow-sm flex items-center gap-1.5"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    Upload & Encrypt
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
