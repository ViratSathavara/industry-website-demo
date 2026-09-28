import { Product } from "@/lib/types";

export const mockProducts: Product[] = [
  // 1. V6 Submersible Water Pump Motor Stator & Rotor Assembly
  {
    id: "prod-water-001",
    name: "V6 Heavy Duty Submersible Water Pump Motor Stator & Rotor Assembly",
    slug: "v6-submersible-water-pump-motor-assembly",
    sku: "WTR-MTR-V6-15HP",
    productCode: "SUB-V6-CU15",
    industryId: "industrial-motor-parts",
    industryName: "Industrial Water Motor Parts & Fluid Equipment",
    categoryId: "water-pump-motor-parts",
    categoryName: "Submersible & Monoblock Water Motor Parts",
    shortDescription: "Water-filled rewindable 15 HP submersible motor assembly with EC grade copper windings, SS304 outer jacket, and Mitchell-type carbon thrust bearing.",
    fullDescription: "Engineered specifically for agricultural borewells, municipal deep-wells, and industrial dewatering applications. Features a 100% electrolytic copper conductor winding with high-dielectric waterproof poly-wrap insulation. The stator stack is stamped from low-loss CRNO silicon steel and housed inside a seamless drawn SS304 anti-corrosive stainless shell. Equipped with dynamic Mitchell carbon-pad thrust bearing capable of absorbing up to 25,000 N axial downthrust.",
    images: [
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1000&q=80"
    ],
    priceMode: "Starting from",
    price: 18500,
    unit: "Assembly",
    moq: "5 Assemblies",
    leadTime: "7 - 10 Days",
    customizationAvailable: true,
    specs: {
      "Power Rating": "15 HP / 11 kW (Available 7.5 to 50 HP)",
      "Supply Voltage": "415V (±10%), 3-Phase, 50 Hz AC",
      "Operating Speed": "2,880 RPM (2-Pole Synchronous)",
      "Outer Shell Material": "Seamless Stainless Steel AISI 304",
      "Winding Wire": "100% EC Grade Electrolytic Copper (Class F)",
      "Thrust Bearing": "Water-Lubricated Mitchell Carbon Pad",
      "Ingress Protection": "IP68 Continuous Submersion (up to 300m depth)"
    },
    applications: [
      "Deep-Well Agricultural Borewell Water Irrigation",
      "Municipal Water Pumping Stations & City Utilities",
      "Industrial Mine Dewatering & Slurry Intake",
      "Commercial Building High-Rise Booster Skids"
    ],
    features: [
      "Rewindable water-cooled design ensures continuous 24/7 pumping duty",
      "High dielectric insulation prevents short circuits under heavy voltage fluctuations",
      "Anti-sand flinger seal prevents quartz sand particles from penetrating bearing journals",
      "Dynamic Mitchell thrust bearing withstands extreme water column downthrust loads"
    ],
    materials: ["Stainless Steel 304", "CRNO Grade M400-50A", "High Purity Electrolytic Copper", "Carbon Graphite"],
    downloads: [
      { title: "V6 Motor Electrical Wiring & Head-Discharge Curve (PDF)", type: "PDF", size: "2.4 MB", filename: "v6-submersible-motor-specs.pdf" },
      { title: "BIS / ISI Standard Performance Test Certificate", type: "PDF", size: "850 KB", filename: "submersible-motor-test-cert.pdf" }
    ],
    faqs: [
      { question: "Can this motor operate under low voltage (down to 280V)?", answer: "Yes, our wide-voltage stator windings are engineered to start and run stably from 280V to 440V without overheating." },
      { question: "Do you supply customized shaft extensions (spline or keyway)?", answer: "Yes, we machine NEMA standard 4-inch, 6-inch, and 8-inch spline couplings as well as custom parallel keyway extensions." }
    ],
    status: "Active",
    viewsCount: 3120,
    enquiriesCount: 168
  },

  // 2. Precision Bronze Water Pump Impeller
  {
    id: "prod-water-002",
    name: "Precision Dynamic-Balanced Gunmetal Bronze Water Pump Impeller",
    slug: "gunmetal-bronze-water-pump-impeller",
    sku: "WTR-IMP-BRZ180",
    productCode: "IMP-BRZ-LTB2",
    industryId: "industrial-motor-parts",
    industryName: "Industrial Water Motor Parts & Fluid Equipment",
    categoryId: "pump-impellers-casings",
    categoryName: "Water Pump Impellers, Bowls & Volute Casings",
    shortDescription: "Closed-type gunmetal bronze (LTB-2) centrifugal pump impeller with hydrodynamic backward-curved vanes, dynamically balanced to ISO 1940 G1.0.",
    fullDescription: "Cast from high-density leaded tin bronze (Grade LTB-2 / IS 318) or nickel-aluminum bronze for extreme cavitation and abrasion resistance in abrasive groundwater. CNC turned on multi-axis chucking lathes. All internal fluid passages are hydraulically smoothed to Ra 0.8µm, boosting pump hydraulic efficiency by over 8.5% compared to standard rough castings.",
    images: [
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80"
    ],
    priceMode: "Starting from",
    price: 2450,
    unit: "Piece",
    moq: "15 Pieces",
    leadTime: "6 - 10 Days",
    customizationAvailable: true,
    specs: {
      "Impeller Outer Diameter": "Ø120 mm to Ø380 mm",
      "Bore Diameter": "Ø25 mm to Ø65 mm with DIN 6885 Keyway",
      "Balancing Grade": "ISO 1940 Grade G1.0 at 3,000 RPM",
      "Hydraulic Profile": "Backward-Curved Closed Shrouded Vanes",
      "Casting Material": "Leaded Tin Bronze LTB-2 / Nickel Bronze",
      "Cavitation Resistance": "Exceeds ASTM G32 acoustic cavitation test"
    },
    applications: [
      "Agricultural Monoblock Centrifugal Water Pumps",
      "Municipal Drinking Water Booster Systems",
      "HVAC Chilled Water & Cooling Tower Circulation",
      "Chemical Fluid Transfer & Brine Circulation"
    ],
    features: [
      "Zero corrosion in chlorite-rich groundwater and brackish water",
      "Hydrodynamically optimized flow passages minimize hydraulic turbulence",
      "100% two-plane dynamic balancing prevents motor shaft vibration and bearing wear"
    ],
    materials: ["Leaded Tin Bronze LTB-2", "Nickel Aluminum Bronze", "Cast Iron FG260", "Forged Brass"],
    downloads: [
      { title: "Bronze Impeller CAD Cross-Section & Flow Chart (PDF)", type: "PDF", size: "1.7 MB", filename: "bronze-impeller-cad.pdf" }
    ],
    faqs: [
      { question: "Can you machine impellers to custom trim diameters?", answer: "Yes, we trim and balance impellers to meet specific head and flow duty points." }
    ],
    status: "Active",
    viewsCount: 2240,
    enquiriesCount: 118
  },

  // 3. Cast Iron Monoblock Water Pump Volute Casing
  {
    id: "prod-water-003",
    name: "Heavy Duty Cast Iron FG260 Monoblock Water Pump Volute Casing",
    slug: "cast-iron-monoblock-pump-volute-casing",
    sku: "WTR-CSG-VOL200",
    productCode: "VOL-CI-FG260",
    industryId: "industrial-motor-parts",
    industryName: "Industrial Water Motor Parts & Fluid Equipment",
    categoryId: "pump-impellers-casings",
    categoryName: "Water Pump Impellers, Bowls & Volute Casings",
    shortDescription: "High-density close-grained gray iron FG260 pump volute casing, CNC face-turned with 16 Bar hydrostatic pressure proof testing.",
    fullDescription: "Cast from stress-relieved high-density gray cast iron FG 260 with heavy reinforced ribs along the hydraulic cut-water. The suction and discharge ports are CNC drilled and tapped or flanged to DIN/ANSI standards. All internal waterway volute expansion areas are shot-blasted and coated with drinking-water safe epoxy paint (WRAS compliant).",
    images: [
      "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80"
    ],
    priceMode: "Request Quote",
    price: 5800,
    unit: "Piece",
    moq: "10 Pieces",
    leadTime: "8 - 12 Days",
    customizationAvailable: true,
    specs: {
      "Suction x Delivery Size": "50x50 mm, 65x50 mm, 80x65 mm, 100x80 mm",
      "Material Grade": "High-Grade Cast Iron FG 260 / Ductile 500-7",
      "Hydrostatic Test": "16 Bar (230 PSI) sustained for 10 minutes",
      "Seal Chamber": "Accommodates Cartridge Mechanical Seal or Gland Packing",
      "Mounting Flange": "Rigid B3 Feet with CNC Machined Datum Surface"
    },
    applications: [
      "Monoblock Agricultural Pumps & Farm Water Supply",
      "Industrial Raw Water Intake & Cooling Towers",
      "Fire Fighting Hydrant Booster Packages",
      "Civil Construction Water Dewatering Skids"
    ],
    features: [
      "Reinforced volute wall thickness prevents cracking under severe water hammer shocks",
      "Precision spigot pilot bore ensures zero misalignment with motor drive flange",
      "Smooth hydraulic volute tongue reduces internal recirculation and noise"
    ],
    materials: ["Gray Cast Iron FG 260", "Ductile Iron GGG-40", "Stainless Steel CF8M"],
    downloads: [
      { title: "Volute Casing Dimensions & Hydrostatic Test Report (PDF)", type: "PDF", size: "1.9 MB", filename: "pump-volute-casing-spec.pdf" }
    ],
    faqs: [
      { question: "Do you supply volutes with primer coating or finished paint?", answer: "We provide anti-corrosive zinc phosphate primer and optional epoxy powder coat in any RAL color." }
    ],
    status: "Active",
    viewsCount: 1950,
    enquiriesCount: 92
  },

  // 4. Hard-Chrome Ground SS410 Water Pump Motor Shaft
  {
    id: "prod-water-004",
    name: "Hard-Chrome Ground SS410 Water Pump Motor Shaft with Keyway",
    slug: "hard-chrome-ground-ss410-water-pump-shaft",
    sku: "WTR-SFT-SS410",
    productCode: "SFT-SS410-HC",
    industryId: "industrial-motor-parts",
    industryName: "Industrial Water Motor Parts & Fluid Equipment",
    categoryId: "motor-rotors-shafts",
    categoryName: "Water Motor Rotor Shafts & Ground Armatures",
    shortDescription: "Martensitic SS410 hard-chrome plated water motor shaft with induction-hardened seal landings, total radial runout under 0.003mm.",
    fullDescription: "Manufactured from certified martensitic stainless steel grade AISI 4140/SS410, heat-treated to 28-32 HRC core toughness. Cylindrical ground between dead centers on CNC grinders. The seal seating areas and bearing seats are induction-hardened to 55-58 HRC and deposited with 25-30 microns of hard chrome plating (Ra 0.2µm superfinish), completely preventing seal groove wear and water leakage.",
    images: [
      "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80"
    ],
    priceMode: "Request Quote",
    price: 3600,
    unit: "Piece",
    moq: "25 Pieces",
    leadTime: "8 - 14 Days",
    customizationAvailable: true,
    specs: {
      "Shaft Diameter Range": "Ø22 mm to Ø75 mm (Length up to 1,500 mm)",
      "Material": "Martensitic Stainless Steel SS410 / SS304 / EN8D",
      "Chrome Plating Thickness": "25 - 35 Microns Hard Chrome Deposit",
      "Surface Hardness on Seal Land": "55 - 58 HRC (Induction Hardened)",
      "Bearing Journal Tolerance": "ISO k5 / m5 (+0.009 / +0.002 mm)",
      "Total Indicated Runout (TIR)": "< 0.003 mm across full span"
    },
    applications: [
      "Submersible Water Pump Rotor Drives",
      "Monoblock Centrifugal Motor Shafts",
      "Vertical Multistage High-Pressure Booster Pumps",
      "Solar DC Water Pump Rotors"
    ],
    features: [
      "Hard chrome plating prevents pitting corrosion under saline water contact",
      "Mirror ground seal landing eliminates mechanical seal rubber boot tearing",
      "CNC milled parallel keyway conforms strictly to DIN 6885 standards"
    ],
    materials: ["Stainless Steel SS410", "Stainless Steel SS304", "Alloy Steel EN19", "High-Carbon 1045"],
    downloads: [
      { title: "Shaft Tolerance Envelope & Plating Report (PDF)", type: "PDF", size: "1.3 MB", filename: "water-pump-shaft-drawing.pdf" }
    ],
    faqs: [
      { question: "Can you supply shafts pre-fitted with rotor lamination packs?", answer: "Yes, we shrink-fit rotor cores onto finished ground shafts and perform combined dynamic balancing." }
    ],
    status: "Active",
    viewsCount: 2380,
    enquiriesCount: 135
  },

  // 5. Silicon Carbide Mechanical Water Pump Seal
  {
    id: "prod-water-005",
    name: "Silicon Carbide (SiC) High-Pressure Mechanical Water Pump Shaft Seal",
    slug: "silicon-carbide-mechanical-water-pump-seal",
    sku: "WTR-SEL-SIC035",
    productCode: "SEL-SIC-VTN",
    industryId: "industrial-motor-parts",
    industryName: "Industrial Water Motor Parts & Fluid Equipment",
    categoryId: "mechanical-seals-valves",
    categoryName: "Mechanical Shaft Seals, Flanges & Valves",
    shortDescription: "Heavy-duty reaction bonded Silicon Carbide vs SiC mechanical face seal with Viton/EPDM elastomers for extreme high-pressure water pumps.",
    fullDescription: "Designed to replace failure-prone gland packings in water motors and centrifugal booster pumps. The seal faces are diamond-lapped to optical flatness (< 2 light bands), preventing any fluid leakage. Resistant to abrasive sand slurry, chemicals, and thermal shocks up to 160°C and pressures up to 25 Bar.",
    images: [
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80"
    ],
    priceMode: "Buy Now",
    price: 850,
    unit: "Set",
    moq: "50 Sets",
    leadTime: "3 - 5 Days",
    customizationAvailable: true,
    specs: {
      "Shaft Diameter": "Ø16 mm to Ø85 mm Standard Sizes",
      "Seal Face Material": "Silicon Carbide vs Silicon Carbide (SiC/SiC) or TC",
      "Elastomer Options": "Viton (FKM) / Food-Grade EPDM / NBR",
      "Operating Pressure": "Up to 25 Bar (360 PSI)",
      "Operating Temperature": "-20°C to +160°C",
      "Spring Material": "Stainless Steel 316 Non-Clogging Single Coil"
    },
    applications: [
      "Agricultural Borewell Monoblock Pumps",
      "Commercial HVAC Hot & Chilled Water Pumps",
      "Boiler Feed High-Pressure Water Pumps",
      "Wastewater & Effluent Transfer Pumps"
    ],
    features: [
      "Diamond-lapped seal faces guarantee zero dripping and zero fluid loss",
      "Extreme hardness (92 HRA) resists abrasive sand grains in groundwater",
      "Stainless 316 wave/coil spring ensures uniform face contact pressure over years"
    ],
    materials: ["Reaction-Bonded SiC", "Tungsten Carbide", "SS316", "Viton Rubber"],
    downloads: [
      { title: "Mechanical Seal Dimensional Interchange Chart (PDF)", type: "PDF", size: "1.1 MB", filename: "mechanical-seal-catalog.pdf" }
    ],
    faqs: [
      { question: "Is this seal suitable for dirty or sandy river water?", answer: "Yes, the SiC vs SiC face combination is specifically engineered for abrasive sand slurries." }
    ],
    status: "Active",
    viewsCount: 1870,
    enquiriesCount: 89
  },

  // 6. EV Traction Motor Rotor Shaft
  {
    id: "prod-motor-001",
    name: "EV Traction Motor High-Speed Rotor Shaft Assembly",
    slug: "ev-traction-motor-rotor-shaft-assembly",
    sku: "MTR-SFT-EV24K",
    productCode: "SFT-EV-42CRMO",
    industryId: "industrial-motor-parts",
    industryName: "Industrial Water Motor Parts & Fluid Equipment",
    categoryId: "motor-rotors-shafts",
    categoryName: "Water Motor Rotor Shafts & Ground Armatures",
    shortDescription: "Precision CNC cylindrical ground EV motor rotor shaft engineered for 24,000 RPM operation with induction-hardened bearing seats and DIN 5480 splines.",
    fullDescription: "Manufactured from vacuum-degassed 42CrMo4 alloy steel forging. Fully CNC cylindrical ground between dead centers with journal runout held within 0.003mm (3 microns). Involute drive splines are precision gear-hobbed to DIN 5480 class 6e. Bearing journals and seal landings undergo induction hardening (56-60 HRC, 2.5mm effective case depth) followed by superfinishing to Ra 0.2µm.",
    images: [
      "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80"
    ],
    priceMode: "Request Quote",
    price: 6850,
    unit: "Piece",
    moq: "20 Pieces",
    leadTime: "12 - 16 Days",
    customizationAvailable: true,
    specs: {
      "Operating Speed Rating": "Up to 24,000 RPM continuous",
      "Radial Runout": "< 0.003 mm (3 Microns TIR)",
      "Bearing Seat Hardness": "56 - 60 HRC (Induction Hardened)",
      "Surface Roughness": "Ra 0.2 µm (Superfinished Bearing Lands)",
      "Spline Standard": "DIN 5480 W35x2x30x16 9g/6e Involute",
      "Dynamic Balancing": "ISO 1940 Grade G1.0 at 15,000 RPM"
    },
    applications: [
      "Electric Vehicle (EV) Main Traction Inverters & Motors",
      "High-Speed Hybrid Drivetrain Generator Rotors",
      "High-Frequency Spindle Motors for CNC Centers"
    ],
    features: [
      "Sub-micron cylindrical grinding ensures zero vibration harmonics at 20,000+ RPM",
      "Deep induction case depth prevents fretting corrosion under heavy torsional acceleration",
      "100% Zeiss 3D CMM inspection report and dynamic balancing certificate included"
    ],
    materials: ["Forged 42CrMo4 / 4140", "Case Carburizing 18CrNiMo7-6", "Aerospace 300M Alloy Steel"],
    downloads: [
      { title: "Rotor Shaft Envelope & Spline Geometry (PDF)", type: "PDF", size: "2.1 MB", filename: "ev-rotor-shaft-spec-dwg.pdf" }
    ],
    faqs: [
      { question: "Can you supply hollow shafts with internal oil-cooling passages?", answer: "Yes, we gun-drill internal cooling passages from Ø8mm to Ø25mm." }
    ],
    status: "Active",
    viewsCount: 2480,
    enquiriesCount: 138
  },

  // 7. CRGO Stator Core Lamination Pack
  {
    id: "prod-motor-002",
    name: "High-Efficiency CRGO Stator Core & Lamination Pack (IEC 132-280)",
    slug: "high-efficiency-crgo-stator-core-lamination-pack",
    sku: "MTR-STR-CRGO180",
    productCode: "STR-180-M400",
    industryId: "industrial-motor-parts",
    industryName: "Industrial Water Motor Parts & Fluid Equipment",
    categoryId: "motor-stators-cores",
    categoryName: "Motor Stators, Cores & Lamination Packs",
    shortDescription: "Laser-notched CRGO/CRNO low-loss silicon steel stator lamination packs with precision interlocking and automated continuous laser welding.",
    fullDescription: "Built for Premium Efficiency IE3 and Super Premium IE4 electric and water pump motors. Stamped or high-speed CNC laser notched from premium Grade M400-50A or thin-gauge 0.35mm silicon electrical steel. Packs feature automated precision stamping interlocking, zero-burr edge trimming (< 0.01mm burr height), and automated longitudinal laser welding along the back-iron.",
    images: [
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1000&q=80"
    ],
    priceMode: "Request Quote",
    price: 4950,
    unit: "Pack",
    moq: "15 Packs",
    leadTime: "10 - 14 Days",
    customizationAvailable: true,
    specs: {
      "Motor Frame Range": "IEC 132 to IEC 280 (NEMA 213T - 445T)",
      "Sheet Thickness": "0.35 mm / 0.50 mm Low-Loss CRNO/CRGO",
      "Stacking Factor": "> 96.5% (High Magnetic Flux Density)",
      "Core Loss": "< 3.2 W/kg at 1.5 Tesla / 50 Hz",
      "Joining Method": "Continuous Laser Welding / Clean Cleating"
    },
    applications: [
      "IE3 / IE4 Premium Efficiency Industrial Induction Motors",
      "Solar Water Pump BLDC Stators & Drives",
      "Continuous Duty HVAC Blower & Compressor Motors"
    ],
    features: [
      "Ultra-low core watt loss optimizes motor efficiency to exceed IEC 60034-30-1 standards",
      "Zero-burr precision stamping prevents inter-laminar insulation degradation",
      "Clean varnish bonding and automated welding preserves magnetic permeability"
    ],
    materials: ["CRNO Grade M400-50A", "High-Permeability M270-35A", "Laser Sliced Silicon Steel"],
    downloads: [
      { title: "Stator Slot Dimensions & Core Loss Curves (PDF)", type: "PDF", size: "1.9 MB", filename: "stator-core-iec180-spec.pdf" }
    ],
    faqs: [
      { question: "Can you manufacture customized slot profiles for hairpin stator windings?", answer: "Yes, our CNC progressive dies support customized hairpin slot geometries." }
    ],
    status: "Active",
    viewsCount: 1890,
    enquiriesCount: 94
  },

  // 8. Cast Iron B5 / B14 Motor End Shield
  {
    id: "prod-motor-003",
    name: "Precision B5 / B14 Cast Iron Motor End Shield & Drive Flange",
    slug: "cast-iron-b5-b14-motor-end-shield-flange",
    sku: "MTR-FLG-B5-200",
    productCode: "SHD-B5-FG260",
    industryId: "industrial-motor-parts",
    industryName: "Industrial Water Motor Parts & Fluid Equipment",
    categoryId: "motor-housings-flanges",
    categoryName: "Motor Housings, End Shields & Castings",
    shortDescription: "High-density close-grained cast iron FG260 motor drive-end shields line-bored for bearing accuracy (H7 tolerance) with dual viton oil seal grooves.",
    fullDescription: "Engineered for IEC and NEMA frame standard motors and close-coupled water pumps. Cast from stress-relieved high-grade gray iron FG 260 or spheroidal graphite ductile iron. Finished on multi-axis CNC horizontal turning centers. The bearing bore is CNC line-bored to ISO H7 tolerance with concentricity and face perpendicularity under 0.015mm.",
    images: [
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80"
    ],
    priceMode: "Starting from",
    price: 1850,
    unit: "Piece",
    moq: "30 Pieces",
    leadTime: "8 - 12 Days",
    customizationAvailable: true,
    specs: {
      "Mounting Configuration": "B5 Large Flange / B14 Face Flange (IEC 71 - 250)",
      "Bearing Bore Tolerance": "ISO H7 (+0.015 / -0.000 mm)",
      "Flange Spigot Concentricity": "< 0.02 mm TIR relative to bearing bore",
      "Material Grade": "High-Grade Cast Iron FG 260 / EN-GJL-250",
      "Seal Accommodation": "Double Lip Viton Oil Seal with Grease Relief Port"
    },
    applications: [
      "Industrial AC Motor Drive-End (DE) and Non-Drive End (NDE)",
      "Close-Coupled Centrifugal Pump Mountings",
      "Flange-Mounted Helical and Worm Gearboxes"
    ],
    features: [
      "High vibrational damping capacity reduces operational noise and motor resonance",
      "Line-bored bearing bore prevents bearing race distortion and excessive heat generation",
      "Precision drilled PCD bolt holes provide effortless bolt-on gearbox alignment"
    ],
    materials: ["Gray Cast Iron FG 260", "Ductile Iron GJS 500-7", "Pressure Die Cast ADC12 Aluminum"],
    downloads: [
      { title: "B5 Flange Spigot & Bolt PCD Drawing (PDF)", type: "PDF", size: "1.3 MB", filename: "b5-end-shield-cad.pdf" }
    ],
    faqs: [
      { question: "Can you supply end shields with cast-in grease nipples?", answer: "Yes, all frames feature integrated regreasing channels and relief exits." }
    ],
    status: "Active",
    viewsCount: 1640,
    enquiriesCount: 78
  },

  // 9. Extruded Aluminum Finned Motor Casing
  {
    id: "prod-motor-004",
    name: "Extruded Aluminum Finned Motor Housing & Stator Casing",
    slug: "extruded-aluminum-finned-motor-casing",
    sku: "MTR-HSG-AL132",
    productCode: "HSG-AL-6063",
    industryId: "industrial-motor-parts",
    industryName: "Industrial Water Motor Parts & Fluid Equipment",
    categoryId: "motor-housings-flanges",
    categoryName: "Motor Housings, End Shields & Castings",
    shortDescription: "Lightweight, high-thermal dissipation 6063-T6 extruded aluminum motor housing with CNC finish-turned stator landing and integrated foot mounting slots.",
    fullDescription: "Designed for premium water pump, servo, and high-efficiency induction motors where power density and rapid thermal dissipation are essential. Extruded with aerodynamically optimized longitudinal cooling fins that increase surface area by over 340%. The stator internal diameter is CNC precision bored to tolerance H8 for tight thermal contact shrink-fit assembly.",
    images: [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=1000&q=80"
    ],
    priceMode: "Request Quote",
    price: 3400,
    unit: "Piece",
    moq: "25 Pieces",
    leadTime: "10 - 15 Days",
    customizationAvailable: true,
    specs: {
      "Frame Size Range": "IEC 71 to IEC 160 / NEMA 56-215T",
      "Internal Bore Tolerance": "ISO H8 for Interference Shrink Fit",
      "Thermal Conductivity": "201 W/m·K (Alloy 6063-T6)",
      "Cooling Fin Count": "28 - 42 aerodynamically contoured radial fins"
    },
    applications: [
      "Monoblock Water Pumps & Cleanroom Inverter Motors",
      "Electric Vehicle Compressor and Pump Motors",
      "Servo Motors for Industrial Automation"
    ],
    features: [
      "40% lighter than cast iron equivalents with 3x higher heat dissipation rate",
      "Modular multi-mount bolt slots allow flexible B3 foot positioning or B5 flange mounting",
      "Corrosion-resistant anodized surface passes 500-hour ASTM B117 salt spray testing"
    ],
    materials: ["Extruded Aluminum 6063-T6", "High-Strength 6082-T6", "Die-Cast A380"],
    downloads: [
      { title: "Extruded Motor Casing Thermal & Dimension Sheet (PDF)", type: "PDF", size: "2.3 MB", filename: "al-motor-casing-specs.pdf" }
    ],
    faqs: [
      { question: "What interference shrink-fit clearance is needed?", answer: "We machine the internal bore to match your core OD with 0.03mm - 0.05mm shrink fit." }
    ],
    status: "Active",
    viewsCount: 2120,
    enquiriesCount: 105
  },

  // 10. Die-Cast Aluminum IP68 Waterproof Motor Terminal Box
  {
    id: "prod-motor-007",
    name: "Die-Cast Aluminum IP68 Waterproof Motor Terminal Box & Glands",
    slug: "die-cast-aluminum-ip68-waterproof-terminal-box",
    sku: "MTR-TBX-IP68-AL",
    productCode: "TBX-AL-ADC12",
    industryId: "industrial-motor-parts",
    industryName: "Industrial Water Motor Parts & Fluid Equipment",
    categoryId: "motor-housings-flanges",
    categoryName: "Motor Housings, End Shields & Castings",
    shortDescription: "IP68 waterproof high-pressure die-cast aluminum terminal box with molded neoprene sealing gasket, brass cable glands, and BMC 6-pin terminal block.",
    fullDescription: "Engineered to safeguard water pump motors and outdoor machinery against heavy water ingress, submersion, dust, and corrosive industrial atmospheres. Cast in ADC12 aluminum with reinforcement gussets and stainless steel captive cover screws. Equipped with flame-retardant BMC 6-pin terminal blocks rated up to 690V / 200A.",
    images: [
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80"
    ],
    priceMode: "Starting from",
    price: 920,
    unit: "Piece",
    moq: "50 Pieces",
    leadTime: "6 - 10 Days",
    customizationAvailable: true,
    specs: {
      "Ingress Protection": "IP68 Waterproof Submersion Tested",
      "Cable Gland Entries": "Dual M20, M25, or M32 Metric Knockouts",
      "Terminal Block": "6-Post BMC / Ceramic with Brass Links (M5 to M12)",
      "Voltage Rating": "Up to 690V AC / 1000V DC"
    },
    applications: [
      "Submersible & Monoblock Water Pump Electrical Terminations",
      "Washdown Duty Motors for Food & Beverage Processing",
      "Outdoor Wastewater & Irrigation Pump Panels"
    ],
    features: [
      "Captive stainless steel M5 lid screws prevent loss during maintenance",
      "Neoprene grooved seal maintains waterproof gasket compression over 20+ years",
      "Integrated earth stud with internal copper bonding ground strap"
    ],
    materials: ["ADC12 Aluminum Alloy", "Ductile Cast Iron", "BMC Composite"],
    downloads: [
      { title: "Terminal Box Gland Layout & Mounting Footprint (PDF)", type: "PDF", size: "1.1 MB", filename: "terminal-box-ip66-dwg.pdf" }
    ],
    faqs: [
      { question: "Can you provide custom threaded entries (NPT or Pg)?", answer: "Yes, we CNC drill and tap NPT or Pg entries to match project specifications." }
    ],
    status: "Active",
    viewsCount: 1540,
    enquiriesCount: 71
  },

  // 11. ASME High-Pressure Flange
  {
    id: "prod-eng-001",
    name: "Heavy Duty CNC Machined Weldneck Flange Class 300 / 600",
    slug: "cnc-machined-weldneck-flange-class-300",
    sku: "PRC-FLG-WN300",
    productCode: "FLG-300-SS316",
    industryId: "industrial-motor-parts",
    industryName: "Industrial Water Motor Parts & Fluid Equipment",
    categoryId: "mechanical-seals-valves",
    categoryName: "Mechanical Shaft Seals, Flanges & Valves",
    shortDescription: "Precision CNC turned ASME B16.5 forged stainless steel 316L weldneck flange designed for high-pressure process pipelines and pump headers.",
    fullDescription: "Manufactured from certified forged ASTM A182 F316/316L dual grade material. Each flange undergoes CNC face turning with serrated spiral phonographic finish (125-250 Ra). Fully inspected on Zeiss 3D CMM with ultrasonic testing certificates for high-integrity water treatment and refinery installations.",
    images: [
      "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80"
    ],
    priceMode: "Request Quote",
    price: 4500,
    unit: "Piece",
    moq: "25 Pieces",
    leadTime: "10 - 14 Days",
    customizationAvailable: true,
    specs: {
      "Nominal Pipe Size": "4 Inch (DN100) to 24 Inch (DN600)",
      "Pressure Class": "Class 300 / 600 (ASME B16.5)",
      "Material Grade": "SS 316 / 316L Dual Certified",
      "Facing Type": "Raised Face (RF) Serrated Phonographic (125-250 Ra)",
      "Machining Tolerance": "±0.05 mm on bore and PCD bolt circle"
    },
    applications: ["Water Distribution Mains", "Petrochemical Refineries", "Steam Boilers", "High-Pressure Process Piping"],
    features: [
      "Forged seamless raw material with complete heat number traceability",
      "High corrosion resistance against chlorides and sour gas",
      "CNC drilled bolt holes for exact pipeline fitment without site re-drilling"
    ],
    materials: ["Stainless Steel 316L", "Carbon Steel A105", "Duplex 2205"],
    downloads: [
      { title: "Technical Drawing & Dimensions (PDF)", type: "PDF", size: "1.4 MB", filename: "weldneck-flange-class300-dwg.pdf" }
    ],
    faqs: [
      { question: "Can you supply custom schedule thicknesses?", answer: "Yes, we custom turn weldneck flanges to match Schedule 40, 80, or 160." }
    ],
    status: "Active",
    viewsCount: 1420,
    enquiriesCount: 84
  },

  // 12. 5-Axis CNC Water Turbine Closed Impeller
  {
    id: "prod-cnc-002",
    name: "5-Axis CNC Machined High-Pressure Gas/Water Turbine Impeller",
    slug: "5-axis-cnc-machined-turbine-impeller",
    sku: "PRC-5AX-IMP718",
    productCode: "IMP-718-TI5",
    industryId: "precision-machining",
    industryName: "Precision CNC Machining",
    categoryId: "5-axis-complex",
    categoryName: "5-Axis Precision Machined Impellers & Tooling",
    shortDescription: "Simultaneous 5-axis continuous milled bladed impeller in aerospace-grade Titanium Ti-6Al-4V and Inconel 718 with dynamic balancing.",
    fullDescription: "Machined from solid forged billet on Mazak Integrex 5-axis multi-tasking centers. Aerodynamic airfoil contours are continuous-milled within ±0.005mm surface profile accuracy. Every rotor undergoes high-speed dynamic balancing (ISO 1940 Grade G1.0) and fluorescent penetrant testing (FPI Level 3) for zero aerodynamic cavitation.",
    images: [
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1000&q=80"
    ],
    priceMode: "Request Quote",
    price: 18500,
    unit: "Unit",
    moq: "2 Units",
    leadTime: "18 - 25 Days",
    customizationAvailable: true,
    specs: {
      "Outer Diameter": "Ø120 mm to Ø650 mm",
      "Blade Profile Tolerance": "±0.005 mm (5 Microns)",
      "Surface Roughness": "Ra 0.4 µm (Superfinished)",
      "Dynamic Balancing": "ISO 1940 Grade G1.0 at 24,000 RPM"
    },
    applications: ["Hydro Turbine Power Generation", "Centrifugal Gas Compressors", "High-Pressure Turbochargers"],
    features: [
      "Machined from monobloc forged billet for maximum rotational strength",
      "Zero weld seams eliminating stress riser fatigue failure",
      "Full 3D scan inspection overlay with CAD nominal comparison"
    ],
    materials: ["Titanium Grade 5 (Ti-6Al-4V)", "Inconel 718", "Aircraft Aluminum 7075-T6"],
    downloads: [
      { title: "Aerodynamic Tolerance & CAD Envelope (PDF)", type: "PDF", size: "2.8 MB", filename: "turbine-impeller-cad-spec.pdf" }
    ],
    faqs: [
      { question: "What CAD formats do you accept for CAM toolpath programming?", answer: "We import native STEP, Parasolid (.x_t), IGES, and SolidWorks CAD models." }
    ],
    status: "Active",
    viewsCount: 2180,
    enquiriesCount: 112
  }
];
