'use client';

import React, { useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  X,
  CheckCircle2,
  ArrowRight,
  PhoneCall,
  Sparkles,
  Building,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import type { ElevatorProduct } from '@/types/product';
import { COMPANY } from '@/config/company';

interface ProductDetailModalProps {
  product: ElevatorProduct | null;
  allProducts?: ElevatorProduct[];
  isOpen: boolean;
  onClose: () => void;
  onNavigateProduct?: (product: ElevatorProduct) => void;
}

export function ProductDetailModal({
  product,
  allProducts,
  isOpen,
  onClose,
  onNavigateProduct,
}: ProductDetailModalProps) {
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

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || !product) return null;

  const quoteHref = `/quote?product=${encodeURIComponent(product.name)}`;

  const currentIndex = allProducts ? allProducts.findIndex((p) => p.id === product.id) : -1;
  const prevProduct = allProducts && currentIndex > 0 ? allProducts[currentIndex - 1] : null;
  const nextProduct =
    allProducts && currentIndex >= 0 && currentIndex < allProducts.length - 1
      ? allProducts[currentIndex + 1]
      : null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-modal-title"
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
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-brand-gold-400">
                <Sparkles className="h-3.5 w-3.5" />
                <span>{product.category.toUpperCase()} ELEVATOR ARCHITECTURE</span>
              </div>
              <h2
                id="product-modal-title"
                className="mt-1 text-xl font-extrabold tracking-tight text-white sm:text-2xl"
              >
                {product.name}
              </h2>
            </div>

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="rounded-full border border-white/10 bg-white/10 p-2 text-slate-300 transition-colors hover:bg-white/20 hover:text-white"
              aria-label="Close product specifications"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Content */}
        <div className="overflow-y-auto px-6 py-6 sm:px-8 sm:py-7">
          {/* Product Image Banner */}
          <div className="relative mb-6 h-56 w-full overflow-hidden rounded-2xl bg-brand-blue-950 sm:h-64">
            <Image
              src={product.image}
              alt={`${product.name} - Lifestyle Elevators`}
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 768px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-sm font-medium text-slate-200 backdrop-blur-sm sm:text-base">
                {product.tagline}
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {/* Overview */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-brand-gold-600">
                Engineering Overview
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
                {product.description}
              </p>
            </div>

            {/* Complete Engineering Features */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5 sm:p-6">
              <h4 className="border-b border-slate-200/80 pb-3 text-sm font-bold uppercase tracking-wider text-brand-blue-950">
                Standard Engineering Features & Safety Systems
              </h4>
              <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {product.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-xs text-slate-700 sm:text-sm"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recommended Applications */}
            <div className="rounded-2xl border border-brand-blue-100 bg-brand-blue-50/70 p-5 text-brand-blue-950">
              <div className="flex items-center gap-2">
                <Building className="h-4 w-4 text-brand-gold-600" />
                <h4 className="text-xs font-bold uppercase tracking-wider text-brand-blue-900">
                  Ideal Architectural Applications:
                </h4>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {product.idealFor.map((app, idx) => (
                  <span
                    key={idx}
                    className="rounded-lg border border-brand-blue-200 bg-white px-3 py-1.5 text-xs font-medium text-brand-blue-900 shadow-sm"
                  >
                    {app}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer / Action Bar */}
        <div className="flex flex-col-reverse items-stretch justify-between gap-3 border-t border-slate-200 bg-slate-50 px-6 py-4 sm:flex-row sm:items-center sm:px-8">
          {/* Prev / Next Product Navigator */}
          <div className="flex items-center justify-center gap-2 sm:justify-start">
            {allProducts && onNavigateProduct && (
              <>
                <button
                  type="button"
                  disabled={!prevProduct}
                  onClick={() => prevProduct && onNavigateProduct(prevProduct)}
                  className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-medium text-slate-600 transition-colors hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40"
                  title={prevProduct ? `Previous: ${prevProduct.name}` : undefined}
                >
                  <ChevronLeft className="h-3.5 w-3.5" />
                  <span className="hidden sm:inline">Prev</span>
                </button>
                <button
                  type="button"
                  disabled={!nextProduct}
                  onClick={() => nextProduct && onNavigateProduct(nextProduct)}
                  className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-medium text-slate-600 transition-colors hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40"
                  title={nextProduct ? `Next: ${nextProduct.name}` : undefined}
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
              <span>Enquire About {product.name}</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
