import { Language } from "@/lib/types";

export interface TranslationDictionary {
  // Navigation
  home: string;
  products: string;
  industries: string;
  applications: string;
  manufacturing: string;
  qualityCerts: string;
  about: string;
  contact: string;
  requestQuote: string;
  bookVisit: string;
  company: string;
  search: string;
  searchPlaceholder: string;
  customerPortal: string;
  adminDashboard: string;
  login: string;
  logout: string;
  language: string;
  accessViews: string;

  // Hero Section
  heroTag: string;
  heroHeadline: string;
  heroHeadlineEm: string;
  heroSubheadline: string;
  exploreFactory: string;
  viewCatalog: string;
  heroStat1Value: string;
  heroStat1Label: string;
  heroStat2Value: string;
  heroStat2Label: string;
  heroStat3Value: string;
  heroStat3Label: string;

  // General
  specifications: string;
  downloads: string;
  faqs: string;
  demoDataBadge: string;
  learnMore: string;
  viewAll: string;
  getQuote: string;
  viewDetails: string;
  readMore: string;
  submit: string;
  cancel: string;
  send: string;
  sending: string;
  close: string;
  back: string;
  next: string;

  // Product Discovery
  browseByCategory: string;
  browseSubtitle: string;
  allParts: string;
  searchParts: string;
  filterBy: string;
  sortBy: string;
  inStock: string;
  makeToOrder: string;
  certified: string;
  piecesPerMonth: string;
  tolerance: string;
  material: string;
  addToComparison: string;
  saveProduct: string;
  requestSample: string;

  // Applications
  applicationsTitle: string;
  applicationsSubtitle: string;
  keyComponents: string;

  // Manufacturing Process
  processTitle: string;
  processSubtitle: string;

  // Why Choose
  whyChooseTitle: string;
  whyChooseSubtitle: string;

  // Certifications
  certsTitle: string;
  certsSubtitle: string;

  // Testimonials
  testimonialsTitle: string;
  testimonialsSubtitle: string;

  // Lead Capture / Enquiry Form
  formTitle: string;
  formSubtitle: string;
  formName: string;
  formEmail: string;
  formPhone: string;
  formCompany: string;
  formProductInterest: string;
  formMessage: string;
  formSubmit: string;
  formSubmitting: string;
  formSuccessTitle: string;
  formSuccessMsg: string;
  formRefCode: string;
  formContactInfo: string;

  // Footer
  footerTagline: string;
  footerProductsTitle: string;
  footerCompanyTitle: string;
  footerQuickAccessTitle: string;
  footerCopyright: string;
  backToTop: string;

  // Misc labels
  newBadge: string;
  featuredBadge: string;
  certifiedBadge: string;
  availableNow: string;
  makeToOrderBadge: string;
}

export const translations: Record<Language, TranslationDictionary> = {
  en: {
    // Navigation
    home: "Home",
    products: "Products",
    industries: "Industries",
    applications: "Applications",
    manufacturing: "Manufacturing",
    qualityCerts: "Quality & Certs",
    about: "About",
    contact: "Contact",
    requestQuote: "Request Quote",
    bookVisit: "Book Factory Visit",
    company: "Company",
    search: "Search",
    searchPlaceholder: "Search parts, specs, materials…",
    customerPortal: "Buyer Portal",
    adminDashboard: "Admin CRM",
    login: "Demo Login",
    logout: "Sign Out",
    language: "Language",
    accessViews: "Access Views",

    // Hero
    heroTag: "Industrial Water Motor Parts & Fluid Equipment",
    heroHeadline: "Your factory deserves more than a",
    heroHeadlineEm: "phone number.",
    heroSubheadline:
      "Turn your industrial water motor parts, submersible pump assemblies, and factory capabilities into a digital sales engine that captures RFQs and manages orders 24/7.",
    exploreFactory: "Explore Digital Factory",
    viewCatalog: "Request a Quote",
    heroStat1Value: "45,000+",
    heroStat1Label: "Motor Parts / Month",
    heroStat2Value: "< 0.003mm",
    heroStat2Label: "Shaft Grinding TIR",
    heroStat3Value: "ISO 9001",
    heroStat3Label: "Quality Certified",

    // General
    specifications: "Technical Specifications",
    downloads: "Downloads & Reports",
    faqs: "Frequently Asked Questions",
    demoDataBadge: "DEMO MODE",
    learnMore: "Learn More",
    viewAll: "View All",
    getQuote: "Get Quote",
    viewDetails: "View Details",
    readMore: "Read More",
    submit: "Submit",
    cancel: "Cancel",
    send: "Send Message",
    sending: "Sending…",
    close: "Close",
    back: "Back",
    next: "Next",

    // Product Discovery
    browseByCategory: "Browse by Category",
    browseSubtitle: "Precision components for every stage of your water motor assembly",
    allParts: "All Parts",
    searchParts: "Search parts…",
    filterBy: "Filter",
    sortBy: "Sort By",
    inStock: "In Stock",
    makeToOrder: "Make to Order",
    certified: "Certified",
    piecesPerMonth: "pcs/month",
    tolerance: "Tolerance",
    material: "Material",
    addToComparison: "Compare",
    saveProduct: "Save",
    requestSample: "Request Sample",

    // Applications
    applicationsTitle: "Where Our Parts Power Industry",
    applicationsSubtitle:
      "From deep-borewell agricultural pumps to offshore marine systems, INDUSTRIA motor parts are engineered for the harshest fluid-handling environments.",
    keyComponents: "Key Components",

    // Manufacturing Process
    processTitle: "From Raw Material to Certified Component",
    processSubtitle: "8-step precision manufacturing lifecycle with full traceability",

    // Why Choose
    whyChooseTitle: "Why OEMs Choose INDUSTRIA",
    whyChooseSubtitle: "Five outcomes that drive repeat business from 500+ industrial buyers",

    // Certifications
    certsTitle: "Quality You Can Verify",
    certsSubtitle: "Every shipment backed by traceable inspection reports and third-party certifications",

    // Testimonials
    testimonialsTitle: "Trusted by Industrial Buyers Across India",
    testimonialsSubtitle: "Real outcomes from water pump OEMs, distributors, and municipal engineers",

    // Lead Capture Form
    formTitle: "Get an Instant Quotation",
    formSubtitle: "Share your requirement — our technical team responds within 4 business hours.",
    formName: "Your Name",
    formEmail: "Email Address",
    formPhone: "Phone Number",
    formCompany: "Company / Organisation",
    formProductInterest: "Product / Part Required",
    formMessage: "Requirement Details",
    formSubmit: "Send Enquiry",
    formSubmitting: "Sending…",
    formSuccessTitle: "Enquiry Received!",
    formSuccessMsg: "Our technical sales team will contact you within 4 business hours with a detailed quotation.",
    formRefCode: "Reference Code",
    formContactInfo: "Or reach us directly",

    // Footer
    footerTagline:
      "Precision-manufactured water motor components for submersible pumps, agricultural irrigation, and industrial fluid systems.",
    footerProductsTitle: "Products",
    footerCompanyTitle: "Company",
    footerQuickAccessTitle: "Quick Access",
    footerCopyright: "© 2025 INDUSTRIA Motor Parts · Sanand GIDC, Gujarat · All rights reserved",
    backToTop: "Back to top",

    // Misc
    newBadge: "New",
    featuredBadge: "Featured",
    certifiedBadge: "Certified",
    availableNow: "Available Now",
    makeToOrderBadge: "Make to Order"
  },

  gu: {
    // Navigation
    home: "મુખ્ય પૃષ્ઠ",
    products: "પ્રોડક્ટ્સ",
    industries: "ઉદ્યોગો",
    applications: "ઉપયોગ ક્ષેત્ર",
    manufacturing: "ઉત્પાદન",
    qualityCerts: "ગુણવત્તા & પ્રમાણ",
    about: "અમારા વિશે",
    contact: "સંપર્ક",
    requestQuote: "ક્વોટ માંગો",
    bookVisit: "ફેક્ટરી મુલાકાત",
    company: "કંપની",
    search: "શોધો",
    searchPlaceholder: "પ્રોડક્ટ, સ્પેક, મટેરિયલ શોધો…",
    customerPortal: "ખરીદ પોર્ટલ",
    adminDashboard: "એડમિન CRM",
    login: "ડેમો લૉગિન",
    logout: "લૉગ આઉટ",
    language: "ભાષા",
    accessViews: "વ્યૂ ખોલો",

    // Hero
    heroTag: "ઔદ્યોગિક વોટર મોટર પાર્ટ્સ & ફ્લ્યૂઇડ ઇક્વિપ્મેન્ટ",
    heroHeadline: "તમારી ફેક્ટરી માત્ર",
    heroHeadlineEm: "ફોન નંબર કરતાં વધુની હકદાર છે.",
    heroSubheadline:
      "તમારા ઇન્ડસ્ટ્રિયલ વોટર મોટર પાર્ટ્સ, સબમર્સિબલ પંપ એસેમ્બ્લી અને ફેક્ટરી ક્ષમતાઓને ડિજિટલ સેલ્સ ચેનલમાં ફેરવો — 24/7 RFQ, ક્વોટ અને ઓર્ડર.",
    exploreFactory: "ડિજિટલ ફેક્ટરી જુઓ",
    viewCatalog: "ક્વોટ માંગો",
    heroStat1Value: "૪૫,૦૦૦+",
    heroStat1Label: "મોટર પાર્ટ્સ / મહિને",
    heroStat2Value: "< ૦.૦૦૩mm",
    heroStat2Label: "શાફ્ટ ગ્રાઇન્ડિંગ TIR",
    heroStat3Value: "ISO 9001",
    heroStat3Label: "ગુણવત્તા પ્રમાણિત",

    // General
    specifications: "ટેકનિકલ સ્પેસિફિકેશન",
    downloads: "ડાઉનલોડ અને રિપોર્ટ્સ",
    faqs: "વારંવાર પૂછાતા પ્રશ્નો",
    demoDataBadge: "ડેમો મોડ",
    learnMore: "વધુ જાણો",
    viewAll: "બધા જુઓ",
    getQuote: "ક્વોટ મેળવો",
    viewDetails: "વિગત જુઓ",
    readMore: "વધુ વાંચો",
    submit: "સબમિટ કરો",
    cancel: "રદ કરો",
    send: "સંદેશ મોકલો",
    sending: "મોકલાઈ રહ્યો છે…",
    close: "બંધ કરો",
    back: "પાછળ",
    next: "આગળ",

    // Product Discovery
    browseByCategory: "કેટેગરી અનુસાર જુઓ",
    browseSubtitle: "વોટર મોટર એસેમ્બ્લીના દરેક ભાગ માટે ચોક્કસ ઘટકો",
    allParts: "બધા ભાગ",
    searchParts: "ભાગ શોધો…",
    filterBy: "ફિલ્ટર",
    sortBy: "સૉર્ટ",
    inStock: "સ્ટૉકમાં",
    makeToOrder: "ઑર્ડર પર",
    certified: "પ્રમાણિત",
    piecesPerMonth: "ટુકડા/મહિને",
    tolerance: "ટૉલ. ગ્રેડ",
    material: "મટેરિયલ",
    addToComparison: "સરખામણી",
    saveProduct: "સાચવો",
    requestSample: "સૅમ્પલ માંગો",

    // Applications
    applicationsTitle: "અમારા પાર્ટ્સ ઉદ્યોગ ચલાવે છે",
    applicationsSubtitle:
      "ઊંડા બૉર-વૅલ ખેત-સિંચાઈ પ્રણાલી થી ઑફ-શોર દરિયાઈ તંત્ર સુધી, INDUSTRIA મોટર પાર્ટ્સ સૌથી કઠિન ફ્લ્યૂઇડ-હૅન્ડ્લિંગ વાતાવરણ માટે ડિઝાઇન થયેલ છે.",
    keyComponents: "મુખ્ય ઘટકો",

    // Manufacturing Process
    processTitle: "કાચા માલ થી પ્રમાણિત ઘટક સુધી",
    processSubtitle: "8-તબક્કા ચોક્કસ ઉત્પાદન જીવનચક્ર",

    // Why Choose
    whyChooseTitle: "OEMs INDUSTRIA કેમ પસંદ કરે છે",
    whyChooseSubtitle: "500+ ઔદ્યોગિક ખરીદારો પાસેથી વારંવાર ઓર્ડર આવે છે",

    // Certifications
    certsTitle: "ચકાસી શકાય એવી ગુણવત્તા",
    certsSubtitle: "દરેક ડિલિવરી સાથે ત્રાહ્ય-પક્ષ પ્રમાણ-પત્ર",

    // Testimonials
    testimonialsTitle: "ભારતભરના ઔદ્યોગિક ખરીદારો ભરોસો રાખે છે",
    testimonialsSubtitle: "વૉટર પંપ OEMs, ડિસ્ટ્રિબ્યૂટર અને નગરપાલિકા એન્જિનિયરો",

    // Lead Capture Form
    formTitle: "તત્કાળ ક્વોટ મેળવો",
    formSubtitle: "તમારી જરૂરિયાત જણાવો — અમારી ટેકનિકલ ટીમ ૪ કામના કલાકમાં જવાબ આપે છે.",
    formName: "આપનું નામ",
    formEmail: "ઇ-મેઇલ",
    formPhone: "ફોન નંબર",
    formCompany: "કંપની / સંસ્થા",
    formProductInterest: "જોઈતો ભાગ / પ્રોડક્ટ",
    formMessage: "જરૂરિયાત વિગત",
    formSubmit: "ઇન્ક્વાયરી મોકલો",
    formSubmitting: "મોકલાઈ રહ્યો…",
    formSuccessTitle: "ઇન્ક્વાયરી મળી!",
    formSuccessMsg: "અમારી ટેકનિકલ સેલ્સ ટીમ ૪ કામના કલાકમાં વિગતવાર ક્વોટ સાથે સંપર્ક કરશે.",
    formRefCode: "સંદર્ભ કોડ",
    formContactInfo: "અથવા સીધો સંપર્ક કરો",

    // Footer
    footerTagline:
      "સબમર્સિબલ પંપ, ખેત-સિંચાઈ અને ઔદ્યોગિક ફ્લ્યૂઇડ સિસ્ટમ માટે ચોક્કસ-ઉત્પાદિત વૉટર મોટર ઘટકો.",
    footerProductsTitle: "પ્રોડક્ટ્સ",
    footerCompanyTitle: "કંપની",
    footerQuickAccessTitle: "ઝડપી ઍક્સેસ",
    footerCopyright: "© ૨૦૨૫ INDUSTRIA મોટર પાર્ટ્સ · Sanand GIDC, ગુજરાત · સર્વ હક્ક સુરક્ષિત",
    backToTop: "ઉપર જાઓ",

    // Misc
    newBadge: "નવું",
    featuredBadge: "ખાસ",
    certifiedBadge: "પ્રમાણિત",
    availableNow: "ઉપલ.",
    makeToOrderBadge: "ઑર્ડ. પર"
  },

  hi: {
    // Navigation
    home: "मुख्य पृष्ठ",
    products: "उत्पाद",
    industries: "उद्योग",
    applications: "अनुप्रयोग",
    manufacturing: "निर्माण",
    qualityCerts: "गुणवत्ता & प्रमाण",
    about: "हमारे बारे में",
    contact: "संपर्क",
    requestQuote: "कोटेशन मांगें",
    bookVisit: "फैक्ट्री विज़िट",
    company: "कंपनी",
    search: "खोजें",
    searchPlaceholder: "उत्पाद, स्पेक्स, मटेरियल खोजें…",
    customerPortal: "खरीदार पोर्टल",
    adminDashboard: "एडमिन CRM",
    login: "डेमो लॉगिन",
    logout: "लॉग आउट",
    language: "भाषा",
    accessViews: "व्यू खोलें",

    // Hero
    heroTag: "औद्योगिक वॉटर मोटर पार्ट्स और फ्लुइड उपकरण",
    heroHeadline: "आपकी फैक्ट्री सिर्फ",
    heroHeadlineEm: "फोन नंबर से कहीं ज़्यादा की हकदार है।",
    heroSubheadline:
      "अपने इंडस्ट्रियल वॉटर मोटर पार्ट्स, सबमर्सिबल पंप असेंबली और फैक्ट्री क्षमताओं को 24/7 डिजिटल सेल्स इंजन में बदलें — RFQ, कोटेशन और ऑर्डर।",
    exploreFactory: "डिजिटल फैक्ट्री देखें",
    viewCatalog: "कोटेशन मांगें",
    heroStat1Value: "45,000+",
    heroStat1Label: "मोटर पार्ट्स / माह",
    heroStat2Value: "< 0.003mm",
    heroStat2Label: "शाफ्ट ग्राइंडिंग TIR",
    heroStat3Value: "ISO 9001",
    heroStat3Label: "गुणवत्ता प्रमाणित",

    // General
    specifications: "तकनीकी विवरण",
    downloads: "डाउनलोड और रिपोर्ट्स",
    faqs: "अक्सर पूछे जाने वाले प्रश्न",
    demoDataBadge: "डेमो मोड",
    learnMore: "और जानें",
    viewAll: "सभी देखें",
    getQuote: "कोटेशन लें",
    viewDetails: "विवरण देखें",
    readMore: "और पढ़ें",
    submit: "जमा करें",
    cancel: "रद्द करें",
    send: "संदेश भेजें",
    sending: "भेजा जा रहा है…",
    close: "बंद करें",
    back: "वापस",
    next: "आगे",

    // Product Discovery
    browseByCategory: "श्रेणी अनुसार देखें",
    browseSubtitle: "वॉटर मोटर असेंबली के हर चरण के लिए सटीक घटक",
    allParts: "सभी पार्ट्स",
    searchParts: "पार्ट खोजें…",
    filterBy: "फ़िल्टर",
    sortBy: "क्रमबद्ध",
    inStock: "स्टॉक में",
    makeToOrder: "ऑर्डर पर",
    certified: "प्रमाणित",
    piecesPerMonth: "टुकड़े/माह",
    tolerance: "सहिष्णुता",
    material: "सामग्री",
    addToComparison: "तुलना",
    saveProduct: "सहेजें",
    requestSample: "नमूना मांगें",

    // Applications
    applicationsTitle: "हमारे पार्ट्स उद्योग को शक्ति देते हैं",
    applicationsSubtitle:
      "गहरे बोरवेल कृषि पंपों से लेकर समुद्री प्रणालियों तक, INDUSTRIA मोटर पार्ट्स कठिन फ्लुइड-हैंडलिंग वातावरण के लिए बने हैं।",
    keyComponents: "मुख्य घटक",

    // Manufacturing Process
    processTitle: "कच्चे माल से प्रमाणित घटक तक",
    processSubtitle: "8-चरण सटीक निर्माण जीवन चक्र",

    // Why Choose
    whyChooseTitle: "OEM INDUSTRIA क्यों चुनते हैं",
    whyChooseSubtitle: "500+ औद्योगिक खरीदारों से बार-बार ऑर्डर",

    // Certifications
    certsTitle: "सत्यापन योग्य गुणवत्ता",
    certsSubtitle: "हर डिलीवरी के साथ तृतीय-पक्ष प्रमाण पत्र",

    // Testimonials
    testimonialsTitle: "पूरे भारत के औद्योगिक खरीदारों का भरोसा",
    testimonialsSubtitle: "वॉटर पंप OEM, डिस्ट्रिब्यूटर और नगरपालिका इंजीनियरों के अनुभव",

    // Lead Capture Form
    formTitle: "तुरंत कोटेशन पाएं",
    formSubtitle: "अपनी ज़रूरत बताएं — हमारी तकनीकी टीम 4 कार्य घंटों में जवाब देती है।",
    formName: "आपका नाम",
    formEmail: "ईमेल पता",
    formPhone: "फोन नंबर",
    formCompany: "कंपनी / संगठन",
    formProductInterest: "आवश्यक उत्पाद / पार्ट",
    formMessage: "आवश्यकता विवरण",
    formSubmit: "इन्क्वायरी भेजें",
    formSubmitting: "भेजा जा रहा है…",
    formSuccessTitle: "इन्क्वायरी मिल गई!",
    formSuccessMsg: "हमारी तकनीकी बिक्री टीम 4 कार्य घंटों में विस्तृत कोटेशन के साथ संपर्क करेगी।",
    formRefCode: "संदर्भ कोड",
    formContactInfo: "या सीधे संपर्क करें",

    // Footer
    footerTagline:
      "सबमर्सिबल पंप, कृषि सिंचाई और औद्योगिक फ्लुइड सिस्टम के लिए सटीक निर्मित वॉटर मोटर घटक।",
    footerProductsTitle: "उत्पाद",
    footerCompanyTitle: "कंपनी",
    footerQuickAccessTitle: "त्वरित पहुंच",
    footerCopyright: "© 2025 INDUSTRIA मोटर पार्ट्स · Sanand GIDC, गुजरात · सर्वाधिकार सुरक्षित",
    backToTop: "ऊपर जाएं",

    // Misc
    newBadge: "नया",
    featuredBadge: "विशेष",
    certifiedBadge: "प्रमाणित",
    availableNow: "उपलब्ध",
    makeToOrderBadge: "ऑर्डर पर"
  }
};
