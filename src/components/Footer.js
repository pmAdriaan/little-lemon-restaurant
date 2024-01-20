// Footer.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import FooterLogo from './FooterLogo';
import FooterNavigation from './FooterNavigation';
import FooterContact from './FooterContact';
import FooterSocialMedia from './FooterSocialMedia';

const Footer = () => (
  <Router>
    <footer className="footer">
      <FooterLogo />
      <FooterNavigation />
      <FooterContact />
      <FooterSocialMedia />
    </footer>
  </Router>
);

export default Footer;
