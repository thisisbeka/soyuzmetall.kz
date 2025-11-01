import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useI18n } from '../i18n/i18n';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { Send, CheckCircle, AlertCircle, X } from 'lucide-react';
import { InteractiveHoverButton } from './ui/interactive-hover-button';

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledMessage?: string;
}

export function ContactFormModal({ isOpen, onClose, prefilledMessage = '' }: ContactFormModalProps) {
  const { t } = useI18n();
  const prefersReducedMotion = useReducedMotion();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: prefilledMessage,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    setFormData(prev => ({ ...prev, message: prefilledMessage }));
  }, [prefilledMessage]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = t('contactForm.nameRequired');
    }
    if (!formData.phone.trim()) {
      newErrors.phone = t('contactForm.phoneRequired');
    }
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
      setTimeout(() => {
        setStatus('idle');
        onClose();
      }, 3000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleBackdropClick}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.95, y: 20 }}
            animate={prefersReducedMotion ? {} : { opacity: 1, scale: 1, y: 0 }}
            exit={prefersReducedMotion ? {} : { opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-2xl bg-slate-800 rounded-2xl p-6 sm:p-8 border border-slate-700 shadow-2xl max-h-[90vh] overflow-y-auto"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <h2 className="text-3xl font-bold text-white mb-6">
              {t('contactForm.title')}
            </h2>

            <AnimatePresence mode="wait">
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg flex items-center gap-3"
                >
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <p className="text-green-400">{t('contactForm.success')}</p>
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg flex items-center gap-3"
                >
                  <AlertCircle className="w-6 h-6 text-red-500" />
                  <p className="text-red-400">{t('contactForm.error')}</p>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="modal-name" className="block text-sm font-medium text-slate-300 mb-2">
                  {t('contactForm.name')}
                </label>
                <input
                  type="text"
                  id="modal-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-slate-900/60 backdrop-blur-sm border rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition-all ${
                    errors.name ? 'border-red-500 focus:ring-red-500' : 'border-slate-600 focus:ring-blue-500'
                  }`}
                />
                {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="modal-phone" className="block text-sm font-medium text-slate-300 mb-2">
                  {t('contactForm.phone')}
                </label>
                <input
                  type="tel"
                  id="modal-phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-slate-900/60 backdrop-blur-sm border rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition-all ${
                    errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-slate-600 focus:ring-blue-500'
                  }`}
                />
                {errors.phone && <p className="mt-1 text-sm text-red-400">{errors.phone}</p>}
              </div>

              <div>
                <label htmlFor="modal-email" className="block text-sm font-medium text-slate-300 mb-2">
                  {t('contactForm.email')}
                </label>
                <input
                  type="email"
                  id="modal-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-slate-900/60 backdrop-blur-sm border rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition-all ${
                    errors.email ? 'border-red-500 focus:ring-red-500' : 'border-slate-600 focus:ring-blue-500'
                  }`}
                />
                {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="modal-message" className="block text-sm font-medium text-slate-300 mb-2">
                  {t('contactForm.message')}
                </label>
                <textarea
                  id="modal-message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-900/60 backdrop-blur-sm border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                />
              </div>

              <motion.div
                whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
                whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
              >
                <InteractiveHoverButton
                  type="submit"
                  asButton={true}
                  text={t('contactForm.submit')}
                  icon={<Send className="w-5 h-5" />}
                  variant="primary"
                  className="shadow-lg shadow-blue-600/30 text-lg px-8 py-4"
                />
              </motion.div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
