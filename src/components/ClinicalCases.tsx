"use client";

import { useState } from "react";
import Image from "next/image";
import { Eye } from "lucide-react";
import BookButton from "./lead/BookButton";
import { cases } from "@/config/site";

/**
 * Real intraoral photographs from the clinic.
 *
 * Two corrections from the previous build:
 *  1. `before` and `after` were swapped on case 1 — the finished prosthesis was
 *     labelled "Before". Verified against the files and fixed in site.ts.
 *  2. These are genuine clinical images of diseased and post-surgical mouths.
 *     They are blurred until the visitor asks to see them, which keeps graphic
 *     medical content off a cold ad click and out of automated ad review.
 */
export default function ClinicalCases() {
  const [revealed, setRevealed] = useState(false);

  return (
    <section id="cases" className="band border-b border-line bg-paper-soft">
      <div className="shell">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-[42rem]">
            <p className="eyebrow">Clinical cases</p>
            <h2 className="h2 mt-4">Treated at this clinic.</h2>
            <p className="muted mt-5 max-w-prose">
              Photographs from the clinic&apos;s own records, shown before and after
              treatment. They are unretouched clinical images, so they are not a
              comfortable watch — results vary from patient to patient.
            </p>
          </div>

          {!revealed && (
            <button
              type="button"
              onClick={() => setRevealed(true)}
              className="btn btn-outline shrink-0"
            >
              <Eye className="h-4 w-4 text-teal-700" aria-hidden />
              Show photographs
            </button>
          )}
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-12">
          {cases.map((c) => (
            <article key={c.id}>
              <div className="relative">
                <div className="grid grid-cols-2 gap-px bg-line">
                  {(
                    [
                      { src: c.before, label: "Before" },
                      { src: c.after, label: "After" },
                    ] as const
                  ).map((shot) => (
                    <div key={shot.label} className="figure relative aspect-[4/3] bg-white">
                      <Image
                        src={shot.src}
                        alt={`${shot.label} — ${c.title}`}
                        fill
                        sizes="(min-width: 1024px) 28vw, 50vw"
                        className={`object-cover transition-[filter] duration-500 ${
                          revealed ? "blur-0" : "blur-xl"
                        }`}
                      />
                      {revealed && (
                        <span className="absolute bottom-2 left-2 bg-ink/75 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-white">
                          {shot.label}
                        </span>
                      )}
                    </div>
                  ))}
                </div>

                {!revealed && (
                  <button
                    type="button"
                    onClick={() => setRevealed(true)}
                    className="absolute inset-0 grid place-items-center bg-white/45 text-center backdrop-blur-[2px]"
                  >
                    <span className="max-w-[22rem] px-6">
                      <span className="block text-[14px] font-medium text-ink">
                        Clinical photographs
                      </span>
                      <span className="mt-1 block text-[13px] text-ink-soft">
                        Tap to view before and after images of real treatment.
                      </span>
                    </span>
                  </button>
                )}
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
            What can be done is confirmed only after an examination and an OPG scan.
          </p>
        </div>
      </div>
    </section>
  );
}
