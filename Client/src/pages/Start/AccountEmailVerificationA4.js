import React, { useEffect } from "react";
import "./AccountEmailVerificationA4.css";
import holderimg from "../../assets/holderimg.png";



import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const AccountEmailVerification = () => {

    const email = localStorage.email


    const censorEmail = (email) => {
        const [localPart, domain] = email.split('@');
        const censoredLocalPart = localPart.substring(0, 2) + '***' + localPart.substring(localPart.length - 2);

        return `${censoredLocalPart}@${domain}`;
    };

    dispatch(reset())
    localStorage.clear()

    return (
        <>
        <div className="boss">
        <div className="left">
        <img className="holderimg" src={holderimg}  alt="holderimg"/>
        </div>


        <div className="right">
            <div className="topspace"></div><div className="topspace"></div>

            <div className="verifyacctitle">Verify your account</div>
            <br/>
            <div className="verifydescription">A confirmation email has been sent to { censorEmail(email) } , click the link to verify</div>
            <br/>
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