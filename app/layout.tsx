import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Homestay Anggerik Damai - Penginapan Selesa di Kangar, Perlis",
    template: "%s | Homestay Anggerik Damai"
  },
  description: "Nikmati penginapan homestay yang selesa dan berpatutan di Kangar, Perlis. Lokasi strategik, kemudahan lengkap, suasana tenang seperti rumah sendiri. Sesuai untuk family, kawan-kawan, dan pelancong.",
  keywords: [
    "homestay kangar",
    "homestay perlis",
    "penginapan perlis",
    "anggerik damai",
    "homestay malaysia",
    "kangar accommodation",
    "perlis homestay",
    "family homestay",
    "budget homestay",
    "homestay strategik",
    "homestay lengkap",
    "penginapan selesa"
  ],
  authors: [{ name: "Anggerik Damai Homestay" }],
  creator: "Anggerik Damai Homestay",
  publisher: "Anggerik Damai Homestay",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://anggerikdamai.com.my'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Homestay Anggerik Damai - Penginapan Selesa di Kangar, Perlis",
    description: "Nikmati penginapan homestay yang selesa dan berpatutan di Kangar, Perlis. Lokasi strategik, kemudahan lengkap, suasana tenang seperti rumah sendiri.",
    url: "https://anggerikdamai.com.my",
    siteName: "Homestay Anggerik Damai",
    images: [
      {
        url: "/Anggerik_Damai_homestay_logo.png",
        width: 1200,
        height: 630,
        alt: "Homestay Anggerik Damai Logo",
      },
    ],
    locale: "ms_MY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Homestay Anggerik Damai - Penginapan Selesa di Kangar, Perlis",
    description: "Nikmati penginapan homestay yang selesa dan berpatutan di Kangar, Perlis. Lokasi strategik, kemudahan lengkap, suasana tenang seperti rumah sendiri.",
    images: ["/Anggerik_Damai_homestay_logo.png"],
    creator: "@anggerikdamai",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/Anggerik_Damai_homestay_logo.png",
    shortcut: "/Anggerik_Damai_homestay_logo.png",
    apple: "/Anggerik_Damai_homestay_logo.png",
  },
  manifest: "/manifest.json",
  category: "accommodation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    "name": "Homestay Anggerik Damai",
    "description": "Penginapan homestay yang selesa dan berpatutan di Kangar, Perlis dengan lokasi strategik dan kemudahan lengkap.",
    "url": "https://anggerikdamai.com.my",
    "telephone": "+60172068666",
    "email": "info@anggeriqdamai.com.my",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Kangar",
      "addressLocality": "Perlis",
      "addressRegion": "Malaysia",
      "postalCode": "01000",
      "addressCountry": "MY"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "6.4414",
      "longitude": "100.1986"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "150"
    },
    "priceRange": "RM90 - RM200",
    "amenityFeature": [
      {
        "@type": "LocationFeatureSpecification",
        "name": "Lokasi Strategik",
        "value": "Dekat dengan tempat makan, kedai, dan tempat menarik"
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Kemudahan Lengkap",
        "value": "Berperabot lengkap, bilik selesa, kawasan makan"
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Suasana Tenang",
        "value": "Sesuai untuk rehat dan healing trip"
      }
    ],
    "image": [
      "/Anggerik_Damai_homestay_logo.png",
      "/homestay1.jpg",
      "/homestay2.jpg"
    ],
    "sameAs": [
      "https://wa.me/60172068666"
    ]
  };

  return (
    <html
      lang="ms"
      className={`${montserrat.variable} ${poppins.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#0f5132" />
        <link rel="canonical" href="https://anggerikdamai.com.my" />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
