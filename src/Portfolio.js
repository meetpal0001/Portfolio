import React, { useState } from 'react';
import Header from './Header';
import MobileMenu from './MobileMenu';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import './Portfolio.css';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="portfolio">
      <Header toggleMenu={toggleMenu} />
      <MobileMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default Portfolio;