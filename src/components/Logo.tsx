import Image from "next/image";
import { site } from "@/config/site";

/**
 * The clinic's logo is gold line-art on black — it needs a dark ground to read.
 *
 *  • variant="lockup" — the shell mark on a dark-slate badge, next to the name
 *    set in Outfit. Used on the light header, where the raw artwork would wash
 *    out against the cream page. `/pearl-mark.png` is the mark extracted from
 *    the artwork with a real alpha channel, so the badge colour is ours.
 *  • variant="full"   — the whole lockup, wordmark and all. Only on the dark
 *    footer band, where the artwork's own black ground disappears into it.
 */
export default function Logo({
  variant = "lockup",
  className = "",
  priority = false,
}: {
  variant?: "lockup" | "full";
  className?: string;
  priority?: boolean;
}) {
  if (variant === "full") {
    return (
      <Image
        src="/pearllogo.jpg"
        alt={`${site.name} — ${site.tagline}`}
        width={1080}
        height={1080}
        priority={priority}
        sizes="220px"
        className={`h-auto w-[190px] rounded-md ${className}`}
      />
    );
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-md bg-[var(--dark)] shadow-[var(--shadow-sm)]">
        <Image
          src="/pearl-mark.png"
          alt=""
          aria-hidden
          width={706}
          height={602}
          priority={priority}
          sizes="36px"
          className="h-auto w-9"
        />
      </span>
      <span className="text-left">
        <span className="block font-display text-xl font-extrabold leading-tight tracking-tight text-gradient-brand sm:text-[26px]">
          {site.name}
        </span>
        <span className="block font-display text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--text-dim)]">
          Implant &amp; Root Canal Centre
        </span>
      </span>
    </div>
  );
}
