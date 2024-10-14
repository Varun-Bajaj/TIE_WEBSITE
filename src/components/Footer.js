import React from 'react';
import './Footer.css';
import logo from '../Images/logo.png';
import facebookIcon from '../Images/facebook.png';
import youtubeIcon from '../Images/youtube.png';
import whatsappIcon from '../Images/whatsapp.png';
import instagramIcon from '../Images/instagram.png';
import twitterIcon from '../Images/twitter.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src={logo} alt="Tech It Easy Logo" />
        <h2 className="footer-company-name">Tech It Easy</h2>
        <p className="footer-tagline">Simpler - Smarter - Faster</p>
      </div>
      <div className="footer-description">
        Empowering local businesses to embrace digital transformation with simple, smarter, and faster solutions. Tech It Easy is your partner for navigating the digital age with ease.
      </div>
      <div className="footer-social-media">
        <img src={facebookIcon} alt="Facebook" />
        <img src={youtubeIcon} alt="YouTube" />
        <img src={whatsappIcon} alt="WhatsApp" />
        <img src={instagramIcon} alt="Instagram" />
        <img src={twitterIcon} alt="Twitter" />
      </div>
      <div className="footer-nav">
        <a href=".">Home</a>
        <a href=".">Solutions</a>
        <a href=".">Our Work</a>
        <a href=".">Resources</a>
        <a href=".">About Us</a>
      </div>
      <div className="footer-contact">
        <p>Phone: +91 9876 543210</p>
        <p>Email: techiteasy@gmail.com</p>
        <p>Website: www.techiteasy.com</p>
      </div>
      <div className="footer-newsletter">
        <input type="email" placeholder="Enter your email address" />
        <button type="submit">Subscribe</button>
      </div>
      <div className="footer-legal">
        <p>&copy; 2024. All Rights Reserved.</p>
        <a href=".">User Terms & Conditions</a>
        <a href=".">Privacy Policy</a>
      </div>
    </footer>
  );
};

export default Footer;
