import React from 'react';
import { X } from 'lucide-react';

const MobileMenu = ({ isOpen, toggleMenu }) => {
  if (!isOpen) return null;

  return (
    <div className="mobile-menu">
      <button className="close-menu-button" onClick={toggleMenu} aria-label="Close menu">
        <X />
      </button>
      <nav>
        <a href="#about" onClick={toggleMenu}>About</a>
        <a href="#skills" onClick={toggleMenu}>Skills</a>
        <a href="#projects" onClick={toggleMenu}>Projects</a>
        <a href="#contact" onClick={toggleMenu}>Contact</a>
      </nav>
    </div>
  );
};

export default MobileMenu;