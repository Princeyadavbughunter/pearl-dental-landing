"use client";

import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import Logo from "./Logo";
import { site } from "@/config/site";
import { telHref } from "@/lib/contact";
import { useLeadDialog } from "./lead/LeadProvider";

/**
 * Header.
 *
 * Deliberately has no navigation menu. This is a campaign landing page, not the
 * clinic's website: a visitor arriving from an ad has one decision to make, and
 * a row of section links only offers them ways to wander off before making it.
 * The clinic's own site at pearldentalchennai.in is where browsing belongs.
 *
 * What is left is the two things an ad click actually needs — call now, or book.
 */
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
      <div className="shell flex h-[var(--header-h)] items-center justify-between gap-4">
        <a href="#top" aria-label={`${site.name} — top of page`} className="shrink-0">
          {/* The full lockup at every width — the mark alone does not say who
              this is to someone arriving from an ad. */}
          <span className="hidden sm:block">
            <Logo height={38} priority />
          </span>
          <span className="block sm:hidden">
            <Logo height={28} priority />
          </span>
        </a>

        <div className="flex shrink-0 items-center gap-3 sm:gap-5">
          <a
            href={telHref(site.contact.phones[0])}
            className="hidden items-center gap-2 text-[15px] font-medium text-ink transition-colors hover:text-teal-700 sm:inline-flex"
          >
            <Phone className="h-4 w-4 text-teal-700" aria-hidden />
            {site.contact.phones[0].display}
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
