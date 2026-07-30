import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQS } from '@/lib/constants';
import { useReveal } from '@/hooks/useReveal';

export default function FAQ() {
  const { ref, visible } = useReveal();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-slate-50">
      <div className="container-px max-w-3xl">
        <div className={`text-center mb-12 reveal ${visible ? 'is-visible' : ''}`}>
          <span className="eyebrow">FAQ</span>
          <h2 className="section-title mt-3">Frequently Asked Questions</h2>
        </div>

        <div className={`space-y-4 reveal ${visible ? 'is-visible' : ''}`} style={{ transitionDelay: '0.1s' }}>
          {FAQS.map((faq, i) => (
            <div key={i} className="card overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-6 text-left"
                aria-expanded={open === i}
              >
                <span className="font-bold text-slate-900 text-lg">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-brand-600 shrink-0 transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`}
                />
              </button>
              <div
                className={`grid transition-all duration-300 ease-out ${
                  open === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-6 text-slate-500 leading-relaxed">{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
