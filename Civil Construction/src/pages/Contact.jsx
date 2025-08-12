import React, { useState } from 'react';
import companyData from '../data/company.json';
import './Contact.css';

const Contact = () => {
  const { company } = companyData;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      projectType: '',
      message: ''
    });
  };

  return (
    <div className="contact">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Ready to start your construction project? Get in touch with our team today.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Information */}
            <div className="contact-info">
              <h2>Get in Touch</h2>
              <p>
                We're here to help with all your construction needs. Contact us today 
                for a free consultation and project estimate.
              </p>

              <div className="contact-methods">
                <div className="contact-method">
                  <div className="method-icon">📍</div>
                  <div className="method-content">
                    <h3>Visit Us</h3>
                    <p>
                      {company.address.street}<br />
                      {company.address.city}, {company.address.state} {company.address.zip}
                    </p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">📞</div>
                  <div className="method-content">
                    <h3>Call Us</h3>
                    <p>
                      <a href={`tel:${company.phone}`}>{company.phone}</a><br />
                      Monday - Friday: 8:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 4:00 PM
                    </p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">✉️</div>
                  <div className="method-content">
                    <h3>Email Us</h3>
                    <p>
                      <a href={`mailto:${company.email}`}>{company.email}</a><br />
                      We'll respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">🚨</div>
                  <div className="method-content">
                    <h3>Emergency</h3>
                    <p>
                      24/7 Emergency Services<br />
                      For urgent construction issues
                    </p>
                  </div>
                </div>
              </div>

              <div className="social-links">
                <h3>Follow Us</h3>
                <div className="social-buttons">
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
            </div>

            {/* Contact Form */}
            <div className="contact-form-container">
              <div className="contact-form card">
                <h2>Request a Quote</h2>
                <p>Fill out the form below and we'll get back to you with a detailed estimate.</p>
                
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="projectType">Project Type</label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                    >
                      <option value="">Select Project Type</option>
                      <option value="residential">Residential Construction</option>
                      <option value="commercial">Commercial Construction</option>
                      <option value="infrastructure">Infrastructure Development</option>
                      <option value="renovation">Renovation/Remodeling</option>
                      <option value="consultation">Consultation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Project Details *</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please describe your project, timeline, and any specific requirements..."
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <div className="section-title">
            <h2>Find Our Office</h2>
            <p>Visit us at our conveniently located office</p>
          </div>
          <div className="map-placeholder">
            <div className="map-content">
              <h3>📍 Office Location</h3>
              <p>
                {company.address.street}<br />
                {company.address.city}, {company.address.state} {company.address.zip}
              </p>
              <p>
                <strong>Business Hours:</strong><br />
                Monday - Friday: 8:00 AM - 6:00 PM<br />
                Saturday: 9:00 AM - 4:00 PM<br />
                Sunday: Emergency Only
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
