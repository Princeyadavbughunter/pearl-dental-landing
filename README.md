# Pearl Dental — Landing Page

Campaign landing page for **Pearl Dental Chennai** — Dr. Egammai Manikandan,
Prosthodontist & Implantologist. Anna Nagar East.

Next.js 16 (App Router, Turbopack) · React 19 · Tailwind 3 · TypeScript.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
```

Copy [`.env.example`](.env.example) to `.env.local` before deploying.

## Content rules

**[`src/config/site.ts`](src/config/site.ts) is the source of truth.** Every claim carries
a source tag:

| Tag | Source |
|---|---|
| `[CLIENT]` | the client's written brief |
| `[DRIVE]` | the clinic's Google Drive — the file is named in the comment |
| `[SITE]` | pearldentalchennai.in |
| `[PHOTO]` | a photograph in `/public` that plainly shows the thing claimed |

Anything untraceable — **or contradicted by its own source** — sits in the exported
`unverified` object at the bottom of that file and is **not rendered**.

Currently held back there: all implant and patient counts (the clinic's own website
publishes "15,000+", "18,000+" and "2,300+" simultaneously, so no figure is quoted);
identifiable patient face photographs, pending documented marketing consent; and the
unedited video testimonials in Drive, which have no attribution.

## Page structure

Each section has a different composition on purpose. The order follows how a patient
evaluates a clinic, not a template.

| # | Section | Component | Anchor |
|---|---|---|---|
| 01 | Header | `Header.tsx` | — |
| 02 | Hero + credibility row | `HeroSection.tsx` | `#top` |
| 03 | Is this you? — problem recognition | `PatientProblems.tsx` | `#is-this-you` |
| 04 | Why Pearl Dental | `AboutSection.tsx` | `#why` |
| 05 | About the founder | `DoctorProfile.tsx` | `#doctor` |
| 06 | Treatments | `TreatmentsSection.tsx` | `#treatments` |
| 07 | Clinical cases (before/after) | `ClinicalCases.tsx` | `#cases` |
| 08 | Full-bleed reception band | `ClinicBand.tsx` | `#clinic` |
| 09 | Inside the clinic — gallery | `ClinicGallery.tsx` | `#clinic-gallery` |
| 10 | Clinical technology | `TechnologySection.tsx` | `#technology` |
| 11 | Treatment price guide | `PricingSection.tsx` | `#pricing` |
| 12 | Proof — review + award | `ReviewsLink.tsx` | `#proof` |
| 13 | Patient journey | `JourneySection.tsx` | `#journey` |
| 14 | FAQ (+ FAQPage schema) | `FAQSection.tsx` | `#faq` |
| 15 | Visit — contact & hours | `ContactSection.tsx` | `#visit` |
| 16 | Final CTA | `FinalCTA.tsx` | `#book` |
| 17 | Footer | `Footer.tsx` | — |

## Architecture

[`src/app/page.tsx`](src/app/page.tsx) is a **server component**. Client islands only:
`Header` (scroll state), `lead/*` (the dialog and its triggers), `ClinicalCases` (photo
reveal), `ClinicGallery` (carousel), `StickyCTA` (mobile bar).

No scroll-reveal animations, no timers. Sections render visible in the HTML, so nothing
depends on JavaScript arriving to be readable.

## Brand

Palette sampled from the client's `logo.jpg` — `#006C78` deep teal, `#00A8B4` bright teal
— and from the clinic's own reception photograph, `#123039` petrol. Newsreader for
headings, Inter for UI. White and near-white grounds; `teal-700` for anything
interactive; `teal-500` for small accents only. No gradients, glass or glow.

`public/logo-pearl-dental.png` is the client's artwork with the white ground keyed to
transparency and the margin trimmed — composited back on white it matches the original to
a mean per-channel difference of 0.8/255. It contains near-black type, so it is only ever
placed on white or a light tint; that is why the footer is light.

## Photography

All photography is the clinic's own, from Drive. No stock, nothing generated.

| Path | Source folder | Used in |
|---|---|---|
| `doctor/desk.jpg` | Dr professional picture | Hero |
| `doctor/clinical.jpg` | About Dr.Egammai | Founder section |
| `clinic/*.jpg` (9) | Clinic interiors | Gallery, reception band |
| `awards/iae-2022.jpg` | Clinic awards | Proof section |
| `images/cases/1,2,4` | Case studies | Clinical cases |

## Leads

`LeadDialog` posts to `/api/lead`, which always logs the enquiry, then forwards to
`LEAD_WEBHOOK` (a **private** server variable, not `NEXT_PUBLIC_`). A failure returns an
error the form displays with WhatsApp and phone fallbacks, and the submit button
re-enables. WhatsApp is never opened programmatically — it is a button the visitor
presses, which sidesteps mobile popup blocking.

The dialog is offered unprompted only after real engagement (25s dwell **and** 35% scroll
on desktop / 55% on mobile, or desktop exit-intent), once per session, and not again for
seven days after dismissal.

## Tracking

[`Analytics.tsx`](src/components/Analytics.tsx) renders **nothing** unless
`NEXT_PUBLIC_META_PIXEL_ID` or `NEXT_PUBLIC_GA4_ID` is set. No placeholder IDs are
shipped. Once the client grants Meta Ads Manager and GA4 access, set the variables and
fire the conversion event on `/thank-you`.

## Indexing

**noindex by default**, so the page cannot compete with pearldentalchennai.in for the
clinic's own terms. Set `NEXT_PUBLIC_INDEXABLE=true` and `NEXT_PUBLIC_SITE_URL` to flip
it; [`robots.ts`](src/app/robots.ts) and [`sitemap.ts`](src/app/sitemap.ts) both follow
that flag.

## Privacy

[`/privacy`](src/app/privacy/page.tsx) describes only what the code actually does, which
is verifiable from `/api/lead`. Everything depending on the clinic's own practices is
listed in a visible "to be completed" block rather than invented. **It is not a finished
privacy policy** and should not be presented as one until those blanks are filled in,
ideally with legal review against India's DPDP Act 2023.
