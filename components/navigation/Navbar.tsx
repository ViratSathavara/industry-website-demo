"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Factory, ArrowUpRight, Menu, X, Search } from "lucide-react";
import { SearchCommand } from "@/components/ui/SearchCommand";

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isHome = pathname === "/";

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-white/10 bg-[#20272b]/95 backdrop-blur-md py-3 shadow-xl"
            : "border-b border-white/15 bg-transparent py-4"
        } text-[#f4efe5]`}
      >
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 md:px-10 lg:px-14">
          {/* Logo */}
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-3 transition-opacity hover:opacity-90"
          >
            <span className="grid size-8 place-items-center border border-[#e7a45c]/70 text-[#e7a45c]">
              <Factory size={16} strokeWidth={1.5} />
            </span>
            <span className="font-mono text-[12px] font-medium tracking-[.22em] text-[#f4efe5]">
              INDUSTRIA
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden items-center gap-8 text-[12px] uppercase tracking-[.12em] text-[#d8d7d0] lg:flex">
            {isHome ? (
              <>
                <a href="#why" className="transition-colors hover:text-[#e7a45c]">
                  The shift
                </a>
                <a href="#industries" className="transition-colors hover:text-[#e7a45c]">
                  Industries
                </a>
                <a href="#parts" className="transition-colors hover:text-[#e7a45c]">
                  Parts index
                </a>
                <a href="#enquiry" className="transition-colors hover:text-[#e7a45c]">
                  Talk to us
                </a>
              </>
            ) : (
              <>
                <Link href="/#why" className="transition-colors hover:text-[#e7a45c]">
                  The shift
                </Link>
                <Link href="/#industries" className="transition-colors hover:text-[#e7a45c]">
                  Industries
                </Link>
                <Link href="/products" className="transition-colors hover:text-[#e7a45c]">
                  Parts index
                </Link>
                <Link href="/manufacturing-process" className="transition-colors hover:text-[#e7a45c]">
                  Process
                </Link>
                <Link href="/contact" className="transition-colors hover:text-[#e7a45c]">
                  Talk to us
                </Link>
              </>
            )}
          </div>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3">
            {/* Quick Search */}
            <button
              onClick={() => setSearchOpen(true)}
              className="hidden sm:flex items-center gap-2 border border-white/20 bg-white/5 px-3 py-1.5 text-[11px] font-mono tracking-wider text-[#d8d7d0] transition-colors hover:border-[#e7a45c] hover:text-[#e7a45c]"
              title="Search parts (Ctrl + K)"
            >
              <Search size={13} className="text-[#e7a45c]" />
              <span className="hidden xl:inline">Search specs</span>
              <kbd className="text-[9px] text-[#9fa8a6]">⌘K</kbd>
            </button>

            {/* Conversation CTA */}
            {isHome ? (
              <a
                href="#enquiry"
                className="hidden items-center gap-2 border border-[#e7a45c] px-4 py-2 text-[11px] font-semibold uppercase tracking-[.12em] text-[#f4efe5] transition-colors hover:bg-[#e7a45c] hover:text-[#20272b] md:flex"
              >
                Open a conversation <ArrowUpRight size={14} />
              </a>
            ) : (
              <Link
                href="/request-quote"
                className="hidden items-center gap-2 border border-[#e7a45c] px-4 py-2 text-[11px] font-semibold uppercase tracking-[.12em] text-[#f4efe5] transition-colors hover:bg-[#e7a45c] hover:text-[#20272b] md:flex"
              >
                Open a conversation <ArrowUpRight size={14} />
              </Link>
            )}

            {/* Mobile Hamburger */}
            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-1 text-[#f4efe5] lg:hidden"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="border-t border-white/10 bg-[#20272b]/95 px-5 py-5 backdrop-blur-md lg:hidden">
            {isHome ? (
              [
                ["why", "The shift"],
                ["industries", "Industries"],
                ["parts", "Parts index"],
                ["enquiry", "Talk to us"]
              ].map(([id, label]) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={() => setMenuOpen(false)}
                  className="block border-b border-white/10 py-4 text-sm uppercase tracking-[.13em] text-[#e7dfd2] last:border-b-0 hover:text-[#e7a45c]"
                >
                  {label}
                </a>
              ))
            ) : (
              [
                ["/", "Home"],
                ["/products", "Parts Catalog"],
                ["/manufacturing-process", "Process & Machinery"],
                ["/contact", "Contact Factory"],
                ["/request-quote", "Instant CAD RFQ"]
              ].map(([url, label]) => (
                <Link
                  key={url}
                  href={url}
                  onClick={() => setMenuOpen(false)}
                  className="block border-b border-white/10 py-4 text-sm uppercase tracking-[.13em] text-[#e7dfd2] last:border-b-0 hover:text-[#e7a45c]"
                >
                  {label}
                </Link>
              ))
            )}
            <div className="pt-4">
              <a
                href={isHome ? "#enquiry" : "/request-quote"}
                onClick={() => setMenuOpen(false)}
                className="flex w-full items-center justify-center gap-2 bg-[#e46e2e] py-3 text-xs font-semibold uppercase tracking-[.12em] text-[#fff5e9]"
              >
                Open a conversation <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Quick Search Dialog */}
      <SearchCommand isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
};
