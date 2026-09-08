"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { AlertCircle, Loader2, X } from "lucide-react";
import Logo from "../Logo";
import { site } from "@/config/site";
import { telHref, whatsappHref } from "@/lib/contact";

/**
 * Consultation request dialog.
 *
 * No countdown, no manufactured deadline — the previous build ran a 20:00 timer
 * that reset forever, against an offer that does not exist.
 *
 * Submission posts to /api/lead and waits for the result, so a failure is
 * visible instead of silent. WhatsApp is never opened programmatically: it is a
 * button the visitor presses, which sidesteps mobile popup blocking entirely.
 */

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

export default function LeadDialog({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const router = useRouter();
  const panelRef = useRef<HTMLDivElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);
  const restoreFocusTo = useRef<HTMLElement | null>(null);

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Remember what had focus, move focus into the dialog, restore on close.
  useEffect(() => {
    if (!open) return;
    restoreFocusTo.current = document.activeElement as HTMLElement | null;
    const id = window.setTimeout(() => firstFieldRef.current?.focus(), 40);
    return () => {
      window.clearTimeout(id);
      restoreFocusTo.current?.focus?.();
    };
  }, [open]);

  // Lock the page behind the dialog without letting it jump to the top.
  useEffect(() => {
    if (!open) return;
    const { body } = document;
    const scrollY = window.scrollY;
    const prev = {
      position: body.style.position,
      top: body.style.top,
      width: body.style.width,
      overflow: body.style.overflow,
    };
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.width = "100%";
    body.style.overflow = "hidden";
    return () => {
      Object.assign(body.style, prev);
      window.scrollTo(0, scrollY);
    };
  }, [open]);

  // Escape closes; Tab is trapped inside the panel.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key !== "Tab") return;
      const nodes = panelRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE);
      if (!nodes || nodes.length === 0) return;
      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      const active = document.activeElement;
      if (e.shiftKey && (active === first || !panelRef.current?.contains(active))) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey, true);
    return () => document.removeEventListener("keydown", onKey, true);
  }, [open, onClose]);

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (submitting) return;
      setSubmitting(true);
      setError(null);

      const data = Object.fromEntries(
        new FormData(e.currentTarget).entries(),
      ) as Record<string, string>;

      try {
        const res = await fetch("/api/lead", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
        const json = (await res.json().catch(() => null)) as
          | { ok?: boolean; error?: string }
          | null;

        if (!res.ok || !json?.ok) {
          setError(
            json?.error ??
              "Something went wrong sending your request. Please call or message us instead.",
          );
          setSubmitting(false); // always recoverable — the previous build stuck here
          return;
        }
        router.push("/thank-you");
      } catch {
        setError(
          "We could not reach the clinic's server. Please check your connection, or message us on WhatsApp.",
        );
        setSubmitting(false);
      }
    },
    [router, submitting],
  );

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[80] flex items-end justify-center bg-ink/50 p-0 backdrop-blur-[2px] sm:items-center sm:p-4"
      onMouseDown={(e) => {
        if (!panelRef.current?.contains(e.target as Node)) onClose();
      }}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="lead-title"
        aria-describedby="lead-desc"
        className="max-h-[92dvh] w-full max-w-[440px] animate-fadeUp overflow-y-auto rounded-t-lg border border-line bg-white shadow-lg sm:rounded-lg"
      >
        <div className="flex items-start justify-between gap-4 border-b border-line px-6 py-5">
          <Logo height={26} />
          <button
            onClick={onClose}
            aria-label="Close"
            className="-mr-2 -mt-1 grid h-9 w-9 place-items-center rounded-sm text-ink-mute transition-colors hover:bg-teal-50 hover:text-ink"
          >
            <X size={18} aria-hidden />
          </button>
        </div>

        <div className="px-6 py-6">
          <h2 id="lead-title" className="h3">
            Request a consultation
          </h2>
          <p id="lead-desc" className="muted mt-2">
            {site.consultation.includes}, with {site.doctor.name}. We call you back to
            confirm a time — Monday to Saturday.
          </p>

          {error && (
            <div
              role="alert"
              className="mt-5 flex gap-3 rounded-sm border border-red-200 bg-red-50 p-3 text-[14px] text-red-800"
            >
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
              <div>
                <p>{error}</p>
                <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 font-medium">
                  <a
                    className="underline underline-offset-2"
                    href={whatsappHref(
                      `Hello ${site.name}, I would like to book a consultation.`,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Message on WhatsApp
                  </a>
                  <a
                    className="underline underline-offset-2"
                    href={telHref(site.contact.phones[0])}
                  >
                    Call {site.contact.phones[0]}
                  </a>
                </div>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate={false}>
            {/* Honeypot — hidden from people, tempting to bots. */}
            <div className="hidden" aria-hidden>
              <label htmlFor="lead-company">Company</label>
              <input id="lead-company" name="company" type="text" tabIndex={-1} autoComplete="off" />
            </div>

            <div>
              <label htmlFor="lead-name" className="mb-1.5 block text-[14px] font-medium">
                Full name
              </label>
              <input
                ref={firstFieldRef}
                id="lead-name"
                name="name"
                type="text"
                required
                autoComplete="name"
                className="field"
              />
            </div>

            <div>
              <label htmlFor="lead-phone" className="mb-1.5 block text-[14px] font-medium">
                Mobile number
              </label>
              <input
                id="lead-phone"
                name="phone"
                type="tel"
                required
                inputMode="numeric"
                autoComplete="tel"
                pattern="[0-9+\s-]{10,15}"
                placeholder="10-digit mobile number"
                className="field"
              />
            </div>

            <div>
              <label htmlFor="lead-concern" className="mb-1.5 block text-[14px] font-medium">
                What would you like treated?{" "}
                <span className="font-normal text-ink-faint">(optional)</span>
              </label>
              <textarea
                id="lead-concern"
                name="concern"
                rows={3}
                placeholder="e.g. missing back teeth, a loose denture, pain in one tooth"
                className="field resize-none"
              />
            </div>

            <label className="flex cursor-pointer items-start gap-3 pt-1 text-[13px] leading-relaxed text-ink-soft">
              <input
                type="checkbox"
                name="consent"
                required
                className="mt-0.5 h-4 w-4 shrink-0 accent-teal-700"
              />
              <span>
                I agree that {site.name} may contact me about this enquiry, and I have read
                the{" "}
                <a
                  href="/privacy"
                  target="_blank"
                  className="text-teal-700 underline underline-offset-2"
                >
                  privacy notice
                </a>
                .
              </span>
            </label>

            <button
              type="submit"
              disabled={submitting}
              className="btn btn-primary w-full disabled:opacity-70"
            >
              {submitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" aria-hidden /> Sending…
                </>
              ) : (
                "Request a call back"
              )}
            </button>

            <p className="text-center text-[13px] text-ink-mute">
              Prefer to talk now?{" "}
              <a
                href={telHref(site.contact.phones[0])}
                className="font-medium text-teal-700 underline underline-offset-2"
              >
                Call {site.contact.phones[0]}
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
