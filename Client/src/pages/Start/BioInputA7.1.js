import React from "react";
import "./BioInputA7.1.css";
import holderimg from "../../assets/holderimg.png";
import { useState } from "react";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const BioInput = () => {
  const [biotext, setBiotext] = useState("");

  const handleChange = (event) => {
    setBiotext(event.target.value);
  };

  return (
    <>
      <div className="boss">
        <div className="left">
          <img className="holderimg" src={holderimg} alt="holderimg" />
        </div>

        <div className="right">
          {/* <div className="topspace"></div>
          <div className="topspace"></div> */}

          <div className="welcometitle-bioinput">
            Welcome Angela! Let's get to know you.
          </div>
          {/* <div className="space1" /> */}
          <br />
          <div className="smalldescription">Add your bio</div>

          <input
            type="text"
            className="addbiobox"
            placeholder="Hey my name is..."
            value={biotext}
            onChange={handleChange}
          ></input>
          <div className="space1" />
          <Link to="/connectsocial" className="linknextbutton">
            <button className="nextbutton-bioinput">Next</button>
          </Link>

          {/* <div className="botspace"></div> */}
        </div>
      </div>
    </>
  );
};

export default BioInput;
