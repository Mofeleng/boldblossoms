import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
        <li><Link to="/blogs">Blogs</Link></li>
        <li><Link to="/partners">Partners</Link></li>
        <li><Link to="/pageants">Pageants</Link></li>
        <li><Link to="/contestants">Contestants</Link></li>
        <li><Link to="/results">Results</Link></li>
        <li><Link to="/apply/miss-bold-blossoms-24" className={`${!isMobileMenuOpen ? 'btn btn_primary no_margin_right': ''}`}>Apply now</Link></li>
        <li><Link to="/contact" className={`${!isMobileMenuOpen ? 'btn btn_accent no_margin_right': ''}`}>Contact us</Link></li>
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
