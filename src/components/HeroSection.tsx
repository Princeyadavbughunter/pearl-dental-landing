import {
  Award,
  Moon,
  Phone,
  ScanLine,
  ShieldCheck,
  Sparkles,
  Star,
  Zap,
  type LucideIcon,
} from "lucide-react";
import PhotoSlot from "./PhotoSlot";
import { site, heroUsps, commitments, trustStrip } from "@/config/site";

interface HeroSectionProps {
  onBookAppointment: () => void;
}

const icons: Record<string, LucideIcon> = {
  Award,
  ScanLine,
  Sparkles,
  Moon,
  Zap,
  ShieldCheck,
};

export default function HeroSection({ onBookAppointment }: HeroSectionProps) {
  const phone = site.contact.phones[0];
  const tel = `tel:+91${phone.replace(/^0/, "")}`;

  return (
    <section id="top" className="on-dark relative overflow-hidden">
      {/* Real hero background from pearldentalchennai.in */}
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero.png')" }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[var(--bg)]/80 via-[var(--bg)]/70 to-[var(--bg)]" />
      {/* Warm bloom behind the hero */}
      <div className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-[var(--brand-2)] opacity-[0.22] blur-[120px]" />
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-40" />

      <div className="shell relative">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <span className="chip mb-6">
            <Star className="h-3.5 w-3.5" /> {site.tagline}
          </span>
          <h1 className="font-display text-[34px] leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            Transform Your Smile With
            <br />
            <span className="text-gradient-brand">{site.name}</span>
          </h1>
          <p className="section-lede mx-auto max-w-2xl">
            {site.doctor.name} — {site.doctor.credential}. {site.doctor.experience} of
            implant-focused practice in Anna Nagar East, with diagnosis, surgery and
            follow-up all under one roof.
          </p>
        </div>

        <div className="mb-16 grid gap-8 md:grid-cols-2 md:items-stretch">
          <PhotoSlot
            src="/doctor.jpg"
            position="50% 15%"
            label="Dr. Egammai Manikandan — Pearl Dental"
            alt={`${site.doctor.name} at Pearl Dental, Anna Nagar East, Chennai`}
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
            className="h-64 rounded-lg border border-line md:h-[450px]"
          />

          {/* Offer card */}
          <div className="group relative">
            <div className="absolute -inset-px rounded-[22px] bg-gradient-to-br from-[var(--brand-2)] via-transparent to-[var(--brand)] opacity-30 blur-[2px] transition duration-700 group-hover:opacity-60" />
            <div className="relative flex h-full flex-col justify-center rounded-[22px] border border-line bg-[var(--surface)] p-8 text-center shadow-[var(--shadow-md)]">
              <h2 className="font-display text-2xl tracking-tight md:text-3xl">
                Implant Pricing
              </h2>
              <div className="rule-brand my-5" />
              <p className="font-display text-4xl text-gradient-brand md:text-5xl">
                {site.offer.headline.replace("Dental Implants from ", "")}
              </p>
              <p className="mt-2 text-lg font-light text-[var(--text-mute)]">per implant</p>
              <p className="mt-5 border-t border-[var(--line-soft)] pt-5 text-sm text-[var(--text-mute)]">
                Final cost depends on the implant system, the crown and whether a graft is
                needed — you get a written estimate before anything begins.
              </p>

              <button onClick={onBookAppointment} className="btn btn-brand mt-7 w-full flex-col !gap-0.5 !py-4">
                <span className="text-lg">Book Consultation</span>
                <span className="text-[11px] font-medium opacity-80">
                  {site.offer.sub}
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="mb-16 flex flex-col justify-center gap-4 md:flex-row">
          <button onClick={onBookAppointment} className="btn btn-brand text-lg md:min-w-[240px]">
            Book Consultation
          </button>
          <a href={tel} className="btn btn-outline text-lg md:min-w-[240px]">
            <Phone className="h-5 w-5" /> {phone}
          </a>
        </div>

        {/* Trust marquee */}
        <div className="mb-16 overflow-hidden border-y border-line py-4">
          <div className="flex w-max animate-marquee gap-10">
            {[...trustStrip, ...trustStrip].map((item, i) => (
              <span
                key={i}
                className="flex shrink-0 items-center gap-3 text-[13px] uppercase tracking-[0.18em] text-[var(--text-mute)]"
              >
                <span className="text-brand">◆</span>
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Why choose us tiles */}
        <div className="mb-16">
          <h3 className="mb-10 text-center font-display text-2xl tracking-tight md:text-4xl">
            Why choose <span className="text-gradient-brand">{site.name}?</span>
          </h3>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6 md:gap-6">
            {heroUsps.map((usp) => {
              const Icon = icons[usp.icon] ?? Award;
              return (
                <div
                  key={usp.title}
                  className="glass-card group rounded-[18px] p-5 text-center transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="mx-auto mb-3 grid h-14 w-14 place-items-center rounded-full bg-brand-soft transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-6 w-6 text-brand" />
                  </div>
                  <h4 className="mb-1 text-sm font-bold leading-tight md:text-[15px]">
                    {usp.title}
                  </h4>
                  <p className="text-xs leading-snug text-[var(--text-dim)]">{usp.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Commitment list */}
        <div className="glass-card mx-auto max-w-4xl rounded-[22px] p-6 md:p-10">
          <h3 className="mb-6 border-b border-[var(--line-soft)] pb-4 text-center font-display text-xl text-gradient-brand md:text-2xl">
            Our Commitment to Ethical Practice
          </h3>
          <ul className="grid gap-4 md:grid-cols-2">
            {commitments.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 text-brand">★</span>
                <span
                  className="text-sm text-[var(--text-mute)] md:text-[15px] [&_strong]:text-[var(--text)]"
                  dangerouslySetInnerHTML={{ __html: item }}
                />
              </li>
            ))}
          </ul>
          <div className="mt-8 text-center">
            <button onClick={onBookAppointment} className="btn btn-brand w-full md:w-auto">
              Request a Call Back ➤
            </button>
            <small className="mt-3 block text-sm text-[var(--text-dim)]">
              Includes consultation, OPG scan &amp; written estimate
            </small>
          </div>
        </div>
      </div>
    </section>
  );
}
