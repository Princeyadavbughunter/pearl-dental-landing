import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { site } from "@/config/site";

// The same pairing pearldentalchennai.in uses: Outfit for headings, Plus
// Jakarta Sans for body copy.
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const title = `${site.name} | Dental Implants from ₹20,000 — Anna Nagar East, Chennai`;
const description = `${site.doctor.name} — ${site.doctor.credential}, ${site.doctor.experience} of implant-focused practice. In-house OPG, intraoral scanning, conscious sedation and an in-house Endodontist, all under one roof in Anna Nagar East, Chennai. Implants from ₹20,000.`;

export const metadata: Metadata = {
  title,
  description,
  keywords:
    "dental implants Chennai, dentist Anna Nagar East, Pearl Dental, Dr. S. Egammai, implantologist Chennai, root canal Anna Nagar, full mouth rehabilitation Chennai, conscious sedation dentistry",
  authors: [{ name: site.doctor.name }],
  creator: site.name,
  publisher: site.name,
  formatDetection: { email: false, address: false, telephone: false },
  metadataBase: new URL(site.website),
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: site.website,
    siteName: site.name,
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

/** LocalBusiness schema so the clinic's details show up correctly in search. */
const schema = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: site.name,
  description: site.tagline,
  url: site.website,
  telephone: site.contact.phones.map((p) => `+91${p.replace(/^0/, "")}`),
  email: site.contact.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.contact.addressLines[0],
    addressLocality: "Anna Nagar East, Chennai",
    postalCode: "600102",
    addressRegion: "Tamil Nadu",
    addressCountry: "IN",
  },
  openingHours: site.hours.schema,
  priceRange: "₹₹",
  sameAs: [site.social.facebook, site.social.instagram, site.social.youtube],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#C45B00" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className={`${outfit.variable} ${jakarta.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
