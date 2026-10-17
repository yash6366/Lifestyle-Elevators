import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, FileCheck, Phone, Mail, MapPin } from 'lucide-react';
import { COMPANY } from '@/config/company';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Terms of Service and Engineering Quotation Terms for Lifestyle Elevators Bangalore.',
};

export default function TermsPage() {
  return (
    <div className="flex flex-col gap-12 pb-24 sm:gap-16">
      {/* Header Hero */}
      <section className="relative overflow-hidden border-b border-brand-blue-900 bg-brand-blue-950 py-16 text-white sm:py-20">
        <div className="bg-architectural-grid pointer-events-none absolute inset-0 opacity-30" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <span className="mb-3 inline-block rounded-full border border-brand-gold-400/30 bg-brand-gold-500/20 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-brand-gold-300 backdrop-blur-md">
            Commercial &amp; Technical Terms
          </span>
          <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-4 text-balance text-base leading-relaxed text-slate-300 sm:text-lg">
            Engineering standards, quotation guidelines, and website terms for Lifestyle Elevators.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-8 rounded-3xl border border-slate-200/90 bg-white p-8 shadow-sm sm:p-12">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4 text-brand-blue-950">
            <FileCheck className="h-6 w-6 text-brand-gold-600" />
            <h2 className="text-xl font-bold sm:text-2xl">Website Terms &amp; Engineering Scope</h2>
          </div>

          <div className="space-y-6 text-sm leading-relaxed text-slate-700 sm:text-base">
            <div>
              <h3 className="text-base font-bold text-brand-blue-950 sm:text-lg">
                1. Quotations &amp; Technical Estimations
              </h3>
              <p className="mt-2 text-slate-600">
                All estimations generated through our website quotation tool and hoistway calculator
                are preliminary commercial and dimensional references derived from standard
                manufacturer tables. An official, binding commercial contract is issued only after
                on-site civil verification by a qualified {COMPANY.name} engineer.
              </p>
            </div>

            <div>
              <h3 className="text-base font-bold text-brand-blue-950 sm:text-lg">
                2. Site Preparation &amp; Hoistway Sizing
              </h3>
              <p className="mt-2 text-slate-600">
                Final hoistway shaft dimensions, pit depth, overhead clearances, and structural beam
                arrangements are dependent on building geometry, municipal building bylaws, and
                elevator speed ratings. The building owner or principal contractor is responsible
                for civil shaft construction and electrical supply provision as outlined in our
                engineering drawings.
              </p>
            </div>

            <div>
              <h3 className="text-base font-bold text-brand-blue-950 sm:text-lg">
                3. Component Sourcing &amp; Warranties
              </h3>
              <p className="mt-2 text-slate-600">
                Critical drive machines, traction motors, and wire ropes are sourced from reputed
                manufacturers (including Montanari, Bharat Bijlee, and Usha Martin) and are subject
                to their respective manufacturer component warranties. Comprehensive maintenance
                coverage is provided via our structured Annual Maintenance Contracts (AMC).
              </p>
            </div>

            <div>
              <h3 className="text-base font-bold text-brand-blue-950 sm:text-lg">
                4. Intellectual Property
              </h3>
              <p className="mt-2 text-slate-600">
                All architectural diagrams, technical drawings, dimension tables, branding assets,
                and catalogue materials on this website are the proprietary property of{' '}
                {COMPANY.name} and protected by applicable copyright laws.
              </p>
            </div>

            <div>
              <h3 className="text-base font-bold text-brand-blue-950 sm:text-lg">
                5. Registered Office Details
              </h3>
              <div className="mt-4 space-y-3 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-xs text-slate-700 sm:text-sm">
                <div className="flex items-start gap-2.5">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold-600" />
                  <span>{COMPANY.address.fullFormatted}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="h-4 w-4 shrink-0 text-brand-gold-600" />
                  <span>
                    {COMPANY.phones[0].display} / {COMPANY.phones[1].display}
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="h-4 w-4 shrink-0 text-brand-gold-600" />
                  <span>{COMPANY.email.address}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-100 pt-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-bold text-brand-blue-900 transition-colors hover:text-brand-gold-600"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
