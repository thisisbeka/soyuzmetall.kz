import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useI18n } from '../i18n/i18n';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { LanguageSwitcher } from './LanguageSwitcher';
import { MobileMenu } from './MobileMenu';
import { Menu } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

export function Header() {
  const { t } = useI18n();
  const prefersReducedMotion = useReducedMotion();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { key: 'home', href: '#home' },
    { key: 'products', href: '#products' },
    { key: 'services', href: '#services' },
    { key: 'about', href: '#about' },
    { key: 'contacts', href: '#contacts' },
  ];

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-slate-900/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <motion.a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center"
              whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
            >
              <motion.img
                src="/logo_soyuz_new.png"
                alt="Союз Металл - металлопрокат Казахстан"
                className="h-20 sm:h-24 w-auto"
                animate={prefersReducedMotion ? {} : {
                  scale: [1, 1.05, 1],
                  opacity: [0.9, 1, 0.9],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.a>

            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="relative text-slate-300 hover:text-white transition-colors group"
                >
                  {t(`nav.${item.key}`)}
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </a>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <LanguageSwitcher />
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden text-white p-2 hover:bg-slate-800 rounded-lg transition-colors"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
}
