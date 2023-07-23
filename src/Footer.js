import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="foter">
      <div className="container footer-content">
        <p>&copy; 2018 - {new Date().getFullYear()} Shopify. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
