import type { Metadata, Viewport } from "next";
import { Inter, Newsreader } from "next/font/google";
import "./globals.css";
import { site, award } from "@/config/site";
import Analytics from "@/components/Analytics";

/**
 * Newsreader for headings gives the page an editorial, medical-publication
 * register rather than a marketing one; Inter carries everything functional.
 */
const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
  weight: ["400", "500"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

/**
 * This is a campaign landing page. It defaults to noindex so it can never
 * compete with the clinic's own site in search; set NEXT_PUBLIC_INDEXABLE=true
 * (and NEXT_PUBLIC_SITE_URL to the domain it is actually served from) if the
 * client decides it should be indexed. See .env.example.
 */
const deployedUrl = process.env.NEXT_PUBLIC_SITE_URL || site.website;
const indexable = process.env.NEXT_PUBLIC_INDEXABLE === "true";

const title = `${site.name} — Dental Implants & Full Mouth Rehabilitation | Anna Nagar East, Chennai`;
const description = `Specialist implant and prosthodontic care with ${site.doctor.name}, ${site.doctor.credential}, at Pearl Dental Chennai. Full mouth implants, immediate loading, strategic implantology and complex rehabilitation — including cases with limited bone. Anna Nagar East, Chennai.`;

export const metadata: Metadata = {
  metadataBase: new URL(deployedUrl),
  title,
  description,
  applicationName: site.name,
  authors: [{ name: site.doctor.name }],
  creator: site.name,
  publisher: site.name,
  formatDetection: { email: false, address: false, telephone: false },
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: site.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: `${site.name} — ${site.strapline}, Anna Nagar East, Chennai`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.jpg"],
  },
  robots: indexable
    ? {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
      }
    : { index: false, follow: false, nocache: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#006C78",
};

/** LocalBusiness schema so the clinic's details resolve correctly in search. */
const schema = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: site.name,
  description: site.tagline,
  url: deployedUrl,
  image: `${deployedUrl.replace(/\/$/, "")}/og.jpg`,
  logo: `${deployedUrl.replace(/\/$/, "")}/logo-pearl-dental.png`,
  telephone: site.contact.phones.map((p) => p.tel),
  email: site.contact.email,
  foundingDate: site.established,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.contact.address.street,
    addressLocality: site.contact.address.locality,
    postalCode: site.contact.address.postalCode,
    addressRegion: site.contact.address.region,
    addressCountry: site.contact.address.country,
  },
  openingHours: site.hours.schema,
  medicalSpecialty: "Dentistry",
  founder: {
    "@type": "Person",
    name: site.doctor.name,
    jobTitle: site.doctor.role,
  },
  sameAs: [site.social.facebook, site.social.instagram],
  award: `${award.title} — ${award.body}`,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    /*
      suppressHydrationWarning applies to this element's own attributes only —
      one level deep, so genuine mismatches anywhere below still surface.
      Translate and locale extensions (and Chrome's own translate) rewrite
      `lang` on <html> before React hydrates, which otherwise throws a hydration
      error on a page that is in fact identical on server and client.
    */
    <html
      lang="en-IN"
      suppressHydrationWarning
      className={`${inter.variable} ${newsreader.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
