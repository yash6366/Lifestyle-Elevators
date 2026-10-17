'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Phone, Mail, MapPin, ArrowRight, Download, ChevronDown } from 'lucide-react';
import { COMPANY } from '@/config/company';
import { SITE_CONFIG } from '@/config/site';
import { MobileNav } from './MobileNav';
import { MAIN_ELEVATOR_PRODUCTS } from '@/data/products';
import { ELEVATOR_SERVICES } from '@/data/services';
import { cn } from '@/lib/utils/cn';

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Luxury Contact & Status Bar (Desktop & Tablet) */}
      <div className="hidden border-b border-brand-blue-900/80 bg-brand-blue-950 px-4 py-2 text-xs text-slate-300 sm:px-6 md:block lg:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          {/* Left: Bangalore Location & Technical Support Desk */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
              <span className="font-semibold text-emerald-400">Breakdown &amp; AMC Support</span>
            </div>

            <div className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="h-3.5 w-3.5 shrink-0 text-brand-gold-400" />
              <span>Bangalore, Karnataka</span>
            </div>

            <div className="flex items-center gap-4">
              {COMPANY.phones.map((phone) => (
                <a
                  key={phone.raw}
                  href={phone.telUri}
                  className="flex items-center gap-1.5 transition-colors hover:text-brand-gold-300"
                >
                  <Phone className="h-3.5 w-3.5 shrink-0 text-brand-gold-400" />
                  <span className="font-mono">{phone.display}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right: Email & Direct Brochure Download */}
          <div className="flex items-center gap-5">
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
              className="group flex items-center gap-1.5 font-medium text-brand-gold-400 transition-colors hover:text-brand-gold-300"
            >
              <Download className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5" />
              <span>Brochure (PDF)</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div
        className={cn(
          'w-full transition-all duration-300',
          scrolled
            ? 'border-b border-slate-200/90 bg-white/95 shadow-md backdrop-blur-xl'
            : 'border-b border-slate-100 bg-white/90 shadow-sm backdrop-blur-md'
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="group flex items-center gap-3 rounded-xl p-1 transition-transform hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-brand-gold-500"
            >
              <div className="relative h-14 w-44 sm:w-52">
                <Image
                  src="/images/branding/logo.svg"
                  alt="Lifestyle Elevators Logo"
                  fill
                  priority
                  className="object-contain object-left"
                  sizes="(max-width: 768px) 180px, 220px"
                />
              </div>
            </Link>

            {/* Desktop Navigation Links with Mega-Menu Previews */}
            <nav className="hidden items-center gap-1 lg:flex" aria-label="Main Navigation">
              {SITE_CONFIG.mainNav.map((item) => {
                const isActive = pathname === item.href;
                const isProducts = item.href === '/products';
                const isServices = item.href === '/services';

                if (isProducts) {
                  return (
                    <div
                      key={item.href}
                      className="relative"
                      onMouseEnter={() => setProductsOpen(true)}
                      onMouseLeave={() => setProductsOpen(false)}
                      onFocus={() => setProductsOpen(true)}
                      onBlur={(e) => {
                        if (!e.currentTarget.contains(e.relatedTarget)) {
                          setProductsOpen(false);
                        }
                      }}
                      onKeyDown={(e) => {
                        if (e.key === 'Escape') {
                          setProductsOpen(false);
                        }
                      }}
                    >
                      <div className="inline-flex items-center">
                        <Link
                          href={item.href}
                          className={cn(
                            'rounded-l-lg py-2 pl-3.5 pr-1 text-sm font-semibold transition-all',
                            isActive
                              ? 'bg-brand-blue-50 text-brand-blue-900'
                              : 'text-slate-700 hover:bg-slate-50 hover:text-brand-blue-900'
                          )}
                        >
                          <span>{item.label}</span>
                        </Link>
                        <button
                          type="button"
                          onClick={() => setProductsOpen(!productsOpen)}
                          aria-expanded={productsOpen}
                          aria-haspopup="true"
                          aria-label="Toggle elevator products dropdown"
                          className={cn(
                            'rounded-r-lg py-2 pl-1 pr-2.5 transition-all',
                            isActive
                              ? 'bg-brand-blue-50 text-brand-blue-900'
                              : 'text-slate-700 hover:bg-slate-50 hover:text-brand-blue-900'
                          )}
                        >
                          <ChevronDown
                            className={cn(
                              'h-3.5 w-3.5 text-slate-400 transition-transform duration-200',
                              productsOpen && 'rotate-180'
                            )}
                          />
                        </button>
                      </div>

                      {/* Dropdown Menu */}
                      {productsOpen && (
                        <div
                          role="menu"
                          aria-label="Elevator Categories Menu"
                          className="absolute left-0 top-full pt-2"
                        >
                          <div className="w-80 rounded-2xl border border-slate-200/90 bg-white p-3 shadow-2xl backdrop-blur-xl">
                            <div className="border-b border-slate-100 px-3 pb-2 pt-1 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                              Elevator Categories
                            </div>
                            <div className="mt-1 space-y-0.5">
                              {MAIN_ELEVATOR_PRODUCTS.map((p) => (
                                <Link
                                  key={p.id}
                                  role="menuitem"
                                  href={`/products#${p.slug}`}
                                  onClick={() => setProductsOpen(false)}
                                  className="flex items-center justify-between rounded-xl px-3 py-2 text-xs font-semibold text-slate-700 transition-colors hover:bg-brand-blue-50 hover:text-brand-blue-900"
                                >
                                  <span>{p.name}</span>
                                  <span className="text-[10px] uppercase text-brand-gold-600">
                                    {p.category}
                                  </span>
                                </Link>
                              ))}
                            </div>
                            <div className="mt-2 border-t border-slate-100 pt-2 text-center">
                              <Link
                                href="/products"
                                onClick={() => setProductsOpen(false)}
                                className="inline-flex items-center gap-1 text-[11px] font-bold text-brand-gold-600 hover:text-brand-gold-700"
                              >
                                <span>View All 6 Lines &amp; Engineering Specs</span>
                                <ArrowRight className="h-3 w-3" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                if (isServices) {
                  return (
                    <div
                      key={item.href}
                      className="relative"
                      onMouseEnter={() => setServicesOpen(true)}
                      onMouseLeave={() => setServicesOpen(false)}
                      onFocus={() => setServicesOpen(true)}
                      onBlur={(e) => {
                        if (!e.currentTarget.contains(e.relatedTarget)) {
                          setServicesOpen(false);
                        }
                      }}
                      onKeyDown={(e) => {
                        if (e.key === 'Escape') {
                          setServicesOpen(false);
                        }
                      }}
                    >
                      <div className="inline-flex items-center">
                        <Link
                          href={item.href}
                          className={cn(
                            'rounded-l-lg py-2 pl-3.5 pr-1 text-sm font-semibold transition-all',
                            isActive
                              ? 'bg-brand-blue-50 text-brand-blue-900'
                              : 'text-slate-700 hover:bg-slate-50 hover:text-brand-blue-900'
                          )}
                        >
                          <span>{item.label}</span>
                        </Link>
                        <button
                          type="button"
                          onClick={() => setServicesOpen(!servicesOpen)}
                          aria-expanded={servicesOpen}
                          aria-haspopup="true"
                          aria-label="Toggle elevator services dropdown"
                          className={cn(
                            'rounded-r-lg py-2 pl-1 pr-2.5 transition-all',
                            isActive
                              ? 'bg-brand-blue-50 text-brand-blue-900'
                              : 'text-slate-700 hover:bg-slate-50 hover:text-brand-blue-900'
                          )}
                        >
                          <ChevronDown
                            className={cn(
                              'h-3.5 w-3.5 text-slate-400 transition-transform duration-200',
                              servicesOpen && 'rotate-180'
                            )}
                          />
                        </button>
                      </div>

                      {/* Dropdown Menu */}
                      {servicesOpen && (
                        <div
                          role="menu"
                          aria-label="Elevator Services Menu"
                          className="absolute left-0 top-full pt-2"
                        >
                          <div className="w-80 rounded-2xl border border-slate-200/90 bg-white p-3 shadow-2xl backdrop-blur-xl">
                            <div className="border-b border-slate-100 px-3 pb-2 pt-1 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                              Turnkey Solutions
                            </div>
                            <div className="mt-1 space-y-0.5">
                              {ELEVATOR_SERVICES.map((s) => (
                                <Link
                                  key={s.id}
                                  role="menuitem"
                                  href={`/services#${s.id}`}
                                  onClick={() => setServicesOpen(false)}
                                  className="flex items-center justify-between rounded-xl px-3 py-2 text-xs font-semibold text-slate-700 transition-colors hover:bg-brand-blue-50 hover:text-brand-blue-900"
                                >
                                  <span>{s.name}</span>
                                  <ArrowRight className="h-3 w-3 text-slate-400" />
                                </Link>
                              ))}
                            </div>
                            <div className="mt-2 border-t border-slate-100 pt-2 text-center">
                              <Link
                                href="/services"
                                onClick={() => setServicesOpen(false)}
                                className="inline-flex items-center gap-1 text-[11px] font-bold text-brand-gold-600 hover:text-brand-gold-700"
                              >
                                <span>Explore Complete Services &amp; AMC</span>
                                <ArrowRight className="h-3 w-3" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'relative rounded-lg px-3.5 py-2 text-sm font-semibold transition-all',
                      isActive
                        ? 'bg-brand-blue-50 text-brand-blue-900'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-brand-blue-900'
                    )}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 rounded-full bg-brand-gold-500" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden items-center gap-3 md:flex">
              <Link
                href="/quote"
                className="shimmer-button inline-flex items-center gap-2 rounded-xl bg-brand-gold-500 px-5 py-2.5 text-sm font-bold text-brand-blue-950 shadow-gold-sm transition-all hover:scale-[1.02] hover:bg-brand-gold-400 hover:shadow-gold-glow active:scale-95"
              >
                <span>Get a Quote</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Mobile Navigation Toggle */}
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
}
