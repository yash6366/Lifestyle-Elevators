import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { ProductDetailModal } from '@/components/products/ProductDetailModal';
import { MAIN_ELEVATOR_PRODUCTS } from '@/data/products';

describe('ProductDetailModal Component', () => {
  const sampleProduct = MAIN_ELEVATOR_PRODUCTS[0]; // Passenger Lift

  it('does not render when isOpen is false', () => {
    const handleClose = vi.fn();
    render(<ProductDetailModal product={sampleProduct} isOpen={false} onClose={handleClose} />);

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('renders detailed product info, features, and enquiry link when open', () => {
    const handleClose = vi.fn();
    render(
      <ProductDetailModal
        product={sampleProduct}
        allProducts={MAIN_ELEVATOR_PRODUCTS}
        isOpen={true}
        onClose={handleClose}
      />
    );

    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: sampleProduct.name })).toBeInTheDocument();
    expect(screen.getByText(sampleProduct.description)).toBeInTheDocument();

    // Check features are rendered
    sampleProduct.features.forEach((feature) => {
      expect(screen.getByText(feature)).toBeInTheDocument();
    });

    // Check Enquiry link
    const quoteLink = screen.getByRole('link', {
      name: new RegExp(`Enquire About ${sampleProduct.name}`, 'i'),
    });
    expect(quoteLink).toBeInTheDocument();
    expect(quoteLink).toHaveAttribute(
      'href',
      `/quote?product=${encodeURIComponent(sampleProduct.name)}`
    );

    // Click close button
    const closeBtn = screen.getByRole('button', { name: /close product specifications/i });
    fireEvent.click(closeBtn);
    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
