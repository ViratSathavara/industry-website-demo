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
  CheckCircle2,
  Lock,
  Building
} from "lucide-react";

export default function DemoLoginPage() {
  const router = useRouter();
  const { currentUserRole, setCurrentUserRole, currentCustomer } = useDemoState();
  const [selectedRole, setSelectedRole] = useState<UserRole>(currentUserRole);

  const demoAccounts: {
    role: UserRole;
    name: string;
    email: string;
    title: string;
    description: string;
    destination: string;
    icon: any;
    color: string;
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
      color: "border-blue-300 bg-blue-50/50 hover:border-blue-500",
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
      color: "border-purple-300 bg-purple-50/50 hover:border-purple-500",
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
      color: "border-amber-300 bg-amber-50/50 hover:border-amber-500",
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
      color: "border-orange-300 bg-orange-50/50 hover:border-orange-500",
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
      color: "border-emerald-300 bg-emerald-50/50 hover:border-emerald-500",
      badge: "Operations Pipeline"
    }
  ];

  const handleLogin = (account: (typeof demoAccounts)[0]) => {
    setCurrentUserRole(account.role);
    router.push(account.destination);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fafaf8]">
      <Navbar />

      <main className="flex-1 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1.5 text-xs text-stone-500 mb-6">
            <Link href="/" className="hover:text-stone-900">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-stone-900 font-semibold">Demo Role Selector</span>
          </div>

          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#d4560a]">
              Interactive Simulation Access
            </span>
            <h1 className="text-3xl font-extrabold text-stone-900 tracking-tight mt-1">
              Select Your Demo Persona
            </h1>
            <p className="text-xs sm:text-sm text-stone-600 mt-2">
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
                  className={`bg-white rounded-2xl border p-5 sm:p-6 transition-all shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 cursor-pointer hover:shadow-md ${
                    isSelected
                      ? "border-[#d4560a] ring-2 ring-[#d4560a]/20 bg-orange-50/20"
                      : "border-stone-200 hover:border-stone-300"
                  }`}
                  onClick={() => handleLogin(acc)}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-stone-100 flex items-center justify-center shrink-0 text-stone-800">
                      <Icon className="w-6 h-6 text-[#d4560a]" />
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h2 className="font-bold text-base text-stone-900">{acc.title}</h2>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-stone-100 text-stone-700 border border-stone-200">
                          {acc.badge}
                        </span>
                        {isSelected && (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                            Current Role
                          </span>
                        )}
                      </div>

                      <p className="text-xs text-stone-600 max-w-xl leading-relaxed">
                        {acc.description}
                      </p>

                      <div className="text-[11px] text-stone-400 font-mono pt-1">
                        Demo Account: <strong>{acc.email}</strong> • Password: <strong>Demo123</strong>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleLogin(acc);
                    }}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold transition-colors flex items-center justify-center gap-1.5 shrink-0"
                  >
                    <span>Launch {acc.role} View</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              );
            })}
          </div>

          <div className="mt-8 p-4 bg-stone-100 rounded-xl text-center text-xs text-stone-500 border border-stone-200">
            <strong>Demonstration Tip:</strong> Switch between Customer and Admin roles anytime from the top bar or via this login page to observe how an RFQ submitted by the buyer immediately reflects in the sales CRM.
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
