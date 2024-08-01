import React from "react";
import "./FindLayer.css";
import holderimg from "../../assets/holderimg.png";
import { useState } from "react";

import { Link } from "react-router-dom";

const FindLayer = () => {
  const [buttonClickedIndices, setButtonClickedIndices] = useState([]);

  const handleButtonClick = (index) => {
    const isIndexIncluded = buttonClickedIndices.includes(index);
    setButtonClickedIndices(
      isIndexIncluded
        ? buttonClickedIndices.filter((i) => i !== index)
        : [...buttonClickedIndices, index]
    );
  };
  return (
    <>
      <div className="boss">
        <div className="left">
          <img className="holderimg" src={holderimg} alt="holderimg" />
        </div>

        <div className="right">
          <div className="topspace"></div>
          <div className="topspace"></div>

          <div className="welcometitle">Find your layer at Spotstitch!</div>
          <div className="topspace"></div>
          <div className="smalldescription1">
            Layers are small communities with like-minded people. You can
            participate in group activities and projects here.
          </div>
          <div className="topspace"></div>
          <div className="layerjoinbox">
            {[...Array(5)].map((_, index) => (
              <button
                key={index}
                className={`layerjoin ${
                  buttonClickedIndices.includes(index)
                    ? "layerjoinbox-clicked"
                    : ""
                }`}
                onClick={() => handleButtonClick(index)}
              >
                <span className="textl">Layer Category</span>
                <span className="textr">
                  {`${
                    buttonClickedIndices.includes(index) ? "Joined!" : "Join"
                  }`}
                </span>
              </button>
            ))}
          </div>

          <div className="space1" />
          <div className="skipnextbox">
            <Link to="/vendoraccountsetup" className="linknextbutton-findlayer">
              <button className="nextbutton-findlayer">Next</button>
            </Link>
            <Link to="/vendoraccountsetup" className="linknextbutton-findlayer">
              <button className="skipbutton-findlayer">Skip</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default FindLayer;
