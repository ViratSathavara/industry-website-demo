"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { useDemoState } from "@/lib/services/demo-state-context";
import {
  Search,
  ArrowRight,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Cpu,
  Plane,
  Truck,
  Flame,
  Zap,
  Bot,
  Factory
} from "lucide-react";

export default function IndustriesDirectoryPage() {
  const { setSelectedIndustryId } = useDemoState();
  const [searchQuery, setSearchQuery] = useState("");

  const sectors = [
    {
      id: "aerospace-defense",
      title: "Aerospace, Defense & Spacecraft",
      icon: Plane,
      badge: "AS9100D Certified",
      tagline: "5-Axis simultaneous thin-wall pocket milling & dynamic balanced rotors",
      description: "Machining titanium (Ti-6Al-4V), Inconel 718, and 7075-T6 aluminum structural brackets, fuel control valves, and closed turbine impellers with First Article Inspection Reports (AS9102 FAIR).",
      tolerances: "±0.005 mm (5 Microns)",
      sampleProducts: ["5-Axis Turbine Impellers", "Wing Rib Brackets", "Rocket Nozzle Inserts"],
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "automotive-drivetrain",
      title: "Automotive Transmission & Drivetrain",
      icon: Truck,
      badge: "IATF 16949 / PPAP L3",
      tagline: "High-volume CNC turned & induction hardened transmission shafts & gears",
      description: "Serving Tier-1 commercial vehicle OEMs with precision spline-hobbed shafts (DIN 5480), planetary gear carriers, and steering knuckles manufactured with zero-defect SPC statistical controls.",
      tolerances: "Runout < 0.004 mm",
      sampleProducts: ["Induction Spline Shafts", "Planetary Carriers", "Steering Knuckles"],
      image: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "oil-gas-flow",
      title: "Oil, Gas & High-Pressure Fluid Skids",
      icon: Flame,
      badge: "ASME B16.5 & NACE",
      tagline: "ASME Class 300 to 2500 forged weldneck flanges & cryogenic valve bodies",
      description: "Precision CNC face turning with serrated spiral phonographic finish (125-250 Ra). Dual certified ASTM A182 F316L and Duplex 2205 with complete heat batch chemical spectroscopy.",
      tolerances: "±0.05 mm on PCD",
      sampleProducts: ["Weldneck Flanges Class 600", "Cryogenic Valve Bodies", "Orifice Meter Runs"],
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "hydraulics-fluid-power",
      title: "Fluid Power & Hydraulic Systems",
      icon: Cpu,
      badge: "420 Bar Proof Tested",
      tagline: "Gun-drilled solid ductile iron & aluminum hydraulic manifold blocks",
      description: "Deep hole cross-passage gun drilling with thermal deburring (TEM) and ISO 4406 particulate flushing. Standard cavity tooling for SUN, Bosch Rexroth, and Parker cartridge valves.",
      tolerances: "Zero Cross-Port Leakage",
      sampleProducts: ["4-Port Manifold Blocks", "Proportional Valve Trims", "High-Pressure Cartridges"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "power-heavy-machinery",
      title: "Power Generation & Heavy Machine Tools",
      icon: Zap,
      badge: "Stress-Relieved 600°C",
      tagline: "Thermal stress-relieved gantry bases & heavy split bearing housings",
      description: "Structural fabrication and 5-face CNC gantry milling for machine tool beds, hydraulic press frames, and split trunnion bearing housings up to 50 metric tons.",
      tolerances: "0.03 mm Flatness",
      sampleProducts: ["Gantry Machine Base Frames", "Split Pillow Housings", "Modular Tombstones"],
      image: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "robotics-automation",
      title: "Robotics & Industrial Automation",
      icon: Bot,
      badge: "Sub-Micron Runout",
      tagline: "Articulated robot wrist output hubs & harmonic reducer flanges",
      description: "Manufactured from hardened 42CrMo4 alloy steel with CNC cylindrical grinding and CBN tooling. ISO 9409-1 compliant mounting interfaces with axial runout under 0.003mm.",
      tolerances: "< 0.003 mm Axial Runout",
      sampleProducts: ["6th-Axis Reducer Hubs", "Precision Ground Spindles", "Robotic Tool Changers"],
      image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const filteredSectors = sectors.filter(
    (s) =>
      searchQuery === "" ||
      s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.sampleProducts.some((p) => p.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#fafaf8]">
      <Navbar />

      <main className="flex-1 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-1.5 text-xs text-stone-500 mb-6">
            <Link href="/" className="hover:text-stone-900">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-stone-900 font-semibold">Specialized Industry Applications</span>
          </div>

          {/* Directory Header */}
          <div className="mb-10 max-w-3xl">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-xs font-bold uppercase tracking-widest text-[#d4560a]">
                Contract Precision Machining
              </span>
              <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 text-[10px] font-bold border border-emerald-200">
                140+ CNC & Turning Centers
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
              Specialized Machining Cells & Industry Applications
            </h1>
            <p className="text-sm text-stone-600 mt-2 leading-relaxed">
              INDUSTRIA operates dedicated machining cells configured for high-tolerance OEM supply across aerospace, commercial vehicle transmissions, high-pressure energy piping, and robotics automation.
            </p>
          </div>

          {/* Search bar */}
          <div className="bg-white p-4 rounded-xl border border-stone-200 mb-8 shadow-xs">
            <div className="relative w-full">
              <Search className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search applications, standards (e.g. AS9100D, DIN 5480, ASME B16.5, ISO 9409-1)..."
                className="w-full bg-stone-50 pl-9 pr-4 py-2 border border-stone-300 rounded-lg text-xs text-stone-900 placeholder:text-stone-400 focus:outline-none focus:bg-white focus:border-[#d4560a]"
              />
            </div>
          </div>

          {/* Industry Cells Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSectors.map((sector) => {
              const Icon = sector.icon;

              return (
                <div
                  key={sector.id}
                  className="bg-white rounded-2xl border border-stone-200 overflow-hidden flex flex-col justify-between hover:shadow-xl hover:border-primary/40 transition-all duration-300 group"
                >
                  <div>
                    {/* Header Image */}
                    <div className="relative h-48 w-full bg-stone-900 overflow-hidden">
                      <Image
                        src={sector.image}
                        alt={sector.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent" />
                      <span className="absolute top-3 right-3 text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500 text-white shadow-xs">
                        {sector.badge}
                      </span>
                      <div className="absolute bottom-3 left-3 text-white flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-orange-600/90 text-white flex items-center justify-center">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-bold tracking-tight">
                          {sector.tolerances}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 space-y-3">
                      <h3 className="font-bold text-base text-stone-900 group-hover:text-primary transition-colors leading-snug">
                        {sector.title}
                      </h3>

                      <p className="text-xs text-[#d4560a] font-semibold leading-relaxed">
                        {sector.tagline}
                      </p>

                      <p className="text-xs text-stone-600 leading-relaxed">
                        {sector.description}
                      </p>

                      {/* Sample Products */}
                      <div className="pt-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 block mb-1.5">
                          Machined Components:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {sector.sampleProducts.map((p) => (
                            <span
                              key={p}
                              className="text-[11px] bg-stone-100 text-stone-700 px-2 py-0.5 rounded font-medium border border-stone-200"
                            >
                              {p}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="p-5 pt-0 border-t border-stone-100 mt-4 flex items-center justify-between gap-3">
                    <Link
                      href="/products"
                      className="text-xs font-semibold text-stone-700 hover:text-stone-900 flex items-center gap-1"
                    >
                      <span>Explore Parts</span>
                      <ArrowRight className="w-3.5 h-3.5 text-stone-400" />
                    </Link>

                    <Link
                      href="/request-quote"
                      className="px-3.5 py-1.5 bg-[#d4560a] hover:bg-[#b84605] text-white text-xs font-semibold rounded-lg shadow-xs transition-colors"
                    >
                      Upload CAD RFQ
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
