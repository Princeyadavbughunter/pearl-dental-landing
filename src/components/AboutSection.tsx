import BookButton from "./lead/BookButton";
import { whyChooseUs, site } from "@/config/site";

/**
 * Why Pearl Dental — asymmetric editorial.
 *
 * Heading sticks to the left while the reasons scroll past on the right. The
 * reasons are a numbered list separated by hairlines, not a grid of cards.
 */
export default function AboutSection() {
  return (
    <section id="why" className="band border-b border-line bg-white">
      <div className="shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-[calc(var(--header-h)+3rem)] lg:self-start">
          <p className="eyebrow">Why Pearl Dental</p>
          <h2 className="h2 mt-4">
            An implant practice, not a general clinic that also does implants.
          </h2>
          <p className="muted mt-5 max-w-prose">
            {site.name} is built around implantology and full mouth rehabilitation.
            That focus is the reason the diagnosis, the surgery and the prosthetics
            all happen in the same place.
          </p>
        </div>

        <ol className="border-t border-line">
          {whyChooseUs.map((item, i) => (
            <li
              key={item.title}
              className="grid grid-cols-[2.25rem_1fr] gap-x-4 border-b border-line py-7 sm:grid-cols-[3rem_1fr] sm:gap-x-6 sm:py-8"
            >
              <span
                aria-hidden
                className="tnum pt-1 font-display text-[15px] text-teal-500"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-[19px] font-medium leading-snug sm:text-[21px]">
                  {item.title}
                </h3>
                <p className="muted mt-2.5 max-w-prose">{item.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className="shell mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
        <BookButton className="btn btn-primary">Book a consultation</BookButton>
        <p className="text-[14px] text-ink-mute">
          One visit tells you where you stand. No obligation to proceed.
        </p>
      </div>
    </section>
  );
}
