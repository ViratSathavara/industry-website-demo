# Industrial Water Motor Spare Parts — Demo Website Documentation

**Project type:** Premium B2B industrial spare-parts website + buyer enquiry/RFQ experience + customer portal + admin CRM demo  
**Project name:** Industrial Water Motor Spare Parts  
**Primary technology:** Next.js App Router + TypeScript + Tailwind CSS + shadcn/ui + Framer Motion  
**Demo mode:** Frontend-first; no real payment gateway, ERP, WhatsApp API, email provider, or production database required.

---

## 1. Project purpose

Build a polished, modern, highly visual demo website for a fictional industrial water-pump/motor spare-parts manufacturer and supplier.

The demo is not intended to copy Parshwa Traders. The Parshwa Traders website is used only as a product/content/workflow reference. Build a new visual identity, new copy, new layout, and a more modern B2B buying experience.

The website should be strong enough to show a local manufacturer/trader what a modern digital presence can look like:

- Professional company presence
- Large product catalogue
- Product search and filters
- Product detail pages
- Product compatibility information
- Request Quote / RFQ
- Upload drawing or reference image
- Request callback
- Request sample
- Technical consultation
- Factory visit / machine demo booking
- Customer registration/login
- Buyer company profile
- RFQ tracking
- Quote tracking
- Order tracking
- Downloadable documents
- Customer enquiry history
- Admin CRM
- Lead pipeline
- Product management
- Inventory-style dashboard
- Quotation management
- Order management
- Appointment management
- Analytics dashboard
- Content management

The core message of the demo is:

> **Do not just put products online. Turn the manufacturer's product catalogue into a lead-generation and sales system.**

---

## 2. Reference research completed

Primary reference:
- https://www.parshwatraders.in/pump-parts.html
- https://www.parshwatraders.in/pump-spares.html
- https://www.parshwatraders.in/profile.html

The reference site currently presents pump-parts as a category labeled **47 products**, while the server-rendered page exposes a smaller set of detailed product cards on the fetched page. The category/navigation area also lists many product families and related categories. The page uses a catalogue/RFQ model with product cards, pricing, specifications, minimum-order quantities, “Get Best Quote”, “Request Callback”, contact form, company profile, corporate brochure/video, and profile/factsheet sections.

Reference company/profile content includes industrial pump parts, industrial pump impellers, industrial pumps, customization, quality checks, infrastructure, logistics, customer satisfaction, payment/shipment details, team information, warehouse/stock/office/packaging sections, and contact/lead capture. This project should preserve those **information patterns**, not copy the reference company's identity or text verbatim.

The reference product pages also demonstrate a useful B2B pattern:

**Product → technical specs → MOQ → description → quote action → callback action → customer requirement.**

For the demo, improve this by adding compatibility, application, downloadable datasheet, RFQ builder, enquiry status, and customer portal workflows.

---

## 3. Important content/legal rule

Do **not** present the reference company as the demo company.

Do **not** copy the reference company's logo, phone number, address, GST number, personal names, testimonials, legal data, or company-specific claims into the demo.

Do not copy long product descriptions verbatim.

Use short factual product specifications as reference data and write original demo copy.

The image URLs listed later in this document are **reference/source URLs** from the publicly visible reference site/CDN. They should not automatically be shipped to a production client site. For the real client, obtain client-owned product photography or permission to use the image assets. For the demo, prefer local assets or generated/royalty-free industrial imagery.

---

# 4. Brand direction for the demo

Use a fictional brand:

**AQUAFORGE INDUSTRIALS**

Tagline:

**Engineered spares for dependable water movement.**

Alternative hero headline:

**Industrial pump spares, engineered to fit.**

Supporting copy:

> Precision-made pump components, replacement spares and engineered assemblies for industrial water handling systems. Find the right part, share your specification, and request a quotation in minutes.

Use the brand only as a fictional demo identity.

### Design personality

- Premium
- Industrial
- Precise
- Technical
- Clean
- Trustworthy
- Modern B2B
- High-conversion
- Not “generic IndiaMART clone”

### Visual inspiration

Blend the information density of a B2B industrial catalogue with the polish of modern SaaS/product websites.

Do not create a plain template with repetitive Bootstrap cards.

Use:

- Strong typography
- Large product imagery
- Technical grids
- Diagram-like backgrounds
- Fine borders
- Subtle industrial textures
- Motion used with restraint
- Micro-interactions
- Sticky RFQ CTA
- Search-first catalogue experience
- Clear spec hierarchy

### Suggested palette

- Primary: deep navy / graphite
- Secondary: industrial blue
- Accent: electric cyan or safety orange used sparingly
- Background: white / off-white / cool light gray
- Data and UI: neutral grays

No gradients everywhere. Use gradients only for hero lighting and small visual accents.

---

# 5. Target users

## Buyer personas

### Maintenance Manager
Needs emergency replacement parts and wants to find compatibility quickly.

### Purchase Manager
Needs specifications, MOQ, quotation, pricing, lead time, company details and documentation.

### Mechanical Engineer
Needs material, dimensions, pump model compatibility, drawings and technical documents.

### Dealer / Distributor
Needs bulk pricing, catalogue access, repeat ordering and account history.

### Plant Owner
Needs confidence, quality information, response speed and reliable enquiry handling.

### Small business / workshop buyer
Needs an easy mobile experience and quick WhatsApp/callback/quote actions.

---

# 6. Main website information architecture

Create these routes:

```text
/
/about
/products
/products/[slug]
/categories
/categories/[slug]
/brands-compatibility
/applications
/applications/[slug]
/capabilities
/quality
/resources
/resources/catalogue
/resources/datasheets
/resources/technical-guides
/contact
/request-quote
/request-callback
/request-sample
/book-visit
/book-demo
/search
/compare
/cart-rfq
/login
/register
/customer
/customer/dashboard
/customer/profile
/customer/rfqs
/customer/rfqs/[id]
/customer/quotes
/customer/quotes/[id]
/customer/orders
/customer/orders/[id]
/customer/documents
/customer/messages
/customer/appointments
/customer/saved-products
/customer/notifications
/admin
/admin/leads
/admin/enquiries
/admin/rfqs
/admin/quotes
/admin/customers
/admin/products
/admin/categories
/admin/inventory
/admin/orders
/admin/appointments
/admin/documents
/admin/content
/admin/team
/admin/settings
```

A demo-only switcher may also expose:

- Public Website
- Buyer Portal
- Admin CRM
- Owner Dashboard

---

# 7. Header/navigation

Desktop:

Left:
- logo

Navigation:
- Products
- Categories
- Applications
- Capabilities
- Quality
- Resources
- About

Right:
- Search
- Compare
- Login
- **Request Quote** primary CTA

Also show:

- phone icon / Call
- enquiry icon / RFQ count when applicable

Mobile:

- Logo
- Search
- RFQ mini icon
- Hamburger

Sticky CTA on mobile:

**Request Quote**

---

# 8. Homepage specification

## Hero

Headline:

**Industrial Water Pump & Motor Spares — Built for Fit, Flow & Reliability.**

Subheading:

> Explore pump impellers, shafts, sleeves, mechanical seals, casings, bearing components and replacement spares. Search by component, material, pump family or model.

Hero actions:

- Explore Products
- Request a Quote
- Talk to an Engineer

Hero visual:

Create a premium product collage of:

- stainless impeller
- cast iron impeller
- mechanical seal
- shaft/sleeve
- bearing housing
- casing

Use subtle parallax/rotation.

Add a search bar directly in the hero:

**Search product, part number, pump model or material...**

Search suggestions:

- Impeller
- Mechanical Seal
- Pump Shaft
- Bearing Housing
- Kirloskar compatible
- KSB compatible
- Stainless Steel

---

## Trust strip

Use demo metrics, clearly marked as sample/demo figures:

- 100+ Spare Part SKUs
- Multi-Material Options
- Custom Manufacturing
- RFQ Support
- Pan-India Dispatch

Do not imply these are real facts of the reference company.

---

## Product families

Create visual category tiles:

1. Pump Impellers
2. Mechanical Seals
3. Pump Shafts & Sleeves
4. Bearing Components
5. Pump Casings & Covers
6. Gaskets & O-Rings
7. Pump Assemblies
8. Industrial Pumps
9. Custom Pump Spares
10. Motor/Pump Service Parts

Each tile must show:
- representative image
- count
- short description
- Browse action

---

## Featured products

Use horizontally scrollable cards with:

- image
- product name
- category
- material
- application
- compatible pump families
- indicative price or “Price on Request”
- MOQ
- Compare
- Add to RFQ

---

## “Find the right spare” section

This should be one of the strongest UX sections.

Use a guided selector:

### Step 1
Choose pump type:

- Monoblock
- Open Well
- Submersible
- Centrifugal
- End Suction
- Split Case
- Multistage

### Step 2
Choose component:

- Impeller
- Shaft
- Sleeve
- Seal
- Bearing
- Casing
- Cover
- Gasket

### Step 3
Choose model/brand family:

- Kirloskar
- KSB
- Beacon
- Johnson
- Chemflo
- CRI
- Generic / Custom

### Step 4
Show matching products.

CTA:

**Can't find your model? Upload a photo or drawing.**

---

# 9. Product category page

Route:

`/categories/pump-impellers`

Layout:

### Breadcrumb
Home → Categories → Pump Impellers

### Category hero

- title
- description
- application badges
- category image

### Filters

Left desktop / drawer mobile:

- Product type
- Pump type
- Brand compatibility
- Material
- Diameter
- Thickness
- Structure type
- Closing type
- Blade type
- Suction type
- Phase
- Application
- MOQ
- Price range
- Availability

### Sort

- Relevance
- Newest
- Price low-high
- Price high-low
- Most requested

### Product cards

3/4-column desktop grid.

Every card should have:

- image
- product name
- SKU
- short spec chips
- material
- application
- compatibility
- MOQ
- indicative price / RFQ
- Compare checkbox
- Add to RFQ

---

# 10. Search experience

Create a global search page.

Search across:

- products
- categories
- pump models
- brands
- materials
- applications
- technical resources

Search examples:

`SS 316 impeller`

`KSB sleeve`

`100 mm shaft`

`monoblock pump spare`

`mechanical seal 33 mm`

Show:

- result count
- filters
- recent searches
- recommended products
- no-result fallback

No-result page:

> We could not find an exact match.

Provide:

**Upload a photo / drawing and let our engineer identify the part.**

---

# 11. Product detail page

This is a critical page.

Desktop layout:

Left:
- large image gallery
- zoom
- thumbnails
- technical drawing placeholder

Right:
- product title
- SKU
- availability status
- material
- compatible pump families
- price / price-on-request
- MOQ
- lead time
- quantity
- Add to RFQ
- Request Callback
- Request Sample

Below:

## Overview
Original demo copy describing the component in concise technical language.

## Technical specifications
Use a clean two-column specification table.

Fields should be dynamic per product.

## Compatibility

Show:

- pump types
- compatible brands/families
- model numbers
- “equivalent replacement” badge where appropriate

Avoid implying official OEM affiliation. Use wording such as:

**Compatible with selected pump models from this family. Verify dimensions before ordering.**

## Materials

Example:

- CI
- Cast Steel
- SS 304
- SS 316
- SS 410
- Bronze
- Brass
- WCB
- Alloy 20

## Applications

- Water transfer
- Industrial process water
- Cooling systems
- Boiler feed systems
- Irrigation
- Construction pumping
- General industrial service

## Product benefits

Use 4–6 concise bullets:

- Dimensional accuracy
- Corrosion resistance
- Durable finish
- Easy replacement
- Multiple material options
- Custom manufacturing

## Documents

- Datasheet PDF
- Technical drawing
- Installation note
- Material certificate placeholder

## Enquiry form

CTA:

**Request technical quotation**

Fields:

- Product
- Quantity
- Pump make
- Pump model
- Required material
- Required dimensions
- Delivery city
- Required date
- Name
- Company
- Mobile
- Email
- Requirement notes
- Upload image/drawing

## Related products

Use compatibility-based related recommendations.

---

# 12. RFQ / quotation flow

Use a dedicated RFQ cart, not a normal ecommerce cart only.

User can:

- Add one or many products
- Enter quantity for each
- Choose material
- Enter model number
- Add notes
- Upload documents
- Submit RFQ

### RFQ steps

1. Select products
2. Confirm specifications
3. Buyer details
4. Delivery information
5. Submit

After submission:

```text
RFQ-2026-00124
Status: Submitted
Assigned to: Sales Team
Next step: Technical review
```

Timeline:

- Submitted
- Under Review
- Technical Clarification
- Quote Prepared
- Quote Sent
- Accepted / Rejected

---

# 13. Smart enquiry forms

Create different forms instead of one giant generic form.

## General enquiry

- name
- company
- phone
- email
- requirement

## Request quote

- product(s)
- quantity
- specifications
- delivery city
- target date
- upload files

## Request callback

- name
- phone
- preferred time
- purpose

## Request sample

- product
- quantity
- company
- address
- application

## Technical consultation

- pump type
- model
- issue
- working conditions
- fluid/application
- photo/drawing

## Factory visit

- date
- visitor count
- purpose
- company
- contact

## Machine/product demo

- product category
- preferred date
- team size
- requirements

---

# 14. Buyer/customer portal

Route prefix:
`/customer`

## Dashboard

Cards:

- Active RFQs
- Open Quotations
- Orders in Progress
- Pending Actions
- Recent Messages

Activity feed:

- RFQ submitted
- quote uploaded
- order status changed
- document uploaded
- appointment confirmed

## My RFQs

Table:

- RFQ number
- date
- items
- amount estimate
- status
- sales owner
- next action

## RFQ details

Show:

- product list
- quantities
- uploaded files
- technical notes
- timeline
- messages
- quotation attachment

## Quotes

Show:

- quote number
- validity
- line items
- quantity
- unit price
- tax
- delivery
- payment terms
- notes

Actions:

- Accept
- Request Revision
- Download PDF

## Orders

Show visual status timeline:

- Order confirmed
- Production/Preparation
- Quality Check
- Packed
- Dispatched
- Delivered

## Documents

Categories:

- quotations
- invoices
- datasheets
- certificates
- drawings
- purchase orders

## Messages

Simple support/chat simulation between buyer and sales team.

## Saved products

Wishlist-style saved catalogue items.

## Appointments

List booked:

- callback
- consultation
- factory visit
- product demo

---

# 15. Admin CRM

The admin experience should look like a real business application, not a basic dashboard demo.

## Admin sidebar

Dashboard

Sales
- Leads
- Enquiries
- RFQs
- Quotations

Customers
- Customers
- Companies
- Contacts

Catalogue
- Products
- Categories
- Compatibility
- Materials
- Applications
- Documents

Operations
- Orders
- Inventory
- Appointments
- Dispatch

Marketing
- Content
- Testimonials
- Resources
- SEO

Administration
- Team
- Roles
- Settings
- Audit Log

---

# 16. Admin dashboard

Top KPI cards:

- New Leads
- Open RFQs
- Quotes Sent
- Orders
- Quote Value
- Conversion Rate

Charts:

1. Leads by source
2. RFQs over time
3. Quotation pipeline
4. Top product categories
5. Top requested products
6. Regional demand
7. Enquiries by device/source

Use Recharts.

Add period selector:

- 7 days
- 30 days
- 90 days
- This year

Use sample numbers only.

---

# 17. Lead CRM

Lead table columns:

- Lead ID
- Person
- Company
- Industry
- Location
- Source
- Interested Product
- Value
- Status
- Owner
- Last Contact
- Next Follow-up

Statuses:

- New
- Contacted
- Qualified
- Technical Review
- Quote Sent
- Negotiation
- Won
- Lost

Lead detail page:

- profile
- company
- enquiry history
- RFQs
- quotes
- orders
- notes
- attachments
- communication timeline

---

# 18. Enquiry inbox

Create a unified inbox.

Tabs:

- All
- New
- Unassigned
- Urgent
- Follow-up Due
- Closed

Each enquiry card shows:

- customer
- company
- requirement
- source
- product
- time received
- status

Actions:

- Assign
- Change status
- Add note
- Convert to lead
- Convert to RFQ
- Schedule callback

---

# 19. Quotation builder

Create a functional front-end quotation editor.

Quote fields:

- Quote number
- Customer
- Contact
- Product rows
- Quantity
- Unit price
- Discount
- Tax
- Freight
- Lead time
- Validity
- Payment terms
- Delivery terms
- Notes

Bottom:

Subtotal
Discount
Tax
Freight
Grand Total

Actions:

- Save Draft
- Preview
- Send
- Download PDF (demo)

No actual email is required.

---

# 20. Product admin

Admin can simulate:

Create product

Edit product

Duplicate product

Archive product

Change status

Add images

Add documents

Add compatibility

Add technical specifications

Fields:

- name
- slug
- SKU
- category
- subcategory
- brand/family compatibility
- product type
- material
- dimensions
- specifications JSON
- application
- description
- features
- MOQ
- price
- price mode
- lead time
- inventory status
- gallery
- technical drawing
- datasheet

---

# 21. Inventory demo

Not a real ERP inventory.

Show a convincing mock inventory screen.

Fields:

- SKU
- product
- stock status
- available
- reserved
- reorder level
- warehouse
- location
- last updated

Statuses:

- In Stock
- Low Stock
- Made to Order
- Custom
- Out of Stock

Product page can show:

**Availability: Made to order — typical dispatch 7–14 days**

but clearly label as demo data.

---

# 22. Order management

Admin order list:

- order number
- customer
- date
- total
- status
- payment status
- dispatch status

Order detail:

- customer
- items
- pricing
- delivery address
- quotation reference
- documents
- status timeline

Status:

- Confirmed
- Processing
- In Production
- Quality Check
- Packed
- Dispatched
- Delivered
- Closed

---

# 23. Appointment management

Calendar-style UI for:

- callback
- technical consultation
- factory visit
- demo
- meeting

Filters:

- today
- week
- month
- appointment type
- assigned person

Appointment detail:

- customer
- company
- phone
- requirement
- date/time
- assigned engineer/salesperson
- notes
- status

---

# 24. Applications section

Create application pages because manufacturers often sell by use case, not only product name.

Suggested applications:

1. Water Supply Systems
2. Industrial Cooling
3. Irrigation
4. Construction & Dewatering
5. Boiler / Utility Water
6. Process Water
7. Agriculture
8. Chemical & General Industry

Each application page:

- hero image
- common pump requirements
- relevant spare categories
- common failure/replacement parts
- featured products
- RFQ CTA

---

# 25. Compatibility system

This is a differentiating feature.

Create normalized demo data:

```text
Brand Family
  ↓
Pump Type
  ↓
Model Series
  ↓
Component
  ↓
Compatible Product
```

Example demo:

```text
Kirloskar
  → Centrifugal
    → DB Series
      → Impeller
        → SS / CI replacement impellers
```

Do not state official OEM status.

Use language:

- Compatible
- Equivalent replacement
- Suitable for selected models
- Verify dimensions before purchase

---

# 26. Technical resources

Resources page should have:

- Catalogue
- Product datasheets
- Material guide
- Pump spare identification guide
- Impeller selection guide
- Mechanical seal guide
- Maintenance checklist
- FAQ

Example articles:

### How to identify the right pump impeller

### CI vs SS impeller: when to specify which material

### Common pump shaft and sleeve wear symptoms

### How to measure a replacement pump spare

### Mechanical seal selection checklist

---

# 27. About page

The demo company story must be original.

Sections:

- company overview
- engineering capability
- machining/fabrication
- quality process
- materials
- customization
- packaging
- logistics
- support

Use fictional statements rather than specific real-company claims.

Example:

> AquaForge Industrials supplies and manufactures replacement pump components for water-handling and industrial pumping applications, with a focus on dimensional consistency, material selection and responsive technical support.

---

# 28. Quality page

Sections:

### Material inspection

### Dimensional inspection

### Surface/finish inspection

### Assembly verification

### Final inspection

Use process timeline:

Material → Machining → Inspection → Assembly → Packing → Dispatch

Add demo certification cards:

- ISO-style quality badge placeholder
- Material Test Certificate placeholder
- Dimensional Inspection Report placeholder

Do not claim actual certification unless a client supplies it.

---

# 29. Capabilities page

Show:

- Turning
- CNC machining
- Conventional machining
- Grinding
- Surface finishing
- Fabrication
- Assembly
- Inspection
- Custom part development

Add a “Send drawing” CTA.

---

# 30. Contact page

Include:

- address placeholder
- map placeholder
- phone
- email
- business hours
- WhatsApp CTA placeholder
- enquiry form
- department contacts

Departments:

- Sales
- Technical Support
- Purchase
- Dispatch

---

# 31. Footer

Columns:

Products
- Impellers
- Shafts
- Sleeves
- Mechanical Seals
- Casings
- Bearings
- Gaskets

Company
- About
- Quality
- Capabilities
- Applications
- Contact

Resources
- Catalogue
- Datasheets
- Guides
- FAQs

Customer
- Login
- RFQ
- Orders
- Documents

Legal
- Privacy
- Terms
- Shipping
- Warranty

Newsletter / enquiry input.

---

# 32. Floating conversion tools

Desktop:

Bottom-right floating tool group:

- Request Quote
- Call
- WhatsApp (demo link)

Product detail page:

Sticky bottom action bar:

**Add to RFQ | Request Callback**

Mobile:

sticky two-button footer:

**Call | Request Quote**

---

# 33. Product data model

Use TypeScript interfaces.

```ts
export type ProductStatus =
  | 'in-stock'
  | 'low-stock'
  | 'made-to-order'
  | 'custom'
  | 'out-of-stock';

export interface ProductSpec {
  label: string;
  value: string;
  group?: string;
}

export interface Product {
  id: string;
  sku: string;
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  categoryId: string;
  subcategory?: string;
  productType: string;
  materials: string[];
  applications: string[];
  pumpTypes: string[];
  compatibleFamilies: string[];
  modelNumbers?: string[];
  moq?: number;
  unit?: 'Piece' | 'Number' | 'Unit' | 'Set';
  indicativePrice?: number;
  priceMode: 'indicative' | 'request-quote';
  status: ProductStatus;
  leadTime?: string;
  specs: ProductSpec[];
  features: string[];
  image: string;
  gallery: string[];
  drawing?: string;
  datasheet?: string;
  tags: string[];
  featured?: boolean;
}
```

---

# 34. Category data model

```ts
export interface Category {
  id: string;
  slug: string;
  name: string;
  description: string;
  image: string;
  productCount: number;
  featured?: boolean;
}
```

---

# 35. Customer data model

```ts
export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  designation?: string;
  industry?: string;
  city?: string;
  state?: string;
  country?: string;
  taxId?: string;
  createdAt: string;
  status: 'active' | 'inactive';
}
```

---

# 36. Lead data model

```ts
export interface Lead {
  id: string;
  customerId?: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  source: 'website' | 'google' | 'referral' | 'whatsapp' | 'direct';
  interestedProducts: string[];
  status:
    | 'new'
    | 'contacted'
    | 'qualified'
    | 'technical-review'
    | 'quote-sent'
    | 'negotiation'
    | 'won'
    | 'lost';
  estimatedValue?: number;
  assignedTo?: string;
  notes: string[];
  createdAt: string;
  nextFollowUp?: string;
}
```

---

# 37. RFQ data model

```ts
export interface RFQItem {
  productId: string;
  quantity: number;
  notes?: string;
  requestedMaterial?: string;
  modelNumber?: string;
}

export interface RFQ {
  id: string;
  customerId?: string;
  items: RFQItem[];
  requirement: string;
  deliveryCity?: string;
  requiredBy?: string;
  attachments: string[];
  status:
    | 'submitted'
    | 'under-review'
    | 'technical-clarification'
    | 'quote-prepared'
    | 'quote-sent'
    | 'accepted'
    | 'rejected';
  createdAt: string;
  assignedTo?: string;
}
```

---

# 38. Quote model

```ts
export interface QuoteLine {
  productId: string;
  description: string;
  quantity: number;
  unitPrice: number;
  discount?: number;
  taxRate?: number;
}

export interface Quote {
  id: string;
  rfqId: string;
  customerId: string;
  lines: QuoteLine[];
  freight?: number;
  paymentTerms: string;
  deliveryTerms: string;
  validityDays: number;
  status: 'draft' | 'sent' | 'accepted' | 'revision-requested' | 'rejected';
  notes?: string;
  createdAt: string;
  validUntil: string;
}
```

---

# 39. Appointment model

```ts
export interface Appointment {
  id: string;
  customerId?: string;
  type: 'callback' | 'consultation' | 'factory-visit' | 'demo' | 'meeting';
  title: string;
  date: string;
  time: string;
  status: 'requested' | 'confirmed' | 'completed' | 'cancelled';
  assignedTo?: string;
  notes?: string;
}
```

---

# 40. Recommended demo product catalogue

Create a robust demo catalogue using the reference site's visible product families and technical patterns, but normalize the names and descriptions into clean original demo content.

## Category A — Pump Impellers

1. Stainless Steel Pump Impeller
2. Single Phase Motor Pump Impeller
3. Cast Iron Pump Impeller
4. Cast Iron Industrial Pump Impeller
5. Stainless Steel Centrifugal Impeller
6. Mini Openwell Pump Impeller
7. Open Well Pump Impeller
8. CI Openwell Impeller
9. RKB 125 Multistage Pump Impeller
10. NW 2 Pump Impeller
11. Industrial Pump Impeller
12. Booster Pump Impeller
13. Multistage Pump Impeller
14. Monoblock Pump Impeller
15. Double-Suction Pump Impeller
16. Single-Suction Pump Impeller

## Category B — Pump Shafts & Sleeves

17. Pump Shaft
18. Pump Shaft Sleeve
19. Stainless Steel Sleeve
20. Kirloskar-compatible Pump Shaft
21. KSB-compatible Pump Shaft
22. Johnson-compatible Pump Shaft
23. Beacon-compatible Pump Shaft
24. Chemflo-compatible Pump Shaft

## Category C — Seals

25. Mechanical Seal
26. Mechanical Shaft Seal
27. Single Cartridge Mechanical Seal
28. Double Mechanical Seal
29. Conical Spring Seal
30. Water Pump Seal
31. Rubber Oil Seal
32. 4-inch O-Ring

## Category D — Pump Casings & Covers

33. Pump Casing
34. Cast Iron Pump Casing
35. Delivery Casing
36. Pump Casing Cover
37. Suction Casing Cover
38. Industrial Casing Cover
39. Beacon Pump Casing

## Category E — Bearings & housings

40. Pump Bearing
41. Pump Bearing Housing
42. Pump Bearing Cover
43. Bearing Cover
44. Precision Ball Bearing

## Category F — Other pump spares

45. Gland Pusher
46. Stuffing Box Bush
47. Water Thrower
48. Lantern Ring
49. Wear Ring
50. Casing Ring
51. Pump Gasket Set
52. Rotating Assembly
53. Pump Diffuser
54. Industrial Pump Spare Parts Set

## Category G — Complete pumps (supporting catalogue)

55. Centrifugal Monoblock Pump
56. End Suction Pump
57. Open-Well Pump
58. Split Case Pump
59. Industrial Centrifugal Pump
60. Kirloskar-style Monoblock Pump

The demo may show 60+ products so the catalogue feels substantial.

---

# 41. Reference product specifications collected from the source site

Use the values below as **reference/demo seed inputs only**. Correct any obvious source-site inconsistencies before presenting them as technical truth.

## Mechanical Seal 1

Source-listed price: ₹7,200 / Piece  
Material: Stainless Steel  
Usage/Application: Boiler Feed Pump Sealing  
Size: 50 mm  
Material Grade: 304  
Source description indicates carbon/ceramic/PTFE construction options with Viton elastomer.

Demo treatment:

- Price: “From ₹7,200” or “Request Quote”
- Material options: SS / Carbon / Ceramic / PTFE as configurable demo values
- Application: Boiler/feed water sealing
- CTA: Request Technical Quote

## Stainless Steel Pump Impeller

Source-listed price: ₹9,000 / Number  
Material: Stainless Steel  
Structure: Single  
Closing type: Semi-closed  
Blade type: Radial  
MOQ: 1

Source indicates materials such as CI, cast steel, SS 316, SS 304, SS 410, bronze and Alloy 20.

Demo features:

- Custom material
- Multiple size options
- Single-suction/double-suction variants
- Dimensional verification

## KSB Pump Stuffing Box Bush

Source-listed price: ₹2,000 / Piece  
Material: Carbon Steel  
Rolled shape: Round bar  
Closing type: Open  
Finishing: Powder coating  
MOQ: 1

## Chemflo Pump Stuffing Box Bush

Source-listed price: ₹1,800 / Piece  
Material: Stainless Steel  
Color: Silver  
Working pressure listed: 3000  
Pack type: Box  
MOQ: 1

For the demo, display pressure unit as configurable/verify-on-enquiry instead of assuming the source value is PSI.

## Single Phase Pump Impeller For CRI

Source-listed price: ₹190 / Piece  
Diameter: 40 mm  
Material: Stainless Steel  
Phase: Single Phase  
Shape: Round  
Pack type: Box  
MOQ: 10

## CI Openwell Impeller

Source-listed price: ₹240 / Piece  
Diameter: 70 mm  
Material: Cast Iron  
Closing type: Closed  
Shape: Round  
MOQ: 10

## RKB 125 Multistage Pump Impeller

Source-listed price: ₹3,450 / Piece  
Diameter: 70 mm  
Material: Stainless Steel  
Model: RKB 125  
Finish: Polished  
MOQ: 10

## Cast Iron Centrifugal Pump Impeller

Source-listed price: ₹300 / Piece  
Thickness: 25 mm  
Structure: Double  
Closing type: Closed  
Shape: Round  
Usage: Air cooling (source-listed; use “industrial/general” in rewritten demo copy unless client confirms exact application)

## Mini Openwell Pump Impeller

Source-listed price: ₹250 / Piece  
Diameter: 50 mm  
Material: Plastic  
Surface finish: Polished  
Shape: Round  
MOQ: 10

## NW 2 Pump Impeller

Source-listed price: ₹300 / Piece  
Diameter: 40 mm  
Material: Cast Iron  
Application: Water Pump  
Shape: Round  
Closing type: Closed  
MOQ: 10

## Open Well Pump Impellers

Source-listed price: ₹250 / Piece  
Diameter: 20 mm  
Material: Stainless Steel  
Impeller type: Open  
Blade type: Forward-curved  
Shape: Round  
MOQ: 10

## Steel Pump Parts

Source-listed price: ₹1,800 / Number  
Material: Steel  
Pump type: Diesel  
Packaging: Box  
Finish: Finished  
Warranty: Fitting warranty  
Brand/families listed: Kirloskar, Beacon, KSB, Johnson, Chemflow, Microfinish  
MOQ: 1

## Pump Gland Pusher

Source-listed price: ₹720 / Piece  
Source lists aluminium in the main spec section, and description also mentions CI, WCB and SS.  
Model families: Kirloskar, Beacon, KSB, Johnson, Chemflo  
MOQ: 1

## Steel Pump Spares

Source-listed price: ₹6,300 / Number  
Materials: CI, Steel, Bronze, Brass  
Spare type: Impeller  
Pump type: Water Pump  
Power: Electric  
Warranty: Fitting warranty  
Brand: Kirloskar  
MOQ: 1

## Kirloskar Pump Impeller

Source-listed price: ₹1,800 / Piece  
Materials: Stainless Steel, Brass  
Type: Open / Semi-closed / Closed / Partially open  
Structure: Single  
Impeller type: Single-suction  
Model family: DB and other series listed in source

## Cast Iron Impeller

Source-listed price: ₹250 / Piece  
Thickness: 15 mm  
Structure: Double  
Closing type: Semi-closed  
Material: Cast Iron  
MOQ: 10

## Cast Iron Industrial Pump Impeller

Source-listed price: ₹2,500 / Piece  
Thickness: 5 mm  
Closing type: Open  
Structure: Single  
Shape: Round  
MOQ: 10

## Delivery Casing

Source-listed price: ₹27,000 / Number  
Materials: CI, SS, WCB, Alloy 20  
Pump type: Water Pump  
Source-listed brand compatibility: Kirloskar, Beacon, KSB, Johnson, Chemflo  
Warranty: Fitting warranty

## Industrial Pump Impeller

Source-listed price: ₹1,000 / Piece  
Material: Stainless Steel  
Closing type: Semi-closed  
Structure: Single  
Blade type: Backward-curved  
Impeller type: Double-suction  
MOQ: 1

## Akay Pump Spares

Source-listed price: ₹9,000 / Number  
Spare type: Pump shafts  
Pump type: Water Pump  
Material: Steel  
Power: Electric  
MOQ: 1

## Pump Casing Cover

Source-listed price: ₹18,000 / Unit  
Material: Steel  
Use: Pump cover  
Finish: Finished  
Source lists multiple casing-cover materials including CI, cast steel, SS 316, SS 304, SS 410, bronze, WCB.

## Johnson Pump Spares

Source-listed price: ₹500 / Unit  
Material: Steel  
Voltage: 250V  
Phase: Single Phase  
Brand: Johnson  
MOQ: 1

## Split Case Pumps

Source-listed price: ₹78,000 / Piece  
Max flow: 4000 LPM  
Head: 1000 ft  
Model: SDB Series  
Speed: 2900 RPM  
Material: Cast Iron

## Stainless Steel Sleeve

Source-listed price: ₹450 / Piece  
Material grade: 304  
Inner diameter: 2 inch  
Material: Stainless Steel  
Finish: Polished  
Packaging: Packet

## Chemflo Pump Impeller

Source-listed price: ₹1,800 / Piece  
Material: Stainless Steel  
Closing type: Semi-closed  
Structure: Single  
Blade type: Radial  
Impeller type: Single-suction  
Brand family: Chemflo  
MOQ: 1

## Pump Spare Parts

Source-listed price: ₹5,400 / Piece  
Spare type: Impeller  
Pump type: Water Pump  
Material: Steel  
Finish: Finished  
Warranty: Fitting warranty  
Brand: Parshwa in source; use demo brand instead

## Kirloskar Pump Spares

Source-listed price: ₹900 / Number  
Material: Steel  
Power: Electric  
Usage: Water Pump  
Brand: Kirloskar  
MOQ: 1

## Pump Shaft Sleeve

Source-listed price: ₹270 / Piece  
Material: Brass in source's main spec  
Brand family: Kirloskar  
Head shape: Round  
Length: 35 mm  
MOQ: 1

Source description also lists multiple shaft-sleeve materials such as EN8, EN19, C.I, SS 410, SS 304 and SS 316 and custom-built availability.

## Kirloskar Pump Bearing

Source-listed price: ₹2,700 / Piece  
Material: Stainless Steel  
Thickness: 50 mm  
Shape: Round  
Packaging: Box

## Cast Iron Rotating Assembly

Source-listed price: ₹63,000 / Piece  
Material: Cast Iron  
Packaging: Wooden Box  
Usage: Water  
Voltage: 240V  
Usage category: Construction

## Stainless Steel Pump Diffuser

Source-listed price: ₹18,000 / Piece  
Material: Stainless Steel  
Diameter: 105 mm  
Use: Submersible Pump  
Pack: Box  
Finish: Polished

## Rubber Oil Seal

Source-listed price: ₹135 / Piece  
Material: Synthetic rubber  
Thickness: 3 mm  
Brand field in source: Kastas  
Shape: Ring  
Warranty: Fitting warranty

## Kirloskar Monoblock Pumps

Source-listed price: ₹36,000 / Piece  
Power field: 2 HP  
Maximum discharge: 1000 LPM  
Motor horsepower field: 3 HP  
Speed: 1000 RPM  
Body/material field: Mild Steel  
Brand: Kirloskar

Treat the conflicting power fields as a source inconsistency; display this product with a structured “Verify specification” CTA.

## Pump Gaskets

Source-listed price: ₹450 / Piece  
Material: Neoprene  
Usage: Steam  
Thickness: 0.25 mm  
Warranty: Fitting warranty  
Finish: Finished  
Pack: Box

## Pump Bearing Cover

Source-listed price: ₹500 / Piece  
Structure: Single  
Material: Cast Iron  
Shape: Round  
Finish: Finished  
Color: Silver  
Pack: Box  
MOQ: 1

## 8HP Industrial Pumps

Source-listed price: ₹27,000 / Piece  
Power: 8 HP  
Flow rate: 500 m3/hr  
Brand: Kirloskar  
Body: Mild Steel  
Finish: Paint coated

## Pump Bearing Housing

Source-listed price: ₹5,100 / Number  
Inner diameter: 90 mm  
Material: Stainless Steel  
Packaging: Box  
Shape: Round  
Source description states CI/WCB options and customization.

## 4-inch Rubber O-Ring

Source-listed price: ₹100 / Piece  
Inner diameter: 4 inch  
Shape: Round  
Finish: Finished

The source page contains a material field that conflicts with the product name/context. In the demo, do not hardcode a questionable material; ask for material when requesting a quote.

## Beacon Pump Spares

Source-listed price: ₹9,000 / Unit  
Material: Steel  
Use: Water Pump  
Frequency: 50 Hz  
Finish: Color coated  
MOQ: 1

## Kirloskar Pump Stuffing Box Bush

Source-listed price: ₹12,000 / Piece  
Material: Cast Iron  
Rolled shape: Round bar  
Size: 2.7/8 inch  
Working pressure listed: 3000 PSI

The application description is incomplete in the source crawl. In the demo, include a “Technical team will confirm fitment” state rather than inventing the missing spec.

---

# 42. Additional pump-spares reference products

The reference site's separate **Pump spares** page also exposes these product examples:

1. Mechanical Pump Seal
2. Water Pump Seals
3. Pump Impeller
4. Kirloskar Pump Impeller
5. KSB Pump Spares
6. Cast Iron Pump Casing
7. Beacon Pump Casing
8. Single Cartridge Mechanical Seal
9. Double Mechanical Seal
10. Centrifugal Pump Impeller for Beacon

These can be included in the demo catalogue as additional variants.

Reference specs:

### Mechanical Pump Seal

Size: 10 mm  
Material: SS  
Brand field: Yalan  
Use: Construction  
Finish: Polished  
Pack: Box

### Water Pump Seals

Material: Mild Steel  
Power source: Electric  
Head: 0–5 m  
Brand field: CRI  
Motor horsepower: 0.1–1 HP  
Usage: Construction

### Pump Impeller

Diameter: 80 mm  
Material: Stainless Steel  
Structure: Single  
Blade type: Radial  
Impeller type: Double-suction  
Brand families listed: Kirloskar, Beacon, Johnson, KSB, Chemflow  
MOQ: 1

### KSB Pump Spares

Material: Steel  
Power: Electric  
Finish: Polished  
Pump type: Dosing Pump  
Usage: Water Pump  
MOQ: 1

### Cast Iron Pump Casing

Material: Cast Iron  
Use: Submersible Pump  
Finish: Finished  
Color: Blue  
Pressure: High Pressure

Source lists alternate materials including CI, cast steel, SS 316, SS 304, SS 410, bronze and WCB.

### Beacon Pump Casing

Material: All materials  
Finish: Machine finish  
Brand: Beacon  
Weight: According to size  
Size: All sizes available

### Single Cartridge Mechanical Seal

Shaft diameter: 33 mm  
Use: Oil  
Material: SS  
Size: 1–5 inch  
Pack: Box

### Double Mechanical Seal

Material: SS  
Shape: Round  
Use: Oil  
Size: 1–5 inch  
Faces: Double  
Pack: Box

### Centrifugal Pump Impeller for Beacon

Diameter: 20 mm  
Material: Stainless Steel  
Closing type: Semi-closed  
Impeller type: Single-suction  
Structure: Single  
Blade type: Backward-curved  
MOQ: 10

---

# 43. Category/navigation structure derived from reference

The reference website exposes these major category families:

- Pump Parts
- Industrial Pump Impellers
- Kirloskar Pump Spares
- Beacon Pump Spare Parts
- KSB Pump Spares
- Pump Spares
- Johnson Pump Spares
- DB Series Pump Impeller
- Pump Impeller
- Chemflo Pump Spares
- Water Pump Impeller
- Industrial Pumps
- KSB Pump Impellers
- Mechanical Seal
- DSM Pump Impeller
- Bearings and Bearing Covers
- Beacon Pump Impeller
- Pump Shaft
- Beacon Pump Spares
- Pump Casing Cover
- Industrial Casing Covers

For the new demo, merge these into cleaner customer-facing categories while retaining brand/model compatibility as filters.

---

# 44. Brand/model compatibility taxonomy

Use the following only as **compatibility families**, not claims of OEM ownership or partnership:

- Kirloskar family
- KSB family
- Beacon family
- Johnson family
- Chemflo family
- CRI family
- Crompton family
- DSM family
- Akay family
- Generic / Custom

Model examples visible in the reference include:

- DB Series
- DB 40/16
- DB 50/20
- DB 65/20
- DB 80/16
- DB 80/26
- DB 80/32
- RKB 125
- Mega G 65/160
- Mega G 65/200
- KDS 335
- SP series
- UP series
- KPD
- SHM
- SHD
- CE

Present them as demo compatibility filters and clearly add:

> **Compatibility is illustrative. Verify exact dimensions and model before ordering.**

---

# 45. Exact image URLs verified from the reference site

These are direct CDN image URLs that were visible through the public product pages during research.

### Mechanical Seal 1

```text
https://5.imimg.com/data5/SELLER/Default/2025/1/482007191/MA/BY/RH/511403/mechanical-seal-500x500.jpg
```

### Mechanical Pump Seal

```text
https://5.imimg.com/data5/SELLER/Default/2022/2/SW/JW/IA/511403/mechanical-pump-seal-500x500.jpg
```

### Centrifugal Pump Impeller for Beacon

```text
https://5.imimg.com/data5/SELLER/Default/2025/1/481866103/XZ/KP/TY/511403/pump-impeller-11-500x500.png
```

These URLs are supplied as source/reference assets only.

The crawler exposed only a subset of exact image URLs from the server-rendered pages. Do not invent the remaining URLs.

### Recommended production/demo approach

Store local images under:

```text
/public/images/products/
/public/images/categories/
/public/images/applications/
/public/images/company/
/public/images/resources/
```

Use local demo assets for all products.

Suggested filenames:

```text
pump-impeller-ss.webp
pump-impeller-ci.webp
mechanical-seal.webp
shaft.webp
shaft-sleeve.webp
bearing-housing.webp
pump-casing.webp
pump-cover.webp
pump-diffuser.webp
oil-seal.webp
gasket.webp
o-ring.webp
rotating-assembly.webp
```

---

# 46. Image handling rules

Use Next.js `<Image />`.

Add proper:

- width
- height
- alt
- loading
- sizes

Example alt:

**“Stainless steel industrial pump impeller”**

Do not use:

- “image1”
- “product image”
- empty alt text for important catalogue images

For product images:

- object-fit contain
- neutral background
- consistent aspect ratio
- 4:3 or 1:1 card images

For hero visuals:

- 16:9
- high resolution
- layered composition

---

# 47. Mock customer journey

Create a clickable demo flow.

### Flow A — Product discovery

Home → Search → Category → Product → Add to RFQ → Submit → Confirmation

### Flow B — Custom part enquiry

Home → Custom Manufacturing → Upload Drawing → Submit Requirement → RFQ Created

### Flow C — Customer portal

Login → Dashboard → RFQ → Quote → Accept Quote → Order → Tracking

### Flow D — Admin sales

Admin → New Enquiry → Convert to Lead → Create RFQ → Build Quote → Send Quote → Mark Won

### Flow E — Technical support

Product → Technical Consultation → Form → Appointment → Admin Calendar

---

# 48. Demo-only persistence

Use localStorage to make the application feel functional.

Persist:

- RFQ cart
- saved products
- comparison list
- demo login state
- customer profile edits
- submitted enquiries
- RFQs
- quote actions
- appointment requests
- admin updates

Do not require an external database.

Create a small mock data service layer:

```text
lib/
  mock/
    products.ts
    categories.ts
    customers.ts
    leads.ts
    rfqs.ts
    quotes.ts
    orders.ts
    appointments.ts
  services/
    product-service.ts
    customer-service.ts
    rfq-service.ts
    crm-service.ts
```

Use service functions even though the implementation uses local mock data. This keeps the project architecture ready for future backend integration.

---

# 49. Suggested project folder structure

```text
src/
  app/
    (marketing)/
      page.tsx
      about/page.tsx
      products/page.tsx
      products/[slug]/page.tsx
      categories/page.tsx
      categories/[slug]/page.tsx
      applications/page.tsx
      applications/[slug]/page.tsx
      capabilities/page.tsx
      quality/page.tsx
      resources/page.tsx
      resources/catalogue/page.tsx
      resources/datasheets/page.tsx
      resources/technical-guides/page.tsx
      contact/page.tsx
      request-quote/page.tsx
      request-callback/page.tsx
      request-sample/page.tsx
      book-visit/page.tsx
      book-demo/page.tsx
      compare/page.tsx
      search/page.tsx
      cart-rfq/page.tsx
    customer/
      dashboard/page.tsx
      profile/page.tsx
      rfqs/page.tsx
      rfqs/[id]/page.tsx
      quotes/page.tsx
      quotes/[id]/page.tsx
      orders/page.tsx
      orders/[id]/page.tsx
      documents/page.tsx
      messages/page.tsx
      appointments/page.tsx
      saved-products/page.tsx
      notifications/page.tsx
    admin/
      page.tsx
      leads/page.tsx
      leads/[id]/page.tsx
      enquiries/page.tsx
      rfqs/page.tsx
      rfqs/[id]/page.tsx
      quotes/page.tsx
      quotes/[id]/page.tsx
      customers/page.tsx
      customers/[id]/page.tsx
      products/page.tsx
      products/new/page.tsx
      products/[id]/edit/page.tsx
      categories/page.tsx
      compatibility/page.tsx
      inventory/page.tsx
      orders/page.tsx
      appointments/page.tsx
      documents/page.tsx
      content/page.tsx
      team/page.tsx
      settings/page.tsx
    login/page.tsx
    register/page.tsx
  components/
    layout/
    navigation/
    hero/
    products/
    filters/
    rfq/
    forms/
    customer/
    admin/
    analytics/
    tables/
    charts/
    shared/
  data/
    products.ts
    categories.ts
    applications.ts
    compatibility.ts
    customers.ts
    leads.ts
    rfqs.ts
    quotes.ts
    orders.ts
    appointments.ts
  lib/
    mock/
    services/
    utils.ts
    validation.ts
  hooks/
  types/
```

---

# 50. Required reusable components

Create reusable components for:

- Header
- Mega menu
- Mobile menu
- Search bar
- Breadcrumbs
- ProductCard
- ProductGrid
- ProductGallery
- ProductSpecs
- CompatibilityPanel
- ApplicationBadge
- RFQButton
- CompareButton
- RFQDrawer
- RFQItemRow
- QuoteSummary
- LeadStatusBadge
- StatusTimeline
- DocumentCard
- EmptyState
- FileUploadBox
- FormField
- SelectField
- MultiSelect
- DatePicker
- DataTable
- FilterPanel
- KPIStatCard
- PipelineBoard
- ActivityTimeline
- AppointmentCalendar
- AdminSidebar
- CustomerSidebar
- ChartCard
- ConfirmDialog
- Toast
- Modal
- Drawer

---

# 51. Animations

Use Framer Motion.

Required animations:

- hero entrance
- staggered product cards
- hover image scale
- filter drawer transition
- RFQ drawer slide-in
- status timeline progression
- dashboard KPI count-up
- chart entrance
- modal transitions
- page transitions where appropriate
- subtle scroll reveal

Avoid excessive animation.

Industrial website should feel precise rather than playful.

Respect reduced-motion preferences.

---

# 52. UI details

Buttons:

Primary:

**Request Quote**

Secondary:

**Explore Products**

Technical:

**View Specifications**

Sales:

**Talk to an Engineer**

Customer portal:

**View RFQ**

Admin:

**Create Quote**

Use clear icons from Lucide React.

---

# 53. Responsive requirements

Must work perfectly at:

- 320px
- 375px
- 390px
- 414px
- 768px
- 1024px
- 1280px
- 1440px
- 1920px

Pay special attention to:

- product tables
- technical specifications
- filters
- admin tables
- RFQ cart
- quotation builder
- dashboards

On mobile, convert wide tables into stacked cards where appropriate.

---

# 54. Accessibility

Implement:

- keyboard navigation
- visible focus styles
- semantic headings
- accessible dialogs
- aria labels
- form validation messages
- accessible tables
- sufficient contrast
- reduced-motion handling

---

# 55. SEO requirements

Add:

- metadata
- Open Graph
- Twitter cards
- canonical URLs
- sitemap.xml
- robots.txt
- JSON-LD structured data

Use product structured data only where the demo data supports it.

Suggested schema types:

- Organization
- Product
- BreadcrumbList
- WebSite
- FAQPage
- Article

Do not generate fake reviews or fake ratings in Product schema.

---

# 56. Fake/demo data rules

All demo numbers should be clearly synthetic.

Add a subtle admin/demo banner:

**DEMO ENVIRONMENT — Sample data only**

Possible demo company:

AquaForge Industrials

Possible demo location:

Ahmedabad, Gujarat, India

Do not use an actual local company's legal identity.

Demo contacts:

- sales@aquaforge-demo.local
- +91 90000 00000

Use obviously fictional data.

---

# 57. Customer-facing demo copy themes

Instead of generic marketing:

“Best quality products at best prices.”

Use concrete B2B language:

**Find the spare by model, material or dimension.**

**Upload your drawing. Get a technical response.**

**Manage every quotation from one place.**

**Turn repeat enquiries into repeat orders.**

**One catalogue. One enquiry system. One customer record.**

---

# 58. Business value story to demonstrate to manufacturers

The website should visually show the transformation:

### Before

- Customer calls
- Product information on paper
- WhatsApp photos
- Manual quotation
- No centralized lead history
- No searchable catalogue
- No follow-up reminder
- No customer portal

### After

- Searchable catalogue
- Product specifications online
- RFQ collection
- Drawing upload
- Lead CRM
- Quotation workflow
- Customer dashboard
- Order tracking
- Analytics
- SEO visibility
- Repeat enquiry history

Create a dedicated “Digital transformation” section using this before/after storytelling.

---

# 59. Admin demo scenarios

Seed the application with realistic demo records.

### Leads

- 20 demo leads
- different cities
- different industries
- varying values/statuses

### RFQs

- 12 demo RFQs
- mixed statuses
- multiple products
- some with attachments

### Quotes

- 8 demo quotes
- drafts
- sent
- accepted
- revision requested

### Orders

- 10 demo orders
- different workflow states

### Appointments

- 8 demo appointments

This makes the admin screens immediately useful in a sales demo.

---

# 60. Owner dashboard

Create a special owner view.

KPIs:

- Website enquiries
- Qualified leads
- RFQs
- Quotes
- Orders
- Quote value
- Win rate
- Average response time

Widgets:

**Where enquiries come from**

**Most searched products**

**Most requested categories**

**Top cities**

**Lead-to-quote funnel**

**Quote-to-order funnel**

**Follow-ups due today**

This section demonstrates why the website is more than a brochure.

---

# 61. Search/lead attribution demo

When submitting an enquiry, allow:

- source
- landing page
- product
- campaign placeholder
- device

Example:

```text
Source: Google Organic
Landing page: /products/stainless-steel-pump-impeller
Device: Mobile
Product: SS Pump Impeller
```

This allows the owner dashboard to show basic marketing attribution.

---

# 62. Recommended product recommendation logic

Implement simple frontend logic:

Recommend products based on:

- same category
- same material
- same pump family
- same application
- compatible model

Example:

User views “Pump Shaft”.

Show:

- Pump Shaft Sleeve
- Bearing Housing
- Mechanical Seal
- Gland Pusher

---

# 63. Compare feature

Allow selection of up to 3–4 products.

Comparison table:

- material
- diameter
- thickness
- structure
- closing type
- blade type
- compatible pump family
- MOQ
- price
- lead time

Highlight differences visually.

CTA:

**Add selected products to RFQ**

---

# 64. Upload drawing/photo feature

Create a high-quality drop zone.

Text:

**Don't know the part name? Upload a photo or drawing.**

Accepted demo formats:

- JPG
- PNG
- PDF
- DWG placeholder

Show selected file cards.

Use local state only.

---

# 65. Quote request confirmation

After submitting:

```text
Request received.

RFQ-2026-00124

Our demo sales workflow has created your requirement.

Next steps:
1. Technical review
2. Specification confirmation
3. Quotation

Expected response: Within 1 business day (demo text)
```

Actions:

- View RFQ
- Continue browsing
- Download acknowledgement

---

# 66. Notification center

Notifications:

- New quote received
- RFQ status changed
- Appointment confirmed
- Order dispatched
- Document uploaded
- Follow-up reminder

Unread count in header.

---

# 67. Demo role system

Create simple mock roles:

```text
Owner
Admin
Sales Manager
Sales Executive
Technical Engineer
Operations
Customer
```

For demo purposes, role switching may simply change visible navigation and permissions.

Example:

Sales Executive sees:

- Leads
- Enquiries
- RFQs
- Quotes
- Customers

Technical Engineer sees:

- Technical RFQs
- Drawings
- Product specifications
- Consultations

Operations sees:

- Orders
- Inventory
- Dispatch

Owner sees everything + analytics.

---

# 68. Technical stack requirements

Use:

- Next.js latest stable App Router
- TypeScript strict mode
- Tailwind CSS
- shadcn/ui
- Lucide React
- Framer Motion
- Recharts
- React Hook Form
- Zod
- date-fns

Optional:

- Zustand for lightweight UI state

Do not add heavy libraries without need.

---

# 69. Coding principles

- Strict TypeScript
- Reusable components
- Avoid duplicated UI
- Separate mock data from UI
- Separate business logic from components
- Use typed service functions
- Meaningful naming
- No giant page files
- No inline repeated data structures
- No magic numbers
- Proper error/empty/loading states
- Use skeleton loaders
- Use fallback images
- Add comments only where useful

---

# 70. Demo-mode behavior

Every major interaction should work.

Examples:

- Search filters the mock catalogue.
- Compare adds/removes products.
- RFQ drawer updates selected items.
- Enquiry forms validate.
- Submitted forms create localStorage records.
- Customer dashboard reflects created RFQ.
- Admin dashboard reflects mock records.
- Admin can change lead/RFQ status.
- Admin quote builder recalculates totals.
- Customer can accept/reject quote in demo mode.
- Order timeline updates visually.
- Appointment booking adds calendar item.

No real API needed.

---

# 71. Loading/error/empty states

Build polished states for:

Products loading

No products found

No RFQs yet

No quotes yet

No orders yet

No appointments

No notifications

404 product

404 page

Unexpected mock service error

File upload error

Form validation error

---

# 72. Performance requirements

- Optimize images
- Lazy-load noncritical media
- Avoid huge JS bundles
- Use server components where possible
- Keep client components small
- Avoid unnecessary global state
- Use stable keys
- Avoid layout shift
- Use responsive image sizes

---

# 73. Demo presentation mode

Create a hidden `/demo` route.

It should show cards:

1. Public Website
2. Product Catalogue
3. RFQ Flow
4. Customer Portal
5. CRM
6. Quotation Builder
7. Orders
8. Analytics

Each card has:

- screenshot-like preview
- one-line value
- **Open Demo** button

This page is for showing factory owners during sales meetings.

---

# 74. Demo owner pitch screen

Create a slide-like page:

## “Your products are already valuable. The missing part is digital discovery.”

Show a visual transformation:

```text
Phone calls + paper catalogue
           ↓
Digital catalogue
           ↓
Product search
           ↓
RFQ
           ↓
CRM
           ↓
Quotation
           ↓
Customer portal
           ↓
Repeat business
```

Use this as the closing sales-demo screen.

---

# 75. Suggested homepage section order

```text
1. Announcement bar
2. Header
3. Hero + product search
4. Trust/metrics
5. Product families
6. Find the right spare wizard
7. Featured products
8. Compatibility explorer
9. Applications
10. Custom manufacturing / upload drawing
11. Quality/process timeline
12. Why choose us
13. Resource/download section
14. Digital transformation / before-after
15. CTA banner
16. Footer
```

---

# 76. Suggested admin dashboard order

```text
1. Header
2. KPI cards
3. Lead/RFQ pipeline
4. Enquiry source chart
5. RFQ trend chart
6. Top requested products
7. Recent enquiries
8. Follow-ups due
9. Upcoming appointments
10. Recent orders
```

---

# 77. Suggested customer dashboard order

```text
1. Greeting/header
2. KPI cards
3. Active RFQs
4. Pending quotes
5. Order timeline
6. Recent documents
7. Messages
8. Upcoming appointments
9. Recommended products
```

---

# 78. Recommended content blocks for product pages

Every product should ideally contain:

- Product title
- SKU
- Breadcrumb
- Short description
- Hero image
- Product gallery
- Key specifications
- Material options
- Compatibility
- Application
- MOQ
- Price mode
- Lead time
- Features
- Technical notes
- Documents
- RFQ form
- Related products
- FAQ

The product page should feel like an engineering datasheet combined with a modern ecommerce experience.

---

# 79. FAQ content

Create product-category FAQs.

Examples:

### How do I identify the correct pump spare?

Use model number, pump type, component name and dimensions. The demo also provides a photo/drawing upload option.

### Can custom sizes be manufactured?

Show a demo answer explaining that custom sizing can be reviewed against a drawing/specification.

### What materials are available?

CI, cast steel, stainless-steel grades, bronze, brass and other materials can be shown as configurable demo options.

### Do you supply complete pump assemblies?

Yes, the demo catalogue contains both spare parts and complete pump examples.

### Can I request a bulk quotation?

Yes. RFQ allows product quantities, specifications and delivery information.

---

# 80. Final product experience requirements

The product experience must support these primary user intents:

### “I know the product name.”

Search → Product → RFQ

### “I only know the pump model.”

Compatibility → Model → Matching parts → RFQ

### “I don't know the product name.”

Upload photo/drawing → Requirement form

### “I am buying many items.”

Catalogue → Add multiple products → RFQ cart → Submit

### “I already buy from this supplier.”

Login → Repeat RFQ → Quote → Order

### “I am the manufacturer.”

Admin → Lead → RFQ → Quote → Customer → Order → Analytics

---

# 81. What NOT to build

Do not over-engineer the demo.

Do not build:

- real payment gateway
- real ERP integration
- real warehouse integration
- real WhatsApp API
- real email API
- real tax engine
- real shipping integrations
- real multi-vendor marketplace
- real production auth infrastructure

Use mock data and local persistence.

The objective is to prove the **design and business workflow**.

---

# 82. Final quality bar

The website must look like a serious software product used by a modern industrial company.

It should NOT look like:

- a generic WordPress company site
- a basic IndiaMART clone
- a Bootstrap template
- a dashboard template pasted together

It should feel like:

**Industrial engineering + modern B2B commerce + CRM + SaaS.**

Every important screen needs realistic sample content so that no screen looks empty.

---

# 83. Antigravity one-command master instruction

Use the following as the build instruction after creating/initializing the Next.js project:

---

## MASTER BUILD PROMPT

You are a senior product designer, UX designer, frontend architect and Next.js engineer.

Build the complete **Industrial Water Motor Spare Parts** demo application described in this document.

### Product objective

Create a premium B2B industrial spare-parts digital platform for a fictional company called **AquaForge Industrials**. It must demonstrate how a traditional industrial manufacturer/supplier can move from a static catalogue/phone-based enquiry process to a modern digital sales system.

### Required experiences

Build all of these in the same application:

1. Public marketing website
2. Product catalogue
3. Product search
4. Product filters
5. Product detail pages
6. Compatibility explorer
7. Product comparison
8. RFQ cart
9. Request Quote flow
10. Request Callback
11. Request Sample
12. Technical Consultation
13. Factory Visit booking
14. Product Demo booking
15. Customer login/register demo
16. Customer dashboard
17. Customer RFQs
18. Customer quotations
19. Customer orders
20. Customer documents
21. Customer messages
22. Customer appointments
23. Saved products
24. Notifications
25. Admin dashboard
26. Lead CRM
27. Enquiry inbox
28. RFQ management
29. Quotation builder
30. Customer management
31. Product management
32. Category management
33. Compatibility management
34. Mock inventory
35. Order management
36. Appointment management
37. Resource/content management
38. Team management
39. Settings
40. Owner analytics dashboard
41. Demo presentation page
42. Digital transformation sales page

### Design

Create a new visual identity. Do not copy the referenced company's branding or layout.

Use a premium industrial design language:

- graphite/navy base
- clean white surfaces
- restrained blue/cyan accent
- technical grid motifs
- large product imagery
- compact specification chips
- excellent typography
- fine borders
- subtle shadows
- precise spacing
- Framer Motion micro-interactions

Avoid excessive rounded cards and excessive gradients.

The visual feeling should be:

**precision engineering + modern B2B software.**

### Technology

Use:

- Next.js App Router
- TypeScript strict mode
- Tailwind CSS
- shadcn/ui
- Lucide React
- Framer Motion
- Recharts
- React Hook Form
- Zod
- date-fns

Use server components whenever practical. Use client components only for interactive pieces.

### Data

Create a realistic demo dataset using the product catalogue and specification patterns in this document.

Create 60+ demo products, 10+ categories, 8 applications, compatibility records, 20 leads, 12 RFQs, 8 quotations, 10 orders and 8 appointments.

Use the reference specifications as inspiration/seed data but write original descriptions and normalize questionable data.

Do not copy long descriptions from the reference website.

### Demo behavior

Everything must be interactive using local mock services + localStorage.

Examples:

- Search must work.
- Product filters must work.
- Compare must work.
- RFQ cart must work.
- Forms must validate with Zod.
- Submitted enquiries must be stored locally.
- Customer dashboard must display created RFQs.
- Admin must show local/mock records.
- Status changes must update UI.
- Quote builder must calculate totals.
- Order status timeline must render.
- Appointment booking must work.
- Saved products must persist.

### Routing

Implement the complete route list in this document.

Use route groups appropriately.

### Component architecture

Create small reusable components and shared UI primitives.

Do not create giant page files.

### Product UX

The product detail page is a critical screen.

It must contain:

- image gallery
- product summary
- technical specifications
- compatibility
- applications
- materials
- MOQ
- price/quote mode
- lead time
- documents
- RFQ
- callback
- technical enquiry
- related products

### RFQ UX

Create an RFQ drawer/cart.

Users can add multiple products and specify:

- quantity
- model number
- material
- dimensions
- notes
- delivery location
- required date
- attachments

After submit, generate an RFQ number and show status timeline.

### Customer portal

Create a highly polished B2B customer portal.

It must contain:

- dashboard
- RFQs
- quotes
- orders
- documents
- messages
- appointments
- saved products
- notifications
- company profile

### Admin CRM

Create a real-looking CRM.

Include:

- KPI dashboard
- lead pipeline
- enquiry inbox
- RFQ table
- quote builder
- customers
- products
- inventory
- orders
- appointments
- content
- team
- settings

### Analytics

Use Recharts.

Create realistic demo charts for:

- enquiries
- RFQs
- quote value
- order value
- top products
- top categories
- cities
- lead sources
- conversion funnel

### Forms

All important forms must use React Hook Form + Zod.

Show:

- loading
- success
- error
- validation states
- empty states

### Search-first experience

Hero search is important.

Search by:

- product
- SKU
- category
- model
- brand family
- material
- application

Add smart suggestions.

### Compatibility

Create a guided flow:

Pump type → component → brand family → model → matching products.

### Upload

Create a polished drag/drop upload UI for:

- photo
- PDF
- drawing

No real upload backend is required; store demo metadata locally.

### SEO

Implement metadata, sitemap, robots, JSON-LD and Open Graph.

### Accessibility

Use semantic HTML, accessible dialogs, keyboard navigation and visible focus states.

### Responsive

The entire site must be mobile-first and fully responsive.

### Performance

Use optimized local images, Next Image, lazy loading and minimal client-side JS.

### Demo data

Clearly label the environment as:

**DEMO ENVIRONMENT — Sample data only**

Never present demo metrics as real company facts.

### Image assets

Do not hotlink source-site images in production-ready code.

Use local demo images. The direct source image URLs in the research section may be retained in a development reference file only.

### Content

Write professional, original English copy for the fictional company.

Use technical B2B language.

Avoid generic hype.

Use concrete CTAs such as:

- Request Quote
- Talk to an Engineer
- Upload Drawing
- View Specifications
- Add to RFQ
- Compare Products
- Request Callback

### No backend requirement

Do not block the build waiting for a real backend.

Use mock services and localStorage.

Create service interfaces so a NestJS/API backend can be connected later.

### Final acceptance criteria

Before finishing:

1. Run the project.
2. Check all routes.
3. Check responsive behavior.
4. Check forms.
5. Check RFQ cart.
6. Check comparison.
7. Check customer portal.
8. Check admin CRM.
9. Check owner analytics.
10. Check localStorage persistence.
11. Check TypeScript errors.
12. Check ESLint errors.
13. Remove placeholder lorem ipsum.
14. Ensure no empty dashboard screen without sample data.
15. Ensure all major buttons perform a visible action.
16. Ensure the visual system is consistent.
17. Ensure the demo feels like one cohesive product rather than separate templates.

Do not stop after creating the homepage. Build the complete demo application.

---

# 84. Reference sources

Primary source pages researched:

- Parshwa Traders — Pump Parts: https://www.parshwatraders.in/pump-parts.html
- Parshwa Traders — Pump Spares: https://www.parshwatraders.in/pump-spares.html
- Parshwa Traders — Profile: https://www.parshwatraders.in/profile.html
- Parshwa Traders — Beacon Pump Impeller: https://www.parshwatraders.in/beacon-pump-impeller.html

Research observations are based on the current web crawl available at the time this document was created.

---

# 85. Final build priority

If Antigravity needs to stage the implementation, use this order:

### Phase 1 — Foundation

Next.js setup → theme → layouts → navigation → mock data → shared components

### Phase 2 — Catalogue

Homepage → categories → search → filters → products → product details

### Phase 3 — Conversion

RFQ drawer → quote form → uploads → callback → consultation → appointments

### Phase 4 — Customer

Login demo → customer dashboard → RFQs → quotes → orders → documents

### Phase 5 — Admin

Dashboard → leads → enquiries → RFQs → quote builder → customers → products

### Phase 6 — Operations

Inventory → orders → appointments → documents

### Phase 7 — Analytics

Owner dashboard → charts → attribution → product demand

### Phase 8 — Polish

Animations → responsive → accessibility → SEO → empty/loading/error states → final QA

---

## End of documentation
