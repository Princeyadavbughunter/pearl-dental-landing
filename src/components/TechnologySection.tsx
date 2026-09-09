import BookButton from "./lead/BookButton";
import { capabilities } from "@/config/site";

/**
 * "Under one roof" — the section three of the five campaign angles point at.
 *
 * The previous build had this component written but never mounted, so
 * #technology did not exist in the document and those ads landed at the top of
 * the page. It is now the page's one dark band, in the petrol teal taken from
 * the clinic's own reception panelling.
 */
export default function TechnologySection() {
  return (
    <section id="technology" className="band bg-teal-900 text-white">
      <div className="shell">
        <div className="max-w-[46rem]">
          <p className="eyebrow !text-teal-300">Clinical technology</p>
          <h2 className="h2 mt-4 text-white">
            The technology behind a predictable result.
          </h2>
          <p className="mt-5 max-w-prose text-[17px] leading-[1.65] text-white/70">
            Diagnosis, digital planning, surgery and the final restoration are handled by
            one practice and one multidisciplinary team — which is what allows the implant
            to be planned backwards from the teeth you will actually end up with.
          </p>
        </div>

        <ul className="mt-14 grid gap-px border-t border-white/15 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item) => (
            <li
              key={item.title}
              className="border-b border-white/15 py-7 sm:pr-8 lg:py-9"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-teal-300">
                {item.meta}
              </p>
              <h3 className="mt-3 text-[20px] font-medium text-white">{item.title}</h3>
              <p className="mt-2.5 text-[15px] leading-[1.7] text-white/65">
                {item.body}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <BookButton className="btn btn-white">Book a consultation</BookButton>
          <p className="text-[14px] text-white/60">
            Your first visit includes the examination, the evaluation and an estimate.
          </p>
        </div>
      </div>
    </section>
  );
}
