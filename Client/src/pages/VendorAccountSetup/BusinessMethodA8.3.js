import React from "react";
import "./BusinessMethod.css";
import holderimg from "../../assets/holderimg.png";
import { useState } from "react";


import { Link } from "react-router-dom";

const BusinessMethod = () => {

    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionSelected = (option) => {
      setSelectedOption(option);
    };

    return (
        <>
        <div className="boss">
        <div className="left">
        <img className="holderimg" src={holderimg}  alt="holderimg"/>
        </div>


        <div className="right">
            <div className="topspace"></div><div className="topspace"></div>

            <div className="welcometitle">What is your business method?</div>
            <br/><br/><br/>
            <div className="smalldescription">Lorem ipsum dolor sit amet consectetur. Tellus libero diam sed neque nam libero tellus nec faucibus.</div>
            <br/>
            <label className="whatbringyouradiobox" >
                <input className="whatbringyouradio"
                type="radio"
                value="I'm just starting to sell."
                checked={selectedOption === "I'm just starting to sell."}
                onChange={() => handleOptionSelected("I'm just starting to sell.")}
                />
                <span className="radiotext">In person business only.</span>
                
            </label>
            <br />
            <label className="whatbringyouradiobox">
                <input className="whatbringyouradio"
                type="radio"
                value="I already have a business to sell products."
                checked={selectedOption === "I already have a business to sell products."}
                onChange={() => handleOptionSelected("I already have a business to sell products.")}
                />
                <span className="radiotext">Online business only.</span>
            </label>
            <br />
            <label className="whatbringyouradiobox">
                <input className="whatbringyouradio"
                type="radio"
                value="I want to promote and expand my business through Spotstitch."
                checked={selectedOption === "I want to promote and expand my business through Spotstitch."}
                onChange={() => handleOptionSelected("I want to promote and expand my business through Spotstitch.")}
                />
                <span className="radiotext">Both in person and online.</span>
                
            </label>

            <div className="whitespace-bottom"></div>
            <div className="skipnextbox">
                

                <Link to='/vendorgoal' className="linknextbutton"><button className="nextbutton">Next</button></Link>
                <Link to='/vendorgoal' className="linkskipbutton"><button className="skipbutton">Skip</button></Link>
            </div>
            <div className="botspace"></div>
            
            
        </div>

        </div>
        </>
    )
}

export default BusinessMethod