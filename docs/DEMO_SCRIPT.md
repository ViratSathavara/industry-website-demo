# INDUSTRIA — Sales Demo Script & Operator Manual

## 1. Preparation Checklist
1. Ensure the application is running via `npm run dev` on `http://localhost:3000`.
2. Open two browser windows side-by-side or use separate tabs:
   - **Tab A:** Storefront / Customer Portal (`/portal/quotes`)
   - **Tab B:** Admin Command Center (`/admin/dashboard`)
3. Test audio if conducting a remote video presentation.

---

## 2. 10-Minute Presentation Flow

### Phase 1: The Friction & Reality Check (0:00 - 1:30)
- **Goal:** Uncover the hidden cost of manual 72-hour quotation delays.
- **Narrative:** "Traditional factories lose 40% of their qualified inquiries because procurement engineers expect instantaneous CAD evaluations. Industria converts your plant into a 2.4-hour digital quote engine."
- **Screen:** Show `/` hero section, highlighting the turnaround comparison metric.

### Phase 2: Domain Mastery & Storefront (1:30 - 3:30)
- **Goal:** Prove this is a specialized engineering platform, not a generic ecommerce template.
- **Narrative:** "Watch this: with one click on our Top Industry Switcher, the entire storefront dynamically shifts tolerances, alloy grades, and certifications from Automotive CNC to Aerospace Titanium."
- **Screen:** Open `/products`, click on any SKU (e.g. Forged Flange or CNC Housing), and demonstrate the **CAD 3D Model Preview**.

### Phase 3: The 60-Second RFQ Submission (3:30 - 5:30)
- **Goal:** Show how easy it is for an engineering buyer to submit drawings.
- **Narrative:** "Your client uploads their 2D/3D drawing, selects their tolerance (DIN ISO 2768-m), and enters target delivery."
- **Screen:** Walk through `/request-quote` and submit a test RFQ.

### Phase 4: Fast Quotation Builder (5:30 - 7:30)
- **Goal:** Demonstrate the CPQ engine that replaces Excel estimation sheets.
- **Narrative:** "Your Sales Head opens the RFQ, adds line items, and the engine automatically calculates 18% GST and freight charges. With one click, the formal quote is dispatched."
- **Screen:** Open `/admin/quotes`, open Quotation Builder, and send quote to buyer.

### Phase 5: Customer Portal & 1-Click Acceptance (7:30 - 9:00)
- **Goal:** Show the self-service portal experience that delights Tier-1 buyers.
- **Narrative:** "The buyer opens their portal, reviews the GST breakdown, and clicks 'Accept Quote'. Watch the confetti: an active Work Order is automatically generated in your shopfloor operations pipeline!"
- **Screen:** Go to `/portal/quotes`, click **Accept Quote**, then navigate to `/admin/orders` to show the new live order.

### Phase 6: Shopfloor Tracking & Closing ROI (9:00 - 10:00)
- **Goal:** Eliminate status phone calls and close the consultation workshop.
- **Narrative:** "Plant operations clicks 'Advance Stage' through Machining, QC, and Dispatch. Back in the portal, the buyer sees the tracking docket live. No more 10 hours of wasted phone calls every week."
- **Screen:** Go to `/admin/dashboard?view=owner` to show the executive natural language summary and EBITDA chart.
