import { Facebook, Instagram, MessageCircle, Linkedin, ArrowUp } from 'lucide-react';
import { COMPANY, NAV_LINKS } from '@/lib/constants';

const SOCIALS = [
  { icon: Facebook, label: 'Facebook', href: '#' },
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: MessageCircle, label: 'WhatsApp', href: COMPANY.whatsappLink },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
];

export default function Footer() {
  const scrollTo = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="bg-[#0b1e3f] text-white">
      <div className="container-px py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img
              src="/zenfi-connect-logo-cropped.jpeg"
              alt="ZenFi Connect"
              className="mb-4 h-12 w-48 rounded-md object-cover"
            />
            <p className="text-white/60 text-sm leading-relaxed">{COMPANY.slogan}</p>
            <p className="mt-4 text-xs text-white/40">Reg. No. {COMPANY.regNumber}</p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white/80 mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                    className="text-white/60 hover:text-brand-300 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white/80 mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li>
                <a href={COMPANY.whatsappLink} target="_blank" rel="noreferrer" className="hover:text-brand-300 transition-colors flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" /> WhatsApp: {COMPANY.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${COMPANY.email}`} className="hover:text-brand-300 transition-colors flex items-center gap-2">
                  <span className="text-white/40">Email:</span> {COMPANY.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-white/40">Location:</span> Kwamhlanga, Mpumalanga
              </li>
            </ul>
          </div>

          {/* Social + back to top */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white/80 mb-4">Follow Us</h4>
            <div className="flex gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="grid place-items-center w-10 h-10 rounded-xl bg-white/10 hover:bg-brand-600 transition-colors"
                >
                  <s.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <button
              onClick={() => scrollTo('#home')}
              className="mt-6 inline-flex items-center gap-2 text-sm text-white/60 hover:text-brand-300 transition-colors"
            >
              <ArrowUp className="w-4 h-4" /> Back to top
            </button>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40 text-center sm:text-left">
            © 2026 ZENFI CONNECT (PTY) LTD. All Rights Reserved.
          </p>
          <p className="text-xs text-white/30">Founded May 2026 · Directors: G.T Thombeni &amp; J.P Nxalati</p>
        </div>
      </div>
    </footer>
  );
}
