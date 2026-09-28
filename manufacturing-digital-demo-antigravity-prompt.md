# Antigravity Master Prompt — Manufacturing Digital Growth Demo Platform

Copy this entire document into Antigravity as ONE project-generation instruction.

---

## 0. ROLE

Act as a senior product architect, UX/UI designer, Next.js engineer, frontend architect, B2B commerce designer, CRM designer, and QA engineer.

Your task is to build a complete, polished, interactive DEMO PLATFORM for a digital transformation agency that wants to show small and medium manufacturing businesses how a traditional offline/local factory can become a modern digital business.

This is a FRONTEND-ONLY DEMO. It is not a production SaaS, not a real marketplace, and not a real client site.

The purpose is to demonstrate:

1. How a manufacturer can present its products professionally online.
2. How buyers can discover products and request quotes.
3. How customers can create accounts and manage enquiries, quotations, orders, documents and appointments.
4. How factory owners/sales teams can receive, qualify and manage leads.
5. How product catalogues, customer data, RFQs, quotes and orders can connect in one digital workflow.
6. How the same digital system can be adapted for different manufacturing verticals.
7. How digital presence can turn website traffic, Google searches, WhatsApp, marketplaces and exhibitions into trackable business enquiries.

Do NOT build only a brochure website.
Build a visually impressive WEBSITE + CUSTOMER PORTAL + ADMIN/CRM DEMO + OPERATIONS VIEW.

The entire application must feel like a premium agency-created demo that can be opened on a laptop during a sales meeting and demonstrated live.

---

# 1. CORE CONCEPT

Product/demo name:

"INDUSTRIA — Digital Factory Experience"

Subtitle:
"Turn your factory into a digital business."

Alternative small label:
"Manufacturing Digital Growth Demo"

Use a clean fictional brand. Make it obvious throughout the demo that all company, product, customer, order and performance data is SAMPLE/DEMO DATA.

Do not use real client claims.
Do not create fake testimonials from real companies.
Do not invent certifications for real companies.
Do not imply that demo metrics are actual results.

Use a visible but tasteful badge in admin/demo areas:
"DEMO DATA — Illustrative experience"

The platform must support switching between multiple sample manufacturing industries from a global "Industry Preview" control.

---

# 2. RESEARCH-DRIVEN PRODUCT STRATEGY

Design the system around the needs of real B2B manufacturers, industrial suppliers, OEMs, fabricators, machinery companies, agro-machinery businesses, packaging companies, plastics businesses, textile companies, food-processing companies and similar MSMEs.

The experience should combine patterns normally found in:

- industrial manufacturer websites
- B2B product catalogues
- RFQ systems
- quotation workflows
- customer portals
- CRM pipelines
- distributor/dealer enquiry systems
- product comparison tools
- document libraries
- order tracking systems
- service/maintenance portals
- simple B2B e-commerce

Do not assume every manufacturer needs direct online checkout.
Use three commercial modes:

A. BUY NOW — for standard products.
B. REQUEST QUOTE — for configurable/custom/large-volume products.
C. REQUEST SAMPLE / BOOK DEMO — for sample-led or sales-led products.

For manufacturing businesses, "Booking" should primarily represent:

- factory visit
- product demonstration
- machine demo
- technical consultation
- site visit
- service appointment
- installation visit
- maintenance/AMC request

Avoid consumer-style restaurant/hotel booking UX.

---

# 3. TARGET INDUSTRIES

Create realistic DEMO categories that cover the broad manufacturing opportunity space.

Primary categories:

1. Engineering & Fabrication
2. Industrial Machinery & Equipment
3. Agricultural Machinery
4. Pumps, Motors & Fluid Equipment
5. Electrical & Electronics
6. Packaging Machinery & Packaging Products
7. Plastic & Rubber Products
8. Textile, Garments & Home Textiles
9. Food & Agro Processing
10. Construction Equipment
11. Auto Components
12. Solar / Renewable Energy Components
13. Metal Products & Components
14. Furniture / Wood / Interior Manufacturing
15. Paper, Printing & Packaging
16. Ceramics / Mineral Products
17. Chemicals & Industrial Materials
18. Pharma / Medical-device Manufacturing

For the actual demo homepage, do NOT show 18 giant cards at once.
Show 8-10 high-quality cards and place the remaining industries inside the full directory.

Use industry-specific sample content so that switching an industry changes:

- hero image
- company type
- product categories
- sample products
- key specifications
- applications
- enquiry fields
- buyer questions
- service offerings

Example:

Agricultural Machinery might collect:
- machine type
- tractor compatibility
- HP requirement
- working width
- capacity
- quantity
- delivery district

Engineering/Fabrication might collect:
- material
- dimensions
- quantity
- tolerance
- drawing/CAD upload
- surface finish
- target delivery date

Packaging might collect:
- packaging type
- material
- dimensions
- print colors
- monthly quantity
- GSM/thickness
- sample requirement

Textile might collect:
- fabric type
- GSM
- width
- color
- pattern
- quantity
- private label requirement

Food processing might collect:
- product type
- packaging size
- MOQ
- private label
- shelf life requirement
- delivery state/country

---

# 4. DESIGN DIRECTION

Visual inspiration:

- Vercel
- Linear
- Stripe
- Framer
- Webflow
- premium industrial B2B websites

Design personality:

Premium
Modern
Minimal
Industrial
Trustworthy
High-end
Clean
Fast
Technical
Professional
Conversion-focused

Do NOT make it look like an old-fashioned industrial directory.
Do NOT use generic blue-gradient corporate templates.
Do NOT overcrowd the UI.
Do NOT use excessive rounded cards everywhere.

Preferred visual language:

- warm/off-white background
- charcoal/graphite text
- neutral slate surfaces
- subtle borders
- one strong industrial accent such as burnt orange / amber
- large typography
- clean iconography
- strong product photography
- subtle grain/noise where appropriate
- generous whitespace
- premium data tables
- technical specification layouts
- subtle motion

Use a consistent design system with tokens.

Recommended typography:
- Inter or Geist-like typography
- strong display sizes for hero
- compact labels and numeric metrics

Use Lucide icons.

Use Framer Motion for meaningful animations only.
Avoid animation for the sake of animation.

---

# 5. TECH STACK

Use:

- Next.js latest stable compatible with the project environment
- App Router
- TypeScript strict mode
- Tailwind CSS
- shadcn/ui where appropriate
- Lucide React
- Framer Motion
- Recharts for dashboard analytics
- React Hook Form where useful
- Zod for frontend validation

Frontend only.

No real backend required.
No PostgreSQL required.
No Prisma required.
No authentication server required.
No external CRM required.
No payment gateway required.
No WhatsApp API required.
No email API required.
No third-party marketplace API required.

Use local mock data and browser localStorage/state so interactions feel real.

The structure must make it easy to replace mock services with real APIs later.

Create service interfaces such as:

- productService
- inquiryService
- rfqService
- quoteService
- customerService
- orderService
- appointmentService
- messageService
- documentService
- analyticsService

Provide mock implementations now.

---

# 6. APPLICATION ARCHITECTURE

Use a clean modular architecture.

Suggested structure:

app/
  (marketing)/
  industries/
  products/
  categories/
  company/
  contact/
  request-quote/
  request-sample/
  book-demo/
  login/
  portal/
  admin/

components/
  marketing/
  catalog/
  rfq/
  portal/
  admin/
  charts/
  tables/
  forms/
  navigation/
  common/
  ui/

lib/
  mock-data/
  services/
  validation/
  utils/
  constants/
  types/

public/
  images/
  icons/
  documents/

hooks/
  use-demo-state
  use-cart
  use-rfq
  use-toast
  use-local-storage

styles/

Also create:

docs/
  PRODUCT_BLUEPRINT.md
  ROUTES.md
  DATA_MODEL.md
  DESIGN_SYSTEM.md
  INDUSTRY_MATRIX.md
  DEMO_DATA.md
  DEMO_SCRIPT.md
  IMPLEMENTATION_NOTES.md
  FUTURE_BACKEND_PLAN.md

README.md

---

# 7. PUBLIC WEBSITE — ROUTES

Implement these routes:

/
/industries
/industries/[slug]
/products
/products/[slug]
/categories
/categories/[slug]
/applications
/manufacturing-process
/certifications
/projects
/about
/contact
/request-quote
/request-sample
/book-demo
/download-catalogue
/login

Optional additional route:
/search

---

# 8. PUBLIC HOMEPAGE — FULL SECTION PLAN

The homepage must feel like a real premium manufacturing digital transformation demo.

## Header

Desktop:

- logo
- Industries
- Products
- Solutions
- Applications
- Company
- Resources
- search icon
- language switcher
- "Request a Quote" CTA
- demo-mode indicator

Mobile:
- logo
- search
- menu
- primary CTA

Header should become compact/sticky on scroll.

## Hero

Headline:
"Your factory deserves more than a phone number."

Supporting copy:
"Turn products, capabilities and factory expertise into a digital sales channel that works 24/7."

Primary CTA:
"Explore Digital Factory"

Secondary CTA:
"Request a Quote"

Hero visuals:
- premium factory imagery
- floating product cards
- enquiry notification
- small analytics indicator
- subtle motion

Do not overdo 3D.
Use layered UI composition rather than gimmicks.

## Digital Growth Strip

Show the transformation:

Offline factory
→ Online catalogue
→ Product discovery
→ Enquiry
→ RFQ
→ Quote
→ Customer account
→ Order
→ Repeat business

Animate the flow while scrolling.

## Industry Explorer

Title:
"One digital system. Many manufacturing industries."

Cards for selected industries.

Each card:
- image
- category
- sample product type
- short description
- "Preview experience"

Add an "Explore all industries" CTA.

## Product Discovery Section

Show a real-looking industrial product search.

Components:
- search bar
- category filter
- industry filter
- application filter
- material filter
- availability
- product card grid

Product cards should have:
- image
- product code
- product name
- category
- short specs
- applications
- MOQ if relevant
- lead time
- "View product"
- "Quick quote"

## Featured Product

Large editorial product section with:
- image
- technical specs
- application list
- quote CTA
- sample CTA

## Why Buyers Choose Digital Manufacturers

Use four or five outcomes:

- Discover products faster
- Get technical information instantly
- Request quotes 24/7
- Track enquiries and orders
- Access documents in one place

## Capability / Factory Section

Show:

- production capacity
- equipment
- materials
- quality checks
- sectors served
- customisation
- delivery regions

Do not claim these are real company numbers.
Label them as demo content.

## Manufacturing Process

Visual process timeline:

Requirement
→ Engineering
→ Material
→ Production
→ Quality
→ Packing
→ Dispatch
→ After Sales

Each step expands into a mini panel.

## Certifications / Quality

Show demo cards for:

- ISO-style placeholder
- Quality inspection
- Material traceability
- Testing
- Packaging standards

Make them clearly fictional/illustrative.
Never create fake certificate numbers.

## Applications / Industries Served

Interactive grid showing where the products can be used.

Example:
Agriculture
Construction
Automotive
Textile
Food Processing
Renewable Energy
Industrial Automation
Water & Utilities

## Digital Enquiry Section

Large CTA:
"Have a requirement? Send it once. Let the sales team take it from there."

Buttons:
- Request Quote
- Upload Drawing
- Request Callback
- Book Technical Discussion

## Lead Form Preview

Show an interactive compact form with:

Name
Company
Phone
Email
Product/Requirement
Quantity
Location
Preferred contact
Message
File upload placeholder

On submit:
- show success state
- create mock lead
- show reference number
- show next steps

## Testimonials / Trust

Do not use fake named customers.
Use anonymous demo roles:

"Procurement Manager — sample buyer journey"
"Dealer — illustrative workflow"
"Factory Owner — demo persona"

Clearly label the entire section as illustrative/demo.

## Final CTA

"Take your factory from local discovery to digital growth."

CTA:
"Start the Demo"

---

# 9. INDUSTRY DIRECTORY

Create a high-quality industry directory.

Features:
- search
- alphabetic filter
- category filter
- popular industries
- manufacturing capability tags
- product counts
- sample use cases

Industry detail page must contain:

- hero
- industry overview
- typical buyer personas
- product categories
- sample products
- common RFQ fields
- applications
- manufacturing process
- services
- common documents
- enquiry CTA
- booking CTA

Example buyer personas:

- procurement manager
- distributor
- contractor
- project manager
- retail buyer
- OEM buyer
- export buyer
- business owner

---

# 10. PRODUCT CATALOGUE

This is one of the most important parts of the demo.

Build a professional B2B catalogue.

## Catalogue page

Left filter sidebar on desktop.
Drawer/filter sheet on mobile.

Filters:
- industry
- category
- subcategory
- application
- material
- price mode
- MOQ
- lead time
- customization
- availability

Sort by:
- relevance
- newest
- popular
- featured

Search should work by:
- product name
- SKU
- product code
- category
- alias/keyword

## Product detail page

Layout:

Left:
- gallery
- image thumbnails
- zoom
- technical drawing placeholder

Right:
- product name
- product code
- availability/status
- quick specifications
- CTA buttons
- MOQ
- lead time
- customization availability

Primary actions:

"Request Quote"
"Request Sample"
"Contact Sales"
"Add to RFQ"
"Add to Compare"

Below:

- overview
- technical specifications
- applications
- materials
- variants
- dimensions
- packaging
- downloadable documents
- related products
- frequently requested products
- FAQs

Add a sticky bottom action on mobile:

Request Quote | WhatsApp-style Contact | Call

---

# 11. PRODUCT COMPARISON

Build comparison experience.

Users can compare up to 3 products.

Compare:
- dimensions
- material
- capacity
- power
- output
- weight
- MOQ
- lead time
- customization
- applications

Use generic fields when the industry changes.

Example:
Pump products may compare flow/pressure.
Agricultural machinery may compare HP/width/capacity.
Textiles may compare GSM/width/composition.
Packaging may compare size/GSM/capacity.

Do not force the same technical fields across every industry.

---

# 12. RFQ / REQUEST QUOTE BUILDER

This must be a major feature.

Create a multi-step RFQ experience.

Step 1 — Product selection
Step 2 — Requirement details
Step 3 — Quantity & delivery
Step 4 — Customer/company details
Step 5 — Attachments
Step 6 — Review & submit

Fields:

Product
Quantity
Unit
Customization
Material
Dimensions
Target delivery date
Delivery location
Application
Budget (optional)
Message
Drawing/specification upload placeholder
PO/reference number (optional)

Company details:

Company name
Buyer name
Designation
Phone
Email
GST/VAT/Tax ID placeholder
Billing address
Shipping address

Submit button:
"Submit RFQ"

After submission:

- generate RFQ number such as RFQ-2026-00482
- display confirmation timeline
- show "Sales team will review"
- show a mock estimated response time
- allow user to go to portal

Persist submitted RFQ in localStorage.

---

# 13. SAMPLE REQUEST

Create a sample request workflow.

Fields:
- product
- sample quantity
- purpose
- company
- shipping address
- phone
- email
- message

Status:

Requested
Reviewing
Approved
Dispatched
Delivered
Closed

Use demo state only.

---

# 14. FACTORY / TECHNICAL DEMO BOOKING

Create a booking module appropriate for manufacturing.

Booking types:

- Factory Visit
- Machine Demo
- Technical Consultation
- Site Visit
- Service Visit
- Installation
- Maintenance

UX:

Choose booking type
→ choose date
→ choose time slot
→ enter company details
→ confirm

Calendar must be visually strong.

No real calendar API.
Use mock slots.

Confirmation:

Booking ID
Date
Time
Type
Assigned representative
Location
Status

Statuses:

Requested
Confirmed
Rescheduled
Completed
Cancelled

---

# 15. CUSTOMER AUTH / DEMO LOGIN

Do not build real authentication.

Create a demo login selector.

Login cards:

1. Buyer / Customer
2. Sales Admin
3. Business Owner
4. Sales Executive
5. Operations

For the demo, use sample credentials displayed on screen behind an "Use demo account" button.

Example:

Customer Demo
customer@demo.com
Demo123

Admin Demo
admin@demo.com
Demo123

Owner Demo
owner@demo.com
Demo123

Clicking a role opens the relevant portal.

Persist selected role locally.

---

# 16. CUSTOMER PORTAL

Route prefix:
/portal

Layout:

- desktop sidebar
- mobile bottom navigation or menu
- topbar
- notifications
- company selector
- user menu

## Customer Dashboard

Show:

Active RFQs
Pending Quotes
Active Orders
Upcoming Appointments
Unread Messages
Outstanding Documents

Visuals:

- order status
- RFQ status
- recent activity
- recommended products

## My Company

Fields:

Company name
Contact person
Designation
Phone
Email
Tax ID placeholder
Industry
Website
Billing address
Shipping addresses
Buyer team members

Allow editing in demo.

## RFQs

Table/list:

RFQ number
Date
Products
Quantity
Status
Last update
Assigned sales person

Statuses:

Draft
Submitted
Reviewing
Need Information
Quoted
Won
Closed
Lost

## RFQ detail

Show:

requirement summary
products
files
timeline
messages
sales representative
quote links

## Quotes

Quote cards/table.

Fields:

Quote number
RFQ number
Issue date
Expiry
Subtotal
Discount
Tax
Total
Lead time
Payment terms
Delivery terms

Actions:

View
Download PDF placeholder
Accept
Request changes
Decline

When Accept is clicked:
show confirmation and change state.

## Orders

Order list.

Order detail:

Order placed
Confirmed
Production
Quality check
Ready to dispatch
Dispatched
Delivered

Create a visual timeline.

## Documents

Document categories:

Quotations
Invoices
Product datasheets
Technical drawings
Quality reports
Certificates
Purchase orders
Delivery documents

Use download buttons that open demo preview or create placeholder text.

## Messages

Create a simple threaded message UI.

Example:

Buyer
Sales representative
Operations

Do not create actual external messaging.
Store messages in local state.

## Appointments

Upcoming and previous appointments.

## Saved Products

Favorites and compared products.

## Notifications

Examples:

"Quote QT-1042 expires in 3 days"
"RFQ-482 is under review"
"Order SO-210 is now in production"
"Technical document has been uploaded"

---

# 17. ADMIN / CRM DEMO

Route prefix:
/admin

This is the second major part of the demo.

The admin must look like a premium SaaS command center, not a basic CRUD dashboard.

Sidebar sections:

Overview
Leads
Enquiries
RFQs
Quotes
Customers
Products
Categories
Orders
Appointments
Documents
Messages
Analytics
Content
Team
Settings

---

# 18. ADMIN DASHBOARD

Top KPI cards:

Website Visitors
Product Views
New Enquiries
RFQs
Quotes Sent
Orders
Conversion Rate
Revenue (demo)

Every metric must display:
- current number
- comparison period
- tiny sparkline or trend
- tooltip

Clearly label all financial numbers as demo data.

## Dashboard charts

Use Recharts.

Charts:

1. Enquiries over time
2. RFQ funnel
3. Quote conversion
4. Product views
5. Enquiries by source
6. Orders by industry
7. Geographic distribution
8. Top products

Sources:

Website
Google Search
Google Business Profile
WhatsApp
IndiaMART
TradeIndia
Exhibition
Referral
Direct

These are demo lead-source labels; do not connect to real platforms.

---

# 19. LEAD MANAGEMENT / CRM

Create CRM pipeline.

Pipeline stages:

New
Contacted
Qualified
Requirement Collected
Quote in Progress
Quote Sent
Negotiation
Won
Lost

Lead card should show:

Name
Company
Industry
Location
Requirement
Source
Estimated value
Owner
Last activity
Next follow-up
Priority

Clicking a lead opens a detail drawer/page.

Lead detail:

- contact information
- company information
- enquiry history
- RFQs
- quotes
- orders
- appointments
- documents
- notes
- activity timeline
- messages

Actions:

Assign
Change status
Add note
Create follow-up
Create quote
Create appointment
Send mock WhatsApp
Convert to customer

---

# 20. ENQUIRY INBOX

Create an omnichannel-looking enquiry inbox.

Tabs:

All
Website
RFQ
Product
Callback
Sample
Appointment
Marketplace
Referral

Each enquiry card:

- timestamp
- customer
- company
- product
- source
- stage
- assignee
- urgency

Build quick actions.

Add filters:

Date
Industry
Source
Product
Location
Assignee
Status

---

# 21. RFQ MANAGEMENT

Admin table:

RFQ ID
Customer
Company
Product
Quantity
Date
Due date
Status
Sales owner

Detail page:

Customer requirements
Attachments
Technical details
Internal notes
Quote builder
Messages
Activity history

CTA:
"Create Quote"

---

# 22. QUOTATION BUILDER

Build a realistic frontend quotation builder.

Fields:

Customer
Company
RFQ
Validity
Currency
Payment terms
Delivery terms
Lead time
Shipping
Tax
Discount
Notes

Line items:

Product
SKU
Description
Qty
Unit price
Discount
Tax
Line total

Calculate:

Subtotal
Discount
Tax
Shipping
Grand total

Allow adding/removing line items.

Preview quotation.

Buttons:

Save Draft
Preview
Send Mock Quote
Download Demo PDF

When "Send Mock Quote" clicked:
- update quote status
- add timeline event
- show success toast

No real email.

---

# 23. CUSTOMER MANAGEMENT

Customer list with:

Customer/company
Industry
Region
Last enquiry
Open RFQs
Open quotes
Orders
Lifetime value (demo)
Account owner
Status

Customer detail page should feel like a 360-degree CRM record.

Sections:

Overview
Contacts
Addresses
RFQs
Quotes
Orders
Documents
Appointments
Messages
Activities
Notes

Add customer/edit modal.

---

# 24. PRODUCT MANAGEMENT

Admin product catalogue.

Table columns:

Image
Product
SKU
Category
Industry
Mode
MOQ
Status
Views
Enquiries

Actions:

Edit
Duplicate
Archive
Preview

Create/edit product form:

Basic details
Descriptions
Images
Category
Industry
Specifications
Variants
MOQ
Lead time
Price mode
Applications
Documents
FAQs
SEO metadata

Price modes:

Visible price
Starting from
Request quote
Contact for price

---

# 25. CATEGORY MANAGEMENT

Tree structure:

Industry
→ Category
→ Subcategory
→ Product

Allow expanding/collapsing hierarchy.

Show product counts.

---

# 26. ORDER MANAGEMENT

Order table:

Order ID
Customer
Items
Total
Order date
Status
Payment status
Production status
Dispatch status

Order detail timeline:

Enquiry
Quote
Order
Production
Quality
Packing
Dispatch
Delivery

Allow admin to change status with demo transitions.

---

# 27. APPOINTMENT MANAGEMENT

Admin calendar.

Views:

Day
Week
Month

Booking cards:

Customer
Company
Type
Time
Sales owner
Location
Status

Actions:

Confirm
Reschedule
Cancel
Mark completed
Assign representative

---

# 28. DOCUMENT MANAGEMENT

Document library.

Categories:

Product Datasheets
Technical Drawings
Certificates
Quotations
Invoices
POs
Quality Reports
Brochures
Catalogues

Filters:

Product
Customer
Document type
Date

Upload should be mocked.
Use local sample files/placeholders.

---

# 29. CONTENT MANAGEMENT DEMO

Create a lightweight CMS-like admin page.

Manage:

Homepage hero
Featured products
Industry sections
Applications
FAQs
Blog/resource cards
Contact information
SEO metadata
Footer links

No real database.

Allow toggling homepage sections on/off in demo state.

---

# 30. ANALYTICS

Analytics dashboard should demonstrate why digital presence matters.

Show:

Traffic
Product discovery
Search terms
Product views
Enquiry conversion
RFQ conversion
Source performance
Regional demand
Top industries
Top products
Repeat customers

Add a conversion funnel:

Visitors
↓
Product Views
↓
Enquiries
↓
RFQs
↓
Quotes
↓
Orders

Do not claim that these metrics are real.

---

# 31. TEAM / ROLE-BASED ACCESS DEMO

Create roles:

Business Owner
Admin
Sales Manager
Sales Executive
Operations Manager
Customer / Buyer

Show permission examples.

Business Owner:
all analytics + approvals + settings

Admin:
all operational modules

Sales Manager:
leads + enquiries + RFQs + quotes + customers

Sales Executive:
assigned leads + RFQs + quotes + appointments

Operations:
orders + production + dispatch + documents

Customer:
own account + RFQs + quotes + orders + documents + messages + appointments

Because this is frontend-only, permission enforcement only needs to be simulated in the UI.

---

# 32. SMART DEMO DATA

Create rich sample data.

At minimum:

18 industries
30 categories
60 products
20 companies/customers
30 enquiries
20 RFQs
15 quotes
12 orders
12 appointments
25 documents
20 messages

Use Indian-style business names but clearly fictional.

Example company patterns:

Shree Shakti Engineering
Aarav Agro Machines
Patel Precision Works
Navkar Packaging Systems
Sahyog Plastics
Umiya Textile Works
Western Pump Systems
Krishna Food Processing
Shreeji Industrial Solutions
Mahadev Fabrication

Do not use actual company claims.

Use cities such as:

Visnagar
Mehsana
Unjha
Vadnagar
Himatnagar
Ahmedabad
Gandhinagar
Rajkot
Vadodara
Surat
Pune
Mumbai
Delhi
Jaipur
Indore

Use fictional addresses.

---

# 33. PERSONALIZED INDUSTRY DEMO SWITCHER

This is extremely important for sales meetings.

Create a floating or top-right "Switch Demo Industry" control.

Options:

Engineering
Agricultural Machinery
Pumps
Packaging
Plastic
Textile
Food Processing
Electrical
Construction Equipment
Auto Components

When switched:

- homepage hero changes
- product cards change
- category labels change
- enquiry form fields change
- product detail specs change
- recommended applications change
- dashboard top products change

This makes ONE website useful for showing many different potential client industries.

---

# 34. SALES PRESENTATION / DEMO MODE

Add a special route:
/demo

Purpose:
The agency employee opens this route in front of a business owner.

Build a cinematic presentation-style page.

Sections:

1. The problem
2. Current offline journey
3. Digital manufacturer journey
4. Website/catalogue
5. RFQ
6. Customer portal
7. Admin CRM
8. Analytics
9. Growth opportunities
10. Call to action

Add buttons that deep-link into the live demo modules.

Example:

"Show Product Discovery"
→ /products

"Show RFQ"
→ /request-quote

"Show Customer Portal"
→ /portal/dashboard

"Show Owner Dashboard"
→ /admin/dashboard

The demo route should act like a sales story.

---

# 35. BEFORE vs AFTER EXPERIENCE

Create a visual comparison section.

BEFORE:

Customer sees board/phone number
→ calls
→ asks product details
→ asks for catalogue
→ WhatsApp messages
→ waits for quotation
→ follows up
→ asks order status

AFTER:

Google/search
→ website
→ product catalogue
→ technical details
→ RFQ
→ sales notification
→ quote
→ customer portal
→ order tracking
→ repeat enquiry

Make this highly visual.

---

# 36. LEAD-CAPTURE MECHANISMS

Place conversion actions throughout the website.

Product pages:
Request Quote
Request Sample
Contact Sales

Industry pages:
Get Industry Catalogue
Request Consultation

Homepage:
Request Quote
Book Demo

Contact:
Callback request

Footer:
WhatsApp-style CTA
Call CTA
Email CTA

Do not make every section look like an aggressive sales funnel.

---

# 37. WHATSAPP / PHONE / EMAIL DEMO

Do not integrate actual APIs.

Create buttons that demonstrate intended integration.

For demo:
- clicking WhatsApp opens an in-app mock conversation drawer or a safe placeholder action
- clicking Call shows phone contact card
- clicking Email opens a mock compose modal

Admin should show source = WhatsApp for sample leads.

---

# 38. SEARCH EXPERIENCE

Build a polished global search.

Search across:

Products
Categories
Industries
Applications
Resources

Support fuzzy-ish matching using normalized mock data.

Show grouped results.

Keyboard-friendly command menu style.

Desktop shortcut:
Cmd/Ctrl + K

---

# 39. FORMS / DATA COLLECTION

Every form must have meaningful validation.

Do not ask for unnecessary sensitive personal information.

Collect only what is useful for the business workflow.

Lead fields should adapt according to context.

Base fields:

Name
Company
Phone
Email
Location
Requirement
Quantity
Message

Optional contextual fields:

industry-specific specs
preferred contact time
attachment
purchase timeline

Use Zod schemas.

Show inline validation.
Show loading state.
Show success state.
Show error state.

---

# 40. LOCAL STORAGE DEMO PERSISTENCE

Use localStorage for:

- selected industry
- RFQ cart
- comparison list
- favorites
- submitted enquiries
- customer profile edits
- portal status updates
- admin demo edits
- notifications
- appointment selections

Create a reset button:
"Reset Demo Data"

Only reset sample/demo state.

---

# 41. RESPONSIVE DESIGN

Must be excellent on:

1440px desktop
1280px laptop
1024px tablet landscape
768px tablet
390px mobile

Admin tables need mobile adaptations.

Use cards or horizontally scrollable tables instead of breaking layouts.

Forms should use single-column mobile layouts.

Sticky bottom CTA on mobile product pages.

---

# 42. ACCESSIBILITY

Include:

- semantic HTML
- accessible buttons
- labels
- focus states
- keyboard navigation
- contrast
- aria labels when needed
- reduced motion support

Do not depend only on color to communicate status.

---

# 43. PERFORMANCE

Use:

Next/Image
lazy loading where appropriate
code splitting through route boundaries
reasonable animation
no giant JS animations
no unnecessary dependencies

Avoid layout shift.

Use skeleton loaders for dashboard and catalogue where useful.

---

# 44. SEO

Even though it is a demo, structure the public website as production-ready.

Include:

- metadata
- title/description
- Open Graph
- Twitter card metadata
- canonical placeholders
- robots.txt
- sitemap.xml
- JSON-LD where appropriate

Schema types to demonstrate:

Organization
Product
BreadcrumbList
FAQPage
LocalBusiness-style placeholder

Clearly treat company data as fictional demo data.

---

# 45. MULTI-LANGUAGE READY

Add language selector:

English
ગુજરાતી
हिन्दी

For the demo, translate key UI labels only if full translation would create excessive complexity.

Architecture must be ready for proper i18n later.

At minimum demonstrate Gujarati translation for:

Home
Products
Industries
Request Quote
Contact
Book Visit
Company
Search

---

# 46. DOCUMENT DOWNLOAD UX

Where a datasheet/catalogue is shown, clicking download should not depend on real external services.

Open a demo preview modal and/or download a small generated/static demo document.

Use filenames such as:

industrial-product-catalog-demo.pdf
pump-datasheet-demo.pdf
rfq-summary-demo.pdf

If actual PDFs are not available, provide readable browser preview content instead of broken links.

---

# 47. NOTIFICATIONS

Create a notification center.

Example events:

New RFQ
Quote created
Quote expiring
Appointment confirmed
Order status changed
New document
New message
Product enquiry assigned

Notifications can be generated from demo interactions.

---

# 48. ACTIVITY TIMELINE

Use a shared timeline component.

Events:

Lead created
Customer contacted
Requirement updated
RFQ created
Document uploaded
Quote sent
Quote accepted
Order created
Production started
Quality completed
Order dispatched
Appointment booked

Reuse it across:

Lead
RFQ
Customer
Quote
Order
Appointment

---

# 49. EMPTY STATES

Every major module must have a polished empty state.

Examples:

No RFQs yet
No saved products
No upcoming appointments
No messages
No documents
No enquiries matching your filters

Each empty state should include a useful action.

---

# 50. ERROR / LOADING / SUCCESS STATES

Do not create only happy-path screens.

Include:

loading skeletons
error alert
retry button
form errors
successful submission
confirmation modal
unsaved changes warning where useful

---

# 51. ADMIN TABLE UX

Use advanced tables with:

- search
- filter
- sort
- pagination
- column alignment
- row actions
- status badges
- bulk selection
- responsive behavior

Do not make tables visually cramped.

---

# 52. STATUS SYSTEM

Create reusable status badge types.

Lead:
New / Contacted / Qualified / Quoted / Won / Lost

RFQ:
Draft / Submitted / Reviewing / Need Information / Quoted / Won / Closed

Quote:
Draft / Sent / Viewed / Accepted / Changes Requested / Expired / Declined

Order:
Pending / Confirmed / Production / Quality / Ready / Dispatched / Delivered / Cancelled

Appointment:
Requested / Confirmed / Rescheduled / Completed / Cancelled

Use icons + text, not color only.

---

# 53. OWNER EXECUTIVE VIEW

Create a special dashboard view for the business owner.

It should answer:

"Is my digital channel generating business?"

Show:

Traffic
Enquiries
RFQs
Quotes
Orders
Top products
Top industries
Top regions
Lead sources
Follow-ups due
Open RFQs
Open quotes
Pending payments — demo only

Add a natural-language summary box using static/demo text such as:

"Product enquiries increased this period in the demo dataset, with Engineering and Agricultural Machinery receiving the highest number of sample enquiries."

Make clear it is based on sample data.

---

# 54. SALES EXECUTIVE VIEW

Optimized for daily work.

Widgets:

My leads
Today's follow-ups
New RFQs
Quotes to send
Appointments today
Overdue activities

Lead cards should have quick actions.

---

# 55. OPERATIONS VIEW

Show a simplified post-sale workflow.

KPIs:

Orders in production
Quality pending
Ready to dispatch
Delayed demo orders

Tables:

Order
Product
Customer
Production stage
Due date
Status

Use visual pipeline.

This is NOT a complete ERP.
It only demonstrates how the website can connect sales to operations.

---

# 56. FUTURE INTEGRATION ROADMAP SCREEN

Create a page/modal that visually explains that a real deployment could later connect:

Website
→ CRM
→ ERP
→ Inventory
→ Accounting
→ WhatsApp Business
→ Email
→ Google Analytics
→ Search Console
→ IndiaMART / TradeIndia / other lead sources
→ Payment gateway
→ Shipping/logistics

Label this as:
"Future integration architecture"

Do not actually connect any external service in the demo.

---

# 57. DIGITAL GROWTH FEATURES TO SHOW BUSINESS OWNERS

Add a dedicated "Digital Growth" section describing practical future capabilities.

Modules:

1. Product catalogue
2. Search visibility
3. Google Business integration concept
4. Enquiry capture
5. RFQ workflow
6. CRM
7. Customer portal
8. Quote management
9. Order tracking
10. WhatsApp lead channel
11. Product documents
12. Analytics
13. SEO
14. Multilingual content
15. Distributor/dealer acquisition
16. Export enquiry handling
17. Service/AMC requests
18. Appointment booking
19. Customer retention
20. Digital remarketing readiness

Each feature must have a short business-oriented explanation.

---

# 58. SALES DEMO SCRIPT PAGE

Create /demo/script.

Write a 5-10 minute presentation flow for the agency salesperson.

Example flow:

1. "Let me show you what happens when a buyer searches for your product."
2. Show industry page.
3. Open product.
4. Show specifications/documents.
5. Submit RFQ.
6. Log in as customer.
7. Show quote.
8. Accept quote.
9. Open admin.
10. Show new enquiry and RFQ.
11. Create mock quote.
12. Show analytics.
13. Explain future integrations.

Make the script simple enough to read during a client meeting.

---

# 59. AGENCY POSITIONING SCREEN

Create a subtle section for the agency using neutral placeholder branding.

Headline:
"We don't just build factory websites. We build digital sales systems."

Explain:

Website
+
Catalogue
+
Lead Capture
+
CRM
+
Customer Portal
+
Analytics
+
Future Integrations

Do not present unsupported revenue guarantees.

CTA:
"Request a Digital Factory Blueprint"

---

# 60. DIGITAL FACTORY AUDIT FORM

Create a lead form for the agency itself.

Fields:

Business name
Owner/contact
Phone
Email
City
Industry
Current website
Google Business Profile status
Products count
Primary markets
Current enquiry sources
Need online catalogue?
Need RFQ?
Need customer login?
Need order tracking?
Need service booking?
Need WhatsApp integration?

At submission, generate:

Audit ID
Example: AUDIT-2026-00124

Show:

"Your demo digital blueprint has been created."

Then display recommended module cards based on selected answers.

Do not claim that the recommendations are an actual audit.

---

# 61. VISUAL COMPONENT LIBRARY

Create reusable components:

Button
IconButton
Badge
StatusBadge
MetricCard
Sparkline
ChartCard
DataTable
FilterBar
SearchCommand
ProductCard
ProductGallery
SpecTable
IndustryCard
ApplicationCard
Timeline
ActivityTimeline
RFQDrawer
QuoteBuilder
CustomerCard
LeadCard
KanbanBoard
Calendar
DocumentCard
FileUploadPlaceholder
NotificationCenter
MessageThread
EmptyState
ConfirmDialog
Toast
DemoModeBanner
LanguageSwitcher
IndustrySwitcher
Sidebar
Topbar
MobileBottomNav
SectionHeading
LogoMark
Footer

---

# 62. MICRO-INTERACTIONS

Use:

- hover image zoom
- button press feedback
- card lift only when useful
- filter transitions
- drawer transitions
- tab transitions
- count-up for dashboard metrics
- chart entrance animation
- timeline reveal on scroll
- route transition where appropriate
- sticky CTA transitions

Do not animate every element.

Respect prefers-reduced-motion.

---

# 63. IMAGE STRATEGY

Use realistic industrial visuals where possible.

Avoid:

- generic handshake stock photos
- fake corporate boardrooms
- unrelated office people
- obvious AI artifacts
- unbranded generic factories repeated across every page

Product images can be generic demo products.

Use local image assets when practical.
If external image URLs are used, centralize them in mock data and configure Next/Image correctly.

---

# 64. COPYWRITING STYLE

Use concise, confident B2B copy.

Avoid meaningless phrases like:

"We are a leading globally acclaimed company dedicated to excellence..."

Prefer:

"Explore products. Share your requirement. Get a quote."

"Everything a buyer needs before contacting your sales team."

"Turn product enquiries into a trackable sales pipeline."

"Give repeat buyers their own digital workspace."

---

# 65. DEMO DATA RULES

All data must be fictional.

Do not expose real companies as clients.
Do not use real certification numbers.
Do not use fake revenue claims.
Do not claim real customer reviews.
Do not present sample statistics as actual performance.

Use a small DEMO label in appropriate locations.

---

# 66. NO OVER-ENGINEERING

This is a sales demo, not a production ERP.

Do NOT build:

- real payment processing
- real accounting
- real inventory synchronization
- real GST invoice generation
- real WhatsApp API
- real marketplace API
- complex role-based backend authorization
- actual file storage backend
- real email delivery

Simulate all of these cleanly.

The goal is to demonstrate product thinking and UX quality.

---

# 67. IMPLEMENTATION ORDER

Build in this order:

PHASE 1
Project foundation
Design system
Navigation
Mock data
Demo state

PHASE 2
Public homepage
Industry directory
Product catalogue
Product detail

PHASE 3
Search
Filters
Compare
RFQ builder
Sample request
Booking

PHASE 4
Demo authentication
Customer portal

PHASE 5
Admin shell
Dashboard
CRM
RFQs
Quotes
Customers
Products
Orders
Appointments
Documents

PHASE 6
Analytics
Owner dashboard
Operations dashboard
Sales dashboard

PHASE 7
Demo mode
Industry switcher
Sales presentation
Audit form

PHASE 8
SEO
Accessibility
Responsive polish
Performance
Testing

---

# 68. ACCEPTANCE CRITERIA

The project is not complete until ALL of the following work:

## Public

- Homepage is polished.
- Industry switching works.
- Product search works.
- Filters work.
- Product detail works.
- Compare works.
- RFQ can be submitted.
- Sample request works.
- Booking works.
- Contact forms work.
- Demo data persists.

## Customer

- Demo login works.
- Dashboard works.
- Company profile works.
- RFQs are visible.
- Quotes are visible.
- Quote can be accepted/requested changes.
- Orders have timeline.
- Documents page works.
- Messages work.
- Appointments work.
- Favorites/comparison work.

## Admin

- Dashboard works.
- Lead pipeline works.
- Enquiry inbox works.
- RFQ table works.
- Quote builder works.
- Customer 360 works.
- Product management works.
- Category tree works.
- Order timeline works.
- Appointment calendar works.
- Document library works.
- Analytics works.
- Content module works.
- Role demo works.

## Quality

- No broken routes.
- No console errors.
- No TypeScript errors.
- No obvious layout overflow.
- Mobile works.
- Desktop works.
- Loading states exist.
- Error states exist.
- Empty states exist.
- Demo/reset state works.

---

# 69. DEVELOPMENT COMMANDS

Create package scripts such as:

npm run dev
npm run build
npm run start
npm run lint
npm run typecheck

Ensure all scripts work.

---

# 70. FINAL DELIVERABLE

After implementation, provide:

1. Working Next.js application.
2. Clean folder structure.
3. All mock data.
4. Reusable components.
5. Responsive design.
6. Demo login.
7. Public website.
8. Customer portal.
9. Admin dashboard.
10. Owner dashboard.
11. Sales dashboard.
12. Operations view.
13. Demo presentation route.
14. Agency audit form.
15. Documentation files.
16. README with run instructions.
17. Future backend integration plan.

---

# 71. IMPORTANT — BUILD WITHOUT ASKING FOR MORE REQUIREMENTS

Do not stop after scaffolding.
Do not only create placeholder pages.
Do not say "we can implement this later."
Implement the complete frontend demo now.

Where a real backend/integration would normally be required, use high-quality mock services and local state.

Every route should contain meaningful data and useful interactions.

Every button shown in the UI should either:

- perform an actual frontend demo action,
- open a relevant modal/drawer,
- navigate to a meaningful route,
- or show a clear demo confirmation.

Avoid dead buttons.

---

# 72. FINAL UX GOAL

When a local factory owner opens this demo, they should immediately understand:

"My business can have its own digital catalogue."

"My buyers can find my products."

"My customers can send requirements instead of calling repeatedly."

"My sales team can see every enquiry in one place."

"My customers can see quotes, documents and order status."

"My company can collect useful customer data."

"My business owner can finally see where enquiries are coming from."

"This can start as a website and later become a complete digital business system."

The product should communicate this visually, without needing the salesperson to explain every screen.

---

# 73. FINAL COMMAND

Now build the entire project from this specification.

Start by creating the project architecture, design tokens, reusable components, mock data layer and route map.

Then implement all public, customer, admin, owner, sales, operations and demo routes.

After implementation, run type checking, linting and a production build.

Fix all errors.

Do a final responsive and UX pass.

Do not leave major sections as blank placeholders.

The final result must look like a premium agency-built manufacturing digital transformation product that can be demonstrated live to real small and medium business owners.

---

END OF MASTER PROMPT
