import React from 'react';
import { COMPANY } from '@/config/company';
import { MapPin, ExternalLink, Navigation } from 'lucide-react';

export function MapEmbed() {
  return (
    <div className="flex flex-col overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-lg">
      {/* Map Header */}
      <div className="flex flex-col items-start justify-between gap-4 bg-brand-blue-950 p-6 text-white sm:flex-row sm:items-center">
        <div>
          <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-brand-gold-400">
            <MapPin className="h-3.5 w-3.5" />
            <span>Bangalore Engineering & Operations Office</span>
          </span>
          <h3 className="mt-1 text-lg font-bold">{COMPANY.name}</h3>
          <p className="mt-0.5 text-xs text-slate-300">{COMPANY.address.fullFormatted}</p>
        </div>
        <a
          href={COMPANY.maps.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-brand-gold-500 px-4 py-2.5 text-xs font-bold text-brand-blue-950 shadow-sm transition-colors hover:bg-brand-gold-400"
        >
          <Navigation className="h-4 w-4" />
          <span>Get Directions</span>
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>

      {/* Interactive Map Iframe */}
      <div className="relative h-80 w-full bg-slate-100 sm:h-96">
        <iframe
          src={COMPANY.maps.embedUrl}
          title="Lifestyle Elevators Office Location Map"
          className="h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* Map Footer Note */}
      <div className="flex flex-col items-center justify-between gap-2 border-t border-slate-200 bg-slate-50 p-4 text-center text-xs text-slate-600 sm:flex-row sm:text-left">
        <span>Landmark: Naidu Layout, Ittamadu, Near 1st Main 5th Cross</span>
        <a
          href={COMPANY.maps.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 font-semibold text-brand-blue-900 underline hover:text-brand-gold-600"
        >
          <span>Open Fullscreen in Google Maps</span>
          <ExternalLink className="h-3 w-3" />
        </a>
      </div>
    </div>
  );
}
