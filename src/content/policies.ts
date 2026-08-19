export type SisterConcern = {
  slug: string;
  name: string;
  tagline: string;
  category: string;
  description: string;
  highlights: string[];
  specs?: { label: string; value: string }[];
  website?: string;
  email?: string;
  phone?: string;
  address?: string;
};

export type AffiliatedCompany = {
  slug: string;
  name: string;
  tagline: string;
  category: string;
  description: string;
  highlights: string[];
  website: string;
};

export const affiliatedCompanies: AffiliatedCompany[] = [
  {
    slug: "denzai-group",
    name: "DenZai Group",
    tagline: "International Engineering & Industrial Solutions Platform",
    category: "Engineering & Industrial Solutions",
    description:
      "DenZai Group is a strategic international brand of RASS Associates dedicated to expanding our engineering, energy, and industrial solutions footprint across the Middle East, China, USA, and other global markets. Through strategic affiliations with international technology providers, manufacturers, EPC contractors, and business partners, DenZai Group delivers blended expertise spanning green energy, engineering, industrial solutions, project management, and international trading.",
    highlights: [
      "International market presence across the Middle East, China, USA, and emerging economies",
      "Strategic partnerships with global technology providers, manufacturers, and EPC contractors",
      "End-to-end project management from feasibility through execution and operations",
      "International trading capabilities for industrial equipment, machinery, and energy infrastructure",
      "Blended expertise across green energy, engineering, and industrial solutions",
    ],
    website: "https://www.denzai.group",
  },
  {
    slug: "conveyor-bangladesh",
    name: "Conveyor Bangladesh",
    tagline: "Industrial Conveying & Material Handling Solutions",
    category: "Industrial Solutions & Trading",
    description:
      "Conveyor Bangladesh is a specialized industrial brand focused on the engineering, supply, installation, and maintenance of conveyor systems, material handling equipment, and bulk solids processing solutions. Leveraging strategic affiliations with international conveyor technology manufacturers, we serve power plants, cement factories, ports, and industrial manufacturing facilities across Bangladesh and the regional market.",
    highlights: [
      "Design, supply, and installation of belt conveyor systems for heavy industry",
      "International partnerships with conveyor technology manufacturers and specialists",
      "Bulk material handling solutions for power plants, ports, and industrial facilities",
      "Spare parts supply, retrofitting, and routine conveyor maintenance services",
      "Industrial equipment trading supporting international OEM supply chains",
    ],
    website: "https://www.conveyor.com.bd",
  },
];

export const sisterConcerns: SisterConcern[] = [
  {
    slug: "rass-resort",
    name: "RASS Resort",
    tagline: "Relax and Refresh — A Perfect Family Getaway!",
    category: "Hospitality & Eco-Tourism",
    description:
      "Embracing a rich green landscape surrounded by exotic natural serenity, RASS Resort is located at Uttar Pelaid, Telihaty, Sreepur, Gazipur — just a 1.5-hour drive from Dhaka. Featuring 30 stylish rooms arranged across three distinct zones, it offers the ultimate venue for corporate conventions, family reunions, destination weddings, and day-long outings.",
    highlights: [
      "30 Stylish accommodation units including 6 Premium Bungalows & 4 ARCH Cottages",
      "8 ANNEX Deluxe Rooms designed with modern elegance and panoramic nature views",
      "Spectacular resort swimming pool and tropical leisure decks",
      "24-hour permanent resort security and concierge service",
      "Dedicated corporate conference zones, banquet lawns, and kids activity park",
    ],
    specs: [
      { label: "Location", value: "Sreepur, Gazipur (1.5h from Dhaka)" },
      { label: "Rooms & Suites", value: "30 Luxury Units" },
      { label: "Specialty", value: "Bungalows, Cottages & Pool" },
      { label: "Event Capacity", value: "500+ Guests" },
    ],
    website: "https://www.rassresort.com",
    email: "reservation@rassresort.com",
    phone: "+88019 7524 9999",
    address: "Uttar Pelaid, Telihaty, Sreepur, Gazipur, Bangladesh",
  },
  {
    slug: "nrl-eco-bricks",
    name: "NRL Eco Bricks Limited",
    tagline: "The Greener Alternative",
    category: "Sustainable Building Materials",
    description:
      "NRL Eco Bricks Limited is a leading manufacturer of eco-friendly concrete block products using state-of-the-art German technology. Operating from a massive 20,000-square-meter automated factory in Gazipur with a daily capacity of 100,000 blocks, NRL is revolutionizing construction while preserving arable agricultural topsoil.",
    highlights: [
      "State-of-the-art automated German manufacturing technology",
      "Massive 20,000 sqm modern manufacturing plant in Gazipur",
      "High daily production capacity of 100,000 eco-friendly blocks",
      "BUET-tested and certified compressive strength for extreme structural durability",
      "Product range: Hollow Blocks, Interlocking / I-Blocks, Erosion Control Blocks, Pavers & Kerb Stones",
    ],
    specs: [
      { label: "Factory Area", value: "20,000 m² in Gazipur" },
      { label: "Daily Output", value: "100,000 Blocks/Day" },
      { label: "Technology", value: "Automated German Plant" },
      { label: "Testing", value: "Certified by BUET" },
    ],
    email: "info@rassassociates.com",
    phone: "+8801975245555",
    address: "Uttar Pelaid, Telihaty, Sreepur, Gazipur, Bangladesh",
  },
  {
    slug: "orbed-green-energy",
    name: "Orbed Green Energy Limited (OGEL)",
    tagline: "Accelerating Bangladesh's Energy Transition",
    category: "Renewable Energy & Solar EPC",
    description:
      "Orbed Green Energy Limited (OGEL) is a premier renewable energy solutions provider and sister concern of RASS Associates Ltd. OGEL delivers end-to-end solar solutions spanning design, engineering, Tier-1 equipment supply, system integration, and long-term operations & maintenance (O&M) for residential, commercial, and industrial clients.",
    highlights: [
      "Turnkey rooftop solar solutions for commercial, industrial, and residential facilities",
      "Utility-scale ground-mount solar engineering with On-Grid, Off-Grid, and Net-Metered systems",
      "Trusted importer of Tier-1 solar panels (Jinko Solar, LONGi, JA Solar, Trina)",
      "High-efficiency solar inverters, MPPT controllers, and LiFePO4 battery energy storage",
      "Comprehensive 25+ year lifecycle O&M and remote performance monitoring",
    ],
    specs: [
      { label: "Core Focus", value: "Solar EPC & Tier-1 Import" },
      { label: "Architectures", value: "On-Grid / Off-Grid / Hybrid" },
      { label: "Tier-1 Brands", value: "Jinko, LONGi, JA Solar" },
      { label: "Lifespan Support", value: "25+ Years O&M" },
    ],
    website: "https://www.orbedenergy.com",
    email: "orbedenergy@gmail.com",
    phone: "+8801340320161",
    address: "House 482 (1st Floor), Road 6, Avenue 6, Mirpur DOHS, Dhaka 1216, Bangladesh",
  },
];

export const hsePolicy = {
  title: "Health, Environment, and Safety Policy (HES)",
  shortTitle: "HES Policy",
  description:
    "RASS Associates Ltd is committed to providing a safe, healthy, and environmentally responsible workplace across all construction and marine operations.",
  overview:
    "At RASS Associates Ltd., health, safety, and environmental protection are fundamental to the success of our projects. This Health, Safety, and Environmental (HSE/HES) policy outlines our commitment to proactive risk management, sustainable green construction, employee well-being, and continuous operational improvement. Through adherence to this policy, we aim to exceed industry standards, ensuring the well-being of our people, our clients, and the natural environment.",
  commitments: [
    {
      title: "1. Health and Safety Commitment",
      subtitle: "Zero Harm & Proactive Protection",
      content:
        "We are dedicated to ensuring the health and safety of our employees, contractors, clients, and all stakeholders. Our goal is to prevent accidents and injuries through proactive measures and continuous training.",
      points: [
        {
          label: "Risk Management",
          text: "Regular job safety analyses (JSA) and comprehensive risk assessments are carried out before starting any activity, and control measures are strictly enforced.",
        },
        {
          label: "Training and Awareness",
          text: "All employees and site workers receive regular safety inductions, mandatory daily toolbox talks, and participate in scheduled emergency evacuation drills.",
        },
        {
          label: "Incident Reporting and Investigation",
          text: "Any incidents or near-misses are immediately documented and thoroughly investigated to identify root causes, prevent recurrence, and drive continuous improvement.",
        },
      ],
    },
    {
      title: "2. Environmental Management",
      subtitle: "Sustainable Construction & Resource Conservation",
      content:
        "We recognize the paramount importance of environmental sustainability in all our construction, dredging, and operational activities across Bangladesh.",
      points: [
        {
          label: "Compliance with Regulations",
          text: "RASS Associates Ltd complies with all national environmental laws, Department of Environment (DoE) standards, and international ecological guidelines.",
        },
        {
          label: "Sustainability Initiatives",
          text: "We minimize environmental footprint through energy-efficient practices, dust suppression, water recycling, and the integration of eco-friendly building materials like German-technology eco-bricks.",
        },
        {
          label: "Responsible Waste Management",
          text: "Waste generated on-site is categorized, segregated, and managed responsibly, with primary emphasis on recycling, material re-use, and safe disposal.",
        },
      ],
    },
    {
      title: "3. Responsibilities Across All Levels",
      subtitle: "Leadership & Individual Accountability",
      content:
        "Safety and environmental stewardship are shared responsibilities embedded across every tier of the organization.",
      points: [
        {
          label: "Management Leadership",
          text: "Senior leadership allocates necessary financial and safety resources, ensures full statutory compliance, and champions a proactive HSE culture.",
        },
        {
          label: "Employee Ownership",
          text: "All employees are empowered and expected to adhere to safety protocols, wear mandatory PPE, report hazards, and participate actively in safety meetings.",
        },
        {
          label: "Contractors & Subcontractors",
          text: "All contractors and subcontractors must strictly comply with RASS Associates Ltd's HSE policies and follow established safety guidelines at all times.",
        },
      ],
    },
    {
      title: "4. Emergency Preparedness & Response",
      subtitle: "Rapid Action in Critical Scenarios",
      content:
        "We maintain robust emergency response plans tailored to each site's specific risks, including cyclone preparedness in coastal zones, fire response, and marine medical emergencies.",
      points: [
        {
          label: "Site Emergency Plans",
          text: "Emergency response plans are in place for all potential risks, reviewed and updated regularly with local emergency authorities.",
        },
        {
          label: "Regular Drills",
          text: "All personnel participate in periodic emergency drills, first aid simulations, and fire suppression exercises ensuring an effective, coordinated response.",
        },
      ],
    },
    {
      title: "5. Monitoring and Continuous Improvement",
      subtitle: "Rigorous Audits & Transparent Feedback",
      content:
        "We treat HSE as a dynamic system driven by continuous audits, inspection checklists, and transparent feedback from field personnel.",
      points: [
        {
          label: "Performance Monitoring",
          text: "We regularly assess HSE performance through internal and third-party audits, site safety inspections, and KPI reviews to ensure ongoing compliance.",
        },
        {
          label: "Continuous Improvement",
          text: "Feedback from frontline employees, engineers, and client safety officers is actively sought and integrated to constantly elevate our HSE standards.",
        },
      ],
    },
    {
      title: "6. Commitment to Excellence",
      subtitle: "Setting Industry Benchmarks",
      content:
        "At RASS Associates Ltd., health, safety, and environmental protection are fundamental to the success of our projects. Through adherence to this policy, we aim to exceed industry standards, ensuring the well-being of our people, clients, and the environment.",
      points: [
        {
          label: "Zero Accident Philosophy",
          text: "Striving for zero fatalities, zero lost-time incidents, and minimal environmental disturbance across every project milestone.",
        },
      ],
    },
  ],
  stats: [
    { label: "Lost Time Incidents (LTIs)", value: "0", note: "On major power & solar sites" },
    { label: "Daily Toolbox Safety Talks", value: "100%", note: "Conducted every morning" },
    { label: "PPE Compliance Rate", value: "100%", note: "Enforced across all zones" },
    { label: "Certified Safety Officers", value: "Full-Time", note: "Stationed on every project" },
  ],
};

export const csrPolicy = {
  title: "Corporate Social Responsibility (CSR)",
  description:
    "At RASS Associates Ltd., we are committed to making a positive impact on society and the environment through ethical business practices, sustainability, and community development.",
  sections: [
    {
      title: "1. Commitment to the Community",
      content:
        "We support local communities through charitable donations, educational programs, healthcare initiatives, local hiring, and skills development.",
    },
    {
      title: "2. Environmental Sustainability",
      content:
        "We minimize our environmental footprint through sustainable construction practices, energy-efficient materials, green building designs, and waste reduction with a strong focus on recycling.",
    },
    {
      title: "3. Employee Engagement",
      content:
        "We prioritize employee well-being with safe working environments, career development opportunities, and diversity and inclusion within our workforce.",
    },
    {
      title: "4. Ethical Business Practices",
      content:
        "We uphold the highest standards of integrity and transparency, adhering to fair trade practices and ensuring anti-corruption measures are in place.",
    },
    {
      title: "5. Focus Areas",
      content:
        "Our CSR efforts focus on Education (supporting schools and providing scholarships), Healthcare (funding medical outreach programs), and Disaster Relief (assisting communities during natural disasters and seasonal flooding).",
    },
    {
      title: "6. Monitoring and Reporting",
      content:
        "We ensure the effectiveness of our CSR initiatives by regularly reporting on outcomes and continuously seeking community feedback to improve our social impact.",
    },
  ],
};

export const termsOfUse = {
  title: "Terms of Use",
  lastUpdated: "January 2025",
  description:
    "Please read these Terms of Use carefully before using the RASS Associates Ltd website and related services.",
  sections: [
    {
      title: "1. Acceptance of Terms",
      content:
        "By accessing and using this website, you agree to be bound by these Terms of Use, all applicable laws, and regulations in Bangladesh. If you do not agree with any of these terms, you are prohibited from using or accessing this site.",
    },
    {
      title: "2. Intellectual Property Rights",
      content:
        "All materials, designs, photographs, graphics, trademarks, logos, text, and structural content displayed on this website are the property of RASS Associates Ltd or its content suppliers and are protected by applicable copyright, trademark, and intellectual property laws. Unauthorized reproduction or distribution is strictly prohibited.",
    },
    {
      title: "3. Permitted & Prohibited Uses",
      content:
        "You are granted a limited license to access and make personal, non-commercial use of this website. You may not modify, distribute, transmit, reuse, or download content for commercial purposes without prior written consent from RASS Associates Ltd.",
    },
    {
      title: "4. Project & Service Information",
      content:
        "All project descriptions, equipment specifications, service details, and technical capabilities displayed on this website are for informational purposes only. While RASS Associates Ltd strives to maintain accurate and up-to-date information, technical specifications and service offerings may change based on specific contract terms and site conditions.",
    },
    {
      title: "5. Disclaimer of Warranties",
      content:
        "The materials and information on this website are provided on an 'as is' and 'as available' basis. RASS Associates Ltd makes no warranties, expressed or implied, regarding the accuracy, completeness, reliability, or availability of the website content.",
    },
    {
      title: "6. Limitation of Liability",
      content:
        "In no event shall RASS Associates Ltd, its directors, officers, employees, or partners be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your access to, use of, or inability to use this website.",
    },
    {
      title: "7. Third-Party Links",
      content:
        "This website may contain links to external third-party websites, sister concerns, or partners for your convenience. RASS Associates Ltd has no control over the content, privacy policies, or practices of third-party websites.",
    },
    {
      title: "8. Governing Law & Jurisdiction",
      content:
        "These Terms of Use shall be governed by and construed in accordance with the laws of the People's Republic of Bangladesh. Any legal dispute shall be subject to the exclusive jurisdiction of the courts located in Dhaka, Bangladesh.",
    },
  ],
};
