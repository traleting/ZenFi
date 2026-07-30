import { useState, type FormEvent } from 'react';
import { MapPin, Phone, CheckCircle2, Loader2, AlertCircle, MessageCircle } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { COMPANY } from '@/lib/constants';
import { useReveal } from '@/hooks/useReveal';

export default function Coverage() {
  const { ref, visible } = useReveal();
  const [form, setForm] = useState({ full_address: '', town_suburb: '', phone_number: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setError('');
    const { error: dbError } = await supabase.from('coverage_checks').insert(form);
    if (dbError) {
      setStatus('error');
      setError('Something went wrong. Please try again or WhatsApp us.');
      return;
    }
    setStatus('success');
    setForm({ full_address: '', town_suburb: '', phone_number: '' });
  };

  return (
    <section id="coverage" ref={ref} className="py-20 lg:py-28 bg-white">
      <div className="container-px">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <div className={`reveal ${visible ? 'is-visible' : ''}`}>
            <span className="eyebrow">Coverage</span>
            <h2 className="section-title mt-3">Check Coverage</h2>
            <p className="mt-4 text-slate-500 text-lg">
              We currently service Kwamhlanga and surrounding areas in Mpumalanga.
            </p>

            <div className="mt-8 rounded-3xl overflow-hidden shadow-soft border border-slate-100">
              <iframe
                title="Kwamhlanga, Mpumalanga map"
                src="https://www.google.com/maps?q=Kwamhlanga,Mpumalanga,South+Africa&output=embed"
                className="w-full h-64 lg:h-80"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right — form */}
          <div className={`card p-8 lg:p-10 reveal ${visible ? 'is-visible' : ''}`} style={{ transitionDelay: '0.1s' }}>
            {status === 'success' ? (
              <div className="text-center py-10">
                <span className="grid place-items-center w-16 h-16 rounded-full bg-accent-100 text-accent-600 mx-auto mb-5">
                  <CheckCircle2 className="w-8 h-8" />
                </span>
                <h3 className="text-2xl font-bold text-slate-900">Request received!</h3>
                <p className="mt-3 text-slate-500">
                  Thank you. Our team will check coverage in your area and contact you shortly.
                </p>
                <button onClick={() => setStatus('idle')} className="btn-secondary mt-6">
                  Check another address
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="cov-address" className="block text-sm font-semibold text-slate-700 mb-1.5">
                    Full Address
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      id="cov-address"
                      type="text"
                      required
                      value={form.full_address}
                      onChange={(e) => setForm({ ...form, full_address: e.target.value })}
                      placeholder="e.g. 123 Main Street"
                      className="input-field pl-11"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="cov-town" className="block text-sm font-semibold text-slate-700 mb-1.5">
                    Town / Suburb
                  </label>
                  <input
                    id="cov-town"
                    type="text"
                    required
                    value={form.town_suburb}
                    onChange={(e) => setForm({ ...form, town_suburb: e.target.value })}
                    placeholder="e.g. Kwamhlanga"
                    className="input-field"
                  />
                </div>

                <div>
                  <label htmlFor="cov-phone" className="block text-sm font-semibold text-slate-700 mb-1.5">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      id="cov-phone"
                      type="tel"
                      required
                      value={form.phone_number}
                      onChange={(e) => setForm({ ...form, phone_number: e.target.value })}
                      placeholder="e.g. 071 198 7683"
                      className="input-field pl-11"
                    />
                  </div>
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-2 rounded-2xl bg-red-50 border border-red-100 px-4 py-3 text-sm text-red-700">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    {error}
                  </div>
                )}

                <button type="submit" disabled={status === 'loading'} className="btn-primary w-full py-3.5 disabled:opacity-60">
                  {status === 'loading' ? (
                    <><Loader2 className="w-5 h-5 animate-spin" /> Checking…</>
                  ) : (
                    'Check Availability'
                  )}
                </button>

                <p className="text-center text-sm text-slate-500">
                  Not sure?{' '}
                  <a href={COMPANY.whatsappLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 font-semibold text-whatsapp-dark hover:underline">
                    <MessageCircle className="w-4 h-4" /> Contact us on WhatsApp for assistance.
                  </a>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
