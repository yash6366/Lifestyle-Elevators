import * as React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils/cn';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'gold' | 'outline' | 'ghost' | 'white';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  isExternal?: boolean;
  isLoading?: boolean;
  icon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      href,
      isExternal,
      isLoading,
      icon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] select-none';

    const variants = {
      primary:
        'bg-brand-blue-900 text-white hover:bg-brand-blue-800 shadow-sm border border-brand-blue-800',
      gold: 'bg-brand-gold-500 text-brand-blue-950 font-semibold hover:bg-brand-gold-400 shadow-sm border border-brand-gold-400',
      outline:
        'border-2 border-brand-blue-900 text-brand-blue-900 hover:bg-brand-blue-50 bg-transparent',
      ghost: 'text-brand-blue-900 hover:bg-brand-blue-50 bg-transparent',
      white: 'bg-white text-brand-blue-900 hover:bg-slate-100 shadow-sm border border-slate-200',
    };

    const sizes = {
      sm: 'text-xs px-3 py-1.5 gap-1.5',
      md: 'text-sm px-4 py-2.5 gap-2',
      lg: 'text-base px-6 py-3.5 gap-2.5 font-semibold',
    };

    const combinedClassName = cn(baseStyles, variants[variant], sizes[size], className);

    if (href) {
      if (isExternal) {
        return (
          <a
            href={href}
            className={combinedClassName}
            target="_blank"
            rel="noopener noreferrer"
            aria-disabled={disabled}
          >
            {icon && <span className="shrink-0">{icon}</span>}
            <span>{children}</span>
          </a>
        );
      }
      return (
        <Link href={href} className={combinedClassName} aria-disabled={disabled}>
          {icon && <span className="shrink-0">{icon}</span>}
          <span>{children}</span>
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        type={props.type || 'button'}
        className={combinedClassName}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <svg
            className="-ml-1 mr-2 h-4 w-4 animate-spin text-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        ) : (
          icon && <span className="shrink-0">{icon}</span>
        )}
        <span>{children}</span>
      </button>
    );
  }
);

Button.displayName = 'Button';
