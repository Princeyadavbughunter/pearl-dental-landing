import { treatments, site } from "@/config/site";

interface TreatmentsSectionProps {
  onBookAppointment: () => void;
}

export default function TreatmentsSection({ onBookAppointment }: TreatmentsSectionProps) {
  return (
    <section id="implants" className="bg-white">
      <div className="shell">
        <div className="mb-14 text-center">
          <p className="eyebrow">Treatments &amp; Pricing</p>
          <h2 className="section-title mt-3">
            <span className="text-gradient-brand">{site.offer.headline}</span>
          </h2>
          <div className="rule-brand mt-6" />
          <p className="section-lede mx-auto max-w-3xl">
            Transparent, written pricing — you see the estimate before treatment starts,
            with a clear reason for every line on it.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {treatments.map((item) => (
            <div key={item.title} className="card flex flex-col">
              <div className="mb-4 flex items-start justify-between gap-4">
                <h3 className="font-display text-xl">{item.title}</h3>
                <span className="chip shrink-0 whitespace-nowrap !px-3 !text-[11px]">
                  {item.price}
                </span>
              </div>
              <p className="text-[15px] leading-relaxed text-[var(--text-mute)]">{item.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button onClick={onBookAppointment} className="btn btn-brand text-lg">
            Get My Written Estimate
          </button>
          <p className="mt-3 text-sm text-[var(--text-dim)]">{site.offer.sub}</p>
        </div>
      </div>
    </section>
  );
}
