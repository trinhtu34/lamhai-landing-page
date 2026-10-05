# Lam Hai: corporate website study

The accepted corporate design is the main site at `website/index.html`.
The user approved replacing the old design on 2026-10-03. The previous HTML,
CSS and JavaScript were removed; the accepted preview was promoted to
`index.html`, `styles.css` and `script.js`.

## Evidence

The four live homepages were inspected in Chromium at 1440 x 1000 on
2026-10-03. Viewport screenshots are stored beside this document.

| Reference | Transferable decision | Fit for Lam Hai | Do not copy |
| --- | --- | --- | --- |
| https://www.cmc.com.vn/ | White masthead, clear business categories, image-led opening, concise section headings | Visitors need to identify the company and its services quickly | Gotham font files, CMC branding, imagery, claims, exact composition |
| https://fpt.com/vi | Actual activities and people substantiate the company story; ordinary reading sizes | Lam Hai's source documents include real conferences and consulting work | FPT news, statistics, photographs, stock ticker, investor navigation |
| https://www.itd.com.vn/ | Be Vietnam Pro typography and business-oriented navigation | Good Vietnamese text rendering and a familiar corporate reading rhythm | ITD's decorative globe, metrics, orange accents and branding |
| https://www.elcom.com.vn/ | Separate company profile, fields, products and partners | Keeps the company's identity distinct from a product dashboard | Illustration style, gradients, public-company figures and login |

UIZZE was also opened, but the user's requested direct company references
are the evidence for this direction. CMC and ITD returned errors through
the text fetcher; both loaded successfully in Chromium with HTTP 200.

## Design Contract

| Field | Decision |
| --- | --- |
| Screen job | Establish who Lam Hai is, what it can provide, and how to contact it |
| Primary user and action | A prospective institutional or business customer reviews services and downloads the company profile or contacts the company |
| Content hierarchy | Company identity, two business fields, software solutions, documented activities, partners and contact |
| Navigation and controls | Six local anchors, mobile menu, three solution tabs, image viewer, working PDF links |
| Visual language | Locally hosted Be Vietnam Pro; 15px body, 26px section headings, 44px company title on desktop; white surfaces, blue and green from the actual logo; full-width photographic opening; no section cards or floating shadows |
| Required states | Mobile menu open/closed; tab selected/unselected; viewer open/closed; keyboard focus; no network dependency for page assets |
| Responsive behavior | Compact mobile masthead, two-column factual strip, horizontally scrollable tabs, image/text sections reflow without truncation; 320, 390, 768, 1024, 1440 and 1920px checks |
| Evidence used | The four company homepages above and both user-provided PDF profiles |
| Forbidden defaults | Invented company statistics, generic slogan headings, oversized section titles, artificial headquarters imagery, repeated matrix tiles, dashboard presentation, decorative gradients |
| Acceptance criteria | Real logo and original activity photographs visible; all anchors and downloads resolve; all tab panels work; keyboard can close menu/viewer; no horizontal document overflow or missing images; previous version still opens |

## Source Assets

- Logo: 2026 profile, page 1.
- Seminar photograph: 2026 profile, page 47, image 4.
- Technology demonstration: 2026 profile, page 45, image 4.
- OCOP conference and product assessment: 2026 profile, page 48.
- Team photograph: 2026 profile, page 47, image 3.
- Screenshots of software: Vietnamese technology profile and existing extracted assets.
- Both original PDFs are copied into the site's assets for portable downloads.
- Be Vietnam Pro is supplied under the SIL Open Font License; license included.
- Lucide is locally hosted, pinned to version 0.468.0.

No images or text belonging to the four reference companies are used in the site.

## Verification

Chromium workflow checks passed at 320, 390, 768, 1024, 1440 and 1920px:
no horizontal page overflow, loaded local fonts, resolved anchors and local
assets, a hint of the next section in the first viewport, mobile menu including
Escape, all three solution tabs including arrow/Home keys, photo and certificate
viewers including focus return, and contact navigation at the end of the page.
No browser JavaScript errors were observed. These checks were first performed
on the preview, which has since been promoted to the main index page.

Desktop and mobile screenshots were visually reviewed. The two field photographs
have a shared aspect ratio so their headlines align despite different source sizes.
