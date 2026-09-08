import Image from "next/image";
import { site } from "@/config/site";

/**
 * The supplied brand artwork, unaltered.
 *
 * `logo-pearl-dental.png` and `logo-mark.png` are the client's logo.jpg with
 * the white ground keyed to transparency and the surrounding margin trimmed to
 * the ink bounds — the artwork itself is untouched, so the lockup sits on the
 * page rather than reading as a pasted rectangle.
 *
 * Both files carry near-black type ("ADVANCED DENTAL CARE"), so the lockup is
 * only ever placed on white or a light tint. Dark bands use the mark or plain
 * type instead.
 *
 * Sized by a ratio-locked box rather than width/height props: the optimiser
 * rounds a resized bitmap's height to whole pixels, which shifts the aspect
 * ratio a fraction and makes next/image warn about a modified dimension.
 */

const RATIO = { lockup: 3236 / 564, mark: 359 / 564 } as const;

export default function Logo({
  height = 34,
  variant = "lockup",
  priority = false,
  className = "",
}: {
  height?: number;
  variant?: "lockup" | "mark";
  priority?: boolean;
  className?: string;
}) {
  const ratio = RATIO[variant];

  return (
    <span
      className={`relative block shrink-0 ${className}`}
      style={{ height, width: height * ratio }}
    >
      <Image
        src={variant === "mark" ? "/logo-mark.png" : "/logo-pearl-dental.png"}
        alt={`${site.name} — ${site.strapline}`}
        fill
        priority={priority}
        sizes={`${Math.ceil(height * ratio)}px`}
        className="object-contain"
      />
    </span>
  );
}
