import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2, ArrowRight, Eye } from 'lucide-react';
import type { ElevatorProduct } from '@/types/product';

interface ProductCardProps {
  product: ElevatorProduct;
  variant?: 'full' | 'minimal';
  onSelect?: (product: ElevatorProduct) => void;
}

export function ProductCard({ product, variant = 'full', onSelect }: ProductCardProps) {
  const quoteHref = `/quote?product=${encodeURIComponent(product.name)}`;

  // Minimal variant for Home Page (clean, compact, clickable for details)
  if (variant === 'minimal') {
    return (
      <article
        id={product.slug}
        onClick={() => onSelect?.(product)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onSelect?.(product);
          }
        }}
        tabIndex={0}
        role="button"
        aria-label={`View full specifications for ${product.name}`}
        className="group relative flex cursor-pointer flex-col overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-gold-400/80 hover:shadow-luxury-hover focus:outline-none focus:ring-2 focus:ring-brand-gold-500"
      >
        {/* Compact Product Image */}
        <div className="relative h-56 w-full overflow-hidden bg-slate-900 sm:h-60">
          <Image
            src={product.image}
            alt={`${product.name} - Lifestyle Elevators`}
            fill
            className="group-hover:scale-108 object-cover object-center transition-transform duration-700 ease-out"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-950 via-brand-blue-950/30 to-transparent" />
          <div className="absolute bottom-3.5 left-4 right-4">
            <div className="flex items-center gap-2">
              <span className="inline-block rounded-md border border-brand-gold-400/40 bg-brand-blue-950/90 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-brand-gold-300 backdrop-blur-md">
                {product.category.toUpperCase()} LINE
              </span>
              <span className="rounded-md bg-white/20 px-2 py-0.5 text-[10px] font-semibold text-white backdrop-blur-md">
                Montanari / Bharat Bijlee
              </span>
            </div>
            <h3 className="mt-1.5 text-lg font-bold text-white transition-colors group-hover:text-brand-gold-300 sm:text-xl">
              {product.name}
            </h3>
          </div>
        </div>

        {/* Minimal Body */}
        <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
          <div>
            <p className="line-clamp-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
              {product.tagline}
            </p>

            {/* Quick Micro-Specs Badges */}
            <div className="mt-3.5 flex flex-wrap gap-1.5">
              <span className="rounded-md border border-slate-200 bg-slate-50 px-2 py-1 text-[11px] font-medium text-slate-700">
                ✓ ARD Auto Descent
              </span>
              <span className="rounded-md border border-slate-200 bg-slate-50 px-2 py-1 text-[11px] font-medium text-slate-700">
                ✓ Micro-Leveling
              </span>
              <span className="rounded-md border border-slate-200 bg-slate-50 px-2 py-1 text-[11px] font-medium text-slate-700">
                ✓ VVVF Silent Drive
              </span>
            </div>
          </div>

          <div className="mt-5 space-y-2.5 border-t border-slate-100 pt-4">
            {/* View Specs Trigger */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onSelect?.(product);
              }}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-blue-950 px-4 py-3 text-xs font-bold text-white shadow-sm transition-all duration-200 hover:bg-brand-gold-500 hover:text-brand-blue-950 hover:shadow-gold-sm"
            >
              <Eye className="h-4 w-4 text-brand-gold-400 transition-colors group-hover:text-brand-blue-950" />
              <span>View Specs & Features</span>
            </button>

            {/* Quick Enquiry Link */}
            <div className="text-center">
              <Link
                href={quoteHref}
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 transition-colors hover:text-brand-gold-600"
              >
                <span>Enquire Now</span>
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>
      </article>
    );
  }

  // Full variant (default, used on dedicated /products page & unit tests)
  return (
    <article
      id={product.slug}
      className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition-all duration-300 hover:shadow-xl"
    >
      {/* Product Image Container */}
      <div className="relative h-64 w-full overflow-hidden bg-slate-900 sm:h-72">
        <Image
          src={product.image}
          alt={`${product.name} - Lifestyle Elevators`}
          fill
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-950/80 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <span className="inline-block rounded-md border border-brand-gold-400/30 bg-brand-blue-950/80 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-brand-gold-300 backdrop-blur-sm">
            {product.category.toUpperCase()} ELEVATOR
          </span>
          <h3 className="mt-1 text-xl font-bold text-white transition-colors group-hover:text-brand-gold-300 sm:text-2xl">
            {product.name}
          </h3>
        </div>
      </div>

      {/* Product Body */}
      <div className="flex flex-1 flex-col justify-between space-y-6 p-6">
        <div className="space-y-4">
          <p className="text-sm font-medium leading-snug text-brand-blue-800">{product.tagline}</p>
          <p className="text-sm leading-relaxed text-slate-600">{product.description}</p>

          {/* Key Features from Brochure */}
          <div className="pt-2">
            <h4 className="mb-2.5 text-xs font-bold uppercase tracking-wider text-slate-900">
              Engineering Features:
            </h4>
            <ul className="space-y-2">
              {product.features.slice(0, 4).map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold-500" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Ideal Environments */}
          <div className="border-t border-slate-100 pt-2">
            <p className="text-xs text-slate-500">
              <span className="font-semibold text-slate-700">Recommended for: </span>
              {product.idealFor.join(' • ')}
            </p>
          </div>
        </div>

        {/* Action Button */}
        <div className="flex items-center justify-between gap-3 border-t border-slate-100 pt-4">
          <Link
            href={quoteHref}
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand-blue-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-brand-gold-500 hover:text-brand-blue-950"
          >
            <span>Enquire About {product.name}</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}
