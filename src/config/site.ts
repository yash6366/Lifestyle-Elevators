export interface NavItem {
  label: string;
  href: string;
  description?: string;
}

export const SITE_CONFIG = {
  name: 'Lifestyle Elevators',
  shortName: 'Lifestyle Elevators',
  description:
    'Leading elevator manufacturer, installation, repair, and AMC service provider in Bangalore, India. Specializing in Passenger, Home, Hospital, Goods, Hydraulic, and MRL lifts.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://lifestyleelevators.in',
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
