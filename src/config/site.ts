/**
 * Single source of truth for every piece of Pearl Dental copy, contact detail
 * and offer on the landing page. Components never hard-code clinic data — edit
 * it here and the whole page, the schema.org block and the forms follow.
 */

export const site = {
  name: "Pearl Dental",
  tagline: "Advanced Implant & Root Canal Centre, Anna Nagar East",
  city: "Chennai",
  website: "https://www.pearldentalchennai.in",

  doctor: {
    name: "Dr. Egammai Manikandan",
    credential: "MDS Implantologist | Maxillofacial Prosthodontist",
    experience: "20+ years",
    bio: "Dr. Egammai Manikandan is a highly experienced Implantologist and Maxillofacial Prosthodontist who has placed over 18,000 implants across Pearl Dental and Apollo Proton Cancer Centre. With 20+ years of clinical excellence, she leads a dedicated team specialising in immediate loading, strategic implants, and full mouth rehabilitation — all under one roof in Anna Nagar East, Chennai.",
    highlights: [
      "18,000+ implants placed at Pearl Dental & Apollo Proton Cancer Centre",
      "Specialist in Immediate Functional Loading & Strategic Implants",
      "Maxillofacial Prosthodontics for cancer and trauma reconstruction",
      "In-house Endodontist — root canals completed in-clinic, never referred",
      "Digital implant planning with OPG + intraoral scanning on day one",
      "75+ training programs conducted for dental professionals",
    ],
  },

  stats: [
    { value: "18,000+", label: "Successful Implants" },
    { value: "2,300+", label: "Satisfied Patients" },
    { value: "630", label: "Foreign Patients" },
    { value: "75+", label: "Training Programs" },
  ],

  contact: {
    phones: ["09600085760", "9884389539", "9840689539"],
    whatsapp: "919600085760",
    email: "pearldentalchennai@gmail.com",
    addressLines: [
      "101/1, F Block, 3rd Street",
      "Anna Nagar East, Chennai – 600102",
    ],
    landmark: "Near Valliammal School, behind Hotel Bhalaji Bhavan",
    googleMapsLink:
      "https://www.google.com/maps/search/?api=1&query=Pearl+Dental+Anna+Nagar+East+Chennai",
    mapEmbed:
      "https://www.google.com/maps?q=Pearl+Dental+Anna+Nagar+East+Chennai+600102&output=embed",
  },

  hours: {
    lines: [
      { days: "Monday – Saturday", time: "9:30 AM – 1:00 PM" },
      { days: "Monday – Saturday", time: "4:00 PM – 8:00 PM" },
      { days: "Sunday", time: "Closed" },
    ],
    // schema.org openingHours format
    schema: ["Mo-Sa 09:30-13:00", "Mo-Sa 16:00-20:00"],
  },

  social: {
    facebook: "https://www.facebook.com/PearlDentalHospital/",
    instagram: "https://www.instagram.com/the_pearldental/",
    youtube: "https://www.youtube.com/@pearldentalchennai",
  },

  offer: {
    banner: "Implant consultation + OPG scan — limited slots this month",
    headline: "Dental Implants from ₹20,000",
    sub: "Consultation, OPG scan & written treatment estimate",
  },

  cases: [
    {
      id: 1,
      before: "/images/cases/1/1.jpg",
      after: "/images/cases/1/2.jpg",
      title: "Full Mouth Implant Rehabilitation",
      desc: "Periodontally compromised teeth restored to full mouth implants and prosthesis.",
    },
    {
      id: 2,
      before: "/images/cases/2/1.jpg",
      after: "/images/cases/2/2.jpg",
      title: "Full Mouth Rehab with RCT & Implants",
      desc: "Multiple carious & periodontally weakened teeth restored with root canal, implants and bridge.",
    },
    {
      id: 3,
      before: "/images/cases/3/1.jpg",
      after: "/images/cases/3/2.jpg",
      title: "Edentulous to Fixed Prosthesis",
      desc: "Completely edentulous patient rehabilitated with full mouth implants and fixed prosthesis.",
    },
  ],
} as const;

export const trustStrip = [
  "20+ Years of Experience",
  "18,000+ Implants Placed",
  "In-house OPG",
  "Intraoral Scanner",
  "Conscious Sedation",
  "Soft-tissue Laser",
  "In-house Endodontist",
  "Air Polishing",
  "Implants from ₹20,000",
  "Apollo Proton Partner",
];

export const whyChooseUs = [
  {
    title: "Advanced Implant Practice",
    body: "Implantology is not a side service here — it is what the clinic is built around. Digitally planned placement, guided surgery and 18 years of cases behind every recommendation.",
  },
  {
    title: "Everything Under One Roof",
    body: "OPG, intraoral scanning, surgery, root canals and follow-up all happen in-clinic. No running between labs and diagnostic centres mid-treatment.",
  },
  {
    title: "Comfort-first Dentistry",
    body: "Conscious sedation, soft-tissue laser and air polishing keep long appointments calm and low-trauma — the reason nervous patients finish their treatment here.",
  },
  {
    title: "Ethical, Transparent Pricing",
    body: "You get a written estimate before treatment starts and a clear reason for every procedure on it. No padded plans, no surprise additions at the chair.",
  },
];

export const technology = [
  {
    title: "In-house OPG",
    body: "Full-mouth digital X-ray taken in-clinic in under a minute — bone levels assessed and the implant plan drawn on the same visit.",
    points: ["Same-visit diagnosis", "Low radiation digital sensor", "No external scan centre"],
  },
  {
    title: "Intraoral Scanner",
    body: "Digital impressions instead of trays and putty. More accurate crowns and guides, and far more comfortable for patients with a strong gag reflex.",
    points: ["No messy impressions", "Precise crown fit", "See your scan on screen"],
  },
  {
    title: "Conscious Sedation",
    body: "For anxious patients and longer surgical appointments — you stay responsive and safe, but relaxed and largely unaware of the procedure.",
    points: ["Ideal for dental anxiety", "Multiple implants in one sitting", "Monitored throughout"],
  },
  {
    title: "Soft-tissue Laser",
    body: "Gum contouring and soft-tissue work with minimal bleeding and faster healing, which matters a great deal around implant and crown margins.",
    points: ["Less bleeding", "Faster healing", "Better implant aesthetics"],
  },
];

export const treatments = [
  {
    title: "Dental Implants",
    body: "Single, multiple and full-arch implants, digitally planned from your OPG and intraoral scan.",
    price: "From ₹20,000",
  },
  {
    title: "Root Canal Treatment",
    body: "Done in-house by our resident Endodontist — most cases finished in a single sitting.",
    price: "In-house specialist",
  },
  {
    title: "Full Mouth Rehabilitation",
    body: "Rebuilding function and appearance across both arches with implants, crowns and bridges.",
    price: "Staged plan",
  },
  {
    title: "Crowns & Bridges",
    body: "Zirconia and ceramic crowns built from digital scans for a precise, natural-looking fit.",
    price: "Digital scan fit",
  },
  {
    title: "Cosmetic Dentistry",
    body: "Veneers, smile design and whitening, planned around the shape of your face and lips.",
    price: "Smile design",
  },
  {
    title: "Cleaning & Gum Care",
    body: "Scaling, air polishing and laser gum therapy that leaves teeth genuinely clean, not just polished.",
    price: "Air polishing",
  },
];

export const implantSteps = [
  {
    step: "01",
    title: "Consultation & OPG",
    body: "We examine you, take an in-house OPG and assess bone quality — all on the first visit.",
  },
  {
    step: "02",
    title: "Digital Plan & Estimate",
    body: "Intraoral scan, implant position planned digitally, and a written cost estimate you take home.",
  },
  {
    step: "03",
    title: "Implant Placement",
    body: "Placement under local anaesthesia, or conscious sedation if you prefer. Usually under an hour per implant.",
  },
  {
    step: "04",
    title: "Healing & Review",
    body: "Healing is reviewed over 3–4 months with scheduled check-ins, at no additional charge.",
  },
  {
    step: "05",
    title: "Final Crown",
    body: "Your permanent crown is fitted from the digital scan — matched in shade and shape to your natural teeth.",
  },
];

export const testimonials = [
  {
    name: "Ramesh K.",
    location: "Anna Nagar",
    body: "I had put off my implants for two years because of the fear. Dr. Egammai explained everything with the OPG on screen and did three implants under sedation in one sitting. I genuinely felt nothing.",
  },
  {
    name: "Lakshmi S.",
    location: "Kilpauk",
    body: "What I appreciated most was that they told me two of the teeth I was told needed removal elsewhere could be saved with a root canal. That honesty is why my whole family comes here now.",
  },
  {
    name: "Arun V.",
    location: "Mogappair",
    body: "The scan, the X-ray, the root canal and the crown — everything happened in the same clinic. No running around Chennai for reports. Cost was exactly what the written estimate said.",
  },
  {
    name: "Fathima R.",
    location: "Perambur",
    body: "My mother is 68 and very nervous about dental work. The team was patient with her across every appointment. Her full upper arch has been rebuilt and she is eating normally again.",
  },
];

export const faqs = [
  {
    q: "How much do dental implants cost at Pearl Dental?",
    a: "Implants start at ₹20,000 per implant. The final cost depends on the implant system, whether a bone graft is needed, and the type of crown you choose. You receive a written estimate after your consultation and OPG, before any treatment begins.",
  },
  {
    q: "Is the implant procedure painful?",
    a: "The placement itself is done under local anaesthesia, so you do not feel pain during the procedure. For anxious patients or longer multi-implant appointments we offer conscious sedation. Most patients describe the recovery as milder than a tooth extraction.",
  },
  {
    q: "How long does the full implant treatment take?",
    a: "Placement takes under an hour per implant. The implant then integrates with the bone over roughly 3–4 months, with scheduled review visits, after which the permanent crown is fitted. Some cases are suitable for immediate loading — we confirm this from your OPG.",
  },
  {
    q: "Do you do the root canal in-house or refer it out?",
    a: "In-house. Pearl Dental has a resident Endodontist, so root canals are completed here — most in a single sitting — rather than being referred to another clinic mid-treatment.",
  },
  {
    q: "I am very anxious about dental treatment. What are my options?",
    a: "Conscious sedation is available at the clinic. You remain responsive and safe throughout, but relaxed and largely unaware of the procedure. It is particularly useful for patients who need several procedures completed in one longer appointment.",
  },
  {
    q: "Am I too old, or is my bone too weak, for implants?",
    a: "Age on its own is rarely a barrier — we have treated patients well into their seventies. What matters is bone volume and general health, both of which we assess from the in-house OPG at your first visit. Where bone is insufficient, grafting is often an option.",
  },
  {
    q: "Where exactly is the clinic and what are the timings?",
    a: "Pearl Dental is at 101/1, F Block, 3rd Street, Anna Nagar East, Chennai 600102 — near Valliammal School, behind Hotel Bhalaji Bhavan. We are open Monday to Saturday, 9:30 AM–1:00 PM and 4:00 PM–8:00 PM. Sunday is closed.",
  },
];

/**
 * Six USP tiles for the hero grid. Icons are lucide-react names, resolved in
 * HeroSection — no image files needed, so nothing breaks before photography lands.
 */
export const heroUsps = [
  { icon: "Award", title: "18,000+ Implants", desc: "Pearl Dental & Apollo Proton" },
  { icon: "ScanLine", title: "In-house OPG", desc: "Same-visit diagnosis" },
  { icon: "Sparkles", title: "Immediate Loading", desc: "Teeth in 48 hours" },
  { icon: "Moon", title: "Conscious Sedation", desc: "Comfortable, anxiety-free" },
  { icon: "Zap", title: "Strategic Implants", desc: "No bone? No problem" },
  { icon: "ShieldCheck", title: "Ethical Pricing", desc: "Written estimate upfront" },
] as const;

/** The "Our commitment" list under the hero. */
export const commitments = [
  "<strong>18,000+ implants</strong> placed at Pearl Dental & Apollo Proton Cancer Centre.",
  "<strong>In-house Endodontist</strong> — root canals finished here, never referred out.",
  "<strong>Immediate loading</strong> — chew normal food in just 48 hours post-surgery.",
  "<strong>Conscious sedation</strong> for anxious patients and multi-implant sittings.",
  "<strong>Written estimates</strong> before treatment — no upselling, no surprises.",
  "Diagnosis, surgery, lab work and follow-up <strong>under one roof</strong>.",
];
