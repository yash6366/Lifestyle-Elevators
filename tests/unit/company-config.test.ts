import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { COMPANY, getWhatsAppConfig } from '@/config/company';

describe('Company Configuration Integrity', () => {
  const originalEnv = process.env;

  beforeEach(() => {
    process.env = { ...originalEnv };
  });

  afterEach(() => {
    process.env = originalEnv;
  });

  it('provides exact verified company details from PRD', () => {
    expect(COMPANY.name).toBe('Lifestyle Elevators');
    expect(COMPANY.address.pincode).toBe('560061');
    expect(COMPANY.address.city).toBe('Bangalore');
    expect(COMPANY.email.address).toBe('lifestyleelevator2025@gmail.com');
  });

  it('publishes both approved contact phone numbers', () => {
    expect(COMPANY.phones).toHaveLength(2);
    expect(COMPANY.phones[0].raw).toBe('+917795551118');
    expect(COMPANY.phones[1].raw).toBe('+919986028416');
    expect(COMPANY.phones[0].telUri).toBe('tel:+917795551118');
    expect(COMPANY.phones[1].telUri).toBe('tel:+919986028416');
  });

  it('points to the official 8-page brochure public path', () => {
    expect(COMPANY.brochure.publicPath).toBe('/brochures/lifestyle-elevators.pdf');
    expect(COMPANY.brochure.totalPages).toBe(8);
  });

  it('correctly reports WhatsApp as unconfigured by default (PRD §1 & §8)', () => {
    delete process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
    delete process.env.NEXT_PUBLIC_ENABLE_WHATSAPP_LEADS;

    const config = getWhatsAppConfig();
    expect(config.isConfigured).toBe(false);
    expect(config.number).toBe('');
  });

  it('reports WhatsApp as configured only when verified and enabled', () => {
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER = '+91 77955 51118';
    process.env.NEXT_PUBLIC_ENABLE_WHATSAPP_LEADS = 'true';

    const config = getWhatsAppConfig();
    expect(config.isConfigured).toBe(true);
    expect(config.number).toBe('917795551118');
  });
});
