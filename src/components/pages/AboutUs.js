import React from "react";
import "./AboutUs.css"; // Assuming your CSS file is still used
import img from "../../Images/aboutus1.png";

const AboutUs = () => {
  return (
    <div>
      <div className="about-us-container">
        <h1 className="section-title">About Us</h1>
        <div className="about-us-content">
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr,<br></br>{" "}
            sed diam nonumy eirmod tempor invidunt ut labore et <br></br>dolore
            magna aliquyam erat, sed diam voluptua.
          </p>
        </div>
      </div>
      <div className="cards-container">
        {/* First Card */}
        <div className="card">
          <h3 className="card-title">Our Goals</h3>
          <h2>To upscale your business to the next level</h2>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </p>
        </div>
        {/* Second Card */}
        <div className="card">
          <h3 className="card-title">Our Vision</h3>
          <h2>To provide solutions for growing companies</h2>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </p>
        </div>
      </div>
      {/* Testimonial Section */}
      <div className="testimonial-section">
        <div className="testimonial-container">
          <img src={img} alt="Testimonial" className="testimonial-image" />
          <div className="testimonial-content">
            <p className="testimonial-stats">
              81% say their teamwork is more efficient
            </p>
            <h2 className="testimonial-quote">
              “We manage too many people to constantly be searching for stuff.”
            </h2>
            <p className="testimonial-description">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum.
            </p>
            <p className="testimonial-author">
              <strong>John Mathews</strong>, Chief Officer, MI industries
            </p>
          </div>
        </div>
        {/* New Testimonial Section with Reversed Layout */}
        <div className="testimonial-container reverse-layout">
          <div className="testimonial-content">
            <p className="testimonial-stats">
              81% say their teamwork is more efficient
            </p>
            <h2 className="testimonial-quote">
              “We manage too many people to constantly be searching for stuff.”
            </h2>
            <p className="testimonial-description">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum.
            </p>
            <p className="testimonial-author">
              <strong>John Mathews</strong>, Chief Officer, MI industries
            </p>
          </div>
          <img src={img} alt="Testimonial" className="testimonial-image" />
        </div>
        <div className="testimonial-container">
          <img src={img} alt="Testimonial" className="testimonial-image" />
          <div className="testimonial-content">
            <p className="testimonial-stats">
              81% say their teamwork is more efficient
            </p>
            <h2 className="testimonial-quote">
              “We manage too many people to constantly be searching for stuff.”
            </h2>
            <p className="testimonial-description">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum.
            </p>
            <p className="testimonial-author">
              <strong>John Mathews</strong>, Chief Officer, MI industries
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
