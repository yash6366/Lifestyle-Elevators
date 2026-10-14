import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import React from 'react';
import { QuotationForm } from '@/components/forms/QuotationForm';

describe('QuotationForm Component', () => {
  it('renders all required form controls with accessible labels', () => {
    render(<QuotationForm />);

    expect(screen.getByLabelText(/Your Full Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Contact Phone Number/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Selected Elevator or Service/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Building Type/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Project Location/i)).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /Request Quotation via WhatsApp/i })
    ).toBeInTheDocument();
  });

  it('displays validation errors on invalid empty submit', async () => {
    render(<QuotationForm />);

    const submitBtn = screen.getByRole('button', { name: /Request Quotation via WhatsApp/i });
    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(screen.getByText(/Name must be at least 2 characters/i)).toBeInTheDocument();
      expect(screen.getByText(/Please enter a valid phone number/i)).toBeInTheDocument();
    });
  });

  it('preselects product when initialProductOrService is supplied', () => {
    render(<QuotationForm initialProductOrService="Hospital Lift" />);

    const select = screen.getByLabelText(/Selected Elevator or Service/i) as HTMLSelectElement;
    expect(select.value).toBe('Hospital Lift');
  });

  it('triggers graceful fallback when submitted while WhatsApp is unconfigured', async () => {
    render(<QuotationForm />);

    fireEvent.change(screen.getByLabelText(/Your Full Name/i), {
      target: { value: 'Rajesh Sharma' },
    });
    fireEvent.change(screen.getByLabelText(/Contact Phone Number/i), {
      target: { value: '+91 9986028416' },
    });

    const submitBtn = screen.getByRole('button', { name: /Request Quotation via WhatsApp/i });
    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(screen.getByText(/Quotation Formatted & Ready/i)).toBeInTheDocument();
      expect(screen.getByText(/Copy Quotation Text/i)).toBeInTheDocument();
    });
  });
});
