import { Category } from "@/lib/types";

export const mockCategories: Category[] = [
  {
    id: "cnc-turned-components",
    name: "CNC Turned & Splined Components",
    slug: "cnc-turned-components",
    industryId: "precision-machining",
    industryName: "Precision CNC Machining",
    description: "High-precision CNC lathe turned components, splined drivetrain shafts, bearing journals, and ground spindles with sub-micron runout.",
    productCount: 16,
    image: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80",
    subcategories: ["Splined Shafts", "Precision Bushings", "Drivetrain Spindles", "Robotic Hubs"]
  },
  {
    id: "5-axis-complex",
    name: "5-Axis Complex Machined Parts",
    slug: "5-axis-complex",
    industryId: "precision-machining",
    industryName: "Precision CNC Machining",
    description: "Simultaneous 5-axis milled impellers, aerospace structural brackets, turbine blisks, and multi-faceted prismatic geometries.",
    productCount: 12,
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80",
    subcategories: ["Turbine Impellers", "Wing Rib Brackets", "Compressor Wheels", "5-Axis Housings"]
  },
  {
    id: "hydraulic-manifolds",
    name: "Hydraulic Manifolds & Valve Blocks",
    slug: "hydraulic-manifolds",
    industryId: "precision-machining",
    industryName: "Precision CNC Machining",
    description: "Gun-drilled high-pressure hydraulic manifold blocks, valve bodies, and fluid power cartridges rated to 400+ bar working pressure.",
    productCount: 9,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80",
    subcategories: ["Monoblock Manifolds", "Valve Trim Bodies", "Cavity Blocks", "Port Plates"]
  },
  {
    id: "pressure-flanges",
    name: "High-Pressure Flanges & Forgings",
    slug: "pressure-flanges",
    industryId: "precision-machining",
    industryName: "Precision CNC Machining",
    description: "ASME B16.5 & DIN forged weldneck, blind, slip-on, and custom contoured flanges machined in SS316L, Duplex 2205, and Alloy Steel.",
    productCount: 14,
    image: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80",
    subcategories: ["Weldneck Flanges", "Blind Flanges", "Orifice Assemblies", "High-Pressure Hubs"]
  },
  {
    id: "heavy-weldments",
    name: "Heavy Machine Weldments & Gantry Bases",
    slug: "heavy-weldments",
    industryId: "precision-machining",
    industryName: "Precision CNC Machining",
    description: "Vibration-stress relieved machine tool beds, hydraulic press frames, and CNC gantry milled foundation plates up to 40 metric tons.",
    productCount: 7,
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80",
    subcategories: ["VMC Machine Beds", "Press Crown Weldments", "Gantry Columns", "Tooling Plates"]
  },
  {
    id: "gears-housings",
    name: "Precision Gears & Bearing Housings",
    slug: "gears-housings",
    industryId: "precision-machining",
    industryName: "Precision CNC Machining",
    description: "Precision hobbed and ground helical, spur, and worm gears, alongside split trunnion heavy bearing blocks and planetary gear carriers.",
    productCount: 8,
    image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80",
    subcategories: ["Planetary Carriers", "Worm Gear Sets", "Split Pillow Blocks", "Internal Ring Gears"]
  },
  // Aliases for legacy IDs
  {
    id: "cnc-machined-parts",
    name: "CNC Machined Components",
    slug: "cnc-machined-parts",
    industryId: "precision-machining",
    industryName: "Precision CNC Machining",
    description: "Precision CNC milled and turned components with microns accuracy.",
    productCount: 16,
    image: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80",
    subcategories: ["CNC Flanges", "Splined Shafts", "Bearing Blocks", "Valve Bodies"]
  }
];
