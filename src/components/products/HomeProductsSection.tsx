'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import type { ElevatorProduct } from '@/types/product';
import { ProductCard } from '@/components/products/ProductCard';
import { ProductDetailModal } from '@/components/products/ProductDetailModal';

interface HomeProductsSectionProps {
  products: ElevatorProduct[];
}

export function HomeProductsSection({ products }: HomeProductsSectionProps) {
  const [selectedProduct, setSelectedProduct] = useState<ElevatorProduct | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Featured Models' },
    { id: 'passenger', label: 'Passenger & Residential' },
    { id: 'home', label: 'Home & Villas' },
    { id: 'hospital', label: 'Hospital & Healthcare' },
    { id: 'goods', label: 'Goods & Cargo' },
  ];

  const filteredProducts =
    activeCategory === 'all' ? products : products.filter((p) => p.category === activeCategory);

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-gold-600">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Product Portfolio</span>
          </span>
          <h2 className="mt-1.5 text-2xl font-extrabold text-brand-blue-950 sm:text-3xl lg:text-4xl">
            Engineered Elevators for Every Architectural Need
          </h2>
          <p className="mt-2 text-sm text-slate-600 sm:text-base">
            Click any elevator model to review full engineering features, cabin configurations, and
            recommended applications.
          </p>
        </div>

        <Link
          href="/products"
          className="group inline-flex shrink-0 items-center gap-2 rounded-xl border border-brand-blue-900/20 bg-brand-blue-50/60 px-4 py-2.5 text-xs font-bold text-brand-blue-950 transition-all hover:bg-brand-blue-900 hover:text-white"
        >
          <span>Explore All 6 Elevator Categories & Components</span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      {/* Category Filter Pills */}
      <div className="mt-6 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setActiveCategory(cat.id)}
            className={`rounded-xl px-4 py-2 text-xs font-bold transition-all ${
              activeCategory === cat.id
                ? 'bg-brand-blue-950 text-white shadow-md'
                : 'border border-slate-200 bg-white text-slate-600 hover:bg-slate-100'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Minimal Product Cards Grid */}
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            variant="minimal"
            onSelect={(p) => setSelectedProduct(p)}
          />
        ))}
      </div>

      {/* Product Detail Modal (Opens when clicked) */}
      <ProductDetailModal
        product={selectedProduct}
        allProducts={products}
        isOpen={Boolean(selectedProduct)}
        onClose={() => setSelectedProduct(null)}
        onNavigateProduct={(p) => setSelectedProduct(p)}
      />
    </section>
  );
}
