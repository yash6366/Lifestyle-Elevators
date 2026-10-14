'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { BROCHURE_COMPONENTS } from '@/data/products';
import type { ComponentCategory, ComponentItem } from '@/types/product';
import { Wrench, Shield, Cpu, Layers, FileCode2, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils/cn';

const CATEGORIES: { key: ComponentCategory | 'all'; label: string; icon: React.ReactNode }[] = [
  { key: 'all', label: 'All Components', icon: <Layers className="h-4 w-4" /> },
  { key: 'doors', label: 'Doors & Gates', icon: <Shield className="h-4 w-4" /> },
  { key: 'cabins', label: 'Cabin Finishes', icon: <Wrench className="h-4 w-4" /> },
  { key: 'motors', label: 'Traction Motors', icon: <Cpu className="h-4 w-4" /> },
  { key: 'controllers', label: 'Controllers & Automation', icon: <Cpu className="h-4 w-4" /> },
  { key: 'ropes', label: 'Suspension Ropes', icon: <Shield className="h-4 w-4" /> },
  { key: 'drawings', label: 'Technical Schematics', icon: <FileCode2 className="h-4 w-4" /> },
];

export function ProductGallery() {
  const [activeCategory, setActiveCategory] = useState<ComponentCategory | 'all'>('all');

  const filteredItems =
    activeCategory === 'all'
      ? BROCHURE_COMPONENTS
      : BROCHURE_COMPONENTS.filter((item) => item.category === activeCategory);

  return (
    <section id="brochure-components" className="space-y-8">
      {/* Category Filter Tabs */}
      <div className="scrollbar-none flex items-center gap-2 overflow-x-auto pb-2">
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.key;
          return (
            <button
              key={cat.key}
              type="button"
              onClick={() => setActiveCategory(cat.key)}
              className={cn(
                'inline-flex items-center gap-2 whitespace-nowrap rounded-xl border px-4 py-2 text-xs font-semibold transition-all sm:text-sm',
                isActive
                  ? 'border-brand-blue-900 bg-brand-blue-900 text-white shadow-sm'
                  : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
              )}
            >
              <span className={isActive ? 'text-brand-gold-400' : 'text-slate-400'}>
                {cat.icon}
              </span>
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* Grid of Components or Empty State */}
      {filteredItems.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-300 p-12 text-center text-slate-500">
          <p className="text-sm">No components found for this category.</p>
          <button
            type="button"
            onClick={() => setActiveCategory('all')}
            className="mt-2 text-xs font-semibold text-brand-blue-900 underline hover:text-brand-gold-600"
          >
            Show All Components
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item: ComponentItem) => (
            <div
              key={item.id}
              className="group flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="space-y-3">
                <span className="inline-block rounded-full border border-brand-gold-200 bg-brand-gold-50 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-brand-gold-800">
                  {item.categoryName}
                </span>
                <h4 className="text-base font-bold text-brand-blue-950 transition-colors group-hover:text-brand-gold-600 sm:text-lg">
                  {item.name}
                </h4>
                {item.description && (
                  <p className="text-xs leading-relaxed text-slate-600">{item.description}</p>
                )}

                {/* Technical Specifications when available */}
                {item.specifications && item.specifications.length > 0 && (
                  <div className="mt-4 space-y-1.5 rounded-xl border-t border-slate-100 bg-slate-50/80 p-3 pt-3 text-xs">
                    <span className="mb-1 block text-[11px] font-bold uppercase tracking-wider text-slate-800">
                      Technical Specifications:
                    </span>
                    {item.specifications.map((spec, sIdx) => (
                      <div key={sIdx} className="flex items-center justify-between text-slate-600">
                        <span className="font-medium text-slate-500">{spec.label}:</span>
                        <span className="font-semibold text-slate-900">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="mt-6 border-t border-slate-100 pt-4">
                <Link
                  href={`/quote?product=${encodeURIComponent(item.name)}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-blue-900 transition-colors hover:text-brand-gold-600"
                >
                  <span>Request Component Specification</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
