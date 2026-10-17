import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { ServiceCard } from '@/components/services/ServiceCard';
import { ELEVATOR_SERVICES } from '@/data/services';

describe('ServiceCard Component', () => {
  const sampleService = ELEVATOR_SERVICES[0]; // Manufacturing & Supply

  it('renders service name, description, and call to action in default full mode', () => {
    render(<ServiceCard service={sampleService} />);

    expect(screen.getByRole('heading', { level: 3, name: sampleService.name })).toBeInTheDocument();
    expect(screen.getByText(sampleService.shortDescription)).toBeInTheDocument();
    expect(screen.getByText(sampleService.fullDescription)).toBeInTheDocument();

    const ctaLink = screen.getByRole('link', { name: new RegExp(sampleService.callToAction, 'i') });
    expect(ctaLink).toBeInTheDocument();
    expect(ctaLink).toHaveAttribute(
      'href',
      `/quote?service=${encodeURIComponent(sampleService.name)}`
    );
  });

  it('renders minimal mode without full text and triggers onSelect when clicked', () => {
    const handleSelect = vi.fn();
    render(<ServiceCard service={sampleService} variant="minimal" onSelect={handleSelect} />);

    expect(screen.getByRole('heading', { level: 3, name: sampleService.name })).toBeInTheDocument();
    expect(screen.getByText(sampleService.shortDescription)).toBeInTheDocument();
    // Full description should NOT be rendered in minimal mode
    expect(screen.queryByText(sampleService.fullDescription)).not.toBeInTheDocument();

    const viewButton = screen.getByRole('button', { name: /view full details & scope/i });
    expect(viewButton).toBeInTheDocument();

    fireEvent.click(viewButton);
    expect(handleSelect).toHaveBeenCalledWith(sampleService);
  });
});
