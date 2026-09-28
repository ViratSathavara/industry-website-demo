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
  LogOut,
  Bell,
  Menu,
  X,
  ExternalLink,
  Sparkles
} from "lucide-react";

const AdminLayoutContent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname();
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
    <div className="min-h-screen flex flex-col md:flex-row bg-[#f5f0e7] text-[#20272b]">
      {/* Mobile Top Header */}
      <div className="md:hidden bg-[#171c1e] text-[#f5f0e7] p-3.5 flex items-center justify-between border-b border-white/10">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-7 h-7 bg-[#e46e2e] text-[#f5f0e7] flex items-center justify-center font-bold font-mono text-xs">
            IN
          </div>
          <span className="font-semibold text-xs tracking-[.18em] uppercase">INDUSTRIA CRM</span>
        </Link>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-1 text-[#aeb5b2] hover:text-[#f5f0e7]"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Admin Desktop Sidebar */}
      <aside
        className={`w-64 bg-[#20272b] text-[#aeb5b2] border-r border-white/10 flex flex-col justify-between shrink-0 overflow-y-auto ${
          mobileMenuOpen ? "block" : "hidden md:flex"
        }`}
      >
        <div className="p-5 space-y-6">
          {/* Logo & CRM Badge */}
          <div className="pb-4 border-b border-white/10">
            <Link href="/admin/dashboard" className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-[#e46e2e] text-[#f5f0e7] flex items-center justify-center font-bold font-mono text-sm">
                IN
              </div>
              <div>
                <span className="font-semibold text-xs text-[#f5f0e7] block tracking-[.2em] uppercase">
                  INDUSTRIA
                </span>
                <span className="text-[10px] text-[#e7a45c] font-mono">Factory CRM & Ops</span>
              </div>
            </Link>
          </div>

          {/* Role Persona Banner */}
          <div className="p-3 bg-[#171c1e] border border-white/10 text-xs flex items-center justify-between">
            <div className="space-y-0.5">
              <span className="text-[10px] font-mono uppercase font-bold text-[#7e8989] block">Current Role:</span>
              <div className="font-semibold text-[#f5f0e7] flex items-center gap-1.5 font-mono text-[11px]">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>{currentUserRole}</span>
              </div>
            </div>

            <Link
              href="/login"
              className="text-[11px] font-mono text-[#e7a45c] hover:underline font-bold uppercase"
            >
              Switch
            </Link>
          </div>

          {/* Grouped Sidebar Navigation */}
          <nav className="space-y-5">
            {sidebarSections.map((sec) => (
              <div key={sec.label} className="space-y-1">
                <div className="text-[10px] font-mono uppercase tracking-[.15em] text-[#7e8989] px-3 pb-1 font-bold">
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
                      className={`flex items-center gap-3 px-3 py-2 text-xs font-semibold transition-colors ${
                        isCurrent
                          ? "bg-[#e46e2e] text-[#f5f0e7] shadow-sm"
                          : "text-[#aeb5b2] hover:text-[#f5f0e7] hover:bg-white/5"
                      }`}
                    >
                      <Icon size={15} className="shrink-0" />
                      <span>{link.title}</span>
                    </Link>
                  );
                })}
              </div>
            ))}
          </nav>
        </div>

        {/* Bottom Switcher */}
        <div className="p-5 border-t border-white/10 space-y-2 text-xs">
          <Link
            href="/portal/dashboard"
            onClick={() => setCurrentUserRole("Customer")}
            className="flex items-center justify-between p-2.5 bg-[#171c1e] hover:bg-black/40 border border-white/10 text-[#aeb5b2] hover:text-[#f5f0e7] transition-colors"
          >
            <span className="flex items-center gap-2">
              <Briefcase size={14} className="text-[#e7a45c]" />
              <span className="text-[11px] font-mono">Switch to Buyer Portal</span>
            </span>
            <ExternalLink size={12} className="text-[#7e8989]" />
          </Link>

          <Link
            href="/"
            className="flex items-center gap-2 px-2 py-1.5 text-[11px] font-mono text-[#7e8989] hover:text-[#f5f0e7]"
          >
            <LogOut size={13} />
            <span>Public Website</span>
          </Link>
        </div>
      </aside>

      {/* Main Admin Body */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Control Bar */}
        <header className="bg-white border-b border-[#e5dfd5] px-6 py-3.5 flex items-center justify-between sticky top-0 z-30 shadow-xs">
          <div className="flex items-center gap-3">
            <h1 className="font-semibold text-sm text-[#20272b] tracking-tight uppercase font-mono">
              Factory Command Center
            </h1>
            <span className="hidden lg:inline text-xs text-[#aeb5b2]">|</span>
            <span className="hidden lg:inline text-xs text-[#7e8989] font-mono">
              Sector: <strong className="text-[#20272b]">{selectedIndustry.name}</strong>
            </span>
          </div>

          <div className="flex items-center gap-3">
            {/* Quick Persona View Switcher */}
            <div className="hidden sm:flex items-center gap-1 bg-[#ede8df] p-1 text-xs font-mono text-[#7e8989]">
              <Link
                href="/admin/dashboard"
                className={`px-2.5 py-1 transition-colors ${
                  !viewMode ? "bg-white text-[#20272b] shadow-xs font-bold" : "hover:text-[#20272b]"
                }`}
              >
                Operational
              </Link>
              <Link
                href="/admin/dashboard?view=owner"
                className={`px-2.5 py-1 transition-colors ${
                  viewMode === "owner" ? "bg-[#e46e2e] text-[#f5f0e7] shadow-xs font-bold" : "hover:text-[#20272b]"
                }`}
              >
                Owner View
              </Link>
              <Link
                href="/admin/leads"
                className="px-2.5 py-1 hover:text-[#20272b]"
              >
                Sales Exec
              </Link>
              <Link
                href="/admin/orders"
                className="px-2.5 py-1 hover:text-[#20272b]"
              >
                Operations
              </Link>
            </div>

            {/* Notification bell */}
            <div className="relative">
              <button
                onClick={() => setNotifDropdown(!notifDropdown)}
                className="p-2 border border-[#d5cfc5] hover:bg-[#faf6ee] text-[#20272b] relative transition-colors"
                title="Notifications"
              >
                <Bell size={15} />
                {unreadCount > 0 && (
                  <span className="absolute top-1 right-1 w-2 h-2 bg-[#e46e2e]" />
                )}
              </button>

              {notifDropdown && (
                <div
                  onMouseLeave={() => setNotifDropdown(false)}
                  className="absolute right-0 top-full mt-2 w-80 bg-white border border-[#d5cfc5] shadow-2xl p-3.5 z-50 text-xs space-y-2 animate-in fade-in duration-100"
                >
                  <div className="flex items-center justify-between pb-2 border-b border-[#e5dfd5]">
                    <span className="font-semibold text-[#20272b] font-mono text-xs">CRM Notifications</span>
                    <span className="text-[10px] font-mono text-[#7e8989]">{unreadCount} unread</span>
                  </div>
                  <div className="max-h-60 overflow-y-auto space-y-2">
                    {notifications.slice(0, 5).map((n) => (
                      <div
                        key={n.id}
                        onClick={() => markNotificationAsRead(n.id)}
                        className={`p-2.5 transition-colors cursor-pointer border ${
                          n.read
                            ? "bg-[#faf6ee] border-[#e5dfd5] text-[#7e8989]"
                            : "bg-[#fff7ed] border-[#fed7aa] text-[#20272b] font-medium"
                        }`}
                      >
                        <div className="flex justify-between items-center text-[10px] text-[#7e8989] mb-0.5">
                          <span className="uppercase font-mono">{n.type}</span>
                          <span>{n.time}</span>
                        </div>
                        <div className="text-xs font-semibold">{n.title}</div>
                        <p className="text-[11px] text-[#7e8989] line-clamp-2 mt-0.5">{n.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/demo"
              className="px-3.5 py-1.5 bg-[#20272b] hover:bg-black text-[#e7a45c] text-xs font-semibold uppercase tracking-wider shadow-xs flex items-center gap-1.5 transition-colors"
            >
              <Sparkles size={13} />
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
        <div className="min-h-screen bg-[#20272b] flex items-center justify-center text-[#aeb5b2] text-xs font-mono">
          Loading Admin Command Center...
        </div>
      }
    >
      <AdminLayoutContent>{children}</AdminLayoutContent>
    </Suspense>
  );
};
