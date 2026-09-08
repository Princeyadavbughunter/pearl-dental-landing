import { Clock, Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import Logo from "./Logo";
import { site } from "@/config/site";
import { telHref } from "@/lib/contact";

/**
 * Footer.
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
    <footer id="visit" className="bg-white">
      <div className="shell band-tight">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <Logo height={38} />
            <p className="muted mt-5 max-w-prose">{site.tagline}.</p>

            <div className="mt-8 grid gap-8 sm:grid-cols-2">
              <div>
                <h2 className="text-[13px] font-semibold uppercase tracking-[0.12em] text-ink-mute">
                  Contact
                </h2>
                <ul className="mt-4 space-y-2">
                  {site.contact.phones.map((p) => (
                    <li key={p}>
                      <a
                        href={telHref(p)}
                        className="inline-flex items-center gap-2.5 text-[15px] font-medium transition-colors hover:text-teal-700"
                      >
                        <Phone className="h-4 w-4 text-teal-700" aria-hidden />
                        {p}
                      </a>
                    </li>
                  ))}
                  <li>
                    <a
                      href={`mailto:${site.contact.email}`}
                      className="inline-flex items-center gap-2.5 break-all text-[14px] text-ink-soft transition-colors hover:text-teal-700"
                    >
                      <Mail className="h-4 w-4 shrink-0 text-teal-700" aria-hidden />
                      {site.contact.email}
                    </a>
                  </li>
                </ul>

                <div className="mt-5 flex gap-2">
                  {socials.map(({ href, Icon, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="grid h-10 w-10 place-items-center rounded-sm border border-line text-teal-700 transition-colors hover:border-teal-300 hover:bg-teal-50"
                    >
                      <Icon className="h-4 w-4" aria-hidden />
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-[13px] font-semibold uppercase tracking-[0.12em] text-ink-mute">
                  Clinic timings
                </h2>
                <ul className="mt-4 space-y-2">
                  {site.hours.lines.map((line) => (
                    <li
                      key={`${line.days}-${line.time}`}
                      className="flex items-start gap-2.5 text-[14px] text-ink-soft"
                    >
                      <Clock className="mt-0.5 h-4 w-4 shrink-0 text-teal-700" aria-hidden />
                      <span>
                        <span className="block text-ink">{line.days}</span>
                        {line.time}
                      </span>
                    </li>
                  ))}
                </ul>

                <h2 className="mt-8 text-[13px] font-semibold uppercase tracking-[0.12em] text-ink-mute">
                  Address
                </h2>
                <a
                  href={site.contact.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex items-start gap-2.5 text-[14px] text-ink-soft transition-colors hover:text-teal-700"
                >
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal-700" aria-hidden />
                  <span>
                    {site.contact.addressLines.map((l) => (
                      <span key={l} className="block">
                        {l}
                      </span>
                    ))}
                    <span className="mt-1 block text-ink-mute">
                      {site.contact.landmark}
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-sm border border-line">
            <iframe
              src={site.contact.mapEmbed}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 320 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${site.name} location — Anna Nagar East, Chennai`}
            />
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-6 text-[13px] text-ink-mute sm:flex-row sm:items-center sm:justify-between">
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
