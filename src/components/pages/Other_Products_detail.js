import React from "react";
import "./Other_Products_detail.css";
import otherdetails from "../../Images/otherdetails.png";

const OtherProductsDetails = () => {
  return (
    <div className="other-details-container">
      <h2 className="other-details-title">
        WhatsApp <span className="highlight">Automation</span>
      </h2>
      <p className="other-details-description">
      Functional and multipurpose software that boost your sales
      </p>
      <img src={otherdetails} alt="" className="other-images"></img>
    </div>
  );
};

export default OtherProductsDetails;
