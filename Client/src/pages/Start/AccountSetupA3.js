import React from "react";
import "./UserSignUpA2.css";
import HumanCityLogo from '../../assets/HumanCityLogo.png';
import sslogo from '../../assets/sslogo.png';


import { Link } from "react-router-dom";

const AccountSetup = () => {

    return (
        <>
        <div className="boss">
        <div className="left">
        <img className="humanlogo" src={HumanCityLogo}  alt="humanlogo"/>
        </div>


        <div className="right">
            <div className="topspace"></div>
            <img className="sslogo" src={sslogo}  alt="sslogo"/>
            <div className="signuptitle">Account Information</div>
            <div className="signupdescription">We're designing and creating an open ecosystem; so innovative ideas can turn into world changing action. Our main operating goals are: to address human inequality, remediate social injustice and bridge the lack of access to human needs globally.</div>
            
            <input className="email" type="text" placeholder="    Full Name" id="fname" name="fname"></input> <br/>
            <input className="email" type="text" placeholder="    User Name" id="username" name="username"></input><br/>
            <input className="email" type="tel" placeholder="    Phone Number" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required></input><br/>
            <input className="email" type="text" placeholder="    Country" id="Country" name="Country"></input><br/>
            <input className="email" type="text" placeholder="    State/Province" id="State/Province" name="State/Province"></input><br/>
            <br/>
            <input className="signin" type="submit" value="Get Started"></input>

            <br/><br/><br/>
            
            <div className="policy2"><span className="bold">Privacy Policy</span> and <span className="bold">Terms of Service</span> apply.</div>
          

            <div className="botspace"></div>
            
        </div>


        </div>
        </>
    )
}

export default AccountSetup