"use client";

import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import Logo from "./Logo";
import { site } from "@/config/site";
import { telHref } from "@/lib/contact";
import { useLeadDialog } from "./lead/LeadProvider";

const NAV = [
  { href: "#why", label: "Why us" },
  { href: "#doctor", label: "Dentist" },
  { href: "#treatments", label: "Treatments" },
  { href: "#technology", label: "Under one roof" },
  { href: "#cases", label: "Cases" },
  { href: "#visit", label: "Visit" },
];

export default function Header() {
  const { open } = useLeadDialog();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white/95 backdrop-blur-sm transition-shadow ${
        scrolled ? "shadow-xs" : ""
      }`}
      style={{ borderBottom: "1px solid var(--line)" }}
    >
      <div className="shell flex h-[var(--header-h)] items-center justify-between gap-6">
        <a href="#top" aria-label={`${site.name} — home`} className="shrink-0">
          {/* The full lockup at every width — the mark alone does not say who
              this is to someone arriving from an ad. */}
          <span className="hidden sm:block">
            <Logo height={38} priority />
          </span>
          <span className="block sm:hidden">
            <Logo height={28} priority />
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Sections">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap text-[14px] text-ink-soft transition-colors hover:text-teal-700"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <a
            href={telHref(site.contact.phones[0])}
            className="hidden items-center gap-2 text-[14px] font-medium text-ink transition-colors hover:text-teal-700 sm:inline-flex"
          >
            <Phone className="h-4 w-4 text-teal-700" aria-hidden />
            {site.contact.phones[0]}
          </a>
          <button
            onClick={open}
            className="btn btn-primary !min-h-0 !px-4 !py-2.5 text-[14px]"
          >
            <span className="min-[400px]:hidden">Book</span>
            <span className="hidden min-[400px]:inline">Book a consultation</span>
          </button>
        </div>
      </div>
    </header>
  );
}
