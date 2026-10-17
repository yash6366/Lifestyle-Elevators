import type { Metadata, Viewport } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { FloatingWhatsApp } from '@/components/layout/FloatingWhatsApp';
import { COMPANY } from '@/config/company';
import { SITE_CONFIG } from '@/config/site';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
});

export const viewport: Viewport = {
  themeColor: '#0c2440',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `${COMPANY.name} | Premium Elevator Solutions & AMC in Bangalore`,
    template: `%s | ${COMPANY.name}`,
  },
  description:
    'Elevator manufacturer, installation, repair, and AMC service provider in Bangalore. Specializing in Passenger, Hospital, Home, Goods, Hydraulic, and MRL lifts.',
  keywords: [
    'Lifestyle Elevators',
    'Elevator manufacturer Bangalore',
    'Lift installation Bangalore',
    'Passenger lift',
    'Hospital stretcher lift',
    'Home lift Bangalore',
    'Goods lift',
    'MRL elevator',
    'Hydraulic elevator',
    'Elevator repair Bangalore',
    'Elevator AMC contracts',
    'Kwality Key Elevators',
    'Bangalore elevator company',
  ],
  authors: [{ name: COMPANY.name }],
  creator: COMPANY.name,
  publisher: COMPANY.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_CONFIG.url,
    siteName: COMPANY.name,
    title: `${COMPANY.name} - Bangalore Vertical Transportation Specialists`,
    description:
      'Precision engineered elevator systems: Passenger, Hospital, Home, and Industrial Goods Lifts with AMC and repair support.',
    images: [
      {
        url: '/images/branding/hero-elevator.jpg',
        width: 1200,
        height: 630,
        alt: `${COMPANY.name} Architectural Elevators`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: COMPANY.name,
    description:
      'Precision engineered elevator systems: Passenger, Hospital, Home, and Industrial Goods Lifts.',
    images: ['/images/branding/hero-elevator.jpg'],
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/images/branding/logo.png', type: 'image/png' },
    ],
    apple: '/icon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: COMPANY.name,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    telephone: COMPANY.phones[0].raw,
    email: COMPANY.email.address,
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${COMPANY.address.line1}, ${COMPANY.address.line2}`,
      addressLocality: COMPANY.address.city,
      addressRegion: COMPANY.address.state,
      postalCode: COMPANY.address.pincode,
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '12.9234',
      longitude: '77.5458',
    },
    image: `${SITE_CONFIG.url}/images/branding/hero-elevator.jpg`,
    priceRange: '₹₹₹',
  };

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="flex min-h-screen flex-col bg-slate-50 font-sans text-slate-900 antialiased">
        {/* Structured Data for Search Engines */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationStructuredData) }}
        />

        {/* Skip to Main Content for Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-brand-gold-500 focus:px-4 focus:py-2 focus:font-bold focus:text-brand-blue-950 focus:shadow-lg"
        >
          Skip to main content
        </a>

        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
