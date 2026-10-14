import { describe, it, expect } from 'vitest';
import { quotationSchema } from '@/lib/validation/quotation';

describe('Quotation Form Zod Validation', () => {
  it('validates a complete valid quotation submission', () => {
    const validData = {
      fullName: 'Vikram Seth',
      phoneNumber: '+91 9986028416',
      productOrService: 'Passenger Lift',
      buildingType: 'Residential',
      projectLocation: 'Bangalore Indiranagar',
      requirements: 'G+4 Floors, 6 Passengers',
    };

    const result = quotationSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });

  it('rejects short customer names below 2 characters', () => {
    const invalidData = {
      fullName: 'A',
      phoneNumber: '+91 9986028416',
      productOrService: 'Passenger Lift',
    };

    const result = quotationSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.flatten().fieldErrors.fullName).toBeDefined();
    }
  });

  it('rejects invalid or too short phone numbers', () => {
    const invalidData = {
      fullName: 'Vikram Seth',
      phoneNumber: '12345',
      productOrService: 'Passenger Lift',
    };

    const result = quotationSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.flatten().fieldErrors.phoneNumber).toBeDefined();
    }
  });

  it('rejects unapproved product options', () => {
    const invalidData = {
      fullName: 'Vikram Seth',
      phoneNumber: '+91 9986028416',
      productOrService: 'Spaceship Capsule Lift',
    };

    const result = quotationSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
  });

  it('automatically trims leading and trailing whitespace', () => {
    const untrimmed = {
      fullName: '   Vikram Seth   ',
      phoneNumber: '  +91 9986028416  ',
      productOrService: 'Passenger Lift',
      projectLocation: '  Whitefield  ',
    };

    const result = quotationSchema.safeParse(untrimmed);
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.fullName).toBe('Vikram Seth');
      expect(result.data.phoneNumber).toBe('+91 9986028416');
      expect(result.data.projectLocation).toBe('Whitefield');
    }
  });
});
