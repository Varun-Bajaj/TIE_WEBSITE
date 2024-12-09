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
            <div className="collaboration-images-star">
              <img src={star} alt="Average Ratings" />
            </div>
            {/* <img src={star} alt="Average Ratings" /> */}
            <div className="collaboration-icon-text">
              <div className="collaboration-icon-title">4.9/5</div>
              <div className="collaboration-icon-subtitle">Average Ratings</div>
            </div>
          </div>
          <div className="collaboration-icon">
            <div className="collaboration-images-handshake">
              <img src={hand} alt="Successful Handshakes" />
            </div>
            {/* <img src={hand} alt="Successful Handshakes" /> */}
            <div className="collaboration-icon-text">
              <div className="collaboration-icon-title">8+</div>
              <div className="collaboration-icon-subtitle">
                Successful Handshakes
              </div>
            </div>
          </div>
          <div className="collaboration-icon">
            {/* <img src={mark} alt="Trusted By" /> */}
            <div className="collaboration-images-trustedby">
              <img src={mark} alt="Trusted By" />
            </div>
            <div className="collaboration-icon-text">
              <div className="collaboration-icon-title">Trusted By</div>
              <div className="collaboration-icon-subtitle">
                Local Businesses
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sub_footer">
        <div className="footer-content">
          <div className="footer-left">
            <div className="footer-logo-container">
              <img src={logo} alt="Tech It Easy Logo" className="footer-logo" />
              <div className="footer-logo-text">
                <h2 className="footer-company-name">Tech It Easy</h2>
                <p className="footer-tagline">Simpler - Smarter - Faster</p>
              </div>
            </div>
            <p className="footer-description">
              Empowering local businesses to embrace digital transformation with
              simple, smarter, and faster solutions. Tech It Easy is your
              partner for navigating the digital age with ease.
            </p>
            <div className="footer-social-media">
              <img src={facebookIcon} alt="Facebook" />
              <img src={youtubeIcon} alt="YouTube" />
              <img src={whatsappIcon} alt="WhatsApp" />
              <img src={instagramIcon} alt="Instagram" />
              <img src={twitterIcon} alt="Twitter" />
            </div>
          </div>

          <div className="footer-nav">
            <h3 className="footer-nav-heading">Navigation</h3>
            <a href=".">Home</a>
            <a href="/saraleway">Solutions</a>
            <a href="/ourwork">Our Work</a>
            <a href="/resources">Resources</a>
            <a href="/aboutus">About Us</a>
          </div>

          <div className="footer-contact">
            <h3 className="footer-nav-heading">Contact</h3>
            {/* <p>+91 81417 82015</p> */}

            <a
              href="https://wa.me/918141782015?text=Hi%20there!"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>+91 81417 82015</p>

            </a>
          
            {/* <p>techiteasy@gmail.com</p> */}
            <a href="mailto:techiteasy@gmail.com">techiteasy11@gmail.com</a>
            <p>www.techiteasy.com</p>
          </div>

          <div className="footer-newsletter">
            <h3 className="footer-nav-heading">Get the latest information</h3>
            <div className="newsletter-form">
              <input type="email" placeholder="Email Address" />
              <button type="submit">
                <img src={submitIcon} alt="Submit" />
              </button>
            </div>
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
