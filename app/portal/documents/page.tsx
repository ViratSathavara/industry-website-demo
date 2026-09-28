"use client";

import React, { useState } from "react";
import { PortalLayout } from "@/components/portal/PortalLayout";
import { useDemoState } from "@/lib/services/demo-state-context";
import {
  FolderOpen,
  FileText,
  FileDown,
  Search,
  Filter,
  CheckCircle2,
  Calendar,
  X
} from "lucide-react";

export default function PortalDocumentsPage() {
  const { documents } = useDemoState();
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [previewDoc, setPreviewDoc] = useState<string | null>(null);

  const categories = [
    "all",
    "Quotations",
    "Invoices",
    "Product Datasheets",
    "Quality Reports",
    "Certificates",
    "Catalogues"
  ];

  const filteredDocs = documents.filter((doc) => {
    const matchesCategory = selectedCategory === "all" || doc.category === selectedCategory;
    const matchesSearch =
      doc.title.toLowerCase().includes(search.toLowerCase()) ||
      doc.relatedTo.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <PortalLayout>
      <div className="space-y-6 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-extrabold text-stone-900 tracking-tight">
              Engineering Drawings & Compliance Library
            </h2>
            <p className="text-xs text-stone-500">
              Access certified material test reports, dimensional drawings, tax invoices, and official quotations
            </p>
          </div>
        </div>

        {/* Search & Category Filter */}
        <div className="bg-white p-4 rounded-xl border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-xs">
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-2.5" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search documents by title, heat number, or standard..."
              className="w-full bg-stone-50 pl-9 pr-4 py-1.5 border border-stone-300 rounded-lg text-xs text-stone-900 focus:outline-none focus:border-[#d4560a]"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setSelectedCategory(c)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                  selectedCategory === c
                    ? "bg-stone-900 text-white"
                    : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                }`}
              >
                {c === "all" ? "All Documents" : c}
              </button>
            ))}
          </div>
        </div>

        {/* Documents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDocs.map((doc) => (
            <div
              key={doc.id}
              className="bg-white rounded-xl border border-stone-200 p-5 flex flex-col justify-between hover:shadow-md transition-shadow shadow-xs space-y-4"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-orange-50 text-[#d4560a] border border-orange-200">
                    {doc.category}
                  </span>
                  <span className="text-[11px] text-stone-400 font-mono">{doc.fileSize}</span>
                </div>

                <h3 className="font-bold text-xs text-stone-900 leading-snug line-clamp-2">
                  {doc.title}
                </h3>

                <div className="text-[11px] text-stone-500 space-y-0.5 pt-1">
                  <div>Related: <strong>{doc.relatedTo}</strong></div>
                  <div>Uploaded: {doc.uploadDate}</div>
                </div>
              </div>

              <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                <button
                  onClick={() => setPreviewDoc(doc.title)}
                  className="px-3 py-1.5 rounded-lg bg-stone-50 hover:bg-stone-100 border border-stone-200 text-stone-700 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                >
                  <FileDown className="w-3.5 h-3.5 text-[#d4560a]" />
                  <span>Download / Preview</span>
                </button>
                <span className="text-[10px] text-emerald-700 font-medium">Verified PDF</span>
              </div>
            </div>
          ))}
        </div>

        {/* Preview Modal */}
        {previewDoc && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 border border-stone-200 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-orange-50 text-[#d4560a] flex items-center justify-center mx-auto">
                <FileDown className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-stone-900 text-base">Document Preview</h3>
                <p className="text-xs text-stone-600 mt-1">{previewDoc}</p>
              </div>
              <div className="bg-stone-50 p-3 rounded-lg border border-stone-200 text-xs text-left font-mono text-stone-600 space-y-1">
                <div>Document ID: DOC-2026-IND-048</div>
                <div>Status: Certified & Digitally Signed</div>
                <div>Format: PDF (Acrobat Reader Compliant)</div>
              </div>
              <button
                onClick={() => setPreviewDoc(null)}
                className="w-full py-2.5 bg-stone-900 hover:bg-stone-800 text-white rounded-lg text-xs font-bold"
              >
                Close Preview
              </button>
            </div>
          </div>
        )}
      </div>
    </PortalLayout>
  );
}
