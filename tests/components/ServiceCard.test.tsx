import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { ServiceCard } from '@/components/services/ServiceCard';
import { ELEVATOR_SERVICES } from '@/data/services';

describe('ServiceCard Component', () => {
  const sampleService = ELEVATOR_SERVICES[0]; // Manufacturing & Supply

  it('renders service name, description, and call to action', () => {
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
});
