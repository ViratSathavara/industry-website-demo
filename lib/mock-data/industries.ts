import { Industry } from "@/lib/types";

export const mockIndustries: Industry[] = [
  {
    id: "industrial-motor-parts",
    name: "Industrial Water Motor Parts & Fluid Equipment",
    slug: "industrial-motor-parts",
    iconName: "Cpu",
    tagline: "V4/V6/V8 submersible water pump motors, bronze impellers, CRGO stators, SS410 shafts & volutes",
    description: "Specialized in deep-well submersible water pump motors, high-efficiency monoblock pump assemblies, dynamic-balanced gunmetal bronze water impellers, close-grained cast iron volute casings, hard-chrome plated SS410 rotor shafts, and Silicon Carbide mechanical seals manufactured to ISI/BIS and ISO 9001 standards for agriculture, municipal water supply, and heavy industrial fluid handling.",
    sampleProductType: "Submersible Water Motors, Bronze Impellers, Volute Casings & Pump Shafts",
    buyerPersonas: ["Water Pump OEM Manufacturer", "Agricultural Equipment Distributor", "Municipal Water Supply Engineer", "Industrial Procurement VP"],
    heroImage: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1600&q=80",
    capabilities: [
      "Submersible Water Motor Stator Winding & Vacuum Pressure Impregnation",
      "Dynamic Balancing of Pump Impellers & Rotors to ISO 1940 Grade G1.0",
      "CNC Cylindrical Grinding & Hard-Chrome Plating of SS410 Pump Shafts",
      "High-Density Cast Iron FG260 & Gunmetal Bronze Precision Casting",
      "Hydrostatic Pressure Testing of Pump Volutes & Bowls up to 25 Bar",
      "Laser-Notched Low-Loss CRGO Electrical Silicon Steel Lamination Stacking"
    ],
    applications: [
      "Agricultural Borewell Irrigation & Deep-Well Solar Pumps",
      "Municipal Drinking Water Distribution & Sewage Treatment",
      "Industrial Raw Water Intake, Cooling Towers & Chilled Water HVAC",
      "Construction Dewatering, Mining Slurry & High-Head Drainage",
      "Firefighting Hydrant Pumps & High-Rise Building Booster Systems",
      "Chemical Processing, Desalination & High-Pressure Fluid Transfer"
    ],
    rfqFields: [
      { name: "motorType", label: "Motor / Pump Type", type: "select", options: ["V4 / V6 Submersible Water Motor", "Openwell Submersible Motor", "Centrifugal Monoblock Water Pump", "Vertical Multistage Inline Booster", "High-Pressure Process Pump"] },
      { name: "componentCategory", label: "Required Part / Component", type: "select", options: ["Rewindable Stator Assembly", "Water Motor Ground Rotor Shaft", "Bronze / Cast Iron Water Impeller", "Monoblock Volute Casing", "SiC Mechanical Shaft Seal", "Thrust Bearing & Carbon Pad Set"] },
      { name: "materialSpec", label: "Material Specification", type: "select", options: ["Gunmetal Bronze (Grade LTB-2)", "Martensitic Stainless Steel (SS410 / SS304)", "Close-Grained Cast Iron (FG 260)", "CRGO Silicon Steel (M400-50A)", "Reaction-Bonded Silicon Carbide (SiC)"] },
      { name: "headDischarge", label: "Target Operating Duty (Head & Discharge)", type: "text", placeholder: "e.g. Head: 80 meters, Discharge: 450 LPM (or Power: 15 HP)" },
      { name: "batchQuantity", label: "Batch Quantity (MOQ)", type: "select", options: ["Pilot Trial Batch (10-25 pcs)", "Standard Batch (50-200 pcs)", "Continuous Monthly OEM Supply (500-2,500 pcs/mo)", "Export Container Load (5,000+ pcs)"] },
      { name: "drawingFile", label: "CAD Engineering Drawing / Technical Spec (PDF/STEP/DWG)", type: "file" }
    ]
  },
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
    name: "Industrial Motor Parts & Power Transmission",
    slug: "industrial-motor-parts",
    iconName: "Cpu",
    tagline: "High-precision EV & industrial motor rotor shafts, CRGO stator cores, end shields & ground pinions",
    description: "Specialized in high-speed electric motor rotor shafts, laser-notched CRGO/CRNO stator cores, precision B5/B14 cast iron end shields, extruded aluminum cooling housings, and carburized reduction pinions engineered to DIN ISO 2768-m standards for industrial automation, EV traction, and heavy pump drives.",
    sampleProductType: "Rotor Shafts, Stator Lamination Packs, Motor Housings & Ground Pinions",
    buyerPersonas: ["Electric Motor OEM Buyer", "Plant Maintenance Head", "EV Powertrain Engineer", "Procurement VP"],
    heroImage: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1600&q=80",
    capabilities: [
      "CNC Cylindrical & Centerless Grinding (< 0.003mm runout)",
      "High-Speed Stator Notching & Laser Lamination Stacking",
      "Dynamic Balancing to ISO 1940 Grade G1.0 / G2.5",
      "High-Pressure Die Casting & Gravity Sand Casting (CI & Al)",
      "Line-Boring & CNC Turning of Motor Bearing Journals",
      "Vacuum Pressure Impregnation (VPI) & Induction Hardening"
    ],
    applications: [
      "Electric Vehicle (EV) Traction & Auxiliary Motors",
      "Industrial AC Induction & High-Efficiency IE3/IE4 Motors",
      "Servo Motors, Robotics & CNC Machine Spindles",
      "Submersible Pumps, Compressors & Heavy Blower Drives"
    ],
    rfqFields: []
  }
];
