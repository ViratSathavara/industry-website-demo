"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import {
  Industry,
  Product,
  Category,
  Customer,
  Lead,
  Enquiry,
  RFQ,
  Quote,
  Order,
  Appointment,
  DocumentItem,
  PortalMessage,
  NotificationItem,
  ActivityTimelineItem,
  UserRole,
  Language,
  SampleRequest
} from "@/lib/types";
import { mockIndustries } from "@/lib/mock-data/industries";
import { mockCategories } from "@/lib/mock-data/categories";
import { mockProducts } from "@/lib/mock-data/products";
import { mockCustomers } from "@/lib/mock-data/customers";
import {
  mockLeads,
  mockEnquiries,
  mockRFQs,
  mockQuotes,
  mockOrders,
  mockAppointments,
  mockDocuments,
  mockMessages,
  mockActivityTimeline
} from "@/lib/mock-data/crm-data";
import { translations, TranslationDictionary } from "@/lib/mock-data/translations";

interface DemoStateContextType {
  // Global Industry & Language
  selectedIndustryId: string;
  selectedIndustry: Industry;
  setSelectedIndustryId: (id: string) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationDictionary;

  // Authentication & Role
  currentUserRole: UserRole;
  setCurrentUserRole: (role: UserRole) => void;
  currentCustomer: Customer;
  setCurrentCustomer: (cust: Customer) => void;

  // Comparison & Saved
  comparisonProductIds: string[];
  addToComparison: (productId: string) => boolean;
  removeFromComparison: (productId: string) => void;
  clearComparison: () => void;
  savedProductIds: string[];
  toggleSaveProduct: (productId: string) => void;

  // Data Collections
  industries: Industry[];
  categories: Category[];
  products: Product[];
  customers: Customer[];
  leads: Lead[];
  enquiries: Enquiry[];
  rfqs: RFQ[];
  quotes: Quote[];
  orders: Order[];
  appointments: Appointment[];
  documents: DocumentItem[];
  messages: PortalMessage[];
  notifications: NotificationItem[];
  activityTimeline: ActivityTimelineItem[];

  // Mutators
  submitEnquiry: (enquiry: Omit<Enquiry, "id" | "enquiryNumber" | "createdAt" | "stage">) => Enquiry;
  submitRFQ: (rfqData: Omit<RFQ, "id" | "rfqNumber" | "createdAt" | "updatedAt" | "status">) => RFQ;
  createQuote: (quoteData: Omit<Quote, "id" | "quoteNumber" | "createdAt">) => Quote;
  updateQuoteStatus: (quoteId: string, status: Quote["status"]) => void;
  updateOrderStatus: (orderId: string, status: Order["status"], productionStage?: string) => void;
  bookAppointment: (aptData: Omit<Appointment, "id" | "bookingNumber" | "status">) => Appointment;
  sendMessage: (threadId: string, text: string, sender: "Customer" | "Sales" | "Operations", senderName: string) => void;
  submitSampleRequest: (data: Omit<SampleRequest, "id" | "requestNumber" | "status" | "createdAt">) => SampleRequest;
  markNotificationAsRead: (id: string) => void;
  addProduct: (product: Product) => void;
  resetDemoData: () => void;
}

const DemoStateContext = createContext<DemoStateContextType | null>(null);

const STORAGE_KEYS = {
  INDUSTRY: "industria_selected_industry",
  LANG: "industria_language",
  ROLE: "industria_user_role",
  COMPARE: "industria_comparison",
  SAVED: "industria_saved_products",
  LEADS: "industria_leads_v2",
  ENQUIRIES: "industria_enquiries_v2",
  RFQS: "industria_rfqs_v2",
  QUOTES: "industria_quotes_v2",
  ORDERS: "industria_orders_v2",
  APPOINTMENTS: "industria_appointments_v2",
  MESSAGES: "industria_messages_v2",
  NOTIFICATIONS: "industria_notifications_v2"
};

const initialNotifications: NotificationItem[] = [
  {
    id: "notif-1",
    title: "New Quotation Generated",
    description: "Quote QT-2026-01042 for ₹4,75,820 is ready for review.",
    time: "10 mins ago",
    type: "quote",
    read: false,
    link: "/portal/quotes"
  },
  {
    id: "notif-2",
    title: "Order SO-2026-00210 in Production",
    description: "Zeiss 3D CMM inspection reached 85% stage for Batch #8491.",
    time: "1 hour ago",
    type: "order",
    read: false,
    link: "/portal/orders"
  },
  {
    id: "notif-3",
    title: "Factory Visit Confirmed",
    description: "Appointment confirmed for 2nd Oct with Plant Head.",
    time: "3 hours ago",
    type: "appointment",
    read: true,
    link: "/portal/appointments"
  }
];

export const DemoStateProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedIndustryId, setSelectedIndustryIdState] = useState<string>("precision-machining");
  const [language, setLanguageState] = useState<Language>("en");
  const [currentUserRole, setCurrentUserRoleState] = useState<UserRole>("Customer");
  const [currentCustomer, setCurrentCustomer] = useState<Customer>(mockCustomers[0]);
  const [comparisonProductIds, setComparisonProductIds] = useState<string[]>([]);
  const [savedProductIds, setSavedProductIds] = useState<string[]>(["prod-eng-001", "prod-cnc-002"]);

  const [leads, setLeads] = useState<Lead[]>(mockLeads);
  const [enquiries, setEnquiries] = useState<Enquiry[]>(mockEnquiries);
  const [rfqs, setRfqs] = useState<RFQ[]>(mockRFQs);
  const [quotes, setQuotes] = useState<Quote[]>(mockQuotes);
  const [orders, setOrders] = useState<Order[]>(mockOrders);
  const [appointments, setAppointments] = useState<Appointment[]>(mockAppointments);
  const [messages, setMessages] = useState<PortalMessage[]>(mockMessages);
  const [notifications, setNotifications] = useState<NotificationItem[]>(initialNotifications);
  const [activityTimeline, setActivityTimeline] = useState<ActivityTimelineItem[]>(mockActivityTimeline);
  const [customProducts, setCustomProducts] = useState<Product[]>([]);

  // Load from LocalStorage on mount
  useEffect(() => {
    try {
      const storedIndustry = localStorage.getItem(STORAGE_KEYS.INDUSTRY);
      if (storedIndustry) setSelectedIndustryIdState(storedIndustry);

      const storedLang = localStorage.getItem(STORAGE_KEYS.LANG) as Language;
      if (storedLang && ["en", "gu", "hi"].includes(storedLang)) setLanguageState(storedLang);

      const storedRole = localStorage.getItem(STORAGE_KEYS.ROLE) as UserRole;
      if (storedRole) setCurrentUserRoleState(storedRole);

      const storedCompare = localStorage.getItem(STORAGE_KEYS.COMPARE);
      if (storedCompare) setComparisonProductIds(JSON.parse(storedCompare));

      const storedSaved = localStorage.getItem(STORAGE_KEYS.SAVED);
      if (storedSaved) setSavedProductIds(JSON.parse(storedSaved));

      const storedLeads = localStorage.getItem(STORAGE_KEYS.LEADS);
      if (storedLeads) setLeads(JSON.parse(storedLeads));

      const storedEnquiries = localStorage.getItem(STORAGE_KEYS.ENQUIRIES);
      if (storedEnquiries) setEnquiries(JSON.parse(storedEnquiries));

      const storedRfqs = localStorage.getItem(STORAGE_KEYS.RFQS);
      if (storedRfqs) setRfqs(JSON.parse(storedRfqs));

      const storedQuotes = localStorage.getItem(STORAGE_KEYS.QUOTES);
      if (storedQuotes) setQuotes(JSON.parse(storedQuotes));

      const storedOrders = localStorage.getItem(STORAGE_KEYS.ORDERS);
      if (storedOrders) setOrders(JSON.parse(storedOrders));

      const storedApts = localStorage.getItem(STORAGE_KEYS.APPOINTMENTS);
      if (storedApts) setAppointments(JSON.parse(storedApts));

      const storedMessages = localStorage.getItem(STORAGE_KEYS.MESSAGES);
      if (storedMessages) setMessages(JSON.parse(storedMessages));

      const storedNotifs = localStorage.getItem(STORAGE_KEYS.NOTIFICATIONS);
      if (storedNotifs) setNotifications(JSON.parse(storedNotifs));
    } catch {
      // localStorage read error fallback
    }
  }, []);

  const setSelectedIndustryId = (id: string) => {
    setSelectedIndustryIdState(id);
    try {
      localStorage.setItem(STORAGE_KEYS.INDUSTRY, id);
    } catch {}
  };

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(STORAGE_KEYS.LANG, lang);
    } catch {}
  };

  const setCurrentUserRole = (role: UserRole) => {
    setCurrentUserRoleState(role);
    try {
      localStorage.setItem(STORAGE_KEYS.ROLE, role);
    } catch {}
  };

  const addToComparison = (productId: string): boolean => {
    if (comparisonProductIds.includes(productId)) return true;
    if (comparisonProductIds.length >= 3) return false;
    const updated = [...comparisonProductIds, productId];
    setComparisonProductIds(updated);
    try {
      localStorage.setItem(STORAGE_KEYS.COMPARE, JSON.stringify(updated));
    } catch {}
    return true;
  };

  const removeFromComparison = (productId: string) => {
    const updated = comparisonProductIds.filter((id) => id !== productId);
    setComparisonProductIds(updated);
    try {
      localStorage.setItem(STORAGE_KEYS.COMPARE, JSON.stringify(updated));
    } catch {}
  };

  const clearComparison = () => {
    setComparisonProductIds([]);
    try {
      localStorage.removeItem(STORAGE_KEYS.COMPARE);
    } catch {}
  };

  const toggleSaveProduct = (productId: string) => {
    const updated = savedProductIds.includes(productId)
      ? savedProductIds.filter((id) => id !== productId)
      : [...savedProductIds, productId];
    setSavedProductIds(updated);
    try {
      localStorage.setItem(STORAGE_KEYS.SAVED, JSON.stringify(updated));
    } catch {}
  };

  const submitEnquiry = (enquiryData: Omit<Enquiry, "id" | "enquiryNumber" | "createdAt" | "stage">): Enquiry => {
    const randomNum = Math.floor(100 + Math.random() * 900);
    const newEnquiry: Enquiry = {
      ...enquiryData,
      id: `enq-${Date.now()}`,
      enquiryNumber: `ENQ-2026-00${randomNum}`,
      stage: "New",
      createdAt: new Date().toISOString().replace("T", " ").substring(0, 16)
    };
    const updated = [newEnquiry, ...enquiries];
    setEnquiries(updated);
    try {
      localStorage.setItem(STORAGE_KEYS.ENQUIRIES, JSON.stringify(updated));
    } catch {}

    // Also auto-create a lead for admin CRM!
    const newLead: Lead = {
      id: `lead-${Date.now()}`,
      name: enquiryData.customerName,
      company: enquiryData.company,
      industry: selectedIndustry.name,
      location: enquiryData.location,
      requirement: enquiryData.productInterest,
      source: (enquiryData.source as Lead["source"]) || "Website",
      estimatedValue: 250000,
      owner: "Vikram Mehta",
      priority: enquiryData.urgency === "Urgent" ? "High" : "Medium",
      stage: "New",
      lastActivity: "Just now",
      nextFollowUp: "Tomorrow",
      phone: enquiryData.phone,
      email: enquiryData.email
    };
    const updatedLeads = [newLead, ...leads];
    setLeads(updatedLeads);
    try {
      localStorage.setItem(STORAGE_KEYS.LEADS, JSON.stringify(updatedLeads));
    } catch {}

    // Add notification
    const newNotif: NotificationItem = {
      id: `notif-${Date.now()}`,
      title: "New Enquiry Received",
      description: `${enquiryData.customerName} (${enquiryData.company}) enquired for ${enquiryData.productInterest}`,
      time: "Just now",
      type: "rfq",
      read: false,
      link: "/admin/enquiries"
    };
    setNotifications((prev) => [newNotif, ...prev]);

    return newEnquiry;
  };

  const submitRFQ = (rfqData: Omit<RFQ, "id" | "rfqNumber" | "createdAt" | "updatedAt" | "status">): RFQ => {
    const randomNum = Math.floor(400 + Math.random() * 590);
    const newRFQ: RFQ = {
      ...rfqData,
      id: `rfq-${Date.now()}`,
      rfqNumber: `RFQ-2026-00${randomNum}`,
      status: "Submitted",
      createdAt: new Date().toISOString().replace("T", " ").substring(0, 16),
      updatedAt: new Date().toISOString().replace("T", " ").substring(0, 16)
    };
    const updated = [newRFQ, ...rfqs];
    setRfqs(updated);
    try {
      localStorage.setItem(STORAGE_KEYS.RFQS, JSON.stringify(updated));
    } catch {}

    // Log Activity
    const newActivity: ActivityTimelineItem = {
      id: `act-${Date.now()}`,
      entityType: "rfq",
      entityId: newRFQ.id,
      title: "RFQ Submitted Successfully",
      description: `RFQ ${newRFQ.rfqNumber} generated for ${newRFQ.companyName} (${newRFQ.items.length} items).`,
      user: newRFQ.contactPerson,
      timestamp: "Just now"
    };
    setActivityTimeline((prev) => [newActivity, ...prev]);

    // Add notification
    const newNotif: NotificationItem = {
      id: `notif-${Date.now()}`,
      title: "RFQ Received & Under Review",
      description: `RFQ ${newRFQ.rfqNumber} logged for ${newRFQ.companyName}`,
      time: "Just now",
      type: "rfq",
      read: false,
      link: "/portal/rfqs"
    };
    setNotifications((prev) => [newNotif, ...prev]);

    return newRFQ;
  };

  const createQuote = (quoteData: Omit<Quote, "id" | "quoteNumber" | "createdAt">): Quote => {
    const randomNum = Math.floor(1000 + Math.random() * 900);
    const newQuote: Quote = {
      ...quoteData,
      id: `qt-${Date.now()}`,
      quoteNumber: `QT-2026-0${randomNum}`,
      createdAt: new Date().toISOString().substring(0, 10)
    };
    const updated = [newQuote, ...quotes];
    setQuotes(updated);
    try {
      localStorage.setItem(STORAGE_KEYS.QUOTES, JSON.stringify(updated));
    } catch {}

    // Notification
    const newNotif: NotificationItem = {
      id: `notif-${Date.now()}`,
      title: "New Quotation Generated",
      description: `${newQuote.quoteNumber} issued for ${newQuote.companyName}`,
      time: "Just now",
      type: "quote",
      read: false,
      link: "/portal/quotes"
    };
    setNotifications((prev) => [newNotif, ...prev]);

    return newQuote;
  };

  const updateQuoteStatus = (quoteId: string, status: Quote["status"]) => {
    const updated = quotes.map((q) => (q.id === quoteId ? { ...q, status } : q));
    setQuotes(updated);
    try {
      localStorage.setItem(STORAGE_KEYS.QUOTES, JSON.stringify(updated));
    } catch {}

    // If accepted, also auto-create a confirmed order!
    if (status === "Accepted") {
      const targetQuote = quotes.find((q) => q.id === quoteId);
      if (targetQuote) {
        const orderId = `ord-${Date.now()}`;
        const orderNum = `SO-2026-00${Math.floor(200 + Math.random() * 100)}`;
        const newOrder: Order = {
          id: orderId,
          orderNumber: orderNum,
          quoteId: targetQuote.id,
          quoteNumber: targetQuote.quoteNumber,
          rfqNumber: targetQuote.rfqNumber,
          customerId: targetQuote.customerId,
          companyName: targetQuote.companyName,
          contactPerson: targetQuote.contactPerson,
          phone: targetQuote.phone,
          shippingAddress: currentCustomer.shippingAddresses[0] || currentCustomer.billingAddress,
          items: targetQuote.items.map((i) => ({
            productId: i.productId,
            productName: i.productName,
            qty: i.qty,
            unitPrice: i.unitPrice,
            total: i.total
          })),
          totalAmount: targetQuote.grandTotal,
          orderDate: new Date().toISOString().substring(0, 10),
          status: "Confirmed",
          paymentStatus: "Pending",
          productionStage: "Job Card Issued & Material Preparation",
          estimatedDelivery: new Date(Date.now() + 14 * 86400000).toISOString().substring(0, 10),
          timeline: [
            { title: "Order Accepted", stage: "Order Placed", date: "Today", description: `Quote ${targetQuote.quoteNumber} accepted by customer.`, completed: true },
            { title: "Confirmed & Scheduled", stage: "Confirmed", date: "Today", description: "Production job card opened.", completed: true, active: true },
            { title: "Production & Assembly", stage: "Production", date: "In 3 Days", description: "Machining & fabrication underway.", completed: false },
            { title: "Quality Inspection", stage: "Quality Check", date: "In 8 Days", description: "Hydro and dimensional testing.", completed: false },
            { title: "Dispatch & Freight", stage: "Dispatched", date: "In 12 Days", description: "Carrier handover.", completed: false },
            { title: "Delivered", stage: "Delivered", date: "In 14 Days", description: "Site delivery.", completed: false }
          ]
        };
        const updatedOrders = [newOrder, ...orders];
        setOrders(updatedOrders);
        try {
          localStorage.setItem(STORAGE_KEYS.ORDERS, JSON.stringify(updatedOrders));
        } catch {}
      }
    }
  };

  const updateOrderStatus = (orderId: string, status: Order["status"], productionStage?: string) => {
    const updated = orders.map((o) =>
      o.id === orderId
        ? {
            ...o,
            status,
            productionStage: productionStage || o.productionStage
          }
        : o
    );
    setOrders(updated);
    try {
      localStorage.setItem(STORAGE_KEYS.ORDERS, JSON.stringify(updated));
    } catch {}
  };

  const bookAppointment = (aptData: Omit<Appointment, "id" | "bookingNumber" | "status">): Appointment => {
    const randomNum = Math.floor(100 + Math.random() * 890);
    const newApt: Appointment = {
      ...aptData,
      id: `apt-${Date.now()}`,
      bookingNumber: `APT-2026-00${randomNum}`,
      status: "Confirmed"
    };
    const updated = [newApt, ...appointments];
    setAppointments(updated);
    try {
      localStorage.setItem(STORAGE_KEYS.APPOINTMENTS, JSON.stringify(updated));
    } catch {}

    const newNotif: NotificationItem = {
      id: `notif-${Date.now()}`,
      title: "Appointment Confirmed",
      description: `${newApt.type} confirmed for ${newApt.date} (${newApt.timeSlot})`,
      time: "Just now",
      type: "appointment",
      read: false,
      link: "/portal/appointments"
    };
    setNotifications((prev) => [newNotif, ...prev]);

    return newApt;
  };

  const sendMessage = (threadId: string, text: string, sender: "Customer" | "Sales" | "Operations", senderName: string) => {
    const newMsg: PortalMessage = {
      id: `msg-${Date.now()}`,
      threadId,
      sender,
      senderName,
      text,
      timestamp: new Date().toISOString().replace("T", " ").substring(0, 16),
      read: false
    };
    const updated = [...messages, newMsg];
    setMessages(updated);
    try {
      localStorage.setItem(STORAGE_KEYS.MESSAGES, JSON.stringify(updated));
    } catch {}
  };

  const submitSampleRequest = (data: Omit<SampleRequest, "id" | "requestNumber" | "status" | "createdAt">): SampleRequest => {
    const randomNum = Math.floor(100 + Math.random() * 890);
    const newSample: SampleRequest = {
      ...data,
      id: `smp-${Date.now()}`,
      requestNumber: `SMP-2026-00${randomNum}`,
      status: "Requested",
      createdAt: new Date().toISOString().replace("T", " ").substring(0, 16)
    };
    // Add notification
    const newNotif: NotificationItem = {
      id: `notif-${Date.now()}`,
      title: "Sample Request Received",
      description: `Sample request ${newSample.requestNumber} logged for ${newSample.productName}`,
      time: "Just now",
      type: "document",
      read: false
    };
    setNotifications((prev) => [newNotif, ...prev]);
    return newSample;
  };

  const markNotificationAsRead = (id: string) => {
    setNotifications((prev) => prev.map((n) => (n.id === id ? { ...n, read: true } : n)));
  };

  const addProduct = (prod: Product) => {
    setCustomProducts((prev) => [prod, ...prev]);
  };

  const resetDemoData = () => {
    try {
      Object.values(STORAGE_KEYS).forEach((k) => localStorage.removeItem(k));
    } catch {}
    setSelectedIndustryIdState("engineering-fabrication");
    setLanguageState("en");
    setCurrentUserRoleState("Customer");
    setComparisonProductIds([]);
    setSavedProductIds(["prod-eng-001", "prod-agri-001"]);
    setLeads(mockLeads);
    setEnquiries(mockEnquiries);
    setRfqs(mockRFQs);
    setQuotes(mockQuotes);
    setOrders(mockOrders);
    setAppointments(mockAppointments);
    setMessages(mockMessages);
    setNotifications(initialNotifications);
    setActivityTimeline(mockActivityTimeline);
  };

  const selectedIndustry =
    mockIndustries.find((i) => i.id === selectedIndustryId) || mockIndustries[0];

  const allProducts = [...customProducts, ...mockProducts];

  return (
    <DemoStateContext.Provider
      value={{
        selectedIndustryId,
        selectedIndustry,
        setSelectedIndustryId,
        language,
        setLanguage,
        t: translations[language],
        currentUserRole,
        setCurrentUserRole,
        currentCustomer,
        setCurrentCustomer,
        comparisonProductIds,
        addToComparison,
        removeFromComparison,
        clearComparison,
        savedProductIds,
        toggleSaveProduct,
        industries: mockIndustries,
        categories: mockCategories,
        products: allProducts,
        customers: mockCustomers,
        leads,
        enquiries,
        rfqs,
        quotes,
        orders,
        appointments,
        documents: mockDocuments,
        messages,
        notifications,
        activityTimeline,
        submitEnquiry,
        submitRFQ,
        createQuote,
        updateQuoteStatus,
        updateOrderStatus,
        bookAppointment,
        sendMessage,
        submitSampleRequest,
        markNotificationAsRead,
        addProduct,
        resetDemoData
      }}
    >
      {children}
    </DemoStateContext.Provider>
  );
};

export const useDemoState = () => {
  const context = useContext(DemoStateContext);
  if (!context) {
    throw new Error("useDemoState must be used within a DemoStateProvider");
  }
  return context;
};
