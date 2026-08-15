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
      "Construction of a Recreation Zone including Health Club, Swimming Pool (with lighting & heating), Basketball & Tennis Courts, and Kids Zone",
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
    image: "/images/projects/payra.jpg",
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
      "As Bangladesh expands its clean energy generation footprint, RASS Associates Ltd executed the entire civil and structural infrastructure for the 64 MW Pabna Solar Power Project. Works spanned extensive site preparation, security walls, multistory dormitory facilities, on-site sewage treatment, and all interconnecting RCC road networks.",
    theChallenge:
      "Constructing extensive foundation and road infrastructure across low-lying terrain while meeting stringent environmental protection standards and tight delivery schedules required for grid synchronization.",
    theSolution:
      "Engineered earthworks and soil compaction combined with mechanized concrete paving ensured stable foundations for solar inverter stations, control buildings, and high-capacity internal transport corridors.",
    metrics: [
      { label: "Solar Capacity Supported", value: "64 MW" },
      { label: "Internal RCC Roadway", value: "12+ km" },
      { label: "Residential Accommodations", value: "Dormitories & Barracks" },
      { label: "Environmental Facility", value: "Turnkey STP" },
    ],
    deliverables: [
      "Construction of the internal Reinforced Cement Concrete (RCC) boundary wall",
      "Construction of a 5-Storey Officers' Residential Dormitory Building",
      "Construction of a 4-Storey Staff Dormitory Building",
      "Construction of the Ansar Barrack and Security Accommodation Building",
      "Construction of the Project Rest House and Administrative Facilities",
      "Construction of all Internal RCC Roads and Heavy-Duty Access Routes",
      "Installation of the Complete Stormwater Drainage System",
      "Landscaping, Earthworks, and Site Development Works",
      "Construction of the Main Entrance Security Gate and Perimeter Checkpoints",
      "Construction of the Sewage Treatment Plant (STP) and Water Supply & Sanitation System",
    ],
    equipmentDeployed: [
      "Heavy Earth Excavators & Pay Loaders",
      "Concrete Mixture Machines & Transit Mixers",
      "Re-bar Cutting & Bending Automated Units",
      "Total Station Survey Instruments",
    ],
    featured: true,
    image: "/images/projects/pabna-solar.jpg",
  },
  {
    slug: "madhumati-100mw",
    title: "Madhumati 100MW HFO Power Plant Project",
    location: "Madhumati River Basin, Bangladesh",
    sector: "Power & Marine Engineering",
    status: "completed",
    client: "Independent Power Producer (IPP) / National Grid Contractor",
    summary:
      "Comprehensive civil works, hydraulic land filling, riverbank stabilization, jetty/pontoon erection, and administrative township construction.",
    scope:
      "Dredging, hydraulic land filling, heavy shore protection, riverfront revetment, and complete campus civil engineering for the Madhumati 100MW Power Plant.",
    overview:
      "The Madhumati 100MW HFO Power Plant required comprehensive riverine civil engineering, including reclaiming and elevating flood-vulnerable land, installing heavy bank protection against hydraulic scour, constructing a fuel-receiving jetty/pontoon, and building the full administrative and residential support township.",
    theChallenge:
      "The plant is situated directly on the active riverfront subject to severe seasonal monsoon flooding, strong hydraulic scour currents, and unstable riverbank erosion.",
    theSolution:
      "RASS Associates executed capital suction dredging from deep river channels, hydraulic backfilling to elevate the entire plant footprint above 100-year flood levels, and engineered heavy revetment and shore protection mattresses along the riverfront.",
    metrics: [
      { label: "Plant Capacity", value: "100 MW" },
      { label: "Hydraulic Land Reclamation", value: "35+ Acres" },
      { label: "Shore Protection Length", value: "1.5+ km" },
      { label: "Marine Infrastructure", value: "Jetty & Pontoon" },
    ],
    deliverables: [
      "Capital Dredging, Hydraulic Land Filling, and Heavy Embankment Earthworks",
      "Engineered Protective Work, Bank Stabilization, and Scour-Resistant Revetment",
      "Perimeter Boundary Wall, Security Fencing, and Main Entrance Complex",
      "Heavy-Duty Internal Roads and Highway Approach Roads",
      "Marine Fuel-Offloading Jetty and Floating Pontoon Construction",
      "Comprehensive Rainwater Drainage and Flood Sump System",
      "Officer Dormitory and Staff Dormitory Buildings",
      "Executive Rest House and Central Administration Building",
      "Complete Electrical Wiring, Outdoor Substation Lighting, and Transformers",
      "Ansar Barrack, Security Guard Houses, Parking Plazas, and Landscaped Lawns",
      "Design and Construction of the Power Plant Ceremonial Inauguration Plaque",
    ],
    equipmentDeployed: [
      "20-Inch Cutter Suction Dredgers",
      "Marine Workboats & Floating Pontoons",
      "500mm HDPE Discharge Pipelines & Floaters",
      "Excavators, Pay Loaders & Concrete Mixers",
    ],
    featured: true,
    image: "/images/projects/madhumati.jpg",
  },
  {
    slug: "sirajganj-solar-68mw",
    title: "Sirajganj 68MW Solar Power Plant Project",
    location: "Jamuna River Basin, Sirajganj, Bangladesh",
    sector: "Renewable Energy & Dredging",
    status: "completed",
    client: "Renewable Energy JV / BPDB / NWPGCL",
    summary:
      "Large-scale riverbed cutter suction dredging from the Jamuna River, hydraulic land reclamation, and structural site leveling for a 68 MW solar park.",
    scope:
      "Comprehensive riverbed dredging, hydraulic filling, soil compaction, and foundation site preparation across dynamic riverine char lands.",
    overview:
      "Located in the flood-prone Jamuna river basin, this major utility solar project required massive land reclamation. RASS Associates deployed its cutter suction dredging fleet to dredge sand from the Jamuna riverbed and hydraulically backfill the designated solar park area, establishing a stable, flood-resilient plateau for solar arrays and substations.",
    theChallenge:
      "Navigating intense seasonal flow currents of the Jamuna River and achieving precise soil load-bearing compaction across sand-fill areas destined for sensitive solar PV tracker foundations.",
    theSolution:
      "Utilized 22-inch & 20-inch CSD dredgers with long-distance floating pipelines, delivering controlled silt-free sand and executing multi-stage vibratory compaction.",
    metrics: [
      { label: "Solar Park Capacity", value: "68 MW" },
      { label: "Jamuna Dredging Volume", value: "Millions CFT" },
      { label: "Reclaimed Land Area", value: "200+ Acres" },
      { label: "Foundation Elevation", value: "+3.5m Above Flood Level" },
    ],
    deliverables: [
      "Large-scale riverbed cutter suction dredging from adjacent Jamuna River channels",
      "Hydraulic land filling and controlled moisture-density compaction over low-lying ground",
      "Achieving required structural load-bearing capacity for utility-scale solar mounting structures",
      "Land leveling and grading for solar array tables, central inverters, and high-voltage substation yards",
      "Riverbank protection and dyke construction to guard against monsoon washouts",
    ],
    equipmentDeployed: [
      "22-Inch CSD 550 & 20-Inch CSD Dredgers",
      "Twin-Engine Marine Workboats",
      "Long-Distance HDPE Floating Pipelines",
      "Hydraulic Excavators & Heavy Vibratory Compactors",
    ],
    featured: true,
    image: "/images/projects/sirajganj.jpg",
  },
  {
    slug: "payra-port-terminal-road",
    title: "Payra Port 1st Terminal Road Project (Dredged Sand Filling)",
    location: "Payra Deep Sea Port, Rabnabad Channel, Patuakhali, Bangladesh",
    sector: "Port Infrastructure & Marine Works",
    status: "completed",
    client: "Payra Port Authority (PPA)",
    summary:
      "Supply, hydraulic dredging, long-distance transportation, and placement of over 5 Crore CFT dredged sand for the 1st Terminal main access road.",
    scope:
      "Hydraulic dredging, barging, pumping, and precision placement of 50,000,000 CFT engineered sand adhering to rigorous Fineness Modulus (FM 0.50–0.80) standards.",
    overview:
      "As part of the Government of Bangladesh's flagship mega-project to develop the nation's 3rd deep-sea port, RASS Associates Ltd executed large-scale dredged sand filling works for the Payra Port 1st Terminal Road. The project required dredging, marine transport, hydraulic unloading, and controlled compaction across 5 Crore cubic feet of sand.",
    theChallenge:
      "Meeting strict Fineness Modulus quality specifications (FM 0.50 to 0.80) in deep marine waters while maintaining continuous supply schedules despite rough open-sea tidal conditions.",
    theSolution:
      "Deployed high-capacity CSD dredgers and continuous pipeline systems with real-time laboratory grain-size analysis, completing the 50M CFT placement seamlessly.",
    metrics: [
      { label: "Dredged Sand Volume", value: "5 Crore CFT (~1.4M m³)" },
      { label: "Sand Quality Standard", value: "FM 0.50 – 0.80" },
      { label: "Terminal Corridor Length", value: "Multi-kilometer Expressway" },
      { label: "Authority Approval", value: "100% Joint Measurement Passed" },
    ],
    deliverables: [
      "Execution of large-scale marine dredging and sand extraction for the Payra Port 1st Terminal Road",
      "Supply and placement of approximately 50,000,000 Cubic Feet (5 Crore CFT) of engineered sand",
      "Strict quality control ensuring sand compliance with fineness modulus (FM 0.50–0.80) criteria",
      "Loading, hydraulic transportation, specialized unloading, and dyke backfilling",
      "Full compliance with Payra Port Authority specifications and joint measurement protocols",
      "Engineered embankment stabilization supporting heavy container transport loads",
    ],
    equipmentDeployed: [
      "22-Inch CSD 550 Dredger",
      "Marine Support Vessels & Workboats",
      "500mm Inner-Diameter HDPE Pipelines (720 pcs)",
      "Heavy Earthmoving & Compaction Fleet",
    ],
    featured: false,
    image: "/images/projects/payra-port.jpg",
  },
  {
    slug: "payra-water-intake-dredging",
    title: "Payra 1320MW Power Plant Water Intake Dredging",
    location: "Andharmanik River, Patuakhali, Bangladesh",
    sector: "Dredging & Specialized Marine Services",
    status: "completed",
    client: "Bangladesh China Power Company Ltd. (BCPCL)",
    summary:
      "Precision hydraulic dredging, high-pressure jet loosening, and sediment removal in the high-tidal Andharmanik riverbed to protect primary cooling water intakes.",
    scope:
      "Specialized suction-type hydraulic dredging, underwater bed clearing, and deep channel maintenance around critical power plant cooling intake pumps.",
    overview:
      "The Payra 1320MW Supercritical Thermal Power Plant relies on massive volumes of cooling water drawn from the Andharmanik River. Heavy seasonal siltation threatened to choke the intake screens and pumps. RASS Associates Ltd was engaged to perform high-precision underwater hydraulic dredging and sediment removal to guarantee uninterrupted cooling water supply.",
    theChallenge:
      "Operating in extreme tidal currents with heavy underwater sediment accretion directly adjacent to sensitive submerged intake structures and intake screens.",
    theSolution:
      "Deployed floating hydraulic dredging units equipped with high-pressure water jet loosening nozzles, floating pontoons, and certified commercial dive teams to safely excavate silt without impacting underwater concrete assets.",
    metrics: [
      { label: "Plant Cooling Protected", value: "1320 MW Facility" },
      { label: "Intake Channel Depth", value: "Maintained at Design Draft" },
      { label: "Diving Operations", value: "Certified Commercial Dive Teams" },
      { label: "Operational Downtime", value: "0 Hours (100% Online)" },
    ],
    deliverables: [
      "Specialized suction-type hydraulic dredging in the high-tidal Andharmanik Riverbed",
      "Complete clearance of heavily deposited silt and clay sediment around intake basins",
      "Protection of primary water supply for cooling towers, preventing catastrophic plant shutdowns",
      "Deployment of floating hydraulic dredging units with high-pressure water jet loosening nozzles",
      "Integration of floating pontoons, discharge line systems, and specialized diving teams for underwater clearing",
      "Establishment of regular bathymetric monitoring protocols to track recurring sedimentation",
    ],
    equipmentDeployed: [
      "Specialized Floating Hydraulic Dredging Units",
      "High-Pressure Water Jet Loosening Pump Systems",
      "Marine Support Workboats & Pontoons",
      "Professional Commercial Diving Equipment",
    ],
    featured: false,
    image: "/images/projects/dredging.jpg",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
