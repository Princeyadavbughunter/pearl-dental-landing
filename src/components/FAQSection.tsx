'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqs } from '@/config/site';

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <section id="faq" className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="shell-narrow">
        <div className="mb-12 text-center">
          <p className="eyebrow">Questions</p>
          <h2 className="section-title mt-3">
            Frequently asked <span className="text-gradient-brand">questions</span>
          </h2>
          <div className="rule-brand mt-6" />
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const open = openFAQ === index;
            return (
              <div
                key={faq.q}
                className={`overflow-hidden rounded-[18px] border transition-colors ${
                  open ? 'border-line bg-[var(--surface)]' : 'border-[var(--line-soft)]'
                }`}
              >
                <button
                  onClick={() => setOpenFAQ(open ? null : index)}
                  aria-expanded={open}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left font-semibold transition-colors hover:text-brand md:p-6 md:text-[17px]"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-brand transition-transform duration-300 ${
                      open ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {open && (
                  <div className="border-t border-[var(--line-soft)] p-5 md:p-6">
                    <p className="text-[15px] leading-relaxed text-[var(--text-mute)]">{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
