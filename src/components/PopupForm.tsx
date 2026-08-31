'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Loader2, X } from 'lucide-react';
import { site } from '@/config/site';

interface PopupFormProps {
  isOpen: boolean;
  onClose: () => void;
  minutes: number;
  seconds: number;
}

/**
 * Lead capture modal.
 *
 * Submission order:
 *  1. POST to NEXT_PUBLIC_LEAD_WEBHOOK if one is configured (Zapier / Apps
 *     Script / CRM endpoint). Set it in .env.local once the CRM sheet exists.
 *  2. Whether or not that succeeds, open WhatsApp with the enquiry prefilled,
 *     so a lead is never lost to a broken webhook.
 *  3. Route to /thank-you, which is where the Meta pixel conversion fires.
 */
export default function PopupForm({ isOpen, onClose, minutes, seconds }: PopupFormProps) {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const data = Object.fromEntries(new FormData(e.currentTarget).entries()) as Record<
      string,
      string
    >;

    const webhook = process.env.NEXT_PUBLIC_LEAD_WEBHOOK;
    if (webhook) {
      try {
        await fetch(webhook, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...data,
            source: `${site.name} landing page`,
            submittedAt: new Date().toISOString(),
          }),
        });
      } catch {
        // Swallowed on purpose — the WhatsApp handoff below is the safety net.
      }
    }

    const message = encodeURIComponent(
      `Hi ${site.name}, I would like to book an implant consultation.\n\n` +
        `Name: ${data.name}\nPhone: ${data.phone}\n` +
        `${data.email ? `Email: ${data.email}\n` : ''}` +
        `Concern: ${data.concern || 'Not specified'}`,
    );
    window.open(`https://wa.me/${site.contact.whatsapp}?text=${message}`, '_blank', 'noopener');

    router.push('/thank-you');
  };

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-[rgba(26,16,10,0.55)] p-4 backdrop-blur-sm"
      onMouseDown={(e) => {
        if (!dialogRef.current?.contains(e.target as Node)) onClose();
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="popup-title"
        className="max-h-[92vh] w-full max-w-md animate-fadeIn overflow-y-auto rounded-lg border border-line bg-white shadow-2xl"
      >
        {/* Countdown header */}
        <div className="relative rounded-t-lg bg-gradient-to-r from-[var(--brand-2)] to-[var(--brand)] px-6 py-5 text-center text-white">
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full text-white/70 transition hover:bg-white/20 hover:text-white"
          >
            <X size={16} />
          </button>
          <p className="text-[12px] uppercase tracking-[0.16em] text-white/75">
            This offer expires in
          </p>
          <p className="mt-1 font-display text-3xl font-extrabold tabular-nums">
            {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
          </p>
        </div>

        <div className="p-6">
          <h2 id="popup-title" className="text-center font-display text-xl md:text-2xl">
            Book Your <span className="text-gradient-brand">Consultation</span>
          </h2>
          <p className="mt-2 text-center text-sm text-[var(--text-mute)]">
            {site.offer.sub} with {site.doctor.name}.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label htmlFor="lead-name" className="mb-1 block text-sm font-medium">
                Full Name
              </label>
              <input id="lead-name" type="text" name="name" required className="field" />
            </div>

            <div>
              <label htmlFor="lead-phone" className="mb-1 block text-sm font-medium">
                Phone Number
              </label>
              <input
                id="lead-phone"
                type="tel"
                name="phone"
                required
                pattern="[0-9+ ]{10,15}"
                placeholder="10-digit mobile number"
                className="field"
              />
            </div>

            <div>
              <label htmlFor="lead-email" className="mb-1 block text-sm font-medium">
                Email <span className="text-[var(--text-dim)]">(optional)</span>
              </label>
              <input id="lead-email" type="email" name="email" className="field" />
            </div>

            <div>
              <label htmlFor="lead-concern" className="mb-1 block text-sm font-medium">
                Describe Your Dental Concern
              </label>
              <textarea
                id="lead-concern"
                name="concern"
                rows={2}
                placeholder="e.g. missing back teeth, loose denture, tooth pain"
                className="field resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="btn btn-brand w-full !py-4 text-lg disabled:opacity-70"
            >
              {submitting ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" /> Sending…
                </>
              ) : (
                'Book My Consultation'
              )}
            </button>
            <p className="text-center text-xs text-[var(--text-dim)]">
              We only use your number to confirm the appointment. No spam, ever.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
