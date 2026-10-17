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
  Compass,
  Building,
  Wrench,
} from 'lucide-react';
import { COMPANY } from '@/config/company';
import { MAIN_ELEVATOR_PRODUCTS } from '@/data/products';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { HomeServicesSection } from '@/components/services/HomeServicesSection';
import { HomeProductsSection } from '@/components/products/HomeProductsSection';
import { HoistwayCalculator } from '@/components/calculator/HoistwayCalculator';

export default function HomePage() {
  const featuredProducts = MAIN_ELEVATOR_PRODUCTS.filter((p) => p.featured);

  const trustPillars = [
    {
      title: 'Customized Design & Requirements',
      desc: 'We engineer lifts tailored specifically to your building blueprint, structural hoistway, and passenger capacity demands.',
      icon: <Layers className="h-6 w-6 text-brand-gold-500" />,
      highlight: 'Tailored Hoistway Sizing',
    },
    {
      title: 'Inspection at Every Production Stage',
      desc: 'Meticulous multi-tier quality checks from initial fabrication and design through to final on-site erection and commissioning.',
      icon: <Award className="h-6 w-6 text-brand-gold-500" />,
      highlight: 'Rigorous Multi-Tier Audit',
    },
    {
      title: 'Sourcing from Reputed Brands',
      desc: 'Critical drive components, motors, and wire ropes sourced exclusively from recognized manufacturers such as Montanari and Bharat Bijlee.',
      icon: <ShieldCheck className="h-6 w-6 text-brand-gold-500" />,
      highlight: 'Montanari & Bharat Bijlee',
    },
    {
      title: 'Elevator Safety & Reliability',
      desc: 'Equipped with Automatic Rescue Devices (ARD), safety descending drives, and micro-leveling for utmost passenger peace of mind.',
      icon: <Activity className="h-6 w-6 text-brand-gold-500" />,
      highlight: 'ARD & Micro-Leveling',
    },
    {
      title: 'Customer Feedback Integration',
      desc: 'Active feedback loops ensuring continuous responsiveness to building owners, facility teams, and passenger comfort.',
      icon: <Sparkles className="h-6 w-6 text-brand-gold-500" />,
      highlight: 'White-Glove Support',
    },
    {
      title: 'On-Time Project Delivery',
      desc: 'Strict adherence to milestone-driven erection schedules, ensuring elevator handover aligns with your civil timeline.',
      icon: <Clock className="h-6 w-6 text-brand-gold-500" />,
      highlight: 'Civil Milestone Alignment',
    },
  ];

  const turnkeyProcess = [
    {
      step: '01',
      title: 'Consultation & Hoistway Feasibility',
      desc: 'Our Bangalore civil engineering team inspects your architectural blueprint, verifies pit depth, travel height, and overhead clearances.',
      icon: <Compass className="h-5 w-5 text-brand-gold-400" />,
    },
    {
      step: '02',
      title: 'Precision Sourcing & Fabrication',
      desc: 'Cabin walls, structural sling, and counterweights are fabricated with high-grade steel, coupled with Montanari PMSM gearless machines.',
      icon: <Building className="h-5 w-5 text-brand-gold-400" />,
    },
    {
      step: '03',
      title: 'Professional Erection & Commissioning',
      desc: 'Laser-aligned guide rails, plumb-line hoistway erection, ARD testing, and multi-point safety limit switch calibration.',
      icon: <Wrench className="h-5 w-5 text-brand-gold-400" />,
    },
    {
      step: '04',
      title: 'Handover & Comprehensive AMC',
      desc: 'Official handover accompanied by verified post check-up analysis reports and structured preventive maintenance support.',
      icon: <ShieldCheck className="h-5 w-5 text-brand-gold-400" />,
    },
  ];

  const applicationShowcase = [
    {
      category: 'Residential Apartments',
      title: 'Multi-Storey Residential Complexes',
      specs: 'Passenger & MRL Gearless Traction • 4 to 13 Persons (272 to 884 kg)',
      desc: 'Engineered for smooth high-frequency tenant traffic with whisper-quiet gearless PMSM drives, micro-leveling door alignment, and battery-backed ARD auto descent.',
      badge: 'High-Density Residential',
      productName: 'Passenger Lift',
    },
    {
      category: 'Private Luxury Residences',
      title: 'Duplex Villas & Bungalow Retrofits',
      specs: 'Hydraulic & MRL Compact Lifts • Minimal Pit & Overhead Requirements',
      desc: 'Designed for bespoke luxury homes requiring minimal civil excavation. Integrates seamlessly into internal stairwells or external glass hoistways with single-phase or three-phase power.',
      badge: 'Private Residences',
      productName: 'Home Lift',
    },
    {
      category: 'Healthcare & Clinical',
      title: 'Hospitals & Medical Centers',
      specs: 'Stretcher & Bed Lifts • 15 to 26 Persons (1,020 to 1,768 kg)',
      desc: 'Deep cabin dimensions designed for wheeled hospital stretchers, medical attendants, and life-support equipment with gentle acceleration and emergency fireman priority control.',
      badge: 'Healthcare Facilities',
      productName: 'Hospital Lift',
    },
    {
      category: 'Industrial & Warehousing',
      title: 'Goods Freight & Heavy Cargo',
      specs: 'Heavy-Duty Cargo Elevators • Up to 5,000 kg Payload',
      desc: 'Robust structural slings, reinforced steel flooring, and collapsible or vertical bi-parting doors built for distribution centers, manufacturing units, and workshops.',
      badge: 'Industrial Logistics',
      productName: 'Goods Lift',
    },
  ];

  return (
    <div className="flex flex-col gap-20 pb-24 sm:gap-28">
      {/* 1. HERO SECTION */}
      <section className="relative flex min-h-[85vh] items-center overflow-hidden bg-brand-blue-950 text-white sm:min-h-[92vh]">
        {/* Architectural Grid & Ambient Gradient Backdrop */}
        <div className="bg-architectural-grid pointer-events-none absolute inset-0 opacity-40" />

        {/* Background Hero Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/branding/hero-elevator.jpg"
            alt="Lifestyle Elevators Architecture"
            fill
            priority
            className="animate-subtle-zoom scale-105 object-cover object-center opacity-35 mix-blend-luminosity"
            sizes="100vw"
          />
          {/* Subtle Ambient Vignettes */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-blue-950 via-brand-blue-950/85 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-950 via-transparent to-brand-blue-950/50" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="max-w-3xl space-y-8">
            {/* Enterprise Eyebrow */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-brand-gold-400/40 bg-brand-gold-500/15 px-4 py-1.5 text-xs font-semibold tracking-wide text-brand-gold-300 backdrop-blur-md sm:text-sm">
              <Sparkles className="h-4 w-4 text-brand-gold-400" />
              <span>
                Bangalore Vertical Mobility Solutions • Quality Raw Materials & Precision
                Engineering
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-balance text-3xl font-extrabold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Precision Vertical Movement <br />
              <span className="text-gold-gradient font-serif italic">Engineered for Life</span>
            </h1>

            {/* Approved Company Intro from Brochure */}
            <p className="text-balance text-base leading-relaxed text-slate-300 sm:text-lg sm:leading-relaxed">
              We provide comprehensive vertical and trans movement solutions combining perfect raw
              materials and intelligently researched smart-advanced technology. Delivering the
              highest safety standards, total reliability, and premium comfort across Bangalore.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/quote"
                className="shimmer-button inline-flex items-center justify-center gap-2.5 rounded-xl bg-brand-gold-500 px-7 py-4 text-sm font-bold text-brand-blue-950 shadow-gold-sm transition-all hover:scale-[1.02] hover:bg-brand-gold-400 hover:shadow-gold-glow active:scale-[0.98] sm:text-base"
              >
                <span>Get a Quotation</span>
                <ArrowRight className="h-5 w-5" />
              </Link>

              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-4 text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-white/20 sm:text-base"
              >
                <span>View Elevator Models</span>
              </Link>

              <a
                href={COMPANY.brochure.publicPath}
                download={COMPANY.brochure.filename}
                className="group inline-flex items-center justify-center gap-2 rounded-xl px-5 py-4 text-sm font-medium text-brand-gold-300 transition-colors hover:text-white"
              >
                <FileText className="h-4 w-4 text-brand-gold-400 transition-transform group-hover:-translate-y-0.5" />
                <span>Brochure (PDF)</span>
              </a>
            </div>

            {/* Key Engineering Pillars Metric Counters */}
            <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-8 sm:grid-cols-4">
              <div className="space-y-1">
                <span className="font-mono text-2xl font-extrabold text-white sm:text-3xl">6</span>
                <p className="text-xs text-slate-400">Core Elevator Lines</p>
              </div>
              <div className="space-y-1">
                <span className="font-mono text-2xl font-extrabold text-brand-gold-400 sm:text-3xl">
                  100%
                </span>
                <p className="text-xs text-slate-400">ARD Automatic Rescue</p>
              </div>
              <div className="space-y-1">
                <span className="font-mono text-2xl font-extrabold text-white sm:text-3xl">4</span>
                <p className="text-xs text-slate-400">Lifecycle Services</p>
              </div>
              <div className="space-y-1">
                <span className="font-mono text-2xl font-extrabold text-emerald-400 sm:text-3xl">
                  Custom
                </span>
                <p className="text-xs text-slate-400">Shaft &amp; Civil Planning</p>
              </div>
            </div>

            {/* Quick Contact Micro-bar */}
            <div className="flex flex-wrap items-center gap-6 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-gold-400" />
                <span>ARD Emergency Battery Backup</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-gold-400" />
                <span>Micro-Leveling Alignment</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-gold-400" />
                <span>Emergency Fireman Mode</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. QUALITY PILLARS & TRUST SECTION */}
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
              className="group flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-gold-400/70 hover:shadow-luxury-hover"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-brand-blue-100 bg-brand-blue-50 transition-transform group-hover:scale-110">
                    {pillar.icon}
                  </div>
                  <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-600">
                    {pillar.highlight}
                  </span>
                </div>
                <h3 className="text-base font-bold text-brand-blue-950 transition-colors group-hover:text-brand-gold-600 sm:text-lg">
                  {pillar.title}
                </h3>
                <p className="text-xs leading-relaxed text-slate-600 sm:text-sm">{pillar.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. INTERACTIVE ELEVATOR SPECIFICATION & HOISTWAY CALCULATOR */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <HoistwayCalculator />
      </section>

      {/* 4. FEATURED ELEVATOR PRODUCTS */}
      <HomeProductsSection products={featuredProducts} />

      {/* 5. 4-STAGE LIFECYCLE ENGINEERING JOURNEY */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200/90 bg-white p-8 shadow-sm sm:p-12">
          <SectionHeader
            badge="Project Methodology"
            title="The 4-Stage Precision Engineering Process"
            subtitle="From initial blueprint shaft feasibility to professional erection and lifelong AMC protection."
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {turnkeyProcess.map((item, idx) => (
              <div
                key={idx}
                className="relative flex flex-col justify-between rounded-2xl border border-slate-100 bg-slate-50/70 p-6 transition-all hover:border-brand-gold-300 hover:bg-white hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-2xl font-black text-brand-gold-500">
                      {item.step}
                    </span>
                    <div className="rounded-xl bg-brand-blue-950 p-2 text-white">{item.icon}</div>
                  </div>
                  <h4 className="mt-4 text-sm font-bold text-brand-blue-950 sm:text-base">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. BROCHURE SPOTLIGHT BANNER */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-brand-blue-950 via-brand-blue-900 to-brand-blue-950 p-8 text-white shadow-2xl sm:p-12">
          <div className="bg-architectural-grid pointer-events-none absolute inset-0 opacity-20" />
          <div className="relative z-10 max-w-2xl space-y-6">
            <span className="inline-block rounded-full border border-brand-gold-400/30 bg-brand-gold-500/20 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-brand-gold-300">
              Official Catalogue Asset • 8 Pages
            </span>
            <h2 className="text-2xl font-extrabold tracking-tight sm:text-4xl">
              Download the Lifestyle Elevators 8-Page Engineering Brochure
            </h2>
            <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
              Contains complete hoistway measurement tables for passenger, hospital, and goods
              lifts, together with technical ratings for Montanari and Bharat Bijlee traction
              machines.
            </p>

            {/* Quick Page Index Pills */}
            <div className="flex flex-wrap gap-2 text-xs text-slate-300">
              <span className="rounded-md bg-white/10 px-2.5 py-1">Page 4: Doors Gallery</span>
              <span className="rounded-md bg-white/10 px-2.5 py-1">Page 5: Luxury Cabins</span>
              <span className="rounded-md bg-white/10 px-2.5 py-1">Page 6: Motors & Drawings</span>
              <span className="rounded-md bg-white/10 px-2.5 py-1">Page 8: Hoistway Tables</span>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={COMPANY.brochure.publicPath}
                download={COMPANY.brochure.filename}
                className="shimmer-button inline-flex items-center gap-2 rounded-xl bg-brand-gold-500 px-6 py-3.5 text-sm font-bold text-brand-blue-950 shadow transition-all hover:bg-brand-gold-400"
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

      {/* 7. TURNKEY SERVICES */}
      <HomeServicesSection />

      {/* 8. ARCHITECTURAL APPLICATION SHOWCASE */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Tailored Project Applications"
          title="Engineered for Bangalore's Buildings & Architectural Blueprints"
          subtitle="Explore how our elevator systems adapt to traffic requirements, shaft configurations, and structural layouts across residential, commercial, and medical facilities."
        />

        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2">
          {applicationShowcase.map((app, idx) => (
            <div
              key={idx}
              className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-sm transition-all duration-300 hover:border-brand-gold-400/80 hover:shadow-luxury-hover"
            >
              <div className="space-y-4 p-7 sm:p-8">
                <div className="flex items-center justify-between">
                  <span className="inline-block rounded-md border border-brand-gold-200 bg-brand-gold-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-gold-800">
                    {app.badge}
                  </span>
                  <span className="text-xs font-semibold text-slate-500">{app.category}</span>
                </div>
                <h3 className="text-xl font-bold text-brand-blue-950 transition-colors group-hover:text-brand-gold-600">
                  {app.title}
                </h3>
                <p className="text-xs font-semibold text-brand-blue-800">{app.specs}</p>
                <p className="text-xs leading-relaxed text-slate-600 sm:text-sm">{app.desc}</p>
              </div>

              <div className="flex items-center justify-between border-t border-slate-100 bg-slate-50/70 p-5 px-7">
                <Link
                  href={`/quote?product=${encodeURIComponent(app.productName)}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-blue-900 transition-colors group-hover:text-brand-gold-600"
                >
                  <span>Request Specifications &amp; Quote</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <Link
                  href="/products"
                  className="text-xs font-medium text-slate-500 hover:text-slate-800"
                >
                  View Details →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. CALL TO ACTION SECTION */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 rounded-3xl border border-slate-200/90 bg-gradient-to-r from-slate-100 to-brand-blue-50/50 p-8 text-center sm:p-14 md:flex-row md:text-left">
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
              className="shimmer-button inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-gold-500 px-7 py-3.5 text-sm font-bold text-brand-blue-950 shadow-gold-sm transition-all hover:bg-brand-gold-400 hover:shadow-gold-glow sm:w-auto"
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
