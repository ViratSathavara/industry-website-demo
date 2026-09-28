"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useDemoState } from "@/lib/services/demo-state-context";
import {
  Factory,
  Phone,
  Mail,
  MapPin,
  FileDown,
  MessageSquare,
  ShieldCheck,
  ArrowUpRight,
  ExternalLink,
  RotateCcw
} from "lucide-react";

export const Footer: React.FC = () => {
  const { industries, setSelectedIndustryId, resetDemoData } = useDemoState();
  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false);
  const [showCallModal, setShowCallModal] = useState(false);

  return (
    <>
      <footer className="bg-stone-900 text-stone-300 pt-16 pb-12 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Banner CTA */}
          <div className="bg-stone-800/80 rounded-2xl p-8 border border-stone-700/80 mb-16 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="max-w-xl">
              <span className="text-xs uppercase font-bold tracking-widest text-[#d4560a]">
                Manufacturing Digital Transformation
              </span>
              <h3 className="text-2xl font-bold text-white mt-1 tracking-tight">
                Turn your factory into a digital business that works 24/7.
              </h3>
              <p className="text-stone-400 text-xs mt-2 leading-relaxed">
                Connect your product catalogue, instant RFQs, customer portal, and CRM pipelines in one unified experience.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Link
                href="/request-quote"
                className="px-5 py-2.5 rounded-lg bg-[#d4560a] text-white font-semibold text-xs hover:bg-[#b84605] shadow-lg transition-all"
              >
                Request a Quote
              </Link>
              <Link
                href="/demo"
                className="px-5 py-2.5 rounded-lg bg-stone-700 hover:bg-stone-600 text-stone-100 font-semibold text-xs border border-stone-600 transition-all"
              >
                Open Demo Presentation
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-stone-800">
            {/* Col 1: Brand & Contacts */}
            <div className="lg:col-span-2 space-y-4">
              <Link href="/" className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#d4560a] text-white flex items-center justify-center font-bold">
                  <Factory className="w-4 h-4" />
                </div>
                <span className="font-bold text-lg tracking-tight text-white">INDUSTRIA</span>
              </Link>

              <p className="text-stone-400 text-xs leading-relaxed max-w-sm">
                A modern digital transformation demonstration platform designed for B2B manufacturers, OEMs, engineering workshops, and industrial suppliers.
              </p>

              <div className="space-y-2 text-xs text-stone-400 pt-2">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-stone-500 shrink-0 mt-0.5" />
                  <span>Industrial Corridor, Phase II, GIDC Estate, Gujarat, India</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-stone-500 shrink-0" />
                  <span>+91 79 4890 2200 / +91 98250 00000 (Demo Support)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-stone-500 shrink-0" />
                  <span>sales@industria-demo.com</span>
                </div>
              </div>

              {/* Quick Communication Simulator CTAs */}
              <div className="flex gap-2 pt-2">
                <button
                  onClick={() => setShowWhatsAppModal(true)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-950/60 text-emerald-400 border border-emerald-800/80 text-xs font-medium hover:bg-emerald-900/80 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp Lead Demo</span>
                </button>
                <button
                  onClick={() => setShowCallModal(true)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-800 text-stone-300 border border-stone-700 text-xs font-medium hover:bg-stone-700 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Sales Demo</span>
                </button>
              </div>
            </div>

            {/* Col 2: Machining & Plant Capabilities */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
                Precision Capabilities
              </h4>
              <ul className="space-y-2 text-xs text-stone-400">
                <li>
                  <Link href="/products" className="hover:text-white transition-colors">
                    5-Axis CNC Milling & Impellers
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="hover:text-white transition-colors">
                    CNC Turning & Splined Shafts
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="hover:text-white transition-colors">
                    High-Pressure ASME Flanges
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="hover:text-white transition-colors">
                    Hydraulic Manifold Blocks
                  </Link>
                </li>
                <li>
                  <Link href="/manufacturing-process" className="hover:text-white transition-colors">
                    Zeiss 3D CMM Metrology Lab
                  </Link>
                </li>
                <li>
                  <Link href="/certifications" className="hover:text-white transition-colors">
                    IATF 16949 & AS9100D Standards
                  </Link>
                </li>
                <li>
                  <Link
                    href="/manufacturing-process"
                    className="text-[#d4560a] hover:underline flex items-center gap-1 font-semibold pt-1"
                  >
                    View Plant Machinery & SOPs →
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 3: Product & Buyer Workflows */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
                Buyer Experience
              </h4>
              <ul className="space-y-2 text-xs text-stone-400">
                <li>
                  <Link href="/products" className="hover:text-white transition-colors">
                    Product Catalogue
                  </Link>
                </li>
                <li>
                  <Link href="/request-quote" className="hover:text-white transition-colors">
                    Request a Quote (RFQ)
                  </Link>
                </li>
                <li>
                  <Link href="/request-sample" className="hover:text-white transition-colors">
                    Request Product Sample
                  </Link>
                </li>
                <li>
                  <Link href="/book-demo" className="hover:text-white transition-colors">
                    Book Factory Visit
                  </Link>
                </li>
                <li>
                  <Link href="/compare" className="hover:text-white transition-colors">
                    Product Comparison
                  </Link>
                </li>
                <li>
                  <Link href="/portal/dashboard" className="hover:text-white transition-colors">
                    Customer Portal Login
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 4: Operations & System Portals */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
                Factory Command
              </h4>
              <ul className="space-y-2 text-xs text-stone-400">
                <li>
                  <Link href="/admin/dashboard" className="hover:text-white transition-colors">
                    Admin / CRM Dashboard
                  </Link>
                </li>
                <li>
                  <Link href="/admin/leads" className="hover:text-white transition-colors">
                    Lead Management Pipeline
                  </Link>
                </li>
                <li>
                  <Link href="/admin/quotes" className="hover:text-white transition-colors">
                    Quotation Builder
                  </Link>
                </li>
                <li>
                  <Link href="/admin/orders" className="hover:text-white transition-colors">
                    Order Tracking & Operations
                  </Link>
                </li>
                <li>
                  <Link href="/admin/analytics" className="hover:text-white transition-colors">
                    Growth Analytics
                  </Link>
                </li>
                <li>
                  <Link href="/demo/script" className="hover:text-white transition-colors">
                    5-Min Sales Demo Script
                  </Link>
                </li>
                <li>
                  <Link href="/audit" className="hover:text-white transition-colors">
                    Digital Factory Blueprint Audit
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Copyright & Disclaimer */}
          <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-stone-500 gap-4">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-amber-500" />
              <span>
                <strong>DEMO DATA NOTICE:</strong> All company names, products, technical metrics, and customer orders are illustrative sample data for digital agency presentation purposes.
              </span>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={resetDemoData}
                className="text-stone-400 hover:text-stone-200 flex items-center gap-1 text-[11px]"
              >
                <RotateCcw className="w-3 h-3" />
                Reset Demo Cache
              </button>
              <span>© 2026 INDUSTRIA. Built for manufacturing MSME digital transformation.</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Mock WhatsApp Lead Drawer/Modal */}
      {showWhatsAppModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-sm w-full p-5 border border-stone-200">
            <div className="flex items-center gap-2 mb-3 text-emerald-700">
              <MessageSquare className="w-6 h-6" />
              <h4 className="font-bold text-stone-900 text-base">WhatsApp Lead Simulator</h4>
            </div>
            <p className="text-xs text-stone-600 mb-4 leading-relaxed">
              In a live client implementation, clicking this button immediately initiates a WhatsApp Business chat with pre-filled product SKU, customer requirement, and location, automatically creating a trackable lead in the CRM.
            </p>
            <div className="bg-stone-50 p-3 rounded-lg border border-stone-200 text-xs font-mono text-stone-700 mb-4">
              &quot;Hello! I saw your <strong>{industries[0].sampleProductType}</strong> on your digital catalogue. Please share quotation for 10 units.&quot;
            </div>
            <button
              onClick={() => setShowWhatsAppModal(false)}
              className="w-full py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-semibold"
            >
              Close Simulator
            </button>
          </div>
        </div>
      )}

      {/* Mock Phone Call Modal */}
      {showCallModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-sm w-full p-5 border border-stone-200 text-center">
            <div className="w-12 h-12 rounded-full bg-orange-50 text-[#d4560a] flex items-center justify-center mx-auto mb-3">
              <Phone className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-stone-900 text-base mb-1">Direct Sales Helpline</h4>
            <p className="text-xs text-stone-500 mb-4">
              Factory Sales Desk (Mon - Sat, 9:00 AM - 6:30 PM IST)
            </p>
            <div className="text-lg font-bold text-stone-900 mb-4 tracking-tight">
              +91 (079) 4890 2200 / +91 98250 44120
            </div>
            <button
              onClick={() => setShowCallModal(false)}
              className="w-full py-2 bg-stone-900 hover:bg-stone-800 text-white rounded-lg text-xs font-semibold"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};
