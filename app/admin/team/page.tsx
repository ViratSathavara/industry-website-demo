"use client";

import React, { useState } from "react";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { useDemoState } from "@/lib/services/demo-state-context";
import { UserRole } from "@/lib/types";
import {
  Users,
  Shield,
  CheckCircle2,
  Lock,
  UserCheck,
  Plus,
  Mail,
  Phone,
  Sparkles,
  X,
  Briefcase
} from "lucide-react";

export default function AdminTeamPage() {
  const { currentUserRole, setCurrentUserRole } = useDemoState();
  const [toastMsg, setToastMsg] = useState<string | null>(null);
  const [isInviteOpen, setIsInviteOpen] = useState(false);

  const [inviteName, setInviteName] = useState("");
  const [inviteEmail, setInviteEmail] = useState("");
  const [inviteRole, setInviteRole] = useState<UserRole>("Sales Manager");

  const roles: Array<{ role: UserRole; title: string; desc: string }> = [
    {
      role: "Owner",
      title: "Managing Director / Owner",
      desc: "Full administrative access, executive natural language AI insights, financial margins & EBITDA analytics."
    },
    {
      role: "Admin",
      title: "General Plant Administrator",
      desc: "System configurations, master catalog editing, user access governance, and security audits."
    },
    {
      role: "Sales Manager",
      title: "Head of Sales & Business Dev",
      desc: "RFQ allocation, custom quotation CPQ builder, customer 360 LTV access, deal pipeline progression."
    },
    {
      role: "Operations",
      title: "Plant Operations & MES Lead",
      desc: "Shopfloor order progression, CNC machine milestones, dispatch courier scheduling, warehouse delivery."
    },
    {
      role: "Customer",
      title: "Procurement / Client Buyer",
      desc: "Customer Portal access, tracking active RFQs, accepting commercial quotes, order tracking."
    }
  ];

  const teamMembers = [
    {
      name: "Rajesh Patel",
      role: "Owner",
      title: "Managing Director",
      email: "rajesh.patel@industria-demo.in",
      phone: "+91 98250 11234",
      department: "Executive Management",
      status: "Active Now"
    },
    {
      name: "Amit Trivedi",
      role: "Sales Manager",
      title: "VP of Global Sales",
      email: "amit.trivedi@industria-demo.in",
      phone: "+91 98251 22345",
      department: "Sales & Estimation",
      status: "Active 10m ago"
    },
    {
      name: "Sanjay Parmar",
      role: "Operations",
      title: "Plant Operations Head",
      email: "sanjay.p@industria-demo.in",
      phone: "+91 98252 33456",
      department: "Manufacturing & MES",
      status: "Active on Shopfloor"
    },
    {
      name: "Priya Nair",
      role: "Sales Manager",
      title: "Key Account Manager",
      email: "priya.nair@industria-demo.in",
      phone: "+91 98253 44567",
      department: "Client Accounts",
      status: "Active 1h ago"
    },
    {
      name: "Karan Mehta",
      role: "Operations",
      title: "Chief Quality Inspector",
      email: "karan.mehta@industria-demo.in",
      phone: "+91 98254 55678",
      department: "Metrology & QA",
      status: "Active 2h ago"
    }
  ];

  const permissionsMatrix = [
    { permission: "View Cost Margins & Pricing", owner: true, admin: true, sales: true, ops: false, buyer: false },
    { permission: "Create & Send Quotations", owner: true, admin: true, sales: true, ops: false, buyer: false },
    { permission: "Advance Manufacturing Milestones", owner: true, admin: true, sales: false, ops: true, buyer: false },
    { permission: "Upload CMM Quality Certs", owner: true, admin: true, sales: false, ops: true, buyer: false },
    { permission: "Accept Quotes & Issue PO", owner: false, admin: false, sales: false, ops: false, buyer: true },
    { permission: "Export Financial Analytics", owner: true, admin: true, sales: false, ops: false, buyer: false },
    { permission: "Download 3D CAD Models", owner: true, admin: true, sales: true, ops: true, buyer: true }
  ];

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold text-neutral-900 tracking-tight font-heading">
                Team & Role-Based Access Control (RBAC)
              </h1>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-primary/10 text-primary">
                Multi-Tenant Security
              </span>
            </div>
            <p className="text-sm text-neutral-500 mt-1">
              Industrial role simulation, executive delegation, and granular manufacturing permission gates.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsInviteOpen(true)}
              className="px-4 py-2 text-xs font-semibold rounded-lg bg-primary hover:bg-primary-hover text-white transition-colors flex items-center gap-2 shadow-sm"
            >
              <Plus className="w-3.5 h-3.5" />
              Invite Team Member
            </button>
          </div>
        </div>

        {/* Toast */}
        {toastMsg && (
          <div className="p-3 bg-emerald-50 border border-emerald-300 text-emerald-900 rounded-lg text-sm flex items-center gap-2 animate-fade-in">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>{toastMsg}</span>
          </div>
        )}

        {/* Active Demo Role Switcher Strip */}
        <div className="p-5 bg-neutral-900 text-white rounded-2xl shadow-lg space-y-3">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
            <div>
              <span className="text-xs uppercase tracking-wider text-primary font-bold">
                Live Interactive Persona Switcher
              </span>
              <h2 className="text-lg font-bold">
                Current Active Session:{" "}
                <span className="text-primary font-heading">
                  {roles.find((r) => r.role === currentUserRole)?.title || currentUserRole}
                </span>
              </h2>
            </div>
            <span className="text-xs text-neutral-400">
              Click any role to test perspective & authorization rules instantly
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-2 pt-2">
            {roles.map((r) => {
              const isActive = currentUserRole === r.role;
              return (
                <button
                  key={r.role}
                  onClick={() => {
                    setCurrentUserRole(r.role);
                    setToastMsg(`Switched role to: ${r.title}`);
                    setTimeout(() => setToastMsg(null), 3000);
                  }}
                  className={`p-3 rounded-xl text-left border transition-all ${
                    isActive
                      ? "bg-primary text-white border-primary shadow-md"
                      : "bg-neutral-800/80 hover:bg-neutral-800 text-neutral-300 border-neutral-700"
                  }`}
                >
                  <div className="text-xs font-bold leading-tight truncate">{r.title}</div>
                  <div className="text-[10px] mt-1 opacity-80 line-clamp-2">{r.desc}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Team Members List */}
        <div className="bg-white rounded-2xl border border-neutral-200 shadow-sm overflow-hidden">
          <div className="p-5 border-b border-neutral-200 flex items-center justify-between">
            <h3 className="font-bold text-neutral-900 text-base font-heading">
              Plant Organization Directory
            </h3>
            <span className="text-xs text-neutral-500">
              {teamMembers.length} Registered Industrial Officers
            </span>
          </div>

          <div className="divide-y divide-neutral-100">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="p-4 flex flex-col md:flex-row md:items-center justify-between gap-3 hover:bg-neutral-50/80 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-neutral-200 text-neutral-800 font-bold flex items-center justify-center text-sm">
                    {member.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <div className="font-bold text-neutral-900 text-sm">{member.name}</div>
                    <div className="text-xs text-neutral-500">{member.title} • {member.department}</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-xs text-neutral-600">
                  <div className="flex items-center gap-1">
                    <Mail className="w-3.5 h-3.5 text-neutral-400" />
                    <span>{member.email}</span>
                  </div>
                  <div className="flex items-center gap-1 font-mono">
                    <Phone className="w-3.5 h-3.5 text-neutral-400" />
                    <span>{member.phone}</span>
                  </div>
                  <span className="px-2 py-0.5 text-[11px] font-semibold rounded-full bg-emerald-50 text-emerald-700">
                    {member.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Permission Matrix Table */}
        <div className="bg-white rounded-2xl border border-neutral-200 shadow-sm overflow-hidden">
          <div className="p-5 border-b border-neutral-200">
            <h3 className="font-bold text-neutral-900 text-base font-heading">
              Permission Security Matrix
            </h3>
            <p className="text-xs text-neutral-500 mt-0.5">
              Granular access privilege enforcement across operational workflows
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-neutral-50 text-neutral-600 font-semibold border-b border-neutral-200">
                <tr>
                  <th className="py-3 px-4">Feature / Action</th>
                  <th className="py-3 px-3 text-center">Owner</th>
                  <th className="py-3 px-3 text-center">Admin</th>
                  <th className="py-3 px-3 text-center">Sales Head</th>
                  <th className="py-3 px-3 text-center">Plant MES</th>
                  <th className="py-3 px-3 text-center">Buyer Portal</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100">
                {permissionsMatrix.map((row, idx) => (
                  <tr key={idx} className="hover:bg-neutral-50">
                    <td className="py-3 px-4 font-medium text-neutral-900">{row.permission}</td>
                    <td className="py-3 px-3 text-center">{row.owner ? <CheckCircle2 className="w-4 h-4 text-emerald-600 mx-auto" /> : <Lock className="w-3.5 h-3.5 text-neutral-300 mx-auto" />}</td>
                    <td className="py-3 px-3 text-center">{row.admin ? <CheckCircle2 className="w-4 h-4 text-emerald-600 mx-auto" /> : <Lock className="w-3.5 h-3.5 text-neutral-300 mx-auto" />}</td>
                    <td className="py-3 px-3 text-center">{row.sales ? <CheckCircle2 className="w-4 h-4 text-emerald-600 mx-auto" /> : <Lock className="w-3.5 h-3.5 text-neutral-300 mx-auto" />}</td>
                    <td className="py-3 px-3 text-center">{row.ops ? <CheckCircle2 className="w-4 h-4 text-emerald-600 mx-auto" /> : <Lock className="w-3.5 h-3.5 text-neutral-300 mx-auto" />}</td>
                    <td className="py-3 px-3 text-center">{row.buyer ? <CheckCircle2 className="w-4 h-4 text-emerald-600 mx-auto" /> : <Lock className="w-3.5 h-3.5 text-neutral-300 mx-auto" />}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Invite Modal */}
        {isInviteOpen && (
          <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in">
            <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-4 border border-neutral-200">
              <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                    <Users className="w-4 h-4" />
                  </div>
                  <h3 className="font-bold text-neutral-900 text-base font-heading">
                    Invite Industrial Staff
                  </h3>
                </div>
                <button
                  onClick={() => setIsInviteOpen(false)}
                  className="text-neutral-400 hover:text-neutral-600"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <label className="block font-semibold text-neutral-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    placeholder="e.g. Ramesh Varma"
                    value={inviteName}
                    onChange={(e) => setInviteName(e.target.value)}
                    className="w-full p-2.5 rounded-lg border border-neutral-300"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-neutral-700 mb-1">Company Email</label>
                  <input
                    type="email"
                    placeholder="ramesh@industria.in"
                    value={inviteEmail}
                    onChange={(e) => setInviteEmail(e.target.value)}
                    className="w-full p-2.5 rounded-lg border border-neutral-300"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-neutral-700 mb-1">Assigned Role</label>
                  <select
                    value={inviteRole}
                    onChange={(e) => setInviteRole(e.target.value as UserRole)}
                    className="w-full p-2.5 rounded-lg border border-neutral-300 bg-white"
                  >
                    <option value="Owner">Managing Director / Owner</option>
                    <option value="Admin">General Plant Administrator</option>
                    <option value="Sales Manager">Head of Sales & Business Dev</option>
                    <option value="Operations">Plant Operations & MES Lead</option>
                    <option value="Customer">Procurement / Client Buyer</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t border-neutral-200">
                <button
                  onClick={() => setIsInviteOpen(false)}
                  className="px-4 py-2 font-semibold rounded-lg border border-neutral-300 text-neutral-700 hover:bg-neutral-50 text-xs"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    setIsInviteOpen(false);
                    setToastMsg(`Invitation email dispatched to ${inviteEmail || "staff member"}`);
                    setTimeout(() => setToastMsg(null), 3500);
                  }}
                  className="px-5 py-2 font-semibold rounded-lg bg-primary hover:bg-primary-hover text-white text-xs shadow-sm"
                >
                  Dispatch Invite
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}
