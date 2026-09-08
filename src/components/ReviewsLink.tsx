import { ArrowUpRight } from "lucide-react";
import { site } from "@/config/site";

/**
 * Replaces the previous `GoogleReviews` component, which rendered four
 * hardcoded testimonials with five-star ratings under a name that implied
 * Google had supplied them. None of them had a source.
 *
 * Rather than manufacture social proof, this points at the clinic's real
 * listing, where the reviews are attributable and the visitor can weigh them
 * for themselves. Swap in the Place-ID link once the client shares the GMB
 * profile (see site.contact.googleReviewsLink).
 */
export default function ReviewsLink() {
  return (
    <section aria-labelledby="reviews-title" className="border-b border-line bg-white">
      <div className="shell band-tight">
        <div className="flex flex-col gap-6 border-l-2 border-teal-500 py-1 pl-6 sm:flex-row sm:items-center sm:justify-between sm:gap-10 sm:pl-8">
          <div className="max-w-prose">
            <h2 id="reviews-title" className="text-[19px] font-medium leading-snug">
              We don&apos;t publish selected testimonials.
            </h2>
            <p className="muted mt-2">
              Patient reviews belong somewhere they can be attributed and verified. Read
              what people have written about {site.name} on Google, unedited.
            </p>
          </div>
          <a
            href={site.contact.googleReviewsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline shrink-0"
          >
            Read reviews on Google
            <ArrowUpRight className="h-4 w-4 text-teal-700" aria-hidden />
          </a>
        </div>
      </div>
    </section>
  );
}
