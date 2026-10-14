import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import React from 'react';
import { ContactForm } from '@/components/forms/ContactForm';

describe('ContactForm Component', () => {
  it('renders all required form controls with accessible labels', () => {
    render(<ContactForm />);

    expect(screen.getByLabelText(/Your Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Phone Number/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email Address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Enquiry Subject/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Your Message/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Submit Enquiry/i })).toBeInTheDocument();
  });

  it('displays validation errors on empty submit', async () => {
    render(<ContactForm />);

    const submitBtn = screen.getByRole('button', { name: /Submit Enquiry/i });
    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(screen.getByText(/Name must be at least 2 characters/i)).toBeInTheDocument();
      expect(screen.getByText(/Please enter a valid phone number/i)).toBeInTheDocument();
      expect(screen.getByText(/Subject must be at least 3 characters/i)).toBeInTheDocument();
      expect(screen.getByText(/Message must be at least 10 characters/i)).toBeInTheDocument();
    });
  });

  it('handles valid submission with unconfigured fallback display', async () => {
    const originalEnv = { ...process.env };
    process.env.NEXT_PUBLIC_ENABLE_WHATSAPP_LEADS = 'false';

    render(<ContactForm />);

    fireEvent.change(screen.getByLabelText(/Your Name/i), {
      target: { value: 'Naveen Kumar' },
    });
    fireEvent.change(screen.getByLabelText(/Phone Number/i), {
      target: { value: '+91 9986028416' },
    });
    fireEvent.change(screen.getByLabelText(/Enquiry Subject/i), {
      target: { value: 'Elevator Installation Inquiry' },
    });
    fireEvent.change(screen.getByLabelText(/Your Message/i), {
      target: { value: 'We are constructing an apartment complex in Ittamadu and need 2 lifts.' },
    });

    const submitBtn = screen.getByRole('button', { name: /Submit Enquiry/i });
    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(screen.getByText(/Enquiry Formatted & Ready/i)).toBeInTheDocument();
      expect(screen.getByText(/Copy Enquiry Text/i)).toBeInTheDocument();
    });

    process.env = originalEnv;
  });

  it('opens WhatsApp and displays success state when WhatsApp lead delivery is configured', async () => {
    const originalEnv = { ...process.env };
    process.env.NEXT_PUBLIC_ENABLE_WHATSAPP_LEADS = 'true';
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER = '917795551118';

    const openSpy = vi.spyOn(window, 'open').mockImplementation(() => null);

    render(<ContactForm />);

    fireEvent.change(screen.getByLabelText(/Your Name/i), {
      target: { value: 'Naveen Kumar' },
    });
    fireEvent.change(screen.getByLabelText(/Phone Number/i), {
      target: { value: '+91 9986028416' },
    });
    fireEvent.change(screen.getByLabelText(/Enquiry Subject/i), {
      target: { value: 'Elevator Installation Inquiry' },
    });
    fireEvent.change(screen.getByLabelText(/Your Message/i), {
      target: { value: 'We are constructing an apartment complex in Ittamadu and need 2 lifts.' },
    });

    const submitBtn = screen.getByRole('button', { name: /Submit Enquiry/i });
    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(screen.getByText(/WhatsApp Opened/i)).toBeInTheDocument();
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
