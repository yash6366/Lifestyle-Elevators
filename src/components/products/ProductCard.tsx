import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import type { ElevatorProduct } from '@/types/product';

interface ProductCardProps {
  product: ElevatorProduct;
}

export function ProductCard({ product }: ProductCardProps) {
  const quoteHref = `/quote?product=${encodeURIComponent(product.name)}`;

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
