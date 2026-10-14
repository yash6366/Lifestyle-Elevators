# Engineering & Coding Standards

**Project:** Lifestyle Elevators Company Website  
**Version:** 1.0.0  
**Effective Date:** 14 October 2026

---

## 1. Core Principles

1. **Clarity Over Cleverness:** Write predictable, readable code. Avoid overly intricate abstractions.
2. **Strict Type Safety:** Enable and respect TypeScript strict mode. Never use `any` unless dealing with uncontrollable third-party untyped events, and even then, narrow with type guards.
3. **Data-Driven Architecture:** Domain entities (products, services, company contact info, brochure metadata) must be housed in dedicated typed modules (`src/config/`, `src/data/`). Never hardcode duplicate contact numbers across UI components.
4. **Accessible by Design:** All interactive elements must have accessible labels, visible focus indicators, and semantic HTML5 landmarks.

---

## 2. TypeScript Rules

- **Strict Mode:** `tsconfig.json` enforces `"strict": true`, `"noEmit": true`, and `"isolatedModules": true`.
- **Naming Conventions:**
  - `PascalCase` for Interfaces, Types, Enums, and React Components.
  - `camelCase` for functions, variables, hooks, and filenames that are not React components.
  - `UPPER_SNAKE_CASE` for global immutable constants (e.g. `PRODUCT_SERVICE_OPTIONS`, `COMPANY`).
- **Null Safety:** Avoid optional chaining chains without handling undefined fallbacks. Use explicit guards and Zod schemas for boundary validation.
- **Imports:** Always use the path alias `@/*` mapping to `./src/*`. Avoid fragile deep relative paths (e.g. `../../../../components`).

---

## 3. React & Next.js Architecture

- **Server Components by Default:** Page files (`page.tsx`) and static presentation components are React Server Components.
- **Client Components (`'use client'`):** Mark a component as client-only ONLY when it relies on:
  - React state hooks (`useState`, `useEffect`, `useReducer`).
  - Browser APIs (`navigator.clipboard`, `navigator.share`, `window.open`).
  - Interactive form libraries (`react-hook-form`).
  - DOM event listeners (modal keyboard traps, mobile navigation drawers).
- **Component Anatomy:**
  ```tsx
  // 1. Imports: React, external packages, internal utilities/types, components
  import React from 'react';
  import Link from 'next/link';
  import { cn } from '@/lib/utils/cn';
  import type { ElevatorProduct } from '@/types/product';

  // 2. Props Interface
  interface ProductCardProps {
    product: ElevatorProduct;
    className?: string;
  }

  // 3. Component Implementation
  export function ProductCard({ product, className }: ProductCardProps) {
    return (
      <article className={cn('...', className)}>
        {/* Semantic markup */}
      </article>
    );
  }
  ```

---

## 4. CSS & Styling Standards

- **Tailwind Utility First:** Use Tailwind CSS utility classes directly.
- **Class Merging:** Always wrap conditional class combinations with the `cn()` helper (`clsx` + `tailwind-merge`) to prevent conflicting style overrides.
- **Brand Palette:**
  - Navy Primary: `bg-brand-blue-950` / `text-brand-blue-900`
  - Gold Accent: `bg-brand-gold-500` / `text-brand-gold-400`
  - Neutral Base: `bg-slate-50` / `text-slate-900` / `border-slate-200`
- **Responsive Breakpoints:** Design mobile-first using `sm:`, `md:`, `lg:`, `xl:`.

---

## 5. Form & WhatsApp Lead Guidelines

- All forms must be validated via **Zod** and powered by **React Hook Form**.
- Validation errors must display accessible feedback linked via `aria-describedby` and `aria-invalid`.
- Form inputs must never be cleared upon validation failure.
- WhatsApp message construction must enforce the verified configuration guard:
  - Unconfigured numbers must show a graceful fallback with direct telephone and email options.
  - Never generate broken links or send leads to an unverified phone number.

---

## 6. Testing Expectations

- Every utility function in `src/lib/` must have a corresponding unit test in `tests/unit/`.
- Every shared interactive UI component must have a component test in `tests/components/`.
- Full user journeys (navigation, quotation lead flow, brochure download) must be covered by Playwright specs in `e2e/`.
- No PR may be merged if `npm run typecheck`, `npm run lint`, `npm run format:check`, or `npm run test` fails.
