import { Industry } from "@/lib/types";

export const mockIndustries: Industry[] = [
  {
    id: "precision-machining",
    name: "Precision CNC Machining & High-Tolerance Components",
    slug: "precision-machining",
    iconName: "Wrench",
    tagline: "5-Axis CNC milling, high-speed turning, forged flanges & critical sub-assemblies to ±0.005mm",
    description: "Specialized in 5-axis CNC machining, precision horizontal & vertical lathe turning, custom hydraulic manifold blocks, ASME pressure flanges, and turnkey sub-assemblies engineered to ±0.005mm tolerances for aerospace, automotive, and defense OEMs.",
    sampleProductType: "5-Axis CNC Impellers, Splined Transmission Shafts & ASME Flanges",
    buyerPersonas: ["Plant Head", "Procurement VP", "OEM Sourcing Director", "Aerospace & Automotive Buyer"],
    heroImage: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1600&q=80",
    capabilities: [
      "5-Axis Simultaneous CNC Milling (Mazak / DMG MORI)",
      "High-Precision CNC Turning (up to 1200mm diameter)",
      "Deep Hole Drilling & Gun Drilling (up to 1500mm depth)",
      "Zeiss 3D Coordinate Measuring Machine (0.8µm accuracy)",
      "Vacuum & Induction Heat Treatment (up to 62 HRC)",
      "Surface Anodizing, Blackodizing & Hard Chrome Plating"
    ],
    applications: [
      "Aerospace Flight & Structural Components",
      "Automotive Drivetrain, Transmission & Steering",
      "Oil & Gas High-Pressure Valves & Skids",
      "Power Generation & Turbine Assemblies",
      "Heavy Earthmoving & Hydraulic Systems",
      "Robotics, Automation & Precision Tooling"
    ],
    rfqFields: [
      { name: "materialGrade", label: "Material Grade", type: "select", options: ["Stainless Steel (SS316L / SS304)", "Alloy Steel (EN8 / EN19 / EN24 / 4140)", "Aerospace Aluminum (7075-T6 / 6061-T6)", "Titanium (Grade 5 Ti-6Al-4V)", "Inconel 718", "Phosphor Bronze (PB2)"] },
      { name: "dimensions", label: "Envelope Dimensions (L x W x H in mm or OD x L)", type: "text", placeholder: "e.g. Ø180mm x 450mm or 350 x 200 x 120 mm" },
      { name: "tolerance", label: "Tolerance Required", type: "select", options: ["Ultra-Precision (±0.005mm / 5 Microns)", "High-Precision (±0.01mm)", "Standard CNC (±0.05mm)"] },
      { name: "batchQuantity", label: "Batch Quantity (MOQ)", type: "select", options: ["Prototype (1-5 pcs)", "Small Batch (25-100 pcs)", "Production Run (500-2,500 pcs)", "High Volume (5,000+ pcs/month)"] },
      { name: "surfaceFinish", label: "Surface Treatment", type: "select", options: ["As Machined (Ra 0.8 - 1.6)", "Electropolished / Passivated", "Hard Anodized (Type III 50µm)", "Blackodized", "Hard Chrome Plated"] },
      { name: "inspectionRequirement", label: "Inspection & Certificates", type: "select", options: ["100% Zeiss CMM Dimensional Report", "EN 10204 Type 3.1 Mill Test Certificate", "PPAP Level 3 (Automotive)", "Ultrasonic & Dye Penetrant (NDT)"] },
      { name: "drawingFile", label: "CAD Engineering Drawing (STEP / DWG / PDF)", type: "file" }
    ]
  },
  {
    id: "engineering-fabrication",
    name: "Precision CNC Machining & High-Tolerance Components",
    slug: "precision-machining",
    iconName: "Wrench",
    tagline: "5-Axis CNC milling, high-speed turning, forged flanges & critical sub-assemblies to ±0.005mm",
    description: "Specialized in 5-axis CNC machining, precision horizontal & vertical lathe turning, custom hydraulic manifold blocks, ASME pressure flanges, and turnkey sub-assemblies engineered to ±0.005mm tolerances for aerospace, automotive, and defense OEMs.",
    sampleProductType: "5-Axis CNC Impellers, Splined Transmission Shafts & ASME Flanges",
    buyerPersonas: ["Plant Head", "Procurement VP", "OEM Sourcing Director", "Aerospace & Automotive Buyer"],
    heroImage: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1600&q=80",
    capabilities: [
      "5-Axis Simultaneous CNC Milling (Mazak / DMG MORI)",
      "High-Precision CNC Turning (up to 1200mm diameter)",
      "Deep Hole Drilling & Gun Drilling (up to 1500mm depth)",
      "Zeiss 3D Coordinate Measuring Machine (0.8µm accuracy)",
      "Vacuum & Induction Heat Treatment (up to 62 HRC)",
      "Surface Anodizing, Blackodizing & Hard Chrome Plating"
    ],
    applications: [
      "Aerospace Flight & Structural Components",
      "Automotive Drivetrain, Transmission & Steering",
      "Oil & Gas High-Pressure Valves & Skids",
      "Power Generation & Turbine Assemblies",
      "Heavy Earthmoving & Hydraulic Systems",
      "Robotics, Automation & Precision Tooling"
    ],
    rfqFields: [
      { name: "materialGrade", label: "Material Grade", type: "select", options: ["Stainless Steel (SS316L / SS304)", "Alloy Steel (EN8 / EN19 / EN24 / 4140)", "Aerospace Aluminum (7075-T6 / 6061-T6)", "Titanium (Grade 5 Ti-6Al-4V)", "Inconel 718", "Phosphor Bronze (PB2)"] },
      { name: "dimensions", label: "Envelope Dimensions (L x W x H in mm or OD x L)", type: "text", placeholder: "e.g. Ø180mm x 450mm or 350 x 200 x 120 mm" },
      { name: "tolerance", label: "Tolerance Required", type: "select", options: ["Ultra-Precision (±0.005mm / 5 Microns)", "High-Precision (±0.01mm)", "Standard CNC (±0.05mm)"] },
      { name: "batchQuantity", label: "Batch Quantity (MOQ)", type: "select", options: ["Prototype (1-5 pcs)", "Small Batch (25-100 pcs)", "Production Run (500-2,500 pcs)", "High Volume (5,000+ pcs/month)"] },
      { name: "surfaceFinish", label: "Surface Treatment", type: "select", options: ["As Machined (Ra 0.8 - 1.6)", "Electropolished / Passivated", "Hard Anodized (Type III 50µm)", "Blackodized", "Hard Chrome Plated"] },
      { name: "inspectionRequirement", label: "Inspection & Certificates", type: "select", options: ["100% Zeiss CMM Dimensional Report", "EN 10204 Type 3.1 Mill Test Certificate", "PPAP Level 3 (Automotive)", "Ultrasonic & Dye Penetrant (NDT)"] },
      { name: "drawingFile", label: "CAD Engineering Drawing (STEP / DWG / PDF)", type: "file" }
    ]
  }
];
