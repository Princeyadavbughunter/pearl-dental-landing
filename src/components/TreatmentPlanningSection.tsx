import BookButton from "./lead/BookButton";
import { treatmentPlanning } from "@/config/site";

/**
 * Treatment planning.
 *
 * Replaces the published price table. The argument is deliberately the opposite
 * of a price list: there is no package and no fixed figure, because what the
 * treatment should be is a clinical finding, not a menu item.
 *
 * No amounts, no "from", no affordability language — see `treatmentPlanning`
 * and `unverified.priceGuide`.
 *
 * Composition: a sticky statement on the left, the five factors as
 * hairline-separated rows on the right. The rows use small-caps labels rather
 * than the numbered serif headings used in "Why Pearl Dental", so the two
 * two-column sections do not read as the same layout twice.
 */
export default function TreatmentPlanningSection() {
  const { eyebrow, heading, description, factors, cta, ctaNote } = treatmentPlanning;

  return (
    <section id="treatment-planning" className="band border-b border-line bg-paper-warm">
      <div className="shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div className="lg:sticky lg:top-[calc(var(--header-h)+3rem)] lg:self-start">
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="h2 mt-4">{heading}</h2>
          <p className="muted mt-6 max-w-prose">{description}</p>

          <div className="mt-9">
            <BookButton className="btn btn-primary">{cta}</BookButton>
            <p className="mt-4 max-w-[38ch] text-[14px] leading-relaxed text-ink-mute">
              {ctaNote}
            </p>
          </div>
        </div>

        <dl className="border-t border-line">
          {factors.map((factor) => (
            <div
              key={factor.label}
              className="grid gap-2 border-b border-line py-6 sm:grid-cols-[minmax(0,13rem)_1fr] sm:gap-8 sm:py-7"
            >
              <dt className="text-[12px] font-semibold uppercase leading-relaxed tracking-[0.14em] text-teal-700">
                {factor.label}
              </dt>
              <dd className="text-[15px] leading-[1.7] text-ink-soft">{factor.body}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
