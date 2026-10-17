import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, ExternalLink, Download, FileText, ArrowRight } from 'lucide-react';
import { COMPANY } from '@/config/company';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-brand-blue-900 bg-brand-blue-950 text-slate-300">
      {/* Top CTA Banner */}
      <div className="border-b border-brand-blue-900/60 bg-gradient-to-r from-brand-blue-950 via-brand-blue-900/40 to-brand-blue-950">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-gold-400">
                Ready for Elevated Living?
              </span>
              <h3 className="mt-1 text-xl font-bold text-white sm:text-2xl">
                Consult with our Bangalore elevator engineering specialists
              </h3>
              <p className="mt-1 max-w-xl text-sm text-slate-400">
                Custom vertical mobility solutions tailored to your building blueprint, traffic
                needs, and aesthetic vision.
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap items-center justify-center gap-3">
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 rounded-lg bg-brand-gold-500 px-5 py-3 text-sm font-bold text-brand-blue-950 shadow transition-all hover:bg-brand-gold-400"
              >
                <span>Request a Free Quote</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={COMPANY.brochure.publicPath}
                download={COMPANY.brochure.filename}
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-white/20"
              >
                <Download className="h-4 w-4 text-brand-gold-400" />
                <span>Brochure (PDF)</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Brand & Overview */}
          <div className="space-y-4">
            <div className="relative h-14 w-48">
              <Image
                src="/images/branding/logo-dark.svg"
                alt="Lifestyle Elevators Logo"
                fill
                className="object-contain object-left"
                sizes="200px"
              />
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              We provide comprehensive vertical and trans movement solutions combining high-grade
              raw materials and intelligently researched smart-advanced technology for safety,
              reliability, and quality.
            </p>
            <div className="pt-2">
              <a
                href={COMPANY.brochure.publicPath}
                download={COMPANY.brochure.filename}
                className="inline-flex items-center gap-2 text-xs font-semibold text-brand-gold-400 transition-colors hover:text-brand-gold-300"
              >
                <FileText className="h-4 w-4" />
                <span>Download Official 8-Page Brochure ({COMPANY.brochure.fileSize})</span>
              </a>
            </div>
          </div>

          {/* Column 2: Elevator Products */}
          <div>
            <h4 className="mb-4 border-b border-brand-blue-900 pb-2 text-sm font-semibold uppercase tracking-wider text-white">
              Elevator Products
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link
                  href="/products#passenger-lift"
                  className="transition-colors hover:text-brand-gold-400"
                >
                  Passenger Lifts
                </Link>
              </li>
              <li>
                <Link
                  href="/products#hospital-lift"
                  className="transition-colors hover:text-brand-gold-400"
                >
                  Hospital & Stretcher Lifts
                </Link>
              </li>
              <li>
                <Link
                  href="/products#home-lift"
                  className="transition-colors hover:text-brand-gold-400"
                >
                  Home & Villa Lifts
                </Link>
              </li>
              <li>
                <Link
                  href="/products#goods-lift"
                  className="transition-colors hover:text-brand-gold-400"
                >
                  Industrial Goods Lifts
                </Link>
              </li>
              <li>
                <Link
                  href="/products#hydraulic-elevators"
                  className="transition-colors hover:text-brand-gold-400"
                >
                  Hydraulic Elevators
                </Link>
              </li>
              <li>
                <Link
                  href="/products#mrl-elevators"
                  className="transition-colors hover:text-brand-gold-400"
                >
                  Machine Room-Less (MRL)
                </Link>
              </li>
              <li>
                <Link
                  href="/products#brochure-components"
                  className="text-xs text-brand-gold-400 transition-colors hover:text-brand-gold-400"
                >
                  + Doors, Cabins, Motors & Ropes →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services & Navigation */}
          <div>
            <h4 className="mb-4 border-b border-brand-blue-900 pb-2 text-sm font-semibold uppercase tracking-wider text-white">
              Services & Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link
                  href="/services#manufacturing-and-supply"
                  className="transition-colors hover:text-brand-gold-400"
                >
                  Manufacturing & Supply
                </Link>
              </li>
              <li>
                <Link
                  href="/services#elevator-installation"
                  className="transition-colors hover:text-brand-gold-400"
                >
                  Turnkey Elevator Installation
                </Link>
              </li>
              <li>
                <Link
                  href="/services#repair-and-service-support"
                  className="transition-colors hover:text-brand-gold-400"
                >
                  Repair & Service Support
                </Link>
              </li>
              <li>
                <Link
                  href="/services#annual-maintenance-contract"
                  className="transition-colors hover:text-brand-gold-400"
                >
                  Annual Maintenance Contracts (AMC)
                </Link>
              </li>
              <li>
                <Link href="/about" className="transition-colors hover:text-brand-gold-400">
                  About Lifestyle Elevators
                </Link>
              </li>
              <li>
                <Link href="/brochure" className="transition-colors hover:text-brand-gold-400">
                  Brochure Preview & Share
                </Link>
              </li>
              <li>
                <Link href="/quote" className="transition-colors hover:text-brand-gold-400">
                  Online Quotation Request
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Office Coordinates */}
          <div>
            <h4 className="mb-4 border-b border-brand-blue-900 pb-2 text-sm font-semibold uppercase tracking-wider text-white">
              Registered Office
            </h4>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-brand-gold-400" />
                <address className="not-italic leading-snug">
                  {COMPANY.address.line1},<br />
                  {COMPANY.address.line2},<br />
                  {COMPANY.address.city} - {COMPANY.address.pincode},<br />
                  {COMPANY.address.state}, {COMPANY.address.country}.
                </address>
              </div>

              <div className="flex flex-col gap-2 pt-2">
                {COMPANY.phones.map((phone) => (
                  <a
                    key={phone.raw}
                    href={phone.telUri}
                    className="flex items-center gap-2 transition-colors hover:text-brand-gold-400"
                  >
                    <Phone className="h-4 w-4 shrink-0 text-brand-gold-400" />
                    <span>{phone.display}</span>
                    <span className="text-xs text-slate-500">({phone.label})</span>
                  </a>
                ))}
                <a
                  href={COMPANY.email.mailtoUri}
                  className="flex items-center gap-2 transition-colors hover:text-brand-gold-400"
                >
                  <Mail className="h-4 w-4 shrink-0 text-brand-gold-400" />
                  <span>{COMPANY.email.address}</span>
                </a>
              </div>

              <div className="pt-2">
                <a
                  href={COMPANY.maps.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-brand-gold-400 hover:text-brand-gold-300"
                >
                  <span>Open Bangalore Office in Google Maps</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Enterprise Compliance & Sourcing Verification Strip */}
        <div className="mt-12 rounded-2xl border border-brand-blue-900 bg-brand-blue-900/40 p-5 text-xs text-slate-400">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex flex-wrap items-center justify-center gap-4 md:justify-start">
              <span className="font-semibold text-slate-300">Engineering Standards:</span>
              <span className="rounded-md border border-brand-blue-800 bg-brand-blue-950 px-2.5 py-1 text-slate-300">
                ✓ Standard Hoistway Measurements (Brochure Page 8)
              </span>
              <span className="rounded-md border border-brand-blue-800 bg-brand-blue-950 px-2.5 py-1 text-slate-300">
                ✓ ARD Emergency Lowering
              </span>
              <span className="rounded-md border border-brand-blue-800 bg-brand-blue-950 px-2.5 py-1 text-slate-300">
                ✓ Montanari (Italy) &amp; Bharat Bijlee
              </span>
            </div>
            <div className="text-center text-slate-400 md:text-right">
              Emergency Escalation:{' '}
              <span className="font-mono font-bold text-brand-gold-400">+91 77955 51118</span>
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-brand-blue-900/60 pt-8 text-xs text-slate-500 sm:flex-row">
          <p>
            © {currentYear} {COMPANY.name}. All rights reserved. Registered in Bangalore, Karnataka.
          </p>
          <div className="flex items-center gap-4 text-slate-400">
            <Link href="/privacy" className="transition-colors hover:text-brand-gold-400">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/terms" className="transition-colors hover:text-brand-gold-400">
              Terms of Service
            </Link>
          </div>
          <p className="text-center text-slate-500 sm:text-right">
            Comprehensive Vertical &amp; Trans Movement Solutions
          </p>
        </div>
      </div>
    </footer>
  );
}
