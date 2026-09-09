import Link from "next/link";
import { ArrowLeft, Check, MessageCircle, Phone } from "lucide-react";
import Logo from "./Logo";
import { site } from "@/config/site";
import { telHref, whatsappHref } from "@/lib/contact";

const steps = [
  "We call you back to confirm a time — usually within clinic hours the same day.",
  "Your first visit covers the clinical examination and diagnostic evaluation.",
  "You leave with a treatment plan and an estimate for it.",
];

/**
 * Confirmation.
 *
 * WhatsApp is offered here as a button the visitor presses, rather than being
 * opened programmatically at submit time — a scripted window.open after an
 * awaited request is blocked by mobile browsers, which is how the previous
 * flow lost its handoff.
 */
export default function ThankYouPage() {
  const phone = site.contact.phones[0];

  return (
    <main className="min-h-dvh bg-paper-soft">
      <div className="mx-auto w-full max-w-[42rem] px-5 py-12 sm:px-8 sm:py-20">
        <Logo height={34} priority />

        <div className="mt-10 border border-line bg-white p-6 sm:p-10">
          <span className="grid h-11 w-11 place-items-center rounded-full bg-teal-50 text-teal-700">
            <Check className="h-5 w-5" aria-hidden />
          </span>

          <h1 className="h2 mt-6">Your request has reached the clinic.</h1>
          <p className="lede mt-4">
            Thank you. {site.name}&apos;s team will call you back to confirm your
            consultation with {site.doctor.name}.
          </p>

          <ol className="mt-9 border-t border-line">
            {steps.map((step, i) => (
              <li
                key={step}
                className="grid grid-cols-[1.75rem_1fr] gap-4 border-b border-line py-4 text-[15px] text-ink-soft"
              >
                <span aria-hidden className="tnum font-display text-teal-500">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {step}
              </li>
            ))}
          </ol>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href={telHref(phone)} className="btn btn-primary">
              <Phone className="h-4 w-4" aria-hidden /> Call {phone.display}
            </a>
            <a
              href={whatsappHref(
                `Hello ${site.name}, I have just requested a consultation through your website.`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <MessageCircle className="h-4 w-4 text-whatsapp" aria-hidden />
              Continue on WhatsApp
            </a>
          </div>

          <p className="mt-6 text-[14px] text-ink-mute">
            {site.hours.summary}. {site.contact.addressLines.join(", ")}.
          </p>
        </div>

        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 text-[14px] text-ink-soft transition-colors hover:text-teal-700"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden /> Back to the clinic page
        </Link>
      </div>
    </main>
  );
}
