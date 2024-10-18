import React from "react";
import "./Footer.css";
import logo from "../Images/logo.png";
import facebookIcon from "../Images/facebook.png";
import youtubeIcon from "../Images/youtube.png";
import whatsappIcon from "../Images/whatsapp.png";
import instagramIcon from "../Images/instagram.png";
import twitterIcon from "../Images/twitter.png";
import star from "../Images/star.png";
import hand from "../Images/hands.png";
import mark from "../Images/mark.png";
import submitIcon from "../Images/submiticon.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="collaboration-section">
        <h2 className="collaboration-title">
          Want to collaborate on something great?
        </h2>
        <h3 className="collaboration-subtitle">Let's Shake Hands</h3>
        <p className="collaboration-subtitle1">
          We'll use this email to reach out to you.
        </p>

        <div className="collaboration-input">
          <input type="email" placeholder="Enter your email address" />
          <button type="submit">Get Started</button>
        </div>

        <div className="collaboration-icons">
          <div className="collaboration-icon">
            <img src={star} alt="Average Ratings" />
            <div className="collaboration-icon-text">
              <div className="collaboration-icon-title">4.9/5</div>
              <div className="collaboration-icon-subtitle">Average Ratings</div>
            </div>
          </div>

          <div className="collaboration-icon">
            <img src={hand} alt="Successful Handshakes" />
            <div className="collaboration-icon-text">
              <div className="collaboration-icon-title">8+</div>
              <div className="collaboration-icon-subtitle">
                Successful Handshakes
              </div>
            </div>
          </div>

          <div className="collaboration-icon">
            <img src={mark} alt="Trusted By" />
            <div className="collaboration-icon-text">
              <div className="collaboration-icon-title">Trusted By</div>
              <div className="collaboration-icon-subtitle">
                Local Businesses
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-logo-container">
        <div class="footer-logo">
          <img src={logo} alt="Tech It Easy Logo" />
        </div>
        <h2 class="footer-company-name">Tech It Easy</h2>
        <p class="footer-tagline">Simpler - Smarter - Faster</p>
        <div class="footer-description">
          Empowering local businesses to embrace digital transformation with
          simple, smarter, and faster solutions. Tech It Easy is your partner
          for navigating the digital age with ease.
        </div>
        <div class="footer-social-media">
          <img src={facebookIcon} alt="Facebook" />
          <img src={youtubeIcon} alt="YouTube" />
          <img src={whatsappIcon} alt="WhatsApp" />
          <img src={instagramIcon} alt="Instagram" />
          <img src={twitterIcon} alt="Twitter" />
        </div>
      
    
      <div className="footer-nav">
          <div className="footer-nav-heading">Navigation</div>
          <a href=".">Home</a>
          <a href=".">Solutions</a>
          <a href=".">Our Work</a>
          <a href=".">Resources</a>
          <a href=".">About Us</a>
        </div>

        <div className="footer-contact">
          <div className="footer-nav-heading">Contact</div>
          <p>+91 9876 543210</p>
          <p>techiteasy@gmail.com</p>
          <p>www.techiteasy.com</p>
        </div>

        <div className="footer-newsletter">
          <div className="footer-nav-heading">Get the latest information</div>
          <div className="newsletter-form">
            <input type="email" placeholder="Email Address" />
            <button type="submit">
              <img src={submitIcon} alt="Submit" />
            </button>
          </div>
        </div>

        <div className="footer-legal">
          <p>&copy; 2024. All Rights Reserved.</p>
          <div>
            <a href=".">User Terms & Conditions</a> |{" "}
            <a href=".">Privacy Policy</a>
          </div>
        </div> 
      </div>
    </footer>
  );
};

export default Footer;
