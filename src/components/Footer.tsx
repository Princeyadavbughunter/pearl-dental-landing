import { Clock, Facebook, Instagram, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Logo from "./Logo";
import BookButton from "./lead/BookButton";
import { site } from "@/config/site";
import { telHref, mailHref, whatsappHref, WHATSAPP_ENQUIRY } from "@/lib/contact";

/**
 * Footer — and the clinic's full contact block.
 *
 * Address, phones, hours and the map live here rather than in a separate
 * section above: on a phone the footer is where people already scroll to look
 * for a number, and splitting the two meant the same details appeared twice.
 * The `#visit` anchor stays on this element so the header nav still resolves.
 *
 * Kept on white so the supplied logo artwork — which contains near-black type —
 * sits on the ground it was drawn for, rather than being knocked out or boxed.
 */
export default function Footer() {
  const socials = [
    { href: site.social.facebook, Icon: Facebook, label: "Facebook" },
    { href: site.social.instagram, Icon: Instagram, label: "Instagram" },
  ];

  return (
    <footer id="visit" className="border-t border-line bg-white">
      <div className="shell band">
        <div className="max-w-[42rem]">
          <p className="eyebrow">Visit the clinic</p>
          <h2 className="h2 mt-4">Anna Nagar East, Chennai.</h2>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-1">
            <div>
              <h3 className="flex items-center gap-2.5 text-[13px] font-semibold uppercase tracking-[0.12em] text-ink-mute">
                <MapPin className="h-4 w-4 text-teal-700" aria-hidden />
                Clinic address
              </h3>
              <a
                href={site.contact.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-3 block"
              >
                <span className="block text-[17px] leading-relaxed">
                  {site.contact.addressLines.map((l) => (
                    <span key={l} className="block">
                      {l}
                    </span>
                  ))}
                </span>
                <span className="mt-1 block text-[14px] text-ink-mute">
                  {site.contact.landmark}
                </span>
                <span className="mt-2 inline-block text-[14px] font-medium text-teal-700 underline underline-offset-4 group-hover:text-teal-800">
                  Open in Google Maps
                </span>
              </a>
            </div>

            <div>
              <h3 className="flex items-center gap-2.5 text-[13px] font-semibold uppercase tracking-[0.12em] text-ink-mute">
                <Phone className="h-4 w-4 text-teal-700" aria-hidden />
                Phone enquiries
              </h3>
              <ul className="mt-3 space-y-2.5">
                {site.contact.phones.map((p) => (
                  <li key={p.tel}>
                    <a
                      href={telHref(p)}
                      className="text-[17px] font-medium transition-colors hover:text-teal-700"
                    >
                      {p.display}
                    </a>
                    <span className="ml-2 text-[13px] text-ink-mute">{p.note}</span>
                  </li>
                ))}
              </ul>
              <a
                href={mailHref}
                className="mt-4 inline-flex items-center gap-2.5 break-all text-[15px] text-ink-soft transition-colors hover:text-teal-700"
              >
                <Mail className="h-4 w-4 shrink-0 text-teal-700" aria-hidden />
                {site.contact.email}
              </a>
            </div>

            <div>
              <h3 className="flex items-center gap-2.5 text-[13px] font-semibold uppercase tracking-[0.12em] text-ink-mute">
                <Clock className="h-4 w-4 text-teal-700" aria-hidden />
                Clinic hours
              </h3>
              <dl className="mt-3 border-t border-line">
                {site.hours.lines.map((line) => (
                  <div
                    key={line.days}
                    className="flex items-baseline justify-between gap-6 border-b border-line py-2.5"
                  >
                    <dt className="text-[15px]">{line.days}</dt>
                    <dd className="tnum text-[15px] font-medium">{line.time}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-3 text-[14px] text-ink-mute">{site.hours.note}</p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:pt-2">
              <BookButton className="btn btn-primary">Request a call back</BookButton>
              <a
                href={whatsappHref(WHATSAPP_ENQUIRY)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                <MessageCircle className="h-4 w-4 text-whatsapp" aria-hidden />
                WhatsApp
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-sm border border-line">
            <iframe
              src={site.contact.mapEmbed}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 420 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${site.name} location — Anna Nagar East, Chennai`}
            />
          </div>
        </div>

        {/* Brand and legal line */}
        <div className="mt-16 flex flex-col gap-6 border-t border-line pt-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Logo height={34} />
            <p className="muted mt-4 max-w-[42ch] !text-[14px]">{site.tagline}.</p>
          </div>
          <div className="flex gap-2">
            {socials.map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${site.name} on ${label}`}
                className="grid h-10 w-10 place-items-center rounded-sm border border-line text-teal-700 transition-colors hover:border-teal-300 hover:bg-teal-50"
              >
                <Icon className="h-4 w-4" aria-hidden />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-line pt-6 text-[13px] text-ink-mute sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <a href="/privacy" className="underline underline-offset-2 hover:text-teal-700">
            Privacy notice
          </a>
        </div>
      </div>

      {/* Clears the fixed mobile action bar so the last line is never covered. */}
      <div aria-hidden className="h-[76px] md:h-0" />
    </footer>
  );
}
