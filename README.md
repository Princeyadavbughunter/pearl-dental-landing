# Pearl Dental — Landing Page

Ad landing page for **Pearl Dental**, Anna Nagar East, Chennai — Dr. S. Egammai, Implantologist.

Built on the layout cloned from `Princeyadavbughunter/Precigem-Dental-World`, with **all
Precigem content replaced by Pearl Dental's data** and the theme matched to the clinic's
own site, [pearldentalchennai.in](https://www.pearldentalchennai.in/).

Next.js 16 (App Router, Turbopack) · React 19 · Tailwind 3 · TypeScript.
Clinic details, dates and campaign angles live in [PROJECT-BRIEF.md](PROJECT-BRIEF.md).

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Where the content lives

**Everything editable is in [`src/config/site.ts`](src/config/site.ts).** Phone numbers,
address, timings, offer copy, treatments, technology, patient journey, testimonials, FAQs
and the hero USP tiles are all exported from that one file — no component hard-codes clinic
data. Change `site.offer.banner` there and it updates the header ribbon, the gold CTA band,
the popup and the sticky bar together.

## Theme — matched to pearldentalchennai.in

The palette, radii, shadows and type pairing are lifted from the clinic's live site, so
the landing page reads as the same brand. Defined once as CSS variables in
[`src/app/globals.css`](src/app/globals.css) and mirrored in [`tailwind.config.ts`](tailwind.config.ts):

| Token | Value | Used for |
|---|---|---|
| `--brand` | `#C45B00` | primary burnt orange — CTAs, links, accents |
| `--brand-2` | `#F07820` | the lighter end of every button gradient |
| `--amber` | `#FFAA33` | accents on the dark bands |
| `--brand-soft` | `#FFF1E6` | tinted section grounds, chips, icon wells |
| `--page` | `#FFFBF7` | warm off-white page |
| `--surface` | `#FFFFFF` | cards |
| `--dark` | `#1A100A` | the hero and footer bands |
| `--text` / `--text-mute` | `#1A100A` / `#5C4A3A` | headings / body copy |

Type: **Outfit** for headings, **Plus Jakarta Sans** for body — the same pairing as the
live site. Radii 8/16/24px, shadows tinted `rgba(196,91,0,…)` rather than grey.

Section grounds alternate white → tint → white, with the hero and footer as dark bands
and one full-width orange CTA band, following the live site's rhythm.

Shared classes: `.btn-brand`, `.btn-outline`, `.card`, `.glass`, `.glass-card`, `.chip`,
`.eyebrow`, `.field`, `.text-gradient-brand`, `.rule-brand`.

**Dark bands.** `.on-dark` re-points the same tokens to their dark-ground values, so
`.card`, `.chip`, `.section-title` and the rest adapt inside the hero and footer without
a parallel set of classes.

## Page structure

| Section | Component | Anchor |
|---|---|---|
| Offer ribbon + header | `Header.tsx` (+ `Logo.tsx`) | — |
| Hero, offer card, trust marquee, USP tiles | `HeroSection.tsx` | `#top` |
| Why Pearl Dental | `AboutSection.tsx` | `#why` |
| Technology (OPG, scanner, sedation, laser) | `TechnologySection.tsx` | `#technology` |
| Treatments & pricing | `TreatmentsSection.tsx` | `#implants` |
| 5-step implant journey | `JourneySection.tsx` | `#journey` |
| Gold offer band | `CTABox.tsx` | — |
| Patient reviews | `GoogleReviews.tsx` | `#reviews` |
| Dr. S. Egammai | `DoctorProfile.tsx` | `#doctor` |
| Clinic photos | `ClinicPhotos.tsx` | `#visit-photos` |
| FAQ (+ FAQPage schema) | `FAQSection.tsx` | `#faq` |
| Address, map, timings, socials | `Footer.tsx` | `#visit` |
| Sticky bar / WhatsApp / lead popup | `StickyCTA.tsx`, `WhatsAppButton.tsx`, `PopupForm.tsx` | — |

`src/app/page.tsx` composes them and owns the popup, sticky-bar and countdown state.
`src/app/layout.tsx` carries the metadata and the `Dentist` LocalBusiness schema.

## Logo

The clinic artwork is `public/pearllogo.jpg` (1080×1080 — gold shell mark over the
"THE PEARL DENTAL" wordmark, on black). It is gold line-art, so it needs a dark ground
to read. [`src/components/Logo.tsx`](src/components/Logo.tsx) handles both cases:

- `variant="lockup"` (header, thank-you) — the shell mark on a dark-slate badge, next to
  the name set in Outfit. Uses `public/pearl-mark.png`, the mark extracted from the
  artwork with a real alpha channel so the badge colour is ours, not the JPEG's black.
- `variant="full"` (footer) — the whole lockup at 190px, on the dark footer band where
  the artwork's own black ground disappears into it.

It is also the favicon, via `src/app/icon.jpg`.

## Photos

None of Precigem's images were kept — they are another clinic's doctors, patients and
rooms. Every image slot renders through [`src/components/PhotoSlot.tsx`](src/components/PhotoSlot.tsx),
which shows a labelled warm placeholder until a real file is dropped in.

`public/doc.webp` (Dr. S. Egammai at her desk, 1920×1280) is currently the only real
photograph, and is used twice with different crops — wide in the hero, and cropped to a
4:5 portrait in the doctor section, via `PhotoSlot`'s `position` prop. Swap either for a
dedicated shot when more photography lands. Still waiting on assets: reception,
operatory, OPG room and sterilisation — see [`public/images/README.md`](public/images/README.md).

## Leads

`PopupForm` POSTs to `NEXT_PUBLIC_LEAD_WEBHOOK` when that is set in `.env.local`, then
always hands off to WhatsApp with the enquiry prefilled, then routes to `/thank-you`.
Until the CRM sheet exists, the WhatsApp handoff is the only path — so no lead is lost.
