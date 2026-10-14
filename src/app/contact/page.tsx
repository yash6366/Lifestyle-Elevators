import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, Mail, MapPin, Download, ArrowRight } from 'lucide-react';
import { COMPANY } from '@/config/company';
import { ContactForm } from '@/components/forms/ContactForm';
import { MapEmbed } from '@/components/contact/MapEmbed';

export const metadata: Metadata = {
  title: 'Contact Lifestyle Elevators | Bangalore Office & Directions',
  description:
    'Reach Lifestyle Elevators office in Ittamadu, Bangalore. Call +91 7795551118 or +91 9986028416, email lifestyleelevator2025@gmail.com, or view Google Maps directions.',
};

export default function ContactPage() {
  return (
    <div className="flex flex-col gap-16 pb-24 sm:gap-20">
      {/* 1. Header Hero */}
      <section className="border-b border-brand-blue-900 bg-brand-blue-950 py-16 text-white sm:py-24">
        <div className="mx-auto max-w-3xl max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <span className="mb-3 inline-block rounded-full border border-brand-gold-400/30 bg-brand-gold-500/20 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-brand-gold-300">
            Reach Out to Our Desk
          </span>
          <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
            Contact Lifestyle Elevators
          </h1>
          <p className="mt-4 text-balance text-base leading-relaxed text-slate-300 sm:text-lg">
            Connect with our vertical transportation engineers in Bangalore. We are here to assist
            with new installations, modernization, AMC inquiries, and emergency repairs.
          </p>
        </div>
      </section>

      {/* 2. Office Information & Contact Form Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
          {/* Left Column: Direct Office Contact Details */}
          <div className="space-y-8 lg:col-span-5">
            <div className="space-y-6 rounded-3xl border border-slate-200/90 bg-white p-8 shadow-sm">
              <h2 className="border-b border-slate-100 pb-3 text-xl font-bold text-brand-blue-950">
                Bangalore Registered Office
              </h2>

              {/* Office Address */}
              <div className="flex items-start gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-brand-gold-200 bg-brand-gold-50">
                  <MapPin className="h-5 w-5 text-brand-gold-600" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Physical Address
                  </h3>
                  <address className="mt-1 text-sm font-medium not-italic leading-snug text-slate-800">
                    {COMPANY.address.line1},<br />
                    {COMPANY.address.line2},<br />
                    {COMPANY.address.city} - {COMPANY.address.pincode},<br />
                    {COMPANY.address.state}, {COMPANY.address.country}.
                  </address>
                </div>
              </div>

              {/* Phone Numbers (Clickable tel: links) */}
              <div className="flex items-start gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-brand-blue-100 bg-brand-blue-50">
                  <Phone className="h-5 w-5 text-brand-blue-900" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Office Telephone Lines
                  </h3>
                  <div className="flex flex-col gap-1.5 pt-0.5">
                    {COMPANY.phones.map((phone) => (
                      <a
                        key={phone.raw}
                        href={phone.telUri}
                        className="flex items-center gap-2 text-sm font-semibold text-brand-blue-900 transition-colors hover:text-brand-gold-600"
                      >
                        <span className="font-mono">{phone.display}</span>
                        <span className="text-xs font-normal text-slate-500">({phone.label})</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Email Address (Clickable mailto: link) */}
              <div className="flex items-start gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-brand-gold-200 bg-brand-gold-50">
                  <Mail className="h-5 w-5 text-brand-gold-600" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Official Email
                  </h3>
                  <a
                    href={COMPANY.email.mailtoUri}
                    className="mt-1 block text-sm font-semibold text-brand-blue-900 transition-colors hover:text-brand-gold-600"
                  >
                    {COMPANY.email.address}
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Action Box */}
            <div className="space-y-4 rounded-3xl bg-brand-blue-950 p-8 text-white shadow-lg">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-gold-400">
                Planning an Installation?
              </span>
              <h3 className="text-xl font-bold">Need a Technical Quotation?</h3>
              <p className="text-xs leading-relaxed text-slate-300 sm:text-sm">
                Use our interactive quotation form to configure your floor stops, car finish, and
                door preferences for an instant estimate.
              </p>
              <div className="flex flex-col gap-2.5 pt-2">
                <Link
                  href="/quote"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-gold-500 px-5 py-3 text-sm font-bold text-brand-blue-950 shadow transition-colors hover:bg-brand-gold-400"
                >
                  <span>Request Elevator Quotation</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={COMPANY.brochure.publicPath}
                  download={COMPANY.brochure.filename}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-2.5 text-xs font-medium text-white transition-colors hover:bg-white/20"
                >
                  <Download className="h-4 w-4 text-brand-gold-400" />
                  <span>Download PDF Brochure ({COMPANY.brochure.fileSize})</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* 3. Google Maps Embed Section (PRD §5.6 & §10) */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 border-b border-slate-200 pb-4">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-gold-600">
            Location Map
          </span>
          <h2 className="mt-1 text-2xl font-bold text-brand-blue-950">
            Find Our Office in Ittamadu, Bangalore
          </h2>
        </div>

        <MapEmbed />
      </section>
    </div>
  );
}
