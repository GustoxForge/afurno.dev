import React from 'react';
import './AboutSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faPython, faHtml5, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { faGem, faCloud } from '@fortawesome/free-solid-svg-icons';
import ProfileImage from '../images/professional_image.jpeg';

function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="about-image">
        {/* Utilizza l'immagine importata */}
        <img src={ProfileImage} alt="Augusto Furno" className="profile-image" />
      </div>
      <div className="about-content">
        <h2>Chi Sono</h2>
        <p><strong>Augusto Furno</strong> è un consulente tecnologico e sviluppatore <strong>Full Stack</strong> con una comprovata esperienza nella progettazione e sviluppo di applicazioni web scalabili, performanti e sicure.</p>
        <p>Focalizzato sul raggiungimento di risultati tangibili, Augusto offre soluzioni personalizzate che combinano innovazione e tecnologie all'avanguardia, risolvendo sfide digitali complesse con un approccio orientato al cliente.</p>
        <h3>Competenze Tecniche</h3>
        <div className="skills-container">
          <div className="skill-box">
            <FontAwesomeIcon icon={faReact} className="icon" />
            <div className="skill-details">
              <h4>React.js & Node.js</h4>
              <p>Sviluppo front-end e back-end per soluzioni web dinamiche e reattive.</p>
            </div>
          </div>
          <div className="skill-box">
            <FontAwesomeIcon icon={faGem} className="icon" />
            <div className="skill-details">
              <h4>Ruby on Rails</h4>
              <p>Piattaforme robuste, sicure e scalabili.</p>
            </div>
          </div>
          <div className="skill-box">
            <FontAwesomeIcon icon={faPython} className="icon" />
            <div className="skill-details">
              <h4>Python</h4>
              <p>Automazione e gestione avanzata dei dati.</p>
            </div>
          </div>
          <div className="skill-box">
            <FontAwesomeIcon icon={faHtml5} className="icon" />
            <div className="skill-details">
              <h4>HTML5, CSS3, JavaScript</h4>
              <p>Creazione di interfacce moderne e ottimizzate.</p>
            </div>
          </div>
          <div className="skill-box">
            <FontAwesomeIcon icon={faCloud} className="icon" />
            <div className="skill-details">
              <h4>DevOps & Cloud</h4>
              <p>Deployment affidabili e automazione del ciclo di vita del software.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
