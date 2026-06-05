import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useI18n } from '../i18n/i18n';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { Truck, Award, TrendingDown, Users, Play, Pause } from 'lucide-react';

const icons = [Truck, Award, TrendingDown, Users];

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const VIDEO_URL = `${SUPABASE_URL}/storage/v1/object/public/videos/company-video.mp4`;

export function Benefits() {
  const { t } = useI18n();
  const prefersReducedMotion = useReducedMotion();
  const benefits = t('benefits.items');
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!videoReady) {
      fetch(`${SUPABASE_URL}/functions/v1/upload-video`, { method: 'POST' })
        .then(r => r.json())
        .then(() => setVideoReady(true))
        .catch(() => setVideoReady(true));
    }
  }, []);

  const toggleVideo = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  };

  return (
    <section className="relative py-14 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-slate-900 mb-10"
        >
          {t('benefits.title')}
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {benefits.map((benefit: any, index: number) => {
              const Icon = icons[index % icons.length];
              return (
                <motion.div
                  key={index}
                  initial={prefersReducedMotion ? {} : { opacity: 0, y: 15 }}
                  whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="bg-white rounded-xl p-5 border border-slate-200 hover:border-blue-200 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="text-base font-semibold text-slate-900 mb-1">{benefit.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, x: 20 }}
            whileInView={prefersReducedMotion ? {} : { opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onClick={toggleVideo}
            className="relative rounded-2xl overflow-hidden aspect-video bg-slate-900 border border-slate-200 cursor-pointer group"
          >
            <video
              ref={videoRef}
              src={VIDEO_URL}
              poster="/1.png"
              className="absolute inset-0 w-full h-full object-cover"
              playsInline
              preload="none"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            />
            <div className={`absolute inset-0 bg-slate-900/40 transition-opacity duration-300 ${isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`} />
            <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`}>
              <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                {isPlaying ? (
                  <Pause className="w-7 h-7 text-blue-600" />
                ) : (
                  <Play className="w-7 h-7 text-blue-600 ml-1" />
                )}
              </div>
            </div>
            <span className={`absolute bottom-4 left-4 text-white font-medium text-sm transition-opacity duration-300 ${isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`}>
              Видео о компании
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
