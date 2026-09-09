import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Logo from "@/components/Logo";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: `Privacy notice — ${site.name}`,
  description: `How ${site.name} handles the information submitted through this page.`,
  robots: { index: false, follow: false },
};

/**
 * PLACEHOLDER — NOT LEGAL COPY.
 *
 * This page describes only what the code on this site actually does with a
 * submission, which is verifiable from /api/lead. Everything that depends on
 * the clinic's own practices — retention periods, who else sees the data, the
 * named data controller — is marked below and must be completed by the client,
 * ideally with legal review against India's DPDP Act 2023.
 *
 * Do not present this page as a finished privacy policy until those blanks are
 * filled in.
 */

const needsClient = [
  "The registered name and address of the entity that controls this data.",
  "How long enquiry details are kept before deletion.",
  "Which staff and which third-party tools (CRM, spreadsheet, ads platform) can see them.",
  "The contact point for a request to access, correct or delete your data.",
  "Whether any data is shared with a payment, laboratory or referral partner.",
];

export default function PrivacyPage() {
  return (
    <main className="min-h-dvh bg-white">
      <div className="mx-auto w-full max-w-[46rem] px-5 py-12 sm:px-8 sm:py-20">
        <Logo height={32} priority />

        <h1 className="h2 mt-10">Privacy notice</h1>
        <p className="muted mt-4">
          How information submitted through this page is handled.
        </p>

        <div className="mt-10 space-y-9">
          <section>
            <h2 className="text-[18px] font-medium">What we collect</h2>
            <p className="muted mt-3">
              The consultation form asks for your name and mobile number, and optionally
              a short description of the dental problem you would like treated. Nothing
              else is collected from the form, and the page does not ask for payment or
              identity details.
            </p>
          </section>

          <section>
            <h2 className="text-[18px] font-medium">Why we collect it</h2>
            <p className="muted mt-3">
              Solely to call you back and arrange a consultation at {site.name}. Your
              description of the problem is used to prepare for that appointment.
            </p>
          </section>

          <section>
            <h2 className="text-[18px] font-medium">Where it goes</h2>
            <p className="muted mt-3">
              The form posts to this site&apos;s own server, which records the enquiry and
              forwards it to the clinic&apos;s enquiry system. If you choose to continue on
              WhatsApp, that conversation is carried by WhatsApp under its own terms.
            </p>
          </section>

          <section>
            <h2 className="text-[18px] font-medium">Your choices</h2>
            <p className="muted mt-3">
              You can ask the clinic to delete your enquiry at any time by calling{" "}
              {site.contact.phones[0].display} or emailing{" "}
              <a
                href={`mailto:${site.contact.email}`}
                className="text-teal-700 underline underline-offset-2"
              >
                {site.contact.email}
              </a>
              .
            </p>
          </section>

          {/* Visible on purpose: it must not be possible to ship this page and
              forget that it is unfinished. */}
          <section className="border border-amber-300 bg-amber-50 p-5">
            <h2 className="text-[15px] font-semibold text-amber-900">
              To be completed by the clinic before launch
            </h2>
            <p className="mt-2 text-[14px] leading-relaxed text-amber-900/85">
              This notice describes what the website does. It is not yet a complete
              privacy policy, and no legal wording has been invented on the clinic&apos;s
              behalf. The following still need confirming, ideally with legal review
              against India&apos;s Digital Personal Data Protection Act, 2023:
            </p>
            <ul className="mt-3 space-y-1.5 text-[14px] text-amber-900/85">
              {needsClient.map((item) => (
                <li key={item} className="flex gap-2.5">
                  <span aria-hidden>•</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <Link
          href="/"
          className="mt-12 inline-flex items-center gap-2 text-[14px] text-ink-soft transition-colors hover:text-teal-700"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden /> Back to the clinic page
        </Link>
      </div>
    </main>
  );
}
