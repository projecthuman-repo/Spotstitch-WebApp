import React, { useEffect } from "react";
import "./AccountEmailVerificationA4.css";
import holderimg from "../../assets/holderimg.png";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const AccountEmailVerification = () => {
  const email = localStorage.email
  console.log("EMAIL", email)
  console.log("LOCAL STORAGE", localStorage)
    // Split the email address into local part and domain part
    const [localPart, domainPart] = email.split('@');
  
    // Partially hide the local part (first character visible, rest hidden)
    const hiddenLocalPart = localPart.charAt(0) + '*'.repeat(localPart.length - 1);
    
    // Return the partially hidden email address
    const emailCens = hiddenLocalPart + '@' + domainPart;

  return (
    <>
      <div className="boss">
        <div className="left">
          <img className="holderimg" src={holderimg} alt="holderimg" />
        </div>

        <div className="right-emailverification">
          <div className="verifyacctitle">Verify your account</div>
          <br />
          <div className="verifydescription">
            A confirmation email has been sent to {emailCens}, click
            the link to verify
          </div>
          <br />
          <div className="noemail">Didn't receive an email? Send again</div>
          {/* <div className="botspace"></div> */}
          <Link to="/profileimage" className="linknextbutton">
            <button className="nextbutton btn btn-primary">Next</button>
          </Link>

          <div className="botspace"></div>
        </div>
      </div>
    </>
  );
};

export default AccountEmailVerification;
