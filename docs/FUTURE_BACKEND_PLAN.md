# INDUSTRIA — Future Backend Architecture & Production Roadmap

## 1. Migration Overview
While INDUSTRIA runs seamlessly in a standalone demo mode using `DemoStateContext` and persistent `localStorage`, the data contracts and TypeScript interfaces have been architected to map 1:1 to a production cloud backend.

---

## 2. Target Production Stack
- **Database:** PostgreSQL (AWS RDS or Supabase) with pgvector for semantic drawing/spec matching.
- **ORM:** Prisma ORM or Drizzle ORM mapping directly to existing interfaces in `lib/types/index.ts`.
- **Authentication:** NextAuth.js (Auth.js) or Clerk with multi-tenant enterprise SAML / SSO support for Tier-1 corporate procurement teams.
- **Object Storage:** AWS S3 (Mumbai `ap-south-1`) with CloudFront CDN for 2D/3D CAD models (`.step`, `.iges`, `.dxf`, `.pdf`), with pre-signed URLs and dynamic watermarking.
- **Background Jobs:** Inngest or BullMQ for automated WhatsApp quote notifications, quotation expiry reminders, and ERP reconciliation crons.

---

## 3. Database Schema Mapping (PostgreSQL / Prisma)

```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

enum Role {
  OWNER
  SALES_MANAGER
  OPERATIONS
  BUYER
  VIEWER
}

enum QuoteStatus {
  DRAFT
  SENT
  ACCEPTED
  EXPIRED
  DECLINED
}

enum OrderStatus {
  PENDING
  CONFIRMED
  PRODUCTION
  QUALITY
  READY
  DISPATCHED
  DELIVERED
}

model Customer {
  id                String    @id @default(cuid())
  companyName       String
  contactPerson     String
  designation       String
  phone             String
  email             String    @unique
  gstNumber         String    @unique
  industry          String
  city              String
  state             String
  billingAddress    String
  shippingAddresses String[]
  ltv               Decimal   @default(0)
  quotes            Quote[]
  orders            Order[]
  rfqs              RFQ[]
  createdAt         DateTime  @default(now())
}

model RFQ {
  id               String      @id @default(cuid())
  rfqNumber        String      @unique
  customerId       String?
  customer         Customer?   @relation(fields: [customerId], references: [id])
  companyName      String
  contactPerson    String
  phone            String
  email            String
  industry         String
  deliveryLocation String
  targetDate       DateTime
  budget           Decimal?
  attachedFile     String?
  status           String      @default("Submitted")
  quote            Quote?
  createdAt        DateTime    @default(now())
}

model Quote {
  id           String      @id @default(cuid())
  quoteNumber  String      @unique
  rfqId        String?     @unique
  rfq          RFQ?        @relation(fields: [rfqId], references: [id])
  customerId   String
  customer     Customer    @relation(fields: [customerId], references: [id])
  subtotal     Decimal
  discountTotal Decimal
  taxTotal     Decimal
  shippingFee  Decimal
  grandTotal   Decimal
  status       QuoteStatus @default(SENT)
  order        Order?
  createdAt    DateTime    @default(now())
}

model Order {
  id               String      @id @default(cuid())
  orderNumber      String      @unique
  quoteId          String?     @unique
  quote            Quote?      @relation(fields: [quoteId], references: [id])
  customerId       String
  customer         Customer    @relation(fields: [customerId], references: [id])
  totalAmount      Decimal
  status           OrderStatus @default(CONFIRMED)
  productionStage  String
  trackingNumber   String?
  createdAt        DateTime    @default(now())
}
```

---

## 4. ERP & WhatsApp API Connectors
1. **Tally Prime & SAP S/4HANA:** RESTful webhooks to push approved Purchase Orders (`Order`) directly into accounting ledgers without manual keying.
2. **Meta WhatsApp Cloud API:** Automated dispatch of Quotation PDFs and Transporter tracking links directly to customer procurement managers upon status progression.
