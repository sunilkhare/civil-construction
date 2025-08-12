import React from 'react';
import companyData from '../data/company.json';
import teamData from '../data/team.json';
import './About.css';

const About = () => {
  const { company } = companyData;

  return (
    <div className="about">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <h1>About {company.name}</h1>
          <p>Learn more about our company, mission, and the team behind our success</p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            <div className="about-content">
              <h2>Our Story</h2>
              <p>{company.description}</p>
              <p>
                Founded in {company.founded}, {company.name} has grown from a small local contractor 
                to a leading construction company serving clients across the region. Our commitment 
                to quality, safety, and customer satisfaction has earned us a reputation as one of 
                the most trusted names in civil construction.
              </p>
              <p>
                We specialize in a wide range of construction services, from residential homes to 
                large-scale commercial and infrastructure projects. Our team of experienced 
                professionals brings expertise, innovation, and dedication to every project we undertake.
              </p>
            </div>
            <div className="about-image">
              <img 
                src="https://images.unsplash.com/photo-1590725140246-20acdee442be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Construction team at work"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="section values-section">
        <div className="container">
          <div className="section-title">
            <h2>Our Mission & Values</h2>
            <p>The principles that guide everything we do</p>
          </div>
          <div className="grid grid-3">
            <div className="value-card card">
              <div className="value-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>
                To deliver exceptional construction services that exceed client expectations 
                while maintaining the highest standards of quality, safety, and professionalism.
              </p>
            </div>
            <div className="value-card card">
              <div className="value-icon">🏆</div>
              <h3>Quality Excellence</h3>
              <p>
                We are committed to delivering superior craftsmanship and using the finest 
                materials to ensure every project meets our exacting standards.
              </p>
            </div>
            <div className="value-card card">
              <div className="value-icon">🤝</div>
              <h3>Client Partnership</h3>
              <p>
                We believe in building lasting relationships with our clients through 
                transparent communication and collaborative project management.
              </p>
            </div>
            <div className="value-card card">
              <div className="value-icon">🛡️</div>
              <h3>Safety First</h3>
              <p>
                Safety is our top priority. We maintain rigorous safety protocols to 
                protect our workers, clients, and the public on every project.
              </p>
            </div>
            <div className="value-card card">
              <div className="value-icon">🌱</div>
              <h3>Sustainability</h3>
              <p>
                We integrate sustainable practices and eco-friendly materials to minimize 
                environmental impact and create lasting value.
              </p>
            </div>
            <div className="value-card card">
              <div className="value-icon">⚡</div>
              <h3>Innovation</h3>
              <p>
                We embrace new technologies and construction methods to improve efficiency, 
                quality, and cost-effectiveness for our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section team-section">
        <div className="container">
          <div className="section-title">
            <h2>Meet Our Team</h2>
            <p>The experienced professionals behind our success</p>
          </div>
          <div className="grid grid-4">
            {teamData.map((member) => (
              <div key={member.id} className="team-card card">
                <div className="team-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="team-content">
                  <h3>{member.name}</h3>
                  <h4>{member.position}</h4>
                  <p>{member.bio}</p>
                  <div className="team-details">
                    <p><strong>Education:</strong> {member.education}</p>
                    <p><strong>Certifications:</strong> {member.certifications.join(', ')}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <h3>{company.projectsCompleted}</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat-item">
              <h3>{company.employees}</h3>
              <p>Team Members</p>
            </div>
            <div className="stat-item">
              <h3>{new Date().getFullYear() - parseInt(company.founded)}+</h3>
              <p>Years of Experience</p>
            </div>
            <div className="stat-item">
              <h3>100%</h3>
              <p>Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
