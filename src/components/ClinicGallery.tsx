"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { clinicGallery, site } from "@/config/site";

/**
 * Clinic interiors.
 *
 * One implementation drives every viewport: the frames sit in a native
 * scroll-snap track, so a phone gets real momentum swipe for free and the
 * desktop controls simply scroll the same track. No carousel library, no
 * transform maths, nothing to desynchronise.
 *
 * The active frame is signalled three ways — `aria-current`, a solid rule under
 * the thumbnail, and the "02 / 04" counter — so it never depends on colour
 * alone.
 */
export default function ClinicGallery() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const count = clinicGallery.length;

  // Derive the active index from scroll position, so a swipe, a button and a
  // thumbnail all end up reading from the same place.
  const syncFromScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track || track.clientWidth === 0) return;
    const index = Math.round(track.scrollLeft / track.clientWidth);
    setActive(Math.max(0, Math.min(count - 1, index)));
  }, [count]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(syncFromScroll);
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", syncFromScroll);
    return () => {
      cancelAnimationFrame(frame);
      track.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", syncFromScroll);
    };
  }, [syncFromScroll]);

  const goTo = useCallback((index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const next = Math.max(0, Math.min(clinicGallery.length - 1, index));
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    track.scrollTo({
      left: next * track.clientWidth,
      behavior: reduced ? "auto" : "smooth",
    });
    setActive(next);
  }, []);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      goTo(active + 1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      goTo(active - 1);
    } else if (e.key === "Home") {
      e.preventDefault();
      goTo(0);
    } else if (e.key === "End") {
      e.preventDefault();
      goTo(count - 1);
    }
  };

  const current = clinicGallery[active];

  return (
    <section id="clinic-gallery" className="band border-b border-line bg-paper-soft">
      <div className="shell">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-[38rem]">
            <p className="eyebrow">Inside the clinic</p>
            <h2 className="h2 mt-4">Inside {site.name}.</h2>
            <p className="muted mt-5 max-w-prose">
              The Anna Nagar East practice, photographed as it is — from the entrance,
              through the corridor, to the rooms where treatment actually happens.
            </p>
          </div>

          {/* Desktop controls sit on the heading baseline rather than over the
              photograph, so nothing is obscured. */}
          <div className="hidden shrink-0 items-center gap-5 sm:flex">
            <p className="tnum text-[13px] text-ink-mute">
              <span className="font-medium text-ink">
                {String(active + 1).padStart(2, "0")}
              </span>
              <span className="mx-1 text-ink-faint">/</span>
              {String(count).padStart(2, "0")}
            </p>
            <div className="flex gap-2">
              <GalleryButton
                direction="prev"
                onClick={() => goTo(active - 1)}
                disabled={active === 0}
              />
              <GalleryButton
                direction="next"
                onClick={() => goTo(active + 1)}
                disabled={active === count - 1}
              />
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_240px] lg:items-start lg:gap-8">
          {/* Full-bleed on phones: the photographs, not a card, carry the screen. */}
          <div
            ref={trackRef}
            tabIndex={0}
            onKeyDown={onKeyDown}
            role="group"
            aria-roledescription="carousel"
            aria-label={`${site.name} clinic interiors`}
            className="-mx-5 flex snap-x snap-mandatory overflow-x-auto overscroll-x-contain rounded-none focus-visible:outline-offset-4 sm:mx-0 sm:rounded-sm [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {clinicGallery.map((shot, i) => (
              <figure
                key={shot.src}
                role="group"
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${count}: ${shot.label}`}
                className="w-full shrink-0 snap-center px-5 sm:px-0"
              >
                <div className="figure aspect-[4/3] w-full border border-line bg-white sm:aspect-[3/2]">
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    fill
                    loading="lazy"
                    sizes="(min-width: 1160px) 872px, (min-width: 640px) 92vw, 100vw"
                    className="object-cover"
                    style={{ objectPosition: shot.position }}
                  />
                </div>
              </figure>
            ))}
          </div>

          {/* Right rail: thumbnails, then the caption for the frame on screen.
              On phones this simply stacks under the track. */}
          <div>
            <ul className="-mx-5 flex gap-3 overflow-x-auto px-5 sm:mx-0 sm:px-0 lg:grid lg:grid-cols-2 lg:content-start lg:gap-x-3 lg:gap-y-5 lg:overflow-visible [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {clinicGallery.map((shot, i) => {
              const isActive = i === active;
              return (
                <li key={shot.src} className="w-[38%] shrink-0 sm:w-[22%] lg:w-auto">
                  <button
                    type="button"
                    onClick={() => goTo(i)}
                    aria-current={isActive ? "true" : undefined}
                    aria-label={`Show ${shot.label} — image ${i + 1} of ${count}`}
                    className="group block w-full text-left"
                  >
                    <span
                      className={`figure block aspect-[4/3] w-full border transition-colors ${
                        isActive ? "border-teal-700" : "border-line group-hover:border-teal-300"
                      }`}
                    >
                      <Image
                        src={shot.src}
                        alt=""
                        aria-hidden
                        fill
                        loading="lazy"
                        sizes="(min-width: 1024px) 120px, 40vw"
                        className={`object-cover transition-opacity ${
                          isActive ? "opacity-100" : "opacity-70 group-hover:opacity-100"
                        }`}
                        style={{ objectPosition: shot.position }}
                      />
                    </span>
                    {/* A solid rule, not just a colour change, marks the active frame. */}
                    <span
                      aria-hidden
                      className={`mt-2 block h-[2px] w-full ${
                        isActive ? "bg-teal-700" : "bg-transparent"
                      }`}
                    />
                    <span
                      className={`mt-1.5 block text-[13px] leading-snug ${
                        isActive ? "font-medium text-ink" : "text-ink-mute"
                      }`}
                    >
                      {shot.label}
                    </span>
                  </button>
                </li>
              );
            })}
            </ul>

            {/* One caption, one live region — announced whenever the frame changes. */}
            <div className="mt-6 border-t border-line pt-5">
              <p aria-live="polite" className="text-[15px] leading-relaxed text-ink-soft">
                <span className="block font-medium text-ink">{current.label}</span>
                <span className="mt-1 block">{current.caption}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Phone controls; the counter keeps position legible without colour. */}
        <div className="mt-8 sm:hidden">
          <div className="flex items-center gap-4">
            <p className="tnum text-[13px] text-ink-mute">
              <span className="font-medium text-ink">
                {String(active + 1).padStart(2, "0")}
              </span>
              <span className="mx-1 text-ink-faint">/</span>
              {String(count).padStart(2, "0")}
            </p>
            <div className="flex gap-2">
              <GalleryButton
                direction="prev"
                onClick={() => goTo(active - 1)}
                disabled={active === 0}
              />
              <GalleryButton
                direction="next"
                onClick={() => goTo(active + 1)}
                disabled={active === count - 1}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function GalleryButton({
  direction,
  onClick,
  disabled,
}: {
  direction: "prev" | "next";
  onClick: () => void;
  disabled: boolean;
}) {
  const Icon = direction === "prev" ? ArrowLeft : ArrowRight;
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === "prev" ? "Previous image" : "Next image"}
      className="grid h-11 w-11 place-items-center border border-line bg-white text-teal-700 transition-colors hover:border-teal-300 hover:bg-teal-50 disabled:cursor-not-allowed disabled:border-line disabled:bg-transparent disabled:text-ink-faint"
    >
      <Icon className="h-4 w-4" aria-hidden />
    </button>
  );
}
