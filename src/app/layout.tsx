import type { Metadata } from "next";
import { Barlow_Condensed, Sora } from "next/font/google";
import "./globals.css";
import SiteFooter from "@/components/site/site-footer";
import SiteHeader from "@/components/site/site-header";
import WhatsAppFloat from "@/components/site/whatsapp-float";
import {
  companyName,
  companySummary,
  contactInfo,
  siteUrl,
  socialLinks,
} from "@/content/site";

const bodyFont = Sora({
  subsets: ["latin"],
  variable: "--font-body",
});

const displayFont = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${companyName} | Helicoides sob medida e transportadores helicoidais`,
    template: `%s | ${companyName}`,
  },
  description: companySummary,
  keywords: [
    "helicoides sob medida",
    "transportadores helicoidais",
    "dobras de helicoides",
    "fabricacao de helicoides",
    "esteiras transportadoras",
  ],
  openGraph: {
    title: `${companyName} | Solucoes sob medida para transporte helicoidal`,
    description: companySummary,
    url: siteUrl,
    siteName: companyName,
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/logo-black.png",
        width: 1200,
        height: 630,
        alt: companyName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${companyName} | Helicoides sob medida`,
    description: companySummary,
    images: ["/logo-black.png"],
  },
  alternates: {
    canonical: "/",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#07111f",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: companyName,
    url: siteUrl,
    logo: `${siteUrl}/logo-black.png`,
    description: companySummary,
    email: contactInfo.email,
    telephone: contactInfo.primaryPhone,
    address: {
      "@type": "PostalAddress",
      streetAddress: contactInfo.address.street,
      addressLocality: contactInfo.address.city,
      addressRegion: contactInfo.address.state,
      postalCode: contactInfo.address.postalCode,
      addressCountry: "BR",
    },
    sameAs: [socialLinks.instagram],
  };

  return (
    <html lang="pt-br" data-scroll-behavior="smooth">
      <body className={`${bodyFont.variable} ${displayFont.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <div className="relative min-h-screen overflow-x-clip">
          <SiteHeader />
          {children}
          <SiteFooter />
          <WhatsAppFloat />
        </div>
      </body>
    </html>
  );
}
