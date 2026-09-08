import Image from "next/image";
import BookButton from "./lead/BookButton";
import { site } from "@/config/site";

/**
 * About the founder — editorial, two-column.
 *
 * Every line of copy is the client's approved text (see `site.doctor`). Nothing
 * is inferred: no patient or implant counts, no hospital affiliation, and the
 * photograph captions describe only what is visible in the frame.
 *
 * The section carries the two award photographs and no portrait — the desk
 * portrait leads the hero and is not repeated here.
 */
export default function DoctorProfile() {
  const { doctor } = site;

  return (
    <section id="doctor" className="band border-b border-line bg-paper-soft">
      <div className="shell grid gap-12 lg:grid-cols-[1.1fr_0.75fr] lg:items-start lg:gap-16">
        <div>
          <header>
            <p className="eyebrow">About the founder</p>
            <h2 className="h2 mt-4">{doctor.name}</h2>
            <p className="mt-4 text-[16px] font-medium text-ink">{doctor.role}</p>
            <p className="mt-1 text-[15px] text-teal-700">{doctor.credential}</p>
          </header>

          <div className="mt-8 space-y-4">
            {doctor.bio.map((para, i) => (
              <p
                key={para.slice(0, 24)}
                className={
                  i === 0
                    ? "text-[17px] leading-[1.65] text-ink-soft sm:text-[18px]"
                    : "muted"
                }
              >
                {para}
              </p>
            ))}
          </div>

          <h3 className="mt-10 text-[13px] font-semibold uppercase tracking-[0.12em] text-ink-mute">
            Clinical expertise
          </h3>
          <dl className="mt-5 border-t border-line">
            {doctor.expertise.map((item) => (
              <div
                key={item.title}
                className="grid gap-1 border-b border-line py-4 sm:grid-cols-[minmax(0,15rem)_1fr] sm:gap-6 sm:py-5"
              >
                <dt className="text-[16px] font-medium leading-snug">{item.title}</dt>
                <dd className="muted !text-[14px]">{item.body}</dd>
              </div>
            ))}
          </dl>

          {/* Credibility line — small and scannable, never oversized figures. */}
          <ul className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-[13px] font-medium uppercase tracking-[0.1em] text-ink-soft">
            {doctor.credibility.map((item, i) => (
              <li key={item} className="flex items-center gap-3">
                {i > 0 && <span aria-hidden className="h-1 w-1 rounded-full bg-teal-500" />}
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

        {/* Full column width, stacked, so two photographs still hold the column
            rather than reading as leftover thumbnails. */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
          {doctor.photos.map((shot) => (
            <figure key={shot.src}>
              <div className="figure aspect-[4/3] w-full rounded-sm border border-line">
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  fill
                  loading="lazy"
                  sizes="(min-width: 1024px) 32vw, (min-width: 640px) 45vw, 100vw"
                  className="object-cover"
                  style={{ objectPosition: shot.position }}
                />
              </div>
              <figcaption className="mt-2.5 text-[13px] leading-snug text-ink-mute">
                {shot.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
