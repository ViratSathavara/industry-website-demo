"use client";

import React, { useState } from "react";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { useDemoState } from "@/lib/services/demo-state-context";
import {
  Sliders,
  Building,
  CheckCircle2,
  Save,
  RefreshCw,
  Sparkles,
  Database,
  MessageSquare,
  DollarSign,
  MapPin,
  ShieldCheck,
  Check
} from "lucide-react";

export default function AdminSettingsPage() {
  const { resetDemoData } = useDemoState();
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  // Form states
  const [companyName, setCompanyName] = useState("INDUSTRIA Precision Manufacturing Pvt. Ltd.");
  const [gstNumber, setGstNumber] = useState("24AAACI1234F1Z8");
  const [panNumber, setPanNumber] = useState("AAACI1234F");
  const [iecCode, setIecCode] = useState("0812938472");
  const [registeredOffice, setRegisteredOffice] = useState("Plot No. 42-45, Phase II, GIDC Naroda, Ahmedabad, Gujarat - 382330");
  const [whatsappNumber, setWhatsappNumber] = useState("+91 98250 12345");
  const [currencySymbol, setCurrencySymbol] = useState("INR (₹)");
  const [defaultGSTRate, setDefaultGSTRate] = useState(18);
  const [defaultValidityDays, setDefaultValidityDays] = useState(30);

  // ERP Integrations Toggles
  const [sapSync, setSapSync] = useState(true);
  const [tallySync, setTallySync] = useState(true);
  const [mesSync, setMesSync] = useState(true);
  const [dynamicsSync, setDynamicsSync] = useState(false);

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    setToastMsg("Factory parameters and ERP sync configuration saved successfully!");
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
                Factory & ERP Master Settings
              </h1>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-primary/10 text-primary">
                Production Config
              </span>
            </div>
            <p className="text-sm text-neutral-500 mt-1">
              Legal corporate credentials, shopfloor MES parameters, SAP/Tally connectivity, and taxation logic.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                if (window.confirm("Reset all demo data back to default specifications?")) {
                  resetDemoData();
                  setToastMsg("Demo data successfully reset to factory defaults.");
                  setTimeout(() => setToastMsg(null), 3000);
                }
              }}
              className="px-4 py-2 text-xs font-semibold rounded-lg border border-neutral-300 hover:bg-rose-50 hover:text-rose-700 text-neutral-700 transition-colors flex items-center gap-1.5"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              Reset Demo State
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

        <form onSubmit={handleSaveSettings} className="space-y-6">
          {/* Corporate Entity Details */}
          <div className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-sm space-y-4">
            <div className="flex items-center gap-2 border-b border-neutral-200 pb-3">
              <Building className="w-5 h-5 text-primary" />
              <h2 className="text-base font-bold text-neutral-900 font-heading">
                Legal Entity & Corporate Registration
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="block font-semibold text-neutral-700 mb-1">
                  Registered Manufacturing Company Name
                </label>
                <input
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="w-full p-2.5 rounded-lg border border-neutral-300 font-medium text-neutral-900 focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div>
                <label className="block font-semibold text-neutral-700 mb-1">
                  GST Identification Number (GSTIN)
                </label>
                <input
                  type="text"
                  value={gstNumber}
                  onChange={(e) => setGstNumber(e.target.value)}
                  className="w-full p-2.5 rounded-lg border border-neutral-300 font-mono text-neutral-900 focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div>
                <label className="block font-semibold text-neutral-700 mb-1">
                  PAN Number
                </label>
                <input
                  type="text"
                  value={panNumber}
                  onChange={(e) => setPanNumber(e.target.value)}
                  className="w-full p-2.5 rounded-lg border border-neutral-300 font-mono text-neutral-900"
                />
              </div>

              <div>
                <label className="block font-semibold text-neutral-700 mb-1">
                  Import Export Code (IEC)
                </label>
                <input
                  type="text"
                  value={iecCode}
                  onChange={(e) => setIecCode(e.target.value)}
                  className="w-full p-2.5 rounded-lg border border-neutral-300 font-mono text-neutral-900"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block font-semibold text-neutral-700 mb-1">
                  Registered Plant & Corporate Headquarters Address
                </label>
                <input
                  type="text"
                  value={registeredOffice}
                  onChange={(e) => setRegisteredOffice(e.target.value)}
                  className="w-full p-2.5 rounded-lg border border-neutral-300 text-neutral-900"
                />
              </div>
            </div>
          </div>

          {/* ERP & MES Integration Connectors */}
          <div className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-sm space-y-4">
            <div className="flex items-center gap-2 border-b border-neutral-200 pb-3">
              <Database className="w-5 h-5 text-primary" />
              <h2 className="text-base font-bold text-neutral-900 font-heading">
                ERP & Shopfloor MES Integration Connectors
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-neutral-200 bg-neutral-50/50 flex items-center justify-between">
                <div>
                  <div className="font-bold text-neutral-900 text-sm">SAP S/4HANA Connector</div>
                  <div className="text-xs text-neutral-500 mt-0.5">Automated Material Ledger & PO sync</div>
                  <span className="inline-block mt-1 text-[10px] font-semibold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                    Connected (RFC Gateway 3300)
                  </span>
                </div>
                <input
                  type="checkbox"
                  checked={sapSync}
                  onChange={(e) => setSapSync(e.target.checked)}
                  className="w-4 h-4 text-primary rounded"
                />
              </div>

              <div className="p-4 rounded-xl border border-neutral-200 bg-neutral-50/50 flex items-center justify-between">
                <div>
                  <div className="font-bold text-neutral-900 text-sm">Tally Prime Server API</div>
                  <div className="text-xs text-neutral-500 mt-0.5">Real-time GST Invoicing & Ledger</div>
                  <span className="inline-block mt-1 text-[10px] font-semibold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                    Connected (ODBC XML Bridge)
                  </span>
                </div>
                <input
                  type="checkbox"
                  checked={tallySync}
                  onChange={(e) => setTallySync(e.target.checked)}
                  className="w-4 h-4 text-primary rounded"
                />
              </div>

              <div className="p-4 rounded-xl border border-neutral-200 bg-neutral-50/50 flex items-center justify-between">
                <div>
                  <div className="font-bold text-neutral-900 text-sm">Siemens Opcenter MES</div>
                  <div className="text-xs text-neutral-500 mt-0.5">Live CNC cycle times and QA inspection</div>
                  <span className="inline-block mt-1 text-[10px] font-semibold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                    Connected (OPC-UA Server)
                  </span>
                </div>
                <input
                  type="checkbox"
                  checked={mesSync}
                  onChange={(e) => setMesSync(e.target.checked)}
                  className="w-4 h-4 text-primary rounded"
                />
              </div>

              <div className="p-4 rounded-xl border border-neutral-200 bg-neutral-50/50 flex items-center justify-between">
                <div>
                  <div className="font-bold text-neutral-900 text-sm">Microsoft Dynamics 365</div>
                  <div className="text-xs text-neutral-500 mt-0.5">Supply Chain Management entity</div>
                  <span className="inline-block mt-1 text-[10px] font-semibold text-neutral-600 bg-neutral-200 px-2 py-0.5 rounded">
                    Standby
                  </span>
                </div>
                <input
                  type="checkbox"
                  checked={dynamicsSync}
                  onChange={(e) => setDynamicsSync(e.target.checked)}
                  className="w-4 h-4 text-primary rounded"
                />
              </div>
            </div>
          </div>

          {/* Commercial & Quotation Parameters */}
          <div className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-sm space-y-4">
            <div className="flex items-center gap-2 border-b border-neutral-200 pb-3">
              <DollarSign className="w-5 h-5 text-primary" />
              <h2 className="text-base font-bold text-neutral-900 font-heading">
                Commercial CPQ & Taxation Rules
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <div>
                <label className="block font-semibold text-neutral-700 mb-1">
                  Default GST Percentage (%)
                </label>
                <input
                  type="number"
                  value={defaultGSTRate}
                  onChange={(e) => setDefaultGSTRate(Number(e.target.value))}
                  className="w-full p-2.5 rounded-lg border border-neutral-300 font-mono text-neutral-900"
                />
              </div>

              <div>
                <label className="block font-semibold text-neutral-700 mb-1">
                  Quotation Validity (Days)
                </label>
                <input
                  type="number"
                  value={defaultValidityDays}
                  onChange={(e) => setDefaultValidityDays(Number(e.target.value))}
                  className="w-full p-2.5 rounded-lg border border-neutral-300 font-mono text-neutral-900"
                />
              </div>

              <div>
                <label className="block font-semibold text-neutral-700 mb-1">
                  Operational Currency
                </label>
                <input
                  type="text"
                  value={currencySymbol}
                  disabled
                  className="w-full p-2.5 rounded-lg border border-neutral-200 bg-neutral-100 text-neutral-500 font-mono"
                />
              </div>
            </div>
          </div>

          {/* Form Actions */}
          <div className="flex justify-end gap-3 pt-2">
            <button
              type="submit"
              className="px-6 py-2.5 text-xs font-semibold rounded-lg bg-primary hover:bg-primary-hover text-white shadow-sm flex items-center gap-2 transition-colors"
            >
              <Save className="w-3.5 h-3.5" />
              Save Master Parameters
            </button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
}
