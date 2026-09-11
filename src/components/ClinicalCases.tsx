import Image from "next/image";
import BookButton from "./lead/BookButton";
import { cases } from "@/config/site";

/**
 * Real intraoral photographs from the clinic.
 *
 * `before` and `after` were swapped on case 1 in an earlier build — the
 * finished prosthesis was labelled "Before". Verified against the files and
 * fixed in site.ts.
 */
export default function ClinicalCases() {
  return (
    <section id="cases" className="band border-b border-line bg-paper-soft">
      <div className="shell">
        <div className="max-w-[42rem]">
          <p className="eyebrow">Clinical cases</p>
          <h2 className="h2 mt-4">Treated at this clinic.</h2>
          <p className="muted mt-5 max-w-prose">
            Photographs from the clinic&apos;s own records, shown before and after
            treatment. They are unretouched clinical images — results vary from
            patient to patient.
          </p>
        </div>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {cases.map((c) => (
            <article key={c.id}>
              <div className="grid grid-cols-2 gap-px bg-line">
                {[
                  { src: c.before, label: c.beforeLabel },
                  { src: c.after, label: c.afterLabel },
                ].map((shot) => (
                  <div key={shot.label} className="figure relative aspect-[4/3] bg-white">
                    <Image
                      src={shot.src}
                      alt={`${shot.label} — ${c.title}`}
                      fill
                      sizes="(min-width: 1024px) 18vw, 44vw"
                      className="object-cover"
                    />
                    <span className="absolute bottom-2 left-2 bg-ink/75 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-white">
                      {shot.label}
                    </span>
                  </div>
                ))}
              </div>

              <h3 className="mt-5 text-[19px] font-medium leading-snug">{c.title}</h3>
              <p className="muted mt-2 max-w-prose">{c.desc}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <BookButton className="btn btn-primary">
            Ask what is possible in your case
          </BookButton>
          <p className="text-[14px] text-ink-mute">
            What is possible in your case is confirmed only after a clinical examination.
          </p>
        </div>
      </div>
    </section>
  );
}
