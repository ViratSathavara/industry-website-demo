import {
  Lead,
  Enquiry,
  RFQ,
  Quote,
  Order,
  Appointment,
  DocumentItem,
  PortalMessage,
  ActivityTimelineItem
} from "@/lib/types";

export const mockLeads: Lead[] = [
  {
    id: "lead-001",
    name: "Rajeshbhai Patel",
    company: "Shree Shakti Engineering Works",
    industry: "Precision CNC Machining",
    location: "Mehsana, Gujarat",
    requirement: "Supply of 150 nos CNC Machined Weldneck Flanges (Class 300 SS316L)",
    source: "Website",
    estimatedValue: 475000,
    owner: "Vikram Mehta",
    priority: "High",
    stage: "Quote Sent",
    lastActivity: "2026-09-27",
    nextFollowUp: "2026-09-30",
    phone: "+91 98250 44120",
    email: "rajesh@shreeshaktieng.com",
    notes: ["Client reviewed drawing specs. Discussed 10-day expedited delivery with EN 10204 3.1 MTC."]
  },
  {
    id: "lead-002",
    name: "Sanjay Kulkarni",
    company: "Tata Motors Commercial Vehicles Ltd",
    industry: "Precision CNC Machining",
    location: "Pimpri, Pune",
    requirement: "Annual contract for 2,500 pcs CNC turned and induction hardened spline shafts (DIN 5480)",
    source: "Website",
    estimatedValue: 3850000,
    owner: "Amit Sharma",
    priority: "High",
    stage: "Negotiation",
    lastActivity: "2026-09-28",
    nextFollowUp: "2026-09-29",
    phone: "+91 98220 88214",
    email: "sanjay.kulkarni@tatamotors.demo",
    notes: ["Sent revised volume quote with PPAP Level 3 documentation included."]
  },
  {
    id: "lead-003",
    name: "Arunav Sengupta",
    company: "L&T Heavy Engineering Division",
    industry: "Precision CNC Machining",
    location: "Hazira, Surat",
    requirement: "400 pcs Class 600 ASME B16.5 high-pressure forged flanges in Duplex 2205",
    source: "Referral",
    estimatedValue: 2450000,
    owner: "Vikram Mehta",
    priority: "High",
    stage: "Qualified",
    lastActivity: "2026-09-28",
    nextFollowUp: "2026-10-01",
    phone: "+91 98790 33410",
    email: "arunav.s@ltheavy.demo",
    notes: ["Awaiting final piping layout drawing revision D. Client requested 3.2 TUV witness inspection."]
  },
  {
    id: "lead-004",
    name: "Sunil Deshmukh",
    company: "Danfoss Power Solutions India Pvt Ltd",
    industry: "Precision CNC Machining",
    location: "Kurkumbh, Pune",
    requirement: "350 pcs 4-Port high-pressure hydraulic manifold blocks (Ductile Iron GGG40, 420 Bar rated)",
    source: "Website",
    estimatedValue: 1250000,
    owner: "Neha Trivedi",
    priority: "Medium",
    stage: "Qualified",
    lastActivity: "2026-09-26",
    nextFollowUp: "2026-10-02",
    phone: "+91 98240 11985",
    email: "sunil.d@danfoss.demo",
    notes: ["3D STEP files imported into CAM. Verified SUN cavity tool availability."]
  },
  {
    id: "lead-005",
    name: "Ananya Sen",
    company: "Godrej Aerospace & Defense",
    industry: "Precision CNC Machining",
    location: "Vikhroli, Mumbai",
    requirement: "20 sets 5-Axis CNC machined Titanium Ti-6Al-4V turbine closed impellers (±0.005mm)",
    source: "Direct",
    estimatedValue: 4800000,
    owner: "Vikram Mehta",
    priority: "High",
    stage: "Negotiation",
    lastActivity: "2026-09-28",
    nextFollowUp: "2026-09-30",
    phone: "+91 97250 66723",
    email: "ananya.sen@godrej.demo",
    notes: ["Dynamic balancing test rig capability confirmed. AS9102 FAIR documentation requested."]
  },
  {
    id: "lead-006",
    name: "Nitin Gaikwad",
    company: "Bharat Forge Precision Machining Division",
    industry: "Precision CNC Machining",
    location: "Mundhwa, Pune",
    requirement: "1,200 pcs robotic 6th-axis harmonic reducer output hubs (42CrMo4, runout < 3µm)",
    source: "Google Search",
    estimatedValue: 2150000,
    owner: "Neha Trivedi",
    priority: "Medium",
    stage: "Contacted",
    lastActivity: "2026-09-27",
    nextFollowUp: "2026-10-03",
    phone: "+91 98901 44552",
    email: "nitin.gaikwad@bharatforge.demo",
    notes: ["Initial sample trial approved on Zeiss CMM. Preparing commercial proposal for annual schedule."]
  }
];

export const mockEnquiries: Enquiry[] = [
  {
    id: "enq-001",
    enquiryNumber: "ENQ-2026-00381",
    customerName: "Rajeshbhai Patel",
    company: "Shree Shakti Engineering Works",
    phone: "+91 98250 44120",
    email: "rajesh@shreeshaktieng.com",
    productInterest: "CNC Machined Weldneck Flanges Class 300 / 600",
    source: "Website",
    stage: "Qualified",
    urgency: "High",
    message: "Need urgent quotation for 150 pcs 6-inch SS316L flanges with EN 10204 3.1 MTC and 125 Ra serration.",
    createdAt: "2026-09-27 10:30",
    assignee: "Vikram Mehta",
    location: "Mehsana, Gujarat"
  },
  {
    id: "enq-002",
    enquiryNumber: "ENQ-2026-00382",
    customerName: "Sanjay Kulkarni",
    company: "Tata Motors Commercial Vehicles Ltd",
    phone: "+91 98220 88214",
    email: "sanjay.kulkarni@tatamotors.demo",
    productInterest: "Precision Induction Hardened Spline Shafts",
    source: "RFQ",
    stage: "Qualified",
    urgency: "Urgent",
    message: "Inquiring about production capacity for 2,500 spline shafts per quarter with PPAP documentation.",
    createdAt: "2026-09-28 09:15",
    assignee: "Amit Sharma",
    location: "Pune, Maharashtra"
  },
  {
    id: "enq-003",
    enquiryNumber: "ENQ-2026-00383",
    customerName: "Sunil Deshmukh",
    company: "Danfoss Power Solutions India Pvt Ltd",
    phone: "+91 98240 11985",
    email: "sunil.d@danfoss.demo",
    productInterest: "Custom 4-Port Hydraulic Manifold Blocks",
    source: "Website",
    stage: "New",
    urgency: "Normal",
    message: "Can you provide 350 bar proof-pressure test logs and cleanliness rating per ISO 4406 for custom manifolds?",
    createdAt: "2026-09-28 11:45",
    assignee: "Neha Trivedi",
    location: "Pune, Maharashtra"
  },
  {
    id: "enq-004",
    enquiryNumber: "ENQ-2026-00384",
    customerName: "Ananya Sen",
    company: "Godrej Aerospace & Defense",
    phone: "+91 97250 66723",
    email: "ananya.sen@godrej.demo",
    productInterest: "5-Axis CNC Titanium Turbine Impeller",
    source: "Referral",
    stage: "Qualified",
    urgency: "High",
    message: "Requesting technical consultation on 5-axis toolpathing for Ti-6Al-4V impellers with ±0.005mm tolerance.",
    createdAt: "2026-09-26 15:20",
    assignee: "Vikram Mehta",
    location: "Mumbai, Maharashtra"
  }
];

export const mockRFQs: RFQ[] = [
  {
    id: "rfq-001",
    rfqNumber: "RFQ-2026-00482",
    customerId: "cust-001",
    companyName: "Shree Shakti Engineering Works",
    contactPerson: "Rajeshbhai Patel",
    designation: "Managing Director",
    phone: "+91 98250 44120",
    email: "rajesh@shreeshaktieng.com",
    industry: "Precision CNC Machining",
    items: [
      {
        productId: "prod-eng-001",
        productName: "Heavy Duty CNC Machined Weldneck Flange Class 300",
        quantity: 150,
        unit: "Pieces",
        customSpecs: "Material SS316L, 6-inch NB, Schedule 40 bore, 125-250 Ra phonographic face"
      }
    ],
    deliveryLocation: "Mehsana, Gujarat",
    targetDate: "2026-10-15",
    application: "Refinery Expansion Skid Unit",
    budget: 500000,
    notes: "Requires EN 10204 Type 3.1 material test certificate and ultrasonic inspection report.",
    attachedFile: "weldneck-flange-6inch-spec.pdf",
    status: "Quoted",
    assignedTo: "Vikram Mehta",
    createdAt: "2026-09-26 11:20",
    updatedAt: "2026-09-27 15:45"
  },
  {
    id: "rfq-002",
    rfqNumber: "RFQ-2026-00483",
    customerId: "cust-002",
    companyName: "Tata Motors Commercial Vehicles Ltd",
    contactPerson: "Sanjay Kulkarni",
    designation: "Head of Drivetrain Sourcing",
    phone: "+91 98220 88214",
    email: "sanjay.kulkarni@tatamotors.demo",
    industry: "Precision CNC Machining",
    items: [
      {
        productId: "prod-cnc-003",
        productName: "High-Precision Induction Hardened Spline Shaft",
        quantity: 2500,
        unit: "Pieces",
        customSpecs: "Alloy Steel EN353, DIN 5480 spline standard, 58-62 HRC case depth 2.0mm, bearing journals < 0.004mm runout"
      }
    ],
    deliveryLocation: "Pimpri, Pune, Maharashtra",
    targetDate: "2026-10-25",
    application: "Heavy Commercial Vehicle Intermediate Axle Shafts",
    budget: 4000000,
    notes: "Requires PPAP Level 3 package and Zeiss CMM gear involute profile report.",
    attachedFile: "tata-cv-spline-shaft-rev-d.step",
    status: "Reviewing",
    assignedTo: "Amit Sharma",
    createdAt: "2026-09-27 14:10",
    updatedAt: "2026-09-28 10:00"
  },
  {
    id: "rfq-003",
    rfqNumber: "RFQ-2026-00484",
    customerId: "cust-004",
    companyName: "Danfoss Power Solutions India Pvt Ltd",
    contactPerson: "Sunil Deshmukh",
    designation: "Supplier Quality & Sourcing Lead",
    phone: "+91 98240 11985",
    email: "sunil.d@danfoss.demo",
    industry: "Precision CNC Machining",
    items: [
      {
        productId: "prod-cnc-004",
        productName: "Custom 4-Port High-Pressure Hydraulic Manifold Block",
        quantity: 350,
        unit: "Units",
        customSpecs: "Ductile Iron GGG40, 420 Bar proof tested, SUN T-11A cavities, ISO 4406 cleanliness rating"
      }
    ],
    deliveryLocation: "Kurkumbh MIDC, Pune, Maharashtra",
    targetDate: "2026-11-05",
    application: "Mobile Hydraulic Control Units for Excavators",
    budget: 1300000,
    notes: "Pressure proof test chart and thermal deburring verification required.",
    attachedFile: "danfoss-manifold-block-3d.step",
    status: "Quoted",
    assignedTo: "Neha Trivedi",
    createdAt: "2026-09-25 16:15",
    updatedAt: "2026-09-27 14:30"
  },
  {
    id: "rfq-004",
    rfqNumber: "RFQ-2026-00485",
    customerId: "cust-005",
    companyName: "Godrej Aerospace & Defense",
    contactPerson: "Ananya Sen",
    designation: "General Manager - Precision Components",
    phone: "+91 97250 66723",
    email: "ananya.sen@godrej.demo",
    industry: "Precision CNC Machining",
    items: [
      {
        productId: "prod-cnc-002",
        productName: "5-Axis CNC Machined Gas Turbine Closed Impeller",
        quantity: 20,
        unit: "Units",
        customSpecs: "Titanium Grade 5 (Ti-6Al-4V), continuous 5-axis airfoil profile ±0.005mm, ISO 1940 Grade G1.0 balancing"
      }
    ],
    deliveryLocation: "Vikhroli, Mumbai, Maharashtra",
    targetDate: "2026-11-20",
    application: "Gas Turbine Auxiliary Power Unit (APU) Stage 1 Compressor",
    budget: 5000000,
    notes: "AS9102 FAIR documentation, ultrasonic inspection, and dynamic spin pit certification mandatory.",
    attachedFile: "turbine-impeller-blisk-model.prt",
    status: "Won",
    assignedTo: "Vikram Mehta",
    createdAt: "2026-09-22 09:30",
    updatedAt: "2026-09-26 16:30"
  }
];

export const mockQuotes: Quote[] = [
  {
    id: "qt-001",
    quoteNumber: "QT-2026-01042",
    rfqId: "rfq-001",
    rfqNumber: "RFQ-2026-00482",
    customerId: "cust-001",
    companyName: "Shree Shakti Engineering Works",
    contactPerson: "Rajeshbhai Patel",
    email: "rajesh@shreeshaktieng.com",
    phone: "+91 98250 44120",
    issueDate: "2026-09-27",
    expiryDate: "2026-10-12",
    items: [
      {
        id: "qi-001",
        productId: "prod-eng-001",
        productName: "CNC Machined Weldneck Flange Class 300 SS316L (6-inch NB)",
        sku: "PRC-FLG-WN300",
        description: "ASME B16.5 Forged SS316L, 125-250 Ra serrated face, CNC face turned and drilled",
        qty: 150,
        unitPrice: 2800,
        discount: 5,
        taxPercent: 18,
        total: 470820
      }
    ],
    subtotal: 420000,
    discountTotal: 21000,
    taxTotal: 71820,
    shippingFee: 5000,
    grandTotal: 475820,
    leadTime: "10 Days from Purchase Order",
    paymentTerms: "30% Advance, 70% against Proforma Invoice before dispatch",
    deliveryTerms: "Ex-Works Mehsana / Door Delivery via SafeXpress Freight",
    notes: "Prices include 100% Zeiss CMM dimensional inspection and EN 10204 Type 3.1 MTC.",
    status: "Sent",
    createdAt: "2026-09-27 15:45"
  },
  {
    id: "qt-002",
    quoteNumber: "QT-2026-01043",
    rfqId: "rfq-002",
    rfqNumber: "RFQ-2026-00483",
    customerId: "cust-002",
    companyName: "Tata Motors Commercial Vehicles Ltd",
    contactPerson: "Sanjay Kulkarni",
    email: "sanjay.kulkarni@tatamotors.demo",
    phone: "+91 98220 88214",
    issueDate: "2026-09-28",
    expiryDate: "2026-10-15",
    items: [
      {
        id: "qi-002",
        productId: "prod-cnc-003",
        productName: "High-Precision Induction Hardened Spline Shaft (DIN 5480)",
        sku: "PRC-TRN-SPL400",
        description: "Alloy Steel EN353, induction hardened 58-62 HRC, cylindrical ground journals (< 0.004mm runout)",
        qty: 2500,
        unitPrice: 1540,
        discount: 6,
        taxPercent: 18,
        total: 4268670
      }
    ],
    subtotal: 3850000,
    discountTotal: 231000,
    taxTotal: 651420,
    shippingFee: 18000,
    grandTotal: 4287840,
    leadTime: "14 Days",
    paymentTerms: "Net 45 Days per OEM Tier-1 Supply Agreement",
    deliveryTerms: "FOR Destination Tata Motors Pimpri Plant Gate",
    notes: "Includes complete PPAP Level 3 dimensional verification package and spline checker logs.",
    status: "Sent",
    createdAt: "2026-09-28 10:15"
  },
  {
    id: "qt-003",
    quoteNumber: "QT-2026-01044",
    rfqId: "rfq-004",
    rfqNumber: "RFQ-2026-00485",
    customerId: "cust-005",
    companyName: "Godrej Aerospace & Defense",
    contactPerson: "Ananya Sen",
    email: "ananya.sen@godrej.demo",
    phone: "+91 97250 66723",
    issueDate: "2026-09-26",
    expiryDate: "2026-10-10",
    items: [
      {
        id: "qi-003",
        productId: "prod-cnc-002",
        productName: "5-Axis CNC Machined Gas Turbine Closed Impeller (Titanium Grade 5)",
        sku: "PRC-5AX-IMP718",
        description: "Monobloc Ti-6Al-4V continuous 5-axis milled bladed rotor, ISO 1940 G1.0 dynamically balanced",
        qty: 20,
        unitPrice: 240000,
        discount: 3,
        taxPercent: 18,
        total: 5493360
      }
    ],
    subtotal: 4800000,
    discountTotal: 144000,
    taxTotal: 838080,
    shippingFee: 25000,
    grandTotal: 5519080,
    leadTime: "21 Days",
    paymentTerms: "40% advance with PO, 60% on CMM inspection signoff before flight packing",
    deliveryTerms: "Door delivery to Godrej Aerospace Vikhroli Plant Bay 7",
    notes: "Includes full AS9102 FAIR documentation, ultrasonic inspection, and dynamic spin balancing certificates.",
    status: "Accepted",
    createdAt: "2026-09-26 14:00"
  }
];

export const mockOrders: Order[] = [
  {
    id: "ord-001",
    orderNumber: "SO-2026-00210",
    quoteId: "qt-001",
    quoteNumber: "QT-2026-01042",
    rfqNumber: "RFQ-2026-00482",
    customerId: "cust-001",
    companyName: "Shree Shakti Engineering Works",
    contactPerson: "Rajeshbhai Patel",
    phone: "+91 98250 44120",
    shippingAddress: "Plot 42, GIDC Industrial Estate Phase II, Mehsana - 384002, Gujarat",
    items: [
      {
        productId: "prod-eng-001",
        productName: "CNC Machined Weldneck Flange Class 300 SS316L",
        qty: 150,
        unitPrice: 2800,
        total: 420000
      }
    ],
    totalAmount: 475820,
    orderDate: "2026-09-26",
    status: "Production",
    paymentStatus: "Partial",
    productionStage: "Stage 4: Zeiss 3D CMM Metrology & Inspection (85% Completed)",
    estimatedDelivery: "2026-10-06",
    trackingNumber: "TRK-SX-994821",
    timeline: [
      { title: "Purchase Order Confirmed", stage: "Order Placed", date: "2026-09-26 10:00", description: "PO-SEW-2026-104 confirmed by Shree Shakti Engineering.", completed: true },
      { title: "Raw Material Allocated & Heat Verification", stage: "Confirmed", date: "2026-09-26 14:30", description: "Forged ASTM A182 F316 billets allocated from store. Spectro chemical analysis passed.", completed: true },
      { title: "CNC Face Turning & Bolt Drilling", stage: "Production", date: "2026-09-27 08:30", description: "CNC turning phonographic serrations and high-precision PCD bolt pattern drilling in progress.", completed: true, active: true },
      { title: "Zeiss 3D CMM & Hydrostatic QA", stage: "Quality Check", date: "Estimated 2026-10-02", description: "100% dimensional coordinate inspection and hydrostatic proof pressure verification.", completed: false },
      { title: "VCI Anti-Corrosion Wrap & Seaworthy Crating", stage: "Ready to Dispatch", date: "Estimated 2026-10-04", description: "ISPM-15 heat-treated export crates with moisture barrier foil packing.", completed: false },
      { title: "Dispatched via Dedicated Transport", stage: "Dispatched", date: "Estimated 2026-10-05", description: "Consignment dispatched to Mehsana GIDC.", completed: false },
      { title: "Delivered to Plant Gate", stage: "Delivered", date: "Estimated 2026-10-06", description: "Final delivery and physical signoff with Mill Test Certificate.", completed: false }
    ]
  },
  {
    id: "ord-002",
    orderNumber: "SO-2026-00208",
    customerId: "cust-005",
    companyName: "Godrej Aerospace & Defense",
    contactPerson: "Ananya Sen",
    phone: "+91 97250 66723",
    shippingAddress: "Precision Machining & CMM Metrology Lab, Bay 7, Vikhroli, Mumbai - 400079",
    items: [
      {
        productId: "prod-cnc-002",
        productName: "5-Axis CNC Machined Titanium Turbine Impellers",
        qty: 12,
        unitPrice: 240000,
        total: 2880000
      }
    ],
    totalAmount: 3418400,
    orderDate: "2026-09-15",
    status: "Delivered",
    paymentStatus: "Paid",
    productionStage: "Completed & Dispatched",
    estimatedDelivery: "2026-09-24",
    trackingNumber: "TRK-GJ-884102",
    timeline: [
      { title: "Defense PO Placed", stage: "Order Placed", date: "2026-09-15 11:00", description: "Classified turbine component contract signed.", completed: true },
      { title: "Billet Heat Lot Verified", stage: "Confirmed", date: "2026-09-15 15:00", description: "Titanium Ti-6Al-4V AMS 4928 certified billets inspected via ultrasonic immersion.", completed: true },
      { title: "5-Axis Simultaneous CNC Machining", stage: "Production", date: "2026-09-18 17:00", description: "Mazak 5-axis airfoil profile contouring executed within ±0.005mm tolerance.", completed: true },
      { title: "Dynamic Balancing & FPI NDT", stage: "Quality Check", date: "2026-09-20 12:00", description: "Dynamic balancing to ISO 1940 Grade G1.0 passed; Fluorescent penetrant test defect-free.", completed: true },
      { title: "AS9102 FAIR Signoff", stage: "Ready to Dispatch", date: "2026-09-22 10:00", description: "First Article Inspection Report approved by defense quality inspector.", completed: true },
      { title: "Armed Escort Dispatch", stage: "Dispatched", date: "2026-09-22 16:00", description: "Air-ride suspension dedicated vehicle in transit to Mumbai.", completed: true },
      { title: "Delivered & Signed Off", stage: "Delivered", date: "2026-09-24 14:30", description: "Delivered and accepted at Godrej Aerospace Bay 7.", completed: true }
    ]
  }
];

export const mockAppointments: Appointment[] = [
  {
    id: "apt-001",
    bookingNumber: "APT-2026-00084",
    type: "Factory Visit",
    customerName: "Rajeshbhai Patel",
    company: "Shree Shakti Engineering Works",
    phone: "+91 98250 44120",
    email: "rajesh@shreeshaktieng.com",
    date: "2026-10-02",
    timeSlot: "11:00 AM - 01:00 PM",
    assignedRep: "Vikram Mehta (Plant Head)",
    location: "Main Precision Machining Facility, GIDC Vatva, Ahmedabad",
    status: "Confirmed",
    notes: "Visitor wants to inspect DMG MORI 5-axis machining cells and Zeiss 3D CMM metrology room."
  },
  {
    id: "apt-002",
    bookingNumber: "APT-2026-00085",
    type: "Machine Demo",
    customerName: "Sanjay Kulkarni",
    company: "Tata Motors Commercial Vehicles Ltd",
    phone: "+91 98220 88214",
    email: "sanjay.kulkarni@tatamotors.demo",
    date: "2026-10-04",
    timeSlot: "02:30 PM - 04:30 PM",
    assignedRep: "Amit Sharma (Automotive Key Accounts)",
    location: "CNC Turning & Induction Hardening Cell 3, Plant 1",
    status: "Confirmed",
    notes: "Trial run demonstration of high-speed spline hobbing and CNC cylindrical grinding on EN353 shafts."
  },
  {
    id: "apt-003",
    bookingNumber: "APT-2026-00086",
    type: "Technical Consultation",
    customerName: "Sunil Deshmukh",
    company: "Danfoss Power Solutions India Pvt Ltd",
    phone: "+91 98240 11985",
    email: "sunil.d@danfoss.demo",
    date: "2026-10-05",
    timeSlot: "10:30 AM - 12:00 PM",
    assignedRep: "Vikram Mehta (Engineering Director)",
    location: "Design Conference Room & Virtual Teams Link",
    status: "Confirmed",
    notes: "Review of 3D CAD manifold cavity layout and high-pressure gun drilling tool clearance."
  }
];

export const mockDocuments: DocumentItem[] = [
  {
    id: "doc-001",
    title: "Precision CNC Machining & High-Tolerance Components Master Catalogue 2026",
    category: "Catalogues",
    fileUrl: "/documents/industria-precision-master-catalogue-2026.pdf",
    fileSize: "12.8 MB",
    relatedTo: "All Products",
    uploadDate: "2026-09-01",
    isPublic: true
  },
  {
    id: "doc-002",
    title: "Zeiss 3D CMM Metrology Lab & Quality Assurance Capability Statement",
    category: "Quality Reports",
    fileUrl: "/documents/zeiss-cmm-metrology-capabilities.pdf",
    fileSize: "3.4 MB",
    relatedTo: "Quality & Testing",
    uploadDate: "2026-08-20",
    isPublic: true
  },
  {
    id: "doc-003",
    title: "IATF 16949:2016 & ISO 9001:2015 Plant Audit Certification (TUV Nord)",
    category: "Certificates",
    fileUrl: "/documents/iatf-16949-iso-9001-certificate.pdf",
    fileSize: "1.9 MB",
    relatedTo: "Quality & Testing",
    uploadDate: "2026-07-15",
    isPublic: true
  },
  {
    id: "doc-004",
    title: "Mill Test Certificate (EN 10204 Type 3.1) Sample & Chemical Spectro Template",
    category: "Product Datasheets",
    fileUrl: "/documents/sample-mtc-en10204-type31.pdf",
    fileSize: "840 KB",
    relatedTo: "Materials & Testing",
    uploadDate: "2026-09-10",
    isPublic: true
  }
];

export const mockMessages: PortalMessage[] = [
  {
    id: "msg-001",
    threadId: "thr-001",
    sender: "Customer",
    senderName: "Rajeshbhai Patel (Shree Shakti Eng)",
    text: "Can we expedite dispatch for 50 pieces of weldneck flanges by 3 days? Our refinery client has an earlier shutdown schedule.",
    timestamp: "2026-09-27 16:30",
    read: true
  },
  {
    id: "msg-002",
    threadId: "thr-001",
    sender: "Sales",
    senderName: "Vikram Mehta (INDUSTRIA Plant Head)",
    text: "We have prioritized the first batch of 50 pcs on our Doosan CNC lathe cell. CMM inspection is underway, and we will dispatch via express cargo tomorrow morning.",
    timestamp: "2026-09-27 17:15",
    read: false
  }
];

export const mockActivityTimeline: ActivityTimelineItem[] = [
  {
    id: "act-001",
    entityType: "order",
    entityId: "ord-001",
    title: "Zeiss CMM Inspection Passed for Batch #8491",
    description: "150 pcs SS316L weldneck flanges passed 100% dimensional coordinate checks with zero deviations.",
    timestamp: "2026-09-28 14:15",
    user: "Kailash Solanki (QA Lead)"
  },
  {
    id: "act-002",
    entityType: "quote",
    entityId: "qt-002",
    title: "New Quotation Generated (QT-2026-01043)",
    description: "Quotation for ₹42,87,840 submitted to Tata Motors CV for 2,500 pcs induction hardened spline shafts.",
    timestamp: "2026-09-28 10:15",
    user: "Amit Sharma (Key Accounts)"
  },
  {
    id: "act-003",
    entityType: "order",
    entityId: "ord-002",
    title: "5-Axis Mazak Cell Started Titanium Impeller Blisk Run",
    description: "Job Card JC-2026-904 launched for 20 units Titanium Grade 5 closed impellers for Godrej Aerospace.",
    timestamp: "2026-09-27 09:00",
    user: "Ramesh Mistry (CNC Cell Lead)"
  }
];

export const mockAnalyticsData = {
  kpis: {
    monthlyVisitors: 48500,
    visitorsGrowth: "+18.4%",
    newEnquiries: 420,
    enquiriesGrowth: "+24.2%",
    rfqsGrowth: "+31.5%",
    demoRevenue: 18450000,
    revenueGrowth: "+27.8%"
  },
  enquiriesOverTime: [
    { month: "Apr", inquiries: 142, rfqs: 38, orders: 18 },
    { month: "May", inquiries: 168, rfqs: 46, orders: 24 },
    { month: "Jun", inquiries: 195, rfqs: 52, orders: 29 },
    { month: "Jul", inquiries: 210, rfqs: 58, orders: 32 },
    { month: "Aug", inquiries: 245, rfqs: 64, orders: 38 },
    { month: "Sep", inquiries: 280, rfqs: 72, orders: 42 }
  ],
  funnelData: [
    { stage: "Storefront Visitors", count: 48500 },
    { stage: "CAD Spec Views", count: 18200 },
    { stage: "Inquiries Submitted", count: 3450 },
    { stage: "Formal RFQs", count: 980 },
    { stage: "Quotes Issued", count: 640 },
    { stage: "Orders Won", count: 215 }
  ],
  enquiriesBySource: [
    { name: "Google Search (Organic)", value: 42, color: "#d4560a" },
    { name: "Direct CAD Upload", value: 28, color: "#2563eb" },
    { name: "WhatsApp Business", value: 18, color: "#16a34a" },
    { name: "OEM Referrals", value: 12, color: "#9333ea" }
  ],
  topProducts: [
    { name: "CNC Machined Weldneck Flanges Class 300", views: 2420, enquiries: 142, conversion: "5.8%" },
    { name: "5-Axis CNC Machined Gas Turbine Closed Impeller", views: 2180, enquiries: 112, conversion: "5.1%" },
    { name: "Custom 4-Port High-Pressure Hydraulic Manifold Block", views: 1890, enquiries: 95, conversion: "5.0%" },
    { name: "High-Precision Induction Hardened Spline Shaft", views: 1640, enquiries: 76, conversion: "4.6%" },
    { name: "Robotic Arm 6th-Axis Harmonic Reducer Flange Hub", views: 1720, enquiries: 88, conversion: "5.1%" }
  ]
};
