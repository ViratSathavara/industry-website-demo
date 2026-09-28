"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Factory,
  ArrowUpRight,
  Menu,
  X,
  Search,
  Globe,
  LayoutDashboard,
  ShieldCheck,
  ChevronDown,
  Phone
} from "lucide-react";
import { SearchCommand } from "@/components/ui/SearchCommand";
import { useDemoState } from "@/lib/services/demo-state-context";
import { Language } from "@/lib/types";

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const { language, setLanguage, t } = useDemoState();

  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [portalMenuOpen, setPortalMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const langRef = useRef<HTMLDivElement>(null);
  const portalRef = useRef<HTMLDivElement>(null);

  // Scroll listener for glass effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdowns on route change
  useEffect(() => {
    setMenuOpen(false);
    setLangMenuOpen(false);
    setPortalMenuOpen(false);
  }, [pathname]);

  // Close dropdowns on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangMenuOpen(false);
      }
      if (portalRef.current && !portalRef.current.contains(e.target as Node)) {
        setPortalMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const navLinks = [
    { label: t.products, href: "/products" },
    { label: t.industries, href: "/industries" },
    { label: t.applications, href: "/applications" },
    { label: t.manufacturing, href: "/manufacturing-process" },
    { label: t.qualityCerts, href: "/certifications" },
    { label: t.about, href: "/about" },
    { label: t.contact, href: "/contact" }
  ];

  const languages: { code: Language; label: string; native: string }[] = [
    { code: "en", label: "English", native: "English" },
    { code: "gu", label: "Gujarati", native: "ગુજરાતી" },
    { code: "hi", label: "Hindi", native: "हिन्दी" }
  ];

  return (
    <>
      {/* Top announcement bar */}
      <div className="fixed left-0 right-0 top-0 z-50 bg-[#0f1315]/95 backdrop-blur-md border-b border-white/8 py-1 px-4">
        <div className="mx-auto max-w-[1440px] flex items-center justify-between text-[10px] font-mono">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-sm bg-amber-500/10 text-[#e7a45c] text-[9px] font-bold border border-[#e7a45c]/25 tracking-wider">
              <span className="size-1.5 rounded-full bg-[#e7a45c] animate-pulse" />
              DEMO MODE
            </span>
            <span className="hidden sm:inline text-[#5a6666]">·</span>
            <span className="hidden md:inline text-[#7e8989] tracking-wide">
              Industrial Water Motor Parts &amp; Fluid Equipment · Sanand GIDC, Gujarat
            </span>
          </div>
          <div className="flex items-center gap-3 text-[#7e8989]">
            <a href="tel:+919876543210" className="hidden sm:flex items-center gap-1 hover:text-[#e7a45c] transition-colors">
              <Phone size={10} />
              <span>+91 98765 43210</span>
            </a>
            <span className="hidden sm:inline text-[#3a4444]">|</span>
            <div ref={portalRef} className="relative">
              <button
                onClick={() => setPortalMenuOpen(!portalMenuOpen)}
                className="flex items-center gap-1 hover:text-[#e7a45c] transition-colors"
              >
                <LayoutDashboard size={10} className="text-[#e7a45c]" />
                <span>Access Views</span>
                <ChevronDown size={9} className={`transition-transform duration-200 ${portalMenuOpen ? "rotate-180" : ""}`} />
              </button>
              {portalMenuOpen && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-[#1a2124]/95 backdrop-blur-xl border border-white/10 rounded-md shadow-2xl py-1 z-50 font-sans animate-fade-in">
                  <Link href="/portal/dashboard" className="flex items-center gap-2 px-3 py-2 text-xs text-[#c8d0ce] hover:bg-white/8 hover:text-[#e7a45c] transition-colors">
                    <span className="size-1.5 rounded-full bg-blue-400/70" />
                    Buyer Portal
                  </Link>
                  <Link href="/admin/dashboard" className="flex items-center gap-2 px-3 py-2 text-xs text-[#c8d0ce] hover:bg-white/8 hover:text-[#e7a45c] transition-colors">
                    <span className="size-1.5 rounded-full bg-emerald-400/70" />
                    Admin CRM
                  </Link>
                  <Link href="/admin/products" className="flex items-center gap-2 px-3 py-2 text-xs text-[#c8d0ce] hover:bg-white/8 hover:text-[#e7a45c] transition-colors">
                    <span className="size-1.5 rounded-full bg-amber-400/70" />
                    Product Catalog
                  </Link>
                  <div className="my-1 border-t border-white/8" />
                  <Link href="/demo" className="flex items-center gap-2 px-3 py-2 text-xs text-[#e7a45c] hover:bg-white/8 transition-colors font-semibold">
                    <ArrowUpRight size={11} />
                    Sales Presentation
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`fixed left-0 right-0 top-[28px] z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#171c1e]/90 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/30"
            : "bg-[#171c1e]/70 backdrop-blur-md border-b border-white/5"
        } text-[#f4efe5]`}
      >
        {/* Main Header Bar */}
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-4 py-3 md:px-8 lg:px-12">
          {/* Logo */}
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-2.5 transition-opacity hover:opacity-90 shrink-0"
          >
            <span className="grid size-9 place-items-center border border-[#e7a45c]/60 bg-[#e7a45c]/10 text-[#e7a45c] rounded-sm shadow-lg shadow-[#e7a45c]/10">
              <Factory size={17} strokeWidth={1.8} />
            </span>
            <div className="leading-none">
              <span className="font-mono text-sm font-bold tracking-[.22em] text-[#f4efe5] block">
                INDUSTRIA
              </span>
              <span className="text-[9px] tracking-widest text-[#7e8989] font-mono uppercase mt-0.5 block">
                Motor Parts
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 text-[11px] uppercase tracking-[.09em] font-medium text-[#b8c0be]">
            {navLinks.map((link) => {
              const active = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded-sm transition-all duration-150 ${
                    active
                      ? "text-[#e7a45c] bg-[#e7a45c]/8 font-semibold"
                      : "hover:text-[#e7a45c] hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Tools */}
          <div className="flex items-center gap-2">
            {/* Quick Search Button */}
            <button
              onClick={() => setSearchOpen(true)}
              className="flex items-center gap-2 border border-white/12 bg-white/5 backdrop-blur-sm px-2.5 py-2 text-xs font-mono tracking-wider text-[#c8d0ce] transition-all hover:border-[#e7a45c]/50 hover:text-[#e7a45c] hover:bg-[#e7a45c]/5 rounded-sm"
              title="Search parts (Ctrl + K)"
            >
              <Search size={13} className="text-[#e7a45c]" />
              <span className="hidden sm:inline text-[11px]">{t.search}</span>
              <kbd className="hidden md:inline text-[9px] px-1 bg-white/8 rounded text-[#7e8989]">⌘K</kbd>
            </button>

            {/* Language Switcher */}
            <div ref={langRef} className="relative hidden md:block">
              <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center gap-1 border border-white/12 bg-white/5 backdrop-blur-sm px-2.5 py-2 text-xs font-mono text-[#c8d0ce] hover:border-[#e7a45c]/50 hover:text-[#e7a45c] transition-all rounded-sm"
                title="Select Language"
              >
                <Globe size={12} className="text-[#e7a45c]" />
                <span className="uppercase">{language}</span>
                <ChevronDown size={10} className={`transition-transform duration-200 ${langMenuOpen ? "rotate-180" : ""}`} />
              </button>
              {langMenuOpen && (
                <div className="absolute right-0 top-full mt-2 w-36 bg-[#1a2124]/95 backdrop-blur-xl border border-white/10 rounded-md shadow-2xl py-1 z-50 animate-fade-in">
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => { setLanguage(l.code); setLangMenuOpen(false); }}
                      className={`w-full text-left px-3 py-2 text-xs font-mono flex items-center justify-between hover:bg-white/8 transition-colors ${
                        language === l.code ? "text-[#e7a45c] font-bold" : "text-[#c8d0ce]"
                      }`}
                    >
                      <span>{l.native}</span>
                      <span className="text-[9px] text-[#5a6666] uppercase">{l.code}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Request a Quote CTA */}
            <Link
              href="/request-quote"
              className="hidden sm:flex items-center gap-1.5 bg-[#e46e2e] hover:bg-[#f07d3e] text-white px-4 py-2 text-[11px] font-bold uppercase tracking-[.1em] transition-all shadow-lg shadow-[#e46e2e]/20 rounded-sm shrink-0"
            >
              <span>{t.requestQuote}</span>
              <ArrowUpRight size={13} />
            </Link>

            {/* Mobile Hamburger */}
            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 text-[#f4efe5] hover:text-[#e7a45c] border border-white/12 bg-white/5 backdrop-blur-sm rounded-sm transition-all hover:border-[#e7a45c]/40 lg:hidden"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {menuOpen && (
          <div className="lg:hidden border-t border-white/8 bg-[#0f1315]/95 backdrop-blur-xl animate-fade-in">
            <div className="px-4 py-5 space-y-4 max-h-[calc(100vh-90px)] overflow-y-auto">
              {/* Nav Links */}
              <div className="space-y-0.5">
                {navLinks.map((link) => {
                  const active = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className={`flex items-center justify-between py-3 px-3 rounded-md text-sm font-medium transition-all ${
                        active
                          ? "bg-[#e7a45c]/10 text-[#e7a45c] border-l-2 border-[#e7a45c]"
                          : "text-[#c8d0ce] hover:bg-white/5 hover:text-[#e7a45c] border-l-2 border-transparent"
                      }`}
                    >
                      <span className="uppercase tracking-[.08em] text-xs font-mono">{link.label}</span>
                      <ArrowUpRight size={13} className="opacity-40" />
                    </Link>
                  );
                })}
              </div>

              {/* Language Switcher */}
              <div className="pt-3 border-t border-white/8">
                <div className="text-[10px] font-mono text-[#5a6666] mb-2 uppercase tracking-wider">{t.language} / ભાષા / भाषा</div>
                <div className="grid grid-cols-3 gap-2">
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => { setLanguage(l.code); setMenuOpen(false); }}
                      className={`py-2 px-2 text-xs font-mono border rounded-sm text-center transition-all ${
                        language === l.code
                          ? "border-[#e7a45c]/60 bg-[#e7a45c]/10 text-[#e7a45c] font-bold"
                          : "border-white/10 text-[#9fa8a6] hover:border-white/20 hover:text-[#c8d0ce]"
                      }`}
                    >
                      {l.native}
                    </button>
                  ))}
                </div>
              </div>

              {/* Portal Shortcuts */}
              <div className="pt-3 border-t border-white/8">
                <div className="text-[10px] font-mono text-[#5a6666] mb-2 uppercase tracking-wider">{t.accessViews}</div>
                <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                  <Link href="/portal/dashboard" onClick={() => setMenuOpen(false)} className="flex items-center gap-2 p-2.5 bg-white/4 border border-white/8 rounded-sm text-[#c8d0ce] hover:text-[#e7a45c] hover:bg-white/6 transition-all">
                    <span className="size-1.5 rounded-full bg-blue-400/70 shrink-0" />
                    {t.customerPortal}
                  </Link>
                  <Link href="/admin/dashboard" onClick={() => setMenuOpen(false)} className="flex items-center gap-2 p-2.5 bg-white/4 border border-white/8 rounded-sm text-[#c8d0ce] hover:text-[#e7a45c] hover:bg-white/6 transition-all">
                    <span className="size-1.5 rounded-full bg-emerald-400/70 shrink-0" />
                    {t.adminDashboard}
                  </Link>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-1">
                <Link
                  href="/request-quote"
                  onClick={() => setMenuOpen(false)}
                  className="flex w-full items-center justify-center gap-2 bg-[#e46e2e] hover:bg-[#f07d3e] py-3.5 text-xs font-bold uppercase tracking-[.12em] text-white shadow-lg rounded-sm transition-all"
                >
                  <span>{t.requestQuote}</span>
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Spacer to push content below fixed navbar */}
      <div className="h-[28px]" />

      {/* Global Quick Search Modal */}
      <SearchCommand isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
};
