import { ArrowUpRight, Star } from "lucide-react";
import BookButton from "./lead/BookButton";
import { googleRating, googleReviews } from "@/config/site";

/**
 * Google reviews.
 *
 * Every review is real, read from Pearl Dental's own Google Business Profile and
 * quoted verbatim (see `googleReviews` for the sourcing note). The aggregate
 * score and review count above the grid are the listing's actual figures, and
 * both CTAs go to that listing — so the six shown here are visibly a sample of
 * 46 rather than an implied total.
 *
 * No carousel library: a scroll-snap track on phones becomes a plain grid at
 * `sm`, which means native momentum swipe, no JavaScript, and nothing to
 * desynchronise.
 */
export default function GoogleReviews() {
  return (
    <section id="reviews" className="band border-b border-line bg-paper-soft">
      <div className="shell">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-[40rem]">
            <p className="eyebrow">Patient reviews</p>
            <h2 className="h2 mt-4">What our patients say on Google.</h2>
            <p className="muted mt-5 max-w-prose">
              Real experiences from patients who have visited Pearl Dental Chennai.
            </p>
          </div>

          {/* The listing's actual aggregate — not a claim of our own. */}
          <a
            href={googleRating.listing}
            target="_blank"
            rel="noopener noreferrer"
            className="group shrink-0 border-l-2 border-teal-500 py-1 pl-5 sm:text-right"
          >
            <span className="flex items-center gap-2.5 sm:justify-end">
              <span className="font-display text-[30px] leading-none text-ink">
                {googleRating.score}
              </span>
              <Stars value={Math.round(Number(googleRating.score))} />
            </span>
            <span className="mt-2 flex items-center gap-2 text-[14px] text-ink-soft sm:justify-end">
              <GoogleMark className="h-3.5 w-3.5" />
              {googleRating.count} Google reviews
            </span>
          </a>
        </div>

        {/* Swipeable on phones, a grid from sm up. */}
        <ul
          tabIndex={0}
          role="group"
          aria-label="Patient reviews from Google"
          className="-mx-5 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {googleReviews.map((review) => (
            <li
              key={review.name}
              className="flex w-[86%] shrink-0 snap-center flex-col rounded-md border border-line bg-white p-6 shadow-xs sm:w-auto"
            >
              <Stars value={review.rating} />

              <blockquote className="mt-4 grow">
                <p className="text-[15px] leading-[1.7] text-ink-soft">
                  &ldquo;{review.text}&rdquo;
                </p>
              </blockquote>

              <figcaption className="mt-5 flex items-center gap-3 border-t border-line pt-4">
                <GoogleMark className="h-5 w-5 shrink-0" />
                <span className="min-w-0">
                  <span className="block truncate text-[14px] font-medium text-ink">
                    {review.name}
                  </span>
                  {/* Date is kept in `googleReviews` as part of the sourcing
                      record, but not shown — several genuine reviews are years
                      old and the age distracted from what they say. */}
                  <span className="block text-[13px] text-ink-mute">
                    {review.rating} out of 5
                  </span>
                </span>
              </figcaption>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <a
            href={googleRating.listing}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            Read all reviews on Google
            <ArrowUpRight className="h-4 w-4 text-teal-700" aria-hidden />
          </a>
          <BookButton className="btn btn-primary">Book a consultation</BookButton>
        </div>
      </div>
    </section>
  );
}

/** Rating as stars, with the number itself exposed to assistive tech. */
function Stars({ value }: { value: number }) {
  return (
    <span className="flex gap-0.5" role="img" aria-label={`${value} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          aria-hidden
          className={`h-4 w-4 ${
            i < value ? "fill-[#F5B301] text-[#F5B301]" : "fill-line text-line"
          }`}
        />
      ))}
    </span>
  );
}

/** Google's mark, used only to indicate where the review came from. */
function GoogleMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden focusable="false">
      <path
        fill="#4285F4"
        d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84a10.1 10.1 0 0 1-4.4 6.63v5.52h7.13c4.16-3.83 6.55-9.47 6.55-16.16Z"
      />
      <path
        fill="#34A853"
        d="M24 46c5.94 0 10.92-1.97 14.56-5.34l-7.13-5.52c-1.97 1.32-4.49 2.1-7.43 2.1-5.71 0-10.55-3.86-12.28-9.05h-7.4v5.7A22 22 0 0 0 24 46Z"
      />
      <path
        fill="#FBBC05"
        d="M11.72 28.19a13.2 13.2 0 0 1 0-8.38v-5.7h-7.4a22 22 0 0 0 0 19.78l7.4-5.7Z"
      />
      <path
        fill="#EA4335"
        d="M24 9.57c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 2.99 29.93 1 24 1a22 22 0 0 0-19.68 12.11l7.4 5.7C13.45 13.62 18.29 9.57 24 9.57Z"
      />
    </svg>
  );
}
