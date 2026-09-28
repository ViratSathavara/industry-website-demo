"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Factory,
  ArrowUpRight,
  Menu,
  X,
  Search,
  Globe,
  SlidersHorizontal,
  LayoutDashboard,
  ShieldCheck,
  ChevronDown
} from "lucide-react";
import { SearchCommand } from "@/components/ui/SearchCommand";
import { useDemoState } from "@/lib/services/demo-state-context";
import { Language } from "@/lib/types";

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const { language, setLanguage } = useDemoState();

  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [portalMenuOpen, setPortalMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
    setLangMenuOpen(false);
    setPortalMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: "Industries", href: "/industries" },
    { label: "Products", href: "/products" },
    { label: "Solutions", href: "/manufacturing-process" },
    { label: "Applications", href: "/applications" },
    { label: "Quality & Certs", href: "/certifications" },
    { label: "Company", href: "/about" },
    { label: "Contact", href: "/contact" }
  ];

  const languages: { code: Language; label: string; native: string }[] = [
    { code: "en", label: "English", native: "English" },
    { code: "gu", label: "Gujarati", native: "ગુજરાતી" },
    { code: "hi", label: "Hindi", native: "हिन्दी" }
  ];

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 bg-[#171c1e] border-b border-white/10 text-[#f4efe5] shadow-lg">
        {/* Top Mini Bar: Demo Badge & Direct Portals */}
        <div className="bg-[#121618] border-b border-white/5 py-1 px-5 md:px-10 lg:px-14">
          <div className="mx-auto max-w-[1440px] flex items-center justify-between text-[11px] font-mono">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-amber-500/10 text-[#e7a45c] text-[10px] font-bold border border-[#e7a45c]/30">
                <span className="size-1.5 rounded-full bg-[#e7a45c] animate-pulse" />
                DEMO DATA — Illustrative Digital Factory Experience
              </span>
              <span className="hidden sm:inline text-[#7e8989]">|</span>
              <span className="hidden sm:inline text-[#aeb5b2]">
                Specialized in Water Motor Parts, Pumps & Precision Components
              </span>
            </div>

            <div className="flex items-center gap-4">
              <Link
                href="/demo"
                className="text-[#e7a45c] hover:underline flex items-center gap-1 font-bold"
              >
                <span>Sales Presentation</span>
                <ArrowUpRight size={11} />
              </Link>
              <span className="text-[#7e8989]">|</span>
              <div className="relative">
                <button
                  onClick={() => setPortalMenuOpen(!portalMenuOpen)}
                  className="flex items-center gap-1 text-[#d8d7d0] hover:text-[#e7a45c] transition-colors"
                >
                  <LayoutDashboard size={12} className="text-[#e7a45c]" />
                  <span>Access Views</span>
                  <ChevronDown size={11} />
                </button>

                {portalMenuOpen && (
                  <div className="absolute right-0 top-full mt-1.5 w-48 bg-[#20272b] border border-white/15 rounded shadow-2xl py-1.5 z-50 font-sans">
                    <Link
                      href="/portal/dashboard"
                      className="block px-3 py-1.5 text-xs text-[#d8d7d0] hover:bg-white/10 hover:text-[#e7a45c]"
                    >
                      Buyer Portal
                    </Link>
                    <Link
                      href="/admin/dashboard"
                      className="block px-3 py-1.5 text-xs text-[#d8d7d0] hover:bg-white/10 hover:text-[#e7a45c]"
                    >
                      Admin CRM Center
                    </Link>
                    <Link
                      href="/admin/products"
                      className="block px-3 py-1.5 text-xs text-[#d8d7d0] hover:bg-white/10 hover:text-[#e7a45c]"
                    >
                      Product Catalog CRUD
                    </Link>
                    <Link
                      href="/overview"
                      className="block px-3 py-1.5 text-xs text-[#d8d7d0] hover:bg-white/10 hover:text-[#e7a45c]"
                    >
                      Architecture Overview
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Main Header Bar */}
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-3 md:px-10 lg:px-14">
          {/* Logo */}
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-3 transition-opacity hover:opacity-90 shrink-0"
          >
            <span className="grid size-9 place-items-center border border-[#e7a45c] bg-[#e7a45c]/10 text-[#e7a45c] shadow-xs">
              <Factory size={18} strokeWidth={1.8} />
            </span>
            <div>
              <span className="font-mono text-sm font-bold tracking-[.22em] text-[#f4efe5] block leading-none">
                INDUSTRIA
              </span>
              <span className="text-[10px] tracking-widest text-[#aeb5b2] font-mono uppercase mt-0.5 block">
                Digital Factory
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-6 text-[12px] uppercase tracking-[.1em] font-medium text-[#d8d7d0]">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-colors py-1 border-b-2 ${
                    active
                      ? "border-[#e7a45c] text-[#e7a45c] font-bold"
                      : "border-transparent hover:text-[#e7a45c]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Tools */}
          <div className="flex items-center gap-3">
            {/* Quick Search Button (Ctrl + K) */}
            <button
              onClick={() => setSearchOpen(true)}
              className="flex items-center gap-2 border border-white/20 bg-white/5 px-3 py-2 text-xs font-mono tracking-wider text-[#d8d7d0] transition-colors hover:border-[#e7a45c] hover:text-[#e7a45c]"
              title="Search parts and CAD specs (Ctrl + K)"
            >
              <Search size={14} className="text-[#e7a45c]" />
              <span className="hidden sm:inline">Search Specs</span>
              <kbd className="hidden sm:inline text-[9px] px-1 bg-white/10 rounded text-[#9fa8a6]">⌘K</kbd>
            </button>

            {/* Language Switcher */}
            <div className="relative hidden md:block">
              <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center gap-1.5 border border-white/15 px-2.5 py-2 text-xs font-mono text-[#d8d7d0] hover:border-[#e7a45c] hover:text-[#e7a45c] transition-colors"
                title="Select Language"
              >
                <Globe size={13} className="text-[#e7a45c]" />
                <span className="uppercase">{language}</span>
                <ChevronDown size={11} />
              </button>

              {langMenuOpen && (
                <div className="absolute right-0 top-full mt-1.5 w-32 bg-[#20272b] border border-white/15 rounded shadow-2xl py-1 z-50 font-mono text-xs">
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        setLanguage(l.code);
                        setLangMenuOpen(false);
                      }}
                      className={`w-full text-left px-3 py-1.5 flex items-center justify-between hover:bg-white/10 ${
                        language === l.code ? "text-[#e7a45c] font-bold" : "text-[#d8d7d0]"
                      }`}
                    >
                      <span>{l.native}</span>
                      <span className="text-[10px] text-[#7e8989] uppercase">({l.code})</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Request a Quote CTA */}
            <Link
              href="/request-quote"
              className="hidden sm:flex items-center gap-2 bg-[#e46e2e] hover:bg-[#f38b43] text-white px-4 py-2 text-xs font-bold uppercase tracking-[.1em] transition-all shadow-md shrink-0"
            >
              <span>Request Quote</span>
              <ArrowUpRight size={14} />
            </Link>

            {/* Mobile Menu Hamburger */}
            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-1.5 text-[#f4efe5] hover:text-[#e7a45c] border border-white/20 xl:hidden"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-Out / Dropdown Drawer */}
        {menuOpen && (
          <div className="border-t border-white/10 bg-[#171c1e] px-5 py-6 space-y-4 xl:hidden shadow-2xl animate-fade-in">
            {/* Mobile Nav Links */}
            <div className="space-y-1 font-mono text-xs">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block py-2.5 px-3 border-l-2 uppercase tracking-wider ${
                    pathname === link.href
                      ? "border-[#e7a45c] bg-white/5 text-[#e7a45c] font-bold"
                      : "border-transparent text-[#d8d7d0] hover:text-[#e7a45c] hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile Language Switcher */}
            <div className="pt-2 border-t border-white/10">
              <div className="text-[11px] font-mono text-[#7e8989] mb-2 uppercase">Language / ભાષા:</div>
              <div className="grid grid-cols-3 gap-2">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => {
                      setLanguage(l.code);
                      setMenuOpen(false);
                    }}
                    className={`py-1.5 px-2 text-xs font-mono border text-center transition-colors ${
                      language === l.code
                        ? "border-[#e7a45c] bg-[#e7a45c]/10 text-[#e7a45c] font-bold"
                        : "border-white/10 text-[#d8d7d0] hover:border-white/20"
                    }`}
                  >
                    {l.native}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Portal / Demo Shortcuts */}
            <div className="pt-2 border-t border-white/10 grid grid-cols-2 gap-2 text-xs font-mono">
              <Link
                href="/portal/dashboard"
                onClick={() => setMenuOpen(false)}
                className="p-2.5 bg-white/5 border border-white/10 text-center text-[#d8d7d0] hover:text-[#e7a45c]"
              >
                Buyer Portal
              </Link>
              <Link
                href="/admin/dashboard"
                onClick={() => setMenuOpen(false)}
                className="p-2.5 bg-white/5 border border-white/10 text-center text-[#d8d7d0] hover:text-[#e7a45c]"
              >
                Admin CRM
              </Link>
            </div>

            {/* Mobile Request Quote Button */}
            <div className="pt-2">
              <Link
                href="/request-quote"
                onClick={() => setMenuOpen(false)}
                className="flex w-full items-center justify-center gap-2 bg-[#e46e2e] py-3 text-xs font-bold uppercase tracking-[.1em] text-white shadow-lg"
              >
                <span>Launch 6-Step RFQ</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Global Quick Search Modal */}
      <SearchCommand isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
};
