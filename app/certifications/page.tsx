"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import {
  ShieldCheck,
  Award,
  FileCheck2,
  FileDown,
  ChevronRight,
  CheckCircle2,
  Building,
  Check
} from "lucide-react";

export default function CertificationsPage() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const certifications = [
    {
      title: "ISO 9001:2015 Quality Management System",
      issuer: "TUV / ISO Accredited Registrar",
      scope: "Design, CNC Machining, Welding, Fabrication and Assembly of Industrial Components and Agro Machinery",
      validity: "Active (Annual Surveillance Audit Cleared)",
      demoDoc: "iso-9001-qms-certificate.pdf"
    },
    {
      title: "CPRI Short Circuit 50kA Type Test Certificate",
      issuer: "Central Power Research Institute (CPRI)",
      scope: "Short-time withstand current & peak withstand test on 415V Motor Control Center Switchgear Busbars",
      validity: "Certified Test Report",
      demoDoc: "cpri-type-test-report.pdf"
    },
    {
      title: "FMTTI Machinery Performance Approval",
      issuer: "Farm Machinery Training and Testing Institute (Budni / Anantapur)",
      scope: "PTO power consumption, field capacity, blade wear rate and structural endurance for Rotary Tillers",
      validity: "Approved for National & State Subsidy Schemes",
      demoDoc: "fmtti-subsidy-test-certificate.pdf"
    },
    {
      title: "EN 10204 Type 3.1 Material Test Inspection",
      issuer: "In-House NABL Accredited Spectro & Chemical Lab",
      scope: "Chemical composition, tensile yield strength, elongation, and charpy V-notch impact toughness per melt heat",
      validity: "Batchwise Certified with Dispatch Consignment",
      demoDoc: "en10204-3.1-mtc-sample.pdf"
    },
    {
      title: "UN 1H1/Y1.8 Dangerous Goods Packaging Certificate",
      issuer: "Indian Institute of Packaging (IIP)",
      scope: "Hydraulic internal pressure test, 1.8m cold drop impact test, and stacking load endurance for chemical containers",
      validity: "Certified for International Export Shipping",
      demoDoc: "un-packaging-certification.pdf"
    },
    {
      title: "ISO 22000 & FSSAI Food Safety Standards",
      issuer: "Food Safety and Standards Authority of India",
      scope: "HACCP principles, steam sterilization microbial control, pesticide residue limits, and optical sortex cleaning",
      validity: "Certified Export Unit",
      demoDoc: "fssai-brc-food-safety.pdf"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#fafaf8]">
      <Navbar />

      <main className="flex-1 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1.5 text-xs text-stone-500 mb-6">
            <Link href="/" className="hover:text-stone-900">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-stone-900 font-semibold">Quality & Certifications</span>
          </div>

          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#d4560a]">
              Quality Assurance Framework
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight mt-1">
              Industrial Standards & Compliance Certifications
            </h1>
            <p className="text-sm text-stone-600 mt-2 leading-relaxed">
              Every production batch is tested against national and international engineering benchmarks. Review illustrative compliance certificates and lab test sheets below.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((c) => (
              <div
                key={c.title}
                className="bg-white rounded-xl border border-stone-200 p-6 flex flex-col justify-between hover:shadow-md transition-shadow shadow-xs space-y-4"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-orange-50 text-[#d4560a] flex items-center justify-center">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-stone-900 leading-snug">{c.title}</h3>
                    <span className="text-[11px] text-stone-500 font-medium block mt-0.5">
                      Issuing Body: {c.issuer}
                    </span>
                  </div>

                  <p className="text-xs text-stone-600 leading-relaxed">{c.scope}</p>

                  <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-semibold flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>{c.validity}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <button
                    onClick={() => setActiveModal(c.title)}
                    className="text-xs font-semibold text-[#d4560a] hover:underline flex items-center gap-1"
                  >
                    <FileDown className="w-3.5 h-3.5" />
                    <span>Preview Certificate</span>
                  </button>
                  <span className="text-[10px] text-stone-400 font-mono">PDF Preview</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Demo Certificate Modal */}
      {activeModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 border border-stone-200 text-center">
            <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-3">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-stone-900 text-base mb-1">Compliance Document</h3>
            <p className="text-xs text-stone-600 mb-4">{activeModal}</p>
            <div className="bg-stone-50 p-3 rounded-lg border border-stone-200 text-left text-xs space-y-1 mb-5 font-mono text-stone-600">
              <div>Certificate ID: CERT-2026-IND-884</div>
              <div>Audit Standard: ISO / CPRI Verified</div>
              <div>Status: Validated for Industrial Tenders</div>
            </div>
            <button
              onClick={() => setActiveModal(null)}
              className="w-full py-2.5 bg-stone-900 hover:bg-stone-800 text-white rounded-lg text-xs font-bold"
            >
              Close Document
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
