"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { useDemoState } from "@/lib/services/demo-state-context";
import { UserRole } from "@/lib/types";
import {
  User,
  Shield,
  Briefcase,
  Wrench,
  ChevronRight,
  Sparkles,
  ArrowRight,
  Lock
} from "lucide-react";

export default function DemoLoginPage() {
  const router = useRouter();
  const { currentUserRole, setCurrentUserRole } = useDemoState();
  const [selectedRole, setSelectedRole] = useState<UserRole>(currentUserRole);

  const demoAccounts: {
    role: UserRole;
    name: string;
    email: string;
    title: string;
    description: string;
    destination: string;
    icon: any;
    badge: string;
  }[] = [
    {
      role: "Customer",
      name: "Rajeshbhai Patel",
      email: "customer@demo.com",
      title: "Buyer / Customer Persona",
      description: "Managing Director at Shree Shakti Engineering. Track RFQs, accept quotations, view order timelines, and download CAD drawings.",
      destination: "/portal/dashboard",
      icon: User,
      badge: "Customer Portal"
    },
    {
      role: "Admin",
      name: "Suresh Prajapati",
      email: "admin@demo.com",
      title: "Sales Admin / System Commander",
      description: "Full operational permissions across all CRM pipelines, product catalogue management, quotation generator, and appointments.",
      destination: "/admin/dashboard",
      icon: Shield,
      badge: "Admin Command"
    },
    {
      role: "Owner",
      name: "Rameshbhai Patel",
      email: "owner@demo.com",
      title: "Business Owner / Executive",
      description: "Executive high-level summary of lead sources, digital conversion rates, revenue pipeline, top products, and territorial growth.",
      destination: "/admin/dashboard?view=owner",
      icon: Briefcase,
      badge: "Owner Executive View"
    },
    {
      role: "Sales Executive",
      name: "Vikram Mehta",
      email: "sales@demo.com",
      title: "Sales Manager / Frontline Rep",
      description: "Optimized daily dashboard: active enquiries, urgent follow-ups, pending RFQs, and customer communication threads.",
      destination: "/admin/leads",
      icon: Sparkles,
      badge: "Sales Pipeline"
    },
    {
      role: "Operations",
      name: "Kailash Solanki",
      email: "ops@demo.com",
      title: "Operations & Production Head",
      description: "Post-sale manufacturing pipeline: job card status, CNC machining progress, hydro testing approvals, and dispatch milestones.",
      destination: "/admin/orders",
      icon: Wrench,
      badge: "Operations Pipeline"
    }
  ];

  const handleLogin = (account: (typeof demoAccounts)[0]) => {
    setCurrentUserRole(account.role);
    router.push(account.destination);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#20272b] text-[#f5f0e7]">
      <Navbar />

      <main className="flex-1 pt-28 pb-20 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 relative z-10">
          <div className="flex items-center gap-2 text-xs text-[#aeb5b2] font-mono mb-8">
            <Link href="/" className="hover:text-[#e7a45c] transition-colors">Home</Link>
            <ChevronRight size={13} className="text-[#7e8989]" />
            <span className="text-[#f5f0e7] font-semibold">Demo Role Selector</span>
          </div>

          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="eyebrow text-[#e7a45c]">
              Interactive Simulation Access
            </span>
            <h1 className="text-4xl sm:text-5xl font-display tracking-tight text-[#f5f0e7] mt-2">
              Select Your Demo <em className="text-[#e7a45c]">Persona.</em>
            </h1>
            <p className="text-xs sm:text-sm text-[#aeb5b2] mt-3 leading-relaxed">
              Experience the platform from either the <strong>Buyer Customer View</strong> or the factory&apos;s <strong>Internal CRM / Operations Control Center</strong>.
            </p>
          </div>

          {/* Role Cards Grid */}
          <div className="space-y-4">
            {demoAccounts.map((acc) => {
              const Icon = acc.icon;
              const isSelected = currentUserRole === acc.role;

              return (
                <div
                  key={acc.role}
                  className={`bg-[#171c1e] p-6 border transition-all shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 cursor-pointer ${
                    isSelected
                      ? "border-[#e7a45c] bg-[#20272b]"
                      : "border-white/10 hover:border-[#e7a45c]/50"
                  }`}
                  onClick={() => handleLogin(acc)}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#20272b] border border-white/10 flex items-center justify-center shrink-0 text-[#e7a45c]">
                      <Icon size={22} />
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono font-bold text-[#e7a45c] uppercase tracking-wider">
                          {acc.badge}
                        </span>
                        {isSelected && (
                          <span className="text-[10px] font-mono px-2 py-0.2 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                            CURRENT ACTIVE
                          </span>
                        )}
                      </div>
                      <h2 className="text-lg font-semibold text-[#f5f0e7]">
                        {acc.title}
                      </h2>
                      <p className="text-xs text-[#aeb5b2] max-w-xl leading-relaxed">
                        {acc.description}
                      </p>
                      <div className="text-[11px] font-mono text-[#7e8989] pt-1">
                        Mock Persona: <strong className="text-[#f5f0e7]">{acc.name}</strong> ({acc.email})
                      </div>
                    </div>
                  </div>

                  <div className="shrink-0 self-end sm:self-center">
                    <button
                      className="px-5 py-2.5 bg-[#e46e2e] hover:bg-[#bb5b2c] text-[#f5f0e7] text-xs font-semibold uppercase tracking-wider flex items-center gap-2 transition-colors shadow-md"
                    >
                      <span>Simulate Login</span>
                      <ArrowRight size={13} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 p-5 bg-[#171c1e] border border-white/10 text-center text-xs text-[#aeb5b2] font-mono">
            <Lock size={14} className="inline mr-2 text-[#e7a45c]" />
            Session state is stored locally for presentation purposes. Switch roles anytime to test permissions.
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
