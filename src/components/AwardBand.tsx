import Image from "next/image";
import { award } from "@/config/site";

/**
 * Recognition.
 *
 * Was the "proof" section, which paired a single site testimonial with this
 * award. The testimonial is superseded by `GoogleReviews` — six attributable
 * reviews on a public listing beat one quoted from the clinic's own site — so
 * this is now the award alone.
 *
 * The wording is read directly off the certificate, and the certificate is shown
 * beside it, so the claim can be checked rather than taken on trust.
 */
export default function AwardBand() {
  return (
    <section aria-labelledby="award-title" className="border-b border-line bg-white">
      <div className="shell band-tight">
        <div className="grid items-center gap-8 sm:grid-cols-[auto_1fr] sm:gap-10">
          <div className="figure h-[190px] w-[140px] shrink-0 rounded-sm border border-line bg-paper-soft">
            <Image
              src={award.image}
              alt={award.imageAlt}
              fill
              loading="lazy"
              sizes="140px"
              className="object-contain p-2"
            />
          </div>

          <div className="max-w-prose">
            <p className="eyebrow">Recognition</p>
            <h2 id="award-title" className="h3 mt-3">
              {award.title}
            </h2>
            <p className="muted mt-3">{award.body}</p>
            <p className="mt-2 text-[13px] text-ink-mute">Awarded {award.date}.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
