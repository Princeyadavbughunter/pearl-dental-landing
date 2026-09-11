/**
 * Single source of truth for every fact, claim and piece of copy on the page.
 * Components never hard-code clinic data.
 *
 * SOURCING RULE
 * -------------
 * Everything rendered must trace back to one of:
 *   [CLIENT] the client's written brief in this revision
 *   [DRIVE]  the client's Google Drive — file named in the comment
 *   [SITE]   pearldentalchennai.in, the clinic's own website
 *   [PHOTO]  a photograph in /public that plainly shows the thing claimed
 *
 * Anything untraceable, or contradicted by its own source, lives in
 * `unverified` at the bottom and is NOT rendered. Move an entry up only once
 * the clinic confirms it.
 */

export const site = {
  name: "Pearl Dental",
  strapline: "Advanced Dental Care", // logo artwork
  tagline: "Specialist prosthodontic and implant rehabilitation, Anna Nagar East",
  city: "Chennai",
  website: "https://www.pearldentalchennai.in",
  established: "2013", // [DRIVE] Dr.Egammai.docx, Professional-affiliations.docx

  doctor: {
    name: "Dr. Egammai Manikandan",
    shortName: "Dr. Egammai",
    role: "Founder & Chief Dentist, Pearl Dental Chennai", // [CLIENT]
    credential: "Prosthodontist & Implantologist · Gold Medalist", // [CLIENT]
    experience: "18+ years", // [CLIENT][DRIVE]
    /**
     * [CLIENT] Approved biography, verbatim. Only the first paragraph is
     * rendered: the second restates `expertise` almost word for word, and the
     * third is values language that a landing page does not have room for.
     * Both are kept here so nothing approved is lost.
     */
    bio: [
      "With over 18 years of clinical experience, Dr. Egammai Manikandan leads Pearl Dental Chennai with a focus on advanced dentistry, implant rehabilitation and personalised patient care.",
      "A Gold Medalist in Prosthodontics, her clinical expertise includes Strategic Implantology, Immediate Loading Dental Implants and complex implant rehabilitation, including challenging cases involving severe bone loss and medically compromised patients.",
      "Since establishing Pearl Dental Chennai in 2013, she has built the practice around clinical excellence, ethical treatment, patient safety and uncompromising quality — with every treatment plan tailored to the individual needs of the patient.",
    ],
    /** [DRIVE] Professional-affiliations.docx — qualifications, verbatim facts. */
    qualifications: [
      "BDS, and MDS in Prosthodontics & Crown Bridge",
      "Gold Medalist and University Topper, MDS Prosthodontics",
      "State Second Rank, postgraduate entrance examination",
    ],
    /** [DRIVE] Professional-affiliations.docx — Advanced Training. */
    training: [
      "Advanced training in maxillofacial prosthodontics at King's College London",
      "Master's programme in Implantology, Munich, Germany",
    ],
    /** [DRIVE] Professional-affiliations.docx — Professional Affiliations. */
    affiliations: [
      "Vice Chairman, Indian Board of Implantology",
      "Consultant, Apollo Proton Cancer Centre, Chennai",
      "Indian Prosthodontic Society · Indian Dental Association",
      "Indian Association of Oral Implantologists",
    ],
    /**
     * [CLIENT] Approved clinical expertise. NOT rendered in the founder
     * section — it duplicated bio paragraph two, and what the practice treats
     * is already covered by `patientProblems` and `treatmentGroups`.
     */
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
    /**
     * [CLIENT] Approved credibility line. NOT rendered — it repeats the
     * credential line printed directly under her name, and the hero's
     * credibility row. Kept for reuse elsewhere.
     */
    credibility: [
      "18+ Years of Experience",
      "Gold Medalist",
      "Prosthodontist & Implantologist",
    ],
    /**
     * The four credentials that actually earn their space on a landing page,
     * drawn from `qualifications`, `training` and `affiliations` above — those
     * three lists are nine items between them, which is a CV, not a reason to
     * book. The full lists stay for the clinic's own website.
     */
    proof: [
      "MDS Prosthodontics & Crown Bridge — University Topper",
      "Consultant, Apollo Proton Cancer Centre, Chennai",
      "Vice Chairman, Indian Board of Implantology",
      "Advanced training at King's College London and in Munich, Germany",
    ],
    photos: {
      /** [DRIVE] Doctor and Clinic Info/About Dr.Egammai — clinical portrait. */
      clinical: {
        src: "/doctor/clinical.jpg",
        alt: "Dr. Egammai Manikandan in a treatment room at Pearl Dental, Chennai",
        position: "38% 42%",
      },
      /** [DRIVE] Dr professional picture — at her consulting desk. */
      desk: {
        src: "/doctor/desk.jpg",
        alt: "Dr. Egammai Manikandan at her consulting desk at Pearl Dental",
        position: "47% 46%",
      },
    },
  },

  contact: {
    /** [CLIENT] + [SITE] — the two agree exactly. */
    phones: [
      { display: "+91 98843 89539", tel: "+919884389539", note: "Appointments & WhatsApp" },
      { display: "+91 98406 89539", tel: "+919840689539", note: "Appointments" },
      { display: "044 3573 3303", tel: "+914435733303", note: "Clinic landline" },
    ],
    /** [SITE] names this number as the clinic's WhatsApp. */
    whatsapp: "919884389539",
    email: "pearldentalimplant@gmail.com", // [CLIENT][SITE]
    address: {
      street: "101/1, F Block, 3rd Street",
      locality: "Anna Nagar East, Chennai",
      region: "Tamil Nadu",
      postalCode: "600102",
      country: "IN",
    },
    addressLines: [
      "101/1, F Block, 3rd Street",
      "Anna Nagar East, Chennai – 600102",
    ],
    addressFull:
      "101/1, F Block, 3rd Street, Anna Nagar East, Chennai – 600102",
    landmark: "Behind Hotel Bhalaji Bhavan", // [CLIENT][SITE]
    googleMapsLink:
      "https://www.google.com/maps/search/?api=1&query=Pearl+Dental+101%2F1+F+Block+3rd+Street+Anna+Nagar+East+Chennai+600102",
    mapEmbed:
      "https://www.google.com/maps/embed?origin=mfe&pb=!1m2!2m1!1sPearl+Dental+101%2F1+F+Block+3rd+Street+Anna+Nagar+East+Chennai+600102",
    /** Superseded by `googleRating.listing`, which is the canonical place URL. */
    googleReviewsLink:
      "https://www.google.com/maps/place/PEARL+DENTAL/@13.0857697,80.222169,17z/data=!4m8!3m7!1s0x3a52667795cd1c95:0x5afae8e0fa37a1ad!8m2!3d13.0857697!4d80.222169!9m1!1b1!16s%2Fg%2F11d_f1f451",
  },

  hours: {
    /** [CLIENT][SITE] */
    lines: [
      { days: "Monday – Saturday", time: "9:00 AM – 9:00 PM" },
      { days: "Sunday", time: "10:00 AM – 1:00 PM" },
    ],
    note: "Emergency appointments supported outside standard hours.", // [SITE][DRIVE] FAQs.docx
    schema: ["Mo-Sa 09:00-21:00", "Su 10:00-13:00"],
    summary: "Mon–Sat 9am–9pm · Sun 10am–1pm",
  },

  social: {
    facebook: "https://www.facebook.com/pearldentalchennai/", // [CLIENT]
    instagram: "https://www.instagram.com/pearldentalchennai/", // [CLIENT]
  },

  consultation: {
    includes: "Clinical examination, diagnostic evaluation and a treatment estimate",
    short: "Examination, evaluation and a treatment estimate",
  },
} as const;

/**
 * [DRIVE] Photo's and Video's/Clinic awards — read directly off the certificate.
 */
export const award = {
  title: "Excellence in Multidisciplinary Dental Practice",
  body: "International Award of Excellence & Asia Healthcare Awards 2022, by resolution of the IAE Awards Council.",
  date: "28 August 2022",
  image: "/awards/iae-2022.jpg",
  imageAlt:
    "The 2022 International Award of Excellence certificate presented to Pearl Dental",
  ceremony: "/awards/ceremony.jpg",
  ceremonyAlt: "Dr. Egammai Manikandan receiving the award on stage",
};

/** Thin credibility row under the hero. Every entry has a source. */
export const credentials = [
  { value: "Since 2013", label: "specialist-led practice in Anna Nagar" },
  { value: "18+ years", label: "prosthodontic & implant experience" },
  { value: "MDS", label: "Prosthodontics — University Topper" },
  { value: "IAE 2022", label: "Excellence in Multidisciplinary Practice" },
];

/**
 * [SITE] The clinic's wider specialist team, from pearldentalchennai.in/our-dentists
 * and each specialist's own profile page there. Bios are the clinic's own
 * wording, condensed for a landing page rather than quoted paragraph for
 * paragraph.
 */
export const specialists = [
  {
    name: "Dr. Wasim Ahmed",
    credential: "M.D.S.",
    role: "Oral & Maxillofacial Surgeon",
    bio: "Expert in wisdom tooth extraction, with a particular interest in cleft lip and palate surgery and bone grafting. Educated at Sree Balaji Dental College.",
  },
  {
    name: "Dr. Priyanka",
    credential: "MDS, MFDS RCPG (UK)",
    role: "Periodontic Dentist",
    bio: "A Reader at SRM Dental College with a strong publication record. Bachelor's from Saveetha Dental College, master's from SRM Dental College.",
  },
  {
    name: "Dr. Deepak Selvam",
    credential: "MDS",
    role: "Endodontic Dentist",
    bio: "Postgraduate from Saveetha Dental College (2018) and formerly an Assistant Professor there. Focuses on endodontic therapy, post-endodontic and aesthetic restorations, and microscopic and surgical endodontics.",
  },
  {
    name: "Dr. Vijaykumar",
    credential: "M.D.S",
    role: "Orthodontic Dentist",
    bio: "Graduate of Govt. Dental College and Hospital, Chennai, and Assistant Professor at Meenakshi Ammal Dental College and Hospital. Treats malocclusion and cleft palate.",
  },
  {
    name: "Dr. S. Navaneetha Krishnan",
    credential: "MD DNB anes",
    role: "Anaesthetist",
    bio: "Professor of Anaesthesia at Saveetha Medical College, Kancheepuram District. Completed his MD anaesthesiology residency at Berhampur University.",
  },
] as const;

export const whyChooseUs = [
  {
    title: "Specialist-led, not generalist",
    body: "Every plan is made and supervised by a Prosthodontist and Implantologist — the specialism concerned with how the final teeth actually work, not only with placing the implant.",
  },
  {
    title: "Built for the complex cases",
    body: "Severe bone loss, complete tooth loss, uncontrolled diabetes, compromised immunity, and rehabilitation after head and neck cancer treatment.",
  },
  {
    title: "Surgery and prosthetics planned together",
    body: "Implant position is planned backwards from the final restoration, so the teeth you end up with drive the surgery rather than the other way round.",
  },
  {
    title: "Told plainly, priced plainly",
    body: "Clear explanations of the options, the costs and the expected outcome, with a written estimate before treatment begins.",
  },
];

/** [SITE] + [DRIVE] Services offered.docx — technology named by the clinic itself. */
export const capabilities = [
  {
    meta: "Imaging",
    title: "In-clinic imaging",
    body: "Diagnostic imaging on site, so bone volume and implant position are assessed at the clinic rather than at an external scan centre.",
  },
  {
    meta: "Planning",
    title: "CAD/CAM digital workflow",
    body: "Restorations designed and produced digitally for a more precise fit than conventional impression-and-cast methods.",
  },
  {
    meta: "Surgery",
    title: "Custom surgical guides",
    body: "Implants placed through a guide fabricated for your anatomy, which is what makes flapless, minimally invasive placement possible.",
  },
  {
    meta: "Comfort",
    title: "Anaesthesia and monitoring",
    body: "State-of-the-art anaesthesia and monitoring technique, which is what allows longer surgical appointments to be completed in one sitting.",
  },
  {
    meta: "Prosthetics",
    title: "Immediate loading protocols",
    body: "For clinically suitable patients, fixed teeth placed on the same day as implant surgery.",
  },
  {
    meta: "Multidisciplinary",
    title: "A full clinical team",
    body: "Implantology, prosthodontics, oral and maxillofacial surgery, periodontics and endodontics under one practice.",
  },
];

/** [DRIVE] Services offered.docx — grouped exactly as the clinic groups them. */
export const treatmentGroups = [
  {
    group: "Implants & rehabilitation",
    lead: true,
    items: [
      {
        title: "Full Mouth Dental Implants",
        body: "Complete replacement of missing teeth using implant-supported fixed teeth and full-mouth rehabilitation.",
      },
      {
        title: "Immediate Functional Loading Implants",
        body: "For clinically suitable patients, fixed teeth placed on the same day as implant surgery.",
      },
      {
        title: "Strategic Implants",
        body: "Advanced implant solutions for patients seeking permanent teeth within a shorter treatment timeframe.",
      },
      {
        title: "Complex Implant Rehabilitation",
        body: "For extensive tooth loss, severe bone loss and other complex clinical conditions.",
      },
      {
        title: "No-Bone / Low-Bone Implant Cases",
        body: "Advanced implant solutions for selected patients with very little or no available bone.",
      },
      {
        title: "Implants for Diabetic Patients",
        body: "Strategic implant systems for appropriately evaluated diabetic patients.",
      },
      {
        title: "Flapless Implant Surgery",
        body: "Minimally invasive implant placement using customised surgical guides.",
      },
      {
        title: "Maxillofacial Prosthodontics",
        body: "Oral and facial rehabilitation for congenital or acquired defects of the head and neck.",
      },
    ],
  },
  {
    group: "Cosmetic & orthodontic",
    items: [
      {
        title: "Cosmetic Dentistry & Smile Designing",
        body: "Digital smile design, porcelain veneers, dental bonding and professional whitening.",
      },
      {
        title: "Invisalign Aligners",
        body: "Clear, discreet orthodontic treatment without conventional metal braces.",
      },
    ],
  },
  {
    group: "General & preventive",
    items: [
      {
        title: "Root Canal Treatment",
        body: "Endodontic treatment for infected or damaged teeth.",
      },
      {
        title: "Crowns & Bridges",
        body: "Restorative solutions for damaged, weakened or missing teeth.",
      },
      {
        title: "Gum Disease Treatment",
        body: "Diagnosis and treatment of gingivitis and periodontitis.",
      },
      {
        title: "Professional Dental Cleaning",
        body: "Cleaning and preventive care to remove plaque and tartar.",
      },
    ],
  },
];

/**
 * Treatment planning — why the recommendation comes after the examination.
 *
 * This replaces the published price table. The clinic's real price guide is
 * genuine client data (Drive: Pricing.docx) and is preserved verbatim in
 * `unverified.priceGuide` so it can be restored if the positioning changes, but
 * NOTHING on this page may display a figure: no amounts, no "from", no
 * "starting at", no affordability claims.
 */
export const treatmentPlanning = {
  eyebrow: "Treatment planning",
  heading: "A treatment plan tailored to your needs.",
  description:
    "Every smile is different. The right treatment depends on your dental condition, bone quality, number of teeth involved, implant system and the complexity of your case. After a clinical examination and necessary scans, Dr. Egammai will recommend the most appropriate treatment for you.",
  factors: [
    {
      label: "Your dental condition",
      body: "We assess your teeth, gums and overall oral health before recommending treatment.",
    },
    {
      label: "Bone & gum health",
      body: "Bone volume and gum condition can influence the type and sequence of treatment required.",
    },
    {
      label: "Treatment complexity",
      body: "Simple tooth replacement and complex full-mouth rehabilitation require different approaches.",
    },
    {
      label: "Implant system & materials",
      body: "Treatment options may vary based on the implant system, restoration and materials selected.",
    },
    {
      label: "Personalised treatment plan",
      body: "You receive a clear recommendation based on your individual clinical needs.",
    },
  ],
  cta: "Book a consultation",
  ctaNote: "Get a personalised treatment estimate after your clinical evaluation.",
};

/**
 * What the first visit actually covers.
 *
 * Every line traces to [DRIVE] FAQs.docx — Q15 ("personalised consultation and
 * diagnostic evaluation ... based on the patient's teeth, gums, bone condition,
 * medical history and individual requirements") and Q16 (costs discussed at the
 * consultation). Nothing is promised here that the clinic has not stated.
 *
 * Deliberately does NOT claim a CBCT or 3D scan: the clinic's sources say
 * "advanced imaging" and "diagnostic evaluation", and nothing more specific.
 * It also carries no figure — the estimate is given at the visit, not here.
 */
export const consultationIncludes = [
  "A personal consultation with Dr. Egammai Manikandan",
  "Assessment of your teeth, gums and bone condition",
  "A review of your medical history and general health",
  "The treatment options appropriate to your case, explained",
  "An estimate of the cost, before anything begins",
];

export const implantSteps = [
  {
    step: "01",
    title: "Consultation & evaluation",
    body: "Clinical examination and diagnostic evaluation of the teeth, gums, bone condition and medical history.",
  },
  {
    step: "02",
    title: "Treatment plan & estimate",
    body: "The options, the sequence and the cost, explained and given to you before anything begins.",
  },
  {
    step: "03",
    title: "Implant placement",
    body: "Placed under local anaesthesia, through a custom surgical guide where flapless placement is suitable.",
  },
  {
    step: "04",
    title: "Fixed teeth",
    body: "For clinically suitable patients, immediate functional loading places fixed teeth on the day of surgery.",
  },
  {
    step: "05",
    title: "Final prosthesis & review",
    body: "The definitive restoration is fitted and reviewed, with the fit and function checked at each visit.",
  },
];

/**
 * Real intraoral photographs from the clinic's own records.
 *
 * Note: `before`/`after` were swapped on case 1 in an earlier build — the
 * finished prosthesis was labelled "Before". Verified against the files here.
 * Only non-identifiable intraoral frames are used; no patient faces appear.
 */
export const cases = [
  {
    id: 1,
    before: "/images/cases/1/2.jpg",
    after: "/images/cases/1/1.jpg",
    beforeLabel: "Before",
    afterLabel: "After",
    title: "Full mouth implant rehabilitation",
    desc: "Periodontally compromised teeth replaced with a full-arch implant-supported prosthesis.",
  },
  {
    id: 2,
    before: "/images/cases/2/1.jpg",
    after: "/images/cases/2/2.jpg",
    beforeLabel: "Before",
    afterLabel: "After",
    title: "Full mouth rehabilitation with root canals and implants",
    desc: "Extensive decay and weakened teeth restored with root canal treatment, implants and fixed bridgework.",
  },
  {
    id: 4,
    before: "/images/cases/4/1.jpg",
    after: "/images/cases/4/2.jpg",
    beforeLabel: "Implants placed",
    afterLabel: "Final prosthesis",
    title: "Full-arch implant rehabilitation",
    desc: "Multiple implants placed in the lower arch, restored with a fixed full-arch prosthesis.",
  },
];

/**
 * [PHOTO] A second batch of before/after photographs, supplied separately from
 * `cases`. Some files already combine before and after into one image
 * (`composite`); others are separate `before`/`after` files. The clinic did
 * not confirm which procedure each pair shows, so captions describe only what
 * is visible in the photograph rather than naming a treatment.
 */
export const beforeAfterGallery = [
  {
    id: "ba-1",
    composite: "/b-a/1.jpg",
    caption: "Front teeth, before and after treatment.",
  },
  {
    id: "ba-2",
    composite: "/b-a/2.jpg",
    // Caption is the clinic's own, burned into the image.
    caption: "Single tooth implant replacement in 2 days.",
  },
  {
    id: "ba-3",
    before: "/b-a/3.jpg",
    after: "/b-a/4.jpg",
    caption: "Front teeth, before and after treatment.",
  },
  {
    id: "ba-4",
    before: "/b-a/5.jpg",
    after: "/b-a/6.jpg",
    caption: "Implants restored with the final crowns.",
  },
  {
    id: "ba-5",
    before: "/b-a/7.jpg",
    after: "/b-a/8.jpg",
    caption: "Framework try-in, then the finished restoration in place.",
  },
] as const;

/** [DRIVE] Doctor and Clinic Info/Clinic interiors — the clinic's own photographs. */
export const clinicGallery = [
  {
    src: "/clinic/reception.jpg",
    label: "Reception",
    caption: "The pearl-shell reception desk and living green wall.",
    alt: "The reception desk at Pearl Dental, with the clinic's shell-shaped counter and a living green wall",
    position: "50% 50%",
  },
  {
    src: "/clinic/waiting.jpg",
    label: "Waiting area",
    caption: "Seating beside the green wall, off the reception.",
    alt: "The patient waiting area at Pearl Dental, with seating alongside a living green wall",
    position: "50% 50%",
  },
  {
    src: "/clinic/corridor.jpg",
    label: "Corridor",
    caption: "The passage from reception through to the treatment rooms.",
    alt: "The corridor at Pearl Dental leading from reception to the treatment rooms",
    position: "50% 45%",
  },
  {
    src: "/clinic/operatory.jpg",
    label: "Treatment room",
    caption: "An operatory, with the chair and consultation desk in one room.",
    alt: "A treatment room at Pearl Dental with a dental chair, overhead light and consultation desk",
    position: "50% 50%",
  },
  {
    src: "/clinic/imaging-room.jpg",
    label: "Imaging room",
    caption: "In-clinic imaging, so diagnosis happens on the same visit.",
    alt: "The imaging room at Pearl Dental with a dental X-ray unit and reporting monitor",
    position: "50% 45%",
  },
  {
    src: "/clinic/reception-detail.jpg",
    label: "Detail",
    caption: "The clinic mark, carved into the reception counter.",
    alt: "The Pearl Dental logo carved into the stone reception counter",
    position: "50% 50%",
  },
] as const;

/**
 * Patient video testimonials, cleared for publishing. No patient names were
 * supplied with these clips, so captions stay generic rather than guessing an
 * identity.
 */
export const patientVideos = [
  { src: "/testimonial/Video-11365.mp4", caption: "Patient testimonial" },
  { src: "/testimonial/Video-36847.mp4", caption: "Patient testimonial" },
] as const;

/**
 * [SITE] The clinic's own published review. Superseded on the page by
 * `googleReviews`, which is attributable to a public listing; kept because it
 * is still verified and may be useful elsewhere.
 */
export const testimonial = {
  quote:
    "I took my husband to Pearl dental for root canal treatment. We were really amazed with the hospitality given by the staff and also special mention to Dr. Egammai.",
  name: "Rekha Ravindran",
  attribution: "Patient's spouse",
  source: "Published on pearldentalchennai.in",
};

/**
 * Google reviews — read from Pearl Dental's own Google Business Profile on
 * 9 September 2026, verbatim.
 *
 * `name`, `rating` and `date` are exactly as Google displays them. `text` is the
 * reviewer's own wording, shortened only where `truncated` is true, and only by
 * cutting at a sentence boundary and appending an ellipsis. Nothing is
 * rewritten, and no review here was written for this page.
 *
 * These six are a positive selection out of 46; the listing also holds three
 * critical reviews. That is why the real aggregate rating is printed above the
 * grid and every CTA links to the full listing — the page must not imply these
 * are all of them.
 *
 * To refresh: re-read the listing and replace this array. Do not edit the text.
 */
export const googleRating = {
  score: "4.7",
  count: 46,
  fetched: "9 September 2026",
  listing:
    "https://www.google.com/maps/place/PEARL+DENTAL/@13.0857697,80.222169,17z/data=!4m8!3m7!1s0x3a52667795cd1c95:0x5afae8e0fa37a1ad!8m2!3d13.0857697!4d80.222169!9m1!1b1!16s%2Fg%2F11d_f1f451",
};

export const googleReviews = [
  {
    name: "Kathirvelu Selva Ganapathy",
    rating: 5,
    date: "a month ago",
    text: "Dr. Egammai is a wonderful doctor. I lost all my teeth recently. And Dr. Egammai implanted all my teeth without any pain. Marvellous job she did. I am quite happy now. No pain nothing. May God bless her l life to serve humanity beings. She is the best doctor in this field in Chennai. Thanks",
    truncated: false,
  },
  {
    name: "Suresh Subramaniam",
    rating: 5,
    date: "a year ago",
    text: "Had been here for a tooth extraction and couple of other treatments. Found this place absolutely professional and caring. They went one level up by doing a follow up call finding out my wellness post extraction. Amidst a lot of commercial driven dental clinics, this is a one off exception to get all dental solutions under one roof …",
    truncated: true,
  },
  {
    name: "ramprakash narayanan",
    rating: 5,
    date: "2 years ago",
    text: "I have been postponing my long pending dental treatment just becoz of lack of clarity on the treatment methodology for a looong time…… But Dr. Egammai has made me understood the technicality so simply and helped me in getting confidence on the same …",
    truncated: true,
  },
  {
    name: "Dr.Muhamed Farhaan",
    rating: 5,
    date: "2 years ago",
    text: "I've dealt with enamel hypoplasia due to a genetic condition, causing discoloration and chipped enamel on my teeth. Dr. Egammai recommended Zirconia crowns at Pearl Dental, and after the treatment, I can confidently say that my smile has undergone a remarkable transformation …",
    truncated: true,
  },
  {
    name: "petrishya Evg",
    rating: 5,
    date: "2 years ago",
    text: "I went to Pearl Dental clinic for tooth implant. It's been seven years, I didn't have any complications or infections and am really satisfied. The Doctor is highly experienced and friendly. I would definitely recommend this dental clinic.",
    truncated: false,
  },
  {
    name: "akila somji",
    rating: 5,
    date: "2 years ago",
    text: "I went to Pearl Dental clinic for a 3 tooth implant. I'm really satisfied. The doctor is very experienced and friendly. I would definitely recommend this dental clinic. This is indeed the place to go for any dental problem, very courteous staff I highly recommend this place... Yes... for Dr …",
    truncated: true,
  },
];

/** [DRIVE] FAQs.docx — the clinic's own approved answers, lightly trimmed. */
export const faqs = [
  {
    q: "Can I get implants if I have very little or no bone?",
    a: "Pearl Dental provides advanced implant options for selected patients with very little or no available bone. The appropriate treatment depends on your individual clinical condition and diagnostic evaluation.",
  },
  {
    q: "Can diabetic patients get dental implants?",
    a: "Pearl Dental provides strategic implant solutions for appropriately evaluated diabetic patients. Your medical and dental condition is assessed before determining whether implant treatment is suitable.",
  },
  {
    q: "Can I get fixed teeth quickly after implant surgery?",
    a: "For selected clinically suitable patients, Pearl Dental offers Immediate Functional Loading Implants, where teeth can be placed on the same day as implant surgery. Suitability depends on individual clinical assessment.",
  },
  {
    q: "What is strategic implantology?",
    a: "An advanced approach to implant treatment designed for selected patients who require permanent teeth within a shorter treatment timeframe. The appropriate strategy is determined after clinical evaluation.",
  },
  {
    q: "What is flapless implant surgery?",
    a: "A minimally invasive implant procedure performed using customised surgical guides. Its suitability depends on your individual clinical condition.",
  },
  {
    q: "Do I need to replace all my teeth if several are missing or damaged?",
    a: "Not necessarily. The appropriate treatment depends on the condition of the remaining teeth, gums, bone and overall oral health. Pearl Dental provides personalised planning for patients requiring multiple implants or full-mouth rehabilitation.",
  },
  {
    q: "Why consult a Prosthodontist for a complex implant case?",
    a: "Complex implant rehabilitation requires careful planning of both the implants and the final restoration. Dr. Egammai Manikandan is a Prosthodontist and Implantologist with over 18 years of clinical experience, with particular expertise in Strategic Implantology and Immediate Loading Dental Implants.",
  },
  {
    q: "Can I get an estimate before starting treatment?",
    a: "Yes. You can discuss your requirements and the estimated cost at your consultation. The final plan and cost depend on your individual clinical condition and the treatment required.",
  },
  {
    q: "What are the clinic timings and where are you?",
    a: "Pearl Dental is at 101/1, F Block, 3rd Street, Anna Nagar East, Chennai – 600102, behind Hotel Bhalaji Bhavan. Open Monday to Saturday, 9:00 AM – 9:00 PM, and Sunday 10:00 AM – 1:00 PM. Emergency appointments are supported outside standard hours.",
  },
];

/**
 * ---------------------------------------------------------------------------
 * NOT RENDERED — contradicted by its own source, or awaiting confirmation.
 * ---------------------------------------------------------------------------
 */
export const unverified = {
  /**
   * [DRIVE] Pricing.docx — the clinic's real published starting prices, kept
   * verbatim. Deliberately NOT rendered: the client's direction is that this
   * landing page carries no figures at all, so that treatment is discussed
   * after a clinical evaluation rather than shopped on price. Restore into a
   * rendered export only on an explicit instruction.
   */
  priceGuide: {
    implants: ["Adin ₹20,000", "Simpladent ₹20,000", "Alpha Bio / Osstem ₹35,000", "Nobel Active ₹52,000"],
    implantCrowns: ["Metal-ceramic ₹10,500 onwards", "Zirconia screw-retained ₹18,500 onwards"],
    regularCrowns: ["Metal-ceramic ₹9,000 onwards", "Zirconia ₹16,000 onwards"],
    fullArch: ["Immediate-loading implants + hybrid prosthesis ₹2,50,000 / arch", "Premium zirconia rehabilitation ₹3,40,000 / arch"],
    aligners: ["Clear aligners from ₹1,50,000"],
    note: "Additional procedures — extractions, bone grafting, sinus lifting — may be charged separately.",
    payment: "Cash, card and EMI options for eligible treatment plans.",
  },
  /**
   * The clinic's own website states BOTH "15,000+ implants placed" and
   * "18,000+ successful implants" on the same page, alongside "2,300+ satisfied
   * patients". The Drive biography says "over 5,000 patients and more than
   * 15,000 dental implants, according to the Pearl Dental website" — i.e. it
   * cites the website rather than clinic records. Because the figures conflict
   * at source, no implant or patient count is displayed anywhere on this page.
   */
  counts: {
    siteA: "15,000+ implants",
    siteB: "18,000+ successful implants",
    sitePatients: "2,300+ satisfied patients",
    drivePatients: "5,000+ patients",
    foreignPatients: "630 foreign patients",
    trainingPrograms: "75+ training programmes",
  },
  /**
   * Drive holds patient case material (Shyama Daga, Yaw Addei) including
   * identifiable face photographs. Only non-identifiable intraoral frames are
   * used on this page; the face photographs need documented marketing consent
   * before they can appear.
   */
  identifiablePatients: "face photographs held back pending written consent",
  /** Superseded: two video testimonials, cleared for publishing, are live as `patientVideos`. Patient names are still not supplied. */
  testimonials: "video files in Drive — need patient names and consent to publish",
  /** Superseded by the client's current brief and the clinic's own website. */
  supersededAddress: "F Block, 77, 3rd Cross St, Block F, Anna Nagar East",
  supersededEmail: "pearldentalchennai@gmail.com",
  supersededPhone: "09600085760",
};
