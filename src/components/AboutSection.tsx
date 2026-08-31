import { Check, Users } from "lucide-react";
import { site, whyChooseUs } from "@/config/site";

export default function AboutSection() {
  return (
    <section id="why" className="bg-white">
      <div className="shell">
        <div className="mb-14 text-center">
          <p className="eyebrow">Why Pearl Dental</p>
          <h2 className="section-title mt-3">
            An implant practice, <span className="text-gradient-brand">not a general clinic</span>{" "}
            that also does implants
          </h2>
          <div className="rule-brand mt-6" />
          <p className="section-lede mx-auto max-w-3xl">
            {site.doctor.bio}
          </p>
        </div>

        <div className="mb-14 grid gap-6 md:grid-cols-2">
          {whyChooseUs.map((item) => (
            <div key={item.title} className="card">
              <h3 className="font-display text-xl text-gradient-brand md:text-2xl">
                {item.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-[var(--text-mute)]">
                {item.body}
              </p>
            </div>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="card">
            <h3 className="mb-5 font-display text-xl md:text-2xl">Key Specializations</h3>
            <ul className="space-y-3">
              {[
                "Single, multiple & full-arch dental implants",
                "Full mouth rehabilitation",
                "Root canal treatment (in-house Endodontist)",
                "Crowns, bridges & digital smile design",
                "Laser gum therapy & air polishing",
                "Implant treatment under conscious sedation",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] text-[var(--text-mute)]">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-brand" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="card">
            <h3 className="mb-5 font-display text-xl md:text-2xl">Under One Roof</h3>
            <ul className="space-y-3">
              {[
                "In-house OPG — full-mouth X-ray on the same visit",
                "In-house Endodontist — root canals finished here",
                "Intraoral scanner for digital impressions",
                "Soft-tissue laser & conscious sedation on site",
                `A team of 5, led by ${site.doctor.name}`,
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] text-[var(--text-mute)]">
                  <Users className="mt-1 h-4 w-4 shrink-0 text-brand" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
