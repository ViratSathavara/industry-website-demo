import React from "react";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { HeroSection } from "@/components/marketing/HeroSection";
import { GrowthStrip } from "@/components/marketing/GrowthStrip";
import { IndustryExplorer } from "@/components/marketing/IndustryExplorer";
import { ProductDiscoverySection } from "@/components/marketing/ProductDiscoverySection";
import { BeforeAfterSection } from "@/components/marketing/BeforeAfterSection";
import { ProcessTimelineSection } from "@/components/marketing/ProcessTimelineSection";
import { CapabilitiesSection } from "@/components/marketing/CapabilitiesSection";
import { LeadCaptureFormSection } from "@/components/marketing/LeadCaptureFormSection";
import { TestimonialsSection } from "@/components/marketing/TestimonialsSection";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fafaf8]">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <GrowthStrip />
        <IndustryExplorer />
        <ProductDiscoverySection />
        <BeforeAfterSection />
        <ProcessTimelineSection />
        <CapabilitiesSection />
        <LeadCaptureFormSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
}
