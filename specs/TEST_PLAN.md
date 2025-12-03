# Test Plan: QualityMinds Website Automation

| Document ID | QM-AUTO-TP-001 |
| :--- | :--- |
| **Project** | QualityMinds Website Automation |
| **Version** | 1.0 |
| **Status** | Draft |
| **Date** | December 3, 2025 |
| **Author** | QA Automation Team |

---

## 1. Document Control

### 1.1 Revision History
| Version | Date | Author | Description of Changes |
| :--- | :--- | :--- | :--- |
| 0.1 | 2025-12-03 | QA Team | Initial Draft based on exploration findings |
| 1.0 | 2025-12-03 | QA Team | Formalized corporate test plan structure |

### 1.2 Approvals
| Name | Role | Date | Signature |
| :--- | :--- | :--- | :--- |
| [Name] | QA Lead | | |
| [Name] | Project Manager | | |

---

## 2. Introduction

### 2.1 Purpose
The purpose of this Test Plan is to define the strategy, scope, and approach for the automated testing of the QualityMinds Polish website (https://qualityminds.com/pl/). This document serves as a blueprint for the QA automation activities using the Playwright framework.

### 2.2 Objectives
*   Ensure the functional integrity of critical user journeys (Navigation, Contact, Lead Gen).
*   Verify UI consistency and responsiveness across supported devices and browsers.
*   Validate compliance with GDPR (Cookie Consent) requirements.
*   Establish a regression safety net for future website updates.

### 2.3 Scope
**In-Scope:**
*   **URL:** https://qualityminds.com/pl/ and associated sub-pages.
*   **Functional Areas:** Navigation, Cookie Consent, Hero Section, Content Sections, Forms, Footer, Contact Page.
*   **Browsers:** Chromium, Firefox, WebKit.
*   **Viewports:** Desktop (1920x1080), Tablet (768x1024), Mobile (375x667).

**Out-of-Scope:**
*   Performance/Load testing (functional load only).
*   Security penetration testing.
*   Third-party integrations deep-dive (e.g., validating the backend of the Captcha service).
*   Content verification of external links (only link validity is checked).
*   German (`/de/`) and English (`/en/`) sub-sites, except for language switching functionality.

---

## 3. Test Strategy

### 3.1 Automation Framework
*   **Tool:** Playwright (TypeScript).
*   **Pattern:** Page Object Model (POM) for maintainability and reusability.
*   **Assertions:** Standard Playwright assertions (`expect`).
*   **Reporting:** HTML Reporter, CI/CD integration artifacts.

### 3.2 Test Environment
| Environment | URL | Description |
| :--- | :--- | :--- |
| **Production** | https://qualityminds.com/pl/ | Live environment (Read-only tests, safe form submissions) |

### 3.3 Browser & Device Coverage
Testing will be performed on the following configurations:
*   **Desktop:** Chrome (Latest), Firefox (Latest), Safari (Webkit).
*   **Mobile Emulation:** iPhone 12/13 (iOS Safari), Pixel 5 (Android Chrome).

---

## 4. Test Scenarios

The following test suites have been identified based on risk and priority.

### 4.1 Suite: Cookie Consent Management (Priority: Critical)

> ⚠️ **Precondition:** All tests in this suite **MUST** run in a fresh browser context (no stored cookies) or incognito mode. In Playwright, use `browser.newContext()` without a saved `storageState` to ensure the cookie banner appears on every test run.

| ID | Scenario | Expected Result | Status |
| :--- | :--- | :--- | :--- |
| CCM-001 | Cookie consent dialog appears on first visit | Dialog with "Zaakceptuj wszystko", "Odmowa", "Wyświetl preferencje" buttons visible. | ✅ Automated |
| CCM-002 | Accept all cookies | Dialog closes; "Zarządzanie zgodą" button appears at bottom. | ✅ Automated |
| CCM-003 | Decline cookies | Dialog closes; "Odmowa" action is recorded. | |
| CCM-004 | View preferences | "Wyświetl preferencje" expands detailed options (Funkcjonalne, Statystyki). | ✅ Automated |
| CCM-005 | Verify Functional cookies | "Zawsze aktywne" label is visible and disabled. | |
| CCM-006 | Toggle Statistics cookies | Checkbox is interactive (toggleable). | |
| CCM-007 | Save preferences | "Zapisywanie preferencji" saves state and closes dialog. | |
| CCM-008 | Persistence | Cookie choices persist after page reload. | |
| CCM-009 | Reopen consent dialog | After accepting, "Zarządzanie zgodą" button reopens dialog. | |

### 4.2 Suite: Navigation Menu (Priority: High)
| ID | Scenario | Expected Result |
| :--- | :--- | :--- |
| NAV-001 | Company Menu Links | Verify navigation to: Portfolio, Referencje, Centrum wiadomości, Kariera, O nas. |
| NAV-002 | Services Menu Structure | Verify presence of main categories: Testowanie, Inżynieria, AI, Zwinna organizacja, Szkolenia. |
| NAV-003 | Services Sub-menus | Verify visibility of sub-items (e.g., 5 items under Testowanie). |
| NAV-004 | Contact Link | Navigates correctly to `/pl/skontaktuj-sie-z-nami/`. |
| NAV-005 | Homepage Logo | Navigates back to `/pl/`. |

### 4.3 Suite: Language Switcher (Priority: Medium)
| ID | Scenario | Expected Result |
| :--- | :--- | :--- |
| LNG-001 | Open Dropdown | Language menu expands on click. |
| LNG-002 | Verify Current Language | "Polski" flag is displayed. |
| LNG-003 | Switch to English | Navigates to English version of the site. |
| LNG-004 | Switch to German | Navigates to German version of the site. |
| LNG-005 | Close Dropdown | Menu closes when clicking outside. |

### 4.4 Suite: Hero & Content Sections (Priority: Medium)
| ID | Scenario | Expected Result |
| :--- | :--- | :--- |
| CNT-001 | Hero Heading Visibility | H1 "Jakość jako narzędzie..." is visible. |
| CNT-002 | Portfolio CTA | Button links to `/pl/portfolio/`. |
| CNT-003 | Social Media Links | LinkedIn, Facebook, Xing links open correct URLs. |
| CNT-004 | Awards Carousel | Carousel advances (Next/Prev); 6 awards displayed. |
| CNT-005 | Digital Future Accordion | All 4 sections expand/collapse; content is visible. |
| CNT-006 | Portfolio Cards | 5 cards displayed; links navigate to service pages. |
| CNT-007 | Client Projects | "Klienci, którzy nam zaufali" section displays DATEV/LETSSWAP24. |

### 4.5 Suite: Forms (Priority: High)
| ID | Scenario | Expected Result |
| :--- | :--- | :--- |
| FRM-001 | Homepage Lead Gen - Visibility | Form is visible with Email input and Privacy checkbox. |
| FRM-002 | Homepage Lead Gen - Captcha | Friendly Captcha widget loads in iframe. |
| FRM-003 | Homepage Lead Gen - Submit | "Odbierz PDF teraz" button is interactive. |
| FRM-004 | Contact Page - Required Fields | Validation triggers for Imię, Nazwisko, E-mail. |
| FRM-005 | Contact Page - Optional Fields | Telefon, Firma, Wiadomość accept input. |
| FRM-006 | Contact Page - Privacy Link | Links to `/pl/ochrona-danych/`. |
| FRM-007 | Contact Page - Submit State | Button disabled until validation passes. |

### 4.6 Suite: Footer (Priority: Low)
| ID | Scenario | Expected Result |
| :--- | :--- | :--- |
| FTR-001 | Footer Links | Verify links: Ochrona danych, Imprint, Kontakt, Whistleblower. |
| FTR-002 | Back to Top | Page scrolls to top upon click. |

### 4.7 Suite: Contact Page Details (Priority: High)
| ID | Scenario | Expected Result |
| :--- | :--- | :--- |
| CPG-001 | Office Locations | 4 offices (Nuremberg, Munich, Berlin, Warsaw) displayed. |
| CPG-002 | Contact Methods | `mailto:` and `tel:` links are correctly formatted. |
| CPG-003 | Contact Persons | Info for Susanne Ambros & Anthi Touliatou-Schindler is visible. |

---

## 5. Entry and Exit Criteria

### 5.1 Entry Criteria
*   Test environment (Production) is accessible.
*   Playwright framework is installed and configured.
*   Test data (valid/invalid emails) is prepared.

### 5.2 Exit Criteria
*   100% of High Priority test cases executed.
*   Pass rate > 95% for High Priority cases.
*   No Critical or Blocker defects open.
*   Test Report generated and reviewed.

---

## 6. Risks and Assumptions

### 6.1 Risks
*   **Captcha:** Automated testing of Captcha (Friendly Captcha) may be blocked or require mocking.
*   **Third-Party Content:** Changes to external platforms (LinkedIn, Facebook) may break link validation.
*   **Production Data:** Form submissions in production must be handled carefully to avoid spamming sales teams.

### 6.2 Assumptions
*   The UI structure (DOM) remains stable during the testing phase.
*   Known issues (e.g., Font 404s) are accepted and will not block testing.

---

## 7. Defect Management

Defects will be categorized as follows:
*   **Critical:** System crash, data loss, or blocked critical functionality (e.g., Contact Form broken).
*   **Major:** Major functionality impaired, no workaround (e.g., Navigation broken).
*   **Minor:** Minor functionality impaired, workaround available (e.g., UI alignment).
*   **Trivial:** Cosmetic issues (e.g., Typos, Font 404s).

---

## 8. Deliverables

*   **Test Execution Report:** HTML report generated by Playwright.
*   **Defect Report:** List of identified bugs (if any).
*   **Screenshots/Videos:** Artifacts for failed test cases.
*   **Source Code:** Updated Playwright test scripts in the repository.

---

## 9. Known Issues (Baseline)

The following issues are known and excluded from failure criteria for this plan:
1.  **Font 404s:** Inter font files return 404 errors.
2.  **Localization:** Some Polish page links point to `/de/` URLs.
3.  **Missing Assets:** "Zwinna organizacja" portfolio card missing image.

