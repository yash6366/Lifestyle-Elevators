'use client';

import React, { useState } from 'react';
import { Download, FileText, Eye, ExternalLink } from 'lucide-react';
import { COMPANY } from '@/config/company';
import { ShareBrochure } from './ShareBrochure';

export function BrochureViewer() {
  const [showEmbed, setShowEmbed] = useState(false);

  const pages = [
    {
      page: 1,
      title: 'Cover & Brand Identity',
      desc: 'Lifestyle Elevators corporate identity and skyscraper architecture.',
    },
    {
      page: 2,
      title: 'Safety Features & Standards',
      desc: 'ARD, Micro-leveling, Safety drive, Fireman service, and raw material sourcing.',
    },
    {
      page: 3,
      title: 'Services & Products Overview',
      desc: 'Manufacturing, installation, repair/service, AMC, and product category list.',
    },
    {
      page: 4,
      title: 'Elevator Doors Gallery',
      desc: 'MS Collapsible, MS Swing, Telescopic, and SS Glass center opening doors.',
    },
    {
      page: 5,
      title: 'Designer Cabins Gallery',
      desc: 'MS Powder coated, SS Matt, SS Wooden, and SS Rose Gold luxury cabins.',
    },
    {
      page: 6,
      title: 'Traction Motors & Drawings',
      desc: 'Montennori geared/gearless, Bharath Bijilee, Usha Martin ropes & hoistway drawings.',
    },
    {
      page: 7,
      title: 'Controllers & Electronic Panels',
      desc: 'Integrated 3-phase collective selective controller boards.',
    },
    {
      page: 8,
      title: 'Standard Measurements & Pit/Overhead',
      desc: 'Engineering dimensional tables for Passenger, Hospital, Goods lifts and Bangalore contact coordinates.',
    },
  ];

  return (
    <div className="space-y-12">
      {/* Overview & Quick Action Card */}
      <div className="flex flex-col items-start justify-between gap-8 rounded-3xl border border-slate-200/90 bg-white p-6 shadow-sm sm:p-10 lg:flex-row lg:items-center">
        <div className="max-w-2xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-gold-200 bg-brand-gold-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-gold-800">
            <FileText className="h-3.5 w-3.5" />
            <span>Official Technical Asset • {COMPANY.brochure.totalPages} Pages</span>
          </div>
          <h2 className="text-2xl font-bold text-brand-blue-950 sm:text-3xl">
            {COMPANY.brochure.title}
          </h2>
          <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
            Download our complete 8-page elevator catalogue containing comprehensive product
            specifications, architectural door options, designer cabin finishes, motor ratings,
            hoistway schematics, and standard dimensional engineering tables.
          </p>

          {/* Sharing Utilities */}
          <div className="pt-2">
            <ShareBrochure brochureUrl={COMPANY.brochure.publicPath} />
          </div>
        </div>

        {/* Download Call to Action Box */}
        <div className="w-full shrink-0 space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center sm:p-8 lg:w-auto">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-blue-900 text-brand-gold-400 shadow-md">
            <FileText className="h-8 w-8" />
          </div>
          <div>
            <span className="block font-mono text-xs text-slate-500">
              Format: Adobe PDF ({COMPANY.brochure.fileSize})
            </span>
            <span className="mt-0.5 block text-xs font-semibold text-emerald-700">
              ✓ Verified Safe Download
            </span>
          </div>
          <div className="flex flex-col gap-2.5 sm:flex-row lg:flex-col">
            <a
              href={COMPANY.brochure.publicPath}
              download={COMPANY.brochure.filename}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-gold-500 px-6 py-3.5 text-sm font-bold text-brand-blue-950 shadow transition-all hover:bg-brand-gold-400 active:scale-95"
            >
              <Download className="h-4 w-4" />
              <span>Download PDF File</span>
            </a>
            <button
              type="button"
              onClick={() => setShowEmbed(!showEmbed)}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-2.5 text-xs font-semibold text-slate-700 transition-all hover:bg-slate-100 sm:text-sm"
            >
              <Eye className="h-4 w-4 text-brand-blue-900" />
              <span>{showEmbed ? 'Hide Document Preview' : 'Preview PDF in Browser'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Embedded PDF Viewer (Toggled on request) */}
      {showEmbed && (
        <div className="animate-fade-in space-y-4 rounded-3xl border border-slate-200 bg-white p-4 shadow-lg sm:p-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h3 className="flex items-center gap-2 text-sm font-bold text-brand-blue-950">
              <Eye className="h-4 w-4 text-brand-gold-500" />
              <span>Embedded Document Viewer</span>
            </h3>
            <a
              href={COMPANY.brochure.publicPath}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs font-semibold text-brand-blue-900 hover:text-brand-gold-600"
            >
              <span>Open in New Tab</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
          <div className="h-[650px] w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
            <iframe
              src={`${COMPANY.brochure.publicPath}#view=FitH`}
              title="Lifestyle Elevators Official Brochure Preview"
              className="h-full w-full"
            />
          </div>
        </div>
      )}

      {/* Brochure Content Breakdown (8 Pages) */}
      <div className="space-y-6">
        <div className="border-b border-slate-200 pb-3">
          <h3 className="text-xl font-bold text-brand-blue-950">
            Brochure Document Breakdown (All 8 Pages)
          </h3>
          <p className="mt-1 text-xs text-slate-600 sm:text-sm">
            Summary of technical and architectural specifications indexed in the brochure.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {pages.map((p) => (
            <div
              key={p.page}
              className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition-colors hover:border-brand-gold-400"
            >
              <div className="space-y-2">
                <span className="inline-block rounded bg-brand-blue-50 px-2 py-0.5 text-[11px] font-bold text-brand-blue-900">
                  Page {p.page} of 8
                </span>
                <h4 className="text-sm font-bold text-slate-900">{p.title}</h4>
                <p className="text-xs leading-relaxed text-slate-600">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
