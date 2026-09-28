"use client";

import React, { useState } from "react";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { useDemoState } from "@/lib/services/demo-state-context";
import {
  BarChart3,
  TrendingUp,
  Download,
  Calendar,
  Layers,
  ArrowUpRight,
  ArrowDownRight,
  Clock,
  Sparkles,
  PieChart as PieIcon,
  CheckCircle2,
  MapPin,
  Globe
} from "lucide-react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  CartesianGrid,
  Legend
} from "recharts";
import { formatCurrency } from "@/lib/utils";

export default function AdminAnalyticsPage() {
  const { enquiries, rfqs, quotes, orders, customers } = useDemoState();
  const [timeRange, setTimeRange] = useState("FY 2026-27");
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  // Conversion Funnel Data
  const funnelData = [
    { stage: "Storefront Visitors", count: 48500, dropoff: "—", rate: "100%" },
    { stage: "Technical Inquiries", count: enquiries.length * 15, dropoff: "-78%", rate: "22.4%" },
    { stage: "Formal CAD RFQs", count: rfqs.length * 8, dropoff: "-45%", rate: "12.3%" },
    { stage: "Quotes Issued", count: quotes.length * 6, dropoff: "-18%", rate: "10.1%" },
    { stage: "Orders Won & Invoiced", count: orders.length * 5, dropoff: "-22%", rate: "7.9%" }
  ];

  // Industry Revenue Breakdown
  const industryRevenueData = [
    { industry: "Automotive", revenue: 42500000 },
    { industry: "Aerospace", revenue: 38200000 },
    { industry: "Oil & Gas", revenue: 31800000 },
    { industry: "Heavy Eng", revenue: 26400000 },
    { industry: "Defense", revenue: 21900000 },
    { industry: "Renewables", revenue: 16700000 }
  ];

  // Inbound Channel Distribution
  const channelData = [
    { name: "Website RFQs", value: 38, color: "#d4560a" },
    { name: "WhatsApp API", value: 28, color: "#16a34a" },
    { name: "IndiaMART B2B", value: 16, color: "#2563eb" },
    { name: "Direct Rep Calls", value: 12, color: "#f59e0b" },
    { name: "Trade Expos", value: 6, color: "#78716c" }
  ];

  // Regional Demand Distribution
  const regionalData = [
    { region: "Western Cluster (Pune, Ahmedabad, Sanand)", percent: "42%", value: "₹6.4 Cr", status: "Surging" },
    { region: "Southern Hub (Chennai, Bengaluru, Coimbatore)", percent: "28%", value: "₹4.2 Cr", status: "Steady" },
    { region: "Northern Corridor (NCR, Manesar, Ludhiana)", percent: "18%", value: "₹2.7 Cr", status: "Growing" },
    { region: "Eastern Industrial (Jamshedpur, Kolkata)", percent: "7%", value: "₹1.1 Cr", status: "Steady" },
    { region: "Global Export Shipments (Middle East & Europe)", percent: "5%", value: "₹0.8 Cr", status: "Expanding" }
  ];

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold text-neutral-900 tracking-tight font-heading">
                Digital Factory Intelligence & Funnel
              </h1>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-primary/10 text-primary">
                Executive BI
              </span>
            </div>
            <p className="text-sm text-neutral-500 mt-1">
              End-to-end commercial velocity, inquiry attribution, RFQ hit rates, and multi-sector revenue analytics.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="px-3 py-2 text-xs font-semibold rounded-lg border border-neutral-300 bg-white focus:outline-none"
            >
              <option value="This Quarter (Q3)">This Quarter (Q3)</option>
              <option value="FY 2026-27">FY 2026-27 (YTD)</option>
              <option value="Last 12 Months">Last 12 Months</option>
            </select>

            <button
              onClick={() => {
                setToastMsg("Generating Executive Board Summary Deck (PDF + CSV)...");
                setTimeout(() => setToastMsg("Executive Board Summary downloaded successfully!"), 2000);
                setTimeout(() => setToastMsg(null), 4500);
              }}
              className="px-4 py-2 text-xs font-semibold rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white transition-colors flex items-center gap-1.5 shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              Export Board Deck
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

        {/* KPI Scorecard */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-white border border-neutral-200 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-neutral-500 uppercase tracking-wider">Avg Quote Turnaround</span>
              <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded flex items-center">
                <ArrowDownRight className="w-3 h-3" /> -89%
              </span>
            </div>
            <div className="text-2xl font-bold text-neutral-900 mt-1">2.4 Hours</div>
            <div className="text-xs text-neutral-400 mt-0.5">Industry avg: 72 hours</div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-neutral-200 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-neutral-500 uppercase tracking-wider">RFQ Win Rate</span>
              <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded flex items-center">
                <ArrowUpRight className="w-3 h-3" /> +14.2%
              </span>
            </div>
            <div className="text-2xl font-bold text-neutral-900 mt-1">68.4%</div>
            <div className="text-xs text-neutral-400 mt-0.5">High precision conversions</div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-neutral-200 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-neutral-500 uppercase tracking-wider">Digital Pipeline</span>
              <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded flex items-center">
                <ArrowUpRight className="w-3 h-3" /> +32%
              </span>
            </div>
            <div className="text-2xl font-bold text-neutral-900 mt-1">₹15.2 Cr</div>
            <div className="text-xs text-neutral-400 mt-0.5">Active quotes & orders</div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-neutral-200 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-neutral-500 uppercase tracking-wider">Repeat Buyer Rate</span>
              <span className="text-xs font-bold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded flex items-center">
                <Sparkles className="w-3 h-3" /> 74%
              </span>
            </div>
            <div className="text-2xl font-bold text-neutral-900 mt-1">74.2%</div>
            <div className="text-xs text-neutral-400 mt-0.5">Tier-1 OEM retention</div>
          </div>
        </div>

        {/* Funnel & Channels Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Conversion Funnel */}
          <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-neutral-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-bold text-neutral-900 text-base font-heading">
                  Inquiry-to-Order Conversion Funnel
                </h3>
                <p className="text-xs text-neutral-500 mt-0.5">
                  Visitor journey from engineering discovery to finalized production orders
                </p>
              </div>
              <span className="text-xs font-mono font-bold text-primary bg-primary/10 px-2 py-0.5 rounded">
                7.9% Overall Conversion
              </span>
            </div>

            <div className="space-y-3 pt-2">
              {funnelData.map((stage, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="font-semibold text-neutral-800">{stage.stage}</span>
                    <div className="flex items-center gap-3 font-mono">
                      <span className="text-neutral-500">{stage.count.toLocaleString()}</span>
                      <span className="font-bold text-neutral-900 w-12 text-right">{stage.rate}</span>
                    </div>
                  </div>
                  <div className="w-full h-3 bg-neutral-100 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-1000 bg-primary"
                      style={{ width: stage.rate }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Lead Channels Donut Chart */}
          <div className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-sm space-y-4 flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-neutral-900 text-base font-heading">
                Inbound Lead Sourcing
              </h3>
              <p className="text-xs text-neutral-500 mt-0.5">
                Channel mix for verified commercial inquiries
              </p>
            </div>

            <div className="h-48 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={channelData}
                    cx="50%"
                    cy="50%"
                    innerRadius={55}
                    outerRadius={80}
                    paddingAngle={4}
                    dataKey="value"
                  >
                    {channelData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(val) => [`${val}%`, "Share"]}
                    contentStyle={{ borderRadius: "8px", fontSize: "12px" }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="space-y-1.5 text-xs pt-2 border-t border-neutral-100">
              {channelData.map((ch, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: ch.color }} />
                    <span className="text-neutral-700">{ch.name}</span>
                  </div>
                  <span className="font-mono font-bold text-neutral-900">{ch.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sector Revenue & Regional Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Revenue by Vertical */}
          <div className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-sm space-y-4">
            <div>
              <h3 className="font-bold text-neutral-900 text-base font-heading">
                Gross Revenue by Industry Vertical (₹)
              </h3>
              <p className="text-xs text-neutral-500 mt-0.5">
                Cumulative completed work order value across key manufacturing sectors
              </p>
            </div>

            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={industryRevenueData} margin={{ top: 10, right: 10, left: 20, bottom: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                  <XAxis
                    dataKey="industry"
                    tick={{ fontSize: 11, fill: "#737373" }}
                    axisLine={{ stroke: "#e5e5e5" }}
                  />
                  <YAxis
                    tick={{ fontSize: 11, fill: "#737373" }}
                    axisLine={{ stroke: "#e5e5e5" }}
                    tickFormatter={(v) => `₹${(v / 10000000).toFixed(1)}Cr`}
                  />
                  <Tooltip
                    formatter={(val) => [formatCurrency(Number(val)), "Revenue"]}
                    contentStyle={{ borderRadius: "8px", fontSize: "12px" }}
                  />
                  <Bar dataKey="revenue" fill="#d4560a" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Regional Demand Distribution */}
          <div className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-sm space-y-4 flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-neutral-900 text-base font-heading">
                Geographic Demand Distribution
              </h3>
              <p className="text-xs text-neutral-500 mt-0.5">
                Industrial manufacturing corridor concentration & order volume
              </p>
            </div>

            <div className="space-y-3">
              {regionalData.map((reg, idx) => (
                <div key={idx} className="p-3 bg-neutral-50 rounded-xl border border-neutral-200 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2.5">
                    <MapPin className="w-4 h-4 text-primary shrink-0" />
                    <div>
                      <div className="font-semibold text-neutral-900">{reg.region}</div>
                      <div className="text-[11px] text-neutral-500">Order Volume: <strong className="text-neutral-800">{reg.value}</strong></div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="font-mono font-bold text-neutral-900">{reg.percent}</span>
                    <span className="block text-[10px] text-emerald-600 font-medium">{reg.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
