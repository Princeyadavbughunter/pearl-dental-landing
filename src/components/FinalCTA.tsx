import { Check, MessageCircle, Phone } from "lucide-react";
import BookButton from "./lead/BookButton";
import { site, consultationIncludes } from "@/config/site";
import { telHref, whatsappHref, WHATSAPP_ENQUIRY } from "@/lib/contact";

/**
 * The close.
 *
 * States exactly what the first visit covers before asking for it — the single
 * most useful thing a clinic landing page can do, because the unspoken question
 * at this point is "what am I actually agreeing to?".
 *
 * Three routes in — form, phone, WhatsApp — because someone deciding at 9pm and
 * someone deciding mid-morning want different ones. No deadline and no scarcity
 * language: the argument is the consultation itself.
 */
export default function FinalCTA() {
  const phone = site.contact.phones[0];

  return (
    <section id="book" className="band border-b border-line bg-teal-900 text-white">
      <div className="shell grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-20">
        <div>
          <p className="eyebrow !text-teal-300">Next step</p>
          <h2 className="h2 mt-4 text-white">
            Find out what is actually possible in your case.
          </h2>
          <p className="mt-5 max-w-prose text-[17px] leading-[1.65] text-white/70">
            One visit is enough to know where you stand. There is no obligation to
            proceed, and you leave with the cost in writing.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <BookButton className="btn btn-white sm:px-8">
              Book a consultation
            </BookButton>
            <a href={telHref(phone)} className="btn btn-ghost-light sm:px-8">
              <Phone className="h-4 w-4" aria-hidden />
              {phone.display}
            </a>
          </div>

          <p className="mt-6 text-[14px] text-white/60">
            Or{" "}
            <a
              href={whatsappHref(WHATSAPP_ENQUIRY)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-medium text-white underline underline-offset-4"
            >
              <MessageCircle className="h-4 w-4" aria-hidden />
              message the clinic on WhatsApp
            </a>
            . {site.hours.summary}.
          </p>
        </div>

        {/* What the visit covers — the question everyone has at this point. */}
        <div className="border border-white/15 p-6 sm:p-8">
          <h3 className="text-[13px] font-semibold uppercase tracking-[0.12em] text-teal-300">
            What your consultation covers
          </h3>
          <ul className="mt-5 space-y-3.5">
            {consultationIncludes.map((item) => (
              <li key={item} className="flex gap-3 text-[15px] leading-snug text-white/85">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal-300" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
