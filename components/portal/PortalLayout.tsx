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
  ChevronDown,
  Factory,
  Shield,
  Menu,
  X,
  ExternalLink,
  Sparkles
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
    <div className="min-h-screen flex flex-col md:flex-row bg-[#fafaf8]">
      {/* Mobile Top Header */}
      <div className="md:hidden bg-stone-900 text-white p-3.5 flex items-center justify-between border-b border-stone-800">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-7 h-7 rounded bg-[#d4560a] text-white flex items-center justify-center font-bold text-xs">
            <Factory className="w-4 h-4" />
          </div>
          <span className="font-bold text-sm tracking-tight">INDUSTRIA PORTAL</span>
        </Link>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-1 rounded text-stone-300 hover:text-white"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Desktop Sidebar */}
      <aside
        className={`w-64 bg-stone-900 text-stone-300 border-r border-stone-800 flex flex-col justify-between shrink-0 ${
          mobileMenuOpen ? "block" : "hidden md:flex"
        }`}
      >
        <div className="p-4 space-y-6">
          {/* Logo & Portal Mode */}
          <div className="flex items-center justify-between pb-3 border-b border-stone-800">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#d4560a] text-white flex items-center justify-center font-bold text-sm">
                <Factory className="w-4 h-4" />
              </div>
              <div>
                <span className="font-bold text-sm text-white block tracking-tight">
                  INDUSTRIA
                </span>
                <span className="text-[10px] text-amber-400 font-mono">Customer Portal</span>
              </div>
            </Link>
          </div>

          {/* Logged in Company Card */}
          <div className="p-3 rounded-xl bg-stone-800/80 border border-stone-700/80 space-y-1">
            <span className="text-[10px] uppercase font-bold text-stone-400 tracking-wider">
              Active Buyer Account
            </span>
            <div className="font-bold text-xs text-white truncate">
              {currentCustomer.companyName}
            </div>
            <div className="text-[11px] text-stone-400 flex items-center gap-1">
              <span>{currentCustomer.contactPerson}</span>
              <span className="text-stone-600">•</span>
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
                  className={`flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-semibold transition-colors ${
                    isActive
                      ? "bg-[#d4560a] text-white shadow-sm"
                      : "text-stone-400 hover:text-white hover:bg-stone-800/60"
                  }`}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  <span>{item.title}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-stone-800 space-y-2 text-xs">
          <Link
            href="/admin/dashboard"
            onClick={() => setCurrentUserRole("Admin")}
            className="flex items-center justify-between p-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white transition-colors"
          >
            <span className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-amber-400" />
              <span>Switch to Admin CRM</span>
            </span>
            <ExternalLink className="w-3.5 h-3.5 text-stone-500" />
          </Link>

          <Link
            href="/"
            className="flex items-center gap-2 px-2 py-1.5 text-stone-400 hover:text-stone-200"
          >
            <LogOut className="w-4 h-4" />
            <span>Return to Public Website</span>
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Topbar */}
        <header className="bg-white border-b border-stone-200 px-6 py-3.5 flex items-center justify-between sticky top-6 z-30 shadow-xs">
          <div className="flex items-center gap-3">
            <h1 className="font-bold text-base text-stone-900 tracking-tight">
              {navLinks.find((l) => l.href === pathname)?.title || "Customer Portal"}
            </h1>
            <span className="hidden sm:inline text-xs text-stone-400">|</span>
            <span className="hidden sm:inline text-xs text-stone-500 font-medium">
              Self-service Procurement Workspace
            </span>
          </div>

          <div className="flex items-center gap-3">
            {/* Notifications Dropdown */}
            <div className="relative">
              <button
                onClick={() => setNotificationsOpen(!notificationsOpen)}
                className="p-2 rounded-lg border border-stone-200 hover:bg-stone-50 text-stone-600 relative"
                title="Notifications"
              >
                <Bell className="w-4 h-4" />
                {unreadCount > 0 && (
                  <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-[#d4560a]" />
                )}
              </button>

              {notificationsOpen && (
                <div
                  onMouseLeave={() => setNotificationsOpen(false)}
                  className="absolute right-0 top-full mt-2 w-80 bg-white rounded-xl shadow-2xl border border-stone-200 p-3 z-50 text-xs space-y-2 animate-in fade-in duration-100"
                >
                  <div className="flex items-center justify-between pb-2 border-b border-stone-100">
                    <span className="font-bold text-stone-900">Notifications</span>
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
              href="/request-quote"
              className="px-3.5 py-1.5 rounded-lg bg-[#d4560a] hover:bg-[#b84605] text-white text-xs font-semibold shadow-xs flex items-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5" />
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
