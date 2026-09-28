"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Droplets, Waves, Building2, Factory, Flame, Tractor } from "lucide-react";

export const ApplicationsSection: React.FC = () => {
  const applications = [
    {
      id: "agri-irrigation",
      title: "Agriculture & Borewell Irrigation",
      icon: Tractor,
      image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=600&q=80",
      description: "Submersible pump motor stators, rewindable copper rotors, and wear-resistant bronze impellers engineered for 24/7 continuous duty in deep groundwater irrigation.",
      products: ["V4/V6 Submersible Motors", "Bronze Impellers", "Hard-Chrome Shafts"]
    },
    {
      id: "municipal-water",
      title: "Municipal Water Supply & City Utilities",
      icon: Droplets,
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80",
      description: "High-capacity monoblock pump casings, ASME stainless steel pipe flanges, and Silicon Carbide mechanical seals for high-head drinking water distribution.",
      products: ["Cast Iron Volute Casings", "Mechanical Seals", "Pipe Weldneck Flanges"]
    },
    {
      id: "wastewater-mining",
      title: "Wastewater, Sewage & Dewatering",
      icon: Waves,
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80",
      description: "Non-clogging open impellers and slurry pump motor casings built to withstand quartz sand, solids, abrasive slurries, and aggressive mine drainage.",
      products: ["Slurry Pump Impellers", "Abrasion-Resistant Bowls", "IP68 Enclosures"]
    },
    {
      id: "hvac-cooling",
      title: "Commercial HVAC & Cooling Towers",
      icon: Building2,
      image: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80",
      description: "Quiet-running centrifugal circulation pump rotors, B5 cast iron end shields, and high-efficiency CRGO stator cores for continuous chilled water loops.",
      products: ["CRGO Stator Cores", "B5 Drive End Shields", "Dynamically Balanced Rotors"]
    },
    {
      id: "firefighting-booster",
      title: "Firefighting & High-Rise Pressure Boosting",
      icon: Flame,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80",
      description: "Instant-start high-pressure multistage pump bowls, forged stainless flanges, and high-torque motor couplings tested to 25 Bar pressure.",
      products: ["Multistage Pump Bowls", "High-Pressure Flanges", "Spline Couplings"]
    },
    {
      id: "industrial-fluid",
      title: "Chemical & Industrial Process Transfer",
      icon: Factory,
      image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=600&q=80",
      description: "Corrosion-resistant SS316L and Hastelloy pump bodies, Viton cartridge mechanical seals, and hydraulic valve manifolds for aggressive chemical handling.",
      products: ["SS316L Pump Casings", "SiC/SiC Mechanical Seals", "Hydraulic Manifold Blocks"]
    }
  ];

  return (
    <section className="bg-[#171c1e] text-[#f5f0e7] px-5 py-24 md:px-10 md:py-32 lg:px-14 border-b border-white/10">
      <div className="mx-auto max-w-[1440px]">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-8 mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="h-px w-8 bg-[#e7a45c]" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#e7a45c]">
                Sectors & Deployments / 09
              </span>
            </div>
            <h2 className="font-display text-[clamp(2.6rem,5vw,5rem)] leading-[.92] tracking-[-.04em] text-[#f5f0e7]">
              Engineered across <em className="text-[#e7a45c]">mission-critical sectors.</em>
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-[#aeb5b2] leading-relaxed">
            Our precision industrial motor and fluid equipment components power agricultural irrigation, municipal water grids, high-rise buildings, and processing plants.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {applications.map((app) => {
            const Icon = app.icon;
            return (
              <div
                key={app.id}
                className="bg-[#20272b] border border-white/10 hover:border-[#e7a45c]/50 transition-all flex flex-col justify-between overflow-hidden group shadow-xl"
              >
                <div>
                  <div className="relative h-44 w-full overflow-hidden bg-[#171c1e]">
                    <Image
                      src={app.image}
                      alt={app.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-75 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#20272b] via-transparent to-transparent opacity-90" />
                    <div className="absolute top-3 left-3 bg-[#171c1e]/90 p-2 border border-white/15 text-[#e7a45c]">
                      <Icon size={18} />
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="text-lg font-bold font-heading text-[#f5f0e7] group-hover:text-[#e7a45c] transition-colors">
                      {app.title}
                    </h3>
                    <p className="text-xs text-[#aeb5b2] leading-relaxed">
                      {app.description}
                    </p>

                    <div className="pt-2">
                      <div className="text-[10px] font-mono text-[#7e8989] uppercase mb-1.5">Key Components:</div>
                      <div className="flex flex-wrap gap-1.5 font-mono text-[10px]">
                        {app.products.map((p) => (
                          <span key={p} className="px-2 py-0.5 bg-white/5 border border-white/10 text-[#d8d7d0] rounded">
                            {p}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-white/5 mt-4">
                  <Link
                    href={`/applications#${app.id}`}
                    className="flex items-center justify-between text-xs font-mono font-bold text-[#e7a45c] hover:underline pt-3"
                  >
                    <span>View Technical Specifications</span>
                    <ArrowUpRight size={13} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
