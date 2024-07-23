import React, { useState } from "react";
import "./AccountEmailVerificationA4.css";
import holderimg from "../../assets/holderimg.png";
import { Link } from "react-router-dom";
import { useSendVerificationEmailMutation } from '../../services/loginApi'; // Adjust the import path as necessary

const AccountEmailVerification = () => {
  const email = localStorage.email;
  const [resendStatus, setResendStatus] = useState("");
  const [sendVerificationEmail] = useSendVerificationEmailMutation();

  const [localPart, domainPart] = email.split('@');
  const hiddenLocalPart = localPart.charAt(0) + '*'.repeat(localPart.length - 1);
  const emailCens = hiddenLocalPart + '@' + domainPart;

  const handleResendEmail = async () => {
    try {
      setResendStatus("Sending...");
      await sendVerificationEmail(email).unwrap();
      setResendStatus("Email sent!");
    } catch (error) {
      console.error('Error sending verification email:', error);
      setResendStatus("Failed to send email.");
    }
  };

  return (
    <>
      <div className="boss">
        <div className="left">
          <img className="holderimg" src={holderimg} alt="holderimg" />
        </div>

        <div className="right">
          <div className="topspace"></div>
          <div className="topspace"></div>

          <div className="verifyacctitle">Verify your account</div>
          <br />
          <div className="verifydescription">
            A confirmation email has been sent to {emailCens}, click
            the link to verify
          </div>
          <br />
          <div className="noemail" onClick={handleResendEmail}>
            Didn't receive an email? Send again
          </div>
          <div className="resend-status">{resendStatus}</div>
          <div className="botspace"></div>
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
