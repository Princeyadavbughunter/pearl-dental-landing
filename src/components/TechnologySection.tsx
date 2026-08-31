import { Check } from "lucide-react";
import { technology } from "@/config/site";

export default function TechnologySection() {
  return (
    <section id="technology" className="relative overflow-hidden surface-soft">
      <div className="pointer-events-none absolute -bottom-32 left-0 h-96 w-96 rounded-full bg-[var(--brand-2)] opacity-[0.08] blur-[120px]" />

      <div className="shell relative">
        <div className="mb-14 text-center">
          <p className="eyebrow">The Technology</p>
          <h2 className="section-title mt-3">
            Advanced <span className="text-gradient-brand">Implant Dentistry</span>
          </h2>
          <div className="rule-brand mt-6" />
          <p className="section-lede mx-auto max-w-3xl">
            Everything an implant case needs — imaging, scanning, surgery, sedation and
            healing review — happens inside the clinic. No referrals mid-treatment, no
            running between diagnostic centres.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {technology.map((item) => (
            <div key={item.title} className="card group flex flex-col">
              <div className="mb-6 grid h-32 place-items-center rounded-[16px] border border-line bg-brand-soft">
                <span className="font-display text-4xl text-gradient-brand">
                  {item.title
                    .split(" ")
                    .map((w) => w[0])
                    .join("")
                    .slice(0, 3)}
                </span>
              </div>
              <h3 className="mb-3 text-center font-display text-xl">{item.title}</h3>
              <p className="mb-6 min-h-[96px] text-center text-sm leading-relaxed text-[var(--text-mute)]">
                {item.body}
              </p>
              <ul className="mt-auto space-y-3">
                {item.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-[var(--text-mute)]">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                    <span className="font-light">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
