import React from 'react';
import { Menu } from 'lucide-react';

const Header = ({ toggleMenu }) => (
  <header>
    <div className="container">
      <div className="header-content">
        <a href="#hero" className="logo">Meetpal Singh</a>
        <nav className="desktop-nav">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        <button
          className="mobile-menu-button"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <Menu />
        </button>
      </div>
    </div>
  </header>
);

export default Header;