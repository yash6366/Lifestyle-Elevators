import React from 'react';
import { cn } from '@/lib/utils/cn';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
  light?: boolean;
}

export function SectionHeader({
  badge,
  title,
  subtitle,
  align = 'center',
  className,
  light = false,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'mb-12 max-w-3xl',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        className
      )}
    >
      {badge && (
        <span
          className={cn(
            'mb-3 inline-block rounded-full border px-3.5 py-1 text-xs font-semibold uppercase tracking-wider',
            light
              ? 'border-brand-gold-400/30 bg-brand-gold-500/20 text-brand-gold-300'
              : 'border-brand-gold-200 bg-brand-gold-50 text-brand-gold-800'
          )}
        >
          {badge}
        </span>
      )}
      <h2
        className={cn(
          'text-balance text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl',
          light ? 'text-white' : 'text-brand-blue-950'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'mt-4 text-balance text-base leading-relaxed sm:text-lg',
            light ? 'text-slate-300' : 'text-slate-600'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
