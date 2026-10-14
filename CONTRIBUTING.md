# Contributing to Lifestyle Elevators

Thank you for contributing to the Lifestyle Elevators company website. To maintain high code quality and security standards, all contributors must follow this workflow.

---

## 1. Development Workflow

```
Feature branch (feat/branch-name or fix/branch-name)
    │
    ▼
Make code modifications
    │
    ▼
npm run format (Prettier)
    │
    ▼
npm run lint (ESLint)
    │
    ▼
npm run typecheck (TypeScript Strict)
    │
    ▼
npm run test (Vitest Unit & Component Tests)
    │
    ▼
npm run build (Next.js Production Build)
    │
    ▼
Open Pull Request -> Automated GitHub Actions CI -> Code Review -> Merge
```

---

## 2. Mandatory Rules

1. **Never hardcode contact details:** All phone numbers, emails, addresses, and brochure details must be referenced from `src/config/company.ts`.
2. **Never commit real secrets:** Keep `.env.local` strictly private. Document new environment variables in `.env.example`.
3. **Never disable TypeScript or ESLint rules** to mask genuine type or lint errors without architectural sign-off.
4. **All new UI features must include unit or component tests.**
5. **PRD Compliance:** Do not make unsupported guarantees or invent business claims. If brochure information is ambiguous, log it in `docs/OPEN-QUESTIONS.md`.
