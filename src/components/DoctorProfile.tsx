import Image from "next/image";
import { Check } from "lucide-react";
import BookButton from "./lead/BookButton";
import { site } from "@/config/site";

/**
 * About the founder — landing-page length, not CV length.
 *
 * This section had grown to roughly seventeen separate facts: three biography
 * paragraphs, a four-row expertise table, a three-chip credibility strip, and
 * three more lists of qualifications, training and affiliations. "Gold Medalist"
 * alone appeared five times across the page, and the expertise table restated
 * biography paragraph two almost word for word.
 *
 * What survives is the job this section actually has on an ad landing page:
 * who treats you, why they are credible, and a way to book them. One paragraph,
 * four credentials, a photograph, a button. Everything cut is still in
 * `site.doctor` for the clinic's own website.
 */
export default function DoctorProfile() {
  const { doctor } = site;
  const { clinical } = doctor.photos;

  return (
    <section id="doctor" className="band border-b border-line bg-paper-soft">
      <div className="shell grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-center lg:gap-16">
        <div>
          <p className="eyebrow">About the founder</p>
          <h2 className="h2 mt-4">{doctor.name}</h2>
          <p className="mt-4 text-[16px] font-medium text-ink">{doctor.role}</p>
          <p className="mt-1 text-[15px] text-teal-700">{doctor.credential}</p>

          <p className="mt-7 max-w-prose text-[17px] leading-[1.65] text-ink-soft sm:text-[18px]">
            {doctor.bio[0]}
          </p>

          <ul className="mt-8 grid gap-3 border-t border-line pt-7 sm:grid-cols-2 sm:gap-x-8">
            {doctor.proof.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-[15px] leading-snug text-ink-soft"
              >
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal-700" aria-hidden />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-9">
            <BookButton className="btn btn-primary">
              Book a Consultation with {doctor.shortName}
            </BookButton>
          </div>
        </div>

        <figure className="order-first lg:order-none">
          <div className="figure aspect-[4/5] w-full rounded-sm border border-line">
            <Image
              src={clinical.src}
              alt={clinical.alt}
              fill
              loading="lazy"
              sizes="(min-width: 1024px) 32vw, 100vw"
              className="object-cover"
              style={{ objectPosition: clinical.position }}
            />
          </div>
        </figure>
      </div>
    </section>
  );
}
