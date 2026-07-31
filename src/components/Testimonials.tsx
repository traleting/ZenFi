import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '@/lib/constants';
import { useReveal } from '@/hooks/useReveal';

export default function Testimonials() {
  const { ref, visible } = useReveal();

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-white">
      <div className="container-px">
        <div className={`max-w-2xl mx-auto text-center mb-14 reveal ${visible ? 'is-visible' : ''}`}>
          <span className="eyebrow">Testimonials</span>
          <h2 className="section-title mt-3">What Our Customers Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className={`card p-8 hover:shadow-card transition-all duration-300 reveal ${visible ? 'is-visible' : ''}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <Quote className="w-8 h-8 text-brand-200 mb-4" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-slate-700 text-lg leading-relaxed">"{t.text}"</p>
              <div className="mt-6 flex items-center gap-3">
                <span className="grid place-items-center w-11 h-11 rounded-full bg-brand-100 text-brand-700 font-bold">
                  {t.name.charAt(0)}
                </span>
                <div>
                  <p className="font-bold text-slate-900">{t.name}</p>
                  <p className="text-sm text-slate-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
