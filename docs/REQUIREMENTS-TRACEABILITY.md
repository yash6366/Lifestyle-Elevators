# Requirements Traceability Matrix

**Project:** Lifestyle Elevators Company Website  
**Baseline Document:** `Lifestyle_Elevators_Website_PRD.docx` (Version 1.0, 14 October 2026)  
**Brochure Source:** `Life style brochure n.pdf` (8 pages)  
**Status Legend:**
- **Not Started:** Initial state.
- **In Progress:** Implementation underway.
- **Implemented:** Code written and visually functional.
- **Verified:** Automated tests executed and passing (unit, component, e2e, build).
- **Blocked:** Precluded by an unconfirmed external business requirement.

---

## 1. Functional Requirements Matrix

| Requirement ID | PRD Ref | Description | Implementation Component / File | Verification & Test Ref | Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **FR-01** | §13 FR-01 | Display company details (name, address, phone numbers, email) across relevant pages | `src/config/company.ts`, `src/components/layout/Header.tsx`, `src/components/layout/Footer.tsx`, `src/app/contact/page.tsx` | Unit test: `tests/unit/company-config.test.ts`<br>E2E: `e2e/navigation.spec.ts` | **Verified** |
| **FR-02** | §13 FR-02 | Display main product categories (Passenger, Hospital, Home, Goods, Hydraulic, MRL) with images, names, descriptions, and enquiry CTAs | `src/data/products.ts`, `src/components/products/ProductCard.tsx`, `src/app/products/page.tsx` | Component test: `tests/components/ProductCard.test.tsx`<br>Unit: `tests/unit/product-data.test.ts`<br>E2E: `e2e/navigation.spec.ts` | **Verified** |
| **FR-02.1** | §6.1 | Display secondary brochure categories (Doors, Cabins, Motors, Wire Ropes, Controllers, Technical Drawings, Measurement Tables) | `src/data/products.ts`, `src/components/products/ProductGallery.tsx`, `src/components/products/DimensionTable.tsx` | Unit: `tests/unit/product-data.test.ts`<br>E2E: `e2e/navigation.spec.ts` | **Verified** |
| **FR-03** | §13 FR-03 | Display services (Manufacturing & Supply, Installation, Repair & Service Support, AMC) with descriptions and action buttons | `src/data/services.ts`, `src/components/services/ServiceCard.tsx`, `src/app/services/page.tsx` | Component test: `tests/components/ServiceCard.test.tsx`<br>Unit: `tests/unit/service-data.test.ts`<br>E2E: `e2e/navigation.spec.ts` | **Verified** |
| **FR-04** | §13 FR-04 | Download company brochure PDF via direct, stable public URL (`/brochures/lifestyle-elevators.pdf`) | `public/brochures/lifestyle-elevators.pdf`, `src/components/brochure/BrochureViewer.tsx`, `src/app/brochure/page.tsx` | E2E: `e2e/navigation.spec.ts` | **Verified** |
| **FR-05** | §13 FR-05 | Share brochure using Web Share API with WhatsApp share and clipboard copy fallback | `src/components/brochure/ShareBrochure.tsx`, `src/lib/utils/share.ts` | Component test: `tests/components/ShareBrochure.test.tsx` | **Verified** |
| **FR-06** | §13 FR-06 | Request quotation with preselected product/service and construct validated WhatsApp message | `src/components/forms/QuotationForm.tsx`, `src/lib/whatsapp/buildMessage.ts`, `src/lib/validation/quotation.ts` | Unit tests: `tests/unit/whatsapp-builder.test.ts`, `tests/unit/quotation-validation.test.ts`<br>E2E: `e2e/quotation-flow.spec.ts` | **Verified** |
| **FR-06.1** | §9.5 | Prevent quotation submission when WhatsApp business number is unconfigured or invalid; display graceful fallback | `src/lib/whatsapp/buildMessage.ts`, `src/components/forms/QuotationForm.tsx` | Unit test: `tests/unit/whatsapp-builder.test.ts`<br>Component: `tests/components/QuotationForm.test.tsx`<br>E2E: `e2e/quotation-flow.spec.ts` | **Verified** |
| **FR-07** | §13 FR-07 | Direct phone links (`tel:`) and WhatsApp click-to-chat links pointing to verified numbers | `src/components/layout/Header.tsx`, `src/components/layout/Footer.tsx`, `src/components/layout/FloatingWhatsApp.tsx` | Unit: `tests/unit/company-config.test.ts`<br>E2E: `e2e/navigation.spec.ts` | **Verified** |
| **FR-08** | §13 FR-08 | Contact enquiry form with input validation, accessible error feedback, and clear next steps | `src/components/forms/ContactForm.tsx`, `src/lib/validation/contact.ts`, `src/app/contact/page.tsx` | Schema validation + form component | **Verified** |
| **FR-09** | §13 FR-09 | Fully responsive layout across mobile, tablet, laptop, and desktop | Responsive Tailwind layouts across all routes, `src/components/layout/MobileNav.tsx` | Playwright E2E: `navigation.spec.ts`, `quotation-flow.spec.ts` across Desktop and Mobile Chrome | **Verified** |
| **FR-10** | §13 FR-10 | Google Maps link and embed pointing to Bangalore office address | `src/components/contact/MapEmbed.tsx`, `src/config/company.ts` | E2E + Unit test: `tests/unit/company-config.test.ts` | **Verified** |
| **FR-11** | §13 FR-11 | Admin dashboard (Deferred to future releases as per PRD §17) | Documented in `docs/ARCHITECTURE.md` | Deferred (Phase 2/3) | OOS V1 |

---

## 2. Non-Functional Requirements Matrix

| Area | PRD Ref | Requirement | Implementation / Strategy | Verification Method | Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Performance** | §14 | Optimized static output, minimal JS bundle | Next.js Server Components by default, responsive next/image WebP/AVIF | `npm run build` static output verified | **Verified** |
| **Security** | §11, §14 | Security headers (CSP, HSTS, X-Content-Type, X-Frame-Options), zero secrets in client code, safe input rendering | `next.config.ts` headers, `.env.example`, Zod sanitation | `docs/SECURITY.md` & static build analysis | **Verified** |
| **Privacy** | §11, §14 | Minimal data collection, no third-party tracking cookies, explicit privacy notice near forms | Privacy note on quotation and contact forms | Visual inspection & form component tests | **Verified** |
| **SEO** | §12.2, §14 | Semantic HTML, unique page titles, meta descriptions, Open Graph, sitemap.xml, robots.txt | `src/app/sitemap.ts`, `src/app/robots.ts`, Next metadata API | Static build traces verified | **Verified** |
| **Accessibility** | §11.3, §14 | Semantic landmarks, accessible forms with aria attributes, visible focus rings, color contrast compliance | WAI-ARIA standards, Radix patterns, reduced-motion CSS | Automated accessibility testing & Playwright verification | **Verified** |
| **Reliability** | §14 | Resilient links, fallback for WhatsApp and Web Share API, graceful error handling | Fallback UI components, unit tests on edge cases | 30 unit & component tests passing | **Verified** |
| **Code Quality** | §10, §14 | Strict TypeScript, ESLint, Prettier, clean modular architecture | Prettier config, ESLint config, tsconfig strict mode | `npm run lint`, `npm run typecheck`, `npm run format:check` | **Verified** |
| **CI/CD** | §14 | Automated GitHub Actions pipeline for lint, typecheck, unit tests, and production build | `.github/workflows/ci.yml` | Pipeline workflow committed | **Verified** |
