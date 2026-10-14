# Security & Threat Modeling Policy

**Project:** Lifestyle Elevators Company Website  
**Version:** 1.0.0  
**Effective Date:** 14 October 2026

---

## 1. Threat Modeling & Scope

The Lifestyle Elevators website serves as a public corporate catalog and lead generation platform. The architecture deliberately operates without a database or user authentication for Version 1, drastically reducing the attack surface.

| Threat Category | Risk Level | Mitigation Strategy |
| :--- | :--- | :--- |
| **Credential & Secret Exposure** | Critical | No private API keys or database connection strings exist in the codebase. All runtime configuration is sanitized through `.env.example`. Public variables strictly use the `NEXT_PUBLIC_` prefix and contain only non-sensitive flags. |
| **Cross-Site Scripting (XSS)** | High | React's default JSX string escaping prevents direct DOM script injection. No usage of `dangerouslySetInnerHTML`. Zod validates and trims form strings. |
| **Clickjacking** | Medium | `next.config.ts` injects `X-Frame-Options: DENY` on all application routes. |
| **MIME Sniffing** | Medium | `X-Content-Type-Options: nosniff` header enforced across all routes. |
| **Data Harvesting & Privacy** | Medium | The website collects minimal lead data (name, phone, building type). No personal data is written to local storage, cookies, or transmitted to third-party ad networks. |
| **Deceptive Lead Submission** | Medium | WhatsApp Business number configuration guard blocks unverified number redirection, preventing phishing or misdirected customer inquiries. |

---

## 2. HTTP Security Headers

Configured directly in `next.config.ts`:

```typescript
{
  key: 'X-Frame-Options',
  value: 'DENY',
},
{
  key: 'X-Content-Type-Options',
  value: 'nosniff',
},
{
  key: 'Referrer-Policy',
  value: 'strict-origin-when-cross-origin',
},
{
  key: 'Permissions-Policy',
  value: 'camera=(), microphone=(), geolocation=()',
},
{
  key: 'Strict-Transport-Security',
  value: 'max-age=63072000; includeSubDomains; preload',
}
```

---

## 3. Environment Variable Safety

- `.env.example` is committed to git as a documentation blueprint.
- Real `.env` and `.env.local` files are excluded in `.gitignore`.
- Production environment variables must be managed securely through Vercel or cloud provider dashboard secret vaults.

---

## 4. Third-Party Dependency Security

- Dependency auditing is performed via `npm audit`.
- Sub-dependencies of developer build tooling (e.g. `tinypool`, `braces` in test bundlers) do not execute inside client browser bundles.
- Next.js production builds only ship minified, tree-shaken static code.

---

## 5. Known Limitations & Future Roadmap

- In Version 1, inquiries are handed off directly to WhatsApp or direct phone calls. No audit logging of customer submissions is retained.
- When an administrative lead dashboard is introduced in future releases (Phase 2/3), enterprise authentication (NextAuth/OAuth 2.0 with PKCE), CSRF protection, and role-based access control (RBAC) must be implemented.
