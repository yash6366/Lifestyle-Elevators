import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, act } from '@testing-library/react';
import React from 'react';
import { ShareBrochure } from '@/components/brochure/ShareBrochure';

describe('ShareBrochure Component', () => {
  const brochureUrl = '/brochures/lifestyle-elevators.pdf';

  it('renders Share Brochure, WhatsApp Share, and Copy Link buttons', () => {
    render(<ShareBrochure brochureUrl={brochureUrl} />);

    expect(screen.getByRole('button', { name: /Share Brochure/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Share via WhatsApp/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Copy Link/i })).toBeInTheDocument();
  });

  it('copies URL to clipboard when Copy Link is clicked', async () => {
    const writeTextMock = vi.fn().mockResolvedValue(undefined);
    Object.assign(navigator, {
      clipboard: {
        writeText: writeTextMock,
      },
    });

    render(<ShareBrochure brochureUrl={brochureUrl} />);

    const copyBtn = screen.getByRole('button', { name: /Copy Link/i });
    await act(async () => {
      fireEvent.click(copyBtn);
    });

    expect(writeTextMock).toHaveBeenCalledWith(expect.stringContaining(brochureUrl));
  });
});
