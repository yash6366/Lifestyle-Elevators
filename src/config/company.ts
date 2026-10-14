/**
 * Centralised Company Configuration
 * Single source of truth for all company contact, branding, and location details.
 * Derived from the official Website PRD and company brochure.
 */

export const COMPANY = {
  name: 'Lifestyle Elevators',
  legalNotice:
    'Lifestyle Elevators (Referenced in engineering documentation as Lifestyle Elevators)',
  tagline: 'Comprehensive Vertical & Trans Movement Solutions',
  address: {
    line1: 'No. 203, 1st Main, 5th Cross',
    line2: 'Naidu Layout, Ittamadu',
    city: 'Bangalore',
    state: 'Karnataka',
    pincode: '560061',
    country: 'India',
    fullFormatted:
      'No. 203, 1st Main, 5th Cross, Naidu Layout, Ittamadu, Bangalore - 560061, Karnataka, India.',
  },
  phones: [
    {
      display: '+91 77955 51118',
      raw: '+917795551118',
      telUri: 'tel:+917795551118',
      label: 'Primary Line',
    },
    {
      display: '+91 99860 28416',
      raw: '+919986028416',
      telUri: 'tel:+919986028416',
      label: 'Support & Enquiries',
    },
  ],
  email: {
    address: 'lifestyleelevator2025@gmail.com',
    mailtoUri: 'mailto:lifestyleelevator2025@gmail.com',
  },
  maps: {
    destinationQuery: 'No. 203, 1st Main, 5th Cross, Naidu Layout, Ittamadu, Bangalore 560061',
    url: 'https://www.google.com/maps/search/?api=1&query=No.+203,+1st+Main,+5th+Cross,+Naidu+Layout,+Ittamadu,+Bangalore+-+560061',
    embedUrl:
      'https://maps.google.com/maps?q=No.+203,+1st+Main,+5th+Cross,+Naidu+Layout,+Ittamadu,+Bangalore+-+560061&t=&z=15&ie=UTF8&iwloc=&output=embed',
  },
  brochure: {
    filename: 'lifestyle-elevators.pdf',
    publicPath: '/brochures/lifestyle-elevators.pdf',
    totalPages: 8,
    fileSize: '~1.07 MB',
    title: 'Lifestyle Elevators Official Company Brochure',
  },
  brandPalette: {
    blue: '#0c2440',
    gold: '#c59b27',
    white: '#ffffff',
  },
} as const;

/**
 * Verified WhatsApp Configuration Guard
 * Returns the configured WhatsApp number or null if unverified / unconfigured.
 */
export function getWhatsAppConfig() {
  const envNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.trim() || '';
  const isEnabled = process.env.NEXT_PUBLIC_ENABLE_WHATSAPP_LEADS === 'true';

  // Sanitize number: remove any +, spaces, dashes
  const cleanNumber = envNumber.replace(/[^0-9]/g, '');

  const isConfigured = Boolean(isEnabled && cleanNumber.length >= 10);

  return {
    isConfigured,
    number: cleanNumber,
    rawEnv: envNumber,
  };
}
