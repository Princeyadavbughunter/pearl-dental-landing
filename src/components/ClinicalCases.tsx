'use client';

import Image from "next/image";
import { site } from "@/config/site";

interface ClinicalCasesProps {
  onBookAppointment: () => void;
}

export default function ClinicalCases({ onBookAppointment }: ClinicalCasesProps) {
  return (
    <section id="cases" className="bg-white">
      <div className="shell">
        <div className="mb-14 text-center">
          <p className="eyebrow">Clinical Excellence</p>
          <h2 className="section-title mt-3">
            Real Patient <span className="text-gradient-brand">Transformations</span>
          </h2>
          <div className="rule-brand mt-6" />
          <p className="section-lede mx-auto max-w-3xl">
            Before and after results from actual Pearl Dental patients. 18,000+ implants placed — 
            here are just a few of the lives we have transformed.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {site.cases.map((c) => (
            <div key={c.id} className="card group overflow-hidden !p-0">
              {/* Before/After image pair */}
              <div className="relative">
                <div className="grid grid-cols-2">
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={c.before}
                      alt={`Before — ${c.title}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(min-width: 768px) 17vw, 50vw"
                    />
                    <span className="absolute bottom-2 left-2 rounded bg-black/60 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                      Before
                    </span>
                  </div>
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={c.after}
                      alt={`After — ${c.title}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(min-width: 768px) 17vw, 50vw"
                    />
                    <span className="absolute bottom-2 right-2 rounded bg-[var(--brand)]/80 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                      After
                    </span>
                  </div>
                </div>
                <div className="absolute inset-y-0 left-1/2 w-0.5 -translate-x-1/2 bg-white/90" />
              </div>
              <div className="p-5">
                <span className="chip !text-[10px]">Case {c.id}</span>
                <h3 className="mt-2 font-display text-[17px]">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--text-mute)]">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button onClick={onBookAppointment} className="btn btn-brand text-lg">
            Book Your Consultation
          </button>
          <p className="mt-3 text-sm text-[var(--text-dim)]">
            Consultation + OPG scan + written treatment estimate
          </p>
        </div>
      </div>
    </section>
  );
}
