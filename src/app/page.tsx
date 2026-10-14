import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  ShieldCheck,
  Award,
  Clock,
  CheckCircle2,
  FileText,
  PhoneCall,
  Sparkles,
  Layers,
  Activity,
} from 'lucide-react';
import { COMPANY } from '@/config/company';
import { MAIN_ELEVATOR_PRODUCTS } from '@/data/products';
import { ELEVATOR_SERVICES } from '@/data/services';
import { ProductCard } from '@/components/products/ProductCard';
import { ServiceCard } from '@/components/services/ServiceCard';
import { SectionHeader } from '@/components/shared/SectionHeader';

export default function HomePage() {
  const featuredProducts = MAIN_ELEVATOR_PRODUCTS.filter((p) => p.featured);

  const trustPillars = [
    {
      title: 'Customized Design & Requirements',
      desc: 'We engineer lifts tailored specifically to your building blueprint, structural hoistway, and passenger capacity demands.',
      icon: <Layers className="h-6 w-6 text-brand-gold-500" />,
    },
    {
      title: 'Inspection at Every Production Stage',
      desc: 'Meticulous multi-tier quality checks from initial fabrication and design through to final on-site erection and commissioning.',
      icon: <Award className="h-6 w-6 text-brand-gold-500" />,
    },
    {
      title: 'Sourcing from Reputed Brands',
      desc: 'Critical drive components, motors, and wire ropes sourced exclusively from recognized manufacturers such as Montanari and Bharat Bijlee.',
      icon: <ShieldCheck className="h-6 w-6 text-brand-gold-500" />,
    },
    {
      title: 'Elevator Safety & Reliability',
      desc: 'Equipped with Automatic Rescue Devices (ARD), safety descending drives, and micro-leveling for utmost passenger peace of mind.',
      icon: <Activity className="h-6 w-6 text-brand-gold-500" />,
    },
    {
      title: 'Customer Feedback Integration',
      desc: 'Active feedback loops ensuring continuous responsiveness to building owners, facility teams, and passenger comfort.',
      icon: <Sparkles className="h-6 w-6 text-brand-gold-500" />,
    },
    {
      title: 'On-Time Project Delivery',
      desc: 'Strict adherence to milestone-driven erection schedules, ensuring elevator handover aligns with your civil timeline.',
      icon: <Clock className="h-6 w-6 text-brand-gold-500" />,
    },
  ];

  return (
    <div className="flex flex-col gap-20 pb-20 sm:gap-28">
      {/* 1. HERO SECTION */}
      <section className="relative flex min-h-[85vh] items-center overflow-hidden bg-brand-blue-950 text-white sm:min-h-[90vh]">
        {/* Background Hero Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/branding/hero-elevator.jpg"
            alt="Lifestyle Elevators Architecture"
            fill
            priority
            className="animate-subtle-zoom scale-105 object-cover object-center opacity-40 mix-blend-luminosity"
            sizes="100vw"
          />
          {/* Gradients */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-blue-950 via-brand-blue-950/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-950 via-transparent to-brand-blue-950/40" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="max-w-3xl space-y-8">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-gold-400/40 bg-brand-gold-500/20 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-brand-gold-300 sm:text-sm">
              <Sparkles className="h-4 w-4 text-brand-gold-400" />
              <span>Bangalore&apos;s Trusted Vertical Mobility Partner</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-balance text-3xl font-extrabold leading-[1.15] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Precision Vertical Movement <br />
              <span className="text-gold-gradient font-serif italic">Engineered for Life</span>
            </h1>

            {/* Approved Company Intro from Brochure */}
            <p className="text-balance text-base leading-relaxed text-slate-300 sm:text-xl">
              We provide comprehensive vertical and trans movement solutions combining perfect raw
              materials and intelligently researched smart-advanced technology. Delivering the
              highest safety standards, total reliability, and premium comfort across Bangalore.
            </p>

            {/* Primary Action Buttons (PRD §5.1) */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/quote"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-gold-500 px-7 py-4 text-sm font-bold text-brand-blue-950 shadow-lg transition-all hover:scale-[1.02] hover:bg-brand-gold-400 hover:shadow-xl active:scale-[0.98] sm:text-base"
              >
                <span>Get a Quotation</span>
                <ArrowRight className="h-5 w-5" />
              </Link>

              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20 sm:text-base"
              >
                <span>View Elevator Models</span>
              </Link>

              <a
                href={COMPANY.brochure.publicPath}
                download={COMPANY.brochure.filename}
                className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-4 text-sm font-medium text-brand-gold-300 transition-colors hover:text-white"
              >
                <FileText className="h-4 w-4 text-brand-gold-400" />
                <span>Brochure (PDF)</span>
              </a>
            </div>

            {/* Quick Contact Micro-bar */}
            <div className="flex flex-wrap items-center gap-6 border-t border-white/10 pt-6 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-brand-gold-400" />
                <span>ARD Emergency Battery Backup</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-brand-gold-400" />
                <span>Micro-Leveling Alignment</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-brand-gold-400" />
                <span>Emergency Fireman Mode</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. QUALITY PILLARS & TRUST SECTION (PRD §5.1 & §5.2) */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Engineering Excellence"
          title="Our Commitment to Safety, Reliability & Quality"
          subtitle="Every elevator we deliver is designed around human safety, robust raw materials, and precision testing."
        />

        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {trustPillars.map((pillar, idx) => (
            <div
              key={idx}
              className="group flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-8 shadow-sm transition-all hover:shadow-md"
            >
              <div className="space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-brand-blue-100 bg-brand-blue-50 transition-transform group-hover:scale-110">
                  {pillar.icon}
                </div>
                <h3 className="text-lg font-bold text-brand-blue-950 transition-colors group-hover:text-brand-gold-600">
                  {pillar.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">{pillar.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. FEATURED ELEVATOR PRODUCTS */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-gold-600">
              Product Portfolio
            </span>
            <h2 className="mt-1 text-2xl font-bold text-brand-blue-950 sm:text-3xl lg:text-4xl">
              Engineered Elevators for Every Architectural Need
            </h2>
          </div>
          <Link
            href="/products"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-brand-blue-900 transition-colors hover:text-brand-gold-600"
          >
            <span>Explore All 6 Elevator Categories & Components</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 4. BROCHURE SPOTLIGHT BANNER */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-brand-blue-950 via-brand-blue-900 to-brand-blue-950 p-8 text-white shadow-2xl sm:p-12">
          <div className="relative z-10 max-w-2xl space-y-6">
            <span className="inline-block rounded-full border border-brand-gold-400/30 bg-brand-gold-500/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-gold-300">
              Official Catalogue Asset
            </span>
            <h2 className="text-2xl font-extrabold tracking-tight sm:text-4xl">
              Download the Lifestyle Elevators 8-Page Engineering Brochure
            </h2>
            <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
              Contains complete hoistway measurement tables for passenger, hospital, and goods
              lifts, together with technical ratings for Montanari and Bharat Bijlee traction
              machines.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={COMPANY.brochure.publicPath}
                download={COMPANY.brochure.filename}
                className="inline-flex items-center gap-2 rounded-xl bg-brand-gold-500 px-6 py-3.5 text-sm font-bold text-brand-blue-950 shadow transition-all hover:bg-brand-gold-400"
              >
                <FileText className="h-4 w-4" />
                <span>Download Brochure (PDF)</span>
              </a>
              <Link
                href="/brochure"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/20"
              >
                <span>Preview & Share Online</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FEATURED SERVICES SECTION */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Turnkey Services"
          title="Manufacturing, Installation, Repair & Annual Maintenance Contracts"
          subtitle="Comprehensive elevator engineering lifecycle support backed by experienced vertical mobility technicians."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {ELEVATOR_SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      {/* 6. CALL TO ACTION SECTION */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 rounded-3xl border border-slate-200/90 bg-slate-100 p-8 text-center sm:p-14 md:flex-row md:text-left">
          <div className="max-w-xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-gold-600">
              Need Expert Advice?
            </span>
            <h2 className="text-2xl font-bold text-brand-blue-950 sm:text-3xl">
              Speak with a Lifestyle Elevators Specialist
            </h2>
            <p className="text-sm leading-relaxed text-slate-600">
              Whether you are designing a new apartment hoistway or upgrading an existing lift in
              Bangalore, our team is ready to discuss your building requirements.
            </p>
          </div>
          <div className="flex shrink-0 flex-col items-center gap-3 sm:flex-row">
            <Link
              href="/quote"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-gold-500 px-7 py-3.5 text-sm font-bold text-brand-blue-950 shadow transition-all hover:bg-brand-gold-400 sm:w-auto"
            >
              <span>Request Quotation</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-brand-blue-900 shadow-sm transition-all hover:bg-slate-50 sm:w-auto"
            >
              <PhoneCall className="h-4 w-4 text-brand-gold-600" />
              <span>Contact Bangalore Office</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
