'use client';

import Link from 'next/link';
import { MessageCircle, Phone } from 'lucide-react';
import Logo from './Logo';
import { site } from '@/config/site';

const steps = [
  'We review your request and call you back — usually within a couple of hours during clinic timings.',
  'We confirm a slot that suits you, Monday to Saturday.',
  'Your first visit includes the examination, the in-house OPG scan and a written estimate.',
];

export default function ThankYouPage() {
  const phone = site.contact.phones[0];
  const tel = `tel:+91${phone.replace(/^0/, '')}`;

  return (
    <div className="min-h-screen bg-cream px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl overflow-hidden rounded-lg border border-line bg-white shadow-[var(--shadow-lg)]">
        <div className="bg-gradient-to-r from-[var(--brand-2)] to-[var(--brand)] p-8 text-center text-white">
          <h1 className="font-display text-2xl md:text-3xl">Thank you for choosing {site.name}</h1>
          <p className="mt-2 text-[15px] font-medium text-white/85">
            Your consultation request has been received.
          </p>
        </div>

        <div className="p-6 md:p-10">
          <div className="flex flex-col items-center gap-6 text-center">
            <Logo />
            <div>
              <h2 className="font-display text-xl md:text-2xl">{site.doctor.name}</h2>
              <p className="mt-1 text-sm font-medium text-brand">{site.doctor.credential}</p>
              <p className="mx-auto mt-4 max-w-lg text-[15px] text-[var(--text-mute)]">
                Our team will call you shortly to confirm your appointment. If it is urgent,
                reach us directly on the number below.
              </p>
            </div>
          </div>

          <div className="mt-10 border-t border-[var(--line-soft)] pt-8">
            <h3 className="mb-6 text-center font-display text-lg">What happens next?</h3>
            <div className="grid gap-4 md:grid-cols-3">
              {steps.map((step, i) => (
                <div
                  key={step}
                  className="rounded-md border border-[var(--line-soft)] bg-[var(--brand-soft)] p-5 text-center"
                >
                  <div className="mx-auto mb-3 grid h-9 w-9 place-items-center rounded-full bg-brand-soft font-display text-lg text-brand">
                    {i + 1}
                  </div>
                  <p className="text-sm text-[var(--text-mute)]">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <a href={tel} className="btn btn-brand">
              <Phone className="h-5 w-5" /> Call {phone}
            </a>
            <a
              href={`https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(
                `Hi ${site.name}, I just submitted a consultation request.`,
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-[var(--whatsapp)] text-white transition hover:-translate-y-0.5"
            >
              <MessageCircle className="h-5 w-5" /> WhatsApp Us
            </a>
          </div>

          <p className="mt-8 text-center">
            <Link href="/" className="text-sm text-[var(--text-dim)] underline-offset-4 hover:text-brand hover:underline">
              ← Back to the home page
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
