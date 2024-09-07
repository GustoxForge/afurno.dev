import React, { useState, useEffect } from 'react';
import './ContactSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { gsap } from 'gsap';

function ContactSection() {
  const [modalVisible, setModalVisible] = useState(false);

  // Animazione GSAP per l'apertura della finestra modale
  useEffect(() => {
    if (modalVisible) {
      gsap.fromTo(".modal-content", { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" });
    }
  }, [modalVisible]);

  return (
    <section id="contact" className="contact-section">
      <h2>Contattami</h2>
      <p>Hai un progetto in mente? Costruiamo qualcosa di straordinario insieme.</p>
      <div className="button-container">
        <button className="cta-button" onClick={() => setModalVisible(true)}>
          <FontAwesomeIcon icon={faEnvelope} /> Mettiti in Contatto
        </button>
      </div>

      {/* Modale per il modulo di contatto */}
      {modalVisible && (
        <div className="modal" onClick={() => setModalVisible(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={() => setModalVisible(false)}>
              <FontAwesomeIcon icon={faTimesCircle} />
            </span>
            <h2>Contattami</h2>
            <form className="contact-form">
              <div className="form-group">
                <label>Nome</label>
                <input type="text" placeholder="Inserisci il tuo nome" required />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="Inserisci la tua email" required />
              </div>
              <div className="form-group">
                <label>Messaggio</label>
                <textarea placeholder="Scrivi il tuo messaggio" rows="5" required />
              </div>
              <button type="submit" className="cta-button">Invia Messaggio</button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}

export default ContactSection;
