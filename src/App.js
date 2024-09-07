import React from 'react';
import './App.css';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import CostCalculatorSection from './components/CostCalculatorSection';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <CostCalculatorSection />
      <ContactSection />
    </div>
  );
}

export default App;
