import { MessageCircle } from "lucide-react";
import { whatsappHref, WHATSAPP_ENQUIRY } from "@/lib/contact";

/**
 * Desktop only. On phones WhatsApp lives in the action bar instead, so the two
 * can never overlap.
 */
export default function WhatsAppButton() {
  return (
    <a
      href={whatsappHref(WHATSAPP_ENQUIRY)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Message Pearl Dental on WhatsApp"
      className="fixed bottom-6 right-6 z-40 hidden h-12 w-12 place-items-center rounded-full bg-whatsapp text-white shadow-md transition-transform duration-200 hover:scale-105 md:grid"
    >
      <MessageCircle className="h-5 w-5" aria-hidden />
    </a>
  );
}
