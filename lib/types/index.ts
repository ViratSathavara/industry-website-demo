export type UserRole =
  | "Owner"
  | "Admin"
  | "Sales Manager"
  | "Sales Executive"
  | "Operations"
  | "Customer";

export type Language = "en" | "gu" | "hi";

export interface Industry {
  id: string;
  name: string;
  slug: string;
  iconName: string;
  tagline: string;
  description: string;
  sampleProductType: string;
  buyerPersonas: string[];
  heroImage: string;
  capabilities: string[];
  applications: string[];
  rfqFields: {
    name: string;
    label: string;
    type: "text" | "number" | "select" | "file";
    options?: string[];
    placeholder?: string;
  }[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  industryId: string;
  industryName: string;
  description: string;
  productCount: number;
  image: string;
  subcategories: string[];
}

export interface ProductSpec {
  [key: string]: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  sku: string;
  productCode: string;
  industryId: string;
  industryName: string;
  categoryId: string;
  categoryName: string;
  shortDescription: string;
  fullDescription: string;
  images: string[];
  priceMode: "Buy Now" | "Request Quote" | "Sample Available" | "Starting from";
  price?: number;
  unit: string;
  moq: string;
  leadTime: string;
  customizationAvailable: boolean;
  specs: ProductSpec;
  applications: string[];
  features: string[];
  materials: string[];
  downloads: {
    title: string;
    type: string;
    size: string;
    filename: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  status: "Active" | "Draft" | "Archived";
  viewsCount?: number;
  enquiriesCount?: number;
}

export interface Customer {
  id: string;
  companyName: string;
  contactPerson: string;
  designation: string;
  phone: string;
  email: string;
  gstNumber: string;
  industry: string;
  city: string;
  state: string;
  website?: string;
  billingAddress: string;
  shippingAddresses: string[];
  ltv: number;
  status: "Active" | "Prospect" | "Inactive";
  accountOwner: string;
  createdAt: string;
}

export interface RFQItem {
  productId: string;
  productName: string;
  quantity: number;
  unit: string;
  customSpecs?: string;
}

export interface RFQ {
  id: string;
  rfqNumber: string;
  customerId?: string;
  companyName: string;
  contactPerson: string;
  designation?: string;
  phone: string;
  email: string;
  industry: string;
  items: RFQItem[];
  deliveryLocation: string;
  targetDate: string;
  application?: string;
  budget?: number;
  notes?: string;
  attachedFile?: string;
  status:
    | "Draft"
    | "Submitted"
    | "Reviewing"
    | "Need Information"
    | "Quoted"
    | "Won"
    | "Closed"
    | "Lost";
  assignedTo: string;
  createdAt: string;
  updatedAt: string;
}

export interface QuoteLineItem {
  id: string;
  productId: string;
  productName: string;
  sku: string;
  description: string;
  qty: number;
  unitPrice: number;
  discount: number;
  taxPercent: number;
  total: number;
}

export interface Quote {
  id: string;
  quoteNumber: string;
  rfqId?: string;
  rfqNumber?: string;
  customerId: string;
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  issueDate: string;
  expiryDate: string;
  items: QuoteLineItem[];
  subtotal: number;
  discountTotal: number;
  taxTotal: number;
  shippingFee: number;
  grandTotal: number;
  leadTime: string;
  paymentTerms: string;
  deliveryTerms: string;
  notes: string;
  status:
    | "Draft"
    | "Sent"
    | "Viewed"
    | "Accepted"
    | "Changes Requested"
    | "Expired"
    | "Declined";
  createdAt: string;
}

export interface OrderTimelineItem {
  title: string;
  stage:
    | "Order Placed"
    | "Confirmed"
    | "Production"
    | "Quality Check"
    | "Ready to Dispatch"
    | "Dispatched"
    | "Delivered";
  date: string;
  description: string;
  completed: boolean;
  active?: boolean;
}

export interface Order {
  id: string;
  orderNumber: string;
  quoteId?: string;
  quoteNumber?: string;
  rfqNumber?: string;
  customerId: string;
  companyName: string;
  contactPerson: string;
  phone: string;
  shippingAddress: string;
  items: {
    productId: string;
    productName: string;
    qty: number;
    unitPrice: number;
    total: number;
  }[];
  totalAmount: number;
  orderDate: string;
  status:
    | "Pending"
    | "Confirmed"
    | "Production"
    | "Quality"
    | "Ready"
    | "Dispatched"
    | "Delivered"
    | "Cancelled";
  paymentStatus: "Pending" | "Partial" | "Paid";
  productionStage: string;
  estimatedDelivery: string;
  trackingNumber?: string;
  timeline: OrderTimelineItem[];
}

export interface Lead {
  id: string;
  name: string;
  company: string;
  industry: string;
  location: string;
  requirement: string;
  source:
    | "Website"
    | "Google Search"
    | "WhatsApp"
    | "IndiaMART"
    | "TradeIndia"
    | "Exhibition"
    | "Referral"
    | "Direct";
  estimatedValue: number;
  owner: string;
  priority: "High" | "Medium" | "Low";
  stage:
    | "New"
    | "Contacted"
    | "Qualified"
    | "Requirement Collected"
    | "Quote in Progress"
    | "Quote Sent"
    | "Negotiation"
    | "Won"
    | "Lost";
  lastActivity: string;
  nextFollowUp: string;
  phone: string;
  email: string;
  notes?: string[];
}

export interface Enquiry {
  id: string;
  enquiryNumber: string;
  customerName: string;
  company: string;
  phone: string;
  email: string;
  productInterest: string;
  source:
    | "Website"
    | "RFQ"
    | "Product"
    | "Callback"
    | "Sample"
    | "Appointment"
    | "Marketplace"
    | "Referral"
    | "WhatsApp"
    | "Google Search";
  stage: "New" | "Contacted" | "Qualified" | "Closed";
  urgency: "Normal" | "High" | "Urgent";
  message: string;
  createdAt: string;
  assignee: string;
  location: string;
}

export interface Appointment {
  id: string;
  bookingNumber: string;
  type:
    | "Factory Visit"
    | "Machine Demo"
    | "Technical Consultation"
    | "Site Visit"
    | "Service Visit"
    | "Installation"
    | "Maintenance";
  customerName: string;
  company: string;
  phone: string;
  email: string;
  date: string;
  timeSlot: string;
  assignedRep: string;
  location: string;
  status: "Requested" | "Confirmed" | "Rescheduled" | "Completed" | "Cancelled";
  notes?: string;
}

export interface DocumentItem {
  id: string;
  title: string;
  category:
    | "Quotations"
    | "Invoices"
    | "Product Datasheets"
    | "Technical Drawings"
    | "Quality Reports"
    | "Certificates"
    | "Purchase Orders"
    | "Delivery Documents"
    | "Catalogues";
  fileUrl: string;
  fileSize: string;
  relatedTo: string;
  uploadDate: string;
  isPublic?: boolean;
}

export interface PortalMessage {
  id: string;
  threadId: string;
  sender: "Customer" | "Sales" | "Operations";
  senderName: string;
  avatar?: string;
  text: string;
  timestamp: string;
  read: boolean;
}

export interface NotificationItem {
  id: string;
  title: string;
  description: string;
  time: string;
  type: "rfq" | "quote" | "order" | "appointment" | "message" | "document";
  read: boolean;
  link?: string;
}

export interface ActivityTimelineItem {
  id: string;
  entityType: "lead" | "rfq" | "quote" | "order" | "appointment" | "customer";
  entityId: string;
  title: string;
  description: string;
  user: string;
  timestamp: string;
}

export interface SampleRequest {
  id: string;
  requestNumber: string;
  productId: string;
  productName: string;
  quantity: number;
  purpose: string;
  company: string;
  contactName: string;
  phone: string;
  email: string;
  shippingAddress: string;
  message?: string;
  status:
    | "Requested"
    | "Reviewing"
    | "Approved"
    | "Dispatched"
    | "Delivered"
    | "Closed";
  createdAt: string;
}

export interface AuditBlueprintResult {
  id: string;
  businessName: string;
  ownerName: string;
  city: string;
  industry: string;
  score: number;
  recommendedModules: {
    title: string;
    description: string;
    impact: string;
    route: string;
  }[];
  generatedAt: string;
}
