import BookButton from "./lead/BookButton";
import { treatmentGroups } from "@/config/site";

/**
 * Treatments, grouped exactly as the clinic groups them (Drive: Services
 * offered.docx) — implants and rehabilitation first, because that is what the
 * practice leads on and what the campaigns are for.
 *
 * A hairline-ruled list rather than a grid of icon cards: sixteen services in
 * cards would be a wall of decoration, and the grouping is the information.
 */
export default function TreatmentsSection() {
  return (
    <section id="treatments" className="band border-b border-line bg-white">
      <div className="shell">
        <div className="max-w-[42rem]">
          <p className="eyebrow">Treatments</p>
          <h2 className="h2 mt-4">What the clinic treats.</h2>
          <p className="muted mt-5 max-w-prose">
            Implants and full-mouth rehabilitation are the focus, supported by the
            general and specialist dentistry a family needs — with a multidisciplinary
            team covering implantology, prosthodontics, oral surgery, periodontics and
            endodontics.
          </p>
        </div>

        <div className="mt-12 space-y-12">
          {treatmentGroups.map((group) => (
            <div key={group.group}>
              <h3
                className={`text-[13px] font-semibold uppercase tracking-[0.12em] ${
                  group.lead ? "text-teal-700" : "text-ink-mute"
                }`}
              >
                {group.group}
              </h3>
              <ul className="mt-5 grid gap-x-12 border-t border-line lg:grid-cols-2">
                {group.items.map((item) => (
                  <li
                    key={item.title}
                    className="grid gap-1 border-b border-line py-4 sm:grid-cols-[minmax(0,17rem)_1fr] sm:gap-6 sm:py-4"
                  >
                    <h4
                      className={`text-[16px] leading-snug ${
                        group.lead ? "font-medium text-ink" : "text-ink"
                      }`}
                    >
                      {item.title}
                    </h4>
                    <p className="muted !text-[14px]">{item.body}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <BookButton className="btn btn-primary">Book a consultation</BookButton>
          <p className="text-[14px] text-ink-mute">
            Treatment is planned after a clinical examination and diagnostic evaluation.
          </p>
        </div>
      </div>
    </section>
  );
}
