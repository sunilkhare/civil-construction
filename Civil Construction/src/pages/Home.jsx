import React from 'react';
import { Link } from 'react-router-dom';
import companyData from '../data/company.json';
import servicesData from '../data/services.json';
import projectsData from '../data/projects.json';
import testimonialsData from '../data/testimonials.json';
import workImagesData from '../data/workImages.json';
import ImageSlider from '../components/ImageSlider';
import './Home.css';

const Home = () => {
  const { company } = companyData;
  const featuredServices = servicesData.slice(0, 3);
  const featuredProjects = projectsData.filter(project => project.status === 'completed').slice(0, 3);
  const featuredTestimonials = testimonialsData.slice(0, 3);

  const handleImageError = (e) => {
    e.target.style.display = 'none';
    const placeholder = e.target.parentNode.querySelector('.project-placeholder');
    if (placeholder) {
      placeholder.style.display = 'flex';
    }
  };

  const getProjectIcon = (category) => {
    const icons = {
      'Commercial': '🏢',
      'Residential': '🏠',
      'Infrastructure': '🌉',
      'Industrial': '🏭',
      'Retail': '🛍️'
    };
    return icons[category] || '🏗️';
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay">
          <div className="container">
            <div className="hero-content">
              <h1>Building Excellence, Delivering Quality</h1>
              <p>
                Professional civil construction services with over {new Date().getFullYear() - parseInt(company.founded)} years 
                of experience in delivering high-quality construction projects.
              </p>
              <div className="hero-stats">
                <div className="stat">
                  <h3>{company.projectsCompleted}</h3>
                  <p>Projects Completed</p>
                </div>
                <div className="stat">
                  <h3>{company.employees}</h3>
                  <p>Team Members</p>
                </div>
                <div className="stat">
                  <h3>{new Date().getFullYear() - parseInt(company.founded)}+</h3>
                  <p>Years Experience</p>
                </div>
              </div>
              <div className="hero-actions">
                <Link to="/projects" className="btn btn-primary">View Our Work</Link>
                <Link to="/contact" className="btn">Get Quote</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Showcase Slider */}
      <section className="section work-showcase-section">
        <div className="container">
          <div className="section-title">
            <h2>Our Work Gallery</h2>
            <p>Explore our portfolio of successful construction projects and see our expertise in action</p>
          </div>
          <ImageSlider 
            images={workImagesData} 
            autoPlay={true} 
            autoPlayInterval={5000}
          />
        </div>
      </section>

      {/* Services Section */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Our Services</h2>
            <p>Comprehensive construction solutions for all your building needs</p>
          </div>
          <div className="grid grid-3">
            {featuredServices.map((service) => (
              <div key={service.id} className="service-card card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul>
                  {service.features.slice(0, 2).map((feature, index) => (
                    <li key={index}>✓ {feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="section-cta">
            <Link to="/services" className="btn">View All Services</Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section projects-section">
        <div className="container">
          <div className="section-title">
            <h2>Featured Projects</h2>
            <p>Showcasing our latest completed construction projects</p>
          </div>
          <div className="grid grid-3">
            {featuredProjects.map((project) => (
              <div key={project.id} className="project-card card">
                <div className="project-image">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    onError={handleImageError}
                  />
                  <div className="project-placeholder">
                    <div className="placeholder-content">
                      <span className="placeholder-icon">{getProjectIcon(project.category)}</span>
                      <span className="placeholder-text">{project.category}</span>
                    </div>
                  </div>
                  <div className="project-category">{project.category}</div>
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-details">
                    <span>📏 {project.area}</span>
                    <span>📅 {new Date(project.completionDate).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="section-cta">
            <Link to="/projects" className="btn">View All Projects</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section testimonials-section">
        <div className="container">
          <div className="section-title">
            <h2>What Our Clients Say</h2>
            <p>Trusted by clients across various construction projects</p>
          </div>
          <div className="grid grid-3">
            {featuredTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card card">
                <div className="rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i}>⭐</span>
                  ))}
                </div>
                <p>"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <h4>{testimonial.name}</h4>
                  <span>{testimonial.company}</span>
                  <small>{testimonial.project}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Construction Project?</h2>
            <p>Contact us today for a free consultation and project estimate</p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary">Get Free Quote</Link>
              <a href={`tel:${company.phone}`} className="btn">Call Now</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
