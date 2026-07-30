import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { COMPANY, NAV_LINKS } from '@/lib/constants';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-lg shadow-soft' : 'bg-transparent'
      }`}
    >
      <nav className="container-px flex items-center justify-between h-16 lg:h-20">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNav('#home');
          }}
          className="flex items-center gap-2.5 group"
        >
          <img
            src="/zenfi-connect-logo-cropped.jpeg"
            alt="ZenFi Connect"
            className="h-10 w-40 rounded-md object-cover shadow-sm transition-transform group-hover:scale-[1.02] sm:w-44"
          />
        </a>

        <ul className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNav(link.href);
                }}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                  scrolled
                    ? 'text-slate-600 hover:text-brand-700 hover:bg-brand-50'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <a href={COMPANY.whatsappLink} target="_blank" rel="noreferrer"
            className={`btn-ghost text-sm ${scrolled ? '' : 'text-white/80 hover:text-white hover:bg-white/10'}`}>
            WhatsApp
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNav('#contact');
            }}
            className="btn-primary text-sm px-5 py-2.5"
          >
            Get Connected
          </a>
        </div>

        <button
          className={`lg:hidden grid place-items-center w-10 h-10 rounded-xl ${scrolled ? 'text-slate-900' : 'text-white'}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 bg-white border-t border-slate-100 ${
          open ? 'max-h-96 shadow-soft' : 'max-h-0'
        }`}
      >
        <ul className="container-px py-4 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNav(link.href);
                }}
                className="block px-4 py-3 rounded-2xl text-slate-700 font-semibold hover:bg-brand-50 hover:text-brand-700"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="mt-2">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNav('#contact');
              }}
              className="btn-primary w-full"
            >
              Get Connected
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
