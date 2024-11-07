import React from "react";
import "./Other_Products_detail.css";
import otherdetails from "../../Images/otherdetails.png";
import man from "../../Images/man.png"; // Assuming the uploaded image is saved here

const OtherProductsDetails = () => {
  return (
    <div className="other-details-container">
      <h2 className="other-details-title">
        WhatsApp <span className="highlight">Automation</span>
      </h2>
      <p className="other-details-description">
        Functional and multipurpose software that boosts your sales
      </p>
      <img src={otherdetails} alt="" className="other-images" />

      <div className="benefits-section">
        <h2 className="benefits-title">
          How WhatsApp Automation benefits Non-Users:
        </h2>
        <ul className="benefits-list">
          <li className="benefit-item">
            <i className="fa-solid fa-clock benefit-icon"></i>
            <h3 className="benefit-title">Time Efficiency</h3>
            <p className="benefit-description">
              Automating repetitive tasks like sending updates, reminders, and
              responses saves significant time.
            </p>
          </li>
          <li className="benefit-item">
            <i className="fa-solid fa-users benefit-icon"></i>
            <h3 className="benefit-title">Increased Customer Engagement</h3>
            <p className="benefit-description">
              Automated messages ensure timely responses, leading to better
              customer satisfaction and retention.
            </p>
          </li>
          <li className="benefit-item">
            <i className="fa-solid fa-clock benefit-icon"></i>
            <h3 className="benefit-title">24/7 Availability</h3>
            <p className="benefit-description">
              Customers can get instant responses anytime, increasing the
              chances of converting leads into sales.
            </p>
          </li>
          <li className="benefit-item1">
            <i className="fa-solid fa-chart-pie benefit-icon"></i>
            <h3 className="benefit-title">Analytics and Insights</h3>
            <p className="benefit-description">
              Get valuable insights to improve customer interactions and
              optimize sales.
            </p>
          </li>
          <li className="benefit-item1">
            <i className="fa-solid fa-trophy benefit-icon"></i>
            <h3 className="benefit-title">Stay Ahead of Competitors</h3>
            <p className="benefit-description">
              Automated messages help maintain timely responses, leading to
              better customer satisfaction and retention.
            </p>
          </li>
        </ul>
      </div>

      {/* Why Choose Us Section */}
      <div className="why-choose-us-section">
        <div className="choose-us-content">
          <div className="choose-us-content-left">
            <h2 className="choose-us-title">
              Why <span className="highlight">Choose Us?</span>
            </h2>
            <div className="features-list">
              <div className="feature-item">
                <i className="fa-solid fa-gears feature-icon"></i>
                <div className="feature-text">
                  <h3 className="feature-title">Customised Solutions</h3>
                  <p className="feature-description">
                    Our company offers tailored automation solutions that align
                    with specific business needs, unlike generic tools from
                    competitors.
                  </p>
                </div>
              </div>
              <div className="feature-item">
                <i className="fa-solid fa-headset feature-icon"></i>
                <div className="feature-text">
                  <h3 className="feature-title">Excellent customer support</h3>
                  <p className="feature-description">
                    We highlight our commitment to providing exceptional
                    customer service and support.
                  </p>
                </div>
              </div>
              <div className="feature-item">
                <i className="fa-solid fa-desktop feature-icon"></i>
                <div className="feature-text">
                  <h3 className="feature-title">User-Friendly Interface</h3>
                  <p className="feature-description">
                    Emphasis on ease of use with minimal training required,
                    making it accessible even for those with limited tech
                    experience.
                  </p>
                </div>
              </div>
              <div className="feature-item">
                <i className="fa-solid fa-language feature-icon"></i>
                <div className="feature-text">
                  <h3 className="feature-title">Multi-language Workflows</h3>
                  <p className="feature-description">
                    Workflows which are available in any language.
                  </p>
                </div>
              </div>
              <div className="feature-item">
                <i className="fa-solid fa-dollar-sign feature-icon"></i>
                <div className="feature-text">
                  <h3 className="feature-title">Affordable Pricing</h3>
                  <p className="feature-description">
                    Flexible pricing that fits any budget, offering premium
                    features for both small businesses and large enterprises.
                    Get maximum value as you grow.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="choose-us-content-right">
            <img src={man} alt="Why Choose Us" className="why-choose-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherProductsDetails;
