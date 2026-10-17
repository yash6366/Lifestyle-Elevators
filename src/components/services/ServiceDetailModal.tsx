'use client';

import React, { useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  X,
  CheckCircle2,
  ArrowRight,
  PhoneCall,
  Factory,
  Wrench,
  Hammer,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import type { ElevatorService } from '@/types/service';
import { COMPANY } from '@/config/company';

interface ServiceDetailModalProps {
  service: ElevatorService | null;
  allServices?: ElevatorService[];
  isOpen: boolean;
  onClose: () => void;
  onNavigateService?: (service: ElevatorService) => void;
}

export function ServiceDetailModal({
  service,
  allServices,
  isOpen,
  onClose,
  onNavigateService,
}: ServiceDetailModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  // Close on Escape key
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (!isOpen) return;

    // Prevent body scrolling while modal is open
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || !service) return null;

  const quoteHref = `/quote?service=${encodeURIComponent(service.name)}`;

  const renderIcon = (name: string) => {
    switch (name) {
      case 'Factory':
        return <Factory className="h-6 w-6 text-brand-gold-400" />;
      case 'Wrench':
        return <Wrench className="h-6 w-6 text-brand-gold-400" />;
      case 'Hammer':
        return <Hammer className="h-6 w-6 text-brand-gold-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="h-6 w-6 text-brand-gold-400" />;
      default:
        return <Wrench className="h-6 w-6 text-brand-gold-400" />;
    }
  };

  // Service switcher logic (Prev / Next)
  const currentIndex = allServices ? allServices.findIndex((s) => s.id === service.id) : -1;
  const prevService = allServices && currentIndex > 0 ? allServices[currentIndex - 1] : null;
  const nextService =
    allServices && currentIndex >= 0 && currentIndex < allServices.length - 1
      ? allServices[currentIndex + 1]
      : null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-brand-blue-950/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div
        ref={modalRef}
        className="relative z-10 flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-3xl border border-white/20 bg-white shadow-2xl transition-all"
      >
        {/* Modal Header */}
        <div className="relative border-b border-slate-100 bg-brand-blue-950 px-6 py-5 text-white sm:px-8">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-brand-gold-400/30 bg-brand-blue-900/90 shadow-inner">
                {renderIcon(service.iconName)}
              </div>
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-brand-gold-400">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>Specialized Engineering Service</span>
                </div>
                <h2
                  id="service-modal-title"
                  className="mt-0.5 text-xl font-extrabold tracking-tight text-white sm:text-2xl"
                >
                  {service.name}
                </h2>
              </div>
            </div>

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="rounded-full border border-white/10 bg-white/10 p-2 text-slate-300 transition-colors hover:bg-white/20 hover:text-white"
              aria-label="Close service details"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Content */}
        <div className="overflow-y-auto px-6 py-6 sm:px-8 sm:py-7">
          {/* Service Image Banner */}
          <div className="relative mb-6 h-56 w-full overflow-hidden rounded-2xl bg-brand-blue-950 sm:h-64">
            <Image
              src={service.image}
              alt={`${service.name} - Lifestyle Elevators`}
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 768px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className="inline-block rounded-md border border-white/20 bg-brand-blue-950/80 px-3 py-1 text-xs font-medium text-slate-200 backdrop-blur-sm">
                Lifestyle Elevators • Bangalore Technical Operations
              </span>
            </div>
          </div>

          {/* Service Overview & Full Brochure Description */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-brand-gold-600">
                Service Scope & Overview
              </h3>
              <p className="mt-2 text-base font-medium leading-snug text-brand-blue-950 sm:text-lg">
                {service.shortDescription}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                {service.fullDescription}
              </p>
            </div>

            {/* Key Deliverables & Highlights */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5 sm:p-6">
              <div className="flex items-center justify-between border-b border-slate-200/80 pb-3">
                <h4 className="text-sm font-bold uppercase tracking-wider text-brand-blue-950">
                  Key Service Deliverables & Standards
                </h4>
                <span className="text-xs font-medium text-brand-gold-600">
                  Official Brochure Specifications
                </span>
              </div>
              <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {service.keyHighlights.map((highlight, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-xs text-slate-700 sm:text-sm"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold-500" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quality Commitment Callout */}
            <div className="flex flex-col gap-3 rounded-2xl border border-brand-blue-100 bg-brand-blue-50/70 p-4 text-xs text-brand-blue-900 sm:flex-row sm:items-center sm:justify-between sm:text-sm">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-brand-gold-600" />
                <span className="font-semibold">
                  Backed by verified post-check-up analysis reports and reputed OEM parts.
                </span>
              </div>
              <span className="shrink-0 text-xs text-slate-500">Bangalore Handover Standards</span>
            </div>
          </div>
        </div>

        {/* Modal Footer / Action Bar */}
        <div className="flex flex-col-reverse items-stretch justify-between gap-3 border-t border-slate-200 bg-slate-50 px-6 py-4 sm:flex-row sm:items-center sm:px-8">
          {/* Prev / Next Service Navigator (Optional Convenience) */}
          <div className="flex items-center justify-center gap-2 sm:justify-start">
            {allServices && onNavigateService && (
              <>
                <button
                  type="button"
                  disabled={!prevService}
                  onClick={() => prevService && onNavigateService(prevService)}
                  className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-medium text-slate-600 transition-colors hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40"
                  title={prevService ? `Previous: ${prevService.name}` : undefined}
                >
                  <ChevronLeft className="h-3.5 w-3.5" />
                  <span className="hidden sm:inline">Prev</span>
                </button>
                <button
                  type="button"
                  disabled={!nextService}
                  onClick={() => nextService && onNavigateService(nextService)}
                  className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-medium text-slate-600 transition-colors hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40"
                  title={nextService ? `Next: ${nextService.name}` : undefined}
                >
                  <span className="hidden sm:inline">Next</span>
                  <ChevronRight className="h-3.5 w-3.5" />
                </button>
              </>
            )}

            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-100 sm:text-sm"
            >
              Close
            </button>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            {COMPANY.phones[0] && (
              <a
                href={COMPANY.phones[0].telUri}
                className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-xs font-semibold text-brand-blue-900 transition-colors hover:bg-slate-100 sm:text-sm"
              >
                <PhoneCall className="h-4 w-4 text-brand-gold-600" />
                <span>Call Desk</span>
              </a>
            )}

            <Link
              href={quoteHref}
              onClick={onClose}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-gold-500 px-6 py-2.5 text-xs font-bold text-brand-blue-950 shadow-md transition-all hover:bg-brand-gold-400 hover:shadow-lg sm:text-sm"
            >
              <span>{service.callToAction}</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
