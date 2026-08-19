export const company = {
  name: "RASS Associates Ltd",
  tagline: "Where Engineering Meets Excellence",
  slogan: "Innovating the Future of Construction & Facilities Management",
  description:
    "Premier construction and facilities management company in Bangladesh, delivering large-scale residential, commercial, industrial, power, and marine infrastructure projects.",
  address: {
    street: "House 482 (1st Floor), Road 6, Avenue 6",
    area: "Mirpur DOHS",
    city: "Dhaka 1216",
    country: "Bangladesh",
  },
  phone: ["+8802-51050449", "+8801975245555"],
  email: "info@rassassociates.com",
  website: "www.rassassociates.com",
} as const;

export const stats = [
  { label: "Years of Experience", value: 25, suffix: "+" },
  { label: "Major Projects", value: 50, suffix: "+" },
  { label: "MW Infrastructure", value: 1500, suffix: "+" },
  { label: "Equipment Fleet", value: 100, suffix: "+" },
] as const;

export const values = [
  {
    title: "Excellence",
    description:
      "We aim to surpass industry standards with a focus on health and safety, environmental sustainability, and quality.",
  },
  {
    title: "Collaboration",
    description:
      "We believe in fostering collaboration at all levels for shared success among professionals, clients, and partners.",
  },
  {
    title: "Innovation",
    description:
      "Continuously embracing new technologies and methods for enhanced project delivery and sustainable engineering.",
  },
  {
    title: "Integrity",
    description: "We operate with honesty, respect, transparency, and uncompromising ethical practices in every engagement.",
  },
  {
    title: "Discipline",
    description:
      "We believe in a proactive approach to solving challenges and ensuring seamless execution of projects on time.",
  },
] as const;

export type NavChild = {
  readonly label: string;
  readonly href: string;
  readonly description?: string;
};

export type NavItem = {
  readonly label: string;
  readonly href: string;
  readonly children?: readonly NavChild[];
};

export const navigation = {
  header: [
    { label: "Home", href: "/" },
    {
      label: "About",
      href: "/about/",
      children: [
        { label: "Who We Are", href: "/about/#who-we-are", description: "Our heritage, overview and corporate commitment" },
        { label: "Our Mission", href: "/about/#mission", description: "Our purpose and delivery excellence standard" },
        { label: "Our Vision", href: "/about/#vision", description: "Market leadership in construction & facility management" },
        { label: "Core Values", href: "/about/#values", description: "Excellence, collaboration, innovation, integrity, discipline" },
        { label: "Meet Our Team", href: "/leadership/", description: "Executive leadership and technical directors" },
        { label: "Affiliated Companies", href: "/sister-concerns/#affiliated", description: "DenZai Group & Conveyor Bangladesh" },
        { label: "Sister Concerns", href: "/sister-concerns/", description: "RASS Resort, NRL Eco Bricks & Orbed Green Energy" },
      ],
    },
    {
      label: "Services",
      href: "/services/",
      children: [
        { label: "Civil Construction", href: "/services/civil-construction/", description: "Residential, industrial & power plant facilities" },
        { label: "Civil Engineering", href: "/services/civil-engineering/", description: "Roads, utilities & structural engineering" },
        { label: "Property Development", href: "/services/property-development/", description: "Land acquisition to turnkey real estate" },
        { label: "Asset Management", href: "/services/asset-management/", description: "Lifecycle facility maintenance & energy management" },
        { label: "Bridging & Structural", href: "/services/bridging-structural/", description: "Bridge design, precast concrete & steel fabrication" },
        { label: "Landscaping", href: "/services/landscaping/", description: "Soft & hard landscaping for commercial & public spaces" },
        { label: "Road & Pavement", href: "/services/road-pavement/", description: "Asphalt highways, terminal roads & heavy pavers" },
        { label: "Dredging & Excavating", href: "/services/dredging-excavating/", description: "Capital dredging, land reclamation & marine fleet" },
        { label: "View All Services →", href: "/services/", description: "Explore full service suite" },
      ],
    },
    {
      label: "Projects",
      href: "/projects/",
      children: [
        { label: "Payra 1320MW Power Plant", href: "/projects/payra-1320mw/", description: "Multi-building residential township & civil works" },
        { label: "64 MW Pabna Solar Project", href: "/projects/pabna-solar-64mw/", description: "Solar park civil infrastructure & dormitories" },
        { label: "Madhumati 100MW HFO Plant", href: "/projects/madhumati-100mw/", description: "Dredging, shore protection, jetty & civil works" },
        { label: "Sirajganj 68MW Solar Park", href: "/projects/sirajganj-solar-68mw/", description: "Jamuna river dredging & hydraulic land reclamation" },
        { label: "Payra Port 1st Terminal Road", href: "/projects/payra-port-terminal-road/", description: "5 Crore CFT dredged sand filling & roadworks" },
        { label: "Payra Water Intake Dredging", href: "/projects/payra-water-intake-dredging/", description: "Sediment removal & cooling intake protection" },
        { label: "View All Projects →", href: "/projects/", description: "Browse complete portfolio" },
      ],
    },
    { label: "Oil & Gas", href: "/oil-gas/" },
    { label: "Equipment", href: "/equipment/" },
    { label: "HES", href: "/hse/" },
    { label: "CSR", href: "/csr/" },
    { label: "Contact", href: "/contact/" },
  ],
  footer: [
    { label: "About", href: "/about/" },
    { label: "Services", href: "/services/" },
    { label: "Projects", href: "/projects/" },
    { label: "Oil & Gas", href: "/oil-gas/" },
    { label: "Resources & Equipment", href: "/equipment/" },
    { label: "HES Policy", href: "/hse/" },
    { label: "CSR", href: "/csr/" },
    { label: "Sister Concerns", href: "/sister-concerns/" },
    { label: "Leadership", href: "/leadership/" },
    { label: "Terms of Use", href: "/terms-of-use/" },
    { label: "Contact Us", href: "/contact/" },
  ],
} as const;