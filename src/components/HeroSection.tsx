import Image from "next/image";
import { Phone } from "lucide-react";
import BookButton from "./lead/BookButton";
import { site, credentials } from "@/config/site";
import { telHref } from "@/lib/contact";

/**
 * Hero.
 *
 * One idea, stated plainly, next to a real photograph of the dentist in her own
 * consulting room. No pricing headline, no offer card, no countdown — the first
 * impression is meant to be "this is a real practice", not "this is an advert".
 */
export default function HeroSection() {
  const phone = site.contact.phones[0];

  return (
    <section id="top" className="border-b border-line bg-white">
      <div className="shell grid items-center gap-10 pb-0 pt-12 sm:pt-16 lg:grid-cols-[1.06fr_0.94fr] lg:gap-16 lg:pb-20 lg:pt-20">
        <div className="max-w-[36rem]">
          <p className="eyebrow flex items-start gap-2">
            <span
              aria-hidden
              className="mt-[0.42em] inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500"
            />
            <span>{site.strapline} · Anna Nagar East, Chennai</span>
          </p>

          <h1 className="display mt-5">
            Implant dentistry that starts and finishes in{" "}
            <em className="not-italic text-teal-700">one clinic</em>.
          </h1>

          <p className="lede mt-6">
            {site.doctor.name} — {site.doctor.credential}. {site.doctor.experience} of
            implant-focused practice in Anna Nagar East, with imaging, surgery, root
            canals and follow-up all in the building.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <BookButton className="btn btn-primary sm:px-8">
              Book a consultation
            </BookButton>
            <a href={telHref(phone)} className="btn btn-outline sm:px-8">
              <Phone className="h-4 w-4 text-teal-700" aria-hidden />
              {phone}
            </a>
          </div>

          <p className="mt-5 text-[14px] leading-relaxed text-ink-mute">
            {site.consultation.includes}.
            <span className="mt-1 block">
              Implants from{" "}
              <span className="font-medium text-ink">{site.pricing.implantFrom}</span>{" "}
              {site.pricing.note}.
            </span>
          </p>
        </div>

        {/* Full-bleed on phones so the photograph, not a card, carries the screen. */}
        <figure className="-mx-5 mt-2 sm:-mx-8 lg:mx-0 lg:mt-0">
          <div className="figure relative aspect-[4/3] w-full lg:aspect-[4/5] lg:rounded-sm">
            <Image
              src="/doc.webp"
              alt={`${site.doctor.name} at Pearl Dental, Anna Nagar East, Chennai`}
              fill
              priority
              fetchPriority="high"
              sizes="(min-width: 1024px) 44vw, 100vw"
              className="object-cover"
              style={{ objectPosition: "47% 28%" }}
            />
          </div>
          <figcaption className="px-5 pt-3 text-[13px] text-ink-mute sm:px-8 lg:px-0">
            {site.doctor.name} at the Anna Nagar East clinic.
          </figcaption>
        </figure>
      </div>

      {/* Credibility row — only facts with a source behind them. */}
      <div className="mt-12 border-t border-line lg:mt-0">
        <div className="shell">
          <dl className="grid grid-cols-2 divide-line lg:grid-cols-4 lg:divide-x">
            {credentials.map((item, i) => (
              <div
                key={item.label}
                className={`py-5 lg:px-7 lg:first:pl-0 lg:last:pr-0 ${
                  i % 2 === 1 ? "border-l border-line pl-5 lg:border-l-0 lg:pl-7" : ""
                } ${i < 2 ? "border-b border-line lg:border-b-0" : ""}`}
              >
                <dt className="font-display text-[22px] leading-none text-teal-700">
                  {item.value}
                </dt>
                <dd className="mt-1.5 text-[13px] leading-snug text-ink-mute">
                  {item.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
