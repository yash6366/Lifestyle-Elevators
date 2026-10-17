import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { ProductCard } from '@/components/products/ProductCard';
import { MAIN_ELEVATOR_PRODUCTS } from '@/data/products';

describe('ProductCard Component', () => {
  const sampleProduct = MAIN_ELEVATOR_PRODUCTS[0]; // Passenger Lift

  it('renders product name, tagline, and features correctly in full mode', () => {
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

  it('renders minimal mode and triggers onSelect when clicked', () => {
    const handleSelect = vi.fn();
    render(<ProductCard product={sampleProduct} variant="minimal" onSelect={handleSelect} />);

    expect(screen.getByRole('heading', { level: 3, name: sampleProduct.name })).toBeInTheDocument();
    expect(screen.getByText(sampleProduct.tagline)).toBeInTheDocument();
    // In minimal mode, the full description is not shown to keep page clean
    expect(screen.queryByText(sampleProduct.description)).not.toBeInTheDocument();

    const viewBtn = screen.getByRole('button', { name: /view specs & features/i });
    expect(viewBtn).toBeInTheDocument();

    fireEvent.click(viewBtn);
    expect(handleSelect).toHaveBeenCalledWith(sampleProduct);
  });
});
