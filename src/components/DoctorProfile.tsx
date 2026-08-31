import { Check } from "lucide-react";
import PhotoSlot from "./PhotoSlot";
import { site } from "@/config/site";

interface DoctorProfileProps {
  onBookAppointment: () => void;
}

export default function DoctorProfile({ onBookAppointment }: DoctorProfileProps) {
  const { doctor } = site;

  return (
    <section id="doctor" className="relative overflow-hidden">
      <div className="pointer-events-none absolute right-0 top-1/3 h-96 w-96 rounded-full bg-[var(--brand)] opacity-[0.05] blur-[130px]" />

      <div className="shell relative">
        <div className="mb-14 text-center">
          <p className="eyebrow">Meet Your Dentist</p>
          <h2 className="section-title mt-3">
            <span className="text-gradient-brand">{doctor.name}</span>
          </h2>
          <div className="rule-brand mt-6" />
          <p className="section-lede mx-auto max-w-2xl">
            {doctor.credential} · {doctor.experience} of practice
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-center">
          <div className="relative">
            <PhotoSlot
              src="/doctor.jpg"
              position="50% 15%"
              label="Dr. S. Egammai — portrait"
              alt={`${doctor.name}, ${doctor.credential}`}
              className="aspect-[4/5] rounded-lg border border-line shadow-[var(--shadow-lg)]"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-[var(--brand-2)] to-[var(--brand)] px-6 py-2 font-display text-[13px] font-bold text-white shadow-lg">
              {doctor.experience} Experience
            </div>
          </div>

          <div>
            <p className="text-[16px] leading-relaxed text-[var(--text-mute)]">{doctor.bio}</p>

            <ul className="mt-8 grid gap-3">
              {doctor.highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] text-[var(--text-mute)]">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-brand" />
                  {item}
                </li>
              ))}
            </ul>

            <button onClick={onBookAppointment} className="btn btn-brand mt-9 w-full sm:w-auto">
              Schedule Your Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
