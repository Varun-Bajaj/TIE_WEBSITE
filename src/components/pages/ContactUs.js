import React from "react";
import "./ContactUs.css";
import phoneIcon from '../../Images/callicon.png';
import emailIcon from '../../Images/emailicon.png';
import globeIcon from '../../Images/globeicon.png';

const ContactUs = () => {
  return (
    <div className="contact-us-section">
      <h2 className="contact-title">
        Get In <span className="highlight">Touch With Us</span>
      </h2>
      <p className="contact-description">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
      </p>

      <div className="message-section">
        <div className="form-container">
          <h2 className="form-title">Drop us a message</h2>
          <p className="form-subtitle">We will get back to you as soon as possible.</p>

          <form className="contact-form">
            <div className="form-row">
              <input type="text" placeholder="Full Name" className="input-field" />
              <input type="text" placeholder="Company Name" className="input-field" />
            </div>
            <input type="email" placeholder="Work Email" className="input-field" />
            <input type="text" placeholder="Subject" className="input-field" />
            <textarea placeholder="Message" className="input-field message-box"></textarea>
            <button type="submit" className="send-button">Send</button>
          </form>
        </div>

        <div className="contact-info">
          <p>
            <img src={phoneIcon} alt="Phone Icon" className="icon-image" />
            +91 987654321 <span className="info-text">Free support</span>
          </p>
          <p>
            <img src={emailIcon} alt="Email Icon" className="icon-image" />
            techiteasy@gmail.com <span className="info-text">Help Email support</span>
          </p>
          <p>
            <img src={globeIcon} alt="Globe Icon" className="icon-image" />
            www.techiteasy.com <span className="info-text">Sales Enquiry</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
