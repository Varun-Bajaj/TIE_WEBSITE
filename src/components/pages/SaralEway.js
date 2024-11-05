import React from "react";
import "./SaralEway.css";
import eway from "../../Images/saraleway.png";
import google from "../../Images/Google.png";
import atlassian from "../../Images/Atlassian.png";
import amazon from "../../Images/Amazon.png";
import canon from "../../Images/Canon.png";
import walmart from "../../Images/Walmart.png";
import saral1 from "../../Images/saral1.png";
import saral2 from "../../Images/saral2.png";
import saral3 from "../../Images/saral3.png";
import truck from "../../Images/truck.png";
import otherproducts from  "../../Images/otherproducts.png";

const SaralEway = () => {
  return (
    <div className="saral-eway-container">
      <div className="title-section">
        <h1 className="saral-title">Saral Eway</h1>
        <p className="saral-subtitle">
          Functional and multipurpose software that boosts your sales
        </p>
      </div>
      <div className="image-section">
        <img src={eway} alt="Saral Eway" className="eway-image" />
      </div>
      <div className="trusted-by-section">
        <h2 className="trusted-title">Trusted by Industry Leaders</h2>
        <div className="logo-grid">
          <img src={google} alt="Google" className="trusted-logo" />
          <img src={atlassian} alt="Atlassian" className="trusted-logo" />
          <img src={amazon} alt="Amazon" className="trusted-logo" />
          <img src={canon} alt="Canon" className="trusted-logo" />
          <img src={walmart} alt="Walmart" className="trusted-logo" />
        </div>
      </div>
      <div className="platform-usage-section">
        <div className="platform-usage-content">
          <h2 className="platform-usage-title">
            More than 13,000 teams use our platform
          </h2>
          <p className="platform-usage-description">
            Boost revenue, gain insights that help you grow and scale faster.
          </p>
        </div>
        <div className="platform-rating-section">
          <div className="platform-rating-item">
            <div className="rating">4.9</div>
            <div className="source">
              <div className="stars">★★★★★</div>
              Capterra
            </div>
          </div>
          <div className="platform-rating-item">
            <div className="rating">4.8</div>
            <div className="source">
              <div className="stars">★★★★★</div>
              Trustpilot
            </div>
          </div>
        </div>
      </div>
      <div className="features-section">
        <div className="features-header">
          <h2 className="features-title">
            Explore our <span className="highlight">Amazing</span> features
          </h2>
          <p className="features-description">
            We are self-service data analytics software that lets you create
            visually appealing data visualizations and insightful dashboards in
            minutes.
          </p>
        </div>

        <div className="features-grid">
          <div className="feature-item">
            <div className="feature-icon">
              <i className="fas fa-chart-line"></i>
            </div>
            <div className="feature-content">
              <h3>Realtime analytics</h3>
              <p>Create reports with an easy to use drag-and-drop designer.</p>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-icon">
              <i className="fas fa-shield-alt"></i>
            </div>
            <div className="feature-content">
              <h3>Collaborate securely</h3>
              <p>Share/publish your reports with your colleagues.</p>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-icon">
              <i className="fas fa-chart-bar"></i>
            </div>
            <div className="feature-content">
              <h3>Embedded analytics</h3>
              <p>Get a powerful analytics tool in your own brand name.</p>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-icon">
              <i className="fas fa-brain"></i>
            </div>
            <div className="feature-content">
              <h3>Easy and Intuitive</h3>
              <p>Easily converse with your data using everyday language.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="testimonial-section">
        <div className="testimonial-container">
          <img src={saral1} alt="Teamwork" className="testimonial-image" />
          <div className="testimonial-content">
            <p className="testimonial-stats">
              81% say their teamwork is more efficient
            </p>
            <h2 className="testimonial-quote">
              We manage too many people to constantly be searching for stuff
            </h2>
            <p className="testimonial-description">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum.
            </p>
            <div className="testimonial-features">
              <div className="testimonial-feature">
                <span className="feature-icon1">
                  <i className="fas fa-tachometer-alt"></i>
                </span>
                <div className="feature-content">
                  <h3>Powerful dashboard</h3>
                  <p>
                    Combine multiple reports into a single beautiful dashboard.
                  </p>
                </div>
              </div>
              <div className="testimonial-feature">
                <span className="feature-icon1">
                  <i className="fas fa-sync-alt"></i>
                </span>
                <div className="feature-content">
                  <h3>Always in Sync</h3>
                  <p>Don't worry about the data, always be synchronized.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="testimonial-container">
          <div className="testimonial-content">
            <p className="testimonial-stats">
              81% say their teamwork is more efficient
            </p>
            <h2 className="testimonial-quote">
              We manage too many people to constantly be searching for stuff
            </h2>
            <p className="testimonial-description">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum.
            </p>
            <div className="testimonial-metrics">
              <div className="metric-item">
                <h3>25%</h3>
                <p>Increase in retention</p>
              </div>
              <div className="metric-item">
                <h3>1.7X</h3>
                <p>User base growth</p>
              </div>
            </div>
          </div>
          <img src={saral2} alt="Teamwork" className="testimonial-image" />
        </div>
        <div className="testimonial-container">
          <img src={saral3} alt="Teamwork" className="testimonial-image" />
          <div className="testimonial-content">
            <p className="testimonial-stats">
              81% say their teamwork is more efficient
            </p>
            <h2 className="testimonial-quote">
              We manage too many people to constantly be searching for stuff
            </h2>
            <p className="testimonial-description">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum.
            </p>
            <div class="testimonial-features">
              <ul>
                <li>Organize your data</li>
                <li>Work with any team</li>
                <li>Business analytics</li>
              </ul>
              <ul>
                <li>Always in sync</li>
                <li>Embedded analytics</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="other-products-section">
        <h2 className="other-products-title">
          See our <span className="orange-text">Other Products</span>
        </h2>
        <div className="other-products-container">
          <div className="product-card">
            <div className="product-content">
              <h3 className="product-title">Saral Transport</h3>
              <p className="product-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </p>
              <a href="/saraltransport" className="learn-more">
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

export default SaralEway;
