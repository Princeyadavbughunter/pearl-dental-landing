import { Clock, Facebook, Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react";
import Logo from "./Logo";
import { site } from "@/config/site";

export default function Footer() {
  return (
    <footer id="visit" className="on-dark pb-8 pt-16">
      <div className="shell">
        <div className="mb-12 text-center">
          <div className="flex justify-center">
            <Logo variant="full" />
          </div>
          <p className="mx-auto mt-6 max-w-xl text-sm font-light text-[var(--text-mute)]">
            {site.tagline}. Advanced implant technology, ethical treatment planning and
            patient comfort — all under one roof.
          </p>
        </div>

        <div className="mb-12 grid gap-10 text-center md:grid-cols-3 md:text-left">
          <div>
            <h3 className="mb-4 border-b border-[var(--line-soft)] pb-2 font-display text-lg">
              Contact Us
            </h3>
            {site.contact.phones.map((p) => (
              <a
                key={p}
                href={`tel:+91${p.replace(/^0/, "")}`}
                className="mb-1 flex items-center justify-center gap-2 text-lg font-bold text-brand transition-colors hover:text-[var(--brand-2)] md:justify-start"
              >
                <Phone className="h-4 w-4" /> {p}
              </a>
            ))}
            <a
              href={`mailto:${site.contact.email}`}
              className="mt-3 flex items-center justify-center gap-2 text-sm text-[var(--text-mute)] transition-colors hover:text-brand md:justify-start"
            >
              <Mail className="h-4 w-4 text-brand" /> {site.contact.email}
            </a>
            <div className="mt-5 flex justify-center gap-3 md:justify-start">
              {[
                { href: site.social.facebook, Icon: Facebook, label: "Facebook" },
                { href: site.social.instagram, Icon: Instagram, label: "Instagram" },
                { href: site.social.youtube, Icon: Youtube, label: "YouTube" },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-line text-brand transition-colors hover:bg-[var(--amber)] hover:text-[var(--dark)]"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 border-b border-[var(--line-soft)] pb-2 font-display text-lg">
              Clinic Timings
            </h3>
            {site.hours.lines.map((line) => (
              <p
                key={`${line.days}-${line.time}`}
                className="flex items-center justify-center gap-2 text-[15px] text-[var(--text-mute)] md:justify-start"
              >
                <Clock className="h-4 w-4 shrink-0 text-brand" />
                <span>
                  <span className="text-[var(--text)]">{line.days}</span> · {line.time}
                </span>
              </p>
            ))}
          </div>

          <div>
            <h3 className="mb-4 border-b border-[var(--line-soft)] pb-2 font-display text-lg">
              Location
            </h3>
            <a
              href={site.contact.googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block leading-relaxed text-[var(--text-mute)] transition-colors hover:text-brand"
            >
              <span className="flex items-start justify-center gap-2 md:justify-start">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-brand" />
                <span>
                  {site.contact.addressLines.map((l) => (
                    <span key={l} className="block">
                      {l}
                    </span>
                  ))}
                  <span className="mt-1 block text-sm text-[var(--text-dim)]">
                    {site.contact.landmark}
                  </span>
                </span>
              </span>
            </a>
            <p className="mt-2 text-xs text-[var(--text-dim)]">Click to open in Google Maps</p>
          </div>
        </div>

        <div className="h-[300px] overflow-hidden rounded-[22px] border border-line md:h-[400px]">
          <iframe
            src={site.contact.mapEmbed}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`${site.name} location — Anna Nagar East, Chennai`}
            className="grayscale transition-all duration-700 hover:grayscale-0"
          />
        </div>

        <div className="mt-12 border-t border-[var(--line-soft)] pt-8 text-center text-sm text-[var(--text-dim)]">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
