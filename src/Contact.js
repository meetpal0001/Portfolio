import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const SocialLink = ({ href, aria, icon: Icon }) => (
  <a href={href} aria-label={aria}>
    <Icon />
  </a>
);

const Contact = () => (
  <section id="contact" className="contact">
    <div className="container">
      <h2>Contact</h2>
      <p className="section-title">Get in Touch</p>
      <p>I'm always open to new opportunities and collaborations.</p>
      <div className="social-links">
        <SocialLink href="https://github.com/meetpal0001" aria="GitHub" icon={Github} />
        <SocialLink href="https://www.linkedin.com/in/meetpal-singh-774821241/" aria="LinkedIn" icon={Linkedin} />
        <SocialLink href="mailto:singhmeetpal738@gmail.com" aria="Email" icon={Mail} />
      </div>
    </div>
  </section>
);

export default Contact;