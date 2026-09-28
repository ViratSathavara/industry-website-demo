const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, '..', 'public', 'images', 'components');
const capabilitiesDir = path.join(__dirname, '..', 'public', 'images', 'capabilities');

if (!fs.existsSync(componentsDir)) fs.mkdirSync(componentsDir, { recursive: true });
if (!fs.existsSync(capabilitiesDir)) fs.mkdirSync(capabilitiesDir, { recursive: true });

function createBaseSVG(title, code, spec1, spec2, graphicContent) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="100%" height="100%" style="background:#070a12; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;">
  <defs>
    <pattern id="grid" width="25" height="25" patternUnits="userSpaceOnUse">
      <path d="M 25 0 L 0 0 0 25" fill="none" stroke="#121829" stroke-width="0.75"/>
    </pattern>
    <pattern id="grid-major" width="100" height="100" patternUnits="userSpaceOnUse">
      <rect width="100" height="100" fill="url(#grid)"/>
      <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#1b253d" stroke-width="1.2"/>
    </pattern>
    <linearGradient id="cyan-glow" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#00f2fe" stop-opacity="0.9"/>
      <stop offset="100%" stop-color="#4facfe" stop-opacity="0.8"/>
    </linearGradient>
    <linearGradient id="amber-glow" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.9"/>
      <stop offset="100%" stop-color="#d97706" stop-opacity="0.7"/>
    </linearGradient>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="3" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>

  <!-- Background Grid -->
  <rect width="800" height="500" fill="#070a12"/>
  <rect width="800" height="500" fill="url(#grid-major)"/>

  <!-- Outer Border Frame -->
  <rect x="15" y="15" width="770" height="470" fill="none" stroke="#1e293b" stroke-width="1.5"/>
  <rect x="20" y="20" width="760" height="460" fill="none" stroke="#334155" stroke-width="0.75" stroke-dasharray="8 4"/>

  <!-- Corner Brackets -->
  <path d="M 15 35 L 15 15 L 35 15" fill="none" stroke="#00f2fe" stroke-width="2.5"/>
  <path d="M 765 15 L 785 15 L 785 35" fill="none" stroke="#00f2fe" stroke-width="2.5"/>
  <path d="M 15 465 L 15 485 L 35 485" fill="none" stroke="#00f2fe" stroke-width="2.5"/>
  <path d="M 765 485 L 785 485 L 785 465" fill="none" stroke="#00f2fe" stroke-width="2.5"/>

  <!-- Title & Metadata Block Top Left -->
  <text x="35" y="45" font-size="11" font-weight="700" fill="#00f2fe" letter-spacing="1.5">INDUSTRIA CAD SYSTEM • MODEL 3D WIREFRAME</text>
  <text x="35" y="65" font-size="16" font-weight="900" fill="#f8fafc" letter-spacing="0.5">${title}</text>
  <text x="35" y="85" font-size="11" fill="#94a3b8">DWG REF: <tspan fill="#f59e0b" font-weight="700">${code}</tspan> | PROJECTION: THIRD ANGLE</text>

  <!-- Technical Parameters Top Right -->
  <rect x="580" y="30" width="185" height="58" rx="6" fill="#0c1322" stroke="#1e293b" stroke-width="1"/>
  <text x="592" y="50" font-size="10" fill="#64748b">PARAM 01: <tspan fill="#38bdf8" font-weight="700">${spec1}</tspan></text>
  <text x="592" y="70" font-size="10" fill="#64748b">TOLERANCE: <tspan fill="#10b981" font-weight="700">${spec2}</tspan></text>

  <!-- Center Artwork Content -->
  <g transform="translate(0, 20)">
    ${graphicContent}
  </g>

  <!-- Bottom Title Block / Cert Stamp -->
  <rect x="550" y="440" width="225" height="35" fill="#0b1120" stroke="#1e293b" stroke-width="1"/>
  <text x="562" y="455" font-size="9" fill="#94a3b8">VERIFICATION: <tspan fill="#10b981">ZEISS CMM INSPECTED</tspan></text>
  <text x="562" y="468" font-size="8.5" fill="#64748b">TRACEABILITY: EN 10204 TYPE 3.1</text>

  <!-- Status Indicator Bottom Left -->
  <circle cx="40" cy="455" r="4" fill="#10b981"/>
  <text x="52" y="459" font-size="10" fill="#cbd5e1" font-weight="600">3D CAD SOLID MODEL • CALIBRATED TO ±0.005mm</text>
</svg>`;
}

// 1. ASME High-Pressure Flange
const flangeSVG = createBaseSVG(
  "ASME B16.5 WELDNECK FLANGE",
  "DWG-FLG-300-WN",
  "CLASS 300 / 600 RF",
  "±0.05mm PCD",
  `
  <!-- Flange Body Cross Section & Face -->
  <g stroke="#00f2fe" stroke-width="1.8" fill="none" filter="url(#glow)">
    <!-- Outer Raised Face Hub -->
    <ellipse cx="400" cy="230" rx="190" ry="110" stroke="#00f2fe" stroke-width="2.5" fill="#00f2fe" fill-opacity="0.04"/>
    <ellipse cx="400" cy="230" rx="145" ry="85" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="6 3"/>
    <ellipse cx="400" cy="230" rx="110" ry="65" stroke="#f59e0b" stroke-width="2"/>
    <ellipse cx="400" cy="230" rx="65" ry="38" stroke="#00f2fe" stroke-width="2.5" fill="#070a12"/>
    
    <!-- Bolt Holes on Bolt Circle -->
    <circle cx="255" cy="230" r="10" fill="#070a12" stroke="#f59e0b" stroke-width="2"/>
    <circle cx="545" cy="230" r="10" fill="#070a12" stroke="#f59e0b" stroke-width="2"/>
    <circle cx="300" cy="170" r="10" fill="#070a12" stroke="#f59e0b" stroke-width="2"/>
    <circle cx="500" cy="170" r="10" fill="#070a12" stroke="#f59e0b" stroke-width="2"/>
    <circle cx="300" cy="290" r="10" fill="#070a12" stroke="#f59e0b" stroke-width="2"/>
    <circle cx="500" cy="290" r="10" fill="#070a12" stroke="#f59e0b" stroke-width="2"/>
    <circle cx="400" cy="145" r="10" fill="#070a12" stroke="#f59e0b" stroke-width="2"/>
    <circle cx="400" cy="315" r="10" fill="#070a12" stroke="#f59e0b" stroke-width="2"/>

    <!-- Weld Neck Taper -->
    <path d="M 335 268 L 350 360 L 450 360 L 465 268" stroke="#00f2fe" stroke-width="2" fill="none"/>
    <ellipse cx="400" cy="360" rx="50" ry="18" stroke="#00f2fe" stroke-width="2" fill="#070a12"/>
  </g>
  <!-- Centerlines -->
  <line x1="200" y1="230" x2="600" y2="230" stroke="#475569" stroke-width="1" stroke-dasharray="15 5 3 5"/>
  <line x1="400" y1="110" x2="400" y2="385" stroke="#475569" stroke-width="1" stroke-dasharray="15 5 3 5"/>

  <!-- Dimension Annotations -->
  <line x1="210" y1="80" x2="210" y2="230" stroke="#f59e0b" stroke-width="1"/>
  <line x1="590" y1="80" x2="590" y2="230" stroke="#f59e0b" stroke-width="1"/>
  <line x1="210" y1="90" x2="590" y2="90" stroke="#f59e0b" stroke-width="1"/>
  <text x="350" y="85" font-size="11" fill="#f59e0b" font-weight="700">OD: Ø450 ±0.1mm</text>
  `
);
fs.writeFileSync(path.join(componentsDir, 'flange-asme.svg'), flangeSVG);

// 2. 5-Axis CNC Impeller
const impellerSVG = createBaseSVG(
  "5-AXIS BLADED TURBINE IMPELLER",
  "DWG-5AX-IMP-718",
  "TI-6AL-4V / INCONEL 718",
  "±0.005mm PROFILE",
  `
  <g stroke="#00f2fe" stroke-width="1.8" fill="none" filter="url(#glow)">
    <!-- Central Hub -->
    <ellipse cx="400" cy="235" rx="55" ry="32" stroke="#f59e0b" stroke-width="2.5" fill="#f59e0b" fill-opacity="0.1"/>
    <ellipse cx="400" cy="235" rx="22" ry="13" stroke="#00f2fe" stroke-width="2" fill="#070a12"/>

    <!-- 12 Aerodynamic Curved Twisted Blades -->
    <path d="M 400 203 C 410 160 480 130 540 160 C 510 180 460 210 425 218" stroke="#00f2fe" stroke-width="2.2" fill="#00f2fe" fill-opacity="0.08"/>
    <path d="M 425 218 C 470 200 550 200 580 240 C 540 250 470 250 435 240" stroke="#00f2fe" stroke-width="2.2" fill="#00f2fe" fill-opacity="0.08"/>
    <path d="M 435 240 C 480 250 540 280 545 325 C 505 320 445 285 418 255" stroke="#00f2fe" stroke-width="2.2" fill="#00f2fe" fill-opacity="0.08"/>
    <path d="M 418 255 C 440 290 440 350 410 380 C 390 350 380 290 395 262" stroke="#00f2fe" stroke-width="2.2" fill="#00f2fe" fill-opacity="0.08"/>
    <path d="M 395 262 C 370 295 315 350 265 340 C 285 305 340 270 375 252" stroke="#00f2fe" stroke-width="2.2" fill="#00f2fe" fill-opacity="0.08"/>
    <path d="M 375 252 C 320 270 245 280 220 240 C 255 225 325 225 368 232" stroke="#00f2fe" stroke-width="2.2" fill="#00f2fe" fill-opacity="0.08"/>
    <path d="M 368 232 C 320 215 250 180 260 140 C 295 155 350 190 380 215" stroke="#00f2fe" stroke-width="2.2" fill="#00f2fe" fill-opacity="0.08"/>
    <path d="M 380 215 C 365 170 365 115 400 95 C 415 125 415 180 400 203" stroke="#00f2fe" stroke-width="2.2" fill="#00f2fe" fill-opacity="0.08"/>

    <!-- Shroud Outer Envelope Circle -->
    <ellipse cx="400" cy="235" rx="195" ry="115" stroke="#334155" stroke-width="1.2" stroke-dasharray="6 4"/>
  </g>

  <!-- Spindle Rotation Indicator -->
  <path d="M 480 100 A 150 85 0 0 1 560 170" fill="none" stroke="#f59e0b" stroke-width="2" stroke-dasharray="4 2"/>
  <polygon points="562,175 558,162 568,168" fill="#f59e0b"/>
  <text x="500" y="85" font-size="10" fill="#f59e0b" font-weight="700">18,000 RPM 5-AXIS MILLING</text>
  `
);
fs.writeFileSync(path.join(componentsDir, 'impeller-5axis.svg'), impellerSVG);

// 3. High-Precision Spline Shaft
const splineShaftSVG = createBaseSVG(
  "INDUCTION HARDENED SPLINE SHAFT",
  "DWG-SFT-SPL-EN353",
  "CASE HARDENED 60 HRC",
  "< 0.004mm RUNOUT",
  `
  <g stroke="#00f2fe" stroke-width="1.8" fill="none" filter="url(#glow)">
    <!-- Shaft Body Steps -->
    <!-- Left Journal -->
    <rect x="120" y="210" width="100" height="50" rx="3" fill="#00f2fe" fill-opacity="0.05" stroke="#00f2fe" stroke-width="2"/>
    <!-- Bearing Step -->
    <rect x="220" y="195" width="80" height="80" rx="3" fill="#00f2fe" fill-opacity="0.07" stroke="#00f2fe" stroke-width="2"/>
    <!-- Involute Spline Zone (Hatched) -->
    <rect x="300" y="180" width="180" height="110" rx="4" fill="#f59e0b" fill-opacity="0.1" stroke="#f59e0b" stroke-width="2.5"/>
    <!-- Spline Teeth Lines -->
    <line x1="300" y1="195" x2="480" y2="195" stroke="#f59e0b" stroke-width="1.5"/>
    <line x1="300" y1="210" x2="480" y2="210" stroke="#f59e0b" stroke-width="1.5"/>
    <line x1="300" y1="225" x2="480" y2="225" stroke="#f59e0b" stroke-width="1.5"/>
    <line x1="300" y1="240" x2="480" y2="240" stroke="#f59e0b" stroke-width="1.5"/>
    <line x1="300" y1="255" x2="480" y2="255" stroke="#f59e0b" stroke-width="1.5"/>
    <line x1="300" y1="270" x2="480" y2="270" stroke="#f59e0b" stroke-width="1.5"/>
    <!-- Ground Seal Step -->
    <rect x="480" y="195" width="100" height="80" rx="3" fill="#00f2fe" fill-opacity="0.07" stroke="#00f2fe" stroke-width="2"/>
    <!-- Right Threaded Extension -->
    <rect x="580" y="215" width="90" height="40" rx="2" fill="#00f2fe" fill-opacity="0.05" stroke="#00f2fe" stroke-width="2"/>
    <!-- Center Bore Pockets -->
    <path d="M 120 225 L 140 235 L 120 245" stroke="#f59e0b" stroke-width="1.5"/>
    <path d="M 670 225 L 650 235 L 670 245" stroke="#f59e0b" stroke-width="1.5"/>
  </g>

  <!-- Centerline -->
  <line x1="90" y1="235" x2="700" y2="235" stroke="#475569" stroke-width="1.2" stroke-dasharray="16 4 3 4"/>

  <!-- Dimensioning & Callouts -->
  <line x1="300" y1="155" x2="480" y2="155" stroke="#f59e0b" stroke-width="1"/>
  <text x="345" y="145" font-size="10" fill="#f59e0b" font-weight="700">DIN 5480 INVOLUTE SPLINE</text>
  <text x="210" y="325" font-size="10" fill="#38bdf8">GROUND JOURNAL: Ra 0.2µm</text>
  `
);
fs.writeFileSync(path.join(componentsDir, 'spline-shaft.svg'), splineShaftSVG);

// 4. Custom 4-Port Hydraulic Manifold
const manifoldSVG = createBaseSVG(
  "HIGH-PRESSURE HYDRAULIC MANIFOLD",
  "DWG-MNF-400-DI",
  "420 BAR PROOF TESTED",
  "ZERO LEAKAGE SUN CAVITIES",
  `
  <g stroke="#00f2fe" stroke-width="2" fill="none" filter="url(#glow)">
    <!-- 3D Isometric Manifold Block -->
    <!-- Top Face -->
    <polygon points="400,120 570,180 400,240 230,180" fill="#0c1629" stroke="#00f2fe" stroke-width="2.5"/>
    <!-- Left Face -->
    <polygon points="230,180 400,240 400,360 230,300" fill="#070d18" stroke="#00f2fe" stroke-width="2.5"/>
    <!-- Right Face -->
    <polygon points="400,240 570,180 570,300 400,360" fill="#0a1222" stroke="#00f2fe" stroke-width="2.5"/>

    <!-- Valve Cavity Bores Top Face -->
    <ellipse cx="340" cy="180" rx="20" ry="10" stroke="#f59e0b" stroke-width="2" fill="#070a12"/>
    <ellipse cx="460" cy="180" rx="20" ry="10" stroke="#f59e0b" stroke-width="2" fill="#070a12"/>
    <ellipse cx="400" cy="155" rx="16" ry="8" stroke="#38bdf8" stroke-width="1.8" fill="#070a12"/>
    <ellipse cx="400" cy="205" rx="16" ry="8" stroke="#38bdf8" stroke-width="1.8" fill="#070a12"/>

    <!-- Gun Drilled Cross Passages (Hidden Lines) -->
    <line x1="340" y1="180" x2="340" y2="280" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="4 3"/>
    <line x1="460" y1="180" x2="460" y2="280" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="4 3"/>
    <line x1="340" y1="280" x2="460" y2="280" stroke="#f59e0b" stroke-width="2" stroke-dasharray="4 3"/>

    <!-- SAE Ports on Right Face -->
    <ellipse cx="485" cy="270" rx="12" ry="18" stroke="#00f2fe" stroke-width="2" fill="#070a12"/>
    <ellipse cx="530" cy="240" rx="12" ry="18" stroke="#00f2fe" stroke-width="2" fill="#070a12"/>

    <!-- Mounting Holes on Left Face -->
    <ellipse cx="275" cy="240" rx="10" ry="16" stroke="#38bdf8" stroke-width="1.5" fill="#070a12"/>
    <ellipse cx="320" cy="270" rx="10" ry="16" stroke="#38bdf8" stroke-width="1.5" fill="#070a12"/>
  </g>
  <text x="320" y="395" font-size="10" fill="#f59e0b" font-weight="700">SUN / REXROTH T-11A CAVITIES</text>
  `
);
fs.writeFileSync(path.join(componentsDir, 'manifold-block.svg'), manifoldSVG);

// 5. Heavy Machine Base Frame
const machineBaseSVG = createBaseSVG(
  "HEAVY FABRICATED GANTRY MACHINE BASE",
  "DWG-STR-BASE-400",
  "IS 2062 GR E250 HEAVY",
  "0.03mm GUIDEWAY FLATNESS",
  `
  <g stroke="#00f2fe" stroke-width="2" fill="none" filter="url(#glow)">
    <!-- Base Isometric Outer Frame -->
    <polygon points="400,140 640,210 400,280 160,210" fill="#0c1629" stroke="#00f2fe" stroke-width="2.5"/>
    <polygon points="160,210 400,280 400,340 160,270" fill="#070d18" stroke="#00f2fe" stroke-width="2.5"/>
    <polygon points="400,280 640,210 640,270 400,340" fill="#0a1222" stroke="#00f2fe" stroke-width="2.5"/>

    <!-- Internal Diagonal Stiffener Ribs -->
    <line x1="280" y1="175" x2="520" y2="245" stroke="#f59e0b" stroke-width="2"/>
    <line x1="520" y1="175" x2="280" y2="245" stroke="#f59e0b" stroke-width="2"/>

    <!-- Precision Ground Guideway Mounting Pads -->
    <polygon points="200,195 240,183 400,230 360,242" fill="#00f2fe" fill-opacity="0.2" stroke="#00f2fe" stroke-width="2"/>
    <polygon points="440,242 400,230 560,183 600,195" fill="#00f2fe" fill-opacity="0.2" stroke="#00f2fe" stroke-width="2"/>

    <!-- Foundation Anchor Pockets -->
    <circle cx="210" cy="275" r="7" fill="#f59e0b"/>
    <circle cx="350" cy="315" r="7" fill="#f59e0b"/>
    <circle cx="450" cy="315" r="7" fill="#f59e0b"/>
    <circle cx="590" cy="275" r="7" fill="#f59e0b"/>
  </g>
  <text x="250" y="385" font-size="10" fill="#f59e0b" font-weight="700">FURNACE STRESS RELIEVED AT 600°C</text>
  `
);
fs.writeFileSync(path.join(componentsDir, 'machine-base.svg'), machineBaseSVG);

// 6. Aerospace Wing Rib Bracket
const wingRibSVG = createBaseSVG(
  "AEROSPACE MONOLITHIC WING RIB BRACKET",
  "DWG-AERO-RIB-7075",
  "ALUMINUM 7075-T6 BILLET",
  "1.2mm THIN WALL POCKETS",
  `
  <g stroke="#00f2fe" stroke-width="2" fill="none" filter="url(#glow)">
    <!-- Aerodynamic Cantilever Bracket Profile -->
    <path d="M 180 300 L 180 180 L 400 150 L 620 220 L 580 300 Z" fill="#0c1629" stroke="#00f2fe" stroke-width="2.5"/>

    <!-- Lightening CNC Pockets (Hollowed out for 92% weight reduction) -->
    <path d="M 210 280 L 210 200 L 300 185 L 300 280 Z" fill="#070a12" stroke="#f59e0b" stroke-width="2"/>
    <path d="M 325 280 L 325 182 L 420 170 L 420 280 Z" fill="#070a12" stroke="#f59e0b" stroke-width="2"/>
    <path d="M 445 280 L 445 175 L 530 205 L 510 280 Z" fill="#070a12" stroke="#f59e0b" stroke-width="2"/>

    <!-- Precision Fastener Bushing Holes -->
    <circle cx="200" cy="190" r="6" fill="#38bdf8"/>
    <circle cx="200" cy="290" r="6" fill="#38bdf8"/>
    <circle cx="590" cy="235" r="6" fill="#38bdf8"/>
    <circle cx="565" cy="290" r="6" fill="#38bdf8"/>
  </g>
  <text x="300" y="340" font-size="10" fill="#38bdf8" font-weight="700">AS9100D • MIL-A-8625 TYPE III HARD ANODIZED</text>
  `
);
fs.writeFileSync(path.join(componentsDir, 'wing-rib.svg'), wingRibSVG);

// 7. Double Enveloping Worm Gear Set
const wormGearSVG = createBaseSVG(
  "DOUBLE-ENVELOPING WORM GEAR SET",
  "DWG-GR-WRM-PB2",
  "CENTRIFUGAL BRONZE PB2",
  "AGMA CLASS 11 ACCURACY",
  `
  <g stroke="#00f2fe" stroke-width="2" fill="none" filter="url(#glow)">
    <!-- Bronze Worm Wheel -->
    <circle cx="340" cy="240" r="120" stroke="#f59e0b" stroke-width="2.5" fill="#f59e0b" fill-opacity="0.05"/>
    <circle cx="340" cy="240" r="95" stroke="#f59e0b" stroke-width="1.2" stroke-dasharray="5 3"/>
    <circle cx="340" cy="240" r="45" stroke="#00f2fe" stroke-width="2" fill="#070a12"/>
    <!-- Keyway -->
    <rect x="333" y="190" width="14" height="15" fill="#070a12" stroke="#00f2fe"/>

    <!-- Hourglass Worm Shaft (Meshed on right) -->
    <path d="M 470 120 C 450 180 450 300 470 360 L 510 360 C 490 300 490 180 510 120 Z" fill="#0c1629" stroke="#00f2fe" stroke-width="2.2"/>
    <!-- Worm Threads Wrapping Around Wheel -->
    <path d="M 465 160 Q 485 170 505 165" stroke="#00f2fe" stroke-width="2"/>
    <path d="M 458 190 Q 480 200 500 195" stroke="#00f2fe" stroke-width="2"/>
    <path d="M 452 220 Q 475 230 495 225" stroke="#f59e0b" stroke-width="2.5"/>
    <path d="M 452 250 Q 475 260 495 255" stroke="#f59e0b" stroke-width="2.5"/>
    <path d="M 458 280 Q 480 290 500 285" stroke="#00f2fe" stroke-width="2"/>
    <path d="M 465 310 Q 485 320 505 315" stroke="#00f2fe" stroke-width="2"/>
  </g>
  <text x="270" y="395" font-size="10" fill="#f59e0b" font-weight="700">80% CONTACT PATTERN • ZERO STRIPPING</text>
  `
);
fs.writeFileSync(path.join(componentsDir, 'worm-gear.svg'), wormGearSVG);

// 8. Cryogenic Valve Body
const valveBodySVG = createBaseSVG(
  "CRYOGENIC LNG GLOBE VALVE BODY",
  "DWG-VLV-CRYO-CF8M",
  "ASTM A351 CF8M (-196°C)",
  "ISO 5208 RATE A BUBBLE TIGHT",
  `
  <g stroke="#00f2fe" stroke-width="2" fill="none" filter="url(#glow)">
    <!-- Spherical Center Cavity -->
    <ellipse cx="400" cy="250" rx="90" ry="75" fill="#0c1629" stroke="#00f2fe" stroke-width="2.5"/>
    <!-- Extended Cryogenic Bonnet Column -->
    <rect x="365" y="100" width="70" height="110" fill="#070a12" stroke="#00f2fe" stroke-width="2"/>
    <!-- Bonnet Flange -->
    <ellipse cx="400" cy="100" rx="55" ry="16" fill="#00f2fe" fill-opacity="0.1" stroke="#00f2fe" stroke-width="2"/>

    <!-- Left Process Flange -->
    <rect x="200" y="210" width="30" height="80" rx="3" fill="#00f2fe" fill-opacity="0.15" stroke="#00f2fe" stroke-width="2"/>
    <path d="M 230 220 L 315 235 L 315 265 L 230 280 Z" fill="#070a12" stroke="#00f2fe" stroke-width="2"/>

    <!-- Right Process Flange -->
    <rect x="570" y="210" width="30" height="80" rx="3" fill="#00f2fe" fill-opacity="0.15" stroke="#00f2fe" stroke-width="2"/>
    <path d="M 570 220 L 485 235 L 485 265 L 570 280 Z" fill="#070a12" stroke="#00f2fe" stroke-width="2"/>

    <!-- Internal Stellite Sealing Seat -->
    <ellipse cx="400" cy="265" rx="35" ry="12" stroke="#f59e0b" stroke-width="2.5" fill="#f59e0b" fill-opacity="0.2"/>
  </g>
  <text x="310" y="375" font-size="10" fill="#38bdf8" font-weight="700">EXTENDED STEM FOR LIQUID NITROGEN / LNG</text>
  `
);
fs.writeFileSync(path.join(componentsDir, 'valve-body.svg'), valveBodySVG);

// 9. Robotic Harmonic Flange Hub
const robotHubSVG = createBaseSVG(
  "ROBOTIC ARM 6TH-AXIS HARMONIC HUB",
  "DWG-HUB-42CR-ROB",
  "VACUUM DEGASSED 42CRMO4",
  "< 0.003mm AXIAL RUNOUT",
  `
  <g stroke="#00f2fe" stroke-width="2" fill="none" filter="url(#glow)">
    <!-- Outer Tool Mounting Flange -->
    <circle cx="400" cy="235" r="130" stroke="#00f2fe" stroke-width="2.5" fill="#00f2fe" fill-opacity="0.04"/>
    <!-- Pilot Spigot Register -->
    <circle cx="400" cy="235" r="90" stroke="#f59e0b" stroke-width="2" fill="#070a12"/>
    <!-- Center Spline Bore -->
    <circle cx="400" cy="235" r="45" stroke="#00f2fe" stroke-width="2" fill="#070a12"/>

    <!-- ISO 9409-1 Flange Bolt Circle (8 Precision Holes) -->
    <circle cx="320" cy="235" r="8" fill="#070a12" stroke="#f59e0b" stroke-width="2"/>
    <circle cx="480" cy="235" r="8" fill="#070a12" stroke="#f59e0b" stroke-width="2"/>
    <circle cx="400" cy="155" r="8" fill="#070a12" stroke="#f59e0b" stroke-width="2"/>
    <circle cx="400" cy="315" r="8" fill="#070a12" stroke="#f59e0b" stroke-width="2"/>
    <circle cx="343" cy="178" r="8" fill="#070a12" stroke="#f59e0b" stroke-width="2"/>
    <circle cx="457" cy="178" r="8" fill="#070a12" stroke="#f59e0b" stroke-width="2"/>
    <circle cx="343" cy="292" r="8" fill="#070a12" stroke="#f59e0b" stroke-width="2"/>
    <circle cx="457" cy="292" r="8" fill="#070a12" stroke="#f59e0b" stroke-width="2"/>

    <!-- Locating Dowel Pin Hole -->
    <circle cx="400" cy="190" r="5" fill="#f59e0b"/>
  </g>
  <text x="300" y="395" font-size="10" fill="#f59e0b" font-weight="700">ISO 9409-1 ROBOT INTERFACE STANDARD</text>
  `
);
fs.writeFileSync(path.join(componentsDir, 'robot-hub.svg'), robotHubSVG);

// 10. Split Trunnion Bearing Housing
const trunnionSVG = createBaseSVG(
  "SPLIT TRUNNION BEARING HOUSING",
  "DWG-HSG-800-WCB",
  "CAST STEEL ASTM A216 WCB",
  "H7 LINE-BORED CLAMPED SEAT",
  `
  <g stroke="#00f2fe" stroke-width="2" fill="none" filter="url(#glow)">
    <!-- Split Cap & Base -->
    <path d="M 240 240 A 160 160 0 0 1 560 240 L 590 240 L 590 320 L 550 320 L 530 350 L 270 350 L 250 320 L 210 320 L 210 240 Z" fill="#0c1629" stroke="#00f2fe" stroke-width="2.5"/>

    <!-- Spherical Bearing Outer Race Seat -->
    <circle cx="400" cy="240" r="105" stroke="#f59e0b" stroke-width="2" fill="#070a12"/>
    <!-- Shaft Opening Through-Hole -->
    <circle cx="400" cy="240" r="70" stroke="#00f2fe" stroke-width="1.8"/>

    <!-- Serrated Split Joint Line -->
    <line x1="210" y1="240" x2="590" y2="240" stroke="#f59e0b" stroke-width="2" stroke-dasharray="10 5"/>

    <!-- Heavy Cap Stud Bolts -->
    <rect x="250" y="160" width="18" height="110" fill="#070a12" stroke="#38bdf8" stroke-width="1.5"/>
    <rect x="532" y="160" width="18" height="110" fill="#070a12" stroke="#38bdf8" stroke-width="1.5"/>

    <!-- Grease / RTD Ports -->
    <circle cx="400" cy="115" r="8" fill="#f59e0b"/>
  </g>
  <text x="270" y="390" font-size="10" fill="#f59e0b" font-weight="700">HEAVY MINING SAG & BALL MILL SERVICE</text>
  `
);
fs.writeFileSync(path.join(componentsDir, 'trunnion-housing.svg'), trunnionSVG);

// 11. Induction Hardened Pivot Pin
const pivotPinSVG = createBaseSVG(
  "HEAVY EXCAVATOR PIVOT PIN & BUSHING",
  "DWG-PIN-4140-IND",
  "FORGED 42CRMO4 / 62 HRC",
  "MIRROR FINISH Ra 0.2µm",
  `
  <g stroke="#00f2fe" stroke-width="2" fill="none" filter="url(#glow)">
    <!-- Main Ground Pin Cylinder -->
    <rect x="180" y="190" width="440" height="85" rx="6" fill="#0c1629" stroke="#00f2fe" stroke-width="2.5"/>

    <!-- Induction Hardened Zone Gradient Fill Overlay -->
    <rect x="230" y="190" width="340" height="85" fill="#f59e0b" fill-opacity="0.1" stroke="#f59e0b" stroke-width="2" stroke-dasharray="6 3"/>

    <!-- Retention Flange & Keeper Pin Hole Left -->
    <rect x="150" y="175" width="30" height="115" rx="4" fill="#00f2fe" fill-opacity="0.2" stroke="#00f2fe" stroke-width="2"/>
    <circle cx="165" cy="232" r="8" fill="#070a12" stroke="#f59e0b" stroke-width="2"/>

    <!-- Gun-Drilled Internal Grease Passage Lines -->
    <line x1="150" y1="232" x2="480" y2="232" stroke="#f59e0b" stroke-width="2" stroke-dasharray="10 4"/>
    <!-- Radial Grease Outlet Cross Holes -->
    <circle cx="310" cy="232" r="6" fill="#f59e0b"/>
    <circle cx="430" cy="232" r="6" fill="#f59e0b"/>

    <!-- Spiral Grease Grooves in Matching Bushing Section -->
    <path d="M 280 205 Q 310 230 340 255" stroke="#38bdf8" stroke-width="1.8"/>
    <path d="M 400 205 Q 430 230 460 255" stroke="#38bdf8" stroke-width="1.8"/>
  </g>
  <text x="270" y="325" font-size="10" fill="#f59e0b" font-weight="700">3.5mm INDUCTION CASE DEPTH • 60 HRC</text>
  `
);
fs.writeFileSync(path.join(componentsDir, 'pivot-pin.svg'), pivotPinSVG);

// 12. Modular CNC Tombstone Fixture
const tombstoneSVG = createBaseSVG(
  "MODULAR 4-SIDED HMC TOMBSTONE FIXTURE",
  "DWG-TMB-500-CI",
  "CAST IRON FC300 STRESS RELIEVED",
  "< 0.01mm SQUARENESS OVER 600mm",
  `
  <g stroke="#00f2fe" stroke-width="2" fill="none" filter="url(#glow)">
    <!-- Base Pallet -->
    <polygon points="400,320 580,360 400,400 220,360" fill="#070d18" stroke="#00f2fe" stroke-width="2.5"/>
    <polygon points="220,360 400,400 400,420 220,380" fill="#04070e" stroke="#00f2fe" stroke-width="2"/>
    <polygon points="400,400 580,360 580,380 400,420" fill="#04070e" stroke="#00f2fe" stroke-width="2"/>

    <!-- 4-Sided Vertical Column -->
    <polygon points="400,100 490,140 490,340 400,300" fill="#0a1222" stroke="#00f2fe" stroke-width="2.5"/>
    <polygon points="400,100 310,140 310,340 400,300" fill="#0c1629" stroke="#00f2fe" stroke-width="2.5"/>

    <!-- 50mm Precision Bushing Grid on Left Face -->
    ${[0, 1, 2, 3, 4].map(r => [0, 1].map(c => {
      const x = 330 + c * 35 - r * 5;
      const y = 160 + r * 28 + c * 10;
      return `<circle cx="${x}" cy="${y}" r="3" fill="#f59e0b"/>`;
    }).join('')).join('')}

    <!-- 50mm Precision Bushing Grid on Right Face -->
    ${[0, 1, 2, 3, 4].map(r => [0, 1].map(c => {
      const x = 425 + c * 35 + r * 5;
      const y = 170 + r * 28 - c * 10;
      return `<circle cx="${x}" cy="${y}" r="3" fill="#f59e0b"/>`;
    }).join('')).join('')}
  </g>
  <text x="270" y="445" font-size="10" fill="#f59e0b" font-weight="700">500x500mm JIS PALLET • HARDENED BUSHINGS</text>
  `
);
fs.writeFileSync(path.join(componentsDir, 'tombstone-fixture.svg'), tombstoneSVG);

// Capabilities SVGs
const cap5AxisSVG = createBaseSVG(
  "5-AXIS CNC MACHINING CENTERS",
  "CELL-5AX-DMG-01",
  "DMG MORI & MAZAK FLEET",
  "±0.005mm REPEATABILITY",
  `
  <g stroke="#00f2fe" stroke-width="2" fill="none" filter="url(#glow)">
    <!-- Spindle Head -->
    <rect x="370" y="80" width="60" height="90" fill="#0c1629" stroke="#00f2fe" stroke-width="2"/>
    <polygon points="385,170 415,170 410,210 390,210" fill="#f59e0b" stroke="#f59e0b" stroke-width="2"/>
    <!-- Cutting Tool -->
    <rect x="396" y="210" width="8" height="30" fill="#00f2fe"/>
    
    <!-- Rotary Tilt Trunnion Table (A-Axis / C-Axis) -->
    <ellipse cx="400" cy="300" rx="140" ry="45" fill="#070a12" stroke="#00f2fe" stroke-width="2.5"/>
    <ellipse cx="400" cy="300" rx="90" ry="28" fill="#f59e0b" fill-opacity="0.1" stroke="#f59e0b" stroke-width="1.8"/>

    <!-- Workpiece on Table -->
    <rect x="340" y="240" width="120" height="50" rx="4" fill="#0c1629" stroke="#38bdf8" stroke-width="2"/>

    <!-- Motion Axis Arrows -->
    <path d="M 330 130 L 330 180" stroke="#f59e0b" stroke-width="2"/>
    <polygon points="330,125 325,135 335,135" fill="#f59e0b"/>
    <polygon points="330,185 325,175 335,175" fill="#f59e0b"/>
    <text x="300" y="160" font-size="11" fill="#f59e0b" font-weight="700">Z-AXIS</text>
  </g>
  <text x="280" y="385" font-size="10" fill="#38bdf8" font-weight="700">SIMULTANEOUS 5-AXIS • 18,000 RPM HSK-A63</text>
  `
);
fs.writeFileSync(path.join(capabilitiesDir, 'cap-5axis.svg'), cap5AxisSVG);

const capForgingSVG = createBaseSVG(
  "CLOSED-DIE DROP FORGING CELLS",
  "CELL-FRG-PRESS-02",
  "3,500 TON HYDRAULIC PRESS",
  "CONTINUOUS GRAIN FLOW",
  `
  <g stroke="#00f2fe" stroke-width="2" fill="none" filter="url(#glow)">
    <!-- Upper Die Ram -->
    <rect x="280" y="90" width="240" height="90" fill="#0c1629" stroke="#00f2fe" stroke-width="2.5"/>
    <path d="M 320 180 L 350 215 L 450 215 L 480 180 Z" fill="#070a12" stroke="#f59e0b" stroke-width="2"/>

    <!-- Glowing Red-Hot Forged Ingot in Die -->
    <ellipse cx="400" cy="245" rx="70" ry="25" fill="#f59e0b" fill-opacity="0.7" stroke="#f59e0b" stroke-width="2.5" filter="url(#glow)"/>

    <!-- Lower Die Bolster -->
    <path d="M 320 310 L 350 275 L 450 275 L 480 310 Z" fill="#070a12" stroke="#f59e0b" stroke-width="2"/>
    <rect x="240" y="310" width="320" height="80" fill="#0c1629" stroke="#00f2fe" stroke-width="2.5"/>

    <!-- Hydraulic Force Arrows -->
    <path d="M 400 35 L 400 75" stroke="#f59e0b" stroke-width="3"/>
    <polygon points="400,82 393,70 407,70" fill="#f59e0b"/>
  </g>
  <text x="270" y="420" font-size="10" fill="#f59e0b" font-weight="700">3500-TON STAMP • HIGH CORROSION RESISTANCE</text>
  `
);
fs.writeFileSync(path.join(capabilitiesDir, 'cap-forging.svg'), capForgingSVG);

const capCmmSVG = createBaseSVG(
  "ZEISS 3D CMM METROLOGY LAB",
  "LAB-CMM-ZEISS-03",
  "CLIMATE CONTROLLED 20°C",
  "0.8µm + L/350 ACCURACY",
  `
  <g stroke="#00f2fe" stroke-width="2" fill="none" filter="url(#glow)">
    <!-- Granite Surface Table -->
    <polygon points="400,280 620,330 400,380 180,330" fill="#070d18" stroke="#00f2fe" stroke-width="2.5"/>
    <polygon points="180,330 400,380 400,410 180,360" fill="#04070e" stroke="#00f2fe" stroke-width="2"/>
    <polygon points="400,380 620,330 620,360 400,410" fill="#04070e" stroke="#00f2fe" stroke-width="2"/>

    <!-- CMM Bridge Structure -->
    <rect x="250" y="100" width="30" height="230" fill="#0c1629" stroke="#00f2fe" stroke-width="2"/>
    <rect x="520" y="100" width="30" height="230" fill="#0c1629" stroke="#00f2fe" stroke-width="2"/>
    <rect x="250" y="90" width="300" height="35" fill="#0c1629" stroke="#00f2fe" stroke-width="2.5"/>

    <!-- Vertical Z-Ram & Ruby Stylus Probe -->
    <rect x="388" y="125" width="24" height="110" fill="#070a12" stroke="#38bdf8" stroke-width="1.8"/>
    <line x1="400" y1="235" x2="400" y2="280" stroke="#f59e0b" stroke-width="2"/>
    <circle cx="400" cy="283" r="5" fill="#ef4444" stroke="#f59e0b" stroke-width="1.5"/>

    <!-- Machined Workpiece Being Probed -->
    <ellipse cx="400" cy="315" rx="55" ry="25" fill="#00f2fe" fill-opacity="0.1" stroke="#00f2fe" stroke-width="2"/>
  </g>
  <text x="270" y="445" font-size="10" fill="#10b981" font-weight="700">SUB-MICRON 3D LASER & TOUCH-TRIGGER PROBING</text>
  `
);
fs.writeFileSync(path.join(capabilitiesDir, 'cap-cmm.svg'), capCmmSVG);

const capAssemblySVG = createBaseSVG(
  "CLEANROOM SUB-ASSEMBLY & HYDRO TESTING",
  "BAY-HYD-TEST-04",
  "ULTRASONICALLY WASHED",
  "420 BAR PROOF RIG",
  `
  <g stroke="#00f2fe" stroke-width="2" fill="none" filter="url(#glow)">
    <!-- Hydrostatic Test Pressure Vessel Enclosure -->
    <rect x="260" y="140" width="280" height="180" rx="12" fill="#0c1629" stroke="#00f2fe" stroke-width="2.5"/>
    <rect x="280" y="160" width="240" height="140" rx="8" fill="#070a12" stroke="#38bdf8" stroke-width="1.5"/>

    <!-- Hydraulic Component Connected to High Pressure Lines -->
    <rect x="330" y="195" width="140" height="70" rx="6" fill="#f59e0b" fill-opacity="0.1" stroke="#f59e0b" stroke-width="2"/>

    <!-- High-Pressure Flexible Hydraulic Hoses -->
    <path d="M 230 220 Q 280 200 330 220" stroke="#f59e0b" stroke-width="3" fill="none"/>
    <path d="M 470 220 Q 520 200 570 220" stroke="#f59e0b" stroke-width="3" fill="none"/>

    <!-- Digital Pressure Gauge HUD -->
    <circle cx="400" cy="100" r="30" fill="#0c1629" stroke="#00f2fe" stroke-width="2"/>
    <text x="382" y="105" font-size="11" fill="#10b981" font-weight="800">420 BAR</text>
  </g>
  <text x="280" y="365" font-size="10" fill="#f59e0b" font-weight="700">100% PRESSURE PROOF & PARTICULATE TESTED</text>
  `
);
fs.writeFileSync(path.join(capabilitiesDir, 'cap-assembly.svg'), capAssemblySVG);

console.log('Successfully generated all 12 component and 4 capability vector blueprints!');
