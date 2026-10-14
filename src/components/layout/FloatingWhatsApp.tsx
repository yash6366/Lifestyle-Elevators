'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { MessageCircle, Phone, X, AlertCircle } from 'lucide-react';
import { COMPANY, getWhatsAppConfig } from '@/config/company';
import { buildWhatsAppUrl } from '@/lib/whatsapp/buildMessage';

export function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);
  const waConfig = getWhatsAppConfig();

  // If WhatsApp is confirmed and configured by the company:
  if (waConfig.isConfigured) {
    const waResult = buildWhatsAppUrl(
      `Hello ${COMPANY.name},\n\nI would like to enquire about your elevator products and services.`
    );

    if (waResult.success && waResult.url) {
      return (
        <aside
          aria-label="WhatsApp Quick Contact"
          className="animate-fade-in fixed bottom-6 right-6 z-40 flex items-center gap-3"
        >
          {showTooltip && (
            <div className="hidden items-center gap-2 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs text-slate-800 shadow-lg sm:flex">
              <span>Chat with Lifestyle Elevators</span>
              <button
                type="button"
                onClick={() => setShowTooltip(false)}
                className="text-slate-400 hover:text-slate-600"
                aria-label="Dismiss tooltip"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </div>
          )}

          <a
            href={waResult.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with Lifestyle Elevators on WhatsApp"
            onMouseEnter={() => setShowTooltip(true)}
            onFocus={() => setShowTooltip(true)}
            onBlur={() => setShowTooltip(false)}
            className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-200 hover:scale-105 hover:bg-[#20ba59] focus:outline-none focus:ring-4 focus:ring-green-400/40 active:scale-95"
          >
            <MessageCircle className="h-7 w-7 fill-current" />
          </a>
        </aside>
      );
    }
  }

  // Safety Gate (PRD §1 & §9): When WhatsApp number is pending client confirmation,
  // provide a verified Phone Quick Contact bubble instead of a broken or deceptive link.
  return (
    <aside
      aria-label="Quick Phone Call"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2"
    >
      {showTooltip && (
        <div className="animate-fade-in max-w-xs rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs text-slate-800 shadow-xl">
          <div className="flex items-start justify-between gap-2">
            <div>
              <p className="flex items-center gap-1 font-semibold text-brand-blue-900">
                <AlertCircle className="h-3.5 w-3.5 text-amber-500" />
                <span>Call Lifestyle Elevators</span>
              </p>
              <p className="mt-0.5 text-[11px] text-slate-500">
                WhatsApp leads awaiting number confirmation. Tap to call our primary office desk
                directly.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setShowTooltip(false)}
              className="text-slate-400 hover:text-slate-600"
              aria-label="Close call advice"
            >
              <X className="h-3 w-3" />
            </button>
          </div>
          <div className="mt-2 flex items-center justify-between border-t border-slate-100 pt-2">
            <Link
              href="/quote"
              className="text-xs font-semibold text-brand-gold-600 hover:underline"
            >
              Online Quotation →
            </Link>
          </div>
        </div>
      )}

      <a
        href={COMPANY.phones[0].telUri}
        onMouseEnter={() => setShowTooltip(true)}
        onFocus={() => setShowTooltip(true)}
        onBlur={() => setShowTooltip(false)}
        aria-label={`Call Lifestyle Elevators at ${COMPANY.phones[0].display}`}
        className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-brand-gold-400 bg-brand-blue-900 text-white shadow-xl transition-all duration-200 hover:scale-105 hover:bg-brand-blue-800 focus:outline-none focus:ring-4 focus:ring-brand-gold-500/40 active:scale-95"
      >
        <Phone className="h-6 w-6 animate-pulse" />
      </a>
    </aside>
  );
}
