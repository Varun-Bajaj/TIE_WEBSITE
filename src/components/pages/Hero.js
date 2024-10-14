import React, { useState, useEffect, useMemo } from 'react';
import './Hero.css'; 
import img from '../../Images/img2.png';

const Hero = () => {
  // Memoize the texts array
  const texts = useMemo(() => ["Digital Presence", "Custom Software", "Smart Automation"], []);
  const [currentText, setCurrentText] = useState(texts[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText(prevText => {
        const currentIndex = texts.indexOf(prevText);
        return texts[(currentIndex + 1) % texts.length];
      });
    }, 2000); // Change text every 2 seconds
    return () => clearInterval(interval);
  }, [texts]); // No warning now

  return (
    <div className="hero-container">
      <div className="hero-text">
        <h1>Elevate your <br /> business with</h1>
        <h2 className="highlight">{currentText}</h2> {/* Dynamic text */}
        <p>Simpler - Smarter - Faster</p>
        <button className="hero-button">Let’s Shake Hands →</button>
      </div>
      
      <div className="hero-image-container">
        <img src={img} alt="Team Collaboration" className="hero-image" />
        
        <div className="hero-overlay">
          <div className="collaboration-item automation">
            <h3>AUTOMATION</h3>
            <p><strong>Great results with AI</strong></p> {/* Bold text */}
            <p>Enhance efficiency with AI-driven WhatsApp and e-commerce automation, enhancing customer experience and product posting effortlessly.</p>
          </div>
          <div className="collaboration-item collaboration">
            <h3>COLLABORATION</h3>
            <p>Coordinate effectively</p>
          </div>
          <div className="collaboration-item engagement">
            <h3>ENGAGEMENT</h3>
            <p>Work together</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
