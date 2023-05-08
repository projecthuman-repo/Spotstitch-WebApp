import React from "react";
import "./VendorGoal.css";
import holderimg from "../../assets/holderimg.png";
import { useState } from "react";

import { Link } from "react-router-dom";

const VendorSetupComplete = () => {


  return (
    <>
      <div className="boss">
        <div className="left">
          <img className="holderimg" src={holderimg} alt="holderimg" />
        </div>

        <div className="right">
          <div className="topspace"></div><div className="topspace"></div>

          <div className="welcometitle">Thanks you! Continue to fill out your store information.</div>
          <br />     <div className="topspace"></div>
          <br />     <div className="topspace"></div>
          <br />     <div className="topspace"></div>
          <div className="smalldescription">
            Lorem ipsum dolor sit amet consectetur. Tellus libero diam sed
            neque nam libero tellus nec faucibus.
          </div>
          <br />

            <br /><div className="topspace"></div>
            <br /><div className="topspace"></div>
            <br />
          

                <Link to="" className="linknextbutton">
                  <button className="nextbutton">Next</button>
                </Link>
          
            <div className="botspace"></div>
            </div>
      </div>
    </>
  );
};

export default VendorSetupComplete;
