import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ELEVATOR_SERVICES } from '@/data/services';
import { ServiceCard } from '@/components/services/ServiceCard';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { ArrowRight, ShieldCheck, CheckCircle2, PhoneCall } from 'lucide-react';
import { COMPANY } from '@/config/company';

export const metadata: Metadata = {
  title: 'Elevator Services: Installation, Repairs & AMC in Bangalore',
  description:
    'Lifestyle Elevators comprehensive services: Elevator manufacturing, turnkey site installation, dynamic repair & maintenance support, and Annual Maintenance Contracts (AMC).',
};

export default function ServicesPage() {
  const amcBenefits = [
    'Scheduled routine lubrication of guide rails, car rollers, and traveling assemblies',
    'Comprehensive multi-point electronic safety and interlock mechanism testing',
    'Traction motor brake testing, tension adjustment, and control board calibration',
    'Trained technicians deploying dynamic troubleshooting equipment',
    'Regular post-maintenance check-up analysis reports delivered to building managers',
    'Contracts available for all types of passenger, freight, and residential lifts',
  ];

  return (
    <div className="flex flex-col gap-20 pb-24 sm:gap-24">
      {/* 1. Header Hero */}
      <section className="border-b border-brand-blue-900 bg-brand-blue-950 py-16 text-white sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <span className="mb-3 inline-block rounded-full border border-brand-gold-400/30 bg-brand-gold-500/20 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-brand-gold-300">
            End-to-End Vertical Mobility Care
          </span>
          <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
            Our Elevator Services
          </h1>
          <p className="mt-4 text-balance text-base leading-relaxed text-slate-300 sm:text-lg">
            From precision manufacturing and architectural site installation to rapid repair support
            and preventive Annual Maintenance Contracts across Bangalore.
          </p>
        </div>
      </section>

      {/* 2. All 4 Services Presentation */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Core Services"
          title="Lifecycle Engineering & Elevator Care"
          subtitle="Explore the four primary services documented in the Lifestyle Elevators company brochure."
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {ELEVATOR_SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      {/* 3. AMC In-Depth Spotlight (Brochure Page 3) */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-12 rounded-3xl border border-slate-200/90 bg-white p-8 shadow-sm sm:p-12 lg:flex-row">
          <div className="max-w-2xl space-y-6">
            <span className="inline-block rounded-full border border-brand-gold-200 bg-brand-gold-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-gold-700">
              Preventive Maintenance
            </span>
            <h2 className="text-2xl font-bold text-brand-blue-950 sm:text-3xl">
              Annual Maintenance Contracts (AMC) for All Lift Types
            </h2>
            <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
              We are one of the reliable and well-known service providers for elevator maintenance
              in Bangalore. As stated in our company brochure, we offer tailored Annual Maintenance
              Contracts for all types of lifts to ensure smooth rides, zero unexpected downtime, and
              absolute passenger safety.
            </p>

            <ul className="space-y-3 pt-2">
              {amcBenefits.map((benefit, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-xs text-slate-700 sm:text-sm"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold-500" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/quote?service=Annual%20Maintenance%20Contract%20(AMC)"
                className="inline-flex items-center gap-2 rounded-xl bg-brand-gold-500 px-6 py-3.5 text-sm font-bold text-brand-blue-950 shadow-sm transition-all hover:bg-brand-gold-400"
              >
                <span>Inquire About AMC Pricing & Packages</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* AMC Contact Card */}
          <div className="w-full shrink-0 space-y-6 rounded-2xl bg-brand-blue-950 p-6 text-white shadow-lg sm:p-8 lg:w-96">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-brand-gold-400/30 bg-brand-gold-500/20 text-brand-gold-400">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Emergency Breakdown Support</h3>
              <p className="mt-1 text-xs leading-relaxed text-slate-300">
                Need urgent service or assistance for an existing elevator? Reach out to our
                technical support desk directly.
              </p>
            </div>
            <div className="space-y-3 border-t border-brand-blue-900 pt-2 text-xs">
              {COMPANY.phones.map((phone) => (
                <a
                  key={phone.raw}
                  href={phone.telUri}
                  className="flex items-center gap-2 text-slate-300 transition-colors hover:text-brand-gold-400"
                >
                  <PhoneCall className="h-3.5 w-3.5 shrink-0 text-brand-gold-400" />
                  <span className="font-mono text-sm">{phone.display}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Installation Workflow & Quality Commitment */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-slate-100 p-8 sm:p-12">
          <SectionHeader
            badge="Standard Engineering Workflow"
            title="How We Execute Elevator Installations"
            subtitle="Installation works are carried out after discussions on the type of lifts required to meet building demands, using the latest technology equipment."
          />

          <div className="grid grid-cols-1 gap-6 pt-4 md:grid-cols-3">
            <div className="space-y-3 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-blue-900 text-xs font-bold text-white">
                1
              </span>
              <h4 className="text-base font-bold text-brand-blue-950">
                Architectural Consultation
              </h4>
              <p className="text-xs leading-relaxed text-slate-600">
                Detailed site discussions regarding passenger traffic volume, shaft clearances,
                civil pit depths, and required travel speed to select the ideal lift model.
              </p>
            </div>

            <div className="space-y-3 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-blue-900 text-xs font-bold text-white">
                2
              </span>
              <h4 className="text-base font-bold text-brand-blue-950">
                Site Erection with Modern Equipment
              </h4>
              <p className="text-xs leading-relaxed text-slate-600">
                Installation works are carried out using the latest technology equipment to meet the
                demands of the building and ensure reliable, smooth operation.
              </p>
            </div>

            <div className="space-y-3 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-blue-900 text-xs font-bold text-white">
                3
              </span>
              <h4 className="text-base font-bold text-brand-blue-950">
                Analysis Report & Handover
              </h4>
              <p className="text-xs leading-relaxed text-slate-600">
                Multi-point safety commissioning of ARD, emergency brakes, micro-leveling, and fire
                services, accompanied by our verified post check-up analysis reports.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
