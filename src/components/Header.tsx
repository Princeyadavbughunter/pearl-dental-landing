import { MapPin, Phone } from "lucide-react";
import Logo from "./Logo";
import { site } from "@/config/site";

interface HeaderProps {
  onBookAppointment: () => void;
}

export default function Header({ onBookAppointment }: HeaderProps) {
  const phone = site.contact.phones[0];

  return (
    <header className="relative z-50 border-b border-line">
      {/* Offer ribbon — the single source of the offer copy is site.offer.banner */}
      <div className="bg-gradient-to-r from-[var(--brand-2)] via-[var(--brand)] to-[var(--brand-2)] px-4 py-2 text-center">
        <p className="font-display text-[12px] font-semibold uppercase tracking-[0.14em] text-white sm:text-[13px]">
          ★ {site.offer.banner}
        </p>
      </div>

      <div className="glass">
        <div className="shell flex flex-col gap-4 py-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col items-center gap-4 md:flex-row md:gap-8">
            <Logo priority />
            <a
              href={site.contact.googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex max-w-sm items-start gap-2 text-center text-[13px] leading-snug text-[var(--text-mute)] transition-colors hover:text-brand md:text-left"
            >
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
              <span className="border-b border-transparent group-hover:border-[var(--brand)]">
                {site.contact.addressLines.join(", ")} — {site.contact.landmark}
              </span>
            </a>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <button onClick={onBookAppointment} className="btn btn-brand text-[13px] uppercase tracking-[0.12em]">
              Book Appointment
            </button>
            <a
              href={`tel:+91${phone.replace(/^0/, "")}`}
              className="btn btn-outline text-[13px] uppercase tracking-[0.12em]"
            >
              <Phone className="h-4 w-4" /> Call Now
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
