import React from "react";
import "./OurWork.css"; // Ensure your CSS file contains the updated styles
import our1 from '../../Images/ourwork1.png';
import our2 from '../../Images/ourwork2.png';
import our3 from '../../Images/ourwork3.png';

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
      <div className="image-content">
        <div className="image-item1">
          <img src={our1} alt="Group of friends" />
        </div>
        <div className="image-item2">
          <img src={our2} alt="Work setup" />
        </div>
        <div className="image-item3">
          <img src={our3} alt="Person with tattoo" />
        </div>
        <div className="text-content">
          <h2>Lorem ipsum dolor sit amet, consectetur</h2>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum. Convallis turpis erat tempus, viverra aliquet. Nullam viverra
            nam auctor sit ipsum malesuada a, duis volutpat. Convallis turpis erat
            tempus, viverra aliquet. Nullam viverra nam auctor sit ipsum malesuada
            a, duis volutpat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurWork;
