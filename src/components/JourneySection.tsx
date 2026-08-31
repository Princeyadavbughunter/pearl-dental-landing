import { implantSteps, site } from "@/config/site";

interface JourneySectionProps {
  onBookAppointment: () => void;
}

export default function JourneySection({ onBookAppointment }: JourneySectionProps) {
  const phone = site.contact.phones[0];

  return (
    <section id="journey">
      <div className="shell">
        <div className="mb-14 text-center">
          <p className="eyebrow">The Patient Journey</p>
          <h2 className="section-title mt-3">
            Your implant, <span className="text-gradient-brand">step by step</span>
          </h2>
          <div className="rule-brand mt-6" />
          <p className="section-lede mx-auto max-w-3xl">
            Five stages from the first consultation to the final crown — so you know
            exactly what happens, when, and what it costs.
          </p>
        </div>

        <div className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {implantSteps.map((step) => (
            <div key={step.step} className="card flex flex-col !p-6">
              <span className="mb-4 font-display text-4xl text-gradient-brand">{step.step}</span>
              <h3 className="mb-2 text-[17px] font-bold leading-snug">{step.title}</h3>
              <p className="text-sm leading-relaxed text-[var(--text-mute)]">{step.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-[22px] border border-line bg-[var(--surface)] p-6 text-center shadow-[var(--shadow-md)] md:p-10">
          <h3 className="font-display text-xl md:text-2xl">
            Ready for your <span className="text-gradient-brand">smile transformation?</span>
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-[15px] text-[var(--text-mute)]">
            Start with a consultation and an in-house OPG scan with {site.doctor.name}.
            You leave with a written plan and a written estimate — no obligation.
          </p>
          <div className="mt-7 flex flex-col justify-center gap-4 sm:flex-row">
            <button onClick={onBookAppointment} className="btn btn-brand text-lg">
              Book Consultation
            </button>
            <a href={`tel:+91${phone.replace(/^0/, "")}`} className="btn btn-outline text-lg">
              Call Now: {phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
