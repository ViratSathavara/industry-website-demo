import React from "react";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { HeroSection } from "@/components/marketing/HeroSection";
import { GrowthStrip } from "@/components/marketing/GrowthStrip";
import { FeaturedProductSection } from "@/components/marketing/FeaturedProductSection";
import { ProductDiscoverySection } from "@/components/marketing/ProductDiscoverySection";
import { ApplicationsSection } from "@/components/marketing/ApplicationsSection";
import { ManufacturingProcessSection } from "@/components/marketing/ManufacturingProcessSection";
import { WhyChooseSection } from "@/components/marketing/WhyChooseSection";
import { CertificationsSection } from "@/components/marketing/CertificationsSection";
import { CapabilitiesSection } from "@/components/marketing/CapabilitiesSection";
import { TestimonialsTrustSection } from "@/components/marketing/TestimonialsTrustSection";
import { LeadCaptureFormSection } from "@/components/marketing/LeadCaptureFormSection";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f5f0e7] text-[#20272b]">
      <Navbar />
      <main className="flex-1">
        {/* Above-the-fold hero */}
        <HeroSection />

        {/* Scrolling stats ticker */}
        <GrowthStrip />

        {/* Editorial spotlight on V6 Submersible Motor */}
        <FeaturedProductSection />

        {/* Browse by category */}
        <ProductDiscoverySection />

        {/* Where our parts are used */}
        <ApplicationsSection />

        {/* 8-step factory lifecycle */}
        <ManufacturingProcessSection />

        {/* 5 buyer-outcome value props */}
        <WhyChooseSection />

        {/* ISO/ISI/EN certifications */}
        <CertificationsSection />

        {/* CNC machinery & capabilities */}
        <CapabilitiesSection />

        {/* Buyer persona testimonials */}
        <TestimonialsTrustSection />

        {/* RFQ / enquiry form */}
        <LeadCaptureFormSection />
      </main>
      <Footer />
    </div>
  );
}
