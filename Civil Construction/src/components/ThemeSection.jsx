import React, { useState } from 'react';
import './ThemeSection.css';

const ThemeSection = () => {
  const [activeTab, setActiveTab] = useState('modern');

  const themes = {
    modern: {
      title: 'Modern Construction',
      description: 'Contemporary designs with cutting-edge technology and sustainable practices.',
      features: ['Smart Building Integration', 'Eco-Friendly Materials', 'Energy Efficient Design', 'Modern Architecture'],
      color: 'modern',
      icon: '🏗️'
    },
    traditional: {
      title: 'Traditional Craftsmanship',
      description: 'Time-tested construction methods with premium quality materials.',
      features: ['Classic Architecture', 'Premium Materials', 'Handcrafted Details', 'Heritage Preservation'],
      color: 'traditional',
      icon: '🏛️'
    },
    sustainable: {
      title: 'Sustainable Building',
      description: 'Environmentally conscious construction for a greener future.',
      features: ['Green Building Certification', 'Renewable Energy', 'Recycled Materials', 'Carbon Neutral'],
      color: 'sustainable',
      icon: '🌱'
    }
  };

  return (
    <section className="theme-section">
      <div className="theme-container">
        {/* Section Header */}
        <div className="theme-header">
          <h2 className="theme-title">
            Our Construction <span className="theme-highlight">Themes</span>
          </h2>
          <p className="theme-description">
            Choose from our diverse range of construction approaches, each tailored to meet different project requirements and aesthetic preferences.
          </p>
        </div>

        {/* Theme Tabs */}
        <div className="theme-tabs">
          {Object.entries(themes).map(([key, theme]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`theme-tab ${activeTab === key ? 'active' : ''} ${theme.color}`}
            >
              <span className="theme-tab-icon">{theme.icon}</span>
              {theme.title}
            </button>
          ))}
        </div>

        {/* Active Theme Content */}
        <div className="theme-content">
          {/* Theme Info */}
          <div className="theme-info">
            <div className={`theme-badge ${themes[activeTab].color}`}>
              <span className="theme-badge-icon">{themes[activeTab].icon}</span>
              {themes[activeTab].title}
            </div>
            
            <p className="theme-text">
              {themes[activeTab].description}
            </p>

            <div className="theme-features">
              <h3 className="features-title">Key Features:</h3>
              <div className="features-grid">
                {themes[activeTab].features.map((feature, index) => (
                  <div key={index} className={`feature-card ${themes[activeTab].color}`}>
                    <div className="feature-dot"></div>
                    <span className="feature-text">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="theme-actions">
              <button className={`theme-btn primary ${themes[activeTab].color}`}>
                Explore Projects
              </button>
              <button className="theme-btn secondary">
                Get Quote
              </button>
            </div>
          </div>

          {/* Theme Visual */}
          <div className="theme-visual">
            <div className={`theme-card ${themes[activeTab].color}`}>
              <div className="theme-overlay"></div>
              
              <div className="theme-card-content">
                <div className="theme-card-icon">{themes[activeTab].icon}</div>
                <div className="theme-card-info">
                  <h3 className="theme-card-title">{themes[activeTab].title}</h3>
                  <div className="theme-card-line"></div>
                </div>
              </div>

              <div className="theme-decorations">
                <div className="decoration decoration-1"></div>
                <div className="decoration decoration-2"></div>
                <div className="decoration decoration-3"></div>
              </div>
            </div>

            <div className="theme-stats">
              <div className="stat-item">
                <div className={`stat-number ${themes[activeTab].color}`}>50+</div>
                <div className="stat-label">Projects</div>
              </div>
              <div className="stat-item">
                <div className={`stat-number ${themes[activeTab].color}`}>98%</div>
                <div className="stat-label">Satisfaction</div>
              </div>
              <div className="stat-item">
                <div className={`stat-number ${themes[activeTab].color}`}>15+</div>
                <div className="stat-label">Years</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThemeSection;
