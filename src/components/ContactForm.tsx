import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useI18n } from '../i18n/i18n';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

export function ContactForm() {
  const { t } = useI18n();
  const prefersReducedMotion = useReducedMotion();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.includes('?')) {
        const params = new URLSearchParams(hash.split('?')[1]);
        const msg = params.get('message');
        if (msg) {
          setFormData(prev => ({ ...prev, message: decodeURIComponent(msg) }));
        }
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = t('contactForm.nameRequired');
    if (!formData.phone.trim()) newErrors.phone = t('contactForm.phoneRequired');
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t('contactForm.emailInvalid');
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const form = e.target as HTMLFormElement;
      await fetch('https://qp1-nova.ru/api/events/nova_site_market/smetall2024.amocrm.ru/8527d89d57/', {
        method: 'POST',
        body: new FormData(form)
      });
      setStatus('success');
      setFormData({ name: '', phone: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  return (
    <section id="contacts" className="relative py-16 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-slate-900 mb-10"
        >
          {t('contactForm.title')}
        </motion.h2>

        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm"
        >
          <AnimatePresence mode="wait">
            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3"
              >
                <CheckCircle className="w-5 h-5 text-green-600" />
                <p className="text-green-700">{t('contactForm.success')}</p>
              </motion.div>
            )}
            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3"
              >
                <AlertCircle className="w-5 h-5 text-red-600" />
                <p className="text-red-700">{t('contactForm.error')}</p>
              </motion.div>
            )}
          </AnimatePresence>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">
                {t('contactForm.name')}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-slate-50 border rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                  errors.name ? 'border-red-300 focus:ring-red-500' : 'border-slate-200 focus:ring-blue-500 focus:border-blue-500'
                }`}
              />
              {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1.5">
                {t('contactForm.phone')}
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-slate-50 border rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                  errors.phone ? 'border-red-300 focus:ring-red-500' : 'border-slate-200 focus:ring-blue-500 focus:border-blue-500'
                }`}
              />
              {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
                {t('contactForm.email')}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-slate-50 border rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                  errors.email ? 'border-red-300 focus:ring-red-500' : 'border-slate-200 focus:ring-blue-500 focus:border-blue-500'
                }`}
              />
              {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">
                {t('contactForm.message')}
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <Send className="w-5 h-5" />
              {t('contactForm.submit')}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
