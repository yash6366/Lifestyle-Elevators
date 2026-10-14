import React from 'react';
import Link from 'next/link';
import { Home, Package, PhoneCall } from 'lucide-react';
import { COMPANY } from '@/config/company';

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-xl text-center">
        {/* Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-brand-gold-400/30 bg-brand-gold-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-brand-gold-700">
          <span>Error 404 • Destination Floor Not Found</span>
        </div>

        {/* Headline */}
        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-brand-blue-950 sm:text-5xl">
          We Couldn&apos;t Find That Floor
        </h1>

        {/* Friendly explanation */}
        <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
          The page or elevator specification you are looking for does not exist or may have been
          relocated in our latest technical catalogue update.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl bg-brand-gold-500 px-6 py-3 text-sm font-bold text-brand-blue-950 shadow transition-all hover:bg-brand-gold-400 active:scale-95"
          >
            <Home className="h-4 w-4" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            href="/products"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-brand-blue-950 shadow-sm transition-all hover:bg-slate-50"
          >
            <Package className="h-4 w-4 text-brand-gold-600" />
            <span>View Elevator Models</span>
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-brand-blue-950 shadow-sm transition-all hover:bg-slate-50"
          >
            <PhoneCall className="h-4 w-4 text-brand-gold-600" />
            <span>Contact Office</span>
          </Link>
        </div>

        {/* Direct Phone Assistance */}
        <div className="mt-12 border-t border-slate-200/80 pt-6 text-xs text-slate-500">
          <span>Need immediate assistance? Call our Bangalore desk at </span>
          <a
            href={COMPANY.phones[0].telUri}
            className="font-semibold text-brand-blue-900 hover:text-brand-gold-600"
          >
            {COMPANY.phones[0].display}
          </a>
        </div>
      </div>
    </div>
  );
}
