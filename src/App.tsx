import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { I18nProvider } from './i18n/i18n';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { HomePage } from './pages/HomePage';
import { ArmatureProducts } from './pages/ArmatureProducts';
import { BeamProducts } from './pages/BeamProducts';
import { SheetProducts } from './pages/SheetProducts';

function App() {
  return (
    <BrowserRouter>
      <I18nProvider>
        <div className="min-h-screen bg-slate-900">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products/armature" element={<ArmatureProducts />} />
              <Route path="/products/beam" element={<BeamProducts />} />
              <Route path="/products/sheet" element={<SheetProducts />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppButton />
        </div>
      </I18nProvider>
    </BrowserRouter>
  );
}

export default App;
