import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

interface QuickOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
}

export function QuickOrderModal({ isOpen, onClose, productName }: QuickOrderModalProps) {
  const [phone, setPhone] = useState('');
  const [volume, setVolume] = useState('');
  const [city, setCity] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const formData = new FormData();
      formData.append('name', `Быстрый заказ: ${productName}`);
      formData.append('phone', phone);
      formData.append('message', `Товар: ${productName}\nОбъём: ${volume}\nГород доставки: ${city}`);

      await fetch('https://qp1-nova.ru/api/events/nova_site_market/smetall2024.amocrm.ru/8527d89d57/', {
        method: 'POST',
        body: formData,
      });

      setStatus('success');
      setPhone('');
      setVolume('');
      setCity('');
    } catch {
      setStatus('error');
    }
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => setStatus('idle'), 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={handleClose} />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-white rounded-2xl p-6 sm:p-8 w-full max-w-md shadow-2xl"
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {status === 'success' ? (
              <div className="text-center py-6">
                <CheckCircle className="w-14 h-14 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-2">Спасибо!</h3>
                <p className="text-slate-500">
                  Наш менеджер свяжется с вами в ближайшее время для обсуждения деталей.
                </p>
                <button
                  onClick={handleClose}
                  className="mt-6 px-6 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium rounded-xl transition-colors"
                >
                  Закрыть
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold text-slate-900 mb-1">Быстрый заказ</h3>
                <p className="text-sm text-slate-500 mb-5">
                  Товар: <span className="font-medium text-slate-700">{productName}</span>
                </p>

                {status === 'error' && (
                  <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
                    <p className="text-sm text-red-700">Произошла ошибка. Попробуйте ещё раз.</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Номер телефона</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+7 (___) ___-__-__"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Объём (тонн / метров)</label>
                    <input
                      type="text"
                      required
                      value={volume}
                      onChange={(e) => setVolume(e.target.value)}
                      placeholder="Например: 5 тонн"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Город доставки</label>
                    <input
                      type="text"
                      required
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="Например: Алматы"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Отправка...
                      </>
                    ) : (
                      'Заказать'
                    )}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
