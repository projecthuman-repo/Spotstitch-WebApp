import React from "react";
import "./VendorGoal.css";
import holderimg from "../../assets/holderimg.png";
import { useState } from "react";

import { Link } from "react-router-dom";

const VendorGoal = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionSelected = (option) => {
    const newSelectedOptions = [...selectedOptions];
    const optionIndex = newSelectedOptions.indexOf(option);
    if (optionIndex === -1) {
      // add option to the list
      newSelectedOptions.push(option);
    } else {
      // remove option from the list
      newSelectedOptions.splice(optionIndex, 1);
    }
    setSelectedOptions(newSelectedOptions);
  };

  return (
    <>
      <div className="boss">
        <div className="left">
          <img className="holderimg" src={holderimg} alt="holderimg" />
        </div>

        <div className="right">
          <div className="topspace"></div>

          <div className="welcometitle">What is your goal on Spotstitch?</div>
          <br />
          <br />
          <br />
          <div className="smalldescription">
            Lorem ipsum dolor sit amet consectetur. Tellus libero diam sed neque
            nam libero tellus nec faucibus.
          </div>
          <br />
          <div className="goaloptions">
            <label className="goalcheckbox">
              <input
                className="goalcheck"
                type="checkbox"
                value="Promote Online Business"
                checked={selectedOptions.includes("Promote Online Business")}
                onChange={() => handleOptionSelected("Promote Online Business")}
              />
              <span className="radiotext">Promote Online Business</span>
            </label>

            <label className="goalcheckbox">
              <input
                className="goalcheck"
                type="checkbox"
                value="Promote In Person Business"
                checked={selectedOptions.includes("Promote In Person Business")}
                onChange={() =>
                  handleOptionSelected("Promote In Person Business")
                }
              />
              <span className="radiotext">Promote In Person Business</span>
            </label>

            <label className="goalcheckbox">
              <input
                className="goalcheck"
                type="checkbox"
                value="Get Discovered"
                checked={selectedOptions.includes("Get Discovered")}
                onChange={() => handleOptionSelected("Get Discovered")}
              />
              <span className="radiotext">Get Discovered</span>
            </label>
            <label className="goalcheckbox">
              <input
                className="goalcheck"
                type="checkbox"
                value="Marketing To New Audiences"
                checked={selectedOptions.includes("Marketing To New Audiences")}
                onChange={() =>
                  handleOptionSelected("Marketing To New Audiences")
                }
              />
              <span className="radiotext">Marketing To New Audiences</span>
            </label>
            <label className="goalcheckbox">
              <input
                className="goalcheck"
                type="checkbox"
                value="Gain Local Business"
                checked={selectedOptions.includes("Gain Local Business")}
                onChange={() => handleOptionSelected("Gain Local Business")}
              />
              <span className="radiotext">Gain Local Business</span>
            </label>
            <label className="goalcheckbox">
              <input
                className="goalcheck"
                type="checkbox"
                value="Seek Network With Other Businesses"
                checked={selectedOptions.includes(
                  "Seek Network With Other Businesses"
                )}
                onChange={() =>
                  handleOptionSelected("Seek Network With Other Businesses")
                }
              />
              <span className="radiotext">
                Seek Network With Other Businesses
              </span>
            </label>
            <label className="goalcheckbox">
              <input
                className="goalcheck"
                type="checkbox"
                value="Promote Offers And Discounts"
                checked={selectedOptions.includes(
                  "Promote Offers And Discounts"
                )}
                onChange={() =>
                  handleOptionSelected("Promote Offers And Discounts")
                }
              />
              <span className="radiotext">Promote Offers And Discounts</span>
            </label>
            <label className="goalcheckbox">
              <input
                className="goalcheck"
                type="checkbox"
                value="Provide Schedules For Customers"
                checked={selectedOptions.includes(
                  "Provide Schedules For Customers"
                )}
                onChange={() =>
                  handleOptionSelected("Provide Schedules For Customers")
                }
              />
              <span className="radiotext">Provide Schedules For Customers</span>
            </label>
          </div>
          <div className="whitespaceBottom"></div>
          <div className="skipnextbox">
            <Link
              to="/vendorsetupcomplete"
              className="linknextbutton-vendortype"
            >
              <button className="nextbutton-vendortype">Next</button>
            </Link>
            <Link
              to="/vendorsetupcomplete"
              className="linkskipbutton-vendortype"
            >
              <button className="skipbutton-vendortype">Skip</button>
            </Link>
          </div>
          {/* <div className="botspace"></div> */}
        </div>
      </div>
    </>
  );
};

export default VendorGoal;
