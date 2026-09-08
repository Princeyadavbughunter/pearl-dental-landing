/**
 * Single source of truth for every piece of Pearl Dental copy, contact detail
 * and claim on the landing page. Components never hard-code clinic data.
 *
 * SOURCING RULE
 * -------------
 * Everything rendered on the page must trace back to one of:
 *   [BRIEF]  PROJECT-BRIEF.md — supplied by the client at onboarding
 *   [LOGO]   the supplied brand artwork (logo.jpg)
 *   [FB]     the clinic's own Facebook page, facebook.com/pearldentalchennai
 *   [PHOTO]  a photograph in /public that plainly shows the thing claimed
 *
 * Anything that cannot be traced lives in `unverified` at the bottom of this
 * file and is NOT rendered. Move an entry up only once the client confirms it.
 */

export const site = {
  name: "Pearl Dental", // [LOGO][FB]
  strapline: "Advanced Dental Care", // [LOGO] — the wordmark's own descriptor
  tagline: "Implant, Root Canal & Full Mouth Rehabilitation, Anna Nagar East",
  city: "Chennai",
  website: "https://www.pearldentalchennai.in", // [BRIEF] — note: FB cover shows .com

  doctor: {
    name: "Dr. Egammai Manikandan", // [CLIENT]
    shortName: "Dr. Egammai",
    /**
     * [CLIENT 2026-09-09] Approved credential presentation. This replaces the
     * previous build's "MDS, Implantologist & Maxillofacial Prosthodontist",
     * which was not supplied by the clinic — see `unverified.credentialPrevious`.
     */
    role: "Founder & Chief Dentist, Pearl Dental Chennai",
    credential: "Prosthodontist & Implantologist · Gold Medalist",
    experience: "18+ years", // [CLIENT] — supersedes the brief's flat "18 years"
    established: "2013", // [CLIENT]
    /** [CLIENT] Approved biography, verbatim, split into paragraphs. */
    bio: [
      "With over 18 years of clinical experience, Dr. Egammai Manikandan leads Pearl Dental Chennai with a focus on advanced dentistry, implant rehabilitation and personalised patient care.",
      "A Gold Medalist in Prosthodontics, her clinical expertise includes Strategic Implantology, Immediate Loading Dental Implants and complex implant rehabilitation, including challenging cases involving severe bone loss and medically compromised patients.",
      "Since establishing Pearl Dental Chennai in 2013, she has built the practice around clinical excellence, ethical treatment, patient safety and uncompromising quality — with every treatment plan tailored to the individual needs of the patient.",
    ],
    /** [CLIENT] Approved clinical expertise list. */
    expertise: [
      {
        title: "Strategic Implantology",
        body: "Advanced planning for complex implant cases.",
      },
      {
        title: "Immediate Loading Implants",
        body: "Restoration-focused implant treatment designed around each patient's needs.",
      },
      {
        title: "Complex Implant Rehabilitation",
        body: "Experience managing challenging cases, including severe bone loss.",
      },
      {
        title: "Prosthodontics",
        body: "Full-mouth rehabilitation and functional, aesthetic dental restoration.",
      },
    ],
    /** [CLIENT] Approved credibility line. Set small — never as oversized figures. */
    credibility: [
      "18+ Years of Experience",
      "Gold Medalist",
      "Prosthodontist & Implantologist",
    ],
    /**
     * The clinic's own photographs. Captions describe strictly what is visible in
     * each frame — no dates, awarding bodies or achievements are inferred.
     */
    /**
     * Supporting credibility photographs for the founder section. Captions
     * describe strictly what is visible in each frame — no dates, awarding
     * bodies or achievements are inferred.
     *
     * The desk portrait (`/doc.webp`) is deliberately not repeated here; it
     * leads the hero, and the client asked for this section to carry the two
     * award photographs alone.
     */
    photos: [
      {
        src: "/award.jpg",
        alt: "Dr. Egammai Manikandan receiving International Implant Foundation certification",
        caption: "Certification from the International Implant Foundation.",
        position: "50% 38%",
      },
      {
        src: "/doctor.jpg",
        alt: "Dr. Egammai Manikandan receiving an Award of Excellence",
        caption: "Receiving an Award of Excellence for implant dentistry.",
        position: "50% 24%",
      },
    ],
  },

  contact: {
    phones: ["09600085760", "9884389539", "9840689539"], // [BRIEF]
    whatsapp: "919600085760",
    email: "pearldentalchennai@gmail.com", // [BRIEF]
    // [CLIENT 2026-09-09] Corrected address, supplied and confirmed by the clinic.
    // Structured once here; the display lines, the schema.org PostalAddress, the
    // map links and the FAQ answer all derive from it.
    address: {
      street: "F Block, 77, 3rd Cross St, Block F",
      locality: "Anna Nagar East, Chennai",
      region: "Tamil Nadu",
      postalCode: "600102",
      country: "IN",
    },
    addressLines: [
      "F Block, 77, 3rd Cross St, Block F",
      "Anna Nagar East, Chennai",
      "Tamil Nadu 600102",
    ],
    addressFull:
      "F Block, 77, 3rd Cross St, Block F, Anna Nagar East, Chennai, Tamil Nadu 600102",
    // Retained from the onboarding brief, which listed it against the older
    // street number. Worth reconfirming now the address has been corrected.
    landmark: "Near Valliammal School, behind Hotel Bhalaji Bhavan",
    // Business name + full confirmed address, so the pin resolves to the
    // clinic's own listing rather than to the street alone.
    googleMapsLink:
      "https://www.google.com/maps/search/?api=1&query=Pearl+Dental+F+Block+77+3rd+Cross+St+Anna+Nagar+East+Chennai+Tamil+Nadu+600102",
    // Resolved target of the ?output=embed redirect — one hop fewer for the iframe.
    mapEmbed:
      "https://www.google.com/maps/embed?origin=mfe&pb=!1m2!2m1!1sPearl+Dental+F+Block+77+3rd+Cross+St+Anna+Nagar+East+Chennai+Tamil+Nadu+600102",
    // Replace with the Place-ID review link once the client shares the GMB listing.
    googleReviewsLink:
      "https://www.google.com/maps/search/?api=1&query=Pearl+Dental+F+Block+77+3rd+Cross+St+Anna+Nagar+East+Chennai+Tamil+Nadu+600102",
  },

  hours: {
    lines: [
      { days: "Monday – Saturday", time: "9:30 AM – 1:00 PM" },
      { days: "Monday – Saturday", time: "4:00 PM – 8:00 PM" },
      { days: "Sunday", time: "Closed" },
    ], // [BRIEF]
    schema: ["Mo-Sa 09:30-13:00", "Mo-Sa 16:00-20:00"],
    summary: "Mon–Sat · 9:30–1:00 & 4:00–8:00",
  },

  social: {
    // [CLIENT 2026-09-09] Both corrected. The brief's Facebook URL pointed at a
    // different practitioner's page and its Instagram handle at the wrong account.
    facebook: "https://www.facebook.com/pearldentalchennai/",
    instagram: "https://www.instagram.com/pearldentalchennai/",
    youtube: "https://www.youtube.com/@pearldentalchennai", // [BRIEF]
  },

  /** Entry price only. Never the headline argument — see PROJECT-BRIEF positioning. */
  pricing: {
    implantFrom: "₹20,000", // [BRIEF]
    note: "per implant, before the crown and any grafting",
  },

  /** What a first visit actually includes. Used by every CTA subtitle. */
  consultation: {
    includes: "Examination, in-house OPG scan and a written estimate",
    short: "Consultation, OPG scan & written estimate",
  },
} as const;

/**
 * Thin credibility row under the hero. Only facts with a source.
 */
export const credentials = [
  { value: "18+ years", label: "of clinical practice" }, // [CLIENT]
  { value: "In-house", label: "OPG & intraoral scanning" }, // [BRIEF] USP
  { value: "In-house", label: "Endodontist for root canals" }, // [BRIEF] USP
  { value: "Certified", label: "by the International Implant Foundation" }, // [PHOTO] award.jpg
];

export const whyChooseUs = [
  {
    title: "An implant practice first",
    body: "Implantology is what the clinic is built around, not a service added to a general list. Cases are planned digitally from an OPG taken on the first visit.",
  },
  {
    title: "Everything under one roof",
    body: "Imaging, scanning, surgery, root canals and follow-up all happen in the clinic. Nothing is referred out halfway through your treatment.",
  },
  {
    title: "Complex and reduced-bone cases",
    body: "The practice takes on full mouth rehabilitation and cases where bone volume is limited — the situations other clinics often decline.",
  },
  {
    title: "A written estimate before we start",
    body: "You leave the first consultation with the plan and the cost in writing, and a reason for every line on it.",
  },
];

/**
 * "Under one roof" capability list. Each entry is a facility the brief lists as
 * present in the clinic — this is the section the ad angles land on.
 */
export const capabilities = [
  {
    title: "In-house OPG",
    body: "A full-mouth digital X-ray taken in the clinic, so bone levels are assessed and the implant plan is drawn on the same visit.",
    meta: "Diagnosis",
  },
  {
    title: "Intraoral scanning",
    body: "Digital impressions instead of trays and putty — a more precise crown fit, and far easier for patients with a strong gag reflex.",
    meta: "Planning",
  },
  {
    title: "Conscious sedation",
    body: "For dental anxiety and longer surgical appointments. You stay responsive and monitored throughout, but relaxed.",
    meta: "Comfort",
  },
  {
    title: "Soft-tissue laser",
    body: "Gum contouring and soft-tissue work with less bleeding and faster healing, which matters around implant and crown margins.",
    meta: "Surgery",
  },
  {
    title: "In-house Endodontist",
    body: "Root canals are completed here by a resident specialist rather than referred to another clinic mid-treatment.",
    meta: "Specialist",
  },
  {
    title: "Air polishing",
    body: "Stain and biofilm removal that is gentler on enamel and on sensitive gums than conventional scaling alone.",
    meta: "Hygiene",
  },
];

/** [FB] cover artwork + profile intro list the services below. */
export const treatments = [
  {
    title: "Dental Implants",
    body: "Single, multiple and full-arch implants, planned digitally from your OPG and intraoral scan.",
    price: `From ${site.pricing.implantFrom}`,
    featured: true,
  },
  {
    title: "Full Mouth Implants",
    body: "Rebuilding a complete arch — including cases with reduced bone volume that need staged planning.",
    price: "Staged plan",
    featured: true,
  },
  {
    title: "Root Canal Therapy",
    body: "Completed in-house by the resident Endodontist, most cases in a single sitting.",
    price: "In-house specialist",
  },
  {
    title: "Crowns & Bridges",
    body: "Zirconia and ceramic crowns built from a digital scan for a precise, natural fit.",
    price: "Digital scan fit",
  },
  {
    title: "Oral Surgery",
    body: "Extractions, surgical removals and pre-implant procedures carried out at the clinic.",
    price: "In-clinic",
  },
  {
    title: "Gum Treatment",
    body: "Scaling, air polishing and laser gum therapy for bleeding, receding or inflamed gums.",
    price: "Laser & polishing",
  },
  {
    title: "Cosmetic Dentistry",
    body: "Whitening, veneers and smile design planned around the proportions of your face.",
    price: "Smile design",
  },
  {
    title: "Kids Dentistry",
    body: "Preventive care, fillings and early guidance for children, at a pace they can handle.",
    price: "Paediatric",
  },
];

export const implantSteps = [
  {
    step: "01",
    title: "Consultation & OPG",
    body: "An examination and an in-house OPG on the first visit, so bone quality is assessed before anything is recommended.",
  },
  {
    step: "02",
    title: "Digital plan & written estimate",
    body: "An intraoral scan, the implant position planned digitally, and a written cost estimate you take home with you.",
  },
  {
    step: "03",
    title: "Placement",
    body: "Carried out under local anaesthesia, or conscious sedation if you would rather. Usually under an hour per implant.",
  },
  {
    step: "04",
    title: "Healing & review",
    body: "The implant integrates with the bone over roughly three to four months, reviewed at scheduled check-ins.",
  },
  {
    step: "05",
    title: "Final crown",
    body: "Your permanent crown is made from the digital scan and matched in shade and shape to your natural teeth.",
  },
];

/**
 * Real intraoral photographs from the clinic.
 *
 * NOTE: the previous build had `before`/`after` swapped on cases 1 and 3 — the
 * finished prosthesis was labelled "Before". Verified against the files and
 * corrected here. Case 3's images are an edentulous ridge and an intra-operative
 * shot with no finished result, so it is held back until the client supplies the
 * final prosthesis photograph (see `unverified.cases`).
 */
export const cases = [
  {
    id: 1,
    before: "/images/cases/1/2.jpg",
    after: "/images/cases/1/1.jpg",
    title: "Full mouth implant rehabilitation",
    desc: "Periodontally compromised teeth replaced with a full-arch implant-supported prosthesis.",
  },
  {
    id: 2,
    before: "/images/cases/2/1.jpg",
    after: "/images/cases/2/2.jpg",
    title: "Full mouth rehabilitation with root canals and implants",
    desc: "Extensive decay and weakened teeth restored with a combination of root canal treatment, implants and fixed bridgework.",
  },
];

/**
 * Clinic interiors, in the order a patient walks through the building.
 *
 * Photographs supplied by the clinic (`clinic image/`, June 2026). Captions and
 * alt text describe only what is visible in the frame — no hygiene, equipment or
 * certification claims are inferred from a photograph.
 *
 * `position` is the object-position for the crop. `corridor` is the only
 * portrait frame in the set, so it needs the subject pinned rather than centred
 * when it sits in a landscape slot.
 */
export const clinicGallery = [
  {
    src: "/images/clinic/entrance.jpg",
    label: "Entrance",
    caption: "The covered approach from the street to the clinic doors.",
    alt: "The covered entrance walkway leading to the Pearl Dental reception, with planting either side",
    position: "50% 55%",
  },
  {
    src: "/images/clinic/corridor.jpg",
    label: "Corridor",
    caption: "The passage from reception through to the treatment rooms.",
    alt: "The corridor connecting reception to the treatment rooms, with a living green wall along one side",
    position: "50% 42%",
  },
  {
    src: "/images/clinic/waiting-area.jpg",
    label: "Waiting area",
    caption: "Seating by the treatment-room doors, under the clinic's lit ceiling.",
    alt: "The patient waiting area at Pearl Dental, with seating and glass doors through to the treatment corridor",
    position: "50% 50%",
  },
  {
    src: "/images/clinic/treatment-room.jpg",
    label: "Treatment room",
    caption: "One of the operatories, with the chair and the consultation desk in the same room.",
    alt: "A treatment room at Pearl Dental with the dental chair, overhead light and a consultation desk",
    position: "50% 50%",
  },
] as const;

export const faqs = [
  {
    q: "How much do dental implants cost at Pearl Dental?",
    a: "Implants start at ₹20,000 per implant. The final cost depends on the implant system, whether grafting is needed, and the type of crown chosen. You receive a written estimate after the consultation and OPG, before any treatment begins.",
  },
  {
    q: "Is the implant procedure painful?",
    a: "Placement is done under local anaesthesia, so you do not feel pain during the procedure. Conscious sedation is available for anxious patients and for longer multi-implant appointments.",
  },
  {
    q: "How long does the full implant treatment take?",
    a: "Placement usually takes under an hour per implant. The implant then integrates with the bone over roughly three to four months, with scheduled review visits, after which the permanent crown is fitted.",
  },
  {
    q: "Do you do the root canal in-house or refer it out?",
    a: "In-house. Pearl Dental has a resident Endodontist, so root canals are completed at the clinic — most in a single sitting — rather than being referred elsewhere mid-treatment.",
  },
  {
    q: "I am very anxious about dental treatment. What are my options?",
    a: "Conscious sedation is available at the clinic. You remain responsive and monitored throughout, but relaxed. It is particularly useful when several procedures need to be completed in one longer appointment.",
  },
  {
    q: "I was told I do not have enough bone for implants. Is that final?",
    a: "Not necessarily. Bone volume and general health are assessed from the in-house OPG at the first visit, and reduced-bone cases are a particular focus of the practice. Where bone is insufficient, grafting is often an option. What is possible in your case can only be confirmed after that scan.",
  },
  {
    q: "Where is the clinic and what are the timings?",
    a: `Pearl Dental is at ${site.contact.addressFull} — ${site.contact.landmark}. Open Monday to Saturday, 9:30 AM–1:00 PM and 4:00 PM–8:00 PM. Closed on Sunday.`,
  },
];

/**
 * ---------------------------------------------------------------------------
 * NOT RENDERED — awaiting client confirmation.
 * ---------------------------------------------------------------------------
 * Each of these appeared on the previous build without a traceable source, or
 * contradicted another figure on the same page. Confirm with the clinic, then
 * move the entry into the exported data above.
 */
export const unverified = {
  // Previous build showed "18,000+ implants" beside "2,300+ satisfied patients"
  // on the same screen, and "20+ years" beside "18 years".
  stats: [
    { value: "18,000+", label: "Successful Implants", note: "contradicts the patient count below" },
    { value: "2,300+", label: "Satisfied Patients" },
    { value: "630", label: "Foreign Patients" },
    { value: "75+", label: "Training Programs" },
  ],
  // A named third-party hospital affiliation. Needs written permission before it
  // can appear in paid advertising.
  affiliations: ["Apollo Proton Cancer Centre"],
  // PROJECT-BRIEF says 18 years; the previous build said 20+. The client has
  // since approved "18+ years", which is what the page now uses.
  experienceAlternative: "20+ years",
  // Carried over from the previous build and never supplied by the clinic.
  // Replaced by the client-approved credential presentation.
  credentialPrevious: "MDS, Implantologist & Maxillofacial Prosthodontist",
  // FB cover lists a second location; no address supplied for it.
  secondLocation: "Kilpauk",
  // FB cover shows pearldentalchennai.com; the brief says .in.
  websiteAlternative: "https://www.pearldentalchennai.com",
  // Four named patient testimonials with 5-star ratings, presented as Google
  // reviews. No source. Removed from the page entirely.
  testimonials: "removed — see README",
  // Case 3 has an edentulous "before" and an intra-operative shot, but no
  // finished prosthesis photograph.
  cases: "case 3 held back — needs a final result photograph",
  // The award photographs show an International Implant Foundation certificate
  // and an Award of Excellence plaque. The awarding bodies and dates should be
  // confirmed before any stronger wording is used.
  awards: "captioned descriptively from the photographs only",
};
