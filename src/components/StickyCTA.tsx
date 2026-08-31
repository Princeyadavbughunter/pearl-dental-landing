import { Phone } from "lucide-react";
import { site } from "@/config/site";

interface StickyCtaProps {
  isVisible: boolean;
  onBookAppointment: () => void;
}

export default function StickyCTA({ isVisible, onBookAppointment }: StickyCtaProps) {
  const phone = site.contact.phones[0];

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-[60] border-t border-line bg-[rgba(255,251,247,0.96)] p-3 shadow-[0_-8px_30px_rgba(196,91,0,0.10)] backdrop-blur transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="shell flex flex-col items-center justify-between gap-3 sm:flex-row">
        <div className="text-center sm:text-left">
          <h3 className="font-display text-lg leading-tight">
            Ready to <span className="text-gradient-brand">transform your smile?</span>
          </h3>
          <p className="text-[13px] text-[var(--text-mute)]">{site.offer.sub}</p>
        </div>
        <div className="flex w-full gap-2 sm:w-auto">
          <button
            onClick={onBookAppointment}
            className="btn btn-brand flex-1 !px-5 !py-2.5 text-[13px] uppercase tracking-[0.1em]"
          >
            Book Now
          </button>
          <a
            href={`tel:+91${phone.replace(/^0/, "")}`}
            className="btn btn-outline flex-1 !px-5 !py-2.5 text-[13px] uppercase tracking-[0.1em]"
          >
            <Phone className="h-4 w-4" /> Call
          </a>
        </div>
      </div>
    </div>
  );
}
