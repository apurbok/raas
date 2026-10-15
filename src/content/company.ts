export const company = {
  name: "RASS Associates Ltd",
  tagline: "Where Engineering Meets Excellence",
  slogan: "Innovating the Future of Construction & Facilities Management",
  description:
    "International engineering, energy, and industrial solutions platform delivering blended expertise across green energy, oil & gas infrastructure, industrial solutions, project management, and international trading — backed by 42+ years of combined international experience through strategic affiliations including BlueArc (www.bluearchl.com).",
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
  { label: "Years of Experience", value: 42, suffix: "+" },
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
  readonly featured?: boolean;
};

export type NavItem = {
  readonly label: string;
  readonly href: string;
  readonly children?: readonly NavChild[];
};

export const navigation = {
  header: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about/" },
    {
      label: "Services",
      href: "/services/",
      children: [
        { label: "Oil & Gas", href: "/oil-gas/", featured: true },
        { label: "Civil Construction", href: "/services/civil-construction/" },
        { label: "Civil Engineering", href: "/services/civil-engineering/" },
        { label: "Property Development", href: "/services/property-development/" },
        { label: "Asset Management", href: "/services/asset-management/" },
        { label: "Bridging & Structural", href: "/services/bridging-structural/" },
        { label: "Landscaping", href: "/services/landscaping/" },
        { label: "Road & Pavement", href: "/services/road-pavement/" },
        { label: "Dredging & Excavating", href: "/services/dredging-excavating/" },
      ],
    },
    {
      label: "Projects",
      href: "/projects/",
      children: [
        { label: "Payra 1320MW Thermal Power Plant", href: "/projects/payra-1320mw/" },
        { label: "64 MW Pabna Solar Project", href: "/projects/pabna-solar-64mw/" },
        { label: "Madhumati 100MW HFO Plant", href: "/projects/madhumati-100mw/" },
        { label: "Sirajganj 68MW Solar Park", href: "/projects/sirajganj-solar-68mw/" },
        { label: "Payra Port 1st Terminal Road", href: "/projects/payra-port-terminal-road/" },
        { label: "Payra Water Intake Dredging", href: "/projects/payra-water-intake-dredging/" },
      ],
    },
    { label: "Resources and Equipments", href: "/resources-equipment/" },
    { label: "HES & CSR", href: "/hes-csr/" },
    { label: "FAQ", href: "/faq/" },
    { label: "Contact", href: "/contact/" },
  ],
  footer: [],
} as const;