"use client";

import React, { useState, Suspense } from "react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDemoState } from "@/lib/services/demo-state-context";
import {
  LayoutDashboard,
  Users,
  Inbox,
  FileText,
  FileCheck,
  Building,
  Package,
  Layers,
  ShoppingBag,
  Calendar,
  FolderOpen,
  BarChart3,
  Sliders,
  Shield,
  Briefcase,
  Wrench,
  Sparkles,
  LogOut,
  Bell,
  Menu,
  X,
  ExternalLink,
  ChevronDown
} from "lucide-react";
import { UserRole } from "@/lib/types";

const AdminLayoutContent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const viewMode = searchParams.get("view");

  const {
    currentUserRole,
    setCurrentUserRole,
    notifications,
    markNotificationAsRead,
    selectedIndustry
  } = useDemoState();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [notifDropdown, setNotifDropdown] = useState(false);

  const unreadCount = notifications.filter((n) => !n.read).length;

  const sidebarSections = [
    {
      label: "COMMAND",
      links: [
        { title: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
        { title: "Executive View", href: "/admin/dashboard?view=owner", icon: Briefcase },
        { title: "Analytics & Funnel", href: "/admin/analytics", icon: BarChart3 }
      ]
    },
    {
      label: "SALES & CRM",
      links: [
        { title: "Lead Pipeline", href: "/admin/leads", icon: Users },
        { title: "Enquiry Inbox", href: "/admin/enquiries", icon: Inbox },
        { title: "RFQs Received", href: "/admin/rfqs", icon: FileText },
        { title: "Quotation Builder", href: "/admin/quotes", icon: FileCheck },
        { title: "Customer 360", href: "/admin/customers", icon: Building },
        { title: "Appointments", href: "/admin/appointments", icon: Calendar }
      ]
    },
    {
      label: "OPERATIONS & CATALOGUE",
      links: [
        { title: "Production Orders", href: "/admin/orders", icon: ShoppingBag },
        { title: "Product Inventory", href: "/admin/products", icon: Package },
        { title: "Category Hierarchy", href: "/admin/categories", icon: Layers },
        { title: "Document Library", href: "/admin/documents", icon: FolderOpen }
      ]
    },
    {
      label: "SYSTEM & TEAMS",
      links: [
        { title: "Content CMS", href: "/admin/content", icon: Sliders },
        { title: "Team & Roles", href: "/admin/team", icon: Shield },
        { title: "Settings", href: "/admin/settings", icon: Sliders }
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#f8f9fa]">
      {/* Mobile Top Header */}
      <div className="md:hidden bg-stone-900 text-white p-3.5 flex items-center justify-between border-b border-stone-800">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-7 h-7 rounded bg-[#d4560a] text-white flex items-center justify-center font-bold text-xs">
            ADM
          </div>
          <span className="font-bold text-sm tracking-tight">INDUSTRIA CRM</span>
        </Link>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-1 rounded text-stone-300 hover:text-white"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Admin Desktop Sidebar */}
      <aside
        className={`w-64 bg-stone-900 text-stone-300 border-r border-stone-800 flex flex-col justify-between shrink-0 overflow-y-auto ${
          mobileMenuOpen ? "block" : "hidden md:flex"
        }`}
      >
        <div className="p-4 space-y-6">
          {/* Logo & CRM Badge */}
          <div className="pb-3 border-b border-stone-800">
            <Link href="/admin/dashboard" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#d4560a] text-white flex items-center justify-center font-bold text-sm shadow-sm">
                ⚡
              </div>
              <div>
                <span className="font-bold text-sm text-white block tracking-tight">
                  INDUSTRIA
                </span>
                <span className="text-[10px] text-amber-400 font-mono">Factory CRM & Ops</span>
              </div>
            </Link>
          </div>

          {/* Role Persona Banner */}
          <div className="p-2.5 rounded-xl bg-stone-800/90 border border-stone-700 text-xs flex items-center justify-between">
            <div className="space-y-0.5">
              <span className="text-[10px] uppercase font-bold text-stone-400">Current Role:</span>
              <div className="font-bold text-stone-100 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>{currentUserRole}</span>
              </div>
            </div>

            <Link
              href="/login"
              className="text-[11px] text-[#d4560a] hover:underline font-bold"
            >
              Switch
            </Link>
          </div>

          {/* Grouped Sidebar Navigation */}
          <nav className="space-y-5">
            {sidebarSections.map((sec) => (
              <div key={sec.label} className="space-y-1">
                <div className="text-[10px] font-bold uppercase tracking-wider text-stone-500 px-3 pb-1">
                  {sec.label}
                </div>
                {sec.links.map((link) => {
                  const Icon = link.icon;
                  const isCurrent =
                    pathname === link.href ||
                    (link.href.includes("?view=owner") && viewMode === "owner");

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-semibold transition-colors ${
                        isCurrent
                          ? "bg-[#d4560a] text-white shadow-sm"
                          : "text-stone-400 hover:text-white hover:bg-stone-800/60"
                      }`}
                    >
                      <Icon className="w-4 h-4 shrink-0" />
                      <span>{link.title}</span>
                    </Link>
                  );
                })}
              </div>
            ))}
          </nav>
        </div>

        {/* Bottom Switcher */}
        <div className="p-4 border-t border-stone-800 space-y-2 text-xs">
          <Link
            href="/portal/dashboard"
            onClick={() => setCurrentUserRole("Customer")}
            className="flex items-center justify-between p-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white transition-colors"
          >
            <span className="flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-emerald-400" />
              <span>Switch to Buyer Portal</span>
            </span>
            <ExternalLink className="w-3.5 h-3.5 text-stone-500" />
          </Link>

          <Link
            href="/"
            className="flex items-center gap-2 px-2 py-1.5 text-stone-400 hover:text-stone-200"
          >
            <LogOut className="w-4 h-4" />
            <span>Public Website</span>
          </Link>
        </div>
      </aside>

      {/* Main Admin Body */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Control Bar */}
        <header className="bg-white border-b border-stone-200 px-6 py-3.5 flex items-center justify-between sticky top-6 z-30 shadow-xs">
          <div className="flex items-center gap-3">
            <h1 className="font-bold text-base text-stone-900 tracking-tight">
              Factory Command Center
            </h1>
            <span className="hidden lg:inline text-xs text-stone-400">|</span>
            <span className="hidden lg:inline text-xs text-stone-500 font-medium">
              Sector: <strong>{selectedIndustry.name}</strong>
            </span>
          </div>

          <div className="flex items-center gap-3">
            {/* Quick Persona View Switcher */}
            <div className="hidden sm:flex items-center gap-1 bg-stone-100 p-1 rounded-lg text-xs font-semibold text-stone-600">
              <Link
                href="/admin/dashboard"
                className={`px-2.5 py-1 rounded-md transition-colors ${
                  !viewMode ? "bg-white text-stone-900 shadow-xs" : "hover:text-stone-900"
                }`}
              >
                Operational
              </Link>
              <Link
                href="/admin/dashboard?view=owner"
                className={`px-2.5 py-1 rounded-md transition-colors ${
                  viewMode === "owner" ? "bg-[#d4560a] text-white shadow-xs" : "hover:text-stone-900"
                }`}
              >
                Owner View
              </Link>
              <Link
                href="/admin/leads"
                className="px-2.5 py-1 rounded-md hover:text-stone-900"
              >
                Sales Exec
              </Link>
              <Link
                href="/admin/orders"
                className="px-2.5 py-1 rounded-md hover:text-stone-900"
              >
                Operations
              </Link>
            </div>

            {/* Notification bell */}
            <div className="relative">
              <button
                onClick={() => setNotifDropdown(!notifDropdown)}
                className="p-2 rounded-lg border border-stone-200 hover:bg-stone-50 text-stone-600 relative"
                title="Notifications"
              >
                <Bell className="w-4 h-4" />
                {unreadCount > 0 && (
                  <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-[#d4560a]" />
                )}
              </button>

              {notifDropdown && (
                <div
                  onMouseLeave={() => setNotifDropdown(false)}
                  className="absolute right-0 top-full mt-2 w-80 bg-white rounded-xl shadow-2xl border border-stone-200 p-3 z-50 text-xs space-y-2 animate-in fade-in duration-100"
                >
                  <div className="flex items-center justify-between pb-2 border-b border-stone-100">
                    <span className="font-bold text-stone-900">CRM Notifications</span>
                    <span className="text-[10px] text-stone-500">{unreadCount} unread</span>
                  </div>
                  <div className="max-h-60 overflow-y-auto space-y-2">
                    {notifications.slice(0, 5).map((n) => (
                      <div
                        key={n.id}
                        onClick={() => markNotificationAsRead(n.id)}
                        className={`p-2 rounded-lg transition-colors cursor-pointer ${
                          n.read ? "bg-stone-50 text-stone-600" : "bg-orange-50/60 text-stone-900 font-medium"
                        }`}
                      >
                        <div className="flex justify-between items-center text-[10px] text-stone-400 mb-0.5">
                          <span className="uppercase font-mono">{n.type}</span>
                          <span>{n.time}</span>
                        </div>
                        <div className="text-xs font-semibold">{n.title}</div>
                        <p className="text-[11px] text-stone-500 line-clamp-2 mt-0.5">{n.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/demo"
              className="px-3.5 py-1.5 rounded-lg bg-stone-900 text-amber-400 text-xs font-bold hover:bg-stone-800 shadow-xs flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Sales Demo Presentation</span>
            </Link>
          </div>
        </header>

        {/* Admin Page Content */}
        <main className="p-6 sm:p-8 flex-1">{children}</main>
      </div>
    </div>
  );
};

export const AdminLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#f8f9fa] flex items-center justify-center text-neutral-400 text-xs font-mono">
          Loading Admin Command Center...
        </div>
      }
    >
      <AdminLayoutContent>{children}</AdminLayoutContent>
    </Suspense>
  );
};
