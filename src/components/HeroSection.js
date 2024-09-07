import React, { useEffect, useRef } from 'react';
import './HeroSection.css';
import { gsap } from 'gsap';
import * as THREE from 'three';
import afDevLogo from '../images/af_dev_logo.png'; // Percorso dell'immagine del logo

function HeroSection() {
  const heroTitle = useRef(null);
  const heroSubtitle = useRef(null);
  const heroCanvas = useRef(null);

  useEffect(() => {
    gsap.fromTo(heroTitle.current, { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1.5, ease: 'power3.out' });
    gsap.fromTo(heroSubtitle.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.5, delay: 0.3, ease: 'power3.out' });

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: heroCanvas.current });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00aaff, wireframe: true });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    const animate = function () {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      renderer.dispose();
    };
  }, []);

  return (
    <div className="hero-section">
      <canvas ref={heroCanvas} className="hero-canvas"></canvas>
      <div className="hero-overlay">
        <div className="hero-content">
          <img src={afDevLogo} alt="AF Dev Logo" className="hero-logo" />
          <h1 ref={heroTitle} className="hero-title">AF Dev</h1>
          <p ref={heroSubtitle} className="hero-subtitle">Le tue soluzioni tecnologiche personalizzate per un futuro di successo</p>
          <a href="#about" className="cta-button">Scopri di più</a>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
