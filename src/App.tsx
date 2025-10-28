import { I18nProvider } from './i18n/i18n';
import { Header } from './components/Header';
import { AnimatedHero } from './components/AnimatedHero';
import { Benefits } from './components/Benefits';
import { Products } from './components/Products';
import { Services } from './components/Services';
import { StatsCounter } from './components/StatsCounter';
import { DeliveryTimeline } from './components/DeliveryTimeline';
import { PartnersMarquee } from './components/PartnersMarquee';
import { CTASection } from './components/CTASection';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

function App() {
  return (
    <I18nProvider>
      <div className="min-h-screen bg-slate-900">
        <Header />
        <main>
          <section id="home">
            <AnimatedHero />
          </section>
          <Benefits />
          <section id="products">
            <Products />
          </section>
          <section id="services">
            <Services />
          </section>
          <StatsCounter />
          <DeliveryTimeline />
          <PartnersMarquee />
          <CTASection />
          <section id="contacts">
            <ContactForm />
          </section>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </I18nProvider>
  );
}

export default App;
