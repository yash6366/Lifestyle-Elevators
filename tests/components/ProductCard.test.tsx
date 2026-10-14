import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { ProductCard } from '@/components/products/ProductCard';
import { MAIN_ELEVATOR_PRODUCTS } from '@/data/products';

describe('ProductCard Component', () => {
  const sampleProduct = MAIN_ELEVATOR_PRODUCTS[0]; // Passenger Lift

  it('renders product name, tagline, and features correctly', () => {
    render(<ProductCard product={sampleProduct} />);

    expect(screen.getByRole('heading', { level: 3, name: sampleProduct.name })).toBeInTheDocument();
    expect(screen.getByText(sampleProduct.tagline)).toBeInTheDocument();
    expect(screen.getByText(sampleProduct.description)).toBeInTheDocument();
  });

  it('renders enquiry CTA linking to quote page with preselected product', () => {
    render(<ProductCard product={sampleProduct} />);

    const link = screen.getByRole('link', {
      name: new RegExp(`Enquire About ${sampleProduct.name}`, 'i'),
    });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute(
      'href',
      `/quote?product=${encodeURIComponent(sampleProduct.name)}`
    );
  });
});
