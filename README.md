# INDUSTRIA — Digital Factory Experience Platform

> **The complete digital operating system for Indian precision manufacturing enterprises, Tier-1 engineering suppliers, and global component exporters.**

---

## 🏭 Overview
**INDUSTRIA** transforms traditional, fragmented manufacturing operations into a unified high-velocity digital factory. Built specifically for the Indian industrial ecosystem (GIDC, MIDC, Chennai/Pune engineering clusters), the platform unifies:
1. **Public Precision Storefront:** Deep technical catalogs covering **18 industrial verticals**, CAD downloads, trilingual support (English, Gujarati, Hindi), and interactive RFQ builders.
2. **Branded Customer Portal:** Enterprise buyer cockpit to track custom RFQs, review GST-itemized proposals, accept quotations in 1 click, and monitor shopfloor milestones.
3. **SaaS Admin Command Center:** Omnichannel CRM, CPQ quotation builder, MES shopfloor tracking, Customer 360 LTV analytics, and Managing Director executive BI.
4. **Sales Pitch & Factory Audit Engine:** Cinematic presentation mode, 10-minute presentation talk-track, and an interactive Digital Factory Maturity Audit tool.

---

## ⚡ Key Highlights & Metrics
- **Quotation Turnaround:** Compresses industry standard 72 hours down to **2.4 hours**.
- **18 Specialized Verticals:** From Automotive CNC and Aerospace Titanium to Oil & Gas Forged Flanges and Medical Implants.
- **Rich Seed Datasets:** 60+ technical products, 20 verified Indian manufacturing accounts, 30 inquiries, 20 RFQs, 15 quotes, 12 orders, and 25 documents.
- **Zero Blank States & Zero Broken Links:** Every single button, link, drawer, and workflow functions end-to-end with persistent local state.

---

## 🚀 Quick Start & Development

### 1. Prerequisites
- Node.js 18+ or 20+
- npm, yarn, or pnpm

### 2. Installation
Clone the repository and install dependencies:
```bash
git clone <your-repo-url>
cd New-Flow
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open **[http://localhost:3000](http://localhost:3000)** in your browser.

### 4. Type Checking & Production Build
```bash
# Verify 100% type safety across all routes
npm run typecheck

# Build optimized production bundle
npm run build
```

---

## 🧭 Master Route Map

### 🌐 Public Storefront
- `/` — Master Homepage (Hero, Industry Explorer, Process Timeline, Plant Capabilities, Lead Capture)
- `/industries` — 18-Vertical Industrial Directory
- `/industries/[slug]` — Deep Sector Blueprint (Tolerances, Buyer Personas, Custom Specs)
- `/products` — Precision Component Catalog with Filter Sidebar & Search
- `/products/[slug]` — Technical Specification Sheet with 2D/3D CAD Preview
- `/compare` — Side-by-Side 3-Component Comparison Matrix
- `/categories` & `/categories/[slug]` — Taxonomy Hierarchy Browser
- `/manufacturing-process` — 8-Stage Manufacturing Walkthrough
- `/certifications` — Quality Assurance & ISO/AS9100 Credentials
- `/about` — Factory Infrastructure & Machinery Fleet
- `/contact` — Plant Coordinates & Direct Inquiry Form
- `/request-quote` — 6-Step Custom RFQ Builder with Drawing Upload
- `/request-sample` — Precision Component Sample Request Workflow
- `/book-demo` — Plant Visit & Virtual Machine Demo Booking
- `/login` — 5-Role Interactive Demo Persona Selector

### 🏢 Customer Portal (`/portal`)
- `/portal/dashboard` — Procurement Buyer Command Center
- `/portal/rfqs` — Inbound RFQ Tracker with Drawing Links
- `/portal/quotes` — Commercial Quotation Review & 1-Click Quote Acceptance
- `/portal/orders` — Live Shopfloor Order & Logistics Docket Tracker
- `/portal/documents` — Material Test Certificates (MTC 3.1) & Invoices
- `/portal/messages` — Threaded Sales, Ops & Buyer Messages
- `/portal/appointments` — Factory Walkthroughs & Technical Audits
- `/portal/company` — Corporate Profile & Delivery Warehouse Master
- `/portal/saved` — Shortlisted Products

### ⚙️ Admin Command Center (`/admin`)
- `/admin/dashboard` — SaaS Dashboard & Managing Director AI Summary
- `/admin/leads` — Commercial Deal Pipeline (New to Won)
- `/admin/enquiries` — Omnichannel Inbox (WhatsApp, RFQ, IndiaMART) with Reply Simulator
- `/admin/rfqs` — Engineering Specs Inspector & Fast Quote Trigger
- `/admin/quotes` — CPQ Quotation Master & Interactive Quotation Builder
- `/admin/customers` — Customer 360 Account Master with GSTIN & LTV
- `/admin/products` — Catalog Master & Add SKU Modal
- `/admin/categories` — Component Taxonomy Hierarchy
- `/admin/orders` — Shopfloor Operations & 1-Click Milestone Advancement
- `/admin/appointments` — Plant Visits Calendar & Host Assignment
- `/admin/documents` — Encrypted Document Vault & Upload Engine
- `/admin/analytics` — Conversion Funnel & Regional Demand BI
- `/admin/team` — Role-Based Access Control (RBAC) & Interactive Persona Switcher
- `/admin/settings` — Factory Credentials, ERP Sync (SAP/Tally), & Tax Config
- `/admin/content` — Storefront CMS & Live Feature Flags

### 🎯 Sales Pitch & Diagnostic Audit
- `/demo` — Cinematic Sales Presentation Pitch Mode
- `/demo/script` — 10-Minute Step-by-Step Sales Rep Talk-Track
- `/audit` — Interactive Digital Factory Maturity Audit Diagnostic Tool

---

## 🛠️ Tech Stack & Architecture
- **Framework:** Next.js 15+ (App Router)
- **Styling:** Tailwind CSS v4 with custom industrial tokens
- **Visuals & Charts:** Lucide React, Framer Motion, Recharts
- **Celebration Effects:** Canvas Confetti
- **State Persistence:** `DemoStateContext` backed by `localStorage`
- **Language Support:** English, Gujarati (ગુજરાતી), Hindi (हिन्दी)

---

## 📚 Detailed Documentation
Comprehensive engineering and sales documentation is maintained in the `docs/` directory:
- [Product Blueprint](docs/PRODUCT_BLUEPRINT.md)
- [Complete Route Directory](docs/ROUTES.md)
- [Data Model & Schema](docs/DATA_MODEL.md)
- [Industrial Design System](docs/DESIGN_SYSTEM.md)
- [18-Industry Matrix](docs/INDUSTRY_MATRIX.md)
- [Seed Demo Data Master](docs/DEMO_DATA.md)
- [10-Minute Sales Script](docs/DEMO_SCRIPT.md)
- [Future Backend Roadmap](docs/FUTURE_BACKEND_PLAN.md)

---

## 👥 Demo Personas
You can switch roles anytime using the top demo bar or `/login`:
1. **Managing Director / Owner:** Executive margin analytics & AI natural-language summaries.
2. **Head of Sales:** Inbound inquiries, CPQ quote creation, and deal conversion.
3. **Plant Operations Supervisor:** Shopfloor manufacturing stage progression.
4. **Procurement Buyer:** Self-service RFQ tracking and quote acceptance.
5. **Quality Auditor:** ISO 9001/AS9100D compliance and MTC review.

---

## 📄 License
Proprietary industrial software blueprint developed for enterprise manufacturing demonstration.

# industry-website-demo
