# INDUSTRIA — Seed Demo Data Master Inventory

To guarantee immediate presentation readiness with zero blank states, INDUSTRIA is pre-seeded with authentic industrial manufacturing datasets:

## 1. Product Catalog (`lib/mock-data/products.ts`)
- **60+ Technical Products:** High-precision components spanning all 18 industrial verticals.
- **Specification Fields:** Material grade, tolerance standard, surface finish, hardness, dimensions, and CAD availability.
- **Pricing Modes:** Contact for Quote, Starting At, and Fixed List Price.
- **CAD Downloads & Datasheets:** Pre-linked technical PDF drawings and 3D STEP simulation files.

---

## 2. Customer Master (`lib/mock-data/customers.ts`)
- **20 Verified Indian Manufacturing Entities:** Realistically modeled accounts across automotive, aerospace, oil & gas, and defense.
- **Entity Metadata:** Company name, Primary contact person, Designation, Direct phone, Corporate email, 15-character GSTIN, Billing & Multi-Plant Shipping Addresses.
- **Lifetime Value (LTV):** Ranging from ₹18.5 Lakhs to ₹3.8 Crores per account.

---

## 3. CRM & Operational Datasets (`lib/mock-data/crm-data.ts`)
- **30 Omnichannel Inquiries (`enquiries`):** Inbound leads across Website, WhatsApp Cloud API, RFQ wizard, IndiaMART, Callbacks, and Samples.
- **20 Engineering RFQs (`rfqs`):** Custom component requests with 2D/3D CAD drawing references, delivery dates, and custom tolerances.
- **15 Commercial Quotations (`quotes`):** Itemized quotes with base prices, volume discounts, freight charges, 18% GST, and validity dates.
- **12 Factory Work Orders (`orders`):** Live orders progressing through 6 shopfloor stages (Confirmed → Production → Quality Check → Ready → Dispatched → Delivered).
- **15 Plant Appointments (`appointments`):** On-site factory tours, machine trials, and technical consultations.
- **25 Document Vault Items (`documents`):** Material Test Certificates (MTC 3.1), CMM Metrology Reports, ISO 9001/AS9100D credentials, and Tax Invoices.
- **Threaded Portal Messages (`messages`):** Multi-party conversations between Customer Procurement, Sales Engineers, and Plant Operations.
