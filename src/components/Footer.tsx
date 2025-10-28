import { useI18n } from '../i18n/i18n';
import { MapPin } from 'lucide-react';
import { ResponsiveImage } from './ResponsiveImage';

export function Footer() {
  const { t } = useI18n();

  const contacts = [
    { city: 'almaty', phone: '+77711372864', name: 'Азат' },
    { city: 'almaty', phone: '+77082055875', name: 'Константин' },
    { city: 'shymkent', phone: '+77000260508', name: 'Нурали' }
  ];

  return (
    <footer className="bg-slate-950 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="mb-6">
              <ResponsiveImage src="/logo_soyuz_new.png" alt="Союз Металл - поставщик металлопроката в Казахстане" className="h-16 w-auto" height={64} />
            </div>
            <p className="text-sm leading-relaxed mb-6">{t('footer.aboutText')}</p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/soiuz_metall"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 hover:bg-pink-600 rounded-lg flex items-center justify-center transition-colors"
              >
                <ResponsiveImage src="/inst_icon.png" alt="Союз Металл в Instagram" className="w-5 h-5 filter brightness-0 invert" width={20} height={20} />
              </a>
              <a
                href={`https://wa.me/77711372864?text=${encodeURIComponent('Здравствуйте! Хочу получить информацию по товарам. Сәлеметсіз бе! Тауарлар туралы ақпарат алғым келеді.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 hover:bg-green-500 rounded-lg flex items-center justify-center transition-colors"
              >
                <ResponsiveImage src="/wp_icon.png" alt="Связаться с Союз Металл в WhatsApp" className="w-5 h-5 filter brightness-0 invert" width={20} height={20} />
              </a>
              <a
                href="mailto:smetall2024@mail.ru"
                className="w-10 h-10 bg-slate-800 hover:bg-blue-500 rounded-lg flex items-center justify-center transition-colors"
              >
                <ResponsiveImage src="/mail_icon.png" alt="Написать на email Союз Металл" className="w-5 h-5 filter brightness-0 invert" width={20} height={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-3">
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
            <div className="space-y-4">
              {contacts.map((contact, index) => (
                <div key={`${contact.city}-${index}`} className="text-sm">
                  <div className="flex items-center gap-2 text-blue-400 mb-1">
                    <MapPin className="w-4 h-4" />
                    <span className="font-medium">{t(`footer.cities.${contact.city}`)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href={`tel:${contact.phone}`}
                      className="hover:text-blue-400 transition-colors flex items-center gap-1"
                    >
                      <ResponsiveImage src="/phone_icon.png" alt="Позвонить менеджеру Союз Металл" className="w-4 h-4 filter brightness-0 invert opacity-60" width={16} height={16} />
                      <span>{contact.phone} ({contact.name})</span>
                    </a>
                    <a
                      href={`https://wa.me/${contact.phone.replace(/\+/g, '')}?text=${encodeURIComponent('Здравствуйте! Хочу получить информацию по товарам. Сәлеметсіз бе! Тауарлар туралы ақпарат алғым келеді.')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:scale-110 transition-transform"
                    >
                      <ResponsiveImage src="/wp_icon.png" alt="Написать менеджеру в WhatsApp" className="w-5 h-5 filter brightness-0 invert opacity-60 hover:opacity-100" width={20} height={20} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.legal')}</h3>
            <ul className="space-y-3 mb-6">
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
              <a
                href="mailto:smetall2024@mail.ru"
                className="flex items-center gap-2 mb-2 hover:text-blue-400 transition-colors"
              >
                <ResponsiveImage src="/mail_icon.png" alt="Отправить email" className="w-4 h-4 filter brightness-0 invert opacity-60" width={16} height={16} />
                <span>smetall2024@mail.ru</span>
              </a>
              <p className="text-xs">{t('footer.workTime')}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-sm space-y-2">
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
