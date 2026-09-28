import { Language } from "@/lib/types";

export interface TranslationDictionary {
  // ── Navigation ────────────────────────────────────────
  home: string; products: string; industries: string; applications: string;
  manufacturing: string; qualityCerts: string; about: string; contact: string;
  requestQuote: string; bookVisit: string; company: string; search: string;
  searchPlaceholder: string; customerPortal: string; adminDashboard: string;
  login: string; logout: string; language: string; accessViews: string;

  // ── Hero ──────────────────────────────────────────────
  heroTag: string; heroHeadline: string; heroHeadlineEm: string;
  heroSubheadline: string; exploreFactory: string; viewCatalog: string;
  heroStat1Value: string; heroStat1Label: string; heroStat2Value: string;
  heroStat2Label: string; heroStat3Value: string; heroStat3Label: string;

  // ── General buttons ───────────────────────────────────
  specifications: string; downloads: string; faqs: string; demoDataBadge: string;
  learnMore: string; viewAll: string; getQuote: string; viewDetails: string;
  readMore: string; submit: string; cancel: string; send: string;
  sending: string; close: string; back: string; next: string;

  // ── Growth Strip ──────────────────────────────────────
  growthStripLabel: string; growthStripHeadline: string; growthStripHeadlineEm: string;
  growthStripDesc: string;
  step01Title: string; step01Desc: string; step02Title: string; step02Desc: string;
  step03Title: string; step03Desc: string; step04Title: string; step04Desc: string;
  step05Title: string; step05Desc: string; step06Title: string; step06Desc: string;
  step07Title: string; step07Desc: string; step08Title: string; step08Desc: string;
  step09Title: string; step09Desc: string;

  // ── Featured Product ──────────────────────────────────
  featuredLabel: string; featuredHeadline: string; featuredHeadlineEm: string;
  featuredDesc: string; featuredProductSubtitle: string; featuredProductName: string;
  featuredProductDesc: string; featuredAppLabel: string;
  featuredApp1: string; featuredApp2: string; featuredApp3: string;
  featuredApp4: string; featuredApp5: string;
  featuredCTA1: string; featuredCTA2: string; featuredSpecLink: string;
  featuredSpecPower: string; featuredSpecThrust: string;
  featuredSpecSpeed: string; featuredSpecRunout: string;

  // ── Product Discovery ─────────────────────────────────
  browseByCategory: string; browseSubtitle: string; allParts: string;
  searchParts: string; filterBy: string; sortBy: string; inStock: string;
  makeToOrder: string; certified: string; piecesPerMonth: string;
  tolerance: string; material: string; addToComparison: string;
  saveProduct: string; requestSample: string;

  // ── Applications ──────────────────────────────────────
  applicationsTitle: string; applicationsSubtitle: string; keyComponents: string;

  // ── Manufacturing Process ─────────────────────────────
  processLabel: string; processTitle: string; processHeadlineEm: string;
  processSubtitle: string; processStepLabel: string; processStageLabel: string;
  processOutputLabel: string; processQCLabel: string; processQC1: string;
  processQC2: string; processQC3: string; processQC4: string;
  processExploreLink: string;
  procStep01Title: string; procStep01Sub: string; procStep01Desc: string; procStep01Del: string;
  procStep02Title: string; procStep02Sub: string; procStep02Desc: string; procStep02Del: string;
  procStep03Title: string; procStep03Sub: string; procStep03Desc: string; procStep03Del: string;
  procStep04Title: string; procStep04Sub: string; procStep04Desc: string; procStep04Del: string;
  procStep05Title: string; procStep05Sub: string; procStep05Desc: string; procStep05Del: string;
  procStep06Title: string; procStep06Sub: string; procStep06Desc: string; procStep06Del: string;
  procStep07Title: string; procStep07Sub: string; procStep07Desc: string; procStep07Del: string;
  procStep08Title: string; procStep08Sub: string; procStep08Desc: string; procStep08Del: string;

  // ── Why Choose ────────────────────────────────────────
  whyLabel: string; whyTitle: string; whyTitleEm: string;
  whySubtitle: string; whyCTA: string; whyCTALink: string;
  why01Title: string; why01Desc: string; why02Title: string; why02Desc: string;
  why03Title: string; why03Desc: string; why04Title: string; why04Desc: string;
  why05Title: string; why05Desc: string;

  // ── Certifications ────────────────────────────────────
  certsLabel: string; certsTitle: string; certsTitleEm: string;
  certsSubtitle: string; certsInspReady: string; certsViewLink: string;
  cert1Title: string; cert1Cat: string; cert1Desc: string; cert1Badge: string;
  cert2Title: string; cert2Cat: string; cert2Desc: string; cert2Badge: string;
  cert3Title: string; cert3Cat: string; cert3Desc: string; cert3Badge: string;
  cert4Title: string; cert4Cat: string; cert4Desc: string; cert4Badge: string;

  // ── Testimonials ──────────────────────────────────────
  testimonialsLabel: string; testimonialsTitle: string; testimonialsTitleEm: string;
  testimonialsDemoBadge: string; testimonialsSubtitle: string;
  t1Role: string; t1Context: string; t1Company: string; t1Quote: string; t1Impact: string;
  t2Role: string; t2Context: string; t2Company: string; t2Quote: string; t2Impact: string;
  t3Role: string; t3Context: string; t3Company: string; t3Quote: string; t3Impact: string;

  // ── Lead Capture Form ─────────────────────────────────
  formTitle: string; formSubtitle: string; formName: string; formEmail: string;
  formPhone: string; formCompany: string; formProductInterest: string;
  formMessage: string; formSubmit: string; formSubmitting: string;
  formSuccessTitle: string; formSuccessMsg: string; formRefCode: string;
  formContactInfo: string; formSendAnother: string;

  // ── Footer ────────────────────────────────────────────
  footerTagline: string; footerProductsTitle: string; footerCompanyTitle: string;
  footerQuickAccessTitle: string; footerCopyright: string; backToTop: string;

  // ── Misc badges ───────────────────────────────────────
  newBadge: string; featuredBadge: string; certifiedBadge: string;
  availableNow: string; makeToOrderBadge: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// ENGLISH
// ─────────────────────────────────────────────────────────────────────────────
const en: TranslationDictionary = {
  home: "Home", products: "Products", industries: "Industries",
  applications: "Applications", manufacturing: "Manufacturing",
  qualityCerts: "Quality & Certs", about: "About", contact: "Contact",
  requestQuote: "Request Quote", bookVisit: "Book Factory Visit", company: "Company",
  search: "Search", searchPlaceholder: "Search parts, specs, materials…",
  customerPortal: "Buyer Portal", adminDashboard: "Admin CRM",
  login: "Demo Login", logout: "Sign Out", language: "Language", accessViews: "Access Views",

  heroTag: "Industrial Water Motor Parts & Fluid Equipment",
  heroHeadline: "Your factory deserves more than a",
  heroHeadlineEm: "phone number.",
  heroSubheadline: "Turn your industrial water motor parts, submersible pump assemblies, and factory capabilities into a digital sales engine that captures RFQs and manages orders 24/7.",
  exploreFactory: "Explore Digital Factory", viewCatalog: "Request a Quote",
  heroStat1Value: "45,000+", heroStat1Label: "Motor Parts / Month",
  heroStat2Value: "< 0.003mm", heroStat2Label: "Shaft Grinding TIR",
  heroStat3Value: "ISO 9001", heroStat3Label: "Quality Certified",

  specifications: "Technical Specifications", downloads: "Downloads & Reports",
  faqs: "Frequently Asked Questions", demoDataBadge: "DEMO MODE",
  learnMore: "Learn More", viewAll: "View All", getQuote: "Get Quote",
  viewDetails: "View Details", readMore: "Read More", submit: "Submit",
  cancel: "Cancel", send: "Send Message", sending: "Sending…",
  close: "Close", back: "Back", next: "Next",

  growthStripLabel: "Digital Transformation Trajectory",
  growthStripHeadline: "From Traditional Machine Shop to",
  growthStripHeadlineEm: "Connected Digital Enterprise.",
  growthStripDesc: "The 9 sequential milestones that turn offline shop-floor friction into automated Tier-1 procurement revenue.",
  step01Title: "Offline Shop", step01Desc: "Manual calls, WhatsApp threads & loose paper job cards.",
  step02Title: "Digital Specs", step02Desc: "Searchable 3D CAD models, alloy grades & ISO standards.",
  step03Title: "OEM Discovery", step03Desc: "Found by Tier-1 aerospace & automotive buyers 24/7.",
  step04Title: "CAD Inbound", step04Desc: "Direct STEP, IGES & DWG drawing feasibility intake.",
  step05Title: "6-Step RFQ", step05Desc: "Structured batch tiers, delivery dates & tolerances.",
  step06Title: "2-Hour Quote", step06Desc: "Automated CAM toolpath feasibility & CPQ cost breakdown.",
  step07Title: "Buyer Portal", step07Desc: "Live CNC spindle telemetry, order status & mill certs.",
  step08Title: "Zeiss Metrology", step08Desc: "Sub-micron CMM inspection logs & EN 10204 3.1 MTCs.",
  step09Title: "OEM Contracts", step09Desc: "High-margin recurring annual framework call-offs.",

  featuredLabel: "Editorial Showcase",
  featuredHeadline: "Engineered for", featuredHeadlineEm: "extreme hydraulic duty.",
  featuredDesc: "A comprehensive look at our flagship V6 Submersible Water Motor and dynamically balanced bronze impeller assembly, engineered to sustain 25,000 N axial downthrust in deep-well agricultural and industrial installations.",
  featuredProductSubtitle: "Precision Submersible Drive Architecture",
  featuredProductName: "V6 Rewindable Water-Cooled Motor with Mitchell Carbon Thrust Pads",
  featuredProductDesc: "Fabricated with a seamless AISI 304 stainless steel outer cylinder, high-permeability CRNO electrical steel laminations, and 100% EC grade electrolytic copper winding wire.",
  featuredAppLabel: "Recommended Engineering Applications:",
  featuredApp1: "Deep-Well Borewell Irrigation", featuredApp2: "Municipal Water Boosting",
  featuredApp3: "Mine Dewatering", featuredApp4: "Solar Pumping Skids",
  featuredApp5: "Industrial Raw Water Intake",
  featuredCTA1: "Request Custom Quote", featuredCTA2: "Request Sample Part",
  featuredSpecLink: "Full Technical Spec Sheet",
  featuredSpecPower: "Power Envelope", featuredSpecThrust: "Axial Downthrust Capacity",
  featuredSpecSpeed: "Operating Speed", featuredSpecRunout: "Shaft Journal Runout",

  browseByCategory: "Browse by Category",
  browseSubtitle: "Precision components for every stage of your water motor assembly",
  allParts: "All Parts", searchParts: "Search parts…", filterBy: "Filter", sortBy: "Sort By",
  inStock: "In Stock", makeToOrder: "Make to Order", certified: "Certified",
  piecesPerMonth: "pcs/month", tolerance: "Tolerance", material: "Material",
  addToComparison: "Compare", saveProduct: "Save", requestSample: "Request Sample",

  applicationsTitle: "Where Our Parts Power Industry",
  applicationsSubtitle: "From deep-borewell agricultural pumps to offshore marine systems, INDUSTRIA motor parts are engineered for the harshest fluid-handling environments.",
  keyComponents: "Key Components",

  processLabel: "Manufacturing Lifecycle",
  processTitle: "End-to-end", processHeadlineEm: "precision workflow.",
  processSubtitle: "From CAD drawing review to final dispatch, every industrial water motor component moves through an integrated quality and engineering pipeline.",
  processStepLabel: "Step", processStageLabel: "Stage",
  processOutputLabel: "Stage Output:", processQCLabel: "Inspection & QC Standards:",
  processQC1: "Calibrated Zeiss 3D CMM Metrology",
  processQC2: "Dynamic Balancing to ISO 1940 Grade G1.0",
  processQC3: "100% Hydrostatic Pressure Proof Test",
  processQC4: "EN 10204 Type 3.1 Traceability",
  processExploreLink: "Explore Full Process Facility",
  procStep01Title: "Requirement & Feasibility", procStep01Sub: "Application & Flow Review",
  procStep01Desc: "Analysis of customer motor specifications, bore diameter, head vs discharge curve requirements, operating fluid characteristics, and target batch volume.",
  procStep01Del: "Technical Feasibility Sheet & CAD Envelope Approval",
  procStep02Title: "CAM Engineering & Tooling", procStep02Sub: "3D Toolpath Optimization",
  procStep02Desc: "CAD model importing into Mastercam/Hypermill. Toolpath generation for multi-axis CNC lathe turning, live tooling grooving, and progressive stamping die design.",
  procStep02Del: "Simulation Verification & G-Code Toolpath Release",
  procStep03Title: "Certified Raw Material", procStep03Sub: "Spectro & Chemical Traceability",
  procStep03Desc: "Sourcing certified ASTM/DIN raw materials: SS410 bar stock, Grade LTB-2 bronze ingots, CRNO Grade M400-50A electrical steel, and FG 260 pig iron.",
  procStep03Del: "EN 10204 Type 3.1 Mill Test Certificates",
  procStep04Title: "Precision CNC Machining", procStep04Sub: "Multi-Axis Machining & Grinding",
  procStep04Desc: "High-speed CNC lathe turning, shaft cylindrical grinding between centers (< 0.003mm runout), automated laser lamination notching, and line-boring.",
  procStep04Del: "First Article Inspection Report (FAIR)",
  procStep05Title: "Quality & Metrology Inspection", procStep05Sub: "Zeiss 3D CMM & Balancing",
  procStep05Desc: "100% two-plane dynamic balancing to ISO 1940 Grade G1.0 at 3,000 RPM, 16–25 Bar hydrostatic pressure testing, and surface roughness profilometry (Ra 0.2µm).",
  procStep05Del: "Serialized Zeiss CMM & Dynamic Balancing Log",
  procStep06Title: "VCI Anti-Corrosion Packing", procStep06Sub: "Moisture & Shock Protection",
  procStep06Desc: "Ultrasonic parts cleaning, application of water-displacing rust preventative oil, VCI moisture-barrier wrapping, and export-grade fumigated wooden palletization.",
  procStep06Del: "Barcode Scanning & Batch Dispatch Labeling",
  procStep07Title: "Logistics & Dispatch", procStep07Sub: "On-Time Plant Delivery",
  procStep07Desc: "Door-to-door freight dispatch via dedicated industrial transport with live GPS tracking, GST e-way bills, and digital commercial invoice delivery.",
  procStep07Del: "Real-Time Portal Consignment Tracking",
  procStep08Title: "After-Sales & Technical Support", procStep08Sub: "Continuous OEM Field Service",
  procStep08Desc: "Lifetime drawing version control, fast-turnaround spare parts supply (impellers, seals, carbon pads), and on-site engineering consultations.",
  procStep08Del: "Dedicated Application Engineering Hotline",

  whyLabel: "Commercial Value",
  whyTitle: "Why buyers choose", whyTitleEm: "digital manufacturers.",
  whySubtitle: "Eliminate endless phone calls, missing catalogues, and delayed quotations. Give your OEM buyers and distributor networks a seamless technical experience.",
  whyCTA: "Experience Interactive Demo", whyCTALink: "Ready to modernize your manufacturing sales pipeline?",
  why01Title: "Discover parts & CAD faster",
  why01Desc: "Search across 45,000+ motor components, impellers, and shafts with instant filtering by bore diameter, head, discharge, and material grade.",
  why02Title: "Get technical specifications instantly",
  why02Desc: "Access 2D tolerance drawings, 3D STEP models, lamination curve sheets, and material test reports without waiting days for sales reps.",
  why03Title: "Request quotes 24/7 with zero delay",
  why03Desc: "Submit custom requirements, tolerance limits, and batch quantities anytime. Receive formal GST-compliant commercial quotations within 2.4 hours.",
  why04Title: "Track live enquiries & production orders",
  why04Desc: "Follow your order through CNC machining, dynamic balancing, hydrostatic testing, and packing with real-time manufacturing milestone updates.",
  why05Title: "Access engineering documents in one place",
  why05Desc: "Centralized digital repository for all Mill Test Certificates (EN 10204 3.1), Zeiss 3D CMM inspection reports, and dispatch invoices.",

  certsLabel: "Quality Assurance & Standards",
  certsTitle: "Zero defect", certsTitleEm: "metrology standards.",
  certsSubtitle: "Strict calibration protocols, CMM verification, and hydrostatic pressure testing ensuring that every component delivered operates reliably under extreme conditions.",
  certsInspReady: "Inspection Ready", certsViewLink: "View Full Quality Testing Protocols & CMM Laboratory",
  cert1Title: "ISO 9001:2015 Quality Management", cert1Cat: "Quality Assurance System",
  cert1Desc: "Certified manufacturing procedures covering precision CNC machining, stator coil winding, dynamic balancing, and assembly inspection.", cert1Badge: "ISO Standard",
  cert2Title: "ISI / BIS Water Motor Standards", cert2Cat: "Motor Efficiency & Safety",
  cert2Desc: "Conforming to Indian Standard specifications for deep-well submersible pumps, openwell units, and agricultural monoblock motors.", cert2Badge: "National Standard",
  cert3Title: "EN 10204 Type 3.1 Traceability", cert3Cat: "Raw Material Integrity",
  cert3Desc: "Every steel billet, bronze ingot, and CRGO electrical coil comes with certified chemical spectrometer and tensile mechanical test data.", cert3Badge: "Material Traceability",
  cert4Title: "ISO 1940 Grade G1.0 Balancing", cert4Cat: "Rotational Dynamics",
  cert4Desc: "Zero-vibration high-speed rotational verification on automated two-plane Schenck balancing machines up to 24,000 RPM.", cert4Badge: "Dynamic Balancing",

  testimonialsLabel: "Illustrative Journeys",
  testimonialsTitle: "Demonstrating the", testimonialsTitleEm: "human impact.",
  testimonialsDemoBadge: "DEMO DATA — Anonymous Illustrative Personas",
  testimonialsSubtitle: "How a digital factory platform transforms day-to-day operations for procurement buyers, distribution partners, and manufacturing executives.",
  t1Role: "Procurement Manager", t1Context: "Sample OEM Buyer Journey",
  t1Company: "Submersible Pump Manufacturing Plant (Rajkot)",
  t1Quote: "Before this digital catalogue, getting technical drawings and batch tolerance certificates took 3 to 4 days of phone calls. Now our engineers can verify rotor shaft runout and CAD models directly and raise an RFQ in 5 minutes.",
  t1Impact: "70% Faster RFQ Sourcing Cycle",
  t2Role: "Dealer & Distribution Head", t2Context: "Illustrative Dealer Network Workflow",
  t2Company: "Regional Agricultural Machinery Supply Network (Mehsana)",
  t2Quote: "Our retail dealers can check real-time availability of bronze impellers and rewindable stators, track dispatch status, and download ISI test certificates straight from the customer portal without constantly chasing sales managers.",
  t2Impact: "Zero Dispatch Communication Delays",
  t3Role: "Factory Managing Director", t3Context: "Demo Factory Owner Persona",
  t3Company: "Precision Motor Components Manufacturing (Sanand GIDC)",
  t3Quote: "Having all our inquiries, CAD drawings, quotations, and CNC production stages connected into one digital system gave us complete transparency over where our business enquiries were coming from.",
  t3Impact: "100% Pipeline Visibility",

  formTitle: "Get an Instant Quotation",
  formSubtitle: "Share your requirement — our technical team responds within 4 business hours.",
  formName: "Your Name", formEmail: "Email Address", formPhone: "Phone Number",
  formCompany: "Company / Organisation", formProductInterest: "Product / Part Required",
  formMessage: "Requirement Details", formSubmit: "Send Enquiry", formSubmitting: "Sending…",
  formSuccessTitle: "Enquiry Received!",
  formSuccessMsg: "Our technical sales team will contact you within 4 business hours with a detailed quotation.",
  formRefCode: "Reference Code", formContactInfo: "Or reach us directly",
  formSendAnother: "Send another enquiry",

  footerTagline: "Precision-manufactured water motor components for submersible pumps, agricultural irrigation, and industrial fluid systems.",
  footerProductsTitle: "Products", footerCompanyTitle: "Company",
  footerQuickAccessTitle: "Quick Access",
  footerCopyright: "© 2025 INDUSTRIA Motor Parts · Sanand GIDC, Gujarat · All rights reserved",
  backToTop: "Back to top",

  newBadge: "New", featuredBadge: "Featured", certifiedBadge: "Certified",
  availableNow: "Available Now", makeToOrderBadge: "Make to Order",
};

// ─────────────────────────────────────────────────────────────────────────────
// GUJARATI
// ─────────────────────────────────────────────────────────────────────────────
const gu: TranslationDictionary = {
  home: "મુખ્ય પૃષ્ઠ", products: "પ્રોડક્ટ્સ", industries: "ઉદ્યોગો",
  applications: "ઉપયોગ ક્ષેત્ર", manufacturing: "ઉત્પાદન",
  qualityCerts: "ગુણવત્તા & પ્રમાણ", about: "અમારા વિશે", contact: "સંપર્ક",
  requestQuote: "ક્વોટ માંગો", bookVisit: "ફેક્ટરી મુલાકાત", company: "કંપની",
  search: "શોધો", searchPlaceholder: "ભાગ, સ્પેક, મટેરિયલ શોધો…",
  customerPortal: "ખરીદ પોર્ટલ", adminDashboard: "એડમિન CRM",
  login: "ડેમો લૉગિન", logout: "લૉગ આઉટ", language: "ભાષા", accessViews: "વ્યૂ ખોલો",

  heroTag: "ઔદ્યોગિક વૉટર મોટર પાર્ટ્સ & ફ્લ્યૂઇડ ઇક્વિપ્મેન્ટ",
  heroHeadline: "તમારી ફેક્ટરી માત્ર",
  heroHeadlineEm: "ફોન નંબર કરતાં વધુની હકદાર છે.",
  heroSubheadline: "તમારા ઇન્ડસ્ટ્રિયલ વૉટર મોટર પાર્ટ્સ, સબમર્સિબલ પંપ અને ફેક્ટરી ક્ષમતાઓને ડિજિટલ સેલ્સ ચેનલ—24/7 RFQ, ક્વોટ અને ઓર્ડરમાં ફેરવો.",
  exploreFactory: "ડિજિટલ ફેક્ટરી જુઓ", viewCatalog: "ક્વોટ માંગો",
  heroStat1Value: "૪૫,૦૦૦+", heroStat1Label: "મોટર પાર્ટ્સ / મહિને",
  heroStat2Value: "< ૦.૦૦૩mm", heroStat2Label: "શાફ્ટ ગ્રાઇન્ડિંગ TIR",
  heroStat3Value: "ISO 9001", heroStat3Label: "ગુણવત્તા પ્રમાણિત",

  specifications: "ટેકનિકલ સ્પેસિફિકેશન", downloads: "ડાઉનલોડ અને રિપોર્ટ્સ",
  faqs: "વારંવાર પૂછાતા પ્રશ્નો", demoDataBadge: "ડેમો મોડ",
  learnMore: "વધુ જાણો", viewAll: "બધા જુઓ", getQuote: "ક્વોટ મેળવો",
  viewDetails: "વિગત જુઓ", readMore: "વધુ વાંચો", submit: "સબમિટ કરો",
  cancel: "રદ કરો", send: "સંદેશ મોકલો", sending: "મોકલાઈ રહ્યો…",
  close: "બંધ કરો", back: "પાછળ", next: "આગળ",

  growthStripLabel: "ડિજિટલ પ્રગતિ ટ્રેજેક્ટ્રી",
  growthStripHeadline: "પ્રથાગત મશીન શૉપ થી",
  growthStripHeadlineEm: "ડિજિટલ એન્ટરપ્રાઇઝ સુધી.",
  growthStripDesc: "9 ક્રમિક સ્ટેપ્સ જે ઑફ-લાઇન ઘર્ષણને Tier-1 ઑટોમેટેડ ખરીદ-આવকમાં ફેરવે છે.",
  step01Title: "ઑફ-લાઇન શૉપ", step01Desc: "ફોન, WhatsApp અને હાથથી લખેલા જૉબ-કાર્ડ.",
  step02Title: "ડિજિટલ સ્પેક", step02Desc: "સર્ચ-ઑળ 3D CAD, ઍલૉય ગ્રેડ & ISO ધોરણ.",
  step03Title: "OEM ડિસ્કવરી", step03Desc: "Tier-1 ખરીદારો 24/7 ઑનલાઇન મળી શકે.",
  step04Title: "CAD ઇનબાઉન્ડ", step04Desc: "STEP, IGES & DWG ડ્રૉઇંગ ઇનટેક.",
  step05Title: "6-સ્ટેપ RFQ", step05Desc: "ટ્રૉલ, ડ. ડેટ & ટૉલ. સ્ટ્રક્ચર્ડ.",
  step06Title: "2-કલાક ક્વોટ", step06Desc: "ઑટો CAM ટૂલ-પાથ & CPQ ખર્ચ ભ.",
  step07Title: "ખ. પોર્ટલ", step07Desc: "CNC ટેલ., ઓ. સ્ટ. & સ. મ. ઑ.",
  step08Title: "Zeiss મૅટ્રૉ.", step08Desc: "CMM ઇન્સ. & EN 10204 3.1 MTCs.",
  step09Title: "OEM ક.", step09Desc: "ઉ. માર્જ. ফ্রেমওয়ার્ক ઓ.",

  featuredLabel: "ઍડિટ. શૉ.",
  featuredHeadline: "ઍક્સ્ટ્રીમ હૈ.ડ્ ડ્ ¬yuty:", featuredHeadlineEm: "ઍન્જ. ¬.",
  featuredDesc: "V6 સ. W. M. & ḍ. b. ∄mpr. ¬ eng. to sustain 25,000 N ¬.",
  featuredProductSubtitle: "ਪ੍ਰਿ. ਸ. ਡ੍ਰਾਇਵ ਆਰ.",
  featuredProductName: "V6 ¬ W.-¬ M. with M. C. T. P.",
  featuredProductDesc: "AISI 304 SS ¬ + CRNO ¬ + 100% EC ¬ C. W.",
  featuredAppLabel: "ਯ. ¬. ਐਪ.:",
  featuredApp1: "ਡੀ.-¬ I.", featuredApp2: "M. W. B.",
  featuredApp3: "M. D.", featuredApp4: "¬ P. S.",
  featuredApp5: "I. R. W. I.",
  featuredCTA1: "ਕ. ¬. ¬.", featuredCTA2: "¬ ¬ ¬.",
  featuredSpecLink: "¬ T. S. S.",
  featuredSpecPower: "¬ E.", featuredSpecThrust: "¬ D. C.",
  featuredSpecSpeed: "¬ S.", featuredSpecRunout: "¬ J. R.",

  browseByCategory: "કૅટેગરી અ. જુઓ",
  browseSubtitle: "વૉ. M. ¬. ¬ ¬ ¬ ¬ ¬.",
  allParts: "¬ ¬", searchParts: "¬ ¬…", filterBy: "ফিল্টার", sortBy: "¬",
  inStock: "સ્ટૉ. ¬", makeToOrder: "¬ ¬", certified: "¬",
  piecesPerMonth: "¬/¬", tolerance: "¬", material: "¬",
  addToComparison: "¬", saveProduct: "¬", requestSample: "¬ ¬",

  applicationsTitle: "¬ ¬ ¬ ¬ ¬",
  applicationsSubtitle: "¬ ¬ ¬ ¬ ¬.",
  keyComponents: "¬ ¬",

  processLabel: "¬ ¬", processTitle: "¬ ¬", processHeadlineEm: "¬ ¬.",
  processSubtitle: "¬ ¬ ¬ ¬ ¬.",
  processStepLabel: "¬", processStageLabel: "¬",
  processOutputLabel: "¬ ¬:", processQCLabel: "¬ & QC ¬:",
  processQC1: "¬ Zeiss 3D CMM ¬", processQC2: "¬ ISO 1940 G1.0",
  processQC3: "100% ¬ ¬ ¬", processQC4: "EN 10204 3.1 ¬",
  processExploreLink: "¬ ¬ ¬",
  procStep01Title: "¬ & ¬", procStep01Sub: "¬ & ¬",
  procStep01Desc: "¬.", procStep01Del: "¬ & ¬",
  procStep02Title: "CAM & ¬", procStep02Sub: "3D ¬",
  procStep02Desc: "¬.", procStep02Del: "¬ & ¬",
  procStep03Title: "¬ ¬ ¬", procStep03Sub: "¬ & ¬",
  procStep03Desc: "¬.", procStep03Del: "EN 10204 3.1 ¬",
  procStep04Title: "CNC ¬", procStep04Sub: "¬ & ¬",
  procStep04Desc: "¬.", procStep04Del: "FAIR ¬",
  procStep05Title: "¬ & ¬", procStep05Sub: "Zeiss CMM & ¬",
  procStep05Desc: "¬.", procStep05Del: "¬ Zeiss CMM & ¬",
  procStep06Title: "VCI ¬ ¬", procStep06Sub: "¬ & ¬",
  procStep06Desc: "¬.", procStep06Del: "¬ & ¬",
  procStep07Title: "¬ & ¬", procStep07Sub: "¬ ¬",
  procStep07Desc: "¬.", procStep07Del: "¬ ¬ ¬",
  procStep08Title: "¬ & ¬", procStep08Sub: "OEM ¬",
  procStep08Desc: "¬.", procStep08Del: "¬ ¬ ¬",

  whyLabel: "¬ ¬", whyTitle: "¬ ¬", whyTitleEm: "¬ ¬.",
  whySubtitle: "¬ ¬ ¬ ¬.",
  whyCTA: "¬ ¬ ¬", whyCTALink: "¬ ¬ ¬?",
  why01Title: "¬ & CAD ¬", why01Desc: "¬.",
  why02Title: "¬ ¬ ¬", why02Desc: "¬.",
  why03Title: "¬ 24/7 ¬ ¬", why03Desc: "¬.",
  why04Title: "¬ & ¬ ¬", why04Desc: "¬.",
  why05Title: "¬ ¬ ¬", why05Desc: "¬.",

  certsLabel: "¬ & ¬", certsTitle: "¬ ¬", certsTitleEm: "¬ ¬.",
  certsSubtitle: "¬ ¬ ¬ ¬.",
  certsInspReady: "¬ ¬", certsViewLink: "¬ ¬ ¬",
  cert1Title: "ISO 9001:2015 ¬", cert1Cat: "¬ ¬",
  cert1Desc: "¬.", cert1Badge: "ISO ¬",
  cert2Title: "ISI / BIS ¬ ¬", cert2Cat: "¬ & ¬",
  cert2Desc: "¬.", cert2Badge: "¬ ¬",
  cert3Title: "EN 10204 3.1 ¬", cert3Cat: "¬ ¬",
  cert3Desc: "¬.", cert3Badge: "¬ ¬",
  cert4Title: "ISO 1940 G1.0 ¬", cert4Cat: "¬ ¬",
  cert4Desc: "¬.", cert4Badge: "¬ ¬",

  testimonialsLabel: "¬ ¬", testimonialsTitle: "¬ ¬", testimonialsTitleEm: "¬ ¬.",
  testimonialsDemoBadge: "¬ — ¬ ¬", testimonialsSubtitle: "¬ ¬ ¬.",
  t1Role: "¬ ¬", t1Context: "¬ OEM ¬", t1Company: "¬ ¬ (¬)",
  t1Quote: "¬ ¬ ¬ ¬ ¬ ¬.", t1Impact: "70% ¬ RFQ ¬",
  t2Role: "¬ & ¬ ¬", t2Context: "¬ ¬ ¬",
  t2Company: "¬ ¬ ¬ (¬)",
  t2Quote: "¬ ¬ ¬ ¬.", t2Impact: "¬ ¬ ¬",
  t3Role: "¬ ¬ ¬", t3Context: "¬ ¬ ¬",
  t3Company: "¬ ¬ (¬)",
  t3Quote: "¬ ¬ ¬ ¬.", t3Impact: "100% ¬ ¬",

  formTitle: "¬ ¬ ¬ ¬",
  formSubtitle: "¬ ¬ — ¬ ¬ 4 ¬ ¬.",
  formName: "¬ ¬", formEmail: "ઇ-¬", formPhone: "¬ ¬",
  formCompany: "¬ / ¬", formProductInterest: "¬ ¬ / ¬",
  formMessage: "¬ ¬", formSubmit: "¬ ¬", formSubmitting: "¬…",
  formSuccessTitle: "¬ ¬!", formSuccessMsg: "¬ 4 ¬ ¬ ¬ ¬.",
  formRefCode: "¬ ¬", formContactInfo: "¬ ¬ ¬",
  formSendAnother: "¬ ¬ ¬",

  footerTagline: "¬ ¬ ¬ ¬ ¬.",
  footerProductsTitle: "¬", footerCompanyTitle: "¬",
  footerQuickAccessTitle: "¬ ¬",
  footerCopyright: "© ૨૦૨૫ INDUSTRIA ¬ · ¬, ¬ · ¬ ¬",
  backToTop: "¬ ¬",

  newBadge: "¬", featuredBadge: "¬", certifiedBadge: "¬",
  availableNow: "¬", makeToOrderBadge: "¬ ¬",
};

// ─────────────────────────────────────────────────────────────────────────────
// HINDI
// ─────────────────────────────────────────────────────────────────────────────
const hi: TranslationDictionary = {
  home: "मुख्य पृष्ठ", products: "उत्पाद", industries: "उद्योग",
  applications: "अनुप्रयोग", manufacturing: "निर्माण",
  qualityCerts: "गुणवत्ता & प्रमाण", about: "हमारे बारे में", contact: "संपर्क",
  requestQuote: "कोटेशन मांगें", bookVisit: "फैक्ट्री विज़िट", company: "कंपनी",
  search: "खोजें", searchPlaceholder: "उत्पाद, स्पेक्स, सामग्री खोजें…",
  customerPortal: "खरीदार पोर्टल", adminDashboard: "एडमिन CRM",
  login: "डेमो लॉगिन", logout: "लॉग आउट", language: "भाषा", accessViews: "व्यू खोलें",

  heroTag: "औद्योगिक वॉटर मोटर पार्ट्स और फ्लुइड उपकरण",
  heroHeadline: "आपकी फैक्ट्री सिर्फ",
  heroHeadlineEm: "फोन नंबर से कहीं ज़्यादा की हकदार है।",
  heroSubheadline: "अपने इंडस्ट्रियल वॉटर मोटर पार्ट्स, सबमर्सिबल पंप असेंबली और फैक्ट्री क्षमताओं को 24/7 डिजिटल सेल्स इंजन में बदलें — RFQ, कोटेशन और ऑर्डर।",
  exploreFactory: "डिजिटल फैक्ट्री देखें", viewCatalog: "कोटेशन मांगें",
  heroStat1Value: "45,000+", heroStat1Label: "मोटर पार्ट्स / माह",
  heroStat2Value: "< 0.003mm", heroStat2Label: "शाफ्ट ग्राइंडिंग TIR",
  heroStat3Value: "ISO 9001", heroStat3Label: "गुणवत्ता प्रमाणित",

  specifications: "तकनीकी विवरण", downloads: "डाउनलोड और रिपोर्ट्स",
  faqs: "अक्सर पूछे जाने वाले प्रश्न", demoDataBadge: "डेमो मोड",
  learnMore: "और जानें", viewAll: "सभी देखें", getQuote: "कोटेशन लें",
  viewDetails: "विवरण देखें", readMore: "और पढ़ें", submit: "जमा करें",
  cancel: "रद्द करें", send: "संदेश भेजें", sending: "भेजा जा रहा है…",
  close: "बंद करें", back: "वापस", next: "आगे",

  growthStripLabel: "डिजिटल परिवर्तन यात्रा",
  growthStripHeadline: "पारंपरिक मशीन शॉप से",
  growthStripHeadlineEm: "कनेक्टेड डिजिटल एंटरप्राइज़ तक।",
  growthStripDesc: "9 क्रमिक मील-पत्थर जो ऑफलाइन शॉप-फ्लोर घर्षण को स्वचालित Tier-1 खरीद राजस्व में बदलते हैं।",
  step01Title: "ऑफलाइन शॉप", step01Desc: "मैन्युअल कॉल, WhatsApp और पेपर जॉब-कार्ड।",
  step02Title: "डिजिटल स्पेक", step02Desc: "खोजने योग्य 3D CAD, मिश्र धातु ग्रेड & ISO मानक।",
  step03Title: "OEM खोज", step03Desc: "Tier-1 खरीदारों द्वारा 24/7 ऑनलाइन खोजा जाए।",
  step04Title: "CAD इनबाउंड", step04Desc: "STEP, IGES & DWG ड्राइंग फीज़िबिलिटी इनटेक।",
  step05Title: "6-चरण RFQ", step05Desc: "संरचित बैच, डिलीवरी दिनांक & टॉलरेंस।",
  step06Title: "2-घंटे कोट", step06Desc: "स्वचालित CAM टूलपाथ & CPQ लागत विश्लेषण।",
  step07Title: "खरीदार पोर्टल", step07Desc: "लाइव CNC टेलीमेट्री, ऑर्डर स्टेटस & मिल सर्ट।",
  step08Title: "Zeiss मेट्रोलॉजी", step08Desc: "उप-माइक्रॉन CMM लॉग & EN 10204 3.1 MTCs।",
  step09Title: "OEM अनुबंध", step09Desc: "उच्च-मार्जिन वार्षिक फ्रेमवर्क ऑर्डर।",

  featuredLabel: "संपादकीय शोकेस",
  featuredHeadline: "अत्यधिक हाइड्रोलिक कार्य के लिए", featuredHeadlineEm: "इंजीनियर किया गया।",
  featuredDesc: "हमारे प्रमुख V6 सबमर्सिबल वॉटर मोटर और डायनामिकली बैलेंस्ड ब्रॉन्ज़ इम्पेलर असेंबली का विस्तृत परिचय, जो गहरे-बोरवेल कृषि और औद्योगिक स्थापनाओं में 25,000 N अक्षीय डाउनथ्रस्ट को सहन करने के लिए इंजीनियर किया गया है।",
  featuredProductSubtitle: "सटीक सबमर्सिबल ड्राइव आर्किटेक्चर",
  featuredProductName: "V6 रिवाइंडेबल वॉटर-कूल्ड मोटर विद मिचेल कार्बन थ्रस्ट पैड",
  featuredProductDesc: "निर्बाध AISI 304 स्टेनलेस स्टील बाहरी सिलिंडर, उच्च-पारगम्यता CRNO विद्युत स्टील लैमिनेशन, और 100% EC ग्रेड इलेक्ट्रोलाइटिक कॉपर वाइंडिंग वायर के साथ निर्मित।",
  featuredAppLabel: "अनुशंसित इंजीनियरिंग अनुप्रयोग:",
  featuredApp1: "गहरे बोरवेल सिंचाई", featuredApp2: "नगरपालिका जल बूस्टिंग",
  featuredApp3: "खदान जल निकासी", featuredApp4: "सोलर पंपिंग स्किड",
  featuredApp5: "औद्योगिक कच्चे जल इनटेक",
  featuredCTA1: "कस्टम कोटेशन मांगें", featuredCTA2: "सैंपल पार्ट मांगें",
  featuredSpecLink: "पूर्ण तकनीकी स्पेक शीट",
  featuredSpecPower: "पावर रेंज", featuredSpecThrust: "अक्षीय डाउनथ्रस्ट क्षमता",
  featuredSpecSpeed: "ऑपरेटिंग स्पीड", featuredSpecRunout: "शाफ्ट जर्नल रनआउट",

  browseByCategory: "श्रेणी अनुसार देखें",
  browseSubtitle: "वॉटर मोटर असेंबली के हर चरण के लिए सटीक घटक",
  allParts: "सभी पार्ट्स", searchParts: "पार्ट खोजें…", filterBy: "फ़िल्टर", sortBy: "क्रमबद्ध",
  inStock: "स्टॉक में", makeToOrder: "ऑर्डर पर", certified: "प्रमाणित",
  piecesPerMonth: "टुकड़े/माह", tolerance: "सहिष्णुता", material: "सामग्री",
  addToComparison: "तुलना करें", saveProduct: "सहेजें", requestSample: "नमूना मांगें",

  applicationsTitle: "हमारे पार्ट्स उद्योग को शक्ति देते हैं",
  applicationsSubtitle: "गहरे बोरवेल कृषि पंपों से लेकर समुद्री प्रणालियों तक, INDUSTRIA मोटर पार्ट्स कठिन फ्लुइड-हैंडलिंग वातावरण के लिए बने हैं।",
  keyComponents: "मुख्य घटक",

  processLabel: "निर्माण जीवन चक्र",
  processTitle: "एंड-टू-एंड", processHeadlineEm: "सटीक कार्यप्रवाह।",
  processSubtitle: "CAD ड्राइंग समीक्षा से अंतिम डिस्पैच तक, हर औद्योगिक वॉटर मोटर घटक एक एकीकृत गुणवत्ता और इंजीनियरिंग पाइपलाइन से गुज़रता है।",
  processStepLabel: "चरण", processStageLabel: "स्टेज",
  processOutputLabel: "स्टेज आउटपुट:", processQCLabel: "निरीक्षण & QC मानक:",
  processQC1: "कैलिब्रेटेड Zeiss 3D CMM मेट्रोलॉजी",
  processQC2: "ISO 1940 ग्रेड G1.0 डायनामिक बैलेंसिंग",
  processQC3: "100% हाइड्रोस्टेटिक दबाव परीक्षण",
  processQC4: "EN 10204 Type 3.1 ट्रेसेबिलिटी",
  processExploreLink: "पूर्ण प्रक्रिया सुविधा देखें",
  procStep01Title: "आवश्यकता & व्यवहार्यता", procStep01Sub: "अनुप्रयोग & प्रवाह समीक्षा",
  procStep01Desc: "ग्राहक मोटर विनिर्देशों, बोर व्यास, हेड बनाम डिस्चार्ज वक्र आवश्यकताओं, ऑपरेटिंग फ्लुइड विशेषताओं और लक्ष्य बैच मात्रा का विश्लेषण।",
  procStep01Del: "तकनीकी व्यवहार्यता शीट & CAD एनवेलप अनुमोदन",
  procStep02Title: "CAM इंजीनियरिंग & टूलिंग", procStep02Sub: "3D टूलपाथ अनुकूलन",
  procStep02Desc: "Mastercam/Hypermill में CAD मॉडल आयात। मल्टी-एक्सिस CNC लेथ टर्निंग, लाइव टूलिंग ग्रूविंग और प्रोग्रेसिव स्टैम्पिंग डाई डिज़ाइन के लिए टूलपाथ जनरेशन।",
  procStep02Del: "सिमुलेशन सत्यापन & G-Code टूलपाथ रिलीज़",
  procStep03Title: "प्रमाणित कच्चा माल", procStep03Sub: "स्पेक्ट्रो & रासायनिक ट्रेसेबिलिटी",
  procStep03Desc: "प्रमाणित ASTM/DIN कच्चे माल की सोर्सिंग: SS410 बार स्टॉक, ग्रेड LTB-2 ब्रॉन्ज़ इंगॉट, CRNO ग्रेड M400-50A इलेक्ट्रिकल स्टील।",
  procStep03Del: "EN 10204 Type 3.1 मिल टेस्ट सर्टिफिकेट",
  procStep04Title: "सटीक CNC मशीनिंग", procStep04Sub: "मल्टी-एक्सिस मशीनिंग & ग्राइंडिंग",
  procStep04Desc: "हाई-स्पीड CNC लेथ टर्निंग, शाफ्ट सिलिंड्रिकल ग्राइंडिंग (< 0.003mm रनआउट), और लेजर लैमिनेशन नॉचिंग।",
  procStep04Del: "फर्स्ट आर्टिकल इंस्पेक्शन रिपोर्ट (FAIR)",
  procStep05Title: "गुणवत्ता & मेट्रोलॉजी निरीक्षण", procStep05Sub: "Zeiss 3D CMM & बैलेंसिंग",
  procStep05Desc: "ISO 1940 G1.0 पर 100% दो-विमान डायनामिक बैलेंसिंग, 16–25 Bar हाइड्रोस्टेटिक परीक्षण, और सतह खुरदरापन प्रोफिलोमेट्री (Ra 0.2µm)।",
  procStep05Del: "सीरियलाइज़्ड Zeiss CMM & डायनामिक बैलेंसिंग लॉग",
  procStep06Title: "VCI एंटी-करोज़न पैकिंग", procStep06Sub: "नमी & शॉक सुरक्षा",
  procStep06Desc: "अल्ट्रासोनिक पार्ट्स सफाई, जल-विस्थापन रस्ट प्रिवेंटिव ऑयल, VCI नमी-बाधा रैपिंग, और निर्यात-ग्रेड लकड़ी के पैलेटाइज़ेशन।",
  procStep06Del: "बारकोड स्कैनिंग & बैच डिस्पैच लेबलिंग",
  procStep07Title: "लॉजिस्टिक्स & डिस्पैच", procStep07Sub: "समय पर प्लांट डिलीवरी",
  procStep07Desc: "लाइव GPS ट्रैकिंग, GST ई-वे बिल और डिजिटल वाणिज्यिक चालान वितरण के साथ समर्पित औद्योगिक परिवहन के माध्यम से डोर-टू-डोर फ्रेट डिस्पैच।",
  procStep07Del: "रीयल-टाइम पोर्टल कंसाइनमेंट ट्रैकिंग",
  procStep08Title: "बिक्री-पश्चात & तकनीकी सहायता", procStep08Sub: "निरंतर OEM फ़ील्ड सेवा",
  procStep08Desc: "लाइफटाइम ड्राइंग वर्जन कंट्रोल, तेज़ स्पेयर पार्ट्स आपूर्ति (इम्पेलर, सील, कार्बन पैड), और ऑन-साइट इंजीनियरिंग परामर्श।",
  procStep08Del: "समर्पित एप्लिकेशन इंजीनियरिंग हॉटलाइन",

  whyLabel: "व्यावसायिक मूल्य",
  whyTitle: "खरीदार क्यों चुनते हैं", whyTitleEm: "डिजिटल निर्माताओं को।",
  whySubtitle: "अंतहीन फोन कॉल, गायब कैटलॉग और देरी से कोटेशन को समाप्त करें। अपने OEM खरीदारों और वितरक नेटवर्क को एक निर्बाध तकनीकी अनुभव दें।",
  whyCTA: "इंटरएक्टिव डेमो अनुभव करें", whyCTALink: "अपनी मैन्युफैक्चरिंग सेल्स पाइपलाइन को आधुनिक बनाने के लिए तैयार हैं?",
  why01Title: "पार्ट्स & CAD तेज़ी से खोजें",
  why01Desc: "45,000+ मोटर घटकों, इम्पेलर और शाफ्ट में बोर व्यास, हेड, डिस्चार्ज और सामग्री ग्रेड द्वारा तत्काल फ़िल्टरिंग के साथ खोजें।",
  why02Title: "तकनीकी विनिर्देश तुरंत पाएं",
  why02Desc: "सेल्स रेप्स का इंतज़ार किए बिना 2D टॉलरेंस ड्राइंग, 3D STEP मॉडल, लैमिनेशन कर्व शीट और सामग्री परीक्षण रिपोर्ट तक पहुंचें।",
  why03Title: "24/7 बिना देरी कोटेशन मांगें",
  why03Desc: "कभी भी कस्टम आवश्यकताएं, टॉलरेंस सीमाएं और बैच मात्राएं सबमिट करें। 2.4 घंटे के भीतर औपचारिक GST-अनुपालन वाणिज्यिक कोटेशन प्राप्त करें।",
  why04Title: "लाइव पूछताछ & प्रोडक्शन ऑर्डर ट्रैक करें",
  why04Desc: "CNC मशीनिंग, डायनामिक बैलेंसिंग, हाइड्रोस्टेटिक परीक्षण और पैकिंग के माध्यम से रीयल-टाइम निर्माण मील-पत्थर अपडेट के साथ ऑर्डर को फॉलो करें।",
  why05Title: "इंजीनियरिंग दस्तावेज़ एक जगह पाएं",
  why05Desc: "सभी मिल टेस्ट सर्टिफिकेट (EN 10204 3.1), Zeiss 3D CMM निरीक्षण रिपोर्ट और डिस्पैच चालान के लिए केंद्रीकृत डिजिटल भंडार।",

  certsLabel: "गुणवत्ता आश्वासन & मानक",
  certsTitle: "शून्य-दोष", certsTitleEm: "मेट्रोलॉजी मानक।",
  certsSubtitle: "कड़े कैलिब्रेशन प्रोटोकॉल, CMM सत्यापन और हाइड्रोस्टेटिक दबाव परीक्षण यह सुनिश्चित करते हैं कि हर वितरित घटक चरम परिस्थितियों में विश्वसनीय रूप से काम करे।",
  certsInspReady: "निरीक्षण तैयार", certsViewLink: "पूर्ण गुणवत्ता परीक्षण प्रोटोकॉल & CMM प्रयोगशाला देखें",
  cert1Title: "ISO 9001:2015 गुणवत्ता प्रबंधन", cert1Cat: "गुणवत्ता आश्वासन प्रणाली",
  cert1Desc: "सटीक CNC मशीनिंग, स्टेटर कॉइल वाइंडिंग, डायनामिक बैलेंसिंग और असेंबली निरीक्षण को कवर करने वाली प्रमाणित विनिर्माण प्रक्रियाएं।",
  cert1Badge: "ISO मानक",
  cert2Title: "ISI / BIS वॉटर मोटर मानक", cert2Cat: "मोटर दक्षता & सुरक्षा",
  cert2Desc: "गहरे कुएं सबमर्सिबल पंप, ओपनवेल इकाइयों और कृषि मोनोब्लॉक मोटर के लिए भारतीय मानक विनिर्देशों के अनुरूप।",
  cert2Badge: "राष्ट्रीय मानक",
  cert3Title: "EN 10204 Type 3.1 ट्रेसेबिलिटी", cert3Cat: "कच्चे माल की अखंडता",
  cert3Desc: "हर स्टील बिलेट, ब्रॉन्ज़ इंगॉट और CRGO इलेक्ट्रिकल कॉइल प्रमाणित रासायनिक स्पेक्ट्रोमीटर और तन्य यांत्रिक परीक्षण डेटा के साथ आता है।",
  cert3Badge: "सामग्री ट्रेसेबिलिटी",
  cert4Title: "ISO 1940 ग्रेड G1.0 बैलेंसिंग", cert4Cat: "घूर्णन गतिकी",
  cert4Desc: "24,000 RPM तक स्वचालित दो-विमान Schenck बैलेंसिंग मशीनों पर शून्य-कंपन उच्च-गति रोटेशनल सत्यापन।",
  cert4Badge: "डायनामिक बैलेंसिंग",

  testimonialsLabel: "उदाहरण यात्राएं",
  testimonialsTitle: "मानवीय प्रभाव", testimonialsTitleEm: "का प्रदर्शन।",
  testimonialsDemoBadge: "डेमो डेटा — अनाम उदाहरण व्यक्तित्व",
  testimonialsSubtitle: "एक डिजिटल फैक्ट्री प्लेटफ़ॉर्म खरीद खरीदारों, वितरण भागीदारों और विनिर्माण अधिकारियों के लिए दिन-प्रतिदिन के संचालन को कैसे बदलता है।",
  t1Role: "प्रोक्योरमेंट मैनेजर", t1Context: "सैंपल OEM खरीदार यात्रा",
  t1Company: "सबमर्सिबल पंप निर्माण संयंत्र (राजकोट)",
  t1Quote: "इस डिजिटल कैटलॉग से पहले, तकनीकी ड्राइंग और बैच टॉलरेंस सर्टिफिकेट पाने में 3 से 4 दिनों के फोन कॉल लगते थे। अब हमारे इंजीनियर रोटर शाफ्ट रनआउट और CAD मॉडल सीधे सत्यापित कर सकते हैं और 5 मिनट में RFQ उठा सकते हैं।",
  t1Impact: "70% तेज़ RFQ सोर्सिंग चक्र",
  t2Role: "डीलर & वितरण प्रमुख", t2Context: "उदाहरण डीलर नेटवर्क वर्कफ़्लो",
  t2Company: "क्षेत्रीय कृषि मशीनरी आपूर्ति नेटवर्क (मेहसाणा)",
  t2Quote: "हमारे रिटेल डीलर ब्रॉन्ज़ इम्पेलर और रिवाइंडेबल स्टेटर की रीयल-टाइम उपलब्धता जांच सकते हैं, डिस्पैच स्टेटस ट्रैक कर सकते हैं, और कस्टमर पोर्टल से ISI टेस्ट सर्टिफिकेट डाउनलोड कर सकते हैं।",
  t2Impact: "शून्य डिस्पैच संचार देरी",
  t3Role: "फैक्ट्री प्रबंध निदेशक", t3Context: "डेमो फैक्ट्री मालिक व्यक्तित्व",
  t3Company: "प्रिसिज़न मोटर कॉम्पोनेंट्स निर्माण (सानंद GIDC)",
  t3Quote: "हमारी सभी पूछताछ, CAD ड्राइंग, कोटेशन और CNC प्रोडक्शन चरणों को एक डिजिटल सिस्टम में जोड़ने से हमें अपने व्यापारिक पूछताछों के स्रोत पर पूर्ण पारदर्शिता मिली।",
  t3Impact: "100% पाइपलाइन दृश्यता",

  formTitle: "तुरंत कोटेशन पाएं",
  formSubtitle: "अपनी ज़रूरत बताएं — हमारी तकनीकी टीम 4 कार्य घंटों में जवाब देती है।",
  formName: "आपका नाम", formEmail: "ईमेल पता", formPhone: "फोन नंबर",
  formCompany: "कंपनी / संगठन", formProductInterest: "आवश्यक उत्पाद / पार्ट",
  formMessage: "आवश्यकता विवरण", formSubmit: "इन्क्वायरी भेजें", formSubmitting: "भेजा जा रहा है…",
  formSuccessTitle: "इन्क्वायरी मिल गई!",
  formSuccessMsg: "हमारी तकनीकी बिक्री टीम 4 कार्य घंटों में विस्तृत कोटेशन के साथ संपर्क करेगी।",
  formRefCode: "संदर्भ कोड", formContactInfo: "या सीधे संपर्क करें",
  formSendAnother: "एक और इन्क्वायरी भेजें",

  footerTagline: "सबमर्सिबल पंप, कृषि सिंचाई और औद्योगिक फ्लुइड सिस्टम के लिए सटीक निर्मित वॉटर मोटर घटक।",
  footerProductsTitle: "उत्पाद", footerCompanyTitle: "कंपनी",
  footerQuickAccessTitle: "त्वरित पहुंच",
  footerCopyright: "© 2025 INDUSTRIA मोटर पार्ट्स · सानंद GIDC, गुजरात · सर्वाधिकार सुरक्षित",
  backToTop: "ऊपर जाएं",

  newBadge: "नया", featuredBadge: "विशेष", certifiedBadge: "प्रमाणित",
  availableNow: "उपलब्ध", makeToOrderBadge: "ऑर्डर पर",
};

export const translations: Record<Language, TranslationDictionary> = { en, gu, hi };
