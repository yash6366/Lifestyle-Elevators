import { COMPANY, getWhatsAppConfig } from '@/config/company';
import type { QuotationFormData } from '@/types/quote';

export interface WhatsAppResult {
  success: boolean;
  url: string | null;
  messageText: string;
  error?: 'unconfigured' | 'invalid_phone' | 'empty_message';
}

/**
 * Builds the standardized quotation enquiry message specified in PRD §9.4
 */
export function formatQuotationMessage(data: QuotationFormData): string {
  const lines: string[] = [
    `Hello ${COMPANY.name},`,
    '',
    'I would like to request a quotation.',
    '',
    `Name: ${data.fullName.trim()}`,
    `Phone: ${data.phoneNumber.trim()}`,
    `Product/Service: ${data.productOrService}`,
  ];

  if (data.buildingType && data.buildingType.trim() !== '') {
    lines.push(`Building Type: ${data.buildingType.trim()}`);
  }

  if (data.projectLocation && data.projectLocation.trim() !== '') {
    lines.push(`Project Location: ${data.projectLocation.trim()}`);
  }

  if (data.requirements && data.requirements.trim() !== '') {
    lines.push(`Requirements: ${data.requirements.trim()}`);
  }

  lines.push('', 'Please contact me to discuss the quotation.', '', 'Thank you.');

  return lines.join('\n');
}

/**
 * Generates the official WhatsApp Click-to-Chat URL
 * Guarantees safe encoding and verifies configuration status.
 */
export function buildWhatsAppUrl(message: string, targetNumberOverride?: string): WhatsAppResult {
  if (!message || message.trim() === '') {
    return {
      success: false,
      url: null,
      messageText: '',
      error: 'empty_message',
    };
  }

  const config = getWhatsAppConfig();
  const targetNumber = targetNumberOverride?.replace(/[^0-9]/g, '') || config.number;

  // Enforce configuration guard as per PRD §1 and §8
  if (
    !targetNumber ||
    targetNumber.length < 10 ||
    (!config.isConfigured && !targetNumberOverride)
  ) {
    return {
      success: false,
      url: null,
      messageText: message,
      error: 'unconfigured',
    };
  }

  const encoded = encodeURIComponent(message);
  const url = `https://wa.me/${targetNumber}?text=${encoded}`;

  return {
    success: true,
    url,
    messageText: message,
  };
}

/**
 * Builds the WhatsApp brochure sharing URL specified in PRD §8.3
 */
export function buildBrochureShareWhatsAppUrl(brochurePublicUrl: string): WhatsAppResult {
  const text = `${COMPANY.name} – Company Brochure\nView our elevator products and services: ${brochurePublicUrl}`;
  return buildWhatsAppUrl(text);
}
