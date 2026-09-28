"use client";

import React, { useState } from "react";
import { AdminLayout } from "@/components/admin/AdminLayout";
import {
  FileText,
  Sliders,
  CheckCircle2,
  Save,
  Sparkles,
  Eye,
  Layout,
  Layers,
  Settings
} from "lucide-react";

export default function AdminContentPage() {
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  // Content state
  const [heroBadge, setHeroBadge] = useState("INDIA'S PREMIER DIGITAL FACTORY PLATFORM");
  const [heroHeading, setHeroHeading] = useState("Engineering High-Precision Custom Components at Scale");
  const [heroSubtitle, setHeroSubtitle] = useState("Serving 18 specialized industrial verticals from aerospace titanium machining to heavy fabrication with ISO 9001:2015 quality standards.");

  // Feature Flags
  const [showDemoBanner, setShowDemoBanner] = useState(true);
  const [showMarquee, setShowMarquee] = useState(true);
  const [showCADDownload, setShowCADDownload] = useState(true);
  const [showWhatsAppFloating, setShowWhatsAppFloating] = useState(true);
  const [enableInstantEstimates, setEnableInstantEstimates] = useState(true);

  // Factory Stats
  const [toleranceMetric, setToleranceMetric] = useState("±0.005 mm");
  const [machinesCount, setMachinesCount] = useState("140+ CNC & VMC Centers");
  const [plantArea, setPlantArea] = useState("120,000 Sq. Ft.");
  const [capacityMetric, setCapacityMetric] = useState("850 MT / Month");

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setToastMsg("Storefront CMS configuration and feature flags successfully updated!");
    setTimeout(() => setToastMsg(null), 3500);
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold text-neutral-900 tracking-tight font-heading">
                Storefront CMS & Feature Toggles
              </h1>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-primary/10 text-primary">
                Live CMS
              </span>
            </div>
            <p className="text-sm text-neutral-500 mt-1">
              Real-time homepage hero messaging, factory infrastructure metrics, and interactive feature flags.
            </p>
          </div>
        </div>

        {/* Toast */}
        {toastMsg && (
          <div className="p-3 bg-emerald-50 border border-emerald-300 text-emerald-900 rounded-lg text-sm flex items-center gap-2 animate-fade-in">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>{toastMsg}</span>
          </div>
        )}

        <form onSubmit={handleSave} className="space-y-6">
          {/* Hero Section Copy */}
          <div className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-sm space-y-4">
            <div className="flex items-center gap-2 border-b border-neutral-200 pb-3">
              <Layout className="w-5 h-5 text-primary" />
              <h2 className="text-base font-bold text-neutral-900 font-heading">
                Homepage Hero Section Copy
              </h2>
            </div>

            <div className="space-y-4 text-xs">
              <div>
                <label className="block font-semibold text-neutral-700 mb-1">
                  Hero Pre-Heading Tag / Badge
                </label>
                <input
                  type="text"
                  value={heroBadge}
                  onChange={(e) => setHeroBadge(e.target.value)}
                  className="w-full p-2.5 rounded-lg border border-neutral-300 text-neutral-900 font-medium"
                />
              </div>

              <div>
                <label className="block font-semibold text-neutral-700 mb-1">
                  Main Headline
                </label>
                <input
                  type="text"
                  value={heroHeading}
                  onChange={(e) => setHeroHeading(e.target.value)}
                  className="w-full p-2.5 rounded-lg border border-neutral-300 text-neutral-900 font-bold"
                />
              </div>

              <div>
                <label className="block font-semibold text-neutral-700 mb-1">
                  Hero Sub-Paragraph Copy
                </label>
                <textarea
                  rows={3}
                  value={heroSubtitle}
                  onChange={(e) => setHeroSubtitle(e.target.value)}
                  className="w-full p-2.5 rounded-lg border border-neutral-300 text-neutral-900"
                />
              </div>
            </div>
          </div>

          {/* Plant Capability Metrics */}
          <div className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-sm space-y-4">
            <div className="flex items-center gap-2 border-b border-neutral-200 pb-3">
              <Layers className="w-5 h-5 text-primary" />
              <h2 className="text-base font-bold text-neutral-900 font-heading">
                Factory Infrastructure Highlights
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="block font-semibold text-neutral-700 mb-1">
                  Precision Tolerance Standard
                </label>
                <input
                  type="text"
                  value={toleranceMetric}
                  onChange={(e) => setToleranceMetric(e.target.value)}
                  className="w-full p-2.5 rounded-lg border border-neutral-300 font-mono text-neutral-900"
                />
              </div>

              <div>
                <label className="block font-semibold text-neutral-700 mb-1">
                  CNC & VMC Machine Fleet
                </label>
                <input
                  type="text"
                  value={machinesCount}
                  onChange={(e) => setMachinesCount(e.target.value)}
                  className="w-full p-2.5 rounded-lg border border-neutral-300 font-mono text-neutral-900"
                />
              </div>

              <div>
                <label className="block font-semibold text-neutral-700 mb-1">
                  Plant Covered Floor Area
                </label>
                <input
                  type="text"
                  value={plantArea}
                  onChange={(e) => setPlantArea(e.target.value)}
                  className="w-full p-2.5 rounded-lg border border-neutral-300 font-mono text-neutral-900"
                />
              </div>

              <div>
                <label className="block font-semibold text-neutral-700 mb-1">
                  Monthly Throughput Capacity
                </label>
                <input
                  type="text"
                  value={capacityMetric}
                  onChange={(e) => setCapacityMetric(e.target.value)}
                  className="w-full p-2.5 rounded-lg border border-neutral-300 font-mono text-neutral-900"
                />
              </div>
            </div>
          </div>

          {/* Feature Flags Toggles */}
          <div className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-sm space-y-4">
            <div className="flex items-center gap-2 border-b border-neutral-200 pb-3">
              <Settings className="w-5 h-5 text-primary" />
              <h2 className="text-base font-bold text-neutral-900 font-heading">
                Interactive Feature Flags
              </h2>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between p-3.5 rounded-xl border border-neutral-200 bg-neutral-50/50">
                <div>
                  <div className="font-bold text-neutral-900 text-xs">Top Demo Mode Banner</div>
                  <div className="text-[11px] text-neutral-500">Show top industry switcher and live demo notification badge</div>
                </div>
                <input
                  type="checkbox"
                  checked={showDemoBanner}
                  onChange={(e) => setShowDemoBanner(e.target.checked)}
                  className="w-4 h-4 text-primary rounded"
                />
              </div>

              <div className="flex items-center justify-between p-3.5 rounded-xl border border-neutral-200 bg-neutral-50/50">
                <div>
                  <div className="font-bold text-neutral-900 text-xs">Floating WhatsApp Simulator</div>
                  <div className="text-[11px] text-neutral-500">Display persistent floating inquiry button on public pages</div>
                </div>
                <input
                  type="checkbox"
                  checked={showWhatsAppFloating}
                  onChange={(e) => setShowWhatsAppFloating(e.target.checked)}
                  className="w-4 h-4 text-primary rounded"
                />
              </div>

              <div className="flex items-center justify-between p-3.5 rounded-xl border border-neutral-200 bg-neutral-50/50">
                <div>
                  <div className="font-bold text-neutral-900 text-xs">Public CAD Model Downloads</div>
                  <div className="text-[11px] text-neutral-500">Allow visitors to download STEP 3D models from product sheets</div>
                </div>
                <input
                  type="checkbox"
                  checked={showCADDownload}
                  onChange={(e) => setShowCADDownload(e.target.checked)}
                  className="w-4 h-4 text-primary rounded"
                />
              </div>

              <div className="flex items-center justify-between p-3.5 rounded-xl border border-neutral-200 bg-neutral-50/50">
                <div>
                  <div className="font-bold text-neutral-900 text-xs">Instant CPQ RFQ Calculator</div>
                  <div className="text-[11px] text-neutral-500">Enable real-time custom RFQ multi-step wizard</div>
                </div>
                <input
                  type="checkbox"
                  checked={enableInstantEstimates}
                  onChange={(e) => setEnableInstantEstimates(e.target.checked)}
                  className="w-4 h-4 text-primary rounded"
                />
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-3 pt-2">
            <button
              type="submit"
              className="px-6 py-2.5 text-xs font-semibold rounded-lg bg-primary hover:bg-primary-hover text-white shadow-sm flex items-center gap-2 transition-colors"
            >
              <Save className="w-3.5 h-3.5" />
              Publish Content Updates
            </button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
}
