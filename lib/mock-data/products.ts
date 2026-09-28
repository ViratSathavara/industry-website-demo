import { Product } from "@/lib/types";

export const mockProducts: Product[] = [
  // 1. ASME High-Pressure Flange
  {
    id: "prod-eng-001",
    name: "Heavy Duty CNC Machined Weldneck Flange Class 300 / 600",
    slug: "cnc-machined-weldneck-flange-class-300",
    sku: "PRC-FLG-WN300",
    productCode: "FLG-300-SS316",
    industryId: "precision-machining",
    industryName: "Precision CNC Machining",
    categoryId: "pressure-flanges",
    categoryName: "High-Pressure Flanges & Forgings",
    shortDescription: "Precision CNC turned ASME B16.5 forged stainless steel 316L weldneck flange designed for high-pressure process pipelines.",
    fullDescription: "Manufactured from certified forged ASTM A182 F316/316L dual grade material. Each flange undergoes CNC face turning with serrated spiral phonographic finish (125-250 Ra). Fully inspected on Zeiss 3D CMM with ultrasonic testing certificates for high-integrity chemical and refinery installations.",
    images: [
      "/images/components/flange-asme.svg"
    ],
    priceMode: "Request Quote",
    unit: "Piece",
    moq: "25 Pieces",
    leadTime: "10 - 14 Days",
    customizationAvailable: true,
    specs: {
      "Nominal Pipe Size": "4 Inch (DN100) to 24 Inch (DN600)",
      "Pressure Class": "Class 300 / 600 (ASME B16.5)",
      "Material Grade": "SS 316 / 316L Dual Certified",
      "Facing Type": "Raised Face (RF) Serrated Phonographic (125-250 Ra)",
      "Machining Tolerance": "±0.05 mm on bore and PCD bolt circle",
      "Inspection Standard": "100% Ultrasonic & Hydrostatic Tested"
    },
    applications: ["Petrochemical Refineries", "Offshore Oil Skids", "Steam Boilers", "High-Pressure Process Piping"],
    features: [
      "Forged seamless raw material with complete heat number traceability",
      "High corrosion resistance against chlorides and sour gas (NACE MR0175)",
      "CNC drilled bolt holes for exact pipeline fitment without site re-drilling",
      "Mill Test Certificate EN 10204 Type 3.1 provided with every dispatch"
    ],
    materials: ["Stainless Steel 316L", "Carbon Steel A105", "Duplex 2205", "Inconel 625"],
    downloads: [
      { title: "Technical Drawing & Dimensions (PDF)", type: "PDF", size: "1.4 MB", filename: "weldneck-flange-class300-dwg.pdf" },
      { title: "Material Test & Chemical Composition Report", type: "PDF", size: "840 KB", filename: "flange-material-spec-sheet.pdf" }
    ],
    faqs: [
      { question: "Can you manufacture custom bore thicknesses (Schedule 40/80/160)?", answer: "Yes, we custom turn weldneck flanges to match any required schedule thickness." },
      { question: "Do you supply third-party inspection (TUV / Bureau Veritas / DNV)?", answer: "Yes, we regularly facilitate 3.2 third party witness inspections." }
    ],
    status: "Active",
    viewsCount: 1420,
    enquiriesCount: 84
  },

  // 2. 5-Axis CNC Gas Turbine Impeller
  {
    id: "prod-cnc-002",
    name: "5-Axis CNC Machined Gas Turbine Closed Impeller",
    slug: "5-axis-cnc-machined-turbine-impeller",
    sku: "PRC-5AX-IMP718",
    productCode: "IMP-718-TI5",
    industryId: "precision-machining",
    industryName: "Precision CNC Machining",
    categoryId: "5-axis-complex",
    categoryName: "5-Axis Complex Machined Parts",
    shortDescription: "Simultaneous 5-axis continuous milled bladed impeller in aerospace-grade Titanium Ti-6Al-4V and Inconel 718 with dynamic balancing.",
    fullDescription: "Machined from solid forged billet on Mazak Integrex 5-axis multi-tasking centers. Aerodynamic airfoil contours are continuous-milled within ±0.005mm surface profile accuracy. Every rotor undergoes high-speed dynamic balancing (ISO 1940 Grade G1.0) and fluorescent penetrant testing (FPI Level 3) for zero aerodynamic cavitation.",
    images: [
      "/images/components/impeller-5axis.svg"
    ],
    priceMode: "Request Quote",
    unit: "Unit",
    moq: "2 Units",
    leadTime: "18 - 25 Days",
    customizationAvailable: true,
    specs: {
      "Outer Diameter": "Ø120 mm to Ø650 mm",
      "Blade Profile Tolerance": "±0.005 mm (5 Microns)",
      "Surface Roughness": "Ra 0.4 µm (Superfinished)",
      "Dynamic Balancing": "ISO 1940 Grade G1.0 at 24,000 RPM",
      "NDT Testing": "ASTM E1417 Fluorescent Penetrant Inspection",
      "Machining Center": "5-Axis Simultaneous (Mazak / DMG MORI)"
    },
    applications: ["Aviation Turbofan Engines", "Centrifugal Gas Compressors", "Cryogenic Expansion Turbines", "High-Speed Turbochargers"],
    features: [
      "Machined from monobloc forged billet for maximum rotational strength",
      "Zero weld seams eliminating stress riser fatigue failure",
      "Full 3D scan inspection overlay with CAD nominal comparison",
      "Serialized balancing reports and vibration harmonic logs"
    ],
    materials: ["Titanium Grade 5 (Ti-6Al-4V)", "Inconel 718", "Aircraft Aluminum 7075-T6", "17-4 PH Stainless"],
    downloads: [
      { title: "Aerodynamic Tolerance & CAD Envelope (PDF)", type: "PDF", size: "2.8 MB", filename: "turbine-impeller-cad-spec.pdf" },
      { title: "Dynamic Balancing & FPI NDT Certification", type: "PDF", size: "950 KB", filename: "impeller-balancing-cert.pdf" }
    ],
    faqs: [
      { question: "What CAD formats do you accept for CAM toolpath programming?", answer: "We import native STEP, Parasolid (.x_t), IGES, and SolidWorks CAD models directly into Mastercam / Hypermill." },
      { question: "Can you provide overspeed spin testing certification?", answer: "Yes, we partner with certified spin-pit testing facilities for 120% proof spin verification." }
    ],
    status: "Active",
    viewsCount: 2180,
    enquiriesCount: 112
  },

  // 3. High-Precision Turned Spline Shaft
  {
    id: "prod-cnc-003",
    name: "High-Precision Induction Hardened Spline Shaft",
    slug: "precision-induction-hardened-spline-shaft",
    sku: "PRC-TRN-SPL400",
    productCode: "SFT-SPL-EN353",
    industryId: "precision-machining",
    industryName: "Precision CNC Machining",
    categoryId: "cnc-turned-components",
    categoryName: "CNC Turned & Splined Components",
    shortDescription: "CNC turned and precision-hobbed involute spline shaft with case induction hardening (58-62 HRC) and sub-micron cylindrical ground journals.",
    fullDescription: "Engineered for automotive transmissions, heavy tractors, and industrial gearboxes. Features precision CNC turned bearing steps, hobbed involute splines (DIN 5480 standard), case carburized or induction hardened wear zones, and finished on CNC cylindrical grinders ensuring total radial runout under 0.004mm.",
    images: [
      "/images/components/spline-shaft.svg"
    ],
    priceMode: "Request Quote",
    unit: "Piece",
    moq: "50 Pieces",
    leadTime: "12 - 16 Days",
    customizationAvailable: true,
    specs: {
      "Length Capacity": "Up to 1500 mm",
      "Shaft Diameter": "Ø25 mm to Ø180 mm",
      "Spline Standard": "DIN 5480 / ANSI B92.1 / Involute & Straight",
      "Case Hardness": "58 - 62 HRC (Case Depth 1.8 - 2.5 mm)",
      "Journal Runout": "< 0.004 mm (Cylindrical Ground)",
      "Surface Finish": "Ra 0.2 µm on bearing seat journals"
    },
    applications: ["Automotive Transmissions", "Tractor Rear Axles", "Earthmoving Differential Drives", "Wind Turbine Pitch Drives"],
    features: [
      "Case carburized core ensures high torsional toughness without brittle fracture",
      "Zeiss CMM gear-checker report verifying involute profile and lead error",
      "Custom spline profiles (crown-hobbed to reduce edge contact stress)",
      "Induction hardening localized to bearing journals and spline teeth"
    ],
    materials: ["Alloy Steel EN353", "20MnCr5", "EN24 / AISI 4340", "SAE 8620"],
    downloads: [
      { title: "Spline Data Sheet & Involute Specification (PDF)", type: "PDF", size: "1.2 MB", filename: "spline-shaft-tech-data.pdf" },
      { title: "Hardness Case Depth & Metallurgical Micrograph", type: "PDF", size: "780 KB", filename: "shaft-metallurgy-report.pdf" }
    ],
    faqs: [
      { question: "Can you match proprietary mating hub splines?", answer: "Yes, you can send us a physical mating sample or drawing, and we will wire-EDM or hob to precise class fit." }
    ],
    status: "Active",
    viewsCount: 1640,
    enquiriesCount: 76
  },

  // 4. Custom 4-Port Hydraulic Manifold Block
  {
    id: "prod-cnc-004",
    name: "Custom 4-Port High-Pressure Hydraulic Manifold Block",
    slug: "high-pressure-hydraulic-manifold-block",
    sku: "PRC-HYD-MNF400",
    productCode: "MNF-400-DI",
    industryId: "precision-machining",
    industryName: "Precision CNC Machining",
    categoryId: "hydraulic-manifolds",
    categoryName: "Hydraulic Manifolds & Valve Blocks",
    shortDescription: "Gun-drilled solid ductile iron & aerospace aluminum hydraulic manifold block rated to 420 bar with SUN / Rexroth cavity cavities.",
    fullDescription: "Machined from high-density continuous cast ductile iron (GGG40) or 6061-T6 aluminum. Deep-hole gun-drilled cross passages are high-pressure water deburred and chemically passivated to prevent internal metal particulate contamination. Pressure proof-tested to 1.5x working pressure with zero internal valve cross-port leakage.",
    images: [
      "/images/components/manifold-block.svg"
    ],
    priceMode: "Request Quote",
    unit: "Unit",
    moq: "5 Units",
    leadTime: "10 - 15 Days",
    customizationAvailable: true,
    specs: {
      "Operating Pressure": "Up to 420 Bar (6,000 PSI)",
      "Cavity Standards": "SUN Hydraulics, Bosch Rexroth, Parker Standard Cavities",
      "Port Connections": "SAE O-Ring Boss (ORB) / BSPP / Metric",
      "Deburring Standard": "High-Pressure Waterjet & Thermal Deburring (TEM)",
      "Proof Pressure Test": "1.5x Operating Pressure (630 Bar Hydrostatic)",
      "Cleanliness Level": "ISO 4406 16/14/11 Certified"
    },
    applications: ["Plastic Injection Molding Machines", "Mobile Hydraulic Cranes", "Marine Steering Gear", "CNC Hydraulic Power Units"],
    features: [
      "Zero cross-port drilling errors verified via endoscope and hydraulic flow test",
      "Zinc nickel plated or hard anodized for corrosion resistance in salty environments",
      "Integrated test points (Minimess) for rapid pressure troubleshooting",
      "100% flushed and sealed with plastic protective transit plugs"
    ],
    materials: ["Ductile Iron GGG40", "Aerospace Aluminum 6061-T6", "Carbon Steel C45", "Stainless Steel 316"],
    downloads: [
      { title: "Hydraulic Circuit Schematic & Cavity Map (PDF)", type: "PDF", size: "1.9 MB", filename: "hydraulic-manifold-schematic.pdf" },
      { title: "Pressure Proof Test & ISO Cleanliness Certificate", type: "PDF", size: "620 KB", filename: "manifold-cleanliness-cert.pdf" }
    ],
    faqs: [
      { question: "Do you supply the cartridge valves installed or bare manifold?", answer: "We can supply either bare machined manifold blocks or fully assembled and tested units with customer-specified valves." }
    ],
    status: "Active",
    viewsCount: 1890,
    enquiriesCount: 95
  },

  // 5. Heavy Fabricated Machine Base Frame
  {
    id: "prod-eng-002",
    name: "Heavy Fabricated Machine Base Frame with Stress Relieving",
    slug: "heavy-fabricated-machine-base-frame",
    sku: "PRC-STR-BASE400",
    productCode: "BASE-400-MS",
    industryId: "precision-machining",
    industryName: "Precision CNC Machining",
    categoryId: "heavy-weldments",
    categoryName: "Heavy Machine Weldments & Gantry Bases",
    shortDescription: "Vibration-damped structural steel base frame designed for high-tonnage machine tools with thermal stress relieving and gantry milling.",
    fullDescription: "Constructed from IS 2062 Grade E250 heavy structural I-beams and reinforced box sections. All joints are full penetration Submerged Arc and MIG welded by ASME Section IX qualified welders. Undergoes thermal stress relieving in a computerized furnace at 600°C followed by CNC 5-face gantry milling for flat guide rail mounting pads within 0.03mm flatness.",
    images: [
      "/images/components/machine-base.svg"
    ],
    priceMode: "Request Quote",
    unit: "Unit",
    moq: "1 Unit",
    leadTime: "21 - 30 Days",
    customizationAvailable: true,
    specs: {
      "Overall Dimensions": "Up to 8000 mm Length x 3200 mm Width x 2200 mm Height",
      "Weight Capacity": "Payload up to 50 Metric Tons",
      "Welding Standard": "AWS D1.1 / ASME Section IX Qualified Welders",
      "Heat Treatment": "Computerized Furnace Stress Relieving at 600°C",
      "Machining Flatness": "0.03 mm on linear guide rail mounting surfaces",
      "Surface Coating": "Shot Blasted SA 2.5 + Epoxy Primer (150 microns)"
    },
    applications: ["CNC VMC / HMC Machine Mounts", "Hydraulic Press Beds", "Turbine Skids", "Stamping Press Bolster Plates"],
    features: [
      "Diagonal internal ribbing prevents dynamic resonance and thermal distortion",
      "Laser tracker dimensional verification before and after stress relieving",
      "Integrated leveling jack bolts and foundation grout anchoring pockets",
      "Certified lifting trunnions load-tested to 150% rated payload"
    ],
    materials: ["Structural Mild Steel IS 2062 Gr E250/E350", "Heavy Plates up to 100mm thickness"],
    downloads: [
      { title: "Fabrication Capability & Inspection Plan (PDF)", type: "PDF", size: "2.1 MB", filename: "machine-base-fabrication-plan.pdf" },
      { title: "Furnace Heat Chart & Stress Relieving Graph", type: "PDF", size: "1.1 MB", filename: "heat-treatment-chart.pdf" }
    ],
    faqs: [
      { question: "Can you machine linear rail guide mounting keyways?", answer: "Yes, our 8-meter CNC gantry mill machines guide rail steps and tapped holes in a single setup for absolute parallelism." }
    ],
    status: "Active",
    viewsCount: 980,
    enquiriesCount: 52
  },

  // 6. Aerospace Billet Wing Rib Bracket
  {
    id: "prod-cnc-006",
    name: "Aerospace Structural Wing Rib Bracket (7075-T6 Billet)",
    slug: "aerospace-structural-wing-rib-bracket",
    sku: "PRC-AERO-RIB7075",
    productCode: "RIB-7075-T6",
    industryId: "precision-machining",
    industryName: "Precision CNC Machining",
    categoryId: "5-axis-complex",
    categoryName: "5-Axis Complex Machined Parts",
    shortDescription: "Ultra-lightweight monolithic 5-axis CNC pocket-milled aerospace bracket with 1.2mm thin walls and MIL-A-8625 Type III hard anodizing.",
    fullDescription: "Machined from certified AMS 4045 aerospace aluminum 7075-T6 solid forged billet. High-speed 24,000 RPM spindles mill ultra-thin pockets down to 1.2mm wall thickness without chatter or residual stress warp. Every part is 100% CMM probed, conductivity tested, and hard anodized with Teflon seal for harsh atmospheric conditions.",
    images: [
      "/images/components/wing-rib.svg"
    ],
    priceMode: "Request Quote",
    unit: "Piece",
    moq: "10 Pieces",
    leadTime: "14 - 18 Days",
    customizationAvailable: true,
    specs: {
      "Material Spec": "AMS 4045 Aluminum 7075-T6 Forged Plate",
      "Minimum Wall Thickness": "1.2 mm without distortion",
      "Geometric Tolerance": "±0.01 mm True Position on bolt patterns",
      "Surface Treatment": "MIL-A-8625 Type III Class 1 Hard Anodized (50 µm)",
      "Quality Standard": "AS9100D Aerospace Certified",
      "Traceability": "Full raw material heat lot & ultrasonic inspection report"
    },
    applications: ["Commercial Aircraft Flap Tracks", "UAV Airframes", "Satellite Structural Mounts", "Defense Radar Enclosures"],
    features: [
      "92% raw material weight reduction through high-speed pocket milling",
      "Electrical conductivity verified per Boeing / Airbus supplier specs",
      "Laser engraved part number, revision number, and QR tracking code",
      "First Article Inspection Report (FAIR per AS9102 Rev B) provided"
    ],
    materials: ["Aerospace Aluminum 7075-T651", "Aluminum 6061-T651", "Titanium Ti-6Al-4V"],
    downloads: [
      { title: "Aerospace FAIR AS9102 Sample Report (PDF)", type: "PDF", size: "3.4 MB", filename: "aerospace-fair-sample.pdf" }
    ],
    faqs: [
      { question: "Do you supply AS9102 First Article Inspection documentation?", answer: "Yes, our quality department generates complete FAIR reports with bubbled drawings and CMM coordinate logs." }
    ],
    status: "Active",
    viewsCount: 1530,
    enquiriesCount: 68
  },

  // 7. Double Enveloping Worm Gear Set
  {
    id: "prod-cnc-007",
    name: "Precision Double-Enveloping Worm Gear & Shaft Assembly",
    slug: "precision-double-enveloping-worm-gear",
    sku: "PRC-GR-WRM24",
    productCode: "WRM-PB2-EN24",
    industryId: "precision-machining",
    industryName: "Precision CNC Machining",
    categoryId: "gears-housings",
    categoryName: "Precision Gears & Bearing Housings",
    shortDescription: "High-torque phosphor bronze PB2 concave worm wheel and case hardened EN24 ground worm shaft set machined to AGMA Class 11 precision.",
    fullDescription: "Designed for heavy industrial elevator hoists, solar tracker slewing drives, and rotary index tables. The double-enveloping hourglass geometry provides 3x greater tooth contact area compared to cylindrical worm sets, resisting extreme shock loads. Precision tooth contact pattern is verified with Prussian blue dye transfer.",
    images: [
      "/images/components/worm-gear.svg"
    ],
    priceMode: "Request Quote",
    unit: "Set",
    moq: "4 Sets",
    leadTime: "15 - 20 Days",
    customizationAvailable: true,
    specs: {
      "Gear Ratio Range": "5:1 to 70:1",
      "Wheel Material": "Centrifugally Cast Phosphor Bronze BS1400 PB2",
      "Worm Shaft Material": "Alloy Steel EN24T / Case Carburized EN353",
      "Tooth Accuracy": "AGMA Class 11 / DIN Class 6",
      "Backlash": "< 0.05 mm (Adjustable Low Backlash)",
      "Contact Area": "> 80% Tooth Flank Contact verified"
    },
    applications: ["Solar PV Dual-Axis Slewing Drives", "Mining Winches & Hoists", "Rotary CNC Index Tables", "Steering Worm Gears"],
    features: [
      "Hourglass worm wraps around gear for multi-tooth load sharing",
      "Superior resistance to catastrophic tooth stripping under shock loads",
      "Ground worm thread profile polished to Ra 0.2 µm for high mechanical efficiency",
      "Supplied as matched, serialized sets with tooth contact charts"
    ],
    materials: ["Phosphor Bronze PB2", "Aluminum Bronze AB2", "Alloy Steel EN24", "EN353"],
    downloads: [
      { title: "Gear Tooth Geometry & AGMA Inspection Chart (PDF)", type: "PDF", size: "1.7 MB", filename: "worm-gear-inspection.pdf" }
    ],
    faqs: [
      { question: "Can you supply low-backlash sets for robotic positioning?", answer: "Yes, we produce split dual-lead worm drives with near-zero backlash for precision indexing." }
    ],
    status: "Active",
    viewsCount: 1120,
    enquiriesCount: 44
  },

  // 8. Cryogenic High-Pressure Valve Body
  {
    id: "prod-cnc-008",
    name: "Cryogenic Stainless Steel High-Pressure Globe Valve Body",
    slug: "cryogenic-stainless-high-pressure-valve-body",
    sku: "PRC-VLV-CRYO316",
    productCode: "VLV-CF8M-800",
    industryId: "precision-machining",
    industryName: "Precision CNC Machining",
    categoryId: "hydraulic-manifolds",
    categoryName: "Hydraulic Manifolds & Valve Blocks",
    shortDescription: "Investment cast & CNC multi-axis machined ASTM A351 CF8M cryogenic valve body tested for LNG service down to -196°C.",
    fullDescription: "Cast from certified ASTM A351 Grade CF8M (316) stainless steel and machined on horizontal machining centers (HMC) with rotary tombstones. Seat faces and packing glands are micro-turned and Stellite hard-faced to ensure tight ISO 5208 Rate A zero leakage during cryogenic LNG and liquid nitrogen service.",
    images: [
      "/images/components/valve-body.svg"
    ],
    priceMode: "Request Quote",
    unit: "Piece",
    moq: "15 Pieces",
    leadTime: "16 - 22 Days",
    customizationAvailable: true,
    specs: {
      "Valve Size": "DN15 to DN200 (1/2\" to 8\")",
      "Pressure Rating": "Class 150 / 300 / 600 / 800",
      "Service Temperature": "-196°C to +250°C",
      "Seat Leakage Standard": "ISO 5208 Rate A (Bubble Tight)",
      "Helium Leak Rate": "< 1 x 10⁻⁶ mbar·l/s",
      "Casting Standard": "ASTM A351 CF8M / CF3M Radiography Level 2"
    },
    applications: ["LNG Terminals & Bunkering", "Liquid Nitrogen Cryo Tanks", "Hydrogen Fueling Stations", "Specialty Gas Piping"],
    features: [
      "Stellite Grade 6 weld-overlay on seat sealing faces for anti-galling",
      "Extended bonnet neck design keeps stem packing warm above freezing",
      "Liquid nitrogen immersion testing capability on request",
      "Hydrostatic shell test per API 598 at 1.5x cold working pressure"
    ],
    materials: ["Cast SS CF8M (316)", "CF3M (316L)", "Forged F316L", "Monel 400"],
    downloads: [
      { title: "Cryogenic Valve Body Dimension & Pressure Ratings (PDF)", type: "PDF", size: "2.3 MB", filename: "cryo-valve-spec-sheet.pdf" }
    ],
    faqs: [
      { question: "Are these valve bodies suitable for liquid hydrogen?", answer: "Yes, with electropolished internal flow passages and helium leak verification per BS 6364." }
    ],
    status: "Active",
    viewsCount: 1410,
    enquiriesCount: 62
  },

  // 9. Robotic Harmonic Reducer Hub
  {
    id: "prod-cnc-009",
    name: "Robotic Arm 6th-Axis Harmonic Reducer Flange Hub",
    slug: "robotic-arm-harmonic-reducer-flange-hub",
    sku: "PRC-ROB-HUB42",
    productCode: "HUB-42CR-ROB",
    industryId: "precision-machining",
    industryName: "Precision CNC Machining",
    categoryId: "cnc-turned-components",
    categoryName: "CNC Turned & Splined Components",
    shortDescription: "Ultra-precision hardened alloy steel output flange hub for industrial 6-axis articulated robot wrists with axial runout under 0.003mm.",
    fullDescription: "Machined from vacuum-degassed 42CrMo4 alloy steel. After rough turning and deep stress-relief annealing, critical bearing seats and bolt circles are finished on high-precision CNC hard-turning lathes and cylindrical grinders using CBN inserts. Designed to withstand repetitive dynamic torque reversals in automotive welding robots.",
    images: [
      "/images/components/robot-hub.svg"
    ],
    priceMode: "Request Quote",
    unit: "Piece",
    moq: "20 Pieces",
    leadTime: "12 - 18 Days",
    customizationAvailable: true,
    specs: {
      "Outer Diameter": "Ø90 mm to Ø320 mm",
      "Axial Runout": "< 0.003 mm (3 Microns)",
      "Radial Runout": "< 0.003 mm",
      "Hardness": "HRC 32 - 36 (Core) / HRC 54 - 58 (Bearing Track)",
      "Mounting Flange": "ISO 9409-1 Robot Tool Flange Standard",
      "Inspection": "100% Zeiss CMM Geometric Dimensioning & Tolerancing (GD&T)"
    },
    applications: ["Automotive Spot Welding Robots", "Cobot Articulated Arm Wrists", "Semiconductor Wafer Handlers", "CNC 4th-Axis Rotary Tables"],
    features: [
      "Precision ground spigot locator for exact tool changer repeatability",
      "Electroless nickel plating (25 µm) protects against shop floor coolant mist",
      "Threaded holes tapped with thread-forming taps for high pull-out strength",
      "Pre-balanced for high-speed robotic tool repositioning"
    ],
    materials: ["Alloy Steel 42CrMo4", "AISI 4340", "Stainless Steel 17-4PH", "Hardox 450"],
    downloads: [
      { title: "ISO 9409-1 Flange Interface Drawing (PDF)", type: "PDF", size: "1.5 MB", filename: "robot-wrist-flange-dwg.pdf" }
    ],
    faqs: [
      { question: "Is this hub compatible with Harmonic Drive or Nabtesco gearboxes?", answer: "Yes, we custom turn the mounting bolt circle to match CSF, CSG, or RV gearbox pilot diameters." }
    ],
    status: "Active",
    viewsCount: 1720,
    enquiriesCount: 88
  },

  // 10. Split Trunnion Bearing Housing
  {
    id: "prod-cnc-010",
    name: "Split Trunnion Bearing Housing for Heavy Mining Ball Mills",
    slug: "split-trunnion-bearing-housing-mining",
    sku: "PRC-HSG-TRN800",
    productCode: "HSG-800-WCB",
    industryId: "precision-machining",
    industryName: "Precision CNC Machining",
    categoryId: "gears-housings",
    categoryName: "Precision Gears & Bearing Housings",
    shortDescription: "Heavy cast steel split pillow block bearing housing with hydrodynamic oil-film labyrinth seals for heavy mining SAG and ball mills.",
    fullDescription: "Cast from high-toughness ASTM A216 Grade WCB steel and machined on heavy CNC horizontal boring machines. Joint faces are matched-pair serrated and line-bored in a clamped state to guarantee exact spherical bearing seat alignment under 200-ton dynamic crushing loads. Includes integrated RTD temperature sensor ports and oil circulation conduits.",
    images: [
      "/images/components/trunnion-housing.svg"
    ],
    priceMode: "Request Quote",
    unit: "Unit",
    moq: "1 Unit",
    leadTime: "25 - 35 Days",
    customizationAvailable: true,
    specs: {
      "Shaft Bore Diameter": "Ø240 mm to Ø850 mm",
      "Housing Weight": "Up to 8,500 Kg per half assembly",
      "Material Grade": "Cast Steel ASTM A216 WCB / GS-45",
      "Machining Tolerance": "H7 Bore Tolerance (Line-bored in clamped state)",
      "Sealing Arrangement": "Taconite Multi-Labyrinth with Grease Purge",
      "NDT Testing": "100% Magnetic Particle & Ultrasonic Testing"
    },
    applications: ["Copper & Gold Mining Ball Mills", "Cement Clinker Grinding Mills", "Rotary Calciners", "Heavy Roller Presses"],
    features: [
      "Line-bored in paired assembly prevents bearing outer ring misalignment",
      "Heavy base mounting pads stress-relieved to prevent foundation cocking",
      "Internal oil distribution reservoirs for continuous hydrodynamic lubrication",
      "Supplied with dowel alignment pins and zinc-coated heavy stud hardware"
    ],
    materials: ["Cast Steel WCB", "Nodular Ductile Iron GGG60", "Forged Steel C45"],
    downloads: [
      { title: "Trunnion Housing Assembly & Foundation Loading (PDF)", type: "PDF", size: "2.6 MB", filename: "trunnion-housing-drawing.pdf" }
    ],
    faqs: [
      { question: "Can you provide line boring on existing refurbished castings?", answer: "Yes, our large horizontal boring machines can sleeve and re-bore damaged housings back to OEM factory tolerances." }
    ],
    status: "Active",
    viewsCount: 890,
    enquiriesCount: 38
  },

  // 11. Induction Hardened Excavator Pivot Pins
  {
    id: "prod-cnc-011",
    name: "Heavy Duty Heat-Treated Excavator Arm Pivot Pin & Bushing Set",
    slug: "heavy-duty-excavator-pivot-pin-bushing",
    sku: "PRC-PIN-EX400",
    productCode: "PIN-4140-IND",
    industryId: "precision-machining",
    industryName: "Precision CNC Machining",
    categoryId: "cnc-turned-components",
    categoryName: "CNC Turned & Splined Components",
    shortDescription: "Induction hardened 4140 chrome-moly excavator boom pivot pins (60 HRC, 3.5mm case depth) paired with grease-grooved hardened steel bushings.",
    fullDescription: "Manufactured for heavy earthmoving machinery (20-ton to 80-ton hydraulic excavators). Made from forged 42CrMo4/AISI 4140 alloy steel, precision CNC turned, gun-drilled with internal grease channels, induction hardened to 58-62 HRC, and centerless ground to mirror finish Ra 0.2µm to maximize seal and bushing life.",
    images: [
      "/images/components/pivot-pin.svg"
    ],
    priceMode: "Request Quote",
    unit: "Set",
    moq: "10 Sets",
    leadTime: "8 - 12 Days",
    customizationAvailable: true,
    specs: {
      "Pin Diameter": "Ø60 mm to Ø180 mm",
      "Pin Length": "350 mm to 1200 mm",
      "Surface Hardness": "58 - 62 HRC (Case Depth: 3.0 - 4.5 mm)",
      "Core Hardness": "28 - 32 HRC (High Toughness Impact Resistance)",
      "Surface Finish": "Ra 0.2 µm (Superfinished Centerless Ground)",
      "Grease Port": "Gun-drilled axial and radial lubrication cross holes"
    },
    applications: ["Mining Excavator Booms & Buckets", "Wheel Loader Lift Arms", "Demolition Hydraulic Shears", "Forestry Harvesters"],
    features: [
      "Deep induction case depth resists heavy gouging from rock dust and gravel",
      "High core toughness prevents sudden catastrophic pin shearing under shock loads",
      "Induction hardened grease-retaining spiral grooves inside matching bushings",
      "Cross-drilled cross-holes radiused and chamfered to prevent stress cracking"
    ],
    materials: ["Forged 42CrMo4 / AISI 4140", "Case Hardened 20MnCr5", "High Carbon 1045"],
    downloads: [
      { title: "Excavator Pin Interchange Chart & Sizing Guide (PDF)", type: "PDF", size: "1.1 MB", filename: "excavator-pin-catalog.pdf" }
    ],
    faqs: [
      { question: "Can you supply custom pin lengths for special excavator attachments?", answer: "Yes, we custom turn pin lengths and retention collars to fit any custom quick-coupler or hydraulic breaker." }
    ],
    status: "Active",
    viewsCount: 1340,
    enquiriesCount: 72
  },

  // 12. Modular CNC Tooling Tombstone Fixture
  {
    id: "prod-cnc-012",
    name: "Modular CNC Tooling Sub-Plate & Tombstone Fixture",
    slug: "modular-cnc-tombstone-tooling-fixture",
    sku: "PRC-FIX-TMB500",
    productCode: "TMB-500-CI",
    industryId: "precision-machining",
    industryName: "Precision CNC Machining",
    categoryId: "heavy-weldments",
    categoryName: "Heavy Machine Weldments & Gantry Bases",
    shortDescription: "Cast iron 4-sided hollow tombstone fixture with 50mm grid precision-ground bushings and M16 tapped holes for horizontal machining centers (HMC).",
    fullDescription: "Cast from stress-relieved high-density gray iron (Grade 300) with heavy internal cross-ribbing to absorb cutting vibrations. Mounted on standard 400mm, 500mm, or 630mm JIS pallet bases. All four working faces are ground square and parallel within 0.01mm over 600mm height, allowing multi-part batch machining on 4th-axis HMCs.",
    images: [
      "/images/components/tombstone-fixture.svg"
    ],
    priceMode: "Request Quote",
    unit: "Unit",
    moq: "1 Unit",
    leadTime: "14 - 20 Days",
    customizationAvailable: true,
    specs: {
      "Pallet Sizes": "400 x 400 mm / 500 x 500 mm / 630 x 630 mm (JIS Standards)",
      "Height Range": "500 mm to 900 mm",
      "Squareness & Parallelism": "< 0.01 mm per 500 mm height",
      "Grid Spacing": "50 mm ± 0.01 mm pitch with hardened steel bushings & M16 threads",
      "Material": "Close-Grained Cast Iron FC300 / Stress Relieved",
      "Weight": "450 Kg to 1,200 Kg"
    },
    applications: ["Horizontal Machining Centers (HMC)", "Automated Pallet Pool Systems", "Valve Body Batch Machining", "Automotive Engine Component Milling"],
    features: [
      "Heavy wall hollow section provides superior dynamic vibration damping",
      "Standard JIS B 6337 locating cone and edge keyway interfaces",
      "Custom grid or T-slot patterns engineered to customer workpiece fixtures",
      "Supplied with Zeiss CMM verification chart covering all 4 faces"
    ],
    materials: ["Class 40 High-Tensile Cast Iron", "Steel Weldment / Stress Relieved", "Aluminum 7075 Tooling Plate"],
    downloads: [
      { title: "Tombstone Grid Pattern & Pallet Interface Dimensions (PDF)", type: "PDF", size: "1.8 MB", filename: "tombstone-fixture-spec.pdf" }
    ],
    faqs: [
      { question: "Can you machine custom fixture mounting patterns onto the tombstone?", answer: "Yes, send us your workpiece clamping requirements and we will finish-machine dedicated locator pin pockets and clamp bolt grids." }
    ],
    status: "Active",
    viewsCount: 1040,
    enquiriesCount: 46
  }
];
