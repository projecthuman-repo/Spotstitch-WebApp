import React from "react";
import "./AccountSetupA3.css";

import sslogo from '../../assets/sslogo.png';
import holderimg from "../../assets/holderimg.png";

import { Link } from "react-router-dom";

const AccountSetup = () => {

    return (
        <>
        <div className="boss">
        <div className="left">
        <img className="holderimg" src={holderimg}  alt="holderimg"/>
        </div>


        <div className="right">
            <div className="topspace"></div>
            <img className="sslogo" src={sslogo}  alt="sslogo"/>
            <div className="signuptitle">Account Information</div>
            <div className="signupdescription">We're designing and creating an open ecosystem; so innovative ideas can turn into world changing action.</div>
            
            <input className="email" type="text" placeholder="    Full Name" id="fname" name="fname"></input> <br/>
            <input className="email" type="text" placeholder="    User Name" id="username" name="username"></input><br/>
            <input className="email" type="tel" placeholder="    Phone Number" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required></input><br/>
            <input className="email" type="text" placeholder="    Country" id="Country" name="Country"></input><br/>
            <input className="email" type="text" placeholder="    State/Province" id="State/Province" name="State/Province"></input><br/>
            <br/>
            <Link to='/emailverification'className="lacc"> <input className="signup" type="submit" value="Get Started"></input></Link> 

            <br/><br/><br/>
            
            <div className="policy2"><span className="bold">Privacy Policy</span> and <span className="bold">Terms of Service</span> apply.</div>
          

            <div className="botspace"></div>
            
        </div>


        </div>
        </>
    )
}

export default AccountSetup