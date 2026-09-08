"use client";

import { useEffect, useState } from "react";
import { MessageCircle, Phone } from "lucide-react";
import { site } from "@/config/site";
import { telHref, whatsappHref, WHATSAPP_ENQUIRY } from "@/lib/contact";
import { useLeadDialog } from "./lead/LeadProvider";

/**
 * Mobile action bar.
 *
 * All three routes to the clinic live in one bar, which is why there is no
 * floating WhatsApp button on small screens — the previous build had a FAB at
 * bottom-24 sitting on top of a full-width sticky bar. The footer reserves
 * matching height so nothing is ever covered.
 */
export default function StickyCTA() {
  const { open } = useLeadDialog();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 420);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white/97 backdrop-blur transition-transform duration-300 md:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="grid grid-cols-[auto_auto_1fr] items-center gap-2 px-3 py-2.5">
        <a
          href={telHref(site.contact.phones[0])}
          aria-label={`Call ${site.name}`}
          className="grid h-12 w-12 place-items-center rounded-sm border border-line text-teal-700"
        >
          <Phone className="h-5 w-5" aria-hidden />
        </a>
        <a
          href={whatsappHref(WHATSAPP_ENQUIRY)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Message Pearl Dental on WhatsApp"
          className="grid h-12 w-12 place-items-center rounded-sm border border-line text-whatsapp"
        >
          <MessageCircle className="h-5 w-5" aria-hidden />
        </a>
        <button onClick={open} className="btn btn-primary w-full !px-4">
          Book a consultation
        </button>
      </div>
    </div>
  );
}
