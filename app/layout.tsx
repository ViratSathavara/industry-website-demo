import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { DemoStateProvider } from "@/lib/services/demo-state-context";
import { DemoModeBanner } from "@/components/ui/DemoModeBanner";
import { ClientTourGuide } from "@/components/ui/ClientTourGuide";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "INDUSTRIA — Precision CNC Machining & Engineered Components",
  description: "Manufacturer of high-precision CNC turned and milled components, forged flanges, and assemblies for Automotive and Aerospace OEMs.",
  keywords: [
    "Precision CNC Machining",
    "CNC Turned Components",
    "5-Axis Milling",
    "Forged Flanges",
    "ISO 9001:2015 Manufacturer"
  ],
  authors: [{ name: "INDUSTRIA Precision Manufacturing" }],
  openGraph: {
    title: "INDUSTRIA — Precision CNC Machining & Engineered Components",
    description: "High-precision CNC machining, 2D/3D CAD drawing evaluation, 2-hour quotations, and live order tracking.",
    siteName: "INDUSTRIA",
    type: "website"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#fafaf8] text-[#191918]">
        <DemoStateProvider>
          <DemoModeBanner />
          <div className="flex-1 flex flex-col">
            {children}
          </div>
          <ClientTourGuide />
        </DemoStateProvider>
      </body>
    </html>
  );
}
