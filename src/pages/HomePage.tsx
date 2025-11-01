import { AnimatedHero } from '../components/AnimatedHero';
import { Benefits } from '../components/Benefits';
import { Products } from '../components/Products';
import { Services } from '../components/Services';
import { StatsCounter } from '../components/StatsCounter';
import { DeliveryTimeline } from '../components/DeliveryTimeline';
import { PartnersMarquee } from '../components/PartnersMarquee';
import { CTASection } from '../components/CTASection';
import { ContactForm } from '../components/ContactForm';

export function HomePage() {
  return (
    <>
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
    </>
  );
}
