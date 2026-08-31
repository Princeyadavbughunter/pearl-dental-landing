'use client';

import { MessageCircle } from 'lucide-react';
import { site } from '@/config/site';

export default function WhatsAppButton() {
  const message = `Hello ${site.name}, I would like to book an implant consultation.`;
  const href = `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Pearl Dental on WhatsApp"
      className="fixed bottom-24 right-5 z-[60] grid h-14 w-14 place-items-center rounded-full bg-[var(--whatsapp)] text-white shadow-[0_10px_30px_-8px_rgba(37,211,102,0.7)] transition-transform duration-300 hover:scale-110 sm:bottom-24"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
