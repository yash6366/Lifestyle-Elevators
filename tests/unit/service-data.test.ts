import { describe, it, expect } from 'vitest';
import { ELEVATOR_SERVICES } from '@/data/services';

describe('Service Data Integrity', () => {
  it('contains all 4 services specified in PRD §7', () => {
    const serviceSlugs = ELEVATOR_SERVICES.map((s) => s.slug);
    expect(serviceSlugs).toContain('manufacturing-and-supply');
    expect(serviceSlugs).toContain('elevator-installation');
    expect(serviceSlugs).toContain('repair-and-service-support');
    expect(serviceSlugs).toContain('annual-maintenance-contract');
    expect(ELEVATOR_SERVICES).toHaveLength(4);
  });

  it('guarantees each service has descriptions, highlights, and CTAs', () => {
    ELEVATOR_SERVICES.forEach((service) => {
      expect(service.name).toBeTruthy();
      expect(service.shortDescription).toBeTruthy();
      expect(service.fullDescription).toBeTruthy();
      expect(service.keyHighlights.length).toBeGreaterThanOrEqual(3);
      expect(service.callToAction).toBeTruthy();
      expect(service.image).toMatch(/^\/images\/services\//);
    });
  });
});
