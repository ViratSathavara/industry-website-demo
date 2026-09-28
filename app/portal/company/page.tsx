"use client";

import React, { useState } from "react";
import { PortalLayout } from "@/components/portal/PortalLayout";
import { useDemoState } from "@/lib/services/demo-state-context";
import { Building, Save, CheckCircle2, MapPin, Users, Plus } from "lucide-react";

export default function PortalCompanyPage() {
  const { currentCustomer, setCurrentCustomer } = useDemoState();

  const [companyName, setCompanyName] = useState(currentCustomer.companyName);
  const [contactPerson, setContactPerson] = useState(currentCustomer.contactPerson);
  const [designation, setDesignation] = useState(currentCustomer.designation);
  const [phone, setPhone] = useState(currentCustomer.phone);
  const [email, setEmail] = useState(currentCustomer.email);
  const [gstNumber, setGstNumber] = useState(currentCustomer.gstNumber);
  const [industry, setIndustry] = useState(currentCustomer.industry);
  const [billingAddress, setBillingAddress] = useState(currentCustomer.billingAddress);
  const [shippingAddress, setShippingAddress] = useState(
    currentCustomer.shippingAddresses[0] || currentCustomer.billingAddress
  );

  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentCustomer({
      ...currentCustomer,
      companyName,
      contactPerson,
      designation,
      phone,
      email,
      gstNumber,
      industry,
      billingAddress,
      shippingAddresses: [shippingAddress]
    });

    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  return (
    <PortalLayout>
      <div className="max-w-4xl mx-auto space-y-6">
        <div>
          <h2 className="text-xl font-extrabold text-stone-900 tracking-tight">
            Company Profile & Sourcing Addresses
          </h2>
          <p className="text-xs text-stone-500">
            Manage your registered corporate entity, tax identification, and delivery delivery points
          </p>
        </div>

        {savedSuccess && (
          <div className="p-4 bg-emerald-50 border border-emerald-300 text-emerald-800 rounded-xl text-xs flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            <span className="font-semibold">Company profile updated successfully!</span>
          </div>
        )}

        <form onSubmit={handleSave} className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-6 shadow-xs text-xs">
          <div className="flex items-center justify-between pb-3 border-b border-stone-100">
            <h3 className="font-bold text-sm text-stone-900">Corporate Details</h3>
            <span className="text-[10px] text-stone-400 font-mono">Customer ID: {currentCustomer.id}</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-stone-700 font-semibold mb-1">Company Legal Name *</label>
              <input
                type="text"
                required
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="w-full bg-stone-50 border border-stone-300 rounded-lg p-2.5 text-stone-800 focus:outline-none focus:border-[#d4560a]"
              />
            </div>
            <div>
              <label className="block text-stone-700 font-semibold mb-1">GST / Tax ID Number *</label>
              <input
                type="text"
                required
                value={gstNumber}
                onChange={(e) => setGstNumber(e.target.value)}
                className="w-full bg-stone-50 border border-stone-300 rounded-lg p-2.5 text-stone-800 focus:outline-none focus:border-[#d4560a]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-stone-700 font-semibold mb-1">Primary Buyer Name *</label>
              <input
                type="text"
                required
                value={contactPerson}
                onChange={(e) => setContactPerson(e.target.value)}
                className="w-full bg-stone-50 border border-stone-300 rounded-lg p-2.5 text-stone-800 focus:outline-none focus:border-[#d4560a]"
              />
            </div>
            <div>
              <label className="block text-stone-700 font-semibold mb-1">Designation</label>
              <input
                type="text"
                value={designation}
                onChange={(e) => setDesignation(e.target.value)}
                className="w-full bg-stone-50 border border-stone-300 rounded-lg p-2.5 text-stone-800 focus:outline-none focus:border-[#d4560a]"
              />
            </div>
            <div>
              <label className="block text-stone-700 font-semibold mb-1">Sector Industry</label>
              <input
                type="text"
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                className="w-full bg-stone-50 border border-stone-300 rounded-lg p-2.5 text-stone-800 focus:outline-none focus:border-[#d4560a]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-stone-700 font-semibold mb-1">Phone / WhatsApp *</label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-stone-50 border border-stone-300 rounded-lg p-2.5 text-stone-800 focus:outline-none focus:border-[#d4560a]"
              />
            </div>
            <div>
              <label className="block text-stone-700 font-semibold mb-1">Work Email Address *</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-stone-50 border border-stone-300 rounded-lg p-2.5 text-stone-800 focus:outline-none focus:border-[#d4560a]"
              />
            </div>
          </div>

          <div className="space-y-4 pt-2 border-t border-stone-100">
            <h4 className="font-bold text-xs uppercase tracking-wider text-stone-700">
              Tax & Delivery Addresses
            </h4>

            <div>
              <label className="block text-stone-700 font-semibold mb-1">Official Billing Address *</label>
              <textarea
                rows={2}
                required
                value={billingAddress}
                onChange={(e) => setBillingAddress(e.target.value)}
                className="w-full bg-stone-50 border border-stone-300 rounded-lg p-2.5 text-stone-800 focus:outline-none focus:border-[#d4560a]"
              />
            </div>

            <div>
              <label className="block text-stone-700 font-semibold mb-1">Primary Warehouse / Delivery Address *</label>
              <textarea
                rows={2}
                required
                value={shippingAddress}
                onChange={(e) => setShippingAddress(e.target.value)}
                className="w-full bg-stone-50 border border-stone-300 rounded-lg p-2.5 text-stone-800 focus:outline-none focus:border-[#d4560a]"
              />
            </div>
          </div>

          <button
            type="submit"
            className="px-6 py-2.5 bg-[#d4560a] hover:bg-[#b84605] text-white font-bold text-xs rounded-xl shadow-xs flex items-center gap-2 cursor-pointer"
          >
            <Save className="w-4 h-4" />
            <span>Save Company Changes</span>
          </button>
        </form>
      </div>
    </PortalLayout>
  );
}
