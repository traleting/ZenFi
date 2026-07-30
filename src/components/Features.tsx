import { Zap, Infinity as InfinityIcon, Headphones, Wallet } from 'lucide-react';
import { FEATURES } from '@/lib/constants';
import { useReveal } from '@/hooks/useReveal';

const ICONS = { Zap, Infinity: InfinityIcon, Headphones, Wallet };

export default function Features() {
  const { ref, visible } = useReveal();

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-white">
      <div className="container-px">
        <div className={`max-w-2xl mx-auto text-center mb-14 reveal ${visible ? 'is-visible' : ''}`}>
          <span className="eyebrow">Why ZenFi</span>
          <h2 className="section-title mt-3">Why Choose ZenFi Connect</h2>
          <p className="mt-4 text-slate-500 text-lg">
            We deliver dependable, uncapped LTE internet backed by friendly, local service.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((f, i) => {
            const Icon = ICONS[f.icon as keyof typeof ICONS];
            return (
              <div
                key={f.title}
                className={`card p-7 hover:shadow-card hover:-translate-y-1.5 transition-all duration-300 reveal ${visible ? 'is-visible' : ''}`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <span className="grid place-items-center w-14 h-14 rounded-2xl bg-brand-50 text-brand-600 mb-5 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                  <Icon className="w-7 h-7" strokeWidth={2} />
                </span>
                <h3 className="text-xl font-bold mb-2">{f.title}</h3>
                <p className="text-slate-500 leading-relaxed">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
