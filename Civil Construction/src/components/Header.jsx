import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import companyData from '../data/company.json';
import ThemeToggle from './ThemeToggle';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { company } = companyData;

  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <div className="logo-container">
              <img 
                src="/images/logo.png" 
                alt={`${company.name} Logo`}
                className="logo-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <div className="logo-fallback" style={{display: 'none'}}>
                🏗️
              </div>
              <div className="logo-text">
                <h1>{company.name}</h1>
                <span>{company.tagline}</span>
              </div>
            </div>
          </Link>
          
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <ul>
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.path}
                    className={location.pathname === item.path ? 'active' : ''}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header-contact">
            <ThemeToggle />
            <a href={`tel:${company.phone}`} className="phone">
              📞 {company.phone}
            </a>
          </div>

          <button 
            className="menu-toggle"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
