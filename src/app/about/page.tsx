import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ShieldCheck,
  Zap,
  Volume2,
  Flame,
  BatteryCharging,
  Maximize2,
  Sliders,
  ArrowRight,
  FileText,
  PhoneCall,
  CheckCircle2,
} from 'lucide-react';
import { COMPANY } from '@/config/company';
import { SectionHeader } from '@/components/shared/SectionHeader';

export const metadata: Metadata = {
  title: 'About Lifestyle Elevators',
  description:
    'Learn about Lifestyle Elevators Bangalore: our engineering approach, multi-stage inspection process, raw material sourcing, and elevator safety features.',
};

export default function AboutPage() {
  const safetyFeatures = [
    {
      title: 'Automatic Rescue Device (ARD)',
      desc: 'In case of power failure, when the building has no emergency power supply, the elevator is sent to the nearest floor by DC power of battery to prevent passengers being trapped in the car.',
      icon: <BatteryCharging className="h-6 w-6 text-brand-gold-500" />,
    },
    {
      title: 'Safety Drive Mechanism',
      desc: 'When a car stops between floors due to mechanical malfunction, the safety drive engages and smoothly descends the car to the nearest floor below.',
      icon: <ShieldCheck className="h-6 w-6 text-brand-gold-500" />,
    },
    {
      title: 'Automatic Door Open & Close Adjustment',
      desc: 'Door open and close times are automatically adjusted depending on whether the call is a hall call or a car call to increase operating efficiency.',
      icon: <Sliders className="h-6 w-6 text-brand-gold-500" />,
    },
    {
      title: 'Micro Leveling Precision',
      desc: 'An automatic two-way leveling device is provided to maintain the elevator car flush with the landing sill, regardless of elevator passenger load or travel direction.',
      icon: <Maximize2 className="h-6 w-6 text-brand-gold-500" />,
    },
    {
      title: 'Automatic Car Light & Fan Turn-Off',
      desc: 'Car illumination and ventilation fan automatically deactivate when there is no hall or car call, conserving building electrical energy.',
      icon: <Zap className="h-6 w-6 text-brand-gold-500" />,
    },
    {
      title: 'Emergency Fire Service',
      desc: 'Elevators automatically return to the primary lobby floor when fire detection devices are activated, allowing passengers to exit safely before parking for authorized fireman key operation.',
      icon: <Flame className="h-6 w-6 text-brand-gold-500" />,
    },
    {
      title: 'Voice Announcement System',
      desc: 'Provides riding passengers with clear audio information regarding car operation, direction of travel, and arrival landing floor.',
      icon: <Volume2 className="h-6 w-6 text-brand-gold-500" />,
    },
  ];

  return (
    <div className="flex flex-col gap-20 pb-20 sm:gap-24">
      {/* 1. Header Hero */}
      <section className="border-b border-brand-blue-900 bg-brand-blue-950 py-16 text-white sm:py-24">
        <div className="mx-auto max-w-3xl max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <span className="mb-3 inline-block rounded-full border border-brand-gold-400/30 bg-brand-gold-500/20 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-brand-gold-300">
            Company Overview
          </span>
          <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
            About Lifestyle Elevators
          </h1>
          <p className="mt-4 text-balance text-base leading-relaxed text-slate-300 sm:text-lg">
            Providing comprehensive vertical and trans movement solutions combining perfect raw
            materials and intelligently researched smart-advanced technology.
          </p>
        </div>
      </section>

      {/* 2. Core Company Introduction (Direct from Brochure Page 2 & 3) */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-gold-600">
              Our Engineering Philosophy
            </span>
            <h2 className="text-2xl font-bold leading-snug text-brand-blue-950 sm:text-3xl">
              Smart-Advanced Technology Meets Reliable Raw Materials
            </h2>
            <div className="space-y-4 text-sm leading-relaxed text-slate-600 sm:text-base">
              <p>
                At <strong>{COMPANY.name}</strong>, we engineer vertical mobility systems that
                integrate structural safety, whisper-quiet operation, and architectural refinement.
                Whether for private residential villas or multi-storey commercial complexes, our
                lifts are customized to meet the distinctive architectural demands of modern
                buildings.
              </p>
              <p>
                We understand the importance of product durability. Every elevator system we supply
                is built using raw materials sourced from reputed manufacturers and accompanied by
                systematic analysis reports for post check-up verification.
              </p>
              <p>
                Our technical teams collaborate directly with building architects, developers, and
                facility managers from early planning stages to ensure hoistway alignment,
                structural plumbness, and on-time site handover.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 rounded-xl bg-brand-gold-500 px-6 py-3 text-sm font-bold text-brand-blue-950 shadow-sm transition-colors hover:bg-brand-gold-400"
              >
                <span>Request Technical Consultation</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={COMPANY.brochure.publicPath}
                download={COMPANY.brochure.filename}
                className="inline-flex items-center gap-2 rounded-xl bg-slate-100 px-5 py-3 text-sm font-semibold text-slate-800 transition-colors hover:bg-slate-200"
              >
                <FileText className="h-4 w-4 text-brand-gold-600" />
                <span>Brochure Asset</span>
              </a>
            </div>
          </div>

          {/* Quality Principles List */}
          <div className="space-y-6 rounded-3xl border border-slate-200/90 bg-white p-8 shadow-sm sm:p-10">
            <h3 className="border-b border-slate-100 pb-3 text-lg font-bold text-brand-blue-950">
              Core Principles from Our Company Charter
            </h3>
            <ul className="space-y-4">
              {[
                {
                  title: 'Meet Customized Design and Requirement',
                  desc: 'Custom dimensions and door arrangements configured to your architectural layout.',
                },
                {
                  title: 'Inspection at Every Production Stage',
                  desc: 'Thorough quality control from initial fabrication through site erection.',
                },
                {
                  title: 'Sourcing Raw Material from Reputed Brands',
                  desc: 'Motors, guide rails, controllers, and ropes sourced from verified industry brands.',
                },
                {
                  title: 'Elevators Safety as Foremost Priority',
                  desc: 'Integrated ARD, micro-leveling, and emergency interlocks on all passenger cars.',
                },
                {
                  title: 'Customer Feedback Integration',
                  desc: 'Responsive service support adapting directly to customer site requirements.',
                },
                {
                  title: 'On-Time Delivery Commitments',
                  desc: 'Dedicated project scheduling to align lift commissioning with your building launch.',
                },
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-gold-500" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                    <p className="mt-0.5 text-xs text-slate-600">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 3. Brochure Safety & Operating Features (Page 2) */}
      <section className="border-y border-slate-200 bg-slate-100/70 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Brochure Technical Specifications"
            title="Integrated Safety & Operating Technologies"
            subtitle="The following automated safety mechanisms are documented in the Lifestyle Elevators official technical catalogue."
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {safetyFeatures.map((feature, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm transition-colors hover:border-brand-gold-400"
              >
                <div className="space-y-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-brand-gold-200 bg-brand-gold-50">
                    {feature.icon}
                  </div>
                  <h3 className="text-base font-bold text-brand-blue-950">{feature.title}</h3>
                  <p className="text-xs leading-relaxed text-slate-600 sm:text-sm">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Sourcing Statement & Brand Notes */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-brand-blue-950 p-8 text-white sm:p-12">
          <div className="max-w-2xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-gold-400">
              Verified Component Partners
            </span>
            <h2 className="text-2xl font-bold sm:text-3xl">
              Engineering with Reputed Industry Components
            </h2>
            <p className="text-sm leading-relaxed text-slate-300">
              We integrate world-class components including{' '}
              <strong>Montanari Geared & Gearless Motors</strong>,{' '}
              <strong>Bharat Bijlee Gearless Drives</strong>,{' '}
              <strong>Usha Martin 13 mm Wire Ropes</strong>, and microcomputer-controlled integrated
              3-phase control boards to deliver uninterrupted elevator performance.
            </p>
            <div className="pt-2">
              <Link
                href="/products#brochure-components"
                className="inline-flex items-center gap-2 text-xs font-bold text-brand-gold-400 transition-colors hover:text-brand-gold-300"
              >
                <span>View Component Specifications & Ratings →</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Contact CTA */}
      <section className="mx-auto max-w-7xl max-w-xl space-y-4 px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-brand-blue-950">
          Have an Upcoming Project in Bangalore?
        </h2>
        <p className="text-sm text-slate-600">
          Our engineers are located at Ittamadu, Bangalore. Contact us to schedule an on-site
          measurement or hoistway architectural assessment.
        </p>
        <div className="flex justify-center gap-3 pt-2">
          <Link
            href="/quote"
            className="inline-flex items-center gap-2 rounded-xl bg-brand-gold-500 px-6 py-3 text-sm font-bold text-brand-blue-950 shadow transition-all hover:bg-brand-gold-400"
          >
            <span>Request a Quote</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-brand-blue-900 transition-all hover:bg-slate-50"
          >
            <PhoneCall className="h-4 w-4 text-brand-gold-600" />
            <span>Contact Office</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
