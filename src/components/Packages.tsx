import { useState } from 'react';
import { Check, ArrowRight, Home, Building2, Star } from 'lucide-react';
import { HOME_PACKAGES, BUSINESS_PACKAGES } from '@/lib/constants';
import { useReveal } from '@/hooks/useReveal';

type Tab = 'home' | 'business';

export default function Packages() {
  const [tab, setTab] = useState<Tab>('home');
  const { ref, visible } = useReveal();

  const packages = tab === 'home' ? HOME_PACKAGES : BUSINESS_PACKAGES;
  const title =
    tab === 'home' ? 'Unlimited & Uncapped Home LTE' : 'Unlimited & Uncapped Business LTE';

  const scrollToContact = () => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="packages" ref={ref} className="py-20 lg:py-28 bg-slate-50">
      <div className="container-px">
        <div className={`max-w-2xl mx-auto text-center mb-12 reveal ${visible ? 'is-visible' : ''}`}>
          <span className="eyebrow">Pricing</span>
          <h2 className="section-title mt-3">Choose Your Package</h2>
          <p className="mt-4 text-slate-500 text-lg">
            Transparent, affordable monthly pricing. No hidden fees.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-full bg-white shadow-soft border border-slate-100">
            <button
              onClick={() => setTab('home')}
              className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                tab === 'home' ? 'bg-brand-600 text-white shadow-glow' : 'text-slate-600 hover:text-brand-700'
              }`}
            >
              <Home className="w-4 h-4" /> Home
            </button>
            <button
              onClick={() => setTab('business')}
              className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                tab === 'business' ? 'bg-brand-600 text-white shadow-glow' : 'text-slate-600 hover:text-brand-700'
              }`}
            >
              <Building2 className="w-4 h-4" /> Business
            </button>
          </div>
        </div>

        <h3 className="text-center text-xl font-bold text-slate-800 mb-8">{title}</h3>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {packages.map((pkg, i) => (
            <div
              key={pkg.speed}
              className={`relative rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1.5 ${
                pkg.popular
                  ? 'bg-brand-600 text-white shadow-card scale-105'
                  : 'bg-white text-slate-900 shadow-soft border border-slate-100'
              }`}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              {pkg.popular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-accent-400 text-slate-900 text-xs font-bold px-4 py-1.5 shadow-md">
                  <Star className="w-3.5 h-3.5 fill-current" /> Most Popular
                </span>
              )}
              <p className={`text-sm font-semibold uppercase tracking-wide ${pkg.popular ? 'text-brand-100' : 'text-brand-600'}`}>
                {tab === 'home' ? 'Home LTE' : 'Business LTE'}
              </p>
              <p className={`mt-3 text-4xl font-extrabold ${pkg.popular ? 'text-white' : 'text-slate-900'}`}>
                {pkg.speed}
              </p>
              <div className="mt-4 flex items-baseline gap-1">
                <span className={`text-4xl font-extrabold ${pkg.popular ? 'text-white' : 'text-slate-900'}`}>{pkg.price}</span>
                <span className={`text-sm ${pkg.popular ? 'text-brand-100' : 'text-slate-400'}`}>{pkg.period}</span>
              </div>

              <ul className="mt-6 space-y-3 text-sm">
                {['Unlimited & uncapped', 'No throttling', 'Quick installation', 'Local support'].map((feat) => (
                  <li key={feat} className="flex items-center gap-2.5">
                    <Check className={`w-4 h-4 ${pkg.popular ? 'text-accent-300' : 'text-accent-500'}`} />
                    <span className={pkg.popular ? 'text-brand-50' : 'text-slate-600'}>{feat}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={scrollToContact}
                className={`mt-8 w-full btn ${
                  pkg.popular
                    ? 'bg-white text-brand-700 hover:bg-brand-50'
                    : 'bg-brand-600 text-white hover:bg-brand-700'
                } px-6 py-3 active:scale-95`}
              >
                Get Connected <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        <p className="text-center mt-10 text-sm text-slate-500 italic">
          Equipment and installation are quoted separately.
        </p>
      </div>
    </section>
  );
}
