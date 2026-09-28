import type { Metadata } from "next";
import { DM_Sans, DM_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { DemoStateProvider } from "@/lib/services/demo-state-context";

const dmSans = DM_Sans({
  variable: "--app-font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dmMono = DM_Mono({
  variable: "--app-font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--app-font-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "INDUSTRIA — Digital Factory Experience & Precision CNC Manufacturing",
  description: "Put your manufacturing capability where serious industrial buyers are looking. A considered digital front door for precision CNC machining, sheet-metal fabrication, and high-tolerance engineered assemblies.",
  keywords: [
    "Precision CNC Machining",
    "5-Axis Milling",
    "Turbine Impellers",
    "Splined Shafts",
    "High-Pressure Flanges",
    "Hydraulic Manifold Blocks",
    "Zeiss CMM Metrology",
    "IATF 16949 Manufacturer",
    "Digital Factory Experience"
  ],
  authors: [{ name: "INDUSTRIA Precision Manufacturing" }],
  openGraph: {
    title: "INDUSTRIA — Digital Factory Experience & Precision CNC",
    description: "5-Axis CNC machining, 2D/3D CAD drawing evaluation, 2-hour automated quotation, and live production tracking.",
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
      className={`${dmSans.variable} ${dmMono.variable} ${instrumentSerif.variable} h-full scroll-smooth antialiased`}
    >
      <body className="grain min-h-full flex flex-col bg-[#f5f0e7] text-[#20272b] selection:bg-[#e46e2e] selection:text-white">
        <DemoStateProvider>
          <div className="flex-1 flex flex-col">
            {children}
          </div>
        </DemoStateProvider>
      </body>
    </html>
  );
}
