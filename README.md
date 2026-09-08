# Pearl Dental — Landing Page

Campaign landing page for **Pearl Dental**, Anna Nagar East, Chennai — Dr. Egammai Manikandan,
Implantologist.

Next.js 16 (App Router, Turbopack) · React 19 · Tailwind 3 · TypeScript.
Clinic details, dates and campaign angles live in [PROJECT-BRIEF.md](PROJECT-BRIEF.md).

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

Copy [`.env.example`](.env.example) to `.env.local` before deploying — see **Leads** and
**Indexing** below.

## Brand

The design is taken from the clinic's own material, not invented:

| Source | What it gave us |
|---|---|
| `logo.jpg` (client artwork) | `#006C78` deep teal, `#00A8B4` bright teal, the wordmark, the strapline "Advanced Dental Care" |
| The clinic's Facebook page | Confirmed teal/white identity, the service list, "specialists in no bone and complex cases" |
| `public/hero.jpg` (reception) | `#123039` petrol, used for the one dark band |

Tokens are defined in [`tailwind.config.ts`](tailwind.config.ts) and
[`src/app/globals.css`](src/app/globals.css). Type is **Newsreader** for headings
(editorial, medical-publication register) and **Inter** for everything functional.

Colour is deliberately restrained: white and near-white grounds, `teal-700` for anything
interactive, `teal-500` for small accents only. No gradients, no glass, no glow — hierarchy
comes from type, spacing, hairlines and photography.

### Logo

`public/logo-pearl-dental.png` and `public/logo-mark.png` are the client's `logo.jpg` with the
white ground keyed to transparency and the margin trimmed to the ink bounds. **The artwork
itself is unmodified** — composited back onto white it matches the original to a mean
per-channel difference of 0.8/255.

Both files contain near-black type, so the lockup is only ever placed on white or a light
tint. That is why the footer is light rather than dark.
[`src/components/Logo.tsx`](src/components/Logo.tsx) sizes it through a ratio-locked box.

## Page structure

Each section has a different composition on purpose — the previous build repeated
*heading → paragraph → three cards → CTA* down the whole page, which is what made it read
as generated.

| # | Section | Component | Composition |
|---|---|---|---|
| 01 | Header | `Header.tsx` | Sticky, white, logo + nav + call + CTA |
| 02 | Hero + credibility row | `HeroSection.tsx` | Asymmetric two-column, real portrait, `#top` |
| 03 | Why Pearl Dental | `AboutSection.tsx` | Sticky heading, numbered hairline list, `#why` |
| 04 | The clinic | `ClinicBand.tsx` | Full-bleed reception photograph, `#clinic` |
| 05 | The dentist | `DoctorProfile.tsx` | Editorial, with award photographs as evidence, `#doctor` |
| 06 | Under one roof | `TechnologySection.tsx` | The one dark petrol band, three-column, `#technology` |
| 07 | Treatments | `TreatmentsSection.tsx` | Tabular rows, price set right, `#treatments` |
| 08 | Clinical cases | `ClinicalCases.tsx` | Before/after photography behind a reveal, `#cases` |
| 09 | Patient journey | `JourneySection.tsx` | Five steps on a connecting rule, `#journey` |
| 10 | Reviews | `ReviewsLink.tsx` | Pointer to the real Google listing |
| 11 | FAQ | `FAQSection.tsx` | Native `<details>`, + FAQPage schema, `#faq` |
| 12 | Final CTA | `FinalCTA.tsx` | Three routes in — form, phone, WhatsApp, `#book` |
| 13 | Footer | `Footer.tsx` | Light, with map, `#visit` |

`#technology` is the destination for three of the five campaign angles in the brief. In the
previous build the component existed but was never mounted, so that anchor did not exist in
the document and those ads landed at the top of the page.

## Architecture

[`src/app/page.tsx`](src/app/page.tsx) is a **server component**. Only these are client islands:

- `Header` — scroll state
- `lead/LeadProvider` + `lead/LeadDialog` + `lead/BookButton` — the consultation dialog
- `ClinicalCases` — the photo reveal
- `StickyCTA` — the mobile action bar

There are no scroll-reveal animations and no timers. Sections render visible in the HTML, so
nothing depends on JavaScript arriving in order to be readable.

## Content rules

**[`src/config/site.ts`](src/config/site.ts) is the source of truth**, and every claim in it
carries a source tag — `[BRIEF]`, `[LOGO]`, `[FB]` or `[PHOTO]`. Anything that could not be
traced sits in the exported `unverified` object at the bottom of the file and is **not
rendered**. Move an entry up only once the client confirms it.

Currently held back there: the implant and patient counts, the Apollo Proton affiliation,
"20+ years" (the brief says 18), a second Kilpauk location, and four patient testimonials
that had no source and were being presented as Google reviews.

## Leads

`LeadDialog` posts to `/api/lead`. That route always writes the enquiry to the server log,
then forwards it to `LEAD_WEBHOOK` if one is set — a **private** server variable, not
`NEXT_PUBLIC_`. A forwarding failure returns an error the form displays, with WhatsApp and
phone fallbacks, and the submit button re-enables.

WhatsApp is never opened programmatically. It is a button the visitor presses, on
`/thank-you` or in the error state, which sidesteps mobile popup blocking.

The dialog is offered unprompted only after real engagement (25s dwell **and** 35% scroll on
desktop / 55% on mobile, or desktop exit-intent), at most once per session, and not again for
seven days after it is dismissed.

## Indexing

The page is **noindex by default** so it cannot compete with pearldentalchennai.in for the
clinic's own terms. Set `NEXT_PUBLIC_INDEXABLE=true` and `NEXT_PUBLIC_SITE_URL` to flip it;
[`src/app/robots.ts`](src/app/robots.ts) and [`src/app/sitemap.ts`](src/app/sitemap.ts) both
follow that flag. `public/og.jpg` is generated from the clinic's own reception photo and logo.

## Photos

| File | Used in | Note |
|---|---|---|
| `doc.webp` | Hero | Dr. Egammai at her desk — the strongest asset |
| `hero.jpg` | Clinic band | The reception. **1024px wide — a higher-resolution original is needed for a full-bleed band** |
| `award.jpg` | Doctor section | International Implant Foundation certification |
| `doctor.jpg` | Doctor section | Award of Excellence presentation |
| `images/cases/1,2` | Clinical cases | Real intraoral before/after |

Case 3 is held back: its two files are an edentulous ridge and an intra-operative shot, with
no finished result. `before`/`after` were also swapped on case 1 in the previous build — the
finished prosthesis was labelled "Before" — and are corrected in `site.ts`.

[`src/components/PhotoSlot.tsx`](src/components/PhotoSlot.tsx) still renders a labelled
placeholder for any slot without a file, so new photography can be dropped in without
touching layout.

## Privacy

[`/privacy`](src/app/privacy/page.tsx) describes only what the code actually does, which is
verifiable from `/api/lead`. Everything depending on the clinic's own practices is listed in
a visible "to be completed" block rather than invented. **It is not a finished privacy policy
and should not be presented as one until those blanks are filled in**, ideally with legal
review against India's DPDP Act 2023.

## A note on the "repeating CTA" in the review PDF

The patient-journey CTA appeared many times on pages 4–5 of the full-page capture. The
document only ever contained one copy — `page.tsx` renders `JourneySection` once, and the
served HTML contains the heading exactly once.

The repetition was a scroll-and-stitch artifact: the previous build set `scroll-behavior:
smooth` globally on `html`, so a capture tool that jumps to a scroll offset and screenshots
immediately photographed the same region repeatedly while the page was still easing into
position — and `section { opacity: 0 }` with a JS-driven reveal made it worse. Both causes are
gone: smooth scrolling is now scoped to `html:focus-within` under a reduced-motion guard, and
there is no opacity gate at all.
