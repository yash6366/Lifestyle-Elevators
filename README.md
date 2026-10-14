# Lifestyle Elevators — Production-Ready Company Website

[![CI Pipeline](https://github.com/lifestyle-elevators/lifestyle-elevators/actions/workflows/ci.yml/badge.svg)](https://github.com/lifestyle-elevators/lifestyle-elevators/actions/workflows/ci.yml)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-blue.svg)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-15%20App%20Router-black.svg)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC.svg)](https://tailwindcss.com/)
[![Vitest](https://img.shields.io/badge/Vitest-30%2F30%20Passing-success.svg)](https://vitest.dev/)

A modern, responsive, accessible, secure, and production-ready company website for **Lifestyle Elevators**, Bangalore, India.

---

## 1. Project Overview

Lifestyle Elevators provides comprehensive vertical mobility solutions across residential, commercial, hospital, and industrial sectors. This web application introduces the company, showcases elevator products, explains turnkey services (Manufacturing & Supply, Installation, Repair & Service Support, AMC), hosts the official 8-page company brochure with Web Share and WhatsApp sharing, and provides an interactive quotation lead generation funnel.

### Primary Conversion Journey
```
Visit Website ──▶ Explore Elevators & Services ──▶ Request Quotation
                                                          │
                                                          ▼
WhatsApp Manual Send ◀── Pre-filled WhatsApp ◀── Complete Zod Form
        │
        ▼
Company Receives Lead
```

---

## 2. Mandatory Tech Stack

- **Framework:** Next.js (App Router, React Server Components by default)
- **Language:** TypeScript with strict mode (`strict: true`)
- **Styling:** Tailwind CSS with signature Corporate Navy (`#0c2440`) and Architectural Gold (`#c59b27`) palette
- **Forms & Validation:** React Hook Form + Zod runtime schema validation
- **Icons:** Lucide React
- **Testing:** Vitest + React Testing Library + Playwright E2E
- **Code Quality:** ESLint, Prettier, TypeScript Compiler
- **CI/CD:** GitHub Actions automated pipeline (`.github/workflows/ci.yml`)

---

## 3. Getting Started & Installation

### Prerequisites
- **Node.js:** v20.x, v22.x LTS, or v24.x LTS (Recommended: Node 22 or 24)
- **Package Manager:** `npm` (Lockfile committed: `package-lock.json`)

### Installation
```bash
# Clone the repository
git clone https://github.com/lifestyle-elevators/lifestyle-elevators.git
cd lifestyle-elevators

# Install exact dependencies
npm ci
```

### Environment Configuration
Copy the template configuration file:
```bash
cp .env.example .env.local
```

Edit `.env.local`:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_WHATSAPP_NUMBER=
NEXT_PUBLIC_ENABLE_WHATSAPP_LEADS=false
```

> **Security Note (PRD §1 & §8):** The brochure publishes two phone numbers (+91 7795551118 and +91 9986028416). Until the business owner verifies which number is active on WhatsApp Business, leave `NEXT_PUBLIC_ENABLE_WHATSAPP_LEADS=false`. The application will automatically provide a friendly fallback with direct telephone and email options.

---

## 4. Development & Build Commands

| Command | Action |
| :--- | :--- |
| `npm run dev` | Starts local Next.js development server at `http://localhost:3000` |
| `npm run build` | Builds optimized static production bundle |
| `npm run start` | Runs production server locally on port 3000 |
| `npm run lint` | Runs Next.js ESLint checks |
| `npm run typecheck` | Executes strict TypeScript compiler checks without emitting JS |
| `npm run format` | Auto-formats code with Prettier and Tailwind plugin |
| `npm run format:check` | Verifies code formatting conformance |
| `npm run test` | Executes unit and component tests with Vitest |
| `npm run test:watch` | Runs Vitest in interactive watch mode |
| `npm run test:coverage` | Generates Vitest code coverage report |
| `npm run test:e2e` | Runs Playwright cross-browser end-to-end test suite |

---

## 5. Architectural Structure

```
lifestyle-elevators/
├── docs/                       # Comprehensive engineering documentation
│   ├── ARCHITECTURE.md         # System design, sequence flows, data boundaries
│   ├── CODING-STANDARDS.md     # Code style, naming, TypeScript/React rules
│   ├── SECURITY.md             # Threat model, security headers, privacy policy
│   ├── TESTING.md              # Test strategy, commands, and coverage
│   ├── DEPLOYMENT.md           # Vercel & Node.js hosting instructions
│   ├── REQUIREMENTS-TRACEABILITY.md # PRD requirement audit matrix
│   ├── OPEN-QUESTIONS.md       # Brochure discrepancies & pending client decisions
│   └── IMPLEMENTATION-REPORT.md # Verification status, metrics, and progress logs
├── public/
│   ├── brochures/
│   │   └── lifestyle-elevators.pdf # Official 8-page company brochure PDF
│   └── images/
│       ├── branding/           # Brand logo and hero imagery
│       ├── products/           # 6 main elevator lines photography
│       └── services/           # 4 core service photographs
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── layout.tsx          # Global layout, fonts, header, footer, floating widget
│   │   ├── page.tsx            # Homepage
│   │   ├── about/page.tsx      # About page (Quality approach & safety features)
│   │   ├── products/page.tsx   # Products page (6 lifts + components + dimensions)
│   │   ├── services/page.tsx   # Services page (Manufacturing, Installation, AMC)
│   │   ├── brochure/page.tsx   # PDF viewer, download, and Web Share utilities
│   │   ├── contact/page.tsx    # Bangalore coordinates, map embed, and contact form
│   │   ├── quote/page.tsx      # Interactive quotation form with query preselection
│   │   ├── sitemap.ts          # Dynamic XML sitemap generator
│   │   └── robots.ts           # Robots.txt crawler configuration
│   ├── components/             # Modular React components
│   │   ├── layout/             # Header, Navbar, MobileNav, Footer, FloatingWhatsApp
│   │   ├── products/           # ProductCard, ProductGallery, DimensionTable
│   │   ├── services/           # ServiceCard
│   │   ├── brochure/           # BrochureViewer, ShareBrochure
│   │   ├── forms/              # QuotationForm, ContactForm
│   │   └── shared/             # Button, SectionHeader, Badge
│   ├── config/
│   │   ├── company.ts          # Central single source of truth for company details
│   │   └── site.ts             # Metadata & navigation configuration
│   ├── data/
│   │   ├── products.ts         # Strongly-typed catalog of lifts & measurements
│   │   └── services.ts         # Strongly-typed service definitions
│   ├── lib/
│   │   ├── validation/         # Zod schemas (quotation.ts, contact.ts)
│   │   ├── whatsapp/           # Safe WhatsApp URL builder & message formatter
│   │   └── utils/              # cn helper, Web Share API helper
│   └── types/                  # TypeScript domain models
├── tests/
│   ├── setup.ts                # Jest-DOM matcher setup
│   ├── unit/                   # Unit test suites
│   └── components/             # React Testing Library component tests
└── e2e/                        # Playwright end-to-end browser specifications
```

---

## 6. Company Information (Centralized)

- **Company Name:** Lifestyle Elevators
- **Registered Address:** No. 203, 1st Main, 5th Cross, Naidu Layout, Ittamadu, Bangalore – 560061, Karnataka, India
- **Phone Lines:** `+91 7795551118` (Primary), `+91 9986028416` (Support & AMC)
- **Official Email:** `lifestyleelevator2025@gmail.com`
- **Brand Colors:** Navy (`#0c2440`), Gold (`#c59b27`), White (`#ffffff`)

---

## 7. Open Questions & Consistency Notes

As documented in `docs/OPEN-QUESTIONS.md`:
1. **Brochure Page 3 Discrepancy:** Page 3 mentions "Kwality Key Elevators" while the cover and PRD state "Lifestyle Elevators". The website uses "Lifestyle Elevators" as the provisional brand name.
2. **WhatsApp Business Number:** Awaiting client confirmation on which phone number is authorized for quotation leads. Direct submission is gated by `NEXT_PUBLIC_ENABLE_WHATSAPP_LEADS`.

---

## 8. License

Copyright © 2026 Lifestyle Elevators. All rights reserved.
