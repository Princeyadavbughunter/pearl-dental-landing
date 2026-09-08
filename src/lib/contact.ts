import { site } from "@/config/site";

/**
 * Contact-link helpers. The `tel:` and `wa.me` formats were previously rebuilt
 * inline in six components; they live here so the number formatting is defined
 * once.
 */

/** "09600085760" -> "tel:+919600085760" */
export function telHref(phone: string) {
  return `tel:+91${phone.replace(/^0/, "").replace(/\s/g, "")}`;
}

export function whatsappHref(message: string) {
  return `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_ENQUIRY = `Hello ${site.name}, I would like to book a consultation.`;
