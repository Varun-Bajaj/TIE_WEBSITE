import React from "react";
import "./SaralTransport.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import truck from "../../Images/truck.png";
import largeImage from "../../Images/servicesbg.png"; // Replace with your large image path
import smallImage from "../../Images/containers.png"; // Replace with your small image path
import why from "../../Images/whychooseus.png";
import otherproducts from  "../../Images/otherproducts.png";


const SaralTransport = () => {
  return (
    <div className="saral-transport-container">
      {/* Title Section */}
      <div className="title-section">
        <h1 className="saral-title">Saral Transport</h1>
        <p className="saral-subtitle">
          Functional and multipurpose software that boosts your sales
        </p>
      </div>
      {/* Content Section */}
      <div className="content-section">
        <div className="text-content">
          <p className="latest-work">Latest Work</p>
          <h2 className="boost-title">
            We boost the <span>Growth</span> for startup to success stories
          </h2>
          <h1 className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </h1>
        </div>
        {/* Truck Image */}
        <div className="image-content">
          <img src={truck} alt="Truck" className="truck-image" />
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
              <i className="fas fa-star icon"></i>
              <h3>Best in Class</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="feature-item">
              <i className="fas fa-check icon"></i>
              <h3>Authenticity</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="feature-item">
              <i className="fas fa-envelope icon"></i>
              <h3>Email Support</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="feature-item">
              <i className="fas fa-tags icon"></i>
              <h3>Discounts Available</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="feature-item">
              <i className="fas fa-bullhorn icon"></i>
              <h3>Powerful Marketing</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="feature-item">
              <i className="fas fa-boxes icon"></i>
              <h3>Inventory Management</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </div>
      {/* Our Services Section */}
      <div className="services-bg">
        <img src={largeImage} alt="Large" className="large-image" />
      </div>
      <div className="services-content">
        <div className="content">
          <h2 className="services-title">Our Services</h2>
          <p className="services-description">
            Explore our comprehensive range of transport services, including
            on-time delivery and cost-effective options.
          </p>
          <h3 className="specialized-title">Our specialized subcategories</h3>
          <p className="specialized-description">
            We ensure we cater to your cargo's unique requirements in Agri,
            Steel, Forest, Energy, Heavy Lift.
          </p>
        </div>
        <div className="services-images">
          <img src={smallImage} alt="Small" className="small-image" />
        </div>
      </div>
      <div className="why-choose-us">
        <div className="choose-us-image">
          <div className="image-container">
            <img src={why} alt="Container Yard" className="large-image1" />
            <div className="caption">
              <p>Moving your products across borders</p>
            </div>
          </div>
        </div>
        <div className="choose-us-content">
          <h2 className="choose-us-title">Why Choose Us</h2>
          <p className="choose-us-description">
            Leverage agile frameworks to provide a robust synopsis for strategy.
            Foster collaborative thinking to further the overall value
            proposition.
          </p>
          <div className="feature">
            <i className="fas fa-box feature-icon"></i>
            <div className="feature-text">
              <h3>Safe Package</h3>
              <p>
                With a proven track record in port development, project cargo
                handling, and multimillion-dollar contracts, we bring
                unparalleled expertise to every shipment.
              </p>
            </div>
          </div>
          <div className="feature">
            <i className="fas fa-shield-alt feature-icon"></i>
            <div className="feature-text">
              <h3>Reliability</h3>
              <p>
                Your cargo's safety and timely delivery are our top priorities.
                Trust in our meticulous planning and execution.
              </p>
            </div>
          </div>
          <div className="feature">
            <i className="fas fa-globe feature-icon"></i>
            <div className="feature-text">
              <h3>Global Reach</h3>
              <p>
                Our discreet and professional approach empowers your business to
                thrive in the competitive global shipping market.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="other-products-section">
      <h2 className="other-products-title">See our <span className="orange-text">Other Products</span></h2>
        <div className="other-products-container">
          <div className="product-card">
            <div className="product-content">
              <h3 className="product-title">Saral eWay</h3>
              <p className="product-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </p>
              <a href="/saraleway" className="learn-more">
                Learn More →
              </a>
            </div>
            <img src={truck} alt="Saral eWay" className="product-image" />
          </div>
          <div className="product-card">
            <div className="product-content">
              <h3 className="product-title">Other Products</h3>
              <p className="product-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              </p>
              <a href="/otherproducts" className="learn-more">
                Learn More →
              </a>
            </div>
            <img
              src={otherproducts}
              alt="Other Products"
              className="product-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaralTransport;
