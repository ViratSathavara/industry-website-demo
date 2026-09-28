"use client";

import React from "react";
import { useDemoState } from "@/lib/services/demo-state-context";

export const GrowthStrip: React.FC = () => {
  const { t } = useDemoState();

  const steps = [
    { num: "01", title: t.step01Title, desc: t.step01Desc },
    { num: "02", title: t.step02Title, desc: t.step02Desc },
    { num: "03", title: t.step03Title, desc: t.step03Desc },
    { num: "04", title: t.step04Title, desc: t.step04Desc },
    { num: "05", title: t.step05Title, desc: t.step05Desc },
    { num: "06", title: t.step06Title, desc: t.step06Desc },
    { num: "07", title: t.step07Title, desc: t.step07Desc },
    { num: "08", title: t.step08Title, desc: t.step08Desc },
    { num: "09", title: t.step09Title, desc: t.step09Desc },
  ];

  return (
    <section className="border-b border-[#d7d0c5] bg-[#ece8df]">
      <div className="mx-auto max-w-[1440px] px-5 py-8 md:px-10 lg:px-14 border-b border-[#d7d0c5]">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#bb5b2c]">
              {t.growthStripLabel}
            </span>
            <h2 className="mt-2 font-display text-2xl sm:text-3xl text-[#20272b]">
              {t.growthStripHeadline}{" "}
              <em className="text-[#bb5b2c]">{t.growthStripHeadlineEm}</em>
            </h2>
          </div>
          <p className="text-xs text-[#667073] max-w-md">{t.growthStripDesc}</p>
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
