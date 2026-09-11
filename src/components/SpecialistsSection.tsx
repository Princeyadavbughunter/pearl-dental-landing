import { User } from "lucide-react";
import { specialists } from "@/config/site";

/**
 * The wider specialist team, alongside the founder profiled in
 * `DoctorProfile`. Sourced from the clinic's own site — see `specialists` in
 * site.ts for the individual profile pages each bio is condensed from.
 */
export default function SpecialistsSection() {
  return (
    <section id="specialists" className="band border-b border-line bg-white">
      <div className="shell">
        <div className="max-w-[42rem]">
          <p className="eyebrow">The wider team</p>
          <h2 className="h2 mt-4">Specialists & dental staff.</h2>
          <p className="muted mt-5 max-w-prose">
            Treatment plans draw on specialists across surgery, periodontics, endodontics,
            orthodontics and anaesthesia — not one dentist doing everything.
          </p>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {specialists.map((doctor) => (
            <li key={doctor.name} className="panel p-6">
              <div className="flex items-center gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-teal-50 text-teal-700">
                  <User className="h-5 w-5" aria-hidden />
                </span>
                <span>
                  <span className="block text-[16px] font-medium leading-snug text-ink">
                    {doctor.name}, {doctor.credential}
                  </span>
                  <span className="mt-1 inline-block bg-teal-50 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-teal-700">
                    {doctor.role}
                  </span>
                </span>
              </div>

              <p className="muted mt-4 border-t border-line pt-4">{doctor.bio}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
