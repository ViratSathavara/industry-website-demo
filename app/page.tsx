import React from "react";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { HeroSection } from "@/components/marketing/HeroSection";
import { GrowthStrip } from "@/components/marketing/GrowthStrip";
import { BeforeAfterSection } from "@/components/marketing/BeforeAfterSection";
import { IndustryExplorer } from "@/components/marketing/IndustryExplorer";
import { ProductDiscoverySection } from "@/components/marketing/ProductDiscoverySection";
import { CapabilitiesSection } from "@/components/marketing/CapabilitiesSection";
import { LeadCaptureFormSection } from "@/components/marketing/LeadCaptureFormSection";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f5f0e7] text-[#20272b]">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <GrowthStrip />
        <BeforeAfterSection />
        <IndustryExplorer />
        <ProductDiscoverySection />
        <CapabilitiesSection />
        <LeadCaptureFormSection />
      </main>
      <Footer />
    </div>
  );
}
