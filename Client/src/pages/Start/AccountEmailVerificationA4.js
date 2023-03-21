import React from "react";
import "./AccountEmailVerificationA4.css";
import HumanCityLogo from '../../assets/HumanCityLogo.png';



import { Link } from "react-router-dom";

const AccountEmailVerification = () => {

    return (
        <>
        <div className="boss">
        <div className="left">
        <img className="humanlogo" src={HumanCityLogo}  alt="humanlogo"/>
        </div>


        <div className="right">
            <div className="topspace"></div><div className="topspace"></div>

            <div className="verifyacctitle">Verify your account</div>
            <div className="verifydescription">A confirmation email has been sent to angela*****@gmail.com, click the link to verify</div>
            <div className="noemail">Didn't receive an email? Send again</div>
            <div className="botspace"></div>
            <Link to='/profileimage' className="linknextbutton"><button className="nextbutton">Next</button></Link>


            <div className="botspace"></div>
            
        </div>


        </div>
        </>
    )
}

export default AccountEmailVerification