export interface NavItem {
  label: string;
  href: string;
  description?: string;
}

function getSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL && process.env.NEXT_PUBLIC_SITE_URL.trim() !== '') {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, '');
  }
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return 'https://lifestyleelevators.in';
}

export const SITE_CONFIG = {
  name: 'Lifestyle Elevators',
  shortName: 'Lifestyle Elevators',
  description:
    'Elevator manufacturer, installation, repair, and AMC service provider in Bangalore, India. Specializing in Passenger, Home, Hospital, Goods, Hydraulic, and MRL lifts.',
  url: getSiteUrl(),
  ogImage: '/images/branding/og-preview.png',
  mainNav: [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Products', href: '/products' },
    { label: 'Services', href: '/services' },
    { label: 'Brochure', href: '/brochure' },
    { label: 'Contact', href: '/contact' },
  ] as NavItem[],
  quickLinks: [
    { label: 'About Company', href: '/about' },
    { label: 'Elevator Products', href: '/products' },
    { label: 'Installation & AMC', href: '/services' },
    { label: 'Download Brochure', href: '/brochure' },
    { label: 'Request a Quote', href: '/quote' },
    { label: 'Contact Office', href: '/contact' },
  ] as NavItem[],
} as const;
