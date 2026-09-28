"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import {
  ShieldCheck,
  Award,
  FileDown,
  ChevronRight,
  CheckCircle2,
  Cpu
} from "lucide-react";

export default function CertificationsPage() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const certifications = [
    {
      title: "ISO 9001:2015 Quality Management System",
      issuer: "TUV NORD / DAkkS Accredited",
      scope:
        "Design, 5-Axis CNC Milling, Precision Turning, High-Pressure Testing & Sub-Assembly of Engineering Components",
      validity: "Active • Annual Surveillance Audit Cleared",
      standardCode: "ISO 9001:2015"
    },
    {
      title: "IATF 16949:2016 Automotive Quality Standard",
      issuer: "International Automotive Task Force (IATF)",
      scope:
        "Production of powertrain transmission shafts, brake calipers, and steering knuckles with PPAP Level 3 documentation",
      validity: "Certified OEM Tier-1 Supplier",
      standardCode: "IATF 16949:2016"
    },
    {
      title: "AS9100D Aerospace & Defense Standard",
      issuer: "IAQG / Aerospace Quality Management",
      scope:
        "Precision machining of critical aviation parts, titanium blisks, and high-altitude fluid power manifolds",
      validity: "Certified Flight Hardware Supplier",
      standardCode: "AS9100D Rev D"
    },
    {
      title: "EN 10204 Type 3.1 / 3.2 Material Test Inspection",
      issuer: "In-House NABL Accredited Spectro & Chemical Lab",
      scope:
        "Optical emission spectrometry chemical composition, Charpy V-notch impact, and ultrasonic internal flaw detection",
      validity: "100% Heat Batch Traceability",
      standardCode: "EN 10204 3.1"
    },
    {
      title: "ASME Boiler & Pressure Vessel Code (Sec VIII & B16.5)",
      issuer: "American Society of Mechanical Engineers (ASME)",
      scope:
        "Manufacture of high-pressure weld neck flanges, blind flanges, and hydraulic valve bodies rated to 420 Bar",
      validity: "ASME 'U' Stamp Compliant",
      standardCode: "ASME B16.5"
    },
    {
      title: "NABL ISO/IEC 17025:2017 Calibration & Metrology",
      issuer: "National Accreditation Board for Testing and Calibration",
      scope:
        "Sub-micron calibration of Zeiss 3D CMMs, Mitutoyo surface roughness profilometers, and pneumatic bore gauges",
      validity: "Annual Calibration Standard Maintained",
      standardCode: "ISO/IEC 17025"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#20272b] text-[#f5f0e7]">
      <Navbar />

      <main className="flex-1 pt-28 pb-20 relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-14 relative z-10">
          <div className="flex items-center gap-2 text-xs text-[#aeb5b2] font-mono mb-8">
            <Link href="/" className="hover:text-[#e7a45c] transition-colors">
              Home
            </Link>
            <ChevronRight size={13} className="text-[#7e8989]" />
            <span className="text-[#f5f0e7] font-semibold">Quality & Certifications</span>
          </div>

          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#e7a45c]/30 text-[#e7a45c] text-xs font-mono mb-4 bg-white/5">
              <Cpu size={14} />
              <span className="uppercase tracking-[.14em]">Quality Assurance Architecture</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display tracking-tight text-[#f5f0e7]">
              International Engineering & <em className="text-[#e7a45c]">Metrology Standards.</em>
            </h1>
            <p className="text-sm sm:text-base text-[#aeb5b2] mt-4 leading-relaxed">
              Every production batch is audited against global automotive, aerospace, and high-pressure engineering benchmarks. Review audited compliance certificates and calibration records below.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((c) => (
              <div
                key={c.title}
                className="bg-[#171c1e] border border-white/10 p-6 flex flex-col justify-between hover:border-[#e7a45c]/60 transition-all space-y-4 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="size-11 border border-white/15 text-[#e7a45c] flex items-center justify-center bg-[#20272b]">
                      <Award size={20} />
                    </div>
                    <span className="text-[10px] font-mono px-2.5 py-1 bg-[#20272b] text-[#e7a45c] border border-[#e7a45c]/30">
                      {c.standardCode}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-semibold text-base text-[#f5f0e7] leading-snug group-hover:text-[#e7a45c] transition-colors">
                      {c.title}
                    </h3>
                    <span className="text-[11px] text-[#7e8989] font-mono block mt-1">
                      Auditor: {c.issuer}
                    </span>
                  </div>

                  <p className="text-xs text-[#aeb5b2] leading-relaxed">{c.scope}</p>

                  <div className="p-3 bg-[#20272b] border border-white/10 text-[#e7a45c] text-[11px] font-mono flex items-center gap-2">
                    <CheckCircle2 size={14} className="shrink-0" />
                    <span>{c.validity}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between font-mono">
                  <button
                    onClick={() => setActiveModal(c.title)}
                    className="text-xs font-semibold text-[#e7a45c] hover:underline flex items-center gap-1.5 transition-colors"
                  >
                    <FileDown size={14} />
                    <span>Preview Document</span>
                  </button>
                  <span className="text-[10px] text-[#7e8989]">PDF Spec</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Certificate Modal */}
      {activeModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#171c1e] max-w-md w-full p-6 border border-white/15 text-center">
            <div className="size-14 border border-[#e7a45c] text-[#e7a45c] flex items-center justify-center mx-auto mb-3 bg-[#20272b]">
              <ShieldCheck size={28} />
            </div>
            <h3 className="font-display text-2xl text-[#f5f0e7] mb-1">Quality Audit Document</h3>
            <p className="text-xs text-[#aeb5b2] mb-4 font-mono">{activeModal}</p>
            <div className="bg-[#20272b] p-4 border border-white/10 text-left text-xs space-y-1.5 mb-5 font-mono text-[#d2d1c9]">
              <div className="flex justify-between">
                <span className="text-[#7e8989]">Document ID:</span>
                <span className="text-[#f5f0e7]">CERT-2026-IND-884</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#7e8989]">Accreditation:</span>
                <span className="text-[#e7a45c]">IATF / AS9100D / NABL</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#7e8989]">Status:</span>
                <span className="text-[#e7a45c]">Verified for Aerospace & Automotive Tenders</span>
              </div>
            </div>
            <button
              onClick={() => setActiveModal(null)}
              className="w-full py-3 bg-[#e7a45c] hover:bg-[#f4b875] text-[#20272b] text-xs font-mono font-bold transition-all"
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
