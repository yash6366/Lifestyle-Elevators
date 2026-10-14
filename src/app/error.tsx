'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { AlertTriangle, RotateCcw, Home } from 'lucide-react';
import { COMPANY } from '@/config/company';

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to client console or monitoring service
    console.error('Unhandled runtime error:', error);
  }, [error]);

  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-xl text-center">
        {/* Warning Icon & Badge */}
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-amber-200 bg-amber-50 text-amber-600 shadow-sm">
          <AlertTriangle className="h-7 w-7" />
        </div>

        <h1 className="mt-5 text-2xl font-extrabold tracking-tight text-brand-blue-950 sm:text-4xl">
          Temporary Technical Hiccup
        </h1>

        <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
          We encountered an unexpected issue while rendering this elevator view. Our engineering
          team has been notified. You can retry loading this page or return to the homepage.
        </p>

        {/* Action Controls */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => reset()}
            className="inline-flex items-center gap-2 rounded-xl bg-brand-gold-500 px-6 py-3 text-sm font-bold text-brand-blue-950 shadow transition-all hover:bg-brand-gold-400 active:scale-95"
          >
            <RotateCcw className="h-4 w-4" />
            <span>Try Again</span>
          </button>

          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-brand-blue-950 shadow-sm transition-all hover:bg-slate-50"
          >
            <Home className="h-4 w-4 text-brand-gold-600" />
            <span>Return to Homepage</span>
          </Link>
        </div>

        {/* Assistance Reach */}
        <div className="mt-12 border-t border-slate-200/80 pt-6 text-xs text-slate-500">
          <span>Need technical assistance? Call our Bangalore office: </span>
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
