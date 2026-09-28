"use client";

import React from "react";
import Link from "next/link";
import { ShieldCheck, Award, CheckCircle2, FileCheck, Layers, ArrowUpRight } from "lucide-react";

export const CertificationsSection: React.FC = () => {
  const certs = [
    {
      title: "ISO 9001:2015 Quality Management",
      category: "Quality Assurance System",
      description: "Certified manufacturing procedures covering precision CNC machining, stator coil winding, dynamic balancing, and assembly inspection.",
      badge: "ISO Standard",
      icon: ShieldCheck
    },
    {
      title: "ISI / BIS Water Motor Standards",
      category: "Motor Efficiency & Safety",
      description: "Conforming to Indian Standard specifications for deep-well submersible pumps, openwell units, and agricultural monoblock motors.",
      badge: "National Standard",
      icon: Award
    },
    {
      title: "EN 10204 Type 3.1 Traceability",
      category: "Raw Material Integrity",
      description: "Every steel billet, bronze ingot, and CRGO electrical coil comes with certified chemical spectrometer and tensile mechanical test data.",
      badge: "Material Traceability",
      icon: Layers
    },
    {
      title: "ISO 1940 Grade G1.0 Balancing",
      category: "Rotational Dynamics",
      description: "Zero-vibration high-speed rotational verification on automated two-plane Schenck balancing machines up to 24,000 RPM.",
      badge: "Dynamic Balancing",
      icon: FileCheck
    }
  ];

  return (
    <section className="bg-[#f5f0e7] text-[#20272b] px-5 py-24 md:px-10 md:py-32 lg:px-14 border-b border-[#d0c8bd]">
      <div className="mx-auto max-w-[1440px]">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#d0c8bd] pb-8 mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="h-px w-8 bg-[#bb5b2c]" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#bb5b2c]">
                Quality Assurance & Standards / 08
              </span>
            </div>
            <h2 className="font-display text-[clamp(2.6rem,5vw,5rem)] leading-[.92] tracking-[-.04em] text-[#20272b]">
              Zero defect <em className="text-[#bb5b2c]">metrology standards.</em>
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-[#687173] leading-relaxed">
            Strict calibration protocols, CMM verification, and hydrostatic pressure testing ensuring that every component delivered operates reliably under extreme conditions.
          </p>
        </div>

        {/* Cert Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certs.map((c) => {
            const Icon = c.icon;
            return (
              <div
                key={c.title}
                className="p-6 bg-[#eee8dd] border border-[#cfc5b5] flex flex-col justify-between space-y-4 hover:border-[#bb5b2c] transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono font-bold text-[#bb5b2c] bg-white px-2 py-0.5 border border-[#cfc5b5]">
                      {c.badge}
                    </span>
                    <Icon size={20} className="text-[#bb5b2c]" />
                  </div>
                  <div className="text-[11px] font-mono text-[#687173] uppercase tracking-wider">
                    {c.category}
                  </div>
                  <h3 className="text-base font-bold text-[#20272b] mt-1 font-heading">
                    {c.title}
                  </h3>
                  <p className="text-xs text-[#687173] mt-2 leading-relaxed">
                    {c.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#cfc5b5] text-[11px] font-mono text-[#bb5b2c] flex items-center justify-between">
                  <span>Inspection Ready</span>
                  <CheckCircle2 size={13} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Quality Lab Link */}
        <div className="mt-8 text-center">
          <Link
            href="/certifications"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#bb5b2c] hover:underline"
          >
            <span>View Full Quality Testing Protocols & CMM Laboratory</span>
            <ArrowUpRight size={13} />
          </Link>
        </div>
      </div>
    </section>
  );
};
