"use client";

import React, { useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { useDemoState } from "@/lib/services/demo-state-context";
import { mockAnalyticsData } from "@/lib/mock-data/crm-data";
import { StatusBadge } from "@/components/ui/StatusBadge";
import {
  Users,
  Eye,
  MessageSquare,
  FileText,
  FileCheck,
  ShoppingBag,
  TrendingUp,
  ArrowUpRight,
  Briefcase,
  Layers,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  Calendar
} from "lucide-react";
import { formatCurrency } from "@/lib/utils";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  Legend
} from "recharts";

function AdminDashboardContent() {
  const searchParams = useSearchParams();
  const isOwnerView = searchParams.get("view") === "owner";
  const { leads, rfqs, quotes, orders, selectedIndustry } = useDemoState();

  const { kpis, enquiriesOverTime, funnelData, enquiriesBySource, topProducts } =
    mockAnalyticsData;

  return (
    <AdminLayout>
      <div className="space-y-8 max-w-7xl mx-auto">
        {/* Header with View State */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#d4560a]">
                {isOwnerView ? "Executive Overview" : "Sales & Operational Command"}
              </span>
              {isOwnerView && (
                <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-900 font-bold text-[10px] border border-amber-300">
                  OWNER PERSPECTIVE
                </span>
              )}
            </div>
            <h2 className="text-2xl font-extrabold text-stone-900 tracking-tight mt-0.5">
              {isOwnerView
                ? "Is my digital factory generating business?"
                : "Manufacturing Operations & Growth Pipeline"}
            </h2>
            <p className="text-xs text-stone-500">
              Active sector: <strong>{selectedIndustry.name}</strong> • Real-time metrics
              aggregated across website, SEO, and inbound channels
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/admin/quotes"
              className="px-4 py-2 bg-[#d4560a] hover:bg-[#b84605] text-white text-xs font-bold rounded-lg shadow-xs flex items-center gap-1.5"
            >
              <FileCheck className="w-3.5 h-3.5" />
              <span>Create Quotation</span>
            </Link>
          </div>
        </div>

        {/* OWNER EXECUTIVE NATURAL LANGUAGE SUMMARY BOX (Section 53) */}
        {isOwnerView && (
          <div className="bg-gradient-to-r from-stone-900 via-stone-850 to-stone-900 text-white rounded-2xl p-6 border border-stone-700 shadow-lg space-y-3">
            <div className="flex items-center gap-2 text-amber-400">
              <Sparkles className="w-4 h-4" />
              <h3 className="font-bold text-xs uppercase tracking-wider">
                Executive Performance Summary (Sample Intelligence)
              </h3>
            </div>
            <p className="text-sm text-stone-200 leading-relaxed max-w-4xl">
              &quot;In this demo reporting cycle, <strong>{selectedIndustry.name}</strong> and{" "}
              <strong>Agricultural Machinery</strong> represent your highest lead volume. Digital
              RFQ submissions increased by <strong>22.4%</strong>, converting into ₹1.84 Cr in
              closed business. Your direct WhatsApp and Google Search channels are delivering the
              lowest cost-per-lead compared to offline trade expos.&quot;
            </p>
            <div className="pt-2 flex flex-wrap gap-4 text-xs text-stone-400 border-t border-stone-800">
              <div>
                Qualified Pipeline:{" "}
                <strong className="text-white">₹3.2 Cr across 18 open quotes</strong>
              </div>
              <div>•</div>
              <div>
                Average Deal Size: <strong className="text-white">₹4.8 Lakhs</strong>
              </div>
              <div>•</div>
              <div>
                Order Repeat Rate: <strong className="text-emerald-400">38.2%</strong>
              </div>
            </div>
          </div>
        )}

        {/* Top 4 Primary KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-xs space-y-2">
            <div className="flex items-center justify-between text-stone-500">
              <span className="text-xs font-semibold">Website Visitors</span>
              <Users className="w-4 h-4 text-blue-600" />
            </div>
            <div className="text-2xl font-extrabold text-stone-900">
              {kpis.monthlyVisitors.toLocaleString()}
            </div>
            <div className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>{kpis.visitorsGrowth} vs last month</span>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-xs space-y-2">
            <div className="flex items-center justify-between text-stone-500">
              <span className="text-xs font-semibold">New Enquiries (All Channels)</span>
              <MessageSquare className="w-4 h-4 text-[#d4560a]" />
            </div>
            <div className="text-2xl font-extrabold text-stone-900">{kpis.newEnquiries}</div>
            <div className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>{kpis.enquiriesGrowth} inbound increase</span>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-xs space-y-2">
            <div className="flex items-center justify-between text-stone-500">
              <span className="text-xs font-semibold">Structured RFQs</span>
              <FileText className="w-4 h-4 text-purple-600" />
            </div>
            <div className="text-2xl font-extrabold text-stone-900">{rfqs.length}</div>
            <div className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>{kpis.rfqsGrowth} CAD drawings uploaded</span>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-xs space-y-2">
            <div className="flex items-center justify-between text-stone-500">
              <span className="text-xs font-semibold">Pipeline Revenue (Demo)</span>
              <ShoppingBag className="w-4 h-4 text-emerald-600" />
            </div>
            <div className="text-2xl font-extrabold text-stone-900">
              {formatCurrency(kpis.demoRevenue)}
            </div>
            <div className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>{kpis.revenueGrowth} annualized run-rate</span>
            </div>
          </div>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Area Chart: Enquiries & RFQs Growth */}
          <div className="lg:col-span-8 bg-white p-6 rounded-2xl border border-stone-200 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-bold text-sm text-stone-900">Enquiries & RFQs Over Time</h3>
                <p className="text-xs text-stone-500">6-Month monthly growth trajectory</p>
              </div>
              <span className="text-[11px] text-stone-400 font-mono">Updated today</span>
            </div>

            <div className="h-72 w-full pt-4">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={enquiriesOverTime}>
                  <defs>
                    <linearGradient id="colorInq" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#d4560a" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#d4560a" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorRfq" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#1f2123" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#1f2123" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="month" stroke="#9ca3af" fontSize={11} />
                  <YAxis stroke="#9ca3af" fontSize={11} />
                  <Tooltip />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="inquiries"
                    name="Inbound Enquiries"
                    stroke="#d4560a"
                    fillOpacity={1}
                    fill="url(#colorInq)"
                  />
                  <Area
                    type="monotone"
                    dataKey="rfqs"
                    name="Qualified RFQs"
                    stroke="#1f2123"
                    fillOpacity={1}
                    fill="url(#colorRfq)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Lead Source Breakdown Pie */}
          <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-stone-200 shadow-xs space-y-4">
            <div>
              <h3 className="font-bold text-sm text-stone-900">Inbound Lead Sources</h3>
              <p className="text-xs text-stone-500">Where factory buyers discover you</p>
            </div>

            <div className="h-56 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={enquiriesBySource}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={80}
                    paddingAngle={3}
                    dataKey="value"
                  >
                    {enquiriesBySource.map((entry: { color: string; value: number }, index: number) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="space-y-1.5 pt-2 text-xs">
              {enquiriesBySource.slice(0, 4).map((s: { name: string; value: number; color: string }) => (
                <div key={s.name} className="flex items-center justify-between text-stone-600">
                  <div className="flex items-center gap-2">
                    <span
                      className="w-2.5 h-2.5 rounded-full shrink-0"
                      style={{ backgroundColor: s.color }}
                    />
                    <span>{s.name}</span>
                  </div>
                  <strong className="text-stone-900">{s.value}%</strong>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Conversion Funnel Bar & Top Products */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Conversion Funnel */}
          <div className="lg:col-span-6 bg-white p-6 rounded-2xl border border-stone-200 shadow-xs space-y-4">
            <div>
              <h3 className="font-bold text-sm text-stone-900">Digital Conversion Funnel</h3>
              <p className="text-xs text-stone-500">From anonymous visitor to repeat manufacturing customer</p>
            </div>

            <div className="space-y-3 pt-2">
              {funnelData.map((f: { stage: string; count: number }, idx: number) => (
                <div key={f.stage} className="space-y-1 text-xs">
                  <div className="flex justify-between font-medium">
                    <span className="text-stone-700">{f.stage}</span>
                    <strong className="text-stone-900">{f.count.toLocaleString()}</strong>
                  </div>
                  <div className="w-full bg-stone-100 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-[#d4560a] h-2 rounded-full transition-all duration-500"
                      style={{ width: `${Math.max(10, 100 - idx * 16)}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Products Requested */}
          <div className="lg:col-span-6 bg-white p-6 rounded-2xl border border-stone-200 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-bold text-sm text-stone-900">Top Inquired Products</h3>
                <p className="text-xs text-stone-500">Highest viewed items generating active quotations</p>
              </div>
              <Link href="/admin/products" className="text-xs text-[#d4560a] font-bold hover:underline">
                Catalogue →
              </Link>
            </div>

            <div className="divide-y divide-stone-100">
              {topProducts.map((p: { name: string; views: number; enquiries: number; conversion: string }) => (
                <div key={p.name} className="py-2.5 flex items-center justify-between text-xs">
                  <div className="space-y-0.5">
                    <span className="font-bold text-stone-900 block truncate max-w-xs">{p.name}</span>
                    <span className="text-[11px] text-stone-400">
                      {p.views.toLocaleString()} Views • {p.enquiries} Enquiries
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 text-[11px]">
                      {p.conversion} Conv.
                    </span>
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

export default function AdminDashboardPage() {
  return (
    <Suspense
      fallback={
        <div className="p-8 text-neutral-400 font-mono text-xs">
          Loading Dashboard...
        </div>
      }
    >
      <AdminDashboardContent />
    </Suspense>
  );
}
