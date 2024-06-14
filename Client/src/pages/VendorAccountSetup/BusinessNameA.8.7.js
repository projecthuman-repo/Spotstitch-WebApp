import React, { useState } from "react";
import ProgressBar from "./progressBar";
import "./BusinessNameA.8.7.css";
function BusinessName() {
  //back button
  //save and continue
  const [businessName, setBusinessName] = useState("");
  const handleSetBusinessName = (event) => setBusinessName(event.target.value);

  return (
    <>
      <ProgressBar />
      <div className="main-form">
        <div className="heading">
          <h1 className="heading-busiessname">Name Your Business</h1>
          <p className="small-description-busiessname">
            No rush! You may use draft names for now and changes it later.
          </p>
        </div>
        <div className="form-container">
          <input
            className="Text-input "
            placeholder="Enter your business name"
            onChange={handleSetBusinessName}
          ></input>
          <ul className="input-requirement">
            <li>Between 4-20 characters</li>
            <li>No special characters, or accented letters</li>
          </ul>
        </div>

        {/* <button className="back-button">Back</button> */}
        {/* <button className="save&continue">Save&Continue</button> */}
      </div>
    </>
  );
}

export default BusinessName;
