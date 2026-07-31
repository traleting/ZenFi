import { MessageCircle } from 'lucide-react';
import { COMPANY } from '@/lib/constants';

export default function WhatsAppButton() {
  return (
    <a
      href={COMPANY.whatsappLink}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-50 group"
    >
      <span className="absolute inset-0 rounded-full bg-whatsapp animate-pulse-ring" />
      <span className="relative grid place-items-center w-14 h-14 rounded-full bg-whatsapp text-white shadow-card hover:bg-whatsapp-dark transition-colors">
        <MessageCircle className="w-7 h-7" strokeWidth={2} />
      </span>
      <span className="absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-slate-900 text-white text-sm font-semibold px-3 py-1.5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Chat with us
      </span>
    </a>
  );
}
