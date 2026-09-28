"use client";

import React from "react";

export const GrowthStrip: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "Offline Shop",
      desc: "Manual calls, WhatsApp threads & loose paper job cards."
    },
    {
      num: "02",
      title: "Digital Specs",
      desc: "Searchable 3D CAD models, alloy grades & ISO standards."
    },
    {
      num: "03",
      title: "OEM Discovery",
      desc: "Found by Tier-1 aerospace & automotive buyers 24/7."
    },
    {
      num: "04",
      title: "CAD Inbound",
      desc: "Direct STEP, IGES & DWG drawing feasibility intake."
    },
    {
      num: "05",
      title: "6-Step RFQ",
      desc: "Structured batch tiers, delivery dates & tolerances."
    },
    {
      num: "06",
      title: "2-Hour Quote",
      desc: "Automated CAM toolpath feasibility & CPQ cost breakdown."
    },
    {
      num: "07",
      title: "Buyer Portal",
      desc: "Live CNC spindle telemetry, order status & mill certs."
    },
    {
      num: "08",
      title: "Zeiss Metrology",
      desc: "Sub-micron CMM inspection logs & EN 10204 3.1 MTCs."
    },
    {
      num: "09",
      title: "OEM Contracts",
      desc: "High-margin recurring annual framework call-offs."
    }
  ];

  return (
    <section className="border-b border-[#d7d0c5] bg-[#ece8df]">
      <div className="mx-auto max-w-[1440px] px-5 py-8 md:px-10 lg:px-14 border-b border-[#d7d0c5]">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="eyebrow text-[#bb5b2c]">Digital Transformation Trajectory</span>
            <h2 className="mt-2 font-display text-2xl sm:text-3xl text-[#20272b]">
              From Traditional Machine Shop to <em className="text-[#bb5b2c]">Connected Digital Enterprise.</em>
            </h2>
          </div>
          <p className="text-xs text-[#667073] max-w-md">
            The 9 sequential milestones that turn offline shop-floor friction into automated Tier-1 procurement revenue.
          </p>
        </div>
      </div>

      <div className="mx-auto grid max-w-[1440px] grid-cols-2 divide-x divide-y divide-[#d7d0c5] sm:grid-cols-3 lg:grid-cols-9">
        {steps.map((st) => (
          <div key={st.num} className="p-4 sm:p-5">
            <div className="mb-3 font-mono text-[10px] text-[#bb5b2c] font-bold">{st.num}</div>
            <h3 className="text-xs font-semibold uppercase tracking-[.08em] text-[#20272b]">
              {st.title}
            </h3>
            <p className="mt-1.5 text-[11px] leading-4 text-[#667073]">{st.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
