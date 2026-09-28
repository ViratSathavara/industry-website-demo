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
  Check,
  Clock,
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
    <div className="min-h-screen flex flex-col bg-[#fafaf8]">
      <Navbar />

      <main className="flex-1">
        {/* Industry Hero Header */}
        <section className="relative bg-stone-900 text-white py-16 border-b border-stone-800 overflow-hidden">
          <div className="absolute inset-0 bg-stone-900/60 z-10" />
          <Image
            src={industry.heroImage}
            alt={industry.name}
            fill
            priority
            className="object-cover opacity-35"
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
            {/* Breadcrumb */}
            <div className="flex items-center gap-1.5 text-xs text-stone-400 mb-4">
              <Link href="/" className="hover:text-white">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <Link href="/industries" className="hover:text-white">
                Industries
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-white font-medium">{industry.name}</span>
            </div>

            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-800/80 border border-stone-700 text-amber-400 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Sector Focus</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
                {industry.name}
              </h1>

              <p className="text-base text-stone-300 leading-relaxed max-w-2xl">
                {industry.description}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-4">
                <button
                  onClick={() => setSelectedIndustryId(industry.id)}
                  className={`px-4 py-2.5 rounded-lg text-xs font-bold transition-all flex items-center gap-2 shadow-sm ${
                    isCurrentActive
                      ? "bg-emerald-600 text-white"
                      : "bg-[#d4560a] text-white hover:bg-[#b84605]"
                  }`}
                >
                  <Layers className="w-4 h-4" />
                  <span>{isCurrentActive ? "Active Demo Sector" : "Set as Active Demo Sector"}</span>
                </button>

                <Link
                  href={`/request-quote?industryId=${industry.id}`}
                  className="px-4 py-2.5 rounded-lg bg-stone-800 text-stone-200 hover:bg-stone-700 border border-stone-700 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                >
                  <FileText className="w-4 h-4 text-[#d4560a]" />
                  <span>Request Sector RFQ</span>
                </Link>

                <Link
                  href={`/book-demo?industryId=${industry.id}`}
                  className="px-4 py-2.5 rounded-lg bg-stone-800 text-stone-200 hover:bg-stone-700 border border-stone-700 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                >
                  <Calendar className="w-4 h-4 text-emerald-400" />
                  <span>Book Plant Consultation</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 2-Column Content Layout */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              {/* Left Column: Products, Capabilities, Applications */}
              <div className="lg:col-span-8 space-y-12">
                {/* Sector Products */}
                <div>
                  <div className="flex items-center justify-between mb-6 pb-2 border-b border-stone-200">
                    <div>
                      <h2 className="text-xl font-bold text-stone-900">
                        Featured {industry.name} Products
                      </h2>
                      <p className="text-xs text-stone-500">
                        Standard specifications and custom manufactured components
                      </p>
                    </div>
                    <Link
                      href="/products"
                      className="text-xs text-[#d4560a] font-bold hover:underline"
                    >
                      View All Products →
                    </Link>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {industryProducts.map((prod) => (
                      <div
                        key={prod.id}
                        className="bg-white rounded-xl border border-stone-200 p-4 hover:shadow-md transition-shadow flex flex-col justify-between"
                      >
                        <div>
                          <div className="relative h-40 w-full rounded-lg overflow-hidden mb-3 bg-stone-100">
                            <Image
                              src={prod.images[0]}
                              alt={prod.name}
                              fill
                              sizes="(max-width: 768px) 100vw, 33vw"
                              className="object-cover"
                            />
                            <span className="absolute top-2 left-2 bg-stone-900/80 backdrop-blur-md text-white text-[10px] font-mono px-2 py-0.5 rounded font-bold">
                              {prod.sku}
                            </span>
                          </div>
                          <h3 className="font-bold text-sm text-stone-900 line-clamp-2 leading-snug">
                            {prod.name}
                          </h3>
                          <p className="text-xs text-stone-500 mt-1 line-clamp-2">
                            {prod.shortDescription}
                          </p>
                        </div>

                        <div className="pt-3 border-t border-stone-100 mt-3 flex items-center justify-between">
                          <span className="text-xs font-bold text-[#d4560a]">
                            {prod.priceMode}
                          </span>
                          <Link
                            href={`/products/${prod.slug}`}
                            className="text-xs text-stone-700 hover:text-stone-900 font-semibold flex items-center gap-1"
                          >
                            <span>Specs & Quote</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Applications Served */}
                <div className="bg-white rounded-xl border border-stone-200 p-6">
                  <h3 className="text-lg font-bold text-stone-900 mb-2">
                    Key Applications & Usages
                  </h3>
                  <p className="text-xs text-stone-500 mb-4">
                    Where components and machinery from this sector are deployed:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {industry.applications.map((app) => (
                      <div
                        key={app}
                        className="flex items-center gap-2 p-2.5 rounded-lg bg-stone-50 border border-stone-200 text-xs font-medium text-stone-800"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{app}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Manufacturing Capabilities */}
                <div className="bg-white rounded-xl border border-stone-200 p-6">
                  <h3 className="text-lg font-bold text-stone-900 mb-2">
                    In-House Plant Capabilities
                  </h3>
                  <p className="text-xs text-stone-500 mb-4">
                    Advanced machinery calibrated for high-precision operations:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {industry.capabilities.map((cap) => (
                      <div
                        key={cap}
                        className="flex items-center gap-2 p-2.5 rounded-lg bg-orange-50/60 border border-orange-200 text-xs font-medium text-stone-800"
                      >
                        <ShieldCheck className="w-4 h-4 text-[#d4560a] shrink-0" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Buyer Personas & RFQ Fields preview */}
              <div className="lg:col-span-4 space-y-6">
                {/* Personas Card */}
                <div className="bg-white rounded-xl border border-stone-200 p-5 shadow-xs">
                  <div className="flex items-center gap-2 pb-3 border-b border-stone-100 mb-3">
                    <Users className="w-4 h-4 text-[#d4560a]" />
                    <h3 className="font-bold text-xs uppercase tracking-wider text-stone-900">
                      Typical Buyer Personas
                    </h3>
                  </div>
                  <ul className="space-y-2 text-xs text-stone-600">
                    {industry.buyerPersonas.map((bp) => (
                      <li key={bp} className="flex items-center gap-2 p-1.5 rounded bg-stone-50">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#d4560a]" />
                        <span>{bp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Common RFQ Fields Preview Card */}
                <div className="bg-white rounded-xl border border-stone-200 p-5 shadow-xs">
                  <div className="flex items-center gap-2 pb-3 border-b border-stone-100 mb-3">
                    <FileText className="w-4 h-4 text-emerald-600" />
                    <h3 className="font-bold text-xs uppercase tracking-wider text-stone-900">
                      Standard RFQ Parameters
                    </h3>
                  </div>
                  <p className="text-[11px] text-stone-500 mb-3">
                    When buyers submit RFQs for {industry.name}, our digital forms collect:
                  </p>
                  <div className="space-y-2">
                    {industry.rfqFields.map((f) => (
                      <div
                        key={f.name}
                        className="p-2 rounded bg-stone-50 border border-stone-200 text-xs"
                      >
                        <div className="font-semibold text-stone-800">{f.label}</div>
                        <div className="text-[10px] text-stone-400 font-mono">
                          Type: {f.type} {f.options ? `(${f.options.length} options)` : ""}
                        </div>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={`/request-quote?industryId=${industry.id}`}
                    className="w-full mt-4 py-2 text-center text-xs font-bold bg-[#d4560a] text-white rounded-lg block hover:bg-[#b84605] transition-colors"
                  >
                    Open Live RFQ Form
                  </Link>
                </div>

                {/* Help Desk Callout */}
                <div className="bg-stone-900 rounded-xl p-5 text-white text-xs space-y-3">
                  <h4 className="font-bold text-amber-400">Need Technical Consultation?</h4>
                  <p className="text-stone-300 leading-relaxed text-[11px]">
                    Schedule a factory visit or technical discussion with our {industry.name} lead engineer.
                  </p>
                  <Link
                    href="/book-demo"
                    className="inline-block px-3 py-1.5 bg-stone-800 hover:bg-stone-700 text-white rounded font-medium border border-stone-700"
                  >
                    Book Factory Visit →
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
