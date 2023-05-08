import React from "react";
import "./VendorAccountSetup.css";
import holderimg from "../../assets/holderimg.png";
import { useState } from "react";


import { Link } from "react-router-dom";

const VendorAccountSetup = () => {

    return (
        <>
        <div className="boss">
        <div className="left">
        <img className="holderimg" src={holderimg}  alt="holderimg"/>
        </div>


        <div className="right">
            <div className="topspace"></div><div className="topspace"></div>

            <div className="welcometitle">Welcome Angela! Let's get your shop setup.</div>
            <div className="space1"/><br/>
            <div className="smalldescription">Lorem ipsum dolor sit amet consectetur. Tellus libero diam sed neque nam libero tellus nec faucibus.</div>
 
            <div className="space1"/><br/><br/><br/>
            <Link to='' className="linknextbutton"><button className="nextbutton">Next</button></Link>

            <div className="botspace"></div>
            
            
        </div>

        </div>
        </>
    )
}

export default VendorAccountSetup