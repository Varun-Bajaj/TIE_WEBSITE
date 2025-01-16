import React from "react";
import "./OurWork.css";
import our1 from "../../Images/ourwork1.png";
import our2 from "../../Images/ourwork2.png";
import our3 from "../../Images/ourwork3.png";
import our4 from "../../Images/ourwork4.png";
import our5 from "../../Images/ourwork5.png";
import our6 from "../../Images/ourwork6.png";
import our7 from "../../Images/ourwork7.png";

const OurWork = () => {
  return (
    <div>
      <div className="our-work-container">
        <h1 className="section-title">Our Work</h1>
        <div className="our-work-content">
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr,<br></br>{" "}
            sed diam nonumy eirmod tempor invidunt ut labore et <br></br>dolore
            magna aliquyam erat, sed diam voluptua.
          </p>
        </div>
      </div>

      {/* Image and text content */}
      <div className="our-work-image-content">
        <div className="left-content">
          <div className="image-item1">
            <img src={our1} alt="Group of friends" />
          </div>
          <div className="image-item2">
            <img src={our2} alt="Work setup" />
          </div>
          <div className="text-content1">
            <h2>Lorem ipsum dolor sit amet, consectetur</h2>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum. Convallis turpis erat tempus, viverra
              aliquet. Nullam viverra nam auctor sit ipsum malesuada a, duis
              volutpat. Convallis turpis erat tempus, viverra aliquet. Nullam
              viverra nam auctor sit ipsum malesuada a, duis volutpat.
            </p>
          </div>
        </div>
        <div className="right-content">
          <img src={our3} alt="Person with tattoo" />
        </div>
      </div>

      {/* New Section with Left Image and Right Content + Image */}
      <div className="new-section">
        <div className="new-left-content">
          <img src={our4} alt="New Left Side" className="new-left-image" />
        </div>
        <div className="new-right-content">
          <div className="new-text-content">
            <h2>New Content Heading</h2>
            <p>
              This is some additional content on the right side. It could
              include descriptions or details about the project, etc. Adjust
              this content based on your actual requirements.
            </p>
          </div>
          <div className="new-right-image">
            <img src={our5} alt="New Right Bottom" />
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default OurWork;
