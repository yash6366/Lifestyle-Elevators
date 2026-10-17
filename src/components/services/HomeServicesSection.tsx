'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { ELEVATOR_SERVICES } from '@/data/services';
import type { ElevatorService } from '@/types/service';
import { ServiceCard } from '@/components/services/ServiceCard';
import { ServiceDetailModal } from '@/components/services/ServiceDetailModal';

export function HomeServicesSection() {
  const [selectedService, setSelectedService] = useState<ElevatorService | null>(null);

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="flex flex-col items-center justify-between gap-4 pb-2 md:flex-row md:items-end">
        <div>
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-gold-600">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Turnkey Engineering Care</span>
          </span>
          <h2 className="mt-1 text-2xl font-extrabold text-brand-blue-950 sm:text-3xl lg:text-4xl">
            Comprehensive Elevator Services
          </h2>
          <p className="mt-2 text-sm text-slate-600 sm:text-base">
            Click any service below to view detailed engineering deliverables, scopes, and
            inspection standards.
          </p>
        </div>

        <Link
          href="/services"
          className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-brand-blue-900 transition-colors hover:text-brand-gold-600"
        >
          <span>Explore All Services & AMC</span>
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      {/* Minimal 4-Column Service Grid */}
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {ELEVATOR_SERVICES.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            variant="minimal"
            onSelect={(s) => setSelectedService(s)}
          />
        ))}
      </div>

      {/* Service Detail Modal (Opens when clicked) */}
      <ServiceDetailModal
        service={selectedService}
        allServices={ELEVATOR_SERVICES}
        isOpen={Boolean(selectedService)}
        onClose={() => setSelectedService(null)}
        onNavigateService={(s) => setSelectedService(s)}
      />
    </section>
  );
}
