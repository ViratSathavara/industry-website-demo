"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useDemoState } from "@/lib/services/demo-state-context";
import { SearchCommand } from "@/components/ui/SearchCommand";
import {
  Search,
  Globe,
  ChevronDown,
  Menu,
  X,
  FileText,
  User,
  Shield,
  Layers,
  PhoneCall,
  Factory,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { Language } from "@/lib/types";

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const {
    t,
    language,
    setLanguage,
    industries,
    selectedIndustry,
    setSelectedIndustryId,
    currentUserRole
  } = useDemoState();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setIndustriesOpen(false);
  }, [pathname]);

  const languages: { code: Language; label: string }[] = [
    { code: "en", label: "English" },
    { code: "gu", label: "ગુજરાતી" },
    { code: "hi", label: "हिन्दी" }
  ];

  return (
    <>
      <header
        className={`sticky top-6 z-40 transition-all duration-200 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-stone-200/80 py-2.5"
            : "bg-stone-50/80 border-b border-stone-200/60 py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-lg bg-[#d4560a] text-white flex items-center justify-center font-bold text-base shadow-sm group-hover:bg-[#b84605] transition-colors">
              <Factory className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-base tracking-tight text-stone-900">
                  INDUSTRIA
                </span>
                <span className="text-[10px] uppercase tracking-wider font-semibold px-1.5 py-0.2 rounded bg-stone-200 text-stone-700">
                  PRECISION
                </span>
              </div>
              <p className="text-[10px] text-stone-500 font-medium tracking-tight -mt-0.5">
                CNC Machining & Forged Components
              </p>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-medium text-stone-700">
            <Link
              href="/products"
              className={`hover:text-[#d4560a] transition-colors ${
                pathname.startsWith("/products") ? "text-[#d4560a] font-semibold" : ""
              }`}
            >
              Precision Components
            </Link>

            <Link
              href="/manufacturing-process"
              className={`hover:text-[#d4560a] transition-colors ${
                pathname === "/manufacturing-process" ? "text-[#d4560a] font-semibold" : ""
              }`}
            >
              Machinery & Capabilities
            </Link>

            <Link
              href="/certifications"
              className={`hover:text-[#d4560a] transition-colors ${
                pathname === "/certifications" ? "text-[#d4560a] font-semibold" : ""
              }`}
            >
              Quality & Certifications
            </Link>

            <Link
              href="/about"
              className={`hover:text-[#d4560a] transition-colors ${
                pathname === "/about" ? "text-[#d4560a] font-semibold" : ""
              }`}
            >
              About Factory
            </Link>

            <Link
              href="/contact"
              className={`hover:text-[#d4560a] transition-colors ${
                pathname === "/contact" ? "text-[#d4560a] font-semibold" : ""
              }`}
            >
              Contact Plant
            </Link>

            <Link
              href="/overview"
              className="text-[#d4560a] font-bold hover:underline flex items-center gap-1"
            >
              <Sparkles className="w-3 h-3" />
              <span>How It Works</span>
            </Link>
          </nav>

          {/* Right Action Icons & Buttons */}
          <div className="flex items-center gap-2.5">
            {/* Search Button */}
            <button
              onClick={() => setSearchOpen(true)}
              className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg border border-stone-200 text-stone-600 bg-stone-100/60 hover:bg-stone-100 hover:border-stone-300 transition-colors text-xs"
              title="Search products and technical specs (Ctrl + K)"
            >
              <Search className="w-3.5 h-3.5 text-stone-500" />
              <span className="hidden xl:inline text-stone-400">Search catalogue...</span>
              <kbd className="hidden xl:inline px-1 py-0.2 text-[9px] font-semibold text-stone-500 bg-white rounded border border-stone-200">
                ⌘K
              </kbd>
            </button>

            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center gap-1 p-1.5 rounded-lg text-stone-600 hover:text-stone-900 hover:bg-stone-100 text-xs font-medium"
                title="Switch Language"
              >
                <Globe className="w-4 h-4 text-stone-500" />
                <span className="uppercase text-[11px] font-semibold">{language}</span>
              </button>

              {langMenuOpen && (
                <div
                  onMouseLeave={() => setLangMenuOpen(false)}
                  className="absolute right-0 top-full mt-1 bg-white rounded-lg shadow-lg border border-stone-200 py-1 w-28 z-50 text-xs"
                >
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        setLanguage(l.code);
                        setLangMenuOpen(false);
                      }}
                      className={`w-full px-3 py-1.5 text-left flex items-center justify-between hover:bg-stone-50 ${
                        language === l.code ? "text-[#d4560a] font-semibold bg-orange-50/50" : "text-stone-700"
                      }`}
                    >
                      <span>{l.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Portal / Admin Access */}
            <Link
              href="/login"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-stone-700 hover:text-stone-900 border border-stone-200 hover:bg-stone-100 transition-colors"
            >
              <User className="w-3.5 h-3.5 text-stone-500" />
              <span>Portal & CRM</span>
            </Link>

            {/* Primary RFQ CTA */}
            <Link
              href="/request-quote"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-[#d4560a] text-white hover:bg-[#b84605] shadow-sm transition-all"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>{t.requestQuote}</span>
            </Link>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 rounded-lg text-stone-600 hover:text-stone-900 hover:bg-stone-100"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-stone-200 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top duration-200">
            <div className="pb-2 border-b border-stone-100 flex items-center justify-between">
              <span className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider">
                Precision CNC Plant
              </span>
              <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                IATF 16949 / ISO 9001
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs font-medium">
              <Link
                href="/products"
                className="p-2 rounded-lg bg-stone-50 text-stone-800 hover:bg-stone-100 font-semibold"
              >
                CNC Components
              </Link>
              <Link
                href="/products"
                className="p-2 rounded-lg bg-stone-50 text-stone-800 hover:bg-stone-100"
              >
                All Products
              </Link>
              <Link
                href="/categories"
                className="p-2 rounded-lg bg-stone-50 text-stone-800 hover:bg-stone-100"
              >
                Categories
              </Link>
              <Link
                href="/manufacturing-process"
                className="p-2 rounded-lg bg-stone-50 text-stone-800 hover:bg-stone-100"
              >
                Manufacturing
              </Link>
              <Link
                href="/certifications"
                className="p-2 rounded-lg bg-stone-50 text-stone-800 hover:bg-stone-100"
              >
                Certifications
              </Link>
              <Link
                href="/book-demo"
                className="p-2 rounded-lg bg-stone-50 text-stone-800 hover:bg-stone-100"
              >
                Book Factory Visit
              </Link>
              <Link
                href="/portal/dashboard"
                className="p-2 rounded-lg bg-orange-50 text-[#d4560a] font-semibold"
              >
                Customer Portal
              </Link>
              <Link
                href="/admin/dashboard"
                className="p-2 rounded-lg bg-stone-900 text-white font-semibold"
              >
                Admin CRM
              </Link>
            </div>

            <div className="pt-2 flex gap-2">
              <Link
                href="/request-quote"
                className="flex-1 py-2 text-center text-xs font-semibold bg-[#d4560a] text-white rounded-lg"
              >
                Request Quote
              </Link>
              <Link
                href="/demo"
                className="flex-1 py-2 text-center text-xs font-semibold bg-stone-800 text-amber-400 rounded-lg"
              >
                Demo Presentation
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Global Command Search Modal */}
      <SearchCommand isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
};
