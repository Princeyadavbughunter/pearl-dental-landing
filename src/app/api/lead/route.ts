import { NextResponse } from "next/server";

/**
 * Lead sink.
 *
 * The previous build posted straight from the browser to a NEXT_PUBLIC_ webhook
 * and, if that was unset, relied entirely on the visitor completing a WhatsApp
 * handoff. Two problems: the endpoint was public, and an abandoned handoff lost
 * the lead with no trace.
 *
 * Now the browser posts here. This route always records the lead in the server
 * log, then forwards it to LEAD_WEBHOOK when one is configured (a private
 * server variable — Apps Script, Zapier or the CRM endpoint). A forwarding
 * failure is reported back so the form can show it rather than failing silently.
 */

export const runtime = "nodejs";

type Lead = {
  name?: string;
  phone?: string;
  email?: string;
  concern?: string;
  consent?: string;
  company?: string; // honeypot
};

const MAX = { name: 120, phone: 20, email: 160, concern: 1200 };

function clean(v: unknown, max: number) {
  return typeof v === "string" ? v.trim().slice(0, max) : "";
}

export async function POST(request: Request) {
  let body: Lead;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: a real person never fills a field that is hidden from them.
  if (clean(body.company, 100)) {
    return NextResponse.json({ ok: true });
  }

  const lead = {
    name: clean(body.name, MAX.name),
    phone: clean(body.phone, MAX.phone),
    email: clean(body.email, MAX.email),
    concern: clean(body.concern, MAX.concern),
    consent: body.consent === "on" || body.consent === "true",
  };

  if (!lead.name || !lead.phone) {
    return NextResponse.json(
      { ok: false, error: "Please enter your name and phone number." },
      { status: 422 },
    );
  }

  const digits = lead.phone.replace(/\D/g, "");
  if (digits.length < 10 || digits.length > 13) {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid 10-digit mobile number." },
      { status: 422 },
    );
  }

  if (!lead.consent) {
    return NextResponse.json(
      { ok: false, error: "Please agree to be contacted about your enquiry." },
      { status: 422 },
    );
  }

  const record = {
    ...lead,
    source: "Pearl Dental landing page",
    submittedAt: new Date().toISOString(),
  };

  // Always leave a trace, whatever happens downstream.
  console.log("[lead]", JSON.stringify(record));

  const webhook = process.env.LEAD_WEBHOOK;
  if (webhook) {
    try {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(record),
        signal: AbortSignal.timeout(8000),
      });
      if (!res.ok) throw new Error(`webhook responded ${res.status}`);
    } catch (err) {
      console.error("[lead] webhook failed", err);
      return NextResponse.json(
        {
          ok: false,
          error:
            "We could not save your request just now. Please send it on WhatsApp or call the clinic.",
        },
        { status: 502 },
      );
    }
  }

  return NextResponse.json({ ok: true });
}
