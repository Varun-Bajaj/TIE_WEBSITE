import React from "react";
import "./SaralEway.css";
import eway from "../../Images/saraleway.png";
import google from "../../Images/Google.png";
import atlassian from "../../Images/Atlassian.png";
import amazon from "../../Images/Amazon.png";
import canon from "../../Images/Canon.png";
import walmart from "../../Images/Walmart.png";

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
            <div className="feature-icon">⭕</div>
            <div className="feature-content">
              <h3>Realtime analytics</h3>
              <p>Create reports with an easy to use drag-and-drop designer.</p>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-icon">🛡️</div>
            <div className="feature-content">
              <h3>Collaborate securely</h3>
              <p>Share/publish your reports with your colleagues.</p>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-icon">📊</div>
            <div className="feature-content">
              <h3>Embedded analytics</h3>
              <p>Get a powerful analytics tool in your own brand name.</p>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-icon">🧠</div>
            <div className="feature-content">
              <h3>Easy and Intuitive</h3>
              <p>Easily converse with your data using everyday language.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaralEway;
