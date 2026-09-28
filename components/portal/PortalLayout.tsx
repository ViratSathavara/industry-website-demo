"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useDemoState } from "@/lib/services/demo-state-context";
import {
  LayoutDashboard,
  FileText,
  FileCheck,
  ShoppingBag,
  FolderOpen,
  MessageSquare,
  Calendar,
  Building,
  Heart,
  Bell,
  LogOut,
  Shield,
  Menu,
  X,
  ExternalLink
} from "lucide-react";

export const PortalLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname();
  const router = useRouter();
  const { currentCustomer, setCurrentUserRole, notifications, markNotificationAsRead } = useDemoState();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  const unreadCount = notifications.filter((n) => !n.read).length;

  const navLinks = [
    { title: "Dashboard", href: "/portal/dashboard", icon: LayoutDashboard },
    { title: "My RFQs", href: "/portal/rfqs", icon: FileText },
    { title: "Quotations", href: "/portal/quotes", icon: FileCheck },
    { title: "Active Orders", href: "/portal/orders", icon: ShoppingBag },
    { title: "Documents & Drawings", href: "/portal/documents", icon: FolderOpen },
    { title: "Messages", href: "/portal/messages", icon: MessageSquare },
    { title: "Appointments", href: "/portal/appointments", icon: Calendar },
    { title: "My Company", href: "/portal/company", icon: Building },
    { title: "Saved Products", href: "/portal/saved", icon: Heart }
  ];

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#f5f0e7] text-[#20272b]">
      {/* Mobile Top Header */}
      <div className="md:hidden bg-[#171c1e] text-[#f5f0e7] p-3.5 flex items-center justify-between border-b border-white/10">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-7 h-7 bg-[#e46e2e] text-[#f5f0e7] flex items-center justify-center font-bold font-mono text-xs">
            IN
          </div>
          <span className="font-semibold text-xs tracking-[.18em] uppercase">INDUSTRIA PORTAL</span>
        </Link>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-1 text-[#aeb5b2] hover:text-[#f5f0e7]"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Desktop Sidebar */}
      <aside
        className={`w-64 bg-[#20272b] text-[#aeb5b2] border-r border-white/10 flex flex-col justify-between shrink-0 ${
          mobileMenuOpen ? "block" : "hidden md:flex"
        }`}
      >
        <div className="p-5 space-y-6">
          {/* Logo & Portal Mode */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-[#e46e2e] text-[#f5f0e7] flex items-center justify-center font-bold font-mono text-sm">
                IN
              </div>
              <div>
                <span className="font-semibold text-xs text-[#f5f0e7] block tracking-[.2em] uppercase">
                  INDUSTRIA
                </span>
                <span className="text-[10px] text-[#e7a45c] font-mono">Buyer Portal</span>
              </div>
            </Link>
          </div>

          {/* Logged in Company Card */}
          <div className="p-3.5 bg-[#171c1e] border border-white/10 space-y-1">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#e7a45c] font-bold block">
              Active Buyer Account
            </span>
            <div className="font-semibold text-xs text-[#f5f0e7] truncate">
              {currentCustomer.companyName}
            </div>
            <div className="text-[11px] font-mono text-[#7e8989] flex items-center gap-1">
              <span>{currentCustomer.contactPerson}</span>
              <span>•</span>
              <span>{currentCustomer.city}</span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1">
            {navLinks.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-3 py-2 text-xs font-semibold transition-colors ${
                    isActive
                      ? "bg-[#e46e2e] text-[#f5f0e7] shadow-sm"
                      : "text-[#aeb5b2] hover:text-[#f5f0e7] hover:bg-white/5"
                  }`}
                >
                  <Icon size={15} className="shrink-0" />
                  <span>{item.title}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Sidebar Footer */}
        <div className="p-5 border-t border-white/10 space-y-2 text-xs">
          <Link
            href="/admin/dashboard"
            onClick={() => setCurrentUserRole("Admin")}
            className="flex items-center justify-between p-2.5 bg-[#171c1e] hover:bg-black/40 border border-white/10 text-[#aeb5b2] hover:text-[#f5f0e7] transition-colors"
          >
            <span className="flex items-center gap-2">
              <Shield size={14} className="text-[#e7a45c]" />
              <span className="text-[11px] font-mono">Switch to Admin CRM</span>
            </span>
            <ExternalLink size={12} className="text-[#7e8989]" />
          </Link>

          <Link
            href="/"
            className="flex items-center gap-2 px-2 py-1.5 text-[11px] font-mono text-[#7e8989] hover:text-[#f5f0e7]"
          >
            <LogOut size={13} />
            <span>Return to Public Website</span>
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Topbar */}
        <header className="bg-white border-b border-[#e5dfd5] px-6 py-3.5 flex items-center justify-between sticky top-0 z-30 shadow-xs">
          <div className="flex items-center gap-3">
            <h1 className="font-semibold text-sm text-[#20272b] tracking-tight uppercase font-mono">
              {navLinks.find((l) => l.href === pathname)?.title || "Customer Portal"}
            </h1>
            <span className="hidden sm:inline text-xs text-[#aeb5b2]">|</span>
            <span className="hidden sm:inline text-xs text-[#7e8989] font-mono">
              Self-service Procurement Workspace
            </span>
          </div>

          <div className="flex items-center gap-3">
            {/* Notifications Dropdown */}
            <div className="relative">
              <button
                onClick={() => setNotificationsOpen(!notificationsOpen)}
                className="p-2 border border-[#d5cfc5] hover:bg-[#faf6ee] text-[#20272b] relative transition-colors"
                title="Notifications"
              >
                <Bell size={15} />
                {unreadCount > 0 && (
                  <span className="absolute top-1 right-1 w-2 h-2 bg-[#e46e2e]" />
                )}
              </button>

              {notificationsOpen && (
                <div
                  onMouseLeave={() => setNotificationsOpen(false)}
                  className="absolute right-0 top-full mt-2 w-80 bg-white border border-[#d5cfc5] shadow-2xl p-3.5 z-50 text-xs space-y-2 animate-in fade-in duration-100"
                >
                  <div className="flex items-center justify-between pb-2 border-b border-[#e5dfd5]">
                    <span className="font-semibold text-[#20272b] font-mono text-xs">Notifications</span>
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
              href="/request-quote"
              className="px-3.5 py-1.5 bg-[#e46e2e] hover:bg-[#bb5b2c] text-[#f5f0e7] text-xs font-semibold uppercase tracking-wider shadow-xs flex items-center gap-1.5 transition-colors"
            >
              <FileText size={13} />
              <span className="hidden sm:inline">New RFQ</span>
            </Link>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6 sm:p-8 flex-1">{children}</main>
      </div>
    </div>
  );
};
