import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Factory, Droplets, Building2, Tractor, Zap, Waves, Ship } from "lucide-react";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";

export const metadata = {
  title: "Applications | INDUSTRIA Motor Parts",
  description:
    "Industrial water motor parts and precision components for submersible pumps, agricultural irrigation, municipal water supply, HVAC, mining, marine, and fire-fighting systems."
};

const applications = [
  {
    id: "agricultural",
    title: "Agricultural Irrigation",
    subtitle: "Submersible pump systems for deep borewell & drip irrigation",
    icon: Tractor,
    color: "#4caf50",
    bg: "from-green-950/60 to-green-900/30",
    border: "border-green-500/20",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&auto=format&fit=crop&q=80",
    parts: ["V6/V8 Submersible Motors", "Bronze Impellers", "SS410 Shafts", "Mechanical Seals"],
    stats: { value: "1.2M+", label: "Pumps Deployed" },
    desc: "Our V6 and V8 submersible motor stacks power borewell pumps from 6″ to 12″ diameter, with efficiency ratings meeting IS 8034 standards. Bronze impellers and volute casings resist the corrosive minerals found in agricultural groundwater."
  },
  {
    id: "municipal",
    title: "Municipal Water Supply",
    subtitle: "High-capacity pumping for town water distribution & treatment",
    icon: Building2,
    color: "#2196f3",
    bg: "from-blue-950/60 to-blue-900/30",
    border: "border-blue-500/20",
    image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=600&auto=format&fit=crop&q=80",
    parts: ["CRGO Stator Cores", "B5 End Shields", "IP68 Terminal Boxes", "ASME Flanges"],
    stats: { value: "500+", label: "Municipalities Served" },
    desc: "Municipalities demand continuous, reliable pumping over 20-year horizons. Our CRGO stator cores reduce iron losses by 35%, and our IP68-rated terminal boxes ensure electrical safety even in flooded pump sumps."
  },
  {
    id: "industrial",
    title: "Industrial Process Cooling",
    subtitle: "Precision coolant circulation for CNC machining & manufacturing",
    icon: Factory,
    color: "#e7a45c",
    bg: "from-amber-950/60 to-amber-900/30",
    border: "border-amber-500/20",
    image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=600&auto=format&fit=crop&q=80",
    parts: ["5-Axis Impellers", "SiC Mechanical Seals", "Pinion Gear Sets", "Finned Motor Casings"],
    stats: { value: "140+", label: "CNC Plants Supplied" },
    desc: "High-speed coolant pumps in CNC machining centres need impellers that balance at up to 6000 RPM without cavitation. Our 5-axis precision-milled impellers achieve residual imbalances below G6.3."
  },
  {
    id: "hvac",
    title: "HVAC & Chiller Systems",
    subtitle: "Circulation pumps for large-scale cooling towers & chillers",
    icon: Zap,
    color: "#9c27b0",
    bg: "from-purple-950/60 to-purple-900/30",
    border: "border-purple-500/20",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&auto=format&fit=crop&q=80",
    parts: ["EV Rotor Shafts", "Finned Aluminum Casings", "Bronze Impellers", "Mechanical Seals"],
    stats: { value: "60+", label: "HVAC OEMs Supplied" },
    desc: "Variable-frequency HVAC pumps demand rotors that maintain tight air-gap tolerances across wide speed ranges. Our EV-grade rotor shafts feature ground journals to IT6 tolerance for low vibration at partial load."
  },
  {
    id: "firefighting",
    title: "Fire-Fighting Systems",
    subtitle: "UL/FM listed pump components for fire protection networks",
    icon: Waves,
    color: "#f44336",
    bg: "from-red-950/60 to-red-900/30",
    border: "border-red-500/20",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&auto=format&fit=crop&q=80",
    parts: ["Volute Casings", "SS410 Drive Shafts", "ASME Flanges", "B5 End Shields"],
    stats: { value: "200+", label: "Fire Systems Equipped" },
    desc: "Fire pumps must deliver rated flow within 10 seconds and sustain peak pressure for 4 hours. Our volute casings are hydrostatically tested to 1.5× working pressure, and flanges conform to ASME B16.5 Class 150."
  },
  {
    id: "marine",
    title: "Marine & Offshore",
    subtitle: "Seawater-resistant pump components for vessels & platforms",
    icon: Ship,
    color: "#009688",
    bg: "from-teal-950/60 to-teal-900/30",
    border: "border-teal-500/20",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&auto=format&fit=crop&q=80",
    parts: ["Naval Brass Impellers", "Duplex SS Shafts", "IP68 Terminal Boxes", "Mechanical Seals"],
    stats: { value: "40+", label: "Vessel Operators" },
    desc: "Saltwater environments corrode standard bronze within months. We offer naval brass (CW712R) impellers and duplex stainless steel shafts with PVDF-coated surfaces for offshore ballast and bilge pump applications."
  }
];

export default function ApplicationsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f5f0e7] text-[#20272b]">
      <Navbar />
      <main className="flex-1 pt-[66px]">

        {/* Hero Banner */}
        <section className="relative bg-[#171c1e] text-[#f4efe5] overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1565689157206-0fddef7589a2?w=1600&auto=format&fit=crop&q=60')] bg-cover bg-center opacity-10" />
          <div className="relative mx-auto max-w-[1440px] px-4 md:px-8 lg:px-12 py-20 md:py-28">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-[#e7a45c]/10 border border-[#e7a45c]/25 mb-6">
                <Droplets size={13} className="text-[#e7a45c]" />
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#e7a45c]">Applications</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight mb-5">
                Where Our Parts Power
                <span className="text-[#e7a45c]"> Industry</span>
              </h1>
              <p className="text-[#9fa8a6] text-base md:text-lg leading-relaxed max-w-xl mb-8">
                From deep-borewell agricultural pumps to offshore marine systems, INDUSTRIA motor parts
                are engineered for the harshest fluid-handling environments across six key sectors.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/request-quote"
                  className="inline-flex items-center gap-2 bg-[#e46e2e] hover:bg-[#f07d3e] text-white px-6 py-3 text-sm font-bold uppercase tracking-wider rounded-sm transition-all shadow-lg"
                >
                  <span>Request Quote for Your Application</span>
                  <ArrowUpRight size={15} />
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 border border-white/20 bg-white/5 backdrop-blur-sm text-[#d8d7d0] hover:text-white px-6 py-3 text-sm font-medium rounded-sm transition-all"
                >
                  Browse All Parts
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Application Cards Grid */}
        <section className="py-16 md:py-24 px-4 md:px-8 lg:px-12">
          <div className="mx-auto max-w-[1440px]">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Six Sectors, One Manufacturing Partner</h2>
              <p className="text-[#5a6666] max-w-xl mx-auto text-sm">
                Each sector demands different material grades, tolerances, and certifications.
                We supply components matched to your exact operating conditions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {applications.map((app) => {
                const Icon = app.icon;
                return (
                  <div
                    key={app.id}
                    className={`group bg-white/60 backdrop-blur-md border ${app.border} rounded-xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col`}
                  >
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={app.image}
                        alt={app.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        unoptimized
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${app.bg}`} />
                      <div className="absolute bottom-3 left-4 flex items-center gap-2">
                        <span
                          className="grid size-8 place-items-center rounded-sm"
                          style={{ background: `${app.color}22`, border: `1px solid ${app.color}44` }}
                        >
                          <Icon size={16} style={{ color: app.color }} />
                        </span>
                        <div>
                          <div className="text-white text-xs font-bold">{app.stats.value}</div>
                          <div className="text-white/60 text-[9px] uppercase tracking-wider">{app.stats.label}</div>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 flex flex-col flex-1">
                      <h3 className="font-bold text-[#20272b] text-base mb-1">{app.title}</h3>
                      <p className="text-[10px] uppercase tracking-wider text-[#7e8989] font-mono mb-3">{app.subtitle}</p>
                      <p className="text-sm text-[#4a5555] leading-relaxed mb-4 flex-1">{app.desc}</p>

                      {/* Parts list */}
                      <div className="border-t border-[#20272b]/8 pt-3">
                        <div className="text-[10px] font-mono uppercase tracking-wider text-[#7e8989] mb-2">Key Components</div>
                        <div className="flex flex-wrap gap-1.5">
                          {app.parts.map((part) => (
                            <span
                              key={part}
                              className="text-[10px] px-2 py-0.5 rounded-sm bg-[#20272b]/6 border border-[#20272b]/10 text-[#20272b]/70 font-mono"
                            >
                              {part}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="bg-[#20272b] py-14 px-4 md:px-8 lg:px-12 border-t border-white/8">
          <div className="mx-auto max-w-[1440px] flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold text-[#f4efe5] mb-2">Don&apos;t see your application?</h2>
              <p className="text-[#9fa8a6] text-sm max-w-md">
                We manufacture custom pump components for OEMs across all fluid-handling sectors.
                Send us your drawings and we&apos;ll respond with a quote within 24 hours.
              </p>
            </div>
            <Link
              href="/request-quote"
              className="shrink-0 inline-flex items-center gap-2 bg-[#e46e2e] hover:bg-[#f07d3e] text-white px-8 py-4 text-sm font-bold uppercase tracking-wider rounded-sm transition-all shadow-xl shadow-[#e46e2e]/20"
            >
              <span>Submit Custom RFQ</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
