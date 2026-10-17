import React from 'react';
import type { Metadata } from 'next';
import { BrochureViewer } from '@/components/brochure/BrochureViewer';
import { COMPANY } from '@/config/company';

export const metadata: Metadata = {
  title: 'Download & Share Company Brochure',
  description:
    'Download the official 8-page Lifestyle Elevators brochure containing lift dimensions, door finishes, cabin designs, motor ratings, and hoistway drawings.',
};

export default function BrochurePage() {
  return (
    <div className="flex flex-col gap-12 pb-24 sm:gap-16">
      {/* 1. Header Hero */}
      <section className="relative overflow-hidden border-b border-brand-blue-900 bg-brand-blue-950 py-16 text-white sm:py-24">
        <div className="bg-architectural-grid pointer-events-none absolute inset-0 opacity-30" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <span className="mb-3 inline-block rounded-full border border-brand-gold-400/30 bg-brand-gold-500/20 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-brand-gold-300 backdrop-blur-md">
            Public Technical Documentation
          </span>
          <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
            Company Brochure
          </h1>
          <p className="mt-4 text-balance text-base leading-relaxed text-slate-300 sm:text-lg">
            Preview, download, and share the official 8-page {COMPANY.name} engineering brochure.
            Includes full hoistway specifications, door varieties, and motor technical ratings.
          </p>
        </div>
      </section>

      {/* 2. Interactive Brochure Viewer & Sharing Component */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <BrochureViewer />
      </section>
    </div>
  );
}
