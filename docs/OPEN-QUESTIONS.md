# Open Questions and Unresolved Business Decisions

**Project:** Lifestyle Elevators Company Website  
**Date:** 14 October 2026  
**Status:** Provisional defaults established as per PRD guidance; pending client confirmation.

---

## 1. Company Brand Name Inconsistency

* **Issue:**  
  On page 3 of the supplied product brochure (*Life style brochure n.pdf*), the copy states:
  > *"Being one of the leading elevators companies in India; Kwality Key Elevators understands the importance of durability of product we are delivering..."*  
  All other pages of the brochure, the brochure cover, the company logo, and the Website PRD prominently specify **"Lifestyle Elevators"**.
* **Impact:** Legal identity, copyright notices, metadata, and customer branding consistency.
* **Provisional Decision (PRD Mandate):**  
  Use **"Lifestyle Elevators"** as the primary public brand name throughout all website copy, metadata, and structured data, as specified in the PRD.
* **Action Required from Client:**  
  Confirm whether "Kwality Key Elevators" was a legacy trading name, a sister concern, or an accidental copy-paste in the brochure, and whether any public mention should be retained.

---

## 2. Official WhatsApp Enquiry Number Confirmation

* **Issue:**  
  The brochure publishes two telephone numbers:
  1. `+91 7795551118`
  2. `+91 9986028416`  
  Neither the brochure nor the PRD identifies which of these numbers is registered on WhatsApp Business and authorized to receive customer quotation leads.
* **Impact:** Sending customer leads to an unregistered or personal number would break the conversion funnel or cause customer frustration.
* **Provisional Decision (PRD Mandate):**  
  Do not guess or hardcode an unverified number. The WhatsApp integration will be strictly driven by environment configuration (`NEXT_PUBLIC_WHATSAPP_NUMBER` and `company.ts`).  
  - If the environment variable is unset, empty, or set to placeholder (e.g. `UNCONFIGURED`), the website disables direct WhatsApp submission, displays an informative fallback notice in development, and offers direct phone dialing (`tel:`) and email links (`mailto:`) along with a copyable enquiry text.
* **Action Required from Client:**  
  Confirm which telephone number is the official WhatsApp Business account for quotation leads.

---

## 3. Official High-Resolution Logo & Favicon Assets

* **Issue:**  
  The brochure provided a high-resolution raster graphic of the logo (`Lifestyle ELEVATORS` in golden arch with blue serif and sans-serif lettering). An SVG vector graphic is ideal for web scalability and dark/light contrast.
* **Provisional Decision:**  
  Use the extracted high-resolution transparent PNG version for header, footer, and Open Graph cards. Provide crisp, accessible SVG fallback/markup.
* **Action Required from Client:**  
  Provide master vector (.svg / .ai / .eps) files if available.

---

## 4. Technical Specifications & Dimension Tables Verification

* **Issue:**  
  Page 8 of the brochure includes detailed technical dimensions (lift well width/depth, car clear cabin dimensions, entrance opening, pit depth, overhead, and machine-room depth/width by speed).  
  The PRD Section 6 explicitly states:
  > *"These are technical details and should be shown online only if the company wants them published and a qualified person verifies that the figures are current and applicable."*
* **Provisional Decision:**  
  Display the standard dimension and measurement tables on the Products / Technical Specifications section with a clear disclaimer: *"Standard planning reference only. Final hoistway, pit, and overhead specifications vary based on site civil survey and local lift codes."*
* **Action Required from Client:**  
  Sign-off on whether these dimension tables should be publicly displayed or gated behind a technical consultation request.

---

## 5. Warranties, Certifications, and SLA Claims

* **Issue:**  
  The brochure mentions dynamic professionals, durability post-check-up reports, and inspection at every stage, but does not provide ISO certification numbers, specific warranty durations (e.g. 1 year vs 5 years), or AMC response time guarantees (e.g., 2-hour breakdown turnaround).
* **Provisional Decision:**  
  Strict adherence to PRD Section 1: Never invent years of experience, warranty terms, ISO numbers, or pricing. Frame quality around stated brochure practices without making legally binding unsupported guarantees.
* **Action Required from Client:**  
  Supply any verified certifications (e.g., ISO 9001, CE, BIS standards) if desired on the website.
