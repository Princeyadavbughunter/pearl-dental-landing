import Image from "next/image";
import { beforeAfterGallery } from "@/config/site";

type Slide = { key: string; src: string; label?: string; caption: string };

/** Each pair becomes two full-width slides — a before and an after — so
 *  neither photo is squeezed into half a card and cropped. */
const baseSlides: Slide[] = beforeAfterGallery.flatMap((item) =>
  "composite" in item
    ? [{ key: item.id, src: item.composite, caption: item.caption }]
    : [
        { key: `${item.id}-before`, src: item.before, label: "Before", caption: item.caption },
        { key: `${item.id}-after`, src: item.after, label: "After", caption: item.caption },
      ],
);

/**
 * A second set of before/after photographs, shown as one continuously
 * moving line rather than a grid or a manually-swiped track. The track
 * renders the slide list twice back to back and loops with a CSS animation
 * (`marquee-x` in globals.css); hovering or focusing it pauses the motion so
 * a photo can be looked at properly.
 */
export default function BeforeAfterGallery() {
  const slides = [...baseSlides, ...baseSlides];

  return (
    <section id="before-after" className="band border-b border-line bg-white">
      <div className="shell">
        <div className="max-w-[42rem]">
          <p className="eyebrow">More real results</p>
          <h2 className="h2 mt-4">Before and after.</h2>
          <p className="muted mt-5 max-w-prose">
            More unretouched photographs from the clinic&apos;s own records.
          </p>
        </div>
      </div>

      <div className="mt-12 overflow-hidden">
        <ul className="marquee-track flex w-max gap-5 px-5 sm:px-8">
          {slides.map((slide, i) => {
            const duplicate = i >= baseSlides.length;
            return (
              <li
                key={`${slide.key}-${i}`}
                aria-hidden={duplicate}
                className="w-[78%] shrink-0 sm:w-[340px]"
              >
                <div className="figure relative aspect-[3/4] w-full border border-line bg-white">
                  <Image
                    src={slide.src}
                    alt={slide.label ? `${slide.label} — ${slide.caption}` : slide.caption}
                    fill
                    sizes="340px"
                    className="object-contain"
                  />
                  {slide.label && (
                    <span className="absolute bottom-2 left-2 bg-ink/75 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-white">
                      {slide.label}
                    </span>
                  )}
                </div>

                <p className="mt-3 text-[13px] text-ink-mute">{slide.caption}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
