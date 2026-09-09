import { site } from "@/config/site";

/**
 * Contact-link helpers. Phone numbers are stored in `site.contact.phones` as
 * `{ display, tel, note }` so the dialling string and the printed string are
 * defined once and can never drift apart.
 */

/** The number the clinic gives out first — also its WhatsApp line. */
export const primaryPhone = site.contact.phones[0];

export function telHref(phone: { tel: string } | string) {
  return `tel:${typeof phone === "string" ? phone : phone.tel}`;
}

export function whatsappHref(message: string) {
  return `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const mailHref = `mailto:${site.contact.email}`;

export const WHATSAPP_ENQUIRY = `Hello ${site.name}, I would like to book a consultation.`;
