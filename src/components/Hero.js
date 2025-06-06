import React, { useEffect, useState } from 'react';
import '../styles/Hero.css';
import waves from '../assets/background-waves.jpg';

export default function Hero() {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowText(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero" id="home" style={{ backgroundImage: `url(${waves})` }}>
      <div className="overlay"></div>
      {showText && (
        <div className="hero-text animate-fade-in">
          <h1>Hey there! <br /> Glad you’re here for my portfolio.</h1>
          <a href="#about" className="scroll-down">
            ⬇ Scroll Down
          </a>
        </div>
      )}
    </section>
  );
}