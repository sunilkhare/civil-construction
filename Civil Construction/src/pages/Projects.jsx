import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import projectsData from '../data/projects.json';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(projectsData);

  const categories = ['all', ...new Set(projectsData.map(project => project.category))];

  const handleFilter = (category) => {
    setFilter(category);
    if (category === 'all') {
      setFilteredProjects(projectsData);
    } else {
      setFilteredProjects(projectsData.filter(project => project.category === category));
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return '#27ae60';
      case 'in-progress': return '#f39c12';
      case 'planning': return '#3498db';
      default: return '#95a5a6';
    }
  };

  const formatStatus = (status) => {
    return status.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  return (
    <div className="projects">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <h1>Our Projects</h1>
          <p>Showcasing our expertise across various construction sectors</p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="filter-section">
        <div className="container">
          <div className="filter-buttons">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-btn ${filter === category ? 'active' : ''}`}
                onClick={() => handleFilter(category)}
              >
                {category === 'all' ? 'All Projects' : category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section">
        <div className="container">
          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <div key={project.id} className="project-detail-card card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <div className="project-category">{project.category}</div>
                    <div 
                      className="project-status"
                      style={{ backgroundColor: getStatusColor(project.status) }}
                    >
                      {formatStatus(project.status)}
                    </div>
                  </div>
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-meta">
                    <div className="meta-item">
                      <strong>Client:</strong> {project.client}
                    </div>
                    <div className="meta-item">
                      <strong>Area:</strong> {project.area}
                    </div>
                    <div className="meta-item">
                      <strong>Duration:</strong> {project.duration}
                    </div>
                    <div className="meta-item">
                      <strong>Completion:</strong> {new Date(project.completionDate).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="no-projects">
              <h3>No projects found</h3>
              <p>No projects match the selected filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* Project Stats */}
      <section className="stats-section">
        <div className="container">
          <div className="section-title">
            <h2>Project Statistics</h2>
            <p>Our track record speaks for itself</p>
          </div>
          <div className="project-stats">
            <div className="stat-card">
              <h3>{projectsData.length}</h3>
              <p>Total Projects</p>
            </div>
            <div className="stat-card">
              <h3>{projectsData.filter(p => p.status === 'completed').length}</h3>
              <p>Completed Projects</p>
            </div>
            <div className="stat-card">
              <h3>{projectsData.filter(p => p.status === 'in-progress').length}</h3>
              <p>Ongoing Projects</p>
            </div>
            <div className="stat-card">
              <h3>{new Set(projectsData.map(p => p.client)).size}</h3>
              <p>Satisfied Clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Project?</h2>
            <p>Let's discuss how we can bring your construction vision to life</p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary">Start Your Project</Link>
              <Link to="/services" className="btn">View Our Services</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
