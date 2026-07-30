import { PackageOpen, MapPin, Wrench, Wifi, ArrowRight } from 'lucide-react';
import { STEPS } from '@/lib/constants';
import { useReveal } from '@/hooks/useReveal';

const ICONS = { PackageOpen, MapPin, Wrench, Wifi };

const ROUTER_IMG = 'https://images.pexels.com/photos/28348054/pexels-photo-28348054.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

export default function About() {
  const { ref, visible } = useReveal();

  return (
    <section id="about" ref={ref} className="py-20 lg:py-28 bg-slate-50">
      <div className="container-px">
        {/* About content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className={`reveal ${visible ? 'is-visible' : ''}`}>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-card">
                <img src={ROUTER_IMG} alt="Modern LTE WiFi router" className="w-full h-80 lg:h-96 object-cover" loading="lazy" />
              </div>
              <div className="absolute -bottom-6 -right-3 sm:right-4 rounded-2xl bg-white shadow-card px-6 py-4">
                <p className="text-3xl font-extrabold text-brand-600">2026</p>
                <p className="text-sm text-slate-500">Founded in Mpumalanga</p>
              </div>
            </div>
          </div>

          <div className={`reveal ${visible ? 'is-visible' : ''}`} style={{ transitionDelay: '0.1s' }}>
            <span className="eyebrow">About Us</span>
            <h2 className="section-title mt-3">Your Local Internet Provider</h2>
            <p className="mt-5 text-slate-600 text-lg leading-relaxed">
              ZenFi Connect (Pty) Ltd was founded in 2026 by G.T Thombeni and J.P Nxalati to provide
              reliable, affordable LTE internet to homes and businesses throughout Mpumalanga.
            </p>
            <p className="mt-4 text-slate-500 leading-relaxed">
              Our mission is to connect communities with dependable internet, honest pricing,
              professional installations, and customer service you can rely on.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-white border border-slate-100 p-5 shadow-soft">
                <p className="text-sm text-slate-400 font-semibold">Directors</p>
                <p className="mt-1 font-bold text-slate-800">G.T Thombeni</p>
                <p className="font-bold text-slate-800">J.P Nxalati</p>
              </div>
              <div className="rounded-2xl bg-white border border-slate-100 p-5 shadow-soft">
                <p className="text-sm text-slate-400 font-semibold">Reg. Number</p>
                <p className="mt-1 font-bold text-slate-800">2026/381899/07</p>
              </div>
            </div>
          </div>
        </div>

        {/* Installation process */}
        <div className={`mt-24 lg:mt-32 reveal ${visible ? 'is-visible' : ''}`}>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="eyebrow">How It Works</span>
            <h2 className="section-title mt-3">Installation Process</h2>
            <p className="mt-4 text-slate-500 text-lg">Get connected in four simple steps.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* connecting line */}
            <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-200 via-brand-300 to-brand-200" />
            {STEPS.map((step, i) => {
              const Icon = ICONS[step.icon as keyof typeof ICONS];
              return (
                <div
                  key={step.num}
                  className="relative card p-7 text-center hover:shadow-card hover:-translate-y-1.5 transition-all duration-300"
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <span className="relative z-10 grid place-items-center w-16 h-16 rounded-2xl bg-brand-600 text-white mx-auto mb-5 shadow-glow">
                    <Icon className="w-7 h-7" />
                    <span className="absolute -top-2 -right-2 grid place-items-center w-6 h-6 rounded-full bg-accent-400 text-slate-900 text-xs font-bold">
                      {step.num}
                    </span>
                  </span>
                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-500">{step.desc}</p>
                  {i < STEPS.length - 1 && (
                    <ArrowRight className="hidden lg:block absolute top-12 -right-3 w-5 h-5 text-brand-300 bg-slate-50 rounded-full" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
