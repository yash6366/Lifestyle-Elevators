# Testing Strategy & Quality Assurance Plan

**Project:** Lifestyle Elevators Company Website  
**Test Frameworks:** Vitest, React Testing Library, Playwright  
**Status:** 30/30 Unit & Component Tests Passing (100% Pass Rate)

---

## 1. Testing Philosophy

The testing pyramid for Lifestyle Elevators focuses on:
1. **Domain Logic & Safety Guards (Unit Tests):** WhatsApp URL generation, message formatting templates, Zod validation rules, company configuration integrity.
2. **Component Integrity (DOM Component Tests):** Rendering of product cards, service cards, accessible form inputs, error states, and brochure sharing mechanisms.
3. **End-to-End User Journeys (Playwright Specs):** Multi-device cross-browser testing of page navigation, quotation lead generation with query parameter pre-selection, and graceful fallbacks.

---

## 2. Test Execution Commands

```bash
# Run unit and component test suite (Vitest)
npm run test

# Run tests with interactive watcher
npm run test:watch

# Run tests with code coverage analysis
npm run test:coverage

# Run Playwright End-to-End tests
npm run test:e2e

# Run Playwright with interactive UI mode
npx playwright test --ui
```

---

## 3. Test Coverage Breakdown

### Unit Tests (`tests/unit/`)
- `company-config.test.ts`: Verifies Bangalore office address, both phone numbers (`+91 7795551118`, `+91 9986028416`), official email, brochure asset path, and WhatsApp configuration guards.
- `whatsapp-builder.test.ts`: Validates formatting against PRD §9.4, URL encoding, query sanitization, and rejection of unconfigured WhatsApp numbers.
- `quotation-validation.test.ts`: Tests Zod validation for valid leads, short names, malformed phone numbers, whitespace trimming, and unapproved product options.
- `product-data.test.ts`: Verifies existence of all 6 core products, brochure components, and technical measurement tables.
- `service-data.test.ts`: Validates all 4 services and their brochure descriptions.

### Component Tests (`tests/components/`)
- `ProductCard.test.tsx`: Tests rendering of product card elements and enquire link href generation.
- `ServiceCard.test.tsx`: Tests rendering of service cards and prefilled quotation triggers.
- `QuotationForm.test.tsx`: Tests accessibility labels, validation error display on empty submit, prop-based product preselection, and unconfigured fallback display.
- `ShareBrochure.test.tsx`: Tests rendering of share sheet triggers, WhatsApp share buttons, and clipboard copy fallback.

### End-to-End Tests (`e2e/`)
- `navigation.spec.ts`: Tests page load sanity, page titles, headings, and footer contact coordinates across desktop and mobile browsers.
- `quotation-flow.spec.ts`: Tests preselection via URL query parameters, form validation, and submission fallback notices.

---

## 4. Continuous Integration (CI)

The GitHub Actions workflow (`.github/workflows/ci.yml`) executes the entire verification pipeline on every push and pull request to `main`.
A build is considered failing if any single test fails or if TypeScript compilation reports any type errors.
