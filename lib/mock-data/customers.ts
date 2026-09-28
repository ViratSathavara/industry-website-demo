import { Customer } from "@/lib/types";

export const mockCustomers: Customer[] = [
  {
    id: "cust-001",
    companyName: "Shree Shakti Engineering Works",
    contactPerson: "Rajeshbhai Patel",
    designation: "Managing Director",
    phone: "+91 98250 44120",
    email: "rajesh@shreeshaktieng.com",
    gstNumber: "24AAACS1234F1Z8",
    industry: "Precision CNC Machining",
    city: "Mehsana",
    state: "Gujarat",
    website: "www.shreeshaktieng.demo",
    billingAddress: "Plot 42, GIDC Industrial Estate Phase II, Mehsana - 384002, Gujarat",
    shippingAddresses: [
      "Plot 42, GIDC Industrial Estate Phase II, Mehsana - 384002, Gujarat",
      "Survey 108, Near Highway Toll, Visnagar Road, Mehsana - 384001, Gujarat"
    ],
    ltv: 2450000,
    status: "Active",
    accountOwner: "Vikram Mehta",
    createdAt: "2025-04-12"
  },
  {
    id: "cust-002",
    companyName: "Tata Motors Commercial Vehicles Ltd",
    contactPerson: "Sanjay Kulkarni",
    designation: "Head of Drivetrain Sourcing",
    phone: "+91 98220 88214",
    email: "sanjay.kulkarni@tatamotors.demo",
    gstNumber: "27AAACT2727Q1ZW",
    industry: "Precision CNC Machining",
    city: "Pune",
    state: "Maharashtra",
    website: "www.tatamotors.demo",
    billingAddress: "Tata Motors CV Plant, Pimpri Industrial Belt, Pune - 411018, Maharashtra",
    shippingAddresses: [
      "Plant Gate 4, Axle & Transmission Assembly Division, Pimpri, Pune - 411018"
    ],
    ltv: 8900000,
    status: "Active",
    accountOwner: "Amit Sharma",
    createdAt: "2025-02-18"
  },
  {
    id: "cust-003",
    companyName: "L&T Heavy Engineering Division",
    contactPerson: "Arunav Sengupta",
    designation: "VP Strategic Sourcing",
    phone: "+91 98790 33410",
    email: "arunav.s@ltheavy.demo",
    gstNumber: "24AAACL0111P1ZR",
    industry: "Precision CNC Machining",
    city: "Surat",
    state: "Gujarat",
    website: "www.ltheavyeng.demo",
    billingAddress: "Hazira Manufacturing Complex, Post Bhatha, Surat - 394510, Gujarat",
    shippingAddresses: [
      "Heavy Forging & Machining Bay 3, Hazira Complex, Surat - 394510, Gujarat"
    ],
    ltv: 6420000,
    status: "Active",
    accountOwner: "Vikram Mehta",
    createdAt: "2025-06-05"
  },
  {
    id: "cust-004",
    companyName: "Danfoss Power Solutions India Pvt Ltd",
    contactPerson: "Sunil Deshmukh",
    designation: "Supplier Quality & Sourcing Lead",
    phone: "+91 98240 11985",
    email: "sunil.d@danfoss.demo",
    gstNumber: "27AADCD4433P1ZY",
    industry: "Precision CNC Machining",
    city: "Pune",
    state: "Maharashtra",
    website: "www.danfoss-india.demo",
    billingAddress: "Plot A-1, MIDC Industrial Area, Kurkumbh, Pune - 413802, Maharashtra",
    shippingAddresses: [
      "Hydraulic Valve & Manifold Integration Facility, Kurkumbh MIDC, Pune - 413802"
    ],
    ltv: 4750000,
    status: "Active",
    accountOwner: "Neha Trivedi",
    createdAt: "2024-11-20"
  },
  {
    id: "cust-005",
    companyName: "Godrej Aerospace & Defense",
    contactPerson: "Ananya Sen",
    designation: "General Manager - Precision Components",
    phone: "+91 97250 66723",
    email: "ananya.sen@godrej.demo",
    gstNumber: "27AACPG1122D1ZA",
    industry: "Precision CNC Machining",
    city: "Mumbai",
    state: "Maharashtra",
    website: "www.godrejaerospace.demo",
    billingAddress: "Plant 14, Pirojshanagar, Eastern Express Highway, Vikhroli, Mumbai - 400079",
    shippingAddresses: [
      "Precision Machining & CMM Metrology Lab, Bay 7, Vikhroli, Mumbai - 400079"
    ],
    ltv: 7200000,
    status: "Active",
    accountOwner: "Amit Sharma",
    createdAt: "2025-01-14"
  },
  {
    id: "cust-006",
    companyName: "Bharat Forge Precision Machining Division",
    contactPerson: "Nitin Gaikwad",
    designation: "Plant Operations Director",
    phone: "+91 98901 44552",
    email: "nitin.gaikwad@bharatforge.demo",
    gstNumber: "27AAACB0999M1ZX",
    industry: "Precision CNC Machining",
    city: "Pune",
    state: "Maharashtra",
    website: "www.bharatforge.demo",
    billingAddress: "Mundhwa Industrial Area, Pune Cantonment, Pune - 411036, Maharashtra",
    shippingAddresses: [
      "Machined Components Warehouse 2, Mundhwa, Pune - 411036, Maharashtra"
    ],
    ltv: 5800000,
    status: "Active",
    accountOwner: "Neha Trivedi",
    createdAt: "2025-03-29"
  }
];
