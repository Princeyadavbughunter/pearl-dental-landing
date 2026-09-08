import { faqs } from "@/config/site";

/**
 * FAQ.
 *
 * Native <details>, so it opens without JavaScript, needs no client bundle and
 * is keyboard-accessible for free. The FAQPage schema stays.
 */
export default function FAQSection() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section id="faq" className="band border-b border-line bg-paper-soft">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="shell grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
        <div className="lg:sticky lg:top-[calc(var(--header-h)+3rem)] lg:self-start">
          <p className="eyebrow">Questions</p>
          <h2 className="h2 mt-4">Before you call.</h2>
        </div>

        <div className="border-t border-line">
          {faqs.map((faq) => (
            <details key={faq.q} className="group border-b border-line">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 text-[17px] font-medium leading-snug transition-colors hover:text-teal-700 [&::-webkit-details-marker]:hidden">
                {faq.q}
                <span
                  aria-hidden
                  className="relative mt-2 h-[2px] w-4 shrink-0 bg-teal-700 before:absolute before:inset-0 before:bg-teal-700 before:transition-transform before:duration-200 before:content-[''] group-open:before:rotate-0 before:rotate-90"
                />
              </summary>
              <p className="muted max-w-prose pb-6 pr-8">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
