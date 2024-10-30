import React from 'react';
import './SaralTransport.css';

const SaralTransport = () => {
  return (
    <div className="saral-transport-container">
      {/* Title Section */}
      <div className="title-section">
        <h1 className="saral-title">Saral Transport</h1>
        <p className="saral-subtitle">Functional and multipurpose software that boosts your sales</p>
      </div>
      
      {/* Content Section */}
      <div className="content-section">
        <div className="text-content">
          <p className="latest-work">Latest Work</p>
          <h2 className="boost-title">
            We boost the <span>Growth</span> for startup to success stories
          </h2>
          <h1 className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </h1>
        </div>
        {/* Truck Image */}
        <div className="image-content">
          <img src="path-to-your-image.jpg" alt="Truck" className="truck-image" />
        </div>
      </div>
      
      {/* Features Section */}
      <div className="features-section">
        <div className="features-box">
          <h2 className="features-title">
            Powerful <span>Features</span>
          </h2>
          <p className="features-subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="features-grid">
            <div className="feature-item">
              <i className="icon"></i>
              <h3>Best in Class</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="feature-item">
              <i className="icon"></i>
              <h3>Authenticity</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="feature-item">
              <i className="icon"></i>
              <h3>Email Support</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="feature-item">
              <i className="icon"></i>
              <h3>Discounts Available</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="feature-item">
              <i className="icon"></i>
              <h3>Powerful Marketing</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="feature-item">
              <i className="icon"></i>
              <h3>Inventory Management</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Our Services Section */}
      <div className="services-background">
        {/* Smaller shifted div */}
        <div className="services-content">
          <h2 className="services-title">Our Services</h2>
          <p className="services-description">
            Explore our comprehensive range of transport services, including on-time delivery and cost-effective options.
          </p>
          <h3 className="specialized-title">Our specialized subcategories</h3>
          <p className="specialized-description">
            We ensure we cater to your cargo's unique requirements in Agri, Steel, Forest, Energy, Heavy Lift
          </p>

          {/* Images */}
          <div className="services-images">
            <img src="path-to-image1.jpg" alt="Containers" className="service-image-large" />
            <img src="path-to-image2.jpg" alt="Person with Boxes" className="service-image-small" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaralTransport;
