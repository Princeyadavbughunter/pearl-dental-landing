import { site } from "@/config/site";

interface CTABoxProps {
  onBookAppointment: () => void;
}

export default function CTABox({ onBookAppointment }: CTABoxProps) {
  return (
    <section className="!py-0">
      <div className="bg-gradient-to-br from-[var(--brand-2)] via-[var(--brand)] to-[#a34b00] py-14 text-white">
        <div className="shell-narrow text-center">
          <h2 className="font-display text-2xl tracking-tight md:text-4xl">
            {site.offer.banner}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] font-medium text-white/85">
            Consultation, in-house OPG scan and a written treatment estimate with{" "}
            {site.doctor.name} — {site.doctor.credential}.
          </p>
          <button
            onClick={onBookAppointment}
            className="btn mt-8 bg-white text-[var(--brand)] shadow-lg transition hover:-translate-y-0.5 hover:bg-[var(--brand-soft)]"
          >
            Request a Call Back ➤
          </button>
          <p className="mt-3 text-[13px] font-medium text-white/70">
            Limited consultation slots each week — Mon to Sat only
          </p>
        </div>
      </div>
    </section>
  );
}
