# INDUSTRIA — Master Product Blueprint

## 1. Executive Summary
**INDUSTRIA** is an enterprise-grade digital factory experience platform engineered specifically for Indian manufacturing enterprises, precision component exporters, and Tier-1 engineering suppliers.

The platform bridges the historical gap between offline factory capabilities and digital procurement expectations, providing:
1. **High-Performance Public Storefront:** Covering 18 specialized industrial verticals with deep technical specifications, trilingual dictionary (English, Gujarati, Hindi), CAD downloads, and instant RFQ builders.
2. **Branded Customer Portal:** Allowing procurement officers and design engineers to track custom RFQs, review GST quotations, accept proposals with 1-click, and monitor shopfloor manufacturing milestones in real time.
3. **Admin & CRM Command Center:** An omnichannel SaaS cockpit for sales heads and plant managers featuring interactive CPQ quotation generation, MES shopfloor progression, Customer 360 LTV tracking, and executive EBITDA analytics.

---

## 2. Core Value Proposition & Metrics
- **Quote Turnaround Acceleration:** Compresses the traditional 72-hour quotation cycle to **2.4 hours** via pre-configured BOM rates and automated GST calculation.
- **Inbound Lead Capture:** Multi-channel capture through Web RFQ wizards, WhatsApp Business Cloud API, and IndiaMART webhook feeds.
- **Client Retention:** Boosts repeat buyer retention to **74%** by eliminating daily status phone calls through transparent self-serve order tracking.
- **Domain Authenticity:** Features realistic Indian manufacturing terminology (GIDC, MIDC, GSTIN, HSN codes, DIN ISO 2768 tolerances, MTC 3.1 heat numbers).

---

## 3. Technology Architecture
- **Framework:** Next.js 15+ (App Router)
- **Styling:** Tailwind CSS v4 with custom industrial design tokens
- **Icons & Visuals:** Lucide React, Framer Motion, and Unsplash industrial assets
- **Data Visualizations:** Recharts for conversion funnels and EBITDA margin graphs
- **State Management:** `DemoStateContext` with persistent `localStorage` cache for instant multi-role demos without backend latency
- **Type Safety:** 100% strict TypeScript types with zero linting or compiler compromises

---

## 4. Key Persona Workflows
1. **Enterprise Buyer / Procurement Lead:** Discovers components, downloads CAD, submits custom drawing RFQ, reviews quotes, and tracks live order status.
2. **Sales Engineer / Head of Sales:** Reviews inbound inquiries, assigns leads, builds formal commercial quotations, and sends proposals to buyers.
3. **Plant Operations & MES Supervisor:** Advances work orders through machining, quality control, and logistics dispatch milestones.
4. **Managing Director / Factory Owner:** Views consolidated high-level EBITDA performance, inquiry-to-order funnels, and repeat client lifetime value.
