import React, { useState } from "react";
import ProgressBar from "./progressBar";
import "./BusinessPreferencesA.8.6.css";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
const BusinessPreferences = () => {
  const [language, setLanguage] = useState("English");
  const [country, setCountry] = useState("Canada");
  const [state, setState] = useState("Ontario");
  const [currency, setCurrency] = useState("$Canadian Dollars");
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/BusinessName");
  };
  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };
  const handleCountry = (event) => {
    setCountry(event.target.value);
  };
  const handleStateeChange = (event) => {
    setState(event.target.value);
  };
  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <>
      <div class="progress-bar-container">
        <ProgressBar />
      </div>
      <div className="main-form">
        <div className="heading">
          <h1 className="progress-page-title">Business Preference</h1>
          <p className="small-description">Tell us about your shop.</p>
        </div>

        {/* <div className="form-container"> */}
        <form className="form-container" onSubmit={handleSubmit}>
          <div className="frame-2610802">
            <label className="business-language">Business Language</label>
            {/* <div className="frame-2610798"> */}
            <Form.Select
              value={language}
              onChange={handleLanguageChange}
              className="selections"
            >
              <option value="English">English</option>
              <option value="French">French</option>
            </Form.Select>
          </div>
          <div className="frame-2610803">
            <label className="business-country">Business Country</label>
            <Form.Select
              value={country}
              onChange={handleCountry}
              className="selections"
            >
              <option value="Canada">Canada</option>
              <option value="United States">United States</option>
            </Form.Select>
          </div>
          <div className="frame-2610804">
            <label className="business-state-province">
              Business State/Province
            </label>
            <Form.Select
              value={state}
              onChange={handleStateeChange}
              className="selections"
            >
              <option value="">Select a state/province</option>
              <optgroup label="Canadian Provinces">
                <option value="Alberta">Alberta</option>
                <option value="British Columbia">British Columbia</option>
                <option value="Manitoba">Manitoba</option>
                <option value="New Brunswick">New Brunswick</option>
                <option value="Newfoundland and Labrador">
                  Newfoundland and Labrador
                </option>
                <option value="Nova Scotia">Nova Scotia</option>
                <option value="Ontario">Ontario</option>
                <option value="Prince Edward Island">
                  Prince Edward Island
                </option>
                <option value="Quebec">Quebec</option>
                <option value="Saskatchewan">Saskatchewan</option>
                <option value="Northwest Territories">
                  Northwest Territories
                </option>
                <option value="Nunavut">Nunavut</option>
                <option value="Yukon">Yukon</option>
              </optgroup>
              <optgroup label="US States">
                <option value="Alabama">Alabama</option>
                <option value="Alaska">Alaska</option>
                <option value="Arizona">Arizona</option>
                <option value="Arkansas">Arkansas</option>
                <option value="California">California</option>
                <option value="Colorado">Colorado</option>
                <option value="Connecticut">Connecticut</option>
                <option value="Delaware">Delaware</option>
                <option value="Florida">Florida</option>
                <option value="Georgia">Georgia</option>
                <option value="Hawaii">Hawaii</option>
                <option value="Idaho">Idaho</option>
                <option value="Illinois">Illinois</option>
                <option value="Indiana">Indiana</option>
                <option value="Iowa">Iowa</option>
                <option value="Kansas">Kansas</option>
                <option value="Kentucky">Kentucky</option>
                <option value="Louisiana">Louisiana</option>
                <option value="Maine">Maine</option>
                <option value="Maryland">Maryland</option>
                <option value="Massachusetts">Massachusetts</option>
                <option value="Michigan">Michigan</option>
                <option value="Minnesota">Minnesota</option>
                <option value="Mississippi">Mississippi</option>
                <option value="Missouri">Missouri</option>
                <option value="Montana">Montana</option>
                <option value="Nebraska">Nebraska</option>
                <option value="Nevada">Nevada</option>
                <option value="New Hampshire">New Hampshire</option>
                <option value="New Jersey">New Jersey</option>
                <option value="New Mexico">New Mexico</option>
                <option value="New York">New York</option>
                <option value="North Carolina">North Carolina</option>
                <option value="North Dakota">North Dakota</option>
                <option value="Ohio">Ohio</option>
                <option value="Oklahoma">Oklahoma</option>
                <option value="Oregon">Oregon</option>
                <option value="Pennsylvania">Pennsylvania</option>
                <option value="Rhode Island">Rhode Island</option>
                <option value="South Carolina">South Carolina</option>
                <option value="South Dakota">South Dakota</option>
                <option value="Tennessee">Tennessee</option>
                <option value="Texas">Texas</option>
                <option value="Utah">Utah</option>
                <option value="Vermont">Vermont</option>
                <option value="Virginia">Virginia</option>
                <option value="Washington">Washington</option>
                <option value="West Virginia">West Virginia</option>
                <option value="Wisconsin">Wisconsin</option>
                <option value="Wyoming">Wyoming</option>
              </optgroup>
            </Form.Select>
          </div>
          <div className="frame-2610805">
            <label className="business-currency">Business Currency</label>
            <Form.Select
              value={currency}
              onChange={handleCurrencyChange}
              className="selections"
            >
              <option value="$Canadian Dollars">$ Canadian Dollars</option>
              <option value="$US Dollars">$ US Dollars</option>
            </Form.Select>
          </div>
          <button className="save-continue-btn" onClick={handleSubmit}>
            {" "}
            Save & Continue
          </button>
        </form>
      </div>
      <hr className="bot-divider"></hr>
    </>
  );
};

export default BusinessPreferences;
