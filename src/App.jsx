import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar/Navbar';
import Hero from './sections/hero/Hero';
import Features from './sections/features/Features';
import Gallery from './sections/gallery/Gallery';
import Catalog from './sections/catalog/Catalog';
import Contact from './sections/contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';

// Componente ScrollToTop personalizado
const ScrollToTop = () => {
  const { pathname } = window.location;

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div style={{ paddingTop: 70 }}>
          <ScrollToTop />
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Hero />
              <Features />
              <Gallery />
              <Catalog />
              <Contact />
              <Footer />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </Router>
  )
}

export default App
