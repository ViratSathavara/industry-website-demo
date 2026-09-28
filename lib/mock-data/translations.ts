import { Language } from "@/lib/types";

export interface TranslationDictionary {
  home: string;
  products: string;
  industries: string;
  requestQuote: string;
  contact: string;
  bookVisit: string;
  company: string;
  search: string;
  heroHeadline: string;
  heroSubheadline: string;
  exploreFactory: string;
  viewCatalog: string;
  specifications: string;
  downloads: string;
  faqs: string;
  demoDataBadge: string;
  customerPortal: string;
  adminDashboard: string;
  login: string;
  logout: string;
}

export const translations: Record<Language, TranslationDictionary> = {
  en: {
    home: "Home",
    products: "Products",
    industries: "Industries",
    requestQuote: "Request a Quote",
    contact: "Contact Sales",
    bookVisit: "Book Factory Visit",
    company: "Company",
    search: "Search products, specs, parts...",
    heroHeadline: "Your factory deserves more than a phone number.",
    heroSubheadline: "Turn products, capabilities and factory expertise into a digital sales channel that works 24/7.",
    exploreFactory: "Explore Digital Factory",
    viewCatalog: "View Catalogue",
    specifications: "Technical Specifications",
    downloads: "Downloads & Reports",
    faqs: "Frequently Asked Questions",
    demoDataBadge: "DEMO DATA — Illustrative experience",
    customerPortal: "Customer Portal",
    adminDashboard: "Admin / CRM",
    login: "Demo Login",
    logout: "Sign Out"
  },
  gu: {
    home: "મુખ્ય પૃષ્ઠ",
    products: "પ્રોડક્ટ્સ",
    industries: "ઉદ્યોગો",
    requestQuote: "ક્વોટેશન માંગો",
    contact: "સંપર્ક કરો",
    bookVisit: "ફેક્ટરી મુલાકાત બુક કરો",
    company: "કંપની વિશે",
    search: "પ્રોડક્ટ્સ, સ્પેક્સ શોધો...",
    heroHeadline: "તમારી ફેક્ટરીને માત્ર ફોન નંબર કરતાં કંઈક વધુ મળવું જોઈએ.",
    heroSubheadline: "તમારી પ્રોડક્ટ્સ, ક્ષમતાઓ અને ટેકનિકલ કુશળતાને 24/7 કાર્યરત ડિજિટલ સેલ્સ ચેનલમાં પરિવર્તિત કરો.",
    exploreFactory: "ડિજિટલ ફેક્ટરી જુઓ",
    viewCatalog: "કેટલોગ જુઓ",
    specifications: "ટેકનિકલ સ્પેસિફિકેશન",
    downloads: "ડાઉનલોડ અને રિપોર્ટ્સ",
    faqs: "વારંવાર પૂછાતા પ્રશ્નો",
    demoDataBadge: "ડેમો ડેટા — નિદર્શન અનુભવ",
    customerPortal: "ગ્રાહક પોર્ટલ",
    adminDashboard: "એડમિન / સીઆરએમ",
    login: "ડેમો લૉગિન",
    logout: "લૉગ આઉટ"
  },
  hi: {
    home: "मुख्य पृष्ठ",
    products: "उत्पाद",
    industries: "उद्योग",
    requestQuote: "कोटेशन मांगें",
    contact: "संपर्क करें",
    bookVisit: "फैक्ट्री विज़िट बुक करें",
    company: "कंपनी",
    search: "उत्पाद, स्पेक्स खोजें...",
    heroHeadline: "आपकी फैक्ट्री केवल एक फोन नंबर से कहीं अधिक की हकदार है।",
    heroSubheadline: "अपने उत्पादों, क्षमताओं और विशेषज्ञता को 24/7 सक्रिय डिजिटल बिक्री चैनल में बदलें।",
    exploreFactory: "डिजिटल फैक्ट्री देखें",
    viewCatalog: "कैटलॉग देखें",
    specifications: "तकनीकी विवरण",
    downloads: "डाउनलोड और रिपोर्ट्स",
    faqs: "अक्सर पूछे जाने वाले प्रश्न",
    demoDataBadge: "डेमो डेटा — निदर्शन अनुभव",
    customerPortal: "ग्राहक पोर्टल",
    adminDashboard: "एडमिन / सीआरएम",
    login: "डेमो लॉगिन",
    logout: "लॉग आउट"
  }
};
