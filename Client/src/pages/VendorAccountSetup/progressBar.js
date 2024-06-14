import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import incompleteIcon from "../../assets/icons/incomplete.png";
import inProgressIcon from "../../assets/icons/in-progress.png";
import completeIcon from "../../assets/icons/complete.png";
import bar from "../../assets/icons/Bar.png";
import "./progressBar.css";

function ProgressBar() {
  const location = useLocation();
  const currentPath = location.pathname;
  const link = [
    { name: "BusinessPreference", path: "/BusinessPreferences" },
    { name: "Business Name", path: "/BusinessName" },
    { name: "Business Category", path: "/BusinessCategory" },
    { name: "Billing Information", path: "/BillingInformation" },
    { name: "Business Customization", path: "/BusinessCustomization" },
  ];

  return (
    <>
      <div className="progress-bar">
        <img src={bar} className="bar" alt="Progress bar" />
        {link.map((item, index) => (
          <div className="progress-bar-stage" key={index}>
            {currentPath === item.path ? (
              <img
                src={inProgressIcon}
                className="in-progress"
                alt="In progress icon"
              />
            ) : (
              <img
                src={completeIcon}
                className="complete"
                alt="Complete icon"
              />
            )}
            <p className="text">{item.name}</p>
          </div>
        ))}
      </div>
      <hr className="hr-line"></hr>
    </>
  );
}

export default ProgressBar;
