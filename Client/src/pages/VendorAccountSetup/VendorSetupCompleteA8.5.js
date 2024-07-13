import React from "react";
import "./VendorGoal.css";
import holderimg from "../../assets/holderimg.png";
import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

const VendorSetupComplete = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="boss">
        <div className="left">
          <img className="holderimg" src={holderimg} alt="holderimg" />
        </div>

        <div className="right">
          <div className="topspace"></div>
          <div className="topspace"></div>
          <div className="welcometitle">
            Thank you! Continue to fill out your store information.
          </div>
          <br /> <div className="topspace"></div>
          <div className="smalldescription">
            Lorem ipsum dolor sit amet consectetur. Tellus libero diam sed neque
            nam libero tellus nec faucibus.
          </div>
          <br />
          <br /> <div className="topspace"></div>
          <br />
          <div className="topspace"></div>
          <br />
          <div className="topspace"></div>
          <br />
          <div
            className="linknextbutton-vendortype"
            style={{ display: "flex", alignItems: "center", margin: "auto" }}
          >
            <button
              className="nextbutton-vendortype"
              onClick={navigate("/start")}
            >
              Next
            </button>
          </div>
          <div style={{ marginBottom: "200px" }}></div>
        </div>
      </div>
    </>
  );
};

export default VendorSetupComplete;
