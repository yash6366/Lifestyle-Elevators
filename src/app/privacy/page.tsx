import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Shield, Mail, Phone, MapPin } from 'lucide-react';
import { COMPANY } from '@/config/company';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy Policy for Lifestyle Elevators. Learn how customer quotation and technical measurement information is handled.',
};

export default function PrivacyPage() {
  return (
    <div className="flex flex-col gap-12 pb-24 sm:gap-16">
      {/* Header Hero */}
      <section className="relative overflow-hidden border-b border-brand-blue-900 bg-brand-blue-950 py-16 text-white sm:py-20">
        <div className="bg-architectural-grid pointer-events-none absolute inset-0 opacity-30" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <span className="mb-3 inline-block rounded-full border border-brand-gold-400/30 bg-brand-gold-500/20 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-brand-gold-300 backdrop-blur-md">
            Legal &amp; Data Transparency
          </span>
          <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-balance text-base leading-relaxed text-slate-300 sm:text-lg">
            How Lifestyle Elevators collects, uses, and safeguards customer information submitted
            through our website and quotation tools.
          </p>
        </div>
      </section>

      {/* Main Privacy Content */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-8 rounded-3xl border border-slate-200/90 bg-white p-8 shadow-sm sm:p-12">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4 text-brand-blue-950">
            <Shield className="h-6 w-6 text-brand-gold-600" />
            <h2 className="text-xl font-bold sm:text-2xl">Our Commitment to Customer Privacy</h2>
          </div>

          <div className="space-y-6 text-sm leading-relaxed text-slate-700 sm:text-base">
            <div>
              <h3 className="text-base font-bold text-brand-blue-950 sm:text-lg">
                1. Information We Collect
              </h3>
              <p className="mt-2 text-slate-600">
                When you request an elevator quotation, use our hoistway dimension estimator,
                download our catalogue, or contact our engineering desk, we collect only the
                necessary project specifications you provide, including:
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600">
                <li>Your name and contact telephone number.</li>
                <li>Your email address (if optionally supplied).</li>
                <li>
                  Building category, stops/floors, elevator model preferences, and project location
                  in Bangalore or surrounding regions.
                </li>
                <li>Structural or civil shaft dimensions entered into our planning utilities.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-base font-bold text-brand-blue-950 sm:text-lg">
                2. How We Use Your Information
              </h3>
              <p className="mt-2 text-slate-600">
                Information provided is strictly used for legitimate engineering and commercial
                purposes:
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600">
                <li>
                  Preparing accurate technical quotations, shaft clearance evaluations, and
                  machinery recommendations.
                </li>
                <li>
                  Responding directly to customer enquiries regarding installation, modernization,
                  or Annual Maintenance Contracts (AMC).
                </li>
                <li>
                  Coordinating on-site civil surveys and architectural shaft measurements with
                  building owners, contractors, or architects.
                </li>
              </ul>
              <p className="mt-2 font-medium text-brand-blue-900">
                We never sell, rent, or trade customer contact details with third-party marketing
                brokers or advertisers.
              </p>
            </div>

            <div>
              <h3 className="text-base font-bold text-brand-blue-950 sm:text-lg">
                3. Direct WhatsApp &amp; Communication Channels
              </h3>
              <p className="mt-2 text-slate-600">
                Our quotation and contact forms format your entered details into a clear summary
                message for your review before opening WhatsApp Click-to-Chat. Opening WhatsApp
                transmits information directly to the official {COMPANY.name} business line. You
                maintain full control over the message content before pressing send.
              </p>
            </div>

            <div>
              <h3 className="text-base font-bold text-brand-blue-950 sm:text-lg">
                4. Data Security &amp; Retention
              </h3>
              <p className="mt-2 text-slate-600">
                We implement industry-standard administrative and technical safeguards to protect
                your project information. Data retained for ongoing elevator installations and AMC
                contracts is maintained securely within our company records.
              </p>
            </div>

            <div>
              <h3 className="text-base font-bold text-brand-blue-950 sm:text-lg">
                5. Contacting Our Data Privacy Desk
              </h3>
              <p className="mt-2 text-slate-600">
                If you have questions regarding this Privacy Policy or wish to update or remove your
                project records, please contact our Bangalore office:
              </p>
              <div className="mt-4 space-y-3 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-xs text-slate-700 sm:text-sm">
                <div className="flex items-start gap-2.5">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold-600" />
                  <span>{COMPANY.address.fullFormatted}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="h-4 w-4 shrink-0 text-brand-gold-600" />
                  <span>
                    {COMPANY.phones[0].display} / {COMPANY.phones[1].display}
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="h-4 w-4 shrink-0 text-brand-gold-600" />
                  <span>{COMPANY.email.address}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-100 pt-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-bold text-brand-blue-900 transition-colors hover:text-brand-gold-600"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
