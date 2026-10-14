'use client';

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { QuotationForm } from '@/components/forms/QuotationForm';
import { COMPANY } from '@/config/company';
import { Phone } from 'lucide-react';

function QuoteContent() {
  const searchParams = useSearchParams();
  const productParam = searchParams.get('product') || undefined;
  const serviceParam = searchParams.get('service') || undefined;
  const initialSelection = productParam || serviceParam;

  return (
    <div className="flex flex-col gap-12 pb-24 sm:gap-16">
      {/* 1. Header Hero */}
      <section className="border-b border-brand-blue-900 bg-brand-blue-950 py-14 text-white sm:py-20">
        <div className="mx-auto max-w-3xl max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <span className="mb-3 inline-block rounded-full border border-brand-gold-400/30 bg-brand-gold-500/20 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-brand-gold-300">
            Custom Vertical Mobility Estimation
          </span>
          <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
            Get an Elevator Quotation
          </h1>
          <p className="mt-4 text-balance text-base leading-relaxed text-slate-300 sm:text-lg">
            Share your building specifications, passenger load, or service requirements. Our
            Bangalore engineering team will review your shaft dimensions and prepare an official
            quotation.
          </p>
        </div>
      </section>

      {/* 2. Form & Trust Badges */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
          {/* Left Column: Quotation Form */}
          <div className="lg:col-span-8">
            <QuotationForm initialProductOrService={initialSelection} />
          </div>

          {/* Right Column: Guidance & Direct Phone reach */}
          <div className="space-y-6 lg:col-span-4">
            <div className="space-y-4 rounded-3xl border border-slate-200/90 bg-white p-6 shadow-sm sm:p-8">
              <h3 className="border-b border-slate-100 pb-2 text-base font-bold text-brand-blue-950">
                What Happens Next?
              </h3>
              <ol className="space-y-3 text-xs text-slate-600 sm:text-sm">
                <li className="flex items-start gap-2.5">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-blue-900 text-[10px] font-bold text-white">
                    1
                  </span>
                  <span>
                    Your specifications are reviewed by a Lifestyle Elevators structural engineer.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-blue-900 text-[10px] font-bold text-white">
                    2
                  </span>
                  <span>
                    We verify pit depth, overhead, and entrance clearances against Indian lift
                    standards.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-blue-900 text-[10px] font-bold text-white">
                    3
                  </span>
                  <span>
                    You receive a comprehensive proposal detailing machinery specs, timeline, and
                    pricing.
                  </span>
                </li>
              </ol>
            </div>

            {/* Direct Phone Support */}
            <div className="space-y-4 rounded-3xl bg-brand-blue-950 p-6 text-white shadow-md sm:p-8">
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-gold-400">
                Prefer Speaking Directly?
              </span>
              <h4 className="text-lg font-bold">Call Our Engineering Team</h4>
              <p className="text-xs leading-relaxed text-slate-300">
                Reach out right now to discuss custom requirements, building floor plans, or site
                visits.
              </p>
              <div className="flex flex-col gap-2 pt-2">
                {COMPANY.phones.map((phone) => (
                  <a
                    key={phone.raw}
                    href={phone.telUri}
                    className="inline-flex items-center gap-2 rounded-xl bg-white/10 p-3 font-mono text-sm text-white transition-colors hover:bg-white/20"
                  >
                    <Phone className="h-4 w-4 shrink-0 text-brand-gold-400" />
                    <span>{phone.display}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function QuotePage() {
  return (
    <Suspense
      fallback={
        <div className="mx-auto max-w-7xl px-4 py-24 text-center">
          <p className="text-sm text-slate-500">Loading quotation form...</p>
        </div>
      }
    >
      <QuoteContent />
    </Suspense>
  );
}
