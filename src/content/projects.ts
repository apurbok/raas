export type ProjectStatus = "completed" | "ongoing";

export type ProjectMetric = {
  label: string;
  value: string;
};

export type Project = {
  slug: string;
  title: string;
  location: string;
  sector: string;
  status: ProjectStatus;
  client?: string;
  summary: string;
  scope: string;
  overview: string;
  theChallenge?: string;
  theSolution?: string;
  metrics: ProjectMetric[];
  deliverables: string[];
  equipmentDeployed: string[];
  featured?: boolean;
  image: string;
};

export const projects: Project[] = [
  {
    slug: "payra-1320mw",
    title: "Payra 1320MW Thermal Power Plant Project",
    location: "Dhankhali Union, Kalapara Upazila, Patuakhali District, Bangladesh",
    sector: "Power & Infrastructure",
    status: "completed",
    client: "Bangladesh China Power Company Ltd. (BCPCL) [JV of NWPGCL & CMC]",
    summary:
      "Comprehensive civil construction, residential campus, structural works, and recreation infrastructure for Bangladesh's landmark ultra-supercritical thermal power plant.",
    scope:
      "Turnkey architectural design, structural engineering, civil construction, and site infrastructure development across the entire Payra 1320MW Thermal Power Plant township.",
    overview:
      "The Payra 1320MW Thermal Power Plant is one of the most critical mega-infrastructure projects in Bangladesh. RASS Associates Ltd was awarded and successfully completed an extensive array of turnkey civil construction contracts, including multistory residential quarters, officer dormitories, VIP & VVIP rest houses with helipads, a 3-story cyclone shelter, recreation zones, and vital power plant ancillary buildings.",
    theChallenge:
      "The project site is located in a high-salinity, tidal coastal belt of southern Bangladesh, presenting severe geotechnical challenges including soft alluvial subsoil, high groundwater tables, and stringent monsoon cyclone resilience requirements.",
    theSolution:
      "RASS Associates deployed specialized deep foundation piling, high-grade ready-mix concrete batching on site, advanced waterproofing membranes, and rapid-curing structural techniques to deliver multi-building complexes ahead of scheduled commissioning milestones.",
    metrics: [
      { label: "Staff & Officer Quarters", value: "16+ Buildings" },
      { label: "Concrete Poured", value: "50,000+ m³" },
      { label: "Site Workforce", value: "1,200+ Personnel" },
      { label: "Safety Record", value: "Zero LTIs" },
    ],
    deliverables: [
      "Design and Construction of Eight 5- and 6-Story Staff Quarter Buildings",
      "Design and Construction of Three 6-Story Officers' Dormitory Buildings",
      "Design and Construction of Five 5-Story Staff Dormitory Buildings",
      "Design and Construction of a VVIP Rest House Building with Private Helipad",
      "Renovation and Complete Landscaping of the VIP Rest House",
      "Construction of a 3-Story Cyclone Shelter Building for emergency safety",
      "Design and Construction of a 2-Story Police Barrack Building",
      "Construction of a Recreation Zone including Health Club, Swimming Pool, Basketball & Tennis Courts, and Kids Zone",
      "Construction of a Central Cafeteria and Main Entrance Gate with Architectural Landscaping",
      "Construction of Connecting Roads, Internal Drainage Systems, Parking Areas, and Water Bodies",
      "Renovation of 27 Labor Sheds and OD / SD Buildings at the Payra Power Plant",
      "De-silting work and Construction of Ceremonial Inauguration Plaque",
      "Construction of Shahid Minar at premises of Bangladesh-China Technical Institute (BCTI)",
      "Supply of Ready-Mix Concrete (30 Grade, 500 CM) & Provision of BCTI School Furniture",
      "Engineering, Procurement & Construction (EPC) of Lubricant Blending Factory",
      "Supply of Fittings, Fixtures, Furniture, Equipment, and Electrical Spotlights for all facilities",
    ],
    equipmentDeployed: [
      "Concrete Batching Plant (25m³/Hr)",
      "Concrete Mixture Trucks (6m³) & Pumps (60m³/Hr)",
      "Steel Props (15,000 pcs) & Shuttering (5,000 sqm)",
      "Total Stations & Theodolites",
      "Heavy Pay Loaders & Excavators",
    ],
    featured: true,
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&h=640&fit=crop&q=80",
  },
  {
    slug: "pabna-solar-64mw",
    title: "64 MW Pabna Solar Power Project",
    location: "Pabna, Bangladesh",
    sector: "Renewable Energy & Civil Works",
    status: "completed",
    client: "National Renewable Energy Developer & Grid Authority",
    summary:
      "Complete civil infrastructure, security fortifications, residential dormitories, STP, and water networks for a 64 MW utility-scale solar power installation.",
    scope:
      "End-to-end civil construction, residential campus, security installations, internal RCC roads, and site development for the 64 MW Pabna Solar Park.",
    overview:
      "As Bangladesh expands its clean energy generation footprint, RASS Associates Ltd executed the entire civil and structural infrastructure for the 64 MW Pabna Solar Power Project. Works spanned extensive site preparation, security walls, multistory dormitory facilities, on-site sewage treatment, and all interconnecting infrastructures.",
    theChallenge:
      "Constructing extensive foundation and road infrastructure across low-lying terrain while meeting stringent environmental protection standards and tight delivery schedules required for grid synchronization.",
    theSolution:
      "Engineered earthworks and soil compaction combined with mechanized concrete paving ensured stable foundations for solar inverter stations, control buildings, and high-capacity internal transport corridors.",
    metrics: [
      { label: "Solar Capacity Supported", value: "64 MW" },
      { label: "Internal Architectural", value: "12+ km" },
      { label: "Residential Accommodations", value: "Dormitories & Barracks" },
      { label: "Environmental Facility", value: "Turnkey STP" },
    ],
    deliverables: [
      "Construction of the internal Reinforced Concrete (RCC) boundary barrier",
      "Construction of a 5-Story Officers' Residential Dormitory Building",
      "Construction of a 4-Story Staff Dormitory Building",
      "Construction of the Ansar Barrack and Security Accommodation Building",
      "Construction of the Project Rest House and Administrative Facilities",
      "Construction of all Internal Roads and Heavy-Duty Access Routes",
      "Installation of the Complete Stormwater Drainage System",
      "Landscaping, Earthworks, and Site Development Works",
      "Construction of the Main Entrance Security Gate and Perimeter Checkpoints",
      "Construction of the Sewage Treatment Plant (STP) and Water Supply System",
    ],
    equipmentDeployed: [
      "Heavy Earth Excavators & Pay Loaders",
      "Concrete Mixture Machines & Transit Mixers",
      "Re-bar Cutting & Bending Automated Units",
      "Total Station Survey Instruments",
    ],
    featured: true,
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1920&h=640&fit=crop&q=80",
  },
  {
    slug: "madhumati-100mw",
    title: "Madhumati 100MW HFO Power Plant Project",
    location: "Madhumati River Basin, Bangladesh",
    sector: "Power & Marine Engineering",
    status: "completed",
    client: "Independent Power Producer (IPP) / National Grid Contractor",
    summary:
      "Comprehensive civil works, hydraulic land filling, riverbank stabilization, jetty/pontoon erection, and administrative township construction for a major power plant.",
    scope:
      "Dredging, hydraulic land filling, heavy shore protection, riverfront revetment, and complete campus civil engineering for the Madhumati 100MW Power Plant.",
    overview:
      "Located directly on the riverfront, this major power generation facility required extensive marine civil engineering. RASS Associates executed capital suction dredging from deep river channels, engineered heavy revetments and shore protection along the riverfront, reclaimed land, and constructed the complete support township.",
    theChallenge:
      "The plant is situated directly on the active riverfront subject to severe seasonal monsoon flooding, strong hydraulic scouring currents, and unstable riverbank erosion.",
    theSolution:
      "Capital dredging and hydraulic backfilling to elevate the entire plant footprint above flood levels, reinforced with heavy structural revetment and shore protection systems.",
    metrics: [
      { label: "Plant Capacity", value: "100 MW" },
      { label: "Land Reclamation", value: "35+ Acres" },
      { label: "Shore Protection", value: "1.5+ km" },
      { label: "Marine Infrastructure", value: "Jetty & Pontoon" },
    ],
    deliverables: [
      "Capital Dredging, Hydraulic Land Filling, and Heavy Embankment Works",
      "Engineered Protective Works, Bank Stabilization, and Scour-Resistant Revetment",
      "Perimeter Boundary Wall, Security Fencing, and Main Entrance Complex",
      "Heavy-Duty Internal Roads and Highway Approach Roads",
      "Marine Fuel-Offloading Jetty and Floating Pontoon Construction",
      "Comprehensive Drainage System and Flood Sump System",
      "Officer Dormitory and Staff Dormitory Buildings",
      "Executive Rest House and Central Administration Building",
    ],
    equipmentDeployed: [
      "20-Inch Cutter Suction Dredgers",
      "Marine Workboats & Floating Pontoons",
      "500mm HDPE Discharge Pipelines & Floaters",
      "Excavators, Pay Loaders & Concrete Mixers",
    ],
    featured: true,
    image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=1920&h=640&fit=crop&q=80",
  },
  {
    slug: "sirajganj-solar-68mw",
    title: "Sirajganj 68MW Solar Power Plant Project",
    location: "Jamuna River Basin, Sirajganj, Bangladesh",
    sector: "Renewable Energy & Dredging",
    status: "completed",
    client: "Renewable Energy JV / BPDB / NWPGCL",
    summary:
      "Large-scale riverbed cutter suction dredging from the Jamuna River, huge land reclamation, and foundation site preparation for a 68 MW solar park.",
    scope:
      "Comprehensive riverbed dredging, hydraulic filling, soil compaction, and foundation site preparation across dynamic riverine char lands.",
    overview:
      "Located in the flood-prone Jamuna river basin, this major utility solar project required massive land reclamation. RASS Associates deployed its cutter suction dredging fleet to dredge sand from the Jamuna riverbed and hydraulically backfill the designated solar park area.",
    theChallenge:
      "Navigating south seasonal flow currents of the Jamuna River and achieving precise soil load-bearing compaction across sand-fill areas destined for sensitive solar PV tracker foundations.",
    theSolution:
      "Utilizing 22-inch & 20-inch CSD dredgers with long-distance floating pipelines, delivering controlled silt-free sand with multi-stage compaction.",
    metrics: [
      { label: "Solar Park Capacity", value: "68 MW" },
      { label: "Reclaimed Land Area", value: "200+ Acres" },
      { label: "Januma Dredging", value: "Millions CFT" },
      { label: "Foundation Elevation", value: "+3.5m" },
    ],
    deliverables: [
      "Large-scale riverbed cutter suction dredging from the Jamuna River",
      "Hydraulic land filling and controlled compression",
      "Achieving structural load ratio for utility-scale solar arrays",
      "Land leveling and grading for solar arrays and substations",
      "Riverbank protection and construction to guard against seasonal washing",
    ],
    equipmentDeployed: [
      "22-Inch CSD 550 & 20-Inch CSD Dredgers",
      "Twin-Engine Marine Workboats",
      "Long-Distance HDPE Floating Pipelines",
      "Hydraulic Excavators & Heavy Compactors",
    ],
    featured: true,
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1920&h=640&fit=crop&q=80",
  },
  {
    slug: "payra-port-terminal-road",
    title: "Payra Port 1st Terminal Road Project (Dredged Sand Filling)",
    location: "Payra Deep Sea Port, Rabnabad Channel, Patuakhali, Bangladesh",
    sector: "Port Infrastructure & Marine Works",
    status: "completed",
    client: "Payra Port Authority (PPA)",
    summary:
      "Supply, in-land dredging, long-distance transportation, and placement of over 5 Crore CFT engineered sand for the 1st Terminal main access road.",
    scope:
      "Hydraulic dredging, barging, pumping, and precision placement of 50,000,000 CFT engineered sand adhering to rigorous Fineness Index.",
    overview:
      "As part of Bangladesh's flagship mega-project to develop a deep-sea port, RASS Associates Ltd executed large-scale dredged sand filling works for the Payra Port 1st Terminal Road, covering hydraulic dredging and placement of 5 Crore cubic feet of sand.",
    theChallenge:
      "Meeting strict quality specifications (FM 0.50 to 0.80) in deep marine waters while maintaining continuous supply schedules in rough open-sea tidal conditions.",
    theSolution:
      "Deploying high-capacity CSD dredgers and continuous pipeline systems end-to-end, completing the 50M CFT placement seamlessly.",
    metrics: [
      { label: "Dredged Sand", value: "5 Crore CFT" },
      { label: "Sand Quality", value: "FM 0.50 – 0.80" },
      { label: "Port Authority", value: "Approved 100%" },
      { label: "Corridor", value: "Multi-km Terminal Road" },
    ],
    deliverables: [
      "Execution of in-land dredging and sand extraction",
      "Supply and placement of 50,000,000 Cubic Feet of engineered end",
      "Quality standards for FM 0.50–0.80 criteria",
      "Loading, hydraulic transport, download and dyke backfilling",
      "Full compliance with Payra Port Authority specifications",
      "Engineered embankment supporting heavy transport loads",
    ],
    equipmentDeployed: [
      "22-Inch CSD 550 Dredger",
      "Marine Support Vessels",
      "500mm HDPE pipelines (720 pcs)",
      "Heavy Earthmoving & Compaction",
    ],
    featured: true,
    image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=1920&h=640&fit=crop&q=80",
  },
  {
    slug: "payra-water-intake-dredging",
    title: "Payra 1320MW Power Plant Water Intake Dredging",
    location: "Andharmanik River, Patuakhali, Bangladesh",
    sector: "Dredging & Marine Works",
    status: "completed",
    client: "Bangladesh China Power Company Ltd. (BCPCL)",
    summary:
      "Sustainable suction dredging, high-pressure jet clearance, and efficient dredging operations in the harnessed river to protect solar power plant intake infrastructure.",
    scope:
      "Specialized suction-type hydraulic dredging, underwater bed clearing, and deep channel maintenance around power plant cooling water intake pumps.",
    overview:
      "The 1320MW Supercritical Thermal Power Plant relies on forest amount of cooling water from the Andharmanik River. RASS Associates Ltd was engaged to perform high-precision underwater hydraulic dredging and sediment removal to guarantee uninterrupted cooling water supply.",
    theChallenge:
      "Operating in extreme tidal currents with heavy underwater sediment deposition directly adjacent to sensitive submerged intake structures and screens.",
    theSolution:
      "Deploying floating hydraulic dredging units with high-pressure working approach and certified dive teams to safely excavate silt.",
    metrics: [
      { label: "Plant Cooling", value: "1320 MW" },
      { label: "Channel Depth", value: "Design Draft" },
      { label: "Diving Operations", value: "Certified Teams" },
      { label: "Downtime", value: "0 Hours" },
    ],
    deliverables: [
      "Specialized suction-type hydraulic dredging",
      "Complete clearance of heavily deposited silt and clay",
      "Protection of ongoing water for cooling towers",
      "Multi-part surveys to track sedimentation",
    ],
    equipmentDeployed: [
      "Specialized Floating Hydraulic Dredgers",
      "High-Pressure Water Jet Pump Systems",
      "Marine Support Vessels",
      "Professional Diving Equipment",
    ],
    featured: true,
    image: "https://images.unsplash.com/photo-1581095569291-37b4fbc00b40?w=1920&h=640&fit=crop&q=80",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}