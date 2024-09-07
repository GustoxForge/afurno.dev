import React, { useState } from 'react';
import './CostCalculatorSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faServer, faUserFriends, faShoppingCart, faBriefcase, faGamepad, faMobileAlt, faPaintBrush } from '@fortawesome/free-solid-svg-icons';
import { gsap } from 'gsap';

function CostCalculatorSection() {
  const [cost, setCost] = useState(1000);
  const [step, setStep] = useState(1);
  const [selectedServices, setSelectedServices] = useState({
    webDevelopment: false,
    eCommerce: false,
    management: false,
    backendArchitecture: false,
    personalizedSolutions: false,
  });

  const [serviceDetails, setServiceDetails] = useState({
    webFeatures: [],
    eCommerceFeatures: [],
    managementFeatures: [],
  });

  const handleServiceSelection = (service) => {
    setSelectedServices({ ...selectedServices, [service]: !selectedServices[service] });
    gsap.to(`#${service}`, { rotateY: 360, duration: 1, ease: 'elastic.out(1, 0.3)' });
  };

  const handleFeatureSelection = (service, feature) => {
    const updatedFeatures = serviceDetails[service].includes(feature)
      ? serviceDetails[service].filter((f) => f !== feature)
      : [...serviceDetails[service], feature];
    setServiceDetails({ ...serviceDetails, [service]: updatedFeatures });
  };

  const calculateCost = () => {
    let baseCost = 1000; // Costo iniziale di base

    // Aggiungere costi base per ogni servizio
    if (selectedServices.webDevelopment) baseCost += 1500;
    if (selectedServices.eCommerce) baseCost += 2000;
    if (selectedServices.management) baseCost += 2500;
    if (selectedServices.backendArchitecture) baseCost += 2000;
    if (selectedServices.personalizedSolutions) baseCost += 1000;

    // Aggiungere costi per le funzionalità specifiche
    baseCost += serviceDetails.webFeatures.length * 500; // Ogni funzionalità Web aggiunge €500
    baseCost += serviceDetails.eCommerceFeatures.length * 700; // Ogni funzionalità eCommerce aggiunge €700
    baseCost += serviceDetails.managementFeatures.length * 800; // Ogni funzionalità gestionale aggiunge €800

    setCost(baseCost);
  };

  return (
    <section id="calculator" className="cost-calculator">
      <h2>Calcola il Costo del Tuo Progetto</h2>
      <p>Seleziona i servizi che ti servono e ottieni una stima dettagliata del costo</p>

      {step === 1 && (
        <div className="service-step">
          <h3>Quali servizi ti servono?</h3>
          <div className="features-list">
            <button id="webDevelopment" className={`service-btn ${selectedServices.webDevelopment ? 'selected' : ''}`} onClick={() => handleServiceSelection('webDevelopment')}>
              <FontAwesomeIcon icon={faLaptopCode} /> Sito Web
            </button>
            <button id="eCommerce" className={`service-btn ${selectedServices.eCommerce ? 'selected' : ''}`} onClick={() => handleServiceSelection('eCommerce')}>
              <FontAwesomeIcon icon={faShoppingCart} /> E-commerce
            </button>
            <button id="management" className={`service-btn ${selectedServices.management ? 'selected' : ''}`} onClick={() => handleServiceSelection('management')}>
              <FontAwesomeIcon icon={faBriefcase} /> Gestionale
            </button>
            <button id="backendArchitecture" className={`service-btn ${selectedServices.backendArchitecture ? 'selected' : ''}`} onClick={() => handleServiceSelection('backendArchitecture')}>
              <FontAwesomeIcon icon={faServer} /> Architetture Backend
            </button>
            <button id="personalizedSolutions" className={`service-btn ${selectedServices.personalizedSolutions ? 'selected' : ''}`} onClick={() => handleServiceSelection('personalizedSolutions')}>
              <FontAwesomeIcon icon={faUserFriends} /> Soluzioni Personalizzate
            </button>
          </div>
          <button className="next-button" onClick={() => setStep(2)}>Prossimo</button>
        </div>
      )}

      {step === 2 && selectedServices.webDevelopment && (
        <div className="service-step">
          <h3>Funzionalità per il Sito Web</h3>
          <div className="features-list">
            <button className={`feature-btn ${serviceDetails.webFeatures.includes('Responsive Design') ? 'selected' : ''}`} onClick={() => handleFeatureSelection('webFeatures', 'Responsive Design')}>
              <FontAwesomeIcon icon={faMobileAlt} /> Responsive Design
            </button>
            <button className={`feature-btn ${serviceDetails.webFeatures.includes('SEO') ? 'selected' : ''}`} onClick={() => handleFeatureSelection('webFeatures', 'SEO')}>
              <FontAwesomeIcon icon={faLaptopCode} /> SEO
            </button>
            <button className={`feature-btn ${serviceDetails.webFeatures.includes('CMS') ? 'selected' : ''}`} onClick={() => handleFeatureSelection('webFeatures', 'CMS')}>
              <FontAwesomeIcon icon={faLaptopCode} /> CMS
            </button>
          </div>
        </div>
      )}

      {step === 2 && selectedServices.eCommerce && (
        <div className="service-step">
          <h3>Funzionalità per l'E-commerce</h3>
          <div className="features-list">
            <button className={`feature-btn ${serviceDetails.eCommerceFeatures.includes('Integrazione Pagamenti') ? 'selected' : ''}`} onClick={() => handleFeatureSelection('eCommerceFeatures', 'Integrazione Pagamenti')}>
              <FontAwesomeIcon icon={faShoppingCart} /> Integrazione Pagamenti
            </button>
            <button className={`feature-btn ${serviceDetails.eCommerceFeatures.includes('Carrello') ? 'selected' : ''}`} onClick={() => handleFeatureSelection('eCommerceFeatures', 'Carrello')}>
              <FontAwesomeIcon icon={faShoppingCart} /> Carrello
            </button>
            <button className={`feature-btn ${serviceDetails.eCommerceFeatures.includes('Gestione Inventario') ? 'selected' : ''}`} onClick={() => handleFeatureSelection('eCommerceFeatures', 'Gestione Inventario')}>
              <FontAwesomeIcon icon={faServer} /> Gestione Inventario
            </button>
          </div>
        </div>
      )}

      {step === 2 && selectedServices.management && (
        <div className="service-step">
          <h3>Funzionalità per il Gestionale</h3>
          <div className="features-list">
            <button className={`feature-btn ${serviceDetails.managementFeatures.includes('Gestione Utenti') ? 'selected' : ''}`} onClick={() => handleFeatureSelection('managementFeatures', 'Gestione Utenti')}>
              <FontAwesomeIcon icon={faUserFriends} /> Gestione Utenti
            </button>
            <button className={`feature-btn ${serviceDetails.managementFeatures.includes('Dashboard') ? 'selected' : ''}`} onClick={() => handleFeatureSelection('managementFeatures', 'Dashboard')}>
              <FontAwesomeIcon icon={faLaptopCode} /> Dashboard
            </button>
            <button className={`feature-btn ${serviceDetails.managementFeatures.includes('Reportistica') ? 'selected' : ''}`} onClick={() => handleFeatureSelection('managementFeatures', 'Reportistica')}>
              <FontAwesomeIcon icon={faBriefcase} /> Reportistica
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="cost-result">
          <p>Il costo stimato della tua app è €{cost.toFixed(2)}</p>
          <button className="reset-button" onClick={() => { setStep(1); setCost(1000); }}>Ricomincia</button>
          <button className="next-button" onClick={calculateCost}>Calcola Costo</button>
        </div>
      )}
    </section>
  );
}

export default CostCalculatorSection;
