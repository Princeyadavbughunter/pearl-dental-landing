import { Star } from "lucide-react";
import { testimonials } from "@/config/site";

export default function GoogleReviews() {
  return (
    <section id="reviews" className="bg-white">
      <div className="shell">
        <div className="mb-12 text-center">
          <p className="eyebrow">Patient Reviews</p>
          <h2 className="section-title mt-3">
            What our <span className="text-gradient-brand">patients say</span>
          </h2>
          <div className="rule-brand mt-6" />
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {testimonials.map((review) => (
            <div key={review.name} className="card flex flex-col">
              <div className="mb-4 flex items-center gap-3">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-line bg-brand-soft font-bold text-brand">
                  {review.name
                    .split(" ")
                    .map((p) => p[0])
                    .join("")
                    .slice(0, 2)}
                </div>
                <div>
                  <h3 className="font-bold leading-tight">{review.name}</h3>
                  <p className="text-sm text-[var(--text-dim)]">{review.location}</p>
                </div>
              </div>
              <div className="mb-3 flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-[var(--brand)] text-[var(--brand)]" />
                ))}
              </div>
              <p className="text-sm leading-relaxed text-[var(--text-mute)]">{review.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
