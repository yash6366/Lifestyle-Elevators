import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { ServiceDetailModal } from '@/components/services/ServiceDetailModal';
import { ELEVATOR_SERVICES } from '@/data/services';

describe('ServiceDetailModal Component', () => {
  const sampleService = ELEVATOR_SERVICES[1]; // Elevator Installation

  it('does not render when isOpen is false', () => {
    const handleClose = vi.fn();
    render(<ServiceDetailModal service={sampleService} isOpen={false} onClose={handleClose} />);

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('renders detailed information including full description, deliverables, and quote link when open', () => {
    const handleClose = vi.fn();
    render(
      <ServiceDetailModal
        service={sampleService}
        allServices={ELEVATOR_SERVICES}
        isOpen={true}
        onClose={handleClose}
      />
    );

    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: sampleService.name })).toBeInTheDocument();
    expect(screen.getByText(sampleService.fullDescription)).toBeInTheDocument();

    // Check all key highlights are present
    sampleService.keyHighlights.forEach((highlight) => {
      expect(screen.getByText(highlight)).toBeInTheDocument();
    });

    // Check CTA link
    const quoteLink = screen.getByRole('link', {
      name: new RegExp(sampleService.callToAction, 'i'),
    });
    expect(quoteLink).toBeInTheDocument();
    expect(quoteLink).toHaveAttribute(
      'href',
      `/quote?service=${encodeURIComponent(sampleService.name)}`
    );

    // Click close button
    const closeBtn = screen.getByRole('button', { name: /close service details/i });
    fireEvent.click(closeBtn);
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('calls onClose when Escape key is pressed', () => {
    const handleClose = vi.fn();
    render(<ServiceDetailModal service={sampleService} isOpen={true} onClose={handleClose} />);

    fireEvent.keyDown(window, { key: 'Escape' });
    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
