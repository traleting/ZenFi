import { useState, type FormEvent } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Loader2, CheckCircle2, AlertCircle, FileDown } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { COMPANY } from '@/lib/constants';
import { useReveal } from '@/hooks/useReveal';

const CONTACT_CARDS = [
  { icon: MessageCircle, label: 'Phone & WhatsApp', value: COMPANY.phone, href: COMPANY.whatsappLink, color: 'bg-whatsapp' },
  { icon: Mail, label: 'Email', value: COMPANY.email, href: `mailto:${COMPANY.email}`, color: 'bg-brand-600' },
  { icon: MapPin, label: 'Location', value: 'Kwamhlanga, Mpumalanga', href: 'https://www.google.com/maps?q=Kwamhlanga,Mpumalanga', color: 'bg-accent-600' },
];

export default function Contact() {
  const { ref, visible } = useReveal();
  const [form, setForm] = useState({ name: '', phone: '', email: '', address: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setError('');
    const { error: dbError } = await supabase.from('enquiries').insert(form);
    if (dbError) {
      setStatus('error');
      setError('Something went wrong. Please try again or WhatsApp us.');
      return;
    }
    setStatus('success');
    setForm({ name: '', phone: '', email: '', address: '', message: '' });
  };

  return (
    <section id="contact" ref={ref} className="py-20 lg:py-28 bg-white">
      <div className="container-px">
        <div className={`max-w-2xl mx-auto text-center mb-14 reveal ${visible ? 'is-visible' : ''}`}>
          <span className="eyebrow">Contact</span>
          <h2 className="section-title mt-3">Get Connected Today</h2>
          <p className="mt-4 text-slate-500 text-lg">
            Have a question or ready to sign up? Reach out and our team will get back to you.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact cards */}
          <div className={`lg:col-span-2 space-y-4 reveal ${visible ? 'is-visible' : ''}`}>
            {CONTACT_CARDS.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noreferrer"
                className="card p-6 flex items-center gap-4 hover:shadow-card hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <span className={`grid place-items-center w-12 h-12 rounded-2xl ${c.color} text-white shrink-0`}>
                  <c.icon className="w-6 h-6" />
                </span>
                <div>
                  <p className="text-sm text-slate-400 font-semibold">{c.label}</p>
                  <p className="font-bold text-slate-900 group-hover:text-brand-700 transition-colors">{c.value}</p>
                </div>
              </a>
            ))}

            <div className="rounded-3xl overflow-hidden shadow-soft border border-slate-100">
              <iframe
                title="Kwamhlanga location map"
                src="https://www.google.com/maps?q=Kwamhlanga,Mpumalanga,South+Africa&output=embed"
                className="w-full h-56"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Form */}
          <div className={`lg:col-span-3 card p-8 lg:p-10 reveal ${visible ? 'is-visible' : ''}`} style={{ transitionDelay: '0.1s' }}>
            {status === 'success' ? (
              <div className="text-center py-12">
                <span className="grid place-items-center w-16 h-16 rounded-full bg-accent-100 text-accent-600 mx-auto mb-5">
                  <CheckCircle2 className="w-8 h-8" />
                </span>
                <h3 className="text-2xl font-bold text-slate-900">Enquiry sent!</h3>
                <p className="mt-3 text-slate-500 max-w-sm mx-auto">
                  Thank you for reaching out to ZenFi Connect. Our team will contact you shortly.
                </p>
                <button onClick={() => setStatus('idle')} className="btn-secondary mt-6">
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="c-name" className="block text-sm font-semibold text-slate-700 mb-1.5">Name</label>
                    <input id="c-name" type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your full name" className="input-field" />
                  </div>
                  <div>
                    <label htmlFor="c-phone" className="block text-sm font-semibold text-slate-700 mb-1.5">Phone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input id="c-phone" type="tel" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="071 198 7683" className="input-field pl-11" />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="c-email" className="block text-sm font-semibold text-slate-700 mb-1.5">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input id="c-email" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" className="input-field pl-11" />
                  </div>
                </div>

                <div>
                  <label htmlFor="c-address" className="block text-sm font-semibold text-slate-700 mb-1.5">Address</label>
                  <div className="relative">
                    <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input id="c-address" type="text" value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} placeholder="Your street address" className="input-field pl-11" />
                  </div>
                </div>

                <div>
                  <label htmlFor="c-message" className="block text-sm font-semibold text-slate-700 mb-1.5">Message</label>
                  <textarea id="c-message" rows={4} required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell us what you need…" className="input-field resize-none" />
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-2 rounded-2xl bg-red-50 border border-red-100 px-4 py-3 text-sm text-red-700">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    {error}
                  </div>
                )}

                <button type="submit" disabled={status === 'loading'} className="btn-primary w-full py-3.5 disabled:opacity-60">
                  {status === 'loading' ? <><Loader2 className="w-5 h-5 animate-spin" /> Sending…</> : 'Send Enquiry'}
                </button>

                <a
                  href="/supply-installation-agreement.pdf"
                  download
                  className="btn-secondary w-full py-3.5"
                >
                  <FileDown className="w-5 h-5" />
                  Download Supply &amp; Installation Agreement (PDF)
                </a>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
