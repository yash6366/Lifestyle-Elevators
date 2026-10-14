import React from 'react';
import type { Metadata } from 'next';
import { MAIN_ELEVATOR_PRODUCTS } from '@/data/products';
import { ProductCard } from '@/components/products/ProductCard';
import { ProductGallery } from '@/components/products/ProductGallery';
import { DimensionTable } from '@/components/products/DimensionTable';
import { SectionHeader } from '@/components/shared/SectionHeader';

export const metadata: Metadata = {
  title: 'Elevator Products & Engineering Catalogue',
  description:
    'Explore Lifestyle Elevators complete product range: Passenger Lifts, Hospital Lifts, Home Elevators, Goods Lifts, Hydraulic Systems, MRL Elevators, Designer Cabins, and Doors.',
};

export default function ProductsPage() {
  return (
    <div className="flex flex-col gap-20 pb-24 sm:gap-24">
      {/* 1. Header Hero */}
      <section className="border-b border-brand-blue-900 bg-brand-blue-950 py-16 text-white sm:py-24">
        <div className="mx-auto max-w-3xl max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <span className="mb-3 inline-block rounded-full border border-brand-gold-400/30 bg-brand-gold-500/20 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-brand-gold-300">
            Engineered Vertical Mobility
          </span>
          <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
            Our Elevator Products
          </h1>
          <p className="mt-4 text-balance text-base leading-relaxed text-slate-300 sm:text-lg">
            Precision manufactured elevator systems tailored to the architectural blueprints,
            passenger traffic demands, and aesthetic interior styles of Bangalore properties.
          </p>
        </div>
      </section>

      {/* 2. Main 6 Elevator Products Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Core Elevator Range"
          title="Engineered for Passenger Comfort, Freight Durability & Space Efficiency"
          subtitle="Explore our primary elevator lines. Final capacity, cabin dimensions, and speed profiles are customized to your project specification."
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {MAIN_ELEVATOR_PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 3. Brochure Secondary Categories: Doors, Cabins, Motors, Controllers, Ropes, Drawings */}
      <section className="mx-auto max-w-7xl border-t border-slate-200 px-4 pt-8 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Brochure Technical Components"
          title="Elevator Doors, Designer Cabins & Traction Machinery"
          subtitle="All component categories featured in the Lifestyle Elevators official technical catalogue, including Montanari drives, Bharat Bijlee motors, and Usha Martin ropes."
        />

        <ProductGallery />
      </section>

      {/* 4. Engineering Dimensions & Standard Measurements (Brochure Page 8) */}
      <section className="mx-auto max-w-7xl border-t border-slate-200 px-4 pt-8 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Engineering Blueprint Data"
          title="Elevator Standard Measurements & Hoistway Clearances"
          subtitle="Official technical dimensional tables extracted from Page 8 of the Lifestyle Elevators brochure for architect and civil contractor reference."
        />

        <DimensionTable />
      </section>
    </div>
  );
}
