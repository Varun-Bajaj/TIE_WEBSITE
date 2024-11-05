import React from "react";
import "./Other_Products.css";
import img1 from "../../Images/otherproducts1.png";
import op1 from "../../Images/op1.png";
import op2 from "../../Images/op2.png";
import op3 from  "../../Images/op3.png";


const ContactUs = () => {
  return (
    <div className="other-products-section">
      <h2 className="other-products-title">
        Automating and <span className="highlight">Digital Transformation</span>{" "}
        Services
      </h2>
      <p className="other-products-description">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
        diam nonumy eirmod
      </p>
      <img src={img1} alt="" className="other-images" />

      {/* WhatsApp Automation Section */}
        <div className="whatsapp-automation-section">
        <div className="whatsapp-image">
          <img
            src={op1}
            alt="WhatsApp Automation"
            className="whatsapp-preview-image"
          />
        </div>

        <div className="whatsapp-content">
        <i className="fab fa-whatsapp"></i>
          <h3 className="whatsapp-title">WhatsApp Automation</h3>
          <p className="whatsapp-description">
            From streamlining tasks to creating personalized customer
            interactions, we help you make your operations smoother and your
            customer relationships stronger with ease.
          </p>
          <a href="/otherproductsdetails" className="learn-more-link">
            Learn More →
          </a>
        </div>
      </div>
      <div className="whatsapp-automation-section">
        <div className="whatsapp-content">
        <i class="fa-solid fa-robot"></i>
          <h3 className="whatsapp-title">Ecommerce Automation</h3>
          <p className="whatsapp-description">
            From streamlining tasks to creating personalized customer
            interactions, we help you make your operations smoother and your
            customer relationships stronger with ease.
          </p>
          <a href="/otherproductsdetails" className="learn-more-link">
            Learn More →
          </a>
        </div>
        <div className="whatsapp-image">
          <img
            src={op2}
            alt="WhatsApp Automation"
            className="whatsapp-preview-image"
          />
        </div>
      </div>
      <div className="whatsapp-automation-section">
        <div className="whatsapp-image">
          <img
            src={op3}
            alt="WhatsApp Automation"
            className="whatsapp-preview-image"
          />
        </div>

        <div className="whatsapp-content">
        <i class="fa-solid fa-memory"></i>
          <h3 className="whatsapp-title">Digital Transformation</h3>
          <p className="whatsapp-description">
            From streamlining tasks to creating personalized customer
            interactions, we help you make your operations smoother and your
            customer relationships stronger with ease.
          </p>
          <a href="/otherproductsdetails" className="learn-more-link">
            Learn More →
          </a>
        </div>
      </div>
      <div className="whatsapp-automation-section">
        <div className="whatsapp-content">
        <i class="fa-solid fa-computer"></i>
          <h3 className="whatsapp-title">Website Development</h3>
          <p className="whatsapp-description">
            From streamlining tasks to creating personalized customer
            interactions, we help you make your operations smoother and your
            customer relationships stronger with ease.
          </p>
          <a href="/otherproductsdetails" className="learn-more-link">
            Learn More →
          </a>
        </div>
        <div className="whatsapp-image">
          <img
            src={op2}
            alt="WhatsApp Automation"
            className="whatsapp-preview-image"
          />
        </div>
      </div>
      <div className="whatsapp-automation-section">
        <div className="whatsapp-image">
          <img
            src={op3}
            alt="WhatsApp Automation"
            className="whatsapp-preview-image"
          />
        </div>

        <div className="whatsapp-content">
        <i class="fa-solid fa-computer"></i>
          <h3 className="whatsapp-title">Software Development</h3>
          <p className="whatsapp-description">
            From streamlining tasks to creating personalized customer
            interactions, we help you make your operations smoother and your
            customer relationships stronger with ease.
          </p>
          <a href="/otherproductsdetails" className="learn-more-link">
            Learn More →
          </a>
        </div>
      </div>
      <div className="whatsapp-automation-section">
        <div className="whatsapp-content">
        <i class="fa-solid fa-mobile-screen"></i>
          <h3 className="whatsapp-title">App Development</h3>
          <p className="whatsapp-description">
            From streamlining tasks to creating personalized customer
            interactions, we help you make your operations smoother and your
            customer relationships stronger with ease.
          </p>
          <a href="/otherproductsdetails" className="learn-more-link">
            Learn More →
          </a>
        </div>
        <div className="whatsapp-image">
          <img
            src={op2}
            alt="WhatsApp Automation"
            className="whatsapp-preview-image"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
