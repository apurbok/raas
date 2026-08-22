import {
  Building2,
  Droplets,
  Fuel,
  HardHat,
  Landmark,
  Leaf,
  Route,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export type ServiceSection = {
  heading: string;
  body: string;
  bulletPoints?: string[];
};

export type ServiceMethodology = {
  step: number;
  title: string;
  description: string;
};

export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: LucideIcon;
  href?: string;
  overview: string;
  sections: ServiceSection[];
  capabilities: string[];
  methodology: ServiceMethodology[];
  standardsCompliance: string[];
  keyEquipment: string[];
  benefits: string[];
};

export const services: Service[] = [
  {
    slug: "civil-construction",
    title: "Civil Construction",
    shortDescription:
      "Residential, industrial, and commercial construction from concept to completion.",
    description:
      "RASS Associates Ltd has built a reputation for successfully managing construction projects of all sizes, ranging from residential buildings to large-scale industrial complexes.",
    icon: Building2,
    overview:
      "RASS Associates Ltd is a full-service construction and facilities management company, offering a comprehensive suite of services to meet the needs of our diverse clientele. With a strong focus on quality, efficiency, and innovation, we ensure that every civil construction project we undertake is executed to the highest standards. From initial architectural planning to structural erection, MEP integration, and interior handover, our experienced civil engineers deliver precision at scale.",
    sections: [
      {
        heading: "Residential Buildings",
        body: "We specialize in the construction of luxury apartments, villas, dormitories, and staff accommodations, all designed with the client's vision and comfort in mind. Our residential developments feature modern architectural layouts, optimized ventilation, premium finishing, and sustainable structural designs built to endure for generations.",
        bulletPoints: [
          "Luxury apartments and residential multistory towers",
          "Executive villas, guest houses, and VIP rest houses",
          "Engineered dormitories, staff accommodations, and police barracks",
          "Complete interior finishing, electrical fixtures, and plumbing integration",
        ],
      },
      {
        heading: "Industrial Projects",
        body: "RASS Associates Ltd has extensive experience working on factories, warehouses, power plants, and commercial complexes. We manage large-scale industrial projects with efficiency and precision, leveraging modern construction techniques to meet the unique requirements of each sector.",
        bulletPoints: [
          "Heavy industrial complexes, power plant campus buildings, and substations",
          "Manufacturing plants, lubricant blending facilities, and automated warehouses",
          "Heavy-duty concrete floor slabs, crane gantry structures, and machinery foundations",
          "High-capacity cyclone shelters, central cafeterias, and recreational facilities",
        ],
      },
      {
        heading: "Project Management",
        body: "From concept to completion, we oversee all aspects of the construction process, including scheduling, budgeting, site management, and quality control. Our integrated project management framework ensures full transparency, seamless coordination among subcontractors, and adherence to rigid milestones.",
        bulletPoints: [
          "Comprehensive critical-path scheduling and resource allocation",
          "Rigorous on-site safety protocols and zero-accident policies",
          "Continuous quality assurance and material strength testing (e.g. cylinder crushing tests)",
          "Budget oversight, value engineering, and transparent client reporting",
        ],
      },
    ],
    capabilities: [
      "Luxury apartments, villas, dormitories, and staff accommodations",
      "Factories, warehouses, power plants, and commercial complexes",
      "Project management including scheduling, budgeting, and quality control",
      "On-site supervision, safety monitoring, and cost control",
      "Turnkey structural design and civil execution",
      "High-grade ready-mix concrete placement (Grade 30+)",
    ],
    methodology: [
      {
        step: 1,
        title: "Feasibility & Site Investigation",
        description:
          "Geotechnical soil testing, topographical surveys, structural modeling, and budgetary estimations.",
      },
      {
        step: 2,
        title: "Architectural & Structural Engineering",
        description:
          "Full structural design adhering to BNBC and international building codes with complete 3D BIM integration.",
      },
      {
        step: 3,
        title: "Mobilization & Site Preparation",
        description:
          "Deploying in-house batching plants, transit mixers, earthmoving equipment, and establishing secure site infrastructure.",
      },
      {
        step: 4,
        title: "Precision Construction & QA/QC",
        description:
          "Reinforced concrete casting, steel framing, MEP installation, and continuous non-destructive material testing.",
      },
      {
        step: 5,
        title: "Finishing, Handover & Lifecycle Support",
        description:
          "Comprehensive architectural detailing, client inspections, commissioning, and post-construction maintenance.",
      },
    ],
    standardsCompliance: [
      "Bangladesh National Building Code (BNBC)",
      "ASTM International Standards",
      "ACI (American Concrete Institute) Standards",
      "ISO 9001:2015 Quality Management",
      "ISO 45001 Occupational Health & Safety",
    ],
    keyEquipment: [
      "Concrete Batching Plant (25m³/Hr)",
      "Concrete Mixture Trucks (6m³)",
      "Concrete Pumps (60m³/Hr)",
      "Re-bar Cutting & Bending Machines",
      "5000 sqm Steel Shuttering & Scaffolding",
    ],
    benefits: [
      "Decades of proven track record on national landmark mega-projects (e.g. Payra 1320MW)",
      "Complete in-house machinery fleet eliminating subcontractor delays",
      "Turnkey delivery from conceptual design to final handover",
      "Uncompromising focus on structural safety and durability",
    ],
  },
  {
    slug: "civil-engineering",
    title: "Civil Engineering",
    shortDescription:
      "Infrastructure design and execution for roads, bridges, and utilities.",
    description:
      "RASS Associates Ltd is recognized for its civil engineering expertise, particularly in the design and execution of complex infrastructure projects using advanced techniques and technologies.",
    icon: HardHat,
    overview:
      "Recognized for specialized civil engineering prowess, RASS Associates Ltd designs and executes complex infrastructure projects across Bangladesh. Whether it is building highways, critical bridges, drainage networks, or heavy industrial facilities, our licensed engineers employ cutting-edge computational modeling and modern geotechnical methods to create resilient, sustainable, and high-performance solutions.",
    sections: [
      {
        heading: "Infrastructure Design & Execution",
        body: "We specialize in large-scale projects such as road construction, rail systems, sewer systems, and utilities networks. Our team ensures that each infrastructure project is well-integrated into the existing landscape, focusing on long-term sustainability and community benefit.",
        bulletPoints: [
          "Arterial highways, bypasses, access corridors, and terminal roads",
          "Stormwater drainage systems, culverts, and municipal sewer networks",
          "Underground utility channels, electrical ducting, and water supply infrastructure",
          "Site leveling, grading, and environmental earthworks",
        ],
      },
      {
        heading: "Structural Engineering",
        body: "RASS Associates Ltd's structural engineering team excels at designing structures that are strong, durable, and cost-effective. From high-rise buildings to large industrial structures, we ensure the safety and reliability of all the projects we undertake, meeting national and international codes.",
        bulletPoints: [
          "Deep foundation design including cast-in-situ piles and heavy raft foundations",
          "Seismic and wind-load structural analysis for cyclone-prone coastal zones",
          "Reinforced concrete (RCC) and structural steel design optimizations",
          "Advanced computational structural modeling with finite element analysis",
        ],
      },
      {
        heading: "Environmental Impact Assessments (EIA)",
        body: "We conduct comprehensive environmental studies to assess and mitigate the impact of our projects, ensuring compliance with sustainability standards and regulations. This includes considering the ecosystem, local community, and natural resources during the design and planning phases.",
        bulletPoints: [
          "Ecological baseline studies and water runoff impact analysis",
          "Soil erosion mitigation and riverbank sedimentation controls",
          "Carbon footprint reduction through eco-friendly materials and low-emission machinery",
          "Full compliance with Department of Environment (DoE) regulations",
        ],
      },
    ],
    capabilities: [
      "Road construction, rail systems, sewer systems, and utilities networks",
      "Structural engineering for high-rise and industrial structures",
      "Environmental impact assessments and sustainability compliance",
      "Design services integrated with construction execution",
      "Geotechnical soil stabilization and pile load testing",
      "Advanced topographical and hydrographic surveying",
    ],
    methodology: [
      {
        step: 1,
        title: "Site Survey & Geotechnical Analysis",
        description:
          "Topographical mapping using Total Stations, soil boring, and environmental baseline studies.",
      },
      {
        step: 2,
        title: "Computational Design & Simulation",
        description:
          "Structural, hydraulic, and pavement design in compliance with international engineering codes.",
      },
      {
        step: 3,
        title: "Engineering Review & Regulatory Approvals",
        description:
          "Vetting designs through expert panels and securing all statutory environmental and municipal clearances.",
      },
      {
        step: 4,
        title: "Engineered Construction Execution",
        description:
          "Precision earthworks, foundation casting, utility installation, and structural assembly.",
      },
      {
        step: 5,
        title: "Integrity Testing & As-Built Documentation",
        description:
          "Load testing, non-destructive concrete evaluation, and complete engineering documentation handover.",
      },
    ],
    standardsCompliance: [
      "AASHTO Infrastructure Guidelines",
      "Bangladesh National Building Code (BNBC)",
      "British Standards (BS) & Eurocodes",
      "DoE (Department of Environment) Environmental Standards",
    ],
    keyEquipment: [
      "Total Stations & Theodolites (5 nos each)",
      "Auto Level Machines (5 nos)",
      "Excavators & Pay Loaders",
      "Concrete Test Cylinders & Core Cutters",
    ],
    benefits: [
      "Multidisciplinary engineering team with BUET alumni and international project veterans",
      "Integrated design-build model delivering significant cost and time savings",
      "Resilient engineering designed specifically for Bangladesh's alluvial terrain and monsoon challenges",
    ],
  },
  {
    slug: "property-development",
    title: "Property Development",
    shortDescription:
      "End-to-end real estate development from land acquisition to asset management.",
    description:
      "Our property development services cover every phase of a real estate project, from initial land acquisition to post-construction services, including leasing and asset management. We specialize in creating properties that meet market demand while providing sustainable returns for investors.",
    icon: Landmark,
    overview:
      "Our property development division covers every phase of a real estate project — from strategic land acquisition and feasibility studies to architectural design, construction, sales, and post-construction asset management. We specialize in creating landmark residential and commercial developments that satisfy market demand, enrich communities, and provide high investment returns.",
    sections: [
      {
        heading: "Real Estate Development",
        body: "We manage all aspects of the development process, including identifying potential sites, feasibility studies, land acquisition, design, and construction. Whether residential, commercial, or mixed-use, we deliver developments that align with market trends and the needs of the community.",
        bulletPoints: [
          "Strategic site identification and thorough legal title vetting",
          "Comprehensive market feasibility studies and yield modeling",
          "Innovative architectural planning with high space utilization efficiency",
          "Turnkey construction execution adhering to strict completion schedules",
        ],
      },
      {
        heading: "Project Financing & Consultancy",
        body: "We assist clients in securing financing for development projects and provide consultation on project planning and implementation. We work closely with financial institutions and investors to ensure that projects are economically viable and provide high returns on investment.",
        bulletPoints: [
          "Financial modeling, capital structuring, and cash flow projections",
          "Joint-venture structuring between landowners and corporate developers",
          "Regulatory compliance, building approval coordination, and RAJUK clearances",
          "Investor reporting and risk management advisory",
        ],
      },
      {
        heading: "Post-Construction Services",
        body: "After project completion, RASS Associates Ltd continues to provide maintenance services, tenant management, and facility management to ensure that the property remains in excellent condition and meets the long-term needs of tenants or owners.",
        bulletPoints: [
          "Facility management and round-the-clock maintenance support",
          "Commercial tenant leasing, onboarding, and relationship management",
          "Long-term asset preservation to protect capital appreciation",
          "Energy efficiency audits and utility management",
        ],
      },
    ],
    capabilities: [
      "Site identification, feasibility studies, and land acquisition",
      "Residential, commercial, and mixed-use development",
      "Project financing and consultancy services",
      "Post-construction maintenance and tenant management",
      "Joint venture structuring and legal documentation",
      "Sustainable green building design integration",
    ],
    methodology: [
      {
        step: 1,
        title: "Land Sourcing & Feasibility Study",
        description:
          "Evaluating land potential, legal due diligence, zoning laws, and commercial financial viability.",
      },
      {
        step: 2,
        title: "Design Concept & Master Planning",
        description:
          "Developing architectural master plans, 3D visualizations, and securing statutory approvals.",
      },
      {
        step: 3,
        title: "Financing & Project Launch",
        description:
          "Structuring project financing, joint venture terms, and marketing campaigns.",
      },
      {
        step: 4,
        title: "Turnkey Construction Execution",
        description:
          "Rapid civil construction, high-end finishing, and strict quality control.",
      },
      {
        step: 5,
        title: "Handover & Asset Management",
        description:
          "Unit handover to owners, tenant onboarding, and perpetual facility operations.",
      },
    ],
    standardsCompliance: [
      "RAJUK & National Building Code Compliance",
      "Green Building Guidelines & Energy Efficiency Standards",
      "Real Estate Development & Management Act Compliance",
    ],
    keyEquipment: [
      "Modern Construction Machinery Fleet",
      "Precision Survey Instruments",
      "On-site Heavy Lifting Equipment",
    ],
    benefits: [
      "Holistic lifecycle management from barren land to high-yield operating asset",
      "Transparent joint venture terms maximizing landowner and investor value",
      "Unmatched architectural elegance combined with durable engineering",
    ],
  },
  {
    slug: "asset-management",
    title: "Asset Management",
    shortDescription:
      "Comprehensive facility and property management throughout the asset lifecycle.",
    description:
      "RASS Associates Ltd offers comprehensive asset management services, ensuring that residential, commercial, and industrial properties are maintained and managed effectively throughout their life cycle. Our facility management team works to ensure that your investment retains its value and remains functional.",
    icon: Wrench,
    overview:
      "Asset Management at RASS Associates Ltd provides comprehensive facility and property management services ensuring residential, commercial, and industrial properties retain maximum value, aesthetic appeal, and operational functionality throughout their lifecycle. Our proactive facility managers eliminate downtime, optimize energy consumption, and manage tenant relationships with supreme professionalism.",
    sections: [
      {
        heading: "Property Maintenance",
        body: "We provide regular preventive maintenance to ensure that building systems, including HVAC, plumbing, and electrical systems, are always in optimal condition. Our team handles routine inspections, repairs, and replacements, addressing issues before they become costly problems.",
        bulletPoints: [
          "24/7 emergency repair response and planned preventive maintenance (PPM)",
          "HVAC system servicing, air filtration, and chiller maintenance",
          "Electrical substation, transformer, and backup generator servicing",
          "Plumbing, water filtration, and sewage treatment plant (STP) operation",
        ],
      },
      {
        heading: "Energy Management",
        body: "As part of our asset management services, we focus on energy efficiency and sustainability. We help clients reduce their operating costs by implementing energy-saving initiatives, smart building technologies, and environmentally-friendly practices.",
        bulletPoints: [
          "Comprehensive energy audits and consumption optimization",
          "Solar rooftop integration and smart building automation (BMS)",
          "LED retrofits and motion-sensor energy conservation systems",
          "Water recycling and rainwater harvesting management",
        ],
      },
      {
        heading: "Leasing & Tenant Management",
        body: "For commercial properties, we manage tenant relationships, including lease renewals, rental payments, and service requests. Our goal is to maximize the profitability and functionality of properties while maintaining positive relationships with tenants.",
        bulletPoints: [
          "Tenant screening, onboarding, and lease agreement administration",
          "Timely rent collection, invoicing, and transparent financial reporting",
          "Dedicated helpdesk for tenant inquiries and rapid maintenance dispatch",
          "Common area maintenance (CAM) budgeting and reconciliation",
        ],
      },
    ],
    capabilities: [
      "Preventive maintenance for HVAC, plumbing, and electrical systems",
      "Energy management and smart building technologies",
      "Leasing and tenant relationship management",
      "Infrastructure asset repair including bridges and flood maintenance",
      "24/7 security management and access control systems",
      "Janitorial, housekeeping, and landscaping maintenance",
    ],
    methodology: [
      {
        step: 1,
        title: "Asset Audit & Condition Assessment",
        description:
          "Thorough inspection of all mechanical, electrical, plumbing, and structural components.",
      },
      {
        step: 2,
        title: "Preventive Maintenance Schedule",
        description:
          "Formulating computerized maintenance schedules for zero-downtime operations.",
      },
      {
        step: 3,
        title: "Energy & Operational Optimization",
        description:
          "Deploying smart monitoring tools to curb utility costs and enhance environmental efficiency.",
      },
      {
        step: 4,
        title: "Daily Operations & Tenant Support",
        description:
          "On-site technical staff managing routine maintenance, security, and tenant queries.",
      },
      {
        step: 5,
        title: "Quarterly Performance & Financial Review",
        description:
          "Delivering detailed financial statements, asset valuation reports, and CAPEX forecasts.",
      },
    ],
    standardsCompliance: [
      "ISO 55001 Asset Management Framework",
      "ASHRAE HVAC & Energy Conservation Standards",
      "NFPA Fire Safety & Emergency Preparedness Codes",
    ],
    keyEquipment: [
      "Backup Generators (275 KVA & 100 KVA)",
      "High-Pressure Jet Cleaning Units",
      "Electrical Diagnostic & Thermal Imaging Tools",
    ],
    benefits: [
      "Extends asset lifespan while reducing annual operating expenditures",
      "High tenant retention rates through responsive 24/7 service",
      "Preserves capital value and boosts property yield for institutional owners",
    ],
  },
  {
    slug: "bridging-structural",
    title: "Bridging & Structural Engineering",
    shortDescription:
      "Bridge design, construction, and structural analysis for critical infrastructure.",
    description:
      "Our bridging & structural engineering services focus on designing, constructing, and maintaining safe and reliable bridges and other critical infrastructure. RASS Associates Ltd's structural engineers specialize in designing custom solutions for both road bridges and rail bridges, ensuring that they meet both technical and environmental requirements.",
    icon: Route,
    overview:
      "Specializing in bridge engineering and complex heavy structural works, RASS Associates Ltd provides turnkey design, engineering, construction, and rehabilitation services for critical transport infrastructure. From precast concrete I-beam bridges to arch and suspension structures spanning challenging waterways, our engineering team ensures high structural longevity and safety under extreme environmental loads.",
    sections: [
      {
        heading: "Bridge Design & Construction",
        body: "RASS Associates Ltd's team designs and builds various types of bridges, including I-beam bridges, arch bridges, suspension bridges, and precast concrete structures. We incorporate the latest engineering techniques and materials to enhance the structural integrity and longevity of our projects.",
        bulletPoints: [
          "Precast prestressed concrete girder (I-beam) and box girder bridges",
          "Arch bridges, cable-stayed concepts, and pedestrian overpasses",
          "Underwater pier construction, cofferdams, and deep driven/cast-in-situ piling",
          "Heavy steel fabrication, truss assembly, and bearing installations",
        ],
      },
      {
        heading: "Structural Analysis & Feasibility",
        body: "Our team conducts thorough structural analysis and site assessments to determine the feasibility and best approach for each project. We factor in load-bearing capacity, environmental conditions, and traffic demands to deliver durable and cost-effective solutions.",
        bulletPoints: [
          "Hydraulic scour analysis and bathymetric riverbed profiling",
          "Seismic analysis and dynamic wind load simulations",
          "Finite element modeling for high-stress structural nodes",
          "Non-destructive load testing and deflection monitoring",
        ],
      },
    ],
    capabilities: [
      "I-beam, arch, suspension, and precast concrete bridges",
      "Structural analysis and site feasibility assessments",
      "In-house steel fabrication, piling, and precast concrete",
      "Low-level crossings and heavy civil engineering works",
      "Bridge rehabilitation, deck resurfacing, and expansion joint replacement",
      "Hydraulic scour protection and revetment design",
    ],
    methodology: [
      {
        step: 1,
        title: "Hydrological & Geotechnical Investigation",
        description:
          "Measuring river discharge velocities, flood levels, bed scour potential, and deep borehole soil bearing capacity.",
      },
      {
        step: 2,
        title: "Structural Modeling & Design Optimization",
        description:
          "Designing superstructure girders and substructure piers conforming to AASHTO and BNBC load standards.",
      },
      {
        step: 3,
        title: "Piling & Substructure Erection",
        description:
          "Deep bored piling in water, pile cap casting, and reinforced pier construction using specialized shuttering.",
      },
      {
        step: 4,
        title: "Superstructure Girder Launching",
        description:
          "Casting and prestressing high-strength RCC girders, crane launching, and deck slab casting.",
      },
      {
        step: 5,
        title: "Bridge Deck Finishing & Proof Load Testing",
        description:
          "Wearing course asphalt paving, barrier erection, expansion joint installation, and static/dynamic load validation.",
      },
    ],
    standardsCompliance: [
      "AASHTO LRFD Bridge Design Specifications",
      "Bangladesh Roads & Highways Department (RHD) Standards",
      "BNBC Chapter on Bridge Structures",
      "ASTM Structural Steel & Concrete Standards",
    ],
    keyEquipment: [
      "Heavy Crawler Cranes & Pay Loaders",
      "Concrete Batching Plant & Transit Mixers",
      "Steel Props (15,000 pcs) & Shuttering (5,000 sqm)",
      "Total Station & Precision Theodolites",
    ],
    benefits: [
      "Proven capability in navigating complex tidal and alluvial riverbed conditions in Bangladesh",
      "In-house heavy lifting, formwork, and concrete pumping resources",
      "Engineered for 100+ year design lifespan with minimal maintenance requirements",
    ],
  },
  {
    slug: "landscaping",
    title: "Landscaping",
    shortDescription:
      "Soft and hard landscaping for residential, commercial, and public spaces.",
    description:
      "At RASS Associates Ltd, we understand the importance of creating functional and aesthetic outdoor spaces. Whether it's for residential properties, commercial complexes, or public spaces, our landscaping services provide customized solutions that enhance the visual appeal and functionality of the environment.",
    icon: Leaf,
    overview:
      "Landscaping by RASS Associates Ltd merges natural ecology with architectural elegance to create vibrant, sustainable outdoor environments. From luxury resort grounds and corporate office plazas to mega power plant campuses and public parks, our landscape architects and horticulturists deliver comprehensive soft and hard landscaping solutions.",
    sections: [
      {
        heading: "Soft Landscaping",
        body: "Our soft landscaping services include planting, lawn care, garden design, and the development of natural elements like water features and green spaces. We select plants that thrive in the local climate, creating beautiful and sustainable landscapes.",
        bulletPoints: [
          "Native flora selection, ornamental tree planting, and lush lawn turfing",
          "Custom water bodies, fountains, decorative lakes, and reflection ponds",
          "Automated micro-irrigation, sprinkler networks, and rainwater recycling",
          "Eco-friendly soil enrichment and sustainable horticulture maintenance",
        ],
      },
      {
        heading: "Hard Landscaping",
        body: "We also provide hard landscaping solutions, such as patios, walkways, retaining walls, and fencing. Our team uses durable materials to ensure that hard landscaping elements are functional and aesthetically pleasing.",
        bulletPoints: [
          "Interlocking concrete paver walkways, plazas, and pedestrian promenades",
          "Retaining walls, stepped terraces, and perimeter boundary fencing",
          "Outdoor seating gazebos, pergolas, and architectural lighting fixtures",
          "Sports complexes, swimming pool decks, tennis courts, and kids play zones",
        ],
      },
    ],
    capabilities: [
      "Garden design, planting, lawn care, and water features",
      "Patios, walkways, retaining walls, and fencing",
      "Sports and recreational facility landscaping",
      "Irrigation, land drainage, and earthworks",
      "Power plant and industrial campus green buffer development",
      "Resort master planning and eco-tourism landscape construction",
    ],
    methodology: [
      {
        step: 1,
        title: "Site Topography & Soil Conditioning",
        description:
          "Assessing soil nutrients, drainage slopes, sun exposure, and creating 3D master landscape drawings.",
      },
      {
        step: 2,
        title: "Civil Hardscaping & Earth Shaping",
        description:
          "Excavating water bodies, leveling terraces, and laying drainage networks and electrical conduits.",
      },
      {
        step: 3,
        title: "Paving & Structural Installation",
        description:
          "Installing eco-pavers, retaining walls, decorative curbs, and architectural lighting.",
      },
      {
        step: 4,
        title: "Softscape Turfing & Horticultural Planting",
        description:
          "Planting climate-resilient trees, shrubs, flower beds, and laying lush Bermuda/Carpet grass sod.",
      },
      {
        step: 5,
        title: "Irrigation Setup & Ongoing Care",
        description:
          "Commissioning automated irrigation timers and providing continuous groundskeeping care.",
      },
    ],
    standardsCompliance: [
      "Landscape Architecture Institute Standards",
      "Water Conservation & Eco-Irrigation Protocols",
      "DoE Greenery & Environmental Compliance",
    ],
    keyEquipment: [
      "Earthmoving Excavators & Pay Loaders",
      "Soil Compactors & Leveling Instruments",
      "Irrigation Jet Pumps & Hose Networks (2,000 rft)",
    ],
    benefits: [
      "Creates stunning visual environments that elevate real estate value and human well-being",
      "Sustainable plant selection ensuring year-round greenery with minimal water consumption",
      "Direct showcase experience on major projects like Payra VIP Rest House and RASS Resort",
    ],
  },
  {
    slug: "road-pavement",
    title: "Road & Pavement",
    shortDescription:
      "Road construction, repair, and pavement services for durable infrastructure.",
    description:
      "RASS Associates Ltd is highly skilled in the construction, repair, and maintenance of roads and pavements, providing durable, safe, and sustainable infrastructure solutions.",
    icon: Route,
    overview:
      "Skilled in modern highway and pavement engineering, RASS Associates Ltd constructs durable, safe, and sustainable roads designed to endure heavy industrial traffic and seasonal monsoon conditions. Our services span full-depth road construction, RCC heavy-duty pavements, asphalt overlaying, and drainage infrastructure for industrial zones, ports, and urban corridors.",
    sections: [
      {
        heading: "Road Construction & Repair",
        body: "We offer comprehensive services in road construction, including site preparation, asphalt paving, drainage, and curb installation. Our team ensures that the roads are built to last and can withstand heavy traffic and environmental conditions.",
        bulletPoints: [
          "Full-depth asphalt concrete (AC) and reinforced cement concrete (RCC) roads",
          "Sub-grade stabilization, aggregate base course laying, and high-density compaction",
          "Side drainage channels, culverts, curbs, and storm runoff collection systems",
          "Road widening, pothole repair, resurfacing, and pavement rejuvenation",
        ],
      },
      {
        heading: "Pavement Services",
        body: "From sidewalks to parking lots, we construct high-quality pavements that are designed for heavy usage while maintaining a smooth, safe surface. Our pavement repair services ensure the longevity of existing infrastructure.",
        bulletPoints: [
          "Heavy-duty interlocking concrete block paving for ports, container yards, and factory floors",
          "Pedestrian sidewalks, tactile paving, and commercial parking facilities",
          "Slip repair, embankment protection, and registered drain layer services",
          "Road markings, retro-reflective signage, and traffic safety furniture installation",
        ],
      },
    ],
    capabilities: [
      "Site preparation, asphalt paving, drainage, and curb installation",
      "Sidewalks, parking lots, and heavy-usage pavements",
      "Traffic management and public accountability projects",
      "Slip repair and registered drain layer services",
      "Terminal road construction with hydraulic dredged sand filling",
      "High-load container yard concrete block paving",
    ],
    methodology: [
      {
        step: 1,
        title: "Subgrade Assessment & Survey",
        description:
          "CBR (California Bearing Ratio) soil testing, cross-section leveling, and traffic load modeling.",
      },
      {
        step: 2,
        title: "Earthworks & Sand Hydraulic Backfill",
        description:
          "Excavation, placement of engineered sand (FM 0.50-0.80), and vibratory compaction to 98% Proctor density.",
      },
      {
        step: 3,
        title: "Base Course & Drainage Construction",
        description:
          "Laying crushed stone aggregate base and constructing RCC side drains and cross-culverts.",
      },
      {
        step: 4,
        title: "Pavement Laying (Asphalt / RCC / Pavers)",
        description:
          "Precision paving with asphalt pavers or mechanized slipform concrete casting.",
      },
      {
        step: 5,
        title: "Safety Markings & Handover",
        description:
          "Thermoplastic road marking, kerb stone painting, road sign installation, and roughness index testing.",
      },
    ],
    standardsCompliance: [
      "RHD (Roads and Highways Department) Standard Specifications",
      "AASHTO Highway & Pavement Design Standards",
      "ASTM Bituminous Materials & Concrete Testing",
    ],
    keyEquipment: [
      "Pay Loaders & Heavy Excavators",
      "Concrete Mixture Trucks & Pumps",
      "Compaction Rollers & Plate Compactors",
      "Total Stations & Theodolites",
    ],
    benefits: [
      "Proven execution on mega transport links including Payra Port 1st Terminal Road",
      "Exceptional pavement lifespan through strict material quality control",
      "Rapid deployment minimizing public traffic disruption",
    ],
  },
  {
    slug: "dredging-excavating",
    title: "Dredging & Excavating",
    shortDescription:
      "Capital dredging, land reclamation, and marine civil works across Bangladesh.",
    description:
      "RASS Associates Ltd provides specialized dredging and excavating services essential for land development, coastal restoration, and marine projects. To develop a balanced and cost-effective transport system in Bangladesh, we recognize the paramount importance of comprehensive capital and maintenance dredging programs. By addressing the critical challenges of maintaining navigable waterways and managing floods, RASS Associates aligns its operations with the Government of Bangladesh's Delta Plan 2100.",
    icon: Droplets,
    overview:
      "As Bangladesh's leading marine and earthwork specialist, RASS Associates Ltd operates a high-capacity dredging fleet including 22-inch CSD 550 and 20-inch Cutter Suction Dredgers. Aligned with the national Delta Plan 2100, we deliver capital river dredging, port channel deepening, massive hydraulic land filling, and anti-erosion shore protection across Bangladesh's major river systems including the Jamuna, Meghna, and Andharmanik.",
    sections: [
      {
        heading: "Our Dredging Mission & Vision",
        body: "Mission: We aim to deliver reliable, efficient, and environmentally responsible dredging solutions across Bangladesh's inland waterways. Our goal is to contribute to the restoration of navigable rivers, support sustainable waterway infrastructure, and drive economic development by making major rivers navigable year-round.\n\nVision: Our vision is to provide an exceptional experience to our clients and act as an indispensable partner, becoming Bangladesh's most trusted and technically capable dredging entity.",
      },
      {
        heading: "Core Marine & Dredging Services",
        body: "RASS Associates Ltd delivers a comprehensive range of specialized dredging and marine civil works tailored to public mandates and private industrial developers.",
        bulletPoints: [
          "Capital & Maintenance Dredging: Excavating silt and sediments from riverbeds and navigation channels to re-establish design draft depths.",
          "Land Reclamation & Hydraulic Filling: Backfilling low-lying terrain with dredged material to build flood-safe foundations for power plants and industrial parks.",
          "Riverbank Protection & Anti-Erosion: Heavy bank stabilization, geotextile bag revetments, and scouring countermeasures to protect vulnerable riverfronts.",
          "Hydrographic & Bathymetric Surveying: Precision sonar depth mapping and 3D spatial modeling to track riverbed morphology before and after dredging.",
          "Marine Construction Support: Underwater trenching, pipeline crossings, cofferdams, and bridge foundation clearing.",
          "Dredger Rental & Fleet Management: Supplying heavy-duty CSD dredgers, workboats, houseboats, and HDPE discharge lines on flexible terms.",
        ],
      },
      {
        heading: "State-of-the-Art Dredging Fleet",
        body: "Our heavy-duty marine fleet is built for tough riverine and harbor conditions.",
        bulletPoints: [
          "22-Inch CSD 550: Dredging depth up to 15m, discharge distance up to 2,000m, 600mm suction / 550mm discharge, 1270 kW Caterpillar engine.",
          "20-Inch CSDs: Maximum depth 15m, 508mm suction diameter, 1788 kW total installed power, automated central controls.",
          "Support Vessels: Three 12-meter workboats (twin 200hp, Radar, Gyro, Firefighting) and Three 16-meter houseboats (accommodating 26 crew members each).",
          "Discharge Infrastructure: 720 pieces of 500mm HDPE pipes, 150 heavy-duty rubber hoses, and 240 pairs of long-distance floaters.",
        ],
      },
    ],
    capabilities: [
      "Capital and maintenance dredging for navigable waterways",
      "Land reclamation and hydraulic filling",
      "Riverbank protection and anti-erosion measures",
      "Hydrographic surveying and dredger rental services",
      "22-inch & 20-inch Cutter Suction Dredger operations",
      "Long-distance spoil transport through floating HDPE pipeline networks",
    ],
    methodology: [
      {
        step: 1,
        title: "Pre-Dredge Bathymetric Survey",
        description:
          "Dual-frequency echo-sounder surveying to map existing riverbed depths and quantify excavation volumes.",
      },
      {
        step: 2,
        title: "Fleet Mobilization & Pipeline Deployment",
        description:
          "Positioning CSD dredgers, anchor spuds, support workboats, and linking floating HDPE pipelines with floaters.",
      },
      {
        step: 3,
        title: "Hydraulic Dredging & Cutter Excavation",
        description:
          "Centrally automated cutter suction excavation loosening riverbed silt and pumping slurries over distances up to 2 km.",
      },
      {
        step: 4,
        title: "Hydraulic Land Fill & Compaction",
        description:
          "Discharging fill material inside dyked reclamation zones, dewatering, and leveling for structural load-bearing capacity.",
      },
      {
        step: 5,
        title: "Post-Dredge Hydrographic Verification",
        description:
          "Conducting joint cross-section soundings to verify navigation channel depth and compliance with contract tolerances.",
      },
    ],
    standardsCompliance: [
      "Bangladesh Delta Plan 2100 Framework",
      "BIWTA (Bangladesh Inland Water Transport Authority) Standards",
      "IMO (International Maritime Organization) Safety Codes",
      "DoE Marine Environmental Regulations",
    ],
    keyEquipment: [
      "22-Inch CSD 550 Dredger",
      "20-Inch CSD Dredgers",
      "3x 12m Marine Workboats (Twin 200HP)",
      "3x 16m Houseboats (26-Crew capacity)",
      "720 pcs 500mm HDPE Pipes & 240 Floater Pairs",
    ],
    benefits: [
      "Massive volume handling capability exceeding 5 Crore CFT on critical national projects",
      "Self-contained marine fleet with dedicated crew accommodation houseboats",
      "Direct contributions to national landmark projects (Payra 1320MW Intake, Sirajganj Solar, Payra Port)",
    ],
  },
  {
    slug: "oil-gas-services",
    title: "International Oil & Gas Services",
    shortDescription:
      "International engineering, energy, and industrial solutions for oil & gas infrastructure across global markets.",
    description:
      "RASS Associates Ltd's Oil & Gas division delivers world-class international energy infrastructure solutions, integrating proven construction and marine engineering capabilities with strategic global affiliations.",
    icon: Fuel,
    href: "/oil-gas/",
    overview:
      "Positioned as an international engineering, energy, and industrial solutions platform, RASS Associates delivers blended expertise across green energy, oil & gas infrastructure, industrial solutions, project management, and international trading — backed by decades of practical project experience across Bangladesh and expanding into the Middle East, China, USA, and global markets.",
    sections: [
      {
        heading: "Oil & Gas Infrastructure Development",
        body: "Design, construction, and maintenance of oil & gas infrastructure including storage terminals, pipeline networks, processing facilities, and LNG regasification plants.",
        bulletPoints: [
          "Storage tanks and terminal facilities for crude oil, refined products, and LPG",
          "Cross-country pipeline construction and trenchless HDD pipeline crossings",
          "Compressor stations, pump stations, and metering facilities",
          "LNG regasification terminal civil works and marine loading infrastructure",
        ],
      },
      {
        heading: "Green Energy & Transition Projects",
        body: "Combined expertise in renewable energy and clean fuel technologies, supporting the global energy transition through solar, wind, and hybrid energy infrastructure projects.",
        bulletPoints: [
          "Utility-scale solar PV farms and solar park civil infrastructure",
          "International energy solution projects across global and regional markets",
          "Battery energy storage systems (BESS) and renewable power integration",
          "Carbon-neutral facility design and environmental compliance engineering",
        ],
      },
      {
        heading: "Industrial Solutions & EPC Services",
        body: "Full-cycle industrial solutions spanning engineering, procurement, and construction with specialized capabilities for international power plants, processing facilities, and heavy industrial complexes.",
        bulletPoints: [
          "Turnkey EPC project management from feasibility to commissioning",
          "Power plant civil infrastructure and township development",
          "Heavy industrial facilities, processing plants, and global manufacturing complexes",
        ],
      },
    ],
    capabilities: [
      "Oil & gas storage terminals, pipelines, and processing facilities",
      "LNG regasification plants and terminal civil works",
      "International energy infrastructure and green energy (solar, wind) projects",
      "EPC project management for global energy markets",
      "International trading, procurement, and supply chain solutions",
      "Project management, joint ventures, and market entry across MENA, China, USA, and Europe",
    ],
    methodology: [
      {
        step: 1,
        title: "Global Market & Site Feasibility",
        description:
          "Evaluating international project sites, regulatory requirements, and market-entry strategies.",
      },
      {
        step: 2,
        title: "International Partnering & Affiliations",
        description:
          "Structuring strategic affiliations with global EPC contractors, technology providers, and local partners.",
      },
      {
        step: 3,
        title: "EPC Execution for Energy Infrastructure",
        description:
          "Turnkey engineering, procurement, and construction across global energy infrastructure and green energy projects.",
      },
      {
        step: 4,
        title: "Commissioning & Handover",
        description:
          "System integration, testing, reliability analysis, and seamless operational handover.",
      },
      {
        step: 5,
        title: "Lifecycle Support & Global Expansion",
        description:
          "Long-term operations, maintenance services, and expansion into new international markets.",
      },
    ],
    standardsCompliance: [
      "International Energy Standards & Codes",
      "ISO 9001, ISO 14001, ISO 45001",
      "United Nations Sustainable Development Goals (SDGs)",
      "Local DoE & Global Environmental Regulations",
    ],
    keyEquipment: [
      "Heavy Civil & Marine Construction Fleet",
      "Specialist Energy Infrastructure Machinery",
      "International Logistics & Supply Chain Networks",
    ],
    benefits: [
      "Backed by 42+ years of combined international experience",
      "Global network of strategic affiliations and partnerships",
      "Delivering energy infrastructure to global, national, and industrial clients",
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
