import Image from "next/image";

/**
 * Every photo on the page goes through here.
 *
 * Most of Pearl Dental's images have not landed yet (they are still in the
 * Google Drive folder), so a slot with no `src` renders a labelled warm
 * placeholder that makes it obvious which shot belongs where. Drop the file
 * into /public/ and pass its path — nothing else has to change.
 *
 * `position` is the object-position for the crop: the one photograph we do have
 * is landscape, so portrait slots need the subject pinned rather than centred.
 */
export default function PhotoSlot({
  src,
  alt,
  label,
  className = "",
  priority = false,
  position = "center",
  sizes = "(min-width: 1024px) 50vw, 100vw",
}: {
  src?: string;
  alt: string;
  label: string;
  className?: string;
  priority?: boolean;
  position?: string;
  sizes?: string;
}) {
  if (src) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          style={{ objectPosition: position }}
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={alt}
      className={`relative flex items-center justify-center overflow-hidden bg-[var(--brand-soft)] ${className}`}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.55]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(196,91,0,0.10) 0 12px, transparent 12px 24px)",
        }}
      />
      <span className="relative px-6 text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--brand)]">
        {label}
      </span>
    </div>
  );
}
