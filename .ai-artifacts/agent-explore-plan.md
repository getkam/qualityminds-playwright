# Test Automation Plan for QualityMinds Homepage

## Objective
Create automated test scenarios for the QualityMinds homepage (https://qualityminds.com/pl/) to verify key elements, functionality, and user interactions.

## Site Overview
QualityMinds is a digital transformation and software quality consulting company. The Polish version homepage contains:
- Navigation menu with company and services sections
- Hero section with main value proposition
- Multiple content sections showcasing services
- Contact forms
- Client testimonials
- Career section
- News/blog section
- Footer with links and social media

---

## 🔍 EXPLORATION FINDINGS (December 3, 2025)

### Page Load Information
- **Page Title**: "QualityMinds | Twój partner w zakresie jakości i transformacji oprogramowania"
- **WordPress Site**: Uses WordPress with jQuery Migrate 3.4.1
- **Cookie Plugin**: Complianz GDPR plugin for cookie consent management

### Console Errors Discovered
The following 404 errors occur on page load (font files missing):
- `/assets/Inter-Regular-d1598672.woff2`
- `/assets/Inter-Bold-b275913f.woff2`
- `/assets/Inter-Light-bb4a3ec3.woff2`
- `/assets/Inter-Black-9505c350.woff2`
- `/assets/Inter-Medium-76f810d3.woff2`
- `/assets/Inter-Light-ea0ab3a3.woff`
- `/assets/Inter-Regular-5ef7c03c.woff`
- `/assets/Inter-Bold-fe64ef80.woff`
- `/assets/Inter-Black-6a8222c9.woff`
- `/assets/Inter-Medium-a6099be4.woff`

> **Note**: These are known issues with missing Inter font files - should be excluded from test failure criteria.

---

## Test Scenarios to Automate

### 1. Cookie Consent Management
**Priority: High**

#### Discovered Elements:
- **Trigger Button**: `button "Zarządzanie zgodą"` (Manage Consent) - always visible at bottom of page
- **Dialog Title**: "Zarządzanie zgodą"
- **Dialog Text**: "My i dostawcy zewnętrzni używamy plików cookie..."
- **Buttons Available**:
  - `button "Zaakceptuj wszystko"` - Accept All
  - `button "Odmowa"` - Decline
  - `button "Wyświetl preferencje"` - View Preferences
  - `button "Zapisywanie preferencji"` - Save Preferences (in preferences view)
  - `button "Zamknij okienko"` - Close dialog (X button)

#### Preferences Panel:
- **Functional cookies**: "Zawsze aktywne" (Always active) - cannot be disabled
- **Statistics cookies**: `checkbox "Statystyki"` - checked by default, can be toggled

#### Test Scenarios:
- Verify cookie consent dialog can be opened via "Zarządzanie zgodą" button
- Test "Zaakceptuj wszystko" button closes dialog
- Test "Odmowa" button functionality
- Test "Wyświetl preferencje" expands options panel
- Verify Functional cookies section shows "Zawsze aktywne"
- Verify Statistics checkbox is toggleable
- Test "Zapisywanie preferencji" saves and closes dialog
- Verify cookie consent choices are persisted across page reloads

### 2. Navigation Menu Tests
**Priority: High**

#### Discovered Structure:
The navigation consists of two main sections:
1. **Company menu** (`navigation "Company menu"`)
2. **Services menu** (`navigation "Services menu"`)

#### Company Menu - Exact Links Discovered:
| Link Text | URL |
|-----------|-----|
| Portfolio | `/pl/wszystkie-uslugi/` |
| Referencje | `/pl/przeglad-referencji/` |
| Centrum wiadomości | `/pl/centrum-wiadomosci/` |
| Kariera | `/pl/praca-w-it/` |
| O nas | `/pl/o-nas/` |

#### Services Menu - Complete Structure:

**1. Testowanie i kontrola jakości** (`/pl/testowanie-i-kontrola-jakosci/`)
| Sub-item | URL |
|----------|-----|
| Testowanie i kontrola jakości – Przegląd | `/pl/testowanie-i-kontrola-jakosci/` |
| Zwinne testowanie | `/pl/testowanie-i-kontrola-jakosci/zwinne-testowanie/` |
| Zarządzanie testami | `/pl/testowanie-i-kontrola-jakosci/zarzadzanie-testami/` |
| Automatyzacja testów | `/pl/testowanie-i-kontrola-jakosci/automatyzacja-testow/` |
| Szkolenie TestMaster | `/pl/testowanie-i-kontrola-jakosci/szkolenie-testmaster/` |

**2. Inżynieria oprogramowania** (`/pl/inzynieria-oprogramowania/`)
| Sub-item | URL |
|----------|-----|
| Inżynieria oprogramowania – Przegląd | `/pl/inzynieria-oprogramowania/` |
| Zwinne tworzenie oprogramowania | `/pl/inzynieria-oprogramowania/zwinne-tworzenie-oprogramowania/` |
| Zrównoważony rozwój oprogramowania | `/pl/zrownowazony-rozwoj-oprogramowania/` |
| Inżynieria wymagań | `/pl/inzynieria-oprogramowania/inzynieria-wymagan/` |
| DevOps | `/pl/inzynieria-oprogramowania/devops-2/` |

**3. AI** (`/pl/sztuczna-inteligencja-i-nauka-o-danych/`)
| Sub-item | URL |
|----------|-----|
| AI – Przegląd | `/pl/sztuczna-inteligencja-i-nauka-o-danych/` |
| Strategia AI i inżynieria uczenia maszynowego | `/pl/sztuczna-inteligencja-i-nauka-o-danych/strategia-ai-i-inzynieria-uczenia-maszynowego/` |
| Testowanie sztucznej inteligencji | `/pl/sztuczna-inteligencja-i-nauka-o-danych/testowanie-sztucznej-inteligencji/` |
| Uczenie się i sztuczna inteligencja | `/pl/uczenie-sie-i-sztuczna-inteligencja/` |

**4. Zwinna organizacja** (`/pl/zwinny-rozwoj-organizacyjny/`)
| Sub-item | URL |
|----------|-----|
| Zwinna organizacja – Przegląd | `/pl/zwinny-rozwoj-organizacyjny/` |
| Zwinny coaching | `/pl/zwinny-coaching/` |
| Scrum Master | `/pl/scrum-master/` |
| Remote Team Master | `/pl/remote-team-master/` |

**5. Szkolenia firmowe** (`/pl/szkolenie-firmowe/`)
| Sub-item | URL |
|----------|-----|
| Szkolenie firmowe – Przegląd | `/pl/szkolenie-firmowe/` |
| Szkolenie dla trenerów Agile Learning | `/pl/szkolenie-trenerow-agile-learning/` |
| Zwinne uczenie się | `/pl/szkolenie-firmowe/zwinne-uczenie-sie-dla-osob-indywidualnych/` |
| Zwinne nauczanie | `/pl/szkolenie-firmowe/szczegoly-uslugi-szablon/` |

#### Contact Link:
- `link "Kontakt"` → `/pl/skontaktuj-sie-z-nami/`

### 3. Language Switcher
**Priority: Medium**

#### Discovered Elements:
- **Trigger**: `button "Language switcher"` with `img "Polski"` flag icon
- **Menu Type**: Dropdown menu that expands on click
- **Available Languages**:
  - Polski (current)
  - Angielski (English) - `menuitem "Angielski"` with flag icon
  - Niemiecki (German) - `menuitem "Niemiecki"` with flag icon

#### Test Scenarios:
- Test language switcher button opens dropdown
- Verify current language flag (Polski) is displayed
- Test selecting Angielski navigates to English version
- Test selecting Niemiecki navigates to German version
- Verify dropdown closes when clicking outside

### 4. Hero Section
**Priority: High**

#### Discovered Elements:
- **Main Heading (h1)**: "Jakość jako narzędzie skutecznej transformacji cyfrowej"
  - Contains `<strong>` with "Jakość jako narzędzie"
  - Contains `<mark>` with "skutecznej transformacji cyfrowej" (highlighted text)
- **Subtitle paragraph**: "Nasze holistyczne podejście, od inżynierii oprogramowania po sztuczną inteligencję, zwinność i uczenie się korporacyjne. Jesteśmy tu dla Ciebie."
- **CTA Button**: `link "Sprawdź nasze portfolio"` → `/pl/portfolio/`
- **Social Media Section**:
  - Label: "Śledź nas"
  - LinkedIn: `link "share on social media"` → `https://www.linkedin.com/company/qualityminds-gmbh/`
  - Facebook: `link "share on social media"` → `https://de-de.facebook.com/QualityMindsGmbH/`
  - Xing: `link "share on social media"` → `https://www.xing.com/pages/qualitymindsgmbh`

#### Test Scenarios:
- Verify main heading is visible and contains both regular and highlighted text
- Verify subtitle paragraph is present
- Test CTA button navigates to portfolio page
- Test all 3 social media links open correct external pages (in new tab)

### 5. Main Content Sections
**Priority: Medium**

#### Software Quality Section
**Discovered Elements:**
- **Section label**: "Holistycznie i indywidualnie"
- **Heading (h2)**: "Jakość oprogramowania i nie tylko: doradztwo w transformacji cyfrowej"
- **Description**: "Jako profesjonaliści w dziedzinie inżynierii oprogramowania i testowania..."
- **Email CTA**: `link "Czego się obawiasz?"` → `mailto:hello@qualityminds.de`
- **Image**: `img "Quality Minds AI Digital Transformation and AI Strategy"`

#### Awards Section (Wyróżnienia)
**Discovered Elements:**
- **Section label**: "Lifeblood z"
- **Heading (h2)**: "Wyróżnienia"
- **Description**: Quote about good IT products improving the world
- **Carousel**: 6 slides with navigation buttons
  - `button "Previous slide"` - disabled when at first slide
  - `button "Next slide"` - enabled for navigation
- **Awards (6 items)**:
  | Award | Link |
  |-------|------|
  | Top 100 Innovator | `https://www.top100.de` |
  | Mistrz wzrostu (Growth Champion) | `https://focusbusiness.de/wachstumschampions` |
  | Bavaria's Best 50 | `/de/mit-agilitaet-und-dem-richtigen-mindset-bayerns-best-50/` |
  | Siemens Digital Industries | `/de/qualityminds-wurde-mit-dem-siemens-digital-industries-factory-automation-supplier-award-2023-ausgezeichnet/` |
  | Cena Phoenix | `https://stadt.muenchen.de/infos/phoenix-preis-muenchen.html` |
  | certyfikat ISO | `/wp-content/uploads/2025/09/QMIND-2025-07-25-Zertifikat-ISO-27001-Nr50631_Quality-Minds_2025-1.pdf` |
- Each award has `link "Dowiedz się więcej"` (Learn more)

#### Digital Future Section (Dla cyfrowej przyszłości)
**Discovered Elements:**
- **Section label**: "Wszystko z jednego źródła"
- **Heading (h2)**: "Dla cyfrowej przyszłości"
- **Accordion Sections** (4 expandable items):
  | Section Title | Link Text | URL |
  |---------------|-----------|-----|
  | Kompleksowe doradztwo w zakresie transformacji cyfrowej | Portfolio | `/pl/wszystkie-uslugi/` |
  | Praktyczne rozwiązania dla projektów IT | Przykłady projektów | `/de/referenzen/` |
  | Inżynieria oprogramowania i sztuczna inteligencja | Inżynieria oprogramowania | `/de/software-engineering/` |
  | Zwinność na wszystkich poziomach | O zwinnym rozwoju organizacyjnym | `/de/agile-organisationsentwicklung/` |

> **Note**: Some accordion section links point to German (/de/) pages instead of Polish (/pl/) - potential localization issue to report.

### 6. Lead Generation Form (Homepage)
**Priority: High**

#### Discovered Elements:
- **Section label**: "Lista kontrolna wydajności oprogramowania"
- **Heading (h2)**: "5 punktów, dzięki którym zdajesz sobie sprawę, że masz problem z wydajnością oprogramowania"
- **Form**: `form "Formularz kontaktowy"`
- **Form Fields**:
  - `textbox "Twój e-mail"` - email input
  - `checkbox "Akceptuję politykę prywatności."` - privacy policy checkbox
  - Privacy policy link → `https://qualityminds.com/de/datenschutz/` (German page!)
- **Submit Button**: `button "Odbierz PDF teraz"`
- **Captcha**: Friendly Captcha widget in iframe
  - `checkbox "Jestem człowiekiem, Kliknij, aby zweryfikować czy nie jesteś robotem."`
  - Link to Friendly Captcha: `https://friendlycaptcha.com`
- **Image**: `img "5 Punkte an denen du Merkst, dass du ein Problem mit Software Effizienz hast."`

> **Note**: Privacy policy link points to German version - should be Polish `/pl/ochrona-danych/`

#### Test Scenarios:
- Test email input accepts valid email
- Verify email validation for invalid formats
- Test privacy policy checkbox is required
- Verify Friendly Captcha loads in iframe
- Test submit button functionality
- Verify form validation messages appear for empty required fields

### 7. Portfolio Cards Section
**Priority: Medium**

#### Discovered Elements:
- **Heading (h2)**: "Nasze portfolio" (with `<strong>` styling)
- **5 Portfolio Cards**:
  | Card Title | URL | Has Image |
  |------------|-----|-----------|
  | Testowanie i kontrola jakości | `/pl/testing-qa/` | ✅ |
  | Inżynieria oprogramowania | `/pl/software-engineering/` | ✅ |
  | AI | `/pl/ki-data-science/` | ✅ |
  | Zwinna organizacja | `/pl/agile-organisationsentwicklung/` | ❌ Missing |
  | Zwinne uczenie się | `/pl/betriebliche-weiterbildung/` | ✅ |

> **Note**: "Zwinna organizacja" card appears to be missing its image

#### Test Scenarios:
- Verify all 5 portfolio cards are displayed
- Verify each card has proper heading (h3)
- Verify 4 of 5 cards have images with alt text
- Test all card links navigate to correct pages
- Verify cards are clickable as full elements

### 8. Client Projects Section
**Priority: Medium**

#### Discovered Elements:
- **Section label**: "Nasze projekty"
- **Heading (h2)**: "Klienci, którzy nam zaufali"
- **References Link**: `link "Referencje"` → `/pl/przeglad-referencji/`
- **Carousel**: 2 slides (indicated by "1 / 2" and "2 / 2")
- **Case Studies**:
  | Case Study | URL | Description |
  |------------|-----|-------------|
  | Warsztaty DATEV AI zapowiadają nową erę w doradztwie podatkowym | `/de/case/datev-ki-werkstatt/` | DATEV AI workshop - experimental free platform for testing generative AI |
  | LETSSWAP24 rewolucjonizuje wymianę nośników ładunku | `/de/case/lets-swap-24/` | Digital community for logistics industry |

> **Note**: Both case study links point to German (/de/) pages instead of Polish

- **Images**: `img "Quality Minds Logistics and Compliance Letsswap24 Project"` present for LETSSWAP24

#### Test Scenarios:
- Verify heading and "Referencje" link
- Verify 2 case study cards are displayed in carousel
- Test case study links open correct pages
- Verify images load for case studies with images
- Test carousel navigation if available

### 9. Career Section
**Priority: Low**

#### Discovered Elements:
- **Section label**: "NOWA PRACA"
- **Heading (h2)**: "QualityMinds szuka właśnie CIEBIE"
- **Description paragraphs**:
  1. "Traktujemy się nawzajem jak równych sobie..." (mentions 10+ countries, 50% women)
  2. "Ważne dla naszego wspólnego sposobu myślenia są ambicja..."
- **CTA Link**: `link "Nasze oferty pracy w IT"` → `/pl/praca-w-it/`
- **Image**: `img "HR-Team im Büro Nürnberg"` (HR team in Nuremberg office)

#### Test Scenarios:
- Verify section heading and description
- Test career link navigates to job listings
- Verify career image loads with alt text

### 10. News Section
**Priority: Low**

#### Discovered Elements:
- **Heading (h2)**: "Warto wiedzieć"
- **News Hub Link**: `link "Aktualności"` → `/news-hub/` (relative URL)
- **News Articles (3)**:
  | Article Title | URL | Has Image |
  |---------------|-----|-----------|
  | AI Navigator 2024 – Jesteśmy jego częścią | `/pl/ai-navigator-2024-jestesmy-jego-czescia/` | ✅ "KI Navigator" |
  | Framework testów w Selenium z paralelizacją, obsługą wielu przeglądarek i internacjonalizacją – część 2 | `/pl/framework-testow-w-selenium-z-paralelizacja-obsluga-wielu-przegladarek-i-internacjonalizacja-czesc-2/` | ❌ |
  | Thoughts on using ChatGPT as a software developer | `/pl/thoughts-on-using-chatgpt-as-a-software-developer/` | ❌ |

- Each article has `link "dowiedzieć się więcej"` (learn more)

> **Note**: Article 3 title is in English, not Polish - mixed language content

#### Test Scenarios:
- Verify "Warto wiedzieć" heading
- Test "Aktualności" link to news hub
- Verify 3 news articles are displayed
- Test individual "dowiedzieć się więcej" links
- Verify images load where present

### 11. Footer
**Priority: Medium**

#### Discovered Elements:
- **Site Logo**: `link "Site logo"` → `/pl/` (homepage)
- **Footer Menu** (`navigation "Footer menu"`):
  | Link Text | URL |
  |-----------|-----|
  | Ochrona danych | `/pl/ochrona-danych/` |
  | Imprint | `/pl/?page_id=62224` |
  | Skontaktuj się z nami | `/pl/skontaktuj-sie-z-nami/` |
  | System zgłaszania nieprawidłowości | `/pl/nadruk/` |

- **Social Media Links** (`navigation "Social media links"`):
  - All use generic accessible name: `link "share on social media"`
  - LinkedIn: `https://www.linkedin.com/company/qualityminds-gmbh/`
  - Facebook: `https://de-de.facebook.com/QualityMindsGmbH/`
  - Xing: `https://www.xing.com/pages/qualitymindsgmbh`

- **Back to Top**: `link "Back to top"` → `#top` with text "↑"

> **Note**: Imprint link uses page_id query parameter instead of slug - may be unstable
> **Note**: Social media links have generic accessible names - could be improved for accessibility

#### Test Scenarios:
- Verify logo links to homepage
- Test all 4 footer menu links
- Test all 3 social media links open correct external pages
- Test "Back to top" scrolls to top of page

### 12. Contact Page (/pl/skontaktuj-sie-z-nami/)
**Priority: High**

#### Page Structure Discovered:
- **Page Title**: "Skontaktuj się z nami - QualityMinds"

#### Hero Section:
- **Heading (h1)**: "Kto wykona pierwszy krok?"
- **Subheading (h3)**: "Twoja trampolina do przyszłości transformacji jest gotowa."

#### Office Locations Section:
- **Heading (h2)**: "Nasze lokalizacje"
- **4 Office Locations**:

| Office | Address | Email | Phone |
|--------|---------|-------|-------|
| Biuro Norymberga | Muggenhofer Straße 105, Budynek D3, 4 piętro, 90429 Norymberga, Niemcy | hello@qualityminds.de | +49 911 660 73 20 11 |
| Biuro Monachium | Chiemgaustraße 116, 3 piętro, 81549 Monachium, Niemcy | hello@qualityminds.de | +49 89 901 437 71 |
| Biuro Berlin | Saarbrücker Straße 19, 4 piętro, 10405 Berlin, Niemcy | hello@qualityminds.de | +49 911 660 73 20 11 (Fax: +49 911 660 73 20 22) |
| Biuro Warszawa | ul. Zgoda 3/8, 00-018 Warszawa, Polska | hello@qualityminds.pl | +48 22 290 23 90 |

#### Contact Persons Section:
- **Heading (h2)**: "Jesteśmy tu dla Ciebie"
- **Service Questions**:
  - Susanne Ambros (Kierownik ds. relacji)
  - Email: susanne.ambros@qualityminds.de
  - Phone: +49 176 31491938
- **Career Questions**:
  - Anthi Touliatou-Schindler (Kierownik działu HR)
  - Email: anthi.touliatou-schindler@qualityminds.de
  - Phone: +49 175 8219117

#### Contact Form:
- **Heading (h2)**: "Gdzie pomysły spotykają się z innowacją!"
- **Description**: "Chcemy wiedzieć, co Cię porusza..."
- **Form Fields**:
  | Field | Type | Required |
  |-------|------|----------|
  | Imię* | textbox | Yes |
  | Nazwisko* | textbox | Yes |
  | E-mail* | textbox | Yes |
  | Telefon | textbox | No |
  | Firma | textbox | No |
  | Wiadomość | textbox | No |
  | Privacy checkbox | checkbox | Yes |

- **Privacy Policy Link**: `/pl/ochrona-danych/` (correct Polish version!)
- **Submit Button**: `button "Wysyłanie"` (disabled by default)
- **Captcha**: Friendly Captcha widget (same as homepage)

> **Note**: Submit button is disabled until form validation passes

#### Test Scenarios:
- Verify all office information is displayed correctly
- Test all mailto: and tel: links
- Test contact form field validation
- Verify submit button enables when required fields are filled
- Test form submission
- Verify Friendly Captcha integration

### 13. Page Performance and Accessibility
**Priority: Medium**

#### Known Issues Discovered:
- **Missing Font Files**: 10 Inter font files return 404 errors (woff2 and woff formats)
- **Mixed Language Content**: Some links/content in Polish pages point to German (/de/) URLs
- **Social Media Links**: Generic accessible names "share on social media" could be more descriptive
- **Image Alt Text**: Most images have alt text, some are generic (e.g., "Quality Minds Software Engineering...")

#### Test Scenarios:
- Verify page load time is acceptable (exclude known 404s)
- Check for console errors (filter out known font 404s)
- Verify all images have alt text
- Test keyboard navigation through all interactive elements
- Verify proper heading hierarchy (h1 → h2 → h3)
- Check color contrast ratios
- Test screen reader compatibility for critical elements

### 14. Responsive Design
**Priority: Medium**
- Test homepage on desktop viewport (1920x1080)
- Test homepage on tablet viewport (768x1024)
- Test homepage on mobile viewport (375x667)
- Verify mobile menu functionality
- Verify touch interactions work properly

### 15. Browser Compatibility
**Priority: Low**
- Test on Chromium-based browsers
- Test on Firefox
- Test on WebKit (Safari)

---

## 🐛 DISCOVERED ISSUES TO REPORT

### High Priority
1. **Missing Font Files**: All Inter font variants return 404 - affects typography
2. **Form Privacy Link Wrong Language**: Homepage lead gen form privacy policy links to German page (`/de/datenschutz/`) instead of Polish (`/pl/ochrona-danych/`)

### Medium Priority
3. **Case Study Links to German Pages**: Both case studies in "Klienci, którzy nam zaufali" link to `/de/case/` instead of Polish versions
4. **Accordion Section Links**: Some "Digital Future" accordion links point to German pages
5. **Imprint URL Uses page_id**: Footer Imprint link uses `?page_id=62224` instead of a proper slug

### Low Priority
6. **Missing Image**: "Zwinna organizacja" portfolio card appears to be missing its image
7. **Mixed Language Content**: One news article title is in English ("Thoughts on using ChatGPT...")
8. **Generic Social Media Link Names**: All social media links use same accessible name "share on social media"

---

## Test Data Requirements
- Valid email addresses for form testing
- Invalid email formats for validation testing
- Test accounts if authentication is added in future

## Environment Setup
- Base URL: https://qualityminds.com/pl/
- Browser: Chromium, Firefox, WebKit
- Viewport sizes: Desktop (1920x1080), Tablet (768x1024), Mobile (375x667)
- Timeouts: Default 30s, navigation 60s

## Reporting Requirements
- Screenshot on test failure
- Video recording for critical user flows
- HTML report with test results
- Performance metrics for page loads
- Accessibility audit results

## Maintenance Notes
- Cookie consent should be handled at the beginning of each test suite
- Consider creating helper functions for common interactions:
  - Accept cookies
  - Navigate to sections
  - Fill forms
  - Handle dropdowns
- Use page object model for maintainability
- Keep selectors flexible (prefer role-based selectors over CSS)
- Handle dynamic content loading with proper waits

## Recommended Playwright Selectors

### Role-Based Selectors (Preferred)
```typescript
// Navigation
page.getByRole('navigation', { name: 'Company menu' })
page.getByRole('navigation', { name: 'Services menu' })
page.getByRole('navigation', { name: 'Footer menu' })

// Buttons
page.getByRole('button', { name: 'Language switcher' })
page.getByRole('button', { name: 'Zarządzanie zgodą' })
page.getByRole('button', { name: 'Zaakceptuj wszystko' })
page.getByRole('button', { name: 'Wyświetl preferencje' })
page.getByRole('button', { name: 'Next slide' })
page.getByRole('button', { name: 'Previous slide' })

// Links
page.getByRole('link', { name: 'Homepage' })
page.getByRole('link', { name: 'Portfolio' })
page.getByRole('link', { name: 'Kontakt' })
page.getByRole('link', { name: 'Sprawdź nasze portfolio' })

// Forms
page.getByRole('form', { name: 'Formularz kontaktowy' })
page.getByRole('textbox', { name: 'Twój e-mail' })
page.getByRole('textbox', { name: 'Imię*' })
page.getByRole('checkbox', { name: /politykę prywatności/ })

// Headings
page.getByRole('heading', { level: 1 })
page.getByRole('heading', { name: 'Nasze portfolio' })

// Menu items (language switcher)
page.getByRole('menuitem', { name: 'Angielski' })
page.getByRole('menuitem', { name: 'Niemiecki' })
```

### Dialog Handling
```typescript
// Cookie consent dialog
page.getByRole('dialog', { name: 'Zarządzanie zgodą' })
```

## Success Criteria
- All navigation links work correctly
- Forms validate input properly
- Page loads without critical errors (excluding known 404s for fonts)
- All interactive elements are functional
- Responsive design works across viewports
- Accessibility standards are met
- Cookie consent properly manages preferences
- Language switcher correctly switches between PL/EN/DE versions
