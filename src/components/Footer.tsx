import { useI18n } from '../i18n/i18n';
import { MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  const { t } = useI18n();

  const contacts = [
    { city: 'almaty', phone: '+77711372864', name: 'Азат' },
    { city: 'almaty', phone: '+77082055875', name: 'Константин' },
    { city: 'shymkent', phone: '+77000260508', name: 'Нурали' }
  ];

  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div>
            <div className="mb-5">
              <img src="/logo_soyuz_new.png" alt="Союз Металл" className="h-14 w-auto" />
            </div>
            <p className="text-sm leading-relaxed mb-5">{t('footer.aboutText')}</p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/soiuz_metall"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-slate-800 hover:bg-pink-600 rounded-lg flex items-center justify-center transition-colors"
              >
                <img src="/inst_icon.png" alt="Instagram" className="w-4 h-4 filter brightness-0 invert" />
              </a>
              <a
                href={`https://wa.me/77711372864?text=${encodeURIComponent('Здравствуйте!')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-slate-800 hover:bg-green-500 rounded-lg flex items-center justify-center transition-colors"
              >
                <img src="/wp_icon.png" alt="WhatsApp" className="w-4 h-4 filter brightness-0 invert" />
              </a>
              <a
                href="mailto:smetall2024@mail.ru"
                className="w-9 h-9 bg-slate-800 hover:bg-blue-500 rounded-lg flex items-center justify-center transition-colors"
              >
                <Mail className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2.5">
              {['products', 'services', 'delivery', 'about', 'contacts'].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} className="hover:text-blue-400 transition-colors text-sm">
                    {t(`nav.${item}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.contacts')}</h3>
            <div className="space-y-3">
              {contacts.map((contact, index) => (
                <div key={`${contact.city}-${index}`} className="text-sm">
                  <div className="flex items-center gap-2 text-blue-400 mb-0.5">
                    <MapPin className="w-3.5 h-3.5" />
                    <span className="font-medium">{t(`footer.cities.${contact.city}`)}</span>
                  </div>
                  <a
                    href={`tel:${contact.phone}`}
                    className="flex items-center gap-2 hover:text-blue-400 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>{contact.phone} ({contact.name})</span>
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.legal')}</h3>
            <ul className="space-y-2.5 mb-5">
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors text-sm">
                  {t('footer.privacy')}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors text-sm">
                  {t('footer.terms')}
                </a>
              </li>
            </ul>
            <div className="text-sm">
              <a href="mailto:smetall2024@mail.ru" className="flex items-center gap-2 mb-2 hover:text-blue-400 transition-colors">
                <Mail className="w-3.5 h-3.5" />
                <span>smetall2024@mail.ru</span>
              </a>
              <p className="text-xs">{t('footer.workTime')}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 text-center text-sm space-y-1.5">
          <p>{t('footer.copyright')}</p>
          <p className="text-xs">
            <a
              href="https://instagram.com/thisisbeka"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              Создатель сайта: Beka Dursunov @thisisbeka
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
