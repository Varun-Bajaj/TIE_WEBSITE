import React, { useState, useEffect, useMemo } from "react";
import "./Hero.css";
import img from "../../Images/img2.png";
import serviceImg1 from "../../Images/service1.png";
import serviceImg2 from "../../Images/service2.png";
import serviceImg3 from "../../Images/service3.png";
import cardImg1 from "../../Images/card1.png";
import cardImg2 from "../../Images/card1.png";
import cardImg3 from "../../Images/card1.png";
import clientImg1 from "../../Images/clientImg1.png";


const Hero = () => {
  const texts = useMemo(
    () => ["Digital Presence", "Custom Software", "Smart Automation"],
    []
  );
  const [currentText, setCurrentText] = useState(texts[0]);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prevText) => {
        const currentIndex = texts.indexOf(prevText);
        return texts[(currentIndex + 1) % texts.length];
      });
    }, 2000);
    return () => clearInterval(interval);
  }, [texts]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div className="hero-container">
        <div className="hero-text">
          <h1>
            Elevate your <br /> business with
          </h1>
          <h2 className="highlight">{currentText}</h2> {/* Dynamic text */}
          <p>Simpler - Smarter - Faster</p>
          <button className="hero-button">Let’s Shake Hands →</button>
        </div>
        <div className="hero-image-container">
          <img src={img} alt="Team Collaboration" className="hero-image" />
          <div className="hero-overlay">
            <div className="collaboration-item automation">
              <h3>AUTOMATION</h3>
              <p>
                <strong>Great results with AI</strong>
              </p>{" "}
              {/* Bold text */}
              <p>
                Enhance efficiency with AI-driven WhatsApp and e-commerce
                automation, enhancing customer experience and product posting
                effortlessly.
              </p>
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

      {showScrollTop && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          ☝️
        </button>
      )}
      
      <div className="services-section">
        <h2 className="services-title">
          <span className="services-gray">Our</span>{" "}
          <span className="services-orange">Services</span>
        </h2>
        <p className="services-subtitle">
          Not sure where to start? Check out how we can help your brand grow.
        </p>
        <div className="services-cards">
          <div className="service-card">
            <img
              src={serviceImg1}
              alt="WhatsApp Automation"
              className="service-img"
            />
            <h3>WhatsApp Automation</h3>
            <p>
              From streamlining tasks to creating personalized customer
              interactions, we help...
            </p>
            <a href="/otherproductsdetails">Learn More →</a>
          </div>
          <div className="service-card">
            <img
              src={serviceImg2}
              alt="Ecommerce Automation"
              className="service-img"
            />
            <h3>Ecommerce Automation</h3>
            <p>
              From inventory management to automated product posting, our
              tailored solutions simplify...
            </p>
            <a href="/otherproductsdetails">Learn More →</a>
          </div>
          <div className="service-card">
            <img
              src={serviceImg3}
              alt="Digital Transformation"
              className="service-img"
            />
            <h3>Digital Transformation</h3>
            <p>
              Whether enhancing the digital presence of established brands or
              guiding local business...
            </p>
            <a href="/otherproductsdetails">Learn More →</a>
          </div>
        </div>
      </div>
      <div className="our-work-section">
        <h2 className="our-work-title">
          <span className="our-work-blue">Our</span>{" "}
          <span className="our-work-orange">Work</span>
        </h2>
        <p className="our-work-subtitle">
          Driving digital growth for businesses with smart, tailored solutions.
        </p>
        <div className="our-work-cards">
          <div className="our-work-card">
            <img src={cardImg1} alt="Work Example 1" className="service-img" />
            <h3>Modernizing platforms to support a brand expansion</h3>
            <p>
              From streamlining tasks to creating personalized customer
              interactions, we help you make your operations smoother...
            </p>
            <a href=".">See More →</a>
          </div>
          <div className="our-work-card">
            <img src={cardImg2} alt="Work Example 2" className="service-img" />
            <h3>Modernizing platforms to support a brand expansion</h3>
            <p>
              From streamlining tasks to creating personalized customer
              interactions, we help you make your operations smoother...
            </p>
            <a href=".">See More →</a>
          </div>
          <div className="our-work-card">
            <img src={cardImg3} alt="Work Example 3" className="service-img" />
            <h3>Modernizing platforms to support a brand expansion</h3>
            <p>
              From streamlining tasks to creating personalized customer
              interactions, we help you make your operations smoother...
            </p>
            <a href=".">See More →</a>
          </div>
        </div>
      </div>
      <div className="happy-clients-section">
        <h2 className="happy-clients-title">
          <span className="happy-clients-gray">Hear from our</span>{" "}
          <span className="happy-clients-orange">Happy Clients</span>
        </h2>
        <p className="happy-clients-subtitle">
          Learn how our solutions helped our clients’ businesses
        </p>
        <div className="testimonial-section">
          <div className="testimonial-cards">
            <div className="testimonial-card">
              <div className="testimonial-quote-icon">“</div>
              <p className="testimonial-quote">
                Exceeded our expectations with innovative designs that brought
                our vision to life - a truly remarkable creative agency.
              </p>
              <div className="testimonial-card-info">
                <img
                  src={clientImg1}
                  alt="Client_Image 1"
                  className="testimonial-image"
                />
                <div>
                  <div className="testimonial-author">John Peter</div>
                  <div className="testimonial-title">
                    Co-Founder of ABC company
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-quote-icon">“</div>
              <p className="testimonial-quote">
                Exceeded our expectations with innovative designs that brought
                our vision to life - a truly remarkable creative agency.
              </p>
              <div className="testimonial-card-info">
                <img
                  src={clientImg1}
                  alt="Client_Image 2"
                  className="testimonial-image"
                />
                <div>
                  <div className="testimonial-author">John Peter</div>
                  <div className="testimonial-title">
                    Co-Founder of ABC company
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-quote-icon">“</div>
              <p className="testimonial-quote">
                Exceeded our expectations with innovative designs that brought
                our vision to life - a truly remarkable creative agency.
              </p>
              <div className="testimonial-card-info">
                <img
                  src={clientImg1}
                  alt="Client_Image 3"
                  className="testimonial-image"
                />
                <div>
                  <div className="testimonial-author">John Peter</div>
                  <div className="testimonial-title">
                    Co-Founder of ABC company
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-quote-icon">“</div>
              <p className="testimonial-quote">
                Exceeded our expectations with innovative designs that brought
                our vision to life - a truly remarkable creative agency.
              </p>
              <div className="testimonial-card-info">
                <img
                  src={clientImg1}
                  alt="Client_Image 4"
                  className="testimonial-image"
                />
                <div>
                  <div className="testimonial-author">John Peter</div>
                  <div className="testimonial-title">
                    Co-Founder of ABC company
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
