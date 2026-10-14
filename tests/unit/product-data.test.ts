import { describe, it, expect } from 'vitest';
import {
  MAIN_ELEVATOR_PRODUCTS,
  BROCHURE_COMPONENTS,
  PASSENGER_MEASUREMENTS,
  HOSPITAL_MEASUREMENTS,
  GOODS_MEASUREMENTS,
} from '@/data/products';

describe('Product Data Integrity', () => {
  it('contains exactly the 6 core elevator product categories from PRD §6', () => {
    const categories = MAIN_ELEVATOR_PRODUCTS.map((p) => p.category);
    expect(categories).toContain('passenger');
    expect(categories).toContain('hospital');
    expect(categories).toContain('home');
    expect(categories).toContain('goods');
    expect(categories).toContain('hydraulic');
    expect(categories).toContain('mrl');
    expect(MAIN_ELEVATOR_PRODUCTS).toHaveLength(6);
  });

  it('guarantees each elevator product has descriptions and valid images', () => {
    MAIN_ELEVATOR_PRODUCTS.forEach((product) => {
      expect(product.name).toBeTruthy();
      expect(product.tagline).toBeTruthy();
      expect(product.description).toBeTruthy();
      expect(product.features.length).toBeGreaterThanOrEqual(3);
      expect(product.idealFor.length).toBeGreaterThanOrEqual(2);
      expect(product.image).toMatch(/^\/images\/products\//);
    });
  });

  it('contains brochure component categories for doors, cabins, motors, and ropes', () => {
    const componentCategories = new Set(BROCHURE_COMPONENTS.map((c) => c.category));
    expect(componentCategories.has('doors')).toBe(true);
    expect(componentCategories.has('cabins')).toBe(true);
    expect(componentCategories.has('motors')).toBe(true);
    expect(componentCategories.has('ropes')).toBe(true);
    expect(componentCategories.has('controllers')).toBe(true);
    expect(componentCategories.has('drawings')).toBe(true);
  });

  it('verifies measurement tables match brochure page 8 values', () => {
    expect(PASSENGER_MEASUREMENTS.length).toBe(7);
    expect(PASSENGER_MEASUREMENTS[0].capacityPersons).toBe(4);
    expect(PASSENGER_MEASUREMENTS[0].capacityKg).toBe(272);

    expect(HOSPITAL_MEASUREMENTS.length).toBe(3);
    expect(HOSPITAL_MEASUREMENTS[0].capacityPersons).toBe(15);
    expect(HOSPITAL_MEASUREMENTS[0].capacityKg).toBe(1020);

    expect(GOODS_MEASUREMENTS.length).toBe(4);
    expect(GOODS_MEASUREMENTS[0].capacityKg).toBe(1000);
  });
});
