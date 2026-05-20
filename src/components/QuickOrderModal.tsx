import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle } from 'lucide-react';

interface QuickOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
}

export function QuickOrderModal({ isOpen, onClose, productName }: QuickOrderModalProps) {
  const [phone, setPhone] = useState('');
  const [volume, setVolume] = useState('');
  const [city, setCity] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Быстрый заказ:\n` +
      `Товар: ${productName}\n` +
      `Телефон: ${phone}\n` +
      `Объём: ${volume}\n` +
      `Город доставки: ${city}`
    );
    window.open(`https://wa.me/77711372864?text=${text}`, '_blank');
    onClose();
    setPhone('');
    setVolume('');
    setCity('');
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
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-white rounded-2xl p-6 sm:p-8 w-full max-w-md shadow-2xl"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-xl font-bold text-slate-900 mb-1">Быстрый заказ</h3>
            <p className="text-sm text-slate-500 mb-5">
              Товар: <span className="font-medium text-slate-700">{productName}</span>
            </p>

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
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5" />
                Отправить в WhatsApp
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
