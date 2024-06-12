import React from "react";
import "./VendorType.css";
import holderimg from "../../assets/holderimg.png";
import { useState } from "react";


import { Link } from "react-router-dom";

const VendorType = () => {

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

            <div className="welcometitle">What brings you to Spotstitch?</div>
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
                <span className="radiotext">I'm just starting to sell.</span>
                
            </label>
            <br />
            <label className="whatbringyouradiobox">
                <input className="whatbringyouradio"
                type="radio"
                value="I already have a business to sell products."
                checked={selectedOption === "I already have a business to sell products."}
                onChange={() => handleOptionSelected("I already have a business to sell products.")}
                />
                <span className="radiotext">I already have a business to sell products.</span>
            </label>
            <br />
            <label className="whatbringyouradiobox">
                <input className="whatbringyouradio"
                type="radio"
                value="I want to promote and expand my business through Spotstitch."
                checked={selectedOption === "I want to promote and expand my business through Spotstitch."}
                onChange={() => handleOptionSelected("I want to promote and expand my business through Spotstitch.")}
                />
                <span className="radiotext">I want to promote and expand my business through Spotstitch.</span>
                
            </label>

            {/* <br/><br/><br/> */}
            <div className="whitespace-bottom"></div>
            <div className="skipnextbox">
                

                <Link to='/businessmethod' className="linknextbutton"><button className="nextbutton">Next</button></Link>
                <Link to='/businessmethod' className="linkskipbutton"><button className="skipbutton">Skip</button></Link>
            </div>
            <div className="botspace"></div>
            
            
        </div>

        </div>
        </>
    )
}

export default VendorType