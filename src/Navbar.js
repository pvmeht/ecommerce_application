
import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brnd">
        <span className="navbar-logo">Shopify</span>
        <button className="navbar-toggle" onClick={toggleNavbar}>
          <span className="navbar-toggle-icon">&#9776;</span>
        </button>
      </div>
      <ul className={`navbar-menu ${isOpen ? 'open' : ''}`}>
        <li className="navbar-item">
          <a className="navbar-link" href="#home">
            Home
          </a>
        </li>
        <li className="navbar-item">
        <a className="navbar-link" href="#contact">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;