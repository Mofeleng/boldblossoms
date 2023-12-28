// Navbar.js

import React, { useState } from 'react';
import './Navigationbar.css';

const NavigationBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="navigation_bar">
      <div className="container">
      <nav className="navbar">
      <div className="logo">
        <h2 className="heading_smaller">Boldblossoms<span className="text_primary">.</span></h2>
      </div>
      <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
        <li><a href="/about">About</a></li>
        <li><a href="/partners">Partners</a></li>
        <li><a href="/events">Events</a></li>
        <li><a href="/contestanrs">Contestants</a></li>
        <li><a href="/results">Results</a></li>
        <li><a href="/apply" className={`${!isMobileMenuOpen ? 'btn btn_primary no_margin_right': ''}`}>Apply now</a></li>
        <li><a href="/login" className={`${!isMobileMenuOpen ? 'btn btn_accent no_margin_right': ''}`}>Log in</a></li>
      </ul>
      <div className="hamburger-menu" onClick={handleMobileMenuToggle}>
        <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
      </div>
    </nav>
      </div>
    </div>
    
  );
};

export default NavigationBar;
