import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Factory, Wrench, Hammer, ShieldCheck } from 'lucide-react';
import type { ElevatorService } from '@/types/service';

interface ServiceCardProps {
  service: ElevatorService;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const quoteHref = `/quote?service=${encodeURIComponent(service.name)}`;

  const renderIcon = (name: string) => {
    switch (name) {
      case 'Factory':
        return <Factory className="h-5 w-5 text-brand-gold-400" />;
      case 'Wrench':
        return <Wrench className="h-5 w-5 text-brand-gold-400" />;
      case 'Hammer':
        return <Hammer className="h-5 w-5 text-brand-gold-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="h-5 w-5 text-brand-gold-400" />;
      default:
        return <Wrench className="h-5 w-5 text-brand-gold-400" />;
    }
  };

  return (
    <article
      id={service.slug}
      className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition-all duration-300 hover:shadow-xl"
    >
      {/* Service Image Header */}
      <div className="relative h-56 w-full overflow-hidden bg-brand-blue-950">
        <Image
          src={service.image}
          alt={`${service.name} - Lifestyle Elevators`}
          fill
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-950/90 via-brand-blue-950/40 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3">
          <div className="rounded-xl border border-brand-gold-400/30 bg-brand-blue-900/90 p-2.5 backdrop-blur-sm">
            {renderIcon(service.iconName)}
          </div>
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-brand-gold-400">
              Specialized Service
            </span>
            <h3 className="text-lg font-bold text-white transition-colors group-hover:text-brand-gold-300">
              {service.name}
            </h3>
          </div>
        </div>
      </div>

      {/* Service Body */}
      <div className="flex flex-1 flex-col justify-between space-y-6 p-6">
        <div className="space-y-4">
          <p className="text-sm font-medium leading-snug text-brand-blue-900">
            {service.shortDescription}
          </p>
          <p className="text-xs leading-relaxed text-slate-600">{service.fullDescription}</p>

          <div className="pt-2">
            <h4 className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-900">
              Service Deliverables:
            </h4>
            <ul className="space-y-1.5">
              {service.keyHighlights.slice(0, 4).map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                  <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-gold-500" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Action Button */}
        <div className="border-t border-slate-100 pt-4">
          <Link
            href={quoteHref}
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand-blue-900 px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition-all hover:bg-brand-gold-500 hover:text-brand-blue-950 sm:text-sm"
          >
            <span>{service.callToAction}</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}
