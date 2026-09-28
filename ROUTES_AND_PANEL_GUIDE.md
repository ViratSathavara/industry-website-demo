# INDUSTRIA Precision Manufacturing — Complete Routes & Panel Guide

> **Architecture Notice:** As per enterprise B2B standard, all internal panels (Customer Portal, Admin CRM, Pitch Decks, and Audit Tools) are **strictly managed via dedicated URL routes** and are **never exposed as clutter or demo buttons on the open public storefront**. This guarantees an authentic, multi-million-dollar Tier-1 manufacturing experience for real prospective OEM buyers.

---

## Quick Navigation Index

| Module | Route Prefix | Access Audience | Total Routes |
| :--- | :--- | :--- | :--- |
| [1. Public Engineering Storefront](#1-public-engineering-storefront-17-routes) | `/` | Prospective OEM Buyers, Procurement Heads | 17 |
| [2. Customer Self-Service Portal](#2-customer-self-service-portal-9-routes) | `/portal/*` | Onboarded Corporate Clients & Buyers | 9 |
| [3. Admin CRM & Factory Command](#3-admin-crm--factory-operations-command-15-routes) | `/admin/*` | Plant Heads, Sales Engineers, General Management | 15 |
| [4. Executive Pitch & Strategic Tools](#4-executive-pitch--strategic-tools-3-routes) | `/demo/*`, `/audit` | Sales Presentations, MSME Client Pitches | 3 |
| **Total Platform Routes** | | | **44** |

---

## 1. Public Engineering Storefront (17 Routes)
*Authentic, high-tech obsidian theme designed to build immediate credibility with global automotive, aerospace, and industrial buyers.*

| Route URL | Localhost Link | Description & Key Features |
| :--- | :--- | :--- |
| `/` | [http://localhost:3000/](http://localhost:3000/) | **Homepage:** Live Component Metrology HUD, 5-Axis Spindle Telemetry, Before/After Operational Comparison, 8-Stage Manufacturing Pipeline, Customer Testimonials. |
| `/products` | [http://localhost:3000/products](http://localhost:3000/products) | **Component Catalog:** Comprehensive filter by material alloy (SS316L, Ti-6Al-4V, EN353), machining tolerance (±0.005mm), CAD search, and MOQ. |
| `/products/[slug]` | [http://localhost:3000/products/5-axis-cnc-milled-impeller](http://localhost:3000/products/5-axis-cnc-milled-impeller) | **Component Detail:** 3D STEP preview, Zeiss CMM verification badge, dimensional tables, downloadable inspection certificates, and instant RFQ action. |
| `/categories` | [http://localhost:3000/categories](http://localhost:3000/categories) | **Component Families:** High-level directory of 5-Axis Machining, Shafts & Spindles, Pressure Flanges, and Hydraulic Manifolds. |
| `/categories/[slug]` | [http://localhost:3000/categories/precision-machining](http://localhost:3000/categories/precision-machining) | **Category Breakdown:** Specific list of manufactured components belonging to a designated machining cell. |
| `/industries` | [http://localhost:3000/industries](http://localhost:3000/industries) | **Industry Sectors:** Capability breakdowns for Aerospace & Defense, Automotive Tier-1, Oil & Gas Fluid Power, and Heavy Engineering. |
| `/industries/[slug]` | [http://localhost:3000/industries/precision-engineering](http://localhost:3000/industries/precision-engineering) | **Industry Focus Page:** Targeted case studies, metallurgical grades, and machine capabilities tailored to specific OEM verticals. |
| `/manufacturing-process` | [http://localhost:3000/manufacturing-process](http://localhost:3000/manufacturing-process) | **Plant Infrastructure:** 8-stage manufacturing workflow (SOP controlled), DMG Mori 5-axis machines, Zeiss CMM 3D scanning, 420 Bar hydro proof stations. |
| `/certifications` | [http://localhost:3000/certifications](http://localhost:3000/certifications) | **Quality & Standards:** ISO 9001:2015, IATF 16949:2016, AS9100D, EN 10204 Type 3.1 MTCs, ASME Section VIII compliance documents with modal previews. |
| `/request-quote` | [http://localhost:3000/request-quote](http://localhost:3000/request-quote) | **Multi-Step RFQ Builder:** 6-step guided intake covering product selection, tolerance specifications, delivery milestones, corporate GST, and CAD drawing upload. |
| `/request-sample` | [http://localhost:3000/request-sample](http://localhost:3000/request-sample) | **Machined Sample Intake:** Formal sample piece ordering system for OEM prototype verification and laboratory fitment. |
| `/compare` | [http://localhost:3000/compare](http://localhost:3000/compare) | **Technical Comparison Matrix:** Side-by-side spec comparison of up to 3 components comparing tolerances, tensile strength, and lead times. |
| `/book-demo` | [http://localhost:3000/book-demo](http://localhost:3000/book-demo) | **Schedule Plant Audit:** Direct booking system for OEM quality inspectors and third-party auditors (TUV, SGS, Bureau Veritas) to visit the Sanand plant. |
| `/contact` | [http://localhost:3000/contact](http://localhost:3000/contact) | **Direct Engineering Desk:** Plant address, direct sales engineers, official email contacts, and Google Maps location guide. |
| `/about` | [http://localhost:3000/about](http://localhost:3000/about) | **Factory Profile:** Company history, executive leadership, machining center fleet summary, and annual tonnage capacity. |
| `/login` | [http://localhost:3000/login](http://localhost:3000/login) | **Unified Portal Login:** Secure authentication gate for both customer buyers and internal sales engineers. |
| `/overview` | [http://localhost:3000/overview](http://localhost:3000/overview) | **Digital Transformation Blueprint:** Complete architectural explanation of how traditional factories transition to automated digital revenue. |

---

## 2. Customer Self-Service Portal (9 Routes)
*Private authenticated workspace where corporate procurement heads manage drawing revisions, track production milestones, approve quotations, and download certified CMM reports.*

| Route URL | Localhost Link | Description & Key Features |
| :--- | :--- | :--- |
| `/portal/dashboard` | [http://localhost:3000/portal/dashboard](http://localhost:3000/portal/dashboard) | **Buyer Command Center:** Active RFQ counts, pending quotations awaiting digital approval, active production job cards, and quick actions. |
| `/portal/rfqs` | [http://localhost:3000/portal/rfqs](http://localhost:3000/portal/rfqs) | **RFQ Tracker:** Historical log of submitted CAD inquiries, current engineering feasibility status, and assigned application engineer. |
| `/portal/quotes` | [http://localhost:3000/portal/quotes](http://localhost:3000/portal/quotes) | **Commercial Quotations:** Interactive formal quotes with line-item pricing, batch volume tiers, terms of payment, and **1-click digital acceptance**. |
| `/portal/orders` | [http://localhost:3000/portal/orders](http://localhost:3000/portal/orders) | **Live Order Telemetry:** Real-time production progress tracker (Material Sourced → 5-Axis Machining → Zeiss CMM QA → Surface Finish → Dispatch). |
| `/portal/documents` | [http://localhost:3000/portal/documents](http://localhost:3000/portal/documents) | **Technical Vault:** Downloadable EN 10204 Type 3.1 Mill Test Certificates, Zeiss CMM 3D runout sheets, tax invoices, and shipping bills. |
| `/portal/messages` | [http://localhost:3000/portal/messages](http://localhost:3000/portal/messages) | **Engineering Helpdesk:** Direct messaging thread with the factory application engineering desk regarding drawing revisions and lead times. |
| `/portal/appointments` | [http://localhost:3000/portal/appointments](http://localhost:3000/portal/appointments) | **Visit Schedule:** Verified confirmations of scheduled factory audits, witness testing sessions, and plant visits. |
| `/portal/company` | [http://localhost:3000/portal/company](http://localhost:3000/portal/company) | **Corporate Profile:** Buyer organization details, GSTIN, billing addresses, preferred shipping ports, and authorized signatories. |
| `/portal/saved` | [http://localhost:3000/portal/saved](http://localhost:3000/portal/saved) | **Saved Specifications:** Bookmarked components and saved bills of materials (BOM) for recurring production call-offs. |

---

## 3. Admin CRM & Factory Operations Command (15 Routes)
*Internal enterprise dashboard used by Plant Directors, Sales Engineers, and Production Supervisors to manage commercial pipelines, generate quotes, and track shop floor output.*

| Route URL | Localhost Link | Description & Key Features |
| :--- | :--- | :--- |
| `/admin/dashboard` | [http://localhost:3000/admin/dashboard](http://localhost:3000/admin/dashboard) | **Executive KPI Dashboard:** Total pipeline value (₹), conversion rates, open RFQs, active production orders, and spindle utilization alerts. |
| `/admin/leads` | [http://localhost:3000/admin/leads](http://localhost:3000/admin/leads) | **Lead Pipeline Kanban:** Visual CRM tracking of inbound inquiries from WhatsApp, website forms, and direct calls with stage progression. |
| `/admin/rfqs` | [http://localhost:3000/admin/rfqs](http://localhost:3000/admin/rfqs) | **RFQ Engineering Desk:** Review attached 2D/3D CAD models, evaluate cycle times, assign to engineers, and convert directly to commercial quotes. |
| `/admin/quotes` | [http://localhost:3000/admin/quotes](http://localhost:3000/admin/quotes) | **Quotation Builder:** Cost estimation calculator (Raw material + Machine hour rate + Metrology QA + Margins), PDF preview, and instant digital dispatch. |
| `/admin/orders` | [http://localhost:3000/admin/orders](http://localhost:3000/admin/orders) | **Production Management:** Job card creation, heat batch allocation, CNC spindle scheduling, and dispatch tracking with transport carriers. |
| `/admin/products` | [http://localhost:3000/admin/products](http://localhost:3000/admin/products) | **Product Master Catalog:** Add/edit components, update dimensional tolerances, upload CAD models, set MOQs, and configure pricing modes. |
| `/admin/categories` | [http://localhost:3000/admin/categories](http://localhost:3000/admin/categories) | **Category Hierarchy:** Organize components into precision cells, machining families, and parent manufacturing categories. |
| `/admin/customers` | [http://localhost:3000/admin/customers](http://localhost:3000/admin/customers) | **OEM Account Directory:** Comprehensive CRM profiles of client companies, lifetime procurement value, active contracts, and key buyer contacts. |
| `/admin/documents` | [http://localhost:3000/admin/documents](http://localhost:3000/admin/documents) | **Compliance Repository:** Manage plant test certificates, audit documentation, IATF audit checklists, and customer NDA templates. |
| `/admin/analytics` | [http://localhost:3000/admin/analytics](http://localhost:3000/admin/analytics) | **Commercial Growth Analytics:** Detailed charts of quotation win rates, average RFQ cycle times, top performing product lines, and regional demand. |
| `/admin/enquiries` | [http://localhost:3000/admin/enquiries](http://localhost:3000/admin/enquiries) | **Inbound Inquiry Log:** Unfiltered chronological list of quick web inquiries, callback requests, and product interest notifications. |
| `/admin/appointments` | [http://localhost:3000/admin/appointments](http://localhost:3000/admin/appointments) | **Plant Tour Scheduler:** Calendar management for visiting OEM vendor inspection teams, audit managers, and customer engineers. |
| `/admin/content` | [http://localhost:3000/admin/content](http://localhost:3000/admin/content) | **Site Content Management:** Edit factory announcements, hero telemetry statistics, customer testimonials, and machine fleet highlights. |
| `/admin/team` | [http://localhost:3000/admin/team](http://localhost:3000/admin/team) | **Engineering & Sales Staff:** Staff directory with assigned role permissions, active quotation queues, and contact assignments. |
| `/admin/settings` | [http://localhost:3000/admin/settings](http://localhost:3000/admin/settings) | **System Settings:** Factory operational parameters, notification webhooks, ERP integration connectors, and demo state controls. |

---

## 4. Executive Pitch & Strategic Tools (3 Routes)
*High-impact presentation and advisory tools designed for pitching digital transformation to manufacturing business owners, MSMEs, and boardrooms.*

| Route URL | Localhost Link | Description & Key Features |
| :--- | :--- | :--- |
| `/demo` | [http://localhost:3000/demo](http://localhost:3000/demo) | **10-Slide Executive Pitch Deck:** Interactive full-screen slide deck covering the 5 Core Friction Points, The Digital Solution, Operational ROI, and 30-Day Rollout Plan. |
| `/demo/script` | [http://localhost:3000/demo/script](http://localhost:3000/demo/script) | **5-Minute Sales Pitch Script:** Exact word-for-word talking points, psychological hooks, and objection handling for closing manufacturing business owners. |
| `/audit` | [http://localhost:3000/audit](http://localhost:3000/audit) | **10-Point Digital Factory Maturity Audit:** Self-diagnostic tool scoring a factory on CAD accessibility, quotation velocity, portal tracking, and CRM automation. |

---

## How to Conduct an End-to-End Client Demo in 5 Steps

### Step 1: The First Impression (Public Storefront)
- Open: `http://localhost:3000/`
- Highlight to client:
  - High-tech obsidian visual identity and live factory telemetry (142/144 CNC Centers Online, 98.6% OEE).
  - The **Live Component Metrology HUD** where clicking between the *5-Axis Impeller*, *Spline Shaft*, and *Manifold Block* updates tolerances and CMM specs in real-time.
  - Zero clutter: notice there are no "demo test buttons" or admin links visible on the page — it looks and behaves 100% like a genuine world-class factory.

### Step 2: Product Discovery & Technical Specifications
- Open: `http://localhost:3000/products`
- Filter by Material: `Titanium Grade 5 (Ti-6Al-4V)` or Tolerance: `±0.005mm`.
- Click on any component to view the detail page (e.g. `http://localhost:3000/products/5-axis-cnc-milled-impeller`).
- Demonstrate the 3D STEP preview card, CMM verified badge, and technical specifications table.

### Step 3: Submitting an RFQ
- Click **Request a Quote** or navigate to `http://localhost:3000/request-quote`.
- Walk through the 6-step guided intake (Material alloy, tolerances, delivery date, attached drawing).
- Hit **Submit Official RFQ** — confetti triggers and an official reference code (e.g., `RFQ-2026-0042`) is generated.

### Step 4: The Internal Factory Reaction (Admin CRM)
- Navigate directly to: `http://localhost:3000/admin/rfqs`
- Show the client how the RFQ submitted in Step 3 is instantly queued in the plant engineering desk.
- Click on `/admin/quotes` to show how sales generates a professional quotation with line-item margins in under 60 seconds.
- Show `/admin/orders` to reveal how orders transition through live spindle operations.

### Step 5: The Customer Retention Experience (Customer Portal)
- Navigate directly to: `http://localhost:3000/portal/dashboard`
- Show the buyer's perspective: their RFQ status, active order timeline, and downloadable Zeiss CMM certificates.
- Conclude: *"This is how your factory stops competing on price alone, eliminates WhatsApp friction, and wins high-margin OEM repeat contracts."*

---

## Technical Stack & State Persistence
- **Framework:** Next.js 15+ (App Router) with React 19.
- **Styling:** Tailwind CSS v4 with custom dark obsidian theme (`#080b11`), electric amber (`#f59e0b`), and neon cyan (`#06b6d4`) accents.
- **Icons:** Lucide React (featherweight tree-shakeable icons).
- **State Management:** Reactive Client State Context (`lib/services/demo-state-context.tsx`) with automatic `localStorage` persistence.
- **Data Model:** Full TypeScript typings for Products, Categories, RFQs, Quotes, Orders, Customers, and Appointments.
