import React from 'react';
import './ServicesSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faServer, faUserFriends } from '@fortawesome/free-solid-svg-icons';

function ServicesSection() {
  return (
    <section id="services" className="services-section">
      <h2>I Miei Servizi</h2>
      <div className="service-cards">
        <div className="card">
          <div className="icon-container">
            <FontAwesomeIcon icon={faLaptopCode} className="icon" />
          </div>
          <h3>Sviluppo Web</h3>
          <p>Crea siti web veloci, reattivi e sicuri con le tecnologie più avanzate per garantire alte performance.</p>
        </div>
        <div className="card">
          <div className="icon-container">
            <FontAwesomeIcon icon={faServer} className="icon" />
          </div>
          <h3>Architetture Backend</h3>
          <p>Progetto e sviluppo soluzioni backend scalabili e performanti utilizzando Node.js, Ruby on Rails e altro.</p>
        </div>
        <div className="card">
          <div className="icon-container">
            <FontAwesomeIcon icon={faUserFriends} className="icon" />
          </div>
          <h3>Soluzioni Personalizzate</h3>
          <p>Collaboro con i clienti per comprendere le loro esigenze e fornire soluzioni personalizzate di alta qualità.</p>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
