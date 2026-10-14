import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import {
  formatQuotationMessage,
  buildWhatsAppUrl,
  buildBrochureShareWhatsAppUrl,
} from '@/lib/whatsapp/buildMessage';
import type { QuotationFormData } from '@/types/quote';

describe('WhatsApp Message Construction & Safety Guard', () => {
  const originalEnv = process.env;

  beforeEach(() => {
    process.env = { ...originalEnv };
  });

  afterEach(() => {
    process.env = originalEnv;
  });

  const sampleLead: QuotationFormData = {
    fullName: 'Anand Murthy',
    phoneNumber: '+91 9876543210',
    productOrService: 'Passenger Lift',
    buildingType: 'Commercial',
    projectLocation: 'Bangalore Electronic City',
    requirements: '8 Passengers, 5 Stops, SS Matt Finish Cabin',
  };

  it('formats message strictly conforming to PRD §9.4 template', () => {
    const message = formatQuotationMessage(sampleLead);

    expect(message).toContain('Hello Lifestyle Elevators,');
    expect(message).toContain('I would like to request an elevator quotation.');
    expect(message).toContain('Name: Anand Murthy');
    expect(message).toContain('Phone: +91 9876543210');
    expect(message).toContain('Product/Service: Passenger Lift');
    expect(message).toContain('Building Type: Commercial');
    expect(message).toContain('Project Location: Bangalore Electronic City');
    expect(message).toContain('Requirements: 8 Passengers, 5 Stops, SS Matt Finish Cabin');
    expect(message).toContain('Please contact me to discuss the quotation.');
    expect(message).toContain('Thank you.');
  });

  it('omits optional fields gracefully when blank', () => {
    const minimalLead: QuotationFormData = {
      fullName: 'Priya Sharma',
      phoneNumber: '+91 7795551118',
      productOrService: 'Home Lift',
    };

    const message = formatQuotationMessage(minimalLead);
    expect(message).toContain('Name: Priya Sharma');
    expect(message).toContain('Product/Service: Home Lift');
    expect(message).not.toContain('Building Type:');
    expect(message).not.toContain('Project Location:');
    expect(message).not.toContain('Requirements:');
  });

  it('rejects WhatsApp link generation when leads are explicitly disabled via flag', () => {
    process.env.NEXT_PUBLIC_ENABLE_WHATSAPP_LEADS = 'false';

    const message = formatQuotationMessage(sampleLead);
    const result = buildWhatsAppUrl(message);

    expect(result.success).toBe(false);
    expect(result.url).toBeNull();
    expect(result.error).toBe('unconfigured');
    expect(result.messageText).toBe(message);
  });

  it('generates WhatsApp URL with default company number when env is unset', () => {
    delete process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
    delete process.env.NEXT_PUBLIC_ENABLE_WHATSAPP_LEADS;

    const message = formatQuotationMessage(sampleLead);
    const result = buildWhatsAppUrl(message);

    expect(result.success).toBe(true);
    expect(result.url).toContain('https://wa.me/917795551118?text=');
  });

  it('successfully generates WhatsApp click-to-chat URL when configured with verified number', () => {
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER = '917795551118';
    process.env.NEXT_PUBLIC_ENABLE_WHATSAPP_LEADS = 'true';

    const message = formatQuotationMessage(sampleLead);
    const result = buildWhatsAppUrl(message);

    expect(result.success).toBe(true);
    expect(result.url).toContain('https://wa.me/917795551118?text=');
    expect(result.url).toContain(encodeURIComponent('Anand Murthy'));
  });

  it('generates correct brochure sharing message matching PRD §8.3', () => {
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER = '917795551118';
    process.env.NEXT_PUBLIC_ENABLE_WHATSAPP_LEADS = 'true';

    const result = buildBrochureShareWhatsAppUrl(
      'https://lifestyleelevators.in/brochures/lifestyle-elevators.pdf'
    );
    expect(result.messageText).toContain('Lifestyle Elevators – Company Brochure');
    expect(result.messageText).toContain(
      'https://lifestyleelevators.in/brochures/lifestyle-elevators.pdf'
    );
  });
});
