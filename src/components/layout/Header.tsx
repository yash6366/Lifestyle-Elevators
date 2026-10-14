import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, ArrowRight, Download } from 'lucide-react';
import { COMPANY } from '@/config/company';
import { SITE_CONFIG } from '@/config/site';
import { MobileNav } from './MobileNav';

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-100 bg-white/95 shadow-sm backdrop-blur-md transition-all">
      {/* Top Contact Bar (Desktop & Tablet) */}
      <div className="hidden border-b border-brand-blue-900 bg-brand-blue-950 px-4 py-2 text-xs text-slate-300 sm:px-6 md:block lg:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="h-3.5 w-3.5 shrink-0 text-brand-gold-400" />
              <span>Bangalore, Karnataka, India</span>
            </div>
            <div className="flex items-center gap-4">
              {COMPANY.phones.map((phone) => (
                <a
                  key={phone.raw}
                  href={phone.telUri}
                  className="flex items-center gap-1.5 transition-colors hover:text-brand-gold-300"
                >
                  <Phone className="h-3.5 w-3.5 shrink-0 text-brand-gold-400" />
                  <span>{phone.display}</span>
                </a>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={COMPANY.email.mailtoUri}
              className="flex items-center gap-1.5 transition-colors hover:text-brand-gold-300"
            >
              <Mail className="h-3.5 w-3.5 shrink-0 text-brand-gold-400" />
              <span>{COMPANY.email.address}</span>
            </a>
            <span className="text-brand-blue-800">|</span>
            <a
              href={COMPANY.brochure.publicPath}
              download={COMPANY.brochure.filename}
              className="flex items-center gap-1 font-medium text-brand-gold-400 transition-colors hover:text-brand-gold-300"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Brochure PDF</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center gap-3 rounded-lg py-1 focus:outline-none focus:ring-2 focus:ring-brand-gold-500"
          >
            <div className="relative h-14 w-44 sm:w-52">
              <Image
                src="/images/branding/logo.png"
                alt="Lifestyle Elevators Logo"
                fill
                priority
                className="object-contain object-left transition-transform group-hover:scale-[1.02]"
                sizes="(max-width: 768px) 180px, 220px"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 lg:flex">
            {SITE_CONFIG.mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-2 text-sm font-medium text-slate-700 transition-all hover:border-b-2 hover:border-brand-gold-500 hover:text-brand-blue-900"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-4 md:flex">
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 rounded-lg bg-brand-gold-500 px-5 py-2.5 text-sm font-bold text-brand-blue-950 shadow-sm transition-all hover:bg-brand-gold-400 hover:shadow active:scale-95"
            >
              <span>Get a Quote</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Mobile Navigation Toggle */}
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
