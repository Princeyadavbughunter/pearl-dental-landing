import BookButton from "./lead/BookButton";
import { treatments, site } from "@/config/site";

/**
 * Treatments — a tabular list rather than a grid of cards.
 *
 * Rows are hairline-separated with the price set right, so the section scans
 * like a practice's actual treatment list. Price is information here, not the
 * argument: the two implant rows are emphasised by weight, not by colour.
 */
export default function TreatmentsSection() {
  return (
    <section id="treatments" className="band border-b border-line bg-white">
      <div className="shell">
        <div className="max-w-[42rem]">
          <p className="eyebrow">Treatments</p>
          <h2 className="h2 mt-4">What the clinic treats.</h2>
          <p className="muted mt-5 max-w-prose">
            Implants and full mouth rehabilitation are the focus, alongside the general
            and specialist dentistry a family needs. Every plan is quoted in writing
            before treatment begins.
          </p>
        </div>

        <ul className="mt-12 border-t border-line">
          {treatments.map((item) => (
            <li
              key={item.title}
              className="grid grid-cols-1 gap-x-8 gap-y-2 border-b border-line py-6 sm:grid-cols-[minmax(0,16rem)_1fr_auto] sm:items-baseline sm:py-7"
            >
              <h3
                className={`text-[18px] leading-snug sm:text-[19px] ${
                  item.featured ? "font-medium text-teal-800" : "font-normal"
                }`}
              >
                {item.title}
              </h3>
              <p className="muted max-w-prose !text-[15px]">{item.body}</p>
              <p className="text-[13px] uppercase tracking-[0.08em] text-ink-mute sm:text-right">
                {item.price}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <BookButton className="btn btn-primary">Get a written estimate</BookButton>
          <p className="text-[14px] text-ink-mute">{site.consultation.includes}.</p>
        </div>
      </div>
    </section>
  );
}
