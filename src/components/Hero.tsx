import { ArrowRight, MessageCircle, MapPin, CheckCircle2, Wifi, Zap, ShieldCheck } from 'lucide-react';
import { COMPANY } from '@/lib/constants';

const FAMILY_IMG = 'https://images.pexels.com/photos/4473776/pexels-photo-4473776.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';
const BUSINESS_IMG = 'https://images.pexels.com/photos/7289715/pexels-photo-7289715.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

export default function Hero() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative bg-hero-mesh overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0b1e3f]" />

      <div className="container-px relative pt-28 lg:pt-36 pb-16 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <div className="text-white">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-sm font-semibold backdrop-blur-sm animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-400" />
              </span>
              Now serving Kwamhlanga & surrounding areas
            </div>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-tight animate-fade-up">
              Unlimited LTE WiFi for{' '}
              <span className="bg-gradient-to-r from-brand-300 to-accent-300 bg-clip-text text-transparent">
                Homes &amp; Businesses
              </span>{' '}
              in Mpumalanga
            </h1>

            <p className="mt-6 text-lg text-white/80 leading-relaxed max-w-xl animate-fade-up" style={{ animationDelay: '0.1s' }}>
              Enjoy fast, reliable, unlimited and uncapped LTE internet with affordable monthly packages,
              quick installation, and local customer support.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <button onClick={() => scrollTo('#coverage')} className="btn-primary text-base px-7 py-3.5">
                Check Coverage
                <ArrowRight className="w-5 h-5" />
              </button>
              <button onClick={() => scrollTo('#contact')} className="btn bg-white text-brand-700 px-7 py-3.5 text-base hover:bg-brand-50 hover:shadow-card active:scale-95">
                Get Connected
              </button>
              <a href={COMPANY.whatsappLink} target="_blank" rel="noreferrer" className="btn-whatsapp text-base px-7 py-3.5">
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/70 animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <span className="inline-flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent-400" /> No contracts lock-in</span>
              <span className="inline-flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent-400" /> No data limits</span>
              <span className="inline-flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent-400" /> Local support</span>
            </div>
          </div>

          {/* Right — image collage */}
          <div className="relative animate-scale-in" style={{ animationDelay: '0.15s' }}>
            <div className="relative grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-3xl overflow-hidden shadow-card ring-1 ring-white/20">
                  <img src={FAMILY_IMG} alt="Happy family using high-speed internet at home" className="w-full h-56 object-cover" loading="eager" />
                </div>
                <div className="rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 p-5 text-white">
                  <Wifi className="w-6 h-6 text-accent-300 mb-2" />
                  <p className="font-semibold">Home LTE</p>
                  <p className="text-sm text-white/70">From R499/month</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 p-5 text-white">
                  <Zap className="w-6 h-6 text-brand-300 mb-2" />
                  <p className="font-semibold">Business LTE</p>
                  <p className="text-sm text-white/70">From R899/month</p>
                </div>
                <div className="rounded-3xl overflow-hidden shadow-card ring-1 ring-white/20">
                  <img src={BUSINESS_IMG} alt="Small business working online with reliable internet" className="w-full h-56 object-cover" loading="lazy" />
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-5 -left-3 sm:left-2 rounded-2xl bg-white shadow-card px-5 py-3 flex items-center gap-3 animate-float">
              <span className="grid place-items-center w-10 h-10 rounded-xl bg-accent-100 text-accent-700">
                <ShieldCheck className="w-5 h-5" />
              </span>
              <div>
                <p className="text-sm font-bold text-slate-900">99% Uptime</p>
                <p className="text-xs text-slate-500">Reliable connection</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-16 lg:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {[
            { icon: MapPin, label: 'Areas Served', value: 'Kwamhlanga +' },
            { icon: Zap, label: 'Max Speed', value: '100 Mbps' },
            { icon: ShieldCheck, label: 'Uncapped', value: 'No limits' },
            { icon: MessageCircle, label: 'Local Support', value: '071 198 7683' },
          ].map((s, i) => (
            <div key={i} className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm p-4 lg:p-5 text-white animate-fade-up" style={{ animationDelay: `${0.3 + i * 0.08}s` }}>
              <s.icon className="w-5 h-5 text-accent-300 mb-2" />
              <p className="text-lg font-bold">{s.value}</p>
              <p className="text-sm text-white/60">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
