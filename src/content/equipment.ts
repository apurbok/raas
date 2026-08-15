export type EquipmentCategory =
  | "concrete"
  | "earthmoving"
  | "marine"
  | "survey"
  | "power"
  | "formwork";

export type EquipmentItem = {
  name: string;
  quantity: string;
  category: EquipmentCategory;
  specification?: string;
  applications?: string;
};

export const equipmentCategories: { id: EquipmentCategory; label: string }[] = [
  { id: "concrete", label: "Concrete & Batching" },
  { id: "earthmoving", label: "Earthmoving & Heavy Machinery" },
  { id: "marine", label: "Dredging & Marine Fleet" },
  { id: "survey", label: "Survey & Quality Testing" },
  { id: "power", label: "Power & Site Pumps" },
  { id: "formwork", label: "Formwork & Scaffolding" },
];

export const equipment: EquipmentItem[] = [
  // Concrete & Batching
  {
    name: "Concrete Batching Plant",
    quantity: "1 no",
    category: "concrete",
    specification: "25 m³/Hr Automated Output",
    applications: "High-grade RMC production for heavy civil foundations",
  },
  {
    name: "Concrete Mixture Trucks",
    quantity: "2 nos",
    category: "concrete",
    specification: "6 m³ Transit Drum Capacity",
    applications: "Continuous site concrete delivery & agitation",
  },
  {
    name: "Concrete Pumps",
    quantity: "2 nos",
    category: "concrete",
    specification: "60 m³/Hr Pumping Output",
    applications: "High-rise and long-distance concrete placement",
  },
  {
    name: "Concrete Mixture Machines",
    quantity: "3 nos",
    category: "concrete",
    specification: "0.27 m³ per Batch",
    applications: "On-site localized concrete and mortar mixing",
  },
  {
    name: "Re-bar Cutting Machines",
    quantity: "10 nos",
    category: "concrete",
    specification: "Heavy-duty electric re-bar shears",
    applications: "Precision reinforcement steel sizing",
  },
  {
    name: "Re-bar Bending Machines",
    quantity: "10 nos",
    category: "concrete",
    specification: "Automated angle bending tables",
    applications: "Stirrup and beam bar shape fabrication",
  },
  {
    name: "Re-bar Straightening Machines",
    quantity: "10 nos",
    category: "concrete",
    specification: "High-speed rotary straighteners",
    applications: "Coil re-bar processing and alignment",
  },

  // Earthmoving & Heavy Machinery
  {
    name: "Pay Loaders",
    quantity: "5 nos",
    category: "earthmoving",
    specification: "High-capacity front-end wheel loaders",
    applications: "Bulk aggregate handling and sand movement",
  },
  {
    name: "Excavators",
    quantity: "5 nos",
    category: "earthmoving",
    specification: "Heavy hydraulic crawler excavators",
    applications: "Deep trenching, foundation digging & dyke building",
  },
  {
    name: "Concrete Breakers",
    quantity: "10 nos",
    category: "earthmoving",
    specification: "Heavy pneumatic / hydraulic breakers",
    applications: "Demolition and rock/concrete fracturing",
  },
  {
    name: "Hammer Drill Machines",
    quantity: "35 nos",
    category: "earthmoving",
    specification: "Industrial rotary hammer drills",
    applications: "Anchor bolt drilling and structural doweling",
  },
  {
    name: "Welding Machines",
    quantity: "8 nos",
    category: "earthmoving",
    specification: "Industrial arc and MIG welding units",
    applications: "Structural steel fabrication and on-site assembly",
  },

  // Power & Site Utilities
  {
    name: "Heavy Generator (275 KVA)",
    quantity: "2 nos",
    category: "power",
    specification: "275 KVA Soundproof Diesel Genset",
    applications: "Primary batching plant and site camp power",
  },
  {
    name: "Medium Generator (100 KVA)",
    quantity: "3 nos",
    category: "power",
    specification: "100 KVA 3-Phase Diesel Genset",
    applications: "Heavy pump and machinery operations",
  },
  {
    name: "Mobile Generator (60 KVA)",
    quantity: "10 nos",
    category: "power",
    specification: "60 KVA Mobile Diesel Genset",
    applications: "Continuous site lighting and distributed tools",
  },
  {
    name: "Submersible Pumps (10.0 H.P)",
    quantity: "25 nos",
    category: "power",
    specification: "10.0 H.P High-Head De-watering",
    applications: "Deep foundation and cofferdam pit de-watering",
  },
  {
    name: "Jet Pumps (2.0 H.P)",
    quantity: "45 nos",
    category: "power",
    specification: "2.0 H.P High-Pressure Clean Water",
    applications: "Concrete curing, jetting, and utility supply",
  },
  {
    name: "Jet Pumps (1.5 H.P)",
    quantity: "35 nos",
    category: "power",
    specification: "1.5 H.P Surface Water Jetting",
    applications: "Site water supply and dust suppression",
  },
  {
    name: "Plastic Hose Pipes",
    quantity: "2,000 rft",
    category: "power",
    specification: "Heavy-duty reinforced flexible hose",
    applications: "Water delivery and site drainage lines",
  },

  // Formwork & Scaffolding
  {
    name: "Steel Shuttering",
    quantity: "5,000 sqm",
    category: "formwork",
    specification: "Precision engineered modular steel plates",
    applications: "High-finish fair-face RCC wall & slab casting",
  },
  {
    name: "Wooden Shutter (Ply Board)",
    quantity: "600 sqm",
    category: "formwork",
    specification: "Marine-grade film-faced plywood",
    applications: "Complex geometric and architectural casting",
  },
  {
    name: "Steel Props",
    quantity: "15,000 pcs",
    category: "formwork",
    specification: "Telescopic heavy-load adjustable steel jacks",
    applications: "Slab and beam bottom structural support",
  },
  {
    name: "Scaffoldings",
    quantity: "1,500 pcs",
    category: "formwork",
    specification: "Cuplock / modular steel frame scaffolding",
    applications: "Elevated exterior façade & structural staging",
  },

  // Survey & Quality Testing
  {
    name: "Total Stations",
    quantity: "5 nos",
    category: "survey",
    specification: "High-precision digital laser total stations",
    applications: "Boundary demarcation, 3D coordinates & layout",
  },
  {
    name: "Theodolite Machines",
    quantity: "5 nos",
    category: "survey",
    specification: "Optical / electronic precision theodolites",
    applications: "Horizontal & vertical angle precision measurement",
  },
  {
    name: "Auto Level Machines",
    quantity: "5 nos",
    category: "survey",
    specification: "Self-leveling optical surveyor levels",
    applications: "Elevation profiling and road grade setting",
  },
  {
    name: "Concrete Cylinder Moulds",
    quantity: "100 sets",
    category: "survey",
    specification: "Standard ASTM / BS 150mm x 300mm steel moulds",
    applications: "Daily concrete compressive strength test sampling",
  },
];

export type FleetItem = {
  name: string;
  category: string;
  specs: string[];
};

export const dredgingFleet: FleetItem[] = [
  {
    name: "22-Inch Cutter Suction Dredger (CSD 550)",
    category: "Heavy Dredger",
    specs: [
      "Dredging depth up to 15 meters below water surface",
      "Discharge distance up to 2,000 meters through booster/lines",
      "600 mm suction pipe / 550 mm discharge pipe diameter",
      "Powered by heavy Caterpillar dredge pump engine (1270 kW)",
      "Hydraulically driven cutter head with replaceable teeth",
    ],
  },
  {
    name: "20-Inch Cutter Suction Dredgers (CSDs)",
    category: "Capital Dredgers",
    specs: [
      "Maximum dredging depth of 15 meters",
      "508 mm suction pipe diameter",
      "1,788 kW total installed power output",
      "Fully automated, centrally controlled PLC dredging operations",
      "Dual spud carrier system for continuous forward excavation",
    ],
  },
  {
    name: "Marine Support Vessels (Workboats)",
    category: "Marine Logistics",
    specs: [
      "Three 12-meter heavy-duty steel hull workboats",
      "Twin 200 HP marine diesel engines per vessel",
      "Advanced navigation suite: Radar, Gyro Compass, Auto-Pilot",
      "Certified off-ship firefighting & anchor handling winches",
    ],
  },
  {
    name: "Accommodation Houseboats",
    category: "Crew Accommodation",
    specs: [
      "Three 16-meter self-contained marine houseboats",
      "Accommodation capacity for 26 technical crew members each",
      "Equipped with mess facilities, generators, and fresh water storage",
      "Enables uninterrupted 24/7 dual-shift operations in remote waterways",
    ],
  },
  {
    name: "Discharge Pipelines & Floaters",
    category: "Pipeline Infrastructure",
    specs: [
      "720 pieces of 500 mm inner-diameter heavy-wall HDPE pipes",
      "150 pieces of reinforced flexible heavy-duty rubber discharge hoses",
      "240 pairs of polyurethane foam-filled floating pipeline pontoons",
      "Engineered for high-abrasion sand and gravel hydraulic transport",
    ],
  },
];

export const dredgingServices = [
  "Capital & Maintenance Dredging",
  "Land Reclamation & Hydraulic Filling",
  "Riverbank Protection & Anti-Erosion Revetment",
  "Hydrographic & Bathymetric Surveying",
  "Marine Construction Support & Sub-River Crossings",
  "Dredger Rental & Complete Fleet Management Services",
];
