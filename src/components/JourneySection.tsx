import { implantSteps } from "@/config/site";

/**
 * The patient journey — a stepped timeline on a connecting rule.
 *
 * Renders once, at one place in the page. (The previous build's PDF appeared to
 * repeat this section; the document only ever contained one copy — see README.)
 */
export default function JourneySection() {
  return (
    <section id="journey" className="band border-b border-line bg-white">
      <div className="shell">
        <div className="max-w-[42rem]">
          <p className="eyebrow">The patient journey</p>
          <h2 className="h2 mt-4">What actually happens, in order.</h2>
          <p className="muted mt-5 max-w-prose">
            Five stages from the first consultation to the final crown, so you know what
            each visit involves and what it costs before you commit to any of it.
          </p>
        </div>

        <ol className="relative mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          {/* The rule the steps sit on — desktop only, decorative. */}
          <span
            aria-hidden
            className="absolute left-0 right-0 top-[7px] hidden h-px bg-line lg:block"
          />
          {implantSteps.map((step) => (
            <li key={step.step} className="relative lg:pr-5">
              <span
                aria-hidden
                className="mb-5 hidden h-[15px] w-[15px] rounded-full border-2 border-teal-500 bg-white lg:block"
              />
              <p className="tnum font-display text-[15px] text-teal-500 lg:hidden">
                {step.step}
              </p>
              <h3 className="mt-1 text-[17px] font-medium leading-snug lg:mt-0">
                {step.title}
              </h3>
              <p className="muted mt-2.5 !text-[14px]">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
