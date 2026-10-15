import type { Metadata } from "next";
import { Suspense } from "react";
import {
  Advent_Pro,
  Alata,
  Anonymous_Pro,
  Audiowide,
  Bad_Script,
  Bree_Serif,
  Chicle,
  Concert_One,
  Goldman,
  Handlee,
  Iceland,
  Josefin_Slab,
  Oswald,
  Poiret_One,
  Rubik_Mono_One,
  Turret_Road,
  Unbounded,
} from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { FontProvider } from "@/components/providers/FontProvider";
import { LanguageProvider } from "@/components/providers/LanguageProvider";
import { company } from "@/content/company";
import "./globals.css";

/* Body fonts (?font=1..8) */
const josefinSlab = Josefin_Slab({
  subsets: ["latin"],
  variable: "--font-josefin",
  display: "swap",
});
const adventPro = Advent_Pro({
  subsets: ["latin"],
  variable: "--font-advent",
  display: "swap",
});
const poiretOne = Poiret_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-poiret",
  display: "swap",
});
const handlee = Handlee({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-handlee",
  display: "swap",
});
const anonymousPro = Anonymous_Pro({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-anonymous",
  display: "swap",
});
const badScript = Bad_Script({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-badscript",
  display: "swap",
});
const turretRoad = Turret_Road({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-turret",
  display: "swap",
});
const iceland = Iceland({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-iceland",
  display: "swap",
});

/* Header fonts (?header-font=1..10) */
const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});
const unbounded = Unbounded({
  subsets: ["latin"],
  variable: "--font-unbounded",
  display: "swap",
});
const breeSerif = Bree_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-breeserif",
  display: "swap",
});
const chicle = Chicle({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-chicle",
  display: "swap",
});
const alata = Alata({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-alata",
  display: "swap",
});
const rubikMonoOne = Rubik_Mono_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-rubikmono",
  display: "swap",
});
const audiowide = Audiowide({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-audiowide",
  display: "swap",
});
const concertOne = Concert_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-concert",
  display: "swap",
});
const goldman = Goldman({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-goldman",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${company.name} | Energy Infrastructure & Construction`,
    template: `%s | ${company.name}`,
  },
  description: company.description,
  keywords: [
    "RASS Associates",
    "oil and gas Bangladesh",
    "power plant construction",
    "energy infrastructure",
    "civil engineering",
    "dredging",
  ],
  icons: {
    icon: [{ rel: "icon", url: "/favicon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    title: company.name,
    description: company.tagline,
    type: "website",
    locale: "en_US",
    siteName: company.name,
  },
};

const fontVariables = [
  josefinSlab.variable,
  adventPro.variable,
  poiretOne.variable,
  handlee.variable,
  anonymousPro.variable,
  badScript.variable,
  turretRoad.variable,
  iceland.variable,
  oswald.variable,
  unbounded.variable,
  breeSerif.variable,
  chicle.variable,
  alata.variable,
  rubikMonoOne.variable,
  audiowide.variable,
  concertOne.variable,
  goldman.variable,
].join(" ");

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={fontVariables}
      data-body-font="josefin"
      data-header-font="oswald"
    >
      <body className="flex min-h-screen flex-col">
        <LanguageProvider>
          <Suspense fallback={null}>
            <FontProvider />
          </Suspense>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
