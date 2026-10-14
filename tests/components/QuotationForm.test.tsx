import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import React from 'react';
import { QuotationForm, matchProductOrService } from '@/components/forms/QuotationForm';

describe('QuotationForm Component', () => {
  it('correctly maps various catalog query parameter formats using matchProductOrService', () => {
    expect(matchProductOrService('Hydraulic Elevators')).toBe('Hydraulic Elevator');
    expect(matchProductOrService('Machine Room-Less (MRL) Elevators')).toBe('MRL Elevator');
    expect(matchProductOrService('Repair & Service Support')).toBe('Repair & Service Support');
    expect(matchProductOrService('Manufacturing & Supply')).toBe('Manufacturing & Supply');
    expect(matchProductOrService('SS Glass Door')).toBe('Elevator Components & Modernisation');
    expect(matchProductOrService('Traction Motors')).toBe('Elevator Components & Modernisation');
    expect(matchProductOrService('')).toBe('Passenger Lift');
    expect(matchProductOrService(undefined)).toBe('Passenger Lift');
    expect(matchProductOrService('Custom Sky Bridge')).toBe('Other');
  });

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

  it('preselects product when initialProductOrService is supplied with catalog name', () => {
    render(<QuotationForm initialProductOrService="Hydraulic Elevators" />);

    const select = screen.getByLabelText(/Selected Elevator or Service/i) as HTMLSelectElement;
    expect(select.value).toBe('Hydraulic Elevator');
  });

  it('starts with empty customer inputs and exposes no hardcoded customer details', () => {
    render(<QuotationForm />);
    expect(screen.getByLabelText(/Your Full Name/i)).toHaveValue('');
    expect(screen.getByLabelText(/Contact Phone Number/i)).toHaveValue('');
    expect(screen.getByLabelText(/Project Location/i)).toHaveValue('');
  });

  it('triggers honest fallback without obsolete verification warnings when leads are disabled', async () => {
    const originalEnv = { ...process.env };
    process.env.NEXT_PUBLIC_ENABLE_WHATSAPP_LEADS = 'false';

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
      expect(screen.getByText(/WhatsApp messaging is currently unavailable/i)).toBeInTheDocument();
      expect(screen.getByText(/Copy Quotation Text/i)).toBeInTheDocument();
      expect(screen.queryByText(/undergoing final client verification/i)).not.toBeInTheDocument();
    });

    process.env = originalEnv;
  });

  it('launches WhatsApp and renders confirmation when WhatsApp lead delivery is configured', async () => {
    const originalEnv = { ...process.env };
    process.env.NEXT_PUBLIC_ENABLE_WHATSAPP_LEADS = 'true';
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER = '917795551118';

    const openSpy = vi.spyOn(window, 'open').mockImplementation(() => null);

    render(<QuotationForm />);

    fireEvent.change(screen.getByLabelText(/Your Full Name/i), {
      target: { value: 'Naveen Gowda' },
    });
    fireEvent.change(screen.getByLabelText(/Contact Phone Number/i), {
      target: { value: '+91 9986028416' },
    });

    const submitBtn = screen.getByRole('button', { name: /Request Quotation via WhatsApp/i });
    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(screen.getByText(/Quotation Message Ready to Send/i)).toBeInTheDocument();
      expect(
        screen.getByText(/Your quotation message is ready\. WhatsApp will open/i)
      ).toBeInTheDocument();
      expect(screen.queryByText(/undergoing final client verification/i)).not.toBeInTheDocument();
      expect(openSpy).toHaveBeenCalledWith(
        expect.stringContaining('https://wa.me/917795551118'),
        '_blank',
        'noopener,noreferrer'
      );
    });

    openSpy.mockRestore();
    process.env = originalEnv;
  });
});
