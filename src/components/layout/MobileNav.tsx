'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, Mail, FileText, ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '@/config/site';
import { COMPANY } from '@/config/company';
import { cn } from '@/lib/utils/cn';

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        className="rounded-lg p-2 text-slate-700 transition-colors hover:bg-slate-100 hover:text-brand-blue-900 focus:outline-none focus:ring-2 focus:ring-brand-gold-500"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-brand-blue-950/60 backdrop-blur-sm transition-opacity"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Drawer */}
      <div
        className={cn(
          'fixed inset-y-0 right-0 z-50 flex w-full max-w-xs transform flex-col justify-between bg-white shadow-2xl transition-transform duration-300 ease-in-out',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="overflow-y-auto p-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-6">
            <span className="text-lg font-bold tracking-tight text-brand-blue-900">
              {COMPANY.name}
            </span>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close navigation"
              className="rounded-lg p-2 text-slate-400 hover:text-slate-700"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="mt-6 flex flex-col space-y-1">
            {SITE_CONFIG.mainNav.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition-colors',
                    isActive
                      ? 'bg-brand-blue-50 font-bold text-brand-blue-900'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-brand-blue-900'
                  )}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <div className="h-2 w-2 rounded-full bg-brand-gold-500 shadow-gold-sm" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Quick Category Badges */}
          <div className="mt-4 rounded-2xl bg-slate-50 p-4">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Popular Models
            </span>
            <div className="mt-2.5 flex flex-wrap gap-1.5">
              <Link
                href="/products#passenger-lift"
                className="rounded-lg border border-slate-100 bg-white px-2.5 py-1 text-xs font-medium text-slate-700 shadow-sm"
              >
                Passenger
              </Link>
              <Link
                href="/products#home-lift"
                className="rounded-lg border border-slate-100 bg-white px-2.5 py-1 text-xs font-medium text-slate-700 shadow-sm"
              >
                Home / Villa
              </Link>
              <Link
                href="/products#hospital-lift"
                className="rounded-lg border border-slate-100 bg-white px-2.5 py-1 text-xs font-medium text-slate-700 shadow-sm"
              >
                Hospital
              </Link>
              <Link
                href="/products#goods-lift"
                className="rounded-lg border border-slate-100 bg-white px-2.5 py-1 text-xs font-medium text-slate-700 shadow-sm"
              >
                Goods
              </Link>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3 border-t border-slate-100 pt-6">
            <Link
              href="/quote"
              className="shimmer-button flex w-full items-center justify-center gap-2 rounded-xl bg-brand-gold-500 px-4 py-3.5 text-sm font-bold text-brand-blue-950 shadow-gold-sm transition-all hover:bg-brand-gold-400"
            >
              <span>Request a Quote</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <a
              href={COMPANY.brochure.publicPath}
              download={COMPANY.brochure.filename}
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
            >
              <FileText className="h-4 w-4 text-brand-gold-600" />
              <span>Download PDF Brochure</span>
            </a>
          </div>
        </div>

        {/* Footer Contact in Drawer */}
        <div className="space-y-3 border-t border-slate-100 bg-slate-50 p-6 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
            <span className="font-bold text-brand-blue-950">Breakdown &amp; Support Hotline</span>
          </div>
          <div className="flex flex-col gap-2">
            {COMPANY.phones.map((phone) => (
              <a
                key={phone.raw}
                href={phone.telUri}
                className="flex items-center gap-2 font-mono font-medium text-slate-800 hover:text-brand-gold-600"
              >
                <Phone className="h-3.5 w-3.5 shrink-0 text-brand-gold-600" />
                <span>{phone.display}</span>
              </a>
            ))}
            <a
              href={COMPANY.email.mailtoUri}
              className="flex items-center gap-2 truncate text-slate-700 hover:text-brand-blue-900"
            >
              <Mail className="h-3.5 w-3.5 shrink-0 text-brand-gold-600" />
              <span className="truncate">{COMPANY.email.address}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
