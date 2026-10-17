import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { HoistwayCalculator } from '@/components/calculator/HoistwayCalculator';

describe('HoistwayCalculator Component', () => {
  it('renders all four building categories', () => {
    render(<HoistwayCalculator />);

    expect(screen.getByText('Residential & Commercial')).toBeInTheDocument();
    expect(screen.getByText('Home & Luxury Villa')).toBeInTheDocument();
    expect(screen.getByText('Hospital & Healthcare')).toBeInTheDocument();
    expect(screen.getByText('Industrial Goods & Cargo')).toBeInTheDocument();
  });

  it('renders standard planning notice and engineering disclaimer without unsupported compliance claims', () => {
    render(<HoistwayCalculator />);

    expect(
      screen.getByText(/Derived from Standard Hoistway Engineering Dimensions/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Values shown are preliminary planning estimates/i)
    ).toBeInTheDocument();
    expect(
      screen.queryByText(/Bangalore Municipal Fire \/ Lift Safety Compliant/i)
    ).not.toBeInTheDocument();
  });

  it('generates complete quotation URL transferring building type, capacity, and dimensions', () => {
    render(<HoistwayCalculator />);

    // By default, Residential & Commercial is selected, capacity index 1 (6 persons, 408 kg)
    const quoteLink = screen.getByRole('link', { name: /Request Quote for this Dimension/i });
    const href = quoteLink.getAttribute('href');

    expect(href).toBeDefined();
    expect(href).toContain('/quote?');
    expect(href).toContain('product=Passenger+Lift');
    expect(href).toContain('buildingType=Commercial');
    expect(href).toContain('capacity=6+Persons+%28408+kg%29');
    expect(href).toContain('shaft=1900+x+1700+mm');
    expect(href).toContain('cabin=1100+x+1000+mm');
  });

  it('switches category to Home & Luxury Villa and updates drive and dimensions', () => {
    render(<HoistwayCalculator />);

    const homeButton = screen.getByText('Home & Luxury Villa').closest('button');
    expect(homeButton).not.toBeNull();
    fireEvent.click(homeButton!);

    expect(screen.getByText(/Lifestyle Home Lift/i)).toBeInTheDocument();
    expect(screen.getByText(/Zero Pit or 200 mm/i)).toBeInTheDocument();

    const quoteLink = screen.getByRole('link', { name: /Request Quote for this Dimension/i });
    const href = quoteLink.getAttribute('href');

    expect(href).toContain('product=Home+Lift');
    expect(href).toContain('buildingType=Residential');
  });

  it('switches category to Hospital & Healthcare and updates specs', () => {
    render(<HoistwayCalculator />);

    const hospitalButton = screen.getByText('Hospital & Healthcare').closest('button');
    expect(hospitalButton).not.toBeNull();
    fireEvent.click(hospitalButton!);

    expect(screen.getByText(/Lifestyle Hospital Lift/i)).toBeInTheDocument();

    const quoteLink = screen.getByRole('link', { name: /Request Quote for this Dimension/i });
    const href = quoteLink.getAttribute('href');

    expect(href).toContain('product=Hospital+Lift');
    expect(href).toContain('buildingType=Hospital');
  });

  it('switches category to Industrial Goods & Cargo and updates payload', () => {
    render(<HoistwayCalculator />);

    const goodsButton = screen.getByText('Industrial Goods & Cargo').closest('button');
    expect(goodsButton).not.toBeNull();
    fireEvent.click(goodsButton!);

    expect(screen.getByText(/Lifestyle Goods Lift/i)).toBeInTheDocument();
    expect(screen.getByText(/Heavy Duty Geared Traction or Hydraulic/i)).toBeInTheDocument();

    const quoteLink = screen.getByRole('link', { name: /Request Quote for this Dimension/i });
    const href = quoteLink.getAttribute('href');

    expect(href).toContain('product=Goods+Lift');
    expect(href).toContain('buildingType=Industrial');
  });
});
