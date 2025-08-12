import React from 'react';
import { Link } from 'react-router-dom';
import companyData from '../data/company.json';
import './Footer.css';

const Footer = () => {
  const { company } = companyData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>{company.name}</h3>
            <p>{company.description}</p>
            <div className="social-links">
              <a href={company.socialMedia.facebook} target="_blank" rel="noopener noreferrer">
                📘 Facebook
              </a>
              <a href={company.socialMedia.linkedin} target="_blank" rel="noopener noreferrer">
                💼 LinkedIn
              </a>
              <a href={company.socialMedia.instagram} target="_blank" rel="noopener noreferrer">
                📷 Instagram
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-info">
              <p>📍 {company.address.street}, {company.address.city}, {company.address.state} {company.address.zip}</p>
              <p>📞 {company.phone}</p>
              <p>✉️ {company.email}</p>
            </div>
          </div>

          <div className="footer-section">
            <h4>Business Hours</h4>
            <div className="business-hours">
              <p>Mon-Fri: 8:00 AM - 6:00 PM</p>
              <p>Sat: 9:00 AM - 4:00 PM</p>
              <p>Sun: Emergency Only</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} {company.name}. All rights reserved.</p>
          <p>Licensed & Insured Construction Contractor</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
