import { MessageCircle, Phone } from "lucide-react";
import BookButton from "./lead/BookButton";
import { site } from "@/config/site";
import { telHref, whatsappHref, WHATSAPP_ENQUIRY } from "@/lib/contact";

/**
 * Closing call to action. Three routes in — form, phone, WhatsApp — because a
 * patient deciding at 9pm and one deciding mid-morning want different ones.
 * No deadline, no scarcity language: the argument is the consultation itself.
 */
export default function FinalCTA() {
  const phone = site.contact.phones[0];

  return (
    <section id="book" className="band border-b border-line bg-white">
      <div className="shell">
        <div className="border border-line bg-paper-soft px-6 py-12 sm:px-12 sm:py-16">
          <div className="mx-auto max-w-[38rem] text-center">
            <p className="eyebrow">Next step</p>
            <h2 className="h2 mt-4">
              Find out what is actually possible in your case.
            </h2>
            <p className="lede mt-5">
              A consultation with {site.doctor.shortName} includes an examination, an
              in-house OPG scan and a written estimate you take home. No obligation to
              proceed.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <BookButton className="btn btn-primary sm:px-8">
                Request a call back
              </BookButton>
              <a href={telHref(phone)} className="btn btn-outline sm:px-8">
                <Phone className="h-4 w-4 text-teal-700" aria-hidden />
                {phone}
              </a>
            </div>

            <p className="mt-6 text-[14px] text-ink-mute">
              Or{" "}
              <a
                href={whatsappHref(WHATSAPP_ENQUIRY)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-medium text-teal-700 underline underline-offset-2"
              >
                <MessageCircle className="h-4 w-4" aria-hidden />
                message the clinic on WhatsApp
              </a>
              . {site.hours.summary}.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
