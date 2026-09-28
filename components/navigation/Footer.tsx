"use client";

import React from "react";
import Link from "next/link";
import {
  Factory,
  ArrowUpRight,
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  ChevronUp
} from "lucide-react";
import { useDemoState } from "@/lib/services/demo-state-context";

const footerLinks = {
  products: [
    { label: "Submersible Motor Parts", href: "/products?cat=submersible" },
    { label: "Pump Impellers & Bowls", href: "/products?cat=impellers" },
    { label: "Rotor & Drive Shafts", href: "/products?cat=shafts" },
    { label: "Stator Cores & Windings", href: "/products?cat=stators" },
    { label: "Mechanical Seals", href: "/products?cat=seals" },
    { label: "Motor Housings & Casings", href: "/products?cat=housings" }
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Manufacturing Process", href: "/manufacturing-process" },
    { label: "Quality & Certifications", href: "/certifications" },
    { label: "Applications", href: "/applications" },
    { label: "Industries Served", href: "/industries" },
    { label: "Contact / Plant Visit", href: "/contact" }
  ],
  portals: [
    { label: "Buyer Portal", href: "/portal/dashboard" },
    { label: "Request Quote (RFQ)", href: "/request-quote" },
    { label: "Admin CRM", href: "/admin/dashboard" },
    { label: "Product CRUD", href: "/admin/products" },
    { label: "Demo Presentation", href: "/demo" },
    { label: "Architecture Overview", href: "/overview" }
  ]
};

export const Footer: React.FC = () => {
  const { t } = useDemoState();
  return (
    <footer className="bg-[#171c1e] text-[#f4efe5] border-t border-white/8">
      {/* Main Footer Grid */}
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 lg:px-12 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand Block */}
        <div className="lg:col-span-1">
          <Link href="/" className="flex items-center gap-2.5 mb-5 group w-fit">
            <span className="grid size-9 place-items-center border border-[#e7a45c]/50 bg-[#e7a45c]/10 text-[#e7a45c] rounded-sm">
              <Factory size={16} strokeWidth={1.8} />
            </span>
            <div className="leading-none">
              <span className="font-mono text-sm font-bold tracking-[.22em] text-[#f4efe5] block">INDUSTRIA</span>
              <span className="text-[9px] tracking-widest text-[#7e8989] font-mono uppercase mt-0.5 block">Motor Parts</span>
            </div>
          </Link>

          <p className="text-xs leading-5 text-[#7e8989] mb-5 max-w-[240px]">
            {t.footerTagline}
          </p>

          {/* Certifications badges */}
          <div className="flex flex-wrap gap-2 mb-6">
            {["ISO 9001:2015", "IS 9283", "EN 10204"].map((cert) => (
              <span key={cert} className="inline-flex items-center gap-1 px-2 py-1 rounded-sm bg-white/4 border border-white/8 text-[9px] font-mono text-[#9fa8a6] uppercase tracking-wider">
                <ShieldCheck size={9} className="text-[#e7a45c]" />
                {cert}
              </span>
            ))}
          </div>

          {/* Contact block */}
          <div className="space-y-2">
            <a href="tel:+919876543210" className="flex items-center gap-2 text-xs text-[#9fa8a6] hover:text-[#e7a45c] transition-colors group">
              <Phone size={12} className="text-[#e7a45c] shrink-0" />
              +91 98765 43210
            </a>
            <a href="mailto:sales@industriamotorparts.in" className="flex items-center gap-2 text-xs text-[#9fa8a6] hover:text-[#e7a45c] transition-colors">
              <Mail size={12} className="text-[#e7a45c] shrink-0" />
              sales@industriamotorparts.in
            </a>
            <div className="flex items-start gap-2 text-xs text-[#9fa8a6]">
              <MapPin size={12} className="text-[#e7a45c] shrink-0 mt-0.5" />
              <span>Plot 42, Sanand GIDC Phase II,<br />Ahmedabad 382110, Gujarat, India</span>
            </div>
          </div>
        </div>

        {/* Products Links */}
        <div>
          <h3 className="text-[10px] font-mono uppercase tracking-[.18em] text-[#e7a45c] mb-4">{t.footerProductsTitle}</h3>
          <ul className="space-y-2.5">
            {footerLinks.products.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-xs text-[#7e8989] hover:text-[#e7a45c] transition-colors leading-none">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-[10px] font-mono uppercase tracking-[.18em] text-[#e7a45c] mb-4">{t.footerCompanyTitle}</h3>
          <ul className="space-y-2.5">
            {footerLinks.company.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-xs text-[#7e8989] hover:text-[#e7a45c] transition-colors leading-none">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Portals & CTA */}
        <div>
          <h3 className="text-[10px] font-mono uppercase tracking-[.18em] text-[#e7a45c] mb-4">{t.footerQuickAccessTitle}</h3>
          <ul className="space-y-2.5 mb-6">
            {footerLinks.portals.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-xs text-[#7e8989] hover:text-[#e7a45c] transition-colors leading-none">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* RFQ CTA */}
          <Link
            href="/request-quote"
            className="inline-flex items-center gap-2 bg-[#e46e2e] hover:bg-[#f07d3e] text-white px-4 py-2.5 text-xs font-bold uppercase tracking-wider rounded-sm transition-all shadow-lg shadow-[#e46e2e]/15 w-full justify-center"
          >
            <span>{t.requestQuote}</span>
            <ArrowUpRight size={13} />
          </Link>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/8">
        <div className="mx-auto max-w-[1440px] px-4 md:px-8 lg:px-12 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-[10px] font-mono uppercase tracking-[.12em] text-[#4a5555]">
            {t.footerCopyright}
          </span>
          <a
            href="#top"
            className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-[#4a5555] hover:text-[#e7a45c] transition-colors"
          >
            {t.backToTop}
            <ChevronUp size={12} />
          </a>
        </div>
      </div>
    </footer>
  );
};
