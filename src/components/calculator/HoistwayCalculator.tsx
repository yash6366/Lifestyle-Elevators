'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Compass,
  ArrowRight,
  CheckCircle2,
  Building2,
  Home,
  HeartPulse,
  Package,
} from 'lucide-react';
import { PASSENGER_MEASUREMENTS, HOSPITAL_MEASUREMENTS, GOODS_MEASUREMENTS } from '@/data/products';

type BuildingCategory = 'passenger' | 'home' | 'hospital' | 'goods';

interface CategoryOption {
  id: BuildingCategory;
  name: string;
  badge: string;
  icon: React.ReactNode;
  desc: string;
}

const CATEGORIES: CategoryOption[] = [
  {
    id: 'passenger',
    name: 'Residential & Commercial',
    badge: 'Apartments & Offices',
    icon: <Building2 className="h-5 w-5 text-brand-gold-500" />,
    desc: 'Multi-storey apartments, commercial IT parks, and corporate towers.',
  },
  {
    id: 'home',
    name: 'Home & Luxury Villa',
    badge: 'Private Residences',
    icon: <Home className="h-5 w-5 text-brand-gold-500" />,
    desc: 'Duplexes, triplex villas, and bungalow retrofits requiring minimal pit.',
  },
  {
    id: 'hospital',
    name: 'Hospital & Healthcare',
    badge: 'Bed & Stretcher Lift',
    icon: <HeartPulse className="h-5 w-5 text-brand-gold-500" />,
    desc: 'Hospitals, trauma care centers, and diagnostic multi-specialities.',
  },
  {
    id: 'goods',
    name: 'Industrial Goods & Cargo',
    badge: 'Warehouses & Factories',
    icon: <Package className="h-5 w-5 text-brand-gold-500" />,
    desc: 'Freight transport, heavy manufacturing, distribution and auto workshops.',
  },
];

export function HoistwayCalculator() {
  const [selectedCategory, setSelectedCategory] = useState<BuildingCategory>('passenger');
  const [selectedCapacityIndex, setSelectedCapacityIndex] = useState<number>(1); // Default ~6 persons or 408kg

  // Get active measurement data
  let activeMeasurements: Array<{
    capacityPersons?: number;
    capacityKg: number;
    liftWellWidth: number;
    liftWellDepth: number;
    cabinWidth: number;
    cabinDepth: number;
    entranceOpening: number | string;
  }> = [];

  if (selectedCategory === 'passenger') {
    activeMeasurements = PASSENGER_MEASUREMENTS;
  } else if (selectedCategory === 'home') {
    activeMeasurements = PASSENGER_MEASUREMENTS.slice(0, 3); // 4, 6, 8 persons
  } else if (selectedCategory === 'hospital') {
    activeMeasurements = HOSPITAL_MEASUREMENTS;
  } else {
    activeMeasurements = GOODS_MEASUREMENTS;
  }

  // Safe index guard
  const safeIndex = Math.min(selectedCapacityIndex, activeMeasurements.length - 1);
  const current = activeMeasurements[safeIndex] || activeMeasurements[0];

  // Pit and Overhead based on category
  const isHome = selectedCategory === 'home';
  const estimatedPit = isHome ? 'Zero Pit or 200 mm' : '1,350 mm - 1,500 mm';
  const estimatedOverhead = isHome ? '2,800 mm - 3,200 mm' : '4,200 mm - 4,250 mm';
  const recommendedDrive = isHome
    ? 'Hydraulic or Machine Room-Less (MRL) PMSM'
    : selectedCategory === 'goods'
      ? 'Heavy Duty Geared Traction or Hydraulic'
      : 'Montanari Gearless PMSM VVVF or Bharat Bijlee';

  const productName =
    selectedCategory === 'passenger'
      ? 'Passenger Lift'
      : selectedCategory === 'home'
        ? 'Home Lift'
        : selectedCategory === 'hospital'
          ? 'Hospital Lift'
          : 'Goods Lift';

  const mappedBuildingType =
    selectedCategory === 'hospital'
      ? 'Hospital'
      : selectedCategory === 'goods'
        ? 'Industrial'
        : selectedCategory === 'home'
          ? 'Residential'
          : 'Commercial';

  const capacityText = current.capacityPersons
    ? `${current.capacityPersons} Persons (${current.capacityKg} kg)`
    : `${current.capacityKg} kg`;

  const quoteParams = new URLSearchParams({
    product: productName,
    buildingType: mappedBuildingType,
    capacity: capacityText,
    shaft: `${current.liftWellWidth} x ${current.liftWellDepth} mm`,
    cabin: `${current.cabinWidth} x ${current.cabinDepth} mm`,
    pit: estimatedPit,
    overhead: estimatedOverhead,
    drive: recommendedDrive,
  });

  const quoteUrl = `/quote?${quoteParams.toString()}`;

  return (
    <div className="relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-6 shadow-xl sm:p-10 lg:p-12">
      {/* Background Architectural Grid Accent */}
      <div className="bg-architectural-grid-light pointer-events-none absolute inset-0 opacity-60" />

      <div className="relative z-10 space-y-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-gold-400/40 bg-brand-gold-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-gold-700">
            <Compass className="h-3.5 w-3.5 text-brand-gold-600" />
            <span>Interactive Planning Utility</span>
          </div>
          <h3 className="text-2xl font-extrabold tracking-tight text-brand-blue-950 sm:text-3xl lg:text-4xl">
            Elevator Specification & Hoistway Estimator
          </h3>
          <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
            Select your building application and capacity to compute standard civil hoistway shaft
            clearances, cabin volume, pit depth, and overhead dimensions derived from official
            engineering tables.
          </p>
        </div>

        {/* 1. Category Selector */}
        <div className="space-y-3">
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
            1. Select Building Category:
          </label>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => {
                    setSelectedCategory(cat.id);
                    setSelectedCapacityIndex(0);
                  }}
                  className={`flex flex-col rounded-2xl border p-4 text-left transition-all duration-200 ${
                    isSelected
                      ? 'border-brand-gold-500 bg-brand-blue-950 text-white shadow-md'
                      : 'border-slate-200 bg-slate-50/70 text-slate-800 hover:border-slate-300 hover:bg-white'
                  }`}
                >
                  <div className="flex w-full items-center justify-between">
                    <div
                      className={`rounded-xl p-2 ${
                        isSelected
                          ? 'bg-white/10 text-brand-gold-300'
                          : 'border border-slate-200 bg-white text-brand-blue-900'
                      }`}
                    >
                      {cat.icon}
                    </div>
                    <span
                      className={`rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                        isSelected
                          ? 'border border-brand-gold-400/30 bg-brand-gold-500/20 text-brand-gold-300'
                          : 'bg-slate-200 text-slate-600'
                      }`}
                    >
                      {cat.badge}
                    </span>
                  </div>
                  <h4 className="mt-3 text-sm font-bold">{cat.name}</h4>
                  <p
                    className={`mt-1 line-clamp-2 text-xs leading-relaxed ${
                      isSelected ? 'text-slate-300' : 'text-slate-500'
                    }`}
                  >
                    {cat.desc}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. Capacity Selector */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
              2. Select Passenger / Load Capacity:
            </label>
            <span className="text-xs font-semibold text-brand-gold-600">
              {current.capacityPersons
                ? `${current.capacityPersons} Persons • ${current.capacityKg} kg Rated Load`
                : `${current.capacityKg} kg Rated Payload`}
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {activeMeasurements.map((m, idx) => {
              const isSelected = safeIndex === idx;
              const label = m.capacityPersons
                ? `${m.capacityPersons} Persons (${m.capacityKg} kg)`
                : `${m.capacityKg} kg`;

              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSelectedCapacityIndex(idx)}
                  className={`rounded-xl px-4 py-2.5 text-xs font-bold transition-all ${
                    isSelected
                      ? 'scale-105 bg-brand-gold-500 text-brand-blue-950 shadow-gold-sm'
                      : 'border border-slate-200 bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>

        {/* 3. Output Blueprint & Technical Clearances Grid */}
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <div className="flex flex-col gap-6 border-b border-slate-200 pb-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                Recommended Solution
              </span>
              <h4 className="mt-0.5 text-xl font-bold text-brand-blue-950 sm:text-2xl">
                Lifestyle {productName} ({current.capacityKg} kg)
              </h4>
              <p className="mt-1 text-xs text-slate-600">
                Drive: <span className="font-semibold text-slate-800">{recommendedDrive}</span>
              </p>
            </div>

            <Link
              href={quoteUrl}
              className="shimmer-button inline-flex items-center justify-center gap-2 rounded-xl bg-brand-gold-500 px-6 py-3 text-sm font-bold text-brand-blue-950 shadow-gold-sm transition-all hover:bg-brand-gold-400 hover:shadow-gold-glow"
            >
              <span>Request Quote for this Dimension</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Metric Blueprint Cards */}
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            <div className="rounded-xl border border-slate-200/90 bg-white p-4 shadow-sm">
              <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Hoistway Width
              </span>
              <span className="mt-1 block font-mono text-lg font-bold text-brand-blue-950 sm:text-xl">
                {current.liftWellWidth} mm
              </span>
              <span className="text-[11px] text-slate-500">Shaft clear width</span>
            </div>

            <div className="rounded-xl border border-slate-200/90 bg-white p-4 shadow-sm">
              <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Hoistway Depth
              </span>
              <span className="mt-1 block font-mono text-lg font-bold text-brand-blue-950 sm:text-xl">
                {current.liftWellDepth} mm
              </span>
              <span className="text-[11px] text-slate-500">Shaft clear depth</span>
            </div>

            <div className="rounded-xl border border-slate-200/90 bg-white p-4 shadow-sm">
              <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Cabin Size (W x D)
              </span>
              <span className="mt-1 block font-mono text-base font-bold text-brand-blue-950 sm:text-lg">
                {current.cabinWidth} × {current.cabinDepth}
              </span>
              <span className="text-[11px] text-slate-500">Internal car mm</span>
            </div>

            <div className="rounded-xl border border-slate-200/90 bg-white p-4 shadow-sm">
              <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Pit Depth
              </span>
              <span className="mt-1 block font-mono text-sm font-bold text-brand-blue-950 sm:text-base">
                {estimatedPit}
              </span>
              <span className="text-[11px] text-slate-500">Bottom clearance</span>
            </div>

            <div className="col-span-2 rounded-xl border border-slate-200/90 bg-white p-4 shadow-sm sm:col-span-1">
              <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Overhead Clearance
              </span>
              <span className="mt-1 block font-mono text-sm font-bold text-brand-blue-950 sm:text-base">
                {estimatedOverhead}
              </span>
              <span className="text-[11px] text-slate-500">Top floor clear</span>
            </div>
          </div>

          {/* Quick Notice & Verification */}
          <div className="mt-5 space-y-2 border-t border-slate-200/80 pt-4 text-xs text-slate-500">
            <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
                <span>Derived from Standard Hoistway Engineering Dimensions (Brochure Page 8)</span>
              </div>

              <Link
                href="/products#brochure-dimensions"
                className="inline-flex items-center gap-1 font-semibold text-brand-blue-900 hover:text-brand-gold-600"
              >
                <span>View Full Dimensional Tables (Page 8)</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
            <p className="text-[11px] italic text-slate-500">
              * Note: Values shown are preliminary planning estimates. Final civil shaft clearances,
              pit depth, and overhead dimensions must be confirmed by qualified engineering
              personnel following site structural survey.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
