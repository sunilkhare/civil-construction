import React from 'react';
import { Link } from 'react-router-dom';
import servicesData from '../data/services.json';
import './Services.css';

const Services = () => {
  return (
    <div className="services">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <h1>Our Services</h1>
          <p>Comprehensive construction solutions for all your building needs</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            {servicesData.map((service) => (
              <div key={service.id} className="service-detail-card card">
                <div className="service-header">
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                </div>
                <p>{service.description}</p>
                <div className="service-features">
                  <h4>What We Offer:</h4>
                  <ul>
                    {service.features.map((feature, index) => (
                      <li key={index}>✓ {feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section process-section">
        <div className="container">
          <div className="section-title">
            <h2>Our Construction Process</h2>
            <p>A systematic approach to delivering exceptional results</p>
          </div>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Initial Consultation</h3>
                <p>We meet with you to understand your vision, requirements, and budget for the project.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Design & Planning</h3>
                <p>Our team creates detailed plans and designs, obtaining necessary permits and approvals.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Project Execution</h3>
                <p>We begin construction with regular updates and quality checks throughout the process.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Final Inspection</h3>
                <p>Thorough quality inspection and client walkthrough before project completion.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">5</div>
              <div className="step-content">
                <h3>Project Delivery</h3>
                <p>Final handover with documentation, warranties, and ongoing support as needed.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section why-choose-section">
        <div className="container">
          <div className="section-title">
            <h2>Why Choose Us</h2>
            <p>What sets us apart from other construction companies</p>
          </div>
          <div className="grid grid-3">
            <div className="feature-card card">
              <div className="feature-icon">🏆</div>
              <h3>Proven Experience</h3>
              <p>Over 15 years of successful project delivery across various construction sectors.</p>
            </div>
            <div className="feature-card card">
              <div className="feature-icon">💰</div>
              <h3>Competitive Pricing</h3>
              <p>Fair and transparent pricing with detailed estimates and no hidden costs.</p>
            </div>
            <div className="feature-card card">
              <div className="feature-icon">⏰</div>
              <h3>On-Time Delivery</h3>
              <p>Committed to meeting deadlines and delivering projects on schedule.</p>
            </div>
            <div className="feature-card card">
              <div className="feature-icon">🔧</div>
              <h3>Quality Materials</h3>
              <p>We use only the highest quality materials and latest construction techniques.</p>
            </div>
            <div className="feature-card card">
              <div className="feature-icon">👥</div>
              <h3>Expert Team</h3>
              <p>Skilled professionals with extensive experience and industry certifications.</p>
            </div>
            <div className="feature-card card">
              <div className="feature-icon">📞</div>
              <h3>24/7 Support</h3>
              <p>Round-the-clock customer support and emergency response services.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Get Started?</h2>
            <p>Contact us today to discuss your construction project and get a free estimate</p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary">Get Free Quote</Link>
              <Link to="/projects" className="btn">View Our Work</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
