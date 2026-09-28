"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams, notFound } from "next/navigation";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { useDemoState } from "@/lib/services/demo-state-context";
import {
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  FileText,
  Calendar,
  Users,
  Layers,
  ArrowRight,
  Sparkles
} from "lucide-react";

export default function IndustryDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const { industries, products, setSelectedIndustryId, selectedIndustry } = useDemoState();

  const industry = industries.find((i) => i.slug === slug);

  if (!industry) {
    return notFound();
  }

  const isCurrentActive = industry.id === selectedIndustry.id;

  // Filter products belonging to this industry
  const industryProducts = products.filter((p) => p.industryId === industry.id);

  return (
    <div className="min-h-screen flex flex-col bg-[#20272b] text-[#f5f0e7]">
      <Navbar />

      <main className="flex-1">
        {/* Industry Hero Header */}
        <section className="relative bg-[#171c1e] text-[#f5f0e7] pt-32 pb-16 border-b border-white/10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#171c1e] via-[#171c1e]/90 to-transparent z-10" />
          <Image
            src={industry.heroImage}
            alt={industry.name}
            fill
            priority
            className="object-cover opacity-25"
          />

          <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-14 relative z-20">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs text-[#aeb5b2] font-mono mb-6">
              <Link href="/" className="hover:text-[#e7a45c] transition-colors">
                Home
              </Link>
              <ChevronRight size={13} className="text-[#7e8989]" />
              <Link href="/industries" className="hover:text-[#e7a45c] transition-colors">
                Industries
              </Link>
              <ChevronRight size={13} className="text-[#7e8989]" />
              <span className="text-[#f5f0e7] font-semibold">{industry.name}</span>
            </div>

            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#20272b] border border-[#e7a45c]/30 text-[#e7a45c] text-xs font-mono font-bold">
                <Sparkles size={14} />
                <span>Sector Focus</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-display tracking-tight text-[#f5f0e7] leading-tight">
                {industry.name} <em className="text-[#e7a45c]">Engineering.</em>
              </h1>

              <p className="text-sm sm:text-base text-[#aeb5b2] leading-relaxed max-w-2xl">
                {industry.description}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-4">
                <button
                  onClick={() => setSelectedIndustryId(industry.id)}
                  className={`px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-2 shadow-sm ${
                    isCurrentActive
                      ? "bg-emerald-600 text-white"
                      : "bg-[#e46e2e] text-[#f5f0e7] hover:bg-[#bb5b2c]"
                  }`}
                >
                  <Layers size={14} />
                  <span>{isCurrentActive ? "Active Demo Sector" : "Set as Active Demo Sector"}</span>
                </button>

                <Link
                  href={`/request-quote?industryId=${industry.id}`}
                  className="px-5 py-2.5 bg-[#20272b] hover:bg-white/10 text-[#f5f0e7] border border-white/20 text-xs font-semibold uppercase tracking-wider flex items-center gap-2 transition-colors"
                >
                  <FileText size={14} className="text-[#e7a45c]" />
                  <span>Request Sector RFQ</span>
                </Link>

                <Link
                  href={`/book-demo?industryId=${industry.id}`}
                  className="px-5 py-2.5 bg-[#20272b] hover:bg-white/10 text-[#f5f0e7] border border-white/20 text-xs font-semibold uppercase tracking-wider flex items-center gap-2 transition-colors"
                >
                  <Calendar size={14} className="text-[#e7a45c]" />
                  <span>Book Plant Consultation</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 2-Column Content Layout */}
        <section className="py-16">
          <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-14">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              {/* Left Column: Products, Capabilities, Applications */}
              <div className="lg:col-span-8 space-y-12">
                {/* Sector Products */}
                <div>
                  <div className="flex items-center justify-between mb-6 pb-3 border-b border-white/10">
                    <div>
                      <h2 className="text-2xl font-display text-[#f5f0e7]">
                        Featured {industry.name} <em className="text-[#e7a45c]">Components</em>
                      </h2>
                      <p className="text-xs text-[#aeb5b2] mt-1">
                        High-tolerance specifications and serial production components
                      </p>
                    </div>
                    <Link
                      href="/products"
                      className="text-xs text-[#e7a45c] font-semibold hover:underline flex items-center gap-1"
                    >
                      <span>View All Products</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {industryProducts.map((prod) => (
                      <div
                        key={prod.id}
                        className="bg-[#171c1e] border border-white/10 hover:border-[#e7a45c]/50 p-5 flex flex-col justify-between transition-all group shadow-xl"
                      >
                        <div>
                          <div className="relative h-44 w-full overflow-hidden mb-4 bg-[#20272b] border border-white/10">
                            <Image
                              src={prod.images[0]}
                              alt={prod.name}
                              fill
                              unoptimized={prod.images[0].endsWith(".svg")}
                              sizes="(max-width: 768px) 100vw, 33vw"
                              className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                            />
                            <span className="absolute top-2.5 left-2.5 bg-[#20272b]/90 backdrop-blur-md text-[#e7a45c] text-[10px] font-mono px-2 py-0.5 border border-[#e7a45c]/30 font-bold">
                              {prod.sku}
                            </span>
                            <span className="absolute bottom-2.5 right-2.5 bg-[#20272b]/90 text-[#aeb5b2] text-[10px] font-mono px-2 py-0.5 border border-white/10">
                              {prod.materials[0]}
                            </span>
                          </div>
                          <h3 className="font-semibold text-base text-[#f5f0e7] group-hover:text-[#e7a45c] transition-colors line-clamp-2 leading-snug">
                            {prod.name}
                          </h3>
                          <p className="text-xs text-[#aeb5b2] mt-2 line-clamp-2 leading-relaxed">
                            {prod.shortDescription}
                          </p>
                        </div>

                        <div className="pt-4 border-t border-white/10 mt-4 flex items-center justify-between">
                          <span className="text-xs font-mono font-bold text-[#e7a45c]">
                            {prod.priceMode}
                          </span>
                          <Link
                            href={`/products/${prod.slug}`}
                            className="text-xs text-[#f5f0e7] hover:text-[#e7a45c] font-semibold flex items-center gap-1.5 transition-colors"
                          >
                            <span>Specs & Quote</span>
                            <ArrowRight size={13} className="text-[#e7a45c]" />
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Applications Served */}
                <div className="bg-[#171c1e] border border-white/10 p-6 sm:p-8">
                  <h3 className="text-xl font-display text-[#f5f0e7] mb-2">
                    Key Applications & <em className="text-[#e7a45c]">Subsystems</em>
                  </h3>
                  <p className="text-xs text-[#aeb5b2] mb-6">
                    Where machined components and precision assemblies from this sector are deployed:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {industry.applications.map((app) => (
                      <div
                        key={app}
                        className="flex items-center gap-3 p-3 bg-[#20272b] border border-white/10 text-xs text-[#f5f0e7]"
                      >
                        <CheckCircle2 size={16} className="text-[#e7a45c] shrink-0" />
                        <span>{app}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Manufacturing Capabilities */}
                <div className="bg-[#171c1e] border border-white/10 p-6 sm:p-8">
                  <h3 className="text-xl font-display text-[#f5f0e7] mb-2">
                    Calibrated Plant <em className="text-[#e7a45c]">Capabilities</em>
                  </h3>
                  <p className="text-xs text-[#aeb5b2] mb-6">
                    Advanced CNC centers and metrology calibrated for this industry:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {industry.capabilities.map((cap) => (
                      <div
                        key={cap}
                        className="flex items-center gap-3 p-3 bg-[#20272b] border border-[#e7a45c]/20 text-xs text-[#f5f0e7]"
                      >
                        <ShieldCheck size={16} className="text-[#e7a45c] shrink-0" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Buyer Personas & RFQ Fields preview */}
              <div className="lg:col-span-4 space-y-6">
                {/* Personas Card */}
                <div className="bg-[#171c1e] border border-white/10 p-6 shadow-xl">
                  <div className="flex items-center gap-2 pb-4 border-b border-white/10 mb-4">
                    <Users size={16} className="text-[#e7a45c]" />
                    <h3 className="font-mono text-xs uppercase tracking-[.12em] text-[#e7a45c] font-bold">
                      Typical Buyer Personas
                    </h3>
                  </div>
                  <ul className="space-y-2.5 text-xs text-[#aeb5b2]">
                    {industry.buyerPersonas.map((bp) => (
                      <li key={bp} className="flex items-center gap-2.5 p-2.5 bg-[#20272b] border border-white/5">
                        <span className="w-1.5 h-1.5 bg-[#e7a45c]" />
                        <span>{bp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Common RFQ Fields Preview Card */}
                <div className="bg-[#171c1e] border border-white/10 p-6 shadow-xl">
                  <div className="flex items-center gap-2 pb-4 border-b border-white/10 mb-4">
                    <FileText size={16} className="text-[#e7a45c]" />
                    <h3 className="font-mono text-xs uppercase tracking-[.12em] text-[#e7a45c] font-bold">
                      Standard RFQ Parameters
                    </h3>
                  </div>
                  <p className="text-[11px] text-[#aeb5b2] mb-4">
                    When OEM buyers submit technical inquiries for {industry.name}, our form captures:
                  </p>
                  <div className="space-y-2.5">
                    {industry.rfqFields.map((f) => (
                      <div
                        key={f.name}
                        className="p-3 bg-[#20272b] border border-white/10 text-xs"
                      >
                        <div className="font-semibold text-[#f5f0e7]">{f.label}</div>
                        <div className="text-[10px] text-[#7e8989] font-mono mt-0.5">
                          Type: {f.type} {f.options ? `(${f.options.length} options)` : ""}
                        </div>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={`/request-quote?industryId=${industry.id}`}
                    className="w-full mt-6 py-3 text-center text-xs font-semibold uppercase tracking-wider bg-[#e46e2e] hover:bg-[#bb5b2c] text-[#f5f0e7] block transition-colors shadow-md"
                  >
                    Open Live RFQ Configurator
                  </Link>
                </div>

                {/* Help Desk Callout */}
                <div className="bg-[#20272b] border border-[#e7a45c]/40 p-6 text-xs space-y-3 shadow-xl">
                  <h4 className="font-display text-lg text-[#e7a45c]">Technical Engineering Consultation</h4>
                  <p className="text-[#aeb5b2] leading-relaxed text-xs">
                    Schedule a plant audit or direct engineering review with our {industry.name} lead manufacturing engineer.
                  </p>
                  <Link
                    href="/book-demo"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#171c1e] hover:bg-black text-[#f5f0e7] font-semibold border border-white/20 text-xs uppercase tracking-wider transition-colors mt-2"
                  >
                    <span>Book Factory Audit</span>
                    <ArrowRight size={13} className="text-[#e7a45c]" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
